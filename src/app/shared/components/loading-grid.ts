import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Skeletons match the product card's shape so nothing jumps when data lands. */
@Component({
  selector: 'Kova-loading-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="grid" aria-busy="true" aria-label="Loading products">
      @for (i of slots(); track i) {
        <div class="skeleton">
          <div class="frame shimmer"></div>
          <div class="line shimmer" style="width: 40%"></div>
          <div class="line shimmer" style="width: 80%"></div>
          <div class="line shimmer" style="width: 30%"></div>
        </div>
      }
    </div>
  `,
  styles: `
    .skeleton { display: flex; flex-direction: column; gap: 10px; }
    .frame { aspect-ratio: 1; border-radius: 12px; }
    .line { height: 12px; border-radius: 6px; }
    .shimmer {
      background: linear-gradient(90deg,
        var(--mat-sys-surface-container-high) 25%,
        var(--mat-sys-surface-container-highest) 50%,
        var(--mat-sys-surface-container-high) 75%);
      background-size: 200% 100%;
      animation: slide 1.4s ease-in-out infinite;
    }
    @keyframes slide { to { background-position: -200% 0; } }
  `
})
export class LoadingGrid {
  readonly count = input(8);
  protected slots(): number[] { return Array.from({ length: this.count() }, (_, i) => i); }
}
