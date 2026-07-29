import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

export interface BarRow {
  label: string;
  value: number;
  /** Optional second line under the label — units sold, stock left, anything. */
  note?: string;
}

/**
 * Ranked horizontal bars. Magnitude is the job, so it is one hue and the length
 * carries the comparison; the rows are direct-labelled, so no legend and no
 * axis. Long category names read far better down the left than rotated 45° at
 * the bottom of a column chart.
 */
@Component({
  selector: 'Kova-bar-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="rows" (pointerleave)="hover.set(-1)">
      @for (row of rows(); track row.label; let i = $index) {
        <li (pointerenter)="hover.set(i)" [class.on]="hover() === i">
          <div class="head">
            <span class="name">{{ row.label }}</span>
            <span class="value">{{ format()(row.value) }}</span>
          </div>

          <div class="track">
            <div class="fill" [style.width.%]="width(row.value)"></div>
          </div>

          <div class="foot">
            <small class="note">{{ row.note }}</small>
            <small class="share" [class.lit]="hover() === i">{{ share(row.value) }}% of the total</small>
          </div>
        </li>
      } @empty {
        <li class="none">Nothing to show for this period.</li>
      }
    </ul>
  `,
  styles: `
    .rows { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 16px; }

    .head, .foot { display: flex; align-items: baseline; justify-content: space-between; gap: 12px; }
    .name { font-size: 0.875rem; }
    .value { font-size: 0.875rem; font-weight: 600; font-variant-numeric: tabular-nums; }

    .track {
      height: 10px; margin: 7px 0 5px; border-radius: 5px; overflow: hidden;
      background: color-mix(in srgb, var(--viz-axis) 35%, transparent);
    }
    /* 4px rounded data-end, anchored square to the baseline. */
    .fill {
      height: 100%; min-width: 4px; border-radius: 0 4px 4px 0;
      background: var(--viz-series);
      transition: width 420ms cubic-bezier(0.2, 0, 0.1, 1), filter 160ms ease;
    }
    li.on .fill { filter: brightness(1.12); }

    .note, .share { font-size: 0.6875rem; color: var(--viz-ink-2); font-variant-numeric: tabular-nums; }
    .share { opacity: 0; transition: opacity 140ms ease; }
    .share.lit { opacity: 1; }

    .none { font-size: 0.875rem; color: var(--viz-ink-2); }
  `
})
export class BarList {
  readonly rows = input.required<BarRow[]>();
  readonly format = input<(value: number) => string>(value => `${value}`);

  protected readonly hover = signal(-1);

  private readonly peak = computed(() => Math.max(1, ...this.rows().map(row => row.value)));
  private readonly total = computed(() => this.rows().reduce((sum, row) => sum + row.value, 0));

  protected width(value: number): number {
    return Math.max(1.5, (value / this.peak()) * 100);
  }

  protected share(value: number): string {
    const total = this.total();
    return total === 0 ? '0' : ((value / total) * 100).toFixed(1);
  }
}
