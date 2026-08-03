// The whole shop, offline. Nine occasions, five curations each, every image
// drawn by shared/curation-art rather than fetched.
//
// The shop grid, search, filters and the product page are now live against the
// API — `{ provide: Catalog, useClass: StaticCatalog }` is gone from app.config.
// What is left reading this file is the home page (features/home/home.static),
// the gift finder, and the in-memory cart, wishlist and order book. Put that
// provider line back to serve the whole shop from here again.

import { Category, Facets, Paged, Product, ProductListItem, ProductQuery, Review } from '@core/models';
import { Motif, art, motifFor } from './curation-art';

/** A list item plus the fields the in-memory search needs to filter on. */
export interface CatalogueEntry extends ProductListItem {
  categoryId: string;
  categorySlug: string;
  tags: string[];
  createdAt: string;
}

interface Occasion {
  id: string;
  name: string;
  slug: string;
  brand: string;
  tint: number;
  description: string;
  /**
   * name, price, compareAtPrice (0 = none), rating, reviews, stock, contents.
   * Contents is one pipe-separated line per piece, in the order it is packed —
   * every box has its own, because "what is actually inside" is the question
   * the product page is really answering.
   */
  items: [string, number, number, number, number, number, string][];
}

const OCCASIONS: Occasion[] = [
  {
    id: 'c1', name: 'Baby Gift', slug: 'baby-gift', brand: 'Anuvesha & Co. Petite', tint: 2,
    description: 'Welcome curations in soft cotton and hand-turned wood, boxed for the first visit.',
    items: [
      ['Baby Welcome Curation', 1299, 1599, 4.9, 88, 22,
        '2 muslin swaddles|1 hand-turned wooden rattle|1 cotton romper, 0–6 m|1 pair booties|1 baby balm tin, 30 g|1 keepsake card'],
      ['Newborn Muslin Set', 899, 0, 4.7, 54, 40,
        '3 muslin squares|1 muslin blanket|1 drawstring cotton bag|1 wash-care card'],
      ['First Rice Ceremony Box', 1499, 1799, 4.6, 31, 18,
        '1 brass annaprashan bowl|1 brass spoon|1 cotton dhoti-kurta set|1 sweets box, 200 g|1 ceremony card'],
      ['Naming Day Keepsake Tray', 1899, 2299, 4.8, 22, 9,
        '1 engraved wooden name plaque|1 ink-print kit, hand and foot|1 photo frame, 5×7|1 velvet-lined tray|1 hand-written card'],
      ['Little One Gift Basket', 749, 999, 4.5, 66, 52,
        '1 cotton bib|1 pair mittens|1 wooden rattle|1 soft toy|1 woven basket']
    ]
  },
  {
    id: 'c2', name: 'Birthday Gift', slug: 'birthday-gift', brand: 'Anuvesha & Co. Celebrations', tint: 3,
    description: 'Candles, chocolate and keepsakes stacked in a rigid box with a satin pull.',
    items: [
      ['Birthday Celebration Box', 899, 0, 4.5, 301, 74,
        '1 scented pillar candle, 180 g|1 dark chocolate slab, 100 g|1 confetti popper|1 enamel pin|1 birthday card'],
      ['Chocolate & Candle Curation', 649, 799, 4.6, 188, 63,
        '6 filled chocolates|1 soy candle, 120 g|1 gold-tipped matchbox|1 ribboned card'],
      ['Milestone Birthday Trunk', 2499, 2999, 4.8, 44, 11,
        '1 rigid keepsake trunk|1 engraved brass tumbler|1 leather-bound journal|1 fountain pen|12 assorted chocolates|1 milestone card'],
      ['Balloon & Bloom Box', 1099, 0, 4.4, 97, 38,
        '5 hand-inflated latex balloons|1 dried flower posy|1 satin ribbon spool|1 message card'],
      ['Sweet Sixteen Curation', 1399, 1699, 4.7, 52, 20,
        '1 resin trinket dish|1 charm bracelet|2 lip balms|1 polaroid clip frame|8 chocolates|1 card']
    ]
  },
  {
    id: 'c3', name: 'Ladies Gift', slug: 'ladies-gift', brand: 'Anuvesha & Co. Sringar', tint: 4,
    description: 'Resin jewellery, alta and scrunchies — the sringar set, packed by hand.',
    items: [
      ['Ladies Sringar Box', 549, 699, 4.6, 132, 38,
        '1 pair resin earrings|1 bindi book|1 alta bottle|1 kajal pencil|1 velvet pouch'],
      ['Handmade Resin Jewellery Set', 399, 0, 4.7, 129, 45,
        '1 resin pendant on a chain|1 pair matching studs|1 resin ring|1 polishing cloth|1 gift box'],
      ['Velvet Vanity Curation', 1199, 1499, 4.5, 71, 27,
        '1 velvet vanity pouch|1 mirror compact|1 hair claw|2 satin scrunchies|1 hand cream, 50 ml|1 perfume vial, 10 ml'],
      ['Scrunchie & Alta Trio', 299, 449, 4.4, 210, 90,
        '3 satin scrunchies|1 alta bottle|1 applicator brush'],
      ['Pearl & Pendant Gift Box', 1599, 1899, 4.8, 38, 14,
        '1 pearl-drop pendant|1 pair pearl studs|1 pearl bracelet|1 jewellery roll|1 care card']
    ]
  },
  {
    id: 'c4', name: 'Sawan Gift', slug: 'sawan-gift', brand: 'Anuvesha & Co. Sringar', tint: 0,
    description: 'Green chudi, mehawar and pendant sets for the month of Sawan.',
    items: [
      ['Premium Sawan Curation', 299, 499, 4.8, 186, 60,
        '1 pair green chudi (bangles)|1 handmade resin pendant|1 pair resin earrings|1 green nail paint|1 mehawar (alta)|1 premium scrunchie|1 Sawan wishes card'],
      ['Teej Green Bangle Curation', 459, 599, 4.5, 94, 33,
        '2 dozen green glass chudi|1 green bindi book|2 mehendi cones|1 Teej card'],
      ['Sawan Mehawar Box', 349, 0, 4.6, 121, 48,
        '1 mehawar (alta) bottle|1 applicator brush|1 pair toe rings|1 foot balm, 30 g'],
      ['Hariyali Teej Deluxe Tray', 999, 1299, 4.7, 40, 16,
        '1 green dupatta|2 dozen green chudi|1 resin pendant set|2 mehendi cones|1 sweets box, 250 g|1 velvet-lined tray'],
      ['Green Chudi & Bindi Set', 249, 349, 4.3, 152, 120,
        '1 dozen green chudi|1 bindi book|1 green hair tie']
    ]
  },
  {
    id: 'c5', name: 'Rakhi Gift', slug: 'rakhi-gift', brand: 'Anuvesha & Co. Sringar', tint: 1,
    description: 'Thread, sweets and a keepsake, boxed for one brother or for four.',
    items: [
      ['Rakhi Curation, Set of Two', 649, 799, 4.7, 214, 48,
        '2 handmade rakhi|1 roli-chawal pack|2 sweets boxes, 100 g each|2 wishes cards'],
      ['Bhai Dooj Thali Box', 899, 0, 4.6, 88, 30,
        '1 brass thali|1 roli-chawal katori|1 brass diya|1 sweets box, 200 g|1 tikka card'],
      ['Rakhi & Sweets Combo', 549, 699, 4.5, 176, 65,
        '1 handmade rakhi|1 roli-chawal pack|1 sweets box, 250 g|1 wishes card'],
      ['Designer Rakhi Trunk', 1799, 2199, 4.8, 36, 12,
        '2 stone-set designer rakhi|1 engraved keepsake trunk|1 brass diya|1 dry-fruit tin, 300 g|1 sweets box, 250 g|1 hand-written card'],
      ['Kids Rakhi Fun Box', 399, 499, 4.4, 143, 80,
        '2 cartoon rakhi|1 sticker sheet|1 chocolate bar|1 mini puzzle|1 card']
    ]
  },
  {
    id: 'c6', name: 'Wedding Gift', slug: 'wedding-gift', brand: 'Anuvesha & Co. Vows', tint: 3,
    description: 'Trousseau trays and couple curations in velvet-lined rigid boxes.',
    items: [
      ['Wedding Trousseau Tray', 2499, 2999, 4.8, 57, 12,
        '1 velvet-lined tray|1 embroidered dupatta|1 bangle set, 2 dozen|1 brass vermillion box|1 sweets box, 250 g|1 shagun envelope'],
      ['Couple Keepsake Curation', 1999, 2399, 4.7, 43, 15,
        '2 engraved brass tumblers|2 scented candles, 120 g each|1 photo frame, 6×8|12 chocolates|1 hand-written card'],
      ['Bridal Sringar Trunk', 3499, 3999, 4.9, 28, 6,
        '1 rigid bridal trunk|1 pair kaleere|1 bangle set, 2 dozen|1 resin jewellery set|2 mehendi cones|1 vanity pouch|1 card'],
      ['Shagun & Sweets Box', 1199, 0, 4.5, 64, 34,
        '5 shagun envelopes|1 sweets box, 500 g|1 dry-fruit tin, 250 g|1 roli-chawal pack'],
      ['Mehendi Favour Boxes, Set of Ten', 1499, 1799, 4.6, 51, 22,
        '10 favour boxes|10 mehendi cones|10 bangle pairs|10 thank-you tags']
    ]
  },
  {
    id: 'c7', name: 'Anniversary Gift', slug: 'anniversary-gift', brand: 'Anuvesha & Co. Vows', tint: 4,
    description: 'Paired keepsakes, a candle and a card, in gold-foiled packaging.',
    items: [
      ['Anniversary Keepsake Pair', 1499, 1899, 4.7, 109, 26,
        '2 engraved keepsake coasters|1 scented candle, 180 g|1 photo frame, 5×7|9 chocolates|1 card'],
      ['Golden Jubilee Curation', 2999, 3499, 4.9, 19, 7,
        '1 gold-foiled memory book|2 engraved brass goblets|1 dry-fruit tin, 500 g|1 sweets box, 500 g|1 rigid presentation box|1 hand-written card'],
      ['Candlelight Dinner Box', 1299, 0, 4.6, 74, 29,
        '2 taper candles with holders|1 table runner|6 chocolates|1 playlist card|1 match striker'],
      ['First Anniversary Memory Box', 1699, 1999, 4.8, 33, 13,
        '1 keepsake memory box|12 memory prompt cards|1 photo clip string|1 candle, 120 g|1 card'],
      ['Rose & Resin Gift Set', 899, 1099, 4.5, 87, 41,
        '1 preserved rose under glass|1 resin pendant|1 pair resin studs|1 gift box']
    ]
  },
  {
    id: 'c8', name: 'Corporate Gift', slug: 'corporate-gift', brand: 'Anuvesha & Co. Works', tint: 2,
    description: 'Bulk curations with your logo foiled on the lid. Minimum twenty boxes.',
    items: [
      ['Corporate Curation, Foiled Lid', 1199, 0, 4.4, 41, 200,
        '1 logo-foiled rigid box|1 ceramic mug|1 notebook, A5|1 metal pen|1 dry-fruit tin, 200 g'],
      ['Diwali Corporate Box, Bulk 20', 999, 0, 4.5, 26, 500,
        '2 brass diya|1 sweets box, 250 g|1 dry-fruit tin, 200 g|1 logo-foiled greeting card'],
      ['Executive Desk Curation', 1899, 2299, 4.6, 18, 120,
        '1 leather desk mat|1 brass pen stand|1 notebook, A5|1 rollerball pen|1 coffee sampler, 100 g'],
      ['Client Appreciation Trunk', 2499, 0, 4.7, 12, 80,
        '1 rigid keepsake trunk|1 tea sampler, 6 blends|2 ceramic cups|1 dry-fruit tin, 300 g|1 leather card holder|1 foiled note card'],
      ['Onboarding Welcome Kit', 1399, 1699, 4.5, 34, 260,
        '1 canvas tote bag|1 steel water bottle|1 notebook, A5|1 metal pen|1 sticker sheet|1 welcome card']
    ]
  },
  {
    id: 'c9', name: 'Festival Gift', slug: 'festival-gift', brand: 'Anuvesha & Co. Celebrations', tint: 1,
    description: 'Diwali, Holi, Karwa Chauth and Teej — the whole calendar, boxed.',
    items: [
      ['Diwali Festival Curation', 1799, 2199, 4.9, 263, 55,
        '2 brass diya|1 rangoli colour set|1 dry-fruit tin, 300 g|1 sweets box, 400 g|1 scented candle, 180 g|1 Diwali card'],
      ['Karwa Chauth Thali Box', 1099, 1399, 4.6, 76, 0,
        '1 decorated thali|1 chalni (sieve)|1 karwa (pot)|1 brass diya|1 sindoor box|1 sweets box, 200 g'],
      ['Holi Colour & Sweets Box', 599, 749, 4.4, 168, 70,
        '5 herbal gulal pouches|1 pichkari|1 gujiya box, 250 g|2 thandai sachets'],
      ['Navratri Sringar Curation', 799, 999, 4.6, 92, 44,
        '1 pair oxidised jhumka|2 dozen glass chudi|1 bindi book|1 potli bag|1 garba card'],
      ['Christmas Cheer Box', 1299, 1599, 4.7, 58, 31,
        '1 plum cake, 400 g|1 scented candle, 180 g|2 tree ornaments|2 hot-chocolate sachets|1 Christmas card']
    ]
  }
];

