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

// src/app/core/services/catalog.ts
var Catalog = class _Catalog {
  http = inject(HttpClient);
  base = environment.apiUrl;
  search(query) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(query)) {
      if (value !== void 0 && value !== null && value !== "") {
        params = params.set(key, String(value));
      }
    }
    return this.http.get(`${this.base}/products`, { params });
  }
  featured(take = 8) {
    return this.http.get(`${this.base}/products/featured`, {
      params: new HttpParams().set("take", take)
    });
  }
  facets(category) {
    let params = new HttpParams();
    if (category)
      params = params.set("category", category);
    return this.http.get(`${this.base}/products/facets`, { params });
  }
  suggest(term) {
    return this.http.get(`${this.base}/products/suggest`, {
      params: new HttpParams().set("q", term)
    });
  }
  bySlug(slug) {
    return this.http.get(`${this.base}/products/${slug}`);
  }
  related(productId) {
    return this.http.get(`${this.base}/products/${productId}/related`);
  }
  reviews(productId) {
    return this.http.get(`${this.base}/products/${productId}/reviews`);
  }
  addReview(productId, rating, title, body) {
    return this.http.post(`${this.base}/products/${productId}/reviews`, { rating, title, body });
  }
  categories() {
    return this.http.get(`${this.base}/categories`);
  }
  category(slug) {
    return this.http.get(`${this.base}/categories/${slug}`);
  }
  static \u0275fac = function Catalog_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Catalog)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Catalog, factory: _Catalog.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Catalog, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Catalog
};
//# sourceMappingURL=chunk-JTVVANCZ.js.map
