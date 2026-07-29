import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
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

// src/app/features/admin/charts/trend-chart.ts
var _forTrack0 = ($index, $item) => $item.label;
function TrendChart_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 3);
  }
  if (rf & 2) {
    const y_r1 = ctx.$implicit;
    \u0275\u0275attribute("y1", y_r1)("y2", y_r1);
  }
}
function TrendChart_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "line", 6);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("x1", ctx_r1.xAt(ctx_r1.hover()))("x2", ctx_r1.xAt(ctx_r1.hover()));
  }
}
function TrendChart_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "span", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.xAt(ctx_r1.hover()), "%")("top", ctx_r1.yAt(ctx_r1.hover()), "%");
  }
}
function TrendChart_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 15)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const point_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", ctx_r1.xAt(ctx_r1.hover()), "%");
    \u0275\u0275classProp("flip", ctx_r1.hover() > ctx_r1.points().length / 2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.detail()(point_r3.revenue));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", point_r3.orders, " order", point_r3.orders === 1 ? "" : "s");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(point_r3.label);
  }
}
function TrendChart_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const point_r4 = ctx.$implicit;
    const \u0275$index_42_r5 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("dim", !ctx_r1.showTick(\u0275$index_42_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.showTick(\u0275$index_42_r5) ? point_r4.label : "");
  }
}
var TrendChart = class _TrendChart {
  points = input.required(...ngDevMode ? [{ debugName: "points" }] : []);
  /** Axis ticks — short, because they sit in a 60px gutter. */
  format = input((value) => `${value}`, ...ngDevMode ? [{ debugName: "format" }] : []);
  /** The tooltip, where there is room for the exact figure. */
  detail = input((value) => `${value}`, ...ngDevMode ? [{ debugName: "detail" }] : []);
  gridLines = [0, 25, 50, 75, 100];
  hover = signal(-1, ...ngDevMode ? [{ debugName: "hover" }] : []);
  /** Headroom above the tallest bar so the line never touches the ceiling. */
  peak = computed(() => {
    const highest = Math.max(0, ...this.points().map((point) => point.revenue));
    return highest === 0 ? 1 : highest * 1.08;
  }, ...ngDevMode ? [{ debugName: "peak" }] : []);
  reading = computed(() => this.points()[this.hover()] ?? null, ...ngDevMode ? [{ debugName: "reading" }] : []);
  linePath = computed(() => this.points().map((point, index) => `${index === 0 ? "M" : "L"}${this.xAt(index)} ${this.yAt(index)}`).join(" "), ...ngDevMode ? [{ debugName: "linePath" }] : []);
  areaPath = computed(() => {
    const points = this.points();
    if (points.length === 0)
      return "";
    return `${this.linePath()} L${this.xAt(points.length - 1)} 100 L${this.xAt(0)} 100 Z`;
  }, ...ngDevMode ? [{ debugName: "areaPath" }] : []);
  summary = computed(() => this.points().map((point) => `${point.label}: ${this.format()(point.revenue)}`).join(", "), ...ngDevMode ? [{ debugName: "summary" }] : []);
  xAt(index) {
    const span = this.points().length - 1;
    return span <= 0 ? 50 : index / span * 100;
  }
  yAt(index) {
    const point = this.points()[index];
    return point ? 100 - point.revenue / this.peak() * 100 : 100;
  }
  /** Thin the x labels so they never collide, keeping first and last. */
  showTick(index) {
    const total = this.points().length;
    const every = total > 12 ? 3 : total > 7 ? 2 : 1;
    return index === 0 || index === total - 1 || index % every === 0;
  }
  track(event) {
    const box = event.currentTarget.getBoundingClientRect();
    const ratio = (event.clientX - box.left) / box.width;
    const nearest = Math.round(ratio * (this.points().length - 1));
    this.hover.set(Math.min(this.points().length - 1, Math.max(0, nearest)));
  }
  static \u0275fac = function TrendChart_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TrendChart)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TrendChart, selectors: [["Kova-trend-chart"]], inputs: { points: [1, "points"], format: [1, "format"], detail: [1, "detail"] }, decls: 18, vars: 12, consts: [[1, "wrap"], ["role", "img", 1, "plot", 3, "pointermove", "pointerleave"], ["viewBox", "0 0 100 100", "preserveAspectRatio", "none", "aria-hidden", "true"], ["x1", "0", "x2", "100", "vector-effect", "non-scaling-stroke", 1, "grid"], [1, "area"], ["vector-effect", "non-scaling-stroke", 1, "line"], ["y1", "0", "y2", "100", "vector-effect", "non-scaling-stroke", 1, "cross"], [1, "dot", "last"], [1, "dot", "on", 3, "left", "top"], [1, "tip", 3, "left", "flip"], [1, "peak-tick"], [1, "zero-tick"], [1, "ticks"], [3, "dim"], [1, "dot", "on"], [1, "tip"]], template: function TrendChart_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "figure", 0)(1, "div", 1);
      \u0275\u0275domListener("pointermove", function TrendChart_Template_div_pointermove_1_listener($event) {
        return ctx.track($event);
      })("pointerleave", function TrendChart_Template_div_pointerleave_1_listener() {
        return ctx.hover.set(-1);
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(2, "svg", 2);
      \u0275\u0275repeaterCreate(3, TrendChart_For_4_Template, 1, 2, ":svg:line", 3, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElement(5, "path", 4)(6, "path", 5);
      \u0275\u0275conditionalCreate(7, TrendChart_Conditional_7_Template, 1, 2, ":svg:line", 6);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElement(8, "span", 7);
      \u0275\u0275conditionalCreate(9, TrendChart_Conditional_9_Template, 1, 4, "span", 8);
      \u0275\u0275conditionalCreate(10, TrendChart_Conditional_10_Template, 7, 8, "div", 9);
      \u0275\u0275domElementStart(11, "span", 10);
      \u0275\u0275text(12);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "span", 11);
      \u0275\u0275text(14);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(15, "figcaption", 12);
      \u0275\u0275repeaterCreate(16, TrendChart_For_17_Template, 2, 3, "span", 13, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      let tmp_8_0;
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.summary());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.gridLines);
      \u0275\u0275advance(2);
      \u0275\u0275attribute("d", ctx.areaPath());
      \u0275\u0275advance();
      \u0275\u0275attribute("d", ctx.linePath());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hover() > -1 ? 7 : -1);
      \u0275\u0275advance();
      \u0275\u0275styleProp("left", ctx.xAt(ctx.points().length - 1), "%")("top", ctx.yAt(ctx.points().length - 1), "%");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.hover() > -1 ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_8_0 = ctx.reading()) ? 10 : -1, tmp_8_0);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.format()(ctx.peak()));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.format()(0));
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.points());
    }
  }, styles: ["\n\n.wrap[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.plot[_ngcontent-%COMP%] {\n  position: relative;\n  height: 236px;\n  touch-action: none;\n}\nsvg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.grid[_ngcontent-%COMP%] {\n  stroke: var(--viz-grid);\n  stroke-width: 1;\n}\n.area[_ngcontent-%COMP%] {\n  fill: var(--viz-fill);\n}\n.line[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--viz-series);\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n.cross[_ngcontent-%COMP%] {\n  stroke: var(--viz-axis);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.dot[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  background: var(--viz-series);\n  box-shadow: 0 0 0 2px var(--viz-surface);\n}\n.dot.on[_ngcontent-%COMP%] {\n  width: 11px;\n  height: 11px;\n}\n.tip[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8px;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  padding: 8px 11px;\n  border-radius: 10px;\n  white-space: nowrap;\n  transform: translateX(10px);\n  background: var(--mat-sys-inverse-surface);\n  color: var(--mat-sys-inverse-on-surface);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);\n}\n.tip.flip[_ngcontent-%COMP%] {\n  transform: translateX(calc(-100% - 10px));\n}\n.tip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-variant-numeric: tabular-nums;\n}\n.tip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  opacity: 0.85;\n}\n.tip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  opacity: 0.6;\n}\n.peak-tick[_ngcontent-%COMP%], \n.zero-tick[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n  background: var(--viz-surface);\n  padding-left: 6px;\n}\n.peak-tick[_ngcontent-%COMP%] {\n  top: -7px;\n}\n.zero-tick[_ngcontent-%COMP%] {\n  bottom: -7px;\n}\n.ticks[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n}\n.ticks[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: center;\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=trend-chart.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TrendChart, [{
    type: Component,
    args: [{ selector: "Kova-trend-chart", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <figure class="wrap">
      <div class="plot"
           (pointermove)="track($event)" (pointerleave)="hover.set(-1)"
           role="img" [attr.aria-label]="summary()">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          @for (y of gridLines; track y) {
            <line class="grid" x1="0" [attr.y1]="y" x2="100" [attr.y2]="y" vector-effect="non-scaling-stroke" />
          }
          <path class="area" [attr.d]="areaPath()" />
          <path class="line" [attr.d]="linePath()" vector-effect="non-scaling-stroke" />
          @if (hover() > -1) {
            <line class="cross" [attr.x1]="xAt(hover())" y1="0" [attr.x2]="xAt(hover())" y2="100"
                  vector-effect="non-scaling-stroke" />
          }
        </svg>

        <!-- Markers live in HTML: a circle inside a stretched SVG turns oval. -->
        <span class="dot last" [style.left.%]="xAt(points().length - 1)"
              [style.top.%]="yAt(points().length - 1)"></span>
        @if (hover() > -1) {
          <span class="dot on" [style.left.%]="xAt(hover())" [style.top.%]="yAt(hover())"></span>
        }

        @if (reading(); as point) {
          <div class="tip" [style.left.%]="xAt(hover())" [class.flip]="hover() > points().length / 2">
            <strong>{{ detail()(point.revenue) }}</strong>
            <span>{{ point.orders }} order{{ point.orders === 1 ? '' : 's' }}</span>
            <small>{{ point.label }}</small>
          </div>
        }

        <span class="peak-tick">{{ format()(peak()) }}</span>
        <span class="zero-tick">{{ format()(0) }}</span>
      </div>

      <figcaption class="ticks">
        @for (point of points(); track point.label; let i = $index) {
          <span [class.dim]="!showTick(i)">{{ showTick(i) ? point.label : '' }}</span>
        }
      </figcaption>
    </figure>
  `, styles: ["/* angular:styles/component:css;a41e1c874396bcf2a0f1be65f7b5860e99e0aa5a8dec765abc922adee13ce52d;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/charts/trend-chart.ts */\n.wrap {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.plot {\n  position: relative;\n  height: 236px;\n  touch-action: none;\n}\nsvg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.grid {\n  stroke: var(--viz-grid);\n  stroke-width: 1;\n}\n.area {\n  fill: var(--viz-fill);\n}\n.line {\n  fill: none;\n  stroke: var(--viz-series);\n  stroke-width: 2;\n  stroke-linejoin: round;\n  stroke-linecap: round;\n}\n.cross {\n  stroke: var(--viz-axis);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n.dot {\n  position: absolute;\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  pointer-events: none;\n  background: var(--viz-series);\n  box-shadow: 0 0 0 2px var(--viz-surface);\n}\n.dot.on {\n  width: 11px;\n  height: 11px;\n}\n.tip {\n  position: absolute;\n  top: 8px;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n  padding: 8px 11px;\n  border-radius: 10px;\n  white-space: nowrap;\n  transform: translateX(10px);\n  background: var(--mat-sys-inverse-surface);\n  color: var(--mat-sys-inverse-on-surface);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.22);\n}\n.tip.flip {\n  transform: translateX(calc(-100% - 10px));\n}\n.tip strong {\n  font-size: 0.875rem;\n  font-variant-numeric: tabular-nums;\n}\n.tip span {\n  font-size: 0.75rem;\n  opacity: 0.85;\n}\n.tip small {\n  font-size: 0.6875rem;\n  opacity: 0.6;\n}\n.peak-tick,\n.zero-tick {\n  position: absolute;\n  right: 0;\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n  background: var(--viz-surface);\n  padding-left: 6px;\n}\n.peak-tick {\n  top: -7px;\n}\n.zero-tick {\n  bottom: -7px;\n}\n.ticks {\n  display: flex;\n  margin: 0;\n}\n.ticks span {\n  flex: 1;\n  text-align: center;\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  overflow: hidden;\n}\n/*# sourceMappingURL=trend-chart.css.map */\n"] }]
  }], null, { points: [{ type: Input, args: [{ isSignal: true, alias: "points", required: true }] }], format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }], detail: [{ type: Input, args: [{ isSignal: true, alias: "detail", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TrendChart, { className: "TrendChart", filePath: "src/app/features/admin/charts/trend-chart.ts", lineNumber: 107 });
})();

// src/app/features/admin/charts/bar-list.ts
var _forTrack02 = ($index, $item) => $item.label;
function BarList_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "li", 3);
    \u0275\u0275domListener("pointerenter", function BarList_For_2_Template_li_pointerenter_0_listener() {
      const \u0275$index_3_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hover.set(\u0275$index_3_r2));
    });
    \u0275\u0275domElementStart(1, "div", 4)(2, "span", 5);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span", 6);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "div", 7);
    \u0275\u0275domElement(7, "div", 8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "div", 9)(9, "small", 10);
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "small", 11);
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const \u0275$index_3_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r2.hover() === \u0275$index_3_r2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.format()(row_r4.value));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.width(row_r4.value), "%");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.note);
    \u0275\u0275advance();
    \u0275\u0275classProp("lit", ctx_r2.hover() === \u0275$index_3_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.share(row_r4.value), "% of the total");
  }
}
function BarList_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 2);
    \u0275\u0275text(1, "Nothing to show for this period.");
    \u0275\u0275domElementEnd();
  }
}
var BarList = class _BarList {
  rows = input.required(...ngDevMode ? [{ debugName: "rows" }] : []);
  format = input((value) => `${value}`, ...ngDevMode ? [{ debugName: "format" }] : []);
  hover = signal(-1, ...ngDevMode ? [{ debugName: "hover" }] : []);
  peak = computed(() => Math.max(1, ...this.rows().map((row) => row.value)), ...ngDevMode ? [{ debugName: "peak" }] : []);
  total = computed(() => this.rows().reduce((sum, row) => sum + row.value, 0), ...ngDevMode ? [{ debugName: "total" }] : []);
  width(value) {
    return Math.max(1.5, value / this.peak() * 100);
  }
  share(value) {
    const total = this.total();
    return total === 0 ? "0" : (value / total * 100).toFixed(1);
  }
  static \u0275fac = function BarList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BarList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BarList, selectors: [["Kova-bar-list"]], inputs: { rows: [1, "rows"], format: [1, "format"] }, decls: 4, vars: 1, consts: [[1, "rows", 3, "pointerleave"], [3, "on"], [1, "none"], [3, "pointerenter"], [1, "head"], [1, "name"], [1, "value"], [1, "track"], [1, "fill"], [1, "foot"], [1, "note"], [1, "share"]], template: function BarList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "ul", 0);
      \u0275\u0275domListener("pointerleave", function BarList_Template_ul_pointerleave_0_listener() {
        return ctx.hover.set(-1);
      });
      \u0275\u0275repeaterCreate(1, BarList_For_2_Template, 13, 10, "li", 1, _forTrack02, false, BarList_ForEmpty_3_Template, 2, 0, "li", 2);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.rows());
    }
  }, styles: ["\n\n.rows[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.head[_ngcontent-%COMP%], \n.foot[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.track[_ngcontent-%COMP%] {\n  height: 10px;\n  margin: 7px 0 5px;\n  border-radius: 5px;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--viz-axis) 35%, transparent);\n}\n.fill[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 4px;\n  border-radius: 0 4px 4px 0;\n  background: var(--viz-series);\n  transition: width 420ms cubic-bezier(0.2, 0, 0.1, 1), filter 160ms ease;\n}\nli.on[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  filter: brightness(1.12);\n}\n.note[_ngcontent-%COMP%], \n.share[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n}\n.share[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 140ms ease;\n}\n.share.lit[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.none[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--viz-ink-2);\n}\n/*# sourceMappingURL=bar-list.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BarList, [{
    type: Component,
    args: [{ selector: "Kova-bar-list", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <ul class="rows" (pointerleave)="hover.set(-1)">
      @for (row of rows(); track row.label; let i = $index) {
        <li (pointerenter)="hover.set(i)" [class.on]="hover() === i">
          <div class="head">
            <span class="name">{{ row.label }}</span>
            <span class="value">{{ format()(row.value) }}</span>
          </div>

          <div class="track">
            <div class="fill" [style.width.%]="width(row.value)"></div>
          </div>

          <div class="foot">
            <small class="note">{{ row.note }}</small>
            <small class="share" [class.lit]="hover() === i">{{ share(row.value) }}% of the total</small>
          </div>
        </li>
      } @empty {
        <li class="none">Nothing to show for this period.</li>
      }
    </ul>
  `, styles: ["/* angular:styles/component:css;961d643203659cb817cbdb38e53c8d359c6157add856babb1126f439d7a8ff53;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/charts/bar-list.ts */\n.rows {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.head,\n.foot {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.name {\n  font-size: 0.875rem;\n}\n.value {\n  font-size: 0.875rem;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n.track {\n  height: 10px;\n  margin: 7px 0 5px;\n  border-radius: 5px;\n  overflow: hidden;\n  background: color-mix(in srgb, var(--viz-axis) 35%, transparent);\n}\n.fill {\n  height: 100%;\n  min-width: 4px;\n  border-radius: 0 4px 4px 0;\n  background: var(--viz-series);\n  transition: width 420ms cubic-bezier(0.2, 0, 0.1, 1), filter 160ms ease;\n}\nli.on .fill {\n  filter: brightness(1.12);\n}\n.note,\n.share {\n  font-size: 0.6875rem;\n  color: var(--viz-ink-2);\n  font-variant-numeric: tabular-nums;\n}\n.share {\n  opacity: 0;\n  transition: opacity 140ms ease;\n}\n.share.lit {\n  opacity: 1;\n}\n.none {\n  font-size: 0.875rem;\n  color: var(--viz-ink-2);\n}\n/*# sourceMappingURL=bar-list.css.map */\n"] }]
  }], null, { rows: [{ type: Input, args: [{ isSignal: true, alias: "rows", required: true }] }], format: [{ type: Input, args: [{ isSignal: true, alias: "format", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BarList, { className: "BarList", filePath: "src/app/features/admin/charts/bar-list.ts", lineNumber: 68 });
})();

export {
  TrendChart,
  BarList
};
//# sourceMappingURL=chunk-V4TILS6J.js.map
