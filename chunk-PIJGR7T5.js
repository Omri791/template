import {
  DonationService
} from "./chunk-PMIV4EBA.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-FUH66JDF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-YYCSYC6E.js";

// src/app/features/donations/donation-detail/donation-detail.component.ts
function DonationDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "a", 3);
    \u0275\u0275text(2, "\u2190 Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p")(6, "strong");
    \u0275\u0275text(7, "Donneur :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p")(10, "strong");
    \u0275\u0275text(11, "Groupe :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p")(14, "strong");
    \u0275\u0275text(15, "Centre :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p")(18, "strong");
    \u0275\u0275text(19, "Date :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p")(22, "strong");
    \u0275\u0275text(23, "Quantit\xE9 :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "strong");
    \u0275\u0275text(27, "Statut :");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("D\xE9tail du don #", ctx_r0.donation.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.donorName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.bloodType);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.centerName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.date);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.quantity, " ml");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.donation.status);
  }
}
function DonationDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Don introuvable.");
    \u0275\u0275elementEnd();
  }
}
var _DonationDetailComponent = class _DonationDetailComponent {
  constructor(r, s) {
    s.getById(Number(r.snapshot.paramMap.get("id"))).subscribe((x) => this.donation = x);
  }
};
_DonationDetailComponent.\u0275fac = function DonationDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DonationDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(DonationService));
};
_DonationDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationDetailComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "container", "page"], [1, "card", 2, "max-width", "700px", "margin", "auto"], [1, "empty"], ["routerLink", "/donations"]], template: function DonationDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, DonationDetailComponent_Conditional_1_Template, 29, 7, "div", 1)(2, DonationDetailComponent_Conditional_2_Template, 2, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.donation ? 1 : 2);
  }
}, dependencies: [RouterLink], encapsulation: 2 });
var DonationDetailComponent = _DonationDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonationDetailComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [RouterLink], template: '<div class="container page">@if(donation){<div class="card" style="max-width:700px;margin:auto"><a routerLink="/donations">\u2190 Retour</a><h1>D\xE9tail du don #{{donation.id}}</h1><p><strong>Donneur :</strong> {{donation.donorName}}</p><p><strong>Groupe :</strong> {{donation.bloodType}}</p><p><strong>Centre :</strong> {{donation.centerName}}</p><p><strong>Date :</strong> {{donation.date}}</p><p><strong>Quantit\xE9 :</strong> {{donation.quantity}} ml</p><p><strong>Statut :</strong> {{donation.status}}</p></div>}@else{<div class="empty">Don introuvable.</div>}</div>\n' }]
  }], () => [{ type: ActivatedRoute }, { type: DonationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationDetailComponent, { className: "DonationDetailComponent", filePath: "src/app/features/donations/donation-detail/donation-detail.component.ts", lineNumber: 7 });
})();
export {
  DonationDetailComponent
};
//# sourceMappingURL=chunk-PIJGR7T5.js.map
