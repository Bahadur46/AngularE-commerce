import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Catalog } from '@core/services/catalog';
import { Notify } from '@core/services/notify';
import { Category } from '@core/models';

@Component({
  selector: 'Kova-admin-categories',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Catalogue</span>
        <h1>Categories</h1>
        <small class="muted numeric">{{ rows().length }} shelves · {{ totalProducts() }} curations</small>
      </div>
      <div class="actions">
        <input class="search" type="search" placeholder="Filter shelves"
               [value]="term()" (input)="term.set($any($event.target).value)" aria-label="Filter categories" />
        <button mat-flat-button (click)="notify.problem('Creating a shelf needs the API — the catalogue here is read-only.')">
          <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
          New category
        </button>
      </div>
    </header>

    <div class="cards">
      @for (row of rows(); track row.id) {
        <article class="card">
          <img [src]="row.imageUrl" [alt]="row.name" loading="lazy" />
          <div class="body">
            <div class="title">
              <h2>{{ row.name }}</h2>
              <span class="pill" [class.off]="!row.isActive">{{ row.isActive ? 'Live' : 'Hidden' }}</span>
            </div>
            <p class="muted">{{ row.description }}</p>
            <dl>
              <div><dt>Slug</dt><dd class="numeric">/{{ row.slug }}</dd></div>
              <div><dt>Curations</dt><dd class="numeric">{{ row.productCount }}</dd></div>
              <div><dt>Order</dt><dd class="numeric">{{ row.sortOrder }}</dd></div>
            </dl>
            <div class="row-actions">
              <a mat-stroked-button [routerLink]="['/category', row.slug]">View on the shop</a>
              <a mat-button routerLink="../products">Curations on this shelf</a>
            </div>
          </div>
        </article>
      } @empty {
        <p class="muted">No shelf matches “{{ term() }}”.</p>
      }
    </div>
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }
    .actions { display: flex; align-items: center; gap: 10px; flex-wrap: wrap; }
    .search {
      height: 40px; width: 220px; padding: 0 14px; border-radius: 999px; font: inherit; font-size: 0.875rem;
      color: var(--mat-sys-on-surface); background: var(--mat-sys-surface-container);
      border: 1px solid var(--Kova-rule);
    }
    .search:focus { outline: none; border-color: var(--mat-sys-primary); }

    .cards { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
    .card {
      display: grid; grid-template-columns: 132px 1fr; min-width: 0;
      border-radius: 16px; overflow: hidden;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .card img { width: 100%; height: 100%; object-fit: cover; }
    .body { padding: 18px; display: flex; flex-direction: column; gap: 10px; min-width: 0; }
    .title { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
    .body h2 { font-size: 1.0625rem; }
    .body p { margin: 0; font-size: 0.8125rem; line-height: 1.5; }

    .pill {
      padding: 3px 10px; border-radius: 999px; flex: none;
      font-family: var(--Kova-mono); font-size: 0.625rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent);
    }
    .pill.off { background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant); }

    dl { display: flex; flex-wrap: wrap; gap: 6px 22px; margin: 0; }
    dl div { display: flex; gap: 7px; align-items: baseline; }
    dt { font-family: var(--Kova-mono); font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; font-size: 0.8125rem; }

    .row-actions { display: flex; gap: 6px; flex-wrap: wrap; margin-top: auto; padding-top: 6px; }
    .row-actions a { font-size: 0.8125rem; }

    @media (max-width: 1099px) { .cards { grid-template-columns: 1fr; } }
    @media (max-width: 599px) {
      .card { grid-template-columns: 1fr; }
      .card img { height: 150px; }
      .search { width: 100%; }
    }
  `
})
export class AdminCategories {
  private readonly catalog = inject(Catalog);
  protected readonly notify = inject(Notify);

  private readonly all = signal<Category[]>([]);
  protected readonly term = signal('');

  protected readonly rows = computed(() => {
    const needle = this.term().trim().toLowerCase();
    if (!needle) return this.all();
    return this.all().filter(row =>
      `${row.name} ${row.slug} ${row.description}`.toLowerCase().includes(needle));
  });

  protected readonly totalProducts = computed(() =>
    this.all().reduce((count, row) => count + row.productCount, 0));

  constructor() {
    this.catalog.categories().subscribe(rows => this.all.set(rows));
  }
}
