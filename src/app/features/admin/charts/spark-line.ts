import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * The trend line inside a stat tile. No axes, no labels, no interaction — the
 * tile's number is the reading and this only says which way it has been going.
 */
@Component({
  selector: 'Kova-spark-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path class="area" [attr.d]="area()" />
      <path class="line" [attr.d]="line()" vector-effect="non-scaling-stroke" />
    </svg>
  `,
  styles: `
    :host { display: block; height: 34px; }
    svg { display: block; width: 100%; height: 100%; overflow: visible; }
    .area { fill: var(--viz-fill); }
    .line { fill: none; stroke: var(--viz-series); stroke-width: 1.75; stroke-linejoin: round; stroke-linecap: round; }
  `
})
export class SparkLine {
  readonly values = input.required<number[]>();

  private readonly bounds = computed(() => {
    const values = this.values();
    const low = Math.min(...values, 0);
    const high = Math.max(...values, 1);
    return { low, span: high - low || 1 };
  });

  protected readonly line = computed(() => {
    const values = this.values();
    const { low, span } = this.bounds();
    return values.map((value, index) => {
      const x = values.length <= 1 ? 50 : (index / (values.length - 1)) * 100;
      const y = 96 - ((value - low) / span) * 92;
      return `${index === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(' ');
  });

  protected readonly area = computed(() =>
    this.values().length ? `${this.line()} L100 100 L0 100 Z` : '');
}
