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
  ɵɵdefineInjectable
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/wishlist.ts
var Wishlist = class _Wishlist {
  http = inject(HttpClient);
  auth = inject(Auth);
  notify = inject(Notify);
  base = `${environment.apiUrl}/wishlist`;
  /** Ids only — enough for every heart icon in a grid to know its state. */
  ids = signal(/* @__PURE__ */ new Set(), ...ngDevMode ? [{ debugName: "ids" }] : []);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  count = computed(() => this.ids().size, ...ngDevMode ? [{ debugName: "count" }] : []);
  has(productId) {
    return this.ids().has(productId);
  }
  loadIds() {
    if (!this.auth.isSignedIn()) {
      this.ids.set(/* @__PURE__ */ new Set());
      return;
    }
    this.http.get(`${this.base}/ids`).subscribe({
      next: (ids) => this.ids.set(new Set(ids))
    });
  }
  loadItems() {
    this.http.get(this.base).subscribe({
      next: (items) => {
        this.items.set(items);
        this.ids.set(new Set(items.map((i) => i.id)));
      }
    });
  }
  toggle(productId) {
    this.http.post(`${this.base}/${productId}/toggle`, {}).subscribe({
      next: ({ saved }) => {
        const next = new Set(this.ids());
        saved ? next.add(productId) : next.delete(productId);
        this.ids.set(next);
        if (!saved)
          this.items.update((list) => list.filter((i) => i.id !== productId));
        this.notify.done(saved ? "Saved to wishlist" : "Removed from wishlist");
      }
    });
  }
  reset() {
    this.ids.set(/* @__PURE__ */ new Set());
    this.items.set([]);
  }
  static \u0275fac = function Wishlist_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Wishlist)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Wishlist, factory: _Wishlist.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Wishlist, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Wishlist
};
//# sourceMappingURL=chunk-UKKEYK4U.js.map
