import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Notify } from '@core/services/notify';
import { PricePipe } from '@core/services/currency';

export interface Coupon {
  code: string;
  kind: 'percent' | 'amount' | 'shipping';
  value: number;
  minSpend: number;
  used: number;
  limit: number;
  expiresAt: string;
  active: boolean;
}

/** Seeded so the desk looks the same every visit; edits last for the session. */
const SEED: Coupon[] = [
  { code: 'ANUVESH10', kind: 'percent', value: 10, minSpend: 999, used: 184, limit: 500, expiresAt: '2026-12-31', active: true },
  { code: 'SAWAN25', kind: 'percent', value: 25, minSpend: 1499, used: 92, limit: 150, expiresAt: '2026-08-31', active: true },
  { code: 'FREESHIP', kind: 'shipping', value: 0, minSpend: 599, used: 421, limit: 1000, expiresAt: '2026-10-31', active: true },
  { code: 'RAKHI200', kind: 'amount', value: 200, minSpend: 1299, used: 150, limit: 150, expiresAt: '2026-08-19', active: false },
  { code: 'BULK20', kind: 'percent', value: 20, minSpend: 19999, used: 11, limit: 50, expiresAt: '2027-03-31', active: true },
  { code: 'WELCOME100', kind: 'amount', value: 100, minSpend: 499, used: 613, limit: 2000, expiresAt: '2026-12-31', active: true }
];

