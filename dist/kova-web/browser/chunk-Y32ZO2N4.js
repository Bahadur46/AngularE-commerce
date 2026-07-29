import {
  TrackingReceipt
} from "./chunk-B6XCSL4T.js";
import "./chunk-NEQP5CTB.js";
import {
  Orders
} from "./chunk-G56TKCYN.js";
import "./chunk-U7M6I7OV.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
import {
  RouterLink
} from "./chunk-N55HBYBE.js";
import "./chunk-E3BMGIF5.js";
import "./chunk-ACQY33BG.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JAMDIHHE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YKSZHAQM.js";
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/orders/order-detail.ts
function OrderDetail_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "mat-icon", 12);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "strong");
    \u0275\u0275text(5, "Order placed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("A confirmation is on its way to ", o_r1.customerEmail, ".");
  }
}
function OrderDetail_Conditional_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const o_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" , ", o_r1.shippingAddress.line2, " ");
  }
}
function OrderDetail_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function OrderDetail_Conditional_1_Conditional_27_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const o_r1 = \u0275\u0275nextContext();
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancel(o_r1));
    });
    \u0275\u0275text(1, "Cancel this order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3, "You can cancel any time before it ships.");
    \u0275\u0275elementEnd();
  }
}
function OrderDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OrderDetail_Conditional_1_Conditional_0_Template, 8, 1, "div", 1);
    \u0275\u0275elementStart(1, "div", 2)(2, "div")(3, "span", 3);
    \u0275\u0275text(4, "Order detail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "Tracking");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, "All orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275element(10, "Kova-tracking-receipt", 6);
    \u0275\u0275elementStart(11, "aside", 7)(12, "section", 8)(13, "h3");
    \u0275\u0275text(14, "Delivering to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 9);
    \u0275\u0275text(16);
    \u0275\u0275element(17, "br");
    \u0275\u0275text(18);
    \u0275\u0275conditionalCreate(19, OrderDetail_Conditional_1_Conditional_19_Template, 1, 1);
    \u0275\u0275element(20, "br");
    \u0275\u0275text(21);
    \u0275\u0275elementStart(22, "span", 10);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "br");
    \u0275\u0275elementStart(25, "span", 10);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, OrderDetail_Conditional_1_Conditional_27_Template, 4, 0);
    \u0275\u0275elementStart(28, "a", 11);
    \u0275\u0275text(29, "Buy it again");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const o_r1 = ctx;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.justPlaced() ? 0 : -1);
    \u0275\u0275advance(10);
    \u0275\u0275property("order", o_r1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", o_r1.shippingAddress.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r1.shippingAddress.line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r1.shippingAddress.line2 ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", o_r1.shippingAddress.city, ", ", o_r1.shippingAddress.state, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r1.shippingAddress.postalCode);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(o_r1.shippingAddress.phone);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.canCancel(o_r1) ? 27 : -1);
  }
}
var OrderDetail = class _OrderDetail {
  id = input.required(...ngDevMode ? [{ debugName: "id" }] : []);
  placed = input(...ngDevMode ? [void 0, { debugName: "placed" }] : []);
  orders = inject(Orders);
  notify = inject(Notify);
  order = signal(null, ...ngDevMode ? [{ debugName: "order" }] : []);
  justPlaced = signal(false, ...ngDevMode ? [{ debugName: "justPlaced" }] : []);
  constructor() {
    effect(() => {
      this.justPlaced.set(this.placed() === "true");
      this.orders.byId(this.id()).subscribe((order) => this.order.set(order));
    });
  }
  canCancel(order) {
    return ["Pending", "Processing"].includes(order.status);
  }
  cancel(order) {
    this.orders.cancel(order.id).subscribe({
      next: (updated) => {
        this.order.set(updated);
        this.notify.done("Order cancelled");
      }
    });
  }
  static \u0275fac = function OrderDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderDetail, selectors: [["Kova-order-detail"]], inputs: { id: [1, "id"], placed: [1, "placed"] }, decls: 2, vars: 1, consts: [[1, "page"], [1, "confirm"], [1, "section-head"], [1, "eyebrow"], ["routerLink", "/orders", 1, "muted"], [1, "layout"], [3, "order"], [1, "side"], [1, "surface-card"], [1, "muted"], [1, "numeric"], ["mat-button", "", "routerLink", "/shop"], ["fontSet", "material-symbols-outlined"], ["mat-stroked-button", "", 1, "cancel", 3, "click"], [1, "note", "muted"]], template: function OrderDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, OrderDetail_Conditional_1_Template, 30, 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_0_0 = ctx.order()) ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon, TrackingReceipt], styles: ["\n\n.confirm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 28px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.confirm[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.confirm[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: inherit;\n  opacity: 0.8;\n  font-size: 0.875rem;\n}\n.layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 560px) 280px;\n  gap: 40px;\n  align-items: start;\n}\n.side[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: stretch;\n}\n.side[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.9375rem;\n}\n.side[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.cancel[_ngcontent-%COMP%] {\n  color: var(--mat-sys-error);\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin: 0;\n  text-align: center;\n}\n@media (max-width: 899px) {\n  .layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n/*# sourceMappingURL=order-detail.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetail, [{
    type: Component,
    args: [{ selector: "Kova-order-detail", imports: [RouterLink, MatButtonModule, MatIconModule, TrackingReceipt], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page">
      @if (order(); as o) {
        @if (justPlaced()) {
          <div class="confirm">
            <mat-icon fontSet="material-symbols-outlined">check_circle</mat-icon>
            <div>
              <strong>Order placed.</strong>
              <span class="muted">A confirmation is on its way to {{ o.customerEmail }}.</span>
            </div>
          </div>
        }

        <div class="section-head">
          <div>
            <span class="eyebrow">Order detail</span>
            <h1>Tracking</h1>
          </div>
          <a routerLink="/orders" class="muted">All orders</a>
        </div>

        <div class="layout">
          <Kova-tracking-receipt [order]="o" />

          <aside class="side">
            <section class="surface-card">
              <h3>Delivering to</h3>
              <p class="muted">
                {{ o.shippingAddress.fullName }}<br />
                {{ o.shippingAddress.line1 }}@if (o.shippingAddress.line2) { , {{ o.shippingAddress.line2 }} }<br />
                {{ o.shippingAddress.city }}, {{ o.shippingAddress.state }}
                <span class="numeric">{{ o.shippingAddress.postalCode }}</span><br />
                <span class="numeric">{{ o.shippingAddress.phone }}</span>
              </p>
            </section>

            @if (canCancel(o)) {
              <button mat-stroked-button class="cancel" (click)="cancel(o)">Cancel this order</button>
              <p class="note muted">You can cancel any time before it ships.</p>
            }

            <a mat-button routerLink="/shop">Buy it again</a>
          </aside>
        </div>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;c3a995a5aa803c4da6a861aeaa33f214aa8e722f5444efd86f3261d107f470c0;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/orders/order-detail.ts */\n.confirm {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 28px;\n  padding: 16px 20px;\n  border-radius: 12px;\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.confirm div {\n  display: flex;\n  flex-direction: column;\n}\n.confirm .muted {\n  color: inherit;\n  opacity: 0.8;\n  font-size: 0.875rem;\n}\n.layout {\n  display: grid;\n  grid-template-columns: minmax(0, 560px) 280px;\n  gap: 40px;\n  align-items: start;\n}\n.side {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: stretch;\n}\n.side h3 {\n  margin: 0 0 8px;\n  font-size: 0.9375rem;\n}\n.side p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.cancel {\n  color: var(--mat-sys-error);\n}\n.note {\n  font-size: 0.75rem;\n  margin: 0;\n  text-align: center;\n}\n@media (max-width: 899px) {\n  .layout {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n}\n/*# sourceMappingURL=order-detail.css.map */\n"] }]
  }], () => [], { id: [{ type: Input, args: [{ isSignal: true, alias: "id", required: true }] }], placed: [{ type: Input, args: [{ isSignal: true, alias: "placed", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderDetail, { className: "OrderDetail", filePath: "src/app/features/orders/order-detail.ts", lineNumber: 80 });
})();
export {
  OrderDetail
};
//# sourceMappingURL=chunk-Y32ZO2N4.js.map