/** One motif per shelf, so the occasion grid reads as nine different things. */
const CATEGORY_MOTIF: Record<string, Motif> = {
  'baby-gift': 'basket',
  'birthday-gift': 'candle',
  'ladies-gift': 'jewel',
  'sawan-gift': 'bangles',
  'rakhi-gift': 'rakhi',
  'wedding-gift': 'trunk',
  'anniversary-gift': 'frame',
  'corporate-gift': 'mug',
  'festival-gift': 'thali'
};

export const CATALOGUE_CATEGORIES: Category[] = OCCASIONS.map((o, index) => ({
  id: o.id,
  name: o.name,
  slug: o.slug,
  description: o.description,
  imageUrl: art({
    label: o.name.replace(/ Gift$/, '').toUpperCase(),
    caption: 'GIFT CURATION',
    tint: o.tint,
    motif: CATEGORY_MOTIF[o.slug] ?? 'box'
  }),
  sortOrder: index + 1,
  isActive: true,
  productCount: o.items.length
}));

/** slug → what is in that box. Filled while CATALOGUE is built, read by detailFor(). */
const CONTENTS = new Map<string, string[]>();

export const CATALOGUE: CatalogueEntry[] = OCCASIONS.flatMap((o, oi) =>
  o.items.map(([name, price, compareAtPrice, ratingAverage, ratingCount, stock, contents], ii) => {
    const slug = slugify(name);
    CONTENTS.set(slug, contents.split('|'));

    return {
      id: `p${oi * 5 + ii + 1}`,
      name,
      slug,
      brand: o.brand,
      categoryName: o.name,
      categoryId: o.id,
      categorySlug: o.slug,
      price,
      compareAtPrice: compareAtPrice || undefined,
      discountPercent: compareAtPrice ? Math.round((1 - price / compareAtPrice) * 100) : 0,
      imageUrl: art({ label: shortLabel(name), caption: o.name.toUpperCase(), tint: o.tint, motif: motifFor(name) }),
      ratingAverage,
      ratingCount,
      stock,
      tags: [o.slug.replace('-gift', ''), 'curation', 'handmade', 'gifting'],
      // Newest first in the order they are listed, one week apart, so the
      // "newest" sort has something real to order by.
      createdAt: new Date(Date.UTC(2026, 5, 1) - (oi * 5 + ii) * 6048e5).toISOString()
    };
  })
);

