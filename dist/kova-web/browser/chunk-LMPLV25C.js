// src/app/shared/curation-art.ts
var SIZES = {
  square: [900, 900],
  portrait: [900, 1120],
  wide: [1400, 900]
};
var GROUNDS = [
  ["#0d1f18", "#050b09"],
  ["#141a12", "#070907"],
  ["#101a22", "#05090c"],
  ["#1a1410", "#0a0705"],
  ["#141018", "#08060a"]
];
var MOTIF_RULES = [
  [/trunk/i, "trunk"],
  [/thali|rice|ceremony/i, "thali"],
  [/tray/i, "tray"],
  [/basket/i, "basket"],
  [/corporate|executive|desk|onboarding|client|mug/i, "mug"],
  [/rakhi/i, "rakhi"],
  [/chudi|bangle|kaleere|jhumka|navratri/i, "bangles"],
  [/pendant|pearl|jewellery|resin|earring|charm|rose/i, "jewel"],
  [/muslin|swaddle|romper|dupatta|scrunchie/i, "cloth"],
  [/candle|jubilee|candlelight|christmas/i, "candle"],
  [/alta|mehawar|nail|perfume|vanity|sringar/i, "bottle"],
  [/potli|pouch|favour|shagun|envelope/i, "potli"],
  [/keepsake|memory|photo|frame/i, "frame"],
  [/balloon|bloom|posy|flower/i, "bloom"],
  [/diwali|diya|festival|karwa/i, "thali"],
  [/baby|newborn|little one/i, "basket"]
];
function motifFor(name) {
  return MOTIF_RULES.find(([pattern]) => pattern.test(name))?.[1] ?? "box";
}
function art(options) {
  const { label, caption, tint = 0, shape = "square", motif = "box" } = options;
  const [w, h] = SIZES[shape];
  const [g1, g2] = GROUNDS[Math.abs(tint) % GROUNDS.length];
  const cx = w / 2;
  const cy = h / 2;
  const unit = Math.min(w, h);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${g1}"/><stop offset="0.6" stop-color="${g2}"/><stop offset="1" stop-color="${g1}"/>
</linearGradient>
<linearGradient id="f" x1="0" y1="0" x2="0.9" y2="1">
<stop offset="0" stop-color="#f7e9bd"/><stop offset="0.42" stop-color="#d9b551"/>
<stop offset="0.72" stop-color="#a8811f"/><stop offset="1" stop-color="#e6cd85"/>
</linearGradient>
<radialGradient id="h" cx="0.5" cy="0.44" r="0.52">
<stop offset="0" stop-color="#d9b551" stop-opacity="0.22"/><stop offset="1" stop-color="#d9b551" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${w}" height="${h}" fill="url(#g)"/>
<rect width="${w}" height="${h}" fill="url(#h)"/>
<rect x="${unit * 0.045}" y="${unit * 0.045}" width="${w - unit * 0.09}" height="${h - unit * 0.09}"
 rx="${unit * 0.02}" fill="none" stroke="url(#f)" stroke-opacity="0.38" stroke-width="${unit * 22e-4}"/>
<ellipse cx="${cx}" cy="${cy + unit * 0.245}" rx="${unit * 0.26}" ry="${unit * 0.022}" fill="#000" opacity="0.4"/>
${MOTIFS[motif](cx, cy, unit)}
<text x="${cx}" y="${cy + unit * 0.3}" text-anchor="middle" fill="url(#f)"
 font-family="Georgia,'Times New Roman',serif" font-size="${unit * 0.052}" letter-spacing="${unit * 0.012}">${esc(label)}</text>
${caption ? `<text x="${cx}" y="${cy + unit * 0.355}" text-anchor="middle" fill="#e6cd85" fill-opacity="0.62"
 font-family="Georgia,'Times New Roman',serif" font-size="${unit * 0.026}" letter-spacing="${unit * 0.016}">${esc(caption)}</text>` : ""}
</svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace(/\n/g, " "))}`;
}
function esc(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var line = (u) => u * 42e-4;
var draw = (u, width = 1) => `fill="none" stroke="url(#f)" stroke-width="${line(u) * width}" stroke-linecap="round" stroke-linejoin="round"`;
var wash = (u, opacity = 0.12, width = 1) => `fill="url(#f)" fill-opacity="${opacity}" stroke="url(#f)" stroke-width="${line(u) * width}" stroke-linejoin="round"`;
var solid = (opacity = 0.85) => `fill="url(#f)" fill-opacity="${opacity}"`;
var MOTIFS = {
  /** The house mark: lidded box, ribbon and a bow. */
  box: (cx, cy, u) => {
    const bw = u * 0.4, bh = u * 0.27, by = cy - u * 0.04;
    const lw = bw * 1.12, lh = u * 0.075, ly = by - lh;
    const rw = u * 0.045, bow = u * 0.062;
    return `
