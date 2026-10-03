import {
  Router
} from "./chunk-FUH66JDF.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-YYCSYC6E.js";

// src/app/core/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor(router) {
    this.router = router;
    this.key = "bloodcare_user";
  }
  login(email, password, role) {
    if (!email || !password)
      return false;
    const user = { id: 1, firstName: "Utilisateur", lastName: "BloodCare", email, role };
    localStorage.setItem(this.key, JSON.stringify(user));
    return true;
  }
  signup(firstName, lastName, email, role) {
    const user = { id: Date.now(), firstName, lastName, email, role };
    localStorage.setItem(this.key, JSON.stringify(user));
    return true;
  }
  user() {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }
  isLoggedIn() {
    return !!this.user();
  }
  logout() {
    localStorage.removeItem(this.key);
    this.router.navigate(["/"]);
  }
  dashboardLink() {
    const role = this.user()?.role;
    return role === "HOSPITAL" ? "/dashboard/hospital" : role === "CENTER" ? "/dashboard/center" : role === "ADMIN" ? "/dashboard/admin" : "/dashboard/donor";
  }
};
_AuthService.\u0275fac = function AuthService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuthService)(\u0275\u0275inject(Router));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: Router }], null);
})();

export {
  AuthService
};
//# sourceMappingURL=chunk-5UYVT5TD.js.map
