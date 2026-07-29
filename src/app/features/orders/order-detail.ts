import { ChangeDetectionStrategy, Component, effect, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Orders } from '@core/services/orders';
import { Notify } from '@core/services/notify';
import { Order } from '@core/models';
import { TrackingReceipt } from './tracking-receipt';

@Component({
  selector: 'Kova-order-detail',
  imports: [RouterLink, MatButtonModule, MatIconModule, TrackingReceipt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      @if (order(); as o) {
        @if (justPlaced()) {
          <div class="confirm">
            <mat-icon fontSet="material-symbols-outlined">check_circle</mat-icon>
            <div>
              <strong>Order placed.</strong>
              <span class="muted">A confirmation is on its way to {{ o.customerEmail }}.</span>
            </div>
          </div>
        }

        <div class="section-head">
          <div>
            <span class="eyebrow">Order detail</span>
            <h1>Tracking</h1>
          </div>
          <a routerLink="/orders" class="muted">All orders</a>
        </div>

        <div class="layout">
          <Kova-tracking-receipt [order]="o" />

          <aside class="side">
            <section class="surface-card">
              <h3>Delivering to</h3>
              <p class="muted">
                {{ o.shippingAddress.fullName }}<br />
                {{ o.shippingAddress.line1 }}@if (o.shippingAddress.line2) { , {{ o.shippingAddress.line2 }} }<br />
                {{ o.shippingAddress.city }}, {{ o.shippingAddress.state }}
                <span class="numeric">{{ o.shippingAddress.postalCode }}</span><br />
                <span class="numeric">{{ o.shippingAddress.phone }}</span>
              </p>
            </section>

            @if (canCancel(o)) {
              <button mat-stroked-button class="cancel" (click)="cancel(o)">Cancel this order</button>
              <p class="note muted">You can cancel any time before it ships.</p>
            }

            <a mat-button routerLink="/shop">Buy it again</a>
          </aside>
        </div>
      }
    </div>
  `,
  styles: `
    .confirm {
      display: flex; gap: 12px; align-items: center; margin-bottom: 28px;
      padding: 16px 20px; border-radius: 12px;
      background: var(--mat-sys-primary-container); color: var(--mat-sys-on-primary-container);
    }
    .confirm div { display: flex; flex-direction: column; }
    .confirm .muted { color: inherit; opacity: 0.8; font-size: 0.875rem; }

    .layout { display: grid; grid-template-columns: minmax(0, 560px) 280px; gap: 40px; align-items: start; }
    .side { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
    .side h3 { margin: 0 0 8px; font-size: 0.9375rem; }
    .side p { margin: 0; font-size: 0.875rem; line-height: 1.6; }
    .cancel { color: var(--mat-sys-error); }
    .note { font-size: 0.75rem; margin: 0; text-align: center; }

    @media (max-width: 899px) { .layout { grid-template-columns: 1fr; gap: 24px; } }
  `
})
export class OrderDetail {
  readonly id = input.required<string>();
  readonly placed = input<string | undefined>();

  private readonly orders = inject(Orders);
  private readonly notify = inject(Notify);

  protected readonly order = signal<Order | null>(null);
  protected readonly justPlaced = signal(false);

  constructor() {
    effect(() => {
      this.justPlaced.set(this.placed() === 'true');
      this.orders.byId(this.id()).subscribe(order => this.order.set(order));
    });
  }

  protected canCancel(order: Order): boolean {
    return ['Pending', 'Processing'].includes(order.status);
  }

  protected cancel(order: Order): void {
    this.orders.cancel(order.id).subscribe({
      next: updated => { this.order.set(updated); this.notify.done('Order cancelled'); }
    });
  }
}
