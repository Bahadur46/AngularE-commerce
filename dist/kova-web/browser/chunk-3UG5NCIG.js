import {
  Auth
} from "./chunk-DYU4NP57.js";
import {
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "./chunk-N55HBYBE.js";
import "./chunk-E3BMGIF5.js";
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
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/admin/admin-shell.ts
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.path;
function AdminShell_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "mat-icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r1.path)("title", link_r1.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.label);
  }
}
function AdminShell_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, AdminShell_For_9_For_3_Template, 5, 4, "a", 12, _forTrack1);
  }
  if (rf & 2) {
    const group_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r2.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r2.links);
  }
}
var AdminShell = class _AdminShell {
  auth = inject(Auth);
  collapsed = signal(false, ...ngDevMode ? [{ debugName: "collapsed" }] : []);
  /**
   * Grouped rather than one flat list: what you look at, what you edit, and
   * what you configure are three different visits to this page.
   */
  groups = [
    {
      title: "Overview",
      links: [
        { path: "dashboard", label: "Dashboard", icon: "monitoring" },
        { path: "reports", label: "Reports", icon: "lab_profile" }
      ]
    },
    {
      title: "Selling",
      links: [
        { path: "orders", label: "Orders", icon: "receipt_long" },
        { path: "products", label: "Products", icon: "inventory_2" },
        { path: "categories", label: "Categories", icon: "category" },
        { path: "coupons", label: "Coupons", icon: "sell" },
        { path: "banners", label: "Banners", icon: "wallpaper" }
      ]
    },
    {
      title: "People",
      links: [
        { path: "customers", label: "Customers", icon: "group" }
      ]
    },
    {
      title: "Shop",
      links: [
        { path: "settings", label: "Settings", icon: "settings" }
      ]
    }
  ];
  static \u0275fac = function AdminShell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminShell)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminShell, selectors: [["Kova-admin-shell"]], decls: 23, vars: 4, consts: [[1, "admin"], ["aria-label", "Admin sections"], [1, "nav-head"], [1, "eyebrow"], [1, "collapse", 3, "click"], ["fontSet", "material-symbols-outlined"], [1, "foot"], ["routerLink", "/", "title", "Back to the shop", 1, "quiet"], [1, "text"], ["title", "Log out", 1, "quiet", "danger", 3, "click"], [1, "content"], [1, "group", "eyebrow"], ["routerLinkActive", "active", 3, "routerLink", "title"]], template: function AdminShell_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "Back office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 4);
      \u0275\u0275listener("click", function AdminShell_Template_button_click_5_listener() {
        return ctx.collapsed.set(!ctx.collapsed());
      });
      \u0275\u0275elementStart(6, "mat-icon", 5);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()()();
      \u0275\u0275repeaterCreate(8, AdminShell_For_9_Template, 4, 1, null, null, _forTrack0);
      \u0275\u0275elementStart(10, "div", 6)(11, "a", 7)(12, "mat-icon", 5);
      \u0275\u0275text(13, "storefront");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span", 8);
      \u0275\u0275text(15, "Back to the shop");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275listener("click", function AdminShell_Template_button_click_16_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275elementStart(17, "mat-icon", 5);
      \u0275\u0275text(18, "logout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "span", 8);
      \u0275\u0275text(20, "Log out");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(21, "div", 10);
      \u0275\u0275element(22, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("tight", ctx.collapsed());
      \u0275\u0275advance(5);
      \u0275\u0275attribute("aria-label", ctx.collapsed() ? "Expand the sidebar" : "Collapse the sidebar");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.collapsed() ? "chevron_right" : "chevron_left", " ");
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.groups);
    }
  }, dependencies: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule, MatIcon], styles: ["\n\n.admin[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 232px 1fr;\n  max-width: var(--Kova-page);\n  margin-inline: auto;\n  gap: 36px;\n  padding: 32px 20px 72px;\n  transition: grid-template-columns 220ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.admin.tight[_ngcontent-%COMP%] {\n  grid-template-columns: 64px 1fr;\n  gap: 24px;\n}\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  position: sticky;\n  top: 92px;\n  align-self: start;\n  min-width: 0;\n}\n.nav-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.collapse[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  flex: none;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n}\n.collapse[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container);\n}\n.collapse[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.group[_ngcontent-%COMP%] {\n  margin: 16px 0 6px;\n  padding-inline: 14px;\n  font-size: 0.5625rem;\n  opacity: 0.7;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \nnav[_ngcontent-%COMP%]   button.quiet[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n}\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \nnav[_ngcontent-%COMP%]   button.quiet[_ngcontent-%COMP%]:hover {\n  background: var(--mat-sys-surface-container);\n  color: var(--mat-sys-on-surface);\n}\nnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  font-weight: 500;\n}\nnav[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex: none;\n}\n.text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foot[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 14px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.danger[_ngcontent-%COMP%]:hover {\n  color: var(--mat-sys-error);\n}\n.tight[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], \n.tight[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%], \n.tight[_ngcontent-%COMP%]   .nav-head[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: none;\n}\n.tight[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.tight[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   button.quiet[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-inline: 0;\n}\n.tight[_ngcontent-%COMP%]   .nav-head[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n@media (max-width: 899px) {\n  .admin[_ngcontent-%COMP%], \n   .admin.tight[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  nav[_ngcontent-%COMP%] {\n    position: static;\n    flex-direction: row;\n    overflow-x: auto;\n    padding-bottom: 8px;\n    scrollbar-width: none;\n  }\n  nav[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-head[_ngcontent-%COMP%], \n   .group[_ngcontent-%COMP%], \n   .foot[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .tight[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .tight[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding-inline: 14px;\n  }\n  nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=admin-shell.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminShell, [{
    type: Component,
    args: [{ selector: "Kova-admin-shell", imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="admin" [class.tight]="collapsed()">
      <nav aria-label="Admin sections">
        <div class="nav-head">
          <span class="eyebrow">Back office</span>
          <button class="collapse" (click)="collapsed.set(!collapsed())"
                  [attr.aria-label]="collapsed() ? 'Expand the sidebar' : 'Collapse the sidebar'">
            <mat-icon fontSet="material-symbols-outlined">
              {{ collapsed() ? 'chevron_right' : 'chevron_left' }}
            </mat-icon>
          </button>
        </div>

        @for (group of groups; track group.title) {
          <span class="group eyebrow">{{ group.title }}</span>
          @for (link of group.links; track link.path) {
            <a [routerLink]="link.path" routerLinkActive="active" [title]="link.label">
              <mat-icon fontSet="material-symbols-outlined">{{ link.icon }}</mat-icon>
              <span class="text">{{ link.label }}</span>
            </a>
          }
        }

        <div class="foot">
          <a routerLink="/" class="quiet" title="Back to the shop">
            <mat-icon fontSet="material-symbols-outlined">storefront</mat-icon>
            <span class="text">Back to the shop</span>
          </a>
          <button class="quiet danger" (click)="auth.logout()" title="Log out">
            <mat-icon fontSet="material-symbols-outlined">logout</mat-icon>
            <span class="text">Log out</span>
          </button>
        </div>
      </nav>

      <div class="content"><router-outlet /></div>
    </div>
  `, styles: ["/* angular:styles/component:css;688724d35416b1bf1e3525aa0a61a534e5d937abc5c2dd8c27be7bb4d64e85c5;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/admin/admin-shell.ts */\n.admin {\n  display: grid;\n  grid-template-columns: 232px 1fr;\n  max-width: var(--Kova-page);\n  margin-inline: auto;\n  gap: 36px;\n  padding: 32px 20px 72px;\n  transition: grid-template-columns 220ms cubic-bezier(0.2, 0, 0.1, 1);\n}\n.admin.tight {\n  grid-template-columns: 64px 1fr;\n  gap: 24px;\n}\nnav {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  position: sticky;\n  top: 92px;\n  align-self: start;\n  min-width: 0;\n}\n.nav-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 10px;\n}\n.collapse {\n  display: grid;\n  place-items: center;\n  width: 26px;\n  height: 26px;\n  flex: none;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: var(--mat-sys-on-surface-variant);\n}\n.collapse:hover {\n  background: var(--mat-sys-surface-container);\n}\n.collapse mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.group {\n  margin: 16px 0 6px;\n  padding-inline: 14px;\n  font-size: 0.5625rem;\n  opacity: 0.7;\n}\nnav a,\nnav button.quiet {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: var(--mat-sys-on-surface-variant);\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  text-align: left;\n  width: 100%;\n}\nnav a:hover,\nnav button.quiet:hover {\n  background: var(--mat-sys-surface-container);\n  color: var(--mat-sys-on-surface);\n}\nnav a.active {\n  background: var(--mat-sys-secondary-container);\n  color: var(--mat-sys-on-secondary-container);\n  font-weight: 500;\n}\nnav mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex: none;\n}\n.text {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.foot {\n  margin-top: 20px;\n  padding-top: 14px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.danger:hover {\n  color: var(--mat-sys-error);\n}\n.tight .text,\n.tight .group,\n.tight .nav-head .eyebrow {\n  display: none;\n}\n.tight nav a,\n.tight nav button.quiet {\n  justify-content: center;\n  padding-inline: 0;\n}\n.tight .nav-head {\n  justify-content: center;\n}\n.content {\n  min-width: 0;\n}\n@media (max-width: 899px) {\n  .admin,\n  .admin.tight {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  nav {\n    position: static;\n    flex-direction: row;\n    overflow-x: auto;\n    padding-bottom: 8px;\n    scrollbar-width: none;\n  }\n  nav::-webkit-scrollbar {\n    display: none;\n  }\n  .nav-head,\n  .group,\n  .foot {\n    display: none;\n  }\n  .tight .text {\n    display: inline;\n  }\n  .tight nav a {\n    justify-content: flex-start;\n    padding-inline: 14px;\n  }\n  nav a {\n    white-space: nowrap;\n  }\n}\n/*# sourceMappingURL=admin-shell.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminShell, { className: "AdminShell", filePath: "src/app/features/admin/admin-shell.ts", lineNumber: 107 });
})();
export {
  AdminShell
};
//# sourceMappingURL=chunk-3UG5NCIG.js.map
