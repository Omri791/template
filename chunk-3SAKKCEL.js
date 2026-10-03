import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-S4QUU34R.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYCSYC6E.js";

// src/app/features/hospital/hospital-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HospitalDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "h2");
    \u0275\u0275text(2, "Nouvelle demande de sang");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "form", 10);
    \u0275\u0275listener("ngSubmit", function HospitalDashboardComponent_Conditional_9_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(4, "div", 11)(5, "label");
    \u0275\u0275text(6, "Groupe sanguin");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 12);
    \u0275\u0275twoWayListener("ngModelChange", function HospitalDashboardComponent_Conditional_9_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.request.bloodType, $event) || (ctx_r1.request.bloodType = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(8, "option");
    \u0275\u0275text(9, "A+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "option");
    \u0275\u0275text(11, "A-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "option");
    \u0275\u0275text(13, "B+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "option");
    \u0275\u0275text(15, "B-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "option");
    \u0275\u0275text(17, "AB+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "option");
    \u0275\u0275text(19, "AB-");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "option");
    \u0275\u0275text(21, "O+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "option");
    \u0275\u0275text(23, "O-");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 11)(25, "label");
    \u0275\u0275text(26, "Quantit\xE9 (poches)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function HospitalDashboardComponent_Conditional_9_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.request.quantity, $event) || (ctx_r1.request.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 11)(29, "label");
    \u0275\u0275text(30, "Urgence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "select", 14);
    \u0275\u0275twoWayListener("ngModelChange", function HospitalDashboardComponent_Conditional_9_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.request.urgency, $event) || (ctx_r1.request.urgency = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(32, "option");
    \u0275\u0275text(33, "NORMAL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option");
    \u0275\u0275text(35, "URGENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "option");
    \u0275\u0275text(37, "CRITICAL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 11)(39, "label");
    \u0275\u0275text(40, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function HospitalDashboardComponent_Conditional_9_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.request.notes, $event) || (ctx_r1.request.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 16)(43, "button", 17);
    \u0275\u0275text(44, "Envoyer la demande");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.request.bloodType);
    \u0275\u0275advance(20);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.request.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.request.urgency);
    \u0275\u0275advance(10);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.request.notes);
  }
}
function HospitalDashboardComponent_For_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", r_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.hospital);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r3.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r3.status);
  }
}
var _HospitalDashboardComponent = class _HospitalDashboardComponent {
  constructor() {
    this.showForm = false;
    this.request = { bloodType: "O+", quantity: 2, urgency: "URGENT", notes: "" };
    this.requests = [
      { id: 104, hospital: "H\xF4pital Charles Nicolle", type: "O-", quantity: 4, status: "EN ATTENTE" },
      { id: 103, hospital: "H\xF4pital La Rabta", type: "A+", quantity: 2, status: "TRAIT\xC9E" },
      { id: 102, hospital: "H\xF4pital Mongi Slim", type: "B+", quantity: 3, status: "EN COURS" }
    ];
  }
  submit() {
    this.showForm = false;
    alert("Demande enregistr\xE9e (mode template).");
  }
};
_HospitalDashboardComponent.\u0275fac = function HospitalDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HospitalDashboardComponent)();
};
_HospitalDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HospitalDashboardComponent, selectors: [["ng-component"]], decls: 63, vars: 1, consts: [[1, "container", "page"], [1, "page-title"], [1, "btn", "btn-primary", 3, "click"], [1, "card", "section"], [1, "grid", "grid-4"], [1, "card", "stat"], [1, "number"], [1, "icon"], [1, "card", "section", "table-wrap"], [1, "section-head"], [1, "form-grid", 3, "ngSubmit"], [1, "form-group"], ["name", "bloodType", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "quantity", 3, "ngModelChange", "ngModel"], ["name", "urgency", 3, "ngModelChange", "ngModel"], ["name", "notes", 3, "ngModelChange", "ngModel"], [1, "form-group", "full"], [1, "btn", "btn-primary"], [1, "badge", "badge-warning"]], template: function HospitalDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Espace H\xF4pital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Suivez vos demandes de sang et notifications.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 2);
    \u0275\u0275listener("click", function HospitalDashboardComponent_Template_button_click_7_listener() {
      return ctx.showForm = !ctx.showForm;
    });
    \u0275\u0275text(8, "+ Nouvelle demande");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, HospitalDashboardComponent_Conditional_9_Template, 45, 4, "div", 3);
    \u0275\u0275elementStart(10, "div", 4)(11, "div", 5)(12, "div")(13, "span");
    \u0275\u0275text(14, "Demandes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 6);
    \u0275\u0275text(16, "24");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 7);
    \u0275\u0275text(18, "\u{1F4CB}");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 5)(20, "div")(21, "span");
    \u0275\u0275text(22, "En attente");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 6);
    \u0275\u0275text(24, "5");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 7);
    \u0275\u0275text(26, "\u23F3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 5)(28, "div")(29, "span");
    \u0275\u0275text(30, "Trait\xE9es");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 6);
    \u0275\u0275text(32, "17");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 7);
    \u0275\u0275text(34, "\u2713");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 5)(36, "div")(37, "span");
    \u0275\u0275text(38, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 6);
    \u0275\u0275text(40, "3");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 7);
    \u0275\u0275text(42, "\u{1F514}");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 8)(44, "div", 9)(45, "h2");
    \u0275\u0275text(46, "Mes demandes");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "table")(48, "thead")(49, "tr")(50, "th");
    \u0275\u0275text(51, "#");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "th");
    \u0275\u0275text(53, "H\xF4pital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "th");
    \u0275\u0275text(55, "Groupe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "th");
    \u0275\u0275text(57, "Quantit\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "th");
    \u0275\u0275text(59, "Statut");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(60, "tbody");
    \u0275\u0275repeaterCreate(61, HospitalDashboardComponent_For_62_Template, 12, 5, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.showForm ? 9 : -1);
    \u0275\u0275advance(52);
    \u0275\u0275repeater(ctx.requests);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, NgForm], encapsulation: 2 });
