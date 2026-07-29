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

// src/app/features/auth/admin-register.ts
function AdminRegister_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16)(1, "mat-icon", 3);
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
var AdminRegister = class _AdminRegister {
  auth = inject(Auth);
  router = inject(Router);
  notify = inject(Notify);
  fullName = signal("", ...ngDevMode ? [{ debugName: "fullName" }] : []);
  email = signal("", ...ngDevMode ? [{ debugName: "email" }] : []);
  staffCode = signal("", ...ngDevMode ? [{ debugName: "staffCode" }] : []);
  password = signal("", ...ngDevMode ? [{ debugName: "password" }] : []);
  confirm = signal("", ...ngDevMode ? [{ debugName: "confirm" }] : []);
  reveal = signal(false, ...ngDevMode ? [{ debugName: "reveal" }] : []);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  /** Keeps the button off until there is something worth sending. */
  ready = computed(() => this.fullName().trim().length > 1 && this.email().trim().length > 0 && this.staffCode().trim().length > 0 && this.password().length > 0 && this.confirm().length > 0, ...ngDevMode ? [{ debugName: "ready" }] : []);
  text(event) {
    return event.target.value;
  }
  submit(event) {
    event.preventDefault();
    this.error.set("");
    const name = this.fullName().trim();
    const address = this.email().trim();
    const code = this.staffCode().trim();
    if (!name || !address || !code || !this.password() || !this.confirm()) {
      this.error.set("Every field is needed.");
      return;
    }
    if (this.password().length < 8) {
      this.error.set("Passwords are at least eight characters.");
      return;
    }
    if (this.password() !== this.confirm()) {
      this.error.set("Both passwords need to match.");
      return;
    }
    this.busy.set(true);
    this.auth.registerStaff(address, this.password(), name, code).subscribe({
      next: () => {
        this.busy.set(false);
        if (!this.auth.isAdmin()) {
          this.auth.clear();
          this.error.set("That account was not given back-office access. Check the staff code with an administrator.");
          return;
        }
        this.notify.done(`Welcome, ${this.auth.user()?.fullName}`);
        this.router.navigateByUrl(this.auth.homeRoute());
      },
      error: (failure) => {
        this.busy.set(false);
        this.error.set(failure.message || "That account could not be created.");
      }
    });
  }
  static \u0275fac = function AdminRegister_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminRegister)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminRegister, selectors: [["Kova-admin-register"]], decls: 46, vars: 11, consts: [[1, "vault"], ["novalidate", "", 1, "panel", 3, "submit"], [1, "crest"], ["fontSet", "material-symbols-outlined"], [1, "eyebrow", "gold"], [1, "foil"], [1, "lede"], [1, "eyebrow"], ["type", "text", "name", "fullName", "autocomplete", "name", "placeholder", "Meera Iyer", "required", "", 3, "input", "value"], ["type", "email", "name", "email", "autocomplete", "username", "placeholder", "name@kova.shop", "required", "", 3, "input", "value"], ["type", "text", "name", "staffCode", "autocomplete", "one-time-code", "spellcheck", "false", "placeholder", "Issued by an administrator", "required", "", 1, "numeric", "code", 3, "input", "value"], [1, "secret"], ["name", "password", "autocomplete", "new-password", "required", "", 3, "input", "type", "value"], ["type", "button", 3, "click"], [1, "hint"], ["type", "password", "name", "confirm", "autocomplete", "new-password", "required", "", 3, "input", "value"], ["role", "alert", 1, "error"], ["mat-flat-button", "", "type", "submit", 1, "order", 3, "disabled"], ["routerLink", "/admin-login", 1, "alt"], ["routerLink", "/create-account", 1, "alt"]], template: function AdminRegister_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "form", 1);
      \u0275\u0275listener("submit", function AdminRegister_Template_form_submit_1_listener($event) {
        return ctx.submit($event);
      });
      \u0275\u0275elementStart(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "badge");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Anuvesha & Co.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Back office registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 6);
      \u0275\u0275text(10, " For staff joining the back office. You need the staff code issued to you \u2014 without it this form cannot create an account. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "label")(12, "span", 7);
      \u0275\u0275text(13, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 8);
      \u0275\u0275listener("input", function AdminRegister_Template_input_input_14_listener($event) {
        return ctx.fullName.set(ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "label")(16, "span", 7);
      \u0275\u0275text(17, "Work email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 9);
      \u0275\u0275listener("input", function AdminRegister_Template_input_input_18_listener($event) {
        return ctx.email.set(ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "label")(20, "span", 7);
      \u0275\u0275text(21, "Staff code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 10);
      \u0275\u0275listener("input", function AdminRegister_Template_input_input_22_listener($event) {
        return ctx.staffCode.set(ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "label")(24, "span", 7);
      \u0275\u0275text(25, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "span", 11)(27, "input", 12);
      \u0275\u0275listener("input", function AdminRegister_Template_input_input_27_listener($event) {
        return ctx.password.set(ctx.text($event));
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "button", 13);
      \u0275\u0275listener("click", function AdminRegister_Template_button_click_28_listener() {
        return ctx.reveal.set(!ctx.reveal());
      });
      \u0275\u0275elementStart(29, "mat-icon", 3);
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "span", 14);
      \u0275\u0275text(32, "At least 8 characters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "label")(34, "span", 7);
      \u0275\u0275text(35, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "input", 15);
      \u0275\u0275listener("input", function AdminRegister_Template_input_input_36_listener($event) {
        return ctx.confirm.set(ctx.text($event));
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(37, AdminRegister_Conditional_37_Template, 4, 1, "p", 16);
      \u0275\u0275elementStart(38, "button", 17);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 18)(41, "mat-icon", 3);
      \u0275\u0275text(42, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " Already have a staff account? Sign in ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "a", 19);
      \u0275\u0275text(45, "Shopping instead? Create a customer account");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(14);
      \u0275\u0275property("value", ctx.fullName());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.email());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.staffCode());
      \u0275\u0275advance(5);
      \u0275\u0275property("type", ctx.reveal() ? "text" : "password")("value", ctx.password());
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.reveal() ? "Hide the password" : "Show the password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.reveal() ? "visibility_off" : "visibility");
      \u0275\u0275advance(6);
      \u0275\u0275property("value", ctx.confirm());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy() || !ctx.ready());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Creating\u2026" : "Create back-office account", " ");
    }
  }, dependencies: [RouterLink, MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.vault[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 82vh;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      60% 55% at 50% 0%,\n      rgba(217, 181, 81, 0.13),\n      transparent 68%),\n    linear-gradient(\n      165deg,\n      #0d1f18,\n      #050b09);\n}\n.panel[_ngcontent-%COMP%] {\n  width: min(430px, 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 40px 34px;\n  border-radius: 20px;\n  text-align: left;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(8, 12, 10, 0.62);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);\n  color: #f3efe4;\n}\n.crest[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 6px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.08);\n}\n.crest[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--Kova-gold);\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.gold[_ngcontent-%COMP%] {\n  color: var(--Kova-gold);\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.lede[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgba(243, 239, 228, 0.66);\n}\nlabel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: #f3efe4;\n  background: rgba(243, 239, 228, 0.05);\n  border: 1px solid var(--Kova-gold-line);\n}\ninput[_ngcontent-%COMP%]::placeholder {\n  color: rgba(243, 239, 228, 0.35);\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--Kova-gold);\n}\n.code[_ngcontent-%COMP%] {\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.code[_ngcontent-%COMP%]::placeholder {\n  letter-spacing: normal;\n  text-transform: none;\n}\n.hint[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: rgba(243, 239, 228, 0.45);\n}\n.secret[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n}\n.secret[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 46px;\n}\n.secret[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: rgba(243, 239, 228, 0.6);\n}\n.secret[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--Kova-gold);\n}\n.secret[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: color-mix(in srgb, var(--mat-sys-error) 22%, transparent);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-error) 45%, transparent);\n}\n.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\nbutton[type=submit][_ngcontent-%COMP%] {\n  margin-top: 6px;\n  width: 100%;\n}\n.alt[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: center;\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.alt[_ngcontent-%COMP%]:hover {\n  color: var(--Kova-gold);\n}\n.alt[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n/*# sourceMappingURL=admin-register.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminRegister, [{
    type: Component,
    args: [{ selector: "Kova-admin-register", imports: [RouterLink, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="vault">
      <form class="panel" (submit)="submit($event)" novalidate>
        <div class="crest">
          <mat-icon fontSet="material-symbols-outlined">badge</mat-icon>
        </div>

        <span class="eyebrow gold">Anuvesha &amp; Co.</span>
        <h1 class="foil">Back office registration</h1>
        <p class="lede">
          For staff joining the back office. You need the staff code issued to you \u2014
          without it this form cannot create an account.
        </p>

        <label>
          <span class="eyebrow">Full name</span>
          <input type="text" name="fullName" autocomplete="name"
                 [value]="fullName()" (input)="fullName.set(text($event))"
                 placeholder="Meera Iyer" required />
        </label>

        <label>
          <span class="eyebrow">Work email</span>
          <input type="email" name="email" autocomplete="username"
                 [value]="email()" (input)="email.set(text($event))"
                 placeholder="name&#64;kova.shop" required />
        </label>

        <label>
          <span class="eyebrow">Staff code</span>
          <input type="text" name="staffCode" autocomplete="one-time-code" spellcheck="false"
                 class="numeric code"
                 [value]="staffCode()" (input)="staffCode.set(text($event))"
                 placeholder="Issued by an administrator" required />
        </label>

        <label>
          <span class="eyebrow">Password</span>
          <span class="secret">
            <input [type]="reveal() ? 'text' : 'password'" name="password" autocomplete="new-password"
                   [value]="password()" (input)="password.set(text($event))" required />
            <button type="button" (click)="reveal.set(!reveal())"
                    [attr.aria-label]="reveal() ? 'Hide the password' : 'Show the password'">
              <mat-icon fontSet="material-symbols-outlined">{{ reveal() ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </span>
          <span class="hint">At least 8 characters.</span>
        </label>

        <label>
          <span class="eyebrow">Confirm password</span>
          <input type="password" name="confirm" autocomplete="new-password"
                 [value]="confirm()" (input)="confirm.set(text($event))" required />
        </label>

        @if (error()) {
          <p class="error" role="alert">
            <mat-icon fontSet="material-symbols-outlined">error</mat-icon>
            {{ error() }}
          </p>
        }

        <button mat-flat-button class="order" type="submit" [disabled]="busy() || !ready()">
          {{ busy() ? 'Creating\u2026' : 'Create back-office account' }}
        </button>

        <a class="alt" routerLink="/admin-login">
          <mat-icon fontSet="material-symbols-outlined">arrow_back</mat-icon>
          Already have a staff account? Sign in
        </a>
        <a class="alt" routerLink="/create-account">Shopping instead? Create a customer account</a>
      </form>
    </div>
  `, styles: ["/* angular:styles/component:css;0f71c2b0bda04810c0e7472130ff8686ed69785ff274777a35ad0b8777c48296;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/auth/admin-register.ts */\n.vault {\n  display: grid;\n  place-items: center;\n  min-height: 82vh;\n  padding: 40px 20px;\n  background:\n    radial-gradient(\n      60% 55% at 50% 0%,\n      rgba(217, 181, 81, 0.13),\n      transparent 68%),\n    linear-gradient(\n      165deg,\n      #0d1f18,\n      #050b09);\n}\n.panel {\n  width: min(430px, 100%);\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  padding: 40px 34px;\n  border-radius: 20px;\n  text-align: left;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(8, 12, 10, 0.62);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);\n  color: #f3efe4;\n}\n.crest {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 52px;\n  margin-bottom: 6px;\n  border-radius: 14px;\n  border: 1px solid var(--Kova-gold-line);\n  background: rgba(217, 181, 81, 0.08);\n}\n.crest mat-icon {\n  color: var(--Kova-gold);\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n}\n.gold {\n  color: var(--Kova-gold);\n}\nh1 {\n  font-size: 2rem;\n}\n.lede {\n  margin: 0 0 8px;\n  font-size: 0.875rem;\n  line-height: 1.6;\n  color: rgba(243, 239, 228, 0.66);\n}\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\ninput {\n  width: 100%;\n  height: 46px;\n  padding: 0 14px;\n  border-radius: 10px;\n  font: inherit;\n  font-size: 0.9375rem;\n  color: #f3efe4;\n  background: rgba(243, 239, 228, 0.05);\n  border: 1px solid var(--Kova-gold-line);\n}\ninput::placeholder {\n  color: rgba(243, 239, 228, 0.35);\n}\ninput:focus {\n  outline: none;\n  border-color: var(--Kova-gold);\n}\n.code {\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n}\n.code::placeholder {\n  letter-spacing: normal;\n  text-transform: none;\n}\n.hint {\n  font-size: 0.75rem;\n  color: rgba(243, 239, 228, 0.45);\n}\n.secret {\n  position: relative;\n  display: block;\n}\n.secret input {\n  padding-right: 46px;\n}\n.secret button {\n  position: absolute;\n  right: 6px;\n  top: 6px;\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  cursor: pointer;\n  background: transparent;\n  color: rgba(243, 239, 228, 0.6);\n}\n.secret button:hover {\n  color: var(--Kova-gold);\n}\n.secret mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: color-mix(in srgb, var(--mat-sys-error) 22%, transparent);\n  border: 1px solid color-mix(in srgb, var(--mat-sys-error) 45%, transparent);\n}\n.error mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\nbutton[type=submit] {\n  margin-top: 6px;\n  width: 100%;\n}\n.alt {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  align-self: center;\n  margin-top: 4px;\n  font-size: 0.8125rem;\n  color: rgba(243, 239, 228, 0.66);\n}\n.alt:hover {\n  color: var(--Kova-gold);\n}\n.alt mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n/*# sourceMappingURL=admin-register.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminRegister, { className: "AdminRegister", filePath: "src/app/features/auth/admin-register.ts", lineNumber: 165 });
})();
export {
  AdminRegister
};
//# sourceMappingURL=chunk-76Z75GII.js.map
