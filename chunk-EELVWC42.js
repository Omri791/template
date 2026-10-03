import {
  BloodTypeBadgeComponent
} from "./chunk-JJ46FVVU.js";
import {
  RouterLink
} from "./chunk-FUH66JDF.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YYCSYC6E.js";

// src/app/shared/components/section-title/section-title.component.ts
var _SectionTitleComponent = class _SectionTitleComponent {
  constructor() {
    this.eyebrow = "";
    this.title = "";
    this.description = "";
  }
};
_SectionTitleComponent.\u0275fac = function SectionTitleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SectionTitleComponent)();
};
_SectionTitleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionTitleComponent, selectors: [["app-section-title"]], inputs: { eyebrow: "eyebrow", title: "title", description: "description" }, decls: 7, vars: 3, consts: [[1, "title"]], template: function SectionTitleComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.description);
  }
}, styles: ["\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n}\n.title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  margin: 7px 0;\n}\n.title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  margin: 0;\n}\n/*# sourceMappingURL=section-title.component.css.map */"] });
var SectionTitleComponent = _SectionTitleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionTitleComponent, [{
    type: Component,
    args: [{ selector: "app-section-title", standalone: true, template: `<div class="title"><span>{{eyebrow}}</span><h2>{{title}}</h2><p>{{description}}</p></div>`, styles: ["/* angular:styles/component:css;8bfa539ae49f28e712dc9eebaf1151c17751685b47a2fdedc03abcf4385992c6;C:/Users/lenovo/blood-donation-platform-angular-template-fixed/src/app/shared/components/section-title/section-title.component.ts */\n.title {\n  text-align: center;\n  margin-bottom: 28px;\n}\n.title span {\n  color: var(--primary);\n  font-size: 12px;\n  text-transform: uppercase;\n  font-weight: 800;\n  letter-spacing: 1.5px;\n}\n.title h2 {\n  font-size: 30px;\n  margin: 7px 0;\n}\n.title p {\n  color: var(--muted);\n  margin: 0;\n}\n/*# sourceMappingURL=section-title.component.css.map */\n"] }]
  }], null, { eyebrow: [{
    type: Input
  }], title: [{
    type: Input
  }], description: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionTitleComponent, { className: "SectionTitleComponent", filePath: "src/app/shared/components/section-title/section-title.component.ts", lineNumber: 9 });
})();

