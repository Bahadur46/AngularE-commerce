import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Address, Order, OrderListItem, Paged } from '@core/models';

@Injectable({ providedIn: 'root' })
export class Orders {
  private readonly http = inject(HttpClient);
  private readonly base = `${environment.apiUrl}/orders`;

  checkout(shippingAddress: Address, paymentMethod: string, couponCode?: string, notes?: string): Observable<Order> {
    return this.http.post<Order>(`${this.base}/checkout`, { shippingAddress, paymentMethod, couponCode, notes });
  }

  mine(page = 1, pageSize = 10): Observable<Paged<OrderListItem>> {
    return this.http.get<Paged<OrderListItem>>(this.base, {
      params: new HttpParams().set('page', page).set('pageSize', pageSize)
    });
  }

  byId(id: string): Observable<Order> {
    return this.http.get<Order>(`${this.base}/${id}`);
  }

  /** Public lookup — works whether or not the visitor is signed in. */
  track(orderNumber: string): Observable<Order> {
    return this.http.get<Order>(`${this.base}/track/${orderNumber.trim().toUpperCase()}`);
  }

  cancel(id: string): Observable<Order> {
    return this.http.post<Order>(`${this.base}/${id}/cancel`, {});
  }
}
