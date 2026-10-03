import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-S4QUU34R.js";
import {
  AuthService
} from "./chunk-5UYVT5TD.js";
import {
  Router,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYCSYC6E.js";

// src/app/features/auth/login/login.component.ts
function LoginComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
var _LoginComponent = class _LoginComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.email = "";
    this.password = "";
    this.role = "DONOR";
    this.error = "";
  }
  submit() {
    if (this.auth.login(this.email, this.password, this.role)) {
      this.router.navigateByUrl(this.auth.dashboardLink());
    } else
      this.error = "Veuillez remplir tous les champs.";
  }
};
_LoginComponent.\u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_LoginComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["ng-component"]], decls: 36, vars: 4, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-logo"], [1, "error"], [3, "ngSubmit"], [1, "form-group"], ["type", "email", "name", "email", "required", "", "placeholder", "vous@email.com", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "placeholder", "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022", 3, "ngModelChange", "ngModel"], ["name", "role", 3, "ngModelChange", "ngModel"], ["value", "DONOR"], ["value", "HOSPITAL"], ["value", "CENTER"], ["value", "ADMIN"], ["type", "submit", 1, "btn", "btn-primary", "full"], [1, "bottom"], ["routerLink", "/signup"]], template: function LoginComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Bienvenue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Connectez-vous \xE0 votre espace BloodCare.");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LoginComponent_Conditional_8_Template, 2, 1, "div", 3);
    \u0275\u0275elementStart(9, "form", 4);
    \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_9_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(10, "div", 5)(11, "label");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "label");
    \u0275\u0275text(16, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 5)(19, "label");
    \u0275\u0275text(20, "Type de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_select_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
      return $event;
    });
    \u0275\u0275elementStart(22, "option", 9);
    \u0275\u0275text(23, "Donneur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "option", 10);
    \u0275\u0275text(25, "H\xF4pital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "option", 11);
    \u0275\u0275text(27, "Centre de don");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "option", 12);
    \u0275\u0275text(29, "Administrateur");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "button", 13);
    \u0275\u0275text(31, "Se connecter");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "p", 14);
    \u0275\u0275text(33, "Pas encore de compte ? ");
    \u0275\u0275elementStart(34, "a", 15);
    \u0275\u0275text(35, "Cr\xE9er un compte");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275conditional(ctx.error ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.role);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 650px;\n  display: grid;\n  place-items: center;\n  padding: 50px 20px;\n  background: #fff5f5;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(440px, 100%);\n}\n.auth-logo[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 18px 0 5px;\n}\n.auth-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n.auth-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  margin-top: 24px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.error[_ngcontent-%COMP%] {\n  background: #fff0f0;\n  color: var(--danger);\n  padding: 10px;\n  border-radius: 9px;\n}\n.bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n}\n.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=login.component.css.map */"] });
var LoginComponent = _LoginComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [FormsModule, RouterLink], template: '<div class="auth-page"><div class="auth-card card"><div class="auth-logo">\u2665</div><h1>Bienvenue</h1><p>Connectez-vous \xE0 votre espace BloodCare.</p>@if(error){<div class="error">{{error}}</div>}<form (ngSubmit)="submit()"><div class="form-group"><label>Email</label><input type="email" [(ngModel)]="email" name="email" required placeholder="vous@email.com"></div><div class="form-group"><label>Mot de passe</label><input type="password" [(ngModel)]="password" name="password" required placeholder="\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"></div><div class="form-group"><label>Type de compte</label><select [(ngModel)]="role" name="role"><option value="DONOR">Donneur</option><option value="HOSPITAL">H\xF4pital</option><option value="CENTER">Centre de don</option><option value="ADMIN">Administrateur</option></select></div><button class="btn btn-primary full" type="submit">Se connecter</button></form><p class="bottom">Pas encore de compte ? <a routerLink="/signup">Cr\xE9er un compte</a></p></div></div>\n', styles: ["/* src/app/features/auth/login/login.component.css */\n.auth-page {\n  min-height: 650px;\n  display: grid;\n  place-items: center;\n  padding: 50px 20px;\n  background: #fff5f5;\n}\n.auth-card {\n  width: min(440px, 100%);\n}\n.auth-logo {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.auth-card h1 {\n  margin: 18px 0 5px;\n}\n.auth-card > p {\n  color: var(--muted);\n}\n.auth-card form {\n  display: grid;\n  gap: 16px;\n  margin-top: 24px;\n}\n.full {\n  width: 100%;\n  justify-content: center;\n}\n.error {\n  background: #fff0f0;\n  color: var(--danger);\n  padding: 10px;\n  border-radius: 9px;\n}\n.bottom {\n  text-align: center;\n  font-size: 13px;\n}\n.bottom a {\n  color: var(--primary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=login.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/features/auth/login/login.component.ts", lineNumber: 8 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-JMB4LUBD.js.map
