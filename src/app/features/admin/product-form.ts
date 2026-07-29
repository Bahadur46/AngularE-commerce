import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Category, Product } from '@core/models';
import { ProductUpsert } from '@core/services/admin';

export interface ProductFormData {
  product: Product | null;
  categories: Category[];
}

@Component({
  selector: 'Kova-product-form',
  imports: [
    MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatSlideToggleModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>{{ data.product ? 'Edit product' : 'Add a product' }}</h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="fields">
        <mat-form-field class="wide"><mat-label>Name</mat-label>
          <input matInput formControlName="name" /></mat-form-field>

        <mat-form-field><mat-label>SKU</mat-label>
          <input matInput formControlName="sku" class="numeric" /></mat-form-field>

        <mat-form-field><mat-label>Brand</mat-label>
          <input matInput formControlName="brand" /></mat-form-field>

        <mat-form-field><mat-label>Category</mat-label>
          <mat-select formControlName="categoryId">
            @for (category of data.categories; track category.id) {
              <mat-option [value]="category.id">{{ category.name }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field><mat-label>Stock</mat-label>
          <input matInput type="number" formControlName="stock" min="0" /></mat-form-field>

        <mat-form-field><mat-label>Price</mat-label>
          <input matInput type="number" formControlName="price" min="0" />
          <span matTextPrefix>₹&nbsp;</span></mat-form-field>

        <mat-form-field><mat-label>Compare-at price</mat-label>
          <input matInput type="number" formControlName="compareAtPrice" min="0" />
          <span matTextPrefix>₹&nbsp;</span>
          <mat-hint>Shown struck through. Leave blank for no sale.</mat-hint>
        </mat-form-field>

        <mat-form-field class="wide"><mat-label>Short description</mat-label>
          <input matInput formControlName="shortDescription" maxlength="140" /></mat-form-field>

        <mat-form-field class="wide"><mat-label>Full description</mat-label>
          <textarea matInput rows="4" formControlName="description"></textarea></mat-form-field>

        <mat-form-field class="wide"><mat-label>Image URLs</mat-label>
          <textarea matInput rows="2" formControlName="images"></textarea>
          <mat-hint>One per line.</mat-hint>
        </mat-form-field>

        <mat-form-field class="wide"><mat-label>Tags</mat-label>
          <input matInput formControlName="tags" />
          <mat-hint>Comma separated.</mat-hint>
        </mat-form-field>

        <mat-form-field class="wide"><mat-label>Specifications</mat-label>
          <textarea matInput rows="3" formControlName="specs"></textarea>
          <mat-hint>One per line, as Label: value.</mat-hint>
        </mat-form-field>

        <div class="toggles wide">
          <mat-slide-toggle formControlName="isPublished">Visible in the shop</mat-slide-toggle>
          <mat-slide-toggle formControlName="isFeatured">Feature on the home page</mat-slide-toggle>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button [disabled]="form.invalid" (click)="save()">
        {{ data.product ? 'Save changes' : 'Add product' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; padding-top: 8px; min-width: min(74vw, 620px); }
    .wide { grid-column: 1 / -1; }
    .toggles { display: flex; gap: 24px; padding: 12px 0 4px; flex-wrap: wrap; }
    @media (max-width: 599px) { .fields { grid-template-columns: 1fr; min-width: 0; } }
  `
})
export class ProductForm {
  protected readonly data = inject<ProductFormData>(MAT_DIALOG_DATA);
  private readonly ref = inject(MatDialogRef<ProductForm, ProductUpsert>);
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    sku: ['', Validators.required],
    brand: ['', Validators.required],
    categoryId: ['', Validators.required],
    stock: [0, [Validators.required, Validators.min(0)]],
    price: [0, [Validators.required, Validators.min(1)]],
    compareAtPrice: [null as number | null],
    shortDescription: ['', Validators.required],
    description: ['', Validators.required],
    images: [''],
    tags: [''],
    specs: [''],
    isPublished: [true],
    isFeatured: [false]
  });

  constructor() {
    const product = this.data.product;
    if (!product) return;

    this.form.patchValue({
      name: product.name, sku: product.sku, brand: product.brand,
      categoryId: product.categoryId, stock: product.stock, price: product.price,
      compareAtPrice: product.compareAtPrice ?? null,
      shortDescription: product.shortDescription, description: product.description,
      images: (product.images ?? []).join('\n'),
      tags: (product.tags ?? []).join(', '),
      specs: Object.entries(product.specs ?? {}).map(([k, v]) => `${k}: ${v}`).join('\n'),
      isPublished: product.isPublished, isFeatured: product.isFeatured
    });
  }

  protected save(): void {
    const value = this.form.getRawValue();

    this.ref.close({
      name: value.name,
      sku: value.sku,
      brand: value.brand,
      categoryId: value.categoryId,
      stock: Number(value.stock),
      price: Number(value.price),
      compareAtPrice: value.compareAtPrice ? Number(value.compareAtPrice) : null,
      shortDescription: value.shortDescription,
      description: value.description,
      images: splitLines(value.images),
      tags: value.tags.split(',').map(t => t.trim()).filter(Boolean),
      specs: parseSpecs(value.specs),
      isPublished: value.isPublished,
      isFeatured: value.isFeatured
    });
  }
}

function splitLines(value: string): string[] {
  return value.split('\n').map(line => line.trim()).filter(Boolean);
}

function parseSpecs(value: string): Record<string, string> {
  const specs: Record<string, string> = {};
  for (const line of splitLines(value)) {
    const index = line.indexOf(':');
    if (index > 0) specs[line.slice(0, index).trim()] = line.slice(index + 1).trim();
  }
  return specs;
}
