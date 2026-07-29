import { Routes } from '@angular/router';
import { adminGuard, authGuard } from '@core/guards/auth-guard';

/** Every feature is lazily loaded, so the first paint ships the shell only. */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    title: 'Anuvesha & Co. — Luxury Gift Curations'
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/products/product-list').then(m => m.ProductList),
    title: 'All curations — Anuvesha & Co.'
  },
  {
    path: 'category/:slug',
    loadComponent: () => import('./features/products/product-list').then(m => m.ProductList)
  },
  {
    path: 'product/:slug',
    loadComponent: () => import('./features/products/product-detail').then(m => m.ProductDetail)
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart-page').then(m => m.CartPage),
    canActivate: [authGuard],
    title: 'Your cart — Anuvesha & Co.'
  },
  {
    path: 'wishlist',
    loadComponent: () => import('./features/wishlist/wishlist-page').then(m => m.WishlistPage),
    canActivate: [authGuard],
    title: 'Wishlist — Anuvesha & Co.'
  },
  {
    path: 'checkout',
    loadComponent: () => import('./features/checkout/checkout').then(m => m.Checkout),
    canActivate: [authGuard],
    title: 'Checkout — Anuvesha & Co.'
  },
  {
    path: 'orders',
    loadComponent: () => import('./features/orders/order-list').then(m => m.OrderList),
    canActivate: [authGuard],
    title: 'Your orders — Anuvesha & Co.'
  },
  {
    path: 'orders/:id',
    loadComponent: () => import('./features/orders/order-detail').then(m => m.OrderDetail),
    canActivate: [authGuard]
  },
  {
    path: 'track',
    loadComponent: () => import('./features/orders/track-order').then(m => m.TrackOrder),
    title: 'Track an order — Anuvesha & Co.'
  },
  {
    path: 'profile',
    loadComponent: () => import('./features/profile/profile-page').then(m => m.ProfilePage),
    canActivate: [authGuard],
    title: 'Your account — Anuvesha & Co.'
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./features/auth/sign-in').then(m => m.SignIn),
    title: 'Sign in — Anuvesha & Co.'
  },
  {
    path: 'admin-login',
    loadComponent: () => import('./features/auth/admin-sign-in').then(m => m.AdminSignIn),
    title: 'Back office sign in — Anuvesha & Co.'
  },
  {
    path: 'admin-register',
    loadComponent: () => import('./features/auth/admin-register').then(m => m.AdminRegister),
    title: 'Back office registration — Anuvesha & Co.'
  },
  {
    path: 'create-account',
    loadComponent: () => import('./features/auth/create-account').then(m => m.CreateAccount),
    title: 'Create an account — Anuvesha & Co.'
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./features/admin/admin-shell').then(m => m.AdminShell),
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard', loadComponent: () => import('./features/admin/dashboard').then(m => m.Dashboard) },
      { path: 'reports', loadComponent: () => import('./features/admin/admin-reports').then(m => m.AdminReports) },
      { path: 'products', loadComponent: () => import('./features/admin/admin-products').then(m => m.AdminProducts) },
      { path: 'categories', loadComponent: () => import('./features/admin/admin-categories').then(m => m.AdminCategories) },
      { path: 'coupons', loadComponent: () => import('./features/admin/admin-coupons').then(m => m.AdminCoupons) },
      { path: 'banners', loadComponent: () => import('./features/admin/admin-banners').then(m => m.AdminBanners) },
      { path: 'orders', loadComponent: () => import('./features/admin/admin-orders').then(m => m.AdminOrders) },
      { path: 'customers', loadComponent: () => import('./features/admin/admin-customers').then(m => m.AdminCustomers) },
      { path: 'settings', loadComponent: () => import('./features/admin/admin-settings').then(m => m.AdminSettings) }
    ]
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found').then(m => m.NotFound),
    title: 'Page not found — Anuvesha & Co.'
  }
];
