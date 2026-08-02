import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@core/services/auth';
import { Notify } from '@core/services/notify';

@Component({
  selector: 'Kova-sign-in',
  imports: [RouterLink, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
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
            {{ busy() ? 'Signing in…' : 'Sign in' }}
          </button>
        </form>

        <p class="alt muted">New here? <a routerLink="/create-account">Create an account</a></p>

        <div class="demo">
          <span class="eyebrow">First visit?</span>
          <small class="muted">
            Accounts live on the server now, so there is no demo customer to
            borrow. Create one — any address, eight characters or more — and it
            is yours from then on.
          </small>
          <p class="staff"><a routerLink="/admin-login"></a></p>
        </div>
      </div>
    </div>
  `,
  styles: `
    .auth { display: grid; place-items: center; min-height: 70vh; }
    .card {
      width: min(100%, 420px); display: flex; flex-direction: column; gap: 8px;
      padding: 36px; border-radius: 18px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    h1 { margin: 4px 0; }
    .card > p { margin: 0 0 16px; font-size: 0.875rem; }
    form { display: flex; flex-direction: column; gap: 4px; }
    form button { margin-top: 12px; --mat-filled-button-container-height: 46px; }
    .alt { text-align: center; font-size: 0.875rem; margin: 16px 0 0; }
    .alt a { color: var(--mat-sys-primary); }
    .demo { margin-top: 20px; padding-top: 16px; border-top: 1px dashed var(--Kova-rule); }
    .demo small { display: block; margin-top: 4px; font-size: 0.75rem; line-height: 1.5; }
    .staff { margin: 14px 0 0; font-size: 0.8125rem; }
    .staff a { color: var(--mat-sys-primary); }
    .demo p { margin: 4px 0 0; font-size: 0.75rem; }
    .failed {
      display: flex; align-items: center; gap: 8px; margin: 8px 0 0;
      padding: 10px 12px; border-radius: 10px; font-size: 0.8125rem;
      background: var(--mat-sys-error-container); color: var(--mat-sys-on-error-container);
    }
    .failed mat-icon { font-size: 18px; width: 18px; height: 18px; flex: none; }

    @media (max-width: 599px) {
      .auth { min-height: 0; }
      .card { padding: 24px 20px 28px; border-radius: 16px; }
      h1 { font-size: 2rem; }
    }
  `
})
export class SignIn {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly fb = inject(FormBuilder);
  private readonly notify = inject(Notify);

  protected readonly busy = signal(false);
  protected readonly reveal = signal(false);
  protected readonly error = signal('');

  protected readonly form = this.fb.nonNullable.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  protected submit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }

    this.busy.set(true);
    this.error.set('');
    const { email, password } = this.form.getRawValue();

    this.auth.login(email, password).subscribe({
      next: () => {
        // Role decides the landing page, not the form that was used: an
        // administrator signing in here goes to the back office, not the shop.
        const next = this.route.snapshot.queryParamMap.get('next');
        if (this.auth.isAdmin()) this.notify.done('Signed in as administrator');
        this.router.navigateByUrl(this.auth.homeRoute(next));
      },
      error: (failure: Error) => {
        this.busy.set(false);
        this.error.set(failure?.message || 'Those details were not accepted.');
      }
    });
  }
}
