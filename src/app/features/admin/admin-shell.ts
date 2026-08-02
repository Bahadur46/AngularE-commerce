import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Auth } from '@core/services/auth';
import { ADMIN_GROUPS } from '@core/admin-nav';

@Component({
  selector: 'Kova-admin-shell',
  imports: [RouterLink, RouterLinkActive, RouterOutlet, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="admin" [class.tight]="collapsed()">
      <nav aria-label="Admin sections">
        <div class="nav-head">
          <span class="eyebrow">Back office</span>
          <button class="collapse" (click)="collapsed.set(!collapsed())"
                  [attr.aria-label]="collapsed() ? 'Expand the sidebar' : 'Collapse the sidebar'">
            <mat-icon fontSet="material-symbols-outlined">
              {{ collapsed() ? 'chevron_right' : 'chevron_left' }}
            </mat-icon>
          </button>
        </div>

        @for (group of groups; track group.title) {
          <span class="group eyebrow">{{ group.title }}</span>
          @for (link of group.links; track link.path) {
            <a [routerLink]="link.path" routerLinkActive="active" [title]="link.label">
              <mat-icon fontSet="material-symbols-outlined">{{ link.icon }}</mat-icon>
              <span class="text">{{ link.label }}</span>
            </a>
          }
        }

        <div class="foot">
          <a routerLink="/" class="quiet" title="Back to the shop">
            <mat-icon fontSet="material-symbols-outlined">storefront</mat-icon>
            <span class="text">Back to the shop</span>
          </a>
          <button class="quiet danger" (click)="auth.logout()" title="Log out">
            <mat-icon fontSet="material-symbols-outlined">logout</mat-icon>
            <span class="text">Log out</span>
          </button>
        </div>
      </nav>

      <div class="content"><router-outlet /></div>
    </div>
  `,
  styles: `
    .admin {
      display: grid; grid-template-columns: 232px 1fr;
      max-width: var(--Kova-page); margin-inline: auto; gap: 36px;
      padding: 32px 20px 72px;
      transition: grid-template-columns 220ms cubic-bezier(0.2, 0, 0.1, 1);
    }
    .admin.tight { grid-template-columns: 64px 1fr; gap: 24px; }

    nav {
      display: flex; flex-direction: column; gap: 2px;
      position: sticky; top: 92px; align-self: start; min-width: 0;
    }
    .nav-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; }
    .collapse {
      display: grid; place-items: center; width: 26px; height: 26px; flex: none;
      border: 0; border-radius: 8px; cursor: pointer;
      background: transparent; color: var(--mat-sys-on-surface-variant);
    }
    .collapse:hover { background: var(--mat-sys-surface-container); }
    .collapse mat-icon { font-size: 18px; width: 18px; height: 18px; }

    .group { margin: 16px 0 6px; padding-inline: 14px; font-size: 0.5625rem; opacity: 0.7; }

    nav a, nav button.quiet {
      display: flex; align-items: center; gap: 12px;
      padding: 10px 14px; border-radius: 10px; font: inherit; font-size: 0.9375rem;
      color: var(--mat-sys-on-surface-variant);
      background: transparent; border: 0; cursor: pointer; text-align: left; width: 100%;
    }
    nav a:hover, nav button.quiet:hover { background: var(--mat-sys-surface-container); color: var(--mat-sys-on-surface); }
    nav a.active {
      background: var(--mat-sys-secondary-container); color: var(--mat-sys-on-secondary-container);
      font-weight: 500;
    }
    nav mat-icon { font-size: 20px; width: 20px; height: 20px; flex: none; }
    .text { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

    .foot { margin-top: 20px; padding-top: 14px; border-top: 1px solid var(--Kova-rule); }
    .danger:hover { color: var(--mat-sys-error); }

    /* Collapsed: icons only, labels and group titles out of the way. */
    .tight .text, .tight .group, .tight .nav-head .eyebrow { display: none; }
    .tight nav a, .tight nav button.quiet { justify-content: center; padding-inline: 0; }
    .tight .nav-head { justify-content: center; }

    .content { min-width: 0; }

    @media (max-width: 899px) {
      .admin, .admin.tight { grid-template-columns: 1fr; gap: 20px; }
      nav { position: static; flex-direction: row; overflow-x: auto; padding-bottom: 8px; scrollbar-width: none; }
      nav::-webkit-scrollbar { display: none; }
      .nav-head, .group, .foot { display: none; }
      .tight .text { display: inline; }
      .tight nav a { justify-content: flex-start; padding-inline: 14px; }
      nav a { white-space: nowrap; }
    }
  `
})
export class AdminShell {
  protected readonly auth = inject(Auth);
  protected readonly collapsed = signal(false);

  /** Shared with the site-wide strip, so the two never list different sections. */
  protected readonly groups = ADMIN_GROUPS;
}
