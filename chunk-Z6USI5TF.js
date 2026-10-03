import {
  Injectable,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YYCSYC6E.js";

// src/app/features/articles/article.service.ts
var _ArticleService = class _ArticleService {
  constructor() {
    this.articles = [
      { id: 1, title: "Pourquoi donner son sang ?", excerpt: "Comprendre l\u2019importance du don r\xE9gulier.", content: "Le don de sang contribue directement \xE0 la prise en charge de nombreux patients. Un don peut aider plusieurs personnes gr\xE2ce \xE0 la s\xE9paration des composants sanguins.", category: "Sensibilisation", date: "2026-09-10", image: "" },
      { id: 2, title: "Les groupes sanguins expliqu\xE9s", excerpt: "A+, O-, B+ : que signifient les groupes sanguins ?", content: "Les groupes sanguins sont d\xE9termin\xE9s par des antig\xE8nes pr\xE9sents \xE0 la surface des globules rouges. Leur compatibilit\xE9 est essentielle lors des transfusions.", category: "Sant\xE9", date: "2026-08-22", image: "" },
      { id: 3, title: "Bien se pr\xE9parer avant un don", excerpt: "Quelques conseils simples avant votre rendez-vous.", content: "Dormez suffisamment, mangez normalement et hydratez-vous. Suivez toujours les consignes donn\xE9es par le personnel du centre de don.", category: "Conseils", date: "2026-08-04", image: "" }
    ];
  }
  getAll() {
    return of(this.articles);
  }
  getById(id) {
    return of(this.articles.find((a) => a.id === id));
  }
};
_ArticleService.\u0275fac = function ArticleService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ArticleService)();
};
_ArticleService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ArticleService, factory: _ArticleService.\u0275fac, providedIn: "root" });
var ArticleService = _ArticleService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ArticleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ArticleService
};
//# sourceMappingURL=chunk-Z6USI5TF.js.map
