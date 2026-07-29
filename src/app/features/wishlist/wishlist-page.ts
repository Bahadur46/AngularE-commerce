import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Wishlist } from '@core/services/wishlist';
import { Cart } from '@core/services/cart';
import { ProductCard } from '@shared/components/product-card';
import { EmptyState } from '@shared/components/empty-state';

@Component({
  selector: 'Kova-wishlist-page',
  imports: [MatButtonModule, ProductCard, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Saved</span>
          <h1>Wishlist</h1>
        </div>
        @if (wishlist.items().length) {
          <button mat-stroked-button (click)="addAllInStock()">Add everything in stock to cart</button>
        }
      </div>

      @if (!wishlist.items().length) {
        <Kova-empty-state
          icon="favorite"
          heading="Nothing saved yet"
          body="Tap the heart on any product to keep it here while you decide."
          actionLabel="Browse the catalogue"
          actionLink="/shop" />
      } @else {
        <div class="grid">
          @for (product of wishlist.items(); track product.id) {
            <Kova-product-card [product]="product" />
          }
        </div>
      }
    </div>
  `
})
export class WishlistPage {
  protected readonly wishlist = inject(Wishlist);
  private readonly cart = inject(Cart);

  constructor() { this.wishlist.loadItems(); }

  protected addAllInStock(): void {
    for (const product of this.wishlist.items()) {
      if (product.stock > 0) this.cart.add(product.id, 1);
    }
  }
}
