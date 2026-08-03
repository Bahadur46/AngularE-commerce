import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Admin, ProductUpsert } from '@core/services/admin';
import { Catalog } from '@core/services/catalog';
import { Notify } from '@core/services/notify';
import { Category, Paged, ProductListItem } from '@core/models';
import { PricePipe } from '@core/services/currency';
import { ProductForm, ProductFormData } from './product-form';

@Component({
  selector: 'Kova-admin-products',
  imports: [
    RouterLink, FormsModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, MatPaginatorModule, PricePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-head">
      <div>
        <span class="eyebrow">Catalogue</span>
        <h1>Products</h1>
      </div>
      <button mat-flat-button (click)="openForm(null)" [disabled]="!categories().length">
        <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
        Add a product
      </button>
    </div>

    @if (!categories().length) {
      <p class="notice muted">
        Every curation sits on a shelf, so
        <a routerLink="../categories">create a category</a> before adding the first product.
      </p>
    }

    <mat-form-field class="search">
      <mat-label>Search products</mat-label>
      <input matInput [(ngModel)]="search" (keyup.enter)="load(1)" />
      <mat-icon matSuffix fontSet="material-symbols-outlined">search</mat-icon>
    </mat-form-field>

    @if (result(); as page) {
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th></th><th>Product</th><th>Category</th>
              <th class="right">Price</th><th class="right">Stock</th><th class="right">Actions</th>
            </tr>
          </thead>
          <tbody>
            @for (product of page.items; track product.id) {
              <tr>
                <td class="thumb-cell"><img [src]="product.imageUrl" [alt]="" loading="lazy" /></td>
                <td>
                  <strong>{{ product.name }}</strong>
                  <small class="muted">{{ product.brand }}</small>
                </td>
                <td class="muted">{{ product.categoryName }}</td>
                <td class="right numeric">{{ product.price |KovaPrice }}</td>
                <td class="right numeric" [class.low]="product.stock <= 5" [class.out]="product.stock === 0">
                  {{ product.stock }}
                </td>
                <td class="right nowrap">
                  <button mat-icon-button (click)="openForm(product)" [attr.aria-label]="'Edit ' + product.name">
                    <mat-icon fontSet="material-symbols-outlined">edit</mat-icon>
                  </button>
                  <button mat-icon-button (click)="remove(product)" [attr.aria-label]="'Delete ' + product.name">
                    <mat-icon fontSet="material-symbols-outlined">delete</mat-icon>
                  </button>
                </td>
              </tr>
            } @empty {
              <tr><td colspan="6" class="muted">No products match that search.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                     [pageSizeOptions]="[10, 25, 50]" (page)="onPage($event)" aria-label="Product pages" />
    }
  `,
  styles: `
    .notice { margin: 0 0 18px; font-size: 0.875rem; }
    .search { width: min(100%, 340px); margin-bottom: 20px; }
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 12px 10px; border-bottom: 1px solid var(--Kova-rule); vertical-align: middle; }
    th { font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant); }
    td strong { display: block; font-weight: 500; }
    td small { display: block; font-size: 0.75rem; }
    .thumb-cell { width: 52px; }
    .thumb-cell img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; }
    .right { text-align: right; }
    .nowrap { white-space: nowrap; }
    .low { color: var(--mat-sys-tertiary); }
    .out { color: var(--mat-sys-error); }
    mat-paginator { background: transparent; }
  `
})
export class AdminProducts {
  private readonly admin = inject(Admin);
  private readonly catalog = inject(Catalog);
  private readonly dialog = inject(MatDialog);
  private readonly notify = inject(Notify);

  protected search = '';
  protected readonly result = signal<Paged<ProductListItem> | null>(null);
  protected readonly categories = signal<Category[]>([]);
  private pageSize = 10;

  constructor() {
    this.catalog.categories().subscribe(list => this.categories.set(list));
    this.load(1);
  }

  protected load(page: number): void {
    this.catalog.search({ search: this.search || undefined, page, pageSize: this.pageSize, sort: 'newest' })
      .subscribe(result => this.result.set(result));
  }

  protected onPage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.load(event.pageIndex + 1);
  }

  protected openForm(listItem: ProductListItem | null): void {
    const open = (data: ProductFormData) => {
      this.dialog.open(ProductForm, { data, autoFocus: 'first-tabbable' })
        .afterClosed().subscribe((body: ProductUpsert | undefined) => {
          if (!body) return;

          const request = data.product
            ? this.admin.updateProduct(data.product.id, body)
            : this.admin.createProduct(body);

          request.subscribe({
            next: () => {
              this.notify.done(data.product ? 'Product saved' : 'Product added');
              this.load(this.result()?.page ?? 1);
            }
          });
        });
    };

    if (!listItem) {
      open({ product: null, categories: this.categories() });
      return;
    }

    // The list endpoint returns a summary; the form needs the full document.
    this.catalog.bySlug(listItem.slug).subscribe(product =>
      open({ product, categories: this.categories() }));
  }

  protected remove(product: ProductListItem): void {
    if (!confirm(`Delete “${product.name}”? This cannot be undone.`)) return;

    this.admin.deleteProduct(product.id).subscribe({
      next: () => { this.notify.done('Product deleted'); this.load(this.result()?.page ?? 1); }
    });
  }
}
