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
  MatHint,
  MatLabel,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-VZ7N6S6Z.js";
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
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtextInterpolate1
} from "./chunk-H2OO3OVH.js";

// src/app/features/auth/create-account.ts
function CreateAccount_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter an email address in the form name@example.com.");
    \u0275\u0275elementEnd();
  }
}
function CreateAccount_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Both passwords need to match.");
    \u0275\u0275elementEnd();
  }
}
function CreateAccount_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "mat-icon", 5);
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
var CreateAccount = class _CreateAccount {
  auth = inject(Auth);
  router = inject(Router);
  fb = inject(FormBuilder);
  busy = signal(false, ...ngDevMode ? [{ debugName: "busy" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  form = this.fb.nonNullable.group({
    fullName: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    confirm: ["", Validators.required]
  }, { validators: matchPasswords });
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.busy.set(true);
    this.error.set("");
    const { email, password, fullName } = this.form.getRawValue();
    this.auth.register(email, password, fullName).subscribe({
      next: () => this.router.navigateByUrl(this.auth.homeRoute()),
      error: (failure) => {
        this.busy.set(false);
        this.error.set(failure?.message || "That account could not be created.");
      }
    });
  }
  static \u0275fac = function CreateAccount_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateAccount)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateAccount, selectors: [["Kova-create-account"]], decls: 50, vars: 6, consts: [[1, "page", "auth"], [1, "card"], [1, "eyebrow"], [1, "muted"], [1, "role"], ["fontSet", "material-symbols-outlined"], [3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "fullName", "autocomplete", "name"], ["matInput", "", "type", "email", "formControlName", "email", "autocomplete", "email"], ["matInput", "", "type", "password", "formControlName", "password", "autocomplete", "new-password"], ["matInput", "", "type", "password", "formControlName", "confirm", "autocomplete", "new-password"], ["role", "alert", 1, "failed"], ["mat-flat-button", "", "type", "submit", 3, "disabled"], [1, "alt", "muted"], ["routerLink", "/sign-in"], ["routerLink", "/admin-login"], ["routerLink", "/admin-register"]], template: function CreateAccount_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "span", 2);
      \u0275\u0275text(3, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1");
      \u0275\u0275text(5, "Create an account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "One account covers orders, tracking, addresses and your wishlist.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4)(9, "mat-icon", 5);
      \u0275\u0275text(10, "person");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "You are creating a ");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14, "customer");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " account.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "form", 6);
      \u0275\u0275listener("ngSubmit", function CreateAccount_Template_form_ngSubmit_16_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(17, "mat-form-field")(18, "mat-label");
      \u0275\u0275text(19, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-form-field")(22, "mat-label");
      \u0275\u0275text(23, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 8);
      \u0275\u0275conditionalCreate(25, CreateAccount_Conditional_25_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-form-field")(27, "mat-label");
      \u0275\u0275text(28, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 9);
      \u0275\u0275elementStart(30, "mat-hint");
      \u0275\u0275text(31, "At least 8 characters.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-form-field")(33, "mat-label");
      \u0275\u0275text(34, "Confirm password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(35, "input", 10);
      \u0275\u0275conditionalCreate(36, CreateAccount_Conditional_36_Template, 2, 0, "mat-error");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(37, CreateAccount_Conditional_37_Template, 4, 1, "p", 11);
      \u0275\u0275elementStart(38, "button", 12);
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "p", 13);
      \u0275\u0275text(41, "Already have one? ");
      \u0275\u0275elementStart(42, "a", 14);
      \u0275\u0275text(43, "Sign in");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "p", 13)(45, "a", 15);
      \u0275\u0275text(46, "Staff sign in");
      \u0275\u0275elementEnd();
      \u0275\u0275text(47, " \xB7 ");
      \u0275\u0275elementStart(48, "a", 16);
      \u0275\u0275text(49, "Staff registration");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(16);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.form.controls.email.touched && ctx.form.controls.email.invalid ? 25 : -1);
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.form.hasError("mismatch") && ctx.form.controls.confirm.touched ? 36 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 37 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.busy());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.busy() ? "Creating\u2026" : "Create account", " ");
    }
  }, dependencies: [RouterLink, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconModule, MatIcon], styles: ["\n\n.auth[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-height: 70vh;\n}\n.card[_ngcontent-%COMP%] {\n  width: min(100%, 440px);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 36px;\n  border-radius: 18px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\nh1[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n}\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nform[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  --mat-filled-button-container-height: 46px;\n}\n.alt[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n.alt[_ngcontent-%COMP%]    + .alt[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 0.8125rem;\n}\n.alt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mat-sys-primary);\n}\n.role[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0 0 18px;\n  padding: 10px 13px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-surface-container-high);\n}\n.role[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--mat-sys-primary);\n}\n.failed[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n/*# sourceMappingURL=create-account.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateAccount, [{
    type: Component,
    args: [{ selector: "Kova-create-account", imports: [RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page auth">
      <div class="card">
        <span class="eyebrow">Account</span>
        <h1>Create an account</h1>
        <p class="muted">One account covers orders, tracking, addresses and your wishlist.</p>

        <!-- This form only ever mints a customer. A staff account is made at
             /admin-register, and only with the staff code that comes with it. -->
        <p class="role">
          <mat-icon fontSet="material-symbols-outlined">person</mat-icon>
          <span>You are creating a <strong>customer</strong> account.</span>
        </p>

        <form [formGroup]="form" (ngSubmit)="submit()">
          <mat-form-field>
            <mat-label>Full name</mat-label>
            <input matInput formControlName="fullName" autocomplete="name" />
          </mat-form-field>

          <mat-form-field>
            <mat-label>Email</mat-label>
            <input matInput type="email" formControlName="email" autocomplete="email" />
            @if (form.controls.email.touched && form.controls.email.invalid) {
              <mat-error>Enter an email address in the form name&#64;example.com.</mat-error>
            }
          </mat-form-field>

          <mat-form-field>
            <mat-label>Password</mat-label>
            <input matInput type="password" formControlName="password" autocomplete="new-password" />
            <mat-hint>At least 8 characters.</mat-hint>
          </mat-form-field>

          <mat-form-field>
            <mat-label>Confirm password</mat-label>
            <input matInput type="password" formControlName="confirm" autocomplete="new-password" />
            @if (form.hasError('mismatch') && form.controls.confirm.touched) {
              <mat-error>Both passwords need to match.</mat-error>
            }
          </mat-form-field>

          @if (error()) {
            <p class="failed" role="alert">
              <mat-icon fontSet="material-symbols-outlined">error</mat-icon>
              {{ error() }}
            </p>
          }

          <button mat-flat-button type="submit" [disabled]="busy()">
            {{ busy() ? 'Creating\u2026' : 'Create account' }}
          </button>
        </form>

        <p class="alt muted">Already have one? <a routerLink="/sign-in">Sign in</a></p>
        <p class="alt muted">
          <a routerLink="/admin-login">Staff sign in</a> \xB7
          <a routerLink="/admin-register">Staff registration</a>
        </p>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:css;f5fd3e9b0d4924f7af86f25abcd36b05df50442ceb9e0cd4b6ba88fe2a143351;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/auth/create-account.ts */\n.auth {\n  display: grid;\n  place-items: center;\n  min-height: 70vh;\n}\n.card {\n  width: min(100%, 440px);\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  padding: 36px;\n  border-radius: 18px;\n  border: 1px solid var(--Kova-rule);\n  background: var(--mat-sys-surface-container-low);\n}\nh1 {\n  margin: 4px 0;\n}\n.card > p {\n  margin: 0 0 16px;\n  font-size: 0.875rem;\n}\nform {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\nform button {\n  margin-top: 12px;\n  --mat-filled-button-container-height: 46px;\n}\n.alt {\n  text-align: center;\n  font-size: 0.875rem;\n  margin: 16px 0 0;\n}\n.alt + .alt {\n  margin-top: 6px;\n  font-size: 0.8125rem;\n}\n.alt a {\n  color: var(--mat-sys-primary);\n}\n.role {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin: 0 0 18px;\n  padding: 10px 13px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-surface-container-high);\n}\n.role mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: var(--mat-sys-primary);\n}\n.failed {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 8px 0 0;\n  padding: 10px 12px;\n  border-radius: 10px;\n  font-size: 0.8125rem;\n  background: var(--mat-sys-error-container);\n  color: var(--mat-sys-on-error-container);\n}\n.failed mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex: none;\n}\n/*# sourceMappingURL=create-account.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateAccount, { className: "CreateAccount", filePath: "src/app/features/auth/create-account.ts", lineNumber: 106 });
})();
function matchPasswords(group) {
  const password = group.get("password")?.value;
  const confirm = group.get("confirm")?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}
export {
  CreateAccount
};
//# sourceMappingURL=chunk-ANBWANYS.js.map
