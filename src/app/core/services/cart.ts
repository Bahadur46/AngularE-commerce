import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';
import { environment } from '@env/environment';
import { Cart as CartModel } from '@core/models';
import { Auth } from './auth';
import { Notify } from './notify';

const EMPTY: CartModel = {
  items: [], subtotal: 0, shipping: 0, tax: 0, discount: 0, total: 0, itemCount: 0
};

/**
 * The cart lives on the server so it survives a device change, but a signal
 * copy is kept here so the header badge updates without a round trip.
 */
@Injectable({ providedIn: 'root' })
export class Cart {
  private readonly http = inject(HttpClient);
  private readonly auth = inject(Auth);
  protected readonly notify = inject(Notify);
  private readonly base = `${environment.apiUrl}/cart`;

  readonly state = signal<CartModel>(EMPTY);
  readonly count = computed(() => this.state().itemCount);
  readonly isEmpty = computed(() => this.state().items.length === 0);
  readonly loading = signal(false);

  load(): void {
    if (!this.auth.isSignedIn()) { this.state.set(EMPTY); return; }
    this.loading.set(true);
    this.http.get<CartModel>(this.base).subscribe({
      next: cart => { this.state.set(cart); this.loading.set(false); },
      error: () => this.loading.set(false)
    });
  }

  add(productId: string, quantity = 1, variantValue?: string): void {
    this.addItem(productId, quantity, variantValue)
      .subscribe({
        next: () => this.notify.done('Added to cart'),
        error: () => void 0   // the error interceptor already surfaced the reason
      });
  }

  /**
   * Same call as add, but the caller decides what happens next. Order Now uses
   * it so the shopper only reaches checkout once the item is really in the cart.
   */
  addItem(productId: string, quantity = 1, variantValue?: string) {
    return this.http.post<CartModel>(`${this.base}/items`, { productId, quantity, variantValue })
      .pipe(tap(cart => this.state.set(cart)));
  }

  setQuantity(productId: string, quantity: number, variantValue?: string): void {
    this.http.put<CartModel>(`${this.base}/items`, { productId, quantity, variantValue })
      .subscribe({ next: cart => this.state.set(cart) });
  }

  remove(productId: string): void {
    this.http.delete<CartModel>(`${this.base}/items/${productId}`)
      .subscribe({ next: cart => { this.state.set(cart); this.notify.done('Removed from cart'); } });
  }

  clear(): void {
    this.http.delete<CartModel>(this.base).subscribe({ next: cart => this.state.set(cart) });
  }

  applyCoupon(code: string) {
    return this.http.post<CartModel>(`${this.base}/coupon/${code}`, {})
      .pipe(tap(cart => this.state.set(cart)));
  }

  reset(): void { this.state.set(EMPTY); }
}
