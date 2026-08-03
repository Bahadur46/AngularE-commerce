import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Category } from '@core/models';

export interface CategoryFormData {
  category: Category | null;
  /** Every other shelf, so one can be picked as the parent. */
  siblings: Category[];
}

/** What the dialog hands back — the body Admin.createCategory/updateCategory posts. */
export type CategoryUpsert = Partial<Category>;

@Component({
  selector: 'Kova-category-form',
  imports: [
    MatDialogModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatButtonModule, MatSlideToggleModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2 mat-dialog-title>{{ data.category ? 'Edit category' : 'New category' }}</h2>

    <mat-dialog-content>
      <form [formGroup]="form" class="fields">
        <mat-form-field class="wide"><mat-label>Name</mat-label>
          <input matInput formControlName="name" (input)="syncSlug()" /></mat-form-field>

        <mat-form-field class="wide"><mat-label>Slug</mat-label>
          <input matInput formControlName="slug" class="numeric" />
          <mat-hint>Used in the shop URL: /category/{{ form.controls.slug.value || '…' }}</mat-hint>
        </mat-form-field>

        <mat-form-field class="wide"><mat-label>Description</mat-label>
          <textarea matInput rows="3" formControlName="description"></textarea></mat-form-field>

        <mat-form-field class="wide"><mat-label>Image URL</mat-label>
          <input matInput formControlName="imageUrl" /></mat-form-field>

        <mat-form-field><mat-label>Parent shelf</mat-label>
          <mat-select formControlName="parentId">
            <mat-option [value]="''">None — a top-level shelf</mat-option>
            @for (sibling of data.siblings; track sibling.id) {
              <mat-option [value]="sibling.id">{{ sibling.name }}</mat-option>
            }
          </mat-select>
        </mat-form-field>

        <mat-form-field><mat-label>Sort order</mat-label>
          <input matInput type="number" formControlName="sortOrder" min="0" />
          <mat-hint>Low numbers come first.</mat-hint>
        </mat-form-field>

        <div class="toggles wide">
          <mat-slide-toggle formControlName="isActive">Visible in the shop</mat-slide-toggle>
        </div>
      </form>
    </mat-dialog-content>

    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-flat-button [disabled]="form.invalid" (click)="save()">
        {{ data.category ? 'Save changes' : 'Create category' }}
      </button>
    </mat-dialog-actions>
  `,
  styles: `
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; padding-top: 8px; min-width: min(74vw, 520px); }
    .wide { grid-column: 1 / -1; }
    .toggles { display: flex; gap: 24px; padding: 12px 0 4px; flex-wrap: wrap; }
    @media (max-width: 599px) { .fields { grid-template-columns: 1fr; min-width: 0; } }
  `
})
export class CategoryForm {
  protected readonly data = inject<CategoryFormData>(MAT_DIALOG_DATA);
  private readonly ref = inject(MatDialogRef<CategoryForm, CategoryUpsert>);
  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    slug: ['', Validators.required],
    description: [''],
    imageUrl: [''],
    parentId: [''],
    sortOrder: [0, [Validators.required, Validators.min(0)]],
    isActive: [true]
  });

  /** A hand-edited slug is left alone; an untouched one keeps following the name. */
  private slugTouched = false;

  constructor() {
    const category = this.data.category;
    if (!category) return;

    this.slugTouched = true;
    this.form.patchValue({
      name: category.name,
      slug: category.slug,
      description: category.description ?? '',
      imageUrl: category.imageUrl ?? '',
      parentId: category.parentId ?? '',
      sortOrder: category.sortOrder,
      isActive: category.isActive
    });
  }

  protected syncSlug(): void {
    if (this.form.controls.slug.dirty) this.slugTouched = true;
    if (this.slugTouched) return;
    this.form.controls.slug.setValue(slugify(this.form.controls.name.value));
  }

  protected save(): void {
    const value = this.form.getRawValue();

    this.ref.close({
      name: value.name.trim(),
      slug: slugify(value.slug),
      description: value.description.trim(),
      imageUrl: value.imageUrl.trim() || undefined,
      parentId: value.parentId || undefined,
      sortOrder: Number(value.sortOrder),
      isActive: value.isActive
    });
  }
}

function slugify(value: string): string {
  return value.toLowerCase().trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