@Component({
  selector: 'Kova-admin-coupons',
  imports: [DatePipe, MatButtonModule, MatIconModule, PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Selling</span>
        <h1>Coupons</h1>
        <small class="muted numeric">{{ live().length }} live · {{ redeemed() }} redemptions all time</small>
      </div>
      <button mat-flat-button (click)="composing.set(!composing())">
        <mat-icon fontSet="material-symbols-outlined">{{ composing() ? 'close' : 'add' }}</mat-icon>
        {{ composing() ? 'Cancel' : 'New coupon' }}
      </button>
    </header>

    @if (composing()) {
      <form class="compose" (submit)="create($event)">
        <label>
          <span class="eyebrow">Code</span>
          <input [value]="draft.code()" (input)="draft.code.set(up($event))" placeholder="DIWALI15" required />
        </label>
        <label>
          <span class="eyebrow">Kind</span>
          <select [value]="draft.kind()" (change)="draft.kind.set($any($event.target).value)">
            <option value="percent">Percent off</option>
            <option value="amount">Amount off</option>
            <option value="shipping">Free shipping</option>
          </select>
        </label>
        <label>
          <span class="eyebrow">Value</span>
          <input type="number" min="0" [value]="draft.value()" (input)="draft.value.set(num($event))"
                 [disabled]="draft.kind() === 'shipping'" />
        </label>
        <label>
          <span class="eyebrow">Minimum spend</span>
          <input type="number" min="0" [value]="draft.minSpend()" (input)="draft.minSpend.set(num($event))" />
        </label>
        <label>
          <span class="eyebrow">Redemption cap</span>
          <input type="number" min="1" [value]="draft.limit()" (input)="draft.limit.set(num($event))" />
        </label>
        <label>
          <span class="eyebrow">Expires</span>
          <input type="date" [value]="draft.expiresAt()" (input)="draft.expiresAt.set($any($event.target).value)" />
        </label>
        <button mat-flat-button type="submit">Create coupon</button>
      </form>
    }

    <div class="scroll">
      <table>
        <thead>
          <tr>
            <th>Code</th><th>Discount</th><th>Minimum</th>
            <th>Redeemed</th><th>Expires</th><th>State</th><th class="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (coupon of coupons(); track coupon.code) {
            <tr [class.spent]="coupon.used >= coupon.limit">
              <td class="code">{{ coupon.code }}</td>
              <td>{{ describe(coupon) }}</td>
              <td class="numeric">{{ coupon.minSpend |KovaPrice }}</td>
              <td>
                <div class="use">
                  <span class="numeric">{{ coupon.used }} / {{ coupon.limit }}</span>
                  <span class="meter"><span class="fill" [style.width.%]="pct(coupon)"></span></span>
                </div>
              </td>
              <td class="numeric muted">{{ coupon.expiresAt | date:'d MMM yyyy' }}</td>
              <td>
                <span class="pill" [class]="state(coupon)">{{ stateLabel(coupon) }}</span>
              </td>
              <td class="right">
                <button mat-button (click)="toggle(coupon)">{{ coupon.active ? 'Pause' : 'Resume' }}</button>
                <button mat-icon-button (click)="copy(coupon.code)" [attr.aria-label]="'Copy ' + coupon.code">
                  <mat-icon fontSet="material-symbols-outlined">{{ copied() === coupon.code ? 'check' : 'content_copy' }}</mat-icon>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }

    .compose {
      display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; align-items: end;
      padding: 22px; margin-bottom: 26px; border-radius: 16px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .compose label { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .compose input, .compose select {
      height: 42px; padding: 0 12px; border-radius: 10px; font: inherit; font-size: 0.875rem;
      color: var(--mat-sys-on-surface); background: var(--mat-sys-surface-container);
      border: 1px solid var(--Kova-rule);
    }
    .compose input:focus, .compose select:focus { outline: none; border-color: var(--mat-sys-primary); }
    .compose input:disabled { opacity: 0.5; }
    .compose button { height: 42px; }

    .scroll { overflow-x: auto; border-radius: 16px; border: 1px solid var(--Kova-rule); }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 13px 14px; border-bottom: 1px solid var(--Kova-rule); white-space: nowrap; }
    th {
      font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant);
      background: var(--mat-sys-surface-container-low);
    }
    tbody tr:last-child td { border-bottom: 0; }
    tbody tr:hover { background: var(--mat-sys-surface-container); }
    tr.spent .code { text-decoration: line-through; opacity: 0.6; }
    .right { text-align: right; }
    .code { font-family: var(--Kova-mono); font-weight: 600; letter-spacing: 0.06em; }

    .use { display: flex; flex-direction: column; gap: 5px; min-width: 118px; }
    .use span:first-child { font-size: 0.75rem; }
    .meter { height: 5px; border-radius: 3px; background: var(--mat-sys-surface-container-highest); overflow: hidden; }
    .fill { display: block; height: 100%; border-radius: 3px; background: var(--mat-sys-primary); }

    .pill {
      display: inline-block; padding: 3px 10px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.625rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .pill.live { background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent); color: var(--mat-sys-on-surface); }
    .pill.gone { background: color-mix(in srgb, var(--viz-critical, #d03b3b) 20%, transparent); color: var(--mat-sys-on-surface); }

    @media (max-width: 899px) { .compose { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 599px) { .compose { grid-template-columns: 1fr; } }
  `
})
export class AdminCoupons {
  private readonly notify = inject(Notify);
  private readonly price = new PricePipe();

  protected readonly coupons = signal<Coupon[]>(SEED);
  protected readonly composing = signal(false);
  protected readonly copied = signal('');

  protected readonly draft = {
    code: signal(''),
    kind: signal<Coupon['kind']>('percent'),
    value: signal(10),
    minSpend: signal(999),
    limit: signal(200),
    expiresAt: signal('2026-12-31')
  };

  protected readonly live = computed(() => this.coupons().filter(coupon => this.state(coupon) === 'live'));
  protected readonly redeemed = computed(() =>
    this.coupons().reduce((total, coupon) => total + coupon.used, 0));

  protected describe(coupon: Coupon): string {
    if (coupon.kind === 'shipping') return 'Free delivery';
    if (coupon.kind === 'percent') return `${coupon.value}% off`;
    return `${this.price.transform(coupon.value)} off`;
  }

  protected pct(coupon: Coupon): number {
    return Math.min(100, (coupon.used / Math.max(1, coupon.limit)) * 100);
  }

  protected state(coupon: Coupon): 'live' | 'gone' | '' {
    if (!coupon.active) return '';
    if (coupon.used >= coupon.limit) return 'gone';
    return new Date(coupon.expiresAt).getTime() < Date.now() ? 'gone' : 'live';
  }

  protected stateLabel(coupon: Coupon): string {
    const state = this.state(coupon);
    if (state === 'live') return 'Live';
    if (state === '') return 'Paused';
    return coupon.used >= coupon.limit ? 'Used up' : 'Expired';
  }

  protected toggle(coupon: Coupon): void {
    this.coupons.update(rows => rows.map(row =>
      row.code === coupon.code ? { ...row, active: !row.active } : row));
    this.notify.done(`${coupon.code} ${coupon.active ? 'paused' : 'resumed'}`);
  }

  protected copy(code: string): void {
    navigator.clipboard?.writeText(code).then(() => {
      this.copied.set(code);
      setTimeout(() => this.copied.set(''), 2000);
    }, () => void 0);
  }

  protected create(event: Event): void {
    event.preventDefault();
    const code = this.draft.code().trim().toUpperCase();

    if (!code) { this.notify.problem('A coupon needs a code.'); return; }
    if (this.coupons().some(row => row.code === code)) {
      this.notify.problem(`${code} already exists.`);
      return;
    }

    this.coupons.update(rows => [{
      code,
      kind: this.draft.kind(),
      value: this.draft.kind() === 'shipping' ? 0 : this.draft.value(),
      minSpend: this.draft.minSpend(),
      used: 0,
      limit: Math.max(1, this.draft.limit()),
      expiresAt: this.draft.expiresAt(),
      active: true
    }, ...rows]);

    this.draft.code.set('');
    this.composing.set(false);
    // Session-only until the API lands: the coupon lives in this signal alone.
    this.notify.done(`${code} created for this session`);
  }

  protected up(event: Event): string {
    return (event.target as HTMLInputElement).value.toUpperCase();
  }

  protected num(event: Event): number {
    return Number((event.target as HTMLInputElement).value) || 0;
  }
}