/** What is in a box, by slug. Empty for a slug the catalogue does not carry. */
export function contentsFor(slug: string): string[] {
  return CONTENTS.get(slug) ?? [];
}

/** Records the packing list for a box added or renamed in the back office. */
export function setContents(slug: string, items: string[]): void {
  CONTENTS.set(slug, items.filter(item => item.trim().length > 0));
}

/** The occasions, for the back office's category picker. */
export function occasionById(id: string): { id: string; name: string; slug: string; brand: string; tint: number } | undefined {
  return OCCASIONS.find(occasion => occasion.id === id);
}

export { slugify, shortLabel };

/** The flagship keeps hand-written copy; everything else is composed below. */
const HERO_SLUG = 'premium-sawan-curation';

const HERO_COPY = {
  shortDescription:
    'Seven pieces — green chudi, a handmade resin pendant and earrings, mehawar, ' +
    'nail paint, a premium scrunchie and a wishes card — set in a rigid box, ' +
    'lined, ribboned and sealed by hand.',
  description:
    'Our best-selling Sawan curation. Each box is packed to order: the resin pieces ' +
    'are poured and cured in small batches, the bangles matched by shade, and the ' +
    'lid foiled before the satin ribbon goes on. It ships gift-ready — nothing to ' +
    'wrap, nothing to explain.'
};

