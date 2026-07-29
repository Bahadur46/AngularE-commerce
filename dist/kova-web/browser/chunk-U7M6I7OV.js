import {
  environment
} from "./chunk-E3BMGIF5.js";
import {
  Pipe,
  setClassMetadata,
  ɵɵdefinePipe
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/currency.ts
var PricePipe = class _PricePipe {
  formatter = new Intl.NumberFormat(environment.locale, {
    style: "currency",
    currency: environment.currency,
    maximumFractionDigits: 0
  });
  transform(value) {
    return this.formatter.format(value ?? 0);
  }
  static \u0275fac = function PricePipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PricePipe)();
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "KovaPrice", type: _PricePipe, pure: true });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PricePipe, [{
    type: Pipe,
    args: [{ name: "KovaPrice", standalone: true }]
  }], null, null);
})();

export {
  PricePipe
};
//# sourceMappingURL=chunk-U7M6I7OV.js.map
