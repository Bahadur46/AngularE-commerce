import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Notify } from '@core/services/notify';
import { Motif, art } from '@shared/curation-art';

type Slot = 'Home hero' | 'Home strip' | 'Category top' | 'Cart upsell';

interface Banner {
  id: string;
  title: string;
  subtitle: string;
  slot: Slot;
  link: string;
  motif: Motif;
  tint: number;
  order: number;
  startsAt: string;
  endsAt: string;
  active: boolean;
}

const SLOTS: Slot[] = ['Home hero', 'Home strip', 'Category top', 'Cart upsell'];

const MOTIFS: Motif[] = ['box', 'bangles', 'thali', 'trunk', 'rakhi', 'jewel', 'candle', 'bloom'];

/** Seeded so the desk looks the same every visit; edits last for the session. */
const SEED: Banner[] = [
  { id: 'b1', title: 'The Sawan Collection', subtitle: 'Green chudi, resin and mehawar — boxed', slot: 'Home hero',
    link: '/category/sawan-gift', motif: 'bangles', tint: 0, order: 1, startsAt: '2026-07-01', endsAt: '2026-08-31', active: true },
  { id: 'b2', title: 'Rakhi, ready to send', subtitle: 'Two threads, sweets and a written card', slot: 'Home hero',
    link: '/category/rakhi-gift', motif: 'rakhi', tint: 1, order: 2, startsAt: '2026-07-20', endsAt: '2026-08-20', active: true },
  { id: 'b3', title: 'Free delivery over ₹999', subtitle: 'Dispatched within a working day', slot: 'Home strip',
    link: '/shop', motif: 'box', tint: 2, order: 1, startsAt: '2026-01-01', endsAt: '2026-12-31', active: true },
  { id: 'b4', title: 'Corporate gifting', subtitle: 'Your logo foiled on the lid, from twenty boxes', slot: 'Category top',
    link: '/category/corporate-gift', motif: 'trunk', tint: 3, order: 1, startsAt: '2026-06-01', endsAt: '2026-12-31', active: true },
  { id: 'b5', title: 'Add a hand-written card', subtitle: 'Written on the card inside the lid, free', slot: 'Cart upsell',
    link: '/shop', motif: 'jewel', tint: 4, order: 1, startsAt: '2026-01-01', endsAt: '2026-12-31', active: false },
  { id: 'b6', title: 'The Festival Edit', subtitle: 'Brass, sweets and light for the whole house', slot: 'Home hero',
    link: '/category/festival-gift', motif: 'thali', tint: 2, order: 3, startsAt: '2026-10-01', endsAt: '2026-11-15', active: false }
];

