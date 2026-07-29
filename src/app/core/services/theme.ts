import { Injectable, effect, signal } from '@angular/core';

const KEY = 'Kova.theme';
type Mode = 'light' | 'dark';

/**
 * Dark mode is one attribute on <html>. Material resolves its system tokens
 * from `color-scheme`, so nothing else in the app has to know which mode is on.
 * The initial value is set by an inline script in index.html to avoid a flash.
 */
@Injectable({ providedIn: 'root' })
export class Theme {
  readonly mode = signal<Mode>(initial());

  constructor() {
    effect(() => {
      const mode = this.mode();
      const root = document.documentElement;
      root.style.colorScheme = mode;
      root.classList.toggle('Kova-dark', mode === 'dark');
      localStorage.setItem(KEY, mode);
    });
  }

  toggle(): void {
    this.mode.update(m => (m === 'dark' ? 'light' : 'dark'));
  }
}

/** Dark is the house look, so it is the default rather than the OS preference. */
function initial(): Mode {
  const saved = localStorage.getItem(KEY) as Mode | null;
  return saved === 'light' ? 'light' : 'dark';
}
