// The home page reads the same static catalogue the shop does, so a curation
// shown here and the same curation on /shop can never drift apart.
// See shared/catalogue.static.ts for the data itself.

import { Category, Product } from '@core/models';
import { CATALOGUE, CATALOGUE_CATEGORIES, CATALOGUE_FEATURED, CatalogueEntry, detailFor } from '@shared/catalogue.static';
import { art } from '@shared/curation-art';

export const HOME_CATEGORIES: Category[] = CATALOGUE_CATEGORIES;

/** Kept as catalogue entries, not list items: the lenses sort on createdAt. */
export const HOME_FEATURED: CatalogueEntry[] = CATALOGUE_FEATURED;

function bySlug(slug: string): Product {
  return detailFor(CATALOGUE.find(entry => entry.slug === slug) ?? CATALOGUE[0]);
}

export interface HomeSlide {
  product: Product;
  /** Small caps line above the name. */
  eyebrow: string;
  /** One line of positioning, under the name and above the contents. */
  note: string;
}

/**
 * The banner rotates through three boxes rather than leading with one forever —
 * a different motif, a different price point and a different occasion each
 * time, so the first screen shows the range instead of a single product.
 */
export const HOME_SLIDES: HomeSlide[] = [
  {
    product: bySlug('premium-sawan-curation'),
    eyebrow: 'The Sawan Collection',
    note: 'Our best seller. Poured, matched and boxed in small batches.'
  },
  {
    product: bySlug('bridal-sringar-trunk'),
    eyebrow: 'The Bridal Atelier',
    note: 'The full trousseau, in a rigid trunk that survives the wedding.'
  },
  {
    product: bySlug('diwali-festival-curation'),
    eyebrow: 'The Festival Edit',
    note: 'Brass, sweets and light — packed for the whole house.'
  }
];

/** The banner leads with the flagship. */
export const HOME_HERO: Product = HOME_SLIDES[0].product;

/** The strip under the hero — the promises the packaging is actually selling. */
export const HOME_FEATURES = [
  { icon: 'inventory_2', label: 'Premium packaging', detail: 'Rigid box, gold-foiled lid, satin ribbon and a sealed card.' },
  { icon: 'volunteer_activism', label: 'Handcrafted with love', detail: 'Resin poured and boxes packed in small batches, to order.' },
  { icon: 'redeem', label: 'Perfect for gifting', detail: 'Arrives gift-ready. No wrapping, no price on the invoice.' },
  { icon: 'local_shipping', label: 'Free delivery over ₹999', detail: 'Flat ₹59 below that, dispatched within a working day.' }
];

/** Runs as a single foil line under the banner. */
export const HOME_TICKER = [
  'Packed to order',
  'Gold-foiled lids',
  'Hand-written cards',
  'Dispatch within 24 hours',
  'Free delivery over ₹999',
  'Bulk orders from 20 boxes',
  'No price on the invoice',
  '7-day returns'
];

/** Counts that animate up when the band scrolls into view. */
export const HOME_STATS = [
  { value: 12400, suffix: '+', decimals: 0, label: 'Boxes packed by hand' },
  { value: 9, suffix: '', decimals: 0, label: 'Occasions on the shelf' },
  { value: 4.7, suffix: ' / 5', decimals: 1, label: 'Average rating' },
  { value: 96, suffix: '%', decimals: 0, label: 'Would order again' }
];

/** What actually happens between the order and the doorbell. */
export const HOME_STEPS = [
  { step: '01', label: 'You choose', detail: 'Pick the occasion, or let the gift finder shortlist three boxes for you.' },
  { step: '02', label: 'We pour', detail: 'Resin pieces are cast and cured in small batches, then matched by shade.' },
  { step: '03', label: 'We pack', detail: 'Every piece is laid into a velvet-touch tray and checked against the card.' },
  { step: '04', label: 'We seal', detail: 'Foiled lid, satin ribbon, hand-written note. Out the door within a day.' }
];

/** The strip that stands in for the Instagram feed. */
export const HOME_GRAM = [
  { image: art({ label: 'FOILED', caption: 'THE LID', tint: 0, motif: 'box' }), caption: 'Lids, foiled in-house' },
  { image: art({ label: 'POURED', caption: 'SMALL BATCH', tint: 3, motif: 'jewel' }), caption: 'Resin, cured overnight' },
  { image: art({ label: 'MATCHED', caption: 'BY SHADE', tint: 1, motif: 'bangles' }), caption: 'Chudi matched by shade' },
  { image: art({ label: 'TIED', caption: 'BY HAND', tint: 4, motif: 'rakhi' }), caption: 'Every ribbon, by hand' },
  { image: art({ label: 'LAID OUT', caption: 'BEFORE THE LID', tint: 2, motif: 'tray' }), caption: 'Checked against the card' },
  { image: art({ label: 'LIT', caption: 'FESTIVAL EDIT', tint: 0, motif: 'thali' }), caption: 'The festival shelf' }
];

export const HOME_FAQ = [
  { q: 'How soon does a box ship?',
    a: 'Everything is packed to order and leaves the workshop within one working day. Metro addresses usually see it on day two or three.' },
  { q: 'Can I have the card written for me?',
    a: 'Yes. Add your message at checkout and it is written by hand on the card inside the lid — no printed slips.' },
  { q: 'Will the price be visible to the person receiving it?',
    a: 'No. Nothing in the box or on the outside carries a price, and the invoice is emailed to you rather than packed.' },
  { q: 'Do you take bulk and corporate orders?',
    a: 'From twenty boxes up, with your logo foiled onto the lid. Write to us and we will send a mock-up before anything is printed.' },
  { q: 'What if something arrives damaged?',
    a: 'Send a photo within seven days and we replace the piece, or the whole box, at our cost.' },
  { q: 'Can I change what is inside a curation?',
    a: 'On orders of five boxes or more, yes — swap pieces of similar value and we will re-cost it before you pay.' }
];
