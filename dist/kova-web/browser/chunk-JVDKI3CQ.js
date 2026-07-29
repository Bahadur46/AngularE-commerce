import {
  Notify
} from "./chunk-TRCVJC4T.js";
import {
  Auth
} from "./chunk-DYU4NP57.js";
import {
  ActivatedRoute,
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/auth/admin-sign-in.ts
function AdminSignIn_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "mat-icon", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error(), " ");
  }
}
var AdminSignIn = class _AdminSignIn {
  auth = inject(Auth);
  router = inject(Router);
  route = inject(ActivatedRoute);
  notify = inject(Notify);
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : []);
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : []);
  reveal = signal(false, ...ngDevMode ? [{ debugName: "reveal" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  text(event) {
    return event.target.value;
  }
  submit(event) {
    event.preventDefault();
    this.error.set("");
    if (!this.email().trim() || !this.password()) {
      this.error.set("Both fields are needed.");
      return;
    }
    this.busy.set(true);
    this.auth.login(this.email().trim(), this.password()).subscribe({
      next: () => {
        this.busy.set(false);
        if (!this.auth.isAdmin()) {
          this.auth.clear();
          this.error.set("That account does not have back-office access.");
          return;
        }
        this.notify.done(`Signed in as ${this.auth.user()?.fullName}`);
        this.router.navigateByUrl(this.auth.homeRoute(this.route.snapshot.queryParamMap.get("next")));
      },
      error: (failure) => {
        this.busy.set(false);
        this.error.set(failure.message || "Those details were not accepted.");
      }
    });
  }
  static \u0275fac = function AdminSignIn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminSignIn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminSignIn, selectors: [["Kova-admin-sign-in"]], decls: 39, vars: 8, consts: [[1, "vault"], ["novalidate", "", 1, "panel", 3, "submit"], [1, "crest"], ["fontSet", "material-symbols-outlined"], [1, "eyebrow", "gold"], [1, "foil"], [1, "lede"], [1, "eyebrow"], ["type", "email", "name", "email", "autocomplete", "username", "placeholder", "arvind23@gmail.com", "required", "", 3, "input", "value"], [1, "secret"], ["name", "password", "autocomplete", "current-password", "required", "", 3, "input", "type", "value"], ["type", "button", 3, "click"], ["role", "alert", 1, "error"], ["mat-flat-button", "", "type", "submit", 1, "order", 3, "disabled"], [1, "demo"], ["routerLink", "/admin-register", 1, "alt"], ["routerLink", "/sign-in", 1, "alt"]], template: function AdminSignIn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("submit", function AdminSignIn_Template_form_submit_1_listener($event) {
        return ctx.submit($event);
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "shield_person");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Anuvesha & Co.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Back office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, "Staff access only. Everything here is logged against your account.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label")(12, "span", 7);
      \u0275\u0275text(13, "Work email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275listener("input", function AdminSignIn_Template_input_input_14_listener($event) {
        return ctx.email.set(ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "label")(16, "span", 7);
      \u0275\u0275text(17, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 9)(19, "input", 10);
      \u0275\u0275listener("input", function AdminSignIn_Template_input_input_19_listener($event) {
        return ctx.password.set(ctx.text($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275listener("click", function AdminSignIn_Template_button_click_20_listener() {
        return ctx.reveal.set(!ctx.reveal());
      });
      \u0275\u0275elementStart(21, "mat-icon", 3);
      \u0275\u0275text(22);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(23, AdminSignIn_Conditional_23_Template, 4, 1, "p", 12);
      \u0275\u0275elementStart(24, "button", 13);
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "div", 14)(27, "span", 7);
      \u0275\u0275text(28, "Back office accounts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "p");
      \u0275\u0275text(30, "Staff accounts live in the database. Use the credentials issued to you, or register below with your staff code.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "a", 15)(32, "mat-icon", 3);
      \u0275\u0275text(33, "badge");
      \u0275\u0275elementEnd();
      \u0275\u0275text(34, " New to the back office? Register with your staff code ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 16)(36, "mat-icon", 3);
      \u0275\u0275text(37, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(38, " Shopping instead? Customer sign in ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("value", ctx.email());
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.reveal() ? "text" : "password")("value", ctx.password());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.reveal() ? "Hide the password" : "Show the password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.reveal() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Checking\u2026" : "Enter the back office", " ");
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.vault[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 82vh;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      60% 55% at 50% 0%,\n      rgba(217, 181, 81, 0.13),\n      transparent 68%),\n    linear-gradient(\n      165deg,\n      #0d1f18,\n      #050b09);\n}\n.panel[_ngcontent-%COMP%] {\n  width: min(430px, 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 40px 34px;\n  border-radius: 20px;\n  text-align: left;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(8, 12, 10, 0.62);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);\n  color: #f3efe4;\n}\n.crest[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 6px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.08);\n}\n.crest[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--Kova-gold);\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--Kova-gold);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgba(243, 239, 228, 0.66);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: #f3efe4;\n  background: rgba(243, 239, 228, 0.05);\n  border: 1px solid var(--Kova-gold-line);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: rgba(243, 239, 228, 0.35);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--Kova-gold);\n}\n.secret[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.secret[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 46px;\n}\n.secret[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: rgba(243, 239, 228, 0.6);\n}\n.secret[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--Kova-gold);\n}\n.secret[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: color-mix(in srgb, var(--mat-sys-error) 22%, transparent);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-error) 45%, transparent);\n}\n.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 100%;\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  border: 1px dashed var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.05);\n}\n.demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.75rem;\n  color: rgba(243, 239, 228, 0.7);\n}\n.alt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: center;\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.alt[_ngcontent-%COMP%]:hover {\n  color: var(--Kova-gold);\n}\n.alt[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n/*# sourceMappingURL=admin-sign-in.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminSignIn, [{
    type: Component,
    args: [{ selector: "Kova-admin-sign-in", imports: [RouterLink, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="vault">
      <form class="panel" (submit)="submit($event)" novalidate>
        <div class="crest">
          <mat-icon fontSet="material-symbols-outlined">shield_person</mat-icon>
        </div>

        <span class="eyebrow gold">Anuvesha &amp; Co.</span>
        <h1 class="foil">Back office</h1>
        <p class="lede">Staff access only. Everything here is logged against your account.</p>

        <label>
          <span class="eyebrow">Work email</span>
          <input type="email" name="email" autocomplete="username"
                 [value]="email()" (input)="email.set(text($event))"
                 placeholder="arvind23@gmail.com" required />
        </label>

        <label>
          <span class="eyebrow">Password</span>
          <span class="secret">
            <input [type]="reveal() ? 'text' : 'password'" name="password" autocomplete="current-password"
                   [value]="password()" (input)="password.set(text($event))" required />
            <button type="button" (click)="reveal.set(!reveal())"
                    [attr.aria-label]="reveal() ? 'Hide the password' : 'Show the password'">
              <mat-icon fontSet="material-symbols-outlined">{{ reveal() ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </span>
        </label>

        @if (error()) {
          <p class="error" role="alert">
            <mat-icon fontSet="material-symbols-outlined">error</mat-icon>
            {{ error() }}
          </p>
        }

        <button mat-flat-button class="order" type="submit" [disabled]="busy()">
          {{ busy() ? 'Checking\u2026' : 'Enter the back office' }}
        </button>

        <div class="demo">
          <span class="eyebrow">Back office accounts</span>
          <p>Staff accounts live in the database. Use the credentials issued to
             you, or register below with your staff code.</p>
        </div>

        <a class="alt" routerLink="/admin-register">
          <mat-icon fontSet="material-symbols-outlined">badge</mat-icon>
          New to the back office? Register with your staff code
        </a>

        <a class="alt" routerLink="/sign-in">
          <mat-icon fontSet="material-symbols-outlined">arrow_back</mat-icon>
          Shopping instead? Customer sign in
        </a>
      </form>
    </div>
  `, styles: ["/* angular:styles/component:css;62b1be4a46c76825bf77481b84325c629c36f6173fe8a1d4276dbd79219cc057;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/auth/admin-sign-in.ts */\n.vault {\n  display: grid;\n  place-items: center;\n  min-height: 82vh;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      60% 55% at 50% 0%,\n      rgba(217, 181, 81, 0.13),\n      transparent 68%),\n    linear-gradient(\n      165deg,\n      #0d1f18,\n      #050b09);\n}\n.panel {\n  width: min(430px, 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 40px 34px;\n  border-radius: 20px;\n  text-align: left;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(8, 12, 10, 0.62);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);\n  color: #f3efe4;\n}\n.crest {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 6px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.08);\n}\n.crest mat-icon {\n  color: var(--Kova-gold);\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.gold {\n  color: var(--Kova-gold);\n}\nh1 {\n  font-size: 2rem;\n}\n.lede {\n  margin: 0 0 8px;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgba(243, 239, 228, 0.66);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ninput {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: #f3efe4;\n  background: rgba(243, 239, 228, 0.05);\n  border: 1px solid var(--Kova-gold-line);\n}\ninput::placeholder {\n  color: rgba(243, 239, 228, 0.35);\n}\ninput:focus {\n  outline: none;\n  border-color: var(--Kova-gold);\n}\n.secret {\n  position: relative;\n  display: block;\n}\n.secret input {\n  padding-right: 46px;\n}\n.secret button {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: rgba(243, 239, 228, 0.6);\n}\n.secret button:hover {\n  color: var(--Kova-gold);\n}\n.secret mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: color-mix(in srgb, var(--mat-sys-error) 22%, transparent);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-error) 45%, transparent);\n}\n.error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\nbutton[type=submit] {\n  margin-top: 6px;\n  width: 100%;\n}\n.demo {\n  margin-top: 6px;\n  padding: 12px 14px;\n  border-radius: 10px;\n  border: 1px dashed var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.05);\n}\n.demo p {\n  margin: 4px 0 0;\n  font-size: 0.75rem;\n  color: rgba(243, 239, 228, 0.7);\n}\n.alt {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: center;\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.alt:hover {\n  color: var(--Kova-gold);\n}\n.alt mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n/*# sourceMappingURL=admin-sign-in.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminSignIn, { className: "AdminSignIn", filePath: "src/app/features/auth/admin-sign-in.ts", lineNumber: 153 });
})();
export {
  AdminSignIn
};
//# sourceMappingURL=chunk-JVDKI3CQ.js.map
