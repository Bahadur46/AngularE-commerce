import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/** Gradients are document-scoped, so each instance needs its own id. */
let seq = 0;

/**
 * The house mark: a gold-foil box-and-ribbon monogram beside the wordmark.
 * Drawn inline so it inherits the surrounding colour and stays crisp at any
 * size — the header, the footer and the hero all use this one component.
 */
@Component({
  selector: 'Kova-brand-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <span class="logo" [class.lg]="size() === 'lg'">
      <svg class="mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient [attr.id]="gid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" [attr.stop-color]="'var(--Kova-gold-soft)'" />
            <stop offset="0.45" [attr.stop-color]="'var(--Kova-gold)'" />
            <stop offset="1" [attr.stop-color]="'var(--Kova-gold-deep)'" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="none"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="1.6" stroke-opacity="0.55" />
        <rect x="12" y="21" width="24" height="15" rx="2" fill="none"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="2" />
        <rect x="10" y="16" width="28" height="6" rx="1.6"
              [attr.fill]="'url(#' + gid + ')'" fill-opacity="0.22"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="2" />
        <path d="M24 16v20" [attr.stroke]="'url(#' + gid + ')'" stroke-width="2.6" />
        <path d="M24 16c-4-1-6-4-4.4-5.8C21 8.6 23.4 11 24 16c.6-5 3-7.4 4.4-5.8C30 12 28 15 24 16Z"
              [attr.fill]="'url(#' + gid + ')'" fill-opacity="0.7" />
      </svg>

      <span class="words">
        <span class="wordmark">Anuvesha &amp; Co.</span>
        @if (tagline()) { <span class="tag">Luxury Gift Curations</span> }
      </span>
    </span>
  `,
  styles: `
    .logo { display: inline-flex; align-items: center; gap: 10px; max-width: 100%; }
    .mark { width: 30px; height: 30px; flex: none; }
    /* The mark is never sacrificed; the words clip if the host is too narrow. */
    .words { display: flex; flex-direction: column; line-height: 1; min-width: 0; overflow: hidden; }

    .wordmark {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 600; font-size: 1.3125rem; letter-spacing: 0.01em; white-space: nowrap;
      /* The token, not a copy of it — the home page re-points the foil to
         champagne on its own host, and the wordmark has to follow it there. */
      background: var(--Kova-foil);
      -webkit-background-clip: text; background-clip: text; color: transparent;
    }
    .tag {
      font-family: var(--Kova-mono);
      font-size: 0.5rem; letter-spacing: 0.2em; text-transform: uppercase;
      color: var(--mat-sys-on-surface-variant); margin-top: 4px;
    }

    .lg .mark { width: 44px; height: 44px; }
    .lg .wordmark { font-size: 1.875rem; }
    .lg .tag { font-size: 0.5625rem; letter-spacing: 0.24em; }

    @media (max-width: 599px) {
      .logo:not(.lg) { gap: 8px; }
      .logo:not(.lg) .mark { width: 26px; height: 26px; }
      .logo:not(.lg) .wordmark { font-size: 1rem; }
    }
  `
})
export class BrandLogo {
  readonly size = input<'sm' | 'lg'>('sm');
  readonly tagline = input(false);

  protected readonly gid = `Kova-foil-${(seq += 1)}`;
}
