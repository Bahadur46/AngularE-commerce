import {
  RouterLink
} from "./chunk-N55HBYBE.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JAMDIHHE.js";
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-H2OO3OVH.js";

// src/app/shared/components/not-found.ts
var NotFound = class _NotFound {
  static \u0275fac = function NotFound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotFound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotFound, selectors: [["Kova-not-found"]], decls: 12, vars: 0, consts: [[1, "page", "wrap"], [1, "eyebrow"], [1, "muted"], [1, "row"], ["mat-flat-button", "", "routerLink", "/shop"], ["mat-stroked-button", "", "routerLink", "/track"]], template: function NotFound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Error 404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1");
      \u0275\u0275text(4, "That page isn't here.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "The link may be old, or the product may have sold out and been retired.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3)(8, "a", 4);
      \u0275\u0275text(9, "Browse the catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "a", 5);
      \u0275\u0275text(11, "Track an order");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton], styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: start;\n  padding-block: 96px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 46ch;\n}\n/*# sourceMappingURL=not-found.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotFound, [{
    type: Component,
    args: [{ selector: "Kova-not-found", imports: [RouterLink, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page wrap">
      <span class="eyebrow">Error 404</span>
      <h1>That page isn't here.</h1>
      <p class="muted">The link may be old, or the product may have sold out and been retired.</p>
      <div class="row">
        <a mat-flat-button routerLink="/shop">Browse the catalogue</a>
        <a mat-stroked-button routerLink="/track">Track an order</a>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;9e1e799558a9f52e451c02eed53f69c10beebefb71fed214768d448a8cefcdac;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/not-found.ts */\n.wrap {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  align-items: start;\n  padding-block: 96px;\n}\np {\n  margin: 0;\n  max-width: 46ch;\n}\n/*# sourceMappingURL=not-found.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotFound, { className: "NotFound", filePath: "src/app/shared/components/not-found.ts", lineNumber: 25 });
})();
export {
  NotFound
};
//# sourceMappingURL=chunk-QFJZQDYT.js.map
