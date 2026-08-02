import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { toSignal } from '@angular/core/rxjs-interop';
import { Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Auth } from '@core/services/auth';
import { Cart } from '@core/services/cart';
import { Wishlist } from '@core/services/wishlist';
import { Theme } from '@core/services/theme';
import { Catalog } from '@core/services/catalog';
import { BrandLogo } from '@shared/components/brand-logo';

@Component({
  selector: 'Kova-header',
  imports: [
    RouterLink, RouterLinkActive, FormsModule, MatToolbarModule, MatIconModule, MatButtonModule,
    MatBadgeModule, MatMenuModule, MatSidenavModule, MatListModule, MatAutocompleteModule,
    BrandLogo
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-sidenav-container>
      <mat-sidenav #drawer mode="over" class="drawer">
        <div class="drawer-head">
          <Kova-brand-logo [tagline]="true" />
          <button mat-icon-button (click)="drawer.close()" aria-label="Close menu">
            <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
          </button>
        </div>
        <mat-nav-list (click)="drawer.close()">
          @for (link of navLinks; track link.path) {
            <a mat-list-item [routerLink]="link.path">{{ link.label }}</a>
          }
          <a mat-list-item routerLink="/track">Track an order</a>
          @if (auth.isAdmin()) { <a mat-list-item routerLink="/admin">Admin</a> }
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar class="bar" [class.searching]="searchOpen()">
          <button mat-icon-button class="only-mobile" (click)="drawer.toggle()" aria-label="Open menu">
            <mat-icon fontSet="material-symbols-outlined">menu</mat-icon>
          </button>

          <a routerLink="/" class="brand" aria-label="Anuvesha &amp; Co. — luxury gift curations, home">
            <Kova-brand-logo />
          </a>

          <nav class="links only-desktop">
            @for (link of navLinks; track link.path) {
              <a [routerLink]="link.path" routerLinkActive="active"
                 [routerLinkActiveOptions]="{ exact: link.path === '/' }">{{ link.label }}</a>
            }
          </nav>

          <form class="search" [class.open]="searchOpen()" (submit)="submitSearch($event)" role="search">
            <mat-icon fontSet="material-symbols-outlined">search</mat-icon>
            <input [(ngModel)]="term" name="q" [matAutocomplete]="auto"
                   (ngModelChange)="suggest$.next($event)"
                   placeholder="Search the catalogue" aria-label="Search products" />
            <mat-autocomplete #auto (optionSelected)="go($event.option.value)">
              @for (s of suggestions(); track s) { <mat-option [value]="s">{{ s }}</mat-option> }
            </mat-autocomplete>
          </form>

          <span class="spacer"></span>

          <!-- On a phone the field itself does not fit beside the mark and the
               account controls, so it collapses to this toggle and drops onto a
               second row when opened. -->
          <button mat-icon-button class="only-mobile" (click)="searchOpen.set(!searchOpen())"
                  [attr.aria-expanded]="searchOpen()"
                  [attr.aria-label]="searchOpen() ? 'Hide search' : 'Search'">
            <mat-icon fontSet="material-symbols-outlined">{{ searchOpen() ? 'close' : 'search' }}</mat-icon>
          </button>

          <a mat-icon-button routerLink="/wishlist" aria-label="Wishlist"
             [matBadge]="wishlist.count() || null" matBadgeSize="small" matBadgeColor="accent">
            <mat-icon fontSet="material-symbols-outlined">favorite</mat-icon>
          </a>

          <a mat-icon-button routerLink="/cart" aria-label="Cart"
             [matBadge]="cart.count() || null" matBadgeSize="small">
            <mat-icon fontSet="material-symbols-outlined">shopping_bag</mat-icon>
          </a>

          @if (auth.isSignedIn()) {
            <button mat-icon-button [matMenuTriggerFor]="account" aria-label="Account menu">
              <span class="avatar">{{ auth.initials() }}</span>
            </button>
            <mat-menu #account="matMenu">
              <div class="menu-head">
                <strong>{{ auth.user()?.fullName }}</strong>
                <small class="muted">{{ auth.user()?.email }}</small>
                <span class="role" [class.staff]="auth.isAdmin()">{{ auth.roleLabel() }}</span>
              </div>
              <a mat-menu-item routerLink="/profile">Your account</a>
              <a mat-menu-item routerLink="/orders">Your orders</a>
              @if (auth.isAdmin()) { <a mat-menu-item routerLink="/admin">Admin dashboard</a> }
              <button mat-menu-item (click)="auth.logout()">Sign out</button>
            </mat-menu>
          } @else {
            <a mat-stroked-button routerLink="/sign-in" class="only-desktop">Sign in</a>
            <a mat-icon-button routerLink="/sign-in" class="only-mobile" aria-label="Sign in">
              <mat-icon fontSet="material-symbols-outlined">person</mat-icon>
            </a>
          }
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: `
    mat-sidenav-container { background: transparent; }
    mat-sidenav-content { overflow: visible; }
    .drawer { width: min(84vw, 300px); padding: 8px; }
    .drawer-head { display: flex; align-items: center; justify-content: space-between; padding: 8px 12px 16px; }

    /* The signed-in role, stated rather than inferred from which links show. */
    .role {
      align-self: start; margin-top: 6px; padding: 2px 9px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.5625rem; font-weight: 600;
      letter-spacing: 0.1em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .role.staff { background: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container); }

    .bar {
      position: sticky; top: 0; z-index: 20;
      display: flex; gap: 8px; align-items: center;
      height: 68px; padding-inline: max(20px, calc((100vw - var(--Kova-page)) / 2));
      background: color-mix(in srgb, var(--mat-sys-surface) 88%, transparent);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--Kova-rule);
    }

    /* Shrinkable, not fixed: the account and cart buttons are what a phone user
       actually needs to reach, so the wordmark is what gives way when the bar
       runs out of room — never the controls on the right. */
    .brand { margin-right: 8px; flex: 0 1 auto; min-width: 0; overflow: hidden; }

    .links { display: flex; gap: 20px; margin-inline: 12px; }
    .links a {
      font-size: 0.875rem; padding-block: 6px;
      border-bottom: 2px solid transparent;
      color: var(--mat-sys-on-surface-variant);
    }
    .links a:hover { color: var(--mat-sys-on-surface); }
    .links a.active { color: var(--Kova-gold); border-bottom-color: var(--Kova-gold); }

    .search {
      display: flex; align-items: center; gap: 8px;
      flex: 1 1 260px; max-width: 380px; margin-inline: 12px;
      padding: 7px 14px; border-radius: 999px;
      background: var(--mat-sys-surface-container-high);
      border: 1px solid transparent;
    }
    .search:focus-within { border-color: var(--mat-sys-primary); }
    .search mat-icon { font-size: 20px; width: 20px; height: 20px; color: var(--mat-sys-on-surface-variant); }
    .search input {
      flex: 1; border: 0; outline: 0; background: transparent;
      color: inherit; font: inherit; font-size: 0.875rem; min-width: 0;
    }

    .avatar {
      display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%;
      background: var(--mat-sys-primary-container); color: var(--mat-sys-on-primary-container);
      font-family: var(--Kova-mono); font-size: 0.75rem; font-weight: 600;
    }

    .menu-head { display: flex; flex-direction: column; padding: 12px 16px 8px; }
    .only-mobile { display: none; }

    @media (max-width: 899px) {
      .only-desktop { display: none; }
      .only-mobile { display: inline-flex; }
      .bar { height: 60px; gap: 2px; padding-inline: 8px; }
      .search { flex-basis: 140px; margin-inline: 4px; padding: 6px 10px; }
    }

    @media (max-width: 599px) {
      /* nowrap is deliberate: with wrapping the account button drops onto a
         second row instead of the wordmark giving way, which is backwards. */
      .bar { flex-wrap: nowrap; gap: 0; padding-inline: 6px; }

      /* Hard cap rather than flex-shrink, so that opening the search below can
         turn wrapping on without the account button being the thing that wraps.
         220px = 6+6 padding, the 40px menu button, four 40px controls, 4px margin. */
      .brand { margin-right: 4px; max-width: calc(100vw - 220px); }

      /* The field takes a row of its own under the controls, only once asked
         for — it cannot fit beside the mark and the account buttons. */
      .search { display: none; }
      .bar.searching { flex-wrap: wrap; height: auto; padding-bottom: 8px; }
      .search.open {
        display: flex; order: 10; flex: 1 0 100%;
        margin: 0 2px; max-width: none;
      }
    }
  `
})
export class Header {
  protected readonly auth = inject(Auth);
  protected readonly cart = inject(Cart);
  protected readonly wishlist = inject(Wishlist);
  protected readonly theme = inject(Theme);
  private readonly catalog = inject(Catalog);
  private readonly router = inject(Router);

  protected term = '';
  protected readonly suggest$ = new Subject<string>();

  /** Phone only — above 599px the field is always on the bar. */
  protected readonly searchOpen = signal(false);

  protected readonly suggestions = toSignal(
    this.suggest$.pipe(
      debounceTime(220),
      distinctUntilChanged(),
      switchMap(value => this.catalog.suggest(value))
    ),
    { initialValue: [] as string[] }
  );

  // Nine occasions is too many for a toolbar; the four that sell go here and
  // the rest live one click away on the home page and in the footer.
  protected readonly navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'All curations' },
    { path: '/category/sawan-gift', label: 'Sawan' },
    { path: '/category/rakhi-gift', label: 'Rakhi' },
    { path: '/category/wedding-gift', label: 'Wedding' },
    { path: '/category/corporate-gift', label: 'Corporate' }
  ];

  protected submitSearch(event: Event): void {
    event.preventDefault();
    this.go(this.term);
  }

  protected go(term: string): void {
    if (!term.trim()) return;
    this.router.navigate(['/shop'], { queryParams: { search: term.trim() } });
  }
}
