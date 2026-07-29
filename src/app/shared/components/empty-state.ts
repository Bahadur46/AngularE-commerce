import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/** An empty screen is an invitation to act, so it always carries one clear action. */
@Component({
  selector: 'Kova-empty-state',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="empty">
      <mat-icon fontSet="material-symbols-outlined">{{ icon() }}</mat-icon>
      <h3>{{ heading() }}</h3>
      <p class="muted">{{ body() }}</p>
      @if (actionLabel()) {
        <a mat-flat-button [routerLink]="actionLink()">{{ actionLabel() }}</a>
      }
    </div>
  `,
  styles: `
    .empty {
      display: flex; flex-direction: column; align-items: center; gap: 10px;
      padding: 72px 24px; text-align: center;
      border: 1px dashed var(--Kova-rule); border-radius: 16px;
    }
    mat-icon {
      font-size: 40px; width: 40px; height: 40px;
      color: var(--mat-sys-on-surface-variant); margin-bottom: 4px;
    }
    p { margin: 0 0 12px; max-width: 44ch; }
  `
})
export class EmptyState {
  readonly icon = input('inventory_2');
  readonly heading = input.required<string>();
  readonly body = input('');
  readonly actionLabel = input<string | null>(null);
  readonly actionLink = input<string>('/shop');
}