/** Builds the detail record for a list entry, on demand. */
export function detailFor(entry: CatalogueEntry): Product {
  const occasion = OCCASIONS.find(o => o.id === entry.categoryId) ?? OCCASIONS[0];
  const hero = entry.slug === HERO_SLUG;
  const includes = contentsFor(entry.slug);

  return {
    ...entry,
    sku: `KV-${occasion.slug.slice(0, 3).toUpperCase()}-${entry.price}`,
    // A box added in the back office has no packing list yet, so it falls back
    // to the generic line rather than claiming "0 pieces".
    shortDescription: hero
      ? HERO_COPY.shortDescription
      : includes.length
        ? `${includes.length} pieces — ${sentenceList(includes)} — set in a rigid box, ` +
          `lined, ribboned and sealed with a card.`
        : `A ${entry.categoryName.toLowerCase()} packed to order: keepsakes and treats ` +
          `set in a rigid box, lined, ribboned and sealed with a card.`,
    description: hero
      ? HERO_COPY.description
      : `${entry.name} is assembled in small batches in our workshop. Every piece is ` +
        `checked, laid into a velvet-touch tray and covered with a gold-foiled lid, ` +
        `then finished with satin ribbon and a hand-written card. It arrives ` +
        `gift-ready — nothing to wrap, nothing to explain.`,
    // Three angles, three motifs: the piece itself, the contents laid out on a
    // tray, and the box it travels in.
    images: [
      art({ label: shortLabel(entry.name), caption: occasion.name.toUpperCase(), tint: occasion.tint, shape: 'portrait', motif: motifFor(entry.name) }),
      art({ label: 'THE CONTENTS', caption: `${includes.length} PIECES`, tint: occasion.tint, shape: 'portrait', motif: 'tray' }),
      art({ label: 'THE BOX', caption: 'RIGID & FOILED', tint: occasion.tint + 1, shape: 'portrait', motif: 'box' })
    ],
    includes,
    specs: {
      Contents: `${includes.length} pieces`,
      Packaging: 'Rigid box, satin ribbon',
      Dispatch: 'Within 24 hours',
      Card: 'Hand-written on request'
    },
    variants: [
      { name: 'Box', value: 'Classic', priceDelta: 0, stock: entry.stock },
      { name: 'Box', value: 'Premium', priceDelta: 200, stock: Math.floor(entry.stock * 0.6) },
      { name: 'Box', value: 'Luxe velvet', priceDelta: 500, stock: Math.floor(entry.stock * 0.2) }
    ],
    isFeatured: FEATURED_SLUGS.has(entry.slug),
    isPublished: true
  };
}

