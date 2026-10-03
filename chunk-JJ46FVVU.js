import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YYCSYC6E.js";

// src/app/shared/components/blood-type-badge/blood-type-badge.component.ts
var _BloodTypeBadgeComponent = class _BloodTypeBadgeComponent {
  constructor() {
    this.type = "O+";
  }
};
_BloodTypeBadgeComponent.\u0275fac = function BloodTypeBadgeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BloodTypeBadgeComponent)();
};
_BloodTypeBadgeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BloodTypeBadgeComponent, selectors: [["app-blood-type-badge"]], inputs: { type: "type" }, decls: 2, vars: 1, consts: [[1, "blood"]], template: function BloodTypeBadgeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 0);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.type);
  }
}, styles: ["\n\n.blood[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: inline-grid;\n  place-items: center;\n  background: #fff0f0;\n  border: 2px solid #e7a2a2;\n  color: var(--primary);\n  font-weight: 800;\n  font-size: 13px;\n}\n/*# sourceMappingURL=blood-type-badge.component.css.map */"] });
var BloodTypeBadgeComponent = _BloodTypeBadgeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BloodTypeBadgeComponent, [{
    type: Component,
    args: [{ selector: "app-blood-type-badge", standalone: true, template: `<span class="blood">{{type}}</span>`, styles: ["/* angular:styles/component:css;5740868ebfeccf4790284f7df0e9c039e50c43c98539961ffca18ca64b9baf6f;C:/Users/lenovo/blood-donation-platform-angular-template-fixed/src/app/shared/components/blood-type-badge/blood-type-badge.component.ts */\n.blood {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  display: inline-grid;\n  place-items: center;\n  background: #fff0f0;\n  border: 2px solid #e7a2a2;\n  color: var(--primary);\n  font-weight: 800;\n  font-size: 13px;\n}\n/*# sourceMappingURL=blood-type-badge.component.css.map */\n"] }]
  }], null, { type: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BloodTypeBadgeComponent, { className: "BloodTypeBadgeComponent", filePath: "src/app/shared/components/blood-type-badge/blood-type-badge.component.ts", lineNumber: 9 });
})();

export {
  BloodTypeBadgeComponent
};
//# sourceMappingURL=chunk-JJ46FVVU.js.map
