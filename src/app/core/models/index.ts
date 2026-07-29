// Mirrors the DTOs returned byKova.Api. Keep the two in step.

export interface User {
  id: string;
  email: string;
  fullName: string;
  phone?: string;
  avatarUrl?: string;
  roles: string[];
}

export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: User;
}

export interface Paged<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
  totalPages: number;
  hasNext: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  imageUrl?: string;
  parentId?: string;
  sortOrder: number;
  isActive: boolean;
  productCount: number;
}

export interface ProductListItem {
  id: string;
  name: string;
  slug: string;
  brand: string;
  categoryName: string;
  price: number;
  compareAtPrice?: number;
  discountPercent: number;
  imageUrl?: string;
  ratingAverage: number;
  ratingCount: number;
  stock: number;
}

export interface Product extends ProductListItem {
  sku: string;
  shortDescription: string;
  description: string;
  categoryId: string;
  images: string[];
  /** What is in this box, in the order it is packed. One line per piece. */
  includes: string[];
  tags: string[];
  specs: Record<string, string>;
  variants: ProductVariant[];
  isFeatured: boolean;
  isPublished: boolean;
  createdAt: string;
}

export interface ProductVariant { name: string; value: string; priceDelta: number; stock: number; }

export interface Review {
  id: string; productId: string; userId: string; userName: string;
  rating: number; title: string; body: string; createdAt: string;
}

export interface Facets { brands: string[]; tags: string[]; minPrice: number; maxPrice: number; }

export interface ProductQuery {
  search?: string; category?: string; brand?: string;
  minPrice?: number; maxPrice?: number; minRating?: number;
  inStock?: boolean; tags?: string; sort?: string;
  page?: number; pageSize?: number;
}

export interface CartItem {
  productId: string; name: string; slug: string; imageUrl?: string;
  variantValue?: string; unitPrice: number; quantity: number;
  stockAtAdd: number; lineTotal: number;
}

export interface Cart {
  items: CartItem[];
  subtotal: number; shipping: number; tax: number; discount: number; total: number;
  itemCount: number; couponCode?: string;
}

export interface Address {
  id?: string; label: string; fullName: string; phone: string;
  line1: string; line2?: string; city: string; state: string;
  postalCode: string; country: string; isDefault: boolean;
}

export type OrderStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

export type PaymentStatus = 'Pending' | 'Paid' | 'Failed' | 'Refunded';

/** Where the order came from. The API sets this from the client that posted it. */
export type OrderSource = 'Web' | 'Mobile';

export interface OrderEvent { status: OrderStatus; message: string; location?: string; at: string; }

export interface Order {
  id: string; orderNumber: string; userId: string;
  customerName: string; customerEmail: string; customerPhone: string;
  items: CartItem[]; shippingAddress: Address;
  subtotal: number; shipping: number; tax: number; discount: number; total: number;
  paymentMethod: string; paymentStatus: PaymentStatus; status: OrderStatus;
  source: OrderSource;
  timeline: OrderEvent[]; trackingNumber?: string; carrier?: string;
  estimatedDelivery?: string; createdAt: string;
}

export interface OrderListItem {
  id: string; orderNumber: string; customerName: string; total: number;
  status: OrderStatus; paymentStatus: PaymentStatus; source: OrderSource;
  itemCount: number; createdAt: string; estimatedDelivery?: string;
}

/** One bucket on a revenue chart — a day, a week or a month. */
export interface SeriesPoint { label: string; revenue: number; orders: number; }

export interface DashboardStats {
  // Money
  revenueTotal: number;
  revenueThisMonth: number;
  revenueToday: number;
  averageOrderValue: number;

  // Orders
  ordersTotal: number;
  ordersToday: number;
  ordersPending: number;
  ordersCompleted: number;
  ordersCancelled: number;

  // Catalogue and people
  productsTotal: number;
  lowStockCount: number;
  customersTotal: number;
  customersNew: number;

  /** Change against the previous equivalent period, as a percentage. */
  deltas: { revenue: number; orders: number; customers: number; aov: number };

  // Series, each ready to plot as it stands
  daily: SeriesPoint[];
  weekly: SeriesPoint[];
  monthly: SeriesPoint[];

  statusBreakdown: { status: OrderStatus; count: number }[];
  topProducts: { productId: string; name: string; unitsSold: number; revenue: number }[];
  categoryRevenue: { name: string; revenue: number }[];
  lowStock: { productId: string; name: string; stock: number }[];
  recentOrders: OrderListItem[];
}

/**
 * The fulfilment sequence, in the order the customer sees it on the tracker.
 * Cancelled is deliberately absent — it ends an order rather than advancing it,
 * so the tracker shows it as a stop, not as a fifth step.
 */
export const TRACKING_STEPS: OrderStatus[] = ['Pending', 'Processing', 'Shipped', 'Delivered'];

/** Every status an order can hold, including the terminal one. */
export const ALL_STATUSES: OrderStatus[] = [...TRACKING_STEPS, 'Cancelled'];

export const STATUS_LABEL: Record<OrderStatus, string> = {
  Pending: 'Pending',
  Processing: 'Processing',
  Shipped: 'Shipped',
  Delivered: 'Delivered',
  Cancelled: 'Cancelled'
};

/** What each status means to the customer, shown under the tracker. */
export const STATUS_BLURB: Record<OrderStatus, string> = {
  Pending: 'We have your order and payment. It joins the bench today.',
  Processing: 'Being packed by hand — pieces checked, lid foiled, ribbon tied.',
  Shipped: 'Handed to the carrier and on its way to you.',
  Delivered: 'Delivered. We hope it landed well.',
  Cancelled: 'Cancelled. Any payment is refunded to the original method.'
};
