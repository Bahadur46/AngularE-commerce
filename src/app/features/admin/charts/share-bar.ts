import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

export interface ShareSlice {
  label: string;
  value: number;
  /** 'stage' walks the ordinal ramp in order; 'critical' is the reserved red. */
  kind: 'stage' | 'critical';
}

/**
 * Part-to-whole as a single stacked bar rather than a pie — a reader compares
 * lengths far better than angles, and the long status names fit in a legend.
 *
 * The fulfilment stages are an ORDERED scale, so they walk one hue light→dark
 * rather than taking arbitrary categorical colours. Cancelled is not a stage;
 * it is a status, so it takes the reserved critical red and carries an icon in
 * the legend — the colour never has to be read on its own.
 */
@Component({
  selector: 'Kova-share-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="chart">
      <div class="bar" role="img" [attr.aria-label]="summary()" (pointerleave)="hover.set(-1)">
        @for (slice of slices(); track slice.label; let i = $index) {
          <span class="seg" [style.width.%]="percent(slice.value)"
                [style.background]="paint(i)"
                [class.on]="hover() === i"
                (pointerenter)="hover.set(i)"></span>
        }
      </div>

      <ul class="legend">
        @for (slice of slices(); track slice.label; let i = $index) {
          <li [class.on]="hover() === i" (pointerenter)="hover.set(i)" (pointerleave)="hover.set(-1)">
            <span class="swatch" [style.background]="paint(i)"></span>
            <span class="label">
              @if (slice.kind === 'critical') { <span class="warn-mark" aria-hidden="true">!</span> }
              {{ slice.label }}
            </span>
            <span class="count">{{ slice.value }}</span>
            <span class="pct">{{ percent(slice.value).toFixed(1) }}%</span>
          </li>
        }
      </ul>
    </div>
  `,
  styles: `
    .chart { display: flex; flex-direction: column; gap: 20px; }

    .bar { display: flex; height: 34px; border-radius: 8px; overflow: hidden; }
    /* 2px of surface between segments so adjacent fills never touch. */
    .seg {
      height: 100%; min-width: 3px; cursor: default;
      box-shadow: inset -2px 0 0 var(--viz-surface);
      transition: filter 160ms ease;
    }
    .seg:last-child { box-shadow: none; }
    .seg.on { filter: brightness(1.15); }

    .legend {
      list-style: none; margin: 0; padding: 0;
      display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 24px;
    }
    .legend li {
      display: grid; grid-template-columns: 12px 1fr auto auto; align-items: center;
      gap: 10px; padding: 5px 6px; border-radius: 6px;
      font-size: 0.8125rem;
    }
    .legend li.on { background: color-mix(in srgb, var(--viz-axis) 22%, transparent); }
    .swatch { width: 12px; height: 12px; border-radius: 3px; }
    .label { display: inline-flex; align-items: center; gap: 6px; min-width: 0; }
    .count, .pct { font-variant-numeric: tabular-nums; font-size: 0.75rem; }
    .pct { color: var(--viz-ink-2); min-width: 44px; text-align: right; }

    /* Icon + label, so the critical colour never carries the meaning alone. */
    .warn-mark {
      display: inline-grid; place-items: center; flex: none;
      width: 14px; height: 14px; border-radius: 50%;
      background: var(--viz-critical); color: #fff;
      font-size: 0.5625rem; font-weight: 700;
    }

    @media (max-width: 599px) { .legend { grid-template-columns: 1fr; } }
  `
})
export class ShareBar {
  readonly slices = input.required<ShareSlice[]>();

  protected readonly hover = signal(-1);

  private readonly total = computed(() =>
    Math.max(1, this.slices().reduce((sum, slice) => sum + slice.value, 0)));

  protected readonly summary = computed(() =>
    this.slices().map(slice => `${slice.label}: ${slice.value}`).join(', '));

  protected percent(value: number): number {
    return (value / this.total()) * 100;
  }

  /** Stages walk the ramp in order; anything critical steps out of it. */
  protected paint(index: number): string {
    const slice = this.slices()[index];
    if (slice.kind === 'critical') return 'var(--viz-critical)';

    const stages = this.slices().filter(item => item.kind === 'stage');
    const position = stages.indexOf(slice);
    const step = Math.min(4, Math.max(1, Math.round((position / Math.max(1, stages.length - 1)) * 3) + 1));
    return `var(--viz-o${step})`;
  }
}
