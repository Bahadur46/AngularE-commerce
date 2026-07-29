import {
  Admin
} from "./chunk-Q54TYYEO.js";
import {
  STATUS_LABEL
} from "./chunk-NEQP5CTB.js";
import {
  CATALOGUE,
  contentsFor,
  detailFor,
  occasionById,
  setContents,
  shortLabel,
  slugify
} from "./chunk-LX66BOLT.js";
import {
  art,
  motifFor
} from "./chunk-LMPLV25C.js";
import {
  Injectable,
  __spreadProps,
  __spreadValues,
  delay,
  of,
  setClassMetadata,
  throwError,
  ɵɵdefineInjectable,
  ɵɵgetInheritedFactory
} from "./chunk-H2OO3OVH.js";

// src/app/shared/orderbook.static.ts
var ORDER_COUNT = 240;
var DAYS_BACK = 180;
var CUSTOMER_COUNT = 148;
var CITIES = [
  ["Lucknow", "Uttar Pradesh"],
  ["Pune", "Maharashtra"],
  ["Jaipur", "Rajasthan"],
  ["Indore", "Madhya Pradesh"],
  ["Bengaluru", "Karnataka"],
  ["Kolkata", "West Bengal"],
  ["Ahmedabad", "Gujarat"],
  ["Chennai", "Tamil Nadu"],
  ["Delhi", "Delhi"]
];
var FIRST = [
  "Ritu",
  "Anjali",
  "Pooja",
  "Neha",
  "Shreya",
  "Kavya",
  "Meera",
  "Divya",
  "Arjun",
  "Rohit",
  "Vikram",
  "Aditya",
  "Sanjay",
  "Ishaan",
  "Nikhil",
  "Farhan"
];
var LAST = [
  "Sharma",
  "Verma",
  "Nair",
  "Iyer",
  "Kapoor",
  "Mehta",
  "Bose",
  "Reddy",
  "Gupta",
  "Joshi",
  "Rao",
  "Chauhan",
  "Desai",
  "Malhotra"
];
var STATUS_MIX = [
  ["Delivered", 60],
  ["Shipped", 12],
  ["Processing", 15],
  ["Pending", 7],
  ["Cancelled", 6]
];
function seeded(seed) {
  let state = seed >>> 0;
  return () => {
    state = state + 1831565813 >>> 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function buildCustomers() {
  const random = seeded(20260728);
  return Array.from({ length: CUSTOMER_COUNT }, (unused, index) => {
    const first = FIRST[Math.floor(random() * FIRST.length)];
    const last = LAST[Math.floor(random() * LAST.length)];
    return {
      id: `u${index + 1}`,
      email: `${first}.${last}${index + 1}`.toLowerCase() + "@example.com",
      fullName: `${first} ${last}`,
      phone: `+91 9${Math.floor(random() * 9e8 + 1e8)}`,
      roles: ["customer"]
    };
  });
}
var CUSTOMERS = buildCustomers();
var DEMO_CUSTOMER_EMAIL = "customer@anuveshandco.shop";
CUSTOMERS[0] = __spreadProps(__spreadValues({}, CUSTOMERS[0]), {
  email: DEMO_CUSTOMER_EMAIL,
  fullName: "Riya Sharma"
});
function pick(random, weighted) {
  const total = weighted.reduce((count, [, weight]) => count + weight, 0);
  let roll = random() * total;
  for (const [status, weight] of weighted) {
    roll -= weight;
    if (roll <= 0)
      return status;
  }
  return weighted[0][0];
}
function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
function timelineFor(status, placedAt, city) {
  const walked = status === "Cancelled" ? ["Pending", "Cancelled"] : ["Pending", "Processing", "Shipped", "Delivered"].slice(0, ["Pending", "Processing", "Shipped", "Delivered"].indexOf(status) + 1);
  return walked.map((step, index) => ({
    status: step,
    message: eventCopy(step),
    location: index > 1 ? city : void 0,
    at: new Date(placedAt.getTime() + index * 864e5).toISOString()
  }));
}
function eventCopy(status) {
  switch (status) {
    case "Pending":
      return "Order received and payment confirmed.";
    case "Processing":
      return "Packed by hand, lid foiled and ribbon tied.";
    case "Shipped":
      return "Handed to the carrier.";
    case "Delivered":
      return "Delivered.";
    case "Cancelled":
      return "Cancelled \u2014 refund raised to the original method.";
  }
}
function buildOrderBook() {
  const random = seeded(19042026);
  const midnight = startOfDay(/* @__PURE__ */ new Date());
  return Array.from({ length: ORDER_COUNT }, (unused, index) => {
    const age = Math.floor(Math.pow(random(), 2) * DAYS_BACK);
    const placedAt = new Date(midnight.getTime() - age * 864e5 + Math.floor(random() * 86399e3));
    const customer = CUSTOMERS[Math.floor(random() * CUSTOMERS.length)];
    const lines = Math.floor(random() * 3) + 1;
    const items = Array.from({ length: lines }, () => {
      const entry = CATALOGUE[Math.floor(random() * CATALOGUE.length)];
      const quantity = Math.floor(random() * 3) + 1;
      return {
        productId: entry.id,
        name: entry.name,
        slug: entry.slug,
        imageUrl: entry.imageUrl,
        unitPrice: entry.price,
        quantity,
        stockAtAdd: entry.stock,
        lineTotal: entry.price * quantity
      };
    });
    const subtotal = items.reduce((sum2, item) => sum2 + item.lineTotal, 0);
    const shipping = subtotal >= 999 ? 0 : 59;
    const discount = random() < 0.22 ? Math.round(subtotal * 0.1) : 0;
    const tax = Math.round((subtotal - discount) * 0.18);
    const status = age < 2 ? pick(random, [["Pending", 6], ["Processing", 4]]) : age < 5 ? pick(random, [["Processing", 5], ["Shipped", 4], ["Cancelled", 1]]) : pick(random, STATUS_MIX);
    const [city, state] = CITIES[Math.floor(random() * CITIES.length)];
    const address = {
      label: "Home",
      fullName: customer.fullName,
      phone: customer.phone ?? "",
      line1: `${Math.floor(random() * 400) + 1}, ${LAST[Math.floor(random() * LAST.length)]} Marg`,
      city,
      state,
      postalCode: `${Math.floor(random() * 8e5) + 11e4}`,
      country: "India",
      isDefault: true
    };
    const source = random() < 0.42 ? "Mobile" : "Web";
    return {
      id: `o${index + 1}`,
      orderNumber: `AC-${placedAt.getFullYear()}-${String(index + 1).padStart(4, "0")}`,
      userId: customer.id,
      customerName: customer.fullName,
      customerEmail: customer.email,
      customerPhone: customer.phone ?? "",
      items,
      shippingAddress: address,
      subtotal,
      shipping,
      tax,
      discount,
      total: subtotal - discount + tax + shipping,
      paymentMethod: random() < 0.68 ? "UPI" : random() < 0.7 ? "Card" : "Cash on delivery",
      paymentStatus: status === "Cancelled" ? "Refunded" : status === "Pending" ? "Pending" : "Paid",
      status,
      source,
      timeline: timelineFor(status, placedAt, city),
      trackingNumber: status === "Pending" ? void 0 : `AC${1e6 + index}`,
      carrier: status === "Pending" ? void 0 : "Bluedart",
      estimatedDelivery: new Date(placedAt.getTime() + 3 * 864e5).toISOString(),
      createdAt: placedAt.toISOString()
    };
  }).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
var ORDER_BOOK = buildOrderBook();
function nextOrderNumber() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return `AC-${year}-${String(ORDER_BOOK.length + 1).padStart(4, "0")}`;
}
function toListItem(order) {
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
function advance(order, status, message, location, trackingNumber, carrier) {
  order.status = status;
  if (trackingNumber)
    order.trackingNumber = trackingNumber;
  if (carrier)
    order.carrier = carrier;
  if (status === "Delivered")
    order.paymentStatus = "Paid";
  if (status === "Cancelled")
    order.paymentStatus = "Refunded";
  order.timeline = [...order.timeline, {
    status,
    message: message || eventCopy(status),
    location,
    at: (/* @__PURE__ */ new Date()).toISOString()
  }];
  return order;
}
function paginate(rows, page, pageSize) {
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
function matchesSearch(order, needle) {
  const haystack = [
    order.orderNumber,
    order.customerName,
    order.customerEmail,
    order.customerPhone,
    order.shippingAddress.city,
    order.source,
    STATUS_LABEL[order.status],
    ...order.items.map((item) => item.name)
  ].join(" ").toLowerCase();
  return haystack.includes(needle);
}

// src/app/core/services/admin.static.ts
var StaticAdmin = class _StaticAdmin extends Admin {
  dashboard() {
    return serve(summarise(ORDER_BOOK, CUSTOMERS));
  }
  orders(status, page = 1, pageSize = 20) {
    const matched = ORDER_BOOK.filter((order) => !status || order.status === status);
    return serve(paginate(matched.map(toListItem), page, pageSize));
  }
  /** Free-text across order number, customer, city, source and product names. */
  searchOrders(term, status, source, page = 1, pageSize = 20) {
    const needle = term.trim().toLowerCase();
    const matched = ORDER_BOOK.filter((order) => !status || order.status === status).filter((order) => !source || order.source === source).filter((order) => !needle || matchesSearch(order, needle));
    return serve(paginate(matched.map(toListItem), page, pageSize));
  }
  order(id) {
    const found = ORDER_BOOK.find((order) => order.id === id);
    return found ? serve(found) : throwError(() => new Error(`No order with the id \u201C${id}\u201D.`));
  }
  updateOrderStatus(id, status, message, location, trackingNumber, carrier) {
    const found = ORDER_BOOK.find((order) => order.id === id);
    if (!found)
      return throwError(() => new Error(`No order with the id \u201C${id}\u201D.`));
    return serve(advance(found, status, message, location, trackingNumber, carrier));
  }
  customers(search, page = 1, pageSize = 20) {
    const needle = search?.trim().toLowerCase();
    const matched = needle ? CUSTOMERS.filter((person) => `${person.fullName} ${person.email}`.toLowerCase().includes(needle)) : CUSTOMERS;
    return serve(paginate(matched, page, pageSize));
  }
  setCustomerActive() {
    return serve(void 0);
  }
  // ---- Catalogue editing --------------------------------------------------
  // CATALOGUE is mutated in place, so the shop, the search and the dashboard
  // all see the edit immediately — the same thing a database write would do.
  // Edits last for the session; a reload rebuilds the seeded catalogue.
  createProduct(body) {
    const entry = entryFrom(body, `p${CATALOGUE.length + 1}`, (/* @__PURE__ */ new Date()).toISOString());
    if (CATALOGUE.some((row) => row.slug === entry.slug)) {
      return throwError(() => new Error(`A curation called \u201C${body.name}\u201D already exists.`));
    }
    CATALOGUE.unshift(entry);
    setContents(entry.slug, []);
    return serve(detailFor(entry));
  }
  updateProduct(id, body) {
    const index = CATALOGUE.findIndex((row) => row.id === id);
    if (index < 0)
      return throwError(() => new Error(`No curation with the id \u201C${id}\u201D.`));
    const existing = CATALOGUE[index];
    const updated = entryFrom(body, id, existing.createdAt);
    CATALOGUE[index] = updated;
    if (updated.slug !== existing.slug) {
      setContents(updated.slug, contentsFor(existing.slug));
    }
    return serve(detailFor(updated));
  }
  deleteProduct(id) {
    const index = CATALOGUE.findIndex((row) => row.id === id);
    if (index < 0)
      return throwError(() => new Error(`No curation with the id \u201C${id}\u201D.`));
    CATALOGUE.splice(index, 1);
    return serve(void 0);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StaticAdmin_BaseFactory;
    return function StaticAdmin_Factory(__ngFactoryType__) {
      return (\u0275StaticAdmin_BaseFactory || (\u0275StaticAdmin_BaseFactory = \u0275\u0275getInheritedFactory(_StaticAdmin)))(__ngFactoryType__ || _StaticAdmin);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaticAdmin, factory: _StaticAdmin.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StaticAdmin, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function entryFrom(body, id, createdAt) {
  const occasion = occasionById(body.categoryId) ?? occasionById("c1");
  const slug = slugify(body.name);
  const compareAtPrice = body.compareAtPrice || void 0;
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
    imageUrl: body.images.find((image) => image.trim().length > 0) ?? art({
      label: shortLabel(body.name),
      caption: occasion.name.toUpperCase(),
      tint: occasion.tint,
      motif: motifFor(body.name)
    }),
    ratingAverage: 0,
    ratingCount: 0,
    stock: body.stock,
    tags: body.tags.length ? body.tags : [occasion.slug.replace("-gift", ""), "curation", "gifting"],
    createdAt
  };
}
function earns(order) {
  return order.status !== "Cancelled";
}
function summarise(book, people) {
  const now = /* @__PURE__ */ new Date();
  const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1).getTime();
  const earning = book.filter(earns);
  const at = (order) => new Date(order.createdAt).getTime();
  const revenueTotal = sum(earning.map((order) => order.total));
  const revenueToday = sum(earning.filter((order) => at(order) >= midnight).map((order) => order.total));
  const revenueThisMonth = sum(earning.filter((order) => at(order) >= monthStart).map((order) => order.total));
  const ordersToday = book.filter((order) => at(order) >= midnight).length;
  const pending = ["Pending", "Processing", "Shipped"];
  const window = 30 * 864e5;
  const thisPeriod = earning.filter((order) => at(order) >= midnight - window);
  const lastPeriod = earning.filter((order) => at(order) >= midnight - 2 * window && at(order) < midnight - window);
  const aovNow = mean(thisPeriod.map((order) => order.total));
  const aovBefore = mean(lastPeriod.map((order) => order.total));
  const units = /* @__PURE__ */ new Map();
  const byCategory = /* @__PURE__ */ new Map();
  for (const order of earning) {
    for (const item of order.items) {
      const row = units.get(item.productId) ?? { name: item.name, unitsSold: 0, revenue: 0 };
      row.unitsSold += item.quantity;
      row.revenue += item.lineTotal;
      units.set(item.productId, row);
      const category = CATALOGUE.find((entry) => entry.id === item.productId)?.categoryName ?? "Other";
      byCategory.set(category, (byCategory.get(category) ?? 0) + item.lineTotal);
    }
  }
  const lowStock = CATALOGUE.filter((entry) => entry.stock <= 12).sort((a, b) => a.stock - b.stock).map((entry) => ({ productId: entry.id, name: entry.name, stock: entry.stock }));
  return {
    revenueTotal,
    revenueThisMonth,
    revenueToday,
    averageOrderValue: Math.round(aovNow),
    ordersTotal: book.length,
    ordersToday,
    ordersPending: book.filter((order) => pending.includes(order.status)).length,
    ordersCompleted: book.filter((order) => order.status === "Delivered").length,
    ordersCancelled: book.filter((order) => order.status === "Cancelled").length,
    productsTotal: CATALOGUE.length,
    lowStockCount: lowStock.length,
    customersTotal: people.length,
    customersNew: new Set(book.filter((order) => at(order) >= monthStart).map((order) => order.userId)).size,
    deltas: {
      revenue: percentChange(sum(thisPeriod.map((o) => o.total)), sum(lastPeriod.map((o) => o.total))),
      orders: percentChange(thisPeriod.length, lastPeriod.length),
      customers: percentChange(new Set(thisPeriod.map((o) => o.userId)).size, new Set(lastPeriod.map((o) => o.userId)).size),
      aov: percentChange(aovNow, aovBefore)
    },
    daily: bucket(earning, 14, "day"),
    weekly: bucket(earning, 12, "week"),
    monthly: bucket(earning, 12, "month"),
    statusBreakdown: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((status) => ({ status, count: book.filter((order) => order.status === status).length })).filter((row) => row.count > 0),
    topProducts: [...units.entries()].map(([productId, row]) => __spreadValues({ productId }, row)).sort((a, b) => b.revenue - a.revenue).slice(0, 6),
    categoryRevenue: [...byCategory.entries()].map(([name, revenue]) => ({ name, revenue })).sort((a, b) => b.revenue - a.revenue),
    lowStock: lowStock.slice(0, 6),
    recentOrders: book.slice(0, 8).map(toListItem)
  };
}
function bucket(orders, count, size) {
  const now = /* @__PURE__ */ new Date();
  return Array.from({ length: count }, (unused, index) => {
    const back = count - 1 - index;
    let from;
    let to;
    let label;
    if (size === "day") {
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - back);
      to = new Date(from.getTime() + 864e5);
      label = from.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    } else if (size === "week") {
      from = new Date(now.getFullYear(), now.getMonth(), now.getDate() - back * 7 - 6);
      to = new Date(from.getTime() + 7 * 864e5);
      label = from.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
    } else {
      from = new Date(now.getFullYear(), now.getMonth() - back, 1);
      to = new Date(now.getFullYear(), now.getMonth() - back + 1, 1);
      label = from.toLocaleDateString("en-IN", { month: "short" });
    }
    const inRange = orders.filter((order) => {
      const at = new Date(order.createdAt).getTime();
      return at >= from.getTime() && at < to.getTime();
    });
    return { label, revenue: sum(inRange.map((order) => order.total)), orders: inRange.length };
  });
}
function sum(values) {
  return values.reduce((total, value) => total + value, 0);
}
function mean(values) {
  return values.length ? sum(values) / values.length : 0;
}
function percentChange(now, before) {
  if (before === 0)
    return now === 0 ? 0 : 100;
  return Math.round((now - before) / before * 1e3) / 10;
}
function serve(value) {
  return of(value).pipe(delay(140));
}

export {
  timelineFor,
  ORDER_BOOK,
  nextOrderNumber,
  toListItem,
  advance,
  paginate,
  StaticAdmin
};
//# sourceMappingURL=chunk-CQZ7UETW.js.map