var HospitalDashboardComponent = _HospitalDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HospitalDashboardComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [FormsModule, RouterLink], template: '<div class="container page">\n<div class="page-title"><div><h1>Espace H\xF4pital</h1><p>Suivez vos demandes de sang et notifications.</p></div><button class="btn btn-primary" (click)="showForm=!showForm">+ Nouvelle demande</button></div>\n@if(showForm){<div class="card section"><h2>Nouvelle demande de sang</h2><form class="form-grid" (ngSubmit)="submit()"><div class="form-group"><label>Groupe sanguin</label><select [(ngModel)]="request.bloodType" name="bloodType"><option>A+</option><option>A-</option><option>B+</option><option>B-</option><option>AB+</option><option>AB-</option><option>O+</option><option>O-</option></select></div><div class="form-group"><label>Quantit\xE9 (poches)</label><input type="number" [(ngModel)]="request.quantity" name="quantity"></div><div class="form-group"><label>Urgence</label><select [(ngModel)]="request.urgency" name="urgency"><option>NORMAL</option><option>URGENT</option><option>CRITICAL</option></select></div><div class="form-group"><label>Notes</label><input [(ngModel)]="request.notes" name="notes"></div><div class="form-group full"><button class="btn btn-primary">Envoyer la demande</button></div></form></div>}\n<div class="grid grid-4"><div class="card stat"><div><span>Demandes</span><div class="number">24</div></div><div class="icon">\u{1F4CB}</div></div><div class="card stat"><div><span>En attente</span><div class="number">5</div></div><div class="icon">\u23F3</div></div><div class="card stat"><div><span>Trait\xE9es</span><div class="number">17</div></div><div class="icon">\u2713</div></div><div class="card stat"><div><span>Notifications</span><div class="number">3</div></div><div class="icon">\u{1F514}</div></div></div>\n<div class="card section table-wrap"><div class="section-head"><h2>Mes demandes</h2></div><table><thead><tr><th>#</th><th>H\xF4pital</th><th>Groupe</th><th>Quantit\xE9</th><th>Statut</th></tr></thead><tbody>@for(r of requests;track r.id){<tr><td>#{{r.id}}</td><td>{{r.hospital}}</td><td>{{r.type}}</td><td>{{r.quantity}}</td><td><span class="badge badge-warning">{{r.status}}</span></td></tr>}</tbody></table></div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HospitalDashboardComponent, { className: "HospitalDashboardComponent", filePath: "src/app/features/hospital/hospital-dashboard.component.ts", lineNumber: 6 });
})();
export {
  HospitalDashboardComponent
};
//# sourceMappingURL=chunk-3SAKKCEL.js.map
