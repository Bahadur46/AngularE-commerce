import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'Kova-not-found',
  imports: [RouterLink, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page wrap">
      <span class="eyebrow">Error 404</span>
      <h1>That page isn't here.</h1>
      <p class="muted">The link may be old, or the product may have sold out and been retired.</p>
      <div class="row">
        <a mat-flat-button routerLink="/shop">Browse the catalogue</a>
        <a mat-stroked-button routerLink="/track">Track an order</a>
      </div>
    </div>
  `,
  styles: `
    .wrap { display: flex; flex-direction: column; gap: 14px; align-items: start; padding-block: 96px; }
    p { margin: 0; max-width: 46ch; }
  `
})
export class NotFound {}
