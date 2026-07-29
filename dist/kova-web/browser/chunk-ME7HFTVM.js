import {
  Wishlist
} from "./chunk-UKKEYK4U.js";
import {
  FALLBACK_SHOT
} from "./chunk-LMPLV25C.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
import {
  Cart
} from "./chunk-ZFMJUGTV.js";
import {
  Auth
} from "./chunk-DYU4NP57.js";
import {
  Router,
  RouterLink
} from "./chunk-N55HBYBE.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JAMDIHHE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YKSZHAQM.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/shared/components/star-rating.ts
var _c0 = () => [1, 2, 3, 4, 5];
function StarRating_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 3);
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("filled", star_r1 <= ctx_r1.Math.round(ctx_r1.value()));
  }
}
function StarRating_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r1.count(), ")");
  }
}
var StarRating = class _StarRating {
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  count = input(null, ...ngDevMode ? [{ debugName: "count" }] : []);
  Math = Math;
  static \u0275fac = function StarRating_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StarRating)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarRating, selectors: [["Kova-star-rating"]], inputs: { value: [1, "value"], count: [1, "count"] }, decls: 4, vars: 3, consts: [[1, "stars"], ["fontSet", "material-symbols-outlined", 3, "filled"], [1, "numeric", "muted"], ["fontSet", "material-symbols-outlined"]], template: function StarRating_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "span", 0);
      \u0275\u0275repeaterCreate(1, StarRating_For_2_Template, 2, 2, "mat-icon", 1, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275conditionalCreate(3, StarRating_Conditional_3_Template, 2, 1, "small", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.value() + " out of 5");
      \u0275\u0275advance();
      \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.count() !== null ? 3 : -1);
    }
  }, dependencies: [MatIconModule, MatIcon], styles: ['\n\n.stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: var(--mat-sys-outline);\n}\nmat-icon.filled[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\nsmall[_ngcontent-%COMP%] {\n  margin-left: 6px;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=star-rating.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarRating, [{
    type: Component,
    args: [{ selector: "Kova-star-rating", imports: [MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span class="stars" [attr.aria-label]="value() + ' out of 5'">
      @for (star of [1,2,3,4,5]; track star) {
        <mat-icon fontSet="material-symbols-outlined"
                  [class.filled]="star <= Math.round(value())">star</mat-icon>
      }
      @if (count() !== null) { <small class="numeric muted">({{ count() }})</small> }
    </span>
  `, styles: ['/* angular:styles/component:css;13916356be837c883e1fec5b783ceff3221375a476f71338936faf72d94e1af0;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/star-rating.ts */\n.stars {\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n}\nmat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n  color: var(--mat-sys-outline);\n}\nmat-icon.filled {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\nsmall {\n  margin-left: 6px;\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=star-rating.css.map */\n'] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], count: [{ type: Input, args: [{ isSignal: true, alias: "count", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarRating, { className: "StarRating", filePath: "src/app/shared/components/star-rating.ts", lineNumber: 30 });
})();

// src/app/shared/components/product-card.ts
var _c02 = (a0) => ["/product", a0];
function ProductCard_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 3);
    \u0275\u0275text(1, "Sold out");
    \u0275\u0275elementEnd();
  }
}
function ProductCard_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u2212", ctx_r0.product().discountPercent, "%");
  }
}
function ProductCard_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "s", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "KovaPrice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, ctx));
  }
}
var ProductCard = class _ProductCard {
  product = input.required(...ngDevMode ? [{ debugName: "product" }] : []);
  cart = inject(Cart);
  wishlist = inject(Wishlist);
  auth = inject(Auth);
  router = inject(Router);
  placeholder = FALLBACK_SHOT;
  saved = computed(() => this.wishlist.ids().has(this.product().id), ...ngDevMode ? [{ debugName: "saved" }] : []);
  add() {
    if (!this.requireAccount())
      return;
    this.cart.add(this.product().id, 1);
  }
  /** Straight to checkout — the item is added first so the order is complete. */
  orderNow() {
    if (!this.requireAccount())
      return;
    this.cart.addItem(this.product().id, 1).subscribe({
      next: () => void this.router.navigate(["/checkout"]),
      error: () => void 0
      // the error interceptor already surfaced the reason
    });
  }
  toggleSaved() {
    if (!this.requireAccount())
      return;
    this.wishlist.toggle(this.product().id);
  }
  requireAccount() {
    if (this.auth.isSignedIn())
      return true;
    this.router.navigate(["/sign-in"], { queryParams: { next: this.router.url } });
    return false;
  }
  static \u0275fac = function ProductCard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductCard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductCard, selectors: [["Kova-product-card"]], inputs: { product: [1, "product"] }, decls: 26, vars: 24, consts: [[1, "card"], [1, "frame", 3, "routerLink"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "tag-out", "mark"], [1, "tag-sale", "mark"], ["mat-icon-button", "", 1, "save", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "body"], [1, "eyebrow"], [1, "name", 3, "routerLink"], [3, "value", "count"], [1, "foot"], [1, "prices"], [1, "price"], [1, "price", "muted"], ["mat-flat-button", "", 1, "add", 3, "click", "disabled"], ["mat-flat-button", "", 1, "order", "card-order", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined", "iconPositionEnd", ""]], template: function ProductCard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0)(1, "a", 1);
      \u0275\u0275element(2, "img", 2);
      \u0275\u0275conditionalCreate(3, ProductCard_Conditional_3_Template, 2, 0, "span", 3)(4, ProductCard_Conditional_4_Template, 2, 1, "span", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 5);
      \u0275\u0275listener("click", function ProductCard_Template_button_click_5_listener() {
        return ctx.toggleSaved();
      });
      \u0275\u0275elementStart(6, "mat-icon", 6);
      \u0275\u0275text(7, "favorite");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 7)(9, "small", 8);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "a", 9);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "Kova-star-rating", 10);
      \u0275\u0275elementStart(14, "div", 11)(15, "span", 12)(16, "strong", 13);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "KovaPrice");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(19, ProductCard_Conditional_19_Template, 3, 3, "s", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 15);
      \u0275\u0275listener("click", function ProductCard_Template_button_click_20_listener() {
        return ctx.add();
      });
      \u0275\u0275text(21);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "button", 16);
      \u0275\u0275listener("click", function ProductCard_Template_button_click_22_listener() {
        return ctx.orderNow();
      });
      \u0275\u0275text(23, " Order Now ");
      \u0275\u0275elementStart(24, "mat-icon", 17);
      \u0275\u0275text(25, "arrow_forward");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      let tmp_13_0;
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(20, _c02, ctx.product().slug));
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.product().imageUrl ?? ctx.placeholder, \u0275\u0275sanitizeUrl)("alt", ctx.product().name);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.product().stock === 0 ? 3 : ctx.product().discountPercent > 0 ? 4 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("aria-label", ctx.saved() ? "Remove from wishlist" : "Save to wishlist")("aria-pressed", ctx.saved());
      \u0275\u0275advance();
      \u0275\u0275classProp("on", ctx.saved());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.product().brand);
      \u0275\u0275advance();
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(22, _c02, ctx.product().slug));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.product().name);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.product().ratingAverage)("count", ctx.product().ratingCount);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, ctx.product().price));
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_13_0 = ctx.product().compareAtPrice) ? 19 : -1, tmp_13_0);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.product().stock === 0);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.product().stock === 0 ? "Sold out" : "Add", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.product().stock === 0);
    }
  }, dependencies: [RouterLink, MatIconModule, MatIcon, MatButtonModule, MatButton, MatIconButton, StarRating, PricePipe], styles: ['\n\n.card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.frame[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  aspect-ratio: 1;\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--mat-sys-surface-container-high);\n  border: 1px solid var(--Kova-rule);\n}\n.frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.card[_ngcontent-%COMP%]:hover   .frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.mark[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.save[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: color-mix(in srgb, var(--mat-sys-surface) 78%, transparent);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.save[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.save[_ngcontent-%COMP%]   mat-icon.on[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.35;\n}\n.name[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 4px;\n}\n.prices[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.prices[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.prices[_ngcontent-%COMP%]   s[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.add[_ngcontent-%COMP%] {\n  --mat-filled-button-container-height: 34px;\n  font-size: 0.8125rem;\n}\n.card-order.mat-mdc-button-base[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 38px;\n  margin-top: 8px;\n  font-size: 0.8125rem;\n  --mat-button-filled-horizontal-padding: 18px;\n  box-shadow: 0 6px 18px rgba(217, 181, 81, 0.18);\n}\n.card-order.mat-mdc-button-base[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 22px rgba(217, 181, 81, 0.28);\n}\n.card-order[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.card-order[disabled][_ngcontent-%COMP%] {\n  box-shadow: none;\n}\n/*# sourceMappingURL=product-card.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductCard, [{
    type: Component,
    args: [{ selector: "Kova-product-card", imports: [RouterLink, MatIconModule, MatButtonModule, PricePipe, StarRating], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <article class="card">
      <a class="frame" [routerLink]="['/product', product().slug]">
        <img [src]="product().imageUrl ?? placeholder" [alt]="product().name" loading="lazy" decoding="async" />
        @if (product().stock === 0) {
          <span class="tag-out mark">Sold out</span>
        } @else if (product().discountPercent > 0) {
          <span class="tag-sale mark">\u2212{{ product().discountPercent }}%</span>
        }
      </a>

      <button mat-icon-button class="save" (click)="toggleSaved()"
              [attr.aria-label]="saved() ? 'Remove from wishlist' : 'Save to wishlist'"
              [attr.aria-pressed]="saved()">
        <mat-icon fontSet="material-symbols-outlined" [class.on]="saved()">favorite</mat-icon>
      </button>

      <div class="body">
        <small class="eyebrow">{{ product().brand }}</small>
        <a class="name" [routerLink]="['/product', product().slug]">{{ product().name }}</a>
        <Kova-star-rating [value]="product().ratingAverage" [count]="product().ratingCount" />

        <div class="foot">
          <span class="prices">
            <strong class="price">{{ product().price |KovaPrice }}</strong>
            @if (product().compareAtPrice; as was) {
              <s class="price muted">{{ was |KovaPrice }}</s>
            }
          </span>

          <button mat-flat-button class="add" [disabled]="product().stock === 0" (click)="add()">
            {{ product().stock === 0 ? 'Sold out' : 'Add' }}
          </button>
        </div>

        <button mat-flat-button class="order card-order" [disabled]="product().stock === 0" (click)="orderNow()">
          Order Now
          <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
        </button>
      </div>
    </article>
  `, styles: ['/* angular:styles/component:css;64fc918d3190cdf5d1379caafdcb369c8d99aebc48193c4dc1ef5a45dfe38731;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/product-card.ts */\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.frame {\n  position: relative;\n  display: block;\n  aspect-ratio: 1;\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--mat-sys-surface-container-high);\n  border: 1px solid var(--Kova-rule);\n}\n.frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 400ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.card:hover .frame img {\n  transform: scale(1.04);\n}\n.mark {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n}\n.save {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  background: color-mix(in srgb, var(--mat-sys-surface) 78%, transparent);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.save mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.save mat-icon.on {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.body {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.name {\n  font-weight: 500;\n  line-height: 1.35;\n}\n.name:hover {\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.foot {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-top: 4px;\n}\n.prices {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.prices strong {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.prices s {\n  font-size: 0.8125rem;\n}\n.add {\n  --mat-filled-button-container-height: 34px;\n  font-size: 0.8125rem;\n}\n.card-order.mat-mdc-button-base {\n  width: 100%;\n  height: 38px;\n  margin-top: 8px;\n  font-size: 0.8125rem;\n  --mat-button-filled-horizontal-padding: 18px;\n  box-shadow: 0 6px 18px rgba(217, 181, 81, 0.18);\n}\n.card-order.mat-mdc-button-base:hover {\n  box-shadow: 0 8px 22px rgba(217, 181, 81, 0.28);\n}\n.card-order mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.card-order[disabled] {\n  box-shadow: none;\n}\n/*# sourceMappingURL=product-card.css.map */\n'] }]
  }], null, { product: [{ type: Input, args: [{ isSignal: true, alias: "product", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductCard, { className: "ProductCard", filePath: "src/app/shared/components/product-card.ts", lineNumber: 112 });
})();

export {
  StarRating,
  ProductCard
};
//# sourceMappingURL=chunk-ME7HFTVM.js.map
