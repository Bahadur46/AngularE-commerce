import {
  BrandLogo
} from "./chunk-LI2KW4ZO.js";
import {
  CATALOGUE,
  CATALOGUE_CATEGORIES,
  CATALOGUE_FEATURED,
  detailFor
} from "./chunk-LX66BOLT.js";
import {
  ProductCard
} from "./chunk-ME7HFTVM.js";
import "./chunk-UKKEYK4U.js";
import {
  art
} from "./chunk-LMPLV25C.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
import "./chunk-ZFMJUGTV.js";
import "./chunk-TRCVJC4T.js";
import "./chunk-DYU4NP57.js";
import {
  RouterLink
} from "./chunk-N55HBYBE.js";
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
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  Input,
  ViewChild,
  computed,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuerySignal
} from "./chunk-H2OO3OVH.js";

// src/app/shared/components/count-up.ts
var CountUp = class _CountUp {
  value = input.required(...ngDevMode ? [{ debugName: "value" }] : []);
  decimals = input(0, ...ngDevMode ? [{ debugName: "decimals" }] : []);
  duration = input(1500, ...ngDevMode ? [{ debugName: "duration" }] : []);
  prefix = input("", ...ngDevMode ? [{ debugName: "prefix" }] : []);
  suffix = input("", ...ngDevMode ? [{ debugName: "suffix" }] : []);
  host = inject(ElementRef);
  observer;
  frame = 0;
  /** 0 → 1 across the animation. */
  progress = signal(0, ...ngDevMode ? [{ debugName: "progress" }] : []);
  display = computed(() => {
    const shown = this.value() * this.progress();
    const decimals = this.decimals();
    return this.prefix() + shown.toLocaleString("en-IN", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + this.suffix();
  }, ...ngDevMode ? [{ debugName: "display" }] : []);
  ngOnInit() {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still || typeof IntersectionObserver === "undefined") {
      this.progress.set(1);
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting))
        return;
      this.observer?.disconnect();
      this.run();
    }, { threshold: 0.4 });
    this.observer.observe(this.host.nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    cancelAnimationFrame(this.frame);
  }
  /** Ease-out cubic, so the number lands softly rather than stopping dead. */
  run() {
    const total = this.duration();
    let started = 0;
    const step = (now) => {
      started ||= now;
      const t = Math.min(1, (now - started) / total);
      this.progress.set(1 - Math.pow(1 - t, 3));
      if (t < 1)
        this.frame = requestAnimationFrame(step);
    };
    this.frame = requestAnimationFrame(step);
  }
  static \u0275fac = function CountUp_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CountUp)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CountUp, selectors: [["Kova-count-up"]], inputs: { value: [1, "value"], decimals: [1, "decimals"], duration: [1, "duration"], prefix: [1, "prefix"], suffix: [1, "suffix"] }, decls: 1, vars: 1, template: function CountUp_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275text(0);
    }
    if (rf & 2) {
      \u0275\u0275textInterpolate(ctx.display());
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=count-up.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CountUp, [{
    type: Component,
    args: [{ selector: "Kova-count-up", changeDetection: ChangeDetectionStrategy.OnPush, template: `{{ display() }}`, styles: ["/* angular:styles/component:css;17058fcd61efe05762db839b000b933113962bfdee9f13402d4e6374f37a5deb;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/shared/components/count-up.ts */\n:host {\n  font-variant-numeric: tabular-nums;\n}\n/*# sourceMappingURL=count-up.css.map */\n"] }]
  }], null, { value: [{ type: Input, args: [{ isSignal: true, alias: "value", required: true }] }], decimals: [{ type: Input, args: [{ isSignal: true, alias: "decimals", required: false }] }], duration: [{ type: Input, args: [{ isSignal: true, alias: "duration", required: false }] }], prefix: [{ type: Input, args: [{ isSignal: true, alias: "prefix", required: false }] }], suffix: [{ type: Input, args: [{ isSignal: true, alias: "suffix", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CountUp, { className: "CountUp", filePath: "src/app/shared/components/count-up.ts", lineNumber: 20 });
})();

// src/app/shared/directives/reveal.ts
var Reveal = class _Reveal {
  /** Stagger index. Each step pushes the fade back by 70ms. */
  KovaReveal = input(0, ...ngDevMode ? [{ debugName: "KovaReveal", transform: (value) => numberAttribute(value, 0) }] : [{ transform: (value) => numberAttribute(value, 0) }]);
  host = inject(ElementRef);
  observer;
  shown = signal(false, ...ngDevMode ? [{ debugName: "shown" }] : []);
  delay = () => `${Math.min(this.KovaReveal(), 8) * 70}ms`;
  ngOnInit() {
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (still || typeof IntersectionObserver === "undefined") {
      this.shown.set(true);
      return;
    }
    this.observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting))
        return;
      this.shown.set(true);
      this.observer?.disconnect();
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
    this.observer.observe(this.host.nativeElement);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
  }
  static \u0275fac = function Reveal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Reveal)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _Reveal, selectors: [["", "KovaReveal", ""]], hostAttrs: [1, "reveal"], hostVars: 4, hostBindings: function Reveal_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275styleProp("transition-delay", ctx.delay());
      \u0275\u0275classProp("in-view", ctx.shown());
    }
  }, inputs: { KovaReveal: [1, "KovaReveal"] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Reveal, [{
    type: Directive,
    args: [{
      selector: "[KovaReveal]",
      host: {
        "class": "reveal",
        "[class.in-view]": "shown()",
        "[style.transition-delay]": "delay()"
      }
    }]
  }], null, { KovaReveal: [{ type: Input, args: [{ isSignal: true, alias: "KovaReveal", required: false }] }] });
})();

