import {
  RouterLink
} from "./chunk-N55HBYBE.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JAMDIHHE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YKSZHAQM.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-H2OO3OVH.js";

// src/app/shared/components/empty-state.ts
function EmptyState_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r0.actionLink());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.actionLabel());
  }
}
var EmptyState = class _EmptyState {
  icon = input("inventory_2", ...ngDevMode ? [{ debugName: "icon" }] : []);
  heading = input.required(...ngDevMode ? [{ debugName: "heading" }] : []);
  body = input("", ...ngDevMode ? [{ debugName: "body" }] : []);
  actionLabel = input(null, ...ngDevMode ? [{ debugName: "actionLabel" }] : []);
  actionLink = input("/shop", ...ngDevMode ? [{ debugName: "actionLink" }] : []);
  static \u0275fac = function EmptyState_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EmptyState)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyState, selectors: [["Kova-empty-state"]], inputs: { icon: [1, "icon"], heading: [1, "heading"], body: [1, "body"], actionLabel: [1, "actionLabel"], actionLink: [1, "actionLink"] }, decls: 8, vars: 4, consts: [[1, "empty"], ["fontSet", "material-symbols-outlined"], [1, "muted"], ["mat-flat-button", "", 3, "routerLink"]], template: function EmptyState_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "h3");
      \u0275\u0275text(4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 2);
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(7, EmptyState_Conditional_7_Template, 2, 2, "a", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.icon());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.heading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.body());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.actionLabel() ? 7 : -1);
    }
  }, dependencies: [RouterLink, MatIconModule, MatIcon, MatButtonModule, MatButton], styles: ["\n\n.empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 72px 24px;\n  text-align: center;\n  border: 1px dashed var(--Kova-rule);\n  border-radius: 16px;\n}\nmat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: var(--mat-sys-on-surface-variant);\n  margin-bottom: 4px;\n}\np[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  max-width: 44ch;\n}\n/*# sourceMappingURL=empty-state.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EmptyState, [{
    type: Component,
    args: [{ selector: "Kova-empty-state", imports: [RouterLink, MatIconModule, MatButtonModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="empty">
      <mat-icon fontSet="material-symbols-outlined">{{ icon() }}</mat-icon>
      <h3>{{ heading() }}</h3>
      <p class="muted">{{ body() }}</p>
      @if (actionLabel()) {
        <a mat-flat-button [routerLink]="actionLink()">{{ actionLabel() }}</a>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;e93dc6e634461df88be12f21a733fd7c84c3955af930c724e1a87eee60356e62;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/empty-state.ts */\n.empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 72px 24px;\n  text-align: center;\n  border: 1px dashed var(--Kova-rule);\n  border-radius: 16px;\n}\nmat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: var(--mat-sys-on-surface-variant);\n  margin-bottom: 4px;\n}\np {\n  margin: 0 0 12px;\n  max-width: 44ch;\n}\n/*# sourceMappingURL=empty-state.css.map */\n"] }]
  }], null, { icon: [{ type: Input, args: [{ isSignal: true, alias: "icon", required: false }] }], heading: [{ type: Input, args: [{ isSignal: true, alias: "heading", required: true }] }], body: [{ type: Input, args: [{ isSignal: true, alias: "body", required: false }] }], actionLabel: [{ type: Input, args: [{ isSignal: true, alias: "actionLabel", required: false }] }], actionLink: [{ type: Input, args: [{ isSignal: true, alias: "actionLink", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyState, { className: "EmptyState", filePath: "src/app/shared/components/empty-state.ts", lineNumber: 34 });
})();

export {
  EmptyState
};
//# sourceMappingURL=chunk-JV4ICS3X.js.map
