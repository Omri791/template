import {
  ArticleService
} from "./chunk-Z6USI5TF.js";
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
  ɵɵtextInterpolate
} from "./chunk-YYCSYC6E.js";

// src/app/features/articles/article-detail/article-detail.component.ts
function ArticleDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 1)(1, "a", 3);
    \u0275\u0275text(2, "\u2190 Retour aux articles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "small");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.article.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.article.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.article.date);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.article.excerpt);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.article.content);
  }
}
function ArticleDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275text(1, "Article introuvable.");
    \u0275\u0275elementEnd();
  }
}
var _ArticleDetailComponent = class _ArticleDetailComponent {
  constructor(route, service) {
    const id = Number(route.snapshot.paramMap.get("id"));
    service.getById(id).subscribe((a) => this.article = a);
  }
};
_ArticleDetailComponent.\u0275fac = function ArticleDetailComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ArticleService));
};
_ArticleDetailComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ArticleDetailComponent, selectors: [["ng-component"]], decls: 3, vars: 1, consts: [[1, "container", "page"], [1, "card", "detail"], [1, "empty"], ["routerLink", "/articles"], [1, "badge", "badge-danger"], [1, "lead"], [1, "content"]], template: function ArticleDetailComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, ArticleDetailComponent_Conditional_1_Template, 14, 5, "article", 1)(2, ArticleDetailComponent_Conditional_2_Template, 2, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.article ? 1 : 2);
  }
}, dependencies: [RouterLink], styles: ["\n\n.detail[_ngcontent-%COMP%] {\n  max-width: 850px;\n  margin: auto;\n}\n.detail[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin: 20px 0 5px;\n}\n.detail[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n.detail[_ngcontent-%COMP%]    > .badge[_ngcontent-%COMP%] {\n  margin-top: 25px;\n}\n.detail[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n.lead[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: var(--muted);\n  margin-top: 30px;\n}\n.content[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.9;\n}\n/*# sourceMappingURL=article-detail.component.css.map */"] });
var ArticleDetailComponent = _ArticleDetailComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleDetailComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [RouterLink], template: '<div class="container page">\n  @if(article){<article class="card detail"><a routerLink="/articles">\u2190 Retour aux articles</a><span class="badge badge-danger">{{article.category}}</span><h1>{{article.title}}</h1><small>{{article.date}}</small><p class="lead">{{article.excerpt}}</p><div class="content"><p>{{article.content}}</p></div></article>} @else {<div class="empty">Article introuvable.</div>}\n</div>\n', styles: ["/* src/app/features/articles/article-detail/article-detail.component.css */\n.detail {\n  max-width: 850px;\n  margin: auto;\n}\n.detail h1 {\n  font-size: 40px;\n  margin: 20px 0 5px;\n}\n.detail > a {\n  color: var(--primary);\n  font-weight: 700;\n}\n.detail > .badge {\n  margin-top: 25px;\n}\n.detail small {\n  color: var(--muted);\n}\n.lead {\n  font-size: 18px;\n  color: var(--muted);\n  margin-top: 30px;\n}\n.content {\n  font-size: 16px;\n  line-height: 1.9;\n}\n/*# sourceMappingURL=article-detail.component.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: ArticleService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ArticleDetailComponent, { className: "ArticleDetailComponent", filePath: "src/app/features/articles/article-detail/article-detail.component.ts", lineNumber: 7 });
})();
export {
  ArticleDetailComponent
};
//# sourceMappingURL=chunk-OQVLR7FZ.js.map
