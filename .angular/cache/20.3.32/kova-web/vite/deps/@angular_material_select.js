import {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-3UW5ZMLV.js";
import "./chunk-EYE5EEI2.js";
import "./chunk-XA3EVXH3.js";
import "./chunk-BC3QBYFG.js";
import "./chunk-TN7C6A3I.js";
import {
  MatOptgroup,
  MatOption
} from "./chunk-NPAJGXD6.js";
import "./chunk-KN7EJB3A.js";
import "./chunk-X5YYTOUE.js";
import "./chunk-UI23XDYO.js";
import "./chunk-5UMX6V3I.js";
import "./chunk-OPJL2LQY.js";
import "./chunk-RB6KS6D2.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-3A63ZKNE.js";
import "./chunk-AKVNJYPQ.js";
import "./chunk-QLEQZEYN.js";
import "./chunk-VENV3F3G.js";
import "./chunk-7PAKRGT4.js";
import "./chunk-46HAYV32.js";
import "./chunk-YR2RTD3J.js";
import "./chunk-25PWC2OP.js";
import "./chunk-OGBHIIJI.js";
import "./chunk-KALACCNY.js";
import "./chunk-5EG33CFQ.js";
import "./chunk-EKFUDR3B.js";
import "./chunk-4Q4NREH7.js";
import "./chunk-BYKTBZVP.js";
import "./chunk-OP7REDXI.js";
import "./chunk-MHWPA7LQ.js";
import "./chunk-JHLP2FO7.js";
import "./chunk-PJVWDKLX.js";

// node_modules/@angular/material/fesm2022/select.mjs
var matSelectAnimations = {
  // Represents
  // trigger('transformPanel', [
  //   state(
  //     'void',
  //     style({
  //       opacity: 0,
  //       transform: 'scale(1, 0.8)',
  //     }),
  //   ),
  //   transition(
  //     'void => showing',
  //     animate(
  //       '120ms cubic-bezier(0, 0, 0.2, 1)',
  //       style({
  //         opacity: 1,
  //         transform: 'scale(1, 1)',
  //       }),
  //     ),
  //   ),
  //   transition('* => void', animate('100ms linear', style({opacity: 0}))),
  // ])
  /** This animation transforms the select's overlay panel on and off the page. */
  transformPanel: {
    type: 7,
    name: "transformPanel",
    definitions: [
      {
        type: 0,
        name: "void",
        styles: {
          type: 6,
          styles: { opacity: 0, transform: "scale(1, 0.8)" },
          offset: null
        }
      },
      {
        type: 1,
        expr: "void => showing",
        animation: {
          type: 4,
          styles: {
            type: 6,
            styles: { opacity: 1, transform: "scale(1, 1)" },
            offset: null
          },
          timings: "120ms cubic-bezier(0, 0, 0.2, 1)"
        },
        options: null
      },
      {
        type: 1,
        expr: "* => void",
        animation: {
          type: 4,
          styles: { type: 6, styles: { opacity: 0 }, offset: null },
          timings: "100ms linear"
        },
        options: null
      }
    ],
    options: {}
  }
};
export {
  MAT_SELECT_CONFIG,
  MAT_SELECT_SCROLL_STRATEGY,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER,
  MAT_SELECT_SCROLL_STRATEGY_PROVIDER_FACTORY,
  MAT_SELECT_TRIGGER,
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatOptgroup,
  MatOption,
  MatPrefix,
  MatSelect,
  MatSelectChange,
  MatSelectModule,
  MatSelectTrigger,
  MatSuffix,
  matSelectAnimations
};
//# sourceMappingURL=@angular_material_select.js.map
