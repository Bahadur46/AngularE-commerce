import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@core/services/auth';

export const authGuard: CanActivateFn = (_route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isSignedIn()) return true;

  // Remember where they were headed so sign-in can send them back.
  return router.createUrlTree(['/sign-in'], { queryParams: { next: state.url } });
};

/**
 * Staff-only routes. The admin role is the whole test: a signed-out visitor
 * goes to the staff door rather than the customer one, and a signed-in customer
 * is sent back to the shop, because telling them a back office exists is not
 * useful to them.
 */
export const adminGuard: CanActivateFn = (_route, state) => {
  const auth = inject(Auth);
  const router = inject(Router);

  if (auth.isAdmin()) return true;
  if (!auth.isSignedIn()) return router.createUrlTree(['/admin-login'], { queryParams: { next: state.url } });

  return router.createUrlTree(['/']);
};
