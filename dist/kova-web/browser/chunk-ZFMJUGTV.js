import {
  Notify
} from "./chunk-TRCVJC4T.js";
import {
  Auth
} from "./chunk-DYU4NP57.js";
import {
  environment
} from "./chunk-E3BMGIF5.js";
import {
  HttpClient
} from "./chunk-YWOJPOKT.js";
import {
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  ɵɵdefineInjectable
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/cart.ts
var EMPTY = {
  items: [],
  subtotal: 0,
  shipping: 0,
  tax: 0,
  discount: 0,
  total: 0,
  itemCount: 0
};
var Cart = class _Cart {
  http = inject(HttpClient);
  auth = inject(Auth);
  notify = inject(Notify);
  base = `${environment.apiUrl}/cart`;
  state = signal(EMPTY, ...ngDevMode ? [{ debugName: "state" }] : []);
  count = computed(() => this.state().itemCount, ...ngDevMode ? [{ debugName: "count" }] : []);
  isEmpty = computed(() => this.state().items.length === 0, ...ngDevMode ? [{ debugName: "isEmpty" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  load() {
    if (!this.auth.isSignedIn()) {
      this.state.set(EMPTY);
      return;
    }
    this.loading.set(true);
    this.http.get(this.base).subscribe({
      next: (cart) => {
        this.state.set(cart);
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  add(productId, quantity = 1, variantValue) {
    this.addItem(productId, quantity, variantValue).subscribe({
      next: () => this.notify.done("Added to cart"),
      error: () => void 0
      // the error interceptor already surfaced the reason
    });
  }
  /**
   * Same call as add, but the caller decides what happens next. Order Now uses
   * it so the shopper only reaches checkout once the item is really in the cart.
   */
  addItem(productId, quantity = 1, variantValue) {
    return this.http.post(`${this.base}/items`, { productId, quantity, variantValue }).pipe(tap((cart) => this.state.set(cart)));
  }
  setQuantity(productId, quantity, variantValue) {
    this.http.put(`${this.base}/items`, { productId, quantity, variantValue }).subscribe({ next: (cart) => this.state.set(cart) });
  }
  remove(productId) {
    this.http.delete(`${this.base}/items/${productId}`).subscribe({ next: (cart) => {
      this.state.set(cart);
      this.notify.done("Removed from cart");
    } });
  }
  clear() {
    this.http.delete(this.base).subscribe({ next: (cart) => this.state.set(cart) });
  }
  applyCoupon(code) {
    return this.http.post(`${this.base}/coupon/${code}`, {}).pipe(tap((cart) => this.state.set(cart)));
  }
  reset() {
    this.state.set(EMPTY);
  }
  static \u0275fac = function Cart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Cart)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Cart, factory: _Cart.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Cart, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Cart
};
//# sourceMappingURL=chunk-ZFMJUGTV.js.map
