import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { SeriesPoint } from '@core/models';

/**
 * A single-series trend: filled area, 2px line, crosshair and tooltip.
 *
 * The plot is an SVG stretched with preserveAspectRatio="none" so it fills any
 * column width, with vector-effect keeping the strokes at their true weight.
 * Everything that must not stretch — ticks, markers, the tooltip — is HTML
 * positioned in percentages on top of it. One series, so no legend: the panel
 * heading names it.
 */
@Component({
  selector: 'Kova-trend-chart',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <figure class="wrap">
      <div class="plot"
           (pointermove)="track($event)" (pointerleave)="hover.set(-1)"
           role="img" [attr.aria-label]="summary()">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          @for (y of gridLines; track y) {
            <line class="grid" x1="0" [attr.y1]="y" x2="100" [attr.y2]="y" vector-effect="non-scaling-stroke" />
          }
          <path class="area" [attr.d]="areaPath()" />
          <path class="line" [attr.d]="linePath()" vector-effect="non-scaling-stroke" />
          @if (hover() > -1) {
            <line class="cross" [attr.x1]="xAt(hover())" y1="0" [attr.x2]="xAt(hover())" y2="100"
                  vector-effect="non-scaling-stroke" />
          }
        </svg>

        <!-- Markers live in HTML: a circle inside a stretched SVG turns oval. -->
        <span class="dot last" [style.left.%]="xAt(points().length - 1)"
              [style.top.%]="yAt(points().length - 1)"></span>
        @if (hover() > -1) {
          <span class="dot on" [style.left.%]="xAt(hover())" [style.top.%]="yAt(hover())"></span>
        }

        @if (reading(); as point) {
          <div class="tip" [style.left.%]="xAt(hover())" [class.flip]="hover() > points().length / 2">
            <strong>{{ detail()(point.revenue) }}</strong>
            <span>{{ point.orders }} order{{ point.orders === 1 ? '' : 's' }}</span>
            <small>{{ point.label }}</small>
          </div>
        }

        <span class="peak-tick">{{ format()(peak()) }}</span>
        <span class="zero-tick">{{ format()(0) }}</span>
      </div>

      <figcaption class="ticks">
        @for (point of points(); track point.label; let i = $index) {
          <span [class.dim]="!showTick(i)">{{ showTick(i) ? point.label : '' }}</span>
        }
      </figcaption>
    </figure>
  `,
  styles: `
    .wrap { margin: 0; display: flex; flex-direction: column; gap: 10px; }

    .plot { position: relative; height: 236px; touch-action: none; }
    svg { display: block; width: 100%; height: 100%; overflow: visible; }

    .grid { stroke: var(--viz-grid); stroke-width: 1; }
    .area { fill: var(--viz-fill); }
    .line { fill: none; stroke: var(--viz-series); stroke-width: 2; stroke-linejoin: round; stroke-linecap: round; }
    .cross { stroke: var(--viz-axis); stroke-width: 1; stroke-dasharray: 3 3; }

    .dot {
      position: absolute; width: 9px; height: 9px; border-radius: 50%;
      transform: translate(-50%, -50%); pointer-events: none;
      background: var(--viz-series);
      box-shadow: 0 0 0 2px var(--viz-surface);
    }
    .dot.on { width: 11px; height: 11px; }

    .tip {
      position: absolute; top: 8px; z-index: 2; pointer-events: none;
      display: flex; flex-direction: column; gap: 1px;
      padding: 8px 11px; border-radius: 10px; white-space: nowrap;
      transform: translateX(10px);
      background: var(--mat-sys-inverse-surface); color: var(--mat-sys-inverse-on-surface);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);
    }
    .tip.flip { transform: translateX(calc(-100% - 10px)); }
    .tip strong { font-size: 0.875rem; font-variant-numeric: tabular-nums; }
    .tip span { font-size: 0.75rem; opacity: 0.85; }
    .tip small { font-size: 0.6875rem; opacity: 0.6; }

    .peak-tick, .zero-tick {
      position: absolute; right: 0; font-size: 0.6875rem;
      color: var(--viz-ink-2); font-variant-numeric: tabular-nums;
      background: var(--viz-surface); padding-left: 6px;
    }
    .peak-tick { top: -7px; }
    .zero-tick { bottom: -7px; }

    .ticks { display: flex; margin: 0; }
    .ticks span {
      flex: 1; text-align: center; font-size: 0.6875rem;
      color: var(--viz-ink-2); font-variant-numeric: tabular-nums;
      white-space: nowrap; overflow: hidden;
    }
  `
})
export class TrendChart {
  readonly points = input.required<SeriesPoint[]>();
  /** Axis ticks — short, because they sit in a 60px gutter. */
  readonly format = input<(value: number) => string>(value => `${value}`);
  /** The tooltip, where there is room for the exact figure. */
  readonly detail = input<(value: number) => string>(value => `${value}`);

  protected readonly gridLines = [0, 25, 50, 75, 100];
  protected readonly hover = signal(-1);

  /** Headroom above the tallest bar so the line never touches the ceiling. */
  protected readonly peak = computed(() => {
    const highest = Math.max(0, ...this.points().map(point => point.revenue));
    return highest === 0 ? 1 : highest * 1.08;
  });

  protected readonly reading = computed(() => this.points()[this.hover()] ?? null);

  protected readonly linePath = computed(() =>
    this.points().map((point, index) =>
      `${index === 0 ? 'M' : 'L'}${this.xAt(index)} ${this.yAt(index)}`).join(' '));

  protected readonly areaPath = computed(() => {
    const points = this.points();
    if (points.length === 0) return '';
    return `${this.linePath()} L${this.xAt(points.length - 1)} 100 L${this.xAt(0)} 100 Z`;
  });

  protected readonly summary = computed(() =>
    this.points().map(point => `${point.label}: ${this.format()(point.revenue)}`).join(', '));

  protected xAt(index: number): number {
    const span = this.points().length - 1;
    return span <= 0 ? 50 : (index / span) * 100;
  }

  protected yAt(index: number): number {
    const point = this.points()[index];
    return point ? 100 - (point.revenue / this.peak()) * 100 : 100;
  }

  /** Thin the x labels so they never collide, keeping first and last. */
  protected showTick(index: number): boolean {
    const total = this.points().length;
    const every = total > 12 ? 3 : total > 7 ? 2 : 1;
    return index === 0 || index === total - 1 || index % every === 0;
  }

  protected track(event: PointerEvent): void {
    const box = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const ratio = (event.clientX - box.left) / box.width;
    const nearest = Math.round(ratio * (this.points().length - 1));
    this.hover.set(Math.min(this.points().length - 1, Math.max(0, nearest)));
  }
}
