import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Profile } from '@core/services/profile';
import { Auth } from '@core/services/auth';
import { Notify } from '@core/services/notify';
import { Address } from '@core/models';

@Component({
  selector: 'Kova-profile-page',
  imports: [
    ReactiveFormsModule, MatTabsModule, MatFormFieldModule, MatInputModule,
    MatButtonModule, MatIconModule, MatSelectModule, MatCheckboxModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
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
  `,
  styles: `
    .section-head p { margin: 6px 0 0; font-size: 0.875rem; }
    .panel { padding-top: 28px; display: flex; flex-direction: column; gap: 6px; align-items: start; max-width: 760px; }
    .panel.narrow { max-width: 420px; }
    .panel > mat-form-field { width: 100%; max-width: 420px; }
    .panel > button { margin-top: 12px; }

    .address-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 16px; width: 100%; margin-bottom: 32px; }
    .address p { margin: 10px 0 0; font-size: 0.875rem; line-height: 1.6; }
    .address-form { width: 100%; padding-top: 24px; border-top: 1px solid var(--Kova-rule); }
    .address-form h3 { margin: 0 0 16px; font-size: 1rem; }
    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; margin-bottom: 16px; }
    .fields .wide { grid-column: 1 / -1; }

    @media (max-width: 699px) { .fields { grid-template-columns: 1fr; } }
  `
})
export class ProfilePage {
  protected readonly auth = inject(Auth);
  private readonly profile = inject(Profile);
  private readonly notify = inject(Notify);
  private readonly fb = inject(FormBuilder);

  protected readonly addresses = signal<Address[]>([]);

  protected readonly detailsForm = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: [''],
    avatarUrl: ['']
  });

  protected readonly addressForm = this.fb.nonNullable.group({
    id: [''],
    label: ['Home'],
    fullName: ['', Validators.required],
    phone: ['', Validators.required],
    line1: ['', Validators.required],
    line2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    country: ['IN'],
    isDefault: [false]
  });

  protected readonly passwordForm = this.fb.nonNullable.group({
    currentPassword: ['', Validators.required],
    newPassword: ['', [Validators.required, Validators.minLength(8)]]
  });

  constructor() {
    const user = this.auth.user();
    if (user) {
      this.detailsForm.patchValue({
        fullName: user.fullName, phone: user.phone ?? '', avatarUrl: user.avatarUrl ?? ''
      });
    }
    this.loadAddresses();
  }

  protected saveDetails(): void {
    if (this.detailsForm.invalid) { this.detailsForm.markAllAsTouched(); return; }
    const { fullName, phone, avatarUrl } = this.detailsForm.getRawValue();

    this.profile.update(fullName, phone || undefined, avatarUrl || undefined).subscribe({
      next: user => { this.auth.user.set(user); this.notify.done('Details saved'); }
    });
  }

  protected edit(address: Address): void {
    this.addressForm.patchValue({ ...address, id: address.id ?? '', line2: address.line2 ?? '' });
  }

  protected saveAddress(): void {
    if (this.addressForm.invalid) { this.addressForm.markAllAsTouched(); return; }
    const value = this.addressForm.getRawValue();

    this.profile.saveAddress({ ...value, id: value.id || undefined }).subscribe({
      next: list => { this.addresses.set(list); this.resetAddressForm(); this.notify.done('Address saved'); }
    });
  }

  protected remove(address: Address): void {
    if (!address.id) return;
    this.profile.deleteAddress(address.id).subscribe({
      next: list => { this.addresses.set(list); this.notify.done('Address deleted'); }
    });
  }

  protected resetAddressForm(): void {
    this.addressForm.reset({ label: 'Home', country: 'IN', isDefault: false });
  }

  protected changePassword(): void {
    if (this.passwordForm.invalid) { this.passwordForm.markAllAsTouched(); return; }
    const { currentPassword, newPassword } = this.passwordForm.getRawValue();

    this.profile.changePassword(currentPassword, newPassword).subscribe({
      next: () => { this.passwordForm.reset(); this.notify.done('Password changed'); }
    });
  }

  private loadAddresses(): void {
    this.profile.addresses().subscribe(list => this.addresses.set(list));
  }
}
