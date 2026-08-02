import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { Auth } from '@core/services/auth';
import { ADMIN_LINKS, isAdminArea } from '@core/admin-nav';

/**
 * The back office, one click away from anywhere on the shopfront.
 *
 * Staff spend most of their time looking at the shop as a customer sees it —
 * checking a product page, following an order someone rang about — and the
 * back office was previously reachable only through the account menu. This
 * strip keeps every section in reach without leaving the page they are on.
 *
 * It hides itself inside /admin, where the sidebar already lists the same
 * sections, and it renders for nobody else: `isAdmin()` is the whole condition.
 * That is a convenience, not a boundary — `adminGuard` gates the routes and the
 * API gates the data, so a customer who never sees this strip loses nothing but
 * a shortcut they could not have used.
 */
@Component({
  selector: 'Kova-admin-bar',
  imports: [RouterLink, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (show()) {
      <div class="strip">
        <!-- A link, not an ornament: on a phone the trailing link is gone and
             this becomes the way back to the dashboard. -->
        <a class="badge" routerLink="/admin" aria-label="Open the back office">
          <mat-icon fontSet="material-symbols-outlined">shield_person</mat-icon>
          <span class="eyebrow wide-only">Back office</span>
        </a>

        <nav aria-label="Back office sections">
          @for (link of links; track link.path) {
            <a [routerLink]="['/admin', link.path]" [title]="link.label">
              <mat-icon fontSet="material-symbols-outlined">{{ link.icon }}</mat-icon>
              <span class="label">{{ link.label }}</span>
            </a>
          }
        </nav>

        <a class="open roomy-only" routerLink="/admin">
          Open the back office
          <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon>
        </a>
      </div>
    }
  `,
  styles: `
    /**
     * Pins to the top of the viewport, not below the header.
     *
     * The header's own position: sticky never engages: it sits inside
     * mat-sidenav-container, which Material ships as overflow: hidden and
     * which is only as tall as the toolbar, so it is the scrollport and the
     * toolbar has nowhere to travel within it. The header therefore scrolls
     * away, and an offset here would leave the strip floating over a gap.
     *
     * This strip is outside that container — a plain sibling in the page flow —
     * so the document is its scrollport and top: 0 behaves as written.
     */
    :host { display: block; }

    .strip {
      --strip-h: 42px;

      position: sticky; top: 0; z-index: 19;
      display: flex; align-items: stretch; gap: 14px;
      /* Without this the row cannot shrink, and a nine-link nav would push the
         page into a horizontal scrollbar instead of scrolling inside itself. */
      min-width: 0; max-width: 100%;
      height: var(--strip-h);
      padding-inline: max(20px, calc((100vw - var(--Kova-page)) / 2));
      background: color-mix(in srgb, var(--mat-sys-tertiary-container) 92%, transparent);
      color: var(--mat-sys-on-tertiary-container);
      border-bottom: 1px solid var(--Kova-rule);
      backdrop-filter: blur(12px);
    }

    .badge {
      display: inline-flex; align-items: center; gap: 7px; flex: none;
      color: inherit; border-radius: 8px; padding-inline: 4px;
    }
    .badge:hover { background: color-mix(in srgb, var(--mat-sys-on-tertiary-container) 12%, transparent); }
    .badge mat-icon { font-size: 18px; width: 18px; height: 18px; }
    .badge .eyebrow { font-size: 0.5625rem; letter-spacing: 0.09em; }

    /* The scroller. Links keep their natural width and the row slides, which
       degrades far better than wrapping to a second line — the strip is sticky,
       so a second line would eat the viewport on exactly the screens with the
       least of it. */
    nav {
      display: flex; align-items: stretch; gap: 2px;
      min-width: 0; flex: 1 1 auto;
      overflow-x: auto; overscroll-behavior-x: contain;
      scrollbar-width: none; scroll-behavior: smooth;
    }
    nav::-webkit-scrollbar { display: none; }

    nav a {
      display: inline-flex; align-items: center; gap: 6px; flex: none;
      padding-inline: 10px; border-radius: 8px; white-space: nowrap;
      font-size: 0.8125rem; color: inherit; opacity: 0.86;
    }
    /* Full-height links: the touch target is the whole strip, not just the text. */
    nav a:hover {
      opacity: 1;
      background: color-mix(in srgb, var(--mat-sys-on-tertiary-container) 12%, transparent);
    }
    nav a mat-icon { font-size: 16px; width: 16px; height: 16px; flex: none; }

    .open {
      display: inline-flex; align-items: center; gap: 5px; flex: none;
      margin-left: auto; font-size: 0.75rem; color: inherit; opacity: 0.8;
    }
    .open:hover { opacity: 1; }
    .open mat-icon { font-size: 15px; width: 15px; height: 15px; }

    .wide-only, .roomy-only { display: inline-flex; }

    /* Focus must survive the scroller — a keyboard user tabbing along the row
       needs the ring visible, and the browser scrolls it into view for free. */
    .badge:focus-visible, nav a:focus-visible, .open:focus-visible {
      outline: 2px solid currentColor; outline-offset: -2px; opacity: 1;
    }

    /* ── Tablet and narrow desktop: the trailing link is the first thing to go.
          The shield still leads to /admin, so nothing becomes unreachable. ── */
    @media (max-width: 1099px) {
      .roomy-only { display: none; }

      /* Fades both ends so the row reads as scrollable rather than cut off.
         Measured: the full-width row needs ~855px and starts overflowing around
         1050px, well before the phone breakpoint — so the affordance belongs
         here, not down with the phone rules. */
      nav {
        mask-image: linear-gradient(90deg, transparent 0, #000 10px,
                                    #000 calc(100% - 10px), transparent 100%);
        -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 10px,
                                            #000 calc(100% - 10px), transparent 100%);
      }
    }

    /* ── Phones: the header itself drops to 60px here, so the strip tightens to
          match. Labels stay — an icon-only row of nine is a guessing game. ── */
    @media (max-width: 899px) {
      .strip { --strip-h: 44px; gap: 6px; padding-inline: 8px; }
      .wide-only { display: none; }
      nav a { font-size: 0.75rem; gap: 5px; padding-inline: 9px; }
    }

    /* ── Small phones: trim the padding, never the labels. ── */
    @media (max-width: 419px) {
      .strip { gap: 4px; padding-inline: 6px; }
      nav a { padding-inline: 7px; }
      .badge mat-icon { font-size: 17px; width: 17px; height: 17px; }
    }

    /* Touch: links fill the strip, so raising it is what buys a 47px target —
       past Apple's 44 and near Material's 48. Also widens the horizontal reach
       and kills the :hover tint a tap would otherwise leave stuck on. */
    @media (pointer: coarse) {
      .strip { --strip-h: 48px; }
      nav a { padding-inline: 12px; }
      nav a:hover { background: transparent; opacity: 0.86; }
      nav a:active { background: color-mix(in srgb, var(--mat-sys-on-tertiary-container) 16%, transparent); }
    }

    @media (prefers-reduced-motion: reduce) {
      nav { scroll-behavior: auto; }
    }
  `
})
export class AdminBar {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);

  protected readonly links = ADMIN_LINKS;

  /**
   * The URL as a signal. Read from NavigationEnd rather than `router.url` on
   * every change detection, because the app runs zoneless: nothing would
   * re-read a plain property after a route change.
   */
  private readonly url = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(event => event.urlAfterRedirects)
    ),
    { initialValue: this.router.url }
  );

  protected readonly show = computed(() => this.auth.isAdmin() && !isAdminArea(this.url()));
}
