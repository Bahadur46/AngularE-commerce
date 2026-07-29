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

// src/app/core/services/admin.ts
var Admin = class _Admin {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/admin`;
  dashboard() {
    return this.http.get(`${this.base}/dashboard`);
  }
  createProduct(body) {
    return this.http.post(`${this.base}/products`, body);
  }
  updateProduct(id, body) {
    return this.http.put(`${this.base}/products/${id}`, body);
  }
  deleteProduct(id) {
    return this.http.delete(`${this.base}/products/${id}`);
  }
  createCategory(body) {
    return this.http.post(`${this.base}/categories`, body);
  }
  updateCategory(id, body) {
    return this.http.put(`${this.base}/categories/${id}`, body);
  }
  deleteCategory(id) {
    return this.http.delete(`${this.base}/categories/${id}`);
  }
  orders(status, page = 1, pageSize = 20) {
    let params = new HttpParams().set("page", page).set("pageSize", pageSize);
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.base}/orders`, { params });
  }
  order(id) {
    return this.http.get(`${this.base}/orders/${id}`);
  }
  updateOrderStatus(id, status, message, location, trackingNumber, carrier) {
    return this.http.put(`${this.base}/orders/${id}/status`, { status, message, location, trackingNumber, carrier });
  }
  customers(search, page = 1, pageSize = 20) {
    let params = new HttpParams().set("page", page).set("pageSize", pageSize);
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.base}/customers`, { params });
  }
  setCustomerActive(id, isActive) {
    return this.http.put(`${this.base}/customers/${id}/active`, {}, {
      params: new HttpParams().set("isActive", isActive)
    });
  }
  static \u0275fac = function Admin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Admin)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Admin, factory: _Admin.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Admin, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Admin
};
//# sourceMappingURL=chunk-Q54TYYEO.js.map
