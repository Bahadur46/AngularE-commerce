import {
  Router
} from "./chunk-N55HBYBE.js";
import {
  environment
} from "./chunk-E3BMGIF5.js";
import {
  HttpClient,
  HttpErrorResponse
} from "./chunk-YWOJPOKT.js";
import {
  Injectable,
  __spreadValues,
  catchError,
  computed,
  inject,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵɵdefineInjectable
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/auth.ts
var ACCESS_KEY = "Kova.access";
var REFRESH_KEY = "Kova.refresh";
var USER_KEY = "Kova.user";
var STAFF_ROLES = ["staff", "admin"];
var Auth = class _Auth {
  http = inject(HttpClient);
  // protected: the in-memory session (session.static.ts) redirects on logout too.
  router = inject(Router);
  base = `${environment.apiUrl}/auth`;
  /** Source of truth for "who is signed in", read by the header, guards and cart. */
  user = signal(readUser(), ...ngDevMode ? [{ debugName: "user" }] : []);
  isSignedIn = computed(() => this.user() !== null, ...ngDevMode ? [{ debugName: "isSignedIn" }] : []);
  isAdmin = computed(() => this.user()?.roles.some((role) => STAFF_ROLES.includes(role.trim().toLowerCase())) ?? false, ...ngDevMode ? [{ debugName: "isAdmin" }] : []);
  initials = computed(() => {
    const name = this.user()?.fullName ?? "";
    return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0]).join("").toUpperCase();
  }, ...ngDevMode ? [{ debugName: "initials" }] : []);
  get accessToken() {
    return localStorage.getItem(ACCESS_KEY);
  }
  get refreshToken() {
    return localStorage.getItem(REFRESH_KEY);
  }
  register(email, password, fullName) {
    return this.http.post(`${this.base}/register`, { email, password, fullName }).pipe(tap((res) => this.store(res)), catchError(inWords));
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
  registerStaff(email, password, fullName, staffCode) {
    return this.http.post(`${this.base}/register-staff`, { email, password, fullName, staffCode }).pipe(tap((res) => this.store(res)), catchError(inWords));
  }
  login(email, password) {
    return this.http.post(`${this.base}/login`, { email, password }).pipe(tap((res) => this.store(res)), catchError(inWords));
  }
  refresh() {
    return this.http.post(`${this.base}/refresh`, { refreshToken: this.refreshToken }).pipe(tap((res) => this.store(res)), catchError(inWords));
  }
  logout(redirect = "/") {
    const token = this.refreshToken;
    if (token)
      this.http.post(`${this.base}/logout`, { refreshToken: token }).subscribe({ error: () => void 0 });
    this.clear();
    this.router.navigateByUrl(redirect);
  }
  /** The one word for the current session's role, for badges and copy. */
  roleLabel = computed(() => this.isAdmin() ? "Administrator" : "Customer", ...ngDevMode ? [{ debugName: "roleLabel" }] : []);
  /**
   * Where a session belongs once it starts, decided by role rather than by
   * which form was used. Both doors call this, so a staff member who signs in
   * at the shopfront still lands in the back office.
   *
   * A `next` pointing into /admin is ignored for a customer: an unauthorised
   * deep link must not survive the sign-in it triggered.
   */
  homeRoute(next) {
    if (this.isAdmin())
      return next && next.startsWith("/admin") ? next : "/admin/dashboard";
    if (next && !next.startsWith("/admin"))
      return next;
    return "/";
  }
  /** Applies a profile edit to the live session and the stored copy. */
  patchUser(changes) {
    const current = this.user();
    if (!current)
      return null;
    const next = __spreadValues(__spreadValues({}, current), changes);
    localStorage.setItem(USER_KEY, JSON.stringify(next));
    this.user.set(next);
    return next;
  }
  clear() {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(USER_KEY);
    this.user.set(null);
  }
  store(res) {
    localStorage.setItem(ACCESS_KEY, res.accessToken);
    localStorage.setItem(REFRESH_KEY, res.refreshToken);
    localStorage.setItem(USER_KEY, JSON.stringify(res.user));
    this.user.set(res.user);
  }
  static \u0275fac = function Auth_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Auth)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Auth, factory: _Auth.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Auth, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function inWords(error) {
  if (!(error instanceof HttpErrorResponse))
    return throwError(() => error);
  const message = typeof error.error?.message === "string" ? error.error.message : error.status === 0 ? "Can\u2019t reach the server. Check that the API is running." : "That didn\u2019t work. Check the details and try again.";
  return throwError(() => new Error(message));
}
function readUser() {
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export {
  Auth
};
//# sourceMappingURL=chunk-DYU4NP57.js.map
