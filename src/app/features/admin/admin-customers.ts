import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Admin } from '@core/services/admin';
import { Notify } from '@core/services/notify';
import { Paged, User } from '@core/models';

@Component({
  selector: 'Kova-admin-customers',
  imports: [
    FormsModule, MatIconModule, MatFormFieldModule,
    MatInputModule, MatSlideToggleModule, MatPaginatorModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="section-head">
      <div>
        <span class="eyebrow">People</span>
        <h1>Customers</h1>
      </div>
    </div>

    <mat-form-field class="search">
      <mat-label>Search by name or email</mat-label>
      <input matInput [(ngModel)]="search" (keyup.enter)="load(1)" />
      <mat-icon matSuffix fontSet="material-symbols-outlined">search</mat-icon>
    </mat-form-field>

    @if (result(); as page) {
      <div class="table-wrap">
        <table>
          <thead>
            <tr><th>Name</th><th>Email</th><th>Roles</th><th class="right">Access</th></tr>
          </thead>
          <tbody>
            @for (customer of page.items; track customer.id) {
              <tr>
                <td>
                  <span class="avatar">{{ initials(customer) }}</span>
                  {{ customer.fullName }}
                </td>
                <td class="numeric muted">{{ customer.email }}</td>
                <td class="muted">{{ customer.roles.join(', ') }}</td>
                <td class="right">
                  <mat-slide-toggle [checked]="true" (change)="setActive(customer, $event.checked)"
                                    [attr.aria-label]="'Account access for ' + customer.fullName" />
                </td>
              </tr>
            } @empty {
              <tr><td colspan="4" class="muted">No customers match that search.</td></tr>
            }
          </tbody>
        </table>
      </div>

      <mat-paginator [length]="page.total" [pageSize]="page.pageSize" [pageIndex]="page.page - 1"
                     [pageSizeOptions]="[20, 50]" (page)="onPage($event)" aria-label="Customer pages" />
    }
  `,
  styles: `
    .search { width: min(100%, 340px); margin-bottom: 20px; }
    .table-wrap { overflow-x: auto; }
    table { width: 100%; border-collapse: collapse; font-size: 0.875rem; }
    th, td { text-align: left; padding: 12px 10px; border-bottom: 1px solid var(--Kova-rule); }
    th { font-family: var(--Kova-mono); font-size: 0.6875rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant); }
    .right { text-align: right; }
    .avatar {
      display: inline-grid; place-items: center; width: 30px; height: 30px; border-radius: 50%;
      margin-right: 10px; vertical-align: middle;
      background: var(--mat-sys-secondary-container); color: var(--mat-sys-on-secondary-container);
      font-family: var(--Kova-mono); font-size: 0.6875rem; font-weight: 600;
    }
    mat-paginator { background: transparent; }
  `
})
export class AdminCustomers {
  private readonly admin = inject(Admin);
  private readonly notify = inject(Notify);

  protected search = '';
  protected readonly result = signal<Paged<User> | null>(null);
  private pageSize = 20;

  constructor() { this.load(1); }

  protected load(page: number): void {
    this.admin.customers(this.search || undefined, page, this.pageSize)
      .subscribe(result => this.result.set(result));
  }

  protected onPage(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.load(event.pageIndex + 1);
  }

  protected initials(user: User): string {
    return user.fullName.split(' ').filter(Boolean).slice(0, 2).map(p => p[0]).join('').toUpperCase();
  }

  protected setActive(user: User, isActive: boolean): void {
    this.admin.setCustomerActive(user.id, isActive).subscribe({
      next: () => this.notify.done(isActive ? 'Access restored' : 'Account disabled')
    });
  }
}
