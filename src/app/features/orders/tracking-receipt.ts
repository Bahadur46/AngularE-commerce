import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Order, OrderStatus, STATUS_LABEL, TRACKING_STEPS } from '@core/models';
import { PricePipe } from '@core/services/currency';

/**
 * The signature element of the storefront: the tracker is printed like a
 * despatch receipt — mono type, a perforated top edge, and one line per
 * scan event, because that is exactly what a real parcel log looks like.
 */
@Component({
  selector: 'Kova-tracking-receipt',
  imports: [DatePipe, MatIconModule, PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <article class="receipt">
      <div class="perforation" aria-hidden="true"></div>

      <header>
        <div>
          <span class="eyebrow">Order</span>
          <h2 class="order-no">{{ order().orderNumber }}</h2>
        </div>
        <span class="badge" [class]="'s-' + order().status.toLowerCase()">
          {{ label(order().status) }}
        </span>
      </header>

      <dl class="meta">
        <div><dt>Placed</dt><dd class="numeric">{{ order().createdAt | date:'d MMM yyyy, HH:mm' }}</dd></div>
        @if (order().estimatedDelivery && !isClosed()) {
          <div><dt>Expected</dt><dd class="numeric">{{ order().estimatedDelivery | date:'EEE d MMM' }}</dd></div>
        }
        @if (order().trackingNumber) {
          <div><dt>{{ order().carrier ?? 'Carrier' }}</dt><dd class="numeric">{{ order().trackingNumber }}</dd></div>
        }
        <div><dt>Paid</dt><dd class="numeric">{{ order().total |KovaPrice }} · {{ order().paymentStatus }}</dd></div>
      </dl>

      @if (isCancelled()) {
        <p class="cancelled">
          <mat-icon fontSet="material-symbols-outlined">cancel</mat-icon>
          This order was cancelled. Any payment is refunded to the original method within five working days.
        </p>
      } @else {
        <ol class="track">
          @for (step of steps(); track step.status) {
            <li [class.done]="step.done" [class.current]="step.current">
              <span class="dot" aria-hidden="true"></span>
              <span class="what">{{ label(step.status) }}</span>
              <span class="when numeric">
                @if (step.at) { {{ step.at | date:'d MMM, HH:mm' }} }
                @else { — }
              </span>
              @if (step.location) { <span class="where numeric">{{ step.location }}</span> }
            </li>
          }
        </ol>
      }

      <div class="tear" aria-hidden="true"></div>

      <ul class="items">
        @for (item of order().items; track item.productId) {
          <li>
            <span class="numeric qty">{{ item.quantity }}×</span>
            <span class="name">{{ item.name }}</span>
            <span class="numeric amount">{{ item.lineTotal |KovaPrice }}</span>
          </li>
        }
        <li class="sum"><span></span><span class="name">Total</span>
          <span class="numeric amount">{{ order().total |KovaPrice }}</span></li>
      </ul>
    </article>
  `,
  styles: `
    .receipt {
      position: relative;
      max-width: 560px;
      padding: 32px 28px 28px;
      border-radius: 4px;
      background: var(--mat-sys-surface-container-lowest);
      border: 1px solid var(--Kova-rule);
      font-family: var(--Kova-mono);
      font-size: 0.8125rem;
    }

    /* The torn top edge, drawn with a repeating radial gradient. */
    .perforation {
      position: absolute; inset: 0 0 auto 0; height: 8px;
      background:
        radial-gradient(circle at 6px 0, transparent 5px, var(--mat-sys-surface-container-lowest) 5.5px)
        0 0 / 12px 8px repeat-x;
      border-bottom: none;
    }

    header { display: flex; justify-content: space-between; align-items: start; gap: 16px; margin-bottom: 20px; }
    h2 { font-family: var(--Kova-mono); font-size: 1.25rem; font-weight: 600; letter-spacing: 0.02em; margin: 4px 0 0; }

    .badge {
      padding: 4px 10px; border-radius: 999px; font-size: 0.6875rem;
      font-weight: 600; letter-spacing: 0.04em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .badge.s-delivered { background: var(--mat-sys-primary-container); color: var(--mat-sys-on-primary-container); }
    .badge.s-shipped, .badge.s-outfordelivery { background: var(--mat-sys-tertiary-container); color: var(--mat-sys-on-tertiary-container); }
    .badge.s-cancelled, .badge.s-returned { background: var(--mat-sys-error-container); color: var(--mat-sys-on-error-container); }

    .meta { margin: 0 0 22px; display: grid; gap: 6px; }
    .meta div { display: flex; justify-content: space-between; gap: 16px; }
    dt { color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; }

    .track { list-style: none; margin: 0; padding: 0 0 4px 4px; }
    .track li {
      position: relative; display: grid;
      grid-template-columns: 22px 1fr auto; gap: 4px 10px;
      padding: 0 0 20px 0; align-items: start;
      color: var(--mat-sys-on-surface-variant);
    }
    .track li::before {
      content: ''; position: absolute; left: 6px; top: 14px; bottom: -2px;
      width: 1px; background: var(--mat-sys-outline-variant);
    }
    .track li:last-child::before { display: none; }
    .track li.done, .track li.current { color: var(--mat-sys-on-surface); }
    .track li.done::before { background: var(--mat-sys-primary); }

    .dot {
      width: 11px; height: 11px; margin-top: 3px; border-radius: 50%;
      border: 1px solid var(--mat-sys-outline); background: var(--mat-sys-surface-container-lowest);
    }
    .done .dot { background: var(--mat-sys-primary); border-color: var(--mat-sys-primary); }
    .current .dot {
      background: var(--mat-sys-tertiary); border-color: var(--mat-sys-tertiary);
      box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-tertiary) 22%, transparent);
    }
    .what { font-weight: 500; }
    .when { text-align: right; font-size: 0.75rem; }
    .where { grid-column: 2 / -1; font-size: 0.6875rem; color: var(--mat-sys-on-surface-variant); }

    .cancelled { display: flex; gap: 8px; align-items: start; line-height: 1.5; color: var(--mat-sys-error); }
    .cancelled mat-icon { font-size: 18px; width: 18px; height: 18px; }

    .tear { height: 1px; margin: 8px 0 16px; border-top: 1px dashed var(--mat-sys-outline-variant); }

    .items { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
    .items li { display: grid; grid-template-columns: 34px 1fr auto; gap: 10px; }
    .qty { color: var(--mat-sys-on-surface-variant); }
    .name { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sum { padding-top: 10px; border-top: 1px solid var(--Kova-rule); font-weight: 600; }
  `
})
export class TrackingReceipt {
  readonly order = input.required<Order>();

  protected readonly isCancelled = computed(() =>
    this.order().status === 'Cancelled');

  protected readonly isClosed = computed(() =>
    this.isCancelled() || this.order().status === 'Delivered');

  /** Merges the fixed fulfilment sequence with whatever events actually happened. */
  protected readonly steps = computed(() => {
    const order = this.order();
    const reached = new Map(order.timeline.map(event => [event.status, event]));
    const lastIndex = Math.max(
      ...order.timeline.map(event => TRACKING_STEPS.indexOf(event.status)).filter(i => i >= 0),
      0
    );

    return TRACKING_STEPS.map((status, index) => {
      const event = reached.get(status);
      return {
        status,
        at: event?.at ?? null,
        location: event?.location ?? null,
        done: index < lastIndex,
        current: index === lastIndex
      };
    });
  });

  protected label(status: OrderStatus): string { return STATUS_LABEL[status]; }
}
