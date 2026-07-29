import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Admin } from '@core/services/admin';
import { StaticAdmin } from '@core/services/admin.static';
import { Notify } from '@core/services/notify';
import {
  ALL_STATUSES, Order, OrderListItem, OrderSource, OrderStatus, Paged,
  STATUS_LABEL, TRACKING_STEPS
} from '@core/models';
import { PricePipe } from '@core/services/currency';

@Component({
  selector: 'Kova-admin-orders',
  imports: [DatePipe, FormsModule, MatButtonModule, MatIconModule, MatPaginatorModule, PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Fulfilment</span>
        <h1>Orders</h1>
        <small class="muted numeric">{{ result()?.total ?? 0 }} matching · {{ openCount() }} still open</small>
      </div>
      <button mat-stroked-button (click)="exportCsv()" [disabled]="!result()?.items?.length">
        <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
        Export page
      </button>
    </header>

    <div class="filters">
      <div class="search">
        <mat-icon fontSet="material-symbols-outlined">search</mat-icon>
        <input type="search" [value]="term()" (input)="onSearch($event)"
               placeholder="Order number, customer, phone, city or product"
               aria-label="Search orders" />
        @if (term()) {
          <button class="clear" (click)="term.set(''); load(1)" aria-label="Clear the search">
            <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
          </button>
        }
      </div>

      <div class="chips" role="group" aria-label="Filter by status">
        <button [class.on]="!statusFilter()" (click)="setStatus(null)">All</button>
        @for (status of statuses; track status) {
          <button [class.on]="statusFilter() === status" (click)="setStatus(status)">
            {{ label(status) }}
          </button>
        }
      </div>

      <div class="chips" role="group" aria-label="Filter by order source">
        <button [class.on]="!sourceFilter()" (click)="setSource(null)">Any source</button>
        @for (source of sources; track source) {
          <button [class.on]="sourceFilter() === source" (click)="setSource(source)">
            <mat-icon fontSet="material-symbols-outlined">{{ source === 'Web' ? 'desktop_windows' : 'smartphone' }}</mat-icon>
            {{ source }}
          </button>
        }
      </div>
    </div>

    @if (result(); as page) {
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th>Order ID</th><th>Customer</th><th>Date &amp; time</th>
              <th class="right">Items</th><th class="right">Amount</th>
              <th>Payment</th><th>Status</th><th>Source</th><th></th>
            </tr>
          </thead>
          <tbody>
            @for (order of page.items; track order.id) {
              <tr [class.open-row]="active()?.id === order.id" (click)="openOrder(order)">
                <td class="order-no">{{ order.orderNumber }}</td>
                <td>{{ order.customerName }}</td>
                <td class="numeric muted">{{ order.createdAt | date:'d MMM yyyy, HH:mm' }}</td>
                <td class="right numeric">{{ order.itemCount }}</td>
                <td class="right numeric">{{ order.total |KovaPrice }}</td>
                <td><span class="pill pay" [class]="payTone(order.paymentStatus)">{{ order.paymentStatus }}</span></td>
                <td><span class="pill" [class]="tone(order.status)">{{ label(order.status) }}</span></td>
                <td>
                  <span class="src">
                    <mat-icon fontSet="material-symbols-outlined">{{ order.source === 'Web' ? 'desktop_windows' : 'smartphone' }}</mat-icon>
                    {{ order.source }}
                  </span>
                </td>
                <td class="right">
                  <mat-icon fontSet="material-symbols-outlined" class="chev"
                            [class.turned]="active()?.id === order.id">expand_more</mat-icon>
                </td>
              </tr>

              @if (active(); as o) {
                @if (o.id === order.id) {
                  <tr class="detail-row">
                    <td colspan="9">
                      <div class="detail">
                        <section>
                          <h4 class="eyebrow">Customer</h4>
                          <dl>
                            <div><dt>Name</dt><dd>{{ o.customerName }}</dd></div>
                            <div><dt>Email</dt><dd>{{ o.customerEmail }}</dd></div>
                            <div><dt>Phone</dt><dd class="numeric">{{ o.customerPhone }}</dd></div>
                          </dl>

                          <h4 class="eyebrow">Delivery address</h4>
                          <p class="address">
                            {{ o.shippingAddress.fullName }}<br />
                            {{ o.shippingAddress.line1 }}@if (o.shippingAddress.line2) {, {{ o.shippingAddress.line2 }}}<br />
                            {{ o.shippingAddress.city }}, {{ o.shippingAddress.state }}
                            <span class="numeric">{{ o.shippingAddress.postalCode }}</span><br />
                            {{ o.shippingAddress.country }}
                          </p>

                          <h4 class="eyebrow">Payment</h4>
                          <dl>
                            <div><dt>Method</dt><dd>{{ o.paymentMethod }}</dd></div>
                            <div><dt>State</dt><dd>{{ o.paymentStatus }}</dd></div>
                            <div><dt>Source</dt><dd>{{ o.source }}</dd></div>
                            @if (o.trackingNumber) {
                              <div><dt>Tracking</dt><dd class="numeric">{{ o.carrier }} {{ o.trackingNumber }}</dd></div>
                            }
                          </dl>
                        </section>

                        <section>
                          <h4 class="eyebrow">Products ordered</h4>
                          <ul class="items">
                            @for (item of o.items; track item.productId) {
                              <li>
                                <img [src]="item.imageUrl" alt="" />
                                <span class="what">
                                  <strong>{{ item.name }}</strong>
                                  <small class="muted numeric">{{ item.unitPrice |KovaPrice }} each</small>
                                </span>
                                <span class="numeric qty">×{{ item.quantity }}</span>
                                <span class="numeric">{{ item.lineTotal |KovaPrice }}</span>
                              </li>
                            }
                          </ul>

                          <dl class="totals">
                            <div><dt>Subtotal</dt><dd class="numeric">{{ o.subtotal |KovaPrice }}</dd></div>
                            @if (o.discount) { <div><dt>Discount</dt><dd class="numeric">−{{ o.discount |KovaPrice }}</dd></div> }
                            <div><dt>Delivery</dt><dd class="numeric">{{ o.shipping === 0 ? 'Free' : (o.shipping |KovaPrice) }}</dd></div>
                            <div><dt>Tax</dt><dd class="numeric">{{ o.tax |KovaPrice }}</dd></div>
                            <div class="grand"><dt>Total</dt><dd class="numeric">{{ o.total |KovaPrice }}</dd></div>
                          </dl>
                        </section>

                        <section>
                          <h4 class="eyebrow">Move this order along</h4>
                          <form class="update" (submit)="save($event, o)">
                            <label><span class="eyebrow">Status</span>
                              <select [value]="nextStatus()" (change)="nextStatus.set($any($event.target).value)">
                                @for (status of statuses; track status) {
                                  <option [value]="status">{{ label(status) }}</option>
                                }
                              </select>
                            </label>
                            <label><span class="eyebrow">Note for the customer</span>
                              <input [value]="note()" (input)="note.set(text($event))" placeholder="Handed to the carrier" /></label>
                            <label><span class="eyebrow">Current location</span>
                              <input [value]="location()" (input)="location.set(text($event))" placeholder="Kanpur hub" /></label>
                            <div class="pair">
                              <label><span class="eyebrow">Carrier</span>
                                <input [value]="carrier()" (input)="carrier.set(text($event))" /></label>
                              <label><span class="eyebrow">Tracking no.</span>
                                <input class="numeric" [value]="tracking()" (input)="tracking.set(text($event))" /></label>
                            </div>
                            <button mat-flat-button type="submit">Update order</button>
                          </form>

                          <h4 class="eyebrow">History</h4>
                          <ol class="timeline">
                            @for (event of o.timeline; track event.at) {
                              <li>
                                <strong>{{ label(event.status) }}</strong>
                                <span class="muted">{{ event.message }}</span>
                                <small class="muted numeric">
                                  {{ event.at | date:'d MMM, HH:mm' }}@if (event.location) { · {{ event.location }}}
                                </small>
                              </li>
                            }
                          </ol>
                        </section>
                      </div>
                    </td>
                  </tr>
                }
              }
            } @empty {
              <tr><td colspan="9" class="muted empty">No orders match those filters.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                     [pageSizeOptions]="[10, 20, 50]" (page)="onPage($event)" aria-label="Order pages" />
    }
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 22px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }

    .filters { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
    .search {
      position: relative; display: flex; align-items: center; gap: 10px;
      padding: 0 14px; height: 44px; border-radius: 999px;
      background: var(--mat-sys-surface-container); border: 1px solid var(--Kova-rule);
    }
    .search:focus-within { border-color: var(--mat-sys-primary); }
    .search mat-icon { font-size: 20px; width: 20px; height: 20px; color: var(--mat-sys-on-surface-variant); flex: none; }
    .search input {
      flex: 1; min-width: 0; border: 0; background: transparent; outline: none;
      font: inherit; font-size: 0.875rem; color: var(--mat-sys-on-surface);
    }
    .clear { display: grid; place-items: center; border: 0; background: transparent; cursor: pointer; padding: 0; }

    .chips { display: flex; gap: 8px; flex-wrap: wrap; }
    .chips button {
      display: inline-flex; align-items: center; gap: 6px;
      padding: 7px 14px; border-radius: 999px; cursor: pointer;
      font: inherit; font-size: 0.8125rem;
      color: var(--mat-sys-on-surface-variant);
      background: transparent; border: 1px solid var(--Kova-rule);
    }
    .chips button:hover { border-color: var(--mat-sys-primary); color: var(--mat-sys-on-surface); }
    .chips button.on {
      background: var(--mat-sys-secondary-container); color: var(--mat-sys-on-secondary-container);
      border-color: transparent; font-weight: 600;
    }
    .chips mat-icon { font-size: 16px; width: 16px; height: 16px; }

    .scroll { overflow-x: auto; border-radius: 16px; border: 1px solid var(--Kova-rule); }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid var(--Kova-rule); white-space: nowrap; }
    th {
      font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase;
      letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant);
      background: var(--mat-sys-surface-container-low); position: sticky; top: 0; z-index: 1;
    }
    tbody tr:not(.detail-row) { cursor: pointer; }
    tbody tr:not(.detail-row):hover { background: var(--mat-sys-surface-container); }
    tr.open-row { background: var(--mat-sys-surface-container); }
    tr.open-row td { border-bottom-color: transparent; }
    .right { text-align: right; }
    .empty { text-align: center; padding: 32px; }
    .order-no { font-family: var(--Kova-mono); font-weight: 600; font-size: 0.8125rem; }
    .chev { transition: transform 200ms ease; color: var(--mat-sys-on-surface-variant); }
    .chev.turned { transform: rotate(180deg); }
    .src { display: inline-flex; align-items: center; gap: 5px; font-size: 0.8125rem; }
    .src mat-icon { font-size: 16px; width: 16px; height: 16px; color: var(--mat-sys-on-surface-variant); }

    .pill {
      display: inline-block; padding: 3px 10px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.625rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .pill.open { background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent); color: var(--mat-sys-on-surface); }
    .pill.done { background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent); color: var(--mat-sys-on-surface); }
    .pill.stop { background: color-mix(in srgb, var(--viz-critical, #d03b3b) 22%, transparent); color: var(--mat-sys-on-surface); }
    .pill.owed { background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent); color: var(--mat-sys-on-surface); }
    .pill.paid { background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent); color: var(--mat-sys-on-surface); }

    /* ---- Expanded detail ---------------------------------------------------- */
    .detail-row td { padding: 0 14px 22px; white-space: normal; background: var(--mat-sys-surface-container); }
    .detail { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 28px; }
    .detail h4 { margin: 0 0 10px; }
    .detail h4:not(:first-child) { margin-top: 22px; }

    dl { margin: 0; display: flex; flex-direction: column; gap: 6px; }
    dl div { display: grid; grid-template-columns: 88px 1fr; gap: 10px; align-items: baseline; }
    dt { font-size: 0.75rem; color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; font-size: 0.8125rem; word-break: break-word; }
    .address { margin: 0; font-size: 0.8125rem; line-height: 1.65; }

    .items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }
    .items li { display: grid; grid-template-columns: 40px 1fr auto auto; gap: 12px; align-items: center; }
    .items img { width: 40px; height: 40px; border-radius: 8px; object-fit: cover; }
    .what { display: flex; flex-direction: column; min-width: 0; }
    .what strong { font-size: 0.8125rem; font-weight: 500; }
    .what small { font-size: 0.6875rem; }
    .qty { font-size: 0.8125rem; color: var(--mat-sys-on-surface-variant); }

    .totals { margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--Kova-rule); }
    .totals div { grid-template-columns: 1fr auto; }
    .totals .grand { padding-top: 8px; margin-top: 4px; border-top: 1px solid var(--Kova-rule); font-weight: 600; }
    .totals .grand dt, .totals .grand dd { font-size: 0.9375rem; color: var(--mat-sys-on-surface); }

    .update { display: flex; flex-direction: column; gap: 12px; }
    .update label { display: flex; flex-direction: column; gap: 5px; }
    .update input, .update select {
      height: 38px; padding: 0 10px; border-radius: 8px; font: inherit; font-size: 0.8125rem;
      color: var(--mat-sys-on-surface); background: var(--mat-sys-surface);
      border: 1px solid var(--Kova-rule);
    }
    .update input:focus, .update select:focus { outline: none; border-color: var(--mat-sys-primary); }
    .pair { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
    .update button { margin-top: 4px; }

    .timeline { list-style: none; margin: 0; padding: 0 0 0 16px; display: flex; flex-direction: column; gap: 14px; }
    .timeline li { position: relative; display: flex; flex-direction: column; gap: 2px; }
    .timeline li::before {
      content: ''; position: absolute; left: -16px; top: 5px;
      width: 7px; height: 7px; border-radius: 50%; background: var(--mat-sys-primary);
    }
    .timeline strong { font-size: 0.8125rem; }
    .timeline span { font-size: 0.75rem; }
    .timeline small { font-size: 0.6875rem; }

    mat-paginator { background: transparent; }

    @media (max-width: 1099px) { .detail { grid-template-columns: 1fr; gap: 22px; } }
  `
})
export class AdminOrders {
  private readonly admin = inject(Admin);
  private readonly notify = inject(Notify);

  protected readonly statuses = ALL_STATUSES;
  protected readonly sources: OrderSource[] = ['Web', 'Mobile'];

  protected readonly result = signal<Paged<OrderListItem> | null>(null);
  protected readonly active = signal<Order | null>(null);

  protected readonly term = signal('');
  protected readonly statusFilter = signal<OrderStatus | null>(null);
  protected readonly sourceFilter = signal<OrderSource | null>(null);

  protected readonly nextStatus = signal<OrderStatus>('Processing');
  protected readonly note = signal('');
  protected readonly location = signal('');
  protected readonly carrier = signal('');
  protected readonly tracking = signal('');

  private pageSize = 20;
  private debounce = 0;

  protected readonly openCount = computed(() =>
    (this.result()?.items ?? []).filter(order => this.tone(order.status) === 'open').length);

  constructor() { this.load(1); }

  protected label(status: OrderStatus): string { return STATUS_LABEL[status]; }
  protected text(event: Event): string { return (event.target as HTMLInputElement).value; }

  protected tone(status: OrderStatus): string {
    if (status === 'Delivered') return 'done';
    if (status === 'Cancelled') return 'stop';
    return 'open';
  }

  protected payTone(payment: string): string {
    return payment === 'Paid' ? 'paid' : payment === 'Refunded' || payment === 'Failed' ? 'stop' : 'owed';
  }

  protected onSearch(event: Event): void {
    this.term.set(this.text(event));
    clearTimeout(this.debounce);
    this.debounce = window.setTimeout(() => this.load(1), 220);
  }

  protected setStatus(status: OrderStatus | null): void {
    this.statusFilter.set(status);
    this.load(1);
  }

  protected setSource(source: OrderSource | null): void {
    this.sourceFilter.set(source);
    this.load(1);
  }

  protected load(page: number): void {
    const admin = this.admin;
    const status = this.statusFilter() ?? undefined;

    // The in-memory back office can search the whole book; the HTTP one filters
    // by status only until the API grows a search parameter.
    const request = admin instanceof StaticAdmin
      ? admin.searchOrders(this.term(), status, this.sourceFilter() ?? undefined, page, this.pageSize)
      : admin.orders(status, page, this.pageSize);

    request.subscribe(result => {
      this.result.set(result);
      if (!result.items.some(item => item.id === this.active()?.id)) this.active.set(null);
    });
  }

  protected onPage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.load(event.pageIndex + 1);
  }

  protected openOrder(listItem: OrderListItem): void {
    if (this.active()?.id === listItem.id) { this.active.set(null); return; }

    this.admin.order(listItem.id).subscribe(order => {
      this.active.set(order);
      this.nextStatus.set(nextAfter(order.status));
      this.note.set('');
      this.location.set('');
      this.carrier.set(order.carrier ?? '');
      this.tracking.set(order.trackingNumber ?? '');
    });
  }

  protected save(event: Event, order: Order): void {
    event.preventDefault();

    this.admin.updateOrderStatus(order.id, this.nextStatus(), this.note() || undefined,
      this.location() || undefined, this.tracking() || undefined, this.carrier() || undefined)
      .subscribe({
        next: updated => {
          this.active.set(updated);
          this.notify.done(`Order ${updated.orderNumber} is now ${STATUS_LABEL[updated.status].toLowerCase()}`);
          this.load(this.result()?.page ?? 1);
        }
      });
  }

  /** The page as a spreadsheet — every column the desk shows. */
  protected exportCsv(): void {
    const rows = [
      ['Order ID', 'Customer', 'Date & time', 'Items', 'Amount', 'Payment', 'Status', 'Source'],
      ...(this.result()?.items ?? []).map(order => [
        order.orderNumber, order.customerName, new Date(order.createdAt).toLocaleString('en-IN'),
        `${order.itemCount}`, `${order.total}`, order.paymentStatus, order.status, order.source
      ])
    ];

    const csv = rows.map(row => row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')).join('\r\n');
    const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `anuvesh-orders-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
}

function nextAfter(status: OrderStatus): OrderStatus {
  const index = TRACKING_STEPS.indexOf(status);
  if (index < 0 || index === TRACKING_STEPS.length - 1) return status;
  return TRACKING_STEPS[index + 1];
}
