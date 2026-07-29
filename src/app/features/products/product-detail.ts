import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Catalog } from '@core/services/catalog';
import { Cart } from '@core/services/cart';
import { Wishlist } from '@core/services/wishlist';
import { Auth } from '@core/services/auth';
import { Notify } from '@core/services/notify';
import { Product, ProductListItem, Review } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { StarRating } from '@shared/components/star-rating';
import { ProductCard } from '@shared/components/product-card';

@Component({
  selector: 'Kova-product-detail',
  imports: [
    RouterLink, FormsModule, MatButtonModule, MatIconModule, MatTabsModule, MatDividerModule,
    MatFormFieldModule, MatInputModule, DatePipe, PricePipe, StarRating, ProductCard
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (product(); as p) {
      <div class="page">
        <nav class="crumbs muted">
          <a routerLink="/shop">Shop</a>
          <span>/</span>
          <a [routerLink]="['/category', p.categoryName.toLowerCase()]">{{ p.categoryName }}</a>
          <span>/</span>
          <span>{{ p.name }}</span>
        </nav>

        <div class="split">
          <div class="gallery">
            <img class="main" [src]="activeImage()" [alt]="p.name" fetchpriority="high" />
            @if (p.images.length > 1) {
              <div class="thumbs">
                @for (image of p.images; track image) {
                  <button class="thumb" [class.on]="image === activeImage()" (click)="activeImage.set(image)"
                          [attr.aria-label]="'View image ' + ($index + 1)">
                    <img [src]="image" alt="" loading="lazy" />
                  </button>
                }
              </div>
            }
          </div>

          <div class="buy">
            <span class="eyebrow">{{ p.brand }} · {{ p.sku }}</span>
            <h1>{{ p.name }}</h1>
            <Kova-star-rating [value]="p.ratingAverage" [count]="p.ratingCount" />

            <div class="pricing">
              <strong class="price">{{ p.price |KovaPrice }}</strong>
              @if (p.compareAtPrice; as was) {
                <s class="price muted">{{ was |KovaPrice }}</s>
                <span class="tag-sale">Save {{ p.discountPercent }}%</span>
              }
            </div>

            <p class="lede">{{ p.shortDescription }}</p>

            @if (p.includes.length) {
              <div class="includes">
                <div class="includes-head">
                  <span class="eyebrow">In this box</span>
                  <span class="eyebrow numeric">{{ p.includes.length }} pieces</span>
                </div>
                <ul>
                  @for (item of p.includes; track item) {
                    <li><mat-icon fontSet="material-symbols-outlined">check_small</mat-icon>{{ item }}</li>
                  }
                </ul>
              </div>
            }

            <p class="stock numeric" [class.low]="p.stock > 0 && p.stock <= 5" [class.out]="p.stock === 0">
              @if (p.stock === 0) { Sold out — tell us to restock }
              @else if (p.stock <= 5) { Only {{ p.stock }} left }
              @else { In stock, ships within a working day }
            </p>

            <div class="qty-row">
              <div class="qty">
                <button mat-icon-button (click)="step(-1)" [disabled]="quantity() <= 1" aria-label="Decrease quantity">
                  <mat-icon fontSet="material-symbols-outlined">remove</mat-icon>
                </button>
                <span class="numeric" aria-live="polite">{{ quantity() }}</span>
                <button mat-icon-button (click)="step(1)" [disabled]="quantity() >= p.stock" aria-label="Increase quantity">
                  <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
                </button>
              </div>

              <button mat-flat-button class="add" [disabled]="p.stock === 0" (click)="addToCart(p)">
                Add to cart
              </button>

              <button mat-stroked-button class="save" (click)="toggleSaved(p)"
                      [attr.aria-pressed]="saved(p.id)">
                <mat-icon fontSet="material-symbols-outlined" [class.on]="saved(p.id)">favorite</mat-icon>
                {{ saved(p.id) ? 'Saved' : 'Save' }}
              </button>

              <button mat-flat-button class="order buy" [disabled]="p.stock === 0" (click)="orderNow(p)">
                Order Now
                <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
              </button>
            </div>

            <mat-divider />

            <mat-tab-group class="tabs" animationDuration="180ms">
              <mat-tab label="Details">
                <p class="body-copy">{{ p.description }}</p>
              </mat-tab>

              <mat-tab label="Specifications">
                <dl class="specs">
                  @for (spec of specEntries(p); track spec[0]) {
                    <div><dt>{{ spec[0] }}</dt><dd class="numeric">{{ spec[1] }}</dd></div>
                  }
                  <div><dt>SKU</dt><dd class="numeric">{{ p.sku }}</dd></div>
                </dl>
              </mat-tab>

              <mat-tab [label]="'Reviews (' + reviews().length + ')'">
                @if (auth.isSignedIn()) {
                  <form class="review-form" (submit)="submitReview($event, p)">
                    <div class="stars-input">
                      <span class="eyebrow">Your rating</span>
                      @for (star of [1,2,3,4,5]; track star) {
                        <button type="button" mat-icon-button (click)="newRating.set(star)"
                                [attr.aria-label]="star + ' stars'">
                          <mat-icon fontSet="material-symbols-outlined"
                                    [class.filled]="star <= newRating()">star</mat-icon>
                        </button>
                      }
                    </div>
                    <mat-form-field>
                      <mat-label>Headline</mat-label>
                      <input matInput [(ngModel)]="newTitle" name="title" required maxlength="80" />
                    </mat-form-field>
                    <mat-form-field>
                      <mat-label>What should other buyers know?</mat-label>
                      <textarea matInput rows="3" [(ngModel)]="newBody" name="body" required></textarea>
                    </mat-form-field>
                    <button mat-flat-button type="submit">Post review</button>
                  </form>
                } @else {
                  <p class="muted"><a routerLink="/sign-in">Sign in</a> to write a review.</p>
                }

                <ul class="reviews">
                  @for (review of reviews(); track review.id) {
                    <li>
                      <div class="row">
                        <Kova-star-rating [value]="review.rating" />
                        <strong>{{ review.title }}</strong>
                      </div>
                      <p>{{ review.body }}</p>
                      <small class="muted numeric">{{ review.userName }} · {{ review.createdAt | date:'d MMM yyyy' }}</small>
                    </li>
                  } @empty {
                    <li class="muted">No reviews yet. Yours would be the first.</li>
                  }
                </ul>
              </mat-tab>
            </mat-tab-group>
          </div>
        </div>

        @if (related().length) {
          <section class="related">
            <div class="section-head"><h2>Also on this shelf</h2></div>
            <div class="grid">
              @for (item of related(); track item.id) { <Kova-product-card [product]="item" /> }
            </div>
          </section>
        }
      </div>
    } @else if (!loading()) {
      <div class="page">
        <h1>We couldn't find that product</h1>
        <p class="muted">It may have been retired. <a routerLink="/shop">Browse what's in stock</a>.</p>
      </div>
    }
  `,
  styles: `
    .crumbs { display: flex; gap: 8px; font-size: 0.8125rem; margin-bottom: 24px; flex-wrap: wrap; }
    .crumbs a:hover { text-decoration: underline; }

    .split { display: grid; grid-template-columns: 1fr 1fr; gap: 56px; align-items: start; }

    .gallery { position: sticky; top: 92px; display: flex; flex-direction: column; gap: 12px; }
    .main {
      width: 100%; aspect-ratio: 1; object-fit: cover;
      border-radius: 16px; border: 1px solid var(--Kova-rule);
      background: var(--mat-sys-surface-container-high);
    }
    .thumbs { display: flex; gap: 10px; }
    .thumb {
      width: 72px; height: 72px; padding: 0; border-radius: 10px; overflow: hidden; cursor: pointer;
      border: 1px solid var(--Kova-rule); background: none;
    }
    .thumb.on { border-color: var(--mat-sys-primary); border-width: 2px; }
    .thumb img { width: 100%; height: 100%; object-fit: cover; }

    .buy { display: flex; flex-direction: column; gap: 14px; }
    .buy h1 { font-size: clamp(1.75rem, 3vw, 2.5rem); }
    .pricing { display: flex; align-items: baseline; gap: 12px; }
    .pricing strong { font-size: 1.75rem; font-weight: 600; }
    .lede { margin: 0; font-size: 1rem; line-height: 1.65; color: var(--mat-sys-on-surface-variant); max-width: 48ch; }

    .stock { margin: 0; font-size: 0.8125rem; color: var(--mat-sys-primary); }
    .stock.low { color: var(--mat-sys-tertiary); }
    .stock.out { color: var(--mat-sys-error); }

    .qty-row { display: flex; gap: 12px; align-items: center; flex-wrap: wrap; margin: 4px 0 8px; }
    .qty {
      display: flex; align-items: center; gap: 4px;
      border: 1px solid var(--mat-sys-outline); border-radius: 999px; padding: 2px;
    }
    .qty span { min-width: 28px; text-align: center; font-size: 0.9375rem; }
    .add { flex: 1 1 180px; --mat-filled-button-container-height: 46px; }
    .buy { flex: 1 1 100%; }
    .save mat-icon.on { color: var(--mat-sys-tertiary); font-variation-settings: 'FILL' 1; }

    .tabs { margin-top: 8px; }
    .body-copy { line-height: 1.7; color: var(--mat-sys-on-surface-variant); padding-top: 20px; }

    /* What is actually inside — different for every box, so it sits above the
       fold rather than buried in the specifications tab. */
    .includes {
      padding: 16px 18px; border-radius: 14px;
      border: 1px solid var(--Kova-gold-line);
      background: color-mix(in srgb, var(--mat-sys-tertiary-container) 18%, transparent);
    }
    .includes-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
    .includes ul {
      list-style: none; margin: 12px 0 0; padding: 0;
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 18px;
    }
    .includes li { display: flex; align-items: start; gap: 8px; font-size: 0.8125rem; line-height: 1.45; }
    .includes mat-icon { font-size: 18px; width: 18px; height: 18px; color: var(--Kova-gold); flex: none; }
    @media (max-width: 599px) { .includes ul { grid-template-columns: 1fr; } }

    .specs { padding-top: 20px; margin: 0; display: flex; flex-direction: column; border-top: 1px solid var(--Kova-rule); }
    .specs div { display: flex; justify-content: space-between; gap: 16px; padding: 11px 0; border-bottom: 1px solid var(--Kova-rule); font-size: 0.875rem; }
    dt { color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; }

    .review-form { display: flex; flex-direction: column; gap: 4px; padding: 20px 0; align-items: start; }
    .stars-input { display: flex; align-items: center; gap: 2px; margin-bottom: 4px; }
    .stars-input .eyebrow { margin-right: 8px; }
    .stars-input mat-icon { color: var(--mat-sys-outline); }
    .stars-input mat-icon.filled { color: var(--mat-sys-tertiary); font-variation-settings: 'FILL' 1; }
    .review-form mat-form-field { width: min(100%, 460px); }

    .reviews { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 24px; }
    .reviews li { padding-bottom: 20px; border-bottom: 1px solid var(--Kova-rule); }
    .reviews p { margin: 8px 0; line-height: 1.6; }

    .related { margin-top: 88px; }

    @media (max-width: 899px) {
      .split { grid-template-columns: 1fr; gap: 28px; }
      .gallery { position: static; }
    }
  `
})
export class ProductDetail {
  /** Bound from the :slug route param by withComponentInputBinding(). */
  readonly slug = input.required<string>();

  private readonly catalog = inject(Catalog);
  private readonly cart = inject(Cart);
  private readonly wishlist = inject(Wishlist);
  private readonly notify = inject(Notify);
  private readonly router = inject(Router);
  protected readonly auth = inject(Auth);

  protected readonly product = signal<Product | null>(null);
  protected readonly related = signal<ProductListItem[]>([]);
  protected readonly reviews = signal<Review[]>([]);
  protected readonly loading = signal(true);
  protected readonly quantity = signal(1);
  protected readonly activeImage = signal('');

  protected newRating = signal(5);
  protected newTitle = '';
  protected newBody = '';

  protected saved(productId: string): boolean {
    return this.wishlist.ids().has(productId);
  }

  constructor() {
    effect(() => {
      const slug = this.slug();
      this.loading.set(true);
      this.quantity.set(1);

      this.catalog.bySlug(slug).subscribe({
        next: product => {
          this.product.set(product);
          this.activeImage.set(product.images[0] ?? '');
          this.loading.set(false);
          this.catalog.related(product.id).subscribe(list => this.related.set(list));
          this.catalog.reviews(product.id).subscribe(list => this.reviews.set(list));
        },
        error: () => { this.product.set(null); this.loading.set(false); }
      });
    });
  }

  protected step(delta: number): void {
    this.quantity.update(q => Math.max(1, q + delta));
  }

  protected specEntries(product: Product): [string, string][] {
    return Object.entries(product.specs ?? {});
  }

  protected addToCart(product: Product): void {
    if (!this.requireAccount()) return;
    this.cart.add(product.id, this.quantity());
  }

  /** Straight to checkout with the chosen quantity already in the cart. */
  protected orderNow(product: Product): void {
    if (!this.requireAccount()) return;
    this.cart.addItem(product.id, this.quantity()).subscribe({
      next: () => void this.router.navigate(['/checkout']),
      error: () => void 0   // the error interceptor already surfaced the reason
    });
  }

  protected toggleSaved(product: Product): void {
    if (!this.requireAccount()) return;
    this.wishlist.toggle(product.id);
  }

  protected submitReview(event: Event, product: Product): void {
    event.preventDefault();
    if (!this.newTitle.trim() || !this.newBody.trim()) {
      this.notify.problem('Add a headline and a few words before posting.');
      return;
    }

    this.catalog.addReview(product.id, this.newRating(), this.newTitle, this.newBody).subscribe({
      next: review => {
        this.reviews.update(list => [review, ...list]);
        this.newTitle = '';
        this.newBody = '';
        this.notify.done('Review posted');
      }
    });
  }

  private requireAccount(): boolean {
    if (this.auth.isSignedIn()) return true;
    this.router.navigate(['/sign-in'], { queryParams: { next: this.router.url } });
    return false;
  }
}
