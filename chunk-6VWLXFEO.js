import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YYCSYC6E.js";

// src/app/features/admin/admin-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function AdminDashboardComponent_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "td")(6, "span", 11);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "td")(9, "button", 9);
    \u0275\u0275text(10, "Modifier");
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const u_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r1.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r1.status);
  }
}
var _AdminDashboardComponent = class _AdminDashboardComponent {
  constructor() {
    this.users = [{ name: "Amine Ben Ali", role: "Donneur", status: "Actif" }, { name: "H\xF4pital Charles Nicolle", role: "H\xF4pital", status: "Actif" }, { name: "Centre Tunis", role: "Centre", status: "Actif" }, { name: "Sara Trabelsi", role: "Donneur", status: "En attente" }];
  }
};
_AdminDashboardComponent.\u0275fac = function AdminDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdminDashboardComponent)();
};
_AdminDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminDashboardComponent, selectors: [["ng-component"]], decls: 81, vars: 0, consts: [[1, "container", "page"], [1, "page-title"], [1, "btn", "btn-primary"], [1, "grid", "grid-4"], [1, "card", "stat"], [1, "number"], [1, "icon"], [1, "section", "grid", "grid-3"], [1, "card"], [1, "btn", "btn-secondary"], [1, "card", "section", "table-wrap"], [1, "badge", "badge-success"]], template: function AdminDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Administration");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6, "Gestion globale de la plateforme.");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "button", 2);
    \u0275\u0275text(8, "+ Nouvel utilisateur");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "div", 3)(10, "div", 4)(11, "div")(12, "span");
    \u0275\u0275text(13, "Utilisateurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(14, "div", 5);
    \u0275\u0275text(15, "3 854");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(16, "div", 6);
    \u0275\u0275text(17, "\u{1F465}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(18, "div", 4)(19, "div")(20, "span");
    \u0275\u0275text(21, "H\xF4pitaux");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(22, "div", 5);
    \u0275\u0275text(23, "24");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(24, "div", 6);
    \u0275\u0275text(25, "\u{1F3E5}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(26, "div", 4)(27, "div")(28, "span");
    \u0275\u0275text(29, "Centres");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(30, "div", 5);
    \u0275\u0275text(31, "36");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(32, "div", 6);
    \u0275\u0275text(33, "\u{1FA78}");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(34, "div", 4)(35, "div")(36, "span");
    \u0275\u0275text(37, "Alertes");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(38, "div", 5);
    \u0275\u0275text(39, "7");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(40, "div", 6);
    \u0275\u0275text(41, "\u{1F514}");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(42, "div", 7)(43, "div", 8)(44, "h3");
    \u0275\u0275text(45, "\u{1F465} Utilisateurs");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(46, "p");
    \u0275\u0275text(47, "Cr\xE9er, modifier, activer ou d\xE9sactiver les comptes.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(48, "button", 9);
    \u0275\u0275text(49, "G\xE9rer");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(50, "div", 8)(51, "h3");
    \u0275\u0275text(52, "\u{1F3E5} H\xF4pitaux");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(53, "p");
    \u0275\u0275text(54, "G\xE9rer les \xE9tablissements partenaires.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(55, "button", 9);
    \u0275\u0275text(56, "G\xE9rer");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(57, "div", 8)(58, "h3");
    \u0275\u0275text(59, "\u{1FA78} Centres");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(60, "p");
    \u0275\u0275text(61, "G\xE9rer les centres de collecte.");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(62, "button", 9);
    \u0275\u0275text(63, "G\xE9rer");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(64, "div", 10)(65, "h2");
    \u0275\u0275text(66, "Utilisateurs r\xE9cents");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(67, "table")(68, "thead")(69, "tr")(70, "th");
    \u0275\u0275text(71, "Nom");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(72, "th");
    \u0275\u0275text(73, "R\xF4le");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(74, "th");
    \u0275\u0275text(75, "Statut");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(76, "th");
    \u0275\u0275text(77, "Action");
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(78, "tbody");
    \u0275\u0275repeaterCreate(79, AdminDashboardComponent_For_80_Template, 11, 3, "tr", null, _forTrack0);
    \u0275\u0275domElementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(79);
    \u0275\u0275repeater(ctx.users);
  }
}, encapsulation: 2 });
var AdminDashboardComponent = _AdminDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminDashboardComponent, [{
    type: Component,
    args: [{ standalone: true, template: '<div class="container page"><div class="page-title"><div><h1>Administration</h1><p>Gestion globale de la plateforme.</p></div><button class="btn btn-primary">+ Nouvel utilisateur</button></div>\n<div class="grid grid-4"><div class="card stat"><div><span>Utilisateurs</span><div class="number">3 854</div></div><div class="icon">\u{1F465}</div></div><div class="card stat"><div><span>H\xF4pitaux</span><div class="number">24</div></div><div class="icon">\u{1F3E5}</div></div><div class="card stat"><div><span>Centres</span><div class="number">36</div></div><div class="icon">\u{1FA78}</div></div><div class="card stat"><div><span>Alertes</span><div class="number">7</div></div><div class="icon">\u{1F514}</div></div></div>\n<div class="section grid grid-3"><div class="card"><h3>\u{1F465} Utilisateurs</h3><p>Cr\xE9er, modifier, activer ou d\xE9sactiver les comptes.</p><button class="btn btn-secondary">G\xE9rer</button></div><div class="card"><h3>\u{1F3E5} H\xF4pitaux</h3><p>G\xE9rer les \xE9tablissements partenaires.</p><button class="btn btn-secondary">G\xE9rer</button></div><div class="card"><h3>\u{1FA78} Centres</h3><p>G\xE9rer les centres de collecte.</p><button class="btn btn-secondary">G\xE9rer</button></div></div>\n<div class="card section table-wrap"><h2>Utilisateurs r\xE9cents</h2><table><thead><tr><th>Nom</th><th>R\xF4le</th><th>Statut</th><th>Action</th></tr></thead><tbody>@for(u of users;track u.name){<tr><td>{{u.name}}</td><td>{{u.role}}</td><td><span class="badge badge-success">{{u.status}}</span></td><td><button class="btn btn-secondary">Modifier</button></td></tr>}</tbody></table></div>\n</div>\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminDashboardComponent, { className: "AdminDashboardComponent", filePath: "src/app/features/admin/admin-dashboard.component.ts", lineNumber: 3 });
})();
export {
  AdminDashboardComponent
};
//# sourceMappingURL=chunk-6VWLXFEO.js.map
