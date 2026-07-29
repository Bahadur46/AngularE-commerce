import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ProductListItem } from '@core/models';
import { ProductCard } from '@shared/components/product-card';
import { CATALOGUE } from '@shared/catalogue.static';

interface Recipient {
  key: string;
  label: string;
  icon: string;
  /** Occasion slugs that suit this person, best fit first. */
  slugs: string[];
}

interface Budget {
  key: string;
  label: string;
  min: number;
  max: number;
}

const RECIPIENTS: Recipient[] = [
  { key: 'her', label: 'For her', icon: 'diamond', slugs: ['ladies-gift', 'sawan-gift', 'festival-gift'] },
  { key: 'couple', label: 'For a couple', icon: 'favorite', slugs: ['wedding-gift', 'anniversary-gift'] },
  { key: 'baby', label: 'For a baby', icon: 'child_care', slugs: ['baby-gift'] },
  { key: 'sibling', label: 'For a sibling', icon: 'diversity_1', slugs: ['rakhi-gift', 'birthday-gift'] },
  { key: 'family', label: 'For the family', icon: 'celebration', slugs: ['festival-gift', 'birthday-gift', 'sawan-gift'] },
  { key: 'work', label: 'For work', icon: 'business_center', slugs: ['corporate-gift'] }
];

const BUDGETS: Budget[] = [
  { key: 'b1', label: 'Under ₹500', min: 0, max: 499 },
  { key: 'b2', label: '₹500 – ₹999', min: 500, max: 999 },
  { key: 'b3', label: '₹1,000 – ₹1,999', min: 1000, max: 1999 },
  { key: 'b4', label: '₹2,000 and up', min: 2000, max: Number.MAX_SAFE_INTEGER }
];

const MOODS = [
  { key: 'any', label: 'Anything', tag: '' },
  { key: 'handmade', label: 'Handmade', tag: 'handmade' },
  { key: 'curation', label: 'The full curation', tag: 'curation' },
  { key: 'gifting', label: 'Ready to gift', tag: 'gifting' }
];

/**
 * Three questions, one shortlist. Runs entirely off the in-memory catalogue —
 * every keystroke-free choice re-filters instantly, and the match count updates
 * before the shopper commits to the next step so a dead end is visible early.
 */
