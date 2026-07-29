import {
  STATUS_LABEL,
  TRACKING_STEPS
} from "./chunk-NEQP5CTB.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
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
  Input,
  computed,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/orders/tracking-receipt.ts
var _forTrack0 = ($index, $item) => $item.productId;
var _forTrack1 = ($index, $item) => $item.status;
function TrackingReceipt_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Expected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 6);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, ctx_r0.order().estimatedDelivery, "EEE d MMM"));
  }
}
function TrackingReceipt_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.order().carrier ?? "Carrier");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.order().trackingNumber);
  }
}
function TrackingReceipt_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7)(1, "mat-icon", 14);
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This order was cancelled. Any payment is refunded to the original method within five working days. ");
    \u0275\u0275elementEnd();
  }
}
function TrackingReceipt_Conditional_26_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, step_r2.at, "d MMM, HH:mm"), " ");
  }
}
function TrackingReceipt_Conditional_26_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u2014 ");
  }
}
function TrackingReceipt_Conditional_26_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r2.location);
  }
}
function TrackingReceipt_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "span", 16);
    \u0275\u0275elementStart(2, "span", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 18);
    \u0275\u0275conditionalCreate(5, TrackingReceipt_Conditional_26_For_2_Conditional_5_Template, 2, 4)(6, TrackingReceipt_Conditional_26_For_2_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TrackingReceipt_Conditional_26_For_2_Conditional_7_Template, 2, 1, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("done", step_r2.done)("current", step_r2.current);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.label(step_r2.status));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r2.at ? 5 : 6);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r2.location ? 7 : -1);
  }
}
function TrackingReceipt_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 8);
    \u0275\u0275repeaterCreate(1, TrackingReceipt_Conditional_26_For_2_Template, 8, 7, "li", 15, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.steps());
  }
}
function TrackingReceipt_For_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r3.quantity, "\xD7");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, item_r3.lineTotal));
  }
}
var TrackingReceipt = class _TrackingReceipt {
  order = input.required(...ngDevMode ? [{ debugName: "order" }] : []);
  isCancelled = computed(() => this.order().status === "Cancelled", ...ngDevMode ? [{ debugName: "isCancelled" }] : []);
  isClosed = computed(() => this.isCancelled() || this.order().status === "Delivered", ...ngDevMode ? [{ debugName: "isClosed" }] : []);
  /** Merges the fixed fulfilment sequence with whatever events actually happened. */
  steps = computed(() => {
    const order = this.order();
    const reached = new Map(order.timeline.map((event) => [event.status, event]));
    const lastIndex = Math.max(...order.timeline.map((event) => TRACKING_STEPS.indexOf(event.status)).filter((i) => i >= 0), 0);
    return TRACKING_STEPS.map((status, index) => {
      const event = reached.get(status);
      return {
        status,
        at: event?.at ?? null,
        location: event?.location ?? null,
        done: index < lastIndex,
        current: index === lastIndex
      };
    });
  }, ...ngDevMode ? [{ debugName: "steps" }] : []);
  label(status) {
    return STATUS_LABEL[status];
  }
  static \u0275fac = function TrackingReceipt_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrackingReceipt)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrackingReceipt, selectors: [["Kova-tracking-receipt"]], inputs: { order: [1, "order"] }, decls: 38, vars: 18, consts: [[1, "receipt"], ["aria-hidden", "true", 1, "perforation"], [1, "eyebrow"], [1, "order-no"], [1, "badge"], [1, "meta"], [1, "numeric"], [1, "cancelled"], [1, "track"], ["aria-hidden", "true", 1, "tear"], [1, "items"], [1, "sum"], [1, "name"], [1, "numeric", "amount"], ["fontSet", "material-symbols-outlined"], [3, "done", "current"], ["aria-hidden", "true", 1, "dot"], [1, "what"], [1, "when", "numeric"], [1, "where", "numeric"], [1, "numeric", "qty"]], template: function TrackingReceipt_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "article", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "header")(3, "div")(4, "span", 2);
      \u0275\u0275text(5, "Order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h2", 3);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "dl", 5)(11, "div")(12, "dt");
      \u0275\u0275text(13, "Placed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "dd", 6);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(17, TrackingReceipt_Conditional_17_Template, 6, 4, "div");
      \u0275\u0275conditionalCreate(18, TrackingReceipt_Conditional_18_Template, 5, 2, "div");
      \u0275\u0275elementStart(19, "div")(20, "dt");
      \u0275\u0275text(21, "Paid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "dd", 6);
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "KovaPrice");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(25, TrackingReceipt_Conditional_25_Template, 4, 0, "p", 7)(26, TrackingReceipt_Conditional_26_Template, 3, 0, "ol", 8);
      \u0275\u0275element(27, "div", 9);
      \u0275\u0275elementStart(28, "ul", 10);
      \u0275\u0275repeaterCreate(29, TrackingReceipt_For_30_Template, 8, 5, "li", null, _forTrack0);
      \u0275\u0275elementStart(31, "li", 11);
      \u0275\u0275element(32, "span");
      \u0275\u0275elementStart(33, "span", 12);
      \u0275\u0275text(34, "Total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 13);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "KovaPrice");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.order().orderNumber);
      \u0275\u0275advance();
      \u0275\u0275classMap("s-" + ctx.order().status.toLowerCase());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.label(ctx.order().status), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 11, ctx.order().createdAt, "d MMM yyyy, HH:mm"));
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.order().estimatedDelivery && !ctx.isClosed() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.order().trackingNumber ? 18 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(24, 14, ctx.order().total), " \xB7 ", ctx.order().paymentStatus);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.isCancelled() ? 25 : 26);
      \u0275\u0275advance(4);
      \u0275\u0275repeater(ctx.order().items);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 16, ctx.order().total));
    }
  }, dependencies: [MatIconModule, MatIcon, DatePipe, PricePipe], styles: ['\n\n.receipt[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 560px;\n  padding: 32px 28px 28px;\n  border-radius: 4px;\n  background: var(--mat-sys-surface-container-lowest);\n  border: 1px solid var(--Kova-rule);\n  font-family: var(--Kova-mono);\n  font-size: 0.8125rem;\n}\n.perforation[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 8px;\n  background:\n    radial-gradient(\n      circle at 6px 0,\n      transparent 5px,\n      var(--mat-sys-surface-container-lowest) 5.5px) 0 0 / 12px 8px repeat-x;\n  border-bottom: none;\n}\nheader[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 16px;\n  margin-bottom: 20px;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  margin: 4px 0 0;\n}\n.badge[_ngcontent-%COMP%] {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.badge.s-delivered[_ngcontent-%COMP%] {\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.badge.s-shipped[_ngcontent-%COMP%], \n.badge.s-outfordelivery[_ngcontent-%COMP%] {\n  background: var(--mat-sys-tertiary-container);\n  color: var(--mat-sys-on-tertiary-container);\n}\n.badge.s-cancelled[_ngcontent-%COMP%], \n.badge.s-returned[_ngcontent-%COMP%] {\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  display: grid;\n  gap: 6px;\n}\n.meta[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\ndt[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.track[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 4px 4px;\n}\n.track[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 22px 1fr auto;\n  gap: 4px 10px;\n  padding: 0 0 20px 0;\n  align-items: start;\n  color: var(--mat-sys-on-surface-variant);\n}\n.track[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 14px;\n  bottom: -2px;\n  width: 1px;\n  background: var(--mat-sys-outline-variant);\n}\n.track[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child::before {\n  display: none;\n}\n.track[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%], \n.track[_ngcontent-%COMP%]   li.current[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface);\n}\n.track[_ngcontent-%COMP%]   li.done[_ngcontent-%COMP%]::before {\n  background: var(--mat-sys-primary);\n}\n.dot[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n  margin-top: 3px;\n  border-radius: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container-lowest);\n}\n.done[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n}\n.current[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  background: var(--mat-sys-tertiary);\n  border-color: var(--mat-sys-tertiary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-tertiary) 22%, transparent);\n}\n.what[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.when[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.75rem;\n}\n.where[_ngcontent-%COMP%] {\n  grid-column: 2 / -1;\n  font-size: 0.6875rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.cancelled[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  align-items: start;\n  line-height: 1.5;\n  color: var(--mat-sys-error);\n}\n.cancelled[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tear[_ngcontent-%COMP%] {\n  height: 1px;\n  margin: 8px 0 16px;\n  border-top: 1px dashed var(--mat-sys-outline-variant);\n}\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 34px 1fr auto;\n  gap: 10px;\n}\n.qty[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n}\n.name[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sum[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  border-top: 1px solid var(--Kova-rule);\n  font-weight: 600;\n}\n/*# sourceMappingURL=tracking-receipt.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrackingReceipt, [{
    type: Component,
    args: [{ selector: "Kova-tracking-receipt", imports: [DatePipe, MatIconModule, PricePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <article class="receipt">
      <div class="perforation" aria-hidden="true"></div>

      <header>
        <div>
          <span class="eyebrow">Order</span>
          <h2 class="order-no">{{ order().orderNumber }}</h2>
        </div>
        <span class="badge" [class]="'s-' + order().status.toLowerCase()">
          {{ label(order().status) }}
        </span>
      </header>

      <dl class="meta">
        <div><dt>Placed</dt><dd class="numeric">{{ order().createdAt | date:'d MMM yyyy, HH:mm' }}</dd></div>
        @if (order().estimatedDelivery && !isClosed()) {
          <div><dt>Expected</dt><dd class="numeric">{{ order().estimatedDelivery | date:'EEE d MMM' }}</dd></div>
        }
        @if (order().trackingNumber) {
          <div><dt>{{ order().carrier ?? 'Carrier' }}</dt><dd class="numeric">{{ order().trackingNumber }}</dd></div>
        }
        <div><dt>Paid</dt><dd class="numeric">{{ order().total |KovaPrice }} \xB7 {{ order().paymentStatus }}</dd></div>
      </dl>

      @if (isCancelled()) {
        <p class="cancelled">
          <mat-icon fontSet="material-symbols-outlined">cancel</mat-icon>
          This order was cancelled. Any payment is refunded to the original method within five working days.
        </p>
      } @else {
        <ol class="track">
          @for (step of steps(); track step.status) {
            <li [class.done]="step.done" [class.current]="step.current">
              <span class="dot" aria-hidden="true"></span>
              <span class="what">{{ label(step.status) }}</span>
              <span class="when numeric">
                @if (step.at) { {{ step.at | date:'d MMM, HH:mm' }} }
                @else { \u2014 }
              </span>
              @if (step.location) { <span class="where numeric">{{ step.location }}</span> }
            </li>
          }
        </ol>
      }

      <div class="tear" aria-hidden="true"></div>

      <ul class="items">
        @for (item of order().items; track item.productId) {
          <li>
            <span class="numeric qty">{{ item.quantity }}\xD7</span>
            <span class="name">{{ item.name }}</span>
            <span class="numeric amount">{{ item.lineTotal |KovaPrice }}</span>
          </li>
        }
        <li class="sum"><span></span><span class="name">Total</span>
          <span class="numeric amount">{{ order().total |KovaPrice }}</span></li>
      </ul>
    </article>
  `, styles: ['/* angular:styles/component:css;3b340957b5f8ed24b8d999c262ffadee3829514e1a06c035827d641e2aedab24;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/orders/tracking-receipt.ts */\n.receipt {\n  position: relative;\n  max-width: 560px;\n  padding: 32px 28px 28px;\n  border-radius: 4px;\n  background: var(--mat-sys-surface-container-lowest);\n  border: 1px solid var(--Kova-rule);\n  font-family: var(--Kova-mono);\n  font-size: 0.8125rem;\n}\n.perforation {\n  position: absolute;\n  inset: 0 0 auto 0;\n  height: 8px;\n  background:\n    radial-gradient(\n      circle at 6px 0,\n      transparent 5px,\n      var(--mat-sys-surface-container-lowest) 5.5px) 0 0 / 12px 8px repeat-x;\n  border-bottom: none;\n}\nheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: start;\n  gap: 16px;\n  margin-bottom: 20px;\n}\nh2 {\n  font-family: var(--Kova-mono);\n  font-size: 1.25rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  margin: 4px 0 0;\n}\n.badge {\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.badge.s-delivered {\n  background: var(--mat-sys-primary-container);\n  color: var(--mat-sys-on-primary-container);\n}\n.badge.s-shipped,\n.badge.s-outfordelivery {\n  background: var(--mat-sys-tertiary-container);\n  color: var(--mat-sys-on-tertiary-container);\n}\n.badge.s-cancelled,\n.badge.s-returned {\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.meta {\n  margin: 0 0 22px;\n  display: grid;\n  gap: 6px;\n}\n.meta div {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n}\ndt {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n}\n.track {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 4px 4px;\n}\n.track li {\n  position: relative;\n  display: grid;\n  grid-template-columns: 22px 1fr auto;\n  gap: 4px 10px;\n  padding: 0 0 20px 0;\n  align-items: start;\n  color: var(--mat-sys-on-surface-variant);\n}\n.track li::before {\n  content: "";\n  position: absolute;\n  left: 6px;\n  top: 14px;\n  bottom: -2px;\n  width: 1px;\n  background: var(--mat-sys-outline-variant);\n}\n.track li:last-child::before {\n  display: none;\n}\n.track li.done,\n.track li.current {\n  color: var(--mat-sys-on-surface);\n}\n.track li.done::before {\n  background: var(--mat-sys-primary);\n}\n.dot {\n  width: 11px;\n  height: 11px;\n  margin-top: 3px;\n  border-radius: 50%;\n  border: 1px solid var(--mat-sys-outline);\n  background: var(--mat-sys-surface-container-lowest);\n}\n.done .dot {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n}\n.current .dot {\n  background: var(--mat-sys-tertiary);\n  border-color: var(--mat-sys-tertiary);\n  box-shadow: 0 0 0 4px color-mix(in srgb, var(--mat-sys-tertiary) 22%, transparent);\n}\n.what {\n  font-weight: 500;\n}\n.when {\n  text-align: right;\n  font-size: 0.75rem;\n}\n.where {\n  grid-column: 2 / -1;\n  font-size: 0.6875rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.cancelled {\n  display: flex;\n  gap: 8px;\n  align-items: start;\n  line-height: 1.5;\n  color: var(--mat-sys-error);\n}\n.cancelled mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.tear {\n  height: 1px;\n  margin: 8px 0 16px;\n  border-top: 1px dashed var(--mat-sys-outline-variant);\n}\n.items {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.items li {\n  display: grid;\n  grid-template-columns: 34px 1fr auto;\n  gap: 10px;\n}\n.qty {\n  color: var(--mat-sys-on-surface-variant);\n}\n.name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sum {\n  padding-top: 10px;\n  border-top: 1px solid var(--Kova-rule);\n  font-weight: 600;\n}\n/*# sourceMappingURL=tracking-receipt.css.map */\n'] }]
  }], null, { order: [{ type: Input, args: [{ isSignal: true, alias: "order", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrackingReceipt, { className: "TrackingReceipt", filePath: "src/app/features/orders/tracking-receipt.ts", lineNumber: 155 });
})();

export {
  TrackingReceipt
};
//# sourceMappingURL=chunk-B6XCSL4T.js.map
