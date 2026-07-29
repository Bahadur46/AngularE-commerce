import {
  art
} from "./chunk-LMPLV25C.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-banners.ts
var _forTrack0 = ($index, $item) => $item.id;
function AdminBanners_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r3 = ctx.$implicit;
    \u0275\u0275property("value", slot_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(slot_r3);
  }
}
function AdminBanners_Conditional_12_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const motif_r4 = ctx.$implicit;
    \u0275\u0275property("value", motif_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(motif_r4);
  }
}
function AdminBanners_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("submit", function AdminBanners_Conditional_12_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.create($event));
    });
    \u0275\u0275elementStart(1, "label", 7)(2, "span", 1);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 8);
    \u0275\u0275listener("input", function AdminBanners_Conditional_12_Template_input_input_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.title.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label", 7)(6, "span", 1);
    \u0275\u0275text(7, "Subtitle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 9);
    \u0275\u0275listener("input", function AdminBanners_Conditional_12_Template_input_input_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.subtitle.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "label")(10, "span", 1);
    \u0275\u0275text(11, "Slot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "select", 10);
    \u0275\u0275listener("change", function AdminBanners_Conditional_12_Template_select_change_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.slot.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(13, AdminBanners_Conditional_12_For_14_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "label")(16, "span", 1);
    \u0275\u0275text(17, "Links to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 12);
    \u0275\u0275listener("input", function AdminBanners_Conditional_12_Template_input_input_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.link.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label")(20, "span", 1);
    \u0275\u0275text(21, "Artwork");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "select", 10);
    \u0275\u0275listener("change", function AdminBanners_Conditional_12_Template_select_change_22_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.motif.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(23, AdminBanners_Conditional_12_For_24_Template, 2, 2, "option", 11, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label")(26, "span", 1);
    \u0275\u0275text(27, "Starts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 13);
    \u0275\u0275listener("input", function AdminBanners_Conditional_12_Template_input_input_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.startsAt.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "label")(30, "span", 1);
    \u0275\u0275text(31, "Ends");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 13);
    \u0275\u0275listener("input", function AdminBanners_Conditional_12_Template_input_input_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.draft.endsAt.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 14);
    \u0275\u0275text(34, "Create banner");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.title());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.subtitle());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.slot());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.slots);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.draft.link());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.motif());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.motifs);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.draft.startsAt());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.draft.endsAt());
  }
}
function AdminBanners_For_14_Conditional_0_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 19)(1, "div", 20);
    \u0275\u0275element(2, "img", 21);
    \u0275\u0275elementStart(3, "span", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 23)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 24);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dl")(11, "div")(12, "dt");
    \u0275\u0275text(13, "Links to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd", 25);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "Runs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd", 25);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "date");
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div")(24, "dt");
    \u0275\u0275text(25, "Position");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dd", 25);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 26)(29, "button", 27);
    \u0275\u0275listener("click", function AdminBanners_For_14_Conditional_0_For_8_Template_button_click_29_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggle(banner_r6));
    });
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275element(31, "span", 28);
    \u0275\u0275elementStart(32, "button", 29);
    \u0275\u0275listener("click", function AdminBanners_For_14_Conditional_0_For_8_Template_button_click_32_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.move(banner_r6, -1));
    });
    \u0275\u0275elementStart(33, "mat-icon", 4);
    \u0275\u0275text(34, "arrow_upward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "button", 30);
    \u0275\u0275listener("click", function AdminBanners_For_14_Conditional_0_For_8_Template_button_click_35_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.move(banner_r6, 1));
    });
    \u0275\u0275elementStart(36, "mat-icon", 4);
    \u0275\u0275text(37, "arrow_downward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 31);
    \u0275\u0275listener("click", function AdminBanners_For_14_Conditional_0_For_8_Template_button_click_38_listener() {
      const banner_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.remove(banner_r6));
    });
    \u0275\u0275elementStart(39, "mat-icon", 4);
    \u0275\u0275text(40, "delete");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const banner_r6 = ctx.$implicit;
    const slot_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("dim", !ctx_r1.showing(banner_r6));
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r1.preview(banner_r6), \u0275\u0275sanitizeUrl)("alt", banner_r6.title);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.stateOf(banner_r6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.stateLabel(banner_r6));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(banner_r6.subtitle);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(banner_r6.link);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(21, 17, banner_r6.startsAt, "d MMM"), " \u2013 ", \u0275\u0275pipeBind2(22, 20, banner_r6.endsAt, "d MMM yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(banner_r6.order);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(banner_r6.active ? "Pause" : "Publish");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", banner_r6.order === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", banner_r6.order === ctx_r1.inSlot(slot_r7).length);
    \u0275\u0275advance(3);
    \u0275\u0275attribute("aria-label", "Delete " + banner_r6.title);
  }
}
function AdminBanners_For_14_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "div", 16)(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small", 2);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 17);
    \u0275\u0275repeaterCreate(7, AdminBanners_For_14_Conditional_0_For_8_Template, 41, 23, "article", 18, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slot_r7);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r1.inSlot(slot_r7).length, " banner", ctx_r1.inSlot(slot_r7).length === 1 ? "" : "s");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.inSlot(slot_r7));
  }
}
function AdminBanners_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminBanners_For_14_Conditional_0_Template, 9, 3, "section", 15);
  }
  if (rf & 2) {
    const slot_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.inSlot(slot_r7).length ? 0 : -1);
  }
}
var SLOTS = ["Home hero", "Home strip", "Category top", "Cart upsell"];
var MOTIFS = ["box", "bangles", "thali", "trunk", "rakhi", "jewel", "candle", "bloom"];
var SEED = [
  {
    id: "b1",
    title: "The Sawan Collection",
    subtitle: "Green chudi, resin and mehawar \u2014 boxed",
    slot: "Home hero",
    link: "/category/sawan-gift",
    motif: "bangles",
    tint: 0,
    order: 1,
    startsAt: "2026-07-01",
    endsAt: "2026-08-31",
    active: true
  },
  {
    id: "b2",
    title: "Rakhi, ready to send",
    subtitle: "Two threads, sweets and a written card",
    slot: "Home hero",
    link: "/category/rakhi-gift",
    motif: "rakhi",
    tint: 1,
    order: 2,
    startsAt: "2026-07-20",
    endsAt: "2026-08-20",
    active: true
  },
  {
    id: "b3",
    title: "Free delivery over \u20B9999",
    subtitle: "Dispatched within a working day",
    slot: "Home strip",
    link: "/shop",
    motif: "box",
    tint: 2,
    order: 1,
    startsAt: "2026-01-01",
    endsAt: "2026-12-31",
    active: true
  },
  {
    id: "b4",
    title: "Corporate gifting",
    subtitle: "Your logo foiled on the lid, from twenty boxes",
    slot: "Category top",
    link: "/category/corporate-gift",
    motif: "trunk",
    tint: 3,
    order: 1,
    startsAt: "2026-06-01",
    endsAt: "2026-12-31",
    active: true
  },
  {
    id: "b5",
    title: "Add a hand-written card",
    subtitle: "Written on the card inside the lid, free",
    slot: "Cart upsell",
    link: "/shop",
    motif: "jewel",
    tint: 4,
    order: 1,
    startsAt: "2026-01-01",
    endsAt: "2026-12-31",
    active: false
  },
  {
    id: "b6",
    title: "The Festival Edit",
    subtitle: "Brass, sweets and light for the whole house",
    slot: "Home hero",
    link: "/category/festival-gift",
    motif: "thali",
    tint: 2,
    order: 3,
    startsAt: "2026-10-01",
    endsAt: "2026-11-15",
    active: false
  }
];
var AdminBanners = class _AdminBanners {
  notify = inject(Notify);
  slots = SLOTS;
  motifs = MOTIFS;
  banners = signal(SEED, ...ngDevMode ? [{ debugName: "banners" }] : []);
  composing = signal(false, ...ngDevMode ? [{ debugName: "composing" }] : []);
  draft = {
    title: signal(""),
    subtitle: signal(""),
    slot: signal("Home hero"),
    link: signal("/shop"),
    motif: signal("box"),
    startsAt: signal((/* @__PURE__ */ new Date()).toISOString().slice(0, 10)),
    endsAt: signal("2026-12-31")
  };
  liveNow = computed(() => this.banners().filter((banner) => this.showing(banner)), ...ngDevMode ? [{ debugName: "liveNow" }] : []);
  inSlot(slot) {
    return this.banners().filter((banner) => banner.slot === slot).sort((a, b) => a.order - b.order);
  }
  /** The artwork the shopfront would render, drawn from the same motif set. */
  preview(banner) {
    return art({
      label: banner.title.toUpperCase().slice(0, 22),
      caption: banner.subtitle.toUpperCase().slice(0, 30),
      tint: banner.tint,
      shape: "wide",
      motif: banner.motif
    });
  }
  showing(banner) {
    return this.stateOf(banner) === "live";
  }
  stateOf(banner) {
    if (!banner.active)
      return "";
    const now = Date.now();
    if (new Date(banner.startsAt).getTime() > now)
      return "soon";
    if (new Date(banner.endsAt).getTime() + 864e5 < now)
      return "over";
    return "live";
  }
  stateLabel(banner) {
    switch (this.stateOf(banner)) {
      case "live":
        return "Showing";
      case "soon":
        return "Scheduled";
      case "over":
        return "Finished";
      default:
        return "Paused";
    }
  }
  toggle(banner) {
    this.banners.update((rows) => rows.map((row) => row.id === banner.id ? __spreadProps(__spreadValues({}, row), { active: !row.active }) : row));
    this.notify.done(`${banner.title} ${banner.active ? "paused" : "published"}`);
  }
  /** Swaps the banner with its neighbour in the same slot. */
  move(banner, direction) {
    const siblings = this.inSlot(banner.slot);
    const index = siblings.findIndex((row) => row.id === banner.id);
    const swapWith = siblings[index + direction];
    if (!swapWith)
      return;
    this.banners.update((rows) => rows.map((row) => {
      if (row.id === banner.id)
        return __spreadProps(__spreadValues({}, row), { order: swapWith.order });
      if (row.id === swapWith.id)
        return __spreadProps(__spreadValues({}, row), { order: banner.order });
      return row;
    }));
  }
  remove(banner) {
    this.banners.update((rows) => rows.filter((row) => row.id !== banner.id));
    this.notify.done(`${banner.title} deleted`);
  }
  create(event) {
    event.preventDefault();
    const title = this.draft.title().trim();
    if (!title) {
      this.notify.problem("A banner needs a title.");
      return;
    }
    const slot = this.draft.slot();
    const order = this.inSlot(slot).length + 1;
    this.banners.update((rows) => [...rows, {
      id: `b${Date.now()}`,
      title,
      subtitle: this.draft.subtitle().trim(),
      slot,
      link: this.draft.link().trim() || "/shop",
      motif: this.draft.motif(),
      tint: rows.length % 5,
      order,
      startsAt: this.draft.startsAt(),
      endsAt: this.draft.endsAt(),
      active: true
    }]);
    this.draft.title.set("");
    this.draft.subtitle.set("");
    this.composing.set(false);
    this.notify.done(`${title} added to ${slot}`);
  }
  text(event) {
    return event.target.value;
  }
  static \u0275fac = function AdminBanners_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminBanners)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminBanners, selectors: [["Kova-admin-banners"]], decls: 15, vars: 5, consts: [[1, "head"], [1, "eyebrow"], [1, "muted", "numeric"], ["mat-flat-button", "", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "compose"], [1, "compose", 3, "submit"], [1, "wide"], ["placeholder", "The Diwali Edit", "required", "", 3, "input", "value"], ["placeholder", "Brass, sweets and light", 3, "input", "value"], [3, "change", "value"], [3, "value"], ["placeholder", "/category/festival-gift", 3, "input", "value"], ["type", "date", 3, "input", "value"], ["mat-flat-button", "", "type", "submit"], [1, "group"], [1, "group-head"], [1, "cards"], [1, "card", 3, "dim"], [1, "card"], [1, "art"], ["loading", "lazy", 3, "src", "alt"], [1, "badge"], [1, "body"], [1, "muted"], [1, "numeric"], [1, "tools"], ["mat-button", "", 3, "click"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Move up the slot", 3, "click", "disabled"], ["mat-icon-button", "", "aria-label", "Move down the slot", 3, "click", "disabled"], ["mat-icon-button", "", 3, "click"]], template: function AdminBanners_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Banners");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function AdminBanners_Template_button_click_8_listener() {
        return ctx.composing.set(!ctx.composing());
      });
      \u0275\u0275elementStart(9, "mat-icon", 4);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, AdminBanners_Conditional_12_Template, 35, 7, "form", 5);
      \u0275\u0275repeaterCreate(13, AdminBanners_For_14_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.liveNow().length, " showing now \xB7 ", ctx.banners().length, " in total");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.composing() ? "close" : "add");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.composing() ? "Cancel" : "New banner", " ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.composing() ? 12 : -1);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.slots);
    }
  }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, DatePipe], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.compose[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  padding: 22px;\n  margin-bottom: 28px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.compose[_ngcontent-%COMP%]   .wide[_ngcontent-%COMP%] {\n  grid-column: span 2;\n}\n.compose[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.compose[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.compose[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.compose[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.compose[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 42px;\n}\n.group[_ngcontent-%COMP%] {\n  margin-bottom: 32px;\n}\n.group-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.group[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n  transition: opacity 200ms ease;\n}\n.card.dim[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.card.dim[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.art[_ngcontent-%COMP%] {\n  position: relative;\n}\n.art[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  aspect-ratio: 16 / 7;\n  object-fit: cover;\n}\n.badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.badge.live[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 26%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.badge.soon[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 26%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.badge.over[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 24%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.body[_ngcontent-%COMP%] {\n  padding: 16px 18px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\ndl[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 74px 1fr;\n  gap: 10px;\n  align-items: baseline;\n}\ndt[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-top: auto;\n  padding-top: 10px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.tools[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.tools[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 1099px) {\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .compose[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 699px) {\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .compose[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .compose[_ngcontent-%COMP%]   .wide[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=admin-banners.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminBanners, [{
    type: Component,
    args: [{ selector: "Kova-admin-banners", imports: [DatePipe, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Storefront</span>
        <h1>Banners</h1>
        <small class="muted numeric">{{ liveNow().length }} showing now \xB7 {{ banners().length }} in total</small>
      </div>
      <button mat-flat-button (click)="composing.set(!composing())">
        <mat-icon fontSet="material-symbols-outlined">{{ composing() ? 'close' : 'add' }}</mat-icon>
        {{ composing() ? 'Cancel' : 'New banner' }}
      </button>
    </header>

    @if (composing()) {
      <form class="compose" (submit)="create($event)">
        <label class="wide"><span class="eyebrow">Title</span>
          <input [value]="draft.title()" (input)="draft.title.set(text($event))" placeholder="The Diwali Edit" required /></label>
        <label class="wide"><span class="eyebrow">Subtitle</span>
          <input [value]="draft.subtitle()" (input)="draft.subtitle.set(text($event))" placeholder="Brass, sweets and light" /></label>
        <label><span class="eyebrow">Slot</span>
          <select [value]="draft.slot()" (change)="draft.slot.set($any($event.target).value)">
            @for (slot of slots; track slot) { <option [value]="slot">{{ slot }}</option> }
          </select></label>
        <label><span class="eyebrow">Links to</span>
          <input [value]="draft.link()" (input)="draft.link.set(text($event))" placeholder="/category/festival-gift" /></label>
        <label><span class="eyebrow">Artwork</span>
          <select [value]="draft.motif()" (change)="draft.motif.set($any($event.target).value)">
            @for (motif of motifs; track motif) { <option [value]="motif">{{ motif }}</option> }
          </select></label>
        <label><span class="eyebrow">Starts</span>
          <input type="date" [value]="draft.startsAt()" (input)="draft.startsAt.set(text($event))" /></label>
        <label><span class="eyebrow">Ends</span>
          <input type="date" [value]="draft.endsAt()" (input)="draft.endsAt.set(text($event))" /></label>
        <button mat-flat-button type="submit">Create banner</button>
      </form>
    }

    @for (slot of slots; track slot) {
      @if (inSlot(slot).length) {
        <section class="group">
          <div class="group-head">
            <h2>{{ slot }}</h2>
            <small class="muted numeric">{{ inSlot(slot).length }} banner{{ inSlot(slot).length === 1 ? '' : 's' }}</small>
          </div>

          <div class="cards">
            @for (banner of inSlot(slot); track banner.id) {
              <article class="card" [class.dim]="!showing(banner)">
                <div class="art">
                  <img [src]="preview(banner)" [alt]="banner.title" loading="lazy" />
                  <span class="badge" [class]="stateOf(banner)">{{ stateLabel(banner) }}</span>
                </div>

                <div class="body">
                  <h3>{{ banner.title }}</h3>
                  <p class="muted">{{ banner.subtitle }}</p>

                  <dl>
                    <div><dt>Links to</dt><dd class="numeric">{{ banner.link }}</dd></div>
                    <div><dt>Runs</dt>
                      <dd class="numeric">{{ banner.startsAt | date:'d MMM' }} \u2013 {{ banner.endsAt | date:'d MMM yyyy' }}</dd></div>
                    <div><dt>Position</dt><dd class="numeric">{{ banner.order }}</dd></div>
                  </dl>

                  <div class="tools">
                    <button mat-button (click)="toggle(banner)">{{ banner.active ? 'Pause' : 'Publish' }}</button>
                    <span class="spacer"></span>
                    <button mat-icon-button (click)="move(banner, -1)" [disabled]="banner.order === 1"
                            aria-label="Move up the slot">
                      <mat-icon fontSet="material-symbols-outlined">arrow_upward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="move(banner, 1)"
                            [disabled]="banner.order === inSlot(slot).length" aria-label="Move down the slot">
                      <mat-icon fontSet="material-symbols-outlined">arrow_downward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="remove(banner)" [attr.aria-label]="'Delete ' + banner.title">
                      <mat-icon fontSet="material-symbols-outlined">delete</mat-icon>
                    </button>
                  </div>
                </div>
              </article>
            }
          </div>
        </section>
      }
    }
  `, styles: ["/* angular:styles/component:css;e7d7331d052c1cd8742992b99cc6e516c051fbcea2845f49ee244a15760abeed;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-banners.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.compose {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  align-items: end;\n  padding: 22px;\n  margin-bottom: 28px;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.compose .wide {\n  grid-column: span 2;\n}\n.compose label {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  min-width: 0;\n}\n.compose input,\n.compose select {\n  height: 42px;\n  padding: 0 12px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.compose input:focus,\n.compose select:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.compose button {\n  height: 42px;\n}\n.group {\n  margin-bottom: 32px;\n}\n.group-head {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n  padding-bottom: 12px;\n  margin-bottom: 16px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.group h2 {\n  font-size: 1.0625rem;\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n  transition: opacity 200ms ease;\n}\n.card.dim {\n  opacity: 0.55;\n}\n.card.dim:hover {\n  opacity: 1;\n}\n.art {\n  position: relative;\n}\n.art img {\n  display: block;\n  width: 100%;\n  aspect-ratio: 16 / 7;\n  object-fit: cover;\n}\n.badge {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.badge.live {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 26%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.badge.soon {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 26%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.badge.over {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 24%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.body {\n  padding: 16px 18px 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.body h3 {\n  font-size: 1rem;\n}\n.body p {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\ndl {\n  margin: 4px 0 0;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\ndl div {\n  display: grid;\n  grid-template-columns: 74px 1fr;\n  gap: 10px;\n  align-items: baseline;\n}\ndt {\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n  font-size: 0.75rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.tools {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-top: auto;\n  padding-top: 10px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.tools button {\n  font-size: 0.8125rem;\n}\n.tools mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 1099px) {\n  .cards {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .compose {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 699px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n  .compose {\n    grid-template-columns: 1fr;\n  }\n  .compose .wide {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=admin-banners.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminBanners, { className: "AdminBanners", filePath: "src/app/features/admin/admin-banners.ts", lineNumber: 204 });
})();
export {
  AdminBanners
};
//# sourceMappingURL=chunk-FR7XAYEJ.js.map
