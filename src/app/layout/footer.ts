import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandLogo } from '@shared/components/brand-logo';

@Component({
  selector: 'Kova-footer',
  imports: [RouterLink, BrandLogo],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer>
      <div class="inner">
        <div class="brand">
          <Kova-brand-logo size="lg" [tagline]="true" />
          <p class="muted">
            Handcrafted gift curations, packed to order in rigid boxes with foiled lids
            and a sealed card. Every box leaves here ready to hand over.
          </p>
        </div>

        <nav aria-label="Occasions">
          <h4 class="eyebrow">Occasions</h4>
          @for (link of occasions; track link.slug) {
            <a [routerLink]="['/category', link.slug]">{{ link.label }}</a>
          }
        </nav>

        <nav aria-label="Orders">
          <h4 class="eyebrow">Orders</h4>
          <a routerLink="/track">Track an order</a>
          <a routerLink="/orders">Your orders</a>
          <a routerLink="/profile">Your account</a>
          <a routerLink="/wishlist">Wishlist</a>
        </nav>

        <div class="promise">
          <h4 class="eyebrow">The terms</h4>
          <dl>
            <div><dt>Free delivery</dt><dd class="numeric">over ₹999</dd></div>
            <div><dt>Dispatch</dt><dd class="numeric">within 24 h</dd></div>
            <div><dt>Returns</dt><dd class="numeric">7 days</dd></div>
            <div><dt>Bulk orders</dt><dd class="numeric">20+ boxes</dd></div>
          </dl>
        </div>
      </div>

      <div class="base">
        <small class="muted">© {{ year }} Anuvesha &amp; Co. — luxury gift curations, packed by hand.</small>

        <small class="credit">
          <span class="eyebrow">Developed by</span>
          <span class="by">{{ author.name }}<span class="role"> · {{ author.role }}</span></span>
        </small>

        <small class="muted numeric">v1.0.0</small>
      </div>
    </footer>
  `,
  styles: `
    footer {
      border-top: 1px solid var(--Kova-rule);
      background: var(--mat-sys-surface-container-low);
      margin-top: 64px;
    }
    .inner {
      max-width: var(--Kova-page); margin-inline: auto;
      padding: 56px 20px 32px;
      display: grid; gap: 40px;
      grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
    }
    .brand p { margin: 16px 0 0; max-width: 34ch; font-size: 0.875rem; line-height: 1.6; }
    nav { display: flex; flex-direction: column; gap: 10px; }
    nav a { font-size: 0.875rem; color: var(--mat-sys-on-surface-variant); width: fit-content; }
    nav a:hover { color: var(--mat-sys-on-surface); }
    h4 { margin: 0 0 4px; }
    dl { margin: 0; display: flex; flex-direction: column; gap: 10px; }
    dl div { display: flex; justify-content: space-between; gap: 12px; font-size: 0.875rem; }
    dt { color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; }
    .base {
      max-width: var(--Kova-page); margin-inline: auto;
      padding: 20px; display: flex; align-items: center; justify-content: space-between; gap: 12px;
      border-top: 1px solid var(--Kova-rule);
    }

    /* The build credit. Centred between the copyright and the version so it
       reads as a colophon rather than a third piece of shop copy. */
    .credit { display: flex; flex-direction: column; align-items: center; gap: 2px; text-align: center; }
    .credit .eyebrow { font-size: 0.5625rem; }
    .by { font-size: 0.8125rem; font-weight: 500; color: var(--mat-sys-on-surface); }
    .role { font-weight: 400; color: var(--mat-sys-on-surface-variant); }

    @media (max-width: 899px) {
      .inner { grid-template-columns: 1fr 1fr; gap: 32px; padding-top: 40px; }
      .brand { grid-column: 1 / -1; }
    }
    @media (max-width: 599px) {
      .base { flex-direction: column; text-align: center; gap: 14px; }
    }
  `
})
export class Footer {
  protected readonly year = new Date().getFullYear();

  /** Who built it. One place, so the credit reads the same wherever it is shown. */
  protected readonly author = { name: 'Bahadur Chaudhary', role: 'Software Engineer' };

  protected readonly occasions = [
    { slug: 'baby-gift', label: 'Baby' },
    { slug: 'birthday-gift', label: 'Birthday' },
    { slug: 'ladies-gift', label: 'Ladies' },
    { slug: 'sawan-gift', label: 'Sawan' },
    { slug: 'rakhi-gift', label: 'Rakhi' },
    { slug: 'wedding-gift', label: 'Wedding' },
    { slug: 'anniversary-gift', label: 'Anniversary' },
    { slug: 'corporate-gift', label: 'Corporate' },
    { slug: 'festival-gift', label: 'Festival' }
  ];
}
