import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Notify } from '@core/services/notify';

interface ShopSettings {
  shopName: string;
  supportEmail: string;
  supportPhone: string;
  instagram: string;
  freeShippingOver: number;
  flatShipping: number;
  taxPercent: number;
  lowStockAt: number;
  dispatchHours: number;
  acceptingOrders: boolean;
  bulkEnquiries: boolean;
  notifyNewOrder: boolean;
  notifyLowStock: boolean;
  notifyDailyDigest: boolean;
}

const KEY = 'Kova.shop-settings';

const DEFAULTS: ShopSettings = {
  shopName: 'Anuvesha & Co.',
  supportEmail: 'hello@anuveshandco.shop',
  supportPhone: '+91 90000 00000',
  instagram: '@anuveshandco',
  freeShippingOver: 999,
  flatShipping: 59,
  taxPercent: 18,
  lowStockAt: 12,
  dispatchHours: 24,
  acceptingOrders: true,
  bulkEnquiries: true,
  notifyNewOrder: true,
  notifyLowStock: true,
  notifyDailyDigest: false
};

@Component({
  selector: 'Kova-admin-settings',
  imports: [MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Shop</span>
        <h1>Settings</h1>
        <small class="muted">Saved to this browser until the settings API lands.</small>
      </div>
      <div class="actions">
        <button mat-stroked-button (click)="reset()">Reset to defaults</button>
        <button mat-flat-button (click)="save()" [disabled]="!dirty()">
          <mat-icon fontSet="material-symbols-outlined">save</mat-icon>
          {{ dirty() ? 'Save changes' : 'Saved' }}
        </button>
      </div>
    </header>

    <div class="panels">
      <section class="panel">
        <h2>The shop</h2>
        <p class="muted">What customers see on the invoice and in the footer.</p>
        <div class="fields">
          <label><span class="eyebrow">Shop name</span>
            <input [value]="form().shopName" (input)="set('shopName', text($event))" /></label>
          <label><span class="eyebrow">Support email</span>
            <input type="email" [value]="form().supportEmail" (input)="set('supportEmail', text($event))" /></label>
          <label><span class="eyebrow">Support phone</span>
            <input [value]="form().supportPhone" (input)="set('supportPhone', text($event))" /></label>
          <label><span class="eyebrow">Instagram</span>
            <input [value]="form().instagram" (input)="set('instagram', text($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Delivery and tax</h2>
        <p class="muted">These drive the cart totals and the promise on the banner.</p>
        <div class="fields">
          <label><span class="eyebrow">Free delivery over (₹)</span>
            <input type="number" min="0" [value]="form().freeShippingOver" (input)="set('freeShippingOver', num($event))" /></label>
          <label><span class="eyebrow">Flat delivery below that (₹)</span>
            <input type="number" min="0" [value]="form().flatShipping" (input)="set('flatShipping', num($event))" /></label>
          <label><span class="eyebrow">Tax (%)</span>
            <input type="number" min="0" max="40" [value]="form().taxPercent" (input)="set('taxPercent', num($event))" /></label>
          <label><span class="eyebrow">Dispatch within (hours)</span>
            <input type="number" min="1" [value]="form().dispatchHours" (input)="set('dispatchHours', num($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Stock</h2>
        <p class="muted">Where the dashboard starts calling a shelf low.</p>
        <div class="fields">
          <label><span class="eyebrow">Low stock warning at</span>
            <input type="number" min="1" [value]="form().lowStockAt" (input)="set('lowStockAt', num($event))" /></label>
        </div>
      </section>

      <section class="panel">
        <h2>Switches</h2>
        <p class="muted">Turn the shop and its alerts on and off.</p>
        <ul class="toggles">
          @for (row of switches; track row.key) {
            <li>
              <div>
                <strong>{{ row.label }}</strong>
                <small class="muted">{{ row.detail }}</small>
              </div>
              <button class="switch" role="switch" [attr.aria-checked]="flag(row.key)"
                      [class.on]="flag(row.key)" (click)="toggle(row.key)"
                      [attr.aria-label]="row.label">
                <span class="knob"></span>
              </button>
            </li>
          }
        </ul>
      </section>
    </div>
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }
    .head small { display: block; font-size: 0.8125rem; }
    .actions { display: flex; gap: 10px; flex-wrap: wrap; }

    .panels { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 20px; }
    .panel {
      padding: 24px; border-radius: 16px; min-width: 0;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .panel h2 { font-size: 1.0625rem; }
    .panel > p { margin: 6px 0 20px; font-size: 0.8125rem; }

    .fields { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
    .fields label { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .fields input {
      height: 42px; padding: 0 12px; border-radius: 10px; font: inherit; font-size: 0.875rem;
      color: var(--mat-sys-on-surface); background: var(--mat-sys-surface-container);
      border: 1px solid var(--Kova-rule);
    }
    .fields input:focus { outline: none; border-color: var(--mat-sys-primary); }

    .toggles { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; }
    .toggles li {
      display: flex; align-items: center; justify-content: space-between; gap: 20px;
      padding: 14px 0; border-bottom: 1px solid var(--Kova-rule);
    }
    .toggles li:last-child { border-bottom: 0; }
    .toggles strong { display: block; font-size: 0.875rem; font-weight: 500; }
    .toggles small { display: block; font-size: 0.75rem; margin-top: 2px; }

    .switch {
      position: relative; flex: none; width: 46px; height: 26px; padding: 0; cursor: pointer;
      border: 1px solid var(--Kova-rule); border-radius: 999px;
      background: var(--mat-sys-surface-container-highest);
      transition: background 180ms ease, border-color 180ms ease;
    }
    .switch.on { background: var(--mat-sys-primary); border-color: var(--mat-sys-primary); }
    .knob {
      position: absolute; top: 3px; left: 3px; width: 18px; height: 18px; border-radius: 50%;
      background: var(--mat-sys-on-surface-variant);
      transition: transform 180ms cubic-bezier(0.2, 0, 0.1, 1), background 180ms ease;
    }
    .switch.on .knob { transform: translateX(20px); background: var(--mat-sys-on-primary); }

    @media (max-width: 1099px) { .panels { grid-template-columns: 1fr; } }
    @media (max-width: 599px) { .fields { grid-template-columns: 1fr; } }
  `
})
export class AdminSettings {
  private readonly notify = inject(Notify);

  protected readonly form = signal<ShopSettings>(read());
  protected readonly dirty = signal(false);

  protected readonly switches: { key: keyof ShopSettings; label: string; detail: string }[] = [
    { key: 'acceptingOrders', label: 'Accepting orders', detail: 'Turn off to close the shop without unpublishing it.' },
    { key: 'bulkEnquiries', label: 'Bulk enquiries', detail: 'Show the corporate form on the shelf page.' },
    { key: 'notifyNewOrder', label: 'Email me on every order', detail: 'One email per order, as it is placed.' },
    { key: 'notifyLowStock', label: 'Email me on low stock', detail: 'When a curation crosses the threshold above.' },
    { key: 'notifyDailyDigest', label: 'Daily digest', detail: 'One summary at 9pm instead of live alerts.' }
  ];

  protected set<K extends keyof ShopSettings>(key: K, value: ShopSettings[K]): void {
    this.form.update(current => ({ ...current, [key]: value }));
    this.dirty.set(true);
  }

  protected flag(key: keyof ShopSettings): boolean {
    return this.form()[key] === true;
  }

  protected toggle(key: keyof ShopSettings): void {
    this.set(key, !this.flag(key) as never);
  }

  protected save(): void {
    localStorage.setItem(KEY, JSON.stringify(this.form()));
    this.dirty.set(false);
    this.notify.done('Settings saved to this browser');
  }

  protected reset(): void {
    this.form.set({ ...DEFAULTS });
    localStorage.removeItem(KEY);
    this.dirty.set(false);
    this.notify.done('Settings reset');
  }

  protected text(event: Event): string { return (event.target as HTMLInputElement).value; }
  protected num(event: Event): number { return Number((event.target as HTMLInputElement).value) || 0; }
}

function read(): ShopSettings {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...DEFAULTS, ...(JSON.parse(raw) as Partial<ShopSettings>) } : { ...DEFAULTS };
  } catch {
    return { ...DEFAULTS };
  }
}
