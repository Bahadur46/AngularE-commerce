import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Cart } from '@core/services/cart';
import { Notify } from '@core/services/notify';
import { PricePipe } from '@core/services/currency';
import { EmptyState } from '@shared/components/empty-state';

@Component({
  selector: 'Kova-cart-page',
  imports: [
    RouterLink, FormsModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, PricePipe, EmptyState
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Cart</span>
          <h1>Your cart</h1>
        </div>
        @if (!cart.isEmpty()) {
          <button mat-button (click)="cart.clear()">Empty the cart</button>
        }
      </div>

      @if (cart.isEmpty()) {
        <Kova-empty-state
          icon="shopping_bag"
          heading="Your cart is empty"
          body="Add something from the catalogue and it will wait here across your devices."
          actionLabel="Browse the catalogue"
          actionLink="/shop" />
      } @else {
        <div class="layout">
          <ul class="lines">
            @for (item of cart.state().items; track item.productId + (item.variantValue ?? '')) {
              <li>
                <a class="thumb" [routerLink]="['/product', item.slug]">
                  <img [src]="item.imageUrl" [alt]="item.name" loading="lazy" />
                </a>

                <div class="info">
                  <a class="name" [routerLink]="['/product', item.slug]">{{ item.name }}</a>
                  @if (item.variantValue) { <small class="muted">{{ item.variantValue }}</small> }
                  <span class="price muted">{{ item.unitPrice |KovaPrice }} each</span>
                </div>

                <div class="qty">
                  <button mat-icon-button (click)="cart.setQuantity(item.productId, item.quantity - 1, item.variantValue)"
                          aria-label="Decrease quantity">
                    <mat-icon fontSet="material-symbols-outlined">remove</mat-icon>
                  </button>
                  <span class="numeric">{{ item.quantity }}</span>
                  <button mat-icon-button [disabled]="item.quantity >= item.stockAtAdd"
                          (click)="cart.setQuantity(item.productId, item.quantity + 1, item.variantValue)"
                          aria-label="Increase quantity">
                    <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
                  </button>
                </div>

                <strong class="price line-total">{{ item.lineTotal |KovaPrice }}</strong>

                <button mat-icon-button class="remove" (click)="cart.remove(item.productId)"
                        [attr.aria-label]="'Remove ' + item.name">
                  <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
                </button>
              </li>
            }
          </ul>

          <aside class="summary surface-card">
            <h3>Summary</h3>

            <dl>
              <div><dt>Subtotal</dt><dd class="numeric">{{ cart.state().subtotal |KovaPrice }}</dd></div>
              @if (cart.state().discount > 0) {
                <div class="saved"><dt>Discount</dt><dd class="numeric">−{{ cart.state().discount |KovaPrice }}</dd></div>
              }
              <div>
                <dt>Shipping</dt>
                <dd class="numeric">{{ cart.state().shipping === 0 ? 'Free' : (cart.state().shipping |KovaPrice) }}</dd>
              </div>
              <div><dt>Tax (18%)</dt><dd class="numeric">{{ cart.state().tax |KovaPrice }}</dd></div>
            </dl>

            <div class="total">
              <span>Total</span>
              <strong class="price">{{ cart.state().total |KovaPrice }}</strong>
            </div>

            <form class="coupon" (submit)="applyCoupon($event)">
              <mat-form-field>
                <mat-label>Discount code</mat-label>
                <input matInput [(ngModel)]="code" name="code" placeholder="WELCOME10" />
              </mat-form-field>
              <button mat-stroked-button type="submit">Apply</button>
            </form>

            @if (cart.state().couponCode) {
              <p class="applied numeric">{{ cart.state().couponCode }} applied</p>
            }

            <a mat-flat-button class="checkout" routerLink="/checkout">Checkout</a>
            <a class="keep muted" routerLink="/shop">Keep shopping</a>
          </aside>
        </div>
      }
    </div>
  `,
  styles: `
    .layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start; }

    .lines { list-style: none; margin: 0; padding: 0; }
    .lines li {
      display: grid; align-items: center; gap: 16px;
      grid-template-columns: 84px 1fr auto auto 40px;
      padding: 18px 0; border-bottom: 1px solid var(--Kova-rule);
    }
    .thumb { width: 84px; height: 84px; border-radius: 10px; overflow: hidden; border: 1px solid var(--Kova-rule); }
    .thumb img { width: 100%; height: 100%; object-fit: cover; }
    .info { display: flex; flex-direction: column; gap: 3px; }
    .name { font-weight: 500; }
    .info span { font-size: 0.8125rem; }
    .qty { display: flex; align-items: center; border: 1px solid var(--mat-sys-outline-variant); border-radius: 999px; }
    .qty span { min-width: 26px; text-align: center; font-size: 0.875rem; }
    .line-total { font-size: 1rem; min-width: 90px; text-align: right; }

    .summary { position: sticky; top: 92px; display: flex; flex-direction: column; gap: 14px; }
    .summary h3 { margin: 0; }
    dl { margin: 0; display: flex; flex-direction: column; gap: 10px; }
    dl div { display: flex; justify-content: space-between; gap: 12px; font-size: 0.875rem; }
    dt { color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; }
    .saved dd { color: var(--mat-sys-tertiary); }
    .total {
      display: flex; justify-content: space-between; align-items: baseline;
      padding-top: 14px; border-top: 1px solid var(--Kova-rule);
    }
    .total strong { font-size: 1.375rem; font-weight: 600; }
    .coupon { display: flex; gap: 8px; align-items: start; }
    .coupon mat-form-field { flex: 1; }
    .applied { margin: 0; font-size: 0.75rem; color: var(--mat-sys-tertiary); }
    .checkout { --mat-filled-button-container-height: 48px; }
    .keep { text-align: center; font-size: 0.8125rem; }

    @media (max-width: 899px) {
      .layout { grid-template-columns: 1fr; gap: 24px; }
      .summary { position: static; }
      .lines li { grid-template-columns: 64px 1fr 40px; grid-template-areas: 'thumb info remove' 'qty qty total'; }
      .thumb { grid-area: thumb; width: 64px; height: 64px; }
      .info { grid-area: info; }
      .remove { grid-area: remove; }
      .qty { grid-area: qty; justify-self: start; }
      .line-total { grid-area: total; text-align: right; }
    }
  `
})
export class CartPage {
  protected readonly cart = inject(Cart);
  private readonly notify = inject(Notify);

  protected code = '';

  constructor() { this.cart.load(); }

  protected applyCoupon(event: Event): void {
    event.preventDefault();
    if (!this.code.trim()) return;
    this.cart.applyCoupon(this.code.trim()).subscribe({
      next: () => this.notify.done('Discount applied'),
      error: () => void 0
    });
  }
}
