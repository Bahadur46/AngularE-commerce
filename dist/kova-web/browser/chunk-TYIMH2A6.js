import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
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
import {
  DatePipe
} from "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  __spreadProps,
  __spreadValues,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-coupons.ts
var _forTrack0 = ($index, $item) => $item.code;
function AdminCoupons_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 9);
    \u0275\u0275listener("submit", function AdminCoupons_Conditional_12_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create($event));
    });
    \u0275\u0275elementStart(1, "label")(2, "span", 1);
    \u0275\u0275text(3, "Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 10);
    \u0275\u0275listener("input", function AdminCoupons_Conditional_12_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.code.set(ctx_r1.up($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label")(6, "span", 1);
    \u0275\u0275text(7, "Kind");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "select", 11);
    \u0275\u0275listener("change", function AdminCoupons_Conditional_12_Template_select_change_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.kind.set($event.target.value));
    });
    \u0275\u0275elementStart(9, "option", 12);
    \u0275\u0275text(10, "Percent off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "option", 13);
    \u0275\u0275text(12, "Amount off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "option", 14);
    \u0275\u0275text(14, "Free shipping");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "label")(16, "span", 1);
    \u0275\u0275text(17, "Value");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 15);
    \u0275\u0275listener("input", function AdminCoupons_Conditional_12_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.value.set(ctx_r1.num($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label")(20, "span", 1);
    \u0275\u0275text(21, "Minimum spend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 16);
    \u0275\u0275listener("input", function AdminCoupons_Conditional_12_Template_input_input_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.minSpend.set(ctx_r1.num($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "label")(24, "span", 1);
    \u0275\u0275text(25, "Redemption cap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 17);
    \u0275\u0275listener("input", function AdminCoupons_Conditional_12_Template_input_input_26_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.limit.set(ctx_r1.num($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "label")(28, "span", 1);
    \u0275\u0275text(29, "Expires");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "input", 18);
    \u0275\u0275listener("input", function AdminCoupons_Conditional_12_Template_input_input_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.expiresAt.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 19);
    \u0275\u0275text(32, "Create coupon");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.code());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.kind());
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r1.draft.value())("disabled", ctx_r1.draft.kind() === "shipping");
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.minSpend());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.limit());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.expiresAt());
  }
}
function AdminCoupons_For_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "div", 22)(10, "span", 21);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 23);
    \u0275\u0275element(13, "span", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "td", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td")(18, "span", 26);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "td", 7)(21, "button", 27);
    \u0275\u0275listener("click", function AdminCoupons_For_33_Template_button_click_21_listener() {
      const coupon_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggle(coupon_r4));
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 28);
    \u0275\u0275listener("click", function AdminCoupons_For_33_Template_button_click_23_listener() {
      const coupon_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copy(coupon_r4.code));
    });
    \u0275\u0275elementStart(24, "mat-icon", 4);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const coupon_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("spent", coupon_r4.used >= coupon_r4.limit);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(coupon_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.describe(coupon_r4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 16, coupon_r4.minSpend));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", coupon_r4.used, " / ", coupon_r4.limit);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r1.pct(coupon_r4), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 18, coupon_r4.expiresAt, "d MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.state(coupon_r4));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(coupon_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(coupon_r4.active ? "Pause" : "Resume");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Copy " + coupon_r4.code);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.copied() === coupon_r4.code ? "check" : "content_copy");
  }
}
var SEED = [
  { code: "ANUVESH10", kind: "percent", value: 10, minSpend: 999, used: 184, limit: 500, expiresAt: "2026-12-31", active: true },
  { code: "SAWAN25", kind: "percent", value: 25, minSpend: 1499, used: 92, limit: 150, expiresAt: "2026-08-31", active: true },
  { code: "FREESHIP", kind: "shipping", value: 0, minSpend: 599, used: 421, limit: 1e3, expiresAt: "2026-10-31", active: true },
  { code: "RAKHI200", kind: "amount", value: 200, minSpend: 1299, used: 150, limit: 150, expiresAt: "2026-08-19", active: false },
  { code: "BULK20", kind: "percent", value: 20, minSpend: 19999, used: 11, limit: 50, expiresAt: "2027-03-31", active: true },
  { code: "WELCOME100", kind: "amount", value: 100, minSpend: 499, used: 613, limit: 2e3, expiresAt: "2026-12-31", active: true }
];
var AdminCoupons = class _AdminCoupons {
  notify = inject(Notify);
  price = new PricePipe();
  coupons = signal(SEED, ...ngDevMode ? [{ debugName: "coupons" }] : []);
  composing = signal(false, ...ngDevMode ? [{ debugName: "composing" }] : []);
  copied = signal("", ...ngDevMode ? [{ debugName: "copied" }] : []);
  draft = {
    code: signal(""),
    kind: signal("percent"),
    value: signal(10),
    minSpend: signal(999),
    limit: signal(200),
    expiresAt: signal("2026-12-31")
  };
  live = computed(() => this.coupons().filter((coupon) => this.state(coupon) === "live"), ...ngDevMode ? [{ debugName: "live" }] : []);
  redeemed = computed(() => this.coupons().reduce((total, coupon) => total + coupon.used, 0), ...ngDevMode ? [{ debugName: "redeemed" }] : []);
  describe(coupon) {
    if (coupon.kind === "shipping")
      return "Free delivery";
    if (coupon.kind === "percent")
      return `${coupon.value}% off`;
    return `${this.price.transform(coupon.value)} off`;
  }
  pct(coupon) {
    return Math.min(100, coupon.used / Math.max(1, coupon.limit) * 100);
  }
  state(coupon) {
    if (!coupon.active)
      return "";
    if (coupon.used >= coupon.limit)
      return "gone";
    return new Date(coupon.expiresAt).getTime() < Date.now() ? "gone" : "live";
  }
  stateLabel(coupon) {
    const state = this.state(coupon);
    if (state === "live")
      return "Live";
    if (state === "")
      return "Paused";
    return coupon.used >= coupon.limit ? "Used up" : "Expired";
  }
  toggle(coupon) {
    this.coupons.update((rows) => rows.map((row) => row.code === coupon.code ? __spreadProps(__spreadValues({}, row), { active: !row.active }) : row));
    this.notify.done(`${coupon.code} ${coupon.active ? "paused" : "resumed"}`);
  }
  copy(code) {
    navigator.clipboard?.writeText(code).then(() => {
      this.copied.set(code);
      setTimeout(() => this.copied.set(""), 2e3);
    }, () => void 0);
  }
  create(event) {
    event.preventDefault();
    const code = this.draft.code().trim().toUpperCase();
    if (!code) {
      this.notify.problem("A coupon needs a code.");
      return;
    }
    if (this.coupons().some((row) => row.code === code)) {
      this.notify.problem(`${code} already exists.`);
      return;
    }
    this.coupons.update((rows) => [{
      code,
      kind: this.draft.kind(),
      value: this.draft.kind() === "shipping" ? 0 : this.draft.value(),
      minSpend: this.draft.minSpend(),
      used: 0,
      limit: Math.max(1, this.draft.limit()),
      expiresAt: this.draft.expiresAt(),
      active: true
    }, ...rows]);
    this.draft.code.set("");
    this.composing.set(false);
    this.notify.done(`${code} created for this session`);
  }
  up(event) {
    return event.target.value.toUpperCase();
  }
  num(event) {
    return Number(event.target.value) || 0;
  }
  static \u0275fac = function AdminCoupons_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCoupons)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCoupons, selectors: [["Kova-admin-coupons"]], decls: 34, vars: 5, consts: [[1, "head"], [1, "eyebrow"], [1, "muted", "numeric"], ["mat-flat-button", "", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "compose"], [1, "scroll"], [1, "right"], [3, "spent"], [1, "compose", 3, "submit"], ["placeholder", "DIWALI15", "required", "", 3, "input", "value"], [3, "change", "value"], ["value", "percent"], ["value", "amount"], ["value", "shipping"], ["type", "number", "min", "0", 3, "input", "value", "disabled"], ["type", "number", "min", "0", 3, "input", "value"], ["type", "number", "min", "1", 3, "input", "value"], ["type", "date", 3, "input", "value"], ["mat-flat-button", "", "type", "submit"], [1, "code"], [1, "numeric"], [1, "use"], [1, "meter"], [1, "fill"], [1, "numeric", "muted"], [1, "pill"], ["mat-button", "", 3, "click"], ["mat-icon-button", "", 3, "click"]], template: function AdminCoupons_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Selling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Coupons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function AdminCoupons_Template_button_click_8_listener() {
        return ctx.composing.set(!ctx.composing());
      });
      \u0275\u0275elementStart(9, "mat-icon", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, AdminCoupons_Conditional_12_Template, 33, 7, "form", 5);
      \u0275\u0275elementStart(13, "div", 6)(14, "table")(15, "thead")(16, "tr")(17, "th");
      \u0275\u0275text(18, "Code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "th");
      \u0275\u0275text(20, "Discount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "th");
      \u0275\u0275text(22, "Minimum");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "th");
      \u0275\u0275text(24, "Redeemed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "th");
      \u0275\u0275text(26, "Expires");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "th");
      \u0275\u0275text(28, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "th", 7);
      \u0275\u0275text(30, "Actions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "tbody");
      \u0275\u0275repeaterCreate(32, AdminCoupons_For_33_Template, 26, 21, "tr", 8, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.live().length, " live \xB7 ", ctx.redeemed(), " redemptions all time");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.composing() ? "close" : "add");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.composing() ? "Cancel" : "New coupon", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.composing() ? 12 : -1);
      \u0275\u0275advance(20);
      \u0275\u0275repeater(ctx.coupons());
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, DatePipe, PricePipe], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.compose[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  padding: 22px;\n  margin-bottom: 26px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.compose[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.compose[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.compose[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n}\n.compose[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 42px;\n}\n.scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n  background: var(--mat-sys-surface-container-low);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container);\n}\ntr.spent[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  opacity: 0.6;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.code[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  letter-spacing: 0.06em;\n}\n.use[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 118px;\n}\n.use[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  font-size: 0.75rem;\n}\n.meter[_ngcontent-%COMP%] {\n  height: 5px;\n  border-radius: 3px;\n  background: var(--mat-sys-surface-container-highest);\n  overflow: hidden;\n}\n.fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  border-radius: 3px;\n  background: var(--mat-sys-primary);\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.live[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.gone[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n@media (max-width: 899px) {\n  .compose[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 599px) {\n  .compose[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-coupons.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCoupons, [{
    type: Component,
    args: [{ selector: "Kova-admin-coupons", imports: [DatePipe, MatButtonModule, MatIconModule, PricePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Selling</span>
        <h1>Coupons</h1>
        <small class="muted numeric">{{ live().length }} live \xB7 {{ redeemed() }} redemptions all time</small>
      </div>
      <button mat-flat-button (click)="composing.set(!composing())">
        <mat-icon fontSet="material-symbols-outlined">{{ composing() ? 'close' : 'add' }}</mat-icon>
        {{ composing() ? 'Cancel' : 'New coupon' }}
      </button>
    </header>

    @if (composing()) {
      <form class="compose" (submit)="create($event)">
        <label>
          <span class="eyebrow">Code</span>
          <input [value]="draft.code()" (input)="draft.code.set(up($event))" placeholder="DIWALI15" required />
        </label>
        <label>
          <span class="eyebrow">Kind</span>
          <select [value]="draft.kind()" (change)="draft.kind.set($any($event.target).value)">
            <option value="percent">Percent off</option>
            <option value="amount">Amount off</option>
            <option value="shipping">Free shipping</option>
          </select>
        </label>
        <label>
          <span class="eyebrow">Value</span>
          <input type="number" min="0" [value]="draft.value()" (input)="draft.value.set(num($event))"
                 [disabled]="draft.kind() === 'shipping'" />
        </label>
        <label>
          <span class="eyebrow">Minimum spend</span>
          <input type="number" min="0" [value]="draft.minSpend()" (input)="draft.minSpend.set(num($event))" />
        </label>
        <label>
          <span class="eyebrow">Redemption cap</span>
          <input type="number" min="1" [value]="draft.limit()" (input)="draft.limit.set(num($event))" />
        </label>
        <label>
          <span class="eyebrow">Expires</span>
          <input type="date" [value]="draft.expiresAt()" (input)="draft.expiresAt.set($any($event.target).value)" />
        </label>
        <button mat-flat-button type="submit">Create coupon</button>
      </form>
    }

    <div class="scroll">
      <table>
        <thead>
          <tr>
            <th>Code</th><th>Discount</th><th>Minimum</th>
            <th>Redeemed</th><th>Expires</th><th>State</th><th class="right">Actions</th>
          </tr>
        </thead>
        <tbody>
          @for (coupon of coupons(); track coupon.code) {
            <tr [class.spent]="coupon.used >= coupon.limit">
              <td class="code">{{ coupon.code }}</td>
              <td>{{ describe(coupon) }}</td>
              <td class="numeric">{{ coupon.minSpend |KovaPrice }}</td>
              <td>
                <div class="use">
                  <span class="numeric">{{ coupon.used }} / {{ coupon.limit }}</span>
                  <span class="meter"><span class="fill" [style.width.%]="pct(coupon)"></span></span>
                </div>
              </td>
              <td class="numeric muted">{{ coupon.expiresAt | date:'d MMM yyyy' }}</td>
              <td>
                <span class="pill" [class]="state(coupon)">{{ stateLabel(coupon) }}</span>
              </td>
              <td class="right">
                <button mat-button (click)="toggle(coupon)">{{ coupon.active ? 'Pause' : 'Resume' }}</button>
                <button mat-icon-button (click)="copy(coupon.code)" [attr.aria-label]="'Copy ' + coupon.code">
                  <mat-icon fontSet="material-symbols-outlined">{{ copied() === coupon.code ? 'check' : 'content_copy' }}</mat-icon>
                </button>
              </td>
            </tr>
          }
        </tbody>
      </table>
    </div>
  `, styles: ["/* angular:styles/component:css;96baef2b7315977c23a2548a7d2bbd6660634fd6cd778c52047e49bc698055e5;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-coupons.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.compose {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  padding: 22px;\n  margin-bottom: 26px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.compose label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.compose input,\n.compose select {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.compose input:focus,\n.compose select:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.compose input:disabled {\n  opacity: 0.5;\n}\n.compose button {\n  height: 42px;\n}\n.scroll {\n  overflow-x: auto;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth,\ntd {\n  text-align: left;\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n  background: var(--mat-sys-surface-container-low);\n}\ntbody tr:last-child td {\n  border-bottom: 0;\n}\ntbody tr:hover {\n  background: var(--mat-sys-surface-container);\n}\ntr.spent .code {\n  text-decoration: line-through;\n  opacity: 0.6;\n}\n.right {\n  text-align: right;\n}\n.code {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  letter-spacing: 0.06em;\n}\n.use {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 118px;\n}\n.use span:first-child {\n  font-size: 0.75rem;\n}\n.meter {\n  height: 5px;\n  border-radius: 3px;\n  background: var(--mat-sys-surface-container-highest);\n  overflow: hidden;\n}\n.fill {\n  display: block;\n  height: 100%;\n  border-radius: 3px;\n  background: var(--mat-sys-primary);\n}\n.pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.live {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.gone {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n@media (max-width: 899px) {\n  .compose {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 599px) {\n  .compose {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-coupons.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCoupons, { className: "AdminCoupons", filePath: "src/app/features/admin/admin-coupons.ts", lineNumber: 168 });
})();
export {
  AdminCoupons
};
//# sourceMappingURL=chunk-TYIMH2A6.js.map
