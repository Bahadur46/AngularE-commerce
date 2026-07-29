import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Orders } from '@core/services/orders';
import { OrderListItem, Paged, STATUS_LABEL } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { EmptyState } from '@shared/components/empty-state';

@Component({
  selector: 'Kova-order-list',
  imports: [DatePipe, RouterLink, MatButtonModule, MatIconModule, MatPaginatorModule, PricePipe, EmptyState],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Account</span>
          <h1>Your orders</h1>
        </div>
        <a mat-stroked-button routerLink="/track">Track by order number</a>
      </div>

      @if (result(); as page) {
        @if (!page.items.length) {
          <Kova-empty-state
            icon="receipt_long"
            heading="No orders yet"
            body="Once you place an order it appears here with live tracking."
            actionLabel="Browse the catalogue"
            actionLink="/shop" />
        } @else {
          <ul class="orders">
            @for (order of page.items; track order.id) {
              <li>
                <a [routerLink]="['/orders', order.id]" class="card">
                  <div class="ref">
                    <span class="order-no">{{ order.orderNumber }}</span>
                    <small class="muted numeric">{{ order.createdAt | date:'d MMM yyyy' }}</small>
                  </div>

                  <span class="status" [class]="'s-' + order.status.toLowerCase()">{{ statusLabel(order) }}</span>

                  <span class="numeric muted count">{{ order.itemCount }} {{ order.itemCount === 1 ? 'item' : 'items' }}</span>
                  <strong class="price">{{ order.total |KovaPrice }}</strong>

                  <mat-icon fontSet="material-symbols-outlined">chevron_right</mat-icon>
                </a>
              </li>
            }
          </ul>

          <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                         [pageSizeOptions]="[10, 25]" (page)="onPage($event)" aria-label="Order pages" />
        }
      }
    </div>
  `,
  styles: `
    .orders { list-style: none; margin: 0; padding: 0; }
    .card {
      display: grid; align-items: center; gap: 16px;
      grid-template-columns: 1fr auto auto auto 24px;
      padding: 18px 4px; border-bottom: 1px solid var(--Kova-rule);
      transition: background 140ms ease;
    }
    .card:hover { background: var(--mat-sys-surface-container-low); }
    .ref { display: flex; flex-direction: column; gap: 2px; }
    .order-no { font-weight: 600; font-size: 0.9375rem; }
    .ref small { font-size: 0.75rem; }
    .status {
      padding: 4px 10px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.6875rem; font-weight: 600;
      letter-spacing: 0.04em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .status.s-delivered { background: var(--mat-sys-primary-container); color: var(--mat-sys-on-primary-container); }
    .status.s-shipped, .status.s-outfordelivery { background: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container); }
    .status.s-cancelled, .status.s-returned { background: var(--mat-sys-error-container); color: var(--mat-sys-on-error-container); }
    .count { font-size: 0.8125rem; }
    mat-paginator { background: transparent; margin-top: 24px; }
    @media (max-width: 699px) {
      .card { grid-template-columns: 1fr auto; row-gap: 8px; }
      .count { display: none; }
      .card mat-icon { display: none; }
    }
  `
})
export class OrderList {
  private readonly orders = inject(Orders);
  protected readonly result = signal<Paged<OrderListItem> | null>(null);

  constructor() { this.load(1, 10); }

  protected onPage(event: PageEvent): void {
    this.load(event.pageIndex + 1, event.pageSize);
  }

  protected statusLabel(order: OrderListItem): string { return STATUS_LABEL[order.status]; }

  private load(page: number, pageSize: number): void {
    this.orders.mine(page, pageSize).subscribe(result => this.result.set(result));
  }
}
