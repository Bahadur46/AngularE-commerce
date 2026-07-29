import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { ProductListItem } from '@core/models';
import { Auth } from './auth';
import { Notify } from './notify';

@Injectable({ providedIn: 'root' })
export class Wishlist {
  private readonly http = inject(HttpClient);
  protected readonly auth = inject(Auth);
  protected readonly notify = inject(Notify);
  private readonly base = `${environment.apiUrl}/wishlist`;

  /** Ids only — enough for every heart icon in a grid to know its state. */
  readonly ids = signal<Set<string>>(new Set());
  readonly items = signal<ProductListItem[]>([]);
  readonly count = computed(() => this.ids().size);

  has(productId: string): boolean { return this.ids().has(productId); }

  loadIds(): void {
    if (!this.auth.isSignedIn()) { this.ids.set(new Set()); return; }
    this.http.get<string[]>(`${this.base}/ids`).subscribe({
      next: ids => this.ids.set(new Set(ids))
    });
  }

  loadItems(): void {
    this.http.get<ProductListItem[]>(this.base).subscribe({
      next: items => {
        this.items.set(items);
        this.ids.set(new Set(items.map(i => i.id)));
      }
    });
  }

  toggle(productId: string): void {
    this.http.post<{ saved: boolean }>(`${this.base}/${productId}/toggle`, {}).subscribe({
      next: ({ saved }) => {
        const next = new Set(this.ids());
        saved ? next.add(productId) : next.delete(productId);
        this.ids.set(next);
        if (!saved) this.items.update(list => list.filter(i => i.id !== productId));
        this.notify.done(saved ? 'Saved to wishlist' : 'Removed from wishlist');
      }
    });
  }

  reset(): void { this.ids.set(new Set()); this.items.set([]); }
}