/** One curation per occasion carries the home page, plus three that sell. */
export const FEATURED_SLUGS = new Set([
  'premium-sawan-curation', 'rakhi-curation-set-of-two', 'ladies-sringar-box',
  'baby-welcome-curation', 'birthday-celebration-box', 'wedding-trousseau-tray',
  'anniversary-keepsake-pair', 'corporate-curation-foiled-lid', 'diwali-festival-curation',
  'handmade-resin-jewellery-set', 'karwa-chauth-thali-box', 'teej-green-bangle-curation'
]);

export const CATALOGUE_FEATURED: CatalogueEntry[] =
  CATALOGUE.filter(entry => FEATURED_SLUGS.has(entry.slug));

/** Canned reviews, keyed off the product id so a page always shows the same ones. */
const REVIEW_BODIES = [
  ['Exactly as pictured', 'The packing is the best part — the box itself looks expensive. Gifted it and was asked where I bought it.'],
  ['Worth every rupee', 'Ordered on a Monday, delivered Wednesday, and nothing was loose inside. The card was a nice touch.'],
  ['Lovely finish', 'The resin work is neat and the ribbon was tied properly, not stapled. Will order again for Diwali.']
];

export function reviewsFor(productId: string): Review[] {
  const seed = Number(productId.replace('p', '')) || 1;
  return REVIEW_BODIES.slice(0, (seed % 3) + 1).map(([title, body], index) => ({
    id: `${productId}-r${index + 1}`,
    productId,
    userId: `u${((seed + index) % 40) + 1}`,
    userName: ['Ritu S.', 'Anjali M.', 'Pooja K.', 'Neha B.', 'Shreya D.'][(seed + index) % 5],
    rating: index === 0 ? 5 : 4,
    title,
    body,
    createdAt: new Date(Date.UTC(2026, 4, 20) - (seed + index) * 864e5).toISOString()
  }));
}

