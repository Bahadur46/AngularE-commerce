import { ApplicationConfig, provideZonelessChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { routes } from './app.routes';
import { authInterceptor } from '@core/interceptors/auth-interceptor';
import { errorInterceptor } from '@core/interceptors/error-interceptor';
import { environment } from '@env/environment';
import { Cart } from '@core/services/cart';
import { Wishlist } from '@core/services/wishlist';
import { Profile } from '@core/services/profile';
import { StaticCart, StaticProfile, StaticWishlist } from '@core/services/session.static';
import { Orders } from '@core/services/orders';
import { StaticOrders } from '@core/services/orders.static';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withComponentInputBinding(),          // route params arrive as component inputs
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([authInterceptor, errorInterceptor])
    ),
    provideAnimationsAsync(),
    // The session-shaped parts of the shop — cart, wishlist, orders, profile —
    // are still served from memory so the storefront runs with no backend.
    //
    // Auth, the catalogue and the back office are deliberately absent from the
    // list: registration, sign-in, product and category writes all go to the
    // real API at environment.apiUrl, so a product added in the admin is
    // persisted in Mongo rather than for the length of a session.
    { provide: Cart, useClass: StaticCart },
    { provide: Wishlist, useClass: StaticWishlist },
    { provide: Orders, useClass: StaticOrders },
    { provide: Profile, useClass: StaticProfile },
    { provide: LOCALE_ID, useValue: environment.locale },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', subscriptSizing: 'dynamic' } },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'center', verticalPosition: 'bottom' } }
  ]
};
