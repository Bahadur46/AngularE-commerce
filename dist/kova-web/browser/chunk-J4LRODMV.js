import {
  Catalog
} from "./chunk-JTVVANCZ.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-categories.ts
var _c0 = (a0) => ["/category", a0];
var _forTrack0 = ($index, $item) => $item.id;
function AdminCategories_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 8);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "div", 11)(3, "div", 12)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "p", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "dl")(11, "div")(12, "dt");
    \u0275\u0275text(13, "Slug");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dd", 14);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "dt");
    \u0275\u0275text(18, "Curations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dd", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "dt");
    \u0275\u0275text(23, "Order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd", 14);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "div", 15)(27, "a", 16);
    \u0275\u0275text(28, "View on the shop");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "a", 17);
    \u0275\u0275text(30, "Curations on this shelf");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", row_r2.imageUrl, \u0275\u0275sanitizeUrl)("alt", row_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(row_r2.name);
    \u0275\u0275advance();
    \u0275\u0275classProp("off", !row_r2.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.isActive ? "Live" : "Hidden");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("/", row_r2.slug);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r2.productCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(row_r2.sortOrder);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(11, _c0, row_r2.slug));
  }
}
function AdminCategories_ForEmpty_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("No shelf matches \u201C", ctx_r0.term(), "\u201D.");
  }
}
var AdminCategories = class _AdminCategories {
  catalog = inject(Catalog);
  notify = inject(Notify);
  all = signal([], ...ngDevMode ? [{ debugName: "all" }] : []);
  term = signal("", ...ngDevMode ? [{ debugName: "term" }] : []);
  rows = computed(() => {
    const needle = this.term().trim().toLowerCase();
    if (!needle)
      return this.all();
    return this.all().filter((row) => `${row.name} ${row.slug} ${row.description}`.toLowerCase().includes(needle));
  }, ...ngDevMode ? [{ debugName: "rows" }] : []);
  totalProducts = computed(() => this.all().reduce((count, row) => count + row.productCount, 0), ...ngDevMode ? [{ debugName: "totalProducts" }] : []);
  constructor() {
    this.catalog.categories().subscribe((rows) => this.all.set(rows));
  }
  static \u0275fac = function AdminCategories_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCategories)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCategories, selectors: [["Kova-admin-categories"]], decls: 18, vars: 4, consts: [[1, "head"], [1, "eyebrow"], [1, "muted", "numeric"], [1, "actions"], ["type", "search", "placeholder", "Filter shelves", "aria-label", "Filter categories", 1, "search", 3, "input", "value"], ["mat-flat-button", "", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "cards"], [1, "card"], [1, "muted"], ["loading", "lazy", 3, "src", "alt"], [1, "body"], [1, "title"], [1, "pill"], [1, "numeric"], [1, "row-actions"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-button", "", "routerLink", "../products"]], template: function AdminCategories_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "Catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "small", 2);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "input", 4);
      \u0275\u0275listener("input", function AdminCategories_Template_input_input_9_listener($event) {
        return ctx.term.set($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function AdminCategories_Template_button_click_10_listener() {
        return ctx.notify.problem("Creating a shelf needs the API \u2014 the catalogue here is read-only.");
      });
      \u0275\u0275elementStart(11, "mat-icon", 6);
      \u0275\u0275text(12, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " New category ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275repeaterCreate(15, AdminCategories_For_16_Template, 31, 13, "article", 8, _forTrack0, false, AdminCategories_ForEmpty_17_Template, 2, 1, "p", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate2("", ctx.rows().length, " shelves \xB7 ", ctx.totalProducts(), " curations");
      \u0275\u0275advance(2);
      \u0275\u0275property("value", ctx.term());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.rows());
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 220px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.search[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  min-width: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.body[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.0625rem;\n}\n.body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n.pill[_ngcontent-%COMP%] {\n  padding: 3px 10px;\n  border-radius: 999px;\n  flex: none;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent);\n}\n.pill.off[_ngcontent-%COMP%] {\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\ndl[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 22px;\n  margin: 0;\n}\ndl[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 7px;\n  align-items: baseline;\n}\ndt[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: auto;\n  padding-top: 6px;\n}\n.row-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n}\n@media (max-width: 1099px) {\n  .cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 150px;\n  }\n  .search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=admin-categories.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCategories, [{
    type: Component,
    args: [{ selector: "Kova-admin-categories", imports: [RouterLink, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <header class="head">
      <div>
        <span class="eyebrow">Catalogue</span>
        <h1>Categories</h1>
        <small class="muted numeric">{{ rows().length }} shelves \xB7 {{ totalProducts() }} curations</small>
      </div>
      <div class="actions">
        <input class="search" type="search" placeholder="Filter shelves"
               [value]="term()" (input)="term.set($any($event.target).value)" aria-label="Filter categories" />
        <button mat-flat-button (click)="notify.problem('Creating a shelf needs the API \u2014 the catalogue here is read-only.')">
          <mat-icon fontSet="material-symbols-outlined">add</mat-icon>
          New category
        </button>
      </div>
    </header>

    <div class="cards">
      @for (row of rows(); track row.id) {
        <article class="card">
          <img [src]="row.imageUrl" [alt]="row.name" loading="lazy" />
          <div class="body">
            <div class="title">
              <h2>{{ row.name }}</h2>
              <span class="pill" [class.off]="!row.isActive">{{ row.isActive ? 'Live' : 'Hidden' }}</span>
            </div>
            <p class="muted">{{ row.description }}</p>
            <dl>
              <div><dt>Slug</dt><dd class="numeric">/{{ row.slug }}</dd></div>
              <div><dt>Curations</dt><dd class="numeric">{{ row.productCount }}</dd></div>
              <div><dt>Order</dt><dd class="numeric">{{ row.sortOrder }}</dd></div>
            </dl>
            <div class="row-actions">
              <a mat-stroked-button [routerLink]="['/category', row.slug]">View on the shop</a>
              <a mat-button routerLink="../products">Curations on this shelf</a>
            </div>
          </div>
        </article>
      } @empty {
        <p class="muted">No shelf matches \u201C{{ term() }}\u201D.</p>
      }
    </div>
  `, styles: ["/* angular:styles/component:css;7162c5fee24a34587828c0159708689d6a4429fbc6134bb81f829cad4f9f904a;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-categories.ts */\n.head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 26px;\n}\n.head h1 {\n  font-size: 1.75rem;\n  margin: 4px 0 3px;\n}\n.actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.search {\n  height: 40px;\n  width: 220px;\n  padding: 0 14px;\n  border-radius: 999px;\n  font: inherit;\n  font-size: 0.875rem;\n  color: var(--mat-sys-on-surface);\n  background: var(--mat-sys-surface-container);\n  border: 1px solid var(--Kova-rule);\n}\n.search:focus {\n  outline: none;\n  border-color: var(--mat-sys-primary);\n}\n.cards {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.card {\n  display: grid;\n  grid-template-columns: 132px 1fr;\n  min-width: 0;\n  border-radius: 16px;\n  overflow: hidden;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\n.card img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  min-width: 0;\n}\n.title {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.body h2 {\n  font-size: 1.0625rem;\n}\n.body p {\n  margin: 0;\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n.pill {\n  padding: 3px 10px;\n  border-radius: 999px;\n  flex: none;\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  background: color-mix(in srgb, var(--viz-good, #0ca30c) 20%, transparent);\n}\n.pill.off {\n  background: var(--mat-sys-surface-container-highest);\n  color: var(--mat-sys-on-surface-variant);\n}\ndl {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px 22px;\n  margin: 0;\n}\ndl div {\n  display: flex;\n  gap: 7px;\n  align-items: baseline;\n}\ndt {\n  font-family: var(--Kova-mono);\n  font-size: 0.625rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\ndd {\n  margin: 0;\n  font-size: 0.8125rem;\n}\n.row-actions {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-top: auto;\n  padding-top: 6px;\n}\n.row-actions a {\n  font-size: 0.8125rem;\n}\n@media (max-width: 1099px) {\n  .cards {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 599px) {\n  .card {\n    grid-template-columns: 1fr;\n  }\n  .card img {\n    height: 150px;\n  }\n  .search {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=admin-categories.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCategories, { className: "AdminCategories", filePath: "src/app/features/admin/admin-categories.ts", lineNumber: 103 });
})();
export {
  AdminCategories
};
//# sourceMappingURL=chunk-J4LRODMV.js.map
