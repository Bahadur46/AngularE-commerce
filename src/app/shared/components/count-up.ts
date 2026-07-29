import {
  ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit,
  computed, inject, input, signal
} from '@angular/core';

/**
 * A number that counts up to its value the first time it is scrolled into view.
 *
 *   <Kova-count-up [value]="12400" suffix="+" />
 *   <Kova-count-up [value]="4.7" [decimals]="1" />
 *
 * Zoneless-safe: the frame loop writes to a signal, never to a plain field.
 */
@Component({
  selector: 'Kova-count-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `{{ display() }}`,
  styles: `:host { font-variant-numeric: tabular-nums; }`
})
export class CountUp implements OnInit, OnDestroy {
  readonly value = input.required<number>();
  readonly decimals = input(0);
  readonly duration = input(1500);
  readonly prefix = input('');
  readonly suffix = input('');

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;
  private frame = 0;

  /** 0 → 1 across the animation. */
  private readonly progress = signal(0);

  protected readonly display = computed(() => {
    const shown = this.value() * this.progress();
    const decimals = this.decimals();
    return this.prefix()
      + shown.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
      + this.suffix();
  });

  ngOnInit(): void {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still || typeof IntersectionObserver === 'undefined') { this.progress.set(1); return; }

    this.observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      this.observer?.disconnect();
      this.run();
    }, { threshold: 0.4 });

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }

  /** Ease-out cubic, so the number lands softly rather than stopping dead. */
  private run(): void {
    const total = this.duration();
    let started = 0;

    const step = (now: number) => {
      started ||= now;
      const t = Math.min(1, (now - started) / total);
      this.progress.set(1 - Math.pow(1 - t, 3));
      if (t < 1) this.frame = requestAnimationFrame(step);
    };

    this.frame = requestAnimationFrame(step);
  }
}
