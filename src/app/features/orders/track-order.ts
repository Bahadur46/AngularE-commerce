import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Orders } from '@core/services/orders';
import { Order } from '@core/models';
import { TrackingReceipt } from './tracking-receipt';

@Component({
  selector: 'Kova-track-order',
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, TrackingReceipt],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page narrow">
      <span class="eyebrow">Tracking</span>
      <h1>Where is my order?</h1>
      <p class="muted">Enter the order number from your confirmation email. It looks like KOV-8F2A41.</p>

      <form class="lookup" (submit)="lookup($event)">
        <mat-form-field>
          <mat-label>Order number</mat-label>
          <input matInput [(ngModel)]="orderNumber" name="orderNumber" autocomplete="off"
                 placeholder="KOV-8F2A41" class="numeric" />
        </mat-form-field>
        <button mat-flat-button type="submit" [disabled]="searching()">
          {{ searching() ? 'Looking…' : 'Track' }}
        </button>
      </form>

      @if (notFound()) {
        <p class="miss">No order matches that number. Check for a typo, or sign in to see all your orders.</p>
      }

      @if (order(); as o) { <Kova-tracking-receipt [order]="o" /> }
    </div>
  `,
  styles: `
    .narrow { max-width: 640px; }
    h1 { margin: 6px 0 8px; }
    p { margin: 0 0 24px; }
    .lookup { display: flex; gap: 12px; align-items: start; margin-bottom: 28px; }
    .lookup mat-form-field { flex: 1; }
    .lookup button { --mat-filled-button-container-height: 52px; }
    .miss { color: var(--mat-sys-error); font-size: 0.875rem; }
  `
})
export class TrackOrder {
  private readonly orders = inject(Orders);

  protected orderNumber = '';
  protected readonly order = signal<Order | null>(null);
  protected readonly searching = signal(false);
  protected readonly notFound = signal(false);

  protected lookup(event: Event): void {
    event.preventDefault();
    if (!this.orderNumber.trim()) return;

    this.searching.set(true);
    this.notFound.set(false);
    this.order.set(null);

    this.orders.track(this.orderNumber).subscribe({
      next: order => { this.order.set(order); this.searching.set(false); },
      error: () => { this.notFound.set(true); this.searching.set(false); }
    });
  }
}
