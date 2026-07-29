import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Admin } from '@core/services/admin';
import { Notify } from '@core/services/notify';
import { DashboardStats, OrderStatus, STATUS_LABEL, SeriesPoint } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { TrendChart } from './charts/trend-chart';
import { BarList, BarRow } from './charts/bar-list';
import { ShareBar, ShareSlice } from './charts/share-bar';
import { SparkLine } from './charts/spark-line';

type Range = 'daily' | 'weekly' | 'monthly';

/** Statuses that mean "still ours to finish". */
const OPEN: OrderStatus[] = ['Pending', 'Processing', 'Shipped'];

@Component({
  selector: 'Kova-dashboard',
  imports: [
    RouterLink, DatePipe, MatButtonModule, MatIconModule, PricePipe,
    TrendChart, BarList, ShareBar, SparkLine
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Overview</span>
        <h1>Dashboard</h1>
        <small class="muted numeric">Reading taken {{ takenAt() | date:'d MMM, HH:mm' }}</small>
      </div>

      <div class="actions">
        <div class="bell-wrap">
          <button mat-stroked-button class="bell" (click)="alertsOpen.set(!alertsOpen())"
                  [attr.aria-expanded]="alertsOpen()" aria-haspopup="true">
            <mat-icon fontSet="material-symbols-outlined">notifications</mat-icon>
            Alerts
            @if (alerts().length) { <span class="pip numeric">{{ alerts().length }}</span> }
          </button>

          @if (alertsOpen()) {
            <div class="alerts" role="dialog" aria-label="Alerts">
              @for (alert of alerts(); track alert.text) {
                <a class="alert" [routerLink]="alert.link" (click)="alertsOpen.set(false)">
                  <mat-icon fontSet="material-symbols-outlined" [class]="alert.tone">{{ alert.icon }}</mat-icon>
                  <span>{{ alert.text }}</span>
                  <mat-icon fontSet="material-symbols-outlined" class="go">chevron_right</mat-icon>
                </a>
              } @empty {
                <p class="quiet muted">Nothing needs you right now.</p>
              }
            </div>
          }
        </div>

        <button mat-stroked-button (click)="exportCsv()" [disabled]="!stats()">
          <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
          Export
        </button>
        <button mat-stroked-button (click)="load()">
          <mat-icon fontSet="material-symbols-outlined" [class.spin]="loading()">refresh</mat-icon>
          Refresh
        </button>
        <a mat-flat-button routerLink="../products">
          <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
          New product
        </a>
      </div>
    </header>

    @if (stats(); as s) {
      <!-- The four the owner opens the page for. -->
      <div class="tiles">
        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Total sales</span>
            <span class="delta" [class.down]="s.deltas.revenue < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.revenue < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.revenue > 0 ? '+' : '' }}{{ s.deltas.revenue }}%
            </span>
          </div>
          <strong class="figure price">{{ s.revenueTotal |KovaPrice }}</strong>
          <Kova-spark-line [values]="spark(s.daily)" />
          <small class="muted numeric">{{ s.revenueThisMonth |KovaPrice }} this month · vs previous 30 days</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Total orders</span>
            <span class="delta" [class.down]="s.deltas.orders < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.orders < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.orders > 0 ? '+' : '' }}{{ s.deltas.orders }}%
            </span>
          </div>
          <strong class="figure numeric">{{ s.ordersTotal }}</strong>
          <Kova-spark-line [values]="sparkOrders(s.daily)" />
          <small class="muted numeric">{{ s.ordersPending }} still open · vs previous 30 days</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Customers</span>
            <span class="delta" [class.down]="s.deltas.customers < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.customers < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.customers > 0 ? '+' : '' }}{{ s.deltas.customers }}%
            </span>
          </div>
          <strong class="figure numeric">{{ s.customersTotal }}</strong>
          <small class="muted numeric">{{ s.customersNew }} ordered this month</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Average order</span>
            <span class="delta" [class.down]="s.deltas.aov < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.aov < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.aov > 0 ? '+' : '' }}{{ s.deltas.aov }}%
            </span>
          </div>
          <strong class="figure price">{{ s.averageOrderValue |KovaPrice }}</strong>
          <small class="muted numeric">across the last 30 days</small>
        </article>
      </div>

      <!-- Today, and the state of the book. -->
      <div class="chips">
        <a class="chip" routerLink="../orders">
          <mat-icon fontSet="material-symbols-outlined">today</mat-icon>
          <span class="k">Today's orders</span>
          <strong class="numeric">{{ s.ordersToday }}</strong>
        </a>
        <div class="chip">
          <mat-icon fontSet="material-symbols-outlined">payments</mat-icon>
          <span class="k">Today's revenue</span>
          <strong class="price">{{ s.revenueToday |KovaPrice }}</strong>
        </div>
        <a class="chip warn" routerLink="../orders">
          <mat-icon fontSet="material-symbols-outlined">pending_actions</mat-icon>
          <span class="k">Pending</span>
          <strong class="numeric">{{ s.ordersPending }}</strong>
        </a>
        <div class="chip good">
          <mat-icon fontSet="material-symbols-outlined">task_alt</mat-icon>
          <span class="k">Completed</span>
          <strong class="numeric">{{ s.ordersCompleted }}</strong>
        </div>
        <div class="chip bad">
          <mat-icon fontSet="material-symbols-outlined">cancel</mat-icon>
          <span class="k">Cancelled</span>
          <strong class="numeric">{{ s.ordersCancelled }}</strong>
        </div>
        <a class="chip" routerLink="../products">
          <mat-icon fontSet="material-symbols-outlined">inventory_2</mat-icon>
          <span class="k">Products</span>
          <strong class="numeric">{{ s.productsTotal }}</strong>
        </a>
      </div>

      <div class="board">
        <section class="panel viz wide">
          <div class="panel-head">
            <div>
              <h2>Revenue trend</h2>
              <small class="muted">{{ rangeNote() }}</small>
            </div>
            <div class="segmented" role="tablist" aria-label="Chart range">
              @for (option of ranges; track option.key) {
                <button role="tab" [class.on]="range() === option.key"
                        [attr.aria-selected]="range() === option.key"
                        (click)="range.set(option.key)">{{ option.label }}</button>
              }
            </div>
          </div>

          <Kova-trend-chart [points]="series()" [format]="short" [detail]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Order status</h2>
              <small class="muted">{{ s.ordersTotal }} orders, all time</small>
            </div>
          </div>
          <Kova-share-bar [slices]="statusSlices()" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Top-selling products</h2>
              <small class="muted">by revenue</small>
            </div>
            <a routerLink="../products" class="link">Manage</a>
          </div>
          <Kova-bar-list [rows]="topRows()" [format]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Revenue by occasion</h2>
              <small class="muted">which shelf is carrying the shop</small>
            </div>
          </div>
          <Kova-bar-list [rows]="categoryRows()" [format]="money" />
        </section>

        <section class="panel wide">
          <div class="panel-head">
            <div>
              <h2>Recent orders</h2>
              <small class="muted">the last {{ s.recentOrders.length }} to come in</small>
            </div>
            <a routerLink="../orders" class="link">All orders</a>
          </div>

          <div class="scroll">
            <table>
              <thead>
                <tr>
                  <th>Order</th><th>Placed</th><th>Items</th>
                  <th>Status</th><th>Payment</th><th class="right">Total</th>
                </tr>
              </thead>
              <tbody>
                @for (order of s.recentOrders; track order.id) {
                  <tr>
                    <td class="order-no">{{ order.orderNumber }}</td>
                    <td class="numeric muted">{{ order.createdAt | date:'d MMM, HH:mm' }}</td>
                    <td class="numeric">{{ order.itemCount }}</td>
                    <td><span class="pill" [class]="tone(order.status)">{{ label(order.status) }}</span></td>
                    <td class="numeric muted">{{ order.paymentStatus }}</td>
                    <td class="right numeric">{{ order.total |KovaPrice }}</td>
                  </tr>
                } @empty {
                  <tr><td colspan="6" class="muted">No orders yet.</td></tr>
                }
              </tbody>
            </table>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>Low on stock</h2>
              <small class="muted">{{ s.lowStockCount }} below twelve</small>
            </div>
            <a routerLink="../products" class="link">Restock</a>
          </div>

          <ul class="stock">
            @for (item of s.lowStock; track item.productId) {
              <li>
                <span class="name">{{ item.name }}</span>
                <span class="left numeric" [class.out]="item.stock === 0">
                  {{ item.stock === 0 ? 'Sold out' : item.stock + ' left' }}
                </span>
              </li>
            } @empty {
              <li class="muted">Every shelf is stocked.</li>
            }
          </ul>
        </section>
      </div>
    } @else if (loading()) {
      <div class="tiles">
        @for (slot of skeleton; track slot) { <div class="tile ghost"></div> }
      </div>
    } @else {
      <p class="muted">The dashboard could not be loaded. Try refreshing.</p>
    }
  `,
  styles: `
    /* ---- Header ----------------------------------------------------------- */
    .head {
      display: flex; align-items: end; justify-content: space-between; gap: 20px;
      flex-wrap: wrap; margin-bottom: 26px;
    }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }
    .actions { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
    .actions mat-icon { font-size: 19px; width: 19px; height: 19px; }
    .spin { animation: turn 900ms linear infinite; }
    @keyframes turn { to { transform: rotate(360deg); } }

    .bell-wrap { position: relative; }
    .pip {
      display: inline-grid; place-items: center; min-width: 18px; height: 18px;
      margin-left: 6px; padding: 0 5px; border-radius: 999px;
      background: var(--mat-sys-error); color: var(--mat-sys-on-error);
      font-size: 0.625rem; font-weight: 700;
    }
    .alerts {
      position: absolute; top: calc(100% + 8px); right: 0; z-index: 30; width: 330px;
      padding: 6px; border-radius: 14px;
      background: var(--mat-sys-surface-container-high);
      border: 1px solid var(--Kova-rule);
      box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);
    }
    .alert {
      display: grid; grid-template-columns: 20px 1fr 18px; align-items: center; gap: 10px;
      padding: 11px 10px; border-radius: 10px; font-size: 0.8125rem;
    }
    .alert:hover { background: var(--mat-sys-surface-container-highest); }
    .alert mat-icon { font-size: 19px; width: 19px; height: 19px; }
    .alert .go { color: var(--mat-sys-on-surface-variant); font-size: 17px; }
    .alert .critical { color: var(--viz-critical, #d03b3b); }
    .alert .warning { color: var(--viz-warning, #fab219); }
    .quiet { padding: 14px 10px; margin: 0; font-size: 0.8125rem; }

    /* ---- Tiles -------------------------------------------------------------- */
    .tiles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 16px; }
    .tile {
      display: flex; flex-direction: column; gap: 10px;
      padding: 20px; border-radius: 16px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .tile-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
    .figure { font-size: 1.75rem; font-weight: 600; line-height: 1; }
    .tile small { font-size: 0.6875rem; }
    .tile.ghost { height: 148px; background: var(--mat-sys-surface-container); animation: pulse 1.4s ease-in-out infinite; }
    @keyframes pulse { 50% { opacity: 0.55; } }

    .delta {
      display: inline-flex; align-items: center; gap: 3px;
      font-family: var(--Kova-mono); font-size: 0.6875rem; font-weight: 600;
      padding: 3px 8px; border-radius: 999px;
      color: var(--viz-good); background: color-mix(in srgb, var(--viz-good) 14%, transparent);
    }
    .delta.down { color: var(--viz-critical); background: color-mix(in srgb, var(--viz-critical) 14%, transparent); }
    .delta mat-icon { font-size: 14px; width: 14px; height: 14px; }

    /* ---- Chips -------------------------------------------------------------- */
    .chips { display: grid; grid-template-columns: repeat(6, 1fr); gap: 12px; margin-bottom: 30px; }
    .chip {
      display: flex; flex-direction: column; gap: 5px;
      padding: 14px 16px; border-radius: 14px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-lowest);
      transition: border-color 160ms ease;
    }
    a.chip:hover { border-color: var(--mat-sys-primary); }
    .chip mat-icon { font-size: 19px; width: 19px; height: 19px; color: var(--mat-sys-on-surface-variant); }
    .chip .k { font-size: 0.6875rem; color: var(--mat-sys-on-surface-variant); }
    .chip strong { font-size: 1.125rem; font-weight: 600; }
    .chip.warn mat-icon { color: var(--viz-warning); }
    .chip.good mat-icon { color: var(--viz-good); }
    .chip.bad mat-icon { color: var(--viz-critical); }

    /* ---- Panels -------------------------------------------------------------- */
    .board { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
    .panel {
      padding: 22px; border-radius: 16px; min-width: 0;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .wide { grid-column: 1 / -1; }
    .panel-head {
      display: flex; align-items: start; justify-content: space-between; gap: 16px;
      margin-bottom: 22px;
    }
    .panel h2 { font-size: 1.0625rem; }
    .panel-head small { display: block; margin-top: 3px; font-size: 0.75rem; }
    .link { font-size: 0.8125rem; color: var(--mat-sys-primary); white-space: nowrap; }

    .segmented {
      display: inline-flex; padding: 3px; border-radius: 999px; flex: none;
      background: var(--mat-sys-surface-container-high);
    }
    .segmented button {
      padding: 6px 15px; border: 0; border-radius: 999px; cursor: pointer;
      font: inherit; font-size: 0.75rem; background: transparent;
      color: var(--mat-sys-on-surface-variant); transition: background 160ms ease, color 160ms ease;
    }
    .segmented button.on {
      background: var(--mat-sys-surface); color: var(--mat-sys-on-surface); font-weight: 600;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);
    }

    /* ---- Tables and lists ------------------------------------------------------ */
    .scroll { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 11px 10px; border-bottom: 1px solid var(--Kova-rule); white-space: nowrap; }
    th {
      font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant);
    }
    tbody tr:last-child td { border-bottom: 0; }
    tbody tr:hover { background: var(--mat-sys-surface-container); }
    .right { text-align: right; }
    .order-no { font-family: var(--Kova-mono); font-weight: 600; font-size: 0.8125rem; }

    .pill {
      display: inline-block; padding: 3px 10px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.625rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .pill.open { background: color-mix(in srgb, var(--viz-warning) 20%, transparent); color: var(--mat-sys-on-surface); }
    .pill.done { background: color-mix(in srgb, var(--viz-good) 20%, transparent); color: var(--mat-sys-on-surface); }
    .pill.stop { background: color-mix(in srgb, var(--viz-critical) 20%, transparent); color: var(--mat-sys-on-surface); }

    .stock { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
    .stock li {
      display: flex; align-items: center; justify-content: space-between; gap: 14px;
      padding: 11px 0; border-bottom: 1px solid var(--Kova-rule); font-size: 0.875rem;
    }
    .stock li:last-child { border-bottom: 0; }
    .name { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .left {
      flex: none; font-size: 0.6875rem; padding: 3px 9px; border-radius: 999px;
      background: color-mix(in srgb, var(--viz-warning) 20%, transparent);
    }
    .left.out { background: color-mix(in srgb, var(--viz-critical) 22%, transparent); }

    /* ---- Responsive -------------------------------------------------------------- */
    @media (max-width: 1199px) {
      .chips { grid-template-columns: repeat(3, 1fr); }
    }
    @media (max-width: 899px) {
      .tiles { grid-template-columns: repeat(2, 1fr); }
      .board { grid-template-columns: 1fr; }
      .wide { grid-column: auto; }
    }
    @media (max-width: 599px) {
      .tiles, .chips { grid-template-columns: 1fr; }
      .head { align-items: start; }
      .alerts { width: min(330px, calc(100vw - 40px)); }
    }
  `
})
export class Dashboard {
  private readonly admin = inject(Admin);
  private readonly notify = inject(Notify);
  private readonly price = new PricePipe();

  protected readonly stats = signal<DashboardStats | null>(null);
  protected readonly loading = signal(true);
  protected readonly takenAt = signal(Date.now());
  protected readonly alertsOpen = signal(false);
  protected readonly range = signal<Range>('daily');

  protected readonly skeleton = [0, 1, 2, 3];
  protected readonly ranges: { key: Range; label: string }[] = [
    { key: 'daily', label: 'Daily' },
    { key: 'weekly', label: 'Weekly' },
    { key: 'monthly', label: 'Monthly' }
  ];

  /** Full rupees for tooltips and tables. */
  protected readonly money = (value: number) => this.price.transform(value);

  /** Short rupees for axis ticks, where 60px is all the room there is. */
  private readonly compact = new Intl.NumberFormat('en-IN', {
    style: 'currency', currency: 'INR', notation: 'compact', maximumFractionDigits: 1
  });
  protected readonly short = (value: number) => this.compact.format(value);

  constructor() {
    this.load();
  }

  protected readonly series = computed<SeriesPoint[]>(() => {
    const stats = this.stats();
    if (!stats) return [];
    return this.range() === 'daily' ? stats.daily
      : this.range() === 'weekly' ? stats.weekly
      : stats.monthly;
  });

  protected readonly rangeNote = computed(() =>
    this.range() === 'daily' ? 'the last fourteen days'
    : this.range() === 'weekly' ? 'the last twelve weeks'
    : 'the last twelve months');

  /** Stages walk the ramp; cancelled and returned step out of it. */
  protected readonly statusSlices = computed<ShareSlice[]>(() =>
    (this.stats()?.statusBreakdown ?? []).map(row => ({
      label: STATUS_LABEL[row.status],
      value: row.count,
      kind: row.status === 'Cancelled' ? 'critical' : 'stage'
    })));

  protected readonly topRows = computed<BarRow[]>(() =>
    (this.stats()?.topProducts ?? []).map(product => ({
      label: product.name,
      value: product.revenue,
      note: `${product.unitsSold} units sold`
    })));

  protected readonly categoryRows = computed<BarRow[]>(() =>
    (this.stats()?.categoryRevenue ?? []).slice(0, 6).map(row => ({
      label: row.name,
      value: row.revenue
    })));

  /** What actually needs the owner's attention, worst first. */
  protected readonly alerts = computed(() => {
    const stats = this.stats();
    if (!stats) return [];

    const rows: { icon: string; tone: string; text: string; link: string }[] = [];
    const soldOut = stats.lowStock.filter(item => item.stock === 0).length;

    // New orders lead: they are the only alert with money waiting behind it.
    if (stats.ordersToday) {
      rows.push({
        icon: 'notifications_active', tone: 'good', link: '../orders',
        text: `${stats.ordersToday} new order${stats.ordersToday === 1 ? '' : 's'} came in today.`
      });
    }
    if (soldOut) {
      rows.push({
        icon: 'error', tone: 'critical', link: '../products',
        text: `${soldOut} product${soldOut === 1 ? ' is' : 's are'} sold out and still listed.`
      });
    }
    if (stats.lowStockCount) {
      rows.push({
        icon: 'inventory', tone: 'warning', link: '../products',
        text: `${stats.lowStockCount} products are down to twelve or fewer.`
      });
    }
    if (stats.ordersPending) {
      rows.push({
        icon: 'local_shipping', tone: 'warning', link: '../orders',
        text: `${stats.ordersPending} orders are still waiting to be finished.`
      });
    }
    if (stats.ordersCancelled) {
      rows.push({
        icon: 'cancel', tone: 'critical', link: '../orders',
        text: `${stats.ordersCancelled} orders were cancelled — worth a look.`
      });
    }
    return rows;
  });

  protected load(): void {
    this.loading.set(true);
    this.admin.dashboard().subscribe({
      next: stats => {
        this.stats.set(stats);
        this.takenAt.set(Date.now());
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  protected spark(points: SeriesPoint[]): number[] {
    return points.map(point => point.revenue);
  }

  protected sparkOrders(points: SeriesPoint[]): number[] {
    return points.map(point => point.orders);
  }

  protected label(status: OrderStatus): string {
    return STATUS_LABEL[status];
  }

  protected tone(status: OrderStatus): string {
    if (status === 'Delivered') return 'done';
    if (status === 'Cancelled') return 'stop';
    return OPEN.includes(status) ? 'open' : '';
  }

  /** Downloads the current reading as a CSV, so it can go into a spreadsheet. */
  protected exportCsv(): void {
    const stats = this.stats();
    if (!stats) return;

    const rows: string[][] = [
      ['Metric', 'Value'],
      ['Total sales', `${stats.revenueTotal}`],
      ['Revenue this month', `${stats.revenueThisMonth}`],
      ["Today's revenue", `${stats.revenueToday}`],
      ['Average order value', `${stats.averageOrderValue}`],
      ['Total orders', `${stats.ordersTotal}`],
      ["Today's orders", `${stats.ordersToday}`],
      ['Pending orders', `${stats.ordersPending}`],
      ['Completed orders', `${stats.ordersCompleted}`],
      ['Cancelled orders', `${stats.ordersCancelled}`],
      ['Total customers', `${stats.customersTotal}`],
      ['Total products', `${stats.productsTotal}`],
      ['Low stock products', `${stats.lowStockCount}`],
      [],
      ['Period', 'Revenue', 'Orders'],
      ...this.series().map(point => [point.label, `${point.revenue}`, `${point.orders}`]),
      [],
      ['Top product', 'Units', 'Revenue'],
      ...stats.topProducts.map(product => [product.name, `${product.unitsSold}`, `${product.revenue}`])
    ];

    const csv = rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `anuvesh-dashboard-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);

    this.notify.done('Dashboard exported');
  }
}
