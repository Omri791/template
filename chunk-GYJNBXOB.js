import {
  ArticleService
} from "./chunk-Z6USI5TF.js";
import {
  RouterLink
} from "./chunk-FUH66JDF.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-YYCSYC6E.js";

// src/app/features/articles/article-list/article-list.component.ts
var _c0 = (a0) => ["/articles", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ArticleListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 3)(1, "div", 4);
    \u0275\u0275text(2, "\u{1FA78}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "small");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 6);
    \u0275\u0275text(12, "Lire l'article \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const article_r1 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(article_r1.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.excerpt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(article_r1.date);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c0, article_r1.id));
  }
}
var _ArticleListComponent = class _ArticleListComponent {
  constructor(service) {
    this.articles = [];
    service.getAll().subscribe((a) => this.articles = a);
  }
};
_ArticleListComponent.\u0275fac = function ArticleListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleListComponent)(\u0275\u0275directiveInject(ArticleService));
};
_ArticleListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleListComponent, selectors: [["ng-component"]], decls: 10, vars: 0, consts: [[1, "container", "page"], [1, "page-title"], [1, "grid", "grid-3"], [1, "card", "article"], [1, "cover"], [1, "badge", "badge-danger"], [3, "routerLink"]], template: function ArticleListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
    \u0275\u0275text(4, "Articles & conseils");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Informations utiles sur le don et la sant\xE9.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 2);
    \u0275\u0275repeaterCreate(8, ArticleListComponent_For_9_Template, 13, 7, "article", 3, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.articles);
  }
}, dependencies: [RouterLink], styles: ["\n\n.article[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cover[_ngcontent-%COMP%] {\n  height: 145px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff0f0,\n      #ffe1e1);\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 55px;\n}\n.article[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 4px 0;\n}\n.article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--muted);\n  font-size: 13px;\n  margin: 0;\n}\n.article[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #8a949d;\n}\n.article[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n  font-size: 13px;\n  margin-top: auto;\n}\n/*# sourceMappingURL=article-list.component.css.map */"] });
var ArticleListComponent = _ArticleListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleListComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [RouterLink], template: `<div class="container page">
  <div class="page-title"><div><h1>Articles & conseils</h1><p>Informations utiles sur le don et la sant\xE9.</p></div></div>
  <div class="grid grid-3">
    @for(article of articles; track article.id){
      <article class="card article">
        <div class="cover">\u{1FA78}</div><span class="badge badge-danger">{{article.category}}</span><h3>{{article.title}}</h3><p>{{article.excerpt}}</p><small>{{article.date}}</small><a [routerLink]="['/articles',article.id]">Lire l'article \u2192</a>
      </article>
    }
  </div>
</div>
`, styles: ["/* src/app/features/articles/article-list/article-list.component.css */\n.article {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.cover {\n  height: 145px;\n  background:\n    linear-gradient(\n      135deg,\n      #fff0f0,\n      #ffe1e1);\n  border-radius: 12px;\n  display: grid;\n  place-items: center;\n  font-size: 55px;\n}\n.article h3 {\n  margin: 4px 0;\n}\n.article p {\n  color: var(--muted);\n  font-size: 13px;\n  margin: 0;\n}\n.article small {\n  color: #8a949d;\n}\n.article a {\n  color: var(--primary);\n  font-weight: 700;\n  font-size: 13px;\n  margin-top: auto;\n}\n/*# sourceMappingURL=article-list.component.css.map */\n"] }]
  }], () => [{ type: ArticleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleListComponent, { className: "ArticleListComponent", filePath: "src/app/features/articles/article-list/article-list.component.ts", lineNumber: 11 });
})();
export {
  ArticleListComponent
};
//# sourceMappingURL=chunk-GYJNBXOB.js.map
