import {
  MatInput,
  MatInputModule
} from "./chunk-UKQWQSP6.js";
import "./chunk-346ISJSG.js";
import "./chunk-QSPIOWQC.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VZ7N6S6Z.js";
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/auth/sign-in.ts
function SignIn_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter an email address in the form name@example.com.");
    \u0275\u0275elementEnd();
  }
}
function SignIn_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9)(1, "mat-icon", 8);
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
var SignIn = class _SignIn {
  auth = inject(Auth);
  router = inject(Router);
  route = inject(ActivatedRoute);
  fb = inject(FormBuilder);
  notify = inject(Notify);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  reveal = signal(false, ...ngDevMode ? [{ debugName: "reveal" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  form = this.fb.nonNullable.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required]
  });
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy.set(true);
    this.error.set("");
    const { email, password } = this.form.getRawValue();
    this.auth.login(email, password).subscribe({
      next: () => {
        const next = this.route.snapshot.queryParamMap.get("next");
        if (this.auth.isAdmin())
          this.notify.done("Signed in as administrator");
        this.router.navigateByUrl(this.auth.homeRoute(next));
      },
      error: (failure) => {
        this.busy.set(false);
        this.error.set(failure?.message || "Those details were not accepted.");
      }
    });
  }
  static \u0275fac = function SignIn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignIn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignIn, selectors: [["Kova-sign-in"]], decls: 35, vars: 8, consts: [[1, "page", "auth"], [1, "card"], [1, "eyebrow"], [1, "muted"], [3, "ngSubmit", "formGroup"], ["matInput", "", "type", "email", "formControlName", "email", "autocomplete", "email"], ["matInput", "", "formControlName", "password", "autocomplete", "current-password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 3, "click"], ["fontSet", "material-symbols-outlined"], ["role", "alert", 1, "failed"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [1, "alt", "muted"], ["routerLink", "/create-account"], [1, "demo"], [1, "staff"], ["routerLink", "/admin-login"]], template: function SignIn_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Sign in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Your cart and wishlist follow you across devices.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "form", 4);
      \u0275\u0275listener("ngSubmit", function SignIn_Template_form_ngSubmit_8_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(9, "mat-form-field")(10, "mat-label");
      \u0275\u0275text(11, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 5);
      \u0275\u0275conditionalCreate(13, SignIn_Conditional_13_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field")(15, "mat-label");
      \u0275\u0275text(16, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 6);
      \u0275\u0275elementStart(18, "button", 7);
      \u0275\u0275listener("click", function SignIn_Template_button_click_18_listener() {
        return ctx.reveal.set(!ctx.reveal());
      });
      \u0275\u0275elementStart(19, "mat-icon", 8);
      \u0275\u0275text(20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(21, SignIn_Conditional_21_Template, 4, 1, "p", 9);
      \u0275\u0275elementStart(22, "button", 10);
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "p", 11);
      \u0275\u0275text(25, "New here? ");
      \u0275\u0275elementStart(26, "a", 12);
      \u0275\u0275text(27, "Create an account");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 13)(29, "span", 2);
      \u0275\u0275text(30, "First visit?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "small", 3);
      \u0275\u0275text(32, " Accounts live on the server now, so there is no demo customer to borrow. Create one \u2014 any address, eight characters or more \u2014 and it is yours from then on. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p", 14);
      \u0275\u0275element(34, "a", 15);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 13 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275property("type", ctx.reveal() ? "text" : "password");
      \u0275\u0275advance();
      \u0275\u0275attribute("aria-label", ctx.reveal() ? "Hide password" : "Show password");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.reveal() ? "visibility_off" : "visibility");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 21 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Signing in\u2026" : "Sign in", " ");
    }
  }, dependencies: [RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatError, MatSuffix, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 70vh;\n}\n.card[_ngcontent-%COMP%] {\n  width: min(100%, 420px);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 36px;\n  border-radius: 18px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\nh1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  --mat-filled-button-container-height: 46px;\n}\n.alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n.alt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n}\n.demo[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--Kova-rule);\n}\n.demo[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.staff[_ngcontent-%COMP%] {\n  margin: 14px 0 0;\n  font-size: 0.8125rem;\n}\n.staff[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n}\n.demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 0.75rem;\n}\n.failed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n/*# sourceMappingURL=sign-in.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignIn, [{
    type: Component,
    args: [{ selector: "Kova-sign-in", imports: [RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page auth">
      <div class="card">
        <span class="eyebrow">Account</span>
        <h1>Sign in</h1>
        <p class="muted">Your cart and wishlist follow you across devices.</p>

        <form [formGroup]="form" (ngSubmit)="submit()">
          <mat-form-field>
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" autocomplete="email" />
            @if (form.controls.email.touched && form.controls.email.invalid) {
              <mat-error>Enter an email address in the form name&#64;example.com.</mat-error>
            }
          </mat-form-field>

          <mat-form-field>
            <mat-label>Password</mat-label>
            <input matInput [type]="reveal() ? 'text' : 'password'" formControlName="password"
                   autocomplete="current-password" />
            <button mat-icon-button matSuffix type="button" (click)="reveal.set(!reveal())"
                    [attr.aria-label]="reveal() ? 'Hide password' : 'Show password'">
              <mat-icon fontSet="material-symbols-outlined">{{ reveal() ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </mat-form-field>

          @if (error()) {
            <p class="failed" role="alert">
              <mat-icon fontSet="material-symbols-outlined">error</mat-icon>
              {{ error() }}
            </p>
          }

          <button mat-flat-button type="submit" [disabled]="busy()">
            {{ busy() ? 'Signing in\u2026' : 'Sign in' }}
          </button>
        </form>

        <p class="alt muted">New here? <a routerLink="/create-account">Create an account</a></p>

        <div class="demo">
          <span class="eyebrow">First visit?</span>
          <small class="muted">
            Accounts live on the server now, so there is no demo customer to
            borrow. Create one \u2014 any address, eight characters or more \u2014 and it
            is yours from then on.
          </small>
          <p class="staff"><a routerLink="/admin-login"></a></p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;9b907cfa89027c49465144261b320f9b4d0eece26529f5b7b02b4b2e80991093;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/auth/sign-in.ts */\n.auth {\n  display: grid;\n  place-items: center;\n  min-height: 70vh;\n}\n.card {\n  width: min(100%, 420px);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 36px;\n  border-radius: 18px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\nh1 {\n  margin: 4px 0;\n}\n.card > p {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\nform button {\n  margin-top: 12px;\n  --mat-filled-button-container-height: 46px;\n}\n.alt {\n  text-align: center;\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n.alt a {\n  color: var(--mat-sys-primary);\n}\n.demo {\n  margin-top: 20px;\n  padding-top: 16px;\n  border-top: 1px dashed var(--Kova-rule);\n}\n.demo small {\n  display: block;\n  margin-top: 4px;\n  font-size: 0.75rem;\n  line-height: 1.5;\n}\n.staff {\n  margin: 14px 0 0;\n  font-size: 0.8125rem;\n}\n.staff a {\n  color: var(--mat-sys-primary);\n}\n.demo p {\n  margin: 4px 0 0;\n  font-size: 0.75rem;\n}\n.failed {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.failed mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n/*# sourceMappingURL=sign-in.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignIn, { className: "SignIn", filePath: "src/app/features/auth/sign-in.ts", lineNumber: 93 });
})();
export {
  SignIn
};
//# sourceMappingURL=chunk-MZ2RYXNU.js.map
