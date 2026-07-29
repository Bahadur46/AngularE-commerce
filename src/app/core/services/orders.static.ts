import { Injectable, inject } from '@angular/core';
import { Observable, delay, of, throwError } from 'rxjs';
import { Orders } from './orders';
import { Auth } from './auth';
import { Cart } from './cart';
import { Address, Order, OrderListItem, OrderSource, Paged } from '@core/models';
import { advance, nextOrderNumber, ORDER_BOOK, paginate, timelineFor, toListItem } from '@shared/orderbook.static';

/**
 * The customer's own orders, served from the shared book instead of the API.
 *
 * Checkout unshifts a real row onto ORDER_BOOK, so the order it creates shows
 * up on the admin desk and in the dashboard totals straight away — and when the
 * admin moves it along, the customer's tracker follows. That round trip is the
 * whole point of these two services sharing one array.
 *
 * Authorisation is enforced here the way the API will enforce it: `mine()` and
 * `byId()` only ever return rows belonging to the signed-in user, so a customer
 * cannot read someone else's order by guessing an id.
 */
@Injectable({ providedIn: 'root' })
export class StaticOrders extends Orders {
  private readonly auth = inject(Auth);
  private readonly cart = inject(Cart);

  override checkout(shippingAddress: Address, paymentMethod: string,
                    couponCode?: string, notes?: string): Observable<Order> {
    const user = this.auth.user();
    if (!user) return throwError(() => new Error('Sign in before placing an order.'));

    const state = this.cart.state();
    if (state.items.length === 0) return throwError(() => new Error('Your cart is empty.'));

    const placedAt = new Date();
    const order: Order = {
      id: `o${ORDER_BOOK.length + 1}`,
      orderNumber: nextOrderNumber(),
      userId: user.id,
      customerName: shippingAddress.fullName || user.fullName,
      customerEmail: user.email,
      customerPhone: shippingAddress.phone,
      items: state.items.map(item => ({ ...item })),
      shippingAddress,
      subtotal: state.subtotal,
      shipping: state.shipping,
      tax: state.tax,
      discount: state.discount,
      total: state.total,
      paymentMethod,
      // Cash on delivery is owed, not taken; everything else is captured up front.
      paymentStatus: paymentMethod.toLowerCase().includes('cash') ? 'Pending' : 'Paid',
      status: 'Pending',
      source: currentSource(),
      timeline: timelineFor('Pending', placedAt, shippingAddress.city),
      estimatedDelivery: new Date(placedAt.getTime() + 3 * 864e5).toISOString(),
      createdAt: placedAt.toISOString()
    };

    if (notes?.trim()) {
      order.timeline = [...order.timeline, {
        status: 'Pending',
        message: `Note from the customer: ${notes.trim()}`,
        at: placedAt.toISOString()
      }];
    }
    if (couponCode) {
      order.timeline = [...order.timeline, {
        status: 'Pending',
        message: `Coupon ${couponCode.toUpperCase()} applied.`,
        at: placedAt.toISOString()
      }];
    }

    ORDER_BOOK.unshift(order);
    this.cart.clear();

    return serve(order);
  }

  override mine(page = 1, pageSize = 10): Observable<Paged<OrderListItem>> {
    return serve(paginate(this.own().map(toListItem), page, pageSize));
  }

  override byId(id: string): Observable<Order> {
    const found = this.own().find(order => order.id === id);
    return found ? serve(found) : throwError(() => new Error('That order is not yours to view.'));
  }

  /** Public lookup by number — deliberately not scoped to the signed-in user. */
  override track(orderNumber: string): Observable<Order> {
    const wanted = orderNumber.trim().toUpperCase();
    const found = ORDER_BOOK.find(order => order.orderNumber.toUpperCase() === wanted);
    return found ? serve(found) : throwError(() => new Error(`No order numbered ${wanted}.`));
  }

  override cancel(id: string): Observable<Order> {
    const found = this.own().find(order => order.id === id);
    if (!found) return throwError(() => new Error('That order is not yours to cancel.'));

    // Once it is with the carrier it is out of our hands.
    if (found.status === 'Shipped' || found.status === 'Delivered') {
      return throwError(() => new Error('This order has already shipped. Contact us to arrange a return.'));
    }
    if (found.status === 'Cancelled') return serve(found);

    return serve(advance(found, 'Cancelled', 'Cancelled by the customer.'));
  }

  /** Only ever this user's rows — the same rule the API will apply. */
  private own(): Order[] {
    const user = this.auth.user();
    return user ? ORDER_BOOK.filter(order => order.userId === user.id) : [];
  }
}

/** What the API would infer from the user agent. */
function currentSource(): OrderSource {
  return matchMedia('(max-width: 768px)').matches ? 'Mobile' : 'Web';
}

function serve<T>(value: T): Observable<T> {
  return of(value).pipe(delay(160));
}
