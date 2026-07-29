import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductListItem } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { Cart } from '@core/services/cart';
import { Wishlist } from '@core/services/wishlist';
import { Auth } from '@core/services/auth';
import { Router } from '@angular/router';
import { FALLBACK_SHOT } from '@shared/curation-art';
import { StarRating } from './star-rating';

@Component({
  selector: 'Kova-product-card',
  imports: [RouterLink, MatIconModule, MatButtonModule, PricePipe, StarRating],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="card">
      <a class="frame" [routerLink]="['/product', product().slug]">
        <img [src]="product().imageUrl ?? placeholder" [alt]="product().name" loading="lazy" decoding="async" />
        @if (product().stock === 0) {
          <span class="tag-out mark">Sold out</span>
        } @else if (product().discountPercent > 0) {
          <span class="tag-sale mark">−{{ product().discountPercent }}%</span>
        }
      </a>

      <button mat-icon-button class="save" (click)="toggleSaved()"
              [attr.aria-label]="saved() ? 'Remove from wishlist' : 'Save to wishlist'"
              [attr.aria-pressed]="saved()">
        <mat-icon fontSet="material-symbols-outlined" [class.on]="saved()">favorite</mat-icon>
      </button>

      <div class="body">
        <small class="eyebrow">{{ product().brand }}</small>
        <a class="name" [routerLink]="['/product', product().slug]">{{ product().name }}</a>
        <Kova-star-rating [value]="product().ratingAverage" [count]="product().ratingCount" />

        <div class="foot">
          <span class="prices">
            <strong class="price">{{ product().price |KovaPrice }}</strong>
            @if (product().compareAtPrice; as was) {
              <s class="price muted">{{ was |KovaPrice }}</s>
            }
          </span>

          <button mat-flat-button class="add" [disabled]="product().stock === 0" (click)="add()">
            {{ product().stock === 0 ? 'Sold out' : 'Add' }}
          </button>
        </div>

        <button mat-flat-button class="order card-order" [disabled]="product().stock === 0" (click)="orderNow()">
          Order Now
          <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
        </button>
      </div>
    </article>
  `,
  styles: `
    .card { position: relative; display: flex; flex-direction: column; gap: 12px; }

    .frame {
      position: relative; display: block; aspect-ratio: 1;
      border-radius: 12px; overflow: hidden;
      background: var(--mat-sys-surface-container-high);
      border: 1px solid var(--Kova-rule);
    }
    .frame img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 400ms cubic-bezier(0.2, 0, 0.1, 1);
    }
    .card:hover .frame img { transform: scale(1.04); }

    .mark { position: absolute; top: 10px; left: 10px; }

    .save {
      position: absolute; top: 4px; right: 4px;
      background: color-mix(in srgb, var(--mat-sys-surface) 78%, transparent);
      backdrop-filter: blur(6px);
    }
    .save mat-icon { font-size: 20px; width: 20px; height: 20px; }
    .save mat-icon.on { color: var(--mat-sys-tertiary); font-variation-settings: 'FILL' 1; }

    .body { display: flex; flex-direction: column; gap: 6px; }
    .name { font-weight: 500; line-height: 1.35; }
    .name:hover { text-decoration: underline; text-underline-offset: 3px; }

    .foot {
      display: flex; align-items: center; justify-content: space-between;
      gap: 8px; margin-top: 4px;
    }
    .prices { display: flex; align-items: baseline; gap: 8px; }
    .prices strong { font-size: 1rem; font-weight: 600; }
    .prices s { font-size: 0.8125rem; }
    .add { --mat-filled-button-container-height: 34px; font-size: 0.8125rem; }

    /* The gold order button, sized down to sit inside a grid card. */
    .card-order.mat-mdc-button-base {
      width: 100%;
      height: 38px;
      margin-top: 8px;
      font-size: 0.8125rem;
      --mat-button-filled-horizontal-padding: 18px;
      box-shadow: 0 6px 18px rgba(217, 181, 81, 0.18);
    }
    .card-order.mat-mdc-button-base:hover { box-shadow: 0 8px 22px rgba(217, 181, 81, 0.28); }
    .card-order mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .card-order[disabled] { box-shadow: none; }
  `
})
export class ProductCard {
  readonly product = input.required<ProductListItem>();

  private readonly cart = inject(Cart);
  private readonly wishlist = inject(Wishlist);
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected readonly placeholder = FALLBACK_SHOT;
  protected readonly saved = computed(() => this.wishlist.ids().has(this.product().id));

  protected add(): void {
    if (!this.requireAccount()) return;
    this.cart.add(this.product().id, 1);
  }

  /** Straight to checkout — the item is added first so the order is complete. */
  protected orderNow(): void {
    if (!this.requireAccount()) return;
    this.cart.addItem(this.product().id, 1).subscribe({
      next: () => void this.router.navigate(['/checkout']),
      error: () => void 0   // the error interceptor already surfaced the reason
    });
  }

  protected toggleSaved(): void {
    if (!this.requireAccount()) return;
    this.wishlist.toggle(this.product().id);
  }

  private requireAccount(): boolean {
    if (this.auth.isSignedIn()) return true;
    this.router.navigate(['/sign-in'], { queryParams: { next: this.router.url } });
    return false;
  }
}
