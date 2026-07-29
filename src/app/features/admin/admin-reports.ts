import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Admin } from '@core/services/admin';
import { Notify } from '@core/services/notify';
import { DashboardStats, SeriesPoint } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { TrendChart } from './charts/trend-chart';
import { BarList, BarRow } from './charts/bar-list';

type Range = 'daily' | 'weekly' | 'monthly';

@Component({
  selector: 'Kova-admin-reports',
  imports: [MatButtonModule, MatIconModule, PricePipe, TrendChart, BarList],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Overview</span>
        <h1>Reports</h1>
        <small class="muted">The same book as the dashboard, with the numbers written out.</small>
      </div>
      <div class="actions">
        <div class="segmented" role="tablist" aria-label="Reporting period">
          @for (option of ranges; track option.key) {
            <button role="tab" [class.on]="range() === option.key"
                    [attr.aria-selected]="range() === option.key"
                    (click)="range.set(option.key)">{{ option.label }}</button>
          }
        </div>
        <button mat-flat-button (click)="exportCsv()" [disabled]="!stats()">
          <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
          Export CSV
        </button>
      </div>
    </header>

    @if (stats(); as s) {
      <div class="summary">
        <div><span class="eyebrow">Revenue in period</span><strong class="price">{{ periodRevenue() |KovaPrice }}</strong></div>
        <div><span class="eyebrow">Orders in period</span><strong class="numeric">{{ periodOrders() }}</strong></div>
        <div><span class="eyebrow">Average order</span><strong class="price">{{ periodAov() |KovaPrice }}</strong></div>
        <div><span class="eyebrow">Best {{ unit() }}</span><strong class="numeric">{{ best()?.label ?? '—' }}</strong></div>
      </div>

      <section class="panel viz">
        <div class="panel-head">
          <div><h2>Revenue, {{ note() }}</h2></div>
        </div>
        <Kova-trend-chart [points]="series()" [format]="short" [detail]="money" />
      </section>

      <div class="pair">
        <section class="panel viz">
          <div class="panel-head"><div><h2>Best sellers by revenue</h2></div></div>
          <Kova-bar-list [rows]="topRows()" [format]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head"><div><h2>Revenue by occasion</h2></div></div>
          <Kova-bar-list [rows]="categoryRows()" [format]="money" />
        </section>
      </div>

      <section class="panel">
        <div class="panel-head"><div><h2>The figures, written out</h2></div></div>
        <div class="scroll">
          <table>
            <thead>
              <tr><th>{{ unit() }}</th><th class="right">Orders</th><th class="right">Revenue</th><th class="right">Average order</th></tr>
            </thead>
            <tbody>
              @for (point of series(); track point.label) {
                <tr>
                  <td class="numeric">{{ point.label }}</td>
                  <td class="right numeric">{{ point.orders }}</td>
                  <td class="right numeric">{{ point.revenue |KovaPrice }}</td>
                  <td class="right numeric muted">{{ (point.orders ? point.revenue / point.orders : 0) |KovaPrice }}</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td class="right numeric">{{ periodOrders() }}</td>
                <td class="right numeric">{{ periodRevenue() |KovaPrice }}</td>
                <td class="right numeric">{{ periodAov() |KovaPrice }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    } @else {
      <p class="muted">Loading the book…</p>
    }
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }
    .head small { display: block; font-size: 0.8125rem; }
    .actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }

    .segmented { display: inline-flex; padding: 3px; border-radius: 999px; background: var(--mat-sys-surface-container-high); }
    .segmented button {
      padding: 7px 16px; border: 0; border-radius: 999px; cursor: pointer;
      font: inherit; font-size: 0.75rem; background: transparent;
      color: var(--mat-sys-on-surface-variant);
    }
    .segmented button.on {
      background: var(--mat-sys-surface); color: var(--mat-sys-on-surface); font-weight: 600;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
    }

    .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 20px; }
    .summary div {
      display: flex; flex-direction: column; gap: 7px; padding: 18px 20px;
      border-radius: 14px; border: 1px solid var(--Kova-rule);
      background: var(--mat-sys-surface-container-low);
    }
    .summary strong { font-size: 1.5rem; font-weight: 600; }

    .panel {
      padding: 22px; margin-bottom: 20px; border-radius: 16px; min-width: 0;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .panel-head { margin-bottom: 22px; }
    .panel h2 { font-size: 1.0625rem; }
    .pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }

    .scroll { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 11px 10px; border-bottom: 1px solid var(--Kova-rule); white-space: nowrap; }
    th { font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant); }
    tfoot td { font-weight: 600; border-bottom: 0; border-top: 2px solid var(--Kova-rule); }
    .right { text-align: right; }

    @media (max-width: 1099px) { .summary { grid-template-columns: repeat(2, 1fr); } .pair { grid-template-columns: 1fr; } }
    @media (max-width: 599px) { .summary { grid-template-columns: 1fr; } }
  `
})
export class AdminReports {
  private readonly admin = inject(Admin);
  private readonly notify = inject(Notify);
  private readonly price = new PricePipe();

  protected readonly stats = signal<DashboardStats | null>(null);
  protected readonly range = signal<Range>('monthly');

  protected readonly ranges: { key: Range; label: string }[] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' }
  ];

  protected readonly money = (value: number) => this.price.transform(value);
  private readonly compact = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', notation: 'compact', maximumFractionDigits: 1
  });
  protected readonly short = (value: number) => this.compact.format(value);

  constructor() {
    this.admin.dashboard().subscribe(stats => this.stats.set(stats));
  }

  protected readonly series = computed<SeriesPoint[]>(() => {
    const stats = this.stats();
    if (!stats) return [];
    return this.range() === 'daily' ? stats.daily
      : this.range() === 'weekly' ? stats.weekly
      : stats.monthly;
  });

  protected readonly unit = computed(() =>
    this.range() === 'daily' ? 'Day' : this.range() === 'weekly' ? 'Week' : 'Month');

  protected readonly note = computed(() =>
    this.range() === 'daily' ? 'the last fourteen days'
    : this.range() === 'weekly' ? 'the last twelve weeks'
    : 'the last twelve months');

  protected readonly periodRevenue = computed(() =>
    this.series().reduce((total, point) => total + point.revenue, 0));

  protected readonly periodOrders = computed(() =>
    this.series().reduce((total, point) => total + point.orders, 0));

  protected readonly periodAov = computed(() => {
    const orders = this.periodOrders();
    return orders ? Math.round(this.periodRevenue() / orders) : 0;
  });

  protected readonly best = computed<SeriesPoint | null>(() =>
    [...this.series()].sort((a, b) => b.revenue - a.revenue)[0] ?? null);

  protected readonly topRows = computed<BarRow[]>(() =>
    (this.stats()?.topProducts ?? []).map(product => ({
      label: product.name, value: product.revenue, note: `${product.unitsSold} units sold`
    })));

  protected readonly categoryRows = computed<BarRow[]>(() =>
    (this.stats()?.categoryRevenue ?? []).map(row => ({ label: row.name, value: row.revenue })));

  protected exportCsv(): void {
    const rows = [
      [this.unit(), 'Orders', 'Revenue'],
      ...this.series().map(point => [point.label, `${point.orders}`, `${point.revenue}`]),
      ['Total', `${this.periodOrders()}`, `${this.periodRevenue()}`]
    ];

    const csv = rows.map(row => row.map(cell => `"${cell}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `anuvesh-report-${this.range()}-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    this.notify.done('Report exported');
  }
}
