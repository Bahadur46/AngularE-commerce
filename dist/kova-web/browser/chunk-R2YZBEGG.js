import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-GJGOHRMH.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-EGMN5DDK.js";
import {
  Catalog
} from "./chunk-JTVVANCZ.js";
import {
  ProductCard,
  StarRating
} from "./chunk-ME7HFTVM.js";
import {
  Wishlist
} from "./chunk-UKKEYK4U.js";
import "./chunk-LMPLV25C.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-UKQWQSP6.js";
import "./chunk-346ISJSG.js";
import "./chunk-QSPIOWQC.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-VZ7N6S6Z.js";
import {
  PricePipe
} from "./chunk-U7M6I7OV.js";
import {
  Cart
} from "./chunk-ZFMJUGTV.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
import {
  Auth
} from "./chunk-DYU4NP57.js";
import {
  Router,
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
import {
  DatePipe
} from "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  effect,
  inject,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H2OO3OVH.js";

// src/app/features/products/product-detail.ts
var _c0 = (a0) => ["/category", a0];
var _c1 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.id;
function ProductDetail_Conditional_0_Conditional_15_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Conditional_15_For_2_Template_button_click_0_listener() {
      const image_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.activeImage.set(image_r3));
    });
    \u0275\u0275element(1, "img", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const image_r3 = ctx.$implicit;
    const $index_r5 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("on", image_r3 === ctx_r3.activeImage());
    \u0275\u0275attribute("aria-label", "View image " + ($index_r5 + 1));
    \u0275\u0275advance();
    \u0275\u0275property("src", image_r3, \u0275\u0275sanitizeUrl);
  }
}
function ProductDetail_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ProductDetail_Conditional_0_Conditional_15_For_2_Template, 2, 4, "button", 37, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(p_r6.images);
  }
}
function ProductDetail_Conditional_0_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "s", 40);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, ctx));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Save ", p_r6.discountPercent, "%");
  }
}
function ProductDetail_Conditional_0_Conditional_29_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "mat-icon", 19);
    \u0275\u0275text(2, "check_small");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7);
  }
}
function ProductDetail_Conditional_0_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 42)(2, "span", 9);
    \u0275\u0275text(3, "In this box");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ul");
    \u0275\u0275repeaterCreate(7, ProductDetail_Conditional_0_Conditional_29_For_8_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", p_r6.includes.length, " pieces");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(p_r6.includes);
  }
}
function ProductDetail_Conditional_0_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Sold out \u2014 tell us to restock ");
  }
}
function ProductDetail_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const p_r6 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" Only ", p_r6.stock, " left ");
  }
}
function ProductDetail_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " In stock, ships within a working day ");
  }
}
function ProductDetail_Conditional_0_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const spec_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r8[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(spec_r8[1]);
  }
}
function ProductDetail_Conditional_0_Conditional_69_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Conditional_69_For_5_Template_button_click_0_listener() {
      const star_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.newRating.set(star_r11));
    });
    \u0275\u0275elementStart(1, "mat-icon", 19);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const star_r11 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275attribute("aria-label", star_r11 + " stars");
    \u0275\u0275advance();
    \u0275\u0275classProp("filled", star_r11 <= ctx_r3.newRating());
  }
}
function ProductDetail_Conditional_0_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 44);
    \u0275\u0275listener("submit", function ProductDetail_Conditional_0_Conditional_69_Template_form_submit_0_listener($event) {
      \u0275\u0275restoreView(_r9);
      const p_r6 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.submitReview($event, p_r6));
    });
    \u0275\u0275elementStart(1, "div", 45)(2, "span", 9);
    \u0275\u0275text(3, "Your rating");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ProductDetail_Conditional_0_Conditional_69_For_5_Template, 3, 3, "button", 46, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field")(7, "mat-label");
    \u0275\u0275text(8, "Headline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 47);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetail_Conditional_0_Conditional_69_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.newTitle, $event) || (ctx_r3.newTitle = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field")(11, "mat-label");
    \u0275\u0275text(12, "What should other buyers know?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function ProductDetail_Conditional_0_Conditional_69_Template_textarea_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r3 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r3.newBody, $event) || (ctx_r3.newBody = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 49);
    \u0275\u0275text(15, "Post review");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction0(2, _c1));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newTitle);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.newBody);
  }
}
function ProductDetail_Conditional_0_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34)(1, "a", 51);
    \u0275\u0275text(2, "Sign in");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " to write a review.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetail_Conditional_0_For_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "div", 52);
    \u0275\u0275element(2, "Kova-star-rating", 53);
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small", 54);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const review_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("value", review_r12.rating);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r12.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r12.body);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", review_r12.userName, " \xB7 ", \u0275\u0275pipeBind2(9, 5, review_r12.createdAt, "d MMM yyyy"));
  }
}
function ProductDetail_Conditional_0_ForEmpty_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 34);
    \u0275\u0275text(1, "No reviews yet. Yours would be the first.");
    \u0275\u0275elementEnd();
  }
}
function ProductDetail_Conditional_0_Conditional_75_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "Kova-product-card", 57);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("product", item_r13);
  }
}
function ProductDetail_Conditional_0_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 36)(1, "div", 55)(2, "h2");
    \u0275\u0275text(3, "Also on this shelf");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 56);
    \u0275\u0275repeaterCreate(5, ProductDetail_Conditional_0_Conditional_75_For_6_Template, 1, 1, "Kova-product-card", 57, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r3.related());
  }
}
function ProductDetail_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
    \u0275\u0275text(3, "Shop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 4)(13, "div", 5);
    \u0275\u0275element(14, "img", 6);
    \u0275\u0275conditionalCreate(15, ProductDetail_Conditional_0_Conditional_15_Template, 3, 0, "div", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "span", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "h1");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "Kova-star-rating", 10);
    \u0275\u0275elementStart(22, "div", 11)(23, "strong", 12);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "KovaPrice");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, ProductDetail_Conditional_0_Conditional_26_Template, 5, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 13);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, ProductDetail_Conditional_0_Conditional_29_Template, 9, 1, "div", 14);
    \u0275\u0275elementStart(30, "p", 15);
    \u0275\u0275conditionalCreate(31, ProductDetail_Conditional_0_Conditional_31_Template, 1, 0)(32, ProductDetail_Conditional_0_Conditional_32_Template, 1, 1)(33, ProductDetail_Conditional_0_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 16)(35, "div", 17)(36, "button", 18);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.step(-1));
    });
    \u0275\u0275elementStart(37, "mat-icon", 19);
    \u0275\u0275text(38, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "span", 20);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 21);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Template_button_click_41_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.step(1));
    });
    \u0275\u0275elementStart(42, "mat-icon", 19);
    \u0275\u0275text(43, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 22);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Template_button_click_44_listener() {
      const p_r6 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addToCart(p_r6));
    });
    \u0275\u0275text(45, " Add to cart ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 23);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Template_button_click_46_listener() {
      const p_r6 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleSaved(p_r6));
    });
    \u0275\u0275elementStart(47, "mat-icon", 19);
    \u0275\u0275text(48, "favorite");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 24);
    \u0275\u0275listener("click", function ProductDetail_Conditional_0_Template_button_click_50_listener() {
      const p_r6 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.orderNow(p_r6));
    });
    \u0275\u0275text(51, " Order Now ");
    \u0275\u0275elementStart(52, "mat-icon", 25);
    \u0275\u0275text(53, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(54, "mat-divider");
    \u0275\u0275elementStart(55, "mat-tab-group", 26)(56, "mat-tab", 27)(57, "p", 28);
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "mat-tab", 29)(60, "dl", 30);
    \u0275\u0275repeaterCreate(61, ProductDetail_Conditional_0_For_62_Template, 5, 2, "div", null, _forTrack0);
    \u0275\u0275elementStart(63, "div")(64, "dt");
    \u0275\u0275text(65, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "dd", 31);
    \u0275\u0275text(67);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "mat-tab", 32);
    \u0275\u0275conditionalCreate(69, ProductDetail_Conditional_0_Conditional_69_Template, 16, 3, "form", 33)(70, ProductDetail_Conditional_0_Conditional_70_Template, 4, 0, "p", 34);
    \u0275\u0275elementStart(71, "ul", 35);
    \u0275\u0275repeaterCreate(72, ProductDetail_Conditional_0_For_73_Template, 10, 8, "li", null, _forTrack1, false, ProductDetail_Conditional_0_ForEmpty_74_Template, 2, 0, "li", 34);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275conditionalCreate(75, ProductDetail_Conditional_0_Conditional_75_Template, 7, 0, "section", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const p_r6 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(37, _c0, p_r6.categoryName.toLowerCase()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r6.categoryName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r3.activeImage(), \u0275\u0275sanitizeUrl)("alt", p_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r6.images.length > 1 ? 15 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", p_r6.brand, " \xB7 ", p_r6.sku);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.name);
    \u0275\u0275advance();
    \u0275\u0275property("value", p_r6.ratingAverage)("count", p_r6.ratingCount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 35, p_r6.price));
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_13_0 = p_r6.compareAtPrice) ? 26 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.shortDescription);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r6.includes.length ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("low", p_r6.stock > 0 && p_r6.stock <= 5)("out", p_r6.stock === 0);
    \u0275\u0275advance();
    \u0275\u0275conditional(p_r6.stock === 0 ? 31 : p_r6.stock <= 5 ? 32 : 33);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r3.quantity() <= 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r3.quantity());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r3.quantity() >= p_r6.stock);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", p_r6.stock === 0);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-pressed", ctx_r3.saved(p_r6.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r3.saved(p_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.saved(p_r6.id) ? "Saved" : "Save", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", p_r6.stock === 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(p_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.specEntries(p_r6));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r6.sku);
    \u0275\u0275advance();
    \u0275\u0275property("label", "Reviews (" + ctx_r3.reviews().length + ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.auth.isSignedIn() ? 69 : 70);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.reviews());
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.related().length ? 75 : -1);
  }
}
function ProductDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h1");
    \u0275\u0275text(2, "We couldn't find that product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 34);
    \u0275\u0275text(4, "It may have been retired. ");
    \u0275\u0275elementStart(5, "a", 2);
    \u0275\u0275text(6, "Browse what's in stock");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ".");
    \u0275\u0275elementEnd()();
  }
}
var ProductDetail = class _ProductDetail {
  /** Bound from the :slug route param by withComponentInputBinding(). */
  slug = input.required(...ngDevMode ? [{ debugName: "slug" }] : []);
  catalog = inject(Catalog);
  cart = inject(Cart);
  wishlist = inject(Wishlist);
  notify = inject(Notify);
  router = inject(Router);
  auth = inject(Auth);
  product = signal(null, ...ngDevMode ? [{ debugName: "product" }] : []);
  related = signal([], ...ngDevMode ? [{ debugName: "related" }] : []);
  reviews = signal([], ...ngDevMode ? [{ debugName: "reviews" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  quantity = signal(1, ...ngDevMode ? [{ debugName: "quantity" }] : []);
  activeImage = signal("", ...ngDevMode ? [{ debugName: "activeImage" }] : []);
  newRating = signal(5, ...ngDevMode ? [{ debugName: "newRating" }] : []);
  newTitle = "";
  newBody = "";
  saved(productId) {
    return this.wishlist.ids().has(productId);
  }
  constructor() {
    effect(() => {
      const slug = this.slug();
      this.loading.set(true);
      this.quantity.set(1);
      this.catalog.bySlug(slug).subscribe({
        next: (product) => {
          this.product.set(product);
          this.activeImage.set(product.images[0] ?? "");
          this.loading.set(false);
          this.catalog.related(product.id).subscribe((list) => this.related.set(list));
          this.catalog.reviews(product.id).subscribe((list) => this.reviews.set(list));
        },
        error: () => {
          this.product.set(null);
          this.loading.set(false);
        }
      });
    });
  }
  step(delta) {
    this.quantity.update((q) => Math.max(1, q + delta));
  }
  specEntries(product) {
    return Object.entries(product.specs ?? {});
  }
  addToCart(product) {
    if (!this.requireAccount())
      return;
    this.cart.add(product.id, this.quantity());
  }
  /** Straight to checkout with the chosen quantity already in the cart. */
  orderNow(product) {
    if (!this.requireAccount())
      return;
    this.cart.addItem(product.id, this.quantity()).subscribe({
      next: () => void this.router.navigate(["/checkout"]),
      error: () => void 0
      // the error interceptor already surfaced the reason
    });
  }
  toggleSaved(product) {
    if (!this.requireAccount())
      return;
    this.wishlist.toggle(product.id);
  }
  submitReview(event, product) {
    event.preventDefault();
    if (!this.newTitle.trim() || !this.newBody.trim()) {
      this.notify.problem("Add a headline and a few words before posting.");
      return;
    }
    this.catalog.addReview(product.id, this.newRating(), this.newTitle, this.newBody).subscribe({
      next: (review) => {
        this.reviews.update((list) => [review, ...list]);
        this.newTitle = "";
        this.newBody = "";
        this.notify.done("Review posted");
      }
    });
  }
  requireAccount() {
    if (this.auth.isSignedIn())
      return true;
    this.router.navigate(["/sign-in"], { queryParams: { next: this.router.url } });
    return false;
  }
  static \u0275fac = function ProductDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductDetail, selectors: [["Kova-product-detail"]], inputs: { slug: [1, "slug"] }, decls: 2, vars: 1, consts: [[1, "page"], [1, "crumbs", "muted"], ["routerLink", "/shop"], [3, "routerLink"], [1, "split"], [1, "gallery"], ["fetchpriority", "high", 1, "main", 3, "src", "alt"], [1, "thumbs"], [1, "buy"], [1, "eyebrow"], [3, "value", "count"], [1, "pricing"], [1, "price"], [1, "lede"], [1, "includes"], [1, "stock", "numeric"], [1, "qty-row"], [1, "qty"], ["mat-icon-button", "", "aria-label", "Decrease quantity", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined"], ["aria-live", "polite", 1, "numeric"], ["mat-icon-button", "", "aria-label", "Increase quantity", 3, "click", "disabled"], ["mat-flat-button", "", 1, "add", 3, "click", "disabled"], ["mat-stroked-button", "", 1, "save", 3, "click"], ["mat-flat-button", "", 1, "order", "buy", 3, "click", "disabled"], ["fontSet", "material-symbols-outlined", "iconPositionEnd", ""], ["animationDuration", "180ms", 1, "tabs"], ["label", "Details"], [1, "body-copy"], ["label", "Specifications"], [1, "specs"], [1, "numeric"], [3, "label"], [1, "review-form"], [1, "muted"], [1, "reviews"], [1, "related"], [1, "thumb", 3, "on"], [1, "thumb", 3, "click"], ["alt", "", "loading", "lazy", 3, "src"], [1, "price", "muted"], [1, "tag-sale"], [1, "includes-head"], [1, "eyebrow", "numeric"], [1, "review-form", 3, "submit"], [1, "stars-input"], ["type", "button", "mat-icon-button", ""], ["matInput", "", "name", "title", "required", "", "maxlength", "80", 3, "ngModelChange", "ngModel"], ["matInput", "", "rows", "3", "name", "body", "required", "", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "type", "submit"], ["type", "button", "mat-icon-button", "", 3, "click"], ["routerLink", "/sign-in"], [1, "row"], [3, "value"], [1, "muted", "numeric"], [1, "section-head"], [1, "grid"], [3, "product"]], template: function ProductDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, ProductDetail_Conditional_0_Template, 76, 39, "div", 0)(1, ProductDetail_Conditional_1_Template, 8, 0, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.product()) ? 0 : !ctx.loading() ? 1 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, NgModel, NgForm, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatTabsModule, MatTab, MatTabGroup, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, StarRating, ProductCard, DatePipe, PricePipe], styles: ['\n\n.crumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  font-size: 0.8125rem;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.crumbs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 56px;\n  align-items: start;\n}\n.gallery[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 92px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.main[_ngcontent-%COMP%] {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-high);\n}\n.thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  padding: 0;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid var(--Kova-rule);\n  background: none;\n}\n.thumb.on[_ngcontent-%COMP%] {\n  border-color: var(--mat-sys-primary);\n  border-width: 2px;\n}\n.thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.buy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.buy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n}\n.pricing[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.pricing[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.65;\n  color: var(--mat-sys-on-surface-variant);\n  max-width: 48ch;\n}\n.stock[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-primary);\n}\n.stock.low[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n}\n.stock.out[_ngcontent-%COMP%] {\n  color: var(--mat-sys-error);\n}\n.qty-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 4px 0 8px;\n}\n.qty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: 999px;\n  padding: 2px;\n}\n.qty[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  min-width: 28px;\n  text-align: center;\n  font-size: 0.9375rem;\n}\n.add[_ngcontent-%COMP%] {\n  flex: 1 1 180px;\n  --mat-filled-button-container-height: 46px;\n}\n.buy[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n}\n.save[_ngcontent-%COMP%]   mat-icon.on[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.tabs[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.body-copy[_ngcontent-%COMP%] {\n  line-height: 1.7;\n  color: var(--mat-sys-on-surface-variant);\n  padding-top: 20px;\n}\n.includes[_ngcontent-%COMP%] {\n  padding: 16px 18px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: color-mix(in srgb, var(--mat-sys-tertiary-container) 18%, transparent);\n}\n.includes-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px 18px;\n}\n.includes[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: start;\n  gap: 8px;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n}\n.includes[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--Kova-gold);\n  flex: none;\n}\n@media (max-width: 599px) {\n  .includes[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.specs[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid var(--Kova-rule);\n}\n.specs[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n  font-size: 0.875rem;\n}\ndt[_ngcontent-%COMP%] {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.review-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 20px 0;\n  align-items: start;\n}\n.stars-input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 4px;\n}\n.stars-input[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.stars-input[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--mat-sys-outline);\n}\n.stars-input[_ngcontent-%COMP%]   mat-icon.filled[_ngcontent-%COMP%] {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.review-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: min(100%, 460px);\n}\n.reviews[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.reviews[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.reviews[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  line-height: 1.6;\n}\n.related[_ngcontent-%COMP%] {\n  margin-top: 88px;\n}\n@media (max-width: 899px) {\n  .split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .gallery[_ngcontent-%COMP%] {\n    position: static;\n  }\n}\n/*# sourceMappingURL=product-detail.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductDetail, [{
    type: Component,
    args: [{ selector: "Kova-product-detail", imports: [
      RouterLink,
      FormsModule,
      MatButtonModule,
      MatIconModule,
      MatTabsModule,
      MatDividerModule,
      MatFormFieldModule,
      MatInputModule,
      DatePipe,
      PricePipe,
      StarRating,
      ProductCard
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    @if (product(); as p) {
      <div class="page">
        <nav class="crumbs muted">
          <a routerLink="/shop">Shop</a>
          <span>/</span>
          <a [routerLink]="['/category', p.categoryName.toLowerCase()]">{{ p.categoryName }}</a>
          <span>/</span>
          <span>{{ p.name }}</span>
        </nav>

        <div class="split">
          <div class="gallery">
            <img class="main" [src]="activeImage()" [alt]="p.name" fetchpriority="high" />
            @if (p.images.length > 1) {
              <div class="thumbs">
                @for (image of p.images; track image) {
                  <button class="thumb" [class.on]="image === activeImage()" (click)="activeImage.set(image)"
                          [attr.aria-label]="'View image ' + ($index + 1)">
                    <img [src]="image" alt="" loading="lazy" />
                  </button>
                }
              </div>
            }
          </div>

          <div class="buy">
            <span class="eyebrow">{{ p.brand }} \xB7 {{ p.sku }}</span>
            <h1>{{ p.name }}</h1>
            <Kova-star-rating [value]="p.ratingAverage" [count]="p.ratingCount" />

            <div class="pricing">
              <strong class="price">{{ p.price |KovaPrice }}</strong>
              @if (p.compareAtPrice; as was) {
                <s class="price muted">{{ was |KovaPrice }}</s>
                <span class="tag-sale">Save {{ p.discountPercent }}%</span>
              }
            </div>

            <p class="lede">{{ p.shortDescription }}</p>

            @if (p.includes.length) {
              <div class="includes">
                <div class="includes-head">
                  <span class="eyebrow">In this box</span>
                  <span class="eyebrow numeric">{{ p.includes.length }} pieces</span>
                </div>
                <ul>
                  @for (item of p.includes; track item) {
                    <li><mat-icon fontSet="material-symbols-outlined">check_small</mat-icon>{{ item }}</li>
                  }
                </ul>
              </div>
            }

            <p class="stock numeric" [class.low]="p.stock > 0 && p.stock <= 5" [class.out]="p.stock === 0">
              @if (p.stock === 0) { Sold out \u2014 tell us to restock }
              @else if (p.stock <= 5) { Only {{ p.stock }} left }
              @else { In stock, ships within a working day }
            </p>

            <div class="qty-row">
              <div class="qty">
                <button mat-icon-button (click)="step(-1)" [disabled]="quantity() <= 1" aria-label="Decrease quantity">
                  <mat-icon fontSet="material-symbols-outlined">remove</mat-icon>
                </button>
                <span class="numeric" aria-live="polite">{{ quantity() }}</span>
                <button mat-icon-button (click)="step(1)" [disabled]="quantity() >= p.stock" aria-label="Increase quantity">
                  <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
                </button>
              </div>

              <button mat-flat-button class="add" [disabled]="p.stock === 0" (click)="addToCart(p)">
                Add to cart
              </button>

              <button mat-stroked-button class="save" (click)="toggleSaved(p)"
                      [attr.aria-pressed]="saved(p.id)">
                <mat-icon fontSet="material-symbols-outlined" [class.on]="saved(p.id)">favorite</mat-icon>
                {{ saved(p.id) ? 'Saved' : 'Save' }}
              </button>

              <button mat-flat-button class="order buy" [disabled]="p.stock === 0" (click)="orderNow(p)">
                Order Now
                <mat-icon fontSet="material-symbols-outlined" iconPositionEnd>arrow_forward</mat-icon>
              </button>
            </div>

            <mat-divider />

            <mat-tab-group class="tabs" animationDuration="180ms">
              <mat-tab label="Details">
                <p class="body-copy">{{ p.description }}</p>
              </mat-tab>

              <mat-tab label="Specifications">
                <dl class="specs">
                  @for (spec of specEntries(p); track spec[0]) {
                    <div><dt>{{ spec[0] }}</dt><dd class="numeric">{{ spec[1] }}</dd></div>
                  }
                  <div><dt>SKU</dt><dd class="numeric">{{ p.sku }}</dd></div>
                </dl>
              </mat-tab>

              <mat-tab [label]="'Reviews (' + reviews().length + ')'">
                @if (auth.isSignedIn()) {
                  <form class="review-form" (submit)="submitReview($event, p)">
                    <div class="stars-input">
                      <span class="eyebrow">Your rating</span>
                      @for (star of [1,2,3,4,5]; track star) {
                        <button type="button" mat-icon-button (click)="newRating.set(star)"
                                [attr.aria-label]="star + ' stars'">
                          <mat-icon fontSet="material-symbols-outlined"
                                    [class.filled]="star <= newRating()">star</mat-icon>
                        </button>
                      }
                    </div>
                    <mat-form-field>
                      <mat-label>Headline</mat-label>
                      <input matInput [(ngModel)]="newTitle" name="title" required maxlength="80" />
                    </mat-form-field>
                    <mat-form-field>
                      <mat-label>What should other buyers know?</mat-label>
                      <textarea matInput rows="3" [(ngModel)]="newBody" name="body" required></textarea>
                    </mat-form-field>
                    <button mat-flat-button type="submit">Post review</button>
                  </form>
                } @else {
                  <p class="muted"><a routerLink="/sign-in">Sign in</a> to write a review.</p>
                }

                <ul class="reviews">
                  @for (review of reviews(); track review.id) {
                    <li>
                      <div class="row">
                        <Kova-star-rating [value]="review.rating" />
                        <strong>{{ review.title }}</strong>
                      </div>
                      <p>{{ review.body }}</p>
                      <small class="muted numeric">{{ review.userName }} \xB7 {{ review.createdAt | date:'d MMM yyyy' }}</small>
                    </li>
                  } @empty {
                    <li class="muted">No reviews yet. Yours would be the first.</li>
                  }
                </ul>
              </mat-tab>
            </mat-tab-group>
          </div>
        </div>

        @if (related().length) {
          <section class="related">
            <div class="section-head"><h2>Also on this shelf</h2></div>
            <div class="grid">
              @for (item of related(); track item.id) { <Kova-product-card [product]="item" /> }
            </div>
          </section>
        }
      </div>
    } @else if (!loading()) {
      <div class="page">
        <h1>We couldn't find that product</h1>
        <p class="muted">It may have been retired. <a routerLink="/shop">Browse what's in stock</a>.</p>
      </div>
    }
  `, styles: ['/* angular:styles/component:css;a220e6baac15bb49bef615ff09f9ef6ea65c066ed7a896f6af8010df66dc802b;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/products/product-detail.ts */\n.crumbs {\n  display: flex;\n  gap: 8px;\n  font-size: 0.8125rem;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n}\n.crumbs a:hover {\n  text-decoration: underline;\n}\n.split {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 56px;\n  align-items: start;\n}\n.gallery {\n  position: sticky;\n  top: 92px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.main {\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n  border-radius: 16px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-high);\n}\n.thumbs {\n  display: flex;\n  gap: 10px;\n}\n.thumb {\n  width: 72px;\n  height: 72px;\n  padding: 0;\n  border-radius: 10px;\n  overflow: hidden;\n  cursor: pointer;\n  border: 1px solid var(--Kova-rule);\n  background: none;\n}\n.thumb.on {\n  border-color: var(--mat-sys-primary);\n  border-width: 2px;\n}\n.thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.buy {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.buy h1 {\n  font-size: clamp(1.75rem, 3vw, 2.5rem);\n}\n.pricing {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.pricing strong {\n  font-size: 1.75rem;\n  font-weight: 600;\n}\n.lede {\n  margin: 0;\n  font-size: 1rem;\n  line-height: 1.65;\n  color: var(--mat-sys-on-surface-variant);\n  max-width: 48ch;\n}\n.stock {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--mat-sys-primary);\n}\n.stock.low {\n  color: var(--mat-sys-tertiary);\n}\n.stock.out {\n  color: var(--mat-sys-error);\n}\n.qty-row {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  flex-wrap: wrap;\n  margin: 4px 0 8px;\n}\n.qty {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  border: 1px solid var(--mat-sys-outline);\n  border-radius: 999px;\n  padding: 2px;\n}\n.qty span {\n  min-width: 28px;\n  text-align: center;\n  font-size: 0.9375rem;\n}\n.add {\n  flex: 1 1 180px;\n  --mat-filled-button-container-height: 46px;\n}\n.buy {\n  flex: 1 1 100%;\n}\n.save mat-icon.on {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.tabs {\n  margin-top: 8px;\n}\n.body-copy {\n  line-height: 1.7;\n  color: var(--mat-sys-on-surface-variant);\n  padding-top: 20px;\n}\n.includes {\n  padding: 16px 18px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: color-mix(in srgb, var(--mat-sys-tertiary-container) 18%, transparent);\n}\n.includes-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n}\n.includes ul {\n  list-style: none;\n  margin: 12px 0 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 8px 18px;\n}\n.includes li {\n  display: flex;\n  align-items: start;\n  gap: 8px;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n}\n.includes mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--Kova-gold);\n  flex: none;\n}\n@media (max-width: 599px) {\n  .includes ul {\n    grid-template-columns: 1fr;\n  }\n}\n.specs {\n  padding-top: 20px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid var(--Kova-rule);\n}\n.specs div {\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 11px 0;\n  border-bottom: 1px solid var(--Kova-rule);\n  font-size: 0.875rem;\n}\ndt {\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n}\n.review-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding: 20px 0;\n  align-items: start;\n}\n.stars-input {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-bottom: 4px;\n}\n.stars-input .eyebrow {\n  margin-right: 8px;\n}\n.stars-input mat-icon {\n  color: var(--mat-sys-outline);\n}\n.stars-input mat-icon.filled {\n  color: var(--mat-sys-tertiary);\n  font-variation-settings: "FILL" 1;\n}\n.review-form mat-form-field {\n  width: min(100%, 460px);\n}\n.reviews {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.reviews li {\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\n.reviews p {\n  margin: 8px 0;\n  line-height: 1.6;\n}\n.related {\n  margin-top: 88px;\n}\n@media (max-width: 899px) {\n  .split {\n    grid-template-columns: 1fr;\n    gap: 28px;\n  }\n  .gallery {\n    position: static;\n  }\n}\n/*# sourceMappingURL=product-detail.css.map */\n'] }]
  }], () => [], { slug: [{ type: Input, args: [{ isSignal: true, alias: "slug", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductDetail, { className: "ProductDetail", filePath: "src/app/features/products/product-detail.ts", lineNumber: 277 });
})();
export {
  ProductDetail
};
//# sourceMappingURL=chunk-R2YZBEGG.js.map
