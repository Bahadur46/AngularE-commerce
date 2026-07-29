import {
  BarList,
  TrendChart
} from "./chunk-V4TILS6J.js";
import {
  Admin
} from "./chunk-Q54TYYEO.js";
import {
  STATUS_LABEL
} from "./chunk-NEQP5CTB.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
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
import {
  DatePipe
} from "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/charts/share-bar.ts
var _forTrack0 = ($index, $item) => $item.label;
function ShareBar_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "span", 5);
    \u0275\u0275domListener("pointerenter", function ShareBar_For_3_Template_span_pointerenter_0_listener() {
      const \u0275$index_5_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hover.set(\u0275$index_5_r2));
    });
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const slice_r4 = ctx.$implicit;
    const \u0275$index_5_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ctx_r2.percent(slice_r4.value), "%")("background", ctx_r2.paint(\u0275$index_5_r2));
    \u0275\u0275classProp("on", ctx_r2.hover() === \u0275$index_5_r2);
  }
}
function ShareBar_For_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 9);
    \u0275\u0275text(1, "!");
    \u0275\u0275domElementEnd();
  }
}
function ShareBar_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 6);
    \u0275\u0275domListener("pointerenter", function ShareBar_For_6_Template_li_pointerenter_0_listener() {
      const \u0275$index_10_r6 = \u0275\u0275restoreView(_r5).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hover.set(\u0275$index_10_r6));
    })("pointerleave", function ShareBar_For_6_Template_li_pointerleave_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hover.set(-1));
    });
    \u0275\u0275domElement(1, "span", 7);
    \u0275\u0275domElementStart(2, "span", 8);
    \u0275\u0275conditionalCreate(3, ShareBar_For_6_Conditional_3_Template, 2, 0, "span", 9);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 10);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 11);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const slice_r7 = ctx.$implicit;
    const \u0275$index_10_r6 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.hover() === \u0275$index_10_r6);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", ctx_r2.paint(\u0275$index_10_r6));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(slice_r7.kind === "critical" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", slice_r7.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(slice_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.percent(slice_r7.value).toFixed(1), "%");
  }
}
var ShareBar = class _ShareBar {
  slices = input.required(...ngDevMode ? [{ debugName: "slices" }] : []);
  hover = signal(-1, ...ngDevMode ? [{ debugName: "hover" }] : []);
  total = computed(() => Math.max(1, this.slices().reduce((sum, slice) => sum + slice.value, 0)), ...ngDevMode ? [{ debugName: "total" }] : []);
  summary = computed(() => this.slices().map((slice) => `${slice.label}: ${slice.value}`).join(", "), ...ngDevMode ? [{ debugName: "summary" }] : []);
  percent(value) {
    return value / this.total() * 100;
  }
  /** Stages walk the ramp in order; anything critical steps out of it. */
  paint(index) {
    const slice = this.slices()[index];
    if (slice.kind === "critical")
      return "var(--viz-critical)";
    const stages = this.slices().filter((item) => item.kind === "stage");
    const position = stages.indexOf(slice);
    const step = Math.min(4, Math.max(1, Math.round(position / Math.max(1, stages.length - 1) * 3) + 1));
    return `var(--viz-o${step})`;
  }
  static \u0275fac = function ShareBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ShareBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShareBar, selectors: [["Kova-share-bar"]], inputs: { slices: [1, "slices"] }, decls: 7, vars: 1, consts: [[1, "chart"], ["role", "img", 1, "bar", 3, "pointerleave"], [1, "seg", 3, "width", "background", "on"], [1, "legend"], [3, "on"], [1, "seg", 3, "pointerenter"], [3, "pointerenter", "pointerleave"], [1, "swatch"], [1, "label"], ["aria-hidden", "true", 1, "warn-mark"], [1, "count"], [1, "pct"]], template: function ShareBar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275domListener("pointerleave", function ShareBar_Template_div_pointerleave_1_listener() {
        return ctx.hover.set(-1);
      });
      \u0275\u0275repeaterCreate(2, ShareBar_For_3_Template, 1, 6, "span", 2, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(4, "ul", 3);
      \u0275\u0275repeaterCreate(5, ShareBar_For_6_Template, 9, 8, "li", 4, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.summary());
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.slices());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.slices());
    }
  }, styles: ["\n\n.chart[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.bar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 34px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 3px;\n  cursor: default;\n  box-shadow: inset -2px 0 0 var(--viz-surface);\n  transition: filter 160ms ease;\n}\n.seg[_ngcontent-%COMP%]:last-child {\n  box-shadow: none;\n}\n.seg.on[_ngcontent-%COMP%] {\n  filter: brightness(1.15);\n}\n.legend[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 24px;\n}\n.legend[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 12px 1fr auto auto;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 6px;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n}\n.legend[_ngcontent-%COMP%]   li.on[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-axis) 22%, transparent);\n}\n.swatch[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\n.label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n.count[_ngcontent-%COMP%], \n.pct[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.75rem;\n}\n.pct[_ngcontent-%COMP%] {\n  color: var(--viz-ink-2);\n  min-width: 44px;\n  text-align: right;\n}\n.warn-mark[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  flex: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--viz-critical);\n  color: #fff;\n  font-size: 0.5625rem;\n  font-weight: 700;\n}\n@media (max-width: 599px) {\n  .legend[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=share-bar.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShareBar, [{
    type: Component,
    args: [{ selector: "Kova-share-bar", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="chart">
      <div class="bar" role="img" [attr.aria-label]="summary()" (pointerleave)="hover.set(-1)">
        @for (slice of slices(); track slice.label; let i = $index) {
          <span class="seg" [style.width.%]="percent(slice.value)"
                [style.background]="paint(i)"
                [class.on]="hover() === i"
                (pointerenter)="hover.set(i)"></span>
        }
      </div>

      <ul class="legend">
        @for (slice of slices(); track slice.label; let i = $index) {
          <li [class.on]="hover() === i" (pointerenter)="hover.set(i)" (pointerleave)="hover.set(-1)">
            <span class="swatch" [style.background]="paint(i)"></span>
            <span class="label">
              @if (slice.kind === 'critical') { <span class="warn-mark" aria-hidden="true">!</span> }
              {{ slice.label }}
            </span>
            <span class="count">{{ slice.value }}</span>
            <span class="pct">{{ percent(slice.value).toFixed(1) }}%</span>
          </li>
        }
      </ul>
    </div>
  `, styles: ["/* angular:styles/component:css;c171a05c313ee05146dcbb9fc25337dd77a6d213dd3cb22763c285b54b658d26;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/charts/share-bar.ts */\n.chart {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.bar {\n  display: flex;\n  height: 34px;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.seg {\n  height: 100%;\n  min-width: 3px;\n  cursor: default;\n  box-shadow: inset -2px 0 0 var(--viz-surface);\n  transition: filter 160ms ease;\n}\n.seg:last-child {\n  box-shadow: none;\n}\n.seg.on {\n  filter: brightness(1.15);\n}\n.legend {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 24px;\n}\n.legend li {\n  display: grid;\n  grid-template-columns: 12px 1fr auto auto;\n  align-items: center;\n  gap: 10px;\n  padding: 5px 6px;\n  border-radius: 6px;\n  font-size: 0.8125rem;\n}\n.legend li.on {\n  background: color-mix(in srgb, var(--viz-axis) 22%, transparent);\n}\n.swatch {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n}\n.label {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  min-width: 0;\n}\n.count,\n.pct {\n  font-variant-numeric: tabular-nums;\n  font-size: 0.75rem;\n}\n.pct {\n  color: var(--viz-ink-2);\n  min-width: 44px;\n  text-align: right;\n}\n.warn-mark {\n  display: inline-grid;\n  place-items: center;\n  flex: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--viz-critical);\n  color: #fff;\n  font-size: 0.5625rem;\n  font-weight: 700;\n}\n@media (max-width: 599px) {\n  .legend {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=share-bar.css.map */\n"] }]
  }], null, { slices: [{ type: Input, args: [{ isSignal: true, alias: "slices", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShareBar, { className: "ShareBar", filePath: "src/app/features/admin/charts/share-bar.ts", lineNumber: 87 });
})();

// src/app/features/admin/charts/spark-line.ts
var SparkLine = class _SparkLine {
  values = input.required(...ngDevMode ? [{ debugName: "values" }] : []);
  bounds = computed(() => {
    const values = this.values();
    const low = Math.min(...values, 0);
    const high = Math.max(...values, 1);
    return { low, span: high - low || 1 };
  }, ...ngDevMode ? [{ debugName: "bounds" }] : []);
  line = computed(() => {
    const values = this.values();
    const { low, span } = this.bounds();
    return values.map((value, index) => {
      const x = values.length <= 1 ? 50 : index / (values.length - 1) * 100;
      const y = 96 - (value - low) / span * 92;
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    }).join(" ");
  }, ...ngDevMode ? [{ debugName: "line" }] : []);
  area = computed(() => this.values().length ? `${this.line()} L100 100 L0 100 Z` : "", ...ngDevMode ? [{ debugName: "area" }] : []);
  static \u0275fac = function SparkLine_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SparkLine)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SparkLine, selectors: [["Kova-spark-line"]], inputs: { values: [1, "values"] }, decls: 3, vars: 2, consts: [["viewBox", "0 0 100 100", "preserveAspectRatio", "none", "aria-hidden", "true"], [1, "area"], ["vector-effect", "non-scaling-stroke", 1, "line"]], template: function SparkLine_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(0, "svg", 0);
      \u0275\u0275domElement(1, "path", 1)(2, "path", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275attribute("d", ctx.area());
      \u0275\u0275advance();
      \u0275\u0275attribute("d", ctx.line());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  height: 34px;\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.area[_ngcontent-%COMP%] {\n  fill: var(--viz-fill);\n}\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--viz-series);\n  stroke-width: 1.75;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n/*# sourceMappingURL=spark-line.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SparkLine, [{
    type: Component,
    args: [{ selector: "Kova-spark-line", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <path class="area" [attr.d]="area()" />
      <path class="line" [attr.d]="line()" vector-effect="non-scaling-stroke" />
    </svg>
  `, styles: ["/* angular:styles/component:css;eca7484957c9f7f587a32bfa03f22736bcfb3014f08be9e6e105ef19030244da;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/charts/spark-line.ts */\n:host {\n  display: block;\n  height: 34px;\n}\nsvg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.area {\n  fill: var(--viz-fill);\n}\n.line {\n  fill: none;\n  stroke: var(--viz-series);\n  stroke-width: 1.75;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n/*# sourceMappingURL=spark-line.css.map */\n"] }]
  }], null, { values: [{ type: Input, args: [{ isSignal: true, alias: "values", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SparkLine, { className: "SparkLine", filePath: "src/app/features/admin/charts/spark-line.ts", lineNumber: 23 });
})();

// src/app/features/admin/dashboard.ts
var _forTrack02 = ($index, $item) => $item.text;
var _forTrack1 = ($index, $item) => $item.key;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.productId;
function Dashboard_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.alerts().length);
  }
}
function Dashboard_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275listener("click", function Dashboard_Conditional_16_For_2_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.alertsOpen.set(false));
    });
    \u0275\u0275elementStart(1, "mat-icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-icon", 17);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const alert_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", alert_r3.link);
    \u0275\u0275advance();
    \u0275\u0275classMap(alert_r3.tone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(alert_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(alert_r3.text);
  }
}
function Dashboard_Conditional_16_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "Nothing needs you right now.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_16_For_2_Template, 7, 5, "a", 14, _forTrack02, false, Dashboard_Conditional_16_ForEmpty_3_Template, 2, 0, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.alerts());
  }
}
function Dashboard_Conditional_29_For_108_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function Dashboard_Conditional_29_For_108_Template_button_click_0_listener() {
      const option_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.range.set(option_r5.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("on", ctx_r0.range() === option_r5.key);
    \u0275\u0275attribute("aria-selected", ctx_r0.range() === option_r5.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(option_r5.label);
  }
}
function Dashboard_Conditional_29_For_163_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 51);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 52);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td")(9, "span", 53);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "td", 52);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 54);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 8, order_r6.createdAt, "d MMM, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r6.itemCount);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.tone(order_r6.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.label(order_r6.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r6.paymentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 11, order_r6.total));
  }
}
function Dashboard_Conditional_29_ForEmpty_164_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 55);
    \u0275\u0275text(2, "No orders yet.");
    \u0275\u0275elementEnd()();
  }
}
function Dashboard_Conditional_29_For_176_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "span", 56);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 57);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("out", item_r7.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.stock === 0 ? "Sold out" : item_r7.stock + " left", " ");
  }
}
function Dashboard_Conditional_29_ForEmpty_177_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275text(1, "Every shelf is stocked.");
    \u0275\u0275elementEnd();
  }
}
function Dashboard_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "article", 18)(2, "div", 19)(3, "span", 1);
    \u0275\u0275text(4, "Total sales");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 20)(6, "mat-icon", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "strong", 21);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "Kova-spark-line", 22);
    \u0275\u0275elementStart(13, "small", 2);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "article", 18)(17, "div", 19)(18, "span", 1);
    \u0275\u0275text(19, "Total orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 20)(21, "mat-icon", 6);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "strong", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "Kova-spark-line", 22);
    \u0275\u0275elementStart(27, "small", 2);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "article", 18)(30, "div", 19)(31, "span", 1);
    \u0275\u0275text(32, "Customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span", 20)(34, "mat-icon", 6);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "strong", 23);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "small", 2);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "article", 18)(42, "div", 19)(43, "span", 1);
    \u0275\u0275text(44, "Average order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 20)(46, "mat-icon", 6);
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "strong", 21);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "small", 2);
    \u0275\u0275text(53, "across the last 30 days");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "div", 24)(55, "a", 25)(56, "mat-icon", 6);
    \u0275\u0275text(57, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "span", 26);
    \u0275\u0275text(59, "Today's orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "strong", 27);
    \u0275\u0275text(61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 28)(63, "mat-icon", 6);
    \u0275\u0275text(64, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "span", 26);
    \u0275\u0275text(66, "Today's revenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "strong", 29);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "a", 30)(71, "mat-icon", 6);
    \u0275\u0275text(72, "pending_actions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "span", 26);
    \u0275\u0275text(74, "Pending");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "strong", 27);
    \u0275\u0275text(76);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "div", 31)(78, "mat-icon", 6);
    \u0275\u0275text(79, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 26);
    \u0275\u0275text(81, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "strong", 27);
    \u0275\u0275text(83);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "div", 32)(85, "mat-icon", 6);
    \u0275\u0275text(86, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 26);
    \u0275\u0275text(88, "Cancelled");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "strong", 27);
    \u0275\u0275text(90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(91, "a", 33)(92, "mat-icon", 6);
    \u0275\u0275text(93, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span", 26);
    \u0275\u0275text(95, "Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "strong", 27);
    \u0275\u0275text(97);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(98, "div", 34)(99, "section", 35)(100, "div", 36)(101, "div")(102, "h2");
    \u0275\u0275text(103, "Revenue trend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "small", 13);
    \u0275\u0275text(105);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "div", 37);
    \u0275\u0275repeaterCreate(107, Dashboard_Conditional_29_For_108_Template, 2, 4, "button", 38, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(109, "Kova-trend-chart", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "section", 40)(111, "div", 36)(112, "div")(113, "h2");
    \u0275\u0275text(114, "Order status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(115, "small", 13);
    \u0275\u0275text(116);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(117, "Kova-share-bar", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "section", 40)(119, "div", 36)(120, "div")(121, "h2");
    \u0275\u0275text(122, "Top-selling products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "small", 13);
    \u0275\u0275text(124, "by revenue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(125, "a", 42);
    \u0275\u0275text(126, "Manage");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(127, "Kova-bar-list", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "section", 40)(129, "div", 36)(130, "div")(131, "h2");
    \u0275\u0275text(132, "Revenue by occasion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "small", 13);
    \u0275\u0275text(134, "which shelf is carrying the shop");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(135, "Kova-bar-list", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "section", 44)(137, "div", 36)(138, "div")(139, "h2");
    \u0275\u0275text(140, "Recent orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "small", 13);
    \u0275\u0275text(142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "a", 45);
    \u0275\u0275text(144, "All orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 46)(146, "table")(147, "thead")(148, "tr")(149, "th");
    \u0275\u0275text(150, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "th");
    \u0275\u0275text(152, "Placed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "th");
    \u0275\u0275text(154, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "th");
    \u0275\u0275text(156, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "th");
    \u0275\u0275text(158, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "th", 47);
    \u0275\u0275text(160, "Total");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(161, "tbody");
    \u0275\u0275repeaterCreate(162, Dashboard_Conditional_29_For_163_Template, 16, 13, "tr", null, _forTrack2, false, Dashboard_Conditional_29_ForEmpty_164_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(165, "section", 48)(166, "div", 36)(167, "div")(168, "h2");
    \u0275\u0275text(169, "Low on stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(170, "small", 13);
    \u0275\u0275text(171);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(172, "a", 42);
    \u0275\u0275text(173, "Restock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(174, "ul", 49);
    \u0275\u0275repeaterCreate(175, Dashboard_Conditional_29_For_176_Template, 5, 4, "li", null, _forTrack3, false, Dashboard_Conditional_29_ForEmpty_177_Template, 2, 0, "li", 13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r8 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275classProp("down", s_r8.deltas.revenue < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.deltas.revenue < 0 ? "trending_down" : "trending_up");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r8.deltas.revenue > 0 ? "+" : "", "", s_r8.deltas.revenue, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 49, s_r8.revenueTotal));
    \u0275\u0275advance(2);
    \u0275\u0275property("values", ctx_r0.spark(s_r8.daily));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 51, s_r8.revenueThisMonth), " this month \xB7 vs previous 30 days");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("down", s_r8.deltas.orders < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.deltas.orders < 0 ? "trending_down" : "trending_up");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r8.deltas.orders > 0 ? "+" : "", "", s_r8.deltas.orders, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.ordersTotal);
    \u0275\u0275advance();
    \u0275\u0275property("values", ctx_r0.sparkOrders(s_r8.daily));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r8.ordersPending, " still open \xB7 vs previous 30 days");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("down", s_r8.deltas.customers < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.deltas.customers < 0 ? "trending_down" : "trending_up");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r8.deltas.customers > 0 ? "+" : "", "", s_r8.deltas.customers, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.customersTotal);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r8.customersNew, " ordered this month");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("down", s_r8.deltas.aov < 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.deltas.aov < 0 ? "trending_down" : "trending_up");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", s_r8.deltas.aov > 0 ? "+" : "", "", s_r8.deltas.aov, "% ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 53, s_r8.averageOrderValue));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(s_r8.ordersToday);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 55, s_r8.revenueToday));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(s_r8.ordersPending);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r8.ordersCompleted);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r8.ordersCancelled);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(s_r8.productsTotal);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.rangeNote());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.ranges);
    \u0275\u0275advance(2);
    \u0275\u0275property("points", ctx_r0.series())("format", ctx_r0.short)("detail", ctx_r0.money);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", s_r8.ordersTotal, " orders, all time");
    \u0275\u0275advance();
    \u0275\u0275property("slices", ctx_r0.statusSlices());
    \u0275\u0275advance(10);
    \u0275\u0275property("rows", ctx_r0.topRows())("format", ctx_r0.money);
    \u0275\u0275advance(8);
    \u0275\u0275property("rows", ctx_r0.categoryRows())("format", ctx_r0.money);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("the last ", s_r8.recentOrders.length, " to come in");
    \u0275\u0275advance(20);
    \u0275\u0275repeater(s_r8.recentOrders);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("", s_r8.lowStockCount, " below twelve");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(s_r8.lowStock);
  }
}
function Dashboard_Conditional_30_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 58);
  }
}
function Dashboard_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275repeaterCreate(1, Dashboard_Conditional_30_For_2_Template, 1, 0, "div", 58, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.skeleton);
  }
}
function Dashboard_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "The dashboard could not be loaded. Try refreshing.");
    \u0275\u0275elementEnd();
  }
}
var OPEN = ["Pending", "Processing", "Shipped"];
var Dashboard = class _Dashboard {
  admin = inject(Admin);
  notify = inject(Notify);
  price = new PricePipe();
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  takenAt = signal(Date.now(), ...ngDevMode ? [{ debugName: "takenAt" }] : []);
  alertsOpen = signal(false, ...ngDevMode ? [{ debugName: "alertsOpen" }] : []);
  range = signal("daily", ...ngDevMode ? [{ debugName: "range" }] : []);
  skeleton = [0, 1, 2, 3];
  ranges = [
    { key: "daily", label: "Daily" },
    { key: "weekly", label: "Weekly" },
    { key: "monthly", label: "Monthly" }
  ];
  /** Full rupees for tooltips and tables. */
  money = (value) => this.price.transform(value);
  /** Short rupees for axis ticks, where 60px is all the room there is. */
  compact = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    notation: "compact",
    maximumFractionDigits: 1
  });
  short = (value) => this.compact.format(value);
  constructor() {
    this.load();
  }
  series = computed(() => {
    const stats = this.stats();
    if (!stats)
      return [];
    return this.range() === "daily" ? stats.daily : this.range() === "weekly" ? stats.weekly : stats.monthly;
  }, ...ngDevMode ? [{ debugName: "series" }] : []);
  rangeNote = computed(() => this.range() === "daily" ? "the last fourteen days" : this.range() === "weekly" ? "the last twelve weeks" : "the last twelve months", ...ngDevMode ? [{ debugName: "rangeNote" }] : []);
  /** Stages walk the ramp; cancelled and returned step out of it. */
  statusSlices = computed(() => (this.stats()?.statusBreakdown ?? []).map((row) => ({
    label: STATUS_LABEL[row.status],
    value: row.count,
    kind: row.status === "Cancelled" ? "critical" : "stage"
  })), ...ngDevMode ? [{ debugName: "statusSlices" }] : []);
  topRows = computed(() => (this.stats()?.topProducts ?? []).map((product) => ({
    label: product.name,
    value: product.revenue,
    note: `${product.unitsSold} units sold`
  })), ...ngDevMode ? [{ debugName: "topRows" }] : []);
  categoryRows = computed(() => (this.stats()?.categoryRevenue ?? []).slice(0, 6).map((row) => ({
    label: row.name,
    value: row.revenue
  })), ...ngDevMode ? [{ debugName: "categoryRows" }] : []);
  /** What actually needs the owner's attention, worst first. */
  alerts = computed(() => {
    const stats = this.stats();
    if (!stats)
      return [];
    const rows = [];
    const soldOut = stats.lowStock.filter((item) => item.stock === 0).length;
    if (stats.ordersToday) {
      rows.push({
        icon: "notifications_active",
        tone: "good",
        link: "../orders",
        text: `${stats.ordersToday} new order${stats.ordersToday === 1 ? "" : "s"} came in today.`
      });
    }
    if (soldOut) {
      rows.push({
        icon: "error",
        tone: "critical",
        link: "../products",
        text: `${soldOut} product${soldOut === 1 ? " is" : "s are"} sold out and still listed.`
      });
    }
    if (stats.lowStockCount) {
      rows.push({
        icon: "inventory",
        tone: "warning",
        link: "../products",
        text: `${stats.lowStockCount} products are down to twelve or fewer.`
      });
    }
    if (stats.ordersPending) {
      rows.push({
        icon: "local_shipping",
        tone: "warning",
        link: "../orders",
        text: `${stats.ordersPending} orders are still waiting to be finished.`
      });
    }
    if (stats.ordersCancelled) {
      rows.push({
        icon: "cancel",
        tone: "critical",
        link: "../orders",
        text: `${stats.ordersCancelled} orders were cancelled \u2014 worth a look.`
      });
    }
    return rows;
  }, ...ngDevMode ? [{ debugName: "alerts" }] : []);
  load() {
    this.loading.set(true);
    this.admin.dashboard().subscribe({
      next: (stats) => {
        this.stats.set(stats);
        this.takenAt.set(Date.now());
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }
  spark(points) {
    return points.map((point) => point.revenue);
  }
  sparkOrders(points) {
    return points.map((point) => point.orders);
  }
  label(status) {
    return STATUS_LABEL[status];
  }
  tone(status) {
    if (status === "Delivered")
      return "done";
    if (status === "Cancelled")
      return "stop";
    return OPEN.includes(status) ? "open" : "";
  }
  /** Downloads the current reading as a CSV, so it can go into a spreadsheet. */
  exportCsv() {
    const stats = this.stats();
    if (!stats)
      return;
    const rows = [
      ["Metric", "Value"],
      ["Total sales", `${stats.revenueTotal}`],
      ["Revenue this month", `${stats.revenueThisMonth}`],
      ["Today's revenue", `${stats.revenueToday}`],
      ["Average order value", `${stats.averageOrderValue}`],
      ["Total orders", `${stats.ordersTotal}`],
      ["Today's orders", `${stats.ordersToday}`],
      ["Pending orders", `${stats.ordersPending}`],
      ["Completed orders", `${stats.ordersCompleted}`],
      ["Cancelled orders", `${stats.ordersCancelled}`],
      ["Total customers", `${stats.customersTotal}`],
      ["Total products", `${stats.productsTotal}`],
      ["Low stock products", `${stats.lowStockCount}`],
      [],
      ["Period", "Revenue", "Orders"],
      ...this.series().map((point) => [point.label, `${point.revenue}`, `${point.orders}`]),
      [],
      ["Top product", "Units", "Revenue"],
      ...stats.topProducts.map((product) => [product.name, `${product.unitsSold}`, `${product.revenue}`])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `anuvesh-dashboard-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
    this.notify.done("Dashboard exported");
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["Kova-dashboard"]], decls: 32, vars: 11, consts: [[1, "head"], [1, "eyebrow"], [1, "muted", "numeric"], [1, "actions"], [1, "bell-wrap"], ["mat-stroked-button", "", "aria-haspopup", "true", 1, "bell", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "pip", "numeric"], ["role", "dialog", "aria-label", "Alerts", 1, "alerts"], ["mat-stroked-button", "", 3, "click", "disabled"], ["mat-stroked-button", "", 3, "click"], ["mat-flat-button", "", "routerLink", "../products"], [1, "tiles"], [1, "muted"], [1, "alert", 3, "routerLink"], [1, "quiet", "muted"], [1, "alert", 3, "click", "routerLink"], ["fontSet", "material-symbols-outlined", 1, "go"], [1, "tile", "viz"], [1, "tile-head"], [1, "delta"], [1, "figure", "price"], [3, "values"], [1, "figure", "numeric"], [1, "chips"], ["routerLink", "../orders", 1, "chip"], [1, "k"], [1, "numeric"], [1, "chip"], [1, "price"], ["routerLink", "../orders", 1, "chip", "warn"], [1, "chip", "good"], [1, "chip", "bad"], ["routerLink", "../products", 1, "chip"], [1, "board"], [1, "panel", "viz", "wide"], [1, "panel-head"], ["role", "tablist", "aria-label", "Chart range", 1, "segmented"], ["role", "tab", 3, "on"], [3, "points", "format", "detail"], [1, "panel", "viz"], [3, "slices"], ["routerLink", "../products", 1, "link"], [3, "rows", "format"], [1, "panel", "wide"], ["routerLink", "../orders", 1, "link"], [1, "scroll"], [1, "right"], [1, "panel"], [1, "stock"], ["role", "tab", 3, "click"], [1, "order-no"], [1, "numeric", "muted"], [1, "pill"], [1, "right", "numeric"], ["colspan", "6", 1, "muted"], [1, "name"], [1, "left", "numeric"], [1, "tile", "ghost"]], template: function Dashboard_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Overview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "date");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 3)(10, "div", 4)(11, "button", 5);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_11_listener() {
        return ctx.alertsOpen.set(!ctx.alertsOpen());
      });
      \u0275\u0275elementStart(12, "mat-icon", 6);
      \u0275\u0275text(13, "notifications");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Alerts ");
      \u0275\u0275conditionalCreate(15, Dashboard_Conditional_15_Template, 2, 1, "span", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(16, Dashboard_Conditional_16_Template, 4, 1, "div", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 9);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_17_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(18, "mat-icon", 6);
      \u0275\u0275text(19, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Export ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 10);
      \u0275\u0275listener("click", function Dashboard_Template_button_click_21_listener() {
        return ctx.load();
      });
      \u0275\u0275elementStart(22, "mat-icon", 6);
      \u0275\u0275text(23, "refresh");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Refresh ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 11)(26, "mat-icon", 6);
      \u0275\u0275text(27, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " New product ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(29, Dashboard_Conditional_29_Template, 178, 57)(30, Dashboard_Conditional_30_Template, 3, 0, "div", 12)(31, Dashboard_Conditional_31_Template, 2, 0, "p", 13);
    }
    if (rf & 2) {
      let tmp_6_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1("Reading taken ", \u0275\u0275pipeBind2(8, 8, ctx.takenAt(), "d MMM, HH:mm"));
      \u0275\u0275advance(4);
      \u0275\u0275attribute("aria-expanded", ctx.alertsOpen());
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.alerts().length ? 15 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.alertsOpen() ? 16 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !ctx.stats());
      \u0275\u0275advance(5);
      \u0275\u0275classProp("spin", ctx.loading());
      \u0275\u0275advance(7);
      \u0275\u0275conditional((tmp_6_0 = ctx.stats()) ? 29 : ctx.loading() ? 30 : 31, tmp_6_0);
    }
  }, dependencies: [
    RouterLink,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    TrendChart,
    BarList,
    ShareBar,
    SparkLine,
    DatePipe,
    PricePipe
  ], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.spin[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_turn 900ms linear infinite;\n}\n@keyframes _ngcontent-%COMP%_turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bell-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.pip[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  margin-left: 6px;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: var(--mat-sys-error);\n  color: var(--mat-sys-on-error);\n  font-size: 0.625rem;\n  font-weight: 700;\n}\n.alerts[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  z-index: 30;\n  width: 330px;\n  padding: 6px;\n  border-radius: 14px;\n  background: var(--mat-sys-surface-container-high);\n  border: 1px solid var(--Kova-rule);\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);\n}\n.alert[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 20px 1fr 18px;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 10px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n}\n.alert[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container-highest);\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.alert[_ngcontent-%COMP%]   .go[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n  font-size: 17px;\n}\n.alert[_ngcontent-%COMP%]   .critical[_ngcontent-%COMP%] {\n  color: var(--viz-critical, #d03b3b);\n}\n.alert[_ngcontent-%COMP%]   .warning[_ngcontent-%COMP%] {\n  color: var(--viz-warning, #fab219);\n}\n.quiet[_ngcontent-%COMP%] {\n  padding: 14px 10px;\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.tiles[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.tile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.tile-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.figure[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n  line-height: 1;\n}\n.tile[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\n.tile.ghost[_ngcontent-%COMP%] {\n  height: 148px;\n  background: var(--mat-sys-surface-container);\n  animation: _ngcontent-%COMP%_pulse 1.4s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  50% {\n    opacity: 0.55;\n  }\n}\n.delta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 999px;\n  color: var(--viz-good);\n  background: color-mix(in srgb, var(--viz-good) 14%, transparent);\n}\n.delta.down[_ngcontent-%COMP%] {\n  color: var(--viz-critical);\n  background: color-mix(in srgb, var(--viz-critical) 14%, transparent);\n}\n.delta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chips[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-lowest);\n  transition: border-color 160ms ease;\n}\na.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--mat-sys-primary);\n}\n.chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chip[_ngcontent-%COMP%]   .k[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.chip.warn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--viz-warning);\n}\n.chip.good[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--viz-good);\n}\n.chip.bad[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--viz-critical);\n}\n.board[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.panel[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.wide[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n.panel-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.panel-head[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 3px;\n  font-size: 0.75rem;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--mat-sys-primary);\n  white-space: nowrap;\n}\n.segmented[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 3px;\n  border-radius: 999px;\n  flex: none;\n  background: var(--mat-sys-surface-container-high);\n}\n.segmented[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 6px 15px;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.75rem;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n  transition: background 160ms ease, color 160ms ease;\n}\n.segmented[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  background: var(--mat-sys-surface);\n  color: var(--mat-sys-on-surface);\n  font-weight: 600;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 11px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container);\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.order-no[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  font-size: 0.8125rem;\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.open[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-warning) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.done[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-good) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.stop[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-critical) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.stock[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.stock[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n  font-size: 0.875rem;\n}\n.stock[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.name[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.left[_ngcontent-%COMP%] {\n  flex: none;\n  font-size: 0.6875rem;\n  padding: 3px 9px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--viz-warning) 20%, transparent);\n}\n.left.out[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-critical) 22%, transparent);\n}\n@media (max-width: 1199px) {\n  .chips[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 899px) {\n  .tiles[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .board[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n@media (max-width: 599px) {\n  .tiles[_ngcontent-%COMP%], \n   .chips[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .head[_ngcontent-%COMP%] {\n    align-items: start;\n  }\n  .alerts[_ngcontent-%COMP%] {\n    width: min(330px, calc(100vw - 40px));\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{ selector: "Kova-dashboard", imports: [
      RouterLink,
      DatePipe,
      MatButtonModule,
      MatIconModule,
      PricePipe,
      TrendChart,
      BarList,
      ShareBar,
      SparkLine
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Overview</span>
        <h1>Dashboard</h1>
        <small class="muted numeric">Reading taken {{ takenAt() | date:'d MMM, HH:mm' }}</small>
      </div>

      <div class="actions">
        <div class="bell-wrap">
          <button mat-stroked-button class="bell" (click)="alertsOpen.set(!alertsOpen())"
                  [attr.aria-expanded]="alertsOpen()" aria-haspopup="true">
            <mat-icon fontSet="material-symbols-outlined">notifications</mat-icon>
            Alerts
            @if (alerts().length) { <span class="pip numeric">{{ alerts().length }}</span> }
          </button>

          @if (alertsOpen()) {
            <div class="alerts" role="dialog" aria-label="Alerts">
              @for (alert of alerts(); track alert.text) {
                <a class="alert" [routerLink]="alert.link" (click)="alertsOpen.set(false)">
                  <mat-icon fontSet="material-symbols-outlined" [class]="alert.tone">{{ alert.icon }}</mat-icon>
                  <span>{{ alert.text }}</span>
                  <mat-icon fontSet="material-symbols-outlined" class="go">chevron_right</mat-icon>
                </a>
              } @empty {
                <p class="quiet muted">Nothing needs you right now.</p>
              }
            </div>
          }
        </div>

        <button mat-stroked-button (click)="exportCsv()" [disabled]="!stats()">
          <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
          Export
        </button>
        <button mat-stroked-button (click)="load()">
          <mat-icon fontSet="material-symbols-outlined" [class.spin]="loading()">refresh</mat-icon>
          Refresh
        </button>
        <a mat-flat-button routerLink="../products">
          <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
          New product
        </a>
      </div>
    </header>

    @if (stats(); as s) {
      <!-- The four the owner opens the page for. -->
      <div class="tiles">
        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Total sales</span>
            <span class="delta" [class.down]="s.deltas.revenue < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.revenue < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.revenue > 0 ? '+' : '' }}{{ s.deltas.revenue }}%
            </span>
          </div>
          <strong class="figure price">{{ s.revenueTotal |KovaPrice }}</strong>
          <Kova-spark-line [values]="spark(s.daily)" />
          <small class="muted numeric">{{ s.revenueThisMonth |KovaPrice }} this month \xB7 vs previous 30 days</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Total orders</span>
            <span class="delta" [class.down]="s.deltas.orders < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.orders < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.orders > 0 ? '+' : '' }}{{ s.deltas.orders }}%
            </span>
          </div>
          <strong class="figure numeric">{{ s.ordersTotal }}</strong>
          <Kova-spark-line [values]="sparkOrders(s.daily)" />
          <small class="muted numeric">{{ s.ordersPending }} still open \xB7 vs previous 30 days</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Customers</span>
            <span class="delta" [class.down]="s.deltas.customers < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.customers < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.customers > 0 ? '+' : '' }}{{ s.deltas.customers }}%
            </span>
          </div>
          <strong class="figure numeric">{{ s.customersTotal }}</strong>
          <small class="muted numeric">{{ s.customersNew }} ordered this month</small>
        </article>

        <article class="tile viz">
          <div class="tile-head">
            <span class="eyebrow">Average order</span>
            <span class="delta" [class.down]="s.deltas.aov < 0">
              <mat-icon fontSet="material-symbols-outlined">{{ s.deltas.aov < 0 ? 'trending_down' : 'trending_up' }}</mat-icon>
              {{ s.deltas.aov > 0 ? '+' : '' }}{{ s.deltas.aov }}%
            </span>
          </div>
          <strong class="figure price">{{ s.averageOrderValue |KovaPrice }}</strong>
          <small class="muted numeric">across the last 30 days</small>
        </article>
      </div>

      <!-- Today, and the state of the book. -->
      <div class="chips">
        <a class="chip" routerLink="../orders">
          <mat-icon fontSet="material-symbols-outlined">today</mat-icon>
          <span class="k">Today's orders</span>
          <strong class="numeric">{{ s.ordersToday }}</strong>
        </a>
        <div class="chip">
          <mat-icon fontSet="material-symbols-outlined">payments</mat-icon>
          <span class="k">Today's revenue</span>
          <strong class="price">{{ s.revenueToday |KovaPrice }}</strong>
        </div>
        <a class="chip warn" routerLink="../orders">
          <mat-icon fontSet="material-symbols-outlined">pending_actions</mat-icon>
          <span class="k">Pending</span>
          <strong class="numeric">{{ s.ordersPending }}</strong>
        </a>
        <div class="chip good">
          <mat-icon fontSet="material-symbols-outlined">task_alt</mat-icon>
          <span class="k">Completed</span>
          <strong class="numeric">{{ s.ordersCompleted }}</strong>
        </div>
        <div class="chip bad">
          <mat-icon fontSet="material-symbols-outlined">cancel</mat-icon>
          <span class="k">Cancelled</span>
          <strong class="numeric">{{ s.ordersCancelled }}</strong>
        </div>
        <a class="chip" routerLink="../products">
          <mat-icon fontSet="material-symbols-outlined">inventory_2</mat-icon>
          <span class="k">Products</span>
          <strong class="numeric">{{ s.productsTotal }}</strong>
        </a>
      </div>

      <div class="board">
        <section class="panel viz wide">
          <div class="panel-head">
            <div>
              <h2>Revenue trend</h2>
              <small class="muted">{{ rangeNote() }}</small>
            </div>
            <div class="segmented" role="tablist" aria-label="Chart range">
              @for (option of ranges; track option.key) {
                <button role="tab" [class.on]="range() === option.key"
                        [attr.aria-selected]="range() === option.key"
                        (click)="range.set(option.key)">{{ option.label }}</button>
              }
            </div>
          </div>

          <Kova-trend-chart [points]="series()" [format]="short" [detail]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Order status</h2>
              <small class="muted">{{ s.ordersTotal }} orders, all time</small>
            </div>
          </div>
          <Kova-share-bar [slices]="statusSlices()" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Top-selling products</h2>
              <small class="muted">by revenue</small>
            </div>
            <a routerLink="../products" class="link">Manage</a>
          </div>
          <Kova-bar-list [rows]="topRows()" [format]="money" />
        </section>

        <section class="panel viz">
          <div class="panel-head">
            <div>
              <h2>Revenue by occasion</h2>
              <small class="muted">which shelf is carrying the shop</small>
            </div>
          </div>
          <Kova-bar-list [rows]="categoryRows()" [format]="money" />
        </section>

        <section class="panel wide">
          <div class="panel-head">
            <div>
              <h2>Recent orders</h2>
              <small class="muted">the last {{ s.recentOrders.length }} to come in</small>
            </div>
            <a routerLink="../orders" class="link">All orders</a>
          </div>

          <div class="scroll">
            <table>
              <thead>
                <tr>
                  <th>Order</th><th>Placed</th><th>Items</th>
                  <th>Status</th><th>Payment</th><th class="right">Total</th>
                </tr>
              </thead>
              <tbody>
                @for (order of s.recentOrders; track order.id) {
                  <tr>
                    <td class="order-no">{{ order.orderNumber }}</td>
                    <td class="numeric muted">{{ order.createdAt | date:'d MMM, HH:mm' }}</td>
                    <td class="numeric">{{ order.itemCount }}</td>
                    <td><span class="pill" [class]="tone(order.status)">{{ label(order.status) }}</span></td>
                    <td class="numeric muted">{{ order.paymentStatus }}</td>
                    <td class="right numeric">{{ order.total |KovaPrice }}</td>
                  </tr>
                } @empty {
                  <tr><td colspan="6" class="muted">No orders yet.</td></tr>
                }
              </tbody>
            </table>
          </div>
        </section>

        <section class="panel">
          <div class="panel-head">
            <div>
              <h2>Low on stock</h2>
              <small class="muted">{{ s.lowStockCount }} below twelve</small>
            </div>
            <a routerLink="../products" class="link">Restock</a>
          </div>

          <ul class="stock">
            @for (item of s.lowStock; track item.productId) {
              <li>
                <span class="name">{{ item.name }}</span>
                <span class="left numeric" [class.out]="item.stock === 0">
                  {{ item.stock === 0 ? 'Sold out' : item.stock + ' left' }}
                </span>
              </li>
            } @empty {
              <li class="muted">Every shelf is stocked.</li>
            }
          </ul>
        </section>
      </div>
    } @else if (loading()) {
      <div class="tiles">
        @for (slot of skeleton; track slot) { <div class="tile ghost"></div> }
      </div>
    } @else {
      <p class="muted">The dashboard could not be loaded. Try refreshing.</p>
    }
  `, styles: ["/* angular:styles/component:css;3aa9f0ca45da09aa515283c0c56299c3e921234c9059d423cd798f6f90084399;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/dashboard.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.actions mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.spin {\n  animation: turn 900ms linear infinite;\n}\n@keyframes turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.bell-wrap {\n  position: relative;\n}\n.pip {\n  display: inline-grid;\n  place-items: center;\n  min-width: 18px;\n  height: 18px;\n  margin-left: 6px;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: var(--mat-sys-error);\n  color: var(--mat-sys-on-error);\n  font-size: 0.625rem;\n  font-weight: 700;\n}\n.alerts {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  z-index: 30;\n  width: 330px;\n  padding: 6px;\n  border-radius: 14px;\n  background: var(--mat-sys-surface-container-high);\n  border: 1px solid var(--Kova-rule);\n  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.28);\n}\n.alert {\n  display: grid;\n  grid-template-columns: 20px 1fr 18px;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 10px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n}\n.alert:hover {\n  background: var(--mat-sys-surface-container-highest);\n}\n.alert mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.alert .go {\n  color: var(--mat-sys-on-surface-variant);\n  font-size: 17px;\n}\n.alert .critical {\n  color: var(--viz-critical, #d03b3b);\n}\n.alert .warning {\n  color: var(--viz-warning, #fab219);\n}\n.quiet {\n  padding: 14px 10px;\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.tiles {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 16px;\n  margin-bottom: 16px;\n}\n.tile {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.tile-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.figure {\n  font-size: 1.75rem;\n  font-weight: 600;\n  line-height: 1;\n}\n.tile small {\n  font-size: 0.6875rem;\n}\n.tile.ghost {\n  height: 148px;\n  background: var(--mat-sys-surface-container);\n  animation: pulse 1.4s ease-in-out infinite;\n}\n@keyframes pulse {\n  50% {\n    opacity: 0.55;\n  }\n}\n.delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 999px;\n  color: var(--viz-good);\n  background: color-mix(in srgb, var(--viz-good) 14%, transparent);\n}\n.delta.down {\n  color: var(--viz-critical);\n  background: color-mix(in srgb, var(--viz-critical) 14%, transparent);\n}\n.delta mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.chips {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n  margin-bottom: 30px;\n}\n.chip {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-lowest);\n  transition: border-color 160ms ease;\n}\na.chip:hover {\n  border-color: var(--mat-sys-primary);\n}\n.chip mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chip .k {\n  font-size: 0.6875rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chip strong {\n  font-size: 1.125rem;\n  font-weight: 600;\n}\n.chip.warn mat-icon {\n  color: var(--viz-warning);\n}\n.chip.good mat-icon {\n  color: var(--viz-good);\n}\n.chip.bad mat-icon {\n  color: var(--viz-critical);\n}\n.board {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.panel {\n  padding: 22px;\n  border-radius: 16px;\n  min-width: 0;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.wide {\n  grid-column: 1 / -1;\n}\n.panel-head {\n  display: flex;\n  align-items: start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 22px;\n}\n.panel h2 {\n  font-size: 1.0625rem;\n}\n.panel-head small {\n  display: block;\n  margin-top: 3px;\n  font-size: 0.75rem;\n}\n.link {\n  font-size: 0.8125rem;\n  color: var(--mat-sys-primary);\n  white-space: nowrap;\n}\n.segmented {\n  display: inline-flex;\n  padding: 3px;\n  border-radius: 999px;\n  flex: none;\n  background: var(--mat-sys-surface-container-high);\n}\n.segmented button {\n  padding: 6px 15px;\n  border: 0;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.75rem;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n  transition: background 160ms ease, color 160ms ease;\n}\n.segmented button.on {\n  background: var(--mat-sys-surface);\n  color: var(--mat-sys-on-surface);\n  font-weight: 600;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.16);\n}\n.scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth,\ntd {\n  text-align: left;\n  padding: 11px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ntbody tr:last-child td {\n  border-bottom: 0;\n}\ntbody tr:hover {\n  background: var(--mat-sys-surface-container);\n}\n.right {\n  text-align: right;\n}\n.order-no {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  font-size: 0.8125rem;\n}\n.pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.open {\n  background: color-mix(in srgb, var(--viz-warning) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.done {\n  background: color-mix(in srgb, var(--viz-good) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.stop {\n  background: color-mix(in srgb, var(--viz-critical) 20%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.stock {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n}\n.stock li {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n  font-size: 0.875rem;\n}\n.stock li:last-child {\n  border-bottom: 0;\n}\n.name {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.left {\n  flex: none;\n  font-size: 0.6875rem;\n  padding: 3px 9px;\n  border-radius: 999px;\n  background: color-mix(in srgb, var(--viz-warning) 20%, transparent);\n}\n.left.out {\n  background: color-mix(in srgb, var(--viz-critical) 22%, transparent);\n}\n@media (max-width: 1199px) {\n  .chips {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n@media (max-width: 899px) {\n  .tiles {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .board {\n    grid-template-columns: 1fr;\n  }\n  .wide {\n    grid-column: auto;\n  }\n}\n@media (max-width: 599px) {\n  .tiles,\n  .chips {\n    grid-template-columns: 1fr;\n  }\n  .head {\n    align-items: start;\n  }\n  .alerts {\n    width: min(330px, calc(100vw - 40px));\n  }\n}\n/*# sourceMappingURL=dashboard.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/features/admin/dashboard.ts", lineNumber: 434 });
})();
export {
  Dashboard
};
//# sourceMappingURL=chunk-A3WCL5H2.js.map