<rect x="${cx - bw / 2}" y="${by}" width="${bw}" height="${bh}" rx="${u * 0.012}" ${wash(u, 0.1)}/>
<rect x="${cx - rw / 2}" y="${by}" width="${rw}" height="${bh}" ${solid()}/>
<rect x="${cx - lw / 2}" y="${ly}" width="${lw}" height="${lh}" rx="${u * 0.01}" ${wash(u, 0.16)}/>
<rect x="${cx - rw / 2}" y="${ly}" width="${rw}" height="${lh}" ${solid()}/>
<path d="M${cx} ${ly} C${cx - bow * 1.9} ${ly - bow * 1.5}, ${cx - bow * 1.5} ${ly - bow * 0.1}, ${cx} ${ly}
 C${cx + bow * 1.5} ${ly - bow * 0.1}, ${cx + bow * 1.9} ${ly - bow * 1.5}, ${cx} ${ly}Z" ${wash(u, 0.55)}/>
<circle cx="${cx}" cy="${ly - u * 4e-3}" r="${u * 0.014}" ${solid(1)}/>`;
  },
  /** Woven basket with an arched handle and something peeking over the rim. */
  basket: (cx, cy, u) => `
<path d="M${cx - u * 0.175} ${cy - u * 0.1} A${u * 0.175} ${u * 0.16} 0 0 1 ${cx + u * 0.175} ${cy - u * 0.1}" ${draw(u, 1.2)}/>
<circle cx="${cx - u * 0.075}" cy="${cy - u * 0.135}" r="${u * 0.038}" ${wash(u, 0.28)}/>
<circle cx="${cx + u * 0.055}" cy="${cy - u * 0.15}" r="${u * 0.03}" ${wash(u, 0.2)}/>
<path d="M${cx - u * 0.225} ${cy - u * 0.055} L${cx + u * 0.225} ${cy - u * 0.055} L${cx + u * 0.165} ${cy + u * 0.2} L${cx - u * 0.165} ${cy + u * 0.2}Z" ${wash(u, 0.1)}/>
<rect x="${cx - u * 0.245}" y="${cy - u * 0.1}" width="${u * 0.49}" height="${u * 0.05}" rx="${u * 0.012}" ${wash(u, 0.2)}/>
<path d="M${cx - u * 0.208} ${cy + u * 0.03} L${cx + u * 0.208} ${cy + u * 0.03}
 M${cx - u * 0.19} ${cy + u * 0.115} L${cx + u * 0.19} ${cy + u * 0.115}" ${draw(u, 0.7)} stroke-opacity="0.6"/>