@Component({
  selector: 'Kova-admin-banners',
  imports: [DatePipe, MatButtonModule, MatIconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="head">
      <div>
        <span class="eyebrow">Storefront</span>
        <h1>Banners</h1>
        <small class="muted numeric">{{ liveNow().length }} showing now · {{ banners().length }} in total</small>
      </div>
      <button mat-flat-button (click)="composing.set(!composing())">
        <mat-icon fontSet="material-symbols-outlined">{{ composing() ? 'close' : 'add' }}</mat-icon>
        {{ composing() ? 'Cancel' : 'New banner' }}
      </button>
    </header>

    @if (composing()) {
      <form class="compose" (submit)="create($event)">
        <label class="wide"><span class="eyebrow">Title</span>
          <input [value]="draft.title()" (input)="draft.title.set(text($event))" placeholder="The Diwali Edit" required /></label>
        <label class="wide"><span class="eyebrow">Subtitle</span>
          <input [value]="draft.subtitle()" (input)="draft.subtitle.set(text($event))" placeholder="Brass, sweets and light" /></label>
        <label><span class="eyebrow">Slot</span>
          <select [value]="draft.slot()" (change)="draft.slot.set($any($event.target).value)">
            @for (slot of slots; track slot) { <option [value]="slot">{{ slot }}</option> }
          </select></label>
        <label><span class="eyebrow">Links to</span>
          <input [value]="draft.link()" (input)="draft.link.set(text($event))" placeholder="/category/festival-gift" /></label>
        <label><span class="eyebrow">Artwork</span>
          <select [value]="draft.motif()" (change)="draft.motif.set($any($event.target).value)">
            @for (motif of motifs; track motif) { <option [value]="motif">{{ motif }}</option> }
          </select></label>
        <label><span class="eyebrow">Starts</span>
          <input type="date" [value]="draft.startsAt()" (input)="draft.startsAt.set(text($event))" /></label>
        <label><span class="eyebrow">Ends</span>
          <input type="date" [value]="draft.endsAt()" (input)="draft.endsAt.set(text($event))" /></label>
        <button mat-flat-button type="submit">Create banner</button>
      </form>
    }

    @for (slot of slots; track slot) {
      @if (inSlot(slot).length) {
        <section class="group">
          <div class="group-head">
            <h2>{{ slot }}</h2>
            <small class="muted numeric">{{ inSlot(slot).length }} banner{{ inSlot(slot).length === 1 ? '' : 's' }}</small>
          </div>

          <div class="cards">
            @for (banner of inSlot(slot); track banner.id) {
              <article class="card" [class.dim]="!showing(banner)">
                <div class="art">
                  <img [src]="preview(banner)" [alt]="banner.title" loading="lazy" />
                  <span class="badge" [class]="stateOf(banner)">{{ stateLabel(banner) }}</span>
                </div>

                <div class="body">
                  <h3>{{ banner.title }}</h3>
                  <p class="muted">{{ banner.subtitle }}</p>

                  <dl>
                    <div><dt>Links to</dt><dd class="numeric">{{ banner.link }}</dd></div>
                    <div><dt>Runs</dt>
                      <dd class="numeric">{{ banner.startsAt | date:'d MMM' }} – {{ banner.endsAt | date:'d MMM yyyy' }}</dd></div>
                    <div><dt>Position</dt><dd class="numeric">{{ banner.order }}</dd></div>
                  </dl>

                  <div class="tools">
                    <button mat-button (click)="toggle(banner)">{{ banner.active ? 'Pause' : 'Publish' }}</button>
                    <span class="spacer"></span>
                    <button mat-icon-button (click)="move(banner, -1)" [disabled]="banner.order === 1"
                            aria-label="Move up the slot">
                      <mat-icon fontSet="material-symbols-outlined">arrow_upward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="move(banner, 1)"
                            [disabled]="banner.order === inSlot(slot).length" aria-label="Move down the slot">
                      <mat-icon fontSet="material-symbols-outlined">arrow_downward</mat-icon>
                    </button>
                    <button mat-icon-button (click)="remove(banner)" [attr.aria-label]="'Delete ' + banner.title">
                      <mat-icon fontSet="material-symbols-outlined">delete</mat-icon>
                    </button>
                  </div>
                </div>
              </article>
            }
          </div>
        </section>
      }
    }
  `,
  styles: `
    .head { display: flex; align-items: end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 26px; }
    .head h1 { font-size: 1.75rem; margin: 4px 0 3px; }

    .compose {
      display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 16px; align-items: end;
      padding: 22px; margin-bottom: 28px; border-radius: 16px;
      border: 1px solid var(--Kova-rule); background: var(--mat-sys-surface-container-low);
    }
    .compose .wide { grid-column: span 2; }
    .compose label { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
    .compose input, .compose select {
      height: 42px; padding: 0 12px; border-radius: 10px; font: inherit; font-size: 0.875rem;
      color: var(--mat-sys-on-surface); background: var(--mat-sys-surface-container);
      border: 1px solid var(--Kova-rule);
    }
    .compose input:focus, .compose select:focus { outline: none; border-color: var(--mat-sys-primary); }
    .compose button { height: 42px; }

    .group { margin-bottom: 32px; }
    .group-head {
      display: flex; align-items: baseline; gap: 12px;
      padding-bottom: 12px; margin-bottom: 16px; border-bottom: 1px solid var(--Kova-rule);
    }
    .group h2 { font-size: 1.0625rem; }

    .cards { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .card {
      display: flex; flex-direction: column; min-width: 0; overflow: hidden;
      border-radius: 16px; border: 1px solid var(--Kova-rule);
      background: var(--mat-sys-surface-container-low);
      transition: opacity 200ms ease;
    }
    .card.dim { opacity: 0.55; }
    .card.dim:hover { opacity: 1; }

    .art { position: relative; }
    .art img { display: block; width: 100%; aspect-ratio: 16 / 7; object-fit: cover; }
    .badge {
      position: absolute; top: 10px; left: 10px;
      padding: 3px 10px; border-radius: 999px;
      font-family: var(--Kova-mono); font-size: 0.625rem; font-weight: 600;
      letter-spacing: 0.06em; text-transform: uppercase;
      background: var(--mat-sys-surface-container-highest); color: var(--mat-sys-on-surface-variant);
    }
    .badge.live { background: color-mix(in srgb, var(--viz-good, #0ca30c) 26%, transparent); color: var(--mat-sys-on-surface); }
    .badge.soon { background: color-mix(in srgb, var(--viz-warning, #fab219) 26%, transparent); color: var(--mat-sys-on-surface); }
    .badge.over { background: color-mix(in srgb, var(--viz-critical, #d03b3b) 24%, transparent); color: var(--mat-sys-on-surface); }

    .body { padding: 16px 18px 12px; display: flex; flex-direction: column; gap: 8px; flex: 1; min-width: 0; }
    .body h3 { font-size: 1rem; }
    .body p { margin: 0; font-size: 0.8125rem; line-height: 1.5; }

    dl { margin: 4px 0 0; display: flex; flex-direction: column; gap: 5px; }
    dl div { display: grid; grid-template-columns: 74px 1fr; gap: 10px; align-items: baseline; }
    dt { font-family: var(--Kova-mono); font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--mat-sys-on-surface-variant); }
    dd { margin: 0; font-size: 0.75rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

    .tools {
      display: flex; align-items: center; gap: 2px; margin-top: auto;
      padding-top: 10px; border-top: 1px solid var(--Kova-rule);
    }
    .tools button { font-size: 0.8125rem; }
    .tools mat-icon { font-size: 18px; width: 18px; height: 18px; }

    @media (max-width: 1099px) { .cards { grid-template-columns: repeat(2, minmax(0, 1fr)); } .compose { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 699px) { .cards { grid-template-columns: 1fr; } .compose { grid-template-columns: 1fr; } .compose .wide { grid-column: auto; } }
  `
})
export class AdminBanners {
  private readonly notify = inject(Notify);

  protected readonly slots = SLOTS;
  protected readonly motifs = MOTIFS;
  protected readonly banners = signal<Banner[]>(SEED);
  protected readonly composing = signal(false);

  protected readonly draft = {
    title: signal(''),
    subtitle: signal(''),
    slot: signal<Slot>('Home hero'),
    link: signal('/shop'),
    motif: signal<Motif>('box'),
    startsAt: signal(new Date().toISOString().slice(0, 10)),
    endsAt: signal('2026-12-31')
  };

  protected readonly liveNow = computed(() => this.banners().filter(banner => this.showing(banner)));

  protected inSlot(slot: Slot): Banner[] {
    return this.banners().filter(banner => banner.slot === slot).sort((a, b) => a.order - b.order);
  }

  /** The artwork the shopfront would render, drawn from the same motif set. */
  protected preview(banner: Banner): string {
    return art({
      label: banner.title.toUpperCase().slice(0, 22),
      caption: banner.subtitle.toUpperCase().slice(0, 30),
      tint: banner.tint,
      shape: 'wide',
      motif: banner.motif
    });
  }

  protected showing(banner: Banner): boolean {
    return this.stateOf(banner) === 'live';
  }

  protected stateOf(banner: Banner): 'live' | 'soon' | 'over' | '' {
    if (!banner.active) return '';
    const now = Date.now();
    if (new Date(banner.startsAt).getTime() > now) return 'soon';
    if (new Date(banner.endsAt).getTime() + 864e5 < now) return 'over';
    return 'live';
  }

  protected stateLabel(banner: Banner): string {
    switch (this.stateOf(banner)) {
      case 'live': return 'Showing';
      case 'soon': return 'Scheduled';
      case 'over': return 'Finished';
      default: return 'Paused';
    }
  }

  protected toggle(banner: Banner): void {
    this.banners.update(rows => rows.map(row =>
      row.id === banner.id ? { ...row, active: !row.active } : row));
    this.notify.done(`${banner.title} ${banner.active ? 'paused' : 'published'}`);
  }

  /** Swaps the banner with its neighbour in the same slot. */
  protected move(banner: Banner, direction: 1 | -1): void {
    const siblings = this.inSlot(banner.slot);
    const index = siblings.findIndex(row => row.id === banner.id);
    const swapWith = siblings[index + direction];
    if (!swapWith) return;

    this.banners.update(rows => rows.map(row => {
      if (row.id === banner.id) return { ...row, order: swapWith.order };
      if (row.id === swapWith.id) return { ...row, order: banner.order };
      return row;
    }));
  }

  protected remove(banner: Banner): void {
    this.banners.update(rows => rows.filter(row => row.id !== banner.id));
    this.notify.done(`${banner.title} deleted`);
  }

  protected create(event: Event): void {
    event.preventDefault();
    const title = this.draft.title().trim();
    if (!title) { this.notify.problem('A banner needs a title.'); return; }

    const slot = this.draft.slot();
    const order = this.inSlot(slot).length + 1;

    this.banners.update(rows => [...rows, {
      id: `b${Date.now()}`,
      title,
      subtitle: this.draft.subtitle().trim(),
      slot,
      link: this.draft.link().trim() || '/shop',
      motif: this.draft.motif(),
      tint: rows.length % 5,
      order,
      startsAt: this.draft.startsAt(),
      endsAt: this.draft.endsAt(),
      active: true
    }]);

    this.draft.title.set('');
    this.draft.subtitle.set('');
    this.composing.set(false);
    // Session-only until the API lands: the banner lives in this signal alone.
    this.notify.done(`${title} added to ${slot}`);
  }

  protected text(event: Event): string { return (event.target as HTMLInputElement).value; }
}
