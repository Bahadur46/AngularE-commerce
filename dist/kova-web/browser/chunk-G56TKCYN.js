import {
  environment
} from "./chunk-E3BMGIF5.js";
import {
  HttpClient,
  HttpParams
} from "./chunk-YWOJPOKT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/orders.ts
var Orders = class _Orders {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/orders`;
  checkout(shippingAddress, paymentMethod, couponCode, notes) {
    return this.http.post(`${this.base}/checkout`, { shippingAddress, paymentMethod, couponCode, notes });
  }
  mine(page = 1, pageSize = 10) {
    return this.http.get(this.base, {
      params: new HttpParams().set("page", page).set("pageSize", pageSize)
    });
  }
  byId(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  /** Public lookup — works whether or not the visitor is signed in. */
  track(orderNumber) {
    return this.http.get(`${this.base}/track/${orderNumber.trim().toUpperCase()}`);
  }
  cancel(id) {
    return this.http.post(`${this.base}/${id}/cancel`, {});
  }
  static \u0275fac = function Orders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Orders)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Orders, factory: _Orders.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Orders, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Orders
};
//# sourceMappingURL=chunk-G56TKCYN.js.map
