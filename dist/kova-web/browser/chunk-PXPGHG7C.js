import {
  Notify
} from "./chunk-TRCVJC4T.js";
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
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-settings.ts
var _forTrack0 = ($index, $item) => $item.key;
function AdminSettings_For_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li")(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function AdminSettings_For_77_Template_button_click_6_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(row_r2.key));
    });
    \u0275\u0275element(7, "span", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.detail);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r2.flag(row_r2.key));
    \u0275\u0275attribute("aria-checked", ctx_r2.flag(row_r2.key))("aria-label", row_r2.label);
  }
}
var KEY = "Kova.shop-settings";
var DEFAULTS = {
  shopName: "Anuvesha & Co.",
  supportEmail: "hello@anuveshandco.shop",
  supportPhone: "+91 90000 00000",
  instagram: "@anuveshandco",
  freeShippingOver: 999,
  flatShipping: 59,
  taxPercent: 18,
  lowStockAt: 12,
  dispatchHours: 24,
  acceptingOrders: true,
  bulkEnquiries: true,
  notifyNewOrder: true,
  notifyLowStock: true,
  notifyDailyDigest: false
};
var AdminSettings = class _AdminSettings {
  notify = inject(Notify);
  form = signal(read(), ...ngDevMode ? [{ debugName: "form" }] : []);
  dirty = signal(false, ...ngDevMode ? [{ debugName: "dirty" }] : []);
  switches = [
    { key: "acceptingOrders", label: "Accepting orders", detail: "Turn off to close the shop without unpublishing it." },
    { key: "bulkEnquiries", label: "Bulk enquiries", detail: "Show the corporate form on the shelf page." },
    { key: "notifyNewOrder", label: "Email me on every order", detail: "One email per order, as it is placed." },
    { key: "notifyLowStock", label: "Email me on low stock", detail: "When a curation crosses the threshold above." },
    { key: "notifyDailyDigest", label: "Daily digest", detail: "One summary at 9pm instead of live alerts." }
  ];
  set(key, value) {
    this.form.update((current) => __spreadProps(__spreadValues({}, current), { [key]: value }));
    this.dirty.set(true);
  }
  flag(key) {
    return this.form()[key] === true;
  }
  toggle(key) {
    this.set(key, !this.flag(key));
  }
  save() {
    localStorage.setItem(KEY, JSON.stringify(this.form()));
    this.dirty.set(false);
    this.notify.done("Settings saved to this browser");
  }
  reset() {
    this.form.set(__spreadValues({}, DEFAULTS));
    localStorage.removeItem(KEY);
    this.dirty.set(false);
    this.notify.done("Settings reset");
  }
  text(event) {
    return event.target.value;
  }
  num(event) {
    return Number(event.target.value) || 0;
  }
  static \u0275fac = function AdminSettings_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSettings)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSettings, selectors: [["Kova-admin-settings"]], decls: 78, vars: 11, consts: [[1, "head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined"], [1, "panels"], [1, "panel"], [1, "fields"], [3, "input", "value"], ["type", "email", 3, "input", "value"], ["type", "number", "min", "0", 3, "input", "value"], ["type", "number", "min", "0", "max", "40", 3, "input", "value"], ["type", "number", "min", "1", 3, "input", "value"], [1, "toggles"], ["role", "switch", 1, "switch", 3, "click"], [1, "knob"]], template: function AdminSettings_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7, "Saved to this browser until the settings API lands.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "button", 4);
      \u0275\u0275listener("click", function AdminSettings_Template_button_click_9_listener() {
        return ctx.reset();
      });
      \u0275\u0275text(10, "Reset to defaults");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "button", 5);
      \u0275\u0275listener("click", function AdminSettings_Template_button_click_11_listener() {
        return ctx.save();
      });
      \u0275\u0275elementStart(12, "mat-icon", 6);
      \u0275\u0275text(13, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(15, "div", 7)(16, "section", 8)(17, "h2");
      \u0275\u0275text(18, "The shop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p", 2);
      \u0275\u0275text(20, "What customers see on the invoice and in the footer.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 9)(22, "label")(23, "span", 1);
      \u0275\u0275text(24, "Shop name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 10);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_25_listener($event) {
        return ctx.set("shopName", ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "label")(27, "span", 1);
      \u0275\u0275text(28, "Support email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 11);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_29_listener($event) {
        return ctx.set("supportEmail", ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "label")(31, "span", 1);
      \u0275\u0275text(32, "Support phone");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "input", 10);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_33_listener($event) {
        return ctx.set("supportPhone", ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "label")(35, "span", 1);
      \u0275\u0275text(36, "Instagram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "input", 10);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_37_listener($event) {
        return ctx.set("instagram", ctx.text($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(38, "section", 8)(39, "h2");
      \u0275\u0275text(40, "Delivery and tax");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "p", 2);
      \u0275\u0275text(42, "These drive the cart totals and the promise on the banner.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 9)(44, "label")(45, "span", 1);
      \u0275\u0275text(46, "Free delivery over (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "input", 12);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_47_listener($event) {
        return ctx.set("freeShippingOver", ctx.num($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "label")(49, "span", 1);
      \u0275\u0275text(50, "Flat delivery below that (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "input", 12);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_51_listener($event) {
        return ctx.set("flatShipping", ctx.num($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "label")(53, "span", 1);
      \u0275\u0275text(54, "Tax (%)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "input", 13);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_55_listener($event) {
        return ctx.set("taxPercent", ctx.num($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "label")(57, "span", 1);
      \u0275\u0275text(58, "Dispatch within (hours)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "input", 14);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_59_listener($event) {
        return ctx.set("dispatchHours", ctx.num($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(60, "section", 8)(61, "h2");
      \u0275\u0275text(62, "Stock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p", 2);
      \u0275\u0275text(64, "Where the dashboard starts calling a shelf low.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 9)(66, "label")(67, "span", 1);
      \u0275\u0275text(68, "Low stock warning at");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "input", 14);
      \u0275\u0275listener("input", function AdminSettings_Template_input_input_69_listener($event) {
        return ctx.set("lowStockAt", ctx.num($event));
      });
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(70, "section", 8)(71, "h2");
      \u0275\u0275text(72, "Switches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p", 2);
      \u0275\u0275text(74, "Turn the shop and its alerts on and off.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul", 15);
      \u0275\u0275repeaterCreate(76, AdminSettings_For_77_Template, 8, 6, "li", null, _forTrack0);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("disabled", !ctx.dirty());
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", ctx.dirty() ? "Save changes" : "Saved", " ");
      \u0275\u0275advance(11);
      \u0275\u0275property("value", ctx.form().shopName);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().supportEmail);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().supportPhone);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().instagram);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.form().freeShippingOver);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().flatShipping);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().taxPercent);
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.form().dispatchHours);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.form().lowStockAt);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.switches);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.panels[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 24px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.panel[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 6px 0 20px;\n  font-size: 0.8125rem;\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.fields[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.fields[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.toggles[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.toggles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.toggles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.toggles[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.toggles[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n.switch[_ngcontent-%COMP%] {\n  position: relative;\n  flex: none;\n  width: 46px;\n  height: 26px;\n  padding: 0;\n  cursor: pointer;\n  border: 1px solid var(--Kova-rule);\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container-highest);\n  transition: background 180ms ease, border-color 180ms ease;\n}\n.switch.on[_ngcontent-%COMP%] {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n}\n.knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--mat-sys-on-surface-variant);\n  transition: transform 180ms cubic-bezier(0.2, 0, 0.1, 1), background 180ms ease;\n}\n.switch.on[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%] {\n  transform: translateX(20px);\n  background: var(--mat-sys-on-primary);\n}\n@media (max-width: 1099px) {\n  .panels[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-settings.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSettings, [{
    type: Component,
    args: [{ selector: "Kova-admin-settings", imports: [MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Shop</span>
        <h1>Settings</h1>
        <small class="muted">Saved to this browser until the settings API lands.</small>
      </div>
      <div class="actions">
        <button mat-stroked-button (click)="reset()">Reset to defaults</button>
        <button mat-flat-button (click)="save()" [disabled]="!dirty()">
          <mat-icon fontSet="material-symbols-outlined">save</mat-icon>
          {{ dirty() ? 'Save changes' : 'Saved' }}
        </button>
      </div>
    </header>

    <div class="panels">
      <section class="panel">
        <h2>The shop</h2>
        <p class="muted">What customers see on the invoice and in the footer.</p>
        <div class="fields">
          <label><span class="eyebrow">Shop name</span>
            <input [value]="form().shopName" (input)="set('shopName', text($event))" /></label>
          <label><span class="eyebrow">Support email</span>
            <input type="email" [value]="form().supportEmail" (input)="set('supportEmail', text($event))" /></label>
          <label><span class="eyebrow">Support phone</span>
            <input [value]="form().supportPhone" (input)="set('supportPhone', text($event))" /></label>
          <label><span class="eyebrow">Instagram</span>
            <input [value]="form().instagram" (input)="set('instagram', text($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Delivery and tax</h2>
        <p class="muted">These drive the cart totals and the promise on the banner.</p>
        <div class="fields">
          <label><span class="eyebrow">Free delivery over (\u20B9)</span>
            <input type="number" min="0" [value]="form().freeShippingOver" (input)="set('freeShippingOver', num($event))" /></label>
          <label><span class="eyebrow">Flat delivery below that (\u20B9)</span>
            <input type="number" min="0" [value]="form().flatShipping" (input)="set('flatShipping', num($event))" /></label>
          <label><span class="eyebrow">Tax (%)</span>
            <input type="number" min="0" max="40" [value]="form().taxPercent" (input)="set('taxPercent', num($event))" /></label>
          <label><span class="eyebrow">Dispatch within (hours)</span>
            <input type="number" min="1" [value]="form().dispatchHours" (input)="set('dispatchHours', num($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Stock</h2>
        <p class="muted">Where the dashboard starts calling a shelf low.</p>
        <div class="fields">
          <label><span class="eyebrow">Low stock warning at</span>
            <input type="number" min="1" [value]="form().lowStockAt" (input)="set('lowStockAt', num($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Switches</h2>
        <p class="muted">Turn the shop and its alerts on and off.</p>
        <ul class="toggles">
          @for (row of switches; track row.key) {
            <li>
              <div>
                <strong>{{ row.label }}</strong>
                <small class="muted">{{ row.detail }}</small>
              </div>
              <button class="switch" role="switch" [attr.aria-checked]="flag(row.key)"
                      [class.on]="flag(row.key)" (click)="toggle(row.key)"
                      [attr.aria-label]="row.label">
                <span class="knob"></span>
              </button>
            </li>
          }
        </ul>
      </section>
    </div>
  `, styles: ["/* angular:styles/component:css;4bb73a72dd71e91cfc6bb86545b2a22507fef3f7cbea4b3d039c994b5a1820dc;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-settings.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.head small {\n  display: block;\n  font-size: 0.8125rem;\n}\n.actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.panels {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.panel {\n  padding: 24px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.panel h2 {\n  font-size: 1.0625rem;\n}\n.panel > p {\n  margin: 6px 0 20px;\n  font-size: 0.8125rem;\n}\n.fields {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.fields label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.fields input {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.fields input:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.toggles {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.toggles li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.toggles li:last-child {\n  border-bottom: 0;\n}\n.toggles strong {\n  display: block;\n  font-size: 0.875rem;\n  font-weight: 500;\n}\n.toggles small {\n  display: block;\n  font-size: 0.75rem;\n  margin-top: 2px;\n}\n.switch {\n  position: relative;\n  flex: none;\n  width: 46px;\n  height: 26px;\n  padding: 0;\n  cursor: pointer;\n  border: 1px solid var(--Kova-rule);\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container-highest);\n  transition: background 180ms ease, border-color 180ms ease;\n}\n.switch.on {\n  background: var(--mat-sys-primary);\n  border-color: var(--mat-sys-primary);\n}\n.knob {\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background: var(--mat-sys-on-surface-variant);\n  transition: transform 180ms cubic-bezier(0.2, 0, 0.1, 1), background 180ms ease;\n}\n.switch.on .knob {\n  transform: translateX(20px);\n  background: var(--mat-sys-on-primary);\n}\n@media (max-width: 1099px) {\n  .panels {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .fields {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-settings.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSettings, { className: "AdminSettings", filePath: "src/app/features/admin/admin-settings.ts", lineNumber: 173 });
})();
function read() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? __spreadValues(__spreadValues({}, DEFAULTS), JSON.parse(raw)) : __spreadValues({}, DEFAULTS);
  } catch {
    return __spreadValues({}, DEFAULTS);
  }
}
export {
  AdminSettings
};
//# sourceMappingURL=chunk-PXPGHG7C.js.map
