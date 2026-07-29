import {
  AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit,
  computed, signal, viewChild
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PricePipe } from '@core/services/currency';
import { ProductCard } from '@shared/components/product-card';
import { BrandLogo } from '@shared/components/brand-logo';
import { CountUp } from '@shared/components/count-up';
import { Reveal } from '@shared/directives/reveal';
import { CatalogueEntry } from '@shared/catalogue.static';
import { GiftFinder } from './gift-finder';
import {
  HOME_CATEGORIES, HOME_FAQ, HOME_FEATURED, HOME_FEATURES, HOME_GRAM,
  HOME_SLIDES, HOME_STATS, HOME_STEPS, HOME_TICKER
} from './home.static';

/** How long a banner slide holds before the next one, and the tick that drives it. */
const SLIDE_MS = 7000;
const TICK_MS = 100;

@Component({
  selector: 'Kova-home',
  imports: [
    RouterLink, MatButtonModule, MatIconModule, PricePipe,
    ProductCard, BrandLogo, CountUp, Reveal, GiftFinder
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <!-- The banner keeps its own dark ground in both themes: the gold only
         reads as foil against near-black, so it does not follow the toggle. -->
    <section class="banner" #banner (mouseenter)="paused.set(true)" (mouseleave)="paused.set(false)"
             (focusin)="paused.set(true)" (focusout)="paused.set(false)">
      <div class="banner-inner">
        <div class="copy">
          <Kova-brand-logo size="lg" [tagline]="true" />

          @for (entry of slides; track entry.product.id) {
            @if (index() === $index) {
              <div class="copy-body">
                <span class="eyebrow gold-eyebrow">{{ entry.eyebrow }}</span>
                <h1 class="foil sheen-type">{{ entry.product.name }}</h1>
                <p class="lede">{{ entry.note }}</p>

                <div class="includes">
                  <div class="includes-head">
                    <span class="eyebrow gold-eyebrow">In this box</span>
                    <span class="eyebrow count">{{ entry.product.includes.length }} pieces</span>
                  </div>
                  <ul>
                    @for (item of entry.product.includes; track item) {
                      <li><mat-icon fontSet="material-symbols-outlined">check_small</mat-icon>{{ item }}</li>
                    }
                  </ul>
                </div>

                <!-- Price block: the number is the loudest thing on the banner. -->
                <div class="price-block">
                  <div class="figures">
                    <strong class="now price foil">{{ entry.product.price |KovaPrice }}</strong>
                    @if (entry.product.compareAtPrice; as was) {
                      <s class="was price">{{ was |KovaPrice }}</s>
                      <span class="off">−{{ entry.product.discountPercent }}%</span>
                    }
                  </div>
                  <small class="note">Inclusive of taxes · Free delivery over ₹999</small>
                </div>

                <div class="cta">
                  <a mat-flat-button class="order" [routerLink]="['/product', entry.product.slug]">
                    Order Now
                    <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
                  </a>
                  <a mat-stroked-button class="ghost" routerLink="/shop">Browse all curations</a>
                </div>
              </div>
            }
          }

          <div class="trust">
            @for (mark of trustMarks; track mark.label) {
              <span><mat-icon fontSet="material-symbols-outlined">{{ mark.icon }}</mat-icon>{{ mark.label }}</span>
            }
          </div>
        </div>

        <div class="shot">
          <div class="frame">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>

            @for (entry of slides; track entry.product.id) {
              <img class="plate-img" [class.on]="index() === $index"
                   [src]="entry.product.images[0]" [alt]="entry.product.name"
                   [attr.fetchpriority]="$index === 0 ? 'high' : null"
                   [attr.aria-hidden]="index() === $index ? null : 'true'" />
            }
            <span class="sheen" aria-hidden="true"></span>

            <span class="seal">
              <small>Premium</small>
              <strong class="numeric">Quality</strong>
            </span>

            <span class="hallmark numeric">{{ hero().sku }}</span>
          </div>

          <!-- Slide control: thumbnails double as the position indicator. -->
          <div class="switcher" role="tablist" aria-label="Featured curations">
            @for (entry of slides; track entry.product.id) {
              <button class="thumb" role="tab" [class.on]="index() === $index"
                      [attr.aria-selected]="index() === $index"
                      (click)="show($index)">
                <img [src]="entry.product.imageUrl" alt="" loading="lazy" />
                <span class="thumb-name">{{ entry.eyebrow }}</span>
                @if (index() === $index) { <span class="bar" [style.width.%]="progress() * 100"></span> }
              </button>
            }
          </div>

          <a class="social" href="https://instagram.com" target="_blank" rel="noopener">
            <mat-icon fontSet="material-symbols-outlined">photo_camera</mat-icon>&#64;anuveshandco · DM to order
          </a>
        </div>
      </div>
    </section>

    <!-- A single foil line of promises, running slowly. -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        @for (pass of twice; track pass) {
          @for (line of ticker; track line) {
            <span>{{ line }}</span><span class="dot">◆</span>
          }
        }
      </div>
    </div>

    <div class="page">
      <section KovaReveal><Kova-gift-finder /></section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">Nine shelves</span>
            <h2>Shop by occasion</h2>
          </div>
          <div class="head-tools">
            <button mat-icon-button class="nudge" (click)="nudge(-1)" aria-label="Previous occasions">
              <mat-icon fontSet="material-symbols-outlined">chevron_left</mat-icon>
            </button>
            <button mat-icon-button class="nudge" (click)="nudge(1)" aria-label="More occasions">
              <mat-icon fontSet="material-symbols-outlined">chevron_right</mat-icon>
            </button>
            <a routerLink="/shop" class="more">All curations <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon></a>
          </div>
        </div>

        <div class="rail" #rail>
          @for (category of categories(); track category.id) {
            <a class="occasion" [routerLink]="['/category', category.slug]" KovaReveal="{{ $index % 4 }}">
              <img [src]="category.imageUrl" [alt]="category.name" loading="lazy" decoding="async" />
              <span class="veil"></span>
              <span class="label">
                <h3 class="foil">{{ category.name }}</h3>
                <small class="muted">{{ category.description }}</small>
                <span class="numeric count">{{ category.productCount }} curations</span>
              </span>
            </a>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">Curated</span>
            <h2>The house selection</h2>
          </div>
          <a routerLink="/shop" class="more">See all <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon></a>
        </div>

        <div class="lenses" role="tablist" aria-label="Filter the selection">
          @for (item of lenses; track item.key) {
            <button role="tab" class="lens" [class.on]="lens() === item.key"
                    [attr.aria-selected]="lens() === item.key" (click)="lens.set(item.key)">
              {{ item.label }}
            </button>
          }
          <span class="spacer"></span>
          <span class="eyebrow">{{ shown().length }} of {{ featured.length }}</span>
        </div>

        <div class="grid">
          @for (product of shown(); track product.id) {
            <Kova-product-card [product]="product" />
          } @empty {
            <p class="muted">Nothing on this shelf yet.</p>
          }
        </div>
      </section>

      <!-- Offer band. The clock is real: it counts to the end of the week. -->
      <section class="offer" KovaReveal>
        <div class="offer-copy">
          <span class="eyebrow gold-eyebrow">This week only</span>
          <h2 class="foil">10% off the festival shelf</h2>
          <p>Use the code at checkout. Applies to every box over ₹999, including bulk orders.</p>
          <button class="coupon numeric" (click)="copyCoupon()"
                  [attr.aria-label]="'Copy the code ' + coupon">
            {{ coupon }}
            <mat-icon fontSet="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</mat-icon>
          </button>
          <small class="note">{{ copied() ? 'Copied to your clipboard.' : 'Tap the code to copy it.' }}</small>
        </div>

        <div class="clock" aria-label="Time left on this offer">
          @for (part of countdown(); track part.label) {
            <div class="unit">
              <strong class="numeric">{{ part.value }}</strong>
              <small class="eyebrow">{{ part.label }}</small>
            </div>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">The workshop</span>
            <h2>How a box is made</h2>
          </div>
        </div>

        <ol class="steps">
          @for (item of steps; track item.step) {
            <li KovaReveal="{{ $index }}">
              <span class="step numeric">{{ item.step }}</span>
              <h3>{{ item.label }}</h3>
              <p class="muted">{{ item.detail }}</p>
            </li>
          }
        </ol>
      </section>

      <section class="stats" KovaReveal>
        @for (stat of stats; track stat.label) {
          <div class="stat">
            <strong class="foil">
              <Kova-count-up [value]="stat.value" [decimals]="stat.decimals" [suffix]="stat.suffix" />
            </strong>
            <small class="eyebrow">{{ stat.label }}</small>
          </div>
        }
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">&#64;anuveshandco</span>
            <h2>From the bench</h2>
          </div>
          <a class="more" href="https://instagram.com" target="_blank" rel="noopener">
            Follow <mat-icon fontSet="material-symbols-outlined">arrow_outward</mat-icon>
          </a>
        </div>

        <div class="gram">
          @for (tile of gram; track tile.caption) {
            <figure KovaReveal="{{ $index % 6 }}">
              <img [src]="tile.image" [alt]="tile.caption" loading="lazy" decoding="async" />
              <figcaption>{{ tile.caption }}</figcaption>
            </figure>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal><h2>Why our boxes</h2></div>
        <div class="features">
          @for (feature of features; track feature.label) {
            <div class="feature" KovaReveal="{{ $index }}">
              <mat-icon fontSet="material-symbols-outlined">{{ feature.icon }}</mat-icon>
              <h3>{{ feature.label }}</h3>
              <p class="muted">{{ feature.detail }}</p>
            </div>
          }
        </div>
      </section>

      <section class="ask" KovaReveal>
        <div class="ask-head">
          <span class="eyebrow gold-eyebrow">Before you order</span>
          <h2>Questions we get</h2>
          <p class="muted">Anything else, message us on Instagram — we answer the same day.</p>
        </div>

        <div class="faq">
          @for (item of faq; track item.q) {
            <details>
              <summary>
                {{ item.q }}
                <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
              </summary>
              <p class="muted">{{ item.a }}</p>
            </details>
          }
        </div>
      </section>

      <section class="closing" KovaReveal>
        <span class="eyebrow gold-eyebrow">Ready when you are</span>
        <h2 class="foil">Every box leaves here gift-ready</h2>
        <p>Packed to order, sealed with a card, dispatched within a working day.</p>

        <form class="signup" (submit)="subscribe($event)" novalidate>
          <input type="email" name="email" [value]="email()" (input)="onEmail($event)"
                 placeholder="you@example.com" aria-label="Email address"
                 [attr.aria-invalid]="mailError() ? 'true' : null" />
          <button mat-flat-button class="order" type="submit">
            {{ subscribed() ? 'You are on the list' : 'Get the drop list' }}
          </button>
        </form>
        <small class="note" aria-live="polite">
          {{ mailError() || (subscribed() ? 'One note per collection. Nothing else, ever.' : 'New collections first. No more than one email a month.') }}
        </small>

        <div class="cta">
          <a mat-flat-button class="order" routerLink="/shop">
            Order Now
            <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
          </a>
          <a mat-stroked-button class="ghost" routerLink="/track">Track an order</a>
        </div>
      </section>
    </div>

    <!-- Follows the shopper once the banner is off screen. -->
    <div class="dock" [class.up]="docked()">
      <img [src]="hero().imageUrl" alt="" />
      <div class="dock-copy">
        <strong>{{ hero().name }}</strong>
        <span class="price numeric">{{ hero().price |KovaPrice }}</span>
      </div>
      <span class="spacer"></span>
      <a mat-flat-button class="order" [routerLink]="['/product', hero().slug]">Order Now</a>
      <button mat-icon-button class="top" (click)="toTop()" aria-label="Back to top">
        <mat-icon fontSet="material-symbols-outlined">keyboard_arrow_up</mat-icon>
      </button>
    </div>
  `,
  styles: `
    /* ---- Palette ---------------------------------------------------------
       The house colour on this page is aubergine rather than the old green,
       and the foil is champagne rather than flat gold. The brand tokens are
       re-pointed here on the host instead of in styles.scss, so everything
       that inherits them — the order buttons, the product cards, the eyebrows
       — picks the new foil up inside this page and nowhere else.
       ---------------------------------------------------------------------- */
    :host {
      --ink: #180611;            /* the ground, near-black aubergine */
      --plum: #3a0f2b;           /* mid, for gradients */
      --wine: #59133c;           /* the lift in a gradient's corner */
      --ivory: #f8f0e8;          /* type on the ground */
      --foil: #e9c9a1;           /* champagne */
      --foil-soft: #fbeeda;
      --foil-deep: #b3854b;
      --foil-line: color-mix(in srgb, #e9c9a1 32%, transparent);
      --paper: #fbf7f3;          /* the page behind the sections */

      /* Champagne is a light colour: legible on the dark ground, far too pale
         for small type on paper. This is the same accent taken down to where
         it clears 4.5:1 on the light surface, and it flips back to the foil
         proper in dark mode. Use it for any accent text outside the banner. */
      --foil-text: #7a5622;

      --Kova-gold: var(--foil);
      --Kova-gold-soft: var(--foil-soft);
      --Kova-gold-deep: var(--foil-deep);
      --Kova-gold-line: var(--foil-line);
      --Kova-foil: linear-gradient(120deg, #fbeeda 0%, #e9c9a1 45%, #b3854b 100%);

      display: block;
      background: var(--paper);
    }
    /* Dark mode keeps the same hues, only the paper goes to ground. */
    :host-context(html.Kova-dark) {
      --paper: #120509;
      --foil-text: var(--foil);
    }

    /* ---- Banner ---------------------------------------------------------- */
    .banner {
      position: relative; isolation: isolate; overflow: hidden;
      background:
        radial-gradient(62% 66% at 76% 14%, rgba(233, 201, 161, 0.20), transparent 66%),
        radial-gradient(52% 58% at 6% 96%, rgba(89, 19, 60, 0.85), transparent 72%),
        linear-gradient(152deg, var(--plum) 0%, var(--ink) 58%, #24081a 100%);
      border-bottom: 1px solid var(--foil-line);
      color: var(--ivory);
    }
    /* A double foil hairline across the top edge — the letterhead rule. */
    .banner::before {
      content: ''; position: absolute; inset: 0 0 auto; height: 1px;
      background: linear-gradient(90deg, transparent, var(--foil), transparent);
    }
    .banner::after {
      content: ''; position: absolute; inset: 4px 0 auto; height: 1px; opacity: 0.35;
      background: linear-gradient(90deg, transparent, var(--foil), transparent);
    }
    .banner-inner {
      max-width: var(--Kova-page); margin-inline: auto; padding: 72px 20px 80px;
      display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 64px; align-items: center;
    }

    .copy { display: flex; flex-direction: column; gap: 20px; align-items: start; }
    .copy-body {
      display: flex; flex-direction: column; gap: 20px; align-items: start; width: 100%;
      animation: rise 620ms cubic-bezier(0.2, 0, 0.1, 1) both;
    }
    @keyframes rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }

    .gold-eyebrow { color: var(--foil); }
    h1 { font-size: clamp(2.5rem, 4.6vw, 3.9rem); line-height: 1.06; }

    /* Foil that catches the light as it turns. */
    .sheen-type {
      background: linear-gradient(105deg, #b3854b 0%, #e9c9a1 32%, #fff6e6 46%, #e9c9a1 60%, #b3854b 100%);
      background-size: 280% 100%;
      -webkit-background-clip: text; background-clip: text; color: transparent;
      animation: turn 9s ease-in-out infinite;
    }
    @keyframes turn { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }

    .lede { margin: 0; max-width: 46ch; font-size: 1.0625rem; line-height: 1.72; color: rgba(248, 240, 232, 0.74); }

    .includes {
      width: 100%; max-width: 470px;
      padding: 20px 22px; border-radius: 18px;
      border: 1px solid var(--foil-line);
      background: linear-gradient(150deg, rgba(233, 201, 161, 0.08), rgba(89, 19, 60, 0.22));
    }
    .includes-head { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
    .includes-head .count { color: rgba(248, 240, 232, 0.5); }
    .includes ul {
      list-style: none; margin: 12px 0 0; padding: 0;
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 18px;
    }
    .includes li {
      display: flex; align-items: start; gap: 8px;
      font-size: 0.8125rem; line-height: 1.45; color: rgba(248, 240, 232, 0.86);
    }
    .includes mat-icon { font-size: 18px; width: 18px; height: 18px; color: var(--foil); flex: none; }

    .price-block { display: flex; flex-direction: column; gap: 6px; }
    .figures { display: flex; align-items: baseline; gap: 14px; }
    .now { font-size: clamp(2.1rem, 3.6vw, 2.9rem); font-weight: 700; }
    .was { font-size: 1.125rem; color: rgba(248, 240, 232, 0.45); }
    .off {
      font-family: var(--Kova-mono); font-size: 0.75rem; font-weight: 600; letter-spacing: 0.06em;
      padding: 4px 10px; border-radius: 999px;
      background: var(--foil); color: #2a1005;
    }
    .note { font-size: 0.75rem; color: rgba(248, 240, 232, 0.55); }

    .cta { display: flex; flex-wrap: wrap; gap: 12px; }
    .trust { display: flex; flex-wrap: wrap; gap: 20px; padding-top: 6px; }
    .trust span {
      display: inline-flex; align-items: center; gap: 7px;
      font-size: 0.8125rem; color: rgba(248, 240, 232, 0.66);
    }
    .trust mat-icon { font-size: 19px; width: 19px; height: 19px; color: var(--foil); }

    /* ---- Hero shot ------------------------------------------------------- */
    .shot { position: relative; display: flex; flex-direction: column; gap: 16px; }
    .frame {
      position: relative; border-radius: 28px; overflow: hidden;
      aspect-ratio: 4 / 5;
      border: 1px solid var(--foil-line);
      box-shadow: 0 44px 96px rgba(24, 6, 17, 0.62), inset 0 0 0 1px rgba(251, 238, 218, 0.07);
    }
    .plate-img {
      position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
      opacity: 0; transition: opacity 900ms ease;
      animation: drift 20s ease-in-out infinite alternate;
    }
    .plate-img.on { opacity: 1; }
    @keyframes drift { from { transform: scale(1); } to { transform: scale(1.06); } }

    /* Inset corner rules — the mount of a framed print. */
    .corner {
      position: absolute; width: 26px; height: 26px; z-index: 2; opacity: 0.75;
      border-color: var(--foil); border-style: solid; border-width: 0;
    }
    .tl { top: 16px; left: 16px; border-top-width: 1px; border-left-width: 1px; }
    .tr { top: 16px; right: 16px; border-top-width: 1px; border-right-width: 1px; }
    .bl { bottom: 16px; left: 16px; border-bottom-width: 1px; border-left-width: 1px; }
    .br { bottom: 16px; right: 16px; border-bottom-width: 1px; border-right-width: 1px; }

    /* A slow bar of light crossing the glass. */
    .sheen {
      position: absolute; inset: -40% -60%; z-index: 1; pointer-events: none;
      background: linear-gradient(74deg, transparent 42%, rgba(255, 246, 230, 0.14) 50%, transparent 58%);
      animation: cross 7.5s ease-in-out infinite;
    }
    @keyframes cross { 0%, 62% { transform: translateX(-55%); } 100% { transform: translateX(55%); } }

    .seal {
      position: absolute; top: 20px; right: 20px; z-index: 3;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      width: 88px; height: 88px; border-radius: 50%; text-align: center;
      border: 1px solid var(--foil); background: rgba(24, 6, 17, 0.74);
      backdrop-filter: blur(6px); color: var(--foil);
      box-shadow: 0 0 0 6px rgba(233, 201, 161, 0.08);
    }
    .seal small { font-size: 0.5625rem; letter-spacing: 0.18em; text-transform: uppercase; opacity: 0.8; }
    .seal strong { font-size: 0.75rem; letter-spacing: 0.08em; }

    .hallmark {
      position: absolute; bottom: 18px; left: 18px; z-index: 3;
      padding: 6px 12px; border-radius: 999px; font-size: 0.6875rem;
      background: rgba(24, 6, 17, 0.74); border: 1px solid var(--foil-line);
      color: var(--foil); backdrop-filter: blur(6px);
    }

    /* ---- Slide switcher --------------------------------------------------- */
    .switcher { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
    .thumb {
      position: relative; overflow: hidden; cursor: pointer; padding: 0;
      display: flex; align-items: center; gap: 9px;
      border-radius: 14px; text-align: left;
      background: rgba(248, 240, 232, 0.04);
      border: 1px solid rgba(248, 240, 232, 0.10);
      transition: border-color 200ms ease, background 200ms ease;
    }
    .thumb:hover { border-color: var(--foil-line); }
    .thumb.on { border-color: var(--foil); background: rgba(233, 201, 161, 0.10); }
    .thumb img { width: 42px; height: 42px; object-fit: cover; flex: none; }
    .thumb-name {
      font-family: var(--Kova-mono); font-size: 0.5625rem; letter-spacing: 0.1em;
      text-transform: uppercase; color: rgba(248, 240, 232, 0.66);
      padding-right: 8px; line-height: 1.3;
    }
    .thumb.on .thumb-name { color: var(--foil); }
    .bar {
      position: absolute; left: 0; bottom: 0; height: 2px;
      background: var(--foil); transition: width 120ms linear;
    }

    .social {
      display: inline-flex; align-items: center; gap: 8px; align-self: start;
      padding: 8px 14px; border-radius: 999px;
      border: 1px solid var(--foil-line); color: rgba(248, 240, 232, 0.78);
      font-size: 0.8125rem;
    }
    .social:hover { border-color: var(--foil); color: var(--foil); }
    .social mat-icon { font-size: 18px; width: 18px; height: 18px; color: var(--foil); }

    /* ---- Ticker ----------------------------------------------------------- */
    .ticker {
      overflow: hidden; border-bottom: 1px solid var(--foil-line);
      background: linear-gradient(90deg, var(--ink), var(--plum) 50%, var(--ink));
      padding: 12px 0; mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    }
    .ticker-track {
      display: flex; align-items: center; gap: 22px; width: max-content;
      animation: slide 46s linear infinite;
    }
    .ticker:hover .ticker-track { animation-play-state: paused; }
    .ticker-track span {
      font-family: var(--Kova-mono); font-size: 0.6875rem; letter-spacing: 0.16em;
      text-transform: uppercase; color: rgba(248, 240, 232, 0.72); white-space: nowrap;
    }
    .ticker-track .dot { color: var(--foil); font-size: 0.5rem; }
    @keyframes slide { from { transform: translateX(0); } to { transform: translateX(-50%); } }

    /* ---- Section furniture ------------------------------------------------ */
    section { margin-bottom: 96px; }
    .section-head > div { display: flex; flex-direction: column; gap: 8px; }
    .section-head h2 { letter-spacing: -0.015em; }
    .head-tools { display: flex; align-items: center; gap: 4px; }
    .more {
      display: inline-flex; align-items: center; gap: 6px; font-size: 0.875rem;
      color: var(--foil-text); font-weight: 500;
    }
    .more:hover { gap: 10px; }
    .more mat-icon { font-size: 18px; width: 18px; height: 18px; transition: transform 200ms ease; }
    .nudge { --mdc-icon-button-icon-color: var(--foil-text); }

    /* ---- Occasions rail --------------------------------------------------- */
    .rail {
      display: grid; grid-auto-flow: column; grid-auto-columns: minmax(292px, 1fr);
      gap: 18px; overflow-x: auto; scroll-snap-type: x mandatory;
      padding-bottom: 6px; scrollbar-width: none;
    }
    .rail::-webkit-scrollbar { display: none; }
    .occasion {
      position: relative; display: block; overflow: hidden; scroll-snap-align: start;
      border-radius: 20px; border: 1px solid var(--Kova-rule);
      transition: border-color 220ms ease, transform 220ms ease, box-shadow 220ms ease;
    }
    .occasion:hover {
      border-color: var(--foil); transform: translateY(-5px);
      box-shadow: 0 26px 54px rgba(24, 6, 17, 0.32);
    }
    .occasion img {
      display: block; width: 100%; aspect-ratio: 5 / 4; object-fit: cover;
      transition: transform 600ms cubic-bezier(0.2, 0, 0.1, 1);
    }
    .occasion:hover img { transform: scale(1.05); }
    /* Aubergine rather than black, so the photograph darkens into the palette. */
    .veil {
      position: absolute; inset: 0;
      background: linear-gradient(180deg, rgba(24, 6, 17, 0.05) 26%, rgba(24, 6, 17, 0.62) 62%, rgba(24, 6, 17, 0.94) 100%);
    }
    .label {
      position: absolute; inset: auto 0 0; display: flex; flex-direction: column; gap: 5px;
      padding: 20px 22px; color: var(--ivory);
    }
    .label h3 { font-size: 1.3125rem; }
    .label small { font-size: 0.75rem; line-height: 1.5; color: rgba(248, 240, 232, 0.68); }
    .count { font-size: 0.6875rem; color: var(--foil); }

    /* ---- Lens chips ------------------------------------------------------- */
    .lenses { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; margin-bottom: 28px; }
    .lens {
      padding: 9px 17px; border-radius: 999px; cursor: pointer; font: inherit; font-size: 0.8125rem;
      color: var(--mat-sys-on-surface-variant);
      background: transparent; border: 1px solid var(--Kova-rule);
      transition: border-color 160ms ease, color 160ms ease, background 160ms ease;
    }
    .lens:hover { border-color: var(--foil); color: var(--mat-sys-on-surface); }
    .lens.on {
      background: linear-gradient(140deg, var(--plum), var(--ink));
      border-color: transparent; color: var(--foil-soft); font-weight: 600;
    }

    /* ---- Offer band ------------------------------------------------------- */
    .offer {
      display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 32px; align-items: center;
      padding: 44px; border-radius: 26px;
      border: 1px solid var(--foil-line);
      background:
        radial-gradient(74% 130% at 10% 0%, rgba(233, 201, 161, 0.18), transparent 66%),
        radial-gradient(60% 100% at 100% 100%, rgba(89, 19, 60, 0.9), transparent 70%),
        linear-gradient(158deg, var(--plum), var(--ink));
      color: var(--ivory);
    }
    .offer-copy { display: flex; flex-direction: column; gap: 12px; align-items: start; }
    .offer-copy p { margin: 0; color: rgba(248, 240, 232, 0.72); max-width: 52ch; }
    .coupon {
      display: inline-flex; align-items: center; gap: 10px; cursor: pointer;
      padding: 12px 20px; border-radius: 12px; font-size: 0.9375rem; font-weight: 600;
      letter-spacing: 0.14em; color: var(--foil);
      background: rgba(233, 201, 161, 0.09);
      border: 1px dashed var(--foil); font-family: var(--Kova-mono);
      transition: background 180ms ease;
    }
    .coupon:hover { background: rgba(233, 201, 161, 0.18); }
    .coupon mat-icon { font-size: 18px; width: 18px; height: 18px; }

    .clock { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
    .unit {
      display: flex; flex-direction: column; align-items: center; gap: 6px;
      padding: 18px 8px; border-radius: 14px;
      border: 1px solid var(--foil-line); background: rgba(24, 6, 17, 0.5);
    }
    .unit strong { font-size: 1.75rem; font-weight: 700; color: var(--foil); line-height: 1; }
    .unit small { color: rgba(248, 240, 232, 0.58); font-size: 0.5625rem; }

    /* ---- Process ---------------------------------------------------------- */
    .steps {
      list-style: none; margin: 0; padding: 0;
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px;
    }
    .steps li {
      position: relative; padding-top: 30px;
      border-top: 1px solid var(--Kova-rule);
    }
    /* The bead that sits on the rule above each step. */
    .steps li::before {
      content: ''; position: absolute; top: -4px; left: 0;
      width: 7px; height: 7px; border-radius: 50%; background: var(--foil-deep);
    }
    .step {
      display: inline-flex; align-items: center; justify-content: center;
      width: 30px; height: 30px; margin-bottom: 12px; border-radius: 50%;
      font-size: 0.75rem; letter-spacing: 0; color: var(--foil-soft);
      background: linear-gradient(140deg, var(--wine), var(--ink));
    }
    .steps h3 { font-size: 1.0625rem; margin-bottom: 8px; }
    .steps p { margin: 0; font-size: 0.875rem; line-height: 1.6; }

    /* ---- Stats ------------------------------------------------------------ */
    /* One solid band of the house colour — the page's anchor between two
       lighter sections, and the only place the numerals sit on the ground. */
    .stats {
      display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
      border-radius: 24px; overflow: hidden;
      background: var(--foil-line);
      border: 1px solid var(--foil-line);
    }
    .stat {
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      padding: 38px 16px; text-align: center; color: var(--ivory);
      background: linear-gradient(158deg, var(--plum), var(--ink));
    }
    .stat strong { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(1.75rem, 3vw, 2.5rem); }
    .stat small { color: rgba(248, 240, 232, 0.6); }

    /* ---- Instagram strip --------------------------------------------------- */
    .gram { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; }
    .gram figure {
      position: relative; margin: 0; overflow: hidden; border-radius: 16px;
      border: 1px solid var(--Kova-rule);
    }
    .gram img {
      display: block; width: 100%; aspect-ratio: 1; object-fit: cover;
      transition: transform 500ms cubic-bezier(0.2, 0, 0.1, 1);
    }
    .gram figure:hover img { transform: scale(1.07); }
    .gram figcaption {
      position: absolute; inset: auto 0 0; padding: 22px 10px 9px;
      font-family: var(--Kova-mono); font-size: 0.5625rem; letter-spacing: 0.08em;
      text-transform: uppercase; color: var(--ivory);
      background: linear-gradient(180deg, transparent, rgba(24, 6, 17, 0.92));
    }

    /* ---- Features ---------------------------------------------------------- */
    .features { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
    .feature {
      padding: 28px 24px; border-radius: 20px;
      border: 1px solid var(--Kova-rule);
      background: var(--mat-sys-surface-container-low);
      transition: border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease;
    }
    .feature:hover {
      border-color: var(--foil); transform: translateY(-4px);
      box-shadow: 0 18px 40px rgba(24, 6, 17, 0.12);
    }
    .feature mat-icon { color: var(--foil-text); font-size: 30px; width: 30px; height: 30px; }
    .feature h3 { font-size: 1rem; margin: 14px 0 6px; }
    .feature p { margin: 0; font-size: 0.875rem; line-height: 1.55; }

    /* ---- FAQ --------------------------------------------------------------- */
    .ask { display: grid; grid-template-columns: 0.8fr 1.2fr; gap: 44px; align-items: start; }
    .ask-head { display: flex; flex-direction: column; gap: 10px; position: sticky; top: 92px; }
    .ask-head p { margin: 0; font-size: 0.875rem; line-height: 1.6; }

    .faq details { border-bottom: 1px solid var(--Kova-rule); }
    .faq summary {
      display: flex; align-items: center; justify-content: space-between; gap: 16px;
      padding: 18px 0; cursor: pointer; font-weight: 500; list-style: none;
    }
    .faq summary::-webkit-details-marker { display: none; }
    .faq summary mat-icon {
      color: var(--foil-text); font-size: 20px; width: 20px; height: 20px; flex: none;
      transition: transform 220ms ease;
    }
    .faq details[open] summary mat-icon { transform: rotate(45deg); }
    .faq p { margin: 0 0 20px; font-size: 0.875rem; line-height: 1.65; max-width: 62ch; }

    /* ---- Closing band ------------------------------------------------------ */
    .closing {
      display: flex; flex-direction: column; align-items: center; gap: 14px;
      text-align: center; padding: 68px 24px; border-radius: 26px;
      border: 1px solid var(--foil-line);
      background:
        radial-gradient(64% 110% at 50% 0%, rgba(233, 201, 161, 0.17), transparent 68%),
        radial-gradient(50% 90% at 88% 100%, rgba(89, 19, 60, 0.85), transparent 72%),
        linear-gradient(158deg, var(--plum), var(--ink));
      color: var(--ivory);
    }
    .closing p { margin: 0; color: rgba(248, 240, 232, 0.72); }

    .signup { display: flex; gap: 10px; flex-wrap: wrap; justify-content: center; margin-top: 10px; }
    .signup input {
      width: 280px; padding: 0 18px; height: 46px; border-radius: 999px;
      font: inherit; font-size: 0.9375rem; color: var(--ivory);
      background: rgba(248, 240, 232, 0.06);
      border: 1px solid var(--foil-line);
    }
    .signup input::placeholder { color: rgba(248, 240, 232, 0.42); }
    .signup input:focus { outline: none; border-color: var(--foil); }
    .signup input[aria-invalid='true'] { border-color: var(--mat-sys-error); }

    /* ---- Docked bar --------------------------------------------------------- */
    .dock {
      position: fixed; inset: auto 0 0; z-index: 40;
      display: flex; align-items: center; gap: 14px;
      max-width: var(--Kova-page); margin: 0 auto 16px; padding: 10px 12px 10px 10px;
      border-radius: 999px; border: 1px solid var(--foil-line);
      background: color-mix(in srgb, var(--mat-sys-surface-container) 88%, transparent);
      backdrop-filter: blur(14px);
      box-shadow: 0 20px 50px rgba(24, 6, 17, 0.38);
      transform: translateY(140%); opacity: 0; visibility: hidden;
      transition: transform 380ms cubic-bezier(0.2, 0, 0.1, 1), opacity 280ms ease, visibility 0s linear 380ms;
    }
    /* Hidden means hidden — off the tab order too, not just off screen. */
    .dock.up { transform: none; opacity: 1; visibility: visible; transition-delay: 0s; }
    .dock img { width: 44px; height: 44px; border-radius: 999px; object-fit: cover; flex: none; }
    .dock-copy { display: flex; flex-direction: column; line-height: 1.3; min-width: 0; }
    .dock-copy strong { font-size: 0.875rem; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .dock-copy .price { font-size: 0.8125rem; color: var(--foil-text); }
    .top { --mdc-icon-button-icon-color: var(--mat-sys-on-surface-variant); }

    /* ---- Responsive --------------------------------------------------------- */
    @media (max-width: 1099px) {
      .features, .steps, .clock { grid-template-columns: repeat(2, 1fr); }
      .stats { grid-template-columns: repeat(2, 1fr); }
      .gram { grid-template-columns: repeat(3, 1fr); }
      .offer, .ask { grid-template-columns: 1fr; }
      .ask-head { position: static; }
    }

    @media (max-width: 899px) {
      .banner-inner { grid-template-columns: 1fr; gap: 36px; padding: 36px 20px 48px; }
      .shot { order: -1; }
      .includes { max-width: none; }
    }

    @media (max-width: 599px) {
      .includes ul { grid-template-columns: 1fr; }
      .rail { grid-auto-columns: 84%; }
      .features, .steps { grid-template-columns: 1fr; }
      .gram { grid-template-columns: repeat(2, 1fr); }
      .offer { padding: 26px 20px; }
      .cta a { flex: 1 1 100%; }
      .switcher { grid-template-columns: 1fr; }
      .thumb-name { font-size: 0.625rem; }
      .dock { margin-inline: 10px; }
      .dock-copy { display: none; }
      .signup input { width: 100%; }
    }
  `
})
export class Home implements OnInit, AfterViewInit, OnDestroy {
  // Static for now: the page renders its design without a running API. To go
  // live, inject Catalog and feed these signals from categories()/featured()/
  // bySlug(), restore the loading flag with Kova-loading-grid, and delete
  // home.static.ts — the shapes are already the API's.
  protected readonly slides = HOME_SLIDES;
  protected readonly categories = signal(HOME_CATEGORIES);
  protected readonly featured = HOME_FEATURED;

  protected readonly features = HOME_FEATURES;
  protected readonly ticker = HOME_TICKER;
  protected readonly stats = HOME_STATS;
  protected readonly steps = HOME_STEPS;
  protected readonly gram = HOME_GRAM;
  protected readonly faq = HOME_FAQ;
  protected readonly coupon = 'ANUVESH10';

  /** Loop counter kept as a field so @for is not handed a fresh array each pass. */
  protected readonly twice = [0, 1];

  protected readonly trustMarks = [
    { icon: 'workspace_premium', label: 'Premium quality' },
    { icon: 'volunteer_activism', label: 'Handcrafted with love' },
    { icon: 'redeem', label: 'Perfect for gifting' }
  ];

  // ---- Banner carousel ----------------------------------------------------
  protected readonly index = signal(0);
  protected readonly progress = signal(0);
  protected readonly paused = signal(false);
  protected readonly hero = computed(() => this.slides[this.index()].product);

  // ---- Selection lenses ---------------------------------------------------
  protected readonly lenses = [
    { key: 'all', label: 'Everything' },
    { key: 'best', label: 'Bestsellers' },
    { key: 'under', label: 'Under ₹999' },
    { key: 'luxe', label: 'The luxe shelf' },
    { key: 'new', label: 'New in' }
  ];
  protected readonly lens = signal('all');

  protected readonly shown = computed<CatalogueEntry[]>(() => {
    const pool = this.featured;
    switch (this.lens()) {
      case 'best': return [...pool].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 8);
      case 'under': return pool.filter(item => item.price < 1000);
      case 'luxe': return pool.filter(item => item.price >= 2000);
      case 'new': return [...pool].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 8);
      default: return pool;
    }
  });

  // ---- Offer clock --------------------------------------------------------
  /** Sunday midnight — the offer is genuinely weekly, so the clock is honest. */
  private readonly deadline = endOfWeek();
  private readonly now = signal(Date.now());

  protected readonly countdown = computed(() => {
    const left = Math.max(0, this.deadline - this.now());
    const seconds = Math.floor(left / 1000);
    return [
      { label: 'Days', value: pad(Math.floor(seconds / 86400)) },
      { label: 'Hours', value: pad(Math.floor(seconds / 3600) % 24) },
      { label: 'Mins', value: pad(Math.floor(seconds / 60) % 60) },
      { label: 'Secs', value: pad(seconds % 60) }
    ];
  });

  protected readonly copied = signal(false);

  // ---- Newsletter ---------------------------------------------------------
  protected readonly email = signal('');
  protected readonly mailError = signal('');
  protected readonly subscribed = signal(false);

  // ---- Docked bar ---------------------------------------------------------
  private readonly banner = viewChild.required<ElementRef<HTMLElement>>('banner');
  private readonly rail = viewChild.required<ElementRef<HTMLElement>>('rail');
  protected readonly docked = signal(false);

  private timers: number[] = [];
  private watcher?: IntersectionObserver;
  private copyTimer = 0;

  ngOnInit(): void {
    this.timers.push(window.setInterval(() => this.now.set(Date.now()), 1000));

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.timers.push(window.setInterval(() => {
      if (this.paused()) return;
      const next = this.progress() + TICK_MS / SLIDE_MS;
      if (next < 1) { this.progress.set(next); return; }
      this.show((this.index() + 1) % this.slides.length);
    }, TICK_MS));

  }

  /** View queries only resolve once the template exists, hence not ngOnInit. */
  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === 'undefined') return;

    // The dock takes over once the banner — and its Order button — is gone.
    this.watcher = new IntersectionObserver(
      entries => this.docked.set(!entries[0].isIntersecting),
      { threshold: 0 }
    );
    this.watcher.observe(this.banner().nativeElement);
  }

  ngOnDestroy(): void {
    this.timers.forEach(clearInterval);
    clearTimeout(this.copyTimer);
    this.watcher?.disconnect();
  }

  protected show(next: number): void {
    this.index.set(next);
    this.progress.set(0);
  }

  /** Scrolls the occasion rail by one card, either way. */
  protected nudge(direction: 1 | -1): void {
    const track = this.rail().nativeElement;
    const card = track.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 18 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  }

  protected copyCoupon(): void {
    navigator.clipboard?.writeText(this.coupon).then(() => {
      this.copied.set(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = window.setTimeout(() => this.copied.set(false), 2400);
    }, () => this.copied.set(false));
  }

  protected onEmail(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
    if (this.mailError()) this.mailError.set('');
  }

  protected subscribe(event: Event): void {
    event.preventDefault();
    const value = this.email().trim();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      this.mailError.set('That address does not look right — check it and try again.');
      this.subscribed.set(false);
      return;
    }

    // No list to post to yet; the form proves out the interaction and the copy.
    this.mailError.set('');
    this.subscribed.set(true);
  }

  protected toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}

/** Midnight at the end of the current week, in the shopper's own timezone. */
function endOfWeek(): number {
  const now = new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 0, 0, 0, 0);
  return end.getTime();
}
