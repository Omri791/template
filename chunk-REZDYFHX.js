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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-YYCSYC6E.js";

// src/app/features/donor/donor-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.date;
function DonorDashboardComponent_For_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "td")(8, "span", 15);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.time);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(a_r1.center);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(a_r1.status);
  }
}
var _DonorDashboardComponent = class _DonorDashboardComponent {
  constructor() {
    this.available = true;
    this.appointments = [{ date: "05 Oct 2026", time: "09:30", center: "Centre de don Nabeul", status: "CONFIRM\xC9" }, { date: "18 Nov 2026", time: "10:00", center: "Centre de don Tunis", status: "PLANIFI\xC9" }];
  }
  toggle() {
    this.available = !this.available;
  }
};
_DonorDashboardComponent.\u0275fac = function DonorDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DonorDashboardComponent)();
};
_DonorDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DonorDashboardComponent, selectors: [["ng-component"]], decls: 84, vars: 5, consts: [[1, "container", "page"], [1, "page-title"], [1, "btn", 3, "click"], [1, "grid", "grid-4"], [1, "card", "stat"], [1, "number"], [1, "icon"], [1, "section", "grid", "grid-2"], [1, "card"], [1, "section-head"], [1, "badge", "badge-danger"], [2, "display", "flex", "gap", "10px"], [1, "btn", "btn-primary"], [1, "btn", "btn-secondary"], [1, "card", "section"], [1, "badge", "badge-success"]], template: function DonorDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Mon espace donneur");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "G\xE9rez votre disponibilit\xE9, vos rendez-vous et vos dons.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "button", 2);
    \u0275\u0275domListener("click", function DonorDashboardComponent_Template_button_click_7_listener() {
      return ctx.toggle();
    });
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 3)(10, "div", 4)(11, "div")(12, "span");
    \u0275\u0275text(13, "Dons r\xE9alis\xE9s");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 5);
    \u0275\u0275text(15, "8");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 6);
    \u0275\u0275text(17, "\u2764\uFE0F");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 4)(19, "div")(20, "span");
    \u0275\u0275text(21, "Prochain don");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 5);
    \u0275\u0275text(23, "05/10");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 6);
    \u0275\u0275text(25, "\u{1F4C5}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div", 4)(27, "div")(28, "span");
    \u0275\u0275text(29, "Groupe");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 5);
    \u0275\u0275text(31, "O+");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 6);
    \u0275\u0275text(33, "\u{1FA78}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 4)(35, "div")(36, "span");
    \u0275\u0275text(37, "Notifications");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 5);
    \u0275\u0275text(39, "2");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "div", 6);
    \u0275\u0275text(41, "\u{1F514}");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(42, "div", 7)(43, "div", 8)(44, "div", 9)(45, "h2");
    \u0275\u0275text(46, "Appel du centre");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(47, "span", 10);
    \u0275\u0275text(48, "URGENT");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(49, "h3");
    \u0275\u0275text(50, "Besoin de O+ \xE0 Nabeul");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(51, "p");
    \u0275\u0275text(52, "Le centre recherche des donneurs O+ disponibles aujourd'hui.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "div", 11)(54, "button", 12);
    \u0275\u0275text(55, "Accepter");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(56, "button", 13);
    \u0275\u0275text(57, "Refuser");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(58, "div", 8)(59, "div", 9)(60, "h2");
    \u0275\u0275text(61, "Prendre rendez-vous");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(62, "p");
    \u0275\u0275text(63, "Choisissez un centre et une date pour votre prochain don.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(64, "button", 12);
    \u0275\u0275text(65, "Nouveau rendez-vous");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(66, "div", 14)(67, "div", 9)(68, "h2");
    \u0275\u0275text(69, "Mes rendez-vous");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(70, "table")(71, "thead")(72, "tr")(73, "th");
    \u0275\u0275text(74, "Date");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(75, "th");
    \u0275\u0275text(76, "Heure");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(77, "th");
    \u0275\u0275text(78, "Centre");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(79, "th");
    \u0275\u0275text(80, "Statut");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(81, "tbody");
    \u0275\u0275repeaterCreate(82, DonorDashboardComponent_For_83_Template, 10, 4, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275classProp("btn-primary", ctx.available)("btn-secondary", !ctx.available);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u25CF ", ctx.available ? "Je suis disponible" : "Indisponible");
    \u0275\u0275advance(74);
    \u0275\u0275repeater(ctx.appointments);
  }
}, encapsulation: 2 });
var DonorDashboardComponent = _DonorDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonorDashboardComponent, [{
    type: Component,
    args: [{ standalone: true, template: `<div class="container page"><div class="page-title"><div><h1>Mon espace donneur</h1><p>G\xE9rez votre disponibilit\xE9, vos rendez-vous et vos dons.</p></div><button class="btn" [class.btn-primary]="available" [class.btn-secondary]="!available" (click)="toggle()">\u25CF {{available?'Je suis disponible':'Indisponible'}}</button></div>
<div class="grid grid-4"><div class="card stat"><div><span>Dons r\xE9alis\xE9s</span><div class="number">8</div></div><div class="icon">\u2764\uFE0F</div></div><div class="card stat"><div><span>Prochain don</span><div class="number">05/10</div></div><div class="icon">\u{1F4C5}</div></div><div class="card stat"><div><span>Groupe</span><div class="number">O+</div></div><div class="icon">\u{1FA78}</div></div><div class="card stat"><div><span>Notifications</span><div class="number">2</div></div><div class="icon">\u{1F514}</div></div></div>
<div class="section grid grid-2"><div class="card"><div class="section-head"><h2>Appel du centre</h2><span class="badge badge-danger">URGENT</span></div><h3>Besoin de O+ \xE0 Nabeul</h3><p>Le centre recherche des donneurs O+ disponibles aujourd'hui.</p><div style="display:flex;gap:10px"><button class="btn btn-primary">Accepter</button><button class="btn btn-secondary">Refuser</button></div></div><div class="card"><div class="section-head"><h2>Prendre rendez-vous</h2></div><p>Choisissez un centre et une date pour votre prochain don.</p><button class="btn btn-primary">Nouveau rendez-vous</button></div></div>
<div class="card section"><div class="section-head"><h2>Mes rendez-vous</h2></div><table><thead><tr><th>Date</th><th>Heure</th><th>Centre</th><th>Statut</th></tr></thead><tbody>@for(a of appointments;track a.date){<tr><td>{{a.date}}</td><td>{{a.time}}</td><td>{{a.center}}</td><td><span class="badge badge-success">{{a.status}}</span></td></tr>}</tbody></table></div>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DonorDashboardComponent, { className: "DonorDashboardComponent", filePath: "src/app/features/donor/donor-dashboard.component.ts", lineNumber: 3 });
})();
export {
  DonorDashboardComponent
};
//# sourceMappingURL=chunk-REZDYFHX.js.map
