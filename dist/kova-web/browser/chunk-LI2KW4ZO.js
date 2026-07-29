import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵtext
} from "./chunk-H2OO3OVH.js";

// src/app/shared/components/brand-logo.ts
function BrandLogo_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 13);
    \u0275\u0275text(1, "Luxury Gift Curations");
    \u0275\u0275domElementEnd();
  }
}
var seq = 0;
var BrandLogo = class _BrandLogo {
  size = input("sm", ...ngDevMode ? [{ debugName: "size" }] : []);
  tagline = input(false, ...ngDevMode ? [{ debugName: "tagline" }] : []);
  gid = `Kova-foil-${seq += 1}`;
  static \u0275fac = function BrandLogo_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrandLogo)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BrandLogo, selectors: [["Kova-brand-logo"]], inputs: { size: [1, "size"], tagline: [1, "tagline"] }, decls: 16, vars: 13, consts: [[1, "logo"], ["viewBox", "0 0 48 48", "aria-hidden", "true", "focusable", "false", 1, "mark"], ["x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0"], ["offset", "0.45"], ["offset", "1"], ["x", "1.5", "y", "1.5", "width", "45", "height", "45", "rx", "12", "fill", "none", "stroke-width", "1.6", "stroke-opacity", "0.55"], ["x", "12", "y", "21", "width", "24", "height", "15", "rx", "2", "fill", "none", "stroke-width", "2"], ["x", "10", "y", "16", "width", "28", "height", "6", "rx", "1.6", "fill-opacity", "0.22", "stroke-width", "2"], ["d", "M24 16v20", "stroke-width", "2.6"], ["d", "M24 16c-4-1-6-4-4.4-5.8C21 8.6 23.4 11 24 16c.6-5 3-7.4 4.4-5.8C30 12 28 15 24 16Z", "fill-opacity", "0.7"], [1, "words"], [1, "wordmark"], [1, "tag"]], template: function BrandLogo_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "span", 0);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(1, "svg", 1)(2, "defs")(3, "linearGradient", 2);
      \u0275\u0275domElement(4, "stop", 3)(5, "stop", 4)(6, "stop", 5);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(7, "rect", 6)(8, "rect", 7)(9, "rect", 8)(10, "path", 9)(11, "path", 10);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(12, "span", 11)(13, "span", 12);
      \u0275\u0275text(14, "Anuvesha & Co.");
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(15, BrandLogo_Conditional_15_Template, 2, 0, "span", 13);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("lg", ctx.size() === "lg");
      \u0275\u0275advance(3);
      \u0275\u0275attribute("id", ctx.gid);
      \u0275\u0275advance();
      \u0275\u0275attribute("stop-color", "var(--Kova-gold-soft)");
      \u0275\u0275advance();
      \u0275\u0275attribute("stop-color", "var(--Kova-gold)");
      \u0275\u0275advance();
      \u0275\u0275attribute("stop-color", "var(--Kova-gold-deep)");
      \u0275\u0275advance();
      \u0275\u0275attribute("stroke", "url(#" + ctx.gid + ")");
      \u0275\u0275advance();
      \u0275\u0275attribute("stroke", "url(#" + ctx.gid + ")");
      \u0275\u0275advance();
      \u0275\u0275attribute("fill", "url(#" + ctx.gid + ")")("stroke", "url(#" + ctx.gid + ")");
      \u0275\u0275advance();
      \u0275\u0275attribute("stroke", "url(#" + ctx.gid + ")");
      \u0275\u0275advance();
      \u0275\u0275attribute("fill", "url(#" + ctx.gid + ")");
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.tagline() ? 15 : -1);
    }
  }, styles: ['\n\n.logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.mark[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  flex: none;\n}\n.words[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.wordmark[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-weight: 600;\n  font-size: 1.3125rem;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  background: var(--Kova-foil);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.tag[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.5rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--mat-sys-on-surface-variant);\n  margin-top: 4px;\n}\n.lg[_ngcontent-%COMP%]   .mark[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n}\n.lg[_ngcontent-%COMP%]   .wordmark[_ngcontent-%COMP%] {\n  font-size: 1.875rem;\n}\n.lg[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  font-size: 0.5625rem;\n  letter-spacing: 0.24em;\n}\n/*# sourceMappingURL=brand-logo.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrandLogo, [{
    type: Component,
    args: [{ selector: "Kova-brand-logo", changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <span class="logo" [class.lg]="size() === 'lg'">
      <svg class="mark" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient [attr.id]="gid" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" [attr.stop-color]="'var(--Kova-gold-soft)'" />
            <stop offset="0.45" [attr.stop-color]="'var(--Kova-gold)'" />
            <stop offset="1" [attr.stop-color]="'var(--Kova-gold-deep)'" />
          </linearGradient>
        </defs>
        <rect x="1.5" y="1.5" width="45" height="45" rx="12" fill="none"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="1.6" stroke-opacity="0.55" />
        <rect x="12" y="21" width="24" height="15" rx="2" fill="none"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="2" />
        <rect x="10" y="16" width="28" height="6" rx="1.6"
              [attr.fill]="'url(#' + gid + ')'" fill-opacity="0.22"
              [attr.stroke]="'url(#' + gid + ')'" stroke-width="2" />
        <path d="M24 16v20" [attr.stroke]="'url(#' + gid + ')'" stroke-width="2.6" />
        <path d="M24 16c-4-1-6-4-4.4-5.8C21 8.6 23.4 11 24 16c.6-5 3-7.4 4.4-5.8C30 12 28 15 24 16Z"
              [attr.fill]="'url(#' + gid + ')'" fill-opacity="0.7" />
      </svg>

      <span class="words">
        <span class="wordmark">Anuvesha &amp; Co.</span>
        @if (tagline()) { <span class="tag">Luxury Gift Curations</span> }
      </span>
    </span>
  `, styles: ['/* angular:styles/component:css;7a356a987a02732a245a289ed31f3cc738ef680e23e12823c3d503cd39668405;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/brand-logo.ts */\n.logo {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n}\n.mark {\n  width: 30px;\n  height: 30px;\n  flex: none;\n}\n.words {\n  display: flex;\n  flex-direction: column;\n  line-height: 1;\n}\n.wordmark {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-weight: 600;\n  font-size: 1.3125rem;\n  letter-spacing: 0.01em;\n  white-space: nowrap;\n  background: var(--Kova-foil);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.tag {\n  font-family: var(--Kova-mono);\n  font-size: 0.5rem;\n  letter-spacing: 0.2em;\n  text-transform: uppercase;\n  color: var(--mat-sys-on-surface-variant);\n  margin-top: 4px;\n}\n.lg .mark {\n  width: 44px;\n  height: 44px;\n}\n.lg .wordmark {\n  font-size: 1.875rem;\n}\n.lg .tag {\n  font-size: 0.5625rem;\n  letter-spacing: 0.24em;\n}\n/*# sourceMappingURL=brand-logo.css.map */\n'] }]
  }], null, { size: [{ type: Input, args: [{ isSignal: true, alias: "size", required: false }] }], tagline: [{ type: Input, args: [{ isSignal: true, alias: "tagline", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BrandLogo, { className: "BrandLogo", filePath: "src/app/shared/components/brand-logo.ts", lineNumber: 66 });
})();

export {
  BrandLogo
};
//# sourceMappingURL=chunk-LI2KW4ZO.js.map