@Component({
  selector: 'Kova-gift-finder',
  imports: [RouterLink, MatButtonModule, MatIconModule, ProductCard],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="finder">
      <div class="ask">
        <div class="head">
          <span class="eyebrow gold">Gift finder</span>
          <h2 class="foil">Not sure which box?</h2>
          <p class="muted">Three questions. We shortlist from all {{ total }} curations.</p>
        </div>

        <ol class="rail" aria-hidden="true">
          @for (dot of [0, 1, 2]; track dot) {
            <li [class.on]="step() >= dot" [class.now]="step() === dot"></li>
          }
        </ol>

        @switch (step()) {
          @case (0) {
            <fieldset>
              <legend class="q">Who is it for?</legend>
              <div class="options">
                @for (option of recipients; track option.key) {
                  <button type="button" class="chip" [class.picked]="recipient()?.key === option.key"
                          (click)="pickRecipient(option)">
                    <mat-icon fontSet="material-symbols-outlined">{{ option.icon }}</mat-icon>
                    {{ option.label }}
                  </button>
                }
              </div>
            </fieldset>
          }
          @case (1) {
            <fieldset>
              <legend class="q">What is the budget?</legend>
              <div class="options">
                @for (option of budgets; track option.key) {
                  <button type="button" class="chip" [class.picked]="budget()?.key === option.key"
                          (click)="pickBudget(option)">
                    <span class="numeric">{{ option.label }}</span>
                    <small class="hint numeric">{{ countFor(option) }}</small>
                  </button>
                }
              </div>
            </fieldset>
          }
          @default {
            <fieldset>
              <legend class="q">Anything in particular?</legend>
              <div class="options">
                @for (option of moods; track option.key) {
                  <button type="button" class="chip" [class.picked]="mood() === option.key"
                          (click)="mood.set(option.key)">
                    {{ option.label }}
                  </button>
                }
              </div>
            </fieldset>
          }
        }

        <div class="controls">
          @if (step() > 0) {
            <button mat-button class="link" (click)="back()">
              <mat-icon fontSet="material-symbols-outlined">arrow_back</mat-icon> Back
            </button>
          }
          <button mat-button class="link" (click)="surprise()">
            <mat-icon fontSet="material-symbols-outlined">casino</mat-icon> Surprise me
          </button>
          <span class="spacer"></span>
          @if (answered()) {
            <span class="tally numeric">{{ matches().length }} match{{ matches().length === 1 ? '' : 'es' }}</span>
            <button mat-button class="link" (click)="reset()">Start over</button>
          }
        </div>
      </div>

      <div class="answer" aria-live="polite">
        @if (!answered()) {
          <div class="waiting">
            <mat-icon fontSet="material-symbols-outlined">redeem</mat-icon>
            <p class="muted">Answer the first two and the shortlist appears here.</p>
          </div>
        } @else if (matches().length === 0) {
          <div class="waiting">
            <mat-icon fontSet="material-symbols-outlined">search_off</mat-icon>
            <p class="muted">Nothing at that budget for {{ recipient()!.label.toLowerCase() }}.</p>
            <button mat-stroked-button class="ghost" (click)="widen()">Widen the budget</button>
          </div>
        } @else {
          <div class="picks">
            @for (product of matches(); track product.id) {
              <Kova-product-card [product]="product" />
            }
          </div>
          <a class="all" [routerLink]="['/category', recipient()!.slugs[0]]">
            See every {{ recipient()!.label.replace('For ', '') }} curation
            <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon>
          </a>
        }
      </div>
    </div>
  `,
  styles: `
    .finder {
      display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 0;
      border-radius: 20px; overflow: hidden;
      border: 1px solid var(--Kova-gold-line);
      background: var(--mat-sys-surface-container-low);
    }

    /* ---- Question side ---------------------------------------------------- */
    .ask {
      display: flex; flex-direction: column; gap: 20px; padding: 32px;
      background:
        radial-gradient(80% 70% at 20% 0%, rgba(217, 181, 81, 0.14), transparent 65%),
        linear-gradient(160deg, #0d1f18, #050b09);
      color: #f3efe4;
    }
    .head { display: flex; flex-direction: column; gap: 8px; }
    .gold { color: var(--Kova-gold); }
    .head p { margin: 0; font-size: 0.875rem; color: rgba(243, 239, 228, 0.66); }

    .rail { display: flex; gap: 6px; list-style: none; margin: 0; padding: 0; }
    .rail li {
      height: 3px; width: 34px; border-radius: 999px;
      background: rgba(243, 239, 228, 0.16);
      transition: background 240ms ease, width 240ms ease;
    }
    .rail li.on { background: var(--Kova-gold-deep); }
    .rail li.now { background: var(--Kova-gold); width: 52px; }

    fieldset { border: 0; margin: 0; padding: 0; }
    .q {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.375rem; padding: 0 0 14px;
    }
    .options { display: flex; flex-wrap: wrap; gap: 10px; }
    .chip {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 11px 16px; border-radius: 999px; cursor: pointer;
      font: inherit; font-size: 0.875rem; text-align: left;
      color: rgba(243, 239, 228, 0.86);
      background: rgba(243, 239, 228, 0.04);
      border: 1px solid var(--Kova-gold-line);
      transition: border-color 160ms ease, background 160ms ease, transform 160ms ease;
    }
    .chip:hover { border-color: var(--Kova-gold); transform: translateY(-1px); }
    .chip.picked { background: var(--Kova-gold); border-color: var(--Kova-gold); color: #16120a; font-weight: 600; }
    .chip mat-icon { font-size: 19px; width: 19px; height: 19px; }
    .hint { opacity: 0.6; font-size: 0.6875rem; }

    .controls { display: flex; align-items: center; gap: 4px; margin-top: auto; flex-wrap: wrap; }
    .link.mat-mdc-button-base { --mat-button-text-label-text-color: var(--Kova-gold); font-size: 0.8125rem; }
    .link mat-icon { font-size: 17px; width: 17px; height: 17px; }
    .tally {
      font-size: 0.6875rem; letter-spacing: 0.08em; text-transform: uppercase;
      color: var(--Kova-gold);
    }

    /* ---- Result side ------------------------------------------------------ */
    .answer { padding: 32px; display: flex; flex-direction: column; gap: 20px; justify-content: center; }
    .waiting {
      display: flex; flex-direction: column; align-items: center; gap: 12px;
      text-align: center; padding: 40px 20px;
    }
    .waiting mat-icon { font-size: 34px; width: 34px; height: 34px; color: var(--Kova-gold); opacity: 0.8; }
    .waiting p { margin: 0; font-size: 0.875rem; }

    .picks { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
    .all {
      display: inline-flex; align-items: center; gap: 6px; align-self: start;
      font-size: 0.875rem; color: var(--Kova-gold);
    }
    .all mat-icon { font-size: 18px; width: 18px; height: 18px; }

    @media (max-width: 1099px) { .finder { grid-template-columns: 1fr; } }
    @media (max-width: 699px) {
      .ask, .answer { padding: 24px 20px; }
      .picks { grid-template-columns: repeat(2, 1fr); }
    }
  `
})
export class GiftFinder {
  protected readonly recipients = RECIPIENTS;
  protected readonly budgets = BUDGETS;
  protected readonly moods = MOODS;
  protected readonly total = CATALOGUE.length;

  protected readonly step = signal(0);
  protected readonly recipient = signal<Recipient | null>(null);
  protected readonly budget = signal<Budget | null>(null);
  protected readonly mood = signal('any');

  /** Who and how much are enough to shortlist; the third question only refines. */
  protected readonly answered = computed(() => !!this.recipient() && !!this.budget());

  protected readonly matches = computed<ProductListItem[]>(() => {
    const who = this.recipient();
    const spend = this.budget();
    if (!who || !spend) return [];

    const tag = MOODS.find(m => m.key === this.mood())?.tag ?? '';

    return CATALOGUE
      .filter(entry => who.slugs.includes(entry.categorySlug))
      .filter(entry => entry.price >= spend.min && entry.price <= spend.max)
      .filter(entry => !tag || entry.tags.includes(tag))
      .sort((a, b) => rank(who, b) - rank(who, a) || b.ratingAverage - a.ratingAverage)
      .slice(0, 3);
  });

  protected pickRecipient(option: Recipient): void {
    this.recipient.set(option);
    this.step.set(1);
  }

  protected pickBudget(option: Budget): void {
    this.budget.set(option);
    this.step.set(2);
  }

  /** Live count on the budget chips, so an empty bracket never gets picked. */
  protected countFor(option: Budget): string {
    const who = this.recipient();
    if (!who) return '';
    const hits = CATALOGUE.filter(entry =>
      who.slugs.includes(entry.categorySlug) && entry.price >= option.min && entry.price <= option.max).length;
    return hits ? `${hits} box${hits === 1 ? '' : 'es'}` : 'none';
  }

  protected back(): void { this.step.update(current => Math.max(0, current - 1)); }

  protected reset(): void {
    this.step.set(0);
    this.recipient.set(null);
    this.budget.set(null);
    this.mood.set('any');
  }

  /** For shoppers who would rather be told. Only lands on brackets that have stock. */
  protected surprise(): void {
    const who = RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)];
    const stocked = BUDGETS.filter(option => CATALOGUE.some(entry =>
      who.slugs.includes(entry.categorySlug) && entry.price >= option.min && entry.price <= option.max));

    this.recipient.set(who);
    this.budget.set(stocked[Math.floor(Math.random() * stocked.length)] ?? BUDGETS[1]);
    this.mood.set('any');
    this.step.set(2);
  }

  /** Escape hatch from an empty shortlist: drop the ceiling and the refinement. */
  protected widen(): void {
    this.budget.set({ key: 'any', label: 'Any budget', min: 0, max: Number.MAX_SAFE_INTEGER });
    this.mood.set('any');
  }
}

/** The first occasion listed for a recipient is the best fit, so it sorts first. */
function rank(who: Recipient, entry: { categorySlug: string }): number {
  const index = who.slugs.indexOf(entry.categorySlug);
  return index === -1 ? 0 : who.slugs.length - index;
}
