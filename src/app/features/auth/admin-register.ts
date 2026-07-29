import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@core/services/auth';
import { Notify } from '@core/services/notify';

/**
 * The staff door's other half. It sits beside admin-sign-in rather than beside
 * create-account, because what it mints is a back-office account: the customer
 * form self-serves anybody, this one only completes for someone holding the
 * staff code the API issued them.
 *
 * As on the sign-in page, nothing here is the security boundary. The code goes
 * to the API and the API decides; if what comes back is not a staff account the
 * session is dropped again rather than left half-open on a page it cannot use.
 */
@Component({
  selector: 'Kova-admin-register',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="vault">
      <form class="panel" (submit)="submit($event)" novalidate>
        <div class="crest">
          <mat-icon fontSet="material-symbols-outlined">badge</mat-icon>
        </div>

        <span class="eyebrow gold">Anuvesha &amp; Co.</span>
        <h1 class="foil">Back office registration</h1>
        <p class="lede">
          For staff joining the back office. You need the staff code issued to you —
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
          {{ busy() ? 'Creating…' : 'Create back-office account' }}
        </button>

        <a class="alt" routerLink="/admin-login">
          <mat-icon fontSet="material-symbols-outlined">arrow_back</mat-icon>
          Already have a staff account? Sign in
        </a>
        <a class="alt" routerLink="/create-account">Shopping instead? Create a customer account</a>
      </form>
    </div>
  `,
  styles: `
    .vault {
      display: grid; place-items: center; min-height: 82vh; padding: 40px 20px;
      background:
        radial-gradient(60% 55% at 50% 0%, rgba(217, 181, 81, 0.13), transparent 68%),
        linear-gradient(165deg, #0d1f18, #050b09);
    }
    .panel {
      width: min(430px, 100%); display: flex; flex-direction: column; gap: 14px;
      padding: 40px 34px; border-radius: 20px; text-align: left;
      border: 1px solid var(--Kova-gold-line);
      background: rgba(8, 12, 10, 0.62);
      backdrop-filter: blur(10px);
      box-shadow: 0 40px 90px rgba(0, 0, 0, 0.5);
      color: #f3efe4;
    }

    .crest {
      display: grid; place-items: center; width: 52px; height: 52px; margin-bottom: 6px;
      border-radius: 14px; border: 1px solid var(--Kova-gold-line);
      background: rgba(217, 181, 81, 0.08);
    }
    .crest mat-icon { color: var(--Kova-gold); font-size: 26px; width: 26px; height: 26px; }

    .gold { color: var(--Kova-gold); }
    h1 { font-size: 2rem; }
    .lede { margin: 0 0 8px; font-size: 0.875rem; line-height: 1.6; color: rgba(243, 239, 228, 0.66); }

    label { display: flex; flex-direction: column; gap: 6px; }
    input {
      width: 100%; height: 46px; padding: 0 14px; border-radius: 10px;
      font: inherit; font-size: 0.9375rem; color: #f3efe4;
      background: rgba(243, 239, 228, 0.05);
      border: 1px solid var(--Kova-gold-line);
    }
    input::placeholder { color: rgba(243, 239, 228, 0.35); }
    input:focus { outline: none; border-color: var(--Kova-gold); }
    .code { letter-spacing: 0.08em; text-transform: uppercase; }
    .code::placeholder { letter-spacing: normal; text-transform: none; }
    .hint { font-size: 0.75rem; color: rgba(243, 239, 228, 0.45); }

    .secret { position: relative; display: block; }
    .secret input { padding-right: 46px; }
    .secret button {
      position: absolute; right: 6px; top: 6px; display: grid; place-items: center;
      width: 34px; height: 34px; border: 0; border-radius: 8px; cursor: pointer;
      background: transparent; color: rgba(243, 239, 228, 0.6);
    }
    .secret button:hover { color: var(--Kova-gold); }
    .secret mat-icon { font-size: 19px; width: 19px; height: 19px; }

    .error {
      display: flex; align-items: center; gap: 8px; margin: 0;
      padding: 10px 12px; border-radius: 10px; font-size: 0.8125rem;
      background: color-mix(in srgb, var(--mat-sys-error) 22%, transparent);
      border: 1px solid color-mix(in srgb, var(--mat-sys-error) 45%, transparent);
    }
    .error mat-icon { font-size: 18px; width: 18px; height: 18px; flex: none; }

    button[type='submit'] { margin-top: 6px; width: 100%; }

    .alt {
      display: inline-flex; align-items: center; gap: 6px; align-self: center;
      margin-top: 4px; font-size: 0.8125rem; color: rgba(243, 239, 228, 0.66);
    }
    .alt:hover { color: var(--Kova-gold); }
    .alt mat-icon { font-size: 17px; width: 17px; height: 17px; }
  `
})
export class AdminRegister {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly notify = inject(Notify);

  protected readonly fullName = signal('');
  protected readonly email = signal('');
  protected readonly staffCode = signal('');
  protected readonly password = signal('');
  protected readonly confirm = signal('');
  protected readonly reveal = signal(false);
  protected readonly busy = signal(false);
  protected readonly error = signal('');

  /** Keeps the button off until there is something worth sending. */
  protected readonly ready = computed(() =>
    this.fullName().trim().length > 1 &&
    this.email().trim().length > 0 &&
    this.staffCode().trim().length > 0 &&
    this.password().length > 0 &&
    this.confirm().length > 0);

  protected text(event: Event): string { return (event.target as HTMLInputElement).value; }

  protected submit(event: Event): void {
    event.preventDefault();
    this.error.set('');

    const name = this.fullName().trim();
    const address = this.email().trim();
    const code = this.staffCode().trim();

    if (!name || !address || !code || !this.password() || !this.confirm()) {
      this.error.set('Every field is needed.');
      return;
    }
    if (this.password().length < 8) {
      this.error.set('Passwords are at least eight characters.');
      return;
    }
    if (this.password() !== this.confirm()) {
      this.error.set('Both passwords need to match.');
      return;
    }

    this.busy.set(true);
    this.auth.registerStaff(address, this.password(), name, code).subscribe({
      next: () => {
        this.busy.set(false);

        if (!this.auth.isAdmin()) {
          // The account was created, but not as staff. Same treatment as on the
          // sign-in page: drop it rather than land them on a page they cannot use.
          this.auth.clear();
          this.error.set('That account was not given back-office access. Check the staff code with an administrator.');
          return;
        }

        this.notify.done(`Welcome, ${this.auth.user()?.fullName}`);
        this.router.navigateByUrl(this.auth.homeRoute());
      },
      error: (failure: Error) => {
        this.busy.set(false);
        this.error.set(failure.message || 'That account could not be created.');
      }
    });
  }
}
