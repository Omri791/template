import {
  BloodTypeBadgeComponent
} from "./chunk-JJ46FVVU.js";
import {
  DonationService
} from "./chunk-PMIV4EBA.js";
import {
  RouterLink
} from "./chunk-FUH66JDF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YYCSYC6E.js";

// src/app/features/donations/donation-list/donation-list.component.ts
var _c0 = (a0) => ["/donations", a0];
var _forTrack0 = ($index, $item) => $item.id;
function DonationListComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275element(4, "app-blood-type-badge", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td")(12, "span", 5);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td")(15, "a", 6);
    \u0275\u0275text(16, "D\xE9tails");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.donorName);
    \u0275\u0275advance(2);
    \u0275\u0275property("type", d_r1.bloodType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.centerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", d_r1.quantity, " ml");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("badge-success", d_r1.status === "COMPLETED" || d_r1.status === "ACCEPTED")("badge-warning", d_r1.status === "PENDING")("badge-danger", d_r1.status === "CANCELLED");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r1.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, d_r1.id));
  }
}
var _DonationListComponent = class _DonationListComponent {
  constructor(s) {
    this.donations = [];
    s.getAll().subscribe((x) => this.donations = x);
  }
};
_DonationListComponent.\u0275fac = function DonationListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DonationListComponent)(\u0275\u0275directiveInject(DonationService));
};
_DonationListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonationListComponent, selectors: [["ng-component"]], decls: 29, vars: 0, consts: [[1, "container", "page"], [1, "page-title"], ["routerLink", "/signup", 1, "btn", "btn-primary"], [1, "card", "table-wrap"], [3, "type"], [1, "badge"], [1, "btn", "btn-secondary", 3, "routerLink"]], template: function DonationListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Dons de sang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Suivi des op\xE9rations de don.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 2);
    \u0275\u0275text(8, "Devenir donneur");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 3)(10, "table")(11, "thead")(12, "tr")(13, "th");
    \u0275\u0275text(14, "Donneur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Centre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "th");
    \u0275\u0275text(20, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "th");
    \u0275\u0275text(22, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "th");
    \u0275\u0275text(24, "Statut");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "th");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "tbody");
    \u0275\u0275repeaterCreate(27, DonationListComponent_For_28_Template, 17, 15, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(27);
    \u0275\u0275repeater(ctx.donations);
  }
}, dependencies: [RouterLink, BloodTypeBadgeComponent], encapsulation: 2 });
var DonationListComponent = _DonationListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonationListComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [RouterLink, BloodTypeBadgeComponent], template: `<div class="container page">
  <div class="page-title"><div><h1>Dons de sang</h1><p>Suivi des op\xE9rations de don.</p></div><a routerLink="/signup" class="btn btn-primary">Devenir donneur</a></div>
  <div class="card table-wrap"><table><thead><tr><th>Donneur</th><th>Groupe</th><th>Centre</th><th>Date</th><th>Quantit\xE9</th><th>Statut</th><th></th></tr></thead><tbody>
  @for(d of donations;track d.id){<tr><td>{{d.donorName}}</td><td><app-blood-type-badge [type]="d.bloodType"/></td><td>{{d.centerName}}</td><td>{{d.date}}</td><td>{{d.quantity}} ml</td><td><span class="badge" [class.badge-success]="d.status==='COMPLETED'||d.status==='ACCEPTED'" [class.badge-warning]="d.status==='PENDING'" [class.badge-danger]="d.status==='CANCELLED'">{{d.status}}</span></td><td><a [routerLink]="['/donations',d.id]" class="btn btn-secondary">D\xE9tails</a></td></tr>}
  </tbody></table></div>
</div>
` }]
  }], () => [{ type: DonationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonationListComponent, { className: "DonationListComponent", filePath: "src/app/features/donations/donation-list/donation-list.component.ts", lineNumber: 8 });
})();
export {
  DonationListComponent
};
//# sourceMappingURL=chunk-AUCL7XKT.js.map
