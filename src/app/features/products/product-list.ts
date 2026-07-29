import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Catalog } from '@core/services/catalog';
import { Facets, Paged, ProductListItem, ProductQuery } from '@core/models';
import { ProductCard } from '@shared/components/product-card';
import { LoadingGrid } from '@shared/components/loading-grid';
import { EmptyState } from '@shared/components/empty-state';
import { PricePipe } from '@core/services/currency';

@Component({
  selector: 'Kova-product-list',
  imports: [
    FormsModule, MatButtonModule, MatIconModule, MatSelectModule, MatCheckboxModule,
    MatSliderModule, MatChipsModule, MatPaginatorModule,
    ProductCard, LoadingGrid, EmptyState, PricePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <header class="head">
        <div>
          <span class="eyebrow">{{ query().category ? 'Occasion' : 'The collection' }}</span>
          <h1 class="foil">{{ title() }}</h1>
          @if (result(); as r) {
            <p class="muted numeric">{{ r.total }} {{ r.total === 1 ? 'curation' : 'curations' }}</p>
          }
        </div>

        <div class="controls">
          <button mat-stroked-button class="filter-toggle" (click)="filtersOpen.set(!filtersOpen())">
            <mat-icon fontSet="material-symbols-outlined">tune</mat-icon>
            Filters @if (activeCount()) { <span class="numeric">({{ activeCount() }})</span> }
          </button>

          <mat-form-field appearance="outline" class="sort">
            <mat-label>Sort by</mat-label>
            <mat-select [ngModel]="query().sort" (ngModelChange)="patch({ sort: $event, page: 1 })">
              <mat-option value="relevance">Most relevant</mat-option>
              <mat-option value="newest">Newest first</mat-option>
              <mat-option value="price_asc">Price, low to high</mat-option>
              <mat-option value="price_desc">Price, high to low</mat-option>
              <mat-option value="rating">Best rated</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
      </header>

      @if (activeChips().length) {
        <mat-chip-set class="applied" aria-label="Applied filters">
          @for (chip of activeChips(); track chip.key) {
            <mat-chip-row (removed)="clearOne(chip.key)">
              {{ chip.label }}
              <button matChipRemove [attr.aria-label]="'Remove ' + chip.label">
                <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
              </button>
            </mat-chip-row>
          }
          <button mat-button (click)="clearAll()">Clear all</button>
        </mat-chip-set>
      }

      <div class="layout" [class.filters-open]="filtersOpen()">
        <aside class="filters" [attr.aria-hidden]="!filtersOpen()">
          <section>
            <h3 class="eyebrow">Price</h3>
            <div class="range numeric">
              <span>{{ priceFloor() |KovaPrice }}</span>
              <span>{{ priceCeiling() |KovaPrice }}</span>
            </div>
            <mat-slider [min]="facets()?.minPrice ?? 0" [max]="facets()?.maxPrice ?? 50000" [step]="500" discrete>
              <input matSliderStartThumb [ngModel]="priceFloor()" (ngModelChange)="priceFloor.set($event)" />
              <input matSliderEndThumb [ngModel]="priceCeiling()" (ngModelChange)="priceCeiling.set($event)" />
            </mat-slider>
            <button mat-stroked-button class="full" (click)="applyPrice()">Apply price</button>
          </section>

          @if (facets()?.brands?.length) {
            <section>
              <h3 class="eyebrow">Brand</h3>
              @for (brand of facets()!.brands; track brand) {
                <mat-checkbox [checked]="hasBrand(brand)" (change)="toggleBrand(brand)">{{ brand }}</mat-checkbox>
              }
            </section>
          }

          <section>
            <h3 class="eyebrow">Rating</h3>
            @for (rating of [4, 3, 2]; track rating) {
              <mat-checkbox [checked]="query().minRating === rating"
                            (change)="patch({ minRating: query().minRating === rating ? undefined : rating, page: 1 })">
                {{ rating }} stars and up
              </mat-checkbox>
            }
          </section>

          <section>
            <h3 class="eyebrow">Availability</h3>
            <mat-checkbox [checked]="!!query().inStock"
                          (change)="patch({ inStock: query().inStock ? undefined : true, page: 1 })">
              In stock only
            </mat-checkbox>
          </section>
        </aside>

        <div class="results">
          @if (loading()) {
            <Kova-loading-grid [count]="12" />
          } @else if (!result()?.items?.length) {
            <Kova-empty-state
              icon="search_off"
              heading="No curations match those filters"
              body="Widen the price range or clear a filter to see more of the collection."
              actionLabel="Clear all filters"
              actionLink="/shop" />
          } @else {
            <div class="grid">
              @for (product of result()!.items; track product.id) {
                <Kova-product-card [product]="product" />
              }
            </div>

            <mat-paginator
              [length]="result()!.total"
              [pageSize]="result()!.pageSize"
              [pageIndex]="result()!.page - 1"
              [pageSizeOptions]="[12, 24, 48]"
              (page)="onPage($event)"
              aria-label="Product pages" />
          }
        </div>
      </div>
    </div>
  `,
  styles: `
    .head { display: flex; justify-content: space-between; align-items: end; gap: 20px; flex-wrap: wrap; margin-bottom: 20px; }
    .head p { margin: 8px 0 0; font-size: 0.8125rem; }
    .controls { display: flex; align-items: center; gap: 12px; }
    .sort { width: 190px; }
    .applied { margin-bottom: 20px; }

    .layout { display: grid; grid-template-columns: 250px 1fr; gap: 36px; align-items: start; }
    .filters { display: flex; flex-direction: column; gap: 28px; position: sticky; top: 92px; }
    .filters section { display: flex; flex-direction: column; gap: 8px; padding-bottom: 24px; border-bottom: 1px solid var(--Kova-rule); }
    .filters h3 { margin: 0 0 4px; }
    .range { display: flex; justify-content: space-between; font-size: 0.8125rem; }
    .full { width: 100%; margin-top: 4px; }
    .filter-toggle { display: none; }

    mat-paginator { background: transparent; margin-top: 32px; border-top: 1px solid var(--Kova-rule); }

    @media (max-width: 899px) {
      .layout { grid-template-columns: 1fr; gap: 20px; }
      .filters { display: none; position: static; }
      .layout.filters-open .filters { display: flex; }
      .filter-toggle { display: inline-flex; }
      .sort { width: 150px; }
    }
  `
})
export class ProductList {
  private readonly catalog = inject(Catalog);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  private readonly params = toSignal(this.route.queryParamMap, { requireSync: true });
  private readonly slug = toSignal(this.route.paramMap, { requireSync: true });

  protected readonly result = signal<Paged<ProductListItem> | null>(null);
  protected readonly facets = signal<Facets | null>(null);
  protected readonly loading = signal(true);
  protected readonly filtersOpen = signal(false);
  protected readonly priceFloor = signal(0);
  protected readonly priceCeiling = signal(50000);

  protected readonly query = computed<ProductQuery>(() => {
    const p = this.params();
    const category = this.slug().get('slug') ?? p.get('category') ?? undefined;
    return {
      search: p.get('search') ?? undefined,
      category,
      brand: p.get('brand') ?? undefined,
      minPrice: numberOrUndefined(p.get('minPrice')),
      maxPrice: numberOrUndefined(p.get('maxPrice')),
      minRating: numberOrUndefined(p.get('minRating')),
      inStock: p.get('inStock') === 'true' ? true : undefined,
      sort: p.get('sort') ?? 'relevance',
      page: numberOrUndefined(p.get('page')) ?? 1,
      pageSize: numberOrUndefined(p.get('pageSize')) ?? 12
    };
  });

  protected readonly title = computed(() => {
    const q = this.query();
    if (q.search) return `“${q.search}”`;
    if (q.category) return titleCase(q.category);
    return 'All curations';
  });

  protected readonly activeChips = computed(() => {
    const q = this.query();
    const chips: { key: keyof ProductQuery; label: string }[] = [];
    if (q.search) chips.push({ key: 'search', label: `Search: ${q.search}` });
    if (q.brand) chips.push({ key: 'brand', label: q.brand.split(',').join(', ') });
    if (q.minPrice || q.maxPrice) chips.push({ key: 'minPrice', label: `₹${q.minPrice ?? 0}–₹${q.maxPrice ?? '∞'}` });
    if (q.minRating) chips.push({ key: 'minRating', label: `${q.minRating}★ and up` });
    if (q.inStock) chips.push({ key: 'inStock', label: 'In stock' });
    return chips;
  });

  protected readonly activeCount = computed(() => this.activeChips().length);

  constructor() {
    // One effect drives both requests: any URL change refetches. The URL is the
    // single source of truth, so filters survive a refresh and can be shared.
    effect(() => {
      const q = this.query();
      this.loading.set(true);
      this.catalog.search(q).subscribe({
        next: page => { this.result.set(page); this.loading.set(false); },
        error: () => this.loading.set(false)
      });
    });

    effect(() => {
      const category = this.query().category;
      this.catalog.facets(category).subscribe(f => {
        this.facets.set(f);
        this.priceFloor.set(this.query().minPrice ?? f.minPrice);
        this.priceCeiling.set(this.query().maxPrice ?? f.maxPrice);
      });
    });
  }

  protected patch(changes: Partial<ProductQuery>): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { ...changes, page: changes.page ?? 1 },
      queryParamsHandling: 'merge'
    });
  }

  protected onPage(event: PageEvent): void {
    this.patch({ page: event.pageIndex + 1, pageSize: event.pageSize });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  protected hasBrand(brand: string): boolean {
    return (this.query().brand ?? '').split(',').includes(brand);
  }

  protected toggleBrand(brand: string): void {
    const current = (this.query().brand ?? '').split(',').filter(Boolean);
    const next = current.includes(brand) ? current.filter(b => b !== brand) : [...current, brand];
    this.patch({ brand: next.join(',') || undefined, page: 1 });
  }

  protected applyPrice(): void {
    this.patch({ minPrice: this.priceFloor(), maxPrice: this.priceCeiling(), page: 1 });
  }

  protected clearOne(key: keyof ProductQuery): void {
    const changes: Partial<ProductQuery> = { [key]: undefined };
    if (key === 'minPrice') changes.maxPrice = undefined;
    this.patch(changes);
  }

  protected clearAll(): void {
    this.router.navigate([], { relativeTo: this.route, queryParams: {} });
  }
}

function numberOrUndefined(value: string | null): number | undefined {
  return value === null || value === '' ? undefined : Number(value);
}

/** `baby-gift` reads as "Baby Gift" in the heading. */
function titleCase(slug: string): string {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
