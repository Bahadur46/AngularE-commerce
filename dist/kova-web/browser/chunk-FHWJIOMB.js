import {
  BarList,
  TrendChart
} from "./chunk-V4TILS6J.js";
import {
  Admin
} from "./chunk-Q54TYYEO.js";
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
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-reports.ts
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.label;
function AdminReports_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function AdminReports_For_11_Template_button_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.range.set(option_r2.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.range() === option_r2.key);
    \u0275\u0275attribute("aria-selected", ctx_r2.range() === option_r2.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r2.label);
  }
}
function AdminReports_Conditional_16_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const point_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r4.orders);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, point_r4.revenue));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, point_r4.orders ? point_r4.revenue / point_r4.orders : 0));
  }
}
function AdminReports_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div")(2, "span", 1);
    \u0275\u0275text(3, "Revenue in period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div")(8, "span", 1);
    \u0275\u0275text(9, "Orders in period");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "span", 1);
    \u0275\u0275text(14, "Average order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "span", 1);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong", 11);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "section", 12)(24, "div", 13)(25, "div")(26, "h2");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(28, "Kova-trend-chart", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 15)(30, "section", 12)(31, "div", 13)(32, "div")(33, "h2");
    \u0275\u0275text(34, "Best sellers by revenue");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(35, "Kova-bar-list", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "section", 12)(37, "div", 13)(38, "div")(39, "h2");
    \u0275\u0275text(40, "Revenue by occasion");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(41, "Kova-bar-list", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "section", 17)(43, "div", 13)(44, "div")(45, "h2");
    \u0275\u0275text(46, "The figures, written out");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 18)(48, "table")(49, "thead")(50, "tr")(51, "th");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "th", 19);
    \u0275\u0275text(54, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "th", 19);
    \u0275\u0275text(56, "Revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "th", 19);
    \u0275\u0275text(58, "Average order");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "tbody");
    \u0275\u0275repeaterCreate(60, AdminReports_Conditional_16_For_61_Template, 11, 8, "tr", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "tfoot")(63, "tr")(64, "td");
    \u0275\u0275text(65, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "td", 20);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "td", 20);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "td", 20);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "KovaPrice");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, ctx_r2.periodRevenue()));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.periodOrders());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 19, ctx_r2.periodAov()));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Best ", ctx_r2.unit());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_6_0 = ctx_r2.best()) == null ? null : tmp_6_0.label) ?? "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Revenue, ", ctx_r2.note());
    \u0275\u0275advance();
    \u0275\u0275property("points", ctx_r2.series())("format", ctx_r2.short)("detail", ctx_r2.money);
    \u0275\u0275advance(7);
    \u0275\u0275property("rows", ctx_r2.topRows())("format", ctx_r2.money);
    \u0275\u0275advance(6);
    \u0275\u0275property("rows", ctx_r2.categoryRows())("format", ctx_r2.money);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.unit());
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r2.series());
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.periodOrders());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 21, ctx_r2.periodRevenue()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 23, ctx_r2.periodAov()));
  }
}
function AdminReports_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Loading the book\u2026");
    \u0275\u0275elementEnd();
  }
}
var AdminReports = class _AdminReports {
  admin = inject(Admin);
  notify = inject(Notify);
  price = new PricePipe();
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  range = signal("monthly", ...ngDevMode ? [{ debugName: "range" }] : []);
  ranges = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" }
  ];
  money = (value) => this.price.transform(value);
  compact = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1
  });
  short = (value) => this.compact.format(value);
  constructor() {
    this.admin.dashboard().subscribe((stats) => this.stats.set(stats));
  }
  series = computed(() => {
    const stats = this.stats();
    if (!stats)
      return [];
    return this.range() === "daily" ? stats.daily : this.range() === "weekly" ? stats.weekly : stats.monthly;
  }, ...ngDevMode ? [{ debugName: "series" }] : []);
  unit = computed(() => this.range() === "daily" ? "Day" : this.range() === "weekly" ? "Week" : "Month", ...ngDevMode ? [{ debugName: "unit" }] : []);
  note = computed(() => this.range() === "daily" ? "the last fourteen days" : this.range() === "weekly" ? "the last twelve weeks" : "the last twelve months", ...ngDevMode ? [{ debugName: "note" }] : []);
  periodRevenue = computed(() => this.series().reduce((total, point) => total + point.revenue, 0), ...ngDevMode ? [{ debugName: "periodRevenue" }] : []);
  periodOrders = computed(() => this.series().reduce((total, point) => total + point.orders, 0), ...ngDevMode ? [{ debugName: "periodOrders" }] : []);
  periodAov = computed(() => {
    const orders = this.periodOrders();
    return orders ? Math.round(this.periodRevenue() / orders) : 0;
  }, ...ngDevMode ? [{ debugName: "periodAov" }] : []);
  best = computed(() => [...this.series()].sort((a, b) => b.revenue - a.revenue)[0] ?? null, ...ngDevMode ? [{ debugName: "best" }] : []);
  topRows = computed(() => (this.stats()?.topProducts ?? []).map((product) => ({
    label: product.name,
    value: product.revenue,
    note: `${product.unitsSold} units sold`
  })), ...ngDevMode ? [{ debugName: "topRows" }] : []);
  categoryRows = computed(() => (this.stats()?.categoryRevenue ?? []).map((row) => ({ label: row.name, value: row.revenue })), ...ngDevMode ? [{ debugName: "categoryRows" }] : []);
  exportCsv() {
    const rows = [
      [this.unit(), "Orders", "Revenue"],
      ...this.series().map((point) => [point.label, `${point.orders}`, `${point.revenue}`]),
      ["Total", `${this.periodOrders()}`, `${this.periodRevenue()}`]
    ];
    const csv = rows.map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `anuvesh-report-${this.range()}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    this.notify.done("Report exported");
  }
  static \u0275fac = function AdminReports_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminReports)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminReports, selectors: [["Kova-admin-reports"]], decls: 18, vars: 2, consts: [[1, "head"], [1, "eyebrow"], [1, "muted"], [1, "actions"], ["role", "tablist", "aria-label", "Reporting period", 1, "segmented"], ["role", "tab", 3, "on"], ["mat-flat-button", "", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined"], ["role", "tab", 3, "click"], [1, "summary"], [1, "price"], [1, "numeric"], [1, "panel", "viz"], [1, "panel-head"], [3, "points", "format", "detail"], [1, "pair"], [3, "rows", "format"], [1, "panel"], [1, "scroll"], [1, "right"], [1, "right", "numeric"], [1, "right", "numeric", "muted"]], template: function AdminReports_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Reports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7, "The same book as the dashboard, with the numbers written out.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "div", 4);
      \u0275\u0275repeaterCreate(10, AdminReports_For_11_Template, 2, 4, "button", 5, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function AdminReports_Template_button_click_12_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(13, "mat-icon", 7);
      \u0275\u0275text(14, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Export CSV ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(16, AdminReports_Conditional_16_Template, 74, 25)(17, AdminReports_Conditional_17_Template, 2, 0, "p", 2);
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.ranges);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !ctx.stats());
      \u0275\u0275advance(4);
      \u0275\u0275conditional((tmp_2_0 = ctx.stats()) ? 16 : 17, tmp_2_0);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, TrendChart, BarList, PricePipe], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8125rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.segmented[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px;\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container-high);\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.75rem;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n}\n.segmented[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  background: var(--mat-sys-surface);\n  color: var(--mat-sys-on-surface);\n  font-weight: 600;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.summary[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  padding: 18px 20px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  margin-bottom: 20px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.panel-head[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.pair[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ntfoot[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-bottom: 0;\n  border-top: 2px solid var(--Kova-rule);\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n@media (max-width: 1099px) {\n  .summary[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pair[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .summary[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-reports.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminReports, [{
    type: Component,
    args: [{ selector: "Kova-admin-reports", imports: [MatButtonModule, MatIconModule, PricePipe, TrendChart, BarList], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Overview</span>
        <h1>Reports</h1>
        <small class="muted">The same book as the dashboard, with the numbers written out.</small>
      </div>
      <div class="actions">
        <div class="segmented" role="tablist" aria-label="Reporting period">
          @for (option of ranges; track option.key) {
            <button role="tab" [class.on]="range() === option.key"
                    [attr.aria-selected]="range() === option.key"
                    (click)="range.set(option.key)">{{ option.label }}</button>
          }
        </div>
        <button mat-flat-button (click)="exportCsv()" [disabled]="!stats()">
          <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
          Export CSV
        </button>
      </div>
    </header>

    @if (stats(); as s) {
      <div class="summary">
        <div><span class="eyebrow">Revenue in period</span><strong class="price">{{ periodRevenue() |KovaPrice }}</strong></div>
        <div><span class="eyebrow">Orders in period</span><strong class="numeric">{{ periodOrders() }}</strong></div>
        <div><span class="eyebrow">Average order</span><strong class="price">{{ periodAov() |KovaPrice }}</strong></div>
        <div><span class="eyebrow">Best {{ unit() }}</span><strong class="numeric">{{ best()?.label ?? '\u2014' }}</strong></div>
      </div>

      <section class="panel viz">
        <div class="panel-head">
          <div><h2>Revenue, {{ note() }}</h2></div>
        </div>
        <Kova-trend-chart [points]="series()" [format]="short" [detail]="money" />
      </section>

      <div class="pair">
        <section class="panel viz">
          <div class="panel-head"><div><h2>Best sellers by revenue</h2></div></div>
          <Kova-bar-list [rows]="topRows()" [format]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head"><div><h2>Revenue by occasion</h2></div></div>
          <Kova-bar-list [rows]="categoryRows()" [format]="money" />
        </section>
      </div>

      <section class="panel">
        <div class="panel-head"><div><h2>The figures, written out</h2></div></div>
        <div class="scroll">
          <table>
            <thead>
              <tr><th>{{ unit() }}</th><th class="right">Orders</th><th class="right">Revenue</th><th class="right">Average order</th></tr>
            </thead>
            <tbody>
              @for (point of series(); track point.label) {
                <tr>
                  <td class="numeric">{{ point.label }}</td>
                  <td class="right numeric">{{ point.orders }}</td>
                  <td class="right numeric">{{ point.revenue |KovaPrice }}</td>
                  <td class="right numeric muted">{{ (point.orders ? point.revenue / point.orders : 0) |KovaPrice }}</td>
                </tr>
              }
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                <td class="right numeric">{{ periodOrders() }}</td>
                <td class="right numeric">{{ periodRevenue() |KovaPrice }}</td>
                <td class="right numeric">{{ periodAov() |KovaPrice }}</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    } @else {
      <p class="muted">Loading the book\u2026</p>
    }
  `, styles: ["/* angular:styles/component:css;644e9d1bab72217d2f652be4acfb0590f8a0e6f8a1cf3d5958fb542750576e2a;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-reports.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.head small {\n  display: block;\n  font-size: 0.8125rem;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.segmented {\n  display: inline-flex;\n  padding: 3px;\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container-high);\n}\n.segmented button {\n  padding: 7px 16px;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.75rem;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n}\n.segmented button.on {\n  background: var(--mat-sys-surface);\n  color: var(--mat-sys-on-surface);\n  font-weight: 600;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.summary {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 20px;\n}\n.summary div {\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n  padding: 18px 20px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.summary strong {\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n.panel {\n  padding: 22px;\n  margin-bottom: 20px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.panel-head {\n  margin-bottom: 22px;\n}\n.panel h2 {\n  font-size: 1.0625rem;\n}\n.pair {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n}\n.scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth,\ntd {\n  text-align: left;\n  padding: 11px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ntfoot td {\n  font-weight: 600;\n  border-bottom: 0;\n  border-top: 2px solid var(--Kova-rule);\n}\n.right {\n  text-align: right;\n}\n@media (max-width: 1099px) {\n  .summary {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pair {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .summary {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=admin-reports.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminReports, { className: "AdminReports", filePath: "src/app/features/admin/admin-reports.ts", lineNumber: 142 });
})();
export {
  AdminReports
};
//# sourceMappingURL=chunk-FHWJIOMB.js.map
