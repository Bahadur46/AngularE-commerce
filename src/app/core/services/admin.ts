import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Category, DashboardStats, Order, OrderListItem, OrderStatus, Paged, Product, User } from '@core/models';

export interface ProductUpsert {
  name: string; sku: string; shortDescription: string; description: string;
  categoryId: string; brand: string; price: number; compareAtPrice?: number | null;
  stock: number; images: string[]; tags: string[];
  specs: Record<string, string>; isFeatured: boolean; isPublished: boolean;
}

@Injectable({ providedIn: 'root' })
export class Admin {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/admin`;

  dashboard(): Observable<DashboardStats> {
    return this.http.get<DashboardStats>(`${this.base}/dashboard`);
  }

  createProduct(body: ProductUpsert): Observable<Product> {
    return this.http.post<Product>(`${this.base}/products`, body);
  }

  updateProduct(id: string, body: ProductUpsert): Observable<Product> {
    return this.http.put<Product>(`${this.base}/products/${id}`, body);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/products/${id}`);
  }

  createCategory(body: Partial<Category>): Observable<Category> {
    return this.http.post<Category>(`${this.base}/categories`, body);
  }

  updateCategory(id: string, body: Partial<Category>): Observable<Category> {
    return this.http.put<Category>(`${this.base}/categories/${id}`, body);
  }

  deleteCategory(id: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/categories/${id}`);
  }

  orders(status?: OrderStatus, page = 1, pageSize = 20): Observable<Paged<OrderListItem>> {
    let params = new HttpParams().set('page', page).set('pageSize', pageSize);
    if (status) params = params.set('status', status);
    return this.http.get<Paged<OrderListItem>>(`${this.base}/orders`, { params });
  }

  order(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.base}/orders/${id}`);
  }

  updateOrderStatus(id: string, status: OrderStatus, message?: string, location?: string,
                    trackingNumber?: string, carrier?: string): Observable<Order> {
    return this.http.put<Order>(`${this.base}/orders/${id}/status`,
      { status, message, location, trackingNumber, carrier });
  }

  customers(search?: string, page = 1, pageSize = 20): Observable<Paged<User>> {
    let params = new HttpParams().set('page', page).set('pageSize', pageSize);
    if (search) params = params.set('search', search);
    return this.http.get<Paged<User>>(`${this.base}/customers`, { params });
  }

  setCustomerActive(id: string, isActive: boolean): Observable<void> {
    return this.http.put<void>(`${this.base}/customers/${id}/active`, {}, {
      params: new HttpParams().set('isActive', isActive)
    });
  }
}
