import {
  TrackingReceipt
} from "./chunk-B6XCSL4T.js";
import "./chunk-NEQP5CTB.js";
import {
  Orders
} from "./chunk-G56TKCYN.js";
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
import "./chunk-U7M6I7OV.js";
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
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H2OO3OVH.js";

// src/app/features/orders/track-order.ts
function TrackOrder_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No order matches that number. Check for a typo, or sign in to see all your orders.");
    \u0275\u0275elementEnd();
  }
}
function TrackOrder_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-tracking-receipt", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("order", ctx);
  }
}
var TrackOrder = class _TrackOrder {
  orders = inject(Orders);
  orderNumber = "";
  order = signal(null, ...ngDevMode ? [{ debugName: "order" }] : []);
  searching = signal(false, ...ngDevMode ? [{ debugName: "searching" }] : []);
  notFound = signal(false, ...ngDevMode ? [{ debugName: "notFound" }] : []);
  lookup(event) {
    event.preventDefault();
    if (!this.orderNumber.trim())
      return;
    this.searching.set(true);
    this.notFound.set(false);
    this.order.set(null);
    this.orders.track(this.orderNumber).subscribe({
      next: (order) => {
        this.order.set(order);
        this.searching.set(false);
      },
      error: () => {
        this.notFound.set(true);
        this.searching.set(false);
      }
    });
  }
  static \u0275fac = function TrackOrder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackOrder)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackOrder, selectors: [["Kova-track-order"]], decls: 16, vars: 5, consts: [[1, "page", "narrow"], [1, "eyebrow"], [1, "muted"], [1, "lookup", 3, "submit"], ["matInput", "", "name", "orderNumber", "autocomplete", "off", "placeholder", "KOV-8F2A41", 1, "numeric", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [1, "miss"], [3, "order"]], template: function TrackOrder_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "span", 1);
      \u0275\u0275text(2, "Tracking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h1");
      \u0275\u0275text(4, "Where is my order?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6, "Enter the order number from your confirmation email. It looks like KOV-8F2A41.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 3);
      \u0275\u0275listener("submit", function TrackOrder_Template_form_submit_7_listener($event) {
        return ctx.lookup($event);
      });
      \u0275\u0275elementStart(8, "mat-form-field")(9, "mat-label");
      \u0275\u0275text(10, "Order number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 4);
      \u0275\u0275twoWayListener("ngModelChange", function TrackOrder_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.orderNumber, $event) || (ctx.orderNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "button", 5);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(14, TrackOrder_Conditional_14_Template, 2, 0, "p", 6);
      \u0275\u0275conditionalCreate(15, TrackOrder_Conditional_15_Template, 1, 1, "Kova-tracking-receipt", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      let tmp_4_0;
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.orderNumber);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.searching());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.searching() ? "Looking\u2026" : "Track", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.notFound() ? 14 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_4_0 = ctx.order()) ? 15 : -1, tmp_4_0);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatButtonModule, MatButton, TrackingReceipt], styles: ["\n\n.narrow[_ngcontent-%COMP%] {\n  max-width: 640px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 6px 0 8px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n}\n.lookup[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: start;\n  margin-bottom: 28px;\n}\n.lookup[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.lookup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  --mat-filled-button-container-height: 52px;\n}\n.miss[_ngcontent-%COMP%] {\n  color: var(--mat-sys-error);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=track-order.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackOrder, [{
    type: Component,
    args: [{ selector: "Kova-track-order", imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, TrackingReceipt], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page narrow">
      <span class="eyebrow">Tracking</span>
      <h1>Where is my order?</h1>
      <p class="muted">Enter the order number from your confirmation email. It looks like KOV-8F2A41.</p>

      <form class="lookup" (submit)="lookup($event)">
        <mat-form-field>
          <mat-label>Order number</mat-label>
          <input matInput [(ngModel)]="orderNumber" name="orderNumber" autocomplete="off"
                 placeholder="KOV-8F2A41" class="numeric" />
        </mat-form-field>
        <button mat-flat-button type="submit" [disabled]="searching()">
          {{ searching() ? 'Looking\u2026' : 'Track' }}
        </button>
      </form>

      @if (notFound()) {
        <p class="miss">No order matches that number. Check for a typo, or sign in to see all your orders.</p>
      }

      @if (order(); as o) { <Kova-tracking-receipt [order]="o" /> }
    </div>
  `, styles: ["/* angular:styles/component:css;1aae75ac8b9e397eadd33d4c35502fb6239c57b6908ae94a2d35d98c233341bc;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/orders/track-order.ts */\n.narrow {\n  max-width: 640px;\n}\nh1 {\n  margin: 6px 0 8px;\n}\np {\n  margin: 0 0 24px;\n}\n.lookup {\n  display: flex;\n  gap: 12px;\n  align-items: start;\n  margin-bottom: 28px;\n}\n.lookup mat-form-field {\n  flex: 1;\n}\n.lookup button {\n  --mat-filled-button-container-height: 52px;\n}\n.miss {\n  color: var(--mat-sys-error);\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=track-order.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackOrder, { className: "TrackOrder", filePath: "src/app/features/orders/track-order.ts", lineNumber: 48 });
})();
export {
  TrackOrder
};
//# sourceMappingURL=chunk-BBUOIW5M.js.map
