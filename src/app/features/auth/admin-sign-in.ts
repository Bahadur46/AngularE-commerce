import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@core/services/auth';
import { Notify } from '@core/services/notify';

/**
 * The staff door. Deliberately a separate page from the customer sign-in:
 * different ground, different copy, and a different failure mode — signing in
 * with a customer account here is refused and the session is dropped again,
 * rather than quietly landing them on the shopfront.
 *
 * The check below is a convenience, not the security boundary. `adminGuard`
 * gates the routes, and the API will gate the data by the role in the JWT; a
 * customer who types /admin still gets nowhere.
 */
@Component({
  selector: 'Kova-admin-sign-in',
  imports: [RouterLink, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
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
          {{ busy() ? 'Checking…' : 'Enter the back office' }}
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

    .demo {
      margin-top: 6px; padding: 12px 14px; border-radius: 10px;
      border: 1px dashed var(--Kova-gold-line); background: rgba(217, 181, 81, 0.05);
    }
    .demo p { margin: 4px 0 0; font-size: 0.75rem; color: rgba(243, 239, 228, 0.7); }

    .alt {
      display: inline-flex; align-items: center; gap: 6px; align-self: center;
      margin-top: 4px; font-size: 0.8125rem; color: rgba(243, 239, 228, 0.66);
    }
    .alt:hover { color: var(--Kova-gold); }
    .alt mat-icon { font-size: 17px; width: 17px; height: 17px; }
  `
})
export class AdminSignIn {
  private readonly auth = inject(Auth);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly notify = inject(Notify);

  protected readonly email = signal('');
  protected readonly password = signal('');
  protected readonly reveal = signal(false);
  protected readonly busy = signal(false);
  protected readonly error = signal('');

  protected text(event: Event): string { return (event.target as HTMLInputElement).value; }

  protected submit(event: Event): void {
    event.preventDefault();
    this.error.set('');

    if (!this.email().trim() || !this.password()) {
      this.error.set('Both fields are needed.');
      return;
    }

    this.busy.set(true);
    this.auth.login(this.email().trim(), this.password()).subscribe({
      next: () => {
        this.busy.set(false);

        if (!this.auth.isAdmin()) {
          // A real account, but a customer one. The dashboard is staff only, so
          // drop the session rather than leave them half-signed-in on a page
          // they cannot use.
          this.auth.clear();
          this.error.set('That account does not have back-office access.');
          return;
        }

        this.notify.done(`Signed in as ${this.auth.user()?.fullName}`);
        // Honour the /admin route that sent them here, or the dashboard.
        this.router.navigateByUrl(this.auth.homeRoute(this.route.snapshot.queryParamMap.get('next')));
      },
      error: (failure: Error) => {
        this.busy.set(false);
        this.error.set(failure.message || 'Those details were not accepted.');
      }
    });
  }
}
