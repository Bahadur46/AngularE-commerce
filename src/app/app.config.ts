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
import { Catalog } from '@core/services/catalog';
import { StaticCatalog } from '@core/services/catalog.static';
import { Admin } from '@core/services/admin';
import { StaticAdmin } from '@core/services/admin.static';
import { Auth } from '@core/services/auth';
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
    // Most of the shop is still served from memory so it runs with no backend:
    // the catalogue, the cart and the back office. Delete these lines to put
    // every page back on Kova.Api.
    //
    // Auth is deliberately absent from the list — registration, sign-in,
    // refresh and logout go to the real API at environment.apiUrl, so an
    // account has to exist in Mongo before anyone gets in.
    { provide: Catalog, useClass: StaticCatalog },
    { provide: Admin, useClass: StaticAdmin },
    { provide: Cart, useClass: StaticCart },
    { provide: Wishlist, useClass: StaticWishlist },
    { provide: Orders, useClass: StaticOrders },
    { provide: Profile, useClass: StaticProfile },
    { provide: LOCALE_ID, useValue: environment.locale },
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', subscriptSizing: 'dynamic' } },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { horizontalPosition: 'center', verticalPosition: 'bottom' } }
  ]
};
