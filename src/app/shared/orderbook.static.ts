// One order book for the whole demo shop.
//
// Both the back office (admin.static.ts) and the customer's own history
// (orders.static.ts) read and write THIS array, so an order placed at checkout
// appears on the admin desk, and a status moved on the admin desk shows up on
// the customer's tracker. Two separate fixtures would drift apart within a
// minute of clicking around, which is exactly the bug a demo must not have.
//
// The generator is seeded, so a reload shows the same shop rather than a new
// random one. Replace this module with the API and nothing else has to change.

import {
  Address, CartItem, Order, OrderEvent, OrderListItem, OrderSource,
  OrderStatus, Paged, STATUS_LABEL, User
} from '@core/models';
import { CATALOGUE } from './catalogue.static';

const ORDER_COUNT = 240;
const DAYS_BACK = 180;
const CUSTOMER_COUNT = 148;

const CITIES: [string, string][] = [
  ['Lucknow', 'Uttar Pradesh'], ['Pune', 'Maharashtra'], ['Jaipur', 'Rajasthan'],
  ['Indore', 'Madhya Pradesh'], ['Bengaluru', 'Karnataka'], ['Kolkata', 'West Bengal'],
  ['Ahmedabad', 'Gujarat'], ['Chennai', 'Tamil Nadu'], ['Delhi', 'Delhi']
];

const FIRST = ['Ritu', 'Anjali', 'Pooja', 'Neha', 'Shreya', 'Kavya', 'Meera', 'Divya',
  'Arjun', 'Rohit', 'Vikram', 'Aditya', 'Sanjay', 'Ishaan', 'Nikhil', 'Farhan'];
const LAST = ['Sharma', 'Verma', 'Nair', 'Iyer', 'Kapoor', 'Mehta', 'Bose', 'Reddy',
  'Gupta', 'Joshi', 'Rao', 'Chauhan', 'Desai', 'Malhotra'];

/** How likely each status is, weighted so most orders have landed. */
const STATUS_MIX: [OrderStatus, number][] = [
  ['Delivered', 60], ['Shipped', 12], ['Processing', 15], ['Pending', 7], ['Cancelled', 6]
];