<path d="M${cx - u * 0.1} ${cy - u * 0.05} L${cx - u * 0.075} ${cy + u * 0.2}
 M${cx} ${cy - u * 0.05} L${cx} ${cy + u * 0.2}
 M${cx + u * 0.1} ${cy - u * 0.05} L${cx + u * 0.075} ${cy + u * 0.2}" ${draw(u, 0.7)} stroke-opacity="0.6"/>`,
  /** Domed keepsake trunk with two straps and a clasp. */
  trunk: (cx, cy, u) => `
<path d="M${cx - u * 0.22} ${cy - u * 0.02} A${u * 0.22} ${u * 0.13} 0 0 1 ${cx + u * 0.22} ${cy - u * 0.02}Z" ${wash(u, 0.16)}/>
<rect x="${cx - u * 0.22}" y="${cy - u * 0.02}" width="${u * 0.44}" height="${u * 0.21}" rx="${u * 0.014}" ${wash(u, 0.1)}/>
<path d="M${cx - u * 0.22} ${cy - u * 0.02} L${cx + u * 0.22} ${cy - u * 0.02}" ${draw(u, 1.1)}/>
<path d="M${cx - u * 0.115} ${cy - u * 0.135} L${cx - u * 0.115} ${cy + u * 0.19}
 M${cx + u * 0.115} ${cy - u * 0.135} L${cx + u * 0.115} ${cy + u * 0.19}" ${draw(u, 1.3)} stroke-opacity="0.75"/>
<rect x="${cx - u * 0.035}" y="${cy - u * 0.04}" width="${u * 0.07}" height="${u * 0.075}" rx="${u * 0.012}" ${solid(0.9)}/>`,
  /** Velvet-lined tray in shallow perspective, three pieces laid on it. */
  tray: (cx, cy, u) => `
<path d="M${cx - u * 0.25} ${cy + u * 0.05} L${cx - u * 0.25} ${cy + u * 0.1} A${u * 0.25} ${u * 0.09} 0 0 0 ${cx + u * 0.25} ${cy + u * 0.1} L${cx + u * 0.25} ${cy + u * 0.05}Z" ${wash(u, 0.14)}/>
<ellipse cx="${cx}" cy="${cy + u * 0.05}" rx="${u * 0.25}" ry="${u * 0.09}" ${wash(u, 0.08, 1.2)}/>
<ellipse cx="${cx}" cy="${cy + u * 0.05}" rx="${u * 0.2}" ry="${u * 0.068}" ${draw(u, 0.7)} stroke-opacity="0.55"/>
<circle cx="${cx - u * 0.1}" cy="${cy + u * 0.03}" r="${u * 0.035}" ${wash(u, 0.3)}/>
<circle cx="${cx + u * 5e-3}" cy="${cy + u * 0.055}" r="${u * 0.028}" ${wash(u, 0.22)}/>
<circle cx="${cx + u * 0.105}" cy="${cy + u * 0.025}" r="${u * 0.032}" ${wash(u, 0.3)}/>
<path d="M${cx - u * 0.09} ${cy - u * 0.09} L${cx + u * 0.09} ${cy - u * 0.09}" ${draw(u, 1.1)}/>
<path d="M${cx} ${cy - u * 0.09} L${cx} ${cy - u * 0.02}" ${draw(u, 0.8)} stroke-opacity="0.6"/>`,
  /** Puja thali: rim, katori and a lit diya. */
  thali: (cx, cy, u) => `
<circle cx="${cx}" cy="${cy + u * 0.02}" r="${u * 0.215}" ${wash(u, 0.09, 1.2)}/>
<circle cx="${cx}" cy="${cy + u * 0.02}" r="${u * 0.17}" ${draw(u, 0.7)} stroke-opacity="0.5"/>
<circle cx="${cx - u * 0.095}" cy="${cy + u * 0.075}" r="${u * 0.042}" ${wash(u, 0.3)}/>
<circle cx="${cx + u * 0.095}" cy="${cy + u * 0.075}" r="${u * 0.042}" ${wash(u, 0.3)}/>
<path d="M${cx - u * 0.06} ${cy - u * 0.04} A${u * 0.06} ${u * 0.045} 0 0 0 ${cx + u * 0.06} ${cy - u * 0.04}Z" ${wash(u, 0.35)}/>
<path d="M${cx} ${cy - u * 0.055} C${cx - u * 0.032} ${cy - u * 0.1}, ${cx - u * 0.014} ${cy - u * 0.145}, ${cx} ${cy - u * 0.175}
 C${cx + u * 0.014} ${cy - u * 0.145}, ${cx + u * 0.032} ${cy - u * 0.1}, ${cx} ${cy - u * 0.055}Z" ${solid(0.9)}/>`,
  /** Gathered potli pouch, cinched at the neck. */
  potli: (cx, cy, u) => `
<path d="M${cx - u * 0.055} ${cy - u * 0.075} C${cx - u * 0.245} ${cy + u * 0.025}, ${cx - u * 0.205} ${cy + u * 0.205}, ${cx} ${cy + u * 0.205}
 C${cx + u * 0.205} ${cy + u * 0.205}, ${cx + u * 0.245} ${cy + u * 0.025}, ${cx + u * 0.055} ${cy - u * 0.075}Z" ${wash(u, 0.12)}/>
<rect x="${cx - u * 0.062}" y="${cy - u * 0.095}" width="${u * 0.124}" height="${u * 0.035}" rx="${u * 0.014}" ${solid(0.8)}/>
<path d="M${cx - u * 0.05} ${cy - u * 0.1} C${cx - u * 0.035} ${cy - u * 0.175}, ${cx - u * 0.1} ${cy - u * 0.185}, ${cx - u * 0.115} ${cy - u * 0.135}
 M${cx + u * 0.05} ${cy - u * 0.1} C${cx + u * 0.035} ${cy - u * 0.175}, ${cx + u * 0.1} ${cy - u * 0.185}, ${cx + u * 0.115} ${cy - u * 0.135}" ${draw(u, 1)}/>
<path d="M${cx - u * 0.1} ${cy + u * 0.05} C${cx - u * 0.06} ${cy + u * 0.13}, ${cx + u * 0.06} ${cy + u * 0.13}, ${cx + u * 0.1} ${cy + u * 0.05}" ${draw(u, 0.7)} stroke-opacity="0.55"/>`,
  /** Pendant on a chain with a pair of studs. */
  jewel: (cx, cy, u) => `
<path d="M${cx - u * 0.19} ${cy - u * 0.145} Q${cx} ${cy + u * 0.075} ${cx + u * 0.19} ${cy - u * 0.145}" ${draw(u, 1)}/>
<circle cx="${cx - u * 0.19}" cy="${cy - u * 0.145}" r="${u * 0.017}" ${solid(0.9)}/>
<circle cx="${cx + u * 0.19}" cy="${cy - u * 0.145}" r="${u * 0.017}" ${solid(0.9)}/>
<path d="M${cx} ${cy + u * 0.155} L${cx - u * 0.055} ${cy + u * 0.06} L${cx} ${cy + u * 5e-3} L${cx + u * 0.055} ${cy + u * 0.06}Z" ${wash(u, 0.45, 1.1)}/>
<path d="M${cx - u * 0.055} ${cy + u * 0.06} L${cx + u * 0.055} ${cy + u * 0.06}" ${draw(u, 0.6)} stroke-opacity="0.7"/>
<circle cx="${cx - u * 0.17}" cy="${cy + u * 0.115}" r="${u * 0.028}" ${wash(u, 0.4)}/>
<circle cx="${cx + u * 0.17}" cy="${cy + u * 0.115}" r="${u * 0.028}" ${wash(u, 0.4)}/>`,
  /** A stack of glass bangles. */
  bangles: (cx, cy, u) => `
<ellipse cx="${cx}" cy="${cy - u * 0.075}" rx="${u * 0.165}" ry="${u * 0.055}" ${draw(u, 1.6)}/>
<ellipse cx="${cx}" cy="${cy + u * 0.015}" rx="${u * 0.185}" ry="${u * 0.062}" ${draw(u, 1.9)}/>
<ellipse cx="${cx}" cy="${cy + u * 0.11}" rx="${u * 0.165}" ry="${u * 0.055}" ${draw(u, 1.6)}/>
<ellipse cx="${cx}" cy="${cy + u * 0.015}" rx="${u * 0.185}" ry="${u * 0.062}" fill="url(#f)" fill-opacity="0.06"/>
<circle cx="${cx - u * 0.185}" cy="${cy + u * 0.015}" r="${u * 0.014}" ${solid(0.9)}/>
<circle cx="${cx + u * 0.185}" cy="${cy + u * 0.015}" r="${u * 0.014}" ${solid(0.9)}/>`,
  /** A lit pillar candle with a smaller one beside it. */
  candle: (cx, cy, u) => `
<rect x="${cx - u * 0.075}" y="${cy - u * 0.045}" width="${u * 0.15}" height="${u * 0.245}" rx="${u * 0.014}" ${wash(u, 0.12)}/>
<ellipse cx="${cx}" cy="${cy - u * 0.045}" rx="${u * 0.075}" ry="${u * 0.022}" ${wash(u, 0.28)}/>
<path d="M${cx} ${cy - u * 0.065} L${cx} ${cy - u * 0.095}" ${draw(u, 0.9)}/>
<path d="M${cx} ${cy - u * 0.095} C${cx - u * 0.042} ${cy - u * 0.15}, ${cx - u * 0.018} ${cy - u * 0.2}, ${cx} ${cy - u * 0.245}
 C${cx + u * 0.018} ${cy - u * 0.2}, ${cx + u * 0.042} ${cy - u * 0.15}, ${cx} ${cy - u * 0.095}Z" ${solid(0.9)}/>
<rect x="${cx + u * 0.125}" y="${cy + u * 0.045}" width="${u * 0.09}" height="${u * 0.155}" rx="${u * 0.012}" ${wash(u, 0.12)}/>
<ellipse cx="${cx + u * 0.17}" cy="${cy + u * 0.045}" rx="${u * 0.045}" ry="${u * 0.014}" ${wash(u, 0.28)}/>
<path d="M${cx + u * 0.17} ${cy + u * 0.03} C${cx + u * 0.146} ${cy - u * 5e-3}, ${cx + u * 0.16} ${cy - u * 0.035}, ${cx + u * 0.17} ${cy - u * 0.062}
 C${cx + u * 0.18} ${cy - u * 0.035}, ${cx + u * 0.194} ${cy - u * 5e-3}, ${cx + u * 0.17} ${cy + u * 0.03}Z" ${solid(0.85)}/>`,
  /** Rakhi: a knotted centre, petals around it, two threads falling away. */
  rakhi: (cx, cy, u) => {
    const petals = Array.from({ length: 8 }, (unused, index) => {
      const angle = index / 8 * Math.PI * 2;
      const px = cx + Math.cos(angle) * u * 0.105;
      const py = cy - u * 0.02 + Math.sin(angle) * u * 0.105;
      return `<circle cx="${px}" cy="${py}" r="${u * 0.036}" ${wash(u, 0.25)}/>`;
    }).join("");
    return `
${petals}
<circle cx="${cx}" cy="${cy - u * 0.02}" r="${u * 0.062}" ${wash(u, 0.5, 1.2)}/>
<circle cx="${cx}" cy="${cy - u * 0.02}" r="${u * 0.024}" ${solid(1)}/>
<path d="M${cx - u * 0.13} ${cy + u * 0.045} C${cx - u * 0.21} ${cy + u * 0.115}, ${cx - u * 0.15} ${cy + u * 0.185}, ${cx - u * 0.225} ${cy + u * 0.215}
 M${cx + u * 0.13} ${cy + u * 0.045} C${cx + u * 0.21} ${cy + u * 0.115}, ${cx + u * 0.15} ${cy + u * 0.185}, ${cx + u * 0.225} ${cy + u * 0.215}" ${draw(u, 1.1)}/>`;
  },
  /** Folded cloth, three pieces deep. */
  cloth: (cx, cy, u) => `
<rect x="${cx - u * 0.175}" y="${cy - u * 0.115}" width="${u * 0.35}" height="${u * 0.085}" rx="${u * 0.016}" ${wash(u, 0.2)}/>
<rect x="${cx - u * 0.195}" y="${cy - u * 0.015}" width="${u * 0.39}" height="${u * 0.085}" rx="${u * 0.016}" ${wash(u, 0.14)}/>
<rect x="${cx - u * 0.215}" y="${cy + u * 0.085}" width="${u * 0.43}" height="${u * 0.085}" rx="${u * 0.016}" ${wash(u, 0.09)}/>
<path d="M${cx - u * 0.09} ${cy - u * 0.115} L${cx - u * 0.09} ${cy - u * 0.03}
 M${cx + u * 0.09} ${cy - u * 0.115} L${cx + u * 0.09} ${cy - u * 0.03}
 M${cx - u * 0.1} ${cy - u * 0.015} L${cx - u * 0.1} ${cy + u * 0.07}
 M${cx + u * 0.1} ${cy - u * 0.015} L${cx + u * 0.1} ${cy + u * 0.07}" ${draw(u, 0.6)} stroke-opacity="0.5"/>
<path d="M${cx - u * 0.215} ${cy + u * 0.128} L${cx + u * 0.215} ${cy + u * 0.128}" ${draw(u, 0.6)} stroke-opacity="0.4"/>`,
  /** A stoppered bottle with its applicator. */
  bottle: (cx, cy, u) => `
<rect x="${cx - u * 0.085}" y="${cy - u * 0.02}" width="${u * 0.17}" height="${u * 0.215}" rx="${u * 0.022}" ${wash(u, 0.12)}/>
<rect x="${cx - u * 0.032}" y="${cy - u * 0.1}" width="${u * 0.064}" height="${u * 0.085}" rx="${u * 8e-3}" ${wash(u, 0.18)}/>
<rect x="${cx - u * 0.048}" y="${cy - u * 0.155}" width="${u * 0.096}" height="${u * 0.058}" rx="${u * 0.012}" ${solid(0.8)}/>
<path d="M${cx - u * 0.085} ${cy + u * 0.075} L${cx + u * 0.085} ${cy + u * 0.075}" ${draw(u, 0.7)} stroke-opacity="0.5"/>
<path d="M${cx + u * 0.165} ${cy + u * 0.185} L${cx + u * 0.215} ${cy - u * 0.055}" ${draw(u, 1.4)}/>
<ellipse cx="${cx + u * 0.219}" cy="${cy - u * 0.075}" rx="${u * 0.022}" ry="${u * 0.032}" ${wash(u, 0.45)}/>`,
  /** Desk mug with steam — the corporate boxes. */
  mug: (cx, cy, u) => `
<path d="M${cx + u * 0.115} ${cy + u * 0.01} A${u * 0.062} ${u * 0.062} 0 0 1 ${cx + u * 0.115} ${cy + u * 0.115}" ${draw(u, 1.6)}/>
<rect x="${cx - u * 0.125}" y="${cy - u * 0.045}" width="${u * 0.24}" height="${u * 0.235}" rx="${u * 0.022}" ${wash(u, 0.12)}/>
<ellipse cx="${cx - u * 5e-3}" cy="${cy - u * 0.045}" rx="${u * 0.12}" ry="${u * 0.032}" ${wash(u, 0.28)}/>
<path d="M${cx - u * 0.055} ${cy - u * 0.085} C${cx - u * 0.09} ${cy - u * 0.125}, ${cx - u * 0.02} ${cy - u * 0.15}, ${cx - u * 0.055} ${cy - u * 0.195}
 M${cx + u * 0.045} ${cy - u * 0.085} C${cx + u * 0.01} ${cy - u * 0.125}, ${cx + u * 0.08} ${cy - u * 0.15}, ${cx + u * 0.045} ${cy - u * 0.195}" ${draw(u, 0.9)} stroke-opacity="0.65"/>`,
  /** A wrapped posy. */
  bloom: (cx, cy, u) => `
<path d="M${cx - u * 0.115} ${cy + u * 0.2} L${cx - u * 0.06} ${cy + u * 0.03} L${cx + u * 0.06} ${cy + u * 0.03} L${cx + u * 0.115} ${cy + u * 0.2}Z" ${wash(u, 0.14)}/>
<path d="M${cx - u * 0.075} ${cy + u * 0.085} L${cx + u * 0.075} ${cy + u * 0.085}" ${draw(u, 1.2)}/>
<path d="M${cx - u * 0.03} ${cy + u * 0.03} L${cx - u * 0.075} ${cy - u * 0.075}
 M${cx} ${cy + u * 0.03} L${cx} ${cy - u * 0.1}
 M${cx + u * 0.03} ${cy + u * 0.03} L${cx + u * 0.075} ${cy - u * 0.075}" ${draw(u, 0.8)} stroke-opacity="0.6"/>
<circle cx="${cx - u * 0.085}" cy="${cy - u * 0.1}" r="${u * 0.05}" ${wash(u, 0.3)}/>
<circle cx="${cx}" cy="${cy - u * 0.135}" r="${u * 0.058}" ${wash(u, 0.4)}/>
<circle cx="${cx + u * 0.085}" cy="${cy - u * 0.1}" r="${u * 0.05}" ${wash(u, 0.3)}/>
<circle cx="${cx}" cy="${cy - u * 0.135}" r="${u * 0.022}" ${solid(0.9)}/>`,
  /** Mounted photo frame on a stand — the keepsake boxes. */
  frame: (cx, cy, u) => `
<rect x="${cx - u * 0.165}" y="${cy - u * 0.165}" width="${u * 0.33}" height="${u * 0.3}" rx="${u * 0.016}" ${wash(u, 0.1, 1.2)}/>
<rect x="${cx - u * 0.115}" y="${cy - u * 0.115}" width="${u * 0.23}" height="${u * 0.2}" rx="${u * 8e-3}" ${draw(u, 0.8)} stroke-opacity="0.6"/>
<path d="M${cx - u * 0.115} ${cy + u * 0.085} L${cx - u * 0.035} ${cy - u * 0.02} L${cx + u * 0.02} ${cy + u * 0.04} L${cx + u * 0.065} ${cy - u * 5e-3} L${cx + u * 0.115} ${cy + u * 0.085}Z" ${wash(u, 0.28, 0.7)}/>
<circle cx="${cx + u * 0.058}" cy="${cy - u * 0.072}" r="${u * 0.022}" ${solid(0.7)}/>
<path d="M${cx + u * 0.055} ${cy + u * 0.135} L${cx + u * 0.13} ${cy + u * 0.205}" ${draw(u, 1.2)}/>`
};
var FALLBACK_SHOT = art({ label: "Anuvesha & Co.", caption: "GIFT CURATION" });

export {
  motifFor,
  art,
  FALLBACK_SHOT
};
//# sourceMappingURL=chunk-LMPLV25C.js.map
