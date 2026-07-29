import {
  EmptyState
} from "./chunk-JV4ICS3X.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UKQWQSP6.js";
import "./chunk-346ISJSG.js";
import "./chunk-QSPIOWQC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  ɵNgNoValidate
} from "./chunk-VZ7N6S6Z.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
import {
  Cart
} from "./chunk-ZFMJUGTV.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
import "./chunk-DYU4NP57.js";
import {
  RouterLink
} from "./chunk-N55HBYBE.js";
import "./chunk-E3BMGIF5.js";
import "./chunk-ACQY33BG.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JAMDIHHE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YKSZHAQM.js";
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H2OO3OVH.js";

// src/app/features/cart/cart-page.ts
var _c0 = (a0) => ["/product", a0];
var _forTrack0 = ($index, $item) => $item.productId + ($item.variantValue ?? "");
function CartPage_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function CartPage_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cart.clear());
    });
    \u0275\u0275text(1, "Empty the cart");
    \u0275\u0275elementEnd();
  }
}
function CartPage_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-empty-state", 4);
  }
}
function CartPage_Conditional_9_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.variantValue);
  }
}
function CartPage_Conditional_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "a", 19);
    \u0275\u0275element(2, "img", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 21)(4, "a", 22);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, CartPage_Conditional_9_For_3_Conditional_6_Template, 2, 1, "small", 23);
    \u0275\u0275elementStart(7, "span", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 25)(11, "button", 26);
    \u0275\u0275listener("click", function CartPage_Conditional_9_For_3_Template_button_click_11_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.setQuantity(item_r5.productId, item_r5.quantity - 1, item_r5.variantValue));
    });
    \u0275\u0275elementStart(12, "mat-icon", 27);
    \u0275\u0275text(13, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "span", 9);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 28);
    \u0275\u0275listener("click", function CartPage_Conditional_9_For_3_Template_button_click_16_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.setQuantity(item_r5.productId, item_r5.quantity + 1, item_r5.variantValue));
    });
    \u0275\u0275elementStart(17, "mat-icon", 27);
    \u0275\u0275text(18, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "strong", 29);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 30);
    \u0275\u0275listener("click", function CartPage_Conditional_9_For_3_Template_button_click_22_listener() {
      const item_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cart.remove(item_r5.productId));
    });
    \u0275\u0275elementStart(23, "mat-icon", 27);
    \u0275\u0275text(24, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(15, _c0, item_r5.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r5.imageUrl, \u0275\u0275sanitizeUrl)("alt", item_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c0, item_r5.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r5.variantValue ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 11, item_r5.unitPrice), " each");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(item_r5.quantity);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", item_r5.quantity >= item_r5.stockAtAdd);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 13, item_r5.lineTotal));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", "Remove " + item_r5.name);
  }
}
function CartPage_Conditional_9_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "dt");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind1(5, 1, ctx_r1.cart.state().discount));
  }
}
function CartPage_Conditional_9_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.cart.state().couponCode, " applied");
  }
}
function CartPage_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "ul", 7);
    \u0275\u0275repeaterCreate(2, CartPage_Conditional_9_For_3_Template, 25, 19, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "aside", 8)(5, "h3");
    \u0275\u0275text(6, "Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "dl")(8, "div")(9, "dt");
    \u0275\u0275text(10, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd", 9);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, CartPage_Conditional_9_Conditional_14_Template, 6, 3, "div", 10);
    \u0275\u0275elementStart(15, "div")(16, "dt");
    \u0275\u0275text(17, "Shipping");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dd", 9);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "dt");
    \u0275\u0275text(23, "Tax (18%)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "KovaPrice");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 11)(28, "span");
    \u0275\u0275text(29, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong", 12);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "form", 13);
    \u0275\u0275listener("submit", function CartPage_Conditional_9_Template_form_submit_33_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyCoupon($event));
    });
    \u0275\u0275elementStart(34, "mat-form-field")(35, "mat-label");
    \u0275\u0275text(36, "Discount code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function CartPage_Conditional_9_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.code, $event) || (ctx_r1.code = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 15);
    \u0275\u0275text(39, "Apply");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, CartPage_Conditional_9_Conditional_40_Template, 2, 1, "p", 16);
    \u0275\u0275elementStart(41, "a", 17);
    \u0275\u0275text(42, "Checkout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 18);
    \u0275\u0275text(44, "Keep shopping");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.cart.state().items);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 7, ctx_r1.cart.state().subtotal));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.cart.state().discount > 0 ? 14 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.cart.state().shipping === 0 ? "Free" : \u0275\u0275pipeBind1(20, 9, ctx_r1.cart.state().shipping));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 11, ctx_r1.cart.state().tax));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 13, ctx_r1.cart.state().total));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.code);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.cart.state().couponCode ? 40 : -1);
  }
}
var CartPage = class _CartPage {
  cart = inject(Cart);
  notify = inject(Notify);
  code = "";
  constructor() {
    this.cart.load();
  }
  applyCoupon(event) {
    event.preventDefault();
    if (!this.code.trim())
      return;
    this.cart.applyCoupon(this.code.trim()).subscribe({
      next: () => this.notify.done("Discount applied"),
      error: () => void 0
    });
  }
  static \u0275fac = function CartPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CartPage, selectors: [["Kova-cart-page"]], decls: 10, vars: 2, consts: [[1, "page"], [1, "section-head"], [1, "eyebrow"], ["mat-button", ""], ["icon", "shopping_bag", "heading", "Your cart is empty", "body", "Add something from the catalogue and it will wait here across your devices.", "actionLabel", "Browse the catalogue", "actionLink", "/shop"], [1, "layout"], ["mat-button", "", 3, "click"], [1, "lines"], [1, "summary", "surface-card"], [1, "numeric"], [1, "saved"], [1, "total"], [1, "price"], [1, "coupon", 3, "submit"], ["matInput", "", "name", "code", "placeholder", "WELCOME10", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", "type", "submit"], [1, "applied", "numeric"], ["mat-flat-button", "", "routerLink", "/checkout", 1, "checkout"], ["routerLink", "/shop", 1, "keep", "muted"], [1, "thumb", 3, "routerLink"], ["loading", "lazy", 3, "src", "alt"], [1, "info"], [1, "name", 3, "routerLink"], [1, "muted"], [1, "price", "muted"], [1, "qty"], ["mat-icon-button", "", "aria-label", "Decrease quantity", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", "aria-label", "Increase quantity", 3, "click", "disabled"], [1, "price", "line-total"], ["mat-icon-button", "", 1, "remove", 3, "click"]], template: function CartPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Cart");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Your cart");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, CartPage_Conditional_7_Template, 2, 0, "button", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, CartPage_Conditional_8_Template, 1, 0, "Kova-empty-state", 4)(9, CartPage_Conditional_9_Template, 45, 15, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(!ctx.cart.isEmpty() ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.cart.isEmpty() ? 8 : 9);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, EmptyState, PricePipe], styles: ['\n\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 40px;\n  align-items: start;\n}\n.lines[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.lines[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  gap: 16px;\n  grid-template-columns: 84px 1fr auto auto 40px;\n  padding: 18px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-rule);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--mat-sys-outline-variant);\n  border-radius: 999px;\n}\n.qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 26px;\n  text-align: center;\n  font-size: 0.875rem;\n}\n.line-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  min-width: 90px;\n  text-align: right;\n}\n.summary[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 92px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\ndl[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 0.875rem;\n}\ndt[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.saved[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n}\n.total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-top: 14px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.coupon[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: start;\n}\n.coupon[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.applied[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--mat-sys-tertiary);\n}\n.checkout[_ngcontent-%COMP%] {\n  --mat-filled-button-container-height: 48px;\n}\n.keep[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.8125rem;\n}\n@media (max-width: 899px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .summary[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .lines[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 64px 1fr 40px;\n    grid-template-areas: "thumb info remove" "qty qty total";\n  }\n  .thumb[_ngcontent-%COMP%] {\n    grid-area: thumb;\n    width: 64px;\n    height: 64px;\n  }\n  .info[_ngcontent-%COMP%] {\n    grid-area: info;\n  }\n  .remove[_ngcontent-%COMP%] {\n    grid-area: remove;\n  }\n  .qty[_ngcontent-%COMP%] {\n    grid-area: qty;\n    justify-self: start;\n  }\n  .line-total[_ngcontent-%COMP%] {\n    grid-area: total;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=cart-page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartPage, [{
    type: Component,
    args: [{ selector: "Kova-cart-page", imports: [
      RouterLink,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      PricePipe,
      EmptyState
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Cart</span>
          <h1>Your cart</h1>
        </div>
        @if (!cart.isEmpty()) {
          <button mat-button (click)="cart.clear()">Empty the cart</button>
        }
      </div>

      @if (cart.isEmpty()) {
        <Kova-empty-state
          icon="shopping_bag"
          heading="Your cart is empty"
          body="Add something from the catalogue and it will wait here across your devices."
          actionLabel="Browse the catalogue"
          actionLink="/shop" />
      } @else {
        <div class="layout">
          <ul class="lines">
            @for (item of cart.state().items; track item.productId + (item.variantValue ?? '')) {
              <li>
                <a class="thumb" [routerLink]="['/product', item.slug]">
                  <img [src]="item.imageUrl" [alt]="item.name" loading="lazy" />
                </a>

                <div class="info">
                  <a class="name" [routerLink]="['/product', item.slug]">{{ item.name }}</a>
                  @if (item.variantValue) { <small class="muted">{{ item.variantValue }}</small> }
                  <span class="price muted">{{ item.unitPrice |KovaPrice }} each</span>
                </div>

                <div class="qty">
                  <button mat-icon-button (click)="cart.setQuantity(item.productId, item.quantity - 1, item.variantValue)"
                          aria-label="Decrease quantity">
                    <mat-icon fontSet="material-symbols-outlined">remove</mat-icon>
                  </button>
                  <span class="numeric">{{ item.quantity }}</span>
                  <button mat-icon-button [disabled]="item.quantity >= item.stockAtAdd"
                          (click)="cart.setQuantity(item.productId, item.quantity + 1, item.variantValue)"
                          aria-label="Increase quantity">
                    <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
                  </button>
                </div>

                <strong class="price line-total">{{ item.lineTotal |KovaPrice }}</strong>

                <button mat-icon-button class="remove" (click)="cart.remove(item.productId)"
                        [attr.aria-label]="'Remove ' + item.name">
                  <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
                </button>
              </li>
            }
          </ul>

          <aside class="summary surface-card">
            <h3>Summary</h3>

            <dl>
              <div><dt>Subtotal</dt><dd class="numeric">{{ cart.state().subtotal |KovaPrice }}</dd></div>
              @if (cart.state().discount > 0) {
                <div class="saved"><dt>Discount</dt><dd class="numeric">\u2212{{ cart.state().discount |KovaPrice }}</dd></div>
              }
              <div>
                <dt>Shipping</dt>
                <dd class="numeric">{{ cart.state().shipping === 0 ? 'Free' : (cart.state().shipping |KovaPrice) }}</dd>
              </div>
              <div><dt>Tax (18%)</dt><dd class="numeric">{{ cart.state().tax |KovaPrice }}</dd></div>
            </dl>

            <div class="total">
              <span>Total</span>
              <strong class="price">{{ cart.state().total |KovaPrice }}</strong>
            </div>

            <form class="coupon" (submit)="applyCoupon($event)">
              <mat-form-field>
                <mat-label>Discount code</mat-label>
                <input matInput [(ngModel)]="code" name="code" placeholder="WELCOME10" />
              </mat-form-field>
              <button mat-stroked-button type="submit">Apply</button>
            </form>

            @if (cart.state().couponCode) {
              <p class="applied numeric">{{ cart.state().couponCode }} applied</p>
            }

            <a mat-flat-button class="checkout" routerLink="/checkout">Checkout</a>
            <a class="keep muted" routerLink="/shop">Keep shopping</a>
          </aside>
        </div>
      }
    </div>
  `, styles: ['/* angular:styles/component:css;2d46524ffab9c858d8869b94ce641bf07e519f625741da9bae93ca6722174740;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/cart/cart-page.ts */\n.layout {\n  display: grid;\n  grid-template-columns: 1fr 340px;\n  gap: 40px;\n  align-items: start;\n}\n.lines {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.lines li {\n  display: grid;\n  align-items: center;\n  gap: 16px;\n  grid-template-columns: 84px 1fr auto auto 40px;\n  padding: 18px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.thumb {\n  width: 84px;\n  height: 84px;\n  border-radius: 10px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-rule);\n}\n.thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n}\n.name {\n  font-weight: 500;\n}\n.info span {\n  font-size: 0.8125rem;\n}\n.qty {\n  display: flex;\n  align-items: center;\n  border: 1px solid var(--mat-sys-outline-variant);\n  border-radius: 999px;\n}\n.qty span {\n  min-width: 26px;\n  text-align: center;\n  font-size: 0.875rem;\n}\n.line-total {\n  font-size: 1rem;\n  min-width: 90px;\n  text-align: right;\n}\n.summary {\n  position: sticky;\n  top: 92px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.summary h3 {\n  margin: 0;\n}\ndl {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\ndl div {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  font-size: 0.875rem;\n}\ndt {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n}\n.saved dd {\n  color: var(--mat-sys-tertiary);\n}\n.total {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  padding-top: 14px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.total strong {\n  font-size: 1.375rem;\n  font-weight: 600;\n}\n.coupon {\n  display: flex;\n  gap: 8px;\n  align-items: start;\n}\n.coupon mat-form-field {\n  flex: 1;\n}\n.applied {\n  margin: 0;\n  font-size: 0.75rem;\n  color: var(--mat-sys-tertiary);\n}\n.checkout {\n  --mat-filled-button-container-height: 48px;\n}\n.keep {\n  text-align: center;\n  font-size: 0.8125rem;\n}\n@media (max-width: 899px) {\n  .layout {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .summary {\n    position: static;\n  }\n  .lines li {\n    grid-template-columns: 64px 1fr 40px;\n    grid-template-areas: "thumb info remove" "qty qty total";\n  }\n  .thumb {\n    grid-area: thumb;\n    width: 64px;\n    height: 64px;\n  }\n  .info {\n    grid-area: info;\n  }\n  .remove {\n    grid-area: remove;\n  }\n  .qty {\n    grid-area: qty;\n    justify-self: start;\n  }\n  .line-total {\n    grid-area: total;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=cart-page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CartPage, { className: "CartPage", filePath: "src/app/features/cart/cart-page.ts", lineNumber: 164 });
})();
export {
  CartPage
};
//# sourceMappingURL=chunk-PIVATEQN.js.map