// src/app/features/home/gift-finder.ts
var _c0 = () => [0, 1, 2];
var _c1 = (a0) => ["/category", a0];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.id;
function GiftFinder_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li");
  }
  if (rf & 2) {
    const dot_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r1.step() >= dot_r1)("now", ctx_r1.step() === dot_r1);
  }
}
function GiftFinder_Case_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GiftFinder_Case_12_For_5_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickRecipient(option_r4));
    });
    \u0275\u0275elementStart(1, "mat-icon", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_11_0;
    const option_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("picked", ((tmp_11_0 = ctx_r1.recipient()) == null ? null : tmp_11_0.key) === option_r4.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r4.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.label, " ");
  }
}
function GiftFinder_Case_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 15);
    \u0275\u0275text(2, "Who is it for?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, GiftFinder_Case_12_For_5_Template, 4, 4, "button", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.recipients);
  }
}
function GiftFinder_Case_13_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GiftFinder_Case_13_For_5_Template_button_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.pickBudget(option_r6));
    });
    \u0275\u0275elementStart(1, "span", 19);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const option_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("picked", ((tmp_11_0 = ctx_r1.budget()) == null ? null : tmp_11_0.key) === option_r6.key);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.countFor(option_r6));
  }
}
function GiftFinder_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 15);
    \u0275\u0275text(2, "What is the budget?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, GiftFinder_Case_13_For_5_Template, 5, 4, "button", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.budgets);
  }
}
function GiftFinder_Case_14_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GiftFinder_Case_14_For_5_Template_button_click_0_listener() {
      const option_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.mood.set(option_r8.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("picked", ctx_r1.mood() === option_r8.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r8.label, " ");
  }
}
function GiftFinder_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 15);
    \u0275\u0275text(2, "Anything in particular?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275repeaterCreate(4, GiftFinder_Case_14_For_5_Template, 2, 3, "button", 17, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.moods);
  }
}
function GiftFinder_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function GiftFinder_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(1, "mat-icon", 11);
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Back ");
    \u0275\u0275elementEnd();
  }
}
function GiftFinder_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 10);
    \u0275\u0275listener("click", function GiftFinder_Conditional_22_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reset());
    });
    \u0275\u0275text(3, "Start over");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.matches().length, " match", ctx_r1.matches().length === 1 ? "" : "es");
  }
}
function GiftFinder_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 11);
    \u0275\u0275text(2, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4, "Answer the first two and the shortlist appears here.");
    \u0275\u0275elementEnd()();
  }
}
function GiftFinder_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 11);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function GiftFinder_Conditional_25_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.widen());
    });
    \u0275\u0275text(6, "Widen the budget");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Nothing at that budget for ", ctx_r1.recipient().label.toLowerCase(), ".");
  }
}
function GiftFinder_Conditional_26_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-product-card", 24);
  }
  if (rf & 2) {
    const product_r12 = ctx.$implicit;
    \u0275\u0275property("product", product_r12);
  }
}
function GiftFinder_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275repeaterCreate(1, GiftFinder_Conditional_26_For_2_Template, 1, 1, "Kova-product-card", 24, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 25);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "mat-icon", 11);
    \u0275\u0275text(6, "arrow_forward");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.matches());
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c1, ctx_r1.recipient().slugs[0]));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" See every ", ctx_r1.recipient().label.replace("For ", ""), " curation ");
  }
}
var RECIPIENTS = [
  { key: "her", label: "For her", icon: "diamond", slugs: ["ladies-gift", "sawan-gift", "festival-gift"] },
  { key: "couple", label: "For a couple", icon: "favorite", slugs: ["wedding-gift", "anniversary-gift"] },
  { key: "baby", label: "For a baby", icon: "child_care", slugs: ["baby-gift"] },
  { key: "sibling", label: "For a sibling", icon: "diversity_1", slugs: ["rakhi-gift", "birthday-gift"] },
  { key: "family", label: "For the family", icon: "celebration", slugs: ["festival-gift", "birthday-gift", "sawan-gift"] },
  { key: "work", label: "For work", icon: "business_center", slugs: ["corporate-gift"] }
];
var BUDGETS = [
  { key: "b1", label: "Under \u20B9500", min: 0, max: 499 },
  { key: "b2", label: "\u20B9500 \u2013 \u20B9999", min: 500, max: 999 },
  { key: "b3", label: "\u20B91,000 \u2013 \u20B91,999", min: 1e3, max: 1999 },
  { key: "b4", label: "\u20B92,000 and up", min: 2e3, max: Number.MAX_SAFE_INTEGER }
];
var MOODS = [
  { key: "any", label: "Anything", tag: "" },
  { key: "handmade", label: "Handmade", tag: "handmade" },
  { key: "curation", label: "The full curation", tag: "curation" },
  { key: "gifting", label: "Ready to gift", tag: "gifting" }
];
var GiftFinder = class _GiftFinder {
  recipients = RECIPIENTS;
  budgets = BUDGETS;
  moods = MOODS;
  total = CATALOGUE.length;
  step = signal(0, ...ngDevMode ? [{ debugName: "step" }] : []);
  recipient = signal(null, ...ngDevMode ? [{ debugName: "recipient" }] : []);
  budget = signal(null, ...ngDevMode ? [{ debugName: "budget" }] : []);
  mood = signal("any", ...ngDevMode ? [{ debugName: "mood" }] : []);
  /** Who and how much are enough to shortlist; the third question only refines. */
  answered = computed(() => !!this.recipient() && !!this.budget(), ...ngDevMode ? [{ debugName: "answered" }] : []);
  matches = computed(() => {
    const who = this.recipient();
    const spend = this.budget();
    if (!who || !spend)
      return [];
    const tag = MOODS.find((m) => m.key === this.mood())?.tag ?? "";
    return CATALOGUE.filter((entry) => who.slugs.includes(entry.categorySlug)).filter((entry) => entry.price >= spend.min && entry.price <= spend.max).filter((entry) => !tag || entry.tags.includes(tag)).sort((a, b) => rank(who, b) - rank(who, a) || b.ratingAverage - a.ratingAverage).slice(0, 3);
  }, ...ngDevMode ? [{ debugName: "matches" }] : []);
  pickRecipient(option) {
    this.recipient.set(option);
    this.step.set(1);
  }
  pickBudget(option) {
    this.budget.set(option);
    this.step.set(2);
  }
  /** Live count on the budget chips, so an empty bracket never gets picked. */
  countFor(option) {
    const who = this.recipient();
    if (!who)
      return "";
    const hits = CATALOGUE.filter((entry) => who.slugs.includes(entry.categorySlug) && entry.price >= option.min && entry.price <= option.max).length;
    return hits ? `${hits} box${hits === 1 ? "" : "es"}` : "none";
  }
  back() {
    this.step.update((current) => Math.max(0, current - 1));
  }
  reset() {
    this.step.set(0);
    this.recipient.set(null);
    this.budget.set(null);
    this.mood.set("any");
  }
  /** For shoppers who would rather be told. Only lands on brackets that have stock. */
  surprise() {
    const who = RECIPIENTS[Math.floor(Math.random() * RECIPIENTS.length)];
    const stocked = BUDGETS.filter((option) => CATALOGUE.some((entry) => who.slugs.includes(entry.categorySlug) && entry.price >= option.min && entry.price <= option.max));
    this.recipient.set(who);
    this.budget.set(stocked[Math.floor(Math.random() * stocked.length)] ?? BUDGETS[1]);
    this.mood.set("any");
    this.step.set(2);
  }
  /** Escape hatch from an empty shortlist: drop the ceiling and the refinement. */
  widen() {
    this.budget.set({ key: "any", label: "Any budget", min: 0, max: Number.MAX_SAFE_INTEGER });
    this.mood.set("any");
  }
  static \u0275fac = function GiftFinder_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GiftFinder)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GiftFinder, selectors: [["Kova-gift-finder"]], decls: 27, vars: 6, consts: [[1, "finder"], [1, "ask"], [1, "head"], [1, "eyebrow", "gold"], [1, "foil"], [1, "muted"], ["aria-hidden", "true", 1, "rail"], [3, "on", "now"], [1, "controls"], ["mat-button", "", 1, "link"], ["mat-button", "", 1, "link", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "spacer"], ["aria-live", "polite", 1, "answer"], [1, "waiting"], [1, "q"], [1, "options"], ["type", "button", 1, "chip", 3, "picked"], ["type", "button", 1, "chip", 3, "click"], [1, "numeric"], [1, "hint", "numeric"], [1, "tally", "numeric"], ["mat-stroked-button", "", 1, "ghost", 3, "click"], [1, "picks"], [3, "product"], [1, "all", 3, "routerLink"]], template: function GiftFinder_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Gift finder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 4);
      \u0275\u0275text(6, "Not sure which box?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "ol", 6);
      \u0275\u0275repeaterCreate(10, GiftFinder_For_11_Template, 1, 4, "li", 7, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, GiftFinder_Case_12_Template, 6, 0, "fieldset")(13, GiftFinder_Case_13_Template, 6, 0, "fieldset")(14, GiftFinder_Case_14_Template, 6, 0, "fieldset");
      \u0275\u0275elementStart(15, "div", 8);
      \u0275\u0275conditionalCreate(16, GiftFinder_Conditional_16_Template, 4, 0, "button", 9);
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function GiftFinder_Template_button_click_17_listener() {
        return ctx.surprise();
      });
      \u0275\u0275elementStart(18, "mat-icon", 11);
      \u0275\u0275text(19, "casino");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Surprise me ");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "span", 12);
      \u0275\u0275conditionalCreate(22, GiftFinder_Conditional_22_Template, 4, 2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 13);
      \u0275\u0275conditionalCreate(24, GiftFinder_Conditional_24_Template, 5, 0, "div", 14)(25, GiftFinder_Conditional_25_Template, 7, 1, "div", 14)(26, GiftFinder_Conditional_26_Template, 7, 4);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_2_0;
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("Three questions. We shortlist from all ", ctx.total, " curations.");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(\u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_2_0 = ctx.step()) === 0 ? 12 : tmp_2_0 === 1 ? 13 : 14);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.step() > 0 ? 16 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.answered() ? 22 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.answered() ? 24 : ctx.matches().length === 0 ? 25 : 26);
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon, ProductCard], styles: ['\n\n.finder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 0;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-gold-line);\n  background: var(--mat-sys-surface-container-low);\n}\n.ask[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 32px;\n  background:\n    radial-gradient(\n      80% 70% at 20% 0%,\n      rgba(217, 181, 81, 0.14),\n      transparent 65%),\n    linear-gradient(\n      160deg,\n      #0d1f18,\n      #050b09);\n  color: #f3efe4;\n}\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--Kova-gold);\n}\n.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.rail[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.rail[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  height: 3px;\n  width: 34px;\n  border-radius: 999px;\n  background: rgba(243, 239, 228, 0.16);\n  transition: background 240ms ease, width 240ms ease;\n}\n.rail[_ngcontent-%COMP%]   li.on[_ngcontent-%COMP%] {\n  background: var(--Kova-gold-deep);\n}\n.rail[_ngcontent-%COMP%]   li.now[_ngcontent-%COMP%] {\n  background: var(--Kova-gold);\n  width: 52px;\n}\nfieldset[_ngcontent-%COMP%] {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n.q[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.375rem;\n  padding: 0 0 14px;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.875rem;\n  text-align: left;\n  color: rgba(243, 239, 228, 0.86);\n  background: rgba(243, 239, 228, 0.04);\n  border: 1px solid var(--Kova-gold-line);\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    transform 160ms ease;\n}\n.chip[_ngcontent-%COMP%]:hover {\n  border-color: var(--Kova-gold);\n  transform: translateY(-1px);\n}\n.chip.picked[_ngcontent-%COMP%] {\n  background: var(--Kova-gold);\n  border-color: var(--Kova-gold);\n  color: #16120a;\n  font-weight: 600;\n}\n.chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.hint[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  font-size: 0.6875rem;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n.link.mat-mdc-button-base[_ngcontent-%COMP%] {\n  --mat-button-text-label-text-color: var(--Kova-gold);\n  font-size: 0.8125rem;\n}\n.link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.tally[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--Kova-gold);\n}\n.answer[_ngcontent-%COMP%] {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n}\n.waiting[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n  padding: 40px 20px;\n}\n.waiting[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n  color: var(--Kova-gold);\n  opacity: 0.8;\n}\n.waiting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.picks[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.all[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: start;\n  font-size: 0.875rem;\n  color: var(--Kova-gold);\n}\n.all[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 1099px) {\n  .finder[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 699px) {\n  .ask[_ngcontent-%COMP%], \n   .answer[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .picks[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=gift-finder.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GiftFinder, [{
    type: Component,
    args: [{ selector: "Kova-gift-finder", imports: [RouterLink, MatButtonModule, MatIconModule, ProductCard], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="finder">
      <div class="ask">
        <div class="head">
          <span class="eyebrow gold">Gift finder</span>
          <h2 class="foil">Not sure which box?</h2>
          <p class="muted">Three questions. We shortlist from all {{ total }} curations.</p>
        </div>

        <ol class="rail" aria-hidden="true">
          @for (dot of [0, 1, 2]; track dot) {
            <li [class.on]="step() >= dot" [class.now]="step() === dot"></li>
          }
        </ol>

        @switch (step()) {
          @case (0) {
            <fieldset>
              <legend class="q">Who is it for?</legend>
              <div class="options">
                @for (option of recipients; track option.key) {
                  <button type="button" class="chip" [class.picked]="recipient()?.key === option.key"
                          (click)="pickRecipient(option)">
                    <mat-icon fontSet="material-symbols-outlined">{{ option.icon }}</mat-icon>
                    {{ option.label }}
                  </button>
                }
              </div>
            </fieldset>
          }
          @case (1) {
            <fieldset>
              <legend class="q">What is the budget?</legend>
              <div class="options">
                @for (option of budgets; track option.key) {
                  <button type="button" class="chip" [class.picked]="budget()?.key === option.key"
                          (click)="pickBudget(option)">
                    <span class="numeric">{{ option.label }}</span>
                    <small class="hint numeric">{{ countFor(option) }}</small>
                  </button>
                }
              </div>
            </fieldset>
          }
          @default {
            <fieldset>
              <legend class="q">Anything in particular?</legend>
              <div class="options">
                @for (option of moods; track option.key) {
                  <button type="button" class="chip" [class.picked]="mood() === option.key"
                          (click)="mood.set(option.key)">
                    {{ option.label }}
                  </button>
                }
              </div>
            </fieldset>
          }
        }

        <div class="controls">
          @if (step() > 0) {
            <button mat-button class="link" (click)="back()">
              <mat-icon fontSet="material-symbols-outlined">arrow_back</mat-icon> Back
            </button>
          }
          <button mat-button class="link" (click)="surprise()">
            <mat-icon fontSet="material-symbols-outlined">casino</mat-icon> Surprise me
          </button>
          <span class="spacer"></span>
          @if (answered()) {
            <span class="tally numeric">{{ matches().length }} match{{ matches().length === 1 ? '' : 'es' }}</span>
            <button mat-button class="link" (click)="reset()">Start over</button>
          }
        </div>
      </div>

      <div class="answer" aria-live="polite">
        @if (!answered()) {
          <div class="waiting">
            <mat-icon fontSet="material-symbols-outlined">redeem</mat-icon>
            <p class="muted">Answer the first two and the shortlist appears here.</p>
          </div>
        } @else if (matches().length === 0) {
          <div class="waiting">
            <mat-icon fontSet="material-symbols-outlined">search_off</mat-icon>
            <p class="muted">Nothing at that budget for {{ recipient()!.label.toLowerCase() }}.</p>
            <button mat-stroked-button class="ghost" (click)="widen()">Widen the budget</button>
          </div>
        } @else {
          <div class="picks">
            @for (product of matches(); track product.id) {
              <Kova-product-card [product]="product" />
            }
          </div>
          <a class="all" [routerLink]="['/category', recipient()!.slugs[0]]">
            See every {{ recipient()!.label.replace('For ', '') }} curation
            <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon>
          </a>
        }
      </div>
    </div>
  `, styles: ['/* angular:styles/component:css;52a4169ddc0681377b63b1c8cad5f506c4bca8703f67abd46b58ef8518b1dd3e;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/home/gift-finder.ts */\n.finder {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 0;\n  border-radius: 20px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-gold-line);\n  background: var(--mat-sys-surface-container-low);\n}\n.ask {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 32px;\n  background:\n    radial-gradient(\n      80% 70% at 20% 0%,\n      rgba(217, 181, 81, 0.14),\n      transparent 65%),\n    linear-gradient(\n      160deg,\n      #0d1f18,\n      #050b09);\n  color: #f3efe4;\n}\n.head {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.gold {\n  color: var(--Kova-gold);\n}\n.head p {\n  margin: 0;\n  font-size: 0.875rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.rail {\n  display: flex;\n  gap: 6px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n.rail li {\n  height: 3px;\n  width: 34px;\n  border-radius: 999px;\n  background: rgba(243, 239, 228, 0.16);\n  transition: background 240ms ease, width 240ms ease;\n}\n.rail li.on {\n  background: var(--Kova-gold-deep);\n}\n.rail li.now {\n  background: var(--Kova-gold);\n  width: 52px;\n}\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n.q {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: 1.375rem;\n  padding: 0 0 14px;\n}\n.options {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n}\n.chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 16px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.875rem;\n  text-align: left;\n  color: rgba(243, 239, 228, 0.86);\n  background: rgba(243, 239, 228, 0.04);\n  border: 1px solid var(--Kova-gold-line);\n  transition:\n    border-color 160ms ease,\n    background 160ms ease,\n    transform 160ms ease;\n}\n.chip:hover {\n  border-color: var(--Kova-gold);\n  transform: translateY(-1px);\n}\n.chip.picked {\n  background: var(--Kova-gold);\n  border-color: var(--Kova-gold);\n  color: #16120a;\n  font-weight: 600;\n}\n.chip mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.hint {\n  opacity: 0.6;\n  font-size: 0.6875rem;\n}\n.controls {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  margin-top: auto;\n  flex-wrap: wrap;\n}\n.link.mat-mdc-button-base {\n  --mat-button-text-label-text-color: var(--Kova-gold);\n  font-size: 0.8125rem;\n}\n.link mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.tally {\n  font-size: 0.6875rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--Kova-gold);\n}\n.answer {\n  padding: 32px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  justify-content: center;\n}\n.waiting {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  text-align: center;\n  padding: 40px 20px;\n}\n.waiting mat-icon {\n  font-size: 34px;\n  width: 34px;\n  height: 34px;\n  color: var(--Kova-gold);\n  opacity: 0.8;\n}\n.waiting p {\n  margin: 0;\n  font-size: 0.875rem;\n}\n.picks {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.all {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: start;\n  font-size: 0.875rem;\n  color: var(--Kova-gold);\n}\n.all mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 1099px) {\n  .finder {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 699px) {\n  .ask,\n  .answer {\n    padding: 24px 20px;\n  }\n  .picks {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n/*# sourceMappingURL=gift-finder.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GiftFinder, { className: "GiftFinder", filePath: "src/app/features/home/gift-finder.ts", lineNumber: 238 });
})();
function rank(who, entry) {
  const index = who.slugs.indexOf(entry.categorySlug);
  return index === -1 ? 0 : who.slugs.length - index;
}

// src/app/features/home/home.static.ts
var HOME_CATEGORIES = CATALOGUE_CATEGORIES;
var HOME_FEATURED = CATALOGUE_FEATURED;
function bySlug(slug) {
  return detailFor(CATALOGUE.find((entry) => entry.slug === slug) ?? CATALOGUE[0]);
}
var HOME_SLIDES = [
  {
    product: bySlug("premium-sawan-curation"),
    eyebrow: "The Sawan Collection",
    note: "Our best seller. Poured, matched and boxed in small batches."
  },
  {
    product: bySlug("bridal-sringar-trunk"),
    eyebrow: "The Bridal Atelier",
    note: "The full trousseau, in a rigid trunk that survives the wedding."
  },
  {
    product: bySlug("diwali-festival-curation"),
    eyebrow: "The Festival Edit",
    note: "Brass, sweets and light \u2014 packed for the whole house."
  }
];
var HOME_HERO = HOME_SLIDES[0].product;
var HOME_FEATURES = [
  { icon: "inventory_2", label: "Premium packaging", detail: "Rigid box, gold-foiled lid, satin ribbon and a sealed card." },
  { icon: "volunteer_activism", label: "Handcrafted with love", detail: "Resin poured and boxes packed in small batches, to order." },
  { icon: "redeem", label: "Perfect for gifting", detail: "Arrives gift-ready. No wrapping, no price on the invoice." },
  { icon: "local_shipping", label: "Free delivery over \u20B9999", detail: "Flat \u20B959 below that, dispatched within a working day." }
];
var HOME_TICKER = [
  "Packed to order",
  "Gold-foiled lids",
  "Hand-written cards",
  "Dispatch within 24 hours",
  "Free delivery over \u20B9999",
  "Bulk orders from 20 boxes",
  "No price on the invoice",
  "7-day returns"
];
var HOME_STATS = [
  { value: 12400, suffix: "+", decimals: 0, label: "Boxes packed by hand" },
  { value: 9, suffix: "", decimals: 0, label: "Occasions on the shelf" },
  { value: 4.7, suffix: " / 5", decimals: 1, label: "Average rating" },
  { value: 96, suffix: "%", decimals: 0, label: "Would order again" }
];
var HOME_STEPS = [
  { step: "01", label: "You choose", detail: "Pick the occasion, or let the gift finder shortlist three boxes for you." },
  { step: "02", label: "We pour", detail: "Resin pieces are cast and cured in small batches, then matched by shade." },
  { step: "03", label: "We pack", detail: "Every piece is laid into a velvet-touch tray and checked against the card." },
  { step: "04", label: "We seal", detail: "Foiled lid, satin ribbon, hand-written note. Out the door within a day." }
];
var HOME_GRAM = [
  { image: art({ label: "FOILED", caption: "THE LID", tint: 0, motif: "box" }), caption: "Lids, foiled in-house" },
  { image: art({ label: "POURED", caption: "SMALL BATCH", tint: 3, motif: "jewel" }), caption: "Resin, cured overnight" },
  { image: art({ label: "MATCHED", caption: "BY SHADE", tint: 1, motif: "bangles" }), caption: "Chudi matched by shade" },
  { image: art({ label: "TIED", caption: "BY HAND", tint: 4, motif: "rakhi" }), caption: "Every ribbon, by hand" },
  { image: art({ label: "LAID OUT", caption: "BEFORE THE LID", tint: 2, motif: "tray" }), caption: "Checked against the card" },
  { image: art({ label: "LIT", caption: "FESTIVAL EDIT", tint: 0, motif: "thali" }), caption: "The festival shelf" }
];
var HOME_FAQ = [
  {
    q: "How soon does a box ship?",
    a: "Everything is packed to order and leaves the workshop within one working day. Metro addresses usually see it on day two or three."
  },
  {
    q: "Can I have the card written for me?",
    a: "Yes. Add your message at checkout and it is written by hand on the card inside the lid \u2014 no printed slips."
  },
  {
    q: "Will the price be visible to the person receiving it?",
    a: "No. Nothing in the box or on the outside carries a price, and the invoice is emailed to you rather than packed."
  },
  {
    q: "Do you take bulk and corporate orders?",
    a: "From twenty boxes up, with your logo foiled onto the lid. Write to us and we will send a mock-up before anything is printed."
  },
  {
    q: "What if something arrives damaged?",
    a: "Send a photo within seven days and we replace the piece, or the whole box, at our cost."
  },
  {
    q: "Can I change what is inside a curation?",
    a: "On orders of five boxes or more, yes \u2014 swap pieces of similar value and we will re-cost it before you pay."
  }
];

// src/app/features/home/home.ts
var _c02 = ["banner"];
var _c12 = ["rail"];
var _c2 = (a0) => ["/product", a0];
var _c3 = (a0) => ["/category", a0];
var _forTrack02 = ($index, $item) => $item.product.id;
var _forTrack12 = ($index, $item) => $item.label;
var _forTrack2 = ($index, $item) => $item.id;
var _forTrack3 = ($index, $item) => $item.key;
var _forTrack4 = ($index, $item) => $item.step;
var _forTrack5 = ($index, $item) => $item.caption;
var _forTrack6 = ($index, $item) => $item.q;
function Home_For_6_Conditional_0_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon", 21);
    \u0275\u0275text(2, "check_small");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2);
  }
}
function Home_For_6_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "s", 84);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 85);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u2212", entry_r3.product.discountPercent, "%");
  }
}
function Home_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 75);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 76);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 77)(8, "div", 78)(9, "span", 27);
    \u0275\u0275text(10, "In this box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 79);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ul");
    \u0275\u0275repeaterCreate(14, Home_For_6_Conditional_0_For_15_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 80)(17, "div", 81)(18, "strong", 82);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(21, Home_For_6_Conditional_0_Conditional_21_Template, 5, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "small", 45);
    \u0275\u0275text(23, "Inclusive of taxes \xB7 Free delivery over \u20B9999");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 64)(25, "a", 72);
    \u0275\u0275text(26, " Order Now ");
    \u0275\u0275elementStart(27, "mat-icon", 66);
    \u0275\u0275text(28, "arrow_forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a", 83);
    \u0275\u0275text(30, "Browse all curations");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.product.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.note);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", entry_r3.product.includes.length, " pieces");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(entry_r3.product.includes);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 7, entry_r3.product.price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_19_0 = entry_r3.product.compareAtPrice) ? 21 : -1, tmp_19_0);
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c2, entry_r3.product.slug));
  }
}
function Home_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Home_For_6_Conditional_0_Template, 31, 11, "div", 74);
  }
  if (rf & 2) {
    const $index_r4 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r4.index() === $index_r4 ? 0 : -1);
  }
}
function Home_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const mark_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(mark_r6.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(mark_r6.label);
  }
}
function Home_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 86);
  }
  if (rf & 2) {
    const entry_r7 = ctx.$implicit;
    const $index_r8 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r4.index() === $index_r8);
    \u0275\u0275property("src", entry_r7.product.images[0], \u0275\u0275sanitizeUrl)("alt", entry_r7.product.name);
    \u0275\u0275attribute("fetchpriority", $index_r8 === 0 ? "high" : null)("aria-hidden", ctx_r4.index() === $index_r8 ? null : "true");
  }
}
function Home_For_28_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 91);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("width", ctx_r4.progress() * 100, "%");
  }
}
function Home_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function Home_For_28_Template_button_click_0_listener() {
      const $index_r10 = \u0275\u0275restoreView(_r9).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.show($index_r10));
    });
    \u0275\u0275element(1, "img", 88);
    \u0275\u0275elementStart(2, "span", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, Home_For_28_Conditional_4_Template, 1, 2, "span", 90);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r11 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r4.index() === $index_r10);
    \u0275\u0275attribute("aria-selected", ctx_r4.index() === $index_r10);
    \u0275\u0275advance();
    \u0275\u0275property("src", entry_r11.product.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r11.eyebrow);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.index() === $index_r10 ? 4 : -1);
  }
}
function Home_For_36_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 92);
    \u0275\u0275text(3, "\u25C6");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const line_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(line_r12);
  }
}
function Home_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, Home_For_36_For_1_Template, 4, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r4.ticker);
  }
}
function Home_For_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 33);
    \u0275\u0275element(1, "img", 93)(2, "span", 94);
    \u0275\u0275elementStart(3, "span", 95)(4, "h3", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 40);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 96);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r13 = ctx.$implicit;
    const $index_r14 = ctx.$index;
    \u0275\u0275property("KovaReveal", \u0275\u0275interpolate($index_r14 % 4))("routerLink", \u0275\u0275pureFunction1(8, _c3, category_r13.slug));
    \u0275\u0275advance();
    \u0275\u0275property("src", category_r13.imageUrl, \u0275\u0275sanitizeUrl)("alt", category_r13.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(category_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r13.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", category_r13.productCount, " curations");
  }
}
function Home_For_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 97);
    \u0275\u0275listener("click", function Home_For_75_Template_button_click_0_listener() {
      const item_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.lens.set(item_r16.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r4.lens() === item_r16.key);
    \u0275\u0275attribute("aria-selected", ctx_r4.lens() === item_r16.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r16.label, " ");
  }
}
function Home_For_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-product-card", 39);
  }
  if (rf & 2) {
    const product_r17 = ctx.$implicit;
    \u0275\u0275property("product", product_r17);
  }
}
function Home_ForEmpty_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 40);
    \u0275\u0275text(1, "Nothing on this shelf yet.");
    \u0275\u0275elementEnd();
  }
}
function Home_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "strong", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const part_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r18.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(part_r18.label);
  }
}
function Home_For_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 49)(1, "span", 98);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    const $index_r20 = ctx.$index;
    \u0275\u0275property("KovaReveal", \u0275\u0275interpolate($index_r20));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.step);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r19.detail);
  }
}
function Home_For_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "strong", 43);
    \u0275\u0275element(2, "Kova-count-up", 99);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "small", 37);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const stat_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", stat_r21.value)("decimals", stat_r21.decimals)("suffix", stat_r21.suffix);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(stat_r21.label);
  }
}
function Home_For_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure", 49);
    \u0275\u0275element(1, "img", 93);
    \u0275\u0275elementStart(2, "figcaption");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tile_r22 = ctx.$implicit;
    const $index_r23 = ctx.$index;
    \u0275\u0275property("KovaReveal", \u0275\u0275interpolate($index_r23 % 6));
    \u0275\u0275advance();
    \u0275\u0275property("src", tile_r22.image, \u0275\u0275sanitizeUrl)("alt", tile_r22.caption);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tile_r22.caption);
  }
}
function Home_For_133_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55)(1, "mat-icon", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const feature_r24 = ctx.$implicit;
    const $index_r25 = ctx.$index;
    \u0275\u0275property("KovaReveal", \u0275\u0275interpolate($index_r25));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r24.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r24.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r24.detail);
  }
}
function Home_For_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details")(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "mat-icon", 21);
    \u0275\u0275text(4, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 40);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r26 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r26.q, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(item_r26.a);
  }
}
var SLIDE_MS = 7e3;
var TICK_MS = 100;
var Home = class _Home {
  // Static for now: the page renders its design without a running API. To go
  // live, inject Catalog and feed these signals from categories()/featured()/
  // bySlug(), restore the loading flag with Kova-loading-grid, and delete
  // home.static.ts — the shapes are already the API's.
  slides = HOME_SLIDES;
  categories = signal(HOME_CATEGORIES, ...ngDevMode ? [{ debugName: "categories" }] : []);
  featured = HOME_FEATURED;
  features = HOME_FEATURES;
  ticker = HOME_TICKER;
  stats = HOME_STATS;
  steps = HOME_STEPS;
  gram = HOME_GRAM;
  faq = HOME_FAQ;
  coupon = "ANUVESH10";
  /** Loop counter kept as a field so @for is not handed a fresh array each pass. */
  twice = [0, 1];
  trustMarks = [
    { icon: "workspace_premium", label: "Premium quality" },
    { icon: "volunteer_activism", label: "Handcrafted with love" },
    { icon: "redeem", label: "Perfect for gifting" }
  ];
  // ---- Banner carousel ----------------------------------------------------
  index = signal(0, ...ngDevMode ? [{ debugName: "index" }] : []);
  progress = signal(0, ...ngDevMode ? [{ debugName: "progress" }] : []);
  paused = signal(false, ...ngDevMode ? [{ debugName: "paused" }] : []);
  hero = computed(() => this.slides[this.index()].product, ...ngDevMode ? [{ debugName: "hero" }] : []);
  // ---- Selection lenses ---------------------------------------------------
  lenses = [
    { key: "all", label: "Everything" },
    { key: "best", label: "Bestsellers" },
    { key: "under", label: "Under \u20B9999" },
    { key: "luxe", label: "The luxe shelf" },
    { key: "new", label: "New in" }
  ];
  lens = signal("all", ...ngDevMode ? [{ debugName: "lens" }] : []);
  shown = computed(() => {
    const pool = this.featured;
    switch (this.lens()) {
      case "best":
        return [...pool].sort((a, b) => b.ratingCount - a.ratingCount).slice(0, 8);
      case "under":
        return pool.filter((item) => item.price < 1e3);
      case "luxe":
        return pool.filter((item) => item.price >= 2e3);
      case "new":
        return [...pool].sort((a, b) => b.createdAt.localeCompare(a.createdAt)).slice(0, 8);
      default:
        return pool;
    }
  }, ...ngDevMode ? [{ debugName: "shown" }] : []);
  // ---- Offer clock --------------------------------------------------------
  /** Sunday midnight — the offer is genuinely weekly, so the clock is honest. */
  deadline = endOfWeek();
  now = signal(Date.now(), ...ngDevMode ? [{ debugName: "now" }] : []);
  countdown = computed(() => {
    const left = Math.max(0, this.deadline - this.now());
    const seconds = Math.floor(left / 1e3);
    return [
      { label: "Days", value: pad(Math.floor(seconds / 86400)) },
      { label: "Hours", value: pad(Math.floor(seconds / 3600) % 24) },
      { label: "Mins", value: pad(Math.floor(seconds / 60) % 60) },
      { label: "Secs", value: pad(seconds % 60) }
    ];
  }, ...ngDevMode ? [{ debugName: "countdown" }] : []);
  copied = signal(false, ...ngDevMode ? [{ debugName: "copied" }] : []);
  // ---- Newsletter ---------------------------------------------------------
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : []);
  mailError = signal("", ...ngDevMode ? [{ debugName: "mailError" }] : []);
  subscribed = signal(false, ...ngDevMode ? [{ debugName: "subscribed" }] : []);
  // ---- Docked bar ---------------------------------------------------------
  banner = viewChild.required("banner");
  rail = viewChild.required("rail");
  docked = signal(false, ...ngDevMode ? [{ debugName: "docked" }] : []);
  timers = [];
  watcher;
  copyTimer = 0;
  ngOnInit() {
    this.timers.push(window.setInterval(() => this.now.set(Date.now()), 1e3));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    this.timers.push(window.setInterval(() => {
      if (this.paused())
        return;
      const next = this.progress() + TICK_MS / SLIDE_MS;
      if (next < 1) {
        this.progress.set(next);
        return;
      }
      this.show((this.index() + 1) % this.slides.length);
    }, TICK_MS));
  }
  /** View queries only resolve once the template exists, hence not ngOnInit. */
  ngAfterViewInit() {
    if (typeof IntersectionObserver === "undefined")
      return;
    this.watcher = new IntersectionObserver((entries) => this.docked.set(!entries[0].isIntersecting), { threshold: 0 });
    this.watcher.observe(this.banner().nativeElement);
  }
  ngOnDestroy() {
    this.timers.forEach(clearInterval);
    clearTimeout(this.copyTimer);
    this.watcher?.disconnect();
  }
  show(next) {
    this.index.set(next);
    this.progress.set(0);
  }
  /** Scrolls the occasion rail by one card, either way. */
  nudge(direction) {
    const track = this.rail().nativeElement;
    const card = track.firstElementChild;
    const step = card ? card.offsetWidth + 18 : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: "smooth" });
  }
  copyCoupon() {
    navigator.clipboard?.writeText(this.coupon).then(() => {
      this.copied.set(true);
      clearTimeout(this.copyTimer);
      this.copyTimer = window.setTimeout(() => this.copied.set(false), 2400);
    }, () => this.copied.set(false));
  }
  onEmail(event) {
    this.email.set(event.target.value);
    if (this.mailError())
      this.mailError.set("");
  }
  subscribe(event) {
    event.preventDefault();
    const value = this.email().trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      this.mailError.set("That address does not look right \u2014 check it and try again.");
      this.subscribed.set(false);
      return;
    }
    this.mailError.set("");
    this.subscribed.set(true);
  }
  toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  static \u0275fac = function Home_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Home)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Home, selectors: [["Kova-home"]], viewQuery: function Home_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuerySignal(ctx.banner, _c02, 5);
      \u0275\u0275viewQuerySignal(ctx.rail, _c12, 5);
    }
    if (rf & 2) {
      \u0275\u0275queryAdvance(2);
    }
  }, decls: 179, vars: 23, consts: [["banner", ""], ["rail", ""], [1, "banner", 3, "mouseenter", "mouseleave", "focusin", "focusout"], [1, "banner-inner"], [1, "copy"], ["size", "lg", 3, "tagline"], [1, "trust"], [1, "shot"], [1, "frame"], [1, "corner", "tl"], [1, "corner", "tr"], [1, "corner", "bl"], [1, "corner", "br"], [1, "plate-img", 3, "on", "src", "alt"], ["aria-hidden", "true", 1, "sheen"], [1, "seal"], [1, "numeric"], [1, "hallmark", "numeric"], ["role", "tablist", "aria-label", "Featured curations", 1, "switcher"], ["role", "tab", 1, "thumb", 3, "on"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener", 1, "social"], ["fontSet", "material-symbols-outlined"], ["aria-hidden", "true", 1, "ticker"], [1, "ticker-track"], [1, "page"], ["KovaReveal", ""], ["KovaReveal", "", 1, "section-head"], [1, "eyebrow", "gold-eyebrow"], [1, "head-tools"], ["mat-icon-button", "", "aria-label", "Previous occasions", 1, "nudge", 3, "click"], ["mat-icon-button", "", "aria-label", "More occasions", 1, "nudge", 3, "click"], ["routerLink", "/shop", 1, "more"], [1, "rail"], [1, "occasion", 3, "routerLink", "KovaReveal"], ["role", "tablist", "aria-label", "Filter the selection", 1, "lenses"], ["role", "tab", 1, "lens", 3, "on"], [1, "spacer"], [1, "eyebrow"], [1, "grid"], [3, "product"], [1, "muted"], ["KovaReveal", "", 1, "offer"], [1, "offer-copy"], [1, "foil"], [1, "coupon", "numeric", 3, "click"], [1, "note"], ["aria-label", "Time left on this offer", 1, "clock"], [1, "unit"], [1, "steps"], [3, "KovaReveal"], ["KovaReveal", "", 1, "stats"], [1, "stat"], ["href", "https://instagram.com", "target", "_blank", "rel", "noopener", 1, "more"], [1, "gram"], [1, "features"], [1, "feature", 3, "KovaReveal"], ["KovaReveal", "", 1, "ask"], [1, "ask-head"], [1, "faq"], ["KovaReveal", "", 1, "closing"], ["novalidate", "", 1, "signup", 3, "submit"], ["type", "email", "name", "email", "placeholder", "you@example.com", "aria-label", "Email address", 3, "input", "value"], ["mat-flat-button", "", "type", "submit", 1, "order"], ["aria-live", "polite", 1, "note"], [1, "cta"], ["mat-flat-button", "", "routerLink", "/shop", 1, "order"], ["fontSet", "material-symbols-outlined", "iconPositionEnd", ""], ["mat-stroked-button", "", "routerLink", "/track", 1, "ghost"], [1, "dock"], ["alt", "", 3, "src"], [1, "dock-copy"], [1, "price", "numeric"], ["mat-flat-button", "", 1, "order", 3, "routerLink"], ["mat-icon-button", "", "aria-label", "Back to top", 1, "top", 3, "click"], [1, "copy-body"], [1, "foil", "sheen-type"], [1, "lede"], [1, "includes"], [1, "includes-head"], [1, "eyebrow", "count"], [1, "price-block"], [1, "figures"], [1, "now", "price", "foil"], ["mat-stroked-button", "", "routerLink", "/shop", 1, "ghost"], [1, "was", "price"], [1, "off"], [1, "plate-img", 3, "src", "alt"], ["role", "tab", 1, "thumb", 3, "click"], ["alt", "", "loading", "lazy", 3, "src"], [1, "thumb-name"], [1, "bar", 3, "width"], [1, "bar"], [1, "dot"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "veil"], [1, "label"], [1, "numeric", "count"], ["role", "tab", 1, "lens", 3, "click"], [1, "step", "numeric"], [3, "value", "decimals", "suffix"]], template: function Home_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "section", 2, 0);
      \u0275\u0275listener("mouseenter", function Home_Template_section_mouseenter_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.paused.set(true));
      })("mouseleave", function Home_Template_section_mouseleave_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.paused.set(false));
      })("focusin", function Home_Template_section_focusin_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.paused.set(true));
      })("focusout", function Home_Template_section_focusout_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.paused.set(false));
      });
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
      \u0275\u0275element(4, "Kova-brand-logo", 5);
      \u0275\u0275repeaterCreate(5, Home_For_6_Template, 1, 1, null, null, _forTrack02);
      \u0275\u0275elementStart(7, "div", 6);
      \u0275\u0275repeaterCreate(8, Home_For_9_Template, 4, 2, "span", null, _forTrack12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 7)(11, "div", 8);
      \u0275\u0275element(12, "span", 9)(13, "span", 10)(14, "span", 11)(15, "span", 12);
      \u0275\u0275repeaterCreate(16, Home_For_17_Template, 1, 6, "img", 13, _forTrack02);
      \u0275\u0275element(18, "span", 14);
      \u0275\u0275elementStart(19, "span", 15)(20, "small");
      \u0275\u0275text(21, "Premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "strong", 16);
      \u0275\u0275text(23, "Quality");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "span", 17);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 18);
      \u0275\u0275repeaterCreate(27, Home_For_28_Template, 5, 6, "button", 19, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 20)(30, "mat-icon", 21);
      \u0275\u0275text(31, "photo_camera");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32, "@anuveshandco \xB7 DM to order ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 22)(34, "div", 23);
      \u0275\u0275repeaterCreate(35, Home_For_36_Template, 2, 0, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 24)(38, "section", 25);
      \u0275\u0275element(39, "Kova-gift-finder");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "section")(41, "div", 26)(42, "div")(43, "span", 27);
      \u0275\u0275text(44, "Nine shelves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "h2");
      \u0275\u0275text(46, "Shop by occasion");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 28)(48, "button", 29);
      \u0275\u0275listener("click", function Home_Template_button_click_48_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nudge(-1));
      });
      \u0275\u0275elementStart(49, "mat-icon", 21);
      \u0275\u0275text(50, "chevron_left");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "button", 30);
      \u0275\u0275listener("click", function Home_Template_button_click_51_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.nudge(1));
      });
      \u0275\u0275elementStart(52, "mat-icon", 21);
      \u0275\u0275text(53, "chevron_right");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "a", 31);
      \u0275\u0275text(55, "All curations ");
      \u0275\u0275elementStart(56, "mat-icon", 21);
      \u0275\u0275text(57, "arrow_forward");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(58, "div", 32, 1);
      \u0275\u0275repeaterCreate(60, Home_For_61_Template, 10, 10, "a", 33, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "section")(63, "div", 26)(64, "div")(65, "span", 27);
      \u0275\u0275text(66, "Curated");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h2");
      \u0275\u0275text(68, "The house selection");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "a", 31);
      \u0275\u0275text(70, "See all ");
      \u0275\u0275elementStart(71, "mat-icon", 21);
      \u0275\u0275text(72, "arrow_forward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(73, "div", 34);
      \u0275\u0275repeaterCreate(74, Home_For_75_Template, 2, 4, "button", 35, _forTrack3);
      \u0275\u0275element(76, "span", 36);
      \u0275\u0275elementStart(77, "span", 37);
      \u0275\u0275text(78);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "div", 38);
      \u0275\u0275repeaterCreate(80, Home_For_81_Template, 1, 1, "Kova-product-card", 39, _forTrack2, false, Home_ForEmpty_82_Template, 2, 0, "p", 40);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "section", 41)(84, "div", 42)(85, "span", 27);
      \u0275\u0275text(86, "This week only");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "h2", 43);
      \u0275\u0275text(88, "10% off the festival shelf");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "p");
      \u0275\u0275text(90, "Use the code at checkout. Applies to every box over \u20B9999, including bulk orders.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "button", 44);
      \u0275\u0275listener("click", function Home_Template_button_click_91_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.copyCoupon());
      });
      \u0275\u0275text(92);
      \u0275\u0275elementStart(93, "mat-icon", 21);
      \u0275\u0275text(94);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "small", 45);
      \u0275\u0275text(96);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 46);
      \u0275\u0275repeaterCreate(98, Home_For_99_Template, 5, 2, "div", 47, _forTrack12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "section")(101, "div", 26)(102, "div")(103, "span", 27);
      \u0275\u0275text(104, "The workshop");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "h2");
      \u0275\u0275text(106, "How a box is made");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(107, "ol", 48);
      \u0275\u0275repeaterCreate(108, Home_For_109_Template, 7, 5, "li", 49, _forTrack4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "section", 50);
      \u0275\u0275repeaterCreate(111, Home_For_112_Template, 5, 4, "div", 51, _forTrack12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "section")(114, "div", 26)(115, "div")(116, "span", 27);
      \u0275\u0275text(117, "@anuveshandco");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "h2");
      \u0275\u0275text(119, "From the bench");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(120, "a", 52);
      \u0275\u0275text(121, " Follow ");
      \u0275\u0275elementStart(122, "mat-icon", 21);
      \u0275\u0275text(123, "arrow_outward");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(124, "div", 53);
      \u0275\u0275repeaterCreate(125, Home_For_126_Template, 4, 5, "figure", 49, _forTrack5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(127, "section")(128, "div", 26)(129, "h2");
      \u0275\u0275text(130, "Why our boxes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 54);
      \u0275\u0275repeaterCreate(132, Home_For_133_Template, 7, 5, "div", 55, _forTrack12);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(134, "section", 56)(135, "div", 57)(136, "span", 27);
      \u0275\u0275text(137, "Before you order");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "h2");
      \u0275\u0275text(139, "Questions we get");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 40);
      \u0275\u0275text(141, "Anything else, message us on Instagram \u2014 we answer the same day.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(142, "div", 58);
      \u0275\u0275repeaterCreate(143, Home_For_144_Template, 7, 2, "details", null, _forTrack6);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "section", 59)(146, "span", 27);
      \u0275\u0275text(147, "Ready when you are");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "h2", 43);
      \u0275\u0275text(149, "Every box leaves here gift-ready");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p");
      \u0275\u0275text(151, "Packed to order, sealed with a card, dispatched within a working day.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "form", 60);
      \u0275\u0275listener("submit", function Home_Template_form_submit_152_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.subscribe($event));
      });
      \u0275\u0275elementStart(153, "input", 61);
      \u0275\u0275listener("input", function Home_Template_input_input_153_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onEmail($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "button", 62);
      \u0275\u0275text(155);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "small", 63);
      \u0275\u0275text(157);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div", 64)(159, "a", 65);
      \u0275\u0275text(160, " Order Now ");
      \u0275\u0275elementStart(161, "mat-icon", 66);
      \u0275\u0275text(162, "arrow_forward");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "a", 67);
      \u0275\u0275text(164, "Track an order");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(165, "div", 68);
      \u0275\u0275element(166, "img", 69);
      \u0275\u0275elementStart(167, "div", 70)(168, "strong");
      \u0275\u0275text(169);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "span", 71);
      \u0275\u0275text(171);
      \u0275\u0275pipe(172, "KovaPrice");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(173, "span", 36);
      \u0275\u0275elementStart(174, "a", 72);
      \u0275\u0275text(175, "Order Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "button", 73);
      \u0275\u0275listener("click", function Home_Template_button_click_176_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toTop());
      });
      \u0275\u0275elementStart(177, "mat-icon", 21);
      \u0275\u0275text(178, "keyboard_arrow_up");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("tagline", true);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.slides);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.trustMarks);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.slides);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.hero().sku);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.slides);
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.twice);
      \u0275\u0275advance(25);
      \u0275\u0275repeater(ctx.categories());
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.lenses);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate2("", ctx.shown().length, " of ", ctx.featured.length);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.shown());
      \u0275\u0275advance(11);
      \u0275\u0275attribute("aria-label", "Copy the code " + ctx.coupon);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.coupon, " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.copied() ? "check" : "content_copy");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.copied() ? "Copied to your clipboard." : "Tap the code to copy it.");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.countdown());
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.steps);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.stats);
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.gram);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.features);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.faq);
      \u0275\u0275advance(10);
      \u0275\u0275property("value", ctx.email());
      \u0275\u0275attribute("aria-invalid", ctx.mailError() ? "true" : null);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.subscribed() ? "You are on the list" : "Get the drop list", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.mailError() || (ctx.subscribed() ? "One note per collection. Nothing else, ever." : "New collections first. No more than one email a month."), " ");
      \u0275\u0275advance(8);
      \u0275\u0275classProp("up", ctx.docked());
      \u0275\u0275advance();
      \u0275\u0275property("src", ctx.hero().imageUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.hero().name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(172, 19, ctx.hero().price));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c2, ctx.hero().slug));
    }
  }, dependencies: [
    RouterLink,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    ProductCard,
    BrandLogo,
    CountUp,
    Reveal,
    GiftFinder,
    PricePipe
  ], styles: ['\n\n[_nghost-%COMP%] {\n  --ink: #180611;\n  --plum: #3a0f2b;\n  --wine: #59133c;\n  --ivory: #f8f0e8;\n  --foil: #e9c9a1;\n  --foil-soft: #fbeeda;\n  --foil-deep: #b3854b;\n  --foil-line: color-mix(in srgb, #e9c9a1 32%, transparent);\n  --paper: #fbf7f3;\n  --foil-text: #7a5622;\n  --Kova-gold: var(--foil);\n  --Kova-gold-soft: var(--foil-soft);\n  --Kova-gold-deep: var(--foil-deep);\n  --Kova-gold-line: var(--foil-line);\n  --Kova-foil:\n    linear-gradient(\n      120deg,\n      #fbeeda 0%,\n      #e9c9a1 45%,\n      #b3854b 100%);\n  display: block;\n  background: var(--paper);\n}\nhtml.Kova-dark[_nghost-%COMP%], html.Kova-dark   [_nghost-%COMP%] {\n  --paper: #120509;\n  --foil-text: var(--foil);\n}\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      62% 66% at 76% 14%,\n      rgba(233, 201, 161, 0.20),\n      transparent 66%),\n    radial-gradient(\n      52% 58% at 6% 96%,\n      rgba(89, 19, 60, 0.85),\n      transparent 72%),\n    linear-gradient(\n      152deg,\n      var(--plum) 0%,\n      var(--ink) 58%,\n      #24081a 100%);\n  border-bottom: 1px solid var(--foil-line);\n  color: var(--ivory);\n}\n.banner[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--foil),\n      transparent);\n}\n.banner[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 4px 0 auto;\n  height: 1px;\n  opacity: 0.35;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--foil),\n      transparent);\n}\n.banner-inner[_ngcontent-%COMP%] {\n  max-width: var(--Kova-page);\n  margin-inline: auto;\n  padding: 72px 20px 80px;\n  display: grid;\n  grid-template-columns: 1.04fr 0.96fr;\n  gap: 64px;\n  align-items: center;\n}\n.copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: start;\n}\n.copy-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: start;\n  width: 100%;\n  animation: _ngcontent-%COMP%_rise 620ms cubic-bezier(0.2, 0, 0.1, 1) both;\n}\n@keyframes _ngcontent-%COMP%_rise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gold-eyebrow[_ngcontent-%COMP%] {\n  color: var(--foil);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(2.5rem, 4.6vw, 3.9rem);\n  line-height: 1.06;\n}\n.sheen-type[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      #b3854b 0%,\n      #e9c9a1 32%,\n      #fff6e6 46%,\n      #e9c9a1 60%,\n      #b3854b 100%);\n  background-size: 280% 100%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: _ngcontent-%COMP%_turn 9s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_turn {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 46ch;\n  font-size: 1.0625rem;\n  line-height: 1.72;\n  color: rgba(248, 240, 232, 0.74);\n}\n.includes[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 470px;\n  padding: 20px 22px;\n  border-radius: 18px;\n  border: 1px solid var(--foil-line);\n  background:\n    linear-gradient(\n      150deg,\n      rgba(233, 201, 161, 0.08),\n      rgba(89, 19, 60, 0.22));\n}\n.includes-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.includes-head[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  color: rgba(248, 240, 232, 0.5);\n}\n.includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px 18px;\n}\n.includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  gap: 8px;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: rgba(248, 240, 232, 0.86);\n}\n.includes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--foil);\n  flex: none;\n}\n.price-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.figures[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 14px;\n}\n.now[_ngcontent-%COMP%] {\n  font-size: clamp(2.1rem, 3.6vw, 2.9rem);\n  font-weight: 700;\n}\n.was[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(248, 240, 232, 0.45);\n}\n.off[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: var(--foil);\n  color: #2a1005;\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(248, 240, 232, 0.55);\n}\n.cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.trust[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-top: 6px;\n}\n.trust[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.8125rem;\n  color: rgba(248, 240, 232, 0.66);\n}\n.trust[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: var(--foil);\n}\n.shot[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.frame[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 28px;\n  overflow: hidden;\n  aspect-ratio: 4 / 5;\n  border: 1px solid var(--foil-line);\n  box-shadow: 0 44px 96px rgba(24, 6, 17, 0.62), inset 0 0 0 1px rgba(251, 238, 218, 0.07);\n}\n.plate-img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  transition: opacity 900ms ease;\n  animation: _ngcontent-%COMP%_drift 20s ease-in-out infinite alternate;\n}\n.plate-img.on[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n@keyframes _ngcontent-%COMP%_drift {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.06);\n  }\n}\n.corner[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  z-index: 2;\n  opacity: 0.75;\n  border-color: var(--foil);\n  border-style: solid;\n  border-width: 0;\n}\n.tl[_ngcontent-%COMP%] {\n  top: 16px;\n  left: 16px;\n  border-top-width: 1px;\n  border-left-width: 1px;\n}\n.tr[_ngcontent-%COMP%] {\n  top: 16px;\n  right: 16px;\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\n.bl[_ngcontent-%COMP%] {\n  bottom: 16px;\n  left: 16px;\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\n.br[_ngcontent-%COMP%] {\n  bottom: 16px;\n  right: 16px;\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n}\n.sheen[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -40% -60%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      74deg,\n      transparent 42%,\n      rgba(255, 246, 230, 0.14) 50%,\n      transparent 58%);\n  animation: _ngcontent-%COMP%_cross 7.5s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_cross {\n  0%, 62% {\n    transform: translateX(-55%);\n  }\n  100% {\n    transform: translateX(55%);\n  }\n}\n.seal[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  text-align: center;\n  border: 1px solid var(--foil);\n  background: rgba(24, 6, 17, 0.74);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  color: var(--foil);\n  box-shadow: 0 0 0 6px rgba(233, 201, 161, 0.08);\n}\n.seal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.5625rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.seal[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n}\n.hallmark[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 18px;\n  left: 18px;\n  z-index: 3;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 0.6875rem;\n  background: rgba(24, 6, 17, 0.74);\n  border: 1px solid var(--foil-line);\n  color: var(--foil);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.switcher[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.thumb[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  border-radius: 14px;\n  text-align: left;\n  background: rgba(248, 240, 232, 0.04);\n  border: 1px solid rgba(248, 240, 232, 0.10);\n  transition: border-color 200ms ease, background 200ms ease;\n}\n.thumb[_ngcontent-%COMP%]:hover {\n  border-color: var(--foil-line);\n}\n.thumb.on[_ngcontent-%COMP%] {\n  border-color: var(--foil);\n  background: rgba(233, 201, 161, 0.10);\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  flex: none;\n}\n.thumb-name[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.5625rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(248, 240, 232, 0.66);\n  padding-right: 8px;\n  line-height: 1.3;\n}\n.thumb.on[_ngcontent-%COMP%]   .thumb-name[_ngcontent-%COMP%] {\n  color: var(--foil);\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 2px;\n  background: var(--foil);\n  transition: width 120ms linear;\n}\n.social[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  align-self: start;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--foil-line);\n  color: rgba(248, 240, 232, 0.78);\n  font-size: 0.8125rem;\n}\n.social[_ngcontent-%COMP%]:hover {\n  border-color: var(--foil);\n  color: var(--foil);\n}\n.social[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--foil);\n}\n.ticker[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border-bottom: 1px solid var(--foil-line);\n  background:\n    linear-gradient(\n      90deg,\n      var(--ink),\n      var(--plum) 50%,\n      var(--ink));\n  padding: 12px 0;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 8%,\n      #000 92%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 8%,\n      #000 92%,\n      transparent);\n}\n.ticker-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  width: max-content;\n  animation: _ngcontent-%COMP%_slide 46s linear infinite;\n}\n.ticker[_ngcontent-%COMP%]:hover   .ticker-track[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n.ticker-track[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgba(248, 240, 232, 0.72);\n  white-space: nowrap;\n}\n.ticker-track[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  color: var(--foil);\n  font-size: 0.5rem;\n}\n@keyframes _ngcontent-%COMP%_slide {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\nsection[_ngcontent-%COMP%] {\n  margin-bottom: 96px;\n}\n.section-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  letter-spacing: -0.015em;\n}\n.head-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.more[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: var(--foil-text);\n  font-weight: 500;\n}\n.more[_ngcontent-%COMP%]:hover {\n  gap: 10px;\n}\n.more[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 200ms ease;\n}\n.nudge[_ngcontent-%COMP%] {\n  --mdc-icon-button-icon-color: var(--foil-text);\n}\n.rail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(292px, 1fr);\n  gap: 18px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 6px;\n  scrollbar-width: none;\n}\n.rail[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.occasion[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  scroll-snap-align: start;\n  border-radius: 20px;\n  border: 1px solid var(--Kova-rule);\n  transition:\n    border-color 220ms ease,\n    transform 220ms ease,\n    box-shadow 220ms ease;\n}\n.occasion[_ngcontent-%COMP%]:hover {\n  border-color: var(--foil);\n  transform: translateY(-5px);\n  box-shadow: 0 26px 54px rgba(24, 6, 17, 0.32);\n}\n.occasion[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 5 / 4;\n  object-fit: cover;\n  transition: transform 600ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.occasion[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.veil[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(24, 6, 17, 0.05) 26%,\n      rgba(24, 6, 17, 0.62) 62%,\n      rgba(24, 6, 17, 0.94) 100%);\n}\n.label[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 20px 22px;\n  color: var(--ivory);\n}\n.label[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.3125rem;\n}\n.label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: rgba(248, 240, 232, 0.68);\n}\n.count[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: var(--foil);\n}\n.lenses[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.lens[_ngcontent-%COMP%] {\n  padding: 9px 17px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 1px solid var(--Kova-rule);\n  transition:\n    border-color 160ms ease,\n    color 160ms ease,\n    background 160ms ease;\n}\n.lens[_ngcontent-%COMP%]:hover {\n  border-color: var(--foil);\n  color: var(--mat-sys-on-surface);\n}\n.lens.on[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      140deg,\n      var(--plum),\n      var(--ink));\n  border-color: transparent;\n  color: var(--foil-soft);\n  font-weight: 600;\n}\n.offer[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 32px;\n  align-items: center;\n  padding: 44px;\n  border-radius: 26px;\n  border: 1px solid var(--foil-line);\n  background:\n    radial-gradient(\n      74% 130% at 10% 0%,\n      rgba(233, 201, 161, 0.18),\n      transparent 66%),\n    radial-gradient(\n      60% 100% at 100% 100%,\n      rgba(89, 19, 60, 0.9),\n      transparent 70%),\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n  color: var(--ivory);\n}\n.offer-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: start;\n}\n.offer-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(248, 240, 232, 0.72);\n  max-width: 52ch;\n}\n.coupon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  color: var(--foil);\n  background: rgba(233, 201, 161, 0.09);\n  border: 1px dashed var(--foil);\n  font-family: var(--Kova-mono);\n  transition: background 180ms ease;\n}\n.coupon[_ngcontent-%COMP%]:hover {\n  background: rgba(233, 201, 161, 0.18);\n}\n.coupon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.clock[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n.unit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px;\n  border-radius: 14px;\n  border: 1px solid var(--foil-line);\n  background: rgba(24, 6, 17, 0.5);\n}\n.unit[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--foil);\n  line-height: 1;\n}\n.unit[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(248, 240, 232, 0.58);\n  font-size: 0.5625rem;\n}\n.steps[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n.steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 30px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.steps[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: 0;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--foil-deep);\n}\n.step[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  margin-bottom: 12px;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  letter-spacing: 0;\n  color: var(--foil-soft);\n  background:\n    linear-gradient(\n      140deg,\n      var(--wine),\n      var(--ink));\n}\n.steps[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n  margin-bottom: 8px;\n}\n.steps[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  border-radius: 24px;\n  overflow: hidden;\n  background: var(--foil-line);\n  border: 1px solid var(--foil-line);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 38px 16px;\n  text-align: center;\n  color: var(--ivory);\n  background:\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n}\n.stat[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n}\n.stat[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: rgba(248, 240, 232, 0.6);\n}\n.gram[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n.gram[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\n.gram[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  transition: transform 500ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.gram[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  transform: scale(1.07);\n}\n.gram[_ngcontent-%COMP%]   figcaption[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0;\n  padding: 22px 10px 9px;\n  font-family: var(--Kova-mono);\n  font-size: 0.5625rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--ivory);\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(24, 6, 17, 0.92));\n}\n.features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n}\n.feature[_ngcontent-%COMP%] {\n  padding: 28px 24px;\n  border-radius: 20px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n  transition:\n    border-color 200ms ease,\n    transform 200ms ease,\n    box-shadow 200ms ease;\n}\n.feature[_ngcontent-%COMP%]:hover {\n  border-color: var(--foil);\n  transform: translateY(-4px);\n  box-shadow: 0 18px 40px rgba(24, 6, 17, 0.12);\n}\n.feature[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--foil-text);\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n.feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin: 14px 0 6px;\n}\n.feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.55;\n}\n.ask[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: 44px;\n  align-items: start;\n}\n.ask-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: sticky;\n  top: 92px;\n}\n.ask-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.faq[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 0;\n  cursor: pointer;\n  font-weight: 500;\n  list-style: none;\n}\n.faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.faq[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--foil-text);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex: none;\n  transition: transform 220ms ease;\n}\n.faq[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.faq[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  font-size: 0.875rem;\n  line-height: 1.65;\n  max-width: 62ch;\n}\n.closing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n  padding: 68px 24px;\n  border-radius: 26px;\n  border: 1px solid var(--foil-line);\n  background:\n    radial-gradient(\n      64% 110% at 50% 0%,\n      rgba(233, 201, 161, 0.17),\n      transparent 68%),\n    radial-gradient(\n      50% 90% at 88% 100%,\n      rgba(89, 19, 60, 0.85),\n      transparent 72%),\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n  color: var(--ivory);\n}\n.closing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(248, 240, 232, 0.72);\n}\n.signup[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 10px;\n}\n.signup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 280px;\n  padding: 0 18px;\n  height: 46px;\n  border-radius: 999px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: var(--ivory);\n  background: rgba(248, 240, 232, 0.06);\n  border: 1px solid var(--foil-line);\n}\n.signup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(248, 240, 232, 0.42);\n}\n.signup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--foil);\n}\n.signup[_ngcontent-%COMP%]   input[aria-invalid=true][_ngcontent-%COMP%] {\n  border-color: var(--mat-sys-error);\n}\n.dock[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: auto 0 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  max-width: var(--Kova-page);\n  margin: 0 auto 16px;\n  padding: 10px 12px 10px 10px;\n  border-radius: 999px;\n  border: 1px solid var(--foil-line);\n  background: color-mix(in srgb, var(--mat-sys-surface-container) 88%, transparent);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  box-shadow: 0 20px 50px rgba(24, 6, 17, 0.38);\n  transform: translateY(140%);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    transform 380ms cubic-bezier(0.2, 0, 0.1, 1),\n    opacity 280ms ease,\n    visibility 0s linear 380ms;\n}\n.dock.up[_ngcontent-%COMP%] {\n  transform: none;\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0s;\n}\n.dock[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  object-fit: cover;\n  flex: none;\n}\n.dock-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n  min-width: 0;\n}\n.dock-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dock-copy[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--foil-text);\n}\n.top[_ngcontent-%COMP%] {\n  --mdc-icon-button-icon-color: var(--mat-sys-on-surface-variant);\n}\n@media (max-width: 1099px) {\n  .features[_ngcontent-%COMP%], \n   .steps[_ngcontent-%COMP%], \n   .clock[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .gram[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .offer[_ngcontent-%COMP%], \n   .ask[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ask-head[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n@media (max-width: 899px) {\n  .banner-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 36px;\n    padding: 36px 20px 48px;\n  }\n  .shot[_ngcontent-%COMP%] {\n    order: -1;\n  }\n  .includes[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n}\n@media (max-width: 599px) {\n  .includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .rail[_ngcontent-%COMP%] {\n    grid-auto-columns: 84%;\n  }\n  .features[_ngcontent-%COMP%], \n   .steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gram[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .offer[_ngcontent-%COMP%] {\n    padding: 26px 20px;\n  }\n  .cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 100%;\n  }\n  .switcher[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .thumb-name[_ngcontent-%COMP%] {\n    font-size: 0.625rem;\n  }\n  .dock[_ngcontent-%COMP%] {\n    margin-inline: 10px;\n  }\n  .dock-copy[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .signup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Home, [{
    type: Component,
    args: [{ selector: "Kova-home", imports: [
      RouterLink,
      MatButtonModule,
      MatIconModule,
      PricePipe,
      ProductCard,
      BrandLogo,
      CountUp,
      Reveal,
      GiftFinder
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <!-- The banner keeps its own dark ground in both themes: the gold only
         reads as foil against near-black, so it does not follow the toggle. -->
    <section class="banner" #banner (mouseenter)="paused.set(true)" (mouseleave)="paused.set(false)"
             (focusin)="paused.set(true)" (focusout)="paused.set(false)">
      <div class="banner-inner">
        <div class="copy">
          <Kova-brand-logo size="lg" [tagline]="true" />

          @for (entry of slides; track entry.product.id) {
            @if (index() === $index) {
              <div class="copy-body">
                <span class="eyebrow gold-eyebrow">{{ entry.eyebrow }}</span>
                <h1 class="foil sheen-type">{{ entry.product.name }}</h1>
                <p class="lede">{{ entry.note }}</p>

                <div class="includes">
                  <div class="includes-head">
                    <span class="eyebrow gold-eyebrow">In this box</span>
                    <span class="eyebrow count">{{ entry.product.includes.length }} pieces</span>
                  </div>
                  <ul>
                    @for (item of entry.product.includes; track item) {
                      <li><mat-icon fontSet="material-symbols-outlined">check_small</mat-icon>{{ item }}</li>
                    }
                  </ul>
                </div>

                <!-- Price block: the number is the loudest thing on the banner. -->
                <div class="price-block">
                  <div class="figures">
                    <strong class="now price foil">{{ entry.product.price |KovaPrice }}</strong>
                    @if (entry.product.compareAtPrice; as was) {
                      <s class="was price">{{ was |KovaPrice }}</s>
                      <span class="off">\u2212{{ entry.product.discountPercent }}%</span>
                    }
                  </div>
                  <small class="note">Inclusive of taxes \xB7 Free delivery over \u20B9999</small>
                </div>

                <div class="cta">
                  <a mat-flat-button class="order" [routerLink]="['/product', entry.product.slug]">
                    Order Now
                    <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
                  </a>
                  <a mat-stroked-button class="ghost" routerLink="/shop">Browse all curations</a>
                </div>
              </div>
            }
          }

          <div class="trust">
            @for (mark of trustMarks; track mark.label) {
              <span><mat-icon fontSet="material-symbols-outlined">{{ mark.icon }}</mat-icon>{{ mark.label }}</span>
            }
          </div>
        </div>

        <div class="shot">
          <div class="frame">
            <span class="corner tl"></span><span class="corner tr"></span>
            <span class="corner bl"></span><span class="corner br"></span>

            @for (entry of slides; track entry.product.id) {
              <img class="plate-img" [class.on]="index() === $index"
                   [src]="entry.product.images[0]" [alt]="entry.product.name"
                   [attr.fetchpriority]="$index === 0 ? 'high' : null"
                   [attr.aria-hidden]="index() === $index ? null : 'true'" />
            }
            <span class="sheen" aria-hidden="true"></span>

            <span class="seal">
              <small>Premium</small>
              <strong class="numeric">Quality</strong>
            </span>

            <span class="hallmark numeric">{{ hero().sku }}</span>
          </div>

          <!-- Slide control: thumbnails double as the position indicator. -->
          <div class="switcher" role="tablist" aria-label="Featured curations">
            @for (entry of slides; track entry.product.id) {
              <button class="thumb" role="tab" [class.on]="index() === $index"
                      [attr.aria-selected]="index() === $index"
                      (click)="show($index)">
                <img [src]="entry.product.imageUrl" alt="" loading="lazy" />
                <span class="thumb-name">{{ entry.eyebrow }}</span>
                @if (index() === $index) { <span class="bar" [style.width.%]="progress() * 100"></span> }
              </button>
            }
          </div>

          <a class="social" href="https://instagram.com" target="_blank" rel="noopener">
            <mat-icon fontSet="material-symbols-outlined">photo_camera</mat-icon>&#64;anuveshandco \xB7 DM to order
          </a>
        </div>
      </div>
    </section>

    <!-- A single foil line of promises, running slowly. -->
    <div class="ticker" aria-hidden="true">
      <div class="ticker-track">
        @for (pass of twice; track pass) {
          @for (line of ticker; track line) {
            <span>{{ line }}</span><span class="dot">\u25C6</span>
          }
        }
      </div>
    </div>

    <div class="page">
      <section KovaReveal><Kova-gift-finder /></section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">Nine shelves</span>
            <h2>Shop by occasion</h2>
          </div>
          <div class="head-tools">
            <button mat-icon-button class="nudge" (click)="nudge(-1)" aria-label="Previous occasions">
              <mat-icon fontSet="material-symbols-outlined">chevron_left</mat-icon>
            </button>
            <button mat-icon-button class="nudge" (click)="nudge(1)" aria-label="More occasions">
              <mat-icon fontSet="material-symbols-outlined">chevron_right</mat-icon>
            </button>
            <a routerLink="/shop" class="more">All curations <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon></a>
          </div>
        </div>

        <div class="rail" #rail>
          @for (category of categories(); track category.id) {
            <a class="occasion" [routerLink]="['/category', category.slug]" KovaReveal="{{ $index % 4 }}">
              <img [src]="category.imageUrl" [alt]="category.name" loading="lazy" decoding="async" />
              <span class="veil"></span>
              <span class="label">
                <h3 class="foil">{{ category.name }}</h3>
                <small class="muted">{{ category.description }}</small>
                <span class="numeric count">{{ category.productCount }} curations</span>
              </span>
            </a>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">Curated</span>
            <h2>The house selection</h2>
          </div>
          <a routerLink="/shop" class="more">See all <mat-icon fontSet="material-symbols-outlined">arrow_forward</mat-icon></a>
        </div>

        <div class="lenses" role="tablist" aria-label="Filter the selection">
          @for (item of lenses; track item.key) {
            <button role="tab" class="lens" [class.on]="lens() === item.key"
                    [attr.aria-selected]="lens() === item.key" (click)="lens.set(item.key)">
              {{ item.label }}
            </button>
          }
          <span class="spacer"></span>
          <span class="eyebrow">{{ shown().length }} of {{ featured.length }}</span>
        </div>

        <div class="grid">
          @for (product of shown(); track product.id) {
            <Kova-product-card [product]="product" />
          } @empty {
            <p class="muted">Nothing on this shelf yet.</p>
          }
        </div>
      </section>

      <!-- Offer band. The clock is real: it counts to the end of the week. -->
      <section class="offer" KovaReveal>
        <div class="offer-copy">
          <span class="eyebrow gold-eyebrow">This week only</span>
          <h2 class="foil">10% off the festival shelf</h2>
          <p>Use the code at checkout. Applies to every box over \u20B9999, including bulk orders.</p>
          <button class="coupon numeric" (click)="copyCoupon()"
                  [attr.aria-label]="'Copy the code ' + coupon">
            {{ coupon }}
            <mat-icon fontSet="material-symbols-outlined">{{ copied() ? 'check' : 'content_copy' }}</mat-icon>
          </button>
          <small class="note">{{ copied() ? 'Copied to your clipboard.' : 'Tap the code to copy it.' }}</small>
        </div>

        <div class="clock" aria-label="Time left on this offer">
          @for (part of countdown(); track part.label) {
            <div class="unit">
              <strong class="numeric">{{ part.value }}</strong>
              <small class="eyebrow">{{ part.label }}</small>
            </div>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">The workshop</span>
            <h2>How a box is made</h2>
          </div>
        </div>

        <ol class="steps">
          @for (item of steps; track item.step) {
            <li KovaReveal="{{ $index }}">
              <span class="step numeric">{{ item.step }}</span>
              <h3>{{ item.label }}</h3>
              <p class="muted">{{ item.detail }}</p>
            </li>
          }
        </ol>
      </section>

      <section class="stats" KovaReveal>
        @for (stat of stats; track stat.label) {
          <div class="stat">
            <strong class="foil">
              <Kova-count-up [value]="stat.value" [decimals]="stat.decimals" [suffix]="stat.suffix" />
            </strong>
            <small class="eyebrow">{{ stat.label }}</small>
          </div>
        }
      </section>

      <section>
        <div class="section-head" KovaReveal>
          <div>
            <span class="eyebrow gold-eyebrow">&#64;anuveshandco</span>
            <h2>From the bench</h2>
          </div>
          <a class="more" href="https://instagram.com" target="_blank" rel="noopener">
            Follow <mat-icon fontSet="material-symbols-outlined">arrow_outward</mat-icon>
          </a>
        </div>

        <div class="gram">
          @for (tile of gram; track tile.caption) {
            <figure KovaReveal="{{ $index % 6 }}">
              <img [src]="tile.image" [alt]="tile.caption" loading="lazy" decoding="async" />
              <figcaption>{{ tile.caption }}</figcaption>
            </figure>
          }
        </div>
      </section>

      <section>
        <div class="section-head" KovaReveal><h2>Why our boxes</h2></div>
        <div class="features">
          @for (feature of features; track feature.label) {
            <div class="feature" KovaReveal="{{ $index }}">
              <mat-icon fontSet="material-symbols-outlined">{{ feature.icon }}</mat-icon>
              <h3>{{ feature.label }}</h3>
              <p class="muted">{{ feature.detail }}</p>
            </div>
          }
        </div>
      </section>

      <section class="ask" KovaReveal>
        <div class="ask-head">
          <span class="eyebrow gold-eyebrow">Before you order</span>
          <h2>Questions we get</h2>
          <p class="muted">Anything else, message us on Instagram \u2014 we answer the same day.</p>
        </div>

        <div class="faq">
          @for (item of faq; track item.q) {
            <details>
              <summary>
                {{ item.q }}
                <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
              </summary>
              <p class="muted">{{ item.a }}</p>
            </details>
          }
        </div>
      </section>

      <section class="closing" KovaReveal>
        <span class="eyebrow gold-eyebrow">Ready when you are</span>
        <h2 class="foil">Every box leaves here gift-ready</h2>
        <p>Packed to order, sealed with a card, dispatched within a working day.</p>

        <form class="signup" (submit)="subscribe($event)" novalidate>
          <input type="email" name="email" [value]="email()" (input)="onEmail($event)"
                 placeholder="you@example.com" aria-label="Email address"
                 [attr.aria-invalid]="mailError() ? 'true' : null" />
          <button mat-flat-button class="order" type="submit">
            {{ subscribed() ? 'You are on the list' : 'Get the drop list' }}
          </button>
        </form>
        <small class="note" aria-live="polite">
          {{ mailError() || (subscribed() ? 'One note per collection. Nothing else, ever.' : 'New collections first. No more than one email a month.') }}
        </small>

        <div class="cta">
          <a mat-flat-button class="order" routerLink="/shop">
            Order Now
            <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
          </a>
          <a mat-stroked-button class="ghost" routerLink="/track">Track an order</a>
        </div>
      </section>
    </div>

    <!-- Follows the shopper once the banner is off screen. -->
    <div class="dock" [class.up]="docked()">
      <img [src]="hero().imageUrl" alt="" />
      <div class="dock-copy">
        <strong>{{ hero().name }}</strong>
        <span class="price numeric">{{ hero().price |KovaPrice }}</span>
      </div>
      <span class="spacer"></span>
      <a mat-flat-button class="order" [routerLink]="['/product', hero().slug]">Order Now</a>
      <button mat-icon-button class="top" (click)="toTop()" aria-label="Back to top">
        <mat-icon fontSet="material-symbols-outlined">keyboard_arrow_up</mat-icon>
      </button>
    </div>
  `, styles: ['/* angular:styles/component:css;0ad8911373186bfef192836f9be6171da2e2d55144ed5225141ef232a4b37b74;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/home/home.ts */\n:host {\n  --ink: #180611;\n  --plum: #3a0f2b;\n  --wine: #59133c;\n  --ivory: #f8f0e8;\n  --foil: #e9c9a1;\n  --foil-soft: #fbeeda;\n  --foil-deep: #b3854b;\n  --foil-line: color-mix(in srgb, #e9c9a1 32%, transparent);\n  --paper: #fbf7f3;\n  --foil-text: #7a5622;\n  --Kova-gold: var(--foil);\n  --Kova-gold-soft: var(--foil-soft);\n  --Kova-gold-deep: var(--foil-deep);\n  --Kova-gold-line: var(--foil-line);\n  --Kova-foil:\n    linear-gradient(\n      120deg,\n      #fbeeda 0%,\n      #e9c9a1 45%,\n      #b3854b 100%);\n  display: block;\n  background: var(--paper);\n}\n:host-context(html.Kova-dark) {\n  --paper: #120509;\n  --foil-text: var(--foil);\n}\n.banner {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      62% 66% at 76% 14%,\n      rgba(233, 201, 161, 0.20),\n      transparent 66%),\n    radial-gradient(\n      52% 58% at 6% 96%,\n      rgba(89, 19, 60, 0.85),\n      transparent 72%),\n    linear-gradient(\n      152deg,\n      var(--plum) 0%,\n      var(--ink) 58%,\n      #24081a 100%);\n  border-bottom: 1px solid var(--foil-line);\n  color: var(--ivory);\n}\n.banner::before {\n  content: "";\n  position: absolute;\n  inset: 0 0 auto;\n  height: 1px;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--foil),\n      transparent);\n}\n.banner::after {\n  content: "";\n  position: absolute;\n  inset: 4px 0 auto;\n  height: 1px;\n  opacity: 0.35;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      var(--foil),\n      transparent);\n}\n.banner-inner {\n  max-width: var(--Kova-page);\n  margin-inline: auto;\n  padding: 72px 20px 80px;\n  display: grid;\n  grid-template-columns: 1.04fr 0.96fr;\n  gap: 64px;\n  align-items: center;\n}\n.copy {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: start;\n}\n.copy-body {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: start;\n  width: 100%;\n  animation: rise 620ms cubic-bezier(0.2, 0, 0.1, 1) both;\n}\n@keyframes rise {\n  from {\n    opacity: 0;\n    transform: translateY(14px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.gold-eyebrow {\n  color: var(--foil);\n}\nh1 {\n  font-size: clamp(2.5rem, 4.6vw, 3.9rem);\n  line-height: 1.06;\n}\n.sheen-type {\n  background:\n    linear-gradient(\n      105deg,\n      #b3854b 0%,\n      #e9c9a1 32%,\n      #fff6e6 46%,\n      #e9c9a1 60%,\n      #b3854b 100%);\n  background-size: 280% 100%;\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  animation: turn 9s ease-in-out infinite;\n}\n@keyframes turn {\n  0%, 100% {\n    background-position: 0% 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.lede {\n  margin: 0;\n  max-width: 46ch;\n  font-size: 1.0625rem;\n  line-height: 1.72;\n  color: rgba(248, 240, 232, 0.74);\n}\n.includes {\n  width: 100%;\n  max-width: 470px;\n  padding: 20px 22px;\n  border-radius: 18px;\n  border: 1px solid var(--foil-line);\n  background:\n    linear-gradient(\n      150deg,\n      rgba(233, 201, 161, 0.08),\n      rgba(89, 19, 60, 0.22));\n}\n.includes-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.includes-head .count {\n  color: rgba(248, 240, 232, 0.5);\n}\n.includes ul {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px 18px;\n}\n.includes li {\n  display: flex;\n  align-items: start;\n  gap: 8px;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: rgba(248, 240, 232, 0.86);\n}\n.includes mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--foil);\n  flex: none;\n}\n.price-block {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.figures {\n  display: flex;\n  align-items: baseline;\n  gap: 14px;\n}\n.now {\n  font-size: clamp(2.1rem, 3.6vw, 2.9rem);\n  font-weight: 700;\n}\n.was {\n  font-size: 1.125rem;\n  color: rgba(248, 240, 232, 0.45);\n}\n.off {\n  font-family: var(--Kova-mono);\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  padding: 4px 10px;\n  border-radius: 999px;\n  background: var(--foil);\n  color: #2a1005;\n}\n.note {\n  font-size: 0.75rem;\n  color: rgba(248, 240, 232, 0.55);\n}\n.cta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.trust {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n  padding-top: 6px;\n}\n.trust span {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 0.8125rem;\n  color: rgba(248, 240, 232, 0.66);\n}\n.trust mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: var(--foil);\n}\n.shot {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.frame {\n  position: relative;\n  border-radius: 28px;\n  overflow: hidden;\n  aspect-ratio: 4 / 5;\n  border: 1px solid var(--foil-line);\n  box-shadow: 0 44px 96px rgba(24, 6, 17, 0.62), inset 0 0 0 1px rgba(251, 238, 218, 0.07);\n}\n.plate-img {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  opacity: 0;\n  transition: opacity 900ms ease;\n  animation: drift 20s ease-in-out infinite alternate;\n}\n.plate-img.on {\n  opacity: 1;\n}\n@keyframes drift {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.06);\n  }\n}\n.corner {\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  z-index: 2;\n  opacity: 0.75;\n  border-color: var(--foil);\n  border-style: solid;\n  border-width: 0;\n}\n.tl {\n  top: 16px;\n  left: 16px;\n  border-top-width: 1px;\n  border-left-width: 1px;\n}\n.tr {\n  top: 16px;\n  right: 16px;\n  border-top-width: 1px;\n  border-right-width: 1px;\n}\n.bl {\n  bottom: 16px;\n  left: 16px;\n  border-bottom-width: 1px;\n  border-left-width: 1px;\n}\n.br {\n  bottom: 16px;\n  right: 16px;\n  border-bottom-width: 1px;\n  border-right-width: 1px;\n}\n.sheen {\n  position: absolute;\n  inset: -40% -60%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      74deg,\n      transparent 42%,\n      rgba(255, 246, 230, 0.14) 50%,\n      transparent 58%);\n  animation: cross 7.5s ease-in-out infinite;\n}\n@keyframes cross {\n  0%, 62% {\n    transform: translateX(-55%);\n  }\n  100% {\n    transform: translateX(55%);\n  }\n}\n.seal {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  text-align: center;\n  border: 1px solid var(--foil);\n  background: rgba(24, 6, 17, 0.74);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n  color: var(--foil);\n  box-shadow: 0 0 0 6px rgba(233, 201, 161, 0.08);\n}\n.seal small {\n  font-size: 0.5625rem;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n  opacity: 0.8;\n}\n.seal strong {\n  font-size: 0.75rem;\n  letter-spacing: 0.08em;\n}\n.hallmark {\n  position: absolute;\n  bottom: 18px;\n  left: 18px;\n  z-index: 3;\n  padding: 6px 12px;\n  border-radius: 999px;\n  font-size: 0.6875rem;\n  background: rgba(24, 6, 17, 0.74);\n  border: 1px solid var(--foil-line);\n  color: var(--foil);\n  -webkit-backdrop-filter: blur(6px);\n  backdrop-filter: blur(6px);\n}\n.switcher {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 10px;\n}\n.thumb {\n  position: relative;\n  overflow: hidden;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  border-radius: 14px;\n  text-align: left;\n  background: rgba(248, 240, 232, 0.04);\n  border: 1px solid rgba(248, 240, 232, 0.10);\n  transition: border-color 200ms ease, background 200ms ease;\n}\n.thumb:hover {\n  border-color: var(--foil-line);\n}\n.thumb.on {\n  border-color: var(--foil);\n  background: rgba(233, 201, 161, 0.10);\n}\n.thumb img {\n  width: 42px;\n  height: 42px;\n  object-fit: cover;\n  flex: none;\n}\n.thumb-name {\n  font-family: var(--Kova-mono);\n  font-size: 0.5625rem;\n  letter-spacing: 0.1em;\n  text-transform: uppercase;\n  color: rgba(248, 240, 232, 0.66);\n  padding-right: 8px;\n  line-height: 1.3;\n}\n.thumb.on .thumb-name {\n  color: var(--foil);\n}\n.bar {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 2px;\n  background: var(--foil);\n  transition: width 120ms linear;\n}\n.social {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  align-self: start;\n  padding: 8px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--foil-line);\n  color: rgba(248, 240, 232, 0.78);\n  font-size: 0.8125rem;\n}\n.social:hover {\n  border-color: var(--foil);\n  color: var(--foil);\n}\n.social mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--foil);\n}\n.ticker {\n  overflow: hidden;\n  border-bottom: 1px solid var(--foil-line);\n  background:\n    linear-gradient(\n      90deg,\n      var(--ink),\n      var(--plum) 50%,\n      var(--ink));\n  padding: 12px 0;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 8%,\n      #000 92%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 8%,\n      #000 92%,\n      transparent);\n}\n.ticker-track {\n  display: flex;\n  align-items: center;\n  gap: 22px;\n  width: max-content;\n  animation: slide 46s linear infinite;\n}\n.ticker:hover .ticker-track {\n  animation-play-state: paused;\n}\n.ticker-track span {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: rgba(248, 240, 232, 0.72);\n  white-space: nowrap;\n}\n.ticker-track .dot {\n  color: var(--foil);\n  font-size: 0.5rem;\n}\n@keyframes slide {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-50%);\n  }\n}\nsection {\n  margin-bottom: 96px;\n}\n.section-head > div {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.section-head h2 {\n  letter-spacing: -0.015em;\n}\n.head-tools {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.more {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.875rem;\n  color: var(--foil-text);\n  font-weight: 500;\n}\n.more:hover {\n  gap: 10px;\n}\n.more mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  transition: transform 200ms ease;\n}\n.nudge {\n  --mdc-icon-button-icon-color: var(--foil-text);\n}\n.rail {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: minmax(292px, 1fr);\n  gap: 18px;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  padding-bottom: 6px;\n  scrollbar-width: none;\n}\n.rail::-webkit-scrollbar {\n  display: none;\n}\n.occasion {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  scroll-snap-align: start;\n  border-radius: 20px;\n  border: 1px solid var(--Kova-rule);\n  transition:\n    border-color 220ms ease,\n    transform 220ms ease,\n    box-shadow 220ms ease;\n}\n.occasion:hover {\n  border-color: var(--foil);\n  transform: translateY(-5px);\n  box-shadow: 0 26px 54px rgba(24, 6, 17, 0.32);\n}\n.occasion img {\n  display: block;\n  width: 100%;\n  aspect-ratio: 5 / 4;\n  object-fit: cover;\n  transition: transform 600ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.occasion:hover img {\n  transform: scale(1.05);\n}\n.veil {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(24, 6, 17, 0.05) 26%,\n      rgba(24, 6, 17, 0.62) 62%,\n      rgba(24, 6, 17, 0.94) 100%);\n}\n.label {\n  position: absolute;\n  inset: auto 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  padding: 20px 22px;\n  color: var(--ivory);\n}\n.label h3 {\n  font-size: 1.3125rem;\n}\n.label small {\n  font-size: 0.75rem;\n  line-height: 1.5;\n  color: rgba(248, 240, 232, 0.68);\n}\n.count {\n  font-size: 0.6875rem;\n  color: var(--foil);\n}\n.lenses {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n  margin-bottom: 28px;\n}\n.lens {\n  padding: 9px 17px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 1px solid var(--Kova-rule);\n  transition:\n    border-color 160ms ease,\n    color 160ms ease,\n    background 160ms ease;\n}\n.lens:hover {\n  border-color: var(--foil);\n  color: var(--mat-sys-on-surface);\n}\n.lens.on {\n  background:\n    linear-gradient(\n      140deg,\n      var(--plum),\n      var(--ink));\n  border-color: transparent;\n  color: var(--foil-soft);\n  font-weight: 600;\n}\n.offer {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 32px;\n  align-items: center;\n  padding: 44px;\n  border-radius: 26px;\n  border: 1px solid var(--foil-line);\n  background:\n    radial-gradient(\n      74% 130% at 10% 0%,\n      rgba(233, 201, 161, 0.18),\n      transparent 66%),\n    radial-gradient(\n      60% 100% at 100% 100%,\n      rgba(89, 19, 60, 0.9),\n      transparent 70%),\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n  color: var(--ivory);\n}\n.offer-copy {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  align-items: start;\n}\n.offer-copy p {\n  margin: 0;\n  color: rgba(248, 240, 232, 0.72);\n  max-width: 52ch;\n}\n.coupon {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  padding: 12px 20px;\n  border-radius: 12px;\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.14em;\n  color: var(--foil);\n  background: rgba(233, 201, 161, 0.09);\n  border: 1px dashed var(--foil);\n  font-family: var(--Kova-mono);\n  transition: background 180ms ease;\n}\n.coupon:hover {\n  background: rgba(233, 201, 161, 0.18);\n}\n.coupon mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.clock {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 10px;\n}\n.unit {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px;\n  border-radius: 14px;\n  border: 1px solid var(--foil-line);\n  background: rgba(24, 6, 17, 0.5);\n}\n.unit strong {\n  font-size: 1.75rem;\n  font-weight: 700;\n  color: var(--foil);\n  line-height: 1;\n}\n.unit small {\n  color: rgba(248, 240, 232, 0.58);\n  font-size: 0.5625rem;\n}\n.steps {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 20px;\n}\n.steps li {\n  position: relative;\n  padding-top: 30px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.steps li::before {\n  content: "";\n  position: absolute;\n  top: -4px;\n  left: 0;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--foil-deep);\n}\n.step {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  margin-bottom: 12px;\n  border-radius: 50%;\n  font-size: 0.75rem;\n  letter-spacing: 0;\n  color: var(--foil-soft);\n  background:\n    linear-gradient(\n      140deg,\n      var(--wine),\n      var(--ink));\n}\n.steps h3 {\n  font-size: 1.0625rem;\n  margin-bottom: 8px;\n}\n.steps p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1px;\n  border-radius: 24px;\n  overflow: hidden;\n  background: var(--foil-line);\n  border: 1px solid var(--foil-line);\n}\n.stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  padding: 38px 16px;\n  text-align: center;\n  color: var(--ivory);\n  background:\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n}\n.stat strong {\n  font-family:\n    "Playfair Display",\n    Georgia,\n    serif;\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n}\n.stat small {\n  color: rgba(248, 240, 232, 0.6);\n}\n.gram {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 12px;\n}\n.gram figure {\n  position: relative;\n  margin: 0;\n  overflow: hidden;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\n.gram img {\n  display: block;\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  transition: transform 500ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.gram figure:hover img {\n  transform: scale(1.07);\n}\n.gram figcaption {\n  position: absolute;\n  inset: auto 0 0;\n  padding: 22px 10px 9px;\n  font-family: var(--Kova-mono);\n  font-size: 0.5625rem;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--ivory);\n  background:\n    linear-gradient(\n      180deg,\n      transparent,\n      rgba(24, 6, 17, 0.92));\n}\n.features {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 18px;\n}\n.feature {\n  padding: 28px 24px;\n  border-radius: 20px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n  transition:\n    border-color 200ms ease,\n    transform 200ms ease,\n    box-shadow 200ms ease;\n}\n.feature:hover {\n  border-color: var(--foil);\n  transform: translateY(-4px);\n  box-shadow: 0 18px 40px rgba(24, 6, 17, 0.12);\n}\n.feature mat-icon {\n  color: var(--foil-text);\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n}\n.feature h3 {\n  font-size: 1rem;\n  margin: 14px 0 6px;\n}\n.feature p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.55;\n}\n.ask {\n  display: grid;\n  grid-template-columns: 0.8fr 1.2fr;\n  gap: 44px;\n  align-items: start;\n}\n.ask-head {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  position: sticky;\n  top: 92px;\n}\n.ask-head p {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.faq details {\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.faq summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 18px 0;\n  cursor: pointer;\n  font-weight: 500;\n  list-style: none;\n}\n.faq summary::-webkit-details-marker {\n  display: none;\n}\n.faq summary mat-icon {\n  color: var(--foil-text);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex: none;\n  transition: transform 220ms ease;\n}\n.faq details[open] summary mat-icon {\n  transform: rotate(45deg);\n}\n.faq p {\n  margin: 0 0 20px;\n  font-size: 0.875rem;\n  line-height: 1.65;\n  max-width: 62ch;\n}\n.closing {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 14px;\n  text-align: center;\n  padding: 68px 24px;\n  border-radius: 26px;\n  border: 1px solid var(--foil-line);\n  background:\n    radial-gradient(\n      64% 110% at 50% 0%,\n      rgba(233, 201, 161, 0.17),\n      transparent 68%),\n    radial-gradient(\n      50% 90% at 88% 100%,\n      rgba(89, 19, 60, 0.85),\n      transparent 72%),\n    linear-gradient(\n      158deg,\n      var(--plum),\n      var(--ink));\n  color: var(--ivory);\n}\n.closing p {\n  margin: 0;\n  color: rgba(248, 240, 232, 0.72);\n}\n.signup {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 10px;\n}\n.signup input {\n  width: 280px;\n  padding: 0 18px;\n  height: 46px;\n  border-radius: 999px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: var(--ivory);\n  background: rgba(248, 240, 232, 0.06);\n  border: 1px solid var(--foil-line);\n}\n.signup input::placeholder {\n  color: rgba(248, 240, 232, 0.42);\n}\n.signup input:focus {\n  outline: none;\n  border-color: var(--foil);\n}\n.signup input[aria-invalid=true] {\n  border-color: var(--mat-sys-error);\n}\n.dock {\n  position: fixed;\n  inset: auto 0 0;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  max-width: var(--Kova-page);\n  margin: 0 auto 16px;\n  padding: 10px 12px 10px 10px;\n  border-radius: 999px;\n  border: 1px solid var(--foil-line);\n  background: color-mix(in srgb, var(--mat-sys-surface-container) 88%, transparent);\n  -webkit-backdrop-filter: blur(14px);\n  backdrop-filter: blur(14px);\n  box-shadow: 0 20px 50px rgba(24, 6, 17, 0.38);\n  transform: translateY(140%);\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    transform 380ms cubic-bezier(0.2, 0, 0.1, 1),\n    opacity 280ms ease,\n    visibility 0s linear 380ms;\n}\n.dock.up {\n  transform: none;\n  opacity: 1;\n  visibility: visible;\n  transition-delay: 0s;\n}\n.dock img {\n  width: 44px;\n  height: 44px;\n  border-radius: 999px;\n  object-fit: cover;\n  flex: none;\n}\n.dock-copy {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n  min-width: 0;\n}\n.dock-copy strong {\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dock-copy .price {\n  font-size: 0.8125rem;\n  color: var(--foil-text);\n}\n.top {\n  --mdc-icon-button-icon-color: var(--mat-sys-on-surface-variant);\n}\n@media (max-width: 1099px) {\n  .features,\n  .steps,\n  .clock {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .gram {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .offer,\n  .ask {\n    grid-template-columns: 1fr;\n  }\n  .ask-head {\n    position: static;\n  }\n}\n@media (max-width: 899px) {\n  .banner-inner {\n    grid-template-columns: 1fr;\n    gap: 36px;\n    padding: 36px 20px 48px;\n  }\n  .shot {\n    order: -1;\n  }\n  .includes {\n    max-width: none;\n  }\n}\n@media (max-width: 599px) {\n  .includes ul {\n    grid-template-columns: 1fr;\n  }\n  .rail {\n    grid-auto-columns: 84%;\n  }\n  .features,\n  .steps {\n    grid-template-columns: 1fr;\n  }\n  .gram {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .offer {\n    padding: 26px 20px;\n  }\n  .cta a {\n    flex: 1 1 100%;\n  }\n  .switcher {\n    grid-template-columns: 1fr;\n  }\n  .thumb-name {\n    font-size: 0.625rem;\n  }\n  .dock {\n    margin-inline: 10px;\n  }\n  .dock-copy {\n    display: none;\n  }\n  .signup input {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], null, { banner: [{ type: ViewChild, args: ["banner", { isSignal: true }] }], rail: [{ type: ViewChild, args: ["rail", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Home, { className: "Home", filePath: "src/app/features/home/home.ts", lineNumber: 839 });
})();
function pad(value) {
  return value.toString().padStart(2, "0");
}
function endOfWeek() {
  const now = /* @__PURE__ */ new Date();
  const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + (7 - now.getDay()), 0, 0, 0, 0);
  return end.getTime();
}
export {
  Home
};
//# sourceMappingURL=chunk-FRVFFSZC.js.map
