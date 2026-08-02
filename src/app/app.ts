import { ChangeDetectionStrategy, Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header';
import { AdminBar } from './layout/admin-bar';
import { Footer } from './layout/footer';
import { Auth } from '@core/services/auth';
import { Cart } from '@core/services/cart';
import { Wishlist } from '@core/services/wishlist';

@Component({
  selector: 'Kova-root',
  imports: [RouterOutlet, Header, AdminBar, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <Kova-header />
    <Kova-admin-bar />
    <main id="main"><router-outlet /></main>
    <Kova-footer />
  `,
  styles: `
    :host { display: flex; flex-direction: column; min-height: 100dvh; }
    main { flex: 1 1 auto; }
    .skip {
      position: absolute; left: 12px; top: -60px; z-index: 100;
      padding: 10px 16px; border-radius: 8px;
      background: var(--mat-sys-primary); color: var(--mat-sys-on-primary);
      transition: top 120ms ease;
    }
    .skip:focus { top: 12px; }
  `
})
export class App {
  private readonly auth = inject(Auth);
  private readonly cart = inject(Cart);
  private readonly wishlist = inject(Wishlist);

  constructor() {
    // Cart and wishlist follow the session: hydrate on sign-in, drop on sign-out.
    effect(() => {
      if (this.auth.isSignedIn()) {
        this.cart.load();
        this.wishlist.loadIds();
      } else {
        this.cart.reset();
        this.wishlist.reset();
      }
    });
  }
}
