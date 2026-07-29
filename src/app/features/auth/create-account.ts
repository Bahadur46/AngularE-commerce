import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@core/services/auth';

@Component({
  selector: 'Kova-create-account',
  imports: [RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
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
            {{ busy() ? 'Creating…' : 'Create account' }}
          </button>
        </form>

        <p class="alt muted">Already have one? <a routerLink="/sign-in">Sign in</a></p>
        <p class="alt muted">
          <a routerLink="/admin-login">Staff sign in</a> ·
          <a routerLink="/admin-register">Staff registration</a>
        </p>
      </div>
    </div>
  `,
  styles: `
    .auth { display: grid; place-items: center; min-height: 70vh; }
    .card {
      width: min(100%, 440px); display: flex; flex-direction: column; gap: 8px;
      padding: 36px; border-radius: 18px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    h1 { margin: 4px 0; }
    .card > p { margin: 0 0 16px; font-size: 0.875rem; }
    form { display: flex; flex-direction: column; gap: 6px; }
    form button { margin-top: 12px; --mat-filled-button-container-height: 46px; }
    .alt { text-align: center; font-size: 0.875rem; margin: 16px 0 0; }
    .alt + .alt { margin-top: 6px; font-size: 0.8125rem; }
    .alt a { color: var(--mat-sys-primary); }

    .role {
      display: flex; align-items: center; gap: 9px; margin: 0 0 18px;
      padding: 10px 13px; border-radius: 10px; font-size: 0.8125rem;
      background: var(--mat-sys-surface-container-high);
    }
    .role mat-icon { font-size: 18px; width: 18px; height: 18px; color: var(--mat-sys-primary); }

    .failed {
      display: flex; align-items: center; gap: 8px; margin: 8px 0 0;
      padding: 10px 12px; border-radius: 10px; font-size: 0.8125rem;
      background: var(--mat-sys-error-container); color: var(--mat-sys-on-error-container);
    }
    .failed mat-icon { font-size: 18px; width: 18px; height: 18px; flex: none; }
  `
})
export class CreateAccount {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly busy = signal(false);
  protected readonly error = signal('');

  protected readonly form = this.fb.nonNullable.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirm: ['', Validators.required]
  }, { validators: matchPasswords });

  protected submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.busy.set(true);
    this.error.set('');
    const { email, password, fullName } = this.form.getRawValue();

    this.auth.register(email, password, fullName).subscribe({
      next: () => this.router.navigateByUrl(this.auth.homeRoute()),
      error: (failure: Error) => {
        this.busy.set(false);
        this.error.set(failure?.message || 'That account could not be created.');
      }
    });
  }
}

function matchPasswords(group: AbstractControl): ValidationErrors | null {
  const password = group.get('password')?.value;
  const confirm = group.get('confirm')?.value;
  return password && confirm && password !== confirm ? { mismatch: true } : null;
}
