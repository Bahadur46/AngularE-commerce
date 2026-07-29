import {
  ProductCard
} from "./chunk-ME7HFTVM.js";
import {
  Wishlist
} from "./chunk-UKKEYK4U.js";
import "./chunk-LMPLV25C.js";
import {
  EmptyState
} from "./chunk-JV4ICS3X.js";
import "./chunk-U7M6I7OV.js";
import {
  Cart
} from "./chunk-ZFMJUGTV.js";
import "./chunk-TRCVJC4T.js";
import "./chunk-DYU4NP57.js";
import "./chunk-N55HBYBE.js";
import "./chunk-E3BMGIF5.js";
import "./chunk-ACQY33BG.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JAMDIHHE.js";
import "./chunk-YKSZHAQM.js";
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext
} from "./chunk-H2OO3OVH.js";

// src/app/features/wishlist/wishlist-page.ts
var _forTrack0 = ($index, $item) => $item.id;
function WishlistPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function WishlistPage_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addAllInStock());
    });
    \u0275\u0275text(1, "Add everything in stock to cart");
    \u0275\u0275elementEnd();
  }
}
function WishlistPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-empty-state", 4);
  }
}
function WishlistPage_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-product-card", 7);
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    \u0275\u0275property("product", product_r3);
  }
}
function WishlistPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, WishlistPage_Conditional_9_For_2_Template, 1, 1, "Kova-product-card", 7, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.wishlist.items());
  }
}
var WishlistPage = class _WishlistPage {
  wishlist = inject(Wishlist);
  cart = inject(Cart);
  constructor() {
    this.wishlist.loadItems();
  }
  addAllInStock() {
    for (const product of this.wishlist.items()) {
      if (product.stock > 0)
        this.cart.add(product.id, 1);
    }
  }
  static \u0275fac = function WishlistPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WishlistPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WishlistPage, selectors: [["Kova-wishlist-page"]], decls: 10, vars: 2, consts: [[1, "page"], [1, "section-head"], [1, "eyebrow"], ["mat-stroked-button", ""], ["icon", "favorite", "heading", "Nothing saved yet", "body", "Tap the heart on any product to keep it here while you decide.", "actionLabel", "Browse the catalogue", "actionLink", "/shop"], [1, "grid"], ["mat-stroked-button", "", 3, "click"], [3, "product"]], template: function WishlistPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Saved");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Wishlist");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, WishlistPage_Conditional_7_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, WishlistPage_Conditional_8_Template, 1, 0, "Kova-empty-state", 4)(9, WishlistPage_Conditional_9_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.wishlist.items().length ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.wishlist.items().length ? 8 : 9);
    }
  }, dependencies: [MatButtonModule, MatButton, ProductCard, EmptyState], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WishlistPage, [{
    type: Component,
    args: [{
      selector: "Kova-wishlist-page",
      imports: [MatButtonModule, ProductCard, EmptyState],
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Saved</span>
          <h1>Wishlist</h1>
        </div>
        @if (wishlist.items().length) {
          <button mat-stroked-button (click)="addAllInStock()">Add everything in stock to cart</button>
        }
      </div>

      @if (!wishlist.items().length) {
        <Kova-empty-state
          icon="favorite"
          heading="Nothing saved yet"
          body="Tap the heart on any product to keep it here while you decide."
          actionLabel="Browse the catalogue"
          actionLink="/shop" />
      } @else {
        <div class="grid">
          @for (product of wishlist.items(); track product.id) {
            <Kova-product-card [product]="product" />
          }
        </div>
      }
    </div>
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WishlistPage, { className: "WishlistPage", filePath: "src/app/features/wishlist/wishlist-page.ts", lineNumber: 41 });
})();
export {
  WishlistPage
};
//# sourceMappingURL=chunk-W64VB4IK.js.map