/** mulberry32 — a seeded generator, so the shop looks the same on every reload. */
function seeded(seed: number): () => number {
  let state = seed >>> 0;
  return () => {
    state = (state + 0x6d2b79f5) >>> 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildCustomers(): User[] {
  const random = seeded(20260728);
  return Array.from({ length: CUSTOMER_COUNT }, (unused, index) => {
    const first = FIRST[Math.floor(random() * FIRST.length)];
    const last = LAST[Math.floor(random() * LAST.length)];
    return {
      id: `u${index + 1}`,
      email: `${first}.${last}${index + 1}`.toLowerCase() + '@example.com',
      fullName: `${first} ${last}`,
      phone: `+91 9${Math.floor(random() * 900000000 + 100000000)}`,
      roles: ['customer']
    };
  });
}

/** The registered customers. Read by the admin customer list. */
export const CUSTOMERS: User[] = buildCustomers();

/**
 * The first customer is pinned to a known address so the demo has an account
 * that already has an order history to look at. Everyone signing in with a
 * fresh address gets a genuinely empty history, which is the honest result.
 */
export const DEMO_CUSTOMER_EMAIL = 'customer@anuveshandco.shop';

CUSTOMERS[0] = {
  ...CUSTOMERS[0],
  email: DEMO_CUSTOMER_EMAIL,
  fullName: 'Riya Sharma'
};

function pick(random: () => number, weighted: [OrderStatus, number][]): OrderStatus {
  const total = weighted.reduce((count, [, weight]) => count + weight, 0);
  let roll = random() * total;
  for (const [status, weight] of weighted) {
    roll -= weight;
    if (roll <= 0) return status;
  }
  return weighted[0][0];
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

/** The steps an order has actually been through, one per day. */
export function timelineFor(status: OrderStatus, placedAt: Date, city: string): OrderEvent[] {
  const walked: OrderStatus[] = status === 'Cancelled'
    ? ['Pending', 'Cancelled']
    : (['Pending', 'Processing', 'Shipped', 'Delivered'] as OrderStatus[])
        .slice(0, ['Pending', 'Processing', 'Shipped', 'Delivered'].indexOf(status) + 1);

  return walked.map((step, index) => ({
    status: step,
    message: eventCopy(step),
    location: index > 1 ? city : undefined,
    at: new Date(placedAt.getTime() + index * 864e5).toISOString()
  }));
}

function eventCopy(status: OrderStatus): string {
  switch (status) {
    case 'Pending': return 'Order received and payment confirmed.';
    case 'Processing': return 'Packed by hand, lid foiled and ribbon tied.';
    case 'Shipped': return 'Handed to the carrier.';
    case 'Delivered': return 'Delivered.';
    case 'Cancelled': return 'Cancelled — refund raised to the original method.';
  }
}

function buildOrderBook(): Order[] {
  const random = seeded(19042026);
  const midnight = startOfDay(new Date());

  return Array.from({ length: ORDER_COUNT }, (unused, index) => {
    // Skew recent: squaring the roll bunches orders toward today, the way a
    // growing shop's book actually looks.
    const age = Math.floor(Math.pow(random(), 2) * DAYS_BACK);
    const placedAt = new Date(midnight.getTime() - age * 864e5 + Math.floor(random() * 86_399_000));

    const customer = CUSTOMERS[Math.floor(random() * CUSTOMERS.length)];
    const lines = Math.floor(random() * 3) + 1;
    const items: CartItem[] = Array.from({ length: lines }, () => {
      const entry = CATALOGUE[Math.floor(random() * CATALOGUE.length)];
      const quantity = Math.floor(random() * 3) + 1;
      return {
        productId: entry.id, name: entry.name, slug: entry.slug, imageUrl: entry.imageUrl,
        unitPrice: entry.price, quantity, stockAtAdd: entry.stock,
        lineTotal: entry.price * quantity
      };
    });

    const subtotal = items.reduce((sum, item) => sum + item.lineTotal, 0);
    const shipping = subtotal >= 999 ? 0 : 59;
    const discount = random() < 0.22 ? Math.round(subtotal * 0.1) : 0;
    const tax = Math.round((subtotal - discount) * 0.18);

    // A very fresh order cannot already be delivered.
    const status = age < 2 ? pick(random, [['Pending', 6], ['Processing', 4]])
      : age < 5 ? pick(random, [['Processing', 5], ['Shipped', 4], ['Cancelled', 1]])
      : pick(random, STATUS_MIX);

    const [city, state] = CITIES[Math.floor(random() * CITIES.length)];
    const address: Address = {
      label: 'Home',
      fullName: customer.fullName,
      phone: customer.phone ?? '',
      line1: `${Math.floor(random() * 400) + 1}, ${LAST[Math.floor(random() * LAST.length)]} Marg`,
      city, state,
      postalCode: `${Math.floor(random() * 800000) + 110000}`,
      country: 'India',
      isDefault: true
    };

    const source: OrderSource = random() < 0.42 ? 'Mobile' : 'Web';

    return {
      id: `o${index + 1}`,
      orderNumber: `AC-${placedAt.getFullYear()}-${String(index + 1).padStart(4, '0')}`,
      userId: customer.id,
      customerName: customer.fullName,
      customerEmail: customer.email,
      customerPhone: customer.phone ?? '',
      items,
      shippingAddress: address,
      subtotal, shipping, tax, discount,
      total: subtotal - discount + tax + shipping,
      paymentMethod: random() < 0.68 ? 'UPI' : random() < 0.7 ? 'Card' : 'Cash on delivery',
      paymentStatus: status === 'Cancelled' ? 'Refunded' : status === 'Pending' ? 'Pending' : 'Paid',
      status,
      source,
      timeline: timelineFor(status, placedAt, city),
      trackingNumber: status === 'Pending' ? undefined : `AC${1_000_000 + index}`,
      carrier: status === 'Pending' ? undefined : 'Bluedart',
      estimatedDelivery: new Date(placedAt.getTime() + 3 * 864e5).toISOString(),
      createdAt: placedAt.toISOString()
    } satisfies Order;
  }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

/**
 * The live book. Mutable on purpose — checkout unshifts onto it and the admin
 * desk edits rows in place, which is the whole point of sharing it.
 */
export const ORDER_BOOK: Order[] = buildOrderBook();

/** Next free order number, continuing the generated run. */
export function nextOrderNumber(): string {
  const year = new Date().getFullYear();
  return `AC-${year}-${String(ORDER_BOOK.length + 1).padStart(4, '0')}`;
}

export function toListItem(order: Order): OrderListItem {
  return {
    id: order.id,
    orderNumber: order.orderNumber,
    customerName: order.customerName,
    total: order.total,
    status: order.status,
    paymentStatus: order.paymentStatus,
    source: order.source,
    itemCount: order.items.reduce((count, item) => count + item.quantity, 0),
    createdAt: order.createdAt,
    estimatedDelivery: order.estimatedDelivery
  };
}

/** Moves an order along and writes the timeline entry that goes with it. */
export function advance(order: Order, status: OrderStatus, message?: string,
                        location?: string, trackingNumber?: string, carrier?: string): Order {
  order.status = status;
  if (trackingNumber) order.trackingNumber = trackingNumber;
  if (carrier) order.carrier = carrier;
  if (status === 'Delivered') order.paymentStatus = 'Paid';
  if (status === 'Cancelled') order.paymentStatus = 'Refunded';

  order.timeline = [...order.timeline, {
    status,
    message: message || eventCopy(status),
    location,
    at: new Date().toISOString()
  }];

  return order;
}

export function paginate<T>(rows: T[], page: number, pageSize: number): Paged<T> {
  const safePage = Math.max(1, page);
  const start = (safePage - 1) * pageSize;
  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  return {
    items: rows.slice(start, start + pageSize),
    page: safePage,
    pageSize,
    total: rows.length,
    totalPages,
    hasNext: safePage < totalPages
  };
}

/** Used by the admin desk's free-text search across the whole book. */
export function matchesSearch(order: Order, needle: string): boolean {
  const haystack = [
    order.orderNumber, order.customerName, order.customerEmail, order.customerPhone,
    order.shippingAddress.city, order.source, STATUS_LABEL[order.status],
    ...order.items.map(item => item.name)
  ].join(' ').toLowerCase();
  return haystack.includes(needle);
}
