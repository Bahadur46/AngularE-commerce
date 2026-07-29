import {
  StaticAdmin
} from "./chunk-CQZ7UETW.js";
import {
  Admin
} from "./chunk-Q54TYYEO.js";
import {
  ALL_STATUSES,
  STATUS_LABEL,
  TRACKING_STEPS
} from "./chunk-NEQP5CTB.js";
import "./chunk-LX66BOLT.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ZGPGDACX.js";
import "./chunk-LMPLV25C.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
  NgSelectOption,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-VZ7N6S6Z.js";
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
import {
  DatePipe
} from "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
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

// src/app/features/admin/admin-orders.ts
var _c0 = () => [10, 20, 50];
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.productId;
var _forTrack2 = ($index, $item) => $item.at;
function AdminOrders_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function AdminOrders_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.term.set("");
      return \u0275\u0275resetView(ctx_r1.load(1));
    });
    \u0275\u0275elementStart(1, "mat-icon", 4);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrders_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AdminOrders_For_22_Template_button_click_0_listener() {
      const status_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStatus(status_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r1.statusFilter() === status_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.label(status_r4), " ");
  }
}
function AdminOrders_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function AdminOrders_For_27_Template_button_click_0_listener() {
      const source_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setSource(source_r6));
    });
    \u0275\u0275elementStart(1, "mat-icon", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const source_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("on", ctx_r1.sourceFilter() === source_r6);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(source_r6 === "Web" ? "desktop_windows" : "smartphone");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", source_r6, " ");
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(", ", o_r11.shippingAddress.line2);
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", o_r11.carrier, " ", o_r11.trackingNumber);
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275element(1, "img", 42);
    \u0275\u0275elementStart(2, "span", 43)(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 2);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 27);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", item_r12.imageUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 5, item_r12.unitPrice), " each");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xD7", item_r12.quantity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, item_r12.lineTotal));
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2, "Discount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "KovaPrice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u2212", \u0275\u0275pipeBind1(5, 1, o_r11.discount));
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("value", status_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(status_r13));
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_119_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const event_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" \xB7 ", event_r14.location);
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 45);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small", 2);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275conditionalCreate(8, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_119_Conditional_8_Template, 1, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.label(event_r14.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(event_r14.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 4, event_r14.at, "d MMM, HH:mm"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(event_r14.location ? 8 : -1);
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 24)(1, "td", 25)(2, "div", 26)(3, "section")(4, "h4", 1);
    \u0275\u0275text(5, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl")(7, "div")(8, "dt");
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dd");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div")(13, "dt");
    \u0275\u0275text(14, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dd");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "dt");
    \u0275\u0275text(19, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd", 27);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "h4", 1);
    \u0275\u0275text(23, "Delivery address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 28);
    \u0275\u0275text(25);
    \u0275\u0275element(26, "br");
    \u0275\u0275text(27);
    \u0275\u0275conditionalCreate(28, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_28_Template, 1, 1);
    \u0275\u0275element(29, "br");
    \u0275\u0275text(30);
    \u0275\u0275elementStart(31, "span", 27);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "br");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "h4", 1);
    \u0275\u0275text(36, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dl")(38, "div")(39, "dt");
    \u0275\u0275text(40, "Method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "dd");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "dt");
    \u0275\u0275text(45, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "dd");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "dt");
    \u0275\u0275text(50, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "dd");
    \u0275\u0275text(52);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(53, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_53_Template, 5, 2, "div");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "section")(55, "h4", 1);
    \u0275\u0275text(56, "Products ordered");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "ul", 29);
    \u0275\u0275repeaterCreate(58, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_59_Template, 13, 9, "li", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "dl", 30)(61, "div")(62, "dt");
    \u0275\u0275text(63, "Subtotal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "dd", 27);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(67, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Conditional_67_Template, 6, 3, "div");
    \u0275\u0275elementStart(68, "div")(69, "dt");
    \u0275\u0275text(70, "Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "dd", 27);
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "div")(75, "dt");
    \u0275\u0275text(76, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "dd", 27);
    \u0275\u0275text(78);
    \u0275\u0275pipe(79, "KovaPrice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "div", 31)(81, "dt");
    \u0275\u0275text(82, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "dd", 27);
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "KovaPrice");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(86, "section")(87, "h4", 1);
    \u0275\u0275text(88, "Move this order along");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "form", 32);
    \u0275\u0275listener("submit", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_form_submit_89_listener($event) {
      \u0275\u0275restoreView(_r10);
      const o_r11 = \u0275\u0275nextContext();
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.save($event, o_r11));
    });
    \u0275\u0275elementStart(90, "label")(91, "span", 1);
    \u0275\u0275text(92, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "select", 33);
    \u0275\u0275listener("change", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_select_change_93_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.nextStatus.set($event.target.value));
    });
    \u0275\u0275repeaterCreate(94, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_95_Template, 2, 2, "option", 34, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "label")(97, "span", 1);
    \u0275\u0275text(98, "Note for the customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "input", 35);
    \u0275\u0275listener("input", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_input_input_99_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.note.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "label")(101, "span", 1);
    \u0275\u0275text(102, "Current location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "input", 36);
    \u0275\u0275listener("input", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_input_input_103_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.location.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(104, "div", 37)(105, "label")(106, "span", 1);
    \u0275\u0275text(107, "Carrier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "input", 38);
    \u0275\u0275listener("input", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_input_input_108_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.carrier.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "label")(110, "span", 1);
    \u0275\u0275text(111, "Tracking no.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(112, "input", 39);
    \u0275\u0275listener("input", function AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template_input_input_112_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.tracking.set(ctx_r1.text($event)));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(113, "button", 40);
    \u0275\u0275text(114, "Update order");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(115, "h4", 1);
    \u0275\u0275text(116, "History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "ol", 41);
    \u0275\u0275repeaterCreate(118, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_For_119_Template, 9, 7, "li", null, _forTrack2);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const o_r11 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(o_r11.customerName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r11.customerEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r11.customerPhone);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", o_r11.shippingAddress.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r11.shippingAddress.line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r11.shippingAddress.line2 ? 28 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", o_r11.shippingAddress.city, ", ", o_r11.shippingAddress.state, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(o_r11.shippingAddress.postalCode);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", o_r11.shippingAddress.country, " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(o_r11.paymentMethod);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r11.paymentStatus);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r11.source);
    \u0275\u0275advance();
    \u0275\u0275conditional(o_r11.trackingNumber ? 53 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(o_r11.items);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 24, o_r11.subtotal));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(o_r11.discount ? 67 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(o_r11.shipping === 0 ? "Free" : \u0275\u0275pipeBind1(73, 26, o_r11.shipping));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(79, 28, o_r11.tax));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(85, 30, o_r11.total));
    \u0275\u0275advance(9);
    \u0275\u0275property("value", ctx_r1.nextStatus());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.statuses);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.note());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.location());
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx_r1.carrier());
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r1.tracking());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(o_r11.timeline);
  }
}
function AdminOrders_Conditional_28_For_23_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AdminOrders_Conditional_28_For_23_Conditional_27_Conditional_0_Template, 120, 32, "tr", 24);
  }
  if (rf & 2) {
    const order_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(ctx.id === order_r9.id ? 0 : -1);
  }
}
function AdminOrders_Conditional_28_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 10);
    \u0275\u0275listener("click", function AdminOrders_Conditional_28_For_23_Template_tr_click_0_listener() {
      const order_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openOrder(order_r9));
    });
    \u0275\u0275elementStart(1, "td", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td", 19);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td", 19);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 20);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td")(17, "span", 21);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "td")(20, "span", 22)(21, "mat-icon", 4);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "td", 15)(25, "mat-icon", 23);
    \u0275\u0275text(26, "expand_more");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(27, AdminOrders_Conditional_28_For_23_Conditional_27_Template, 1, 1);
  }
  if (rf & 2) {
    let tmp_12_0;
    let tmp_24_0;
    let tmp_25_0;
    const order_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("open-row", ((tmp_12_0 = ctx_r1.active()) == null ? null : tmp_12_0.id) === order_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r9.orderNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r9.customerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 18, order_r9.createdAt, "d MMM yyyy, HH:mm"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(order_r9.itemCount);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 21, order_r9.total));
    \u0275\u0275advance(3);
    \u0275\u0275classMap(ctx_r1.payTone(order_r9.paymentStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(order_r9.paymentStatus);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.tone(order_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.label(order_r9.status));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(order_r9.source === "Web" ? "desktop_windows" : "smartphone");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r9.source, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("turned", ((tmp_24_0 = ctx_r1.active()) == null ? null : tmp_24_0.id) === order_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.active()) ? 27 : -1, tmp_25_0);
  }
}
function AdminOrders_Conditional_28_ForEmpty_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 46);
    \u0275\u0275text(2, "No orders match those filters.");
    \u0275\u0275elementEnd()();
  }
}
function AdminOrders_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Date & time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 15);
    \u0275\u0275text(11, "Items");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 15);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Source");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "tbody");
    \u0275\u0275repeaterCreate(22, AdminOrders_Conditional_28_For_23_Template, 28, 23, null, null, _forTrack0, false, AdminOrders_Conditional_28_ForEmpty_24_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "mat-paginator", 16);
    \u0275\u0275listener("page", function AdminOrders_Conditional_28_Template_mat_paginator_page_25_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r15 = ctx;
    \u0275\u0275advance(22);
    \u0275\u0275repeater(page_r15.items);
    \u0275\u0275advance(3);
    \u0275\u0275property("length", page_r15.total)("pageSize", page_r15.pageSize)("pageIndex", page_r15.page - 1)("pageSizeOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
var AdminOrders = class _AdminOrders {
  admin = inject(Admin);
  notify = inject(Notify);
  statuses = ALL_STATUSES;
  sources = ["Web", "Mobile"];
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  active = signal(null, ...ngDevMode ? [{ debugName: "active" }] : []);
  term = signal("", ...ngDevMode ? [{ debugName: "term" }] : []);
  statusFilter = signal(null, ...ngDevMode ? [{ debugName: "statusFilter" }] : []);
  sourceFilter = signal(null, ...ngDevMode ? [{ debugName: "sourceFilter" }] : []);
  nextStatus = signal("Processing", ...ngDevMode ? [{ debugName: "nextStatus" }] : []);
  note = signal("", ...ngDevMode ? [{ debugName: "note" }] : []);
  location = signal("", ...ngDevMode ? [{ debugName: "location" }] : []);
  carrier = signal("", ...ngDevMode ? [{ debugName: "carrier" }] : []);
  tracking = signal("", ...ngDevMode ? [{ debugName: "tracking" }] : []);
  pageSize = 20;
  debounce = 0;
  openCount = computed(() => (this.result()?.items ?? []).filter((order) => this.tone(order.status) === "open").length, ...ngDevMode ? [{ debugName: "openCount" }] : []);
  constructor() {
    this.load(1);
  }
  label(status) {
    return STATUS_LABEL[status];
  }
  text(event) {
    return event.target.value;
  }
  tone(status) {
    if (status === "Delivered")
      return "done";
    if (status === "Cancelled")
      return "stop";
    return "open";
  }
  payTone(payment) {
    return payment === "Paid" ? "paid" : payment === "Refunded" || payment === "Failed" ? "stop" : "owed";
  }
  onSearch(event) {
    this.term.set(this.text(event));
    clearTimeout(this.debounce);
    this.debounce = window.setTimeout(() => this.load(1), 220);
  }
  setStatus(status) {
    this.statusFilter.set(status);
    this.load(1);
  }
  setSource(source) {
    this.sourceFilter.set(source);
    this.load(1);
  }
  load(page) {
    const admin = this.admin;
    const status = this.statusFilter() ?? void 0;
    const request = admin instanceof StaticAdmin ? admin.searchOrders(this.term(), status, this.sourceFilter() ?? void 0, page, this.pageSize) : admin.orders(status, page, this.pageSize);
    request.subscribe((result) => {
      this.result.set(result);
      if (!result.items.some((item) => item.id === this.active()?.id))
        this.active.set(null);
    });
  }
  onPage(event) {
    this.pageSize = event.pageSize;
    this.load(event.pageIndex + 1);
  }
  openOrder(listItem) {
    if (this.active()?.id === listItem.id) {
      this.active.set(null);
      return;
    }
    this.admin.order(listItem.id).subscribe((order) => {
      this.active.set(order);
      this.nextStatus.set(nextAfter(order.status));
      this.note.set("");
      this.location.set("");
      this.carrier.set(order.carrier ?? "");
      this.tracking.set(order.trackingNumber ?? "");
    });
  }
  save(event, order) {
    event.preventDefault();
    this.admin.updateOrderStatus(order.id, this.nextStatus(), this.note() || void 0, this.location() || void 0, this.tracking() || void 0, this.carrier() || void 0).subscribe({
      next: (updated) => {
        this.active.set(updated);
        this.notify.done(`Order ${updated.orderNumber} is now ${STATUS_LABEL[updated.status].toLowerCase()}`);
        this.load(this.result()?.page ?? 1);
      }
    });
  }
  /** The page as a spreadsheet — every column the desk shows. */
  exportCsv() {
    const rows = [
      ["Order ID", "Customer", "Date & time", "Items", "Amount", "Payment", "Status", "Source"],
      ...(this.result()?.items ?? []).map((order) => [
        order.orderNumber,
        order.customerName,
        new Date(order.createdAt).toLocaleString("en-IN"),
        `${order.itemCount}`,
        `${order.total}`,
        order.paymentStatus,
        order.status,
        order.source
      ])
    ];
    const csv = rows.map((row) => row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `anuvesh-orders-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }
  static \u0275fac = function AdminOrders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminOrders)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminOrders, selectors: [["Kova-admin-orders"]], decls: 29, vars: 10, consts: [[1, "head"], [1, "eyebrow"], [1, "muted", "numeric"], ["mat-stroked-button", "", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined"], [1, "filters"], [1, "search"], ["type", "search", "placeholder", "Order number, customer, phone, city or product", "aria-label", "Search orders", 3, "input", "value"], ["aria-label", "Clear the search", 1, "clear"], ["role", "group", "aria-label", "Filter by status", 1, "chips"], [3, "click"], [3, "on"], ["role", "group", "aria-label", "Filter by order source", 1, "chips"], ["aria-label", "Clear the search", 1, "clear", 3, "click"], [1, "scroll"], [1, "right"], ["aria-label", "Order pages", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], [1, "order-no"], [1, "numeric", "muted"], [1, "right", "numeric"], [1, "pill", "pay"], [1, "pill"], [1, "src"], ["fontSet", "material-symbols-outlined", 1, "chev"], [1, "detail-row"], ["colspan", "9"], [1, "detail"], [1, "numeric"], [1, "address"], [1, "items"], [1, "totals"], [1, "grand"], [1, "update", 3, "submit"], [3, "change", "value"], [3, "value"], ["placeholder", "Handed to the carrier", 3, "input", "value"], ["placeholder", "Kanpur hub", 3, "input", "value"], [1, "pair"], [3, "input", "value"], [1, "numeric", 3, "input", "value"], ["mat-flat-button", "", "type", "submit"], [1, "timeline"], ["alt", "", 3, "src"], [1, "what"], [1, "numeric", "qty"], [1, "muted"], ["colspan", "9", 1, "muted", "empty"]], template: function AdminOrders_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Fulfilment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Orders");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function AdminOrders_Template_button_click_8_listener() {
        return ctx.exportCsv();
      });
      \u0275\u0275elementStart(9, "mat-icon", 4);
      \u0275\u0275text(10, "download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Export page ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "mat-icon", 4);
      \u0275\u0275text(15, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 7);
      \u0275\u0275listener("input", function AdminOrders_Template_input_input_16_listener($event) {
        return ctx.onSearch($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, AdminOrders_Conditional_17_Template, 3, 0, "button", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9)(19, "button", 10);
      \u0275\u0275listener("click", function AdminOrders_Template_button_click_19_listener() {
        return ctx.setStatus(null);
      });
      \u0275\u0275text(20, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(21, AdminOrders_For_22_Template, 2, 3, "button", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 12)(24, "button", 10);
      \u0275\u0275listener("click", function AdminOrders_Template_button_click_24_listener() {
        return ctx.setSource(null);
      });
      \u0275\u0275text(25, "Any source");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(26, AdminOrders_For_27_Template, 4, 4, "button", 11, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(28, AdminOrders_Conditional_28_Template, 26, 6);
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      let tmp_8_0;
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ((tmp_0_0 = ctx.result()) == null ? null : tmp_0_0.total) ?? 0, " matching \xB7 ", ctx.openCount(), " still open");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !((tmp_1_0 = ctx.result()) == null ? null : tmp_1_0.items == null ? null : tmp_1_0.items.length));
      \u0275\u0275advance(8);
      \u0275\u0275property("value", ctx.term());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.term() ? 17 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("on", !ctx.statusFilter());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.statuses);
      \u0275\u0275advance(3);
      \u0275\u0275classProp("on", !ctx.sourceFilter());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.sources);
      \u0275\u0275advance(2);
      \u0275\u0275conditional((tmp_8_0 = ctx.result()) ? 28 : -1, tmp_8_0);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, NgControlStatusGroup, NgForm, MatButtonModule, MatButton, MatIconModule, MatIcon, MatPaginatorModule, MatPaginator, DatePipe, PricePipe], styles: ['\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 22px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.search[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 14px;\n  height: 44px;\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--mat-sys-primary);\n}\n.search[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--mat-sys-on-surface-variant);\n  flex: none;\n}\n.search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n}\n.clear[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n}\n.chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 1px solid var(--Kova-rule);\n}\n.chips[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--mat-sys-primary);\n  color: var(--mat-sys-on-surface);\n}\n.chips[_ngcontent-%COMP%]   button.on[_ngcontent-%COMP%] {\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  border-color: transparent;\n  font-weight: 600;\n}\n.chips[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n  background: var(--mat-sys-surface-container-low);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.detail-row) {\n  cursor: pointer;\n}\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(.detail-row):hover {\n  background: var(--mat-sys-surface-container);\n}\ntr.open-row[_ngcontent-%COMP%] {\n  background: var(--mat-sys-surface-container);\n}\ntr.open-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-color: transparent;\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 32px;\n}\n.order-no[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  font-size: 0.8125rem;\n}\n.chev[_ngcontent-%COMP%] {\n  transition: transform 200ms ease;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chev.turned[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.src[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8125rem;\n}\n.src[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.open[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.done[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.stop[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.owed[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.paid[_ngcontent-%COMP%] {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.detail-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0 14px 22px;\n  white-space: normal;\n  background: var(--mat-sys-surface-container);\n}\n.detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 28px;\n}\n.detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n}\n.detail[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 22px;\n}\ndl[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 88px 1fr;\n  gap: 10px;\n  align-items: baseline;\n}\ndt[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  word-break: break-word;\n}\n.address[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.65;\n}\n.items[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.items[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 1fr auto auto;\n  gap: 12px;\n  align-items: center;\n}\n.items[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.what[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.what[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.what[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\n.qty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.totals[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.totals[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr auto;\n}\n.totals[_ngcontent-%COMP%]   .grand[_ngcontent-%COMP%] {\n  padding-top: 8px;\n  margin-top: 4px;\n  border-top: 1px solid var(--Kova-rule);\n  font-weight: 600;\n}\n.totals[_ngcontent-%COMP%]   .grand[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%], \n.totals[_ngcontent-%COMP%]   .grand[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  color: var(--mat-sys-on-surface);\n}\n.update[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.update[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.update[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.update[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 38px;\n  padding: 0 10px;\n  border-radius: 8px;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface);\n  border: 1px solid var(--Kova-rule);\n}\n.update[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.update[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.pair[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.update[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 4px;\n}\n.timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.timeline[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: -16px;\n  top: 5px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--mat-sys-primary);\n}\n.timeline[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n.timeline[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n}\n.timeline[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n}\n@media (max-width: 1099px) {\n  .detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n}\n/*# sourceMappingURL=admin-orders.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminOrders, [{
    type: Component,
    args: [{ selector: "Kova-admin-orders", imports: [DatePipe, FormsModule, MatButtonModule, MatIconModule, MatPaginatorModule, PricePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Fulfilment</span>
        <h1>Orders</h1>
        <small class="muted numeric">{{ result()?.total ?? 0 }} matching \xB7 {{ openCount() }} still open</small>
      </div>
      <button mat-stroked-button (click)="exportCsv()" [disabled]="!result()?.items?.length">
        <mat-icon fontSet="material-symbols-outlined">download</mat-icon>
        Export page
      </button>
    </header>

    <div class="filters">
      <div class="search">
        <mat-icon fontSet="material-symbols-outlined">search</mat-icon>
        <input type="search" [value]="term()" (input)="onSearch($event)"
               placeholder="Order number, customer, phone, city or product"
               aria-label="Search orders" />
        @if (term()) {
          <button class="clear" (click)="term.set(''); load(1)" aria-label="Clear the search">
            <mat-icon fontSet="material-symbols-outlined">close</mat-icon>
          </button>
        }
      </div>

      <div class="chips" role="group" aria-label="Filter by status">
        <button [class.on]="!statusFilter()" (click)="setStatus(null)">All</button>
        @for (status of statuses; track status) {
          <button [class.on]="statusFilter() === status" (click)="setStatus(status)">
            {{ label(status) }}
          </button>
        }
      </div>

      <div class="chips" role="group" aria-label="Filter by order source">
        <button [class.on]="!sourceFilter()" (click)="setSource(null)">Any source</button>
        @for (source of sources; track source) {
          <button [class.on]="sourceFilter() === source" (click)="setSource(source)">
            <mat-icon fontSet="material-symbols-outlined">{{ source === 'Web' ? 'desktop_windows' : 'smartphone' }}</mat-icon>
            {{ source }}
          </button>
        }
      </div>
    </div>

    @if (result(); as page) {
      <div class="scroll">
        <table>
          <thead>
            <tr>
              <th>Order ID</th><th>Customer</th><th>Date &amp; time</th>
              <th class="right">Items</th><th class="right">Amount</th>
              <th>Payment</th><th>Status</th><th>Source</th><th></th>
            </tr>
          </thead>
          <tbody>
            @for (order of page.items; track order.id) {
              <tr [class.open-row]="active()?.id === order.id" (click)="openOrder(order)">
                <td class="order-no">{{ order.orderNumber }}</td>
                <td>{{ order.customerName }}</td>
                <td class="numeric muted">{{ order.createdAt | date:'d MMM yyyy, HH:mm' }}</td>
                <td class="right numeric">{{ order.itemCount }}</td>
                <td class="right numeric">{{ order.total |KovaPrice }}</td>
                <td><span class="pill pay" [class]="payTone(order.paymentStatus)">{{ order.paymentStatus }}</span></td>
                <td><span class="pill" [class]="tone(order.status)">{{ label(order.status) }}</span></td>
                <td>
                  <span class="src">
                    <mat-icon fontSet="material-symbols-outlined">{{ order.source === 'Web' ? 'desktop_windows' : 'smartphone' }}</mat-icon>
                    {{ order.source }}
                  </span>
                </td>
                <td class="right">
                  <mat-icon fontSet="material-symbols-outlined" class="chev"
                            [class.turned]="active()?.id === order.id">expand_more</mat-icon>
                </td>
              </tr>

              @if (active(); as o) {
                @if (o.id === order.id) {
                  <tr class="detail-row">
                    <td colspan="9">
                      <div class="detail">
                        <section>
                          <h4 class="eyebrow">Customer</h4>
                          <dl>
                            <div><dt>Name</dt><dd>{{ o.customerName }}</dd></div>
                            <div><dt>Email</dt><dd>{{ o.customerEmail }}</dd></div>
                            <div><dt>Phone</dt><dd class="numeric">{{ o.customerPhone }}</dd></div>
                          </dl>

                          <h4 class="eyebrow">Delivery address</h4>
                          <p class="address">
                            {{ o.shippingAddress.fullName }}<br />
                            {{ o.shippingAddress.line1 }}@if (o.shippingAddress.line2) {, {{ o.shippingAddress.line2 }}}<br />
                            {{ o.shippingAddress.city }}, {{ o.shippingAddress.state }}
                            <span class="numeric">{{ o.shippingAddress.postalCode }}</span><br />
                            {{ o.shippingAddress.country }}
                          </p>

                          <h4 class="eyebrow">Payment</h4>
                          <dl>
                            <div><dt>Method</dt><dd>{{ o.paymentMethod }}</dd></div>
                            <div><dt>State</dt><dd>{{ o.paymentStatus }}</dd></div>
                            <div><dt>Source</dt><dd>{{ o.source }}</dd></div>
                            @if (o.trackingNumber) {
                              <div><dt>Tracking</dt><dd class="numeric">{{ o.carrier }} {{ o.trackingNumber }}</dd></div>
                            }
                          </dl>
                        </section>

                        <section>
                          <h4 class="eyebrow">Products ordered</h4>
                          <ul class="items">
                            @for (item of o.items; track item.productId) {
                              <li>
                                <img [src]="item.imageUrl" alt="" />
                                <span class="what">
                                  <strong>{{ item.name }}</strong>
                                  <small class="muted numeric">{{ item.unitPrice |KovaPrice }} each</small>
                                </span>
                                <span class="numeric qty">\xD7{{ item.quantity }}</span>
                                <span class="numeric">{{ item.lineTotal |KovaPrice }}</span>
                              </li>
                            }
                          </ul>

                          <dl class="totals">
                            <div><dt>Subtotal</dt><dd class="numeric">{{ o.subtotal |KovaPrice }}</dd></div>
                            @if (o.discount) { <div><dt>Discount</dt><dd class="numeric">\u2212{{ o.discount |KovaPrice }}</dd></div> }
                            <div><dt>Delivery</dt><dd class="numeric">{{ o.shipping === 0 ? 'Free' : (o.shipping |KovaPrice) }}</dd></div>
                            <div><dt>Tax</dt><dd class="numeric">{{ o.tax |KovaPrice }}</dd></div>
                            <div class="grand"><dt>Total</dt><dd class="numeric">{{ o.total |KovaPrice }}</dd></div>
                          </dl>
                        </section>

                        <section>
                          <h4 class="eyebrow">Move this order along</h4>
                          <form class="update" (submit)="save($event, o)">
                            <label><span class="eyebrow">Status</span>
                              <select [value]="nextStatus()" (change)="nextStatus.set($any($event.target).value)">
                                @for (status of statuses; track status) {
                                  <option [value]="status">{{ label(status) }}</option>
                                }
                              </select>
                            </label>
                            <label><span class="eyebrow">Note for the customer</span>
                              <input [value]="note()" (input)="note.set(text($event))" placeholder="Handed to the carrier" /></label>
                            <label><span class="eyebrow">Current location</span>
                              <input [value]="location()" (input)="location.set(text($event))" placeholder="Kanpur hub" /></label>
                            <div class="pair">
                              <label><span class="eyebrow">Carrier</span>
                                <input [value]="carrier()" (input)="carrier.set(text($event))" /></label>
                              <label><span class="eyebrow">Tracking no.</span>
                                <input class="numeric" [value]="tracking()" (input)="tracking.set(text($event))" /></label>
                            </div>
                            <button mat-flat-button type="submit">Update order</button>
                          </form>

                          <h4 class="eyebrow">History</h4>
                          <ol class="timeline">
                            @for (event of o.timeline; track event.at) {
                              <li>
                                <strong>{{ label(event.status) }}</strong>
                                <span class="muted">{{ event.message }}</span>
                                <small class="muted numeric">
                                  {{ event.at | date:'d MMM, HH:mm' }}@if (event.location) { \xB7 {{ event.location }}}
                                </small>
                              </li>
                            }
                          </ol>
                        </section>
                      </div>
                    </td>
                  </tr>
                }
              }
            } @empty {
              <tr><td colspan="9" class="muted empty">No orders match those filters.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                     [pageSizeOptions]="[10, 20, 50]" (page)="onPage($event)" aria-label="Order pages" />
    }
  `, styles: ['/* angular:styles/component:css;143c839dc4c6d55d763772281e1c4f6580ec1e1f146a26f47c93ff2ccfe62a5b;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-orders.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 22px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.filters {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.search {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 0 14px;\n  height: 44px;\n  border-radius: 999px;\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.search:focus-within {\n  border-color: var(--mat-sys-primary);\n}\n.search mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: var(--mat-sys-on-surface-variant);\n  flex: none;\n}\n.search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  background: transparent;\n  outline: none;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n}\n.clear {\n  display: grid;\n  place-items: center;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n}\n.chips {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.chips button {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: 999px;\n  cursor: pointer;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 1px solid var(--Kova-rule);\n}\n.chips button:hover {\n  border-color: var(--mat-sys-primary);\n  color: var(--mat-sys-on-surface);\n}\n.chips button.on {\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  border-color: transparent;\n  font-weight: 600;\n}\n.chips mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.scroll {\n  overflow-x: auto;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth,\ntd {\n  text-align: left;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--Kova-rule);\n  white-space: nowrap;\n}\nth {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n  background: var(--mat-sys-surface-container-low);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\ntbody tr:not(.detail-row) {\n  cursor: pointer;\n}\ntbody tr:not(.detail-row):hover {\n  background: var(--mat-sys-surface-container);\n}\ntr.open-row {\n  background: var(--mat-sys-surface-container);\n}\ntr.open-row td {\n  border-bottom-color: transparent;\n}\n.right {\n  text-align: right;\n}\n.empty {\n  text-align: center;\n  padding: 32px;\n}\n.order-no {\n  font-family: var(--Kova-mono);\n  font-weight: 600;\n  font-size: 0.8125rem;\n}\n.chev {\n  transition: transform 200ms ease;\n  color: var(--mat-sys-on-surface-variant);\n}\n.chev.turned {\n  transform: rotate(180deg);\n}\n.src {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 0.8125rem;\n}\n.src mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 999px;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\n.pill.open {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.done {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.stop {\n  background: color-mix(in srgb, var(--viz-critical, #d03b3b) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.owed {\n  background: color-mix(in srgb, var(--viz-warning, #fab219) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.pill.paid {\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 22%, transparent);\n  color: var(--mat-sys-on-surface);\n}\n.detail-row td {\n  padding: 0 14px 22px;\n  white-space: normal;\n  background: var(--mat-sys-surface-container);\n}\n.detail {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 28px;\n}\n.detail h4 {\n  margin: 0 0 10px;\n}\n.detail h4:not(:first-child) {\n  margin-top: 22px;\n}\ndl {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ndl div {\n  display: grid;\n  grid-template-columns: 88px 1fr;\n  gap: 10px;\n  align-items: baseline;\n}\ndt {\n  font-size: 0.75rem;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n  font-size: 0.8125rem;\n  word-break: break-word;\n}\n.address {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.65;\n}\n.items {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.items li {\n  display: grid;\n  grid-template-columns: 40px 1fr auto auto;\n  gap: 12px;\n  align-items: center;\n}\n.items img {\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  object-fit: cover;\n}\n.what {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n}\n.what strong {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n.what small {\n  font-size: 0.6875rem;\n}\n.qty {\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface-variant);\n}\n.totals {\n  margin-top: 16px;\n  padding-top: 12px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.totals div {\n  grid-template-columns: 1fr auto;\n}\n.totals .grand {\n  padding-top: 8px;\n  margin-top: 4px;\n  border-top: 1px solid var(--Kova-rule);\n  font-weight: 600;\n}\n.totals .grand dt,\n.totals .grand dd {\n  font-size: 0.9375rem;\n  color: var(--mat-sys-on-surface);\n}\n.update {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.update label {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.update input,\n.update select {\n  height: 38px;\n  padding: 0 10px;\n  border-radius: 8px;\n  font: inherit;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface);\n  border: 1px solid var(--Kova-rule);\n}\n.update input:focus,\n.update select:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.pair {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n}\n.update button {\n  margin-top: 4px;\n}\n.timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0 0 0 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.timeline li {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.timeline li::before {\n  content: "";\n  position: absolute;\n  left: -16px;\n  top: 5px;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--mat-sys-primary);\n}\n.timeline strong {\n  font-size: 0.8125rem;\n}\n.timeline span {\n  font-size: 0.75rem;\n}\n.timeline small {\n  font-size: 0.6875rem;\n}\nmat-paginator {\n  background: transparent;\n}\n@media (max-width: 1099px) {\n  .detail {\n    grid-template-columns: 1fr;\n    gap: 22px;\n  }\n}\n/*# sourceMappingURL=admin-orders.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminOrders, { className: "AdminOrders", filePath: "src/app/features/admin/admin-orders.ts", lineNumber: 324 });
})();
function nextAfter(status) {
  const index = TRACKING_STEPS.indexOf(status);
  if (index < 0 || index === TRACKING_STEPS.length - 1)
    return status;
  return TRACKING_STEPS[index + 1];
}
export {
  AdminOrders
};
//# sourceMappingURL=chunk-6UUNJKN6.js.map
