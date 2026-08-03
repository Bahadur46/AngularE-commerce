import { Injectable, computed, effect, signal } from '@angular/core';

const KEY = 'Kova.theme';
type Mode = 'light' | 'dark';

/**
 * Dark mode is one attribute on <html>. Material resolves its system tokens
 * from `color-scheme`, so nothing else in the app has to know which mode is on.
 * The initial value is set by an inline script in index.html to avoid a flash.
 */
@Injectable({ providedIn: 'root' })
export class Theme {
  /** The shopfront's mode — the one that is remembered between visits. */
  readonly mode = signal<Mode>(initial());

  /** A section holding the page to one mode for as long as it is open. */
  private readonly pinned = signal<Mode | null>(null);

  /** What is actually painted: a pin wins over the preference. */
  readonly active = computed<Mode>(() => this.pinned() ?? this.mode());

  constructor() {
    effect(() => {
      const mode = this.active();
      const root = document.documentElement;
      root.style.colorScheme = mode;
      root.classList.toggle('Kova-dark', mode === 'dark');
    });

    // Only the preference is written down. A pin lasts as long as the section
    // that set it, so it must not survive a reload somewhere else in the shop.
    effect(() => localStorage.setItem(KEY, this.mode()));
  }

  toggle(): void {
    this.mode.update(m => (m === 'dark' ? 'light' : 'dark'));
  }

  /**
   * Holds the page to `mode` until the returned release function runs. Used by
   * the back office, which is read rather than admired and so stays on light
   * while the shopfront around it stays dark.
   */
  pin(mode: Mode): () => void {
    this.pinned.set(mode);
    return () => this.pinned.set(null);
  }
}

/** Dark is the house look, so it is the default rather than the OS preference. */
function initial(): Mode {
  const saved = localStorage.getItem(KEY) as Mode | null;
  return saved === 'light' ? 'light' : 'dark';
}
