import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-YYCSYC6E.js";

// src/app/features/center/center-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.id;
function CenterDashboardComponent_For_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 11)(1, "span", 15);
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r1[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r1[1], " poches");
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-danger", s_r1[2] === "Critique")("badge-warning", s_r1[2] === "Faible")("badge-success", s_r1[2] === "Normal");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r1[2]);
  }
}
function CenterDashboardComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 12)(1, "div")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(6, "button", 17);
    \u0275\u0275domListener("click", function CenterDashboardComponent_For_56_Template_button_click_6_listener() {
      const r_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.respond(r_r3.id));
    });
    \u0275\u0275text(7, "R\xE9pondre");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const r_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("#", r_r3.id, " \xB7 ", r_r3.hospital);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", r_r3.type, " \xB7 ", r_r3.qty, " poches \xB7 ", r_r3.urgency);
  }
}
var _CenterDashboardComponent = class _CenterDashboardComponent {
  constructor() {
    this.stock = [["O+", 42, "Normal"], ["O-", 8, "Faible"], ["A+", 31, "Normal"], ["A-", 12, "Faible"], ["B+", 27, "Normal"], ["B-", 9, "Faible"], ["AB+", 16, "Normal"], ["AB-", 5, "Critique"]];
    this.requests = [{ id: 201, hospital: "H\xF4pital Charles Nicolle", type: "O-", qty: 6, urgency: "CRITIQUE" }, { id: 202, hospital: "H\xF4pital La Rabta", type: "A+", qty: 3, urgency: "URGENT" }, { id: 203, hospital: "H\xF4pital Mongi Slim", type: "B+", qty: 2, urgency: "NORMAL" }];
  }
  launchCall() {
    alert("Appel aux donneurs lanc\xE9 (mode template).");
  }
  respond(id) {
    alert("R\xE9ponse \xE0 la demande #" + id + " (mode template).");
  }
};
_CenterDashboardComponent.\u0275fac = function CenterDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CenterDashboardComponent)();
};
_CenterDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CenterDashboardComponent, selectors: [["ng-component"]], decls: 79, vars: 0, consts: [[1, "container", "page"], [1, "page-title"], [1, "btn", "btn-primary", 3, "click"], [1, "grid", "grid-4"], [1, "card", "stat"], [1, "number"], [1, "icon"], [1, "section", "grid", "grid-2"], [1, "card"], [1, "section-head"], [1, "btn", "btn-secondary"], [1, "stock"], [1, "request"], [1, "section", "grid", "grid-3"], [1, "btn", "btn-primary"], [1, "type"], [1, "badge"], [1, "btn", "btn-outline", 3, "click"]], template: function CenterDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Espace Centre de don");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "Stock, demandes, donneurs et rendez-vous.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "button", 2);
    \u0275\u0275domListener("click", function CenterDashboardComponent_Template_button_click_7_listener() {
      return ctx.launchCall();
    });
    \u0275\u0275text(8, "\u{1F4E3} Lancer un appel");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 3)(10, "div", 4)(11, "div")(12, "span");
    \u0275\u0275text(13, "Stock total");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 5);
    \u0275\u0275text(15, "150");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 6);
    \u0275\u0275text(17, "\u{1FA78}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 4)(19, "div")(20, "span");
    \u0275\u0275text(21, "Donneurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 5);
    \u0275\u0275text(23, "1 280");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 6);
    \u0275\u0275text(25, "\u{1F465}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div", 4)(27, "div")(28, "span");
    \u0275\u0275text(29, "Rendez-vous");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 5);
    \u0275\u0275text(31, "18");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 6);
    \u0275\u0275text(33, "\u{1F4C5}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 4)(35, "div")(36, "span");
    \u0275\u0275text(37, "Demandes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 5);
    \u0275\u0275text(39, "7");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "div", 6);
    \u0275\u0275text(41, "\u{1F4CB}");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(42, "div", 7)(43, "div", 8)(44, "div", 9)(45, "h2");
    \u0275\u0275text(46, "Stock sanguin");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "button", 10);
    \u0275\u0275text(48, "G\xE9rer");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(49, CenterDashboardComponent_For_50_Template, 7, 9, "div", 11, _forTrack0);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "div", 8)(52, "div", 9)(53, "h2");
    \u0275\u0275text(54, "Demandes h\xF4pitaux");
    \u0275\u0275domElementEnd()();
    \u0275\u0275repeaterCreate(55, CenterDashboardComponent_For_56_Template, 8, 5, "div", 12, _forTrack1);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "div", 13)(58, "div", 8)(59, "h3");
    \u0275\u0275text(60, "\u{1F465} Donneurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(61, "p");
    \u0275\u0275text(62, "G\xE9rer les profils, disponibilit\xE9s et historique.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(63, "button", 10);
    \u0275\u0275text(64, "G\xE9rer les donneurs");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(65, "div", 8)(66, "h3");
    \u0275\u0275text(67, "\u{1F4C5} Rendez-vous");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(68, "p");
    \u0275\u0275text(69, "Organiser les cr\xE9neaux de collecte.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(70, "button", 10);
    \u0275\u0275text(71, "G\xE9rer les rendez-vous");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(72, "div", 8)(73, "h3");
    \u0275\u0275text(74, "\u{1F916} Pr\xE9diction ML");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(75, "p");
    \u0275\u0275text(76, "Anticiper les besoins en sang par groupe.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(77, "button", 14);
    \u0275\u0275text(78, "Voir pr\xE9dictions");
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(49);
    \u0275\u0275repeater(ctx.stock);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.requests);
  }
}, styles: ["\n\n.stock[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 55px 1fr auto;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.type[_ngcontent-%COMP%] {\n  font-weight: 800;\n  color: var(--primary);\n}\n.request[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--border);\n}\n.request[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n/*# sourceMappingURL=center-dashboard.component.css.map */"] });
var CenterDashboardComponent = _CenterDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CenterDashboardComponent, [{
    type: Component,
    args: [{ standalone: true, template: `<div class="container page"><div class="page-title"><div><h1>Espace Centre de don</h1><p>Stock, demandes, donneurs et rendez-vous.</p></div><button class="btn btn-primary" (click)="launchCall()">\u{1F4E3} Lancer un appel</button></div>
<div class="grid grid-4"><div class="card stat"><div><span>Stock total</span><div class="number">150</div></div><div class="icon">\u{1FA78}</div></div><div class="card stat"><div><span>Donneurs</span><div class="number">1 280</div></div><div class="icon">\u{1F465}</div></div><div class="card stat"><div><span>Rendez-vous</span><div class="number">18</div></div><div class="icon">\u{1F4C5}</div></div><div class="card stat"><div><span>Demandes</span><div class="number">7</div></div><div class="icon">\u{1F4CB}</div></div></div>
<div class="section grid grid-2"><div class="card"><div class="section-head"><h2>Stock sanguin</h2><button class="btn btn-secondary">G\xE9rer</button></div>@for(s of stock;track s[0]){<div class="stock"><span class="type">{{s[0]}}</span><strong>{{s[1]}} poches</strong><span class="badge" [class.badge-danger]="s[2]==='Critique'" [class.badge-warning]="s[2]==='Faible'" [class.badge-success]="s[2]==='Normal'">{{s[2]}}</span></div>}</div>
<div class="card"><div class="section-head"><h2>Demandes h\xF4pitaux</h2></div>@for(r of requests;track r.id){<div class="request"><div><strong>#{{r.id}} \xB7 {{r.hospital}}</strong><p>{{r.type}} \xB7 {{r.qty}} poches \xB7 {{r.urgency}}</p></div><button class="btn btn-outline" (click)="respond(r.id)">R\xE9pondre</button></div>}</div></div>
<div class="section grid grid-3"><div class="card"><h3>\u{1F465} Donneurs</h3><p>G\xE9rer les profils, disponibilit\xE9s et historique.</p><button class="btn btn-secondary">G\xE9rer les donneurs</button></div><div class="card"><h3>\u{1F4C5} Rendez-vous</h3><p>Organiser les cr\xE9neaux de collecte.</p><button class="btn btn-secondary">G\xE9rer les rendez-vous</button></div><div class="card"><h3>\u{1F916} Pr\xE9diction ML</h3><p>Anticiper les besoins en sang par groupe.</p><button class="btn btn-primary">Voir pr\xE9dictions</button></div></div>
</div>
`, styles: ["/* angular:styles/component:css;f98a9b724d2ca7a49339b0ddd7349ac7ebd871ca1b8fec964d7951237e6ad27d;C:/Users/lenovo/blood-donation-platform-angular-template-fixed/src/app/features/center/center-dashboard.component.ts */\n.stock {\n  display: grid;\n  grid-template-columns: 55px 1fr auto;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border);\n}\n.type {\n  font-weight: 800;\n  color: var(--primary);\n}\n.request {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 14px 0;\n  border-bottom: 1px solid var(--border);\n}\n.request p {\n  margin: 4px 0 0;\n  color: var(--muted);\n  font-size: 13px;\n}\n/*# sourceMappingURL=center-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CenterDashboardComponent, { className: "CenterDashboardComponent", filePath: "src/app/features/center/center-dashboard.component.ts", lineNumber: 3 });
})();
export {
  CenterDashboardComponent
};
//# sourceMappingURL=chunk-6TFITOKN.js.map
