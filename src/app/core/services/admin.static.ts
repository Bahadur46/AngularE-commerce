import { Injectable } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Admin, ProductUpsert } from './admin';
import { DashboardStats, Order, OrderListItem, OrderStatus, Paged, Product, SeriesPoint, User } from '@core/models';
import {
  CATALOGUE, CatalogueEntry, contentsFor, detailFor, occasionById, setContents, shortLabel, slugify
} from '@shared/catalogue.static';
import { art, motifFor } from '@shared/curation-art';
import {
  advance, CUSTOMERS, matchesSearch, ORDER_BOOK, paginate, toListItem
} from '@shared/orderbook.static';

/**
 * The back office, served from memory instead of the API — same method surface
 * as Admin, so the dashboard, the order desk and the customer list all work
 * with no backend running. Swapped in by one provider line in app.config.ts;
 * delete that line to go back to HTTP.
 *
 * Every figure is derived from the shared order book, so the status tiles, the
 * revenue series, the best sellers and the recent-orders table are all views of
 * the same rows — and an order placed at checkout turns up here immediately.
 */
@Injectable({ providedIn: 'root' })
export class StaticAdmin extends Admin {
  override dashboard(): Observable<DashboardStats> {
    return serve(summarise(ORDER_BOOK, CUSTOMERS));
  }

  override orders(status?: OrderStatus, page = 1, pageSize = 20): Observable<Paged<OrderListItem>> {
    const matched = ORDER_BOOK.filter(order => !status || order.status === status);
    return serve(paginate(matched.map(toListItem), page, pageSize));
  }

  /** Free-text across order number, customer, city, source and product names. */
  searchOrders(term: string, status?: OrderStatus, source?: string,
               page = 1, pageSize = 20): Observable<Paged<OrderListItem>> {
    const needle = term.trim().toLowerCase();
    const matched = ORDER_BOOK
      .filter(order => !status || order.status === status)
      .filter(order => !source || order.source === source)
      .filter(order => !needle || matchesSearch(order, needle));
    return serve(paginate(matched.map(toListItem), page, pageSize));
  }

  override order(id: string): Observable<Order> {
    const found = ORDER_BOOK.find(order => order.id === id);
    return found ? serve(found) : throwError(() => new Error(`No order with the id “${id}”.`));
  }

  override updateOrderStatus(id: string, status: OrderStatus, message?: string,
                             location?: string, trackingNumber?: string,
                             carrier?: string): Observable<Order> {
    const found = ORDER_BOOK.find(order => order.id === id);
    if (!found) return throwError(() => new Error(`No order with the id “${id}”.`));
    return serve(advance(found, status, message, location, trackingNumber, carrier));
  }

  override customers(search?: string, page = 1, pageSize = 20): Observable<Paged<User>> {
    const needle = search?.trim().toLowerCase();
    const matched = needle
      ? CUSTOMERS.filter(person => `${person.fullName} ${person.email}`.toLowerCase().includes(needle))
      : CUSTOMERS;
    return serve(paginate(matched, page, pageSize));
  }

  override setCustomerActive(): Observable<void> {
    return serve(undefined as void);
  }

  // ---- Catalogue editing --------------------------------------------------
  // CATALOGUE is mutated in place, so the shop, the search and the dashboard
  // all see the edit immediately — the same thing a database write would do.
  // Edits last for the session; a reload rebuilds the seeded catalogue.

  override createProduct(body: ProductUpsert): Observable<Product> {
    const entry = entryFrom(body, `p${CATALOGUE.length + 1}`, new Date().toISOString());
    if (CATALOGUE.some(row => row.slug === entry.slug)) {
      return throwError(() => new Error(`A curation called “${body.name}” already exists.`));
    }

    CATALOGUE.unshift(entry);
    setContents(entry.slug, []);
    return serve(detailFor(entry));
  }

  override updateProduct(id: string, body: ProductUpsert): Observable<Product> {
    const index = CATALOGUE.findIndex(row => row.id === id);
    if (index < 0) return throwError(() => new Error(`No curation with the id “${id}”.`));

    const existing = CATALOGUE[index];
    const updated = entryFrom(body, id, existing.createdAt);
    CATALOGUE[index] = updated;

    // A rename changes the slug, so the packing list has to follow it.
    if (updated.slug !== existing.slug) {
      setContents(updated.slug, contentsFor(existing.slug));
    }

    return serve(detailFor(updated));
  }

  override deleteProduct(id: string): Observable<void> {
    const index = CATALOGUE.findIndex(row => row.id === id);
    if (index < 0) return throwError(() => new Error(`No curation with the id “${id}”.`));

    CATALOGUE.splice(index, 1);
    return serve(undefined as void);
  }
}

/** Builds a catalogue row from what the product form submitted. */
function entryFrom(body: ProductUpsert, id: string, createdAt: string): CatalogueEntry {
  const occasion = occasionById(body.categoryId) ?? occasionById('c1')!;
  const slug = slugify(body.name);
  const compareAtPrice = body.compareAtPrice || undefined;

  return {
    id,
    name: body.name,
    slug,
    brand: body.brand || occasion.brand,
    categoryName: occasion.name,
    categoryId: occasion.id,
    categorySlug: occasion.slug,
    price: body.price,
    compareAtPrice,
    discountPercent: compareAtPrice ? Math.round((1 - body.price / compareAtPrice) * 100) : 0,
    // A supplied image wins; otherwise it is drawn from the name, like the rest.
    imageUrl: body.images.find(image => image.trim().length > 0)
      ?? art({
        label: shortLabel(body.name),
        caption: occasion.name.toUpperCase(),
        tint: occasion.tint,
        motif: motifFor(body.name)
      }),
    ratingAverage: 0,
    ratingCount: 0,
    stock: body.stock,
    tags: body.tags.length ? body.tags : [occasion.slug.replace('-gift', ''), 'curation', 'gifting'],
    createdAt
  };
}

