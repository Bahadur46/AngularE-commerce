import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Cart } from '@core/services/cart';
import { Orders } from '@core/services/orders';
import { Profile } from '@core/services/profile';
import { Notify } from '@core/services/notify';
import { Address } from '@core/models';
import { PricePipe } from '@core/services/currency';

@Component({
  selector: 'Kova-checkout',
  imports: [
    RouterLink, ReactiveFormsModule, MatStepperModule, MatFormFieldModule, MatInputModule,
    MatSelectModule, MatRadioModule, MatButtonModule, MatCheckboxModule, PricePipe
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="page">
      <div class="section-head">
        <div>
          <span class="eyebrow">Checkout</span>
          <h1>Place your order</h1>
        </div>
        <a routerLink="/cart" class="muted">Back to cart</a>
      </div>

      @if (cart.isEmpty()) {
        <p class="muted">Your cart is empty. <a routerLink="/shop">Find something first</a>.</p>
      } @else {
        <div class="layout">
          <mat-stepper orientation="vertical" linear #stepper>
            <mat-step [stepControl]="addressForm" label="Where it's going">
              @if (savedAddresses().length) {
                <div class="saved-addresses">
                  @for (address of savedAddresses(); track address.id) {
                    <button type="button" class="saved" (click)="useAddress(address)">
                      <strong>{{ address.label }}</strong>
                      <span class="muted">{{ address.line1 }}, {{ address.city }} {{ address.postalCode }}</span>
                    </button>
                  }
                </div>
              }

              <form [formGroup]="addressForm" class="fields">
                <mat-form-field><mat-label>Full name</mat-label>
                  <input matInput formControlName="fullName" autocomplete="name" /></mat-form-field>

                <mat-form-field><mat-label>Phone</mat-label>
                  <input matInput formControlName="phone" autocomplete="tel" inputmode="tel" /></mat-form-field>

                <mat-form-field class="wide"><mat-label>Address</mat-label>
                  <input matInput formControlName="line1" autocomplete="address-line1" /></mat-form-field>

                <mat-form-field class="wide"><mat-label>Apartment, floor (optional)</mat-label>
                  <input matInput formControlName="line2" autocomplete="address-line2" /></mat-form-field>

                <mat-form-field><mat-label>City</mat-label>
                  <input matInput formControlName="city" autocomplete="address-level2" /></mat-form-field>

                <mat-form-field><mat-label>State</mat-label>
                  <input matInput formControlName="state" autocomplete="address-level1" /></mat-form-field>

                <mat-form-field><mat-label>PIN code</mat-label>
                  <input matInput formControlName="postalCode" inputmode="numeric" autocomplete="postal-code" />
                  @if (addressForm.controls.postalCode.hasError('pattern')) {
                    <mat-error>A PIN code is six digits.</mat-error>
                  }
                </mat-form-field>

                <mat-form-field><mat-label>Label</mat-label>
                  <mat-select formControlName="label">
                    <mat-option value="Home">Home</mat-option>
                    <mat-option value="Work">Work</mat-option>
                    <mat-option value="Other">Other</mat-option>
                  </mat-select>
                </mat-form-field>

                <mat-checkbox formControlName="saveForNextTime" class="wide">Save this address for next time</mat-checkbox>
              </form>

              <button mat-flat-button matStepperNext [disabled]="addressForm.invalid">Continue to payment</button>
            </mat-step>

            <mat-step [stepControl]="paymentForm" label="How you're paying">
              <form [formGroup]="paymentForm">
                <mat-radio-group formControlName="method" class="methods">
                  <mat-radio-button value="cod">
                    <strong>Cash on delivery</strong>
                    <small class="muted">Pay the courier when it arrives.</small>
                  </mat-radio-button>
                  <mat-radio-button value="card">
                    <strong>Card</strong>
                    <small class="muted">You'll be redirected to the payment provider.</small>
                  </mat-radio-button>
                  <mat-radio-button value="upi">
                    <strong>UPI</strong>
                    <small class="muted">Approve the request in your UPI app.</small>
                  </mat-radio-button>
                </mat-radio-group>
              </form>

              <div class="row">
                <button mat-stroked-button matStepperPrevious>Back</button>
                <button mat-flat-button matStepperNext>Review the order</button>
              </div>
            </mat-step>

            <mat-step label="Check and place">
              <div class="review">
                <h3>Shipping to</h3>
                <p class="muted">
                  {{ addressForm.value.fullName }}<br />
                  {{ addressForm.value.line1 }}@if (addressForm.value.line2) { , {{ addressForm.value.line2 }} }<br />
                  {{ addressForm.value.city }}, {{ addressForm.value.state }}
                  <span class="numeric">{{ addressForm.value.postalCode }}</span><br />
                  <span class="numeric">{{ addressForm.value.phone }}</span>
                </p>

                <h3>Paying by</h3>
                <p class="muted">{{ methodLabel() }}</p>
              </div>

              <div class="row">
                <button mat-stroked-button matStepperPrevious>Back</button>
                <button mat-flat-button class="place" [disabled]="placing()" (click)="placeOrder()">
                  {{ placing() ? 'Placing…' : 'Place order · ' + (cart.state().total |KovaPrice) }}
                </button>
              </div>
            </mat-step>
          </mat-stepper>

          <aside class="summary surface-card">
            <h3>{{ cart.count() }} {{ cart.count() === 1 ? 'item' : 'items' }}</h3>

            <ul class="lines">
              @for (item of cart.state().items; track item.productId) {
                <li>
                  <img [src]="item.imageUrl" [alt]="item.name" loading="lazy" />
                  <span class="name">{{ item.name }}<small class="muted numeric"> × {{ item.quantity }}</small></span>
                  <span class="price">{{ item.lineTotal |KovaPrice }}</span>
                </li>
              }
            </ul>

            <dl>
              <div><dt>Subtotal</dt><dd class="numeric">{{ cart.state().subtotal |KovaPrice }}</dd></div>
              @if (cart.state().discount > 0) {
                <div><dt>Discount</dt><dd class="numeric">−{{ cart.state().discount |KovaPrice }}</dd></div>
              }
              <div><dt>Shipping</dt>
                <dd class="numeric">{{ cart.state().shipping === 0 ? 'Free' : (cart.state().shipping |KovaPrice) }}</dd></div>
              <div><dt>Tax</dt><dd class="numeric">{{ cart.state().tax |KovaPrice }}</dd></div>
            </dl>

            <div class="total">
              <span>Total</span><strong class="price">{{ cart.state().total |KovaPrice }}</strong>
            </div>
          </aside>
        </div>
      }
    </div>
  `,
  styles: `
    .layout { display: grid; grid-template-columns: 1fr 340px; gap: 40px; align-items: start; }
    mat-stepper { background: transparent; }

    .fields { display: grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; margin-bottom: 16px; }
    .fields .wide { grid-column: 1 / -1; }

    .saved-addresses { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px; }
    .saved {
      display: flex; flex-direction: column; gap: 3px; text-align: left; cursor: pointer;
      padding: 12px 16px; border-radius: 10px; font: inherit;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .saved:hover { border-color: var(--mat-sys-primary); }
    .saved span { font-size: 0.8125rem; }

    .methods { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
    .methods strong { display: block; }
    .methods small { display: block; font-size: 0.8125rem; }

    .review h3 { font-size: 1rem; margin: 16px 0 6px; }
    .review p { margin: 0; line-height: 1.6; font-size: 0.875rem; }
    .place { --mat-filled-button-container-height: 46px; }

    .summary { position: sticky; top: 92px; display: flex; flex-direction: column; gap: 14px; }
    .summary h3 { margin: 0; font-size: 1rem; }
    .lines { list-style: none; margin: 0; padding: 0 0 14px; display: flex; flex-direction: column; gap: 12px; border-bottom: 1px solid var(--Kova-rule); }
    .lines li { display: grid; grid-template-columns: 44px 1fr auto; gap: 10px; align-items: center; font-size: 0.8125rem; }
    .lines img { width: 44px; height: 44px; object-fit: cover; border-radius: 8px; }
    dl { margin: 0; display: flex; flex-direction: column; gap: 8px; }
    dl div { display: flex; justify-content: space-between; font-size: 0.875rem; }
    dt { color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; }
    .total { display: flex; justify-content: space-between; align-items: baseline; padding-top: 12px; border-top: 1px solid var(--Kova-rule); }
    .total strong { font-size: 1.25rem; font-weight: 600; }

    @media (max-width: 899px) {
      .layout { grid-template-columns: 1fr; }
      .fields { grid-template-columns: 1fr; }
      .summary { position: static; order: -1; }
    }
  `
})
export class Checkout {
  protected readonly cart = inject(Cart);
  private readonly orders = inject(Orders);
  private readonly profile = inject(Profile);
  private readonly notify = inject(Notify);
  private readonly router = inject(Router);
  private readonly fb = inject(FormBuilder);

  protected readonly savedAddresses = signal<Address[]>([]);
  protected readonly placing = signal(false);

  protected readonly addressForm = this.fb.nonNullable.group({
    label: ['Home', Validators.required],
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9+\- ]{8,15}$/)]],
    line1: ['', Validators.required],
    line2: [''],
    city: ['', Validators.required],
    state: ['', Validators.required],
    postalCode: ['', [Validators.required, Validators.pattern(/^\d{6}$/)]],
    country: ['IN'],
    saveForNextTime: [true]
  });

  protected readonly paymentForm = this.fb.nonNullable.group({
    method: ['cod', Validators.required]
  });

  constructor() {
    this.cart.load();
    this.profile.addresses().subscribe(list => {
      this.savedAddresses.set(list);
      const preferred = list.find(a => a.isDefault) ?? list[0];
      if (preferred) this.useAddress(preferred);
    });
  }

  protected useAddress(address: Address): void {
    this.addressForm.patchValue({
      label: address.label, fullName: address.fullName, phone: address.phone,
      line1: address.line1, line2: address.line2 ?? '', city: address.city,
      state: address.state, postalCode: address.postalCode, country: address.country
    });
  }

  protected methodLabel(): string {
    const map: Record<string, string> = { cod: 'Cash on delivery', card: 'Card', upi: 'UPI' };
    return map[this.paymentForm.controls.method.value] ?? 'Cash on delivery';
  }

  protected placeOrder(): void {
    if (this.addressForm.invalid) { this.addressForm.markAllAsTouched(); return; }

    const value = this.addressForm.getRawValue();
    const address: Address = {
      label: value.label, fullName: value.fullName, phone: value.phone,
      line1: value.line1, line2: value.line2 || undefined, city: value.city,
      state: value.state, postalCode: value.postalCode, country: value.country,
      isDefault: false
    };

    this.placing.set(true);

    if (value.saveForNextTime) {
      this.profile.saveAddress(address).subscribe({ error: () => void 0 });
    }

    this.orders.checkout(address, this.paymentForm.controls.method.value, this.cart.state().couponCode)
      .subscribe({
        next: order => {
          this.cart.reset();
          this.notify.done(`Order ${order.orderNumber} placed`);
          this.router.navigate(['/orders', order.id], { queryParams: { placed: 'true' } });
        },
        error: () => this.placing.set(false)
      });
  }
}