// src/app/features/home/home.component.ts
var _HomeComponent = class _HomeComponent {
};
_HomeComponent.\u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HomeComponent)();
};
_HomeComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["ng-component"]], decls: 97, vars: 0, consts: [[1, "hero"], [1, "container", "hero-grid"], [1, "eyebrow"], [1, "hero-actions"], ["routerLink", "/signup", 1, "btn", "btn-primary"], ["routerLink", "/about", 1, "btn", "btn-secondary"], [1, "trust"], [1, "hero-card"], [1, "pulse"], [1, "blood-row"], ["type", "A+"], ["type", "O+"], ["type", "B+"], ["type", "AB+"], [1, "container", "page"], ["eyebrow", "Notre mission", "title", "Une plateforme pour tous les acteurs", "description", "Un espace adapt\xE9 aux besoins de chaque utilisateur."], [1, "grid", "grid-4"], [1, "card", "feature"], [1, "ico"], ["routerLink", "/dashboard/hospital"], ["routerLink", "/dashboard/center"], ["routerLink", "/dashboard/donor"], ["routerLink", "/dashboard/admin"], [1, "stats"], [1, "container", "grid", "grid-4"]], template: function HomeComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
    \u0275\u0275text(4, "Syst\xE8me intelligent de gestion des dons");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6, "Chaque don peut");
    \u0275\u0275element(7, "br");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "sauver une vie.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "BloodCare connecte les donneurs, centres de don et h\xF4pitaux pour rendre la gestion du sang plus rapide, simple et efficace.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 3)(13, "a", 4);
    \u0275\u0275text(14, "Devenir donneur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 5);
    \u0275\u0275text(16, "D\xE9couvrir la plateforme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 6)(18, "span");
    \u0275\u0275text(19, "\u2713 Don s\xE9curis\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\u2713 Suivi en temps r\xE9el");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23, "\u2713 Centres connect\xE9s");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 7)(25, "div", 8);
    \u0275\u0275text(26, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Besoin de sang ?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Les centres peuvent publier et suivre les demandes des h\xF4pitaux.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9);
    \u0275\u0275element(32, "app-blood-type-badge", 10)(33, "app-blood-type-badge", 11)(34, "app-blood-type-badge", 12)(35, "app-blood-type-badge", 13);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "section", 14);
    \u0275\u0275element(37, "app-section-title", 15);
    \u0275\u0275elementStart(38, "div", 16)(39, "div", 17)(40, "div", 18);
    \u0275\u0275text(41, "\u{1F3E5}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "h3");
    \u0275\u0275text(43, "H\xF4pital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45, "Cr\xE9er et suivre les demandes de sang, consulter les notifications.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "a", 19);
    \u0275\u0275text(47, "Espace h\xF4pital \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 17)(49, "div", 18);
    \u0275\u0275text(50, "\u{1FA78}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "h3");
    \u0275\u0275text(52, "Centre de don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "p");
    \u0275\u0275text(54, "G\xE9rer le stock, les donneurs, rendez-vous et demandes.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "a", 20);
    \u0275\u0275text(56, "Espace centre \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 17)(58, "div", 18);
    \u0275\u0275text(59, "\u2764\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "h3");
    \u0275\u0275text(61, "Donneur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "p");
    \u0275\u0275text(63, "G\xE9rer sa disponibilit\xE9, ses rendez-vous et son historique.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "a", 21);
    \u0275\u0275text(65, "Espace donneur \u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "div", 17)(67, "div", 18);
    \u0275\u0275text(68, "\u2699\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "h3");
    \u0275\u0275text(70, "Administrateur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72, "Administrer les utilisateurs, h\xF4pitaux et centres.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "a", 22);
    \u0275\u0275text(74, "Administration \u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(75, "section", 23)(76, "div", 24)(77, "div")(78, "strong");
    \u0275\u0275text(79, "2 540+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span");
    \u0275\u0275text(81, "Donneurs inscrits");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "div")(83, "strong");
    \u0275\u0275text(84, "36");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "span");
    \u0275\u0275text(86, "Centres connect\xE9s");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "div")(88, "strong");
    \u0275\u0275text(89, "128");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91, "Demandes trait\xE9es");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(92, "div")(93, "strong");
    \u0275\u0275text(94, "98%");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "span");
    \u0275\u0275text(96, "Demandes suivies");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [RouterLink, SectionTitleComponent, BloodTypeBadgeComponent], styles: ['\n\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #fff,\n      #fff4f4);\n  padding: 75px 0 65px;\n}\n.hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 70px;\n  align-items: center;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 56px;\n  line-height: 1.05;\n  margin: 15px 0;\n}\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--primary);\n}\n.hero[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--muted);\n  max-width: 650px;\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin: 25px 0;\n}\n.trust[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  color: #5d6872;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #f0d1d1;\n  border-radius: 28px;\n  padding: 42px;\n  box-shadow: 0 25px 70px rgba(160, 35, 35, .13);\n  text-align: center;\n}\n.pulse[_ngcontent-%COMP%] {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: #fff0f0;\n  color: var(--primary);\n  display: grid;\n  place-items: center;\n  font-size: 55px;\n  margin: 0 auto 20px;\n}\n.blood-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 24px;\n}\n.feature[_ngcontent-%COMP%]   .ico[_ngcontent-%COMP%] {\n  font-size: 30px;\n}\n.feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 12px 0 6px;\n}\n.feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 13px;\n  min-height: 62px;\n}\n.feature[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n  font-size: 13px;\n}\n.stats[_ngcontent-%COMP%] {\n  background: white;\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n  padding: 30px 0;\n}\n.stats[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 32px "Syne";\n  color: var(--primary);\n}\n.stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 13px;\n}\n@media (max-width: 800px) {\n  .hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .trust[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */'] });
var HomeComponent = _HomeComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [RouterLink, SectionTitleComponent, BloodTypeBadgeComponent], template: '<section class="hero">\n  <div class="container hero-grid">\n    <div>\n      <span class="eyebrow">Syst\xE8me intelligent de gestion des dons</span>\n      <h1>Chaque don peut<br><strong>sauver une vie.</strong></h1>\n      <p>BloodCare connecte les donneurs, centres de don et h\xF4pitaux pour rendre la gestion du sang plus rapide, simple et efficace.</p>\n      <div class="hero-actions"><a routerLink="/signup" class="btn btn-primary">Devenir donneur</a><a routerLink="/about" class="btn btn-secondary">D\xE9couvrir la plateforme</a></div>\n      <div class="trust"><span>\u2713 Don s\xE9curis\xE9</span><span>\u2713 Suivi en temps r\xE9el</span><span>\u2713 Centres connect\xE9s</span></div>\n    </div>\n    <div class="hero-card">\n      <div class="pulse">\u2665</div>\n      <h3>Besoin de sang ?</h3><p>Les centres peuvent publier et suivre les demandes des h\xF4pitaux.</p>\n      <div class="blood-row"><app-blood-type-badge type="A+" /><app-blood-type-badge type="O+" /><app-blood-type-badge type="B+" /><app-blood-type-badge type="AB+" /></div>\n    </div>\n  </div>\n</section>\n\n<section class="container page">\n  <app-section-title eyebrow="Notre mission" title="Une plateforme pour tous les acteurs" description="Un espace adapt\xE9 aux besoins de chaque utilisateur." />\n  <div class="grid grid-4">\n    <div class="card feature"><div class="ico">\u{1F3E5}</div><h3>H\xF4pital</h3><p>Cr\xE9er et suivre les demandes de sang, consulter les notifications.</p><a routerLink="/dashboard/hospital">Espace h\xF4pital \u2192</a></div>\n    <div class="card feature"><div class="ico">\u{1FA78}</div><h3>Centre de don</h3><p>G\xE9rer le stock, les donneurs, rendez-vous et demandes.</p><a routerLink="/dashboard/center">Espace centre \u2192</a></div>\n    <div class="card feature"><div class="ico">\u2764\uFE0F</div><h3>Donneur</h3><p>G\xE9rer sa disponibilit\xE9, ses rendez-vous et son historique.</p><a routerLink="/dashboard/donor">Espace donneur \u2192</a></div>\n    <div class="card feature"><div class="ico">\u2699\uFE0F</div><h3>Administrateur</h3><p>Administrer les utilisateurs, h\xF4pitaux et centres.</p><a routerLink="/dashboard/admin">Administration \u2192</a></div>\n  </div>\n</section>\n\n<section class="stats"><div class="container grid grid-4"><div><strong>2 540+</strong><span>Donneurs inscrits</span></div><div><strong>36</strong><span>Centres connect\xE9s</span></div><div><strong>128</strong><span>Demandes trait\xE9es</span></div><div><strong>98%</strong><span>Demandes suivies</span></div></div></section>\n', styles: ['/* src/app/features/home/home.component.css */\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #fff,\n      #fff4f4);\n  padding: 75px 0 65px;\n}\n.hero-grid {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 70px;\n  align-items: center;\n}\n.eyebrow {\n  color: var(--primary);\n  font-weight: 800;\n  font-size: 13px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.hero h1 {\n  font-size: 56px;\n  line-height: 1.05;\n  margin: 15px 0;\n}\n.hero h1 strong {\n  color: var(--primary);\n}\n.hero p {\n  font-size: 17px;\n  color: var(--muted);\n  max-width: 650px;\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  margin: 25px 0;\n}\n.trust {\n  display: flex;\n  gap: 20px;\n  color: #5d6872;\n  font-size: 12px;\n  font-weight: 600;\n}\n.hero-card {\n  background: white;\n  border: 1px solid #f0d1d1;\n  border-radius: 28px;\n  padding: 42px;\n  box-shadow: 0 25px 70px rgba(160, 35, 35, .13);\n  text-align: center;\n}\n.pulse {\n  width: 110px;\n  height: 110px;\n  border-radius: 50%;\n  background: #fff0f0;\n  color: var(--primary);\n  display: grid;\n  place-items: center;\n  font-size: 55px;\n  margin: 0 auto 20px;\n}\n.blood-row {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  margin-top: 24px;\n}\n.feature .ico {\n  font-size: 30px;\n}\n.feature h3 {\n  margin: 12px 0 6px;\n}\n.feature p {\n  color: var(--muted);\n  font-size: 13px;\n  min-height: 62px;\n}\n.feature a {\n  color: var(--primary);\n  font-weight: 700;\n  font-size: 13px;\n}\n.stats {\n  background: white;\n  border-top: 1px solid var(--border);\n  border-bottom: 1px solid var(--border);\n  padding: 30px 0;\n}\n.stats .grid > div {\n  text-align: center;\n}\n.stats strong {\n  display: block;\n  font: 800 32px "Syne";\n  color: var(--primary);\n}\n.stats span {\n  color: var(--muted);\n  font-size: 13px;\n}\n@media (max-width: 800px) {\n  .hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .hero h1 {\n    font-size: 40px;\n  }\n  .trust {\n    flex-wrap: wrap;\n  }\n}\n/*# sourceMappingURL=home.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home.component.ts", lineNumber: 12 });
})();
export {
  HomeComponent
};
//# sourceMappingURL=chunk-EELVWC42.js.map
