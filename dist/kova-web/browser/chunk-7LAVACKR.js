var L={square:[900,900],portrait:[900,1120],wide:[1400,900]},w=[["#0d1f18","#050b09"],["#141a12","#070907"],["#101a22","#05090c"],["#1a1410","#0a0705"],["#141018","#08060a"]],C=[[/trunk/i,"trunk"],[/thali|rice|ceremony/i,"thali"],[/tray/i,"tray"],[/basket/i,"basket"],[/corporate|executive|desk|onboarding|client|mug/i,"mug"],[/rakhi/i,"rakhi"],[/chudi|bangle|kaleere|jhumka|navratri/i,"bangles"],[/pendant|pearl|jewellery|resin|earring|charm|rose/i,"jewel"],[/muslin|swaddle|romper|dupatta|scrunchie/i,"cloth"],[/candle|jubilee|candlelight|christmas/i,"candle"],[/alta|mehawar|nail|perfume|vanity|sringar/i,"bottle"],[/potli|pouch|favour|shagun|envelope/i,"potli"],[/keepsake|memory|photo|frame/i,"frame"],[/balloon|bloom|posy|flower/i,"bloom"],[/diwali|diya|festival|karwa/i,"thali"],[/baby|newborn|little one/i,"basket"]];function Z(t){return C.find(([e])=>e.test(t))?.[1]??"box"}function v(t){let{label:e,caption:$,tint:d=0,shape:g="square",motif:p="box"}=t,[s,h]=L[g],[l,f]=w[Math.abs(d)%w.length],n=s/2,M=h/2,o=Math.min(s,h),k=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${s} ${h}" width="${s}" height="${h}">
<defs>
<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
<stop offset="0" stop-color="${l}"/><stop offset="0.6" stop-color="${f}"/><stop offset="1" stop-color="${l}"/>
</linearGradient>
<linearGradient id="f" x1="0" y1="0" x2="0.9" y2="1">
<stop offset="0" stop-color="#f7e9bd"/><stop offset="0.42" stop-color="#d9b551"/>
<stop offset="0.72" stop-color="#a8811f"/><stop offset="1" stop-color="#e6cd85"/>
</linearGradient>
<radialGradient id="h" cx="0.5" cy="0.44" r="0.52">
<stop offset="0" stop-color="#d9b551" stop-opacity="0.22"/><stop offset="1" stop-color="#d9b551" stop-opacity="0"/>
</radialGradient>
</defs>
<rect width="${s}" height="${h}" fill="url(#g)"/>
<rect width="${s}" height="${h}" fill="url(#h)"/>
<rect x="${o*.045}" y="${o*.045}" width="${s-o*.09}" height="${h-o*.09}"
 rx="${o*.02}" fill="none" stroke="url(#f)" stroke-opacity="0.38" stroke-width="${o*.0022}"/>
<ellipse cx="${n}" cy="${M+o*.245}" rx="${o*.26}" ry="${o*.022}" fill="#000" opacity="0.4"/>
${A[p](n,M,o)}
<text x="${n}" y="${M+o*.3}" text-anchor="middle" fill="url(#f)"
 font-family="Georgia,'Times New Roman',serif" font-size="${o*.052}" letter-spacing="${o*.012}">${b(e)}</text>
${$?`<text x="${n}" y="${M+o*.355}" text-anchor="middle" fill="#e6cd85" fill-opacity="0.62"
 font-family="Georgia,'Times New Roman',serif" font-size="${o*.026}" letter-spacing="${o*.016}">${b($)}</text>`:""}
</svg>`;return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(k.replace(/\n/g," "))}`}function b(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}var m=t=>t*.0042,i=(t,e=1)=>`fill="none" stroke="url(#f)" stroke-width="${m(t)*e}" stroke-linecap="round" stroke-linejoin="round"`,r=(t,e=.12,$=1)=>`fill="url(#f)" fill-opacity="${e}" stroke="url(#f)" stroke-width="${m(t)*$}" stroke-linejoin="round"`,a=(t=.85)=>`fill="url(#f)" fill-opacity="${t}"`,A={box:(t,e,$)=>{let d=$*.4,g=$*.27,p=e-$*.04,s=d*1.12,h=$*.075,l=p-h,f=$*.045,n=$*.062;return`
<rect x="${t-d/2}" y="${p}" width="${d}" height="${g}" rx="${$*.012}" ${r($,.1)}/>
<rect x="${t-f/2}" y="${p}" width="${f}" height="${g}" ${a()}/>
<rect x="${t-s/2}" y="${l}" width="${s}" height="${h}" rx="${$*.01}" ${r($,.16)}/>
<rect x="${t-f/2}" y="${l}" width="${f}" height="${h}" ${a()}/>
<path d="M${t} ${l} C${t-n*1.9} ${l-n*1.5}, ${t-n*1.5} ${l-n*.1}, ${t} ${l}
 C${t+n*1.5} ${l-n*.1}, ${t+n*1.9} ${l-n*1.5}, ${t} ${l}Z" ${r($,.55)}/>
<circle cx="${t}" cy="${l-$*.004}" r="${$*.014}" ${a(1)}/>`},basket:(t,e,$)=>`
<path d="M${t-$*.175} ${e-$*.1} A${$*.175} ${$*.16} 0 0 1 ${t+$*.175} ${e-$*.1}" ${i($,1.2)}/>
<circle cx="${t-$*.075}" cy="${e-$*.135}" r="${$*.038}" ${r($,.28)}/>
<circle cx="${t+$*.055}" cy="${e-$*.15}" r="${$*.03}" ${r($,.2)}/>
<path d="M${t-$*.225} ${e-$*.055} L${t+$*.225} ${e-$*.055} L${t+$*.165} ${e+$*.2} L${t-$*.165} ${e+$*.2}Z" ${r($,.1)}/>
<rect x="${t-$*.245}" y="${e-$*.1}" width="${$*.49}" height="${$*.05}" rx="${$*.012}" ${r($,.2)}/>
<path d="M${t-$*.208} ${e+$*.03} L${t+$*.208} ${e+$*.03}
 M${t-$*.19} ${e+$*.115} L${t+$*.19} ${e+$*.115}" ${i($,.7)} stroke-opacity="0.6"/>
<path d="M${t-$*.1} ${e-$*.05} L${t-$*.075} ${e+$*.2}
 M${t} ${e-$*.05} L${t} ${e+$*.2}
 M${t+$*.1} ${e-$*.05} L${t+$*.075} ${e+$*.2}" ${i($,.7)} stroke-opacity="0.6"/>`,trunk:(t,e,$)=>`
<path d="M${t-$*.22} ${e-$*.02} A${$*.22} ${$*.13} 0 0 1 ${t+$*.22} ${e-$*.02}Z" ${r($,.16)}/>
<rect x="${t-$*.22}" y="${e-$*.02}" width="${$*.44}" height="${$*.21}" rx="${$*.014}" ${r($,.1)}/>
<path d="M${t-$*.22} ${e-$*.02} L${t+$*.22} ${e-$*.02}" ${i($,1.1)}/>
<path d="M${t-$*.115} ${e-$*.135} L${t-$*.115} ${e+$*.19}
 M${t+$*.115} ${e-$*.135} L${t+$*.115} ${e+$*.19}" ${i($,1.3)} stroke-opacity="0.75"/>
<rect x="${t-$*.035}" y="${e-$*.04}" width="${$*.07}" height="${$*.075}" rx="${$*.012}" ${a(.9)}/>`,tray:(t,e,$)=>`
<path d="M${t-$*.25} ${e+$*.05} L${t-$*.25} ${e+$*.1} A${$*.25} ${$*.09} 0 0 0 ${t+$*.25} ${e+$*.1} L${t+$*.25} ${e+$*.05}Z" ${r($,.14)}/>
<ellipse cx="${t}" cy="${e+$*.05}" rx="${$*.25}" ry="${$*.09}" ${r($,.08,1.2)}/>
<ellipse cx="${t}" cy="${e+$*.05}" rx="${$*.2}" ry="${$*.068}" ${i($,.7)} stroke-opacity="0.55"/>
<circle cx="${t-$*.1}" cy="${e+$*.03}" r="${$*.035}" ${r($,.3)}/>
<circle cx="${t+$*.005}" cy="${e+$*.055}" r="${$*.028}" ${r($,.22)}/>
<circle cx="${t+$*.105}" cy="${e+$*.025}" r="${$*.032}" ${r($,.3)}/>
<path d="M${t-$*.09} ${e-$*.09} L${t+$*.09} ${e-$*.09}" ${i($,1.1)}/>
<path d="M${t} ${e-$*.09} L${t} ${e-$*.02}" ${i($,.8)} stroke-opacity="0.6"/>`,thali:(t,e,$)=>`
<circle cx="${t}" cy="${e+$*.02}" r="${$*.215}" ${r($,.09,1.2)}/>
<circle cx="${t}" cy="${e+$*.02}" r="${$*.17}" ${i($,.7)} stroke-opacity="0.5"/>
<circle cx="${t-$*.095}" cy="${e+$*.075}" r="${$*.042}" ${r($,.3)}/>
<circle cx="${t+$*.095}" cy="${e+$*.075}" r="${$*.042}" ${r($,.3)}/>
<path d="M${t-$*.06} ${e-$*.04} A${$*.06} ${$*.045} 0 0 0 ${t+$*.06} ${e-$*.04}Z" ${r($,.35)}/>
<path d="M${t} ${e-$*.055} C${t-$*.032} ${e-$*.1}, ${t-$*.014} ${e-$*.145}, ${t} ${e-$*.175}
 C${t+$*.014} ${e-$*.145}, ${t+$*.032} ${e-$*.1}, ${t} ${e-$*.055}Z" ${a(.9)}/>`,potli:(t,e,$)=>`
<path d="M${t-$*.055} ${e-$*.075} C${t-$*.245} ${e+$*.025}, ${t-$*.205} ${e+$*.205}, ${t} ${e+$*.205}
 C${t+$*.205} ${e+$*.205}, ${t+$*.245} ${e+$*.025}, ${t+$*.055} ${e-$*.075}Z" ${r($,.12)}/>
<rect x="${t-$*.062}" y="${e-$*.095}" width="${$*.124}" height="${$*.035}" rx="${$*.014}" ${a(.8)}/>
<path d="M${t-$*.05} ${e-$*.1} C${t-$*.035} ${e-$*.175}, ${t-$*.1} ${e-$*.185}, ${t-$*.115} ${e-$*.135}
 M${t+$*.05} ${e-$*.1} C${t+$*.035} ${e-$*.175}, ${t+$*.1} ${e-$*.185}, ${t+$*.115} ${e-$*.135}" ${i($,1)}/>
<path d="M${t-$*.1} ${e+$*.05} C${t-$*.06} ${e+$*.13}, ${t+$*.06} ${e+$*.13}, ${t+$*.1} ${e+$*.05}" ${i($,.7)} stroke-opacity="0.55"/>`,jewel:(t,e,$)=>`
<path d="M${t-$*.19} ${e-$*.145} Q${t} ${e+$*.075} ${t+$*.19} ${e-$*.145}" ${i($,1)}/>
<circle cx="${t-$*.19}" cy="${e-$*.145}" r="${$*.017}" ${a(.9)}/>
<circle cx="${t+$*.19}" cy="${e-$*.145}" r="${$*.017}" ${a(.9)}/>
<path d="M${t} ${e+$*.155} L${t-$*.055} ${e+$*.06} L${t} ${e+$*.005} L${t+$*.055} ${e+$*.06}Z" ${r($,.45,1.1)}/>
<path d="M${t-$*.055} ${e+$*.06} L${t+$*.055} ${e+$*.06}" ${i($,.6)} stroke-opacity="0.7"/>
<circle cx="${t-$*.17}" cy="${e+$*.115}" r="${$*.028}" ${r($,.4)}/>
<circle cx="${t+$*.17}" cy="${e+$*.115}" r="${$*.028}" ${r($,.4)}/>`,bangles:(t,e,$)=>`
<ellipse cx="${t}" cy="${e-$*.075}" rx="${$*.165}" ry="${$*.055}" ${i($,1.6)}/>
<ellipse cx="${t}" cy="${e+$*.015}" rx="${$*.185}" ry="${$*.062}" ${i($,1.9)}/>
<ellipse cx="${t}" cy="${e+$*.11}" rx="${$*.165}" ry="${$*.055}" ${i($,1.6)}/>
<ellipse cx="${t}" cy="${e+$*.015}" rx="${$*.185}" ry="${$*.062}" fill="url(#f)" fill-opacity="0.06"/>
<circle cx="${t-$*.185}" cy="${e+$*.015}" r="${$*.014}" ${a(.9)}/>
<circle cx="${t+$*.185}" cy="${e+$*.015}" r="${$*.014}" ${a(.9)}/>`,candle:(t,e,$)=>`
<rect x="${t-$*.075}" y="${e-$*.045}" width="${$*.15}" height="${$*.245}" rx="${$*.014}" ${r($,.12)}/>
<ellipse cx="${t}" cy="${e-$*.045}" rx="${$*.075}" ry="${$*.022}" ${r($,.28)}/>
<path d="M${t} ${e-$*.065} L${t} ${e-$*.095}" ${i($,.9)}/>
<path d="M${t} ${e-$*.095} C${t-$*.042} ${e-$*.15}, ${t-$*.018} ${e-$*.2}, ${t} ${e-$*.245}
 C${t+$*.018} ${e-$*.2}, ${t+$*.042} ${e-$*.15}, ${t} ${e-$*.095}Z" ${a(.9)}/>
<rect x="${t+$*.125}" y="${e+$*.045}" width="${$*.09}" height="${$*.155}" rx="${$*.012}" ${r($,.12)}/>
<ellipse cx="${t+$*.17}" cy="${e+$*.045}" rx="${$*.045}" ry="${$*.014}" ${r($,.28)}/>
<path d="M${t+$*.17} ${e+$*.03} C${t+$*.146} ${e-$*.005}, ${t+$*.16} ${e-$*.035}, ${t+$*.17} ${e-$*.062}
 C${t+$*.18} ${e-$*.035}, ${t+$*.194} ${e-$*.005}, ${t+$*.17} ${e+$*.03}Z" ${a(.85)}/>`,rakhi:(t,e,$)=>`
${Array.from({length:8},(g,p)=>{let s=p/8*Math.PI*2,h=t+Math.cos(s)*$*.105,l=e-$*.02+Math.sin(s)*$*.105;return`<circle cx="${h}" cy="${l}" r="${$*.036}" ${r($,.25)}/>`}).join("")}
<circle cx="${t}" cy="${e-$*.02}" r="${$*.062}" ${r($,.5,1.2)}/>
<circle cx="${t}" cy="${e-$*.02}" r="${$*.024}" ${a(1)}/>
<path d="M${t-$*.13} ${e+$*.045} C${t-$*.21} ${e+$*.115}, ${t-$*.15} ${e+$*.185}, ${t-$*.225} ${e+$*.215}
 M${t+$*.13} ${e+$*.045} C${t+$*.21} ${e+$*.115}, ${t+$*.15} ${e+$*.185}, ${t+$*.225} ${e+$*.215}" ${i($,1.1)}/>`,cloth:(t,e,$)=>`
<rect x="${t-$*.175}" y="${e-$*.115}" width="${$*.35}" height="${$*.085}" rx="${$*.016}" ${r($,.2)}/>
<rect x="${t-$*.195}" y="${e-$*.015}" width="${$*.39}" height="${$*.085}" rx="${$*.016}" ${r($,.14)}/>
<rect x="${t-$*.215}" y="${e+$*.085}" width="${$*.43}" height="${$*.085}" rx="${$*.016}" ${r($,.09)}/>
<path d="M${t-$*.09} ${e-$*.115} L${t-$*.09} ${e-$*.03}
 M${t+$*.09} ${e-$*.115} L${t+$*.09} ${e-$*.03}
 M${t-$*.1} ${e-$*.015} L${t-$*.1} ${e+$*.07}
 M${t+$*.1} ${e-$*.015} L${t+$*.1} ${e+$*.07}" ${i($,.6)} stroke-opacity="0.5"/>
<path d="M${t-$*.215} ${e+$*.128} L${t+$*.215} ${e+$*.128}" ${i($,.6)} stroke-opacity="0.4"/>`,bottle:(t,e,$)=>`
<rect x="${t-$*.085}" y="${e-$*.02}" width="${$*.17}" height="${$*.215}" rx="${$*.022}" ${r($,.12)}/>
<rect x="${t-$*.032}" y="${e-$*.1}" width="${$*.064}" height="${$*.085}" rx="${$*.008}" ${r($,.18)}/>
<rect x="${t-$*.048}" y="${e-$*.155}" width="${$*.096}" height="${$*.058}" rx="${$*.012}" ${a(.8)}/>
<path d="M${t-$*.085} ${e+$*.075} L${t+$*.085} ${e+$*.075}" ${i($,.7)} stroke-opacity="0.5"/>
<path d="M${t+$*.165} ${e+$*.185} L${t+$*.215} ${e-$*.055}" ${i($,1.4)}/>
<ellipse cx="${t+$*.219}" cy="${e-$*.075}" rx="${$*.022}" ry="${$*.032}" ${r($,.45)}/>`,mug:(t,e,$)=>`
<path d="M${t+$*.115} ${e+$*.01} A${$*.062} ${$*.062} 0 0 1 ${t+$*.115} ${e+$*.115}" ${i($,1.6)}/>
<rect x="${t-$*.125}" y="${e-$*.045}" width="${$*.24}" height="${$*.235}" rx="${$*.022}" ${r($,.12)}/>
<ellipse cx="${t-$*.005}" cy="${e-$*.045}" rx="${$*.12}" ry="${$*.032}" ${r($,.28)}/>
<path d="M${t-$*.055} ${e-$*.085} C${t-$*.09} ${e-$*.125}, ${t-$*.02} ${e-$*.15}, ${t-$*.055} ${e-$*.195}
 M${t+$*.045} ${e-$*.085} C${t+$*.01} ${e-$*.125}, ${t+$*.08} ${e-$*.15}, ${t+$*.045} ${e-$*.195}" ${i($,.9)} stroke-opacity="0.65"/>`,bloom:(t,e,$)=>`
<path d="M${t-$*.115} ${e+$*.2} L${t-$*.06} ${e+$*.03} L${t+$*.06} ${e+$*.03} L${t+$*.115} ${e+$*.2}Z" ${r($,.14)}/>
<path d="M${t-$*.075} ${e+$*.085} L${t+$*.075} ${e+$*.085}" ${i($,1.2)}/>
<path d="M${t-$*.03} ${e+$*.03} L${t-$*.075} ${e-$*.075}
 M${t} ${e+$*.03} L${t} ${e-$*.1}
 M${t+$*.03} ${e+$*.03} L${t+$*.075} ${e-$*.075}" ${i($,.8)} stroke-opacity="0.6"/>
<circle cx="${t-$*.085}" cy="${e-$*.1}" r="${$*.05}" ${r($,.3)}/>
<circle cx="${t}" cy="${e-$*.135}" r="${$*.058}" ${r($,.4)}/>
<circle cx="${t+$*.085}" cy="${e-$*.1}" r="${$*.05}" ${r($,.3)}/>
<circle cx="${t}" cy="${e-$*.135}" r="${$*.022}" ${a(.9)}/>`,frame:(t,e,$)=>`
<rect x="${t-$*.165}" y="${e-$*.165}" width="${$*.33}" height="${$*.3}" rx="${$*.016}" ${r($,.1,1.2)}/>
<rect x="${t-$*.115}" y="${e-$*.115}" width="${$*.23}" height="${$*.2}" rx="${$*.008}" ${i($,.8)} stroke-opacity="0.6"/>
<path d="M${t-$*.115} ${e+$*.085} L${t-$*.035} ${e-$*.02} L${t+$*.02} ${e+$*.04} L${t+$*.065} ${e-$*.005} L${t+$*.115} ${e+$*.085}Z" ${r($,.28,.7)}/>
<circle cx="${t+$*.058}" cy="${e-$*.072}" r="${$*.022}" ${a(.7)}/>
<path d="M${t+$*.055} ${e+$*.135} L${t+$*.13} ${e+$*.205}" ${i($,1.2)}/>`},G=v({label:"Anuvesha & Co.",caption:"GIFT CURATION"});export{Z as a,v as b,G as c};
