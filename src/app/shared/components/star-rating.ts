import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'Kova-star-rating',
  imports: [MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="stars" [attr.aria-label]="value() + ' out of 5'">
      @for (star of [1,2,3,4,5]; track star) {
        <mat-icon fontSet="material-symbols-outlined"
                  [class.filled]="star <= Math.round(value())">star</mat-icon>
      }
      @if (count() !== null) { <small class="numeric muted">({{ count() }})</small> }
    </span>
  `,
  styles: `
    .stars { display: inline-flex; align-items: center; gap: 1px; }
    mat-icon {
      font-size: 15px; width: 15px; height: 15px;
      color: var(--mat-sys-outline);
    }
    mat-icon.filled {
      color: var(--mat-sys-tertiary);
      font-variation-settings: 'FILL' 1;
    }
    small { margin-left: 6px; font-size: 0.75rem; }
  `
})
export class StarRating {
  readonly value = input.required<number>();
  readonly count = input<number | null>(null);
  protected readonly Math = Math;
}
