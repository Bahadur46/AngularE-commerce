import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-Y6SJJ35T.js";
import {
  Admin
} from "./chunk-Q54TYYEO.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-ZGPGDACX.js";
import "./chunk-I3TR4Q6Y.js";
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
  MatSuffix,
  NgControlStatus,
  NgModel
} from "./chunk-VZ7N6S6Z.js";
import {
  Notify
} from "./chunk-TRCVJC4T.js";
import "./chunk-E3BMGIF5.js";
import "./chunk-ACQY33BG.js";
import "./chunk-JAMDIHHE.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-YKSZHAQM.js";
import "./chunk-YWOJPOKT.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-customers.ts
var _c0 = () => [20, 50];
var _forTrack0 = ($index, $item) => $item.id;
function AdminCustomers_Conditional_12_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "span", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 10);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 6)(10, "mat-slide-toggle", 11);
    \u0275\u0275listener("change", function AdminCustomers_Conditional_12_For_14_Template_mat_slide_toggle_change_10_listener($event) {
      const customer_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setActive(customer_r3, $event.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const customer_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.initials(customer_r3));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", customer_r3.fullName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(customer_r3.roles.join(", "));
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", true);
    \u0275\u0275attribute("aria-label", "Account access for " + customer_r3.fullName);
  }
}
function AdminCustomers_Conditional_12_ForEmpty_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 12);
    \u0275\u0275text(2, "No customers match that search.");
    \u0275\u0275elementEnd()();
  }
}
function AdminCustomers_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 6);
    \u0275\u0275text(11, "Access");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "tbody");
    \u0275\u0275repeaterCreate(13, AdminCustomers_Conditional_12_For_14_Template, 11, 6, "tr", null, _forTrack0, false, AdminCustomers_Conditional_12_ForEmpty_15_Template, 3, 0, "tr");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "mat-paginator", 7);
    \u0275\u0275listener("page", function AdminCustomers_Conditional_12_Template_mat_paginator_page_16_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.onPage($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r5 = ctx;
    \u0275\u0275advance(13);
    \u0275\u0275repeater(page_r5.items);
    \u0275\u0275advance(3);
    \u0275\u0275property("length", page_r5.total)("pageSize", page_r5.pageSize)("pageIndex", page_r5.page - 1)("pageSizeOptions", \u0275\u0275pureFunction0(5, _c0));
  }
}
var AdminCustomers = class _AdminCustomers {
  admin = inject(Admin);
  notify = inject(Notify);
  search = "";
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  pageSize = 20;
  constructor() {
    this.load(1);
  }
  load(page) {
    this.admin.customers(this.search || void 0, page, this.pageSize).subscribe((result) => this.result.set(result));
  }
  onPage(event) {
    this.pageSize = event.pageSize;
    this.load(event.pageIndex + 1);
  }
  initials(user) {
    return user.fullName.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  }
  setActive(user, isActive) {
    this.admin.setCustomerActive(user.id, isActive).subscribe({
      next: () => this.notify.done(isActive ? "Access restored" : "Account disabled")
    });
  }
  static \u0275fac = function AdminCustomers_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminCustomers)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminCustomers, selectors: [["Kova-admin-customers"]], decls: 13, vars: 2, consts: [[1, "section-head"], [1, "eyebrow"], [1, "search"], ["matInput", "", 3, "ngModelChange", "keyup.enter", "ngModel"], ["matSuffix", "", "fontSet", "material-symbols-outlined"], [1, "table-wrap"], [1, "right"], ["aria-label", "Customer pages", 3, "page", "length", "pageSize", "pageIndex", "pageSizeOptions"], [1, "avatar"], [1, "numeric", "muted"], [1, "muted"], [3, "change", "checked"], ["colspan", "4", 1, "muted"]], template: function AdminCustomers_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "span", 1);
      \u0275\u0275text(3, "People");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Customers");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(6, "mat-form-field", 2)(7, "mat-label");
      \u0275\u0275text(8, "Search by name or email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function AdminCustomers_Template_input_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function AdminCustomers_Template_input_keyup_enter_9_listener() {
        return ctx.load(1);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-icon", 4);
      \u0275\u0275text(11, "search");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(12, AdminCustomers_Conditional_12_Template, 17, 6);
    }
    if (rf & 2) {
      let tmp_1_0;
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.search);
      \u0275\u0275advance(3);
      \u0275\u0275conditional((tmp_1_0 = ctx.result()) ? 12 : -1, tmp_1_0);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatSuffix, MatInputModule, MatInput, MatSlideToggleModule, MatSlideToggle, MatPaginatorModule, MatPaginator], styles: ["\n\n.search[_ngcontent-%COMP%] {\n  width: min(100%, 340px);\n  margin-bottom: 20px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth[_ngcontent-%COMP%], \ntd[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 12px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\nth[_ngcontent-%COMP%] {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\n.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.avatar[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: middle;\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  background: transparent;\n}\n/*# sourceMappingURL=admin-customers.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminCustomers, [{
    type: Component,
    args: [{ selector: "Kova-admin-customers", imports: [
      FormsModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatSlideToggleModule,
      MatPaginatorModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="section-head">
      <div>
        <span class="eyebrow">People</span>
        <h1>Customers</h1>
      </div>
    </div>

    <mat-form-field class="search">
      <mat-label>Search by name or email</mat-label>
      <input matInput [(ngModel)]="search" (keyup.enter)="load(1)" />
      <mat-icon matSuffix fontSet="material-symbols-outlined">search</mat-icon>
    </mat-form-field>

    @if (result(); as page) {
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Roles</th><th class="right">Access</th></tr>
          </thead>
          <tbody>
            @for (customer of page.items; track customer.id) {
              <tr>
                <td>
                  <span class="avatar">{{ initials(customer) }}</span>
                  {{ customer.fullName }}
                </td>
                <td class="numeric muted">{{ customer.email }}</td>
                <td class="muted">{{ customer.roles.join(', ') }}</td>
                <td class="right">
                  <mat-slide-toggle [checked]="true" (change)="setActive(customer, $event.checked)"
                                    [attr.aria-label]="'Account access for ' + customer.fullName" />
                </td>
              </tr>
            } @empty {
              <tr><td colspan="4" class="muted">No customers match that search.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                     [pageSizeOptions]="[20, 50]" (page)="onPage($event)" aria-label="Customer pages" />
    }
  `, styles: ["/* angular:styles/component:css;084e3cd8f7f530ead4f8a5bb2f0ec27bfa22fa165f975c3716d0c95ddd52905e;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-customers.ts */\n.search {\n  width: min(100%, 340px);\n  margin-bottom: 20px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\nth,\ntd {\n  text-align: left;\n  padding: 12px 10px;\n  border-bottom: 1px solid var(--Kova-rule);\n}\nth {\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: var(--mat-sys-on-surface-variant);\n}\n.right {\n  text-align: right;\n}\n.avatar {\n  display: inline-grid;\n  place-items: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  margin-right: 10px;\n  vertical-align: middle;\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  font-family: var(--Kova-mono);\n  font-size: 0.6875rem;\n  font-weight: 600;\n}\nmat-paginator {\n  background: transparent;\n}\n/*# sourceMappingURL=admin-customers.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminCustomers, { className: "AdminCustomers", filePath: "src/app/features/admin/admin-customers.ts", lineNumber: 80 });
})();
export {
  AdminCustomers
};
//# sourceMappingURL=chunk-K2VXH3NR.js.map
