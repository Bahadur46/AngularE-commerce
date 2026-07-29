import { Injectable, inject } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Auth } from './auth';
import { Cart } from './cart';
import { Wishlist } from './wishlist';
import { Profile } from './profile';
import { Address, Cart as CartModel, ProductListItem, User } from '@core/models';
import { CATALOGUE } from '@shared/catalogue.static';

/**
 * Cart, wishlist and profile, served from memory instead of the API. They exist
 * for the same reason StaticCatalog and StaticAdmin do — the shop still runs
 * with no backend behind those pages. Swapped in from app.config.ts; delete
 * those provider lines to go back to HTTP.
 *
 * Sign-in is not among them. Registration, login, refresh and logout go to
 * Kova.Api against the real user store, so an account has to exist in the
 * database before anyone gets in — there are no built-in credentials.
 */

// ---------------------------------------------------------------------------
// Cart
// ---------------------------------------------------------------------------

const FREE_DELIVERY_OVER = 999;
const FLAT_DELIVERY = 59;
const TAX_PERCENT = 0.18;

/** Codes the demo cart honours, matching what the shop advertises. */
const COUPONS: Record<string, number> = {
  ANUVESH10: 0.1,
  SAWAN25: 0.25,
  BULK20: 0.2
};

@Injectable({ providedIn: 'root' })
export class StaticCart extends Cart {
  private coupon?: string;

  override load(): void {
    // Already in the signal — there is nowhere else for it to live.
  }

  override add(productId: string, quantity = 1, variantValue?: string): void {
    const entry = CATALOGUE.find(item => item.id === productId);
    if (!entry) return;

    const items = [...this.state().items];
    const existing = items.findIndex(item => item.productId === productId && item.variantValue === variantValue);

    if (existing > -1) {
      const wanted = Math.min(entry.stock, items[existing].quantity + quantity);
      items[existing] = { ...items[existing], quantity: wanted, lineTotal: wanted * items[existing].unitPrice };
    } else {
      items.push({
        productId, name: entry.name, slug: entry.slug, imageUrl: entry.imageUrl,
        variantValue, unitPrice: entry.price,
        quantity: Math.min(entry.stock, quantity),
        stockAtAdd: entry.stock,
        lineTotal: entry.price * Math.min(entry.stock, quantity)
      });
    }

    this.settle(items);
    this.say('Added to cart');
  }

  override setQuantity(productId: string, quantity: number, variantValue?: string): void {
    const items = this.state().items
      .map(item => item.productId === productId && item.variantValue === variantValue
        ? { ...item, quantity, lineTotal: quantity * item.unitPrice }
        : item)
      .filter(item => item.quantity > 0);
    this.settle(items);
  }

  override remove(productId: string): void {
    this.settle(this.state().items.filter(item => item.productId !== productId));
    this.say('Removed from cart');
  }

  override clear(): void {
    this.coupon = undefined;
    this.settle([]);
  }

  override applyCoupon(code: string): Observable<CartModel> {
    const key = code.trim().toUpperCase();
    if (!(key in COUPONS)) return throwError(() => new Error(`${key} is not a code we recognise.`));

    this.coupon = key;
    this.settle(this.state().items);
    return of(this.state());
  }

  override reset(): void {
    this.coupon = undefined;
    super.reset();
  }

  /** One place that works out the totals, so the cart can never disagree with itself. */
  private settle(items: CartModel['items']): void {
    const subtotal = items.reduce((total, item) => total + item.lineTotal, 0);
    const rate = this.coupon ? COUPONS[this.coupon] : 0;
    const discount = Math.round(subtotal * rate);
    const shipping = items.length === 0 || subtotal >= FREE_DELIVERY_OVER ? 0 : FLAT_DELIVERY;
    const tax = Math.round((subtotal - discount) * TAX_PERCENT);

    this.state.set({
      items,
      subtotal,
      shipping,
      tax,
      discount,
      total: subtotal - discount + tax + shipping,
      itemCount: items.reduce((count, item) => count + item.quantity, 0),
      couponCode: this.coupon
    });
  }

  private say(message: string): void {
    this.notify.done(message);
  }
}

// ---------------------------------------------------------------------------
// Wishlist
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Profile
// ---------------------------------------------------------------------------

const ADDRESS_KEY = 'Kova.addresses';

@Injectable({ providedIn: 'root' })
export class StaticProfile extends Profile {
  private readonly auth = inject(Auth);

  override get(): Observable<User> {
    const user = this.auth.user();
    return user ? of(user) : throwError(() => new Error('Nobody is signed in.'));
  }

  override update(fullName: string, phone?: string, avatarUrl?: string): Observable<User> {
    const next = this.auth.patchUser({ fullName, phone, avatarUrl });
    return next ? of(next) : throwError(() => new Error('Nobody is signed in.'));
  }

  override changePassword(): Observable<void> {
    // No password is stored in the demo session, so there is nothing to check.
    return of(undefined as void);
  }

  override addresses(): Observable<Address[]> {
    return of(readAddresses());
  }

  override saveAddress(address: Address): Observable<Address[]> {
    const rows = readAddresses();
    const id = address.id ?? `a${rows.length + 1}`;
    const saved: Address = { ...address, id };

    const index = rows.findIndex(row => row.id === id);
    if (index > -1) rows[index] = saved; else rows.push(saved);

    // Only one address can be the default, so setting one clears the rest.
    if (saved.isDefault) {
      rows.forEach(row => { if (row.id !== id) row.isDefault = false; });
    }

    return of(writeAddresses(rows));
  }

  override deleteAddress(id: string): Observable<Address[]> {
    return of(writeAddresses(readAddresses().filter(row => row.id !== id)));
  }
}

function readAddresses(): Address[] {
  try {
    const raw = localStorage.getItem(ADDRESS_KEY);
    return raw ? (JSON.parse(raw) as Address[]) : [];
  } catch {
    return [];
  }
}

function writeAddresses(rows: Address[]): Address[] {
  localStorage.setItem(ADDRESS_KEY, JSON.stringify(rows));
  return rows;
}

// ---------------------------------------------------------------------------
// Wishlist
// ---------------------------------------------------------------------------

@Injectable({ providedIn: 'root' })
export class StaticWishlist extends Wishlist {
  override loadIds(): void {
    if (!this.auth.isSignedIn()) this.ids.set(new Set());
  }

  override loadItems(): void {
    const saved = this.ids();
    this.items.set(CATALOGUE.filter(entry => saved.has(entry.id)) as ProductListItem[]);
  }

  override toggle(productId: string): void {
    const next = new Set(this.ids());
    const saved = !next.has(productId);

    if (saved) next.add(productId); else next.delete(productId);
    this.ids.set(next);
    this.loadItems();

    this.notify.done(saved ? 'Saved to wishlist' : 'Removed from wishlist');
  }
}
