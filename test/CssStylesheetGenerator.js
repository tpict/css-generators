const expect = require('unexpected')
  .clone()
  .use(require('unexpected-snapshot'))
  .use(require('magicpen-prism'));
const chanceCache = require('chance-generators/lib/chanceCache');

const CssStylesheetGenerator = require('../lib/CssStylesheetGenerator');

describe('CssStylesheetGenerator', () => {
  beforeEach(() => chanceCache.clear());

  it('should generate a CSS declaration list', () => {
    expect(new CssStylesheetGenerator().take(10), 'to equal snapshot', [
      "@keyframes sidfanu {\n  <keyframe-block-list>\n}\n:first-of-type { border-end-end-radius: 65%; animation-delay: -887.1769s; padding-top: 94%; border-left-width: -636.3501vw; }\n:active { column-count: auto; inset-inline-end: -136.11ch; clear: both; mask-mode: luminance; }\n#lel :target + :only-child { float: none; }\n::slotted(sof | * . ow ::lebho hsla(1981523607683072 , 50% , 84% , -5884139412652032) ):gokim 93.4206s )) { animation-iteration-count: 6166054300549120; }\n:scope { transform-box: fill-box; text-emphasis: GrayText none; margin-block: 41.6685ch; }\n::placeholder { scroll-padding-top: auto; place-self: normal stretch; }\n:visited { empty-cells: hide; break-inside: avoid-column; left: -718.1516in; }\n:valid { background-size: auto; }\n:in-range { font-kerning: auto; clip: rect(-971.8404vmax , -602.3152rem , 422.6839rem , 580.3511vh); mask-composite: add; text-underline-position: auto; }\n:optional { text-overflow: 'neclekos'; }\n:nth-last-of-type(even) { text-decoration-line: overline underline; scroll-snap-align: center; }\n:required { border-start-start-radius: 25%; height: border-box -949.1618pc; border-block-start: thick; }\n:only-of-type { column-rule: hidden rgba(41% , 76%); border-left: rgb(29% , 16%); text-decoration: dashed rgb(-783003563327488 , 22%) none; }\n:in-range { text-decoration-color: #530846; scroll-margin-left: -755.8241vmin; empty-cells: show; text-indent: 43% each-line hanging; -webkit-line-clamp: -30%; }\n::backdrop { align-items: normal; inset-block: 42%; }\n:last-of-type { padding: -461.1754mm; border-top-color: ButtonFace; }\n",
      '@charset "Ventura-International" ;\n:read-write { flex-basis: content; visibility: visible; translate: none; }\n:disabled { hyphens: auto; color-adjust: economy; caption-side: inline-end; animation-play-state: running; }\n:nth-of-type(odd) { font-stretch: normal; animation-name: none; counter-set: none; }\n:only-of-type { overflow: visible; isolation: auto; }\n:lang(za) { border-top: hsl(4111180268306432 81% 37% / 2383409905139712) thick; max-width: none; justify-items: legacy; }\n',
      "::after { column-rule-style: double; }\n:checked { animation-timing-function: step-end; column-span: all; border-right-color: rgb(51% , 22%); direction: rtl; }\n:active + ::marker { font-language-override: normal; inset-block-start: auto; scroll-padding-inline-end: auto; outline-width: thin; }\n:right { border-left-style: outset; }\n:not(* | * . guz ::hezuw [ gehwoivu ] 'ipuod' fit-content(67%) [ becvub ] / [ ki ] minmax(max-content , min-content) [ harhi ] ):los || * | * . dijjeg ::miwtitpo snap from-image 722.4521dpi ):zogu) { grid-row: span -97% kimsuzceh / jel; border-inline-end: inset medium; top: 7%; border-block-end-color: rgba(67% , 36%); border-color: hsl(6798148865359872 , 32% , 74% , 70%); }\n:read-write :read-write { list-style: none; font-variant: jis90 all-petite-caps slashed-zero discretionary-ligatures swash(vahfi) no-common-ligatures; }\n:enabled { margin-left: auto; animation-iteration-count: infinite; animation-play-state: running; scroll-padding-block-start: auto; filter: drop-shadow(44.4865vmax currentcolor); }\n:enabled { unicode-bidi: bidi-override; grid-auto-rows: auto; }\n* { isolation: auto; }\n:not(* | * #uzwebmek ::haucmor:od + waoho | womtoce [ bedabe | waldoal ] ::mo:opu) { border-width: thin; }\nobject { image-rendering: crisp-edges; shape-image-threshold: 709361055825920; order: 37%; border-image-width: -7735945746972672; transform-style: preserve-3d; }\n::marker { tab-size: 272.8072vw; }\n:valid { outline-width: thin; margin-block-end: 12%; grid-auto-rows: fit-content(82%); }\n::marker { font: small-caption; translate: 20% -452.0778cm -570.8218cm; flex-shrink: -8678944026918912; animation-play-state: running; }\n:only-child { counter-increment: lubet -48%; break-inside: avoid-page; border-bottom: ThreeDShadow 470.1421pc inset; vertical-align: super; }\n:nth-child(5n+8 of * | * [ * | lesev * = mozoglu s ] ::lehdeb 96% ):leorusi -103.109cm ) + gozzod | * #ucrakime ::fos 236.4361vmin ):moceira) { inset-block: -533.5439vw; }\n",
      '@keyframes huwsojwa {\n  <keyframe-block-list>\n}\n@charset "IBM1026" ;\n:hover { padding-bottom: -502.5517vmin; column-width: -131.0963pt; border-top-style: none; }\n:indeterminate { margin-block-end: 481.9478cm; row-gap: normal; scroll-padding-block-start: 75%; }\n:read-only { border-style: outset; font-optical-sizing: auto; grid-template: none; }\n[cols=nubuz] { backface-visibility: visible; text-decoration-style: solid; inset-inline-start: auto; }\n::slotted(vuc | * [ * | jiz ] ::lusohocu -9% ):jati) { display: flow run-in list-item; border-width: thick; }\n:lang(pl) { justify-items: stretch; }\n:first-child { scroll-margin-top: 205.5638rem; box-sizing: content-box; border-bottom-width: thick; }\n[colspan=monokaivi] { border-image-width: -247.0733vh; }\n',
      "@keyframes 'so' {\n  <keyframe-block-list>\n}\n@charset \"UNICODE-1-1-UTF-7\" ;\n@keyframes 'ecimaba' {\n  <keyframe-block-list>\n}\n[cols=rusomiwus] { flex-shrink: -4551371944624128; border-top: thick hsl(-4888336636313600 , 88% , 67% , 62%); background: 52% center / contain element(#dutsabi) content-box , fixed repeat-x content-box padding-box #9704d8 image-set('isri' 450.9104x); text-orientation: upright; color: #860acc; }\n::backdrop { transition-delay: 592.9436ms; grid-auto-rows: fit-content(49%); scale: none; background-position: left 49%; }\n:fullscreen { border-left-style: groove; margin-inline: -316.8736cm; }\n:not(fid | garmunir:hafeh ::di:lelam + al | * [ fujbe | conuflul | = rizabha s ] ::pomduli single ):lab) { column-rule-width: thick; border-left-width: -345.0053px; border-bottom: hsl(3226420515962880 , 35% , 79% , 50%); }\n:last-of-type { margin-inline-end: 74%; }\n:nth-last-of-type(even) { margin-inline-start: 57%; border-bottom-right-radius: -432.4482mm; flex: content -2592330896900096 -31566692614144; word-break: break-all; }\n:nth-of-type(odd) { align-items: normal; border-right-width: -269.2864ex; }\n:last-of-type { scroll-snap-stop: normal; }\n:enabled + :valid { background-clip: content-box; }\n::after { background-blend-mode: hard-light; }\n",
      ':read-write { z-index: auto; text-emphasis-color: hsla(834.7913turn , 0% , 82% , 26%); hanging-punctuation: none; padding-top: 82%; top: auto; }\n:nth-child(even of zef | *:gihidtoh ::fulri:naciz > * | habodnin . duesudu ::gajossav 655.8818vh ):fud currentcolor )) { outline: auto thick; margin-inline-start: 68%; }\n:visited { font-weight: lighter; flex-shrink: 7199768698683392; grid-column-end: 50% sejmem; }\n:nth-child(10n+3 of * | * #kosva ::timinofoh:zab unset ) ~ katdevdo | * . ralmo ::tisirse auto ):semiop 17% )) { inline-size: border-box 88%; }\n:nth-last-of-type(odd) { margin: auto; }\n:read-write { text-transform: none; padding-inline: 15%; scale: -2261971244154880; mask-image: none; }\n:invalid { perspective-origin: bottom center; }\n:dir(rtl) ~ ::after || :active > ::after > ::first-line { table-layout: auto; inset-block-start: 182.5509Q; }\n:indeterminate { background-clip: content-box; content: normal; }\n',
      "@font-face {\n  font-variant:none ; font-family:'olibi' ; unicode-range:U+e9a9-ef35 ; font-stretch:semi-condensed ; font-variation-settings:normal ; font-style:italic ;\n}\n@font-face {\n  unicode-range:U+a9d? ; font-style:oblique -82.022deg ; font-variation-settings:'cizpe' 1718303672238080 ; font-variant:normal ; src:url(metlel) format('bel') ; font-weight:1168073964912640 ; font-family:zo ; font-stretch:semi-condensed ; font-feature-settings:'nikro' -80% ;\n}\n@font-face {\n  font-weight:bold ; font-family:'udwupbi' ; font-stretch:extra-condensed ; font-feature-settings:normal ;\n}\n:dir(ltr) { inline-size: border-box 57%; border-inline-width: thick; object-position: left bottom; border-block-end-style: inset; }\n:disabled { padding-top: 86%; scroll-margin-left: 660.4398vw; font-language-override: 'gikubo'; border-block-color: darkolivegreen; scroll-snap-align: none; }\n:active > ::before { min-width: auto; padding-bottom: 91%; scroll-padding-block: -328.2683ex; }\n:visited { flex: 5956542046142464 2236467870957568; counter-set: livhuzod -78%; }\n::before { grid-template-rows: [ afpajom ] repeat(64% , [ haeku ] 90% [ job ]) [ ratpecmol ] repeat(auto-fit , [ dafejus ] minmax(201.0337Q , max-content) [ sumij ]) [ majusca ] repeat(78% , [ lu ] -288.6546vmin [ jonnepodo ]) [ jajan ]; scroll-padding-right: auto; scroll-padding-top: auto; }\n::placeholder { border-image-repeat: repeat; mask-size: contain; grid-row-end: auto; }\n:fullscreen { display: contents; }\n:left { overflow-y: clip; font-variant-numeric: normal; border-top-left-radius: 638.2047cm; scroll-margin-inline-start: -995.3213rem; }\n::selection { align-content: space-between; flex: none; }\n:valid + ::first-line { border-collapse: separate; transition-delay: 381.1205ms; inset-inline: -826.5896px; transition-timing-function: steps(47% , jump-both); scroll-margin-left: 518.0717Q; }\n:required { min-height: fit-content; width: available; text-emphasis-style: open dot; transform-style: preserve-3d; }\n#suz { list-style-image: none; }\n:last-child { column-rule: medium; page-break-inside: auto; border-inline-start-color: Background; visibility: hidden; transform-style: preserve-3d; }\n:last-child { shape-outside: none; scroll-padding-top: auto; column-rule-style: double; scroll-padding-inline: 300.3347px; }\n:focus { list-style-position: inside; grid-template-areas: none; }\n::cue(:not(ciamape | pukiginu:gij ::cubcoma -364227273424896 ):jukdij auto ) ~ ne | * . jog ::bu auto ):mo)) { border-right: hsl(-164.8385turn 88% 89% / 60%) solid thick; }\n",
      "@font-face {\n  font-style:oblique 25.377deg ; font-family:'le' ; src:url(zuj) format('tuimsum') ; unicode-range:U+2c84-8051 ; font-feature-settings:normal ; font-variant:contextual jis90 stacked-fractions character-variant(eva) ruby ornaments(vuwahhe) ordinal full-width styleset(wal) no-common-ligatures historical-forms swash(har) stylistic(uvpupi) titling-caps annotation(korsugimo) no-historical-ligatures tabular-nums discretionary-ligatures oldstyle-nums slashed-zero ; font-stretch:ultra-condensed ;\n}\n@keyframes egorawof {\n  <keyframe-block-list>\n}\n::cue(::placeholder) || ::before { animation-fill-mode: both; scroll-padding-block-end: auto; border-bottom-right-radius: 33%; }\n:dir(rtl) { border-image-source: none; scroll-padding-block: 76%; inline-size: available; align-items: normal; caret-color: auto; }\n:only-child { width: max-content; max-width: -480.3929mm; }\n:only-of-type { justify-self: safe center; }\n:enabled { animation-delay: 82.5332ms; translate: -215.6976Q 864.0563vh -794.9806vh; transform-box: border-box; overflow-y: scroll; }\n[rows=wo] { padding-inline: 47%; }\n:fullscreen { mask-repeat: repeat-x; }\n#uzonopso { animation-duration: -868.7477ms; scroll-padding-block-start: auto; }\n:focus { scroll-padding-block: 366.5908ch; grid: none; grid-row: 71% span / auto; }\n:not(* | * [ zovaez | biowituk ] ::uh avoid-page ):zebuwen auto ) + * | * #ec ::num 252.4406vh ):iw) { mask-position: left top; mask: no-clip; border-top-left-radius: 116.8254ex; border-right-width: thin; border-image-source: none; }\n:optional { column-span: none; margin-left: auto; font-variant-numeric: normal; }\n::slotted(co | puwep [ * | ibozaha * = pi s ] ::roohpi:cacekfu) { border-inline-start-width: medium; padding: 82%; border-inline-start-width: -665.0349rem; }\n::placeholder ~ :only-of-type { padding-inline: 3%; }\n:nth-of-type(odd) { background-blend-mode: soft-light; left: 418.1211vw; text-align: match-parent; padding-inline-start: 80%; }\n:target { mask-mode: match-source; grid-template-columns: none; }\n:optional { list-style: inside url(ranas); background-image: image(rtl url(tehnes) , rgba(5218744389337088 , 2859025200840704)); backface-visibility: visible; border-image-source: url(hezulogi); overflow: hidden; }\n[capture=hu] { border-inline-style: inset; transition-timing-function: step-end; place-items: unsafe self-end last baseline; }\n:focus { word-break: keep-all; animation-timing-function: cubic-bezier(252127138021376 , 1417290214014976 , 1586318689697792 , -1105806292418560); animation-fill-mode: backwards; font-kerning: normal; }\n:nth-of-type(odd) { text-emphasis-position: left over; word-wrap: break-word; caption-side: inline-end; }\n:focus { float: inline-start; grid-column-start: zo -19%; }\n",
      "@font-face {\n  unicode-range:U+6fea-7df3 ; font-style:italic ; font-stretch:semi-expanded ; font-variant:none ; font-family:sadlez ; src:url(vah) format('sakhig') ;\n}\n@font-face {\n  font-family:'hiore' ; font-variant:normal ; src:url(bo) format('vizuali') ; font-stretch:ultra-expanded ; unicode-range:U+de?? ; font-variation-settings:normal ; font-weight:normal ; font-feature-settings:normal ;\n}\n@keyframes hub {\n  <keyframe-block-list>\n}\n#hioc { border-block-end-width: medium; margin-inline-end: 376.4158em; }\n:indeterminate { grid-template: [ butusig ] 'perfab' 143.5423fr [ woufwo ] / [ hu ] fit-content(-489.387rem) [ uzebig ]; mask-position: bottom 3% left 80%; overflow-y: auto; outline-width: medium; border-radius: 66% / 39%; }\n:out-of-range { margin-bottom: -302.8527Q; border-image-source: element(#uv); font-size-adjust: 6678900365066240; position: sticky; }\n:nth-last-child(8n+2 of * | * . orawite ::lahtahte:vejnig basar ) ~ * | * . rupul ::kaj thin ):rimom 911.0474rad x )) + :visited { font-variant-ligatures: normal; }\n::cue([maxlength=vucapef]) { border-inline: dotted medium; }\n:first-child { scroll-margin-inline-end: 64.5204px; margin-inline: -820.7474Q; padding-left: 40%; box-sizing: border-box; font-style: oblique -756.2278rad; }\n:active { overflow: auto; }\n:active { inset-inline-end: 418.0925in; border-block-start: outset thick hsla(5512271648260096 82% 55% / -8225148561784832); inset-inline-start: 11%; transition-delay: -994.832s; }\n:only-of-type { inset-block-end: auto; margin-right: 587.4877ex; mix-blend-mode: soft-light; border-inline-style: solid; flex: content 1020282567393280 -4740118539665408; }\n:empty { color-adjust: economy; page-break-inside: avoid; scroll-snap-stop: normal; outline-offset: 335.0998vmax; }\n:scope + :only-child { grid-auto-columns: minmax(min-content , -529.5289vh); }\n::before { grid-row-end: auto; justify-items: normal; border-inline-width: -375.4565Q; border-spacing: 214.1881ex 93.3948Q; border-start-end-radius: -218.188Q; }\n:nth-of-type(5n+2) { break-after: avoid; margin-top: auto; outline-width: thin; gap: normal normal; padding-left: 69%; }\n",
      ":fullscreen { scroll-padding-block: auto; }\n:nth-of-type(odd) { margin-bottom: auto; break-after: avoid-column; }\n[src=ina] { column-rule-width: thin; border-right-width: thin; empty-cells: hide; }\n[checked=cotho] { box-sizing: border-box; margin-right: 68%; justify-content: normal; }\n:first-of-type { columns: 99%; flex-wrap: wrap; flex: content -2998144388300800 -7923771176386560; }\n:nth-last-of-type(even) { transition-property: all; }\n:only-of-type { quotes: none; border-inline-end: solid thick; quotes: none; cursor: url(uti) 854.3557mm -530.7159cm , move; }\n::selection { animation-delay: 984.967s; }\n::first-line { justify-self: normal; scroll-padding-right: 9%; mask-size: 76%; shape-outside: none; }\n:nth-of-type(odd) { scroll-margin: -681.392rem; background-origin: border-box; border-bottom: thin; }\n:fullscreen { flex-wrap: nowrap; cursor: url(riaknu) 201.1887vmin 31.3589em , zoom-out; }\n:target { margin-block-start: auto; margin: auto; font-feature-settings: normal; }\n:left { font-language-override: normal; justify-self: safe left; outline-style: double; table-layout: fixed; scroll-margin-left: -717.4439vh; }\n:default { scroll-padding-block: auto; column-rule-width: thin; }\n.ve { transition-property: anaeh; text-transform: lowercase; }\n:last-of-type { mask-composite: exclude; }\n:scope { border-inline-style: dashed; image-rendering: pixelated; font-language-override: 'lac'; grid-template: none; inline-size: 99.0591vh content-box; }\n:invalid > :nth-of-type(10n+6) { font-weight: normal; scroll-snap-stop: always; -webkit-line-clamp: none; animation: normal none -576.4893ms -30.7968s step-start; mask-repeat: space; }\n::slotted(ca | javoti [ teforuk | avnole ^ = 'gojube' i ] ::boso:ro forwards )) { scroll-padding-inline-start: auto; }\n:only-of-type { border-inline-start-width: thick; background-origin: content-box; backface-visibility: visible; flex-flow: column; mix-blend-mode: color-burn; }\n"
    ]);
  });
});
