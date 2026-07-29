import { HttpErrorResponse, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { BehaviorSubject, catchError, filter, switchMap, take, throwError } from 'rxjs';
import { Auth } from '@core/services/auth';

let refreshing = false;
const refreshed$ = new BehaviorSubject<string | null>(null);

/**
 * Attaches the access token, and on a 401 tries the refresh token once.
 * Parallel requests that 401 at the same moment queue on `refreshed$`
 * instead of each firing their own refresh.
 */
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const auth = inject(Auth);
  const token = auth.accessToken;
  const isAuthCall = req.url.includes('/auth/');

  const authed = token && !isAuthCall ? withToken(req, token) : req;

  return next(authed).pipe(
    catchError((error: unknown) => {
      const is401 = error instanceof HttpErrorResponse && error.status === 401;
      if (!is401 || isAuthCall || !auth.refreshToken) return throwError(() => error);

      if (refreshing) {
        return refreshed$.pipe(
          filter((t): t is string => t !== null),
          take(1),
          switchMap(fresh => next(withToken(req, fresh)))
        );
      }

      refreshing = true;
      refreshed$.next(null);

      return auth.refresh().pipe(
        switchMap(res => {
          refreshing = false;
          refreshed$.next(res.accessToken);
          return next(withToken(req, res.accessToken));
        }),
        catchError(refreshError => {
          refreshing = false;
          auth.clear();
          return throwError(() => refreshError);
        })
      );
    })
  );
};

function withToken(req: HttpRequest<unknown>, token: string): HttpRequest<unknown> {
  return req.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
}
