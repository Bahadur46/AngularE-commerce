import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';
import { Category, Facets, Paged, Product, ProductListItem, ProductQuery, Review } from '@core/models';

@Injectable({ providedIn: 'root' })
export class Catalog {
  private readonly http = inject(HttpClient);
  private readonly base = environment.apiUrl;

  search(query: ProductQuery): Observable<Paged<ProductListItem>> {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') {
        params = params.set(key, String(value));
      }
    }
    return this.http.get<Paged<ProductListItem>>(`${this.base}/products`, { params });
  }

  featured(take = 8): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(`${this.base}/products/featured`, {
      params: new HttpParams().set('take', take)
    });
  }

  facets(category?: string): Observable<Facets> {
    let params = new HttpParams();
    if (category) params = params.set('category', category);
    return this.http.get<Facets>(`${this.base}/products/facets`, { params });
  }

  suggest(term: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.base}/products/suggest`, {
      params: new HttpParams().set('q', term)
    });
  }

  bySlug(slug: string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/products/${slug}`);
  }

  related(productId: string): Observable<ProductListItem[]> {
    return this.http.get<ProductListItem[]>(`${this.base}/products/${productId}/related`);
  }

  reviews(productId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.base}/products/${productId}/reviews`);
  }

  addReview(productId: string, rating: number, title: string, body: string): Observable<Review> {
    return this.http.post<Review>(`${this.base}/products/${productId}/reviews`, { rating, title, body });
  }

  categories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.base}/categories`);
  }

  category(slug: string): Observable<Category> {
    return this.http.get<Category>(`${this.base}/categories/${slug}`);
  }
}
