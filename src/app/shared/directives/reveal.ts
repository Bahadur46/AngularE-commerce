import { Directive, ElementRef, OnDestroy, OnInit, inject, input, numberAttribute, signal } from '@angular/core';

/**
 * Fades an element up the first time it scrolls into view, then stops watching.
 *
 *   <section KovaReveal>…</section>     <!-- no delay -->
 *   <div KovaReveal="2">…</div>         <!-- 2 × 70ms stagger -->
 *
 * The app runs zoneless, so the observer only ever writes to a signal — the
 * host binding does the rest. Under prefers-reduced-motion the element is shown
 * immediately and no observer is created; the paint styles live in styles.scss
 * so the class works from any component's template.
 */
@Directive({
  selector: '[KovaReveal]',
  host: {
    'class': 'reveal',
    '[class.in-view]': 'shown()',
    '[style.transition-delay]': 'delay()'
  }
})
export class Reveal implements OnInit, OnDestroy {
  /** Stagger index. Each step pushes the fade back by 70ms. */
  readonly KovaReveal = input(0, { transform: (value: unknown) => numberAttribute(value, 0) });

  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  protected readonly shown = signal(false);
  protected readonly delay = () => `${Math.min(this.KovaReveal(), 8) * 70}ms`;

  ngOnInit(): void {
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (still || typeof IntersectionObserver === 'undefined') { this.shown.set(true); return; }

    this.observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      this.shown.set(true);
      this.observer?.disconnect();
    }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });

    this.observer.observe(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