// ---------------------------------------------------------------------------
// Query. Kept here, next to the data and free of Angular, so it can be reasoned
// about — and tested — on its own. StaticCatalog only wraps it in observables.
// ---------------------------------------------------------------------------

export function queryCatalogue(query: ProductQuery): Paged<ProductListItem> {
  const matched = sortEntries(CATALOGUE.filter(entry => matches(entry, query)), query.sort);

  const pageSize = query.pageSize ?? 12;
  const page = Math.max(1, query.page ?? 1);
  const start = (page - 1) * pageSize;
  const totalPages = Math.max(1, Math.ceil(matched.length / pageSize));

  return {
    items: matched.slice(start, start + pageSize),
    page,
    pageSize,
    total: matched.length,
    totalPages,
    hasNext: page < totalPages
  };
}

export function facetsFor(category?: string): Facets {
  const pool = category ? CATALOGUE.filter(entry => entry.categorySlug === category) : CATALOGUE;
  const prices = pool.map(entry => entry.price);
  return {
    brands: [...new Set(pool.map(entry => entry.brand))].sort(),
    tags: [...new Set(pool.flatMap(entry => entry.tags))].sort(),
    minPrice: prices.length ? Math.min(...prices) : 0,
    maxPrice: prices.length ? Math.max(...prices) : 5000
  };
}

export function suggestNames(term: string): string[] {
  const needle = term.trim().toLowerCase();
  if (!needle) return [];
  const hits = CATALOGUE.filter(entry => entry.name.toLowerCase().includes(needle)).map(entry => entry.name);
  return [...new Set(hits)].slice(0, 6);
}

function matches(entry: CatalogueEntry, query: ProductQuery): boolean {
  if (query.category && entry.categorySlug !== query.category) return false;

  if (query.search) {
    const needle = query.search.toLowerCase();
    const haystack = `${entry.name} ${entry.brand} ${entry.categoryName} ${entry.tags.join(' ')}`.toLowerCase();
    if (!haystack.includes(needle)) return false;
  }

  if (query.brand) {
    const wanted = query.brand.split(',').filter(Boolean);
    if (wanted.length && !wanted.includes(entry.brand)) return false;
  }

  if (query.tags) {
    const wanted = query.tags.split(',').filter(Boolean);
    if (wanted.length && !wanted.some(tag => entry.tags.includes(tag))) return false;
  }

  if (query.minPrice !== undefined && entry.price < query.minPrice) return false;
  if (query.maxPrice !== undefined && entry.price > query.maxPrice) return false;
  if (query.minRating !== undefined && entry.ratingAverage < query.minRating) return false;
  if (query.inStock && entry.stock === 0) return false;

  return true;
}

function sortEntries(entries: CatalogueEntry[], by?: string): CatalogueEntry[] {
  const sorted = [...entries];
  switch (by) {
    case 'price_asc': return sorted.sort((a, b) => a.price - b.price);
    case 'price_desc': return sorted.sort((a, b) => b.price - a.price);
    case 'rating': return sorted.sort((a, b) => b.ratingAverage - a.ratingAverage);
    case 'newest': return sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    default: return sorted;   // relevance — the order the buyer laid them out in
  }
}

function slugify(name: string): string {
  return name.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/** The first few pieces as a phrase, with a count standing in for the rest. */
function sentenceList(items: string[]): string {
  const head = items.slice(0, 3);
  const rest = items.length - head.length;
  return rest > 0 ? `${head.join(', ')} and ${rest} more` : head.join(', ');
}

/** Card art gets the distinctive part of the name, not the whole thing. */
function shortLabel(name: string): string {
  return name.split(/[,&]/)[0].trim().toUpperCase().slice(0, 22);
}
