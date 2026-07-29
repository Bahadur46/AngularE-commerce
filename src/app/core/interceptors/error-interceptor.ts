import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { Notify } from '@core/services/notify';

/**
 * The API always returns { status, message, traceId }, so there is exactly one
 * place that turns a failure into words the customer sees.
 */
/** Calls whose failures are already shown on the page that made them. */
const SILENT = ['/auth/login', '/auth/register'];

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const notify = inject(Notify);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      const message = readMessage(error);

      // The sign-in and registration forms print the reason on the form itself,
      // so a toast saying the same thing twice is just noise. Every other call
      // has nowhere to show it and still needs one.
      if (SILENT.some(path => req.url.includes(path))) {
        return throwError(() => error);
      }

      if (error.status === 401 && !req.url.includes('/auth/')) {
        router.navigate(['/sign-in'], { queryParams: { next: router.url } });
      } else if (error.status === 403) {
        notify.problem('You don\u2019t have access to that.');
      } else if (error.status !== 404) {
        notify.problem(message);
      }

      return throwError(() => error);
    })
  );
};

function readMessage(error: HttpErrorResponse): string {
  if (error.status === 0) return 'Can\u2019t reach the server. Check your connection and try again.';
  if (typeof error.error?.message === 'string') return error.error.message;
  if (error.status >= 500) return 'Something went wrong on our side. Try again in a moment.';
  return 'That didn\u2019t work. Check the details and try again.';
}