// ---------------------------------------------------------------------------
// The summary the dashboard reads
// ---------------------------------------------------------------------------

/** Cancelled orders never count as revenue. */
function earns(order: Order): boolean {
  return order.status !== 'Cancelled';
}

function summarise(book: Order[], people: User[]): DashboardStats {
  const now = new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();

  const earning = book.filter(earns);
  const at = (order: Order) => new Date(order.createdAt).getTime();

  const revenueTotal = sum(earning.map(order => order.total));
  const revenueToday = sum(earning.filter(order => at(order) >= midnight).map(order => order.total));
  const revenueThisMonth = sum(earning.filter(order => at(order) >= monthStart).map(order => order.total));

  const ordersToday = book.filter(order => at(order) >= midnight).length;
  const pending: OrderStatus[] = ['Pending', 'Processing', 'Shipped'];

  // The last 30 days against the 30 before them — the honest way to read "up".
  const window = 30 * 864e5;
  const thisPeriod = earning.filter(order => at(order) >= midnight - window);
  const lastPeriod = earning.filter(order =>
    at(order) >= midnight - 2 * window && at(order) < midnight - window);

  const aovNow = mean(thisPeriod.map(order => order.total));
  const aovBefore = mean(lastPeriod.map(order => order.total));

  const units = new Map<string, { name: string; unitsSold: number; revenue: number }>();
  const byCategory = new Map<string, number>();

  for (const order of earning) {
    for (const item of order.items) {
      const row = units.get(item.productId) ?? { name: item.name, unitsSold: 0, revenue: 0 };
      row.unitsSold += item.quantity;
      row.revenue += item.lineTotal;
      units.set(item.productId, row);

      const category = CATALOGUE.find(entry => entry.id === item.productId)?.categoryName ?? 'Other';
      byCategory.set(category, (byCategory.get(category) ?? 0) + item.lineTotal);
    }
  }

  const lowStock = CATALOGUE
    .filter(entry => entry.stock <= 12)
    .sort((a, b) => a.stock - b.stock)
    .map(entry => ({ productId: entry.id, name: entry.name, stock: entry.stock }));

  return {
    revenueTotal,
    revenueThisMonth,
    revenueToday,
    averageOrderValue: Math.round(aovNow),

    ordersTotal: book.length,
    ordersToday,
    ordersPending: book.filter(order => pending.includes(order.status)).length,
    ordersCompleted: book.filter(order => order.status === 'Delivered').length,
    ordersCancelled: book.filter(order => order.status === 'Cancelled').length,

    productsTotal: CATALOGUE.length,
    lowStockCount: lowStock.length,
    customersTotal: people.length,
    customersNew: new Set(book.filter(order => at(order) >= monthStart).map(order => order.userId)).size,

    deltas: {
      revenue: percentChange(sum(thisPeriod.map(o => o.total)), sum(lastPeriod.map(o => o.total))),
      orders: percentChange(thisPeriod.length, lastPeriod.length),
      customers: percentChange(
        new Set(thisPeriod.map(o => o.userId)).size,
        new Set(lastPeriod.map(o => o.userId)).size),
      aov: percentChange(aovNow, aovBefore)
    },

    daily: bucket(earning, 14, 'day'),
    weekly: bucket(earning, 12, 'week'),
    monthly: bucket(earning, 12, 'month'),

    statusBreakdown: (['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'] as OrderStatus[])
      .map(status => ({ status, count: book.filter(order => order.status === status).length }))
      .filter(row => row.count > 0),

    topProducts: [...units.entries()]
      .map(([productId, row]) => ({ productId, ...row }))
      .sort((a, b) => b.revenue - a.revenue)
      .slice(0, 6),

    categoryRevenue: [...byCategory.entries()]
      .map(([name, revenue]) => ({ name, revenue }))
      .sort((a, b) => b.revenue - a.revenue),

    lowStock: lowStock.slice(0, 6),
    recentOrders: book.slice(0, 8).map(toListItem)
  };
}

/** Rolls the book up into the last `count` days, weeks or months. */
function bucket(orders: Order[], count: number, size: 'day' | 'week' | 'month'): SeriesPoint[] {
  const now = new Date();

  return Array.from({ length: count }, (unused, index) => {
    const back = count - 1 - index;
    let from: Date;
    let to: Date;
    let label: string;

    if (size === 'day') {
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - back);
      to = new Date(from.getTime() + 864e5);
      label = from.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    } else if (size === 'week') {
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - back * 7 - 6);
      to = new Date(from.getTime() + 7 * 864e5);
      label = from.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });
    } else {
      from = new Date(now.getFullYear(), now.getMonth() - back, 1);
      to = new Date(now.getFullYear(), now.getMonth() - back + 1, 1);
      label = from.toLocaleDateString('en-IN', { month: 'short' });
    }

    const inRange = orders.filter(order => {
      const at = new Date(order.createdAt).getTime();
      return at >= from.getTime() && at < to.getTime();
    });

    return { label, revenue: sum(inRange.map(order => order.total)), orders: inRange.length };
  });
}

function sum(values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

function mean(values: number[]): number {
  return values.length ? sum(values) / values.length : 0;
}

/** Growth against a previous period, capped so an empty baseline is not infinite. */
function percentChange(now: number, before: number): number {
  if (before === 0) return now === 0 ? 0 : 100;
  return Math.round(((now - before) / before) * 1000) / 10;
}

/** Latency the loading states can be seen against. */
function serve<T>(value: T): Observable<T> {
  return of(value).pipe(delay(140));
}
