import { Injectable, computed, inject, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { environment } from '@env/environment';
import { AuthResponse, User } from '@core/models';

const ACCESS_KEY = 'Kova.access';
const REFRESH_KEY = 'Kova.refresh';
const USER_KEY = 'Kova.user';

/**
 * The roles that open the back office. Kova.Api writes "staff" on accounts made
 * through register-staff; "admin" is here because the seeded owner account
 * carries that instead. Matched case-insensitively — the role is a plain string
 * in Mongo, so its casing is not guaranteed.
 */
const STAFF_ROLES = ['staff', 'admin'];

@Injectable({ providedIn: 'root' })
export class Auth {
  private readonly http = inject(HttpClient);
  // protected: the in-memory session (session.static.ts) redirects on logout too.
  protected readonly router = inject(Router);
  private readonly base = `${environment.apiUrl}/auth`;

  /** Source of truth for "who is signed in", read by the header, guards and cart. */
  readonly user = signal<User | null>(readUser());
  readonly isSignedIn = computed(() => this.user() !== null);
  readonly isAdmin = computed(() =>
    this.user()?.roles.some(role => STAFF_ROLES.includes(role.trim().toLowerCase())) ?? false);
  readonly initials = computed(() => {
    const name = this.user()?.fullName ?? '';
    return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  });

  get accessToken(): string | null { return localStorage.getItem(ACCESS_KEY); }
  get refreshToken(): string | null { return localStorage.getItem(REFRESH_KEY); }

  register(email: string, password: string, fullName: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/register`, { email, password, fullName })
      .pipe(tap(res => this.store(res)), catchError(inWords));
  }

  /**
   * The staff door's registration. Separate from `register` because it is a
   * different endpoint with a different outcome: `register` always mints a
   * customer, this one mints a back-office account and will only do so for a
   * caller who can produce the staff code the API is holding.
   *
   * The code is checked server-side. Sending it is not what grants the role —
   * the role comes back in the response, and the page that called this checks
   * `isAdmin()` before it believes the session belongs in the back office.
   */
  registerStaff(email: string, password: string, fullName: string, staffCode: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/register-staff`, { email, password, fullName, staffCode })
      .pipe(tap(res => this.store(res)), catchError(inWords));
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/login`, { email, password })
      .pipe(tap(res => this.store(res)), catchError(inWords));
  }

  refresh(): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.base}/refresh`, { refreshToken: this.refreshToken })
      .pipe(tap(res => this.store(res)), catchError(inWords));
  }

  logout(redirect = '/'): void {
    const token = this.refreshToken;
    if (token) this.http.post(`${this.base}/logout`, { refreshToken: token }).subscribe({ error: () => void 0 });
    this.clear();
    this.router.navigateByUrl(redirect);
  }

  /** The one word for the current session's role, for badges and copy. */
  readonly roleLabel = computed(() => this.isAdmin() ? 'Administrator' : 'Customer');

  /**
   * Where a session belongs once it starts, decided by role rather than by
   * which form was used. Both doors call this, so a staff member who signs in
   * at the shopfront still lands in the back office.
   *
   * A `next` pointing into /admin is ignored for a customer: an unauthorised
   * deep link must not survive the sign-in it triggered.
   */
  homeRoute(next?: string | null): string {
    if (this.isAdmin()) return next && next.startsWith('/admin') ? next : '/admin/dashboard';
    if (next && !next.startsWith('/admin')) return next;
    return '/';
  }

  /** Applies a profile edit to the live session and the stored copy. */
  patchUser(changes: Partial<User>): User | null {
    const current = this.user();
    if (!current) return null;

    const next = { ...current, ...changes };
    localStorage.setItem(USER_KEY, JSON.stringify(next));
    this.user.set(next);
    return next;
  }

  clear(): void {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this.user.set(null);
  }

  protected store(res: AuthResponse): void {
    localStorage.setItem(ACCESS_KEY, res.accessToken);
    localStorage.setItem(REFRESH_KEY, res.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this.user.set(res.user);
  }
}

/**
 * The three sign-in forms show `failure.message` inline, so a failure has to
 * reach them as a plain Error carrying the API's own words. An untouched
 * HttpErrorResponse would put "Http failure response for …/auth/login: 401"
 * on the page instead of "Email or password is incorrect."
 *
 * Kova.Api answers every failure with { status, message, traceId }, so the
 * message is read straight off the body; the fallbacks cover a server that
 * never answered at all.
 */
function inWords(error: unknown): Observable<never> {
  if (!(error instanceof HttpErrorResponse)) return throwError(() => error);

  const message = typeof error.error?.message === 'string'
    ? error.error.message
    : error.status === 0
      ? 'Can’t reach the server. Check that the API is running.'
      : 'That didn’t work. Check the details and try again.';

  return throwError(() => new Error(message));
}

function readUser(): User | null {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as User) : null;
  } catch {
    return null;
  }
}
