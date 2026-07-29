import {
  STATUS_LABEL
} from "./chunk-NEQP5CTB.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ZGPGDACX.js";
import {
  EmptyState
} from "./chunk-JV4ICS3X.js";
import {
  Orders
} from "./chunk-G56TKCYN.js";
import "./chunk-VZ7N6S6Z.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
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
import {
  DatePipe
} from "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/orders/order-list.ts
var _c0 = () => [10, 25];
var _c1 = (a0) => ["/orders", a0];
var _forTrack0 = ($index, $item) => $item.id;
function OrderList_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-empty-state", 4);
  }
}
function OrderList_Conditional_9_Conditional_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 7)(2, "div", 8)(3, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 10);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 12);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong", 13);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-icon", 14);
    \u0275\u0275text(16, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const order_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(14, _c1, order_r2.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r2.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 9, order_r2.createdAt, "d MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("s-" + order_r2.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.statusLabel(order_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r2.itemCount, " ", order_r2.itemCount === 1 ? "item" : "items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, order_r2.total));
  }
}
function OrderList_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ul", 5);
    \u0275\u0275repeaterCreate(1, OrderList_Conditional_9_Conditional_1_For_2_Template, 17, 16, "li", null, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-paginator", 6);
    \u0275\u0275listener("page", function OrderList_Conditional_9_Conditional_1_Template_mat_paginator_page_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(page_r4.items);
    \u0275\u0275advance(2);
    \u0275\u0275property("length", page_r4.total)("pageSize", page_r4.pageSize)("pageIndex", page_r4.page - 1)("pageSizeOptions", \u0275\u0275pureFunction0(4, _c0));
  }
}
function OrderList_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, OrderList_Conditional_9_Conditional_0_Template, 1, 0, "Kova-empty-state", 4)(1, OrderList_Conditional_9_Conditional_1_Template, 4, 5);
  }
  if (rf & 2) {
    \u0275\u0275conditional(!ctx.items.length ? 0 : 1);
  }
}
var OrderList = class _OrderList {
  orders = inject(Orders);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  constructor() {
    this.load(1, 10);
  }
  onPage(event) {
    this.load(event.pageIndex + 1, event.pageSize);
  }
  statusLabel(order) {
    return STATUS_LABEL[order.status];
  }
  load(page, pageSize) {
    this.orders.mine(page, pageSize).subscribe((result) => this.result.set(result));
  }
  static \u0275fac = function OrderList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OrderList, selectors: [["Kova-order-list"]], decls: 10, vars: 1, consts: [[1, "page"], [1, "section-head"], [1, "eyebrow"], ["mat-stroked-button", "", "routerLink", "/track"], ["icon", "receipt_long", "heading", "No orders yet", "body", "Once you place an order it appears here with live tracking.", "actionLabel", "Browse the catalogue", "actionLink", "/shop"], [1, "orders"], ["aria-label", "Order pages", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], [1, "card", 3, "routerLink"], [1, "ref"], [1, "order-no"], [1, "muted", "numeric"], [1, "status"], [1, "numeric", "muted", "count"], [1, "price"], ["fontSet", "material-symbols-outlined"]], template: function OrderList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Your orders");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "a", 3);
      \u0275\u0275text(8, "Track by order number");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, OrderList_Conditional_9_Template, 2, 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(9);
      \u0275\u0275conditional((tmp_0_0 = ctx.result()) ? 9 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon, MatPaginatorModule, MatPaginator, EmptyState, DatePipe, PricePipe], styles: ["\n\n.orders[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.card[_ngcontent-%COMP%] {\n  display: grid;\n  align-items: center;\n  gap: 16px;\n  grid-template-columns: 1fr auto auto auto 24px;\n  padding: 18px 4px;\n  border-bottom: 1px solid var(--Kova-rule);\n  transition: background 140ms ease;\n}\n.card[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container-low);\n}\n.ref[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.order-no[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9375rem;\n}\n.ref[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.status.s-delivered[_ngcontent-%COMP%] {\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.status.s-shipped[_ngcontent-%COMP%], \n.status.s-outfordelivery[_ngcontent-%COMP%] {\n  background: var(--mat-sys-tertiary-container);\n  color: var(--mat-sys-on-tertiary-container);\n}\n.status.s-cancelled[_ngcontent-%COMP%], \n.status.s-returned[_ngcontent-%COMP%] {\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n  margin-top: 24px;\n}\n@media (max-width: 699px) {\n  .card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n    row-gap: 8px;\n  }\n  .count[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=order-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderList, [{
    type: Component,
    args: [{ selector: "Kova-order-list", imports: [DatePipe, RouterLink, MatButtonModule, MatIconModule, MatPaginatorModule, PricePipe, EmptyState], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Account</span>
          <h1>Your orders</h1>
        </div>
        <a mat-stroked-button routerLink="/track">Track by order number</a>
      </div>

      @if (result(); as page) {
        @if (!page.items.length) {
          <Kova-empty-state
            icon="receipt_long"
            heading="No orders yet"
            body="Once you place an order it appears here with live tracking."
            actionLabel="Browse the catalogue"
            actionLink="/shop" />
        } @else {
          <ul class="orders">
            @for (order of page.items; track order.id) {
              <li>
                <a [routerLink]="['/orders', order.id]" class="card">
                  <div class="ref">
                    <span class="order-no">{{ order.orderNumber }}</span>
                    <small class="muted numeric">{{ order.createdAt | date:'d MMM yyyy' }}</small>
                  </div>

                  <span class="status" [class]="'s-' + order.status.toLowerCase()">{{ statusLabel(order) }}</span>

                  <span class="numeric muted count">{{ order.itemCount }} {{ order.itemCount === 1 ? 'item' : 'items' }}</span>
                  <strong class="price">{{ order.total |KovaPrice }}</strong>

                  <mat-icon fontSet="material-symbols-outlined">chevron_right</mat-icon>
                </a>
              </li>
            }
          </ul>

          <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                         [pageSizeOptions]="[10, 25]" (page)="onPage($event)" aria-label="Order pages" />
        }
      }
    </div>
  `, styles: ["/* angular:styles/component:css;ff0c9d89344a74d63ac46689ddb4c8953ecef5545600b39f09c210e2eb646a98;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/orders/order-list.ts */\n.orders {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.card {\n  display: grid;\n  align-items: center;\n  gap: 16px;\n  grid-template-columns: 1fr auto auto auto 24px;\n  padding: 18px 4px;\n  border-bottom: 1px solid var(--Kova-rule);\n  transition: background 140ms ease;\n}\n.card:hover {\n  background: var(--mat-sys-surface-container-low);\n}\n.ref {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.order-no {\n  font-weight: 600;\n  font-size: 0.9375rem;\n}\n.ref small {\n  font-size: 0.75rem;\n}\n.status {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.status.s-delivered {\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.status.s-shipped,\n.status.s-outfordelivery {\n  background: var(--mat-sys-tertiary-container);\n  color: var(--mat-sys-on-tertiary-container);\n}\n.status.s-cancelled,\n.status.s-returned {\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.count {\n  font-size: 0.8125rem;\n}\nmat-paginator {\n  background: transparent;\n  margin-top: 24px;\n}\n@media (max-width: 699px) {\n  .card {\n    grid-template-columns: 1fr auto;\n    row-gap: 8px;\n  }\n  .count {\n    display: none;\n  }\n  .card mat-icon {\n    display: none;\n  }\n}\n/*# sourceMappingURL=order-list.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OrderList, { className: "OrderList", filePath: "src/app/features/orders/order-list.ts", lineNumber: 91 });
})();
export {
  OrderList
};
//# sourceMappingURL=chunk-GZLRTMSN.js.map
