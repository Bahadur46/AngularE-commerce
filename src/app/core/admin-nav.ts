/**
 * The back office's sections, in one place.
 *
 * Two things render this list — the sidebar inside /admin and the strip that
 * follows staff around the shopfront — and they must not drift apart. A link
 * added here shows up in both.
 *
 * Paths are relative to /admin, because that is how the sidebar's routerLinks
 * resolve; the strip lives outside the shell and prefixes them itself.
 */
export interface AdminLink {
  readonly path: string;
  readonly label: string;
  readonly icon: string;
}

export interface AdminGroup {
  readonly title: string;
  readonly links: readonly AdminLink[];
}

/**
 * Grouped rather than one flat list: what you look at, what you edit, and
 * what you configure are three different visits to this page.
 */
export const ADMIN_GROUPS: readonly AdminGroup[] = [
  {
    title: 'Overview',
    links: [
      { path: 'dashboard', label: 'Dashboard', icon: 'monitoring' },
      { path: 'reports', label: 'Reports', icon: 'lab_profile' }
    ]
  },
  {
    title: 'Selling',
    links: [
      { path: 'orders', label: 'Orders', icon: 'receipt_long' },
      { path: 'products', label: 'Products', icon: 'inventory_2' },
      { path: 'categories', label: 'Categories', icon: 'category' },
      { path: 'coupons', label: 'Coupons', icon: 'sell' },
      { path: 'banners', label: 'Banners', icon: 'wallpaper' }
    ]
  },
  {
    title: 'People',
    links: [
      { path: 'customers', label: 'Customers', icon: 'group' }
    ]
  },
  {
    title: 'Shop',
    links: [
      { path: 'settings', label: 'Settings', icon: 'settings' }
    ]
  }
];

/** The same sections flattened, for the strip — it has no room for headings. */
export const ADMIN_LINKS: readonly AdminLink[] = ADMIN_GROUPS.flatMap(group => group.links);

/**
 * True for the back office proper, false for /admin-login and /admin-register.
 * A plain `startsWith('/admin')` would catch both doors, which are not the
 * back office and do want the strip hidden for a different reason — nobody is
 * signed in yet.
 */
export function isAdminArea(url: string): boolean {
  const path = url.split(/[?#]/)[0];
  return path === '/admin' || path.startsWith('/admin/');
}
