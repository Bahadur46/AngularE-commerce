import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Catalog } from './catalog';
import { Category, Facets, Paged, Product, ProductListItem, ProductQuery, Review } from '@core/models';
import {
  CATALOGUE, CATALOGUE_CATEGORIES, CATALOGUE_FEATURED, detailFor,
  facetsFor, queryCatalogue, reviewsFor, suggestNames
} from '@shared/catalogue.static';

/**
 * The catalogue, served from memory instead of the API — same method surface as
 * Catalog, so every page (shop, filters, search, product, admin) works with no
 * backend running. Swapped in by one provider line in app.config.ts; delete
 * that line to go back to HTTP.
 *
 * The filtering itself lives in catalogue.static.ts. This class only puts the
 * results behind observables, with a beat of latency so the loading skeletons
 * still get their moment, exactly as they would against a real server.
 */
@Injectable({ providedIn: 'root' })
export class StaticCatalog extends Catalog {
  /** Reviews written in this session sit on top of the canned ones. */
  private readonly added = new Map<string, Review[]>();

  override search(query: ProductQuery): Observable<Paged<ProductListItem>> {
    return serve(queryCatalogue(query));
  }

  override featured(take = 8): Observable<ProductListItem[]> {
    return serve(CATALOGUE_FEATURED.slice(0, take) as ProductListItem[]);
  }

  override facets(category?: string): Observable<Facets> {
    return serve(facetsFor(category));
  }

  override suggest(term: string): Observable<string[]> {
    return serve(suggestNames(term));
  }

  override bySlug(slug: string): Observable<Product> {
    const entry = CATALOGUE.find(item => item.slug === slug);
    return entry
      ? serve(detailFor(entry))
      : throwError(() => new Error(`No curation with the slug “${slug}”.`));
  }

  override related(productId: string): Observable<ProductListItem[]> {
    const source = CATALOGUE.find(entry => entry.id === productId);
    if (!source) return serve<ProductListItem[]>([]);
    const siblings = CATALOGUE.filter(
      entry => entry.categoryId === source.categoryId && entry.id !== source.id
    );
    return serve(siblings.slice(0, 4) as ProductListItem[]);
  }

  override reviews(productId: string): Observable<Review[]> {
    return serve([...(this.added.get(productId) ?? []), ...reviewsFor(productId)]);
  }

  override addReview(productId: string, rating: number, title: string, body: string): Observable<Review> {
    const review: Review = {
      id: `${productId}-local-${(this.added.get(productId)?.length ?? 0) + 1}`,
      productId,
      userId: 'you',
      userName: 'You',
      rating, title, body,
      createdAt: new Date().toISOString()
    };
    this.added.set(productId, [review, ...(this.added.get(productId) ?? [])]);
    return serve(review);
  }

  override categories(): Observable<Category[]> {
    return serve(CATALOGUE_CATEGORIES);
  }

  override category(slug: string): Observable<Category> {
    const found = CATALOGUE_CATEGORIES.find(item => item.slug === slug);
    return found
      ? serve(found)
      : throwError(() => new Error(`No occasion with the slug “${slug}”.`));
  }
}

/** Latency the skeletons can be seen against. */
function serve<T>(value: T): Observable<T> {
  return of(value).pipe(delay(120));
}
