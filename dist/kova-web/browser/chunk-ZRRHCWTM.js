import {
  MatTab,
  MatTabGroup,
  MatTabsModule
} from "./chunk-GJGOHRMH.js";
import {
  Profile
} from "./chunk-ULYKKE56.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-M2JLISCB.js";
import "./chunk-I3TR4Q6Y.js";
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
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule,
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
import "./chunk-N55HBYBE.js";
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
  __spreadProps,
  __spreadValues,
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
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-H2OO3OVH.js";

// src/app/features/profile/profile-page.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProfilePage_For_32_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function ProfilePage_For_32_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const address_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" , ", address_r2.line2, " ");
  }
}
function ProfilePage_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 32)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProfilePage_For_32_Conditional_4_Template, 2, 0, "span", 38);
    \u0275\u0275element(5, "span", 39);
    \u0275\u0275elementStart(6, "button", 40);
    \u0275\u0275listener("click", function ProfilePage_For_32_Template_button_click_6_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit(address_r2));
    });
    \u0275\u0275elementStart(7, "mat-icon", 41);
    \u0275\u0275text(8, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 42);
    \u0275\u0275listener("click", function ProfilePage_For_32_Template_button_click_9_listener() {
      const address_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove(address_r2));
    });
    \u0275\u0275elementStart(10, "mat-icon", 41);
    \u0275\u0275text(11, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "p", 17);
    \u0275\u0275text(13);
    \u0275\u0275element(14, "br");
    \u0275\u0275text(15);
    \u0275\u0275conditionalCreate(16, ProfilePage_For_32_Conditional_16_Template, 1, 1);
    \u0275\u0275element(17, "br");
    \u0275\u0275text(18);
    \u0275\u0275elementStart(19, "span", 43);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const address_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(address_r2.label);
    \u0275\u0275advance();
    \u0275\u0275conditional(address_r2.isDefault ? 4 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", address_r2.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", address_r2.line1);
    \u0275\u0275advance();
    \u0275\u0275conditional(address_r2.line2 ? 16 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", address_r2.city, ", ", address_r2.state, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(address_r2.postalCode);
  }
}
function ProfilePage_ForEmpty_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "No addresses saved yet. Add one below so checkout is one step shorter.");
    \u0275\u0275elementEnd();
  }
}
function ProfilePage_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 44);
    \u0275\u0275listener("click", function ProfilePage_Conditional_81_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetAddressForm());
    });
    \u0275\u0275text(1, "Cancel");
    \u0275\u0275elementEnd();
  }
}
var ProfilePage = class _ProfilePage {
  auth = inject(Auth);
  profile = inject(Profile);
  notify = inject(Notify);
  fb = inject(FormBuilder);
  addresses = signal([], ...ngDevMode ? [{ debugName: "addresses" }] : []);
  detailsForm = this.fb.nonNullable.group({
    fullName: ["", [Validators.required, Validators.minLength(2)]],
    phone: [""],
    avatarUrl: [""]
  });
  addressForm = this.fb.nonNullable.group({
    id: [""],
    label: ["Home"],
    fullName: ["", Validators.required],
    phone: ["", Validators.required],
    line1: ["", Validators.required],
    line2: [""],
    city: ["", Validators.required],
    state: ["", Validators.required],
    postalCode: ["", [Validators.required, Validators.pattern(/^\d{6}$/)]],
    country: ["IN"],
    isDefault: [false]
  });
  passwordForm = this.fb.nonNullable.group({
    currentPassword: ["", Validators.required],
    newPassword: ["", [Validators.required, Validators.minLength(8)]]
  });
  constructor() {
    const user = this.auth.user();
    if (user) {
      this.detailsForm.patchValue({
        fullName: user.fullName,
        phone: user.phone ?? "",
        avatarUrl: user.avatarUrl ?? ""
      });
    }
    this.loadAddresses();
  }
  saveDetails() {
    if (this.detailsForm.invalid) {
      this.detailsForm.markAllAsTouched();
      return;
    }
    const { fullName, phone, avatarUrl } = this.detailsForm.getRawValue();
    this.profile.update(fullName, phone || void 0, avatarUrl || void 0).subscribe({
      next: (user) => {
        this.auth.user.set(user);
        this.notify.done("Details saved");
      }
    });
  }
  edit(address) {
    this.addressForm.patchValue(__spreadProps(__spreadValues({}, address), { id: address.id ?? "", line2: address.line2 ?? "" }));
  }
  saveAddress() {
    if (this.addressForm.invalid) {
      this.addressForm.markAllAsTouched();
      return;
    }
    const value = this.addressForm.getRawValue();
    this.profile.saveAddress(__spreadProps(__spreadValues({}, value), { id: value.id || void 0 })).subscribe({
      next: (list) => {
        this.addresses.set(list);
        this.resetAddressForm();
        this.notify.done("Address saved");
      }
    });
  }
  remove(address) {
    if (!address.id)
      return;
    this.profile.deleteAddress(address.id).subscribe({
      next: (list) => {
        this.addresses.set(list);
        this.notify.done("Address deleted");
      }
    });
  }
  resetAddressForm() {
    this.addressForm.reset({ label: "Home", country: "IN", isDefault: false });
  }
  changePassword() {
    if (this.passwordForm.invalid) {
      this.passwordForm.markAllAsTouched();
      return;
    }
    const { currentPassword, newPassword } = this.passwordForm.getRawValue();
    this.profile.changePassword(currentPassword, newPassword).subscribe({
      next: () => {
        this.passwordForm.reset();
        this.notify.done("Password changed");
      }
    });
  }
  loadAddresses() {
    this.profile.addresses().subscribe((list) => this.addresses.set(list));
  }
  static \u0275fac = function ProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfilePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfilePage, selectors: [["Kova-profile-page"]], decls: 96, vars: 8, consts: [[1, "page"], [1, "section-head"], [1, "eyebrow"], [1, "muted", "numeric"], ["mat-stroked-button", "", 3, "click"], ["animationDuration", "180ms"], ["label", "Your details"], [1, "panel", 3, "ngSubmit", "formGroup"], ["matInput", "", "formControlName", "fullName", "autocomplete", "name"], ["matInput", "", "formControlName", "phone", "autocomplete", "tel", "inputmode", "tel"], [1, "wide"], ["matInput", "", "formControlName", "avatarUrl"], ["mat-flat-button", "", "type", "submit"], ["label", "Addresses"], [1, "panel"], [1, "address-grid"], [1, "address", "surface-card"], [1, "muted"], [1, "address-form", 3, "ngSubmit", "formGroup"], [1, "fields"], ["formControlName", "label"], ["value", "Home"], ["value", "Work"], ["value", "Other"], ["matInput", "", "formControlName", "fullName"], ["matInput", "", "formControlName", "phone"], ["matInput", "", "formControlName", "postalCode", "inputmode", "numeric"], ["matInput", "", "formControlName", "line1"], ["matInput", "", "formControlName", "line2"], ["matInput", "", "formControlName", "city"], ["matInput", "", "formControlName", "state"], ["formControlName", "isDefault", 1, "wide"], [1, "row"], ["mat-button", "", "type", "button"], ["label", "Password"], [1, "panel", "narrow", 3, "ngSubmit", "formGroup"], ["matInput", "", "type", "password", "formControlName", "currentPassword", "autocomplete", "current-password"], ["matInput", "", "type", "password", "formControlName", "newPassword", "autocomplete", "new-password"], [1, "tag-sale"], [1, "spacer"], ["mat-icon-button", "", "aria-label", "Edit address", 3, "click"], ["fontSet", "material-symbols-outlined"], ["mat-icon-button", "", "aria-label", "Delete address", 3, "click"], [1, "numeric"], ["mat-button", "", "type", "button", 3, "click"]], template: function ProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Account");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "button", 4);
      \u0275\u0275listener("click", function ProfilePage_Template_button_click_9_listener() {
        return ctx.auth.logout();
      });
      \u0275\u0275text(10, "Sign out");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "mat-tab-group", 5)(12, "mat-tab", 6)(13, "form", 7);
      \u0275\u0275listener("ngSubmit", function ProfilePage_Template_form_ngSubmit_13_listener() {
        return ctx.saveDetails();
      });
      \u0275\u0275elementStart(14, "mat-form-field")(15, "mat-label");
      \u0275\u0275text(16, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "mat-form-field")(19, "mat-label");
      \u0275\u0275text(20, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "mat-form-field", 10)(23, "mat-label");
      \u0275\u0275text(24, "Avatar image URL");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 12);
      \u0275\u0275text(27, "Save changes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "mat-tab", 13)(29, "div", 14)(30, "div", 15);
      \u0275\u0275repeaterCreate(31, ProfilePage_For_32_Template, 21, 8, "div", 16, _forTrack0, false, ProfilePage_ForEmpty_33_Template, 2, 0, "p", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "form", 18);
      \u0275\u0275listener("ngSubmit", function ProfilePage_Template_form_ngSubmit_34_listener() {
        return ctx.saveAddress();
      });
      \u0275\u0275elementStart(35, "h3");
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 19)(38, "mat-form-field")(39, "mat-label");
      \u0275\u0275text(40, "Label");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "mat-select", 20)(42, "mat-option", 21);
      \u0275\u0275text(43, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "mat-option", 22);
      \u0275\u0275text(45, "Work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "mat-option", 23);
      \u0275\u0275text(47, "Other");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(48, "mat-form-field")(49, "mat-label");
      \u0275\u0275text(50, "Full name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "input", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "mat-form-field")(53, "mat-label");
      \u0275\u0275text(54, "Phone");
      \u0275\u0275elementEnd();
      \u0275\u0275element(55, "input", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "mat-form-field")(57, "mat-label");
      \u0275\u0275text(58, "PIN code");
      \u0275\u0275elementEnd();
      \u0275\u0275element(59, "input", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "mat-form-field", 10)(61, "mat-label");
      \u0275\u0275text(62, "Address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(63, "input", 27);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "mat-form-field", 10)(65, "mat-label");
      \u0275\u0275text(66, "Apartment, floor (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(67, "input", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "mat-form-field")(69, "mat-label");
      \u0275\u0275text(70, "City");
      \u0275\u0275elementEnd();
      \u0275\u0275element(71, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "mat-form-field")(73, "mat-label");
      \u0275\u0275text(74, "State");
      \u0275\u0275elementEnd();
      \u0275\u0275element(75, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "mat-checkbox", 31);
      \u0275\u0275text(77, "Use this as my default address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "div", 32)(79, "button", 12);
      \u0275\u0275text(80, "Save address");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(81, ProfilePage_Conditional_81_Template, 2, 0, "button", 33);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(82, "mat-tab", 34)(83, "form", 35);
      \u0275\u0275listener("ngSubmit", function ProfilePage_Template_form_ngSubmit_83_listener() {
        return ctx.changePassword();
      });
      \u0275\u0275elementStart(84, "mat-form-field")(85, "mat-label");
      \u0275\u0275text(86, "Current password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(87, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "mat-form-field")(89, "mat-label");
      \u0275\u0275text(90, "New password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(91, "input", 37);
      \u0275\u0275elementStart(92, "mat-hint");
      \u0275\u0275text(93, "At least 8 characters. Changing this signs you out everywhere else.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "button", 12);
      \u0275\u0275text(95, "Change password");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_0_0;
      let tmp_1_0;
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate((tmp_0_0 = ctx.auth.user()) == null ? null : tmp_0_0.fullName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate((tmp_1_0 = ctx.auth.user()) == null ? null : tmp_1_0.email);
      \u0275\u0275advance(5);
      \u0275\u0275property("formGroup", ctx.detailsForm);
      \u0275\u0275advance(18);
      \u0275\u0275repeater(ctx.addresses());
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.addressForm);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.addressForm.controls.id.value ? "Edit address" : "Add an address");
      \u0275\u0275advance(45);
      \u0275\u0275conditional(ctx.addressForm.controls.id.value ? 81 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.passwordForm);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatTabsModule, MatTab, MatTabGroup, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatInputModule, MatInput, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatSelectModule, MatSelect, MatOption, MatCheckboxModule, MatCheckbox], styles: ["\n\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 0.875rem;\n}\n.panel[_ngcontent-%COMP%] {\n  padding-top: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: start;\n  max-width: 760px;\n}\n.panel.narrow[_ngcontent-%COMP%] {\n  max-width: 420px;\n}\n.panel[_ngcontent-%COMP%]    > mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 420px;\n}\n.panel[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.address-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n  width: 100%;\n  margin-bottom: 32px;\n}\n.address[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.address-form[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 24px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.address-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 16px;\n  margin-bottom: 16px;\n}\n.fields[_ngcontent-%COMP%]   .wide[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n}\n@media (max-width: 699px) {\n  .fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile-page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfilePage, [{
    type: Component,
    args: [{ selector: "Kova-profile-page", imports: [
      ReactiveFormsModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,
      MatIconModule,
      MatSelectModule,
      MatCheckboxModule
    ], changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Account</span>
          <h1>{{ auth.user()?.fullName }}</h1>
          <p class="muted numeric">{{ auth.user()?.email }}</p>
        </div>
        <button mat-stroked-button (click)="auth.logout()">Sign out</button>
      </div>

      <mat-tab-group animationDuration="180ms">
        <mat-tab label="Your details">
          <form [formGroup]="detailsForm" (ngSubmit)="saveDetails()" class="panel">
            <mat-form-field><mat-label>Full name</mat-label>
              <input matInput formControlName="fullName" autocomplete="name" /></mat-form-field>

            <mat-form-field><mat-label>Phone</mat-label>
              <input matInput formControlName="phone" autocomplete="tel" inputmode="tel" /></mat-form-field>

            <mat-form-field class="wide"><mat-label>Avatar image URL</mat-label>
              <input matInput formControlName="avatarUrl" /></mat-form-field>

            <button mat-flat-button type="submit">Save changes</button>
          </form>
        </mat-tab>

        <mat-tab label="Addresses">
          <div class="panel">
            <div class="address-grid">
              @for (address of addresses(); track address.id) {
                <div class="address surface-card">
                  <div class="row">
                    <strong>{{ address.label }}</strong>
                    @if (address.isDefault) { <span class="tag-sale">Default</span> }
                    <span class="spacer"></span>
                    <button mat-icon-button (click)="edit(address)" aria-label="Edit address">
                      <mat-icon fontSet="material-symbols-outlined">edit</mat-icon>
                    </button>
                    <button mat-icon-button (click)="remove(address)" aria-label="Delete address">
                      <mat-icon fontSet="material-symbols-outlined">delete</mat-icon>
                    </button>
                  </div>
                  <p class="muted">
                    {{ address.fullName }}<br />
                    {{ address.line1 }}@if (address.line2) { , {{ address.line2 }} }<br />
                    {{ address.city }}, {{ address.state }} <span class="numeric">{{ address.postalCode }}</span>
                  </p>
                </div>
              } @empty {
                <p class="muted">No addresses saved yet. Add one below so checkout is one step shorter.</p>
              }
            </div>

            <form [formGroup]="addressForm" (ngSubmit)="saveAddress()" class="address-form">
              <h3>{{ addressForm.controls.id.value ? 'Edit address' : 'Add an address' }}</h3>

              <div class="fields">
                <mat-form-field><mat-label>Label</mat-label>
                  <mat-select formControlName="label">
                    <mat-option value="Home">Home</mat-option>
                    <mat-option value="Work">Work</mat-option>
                    <mat-option value="Other">Other</mat-option>
                  </mat-select>
                </mat-form-field>
                <mat-form-field><mat-label>Full name</mat-label><input matInput formControlName="fullName" /></mat-form-field>
                <mat-form-field><mat-label>Phone</mat-label><input matInput formControlName="phone" /></mat-form-field>
                <mat-form-field><mat-label>PIN code</mat-label><input matInput formControlName="postalCode" inputmode="numeric" /></mat-form-field>
                <mat-form-field class="wide"><mat-label>Address</mat-label><input matInput formControlName="line1" /></mat-form-field>
                <mat-form-field class="wide"><mat-label>Apartment, floor (optional)</mat-label><input matInput formControlName="line2" /></mat-form-field>
                <mat-form-field><mat-label>City</mat-label><input matInput formControlName="city" /></mat-form-field>
                <mat-form-field><mat-label>State</mat-label><input matInput formControlName="state" /></mat-form-field>
                <mat-checkbox formControlName="isDefault" class="wide">Use this as my default address</mat-checkbox>
              </div>

              <div class="row">
                <button mat-flat-button type="submit">Save address</button>
                @if (addressForm.controls.id.value) {
                  <button mat-button type="button" (click)="resetAddressForm()">Cancel</button>
                }
              </div>
            </form>
          </div>
        </mat-tab>

        <mat-tab label="Password">
          <form [formGroup]="passwordForm" (ngSubmit)="changePassword()" class="panel narrow">
            <mat-form-field><mat-label>Current password</mat-label>
              <input matInput type="password" formControlName="currentPassword" autocomplete="current-password" /></mat-form-field>

            <mat-form-field><mat-label>New password</mat-label>
              <input matInput type="password" formControlName="newPassword" autocomplete="new-password" />
              <mat-hint>At least 8 characters. Changing this signs you out everywhere else.</mat-hint>
            </mat-form-field>

            <button mat-flat-button type="submit">Change password</button>
          </form>
        </mat-tab>
      </mat-tab-group>
    </div>
  `, styles: ["/* angular:styles/component:css;16d8da7294edaf447db6a3e4818c93ebe7cab3cca6a6b2fae00c4e01717c7ef9;C:/Users/bahad/OneDrive/Desktop/BussinesWebsite/frontend/src/app/features/profile/profile-page.ts */\n.section-head p {\n  margin: 6px 0 0;\n  font-size: 0.875rem;\n}\n.panel {\n  padding-top: 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  align-items: start;\n  max-width: 760px;\n}\n.panel.narrow {\n  max-width: 420px;\n}\n.panel > mat-form-field {\n  width: 100%;\n  max-width: 420px;\n}\n.panel > button {\n  margin-top: 12px;\n}\n.address-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 16px;\n  width: 100%;\n  margin-bottom: 32px;\n}\n.address p {\n  margin: 10px 0 0;\n  font-size: 0.875rem;\n  line-height: 1.6;\n}\n.address-form {\n  width: 100%;\n  padding-top: 24px;\n  border-top: 1px solid var(--Kova-rule);\n}\n.address-form h3 {\n  margin: 0 0 16px;\n  font-size: 1rem;\n}\n.fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 16px;\n  margin-bottom: 16px;\n}\n.fields .wide {\n  grid-column: 1 / -1;\n}\n@media (max-width: 699px) {\n  .fields {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=profile-page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfilePage, { className: "ProfilePage", filePath: "src/app/features/profile/profile-page.ts", lineNumber: 140 });
})();
export {
  ProfilePage
};
//# sourceMappingURL=chunk-ZRRHCWTM.js.map
