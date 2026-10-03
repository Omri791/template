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
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-YYCSYC6E.js";

// src/app/features/auth/signup/signup.component.ts
var _SignupComponent = class _SignupComponent {
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
    this.firstName = "";
    this.lastName = "";
    this.email = "";
    this.password = "";
    this.role = "DONOR";
  }
  submit() {
    if (this.firstName && this.lastName && this.email && this.password) {
      this.auth.signup(this.firstName, this.lastName, this.email, this.role);
      this.router.navigateByUrl(this.auth.dashboardLink());
    }
  }
};
_SignupComponent.\u0275fac = function SignupComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SignupComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(Router));
};
_SignupComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SignupComponent, selectors: [["ng-component"]], decls: 42, vars: 5, consts: [[1, "auth-page"], [1, "auth-card", "card"], [1, "auth-logo"], [3, "ngSubmit"], [1, "form-grid"], [1, "form-group"], ["name", "firstName", "required", "", 3, "ngModelChange", "ngModel"], ["name", "lastName", "required", "", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", 3, "ngModelChange", "ngModel"], ["name", "role", 3, "ngModelChange", "ngModel"], ["value", "DONOR"], ["value", "HOSPITAL"], ["value", "CENTER"], [1, "btn", "btn-primary", "full"], [1, "bottom"], ["routerLink", "/login"]], template: function SignupComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, "\u2665");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1");
    \u0275\u0275text(5, "Cr\xE9er un compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Choisissez votre r\xF4le sur la plateforme.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "form", 3);
    \u0275\u0275listener("ngSubmit", function SignupComponent_Template_form_ngSubmit_8_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(9, "div", 4)(10, "div", 5)(11, "label");
    \u0275\u0275text(12, "Pr\xE9nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.firstName, $event) || (ctx.firstName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "label");
    \u0275\u0275text(16, "Nom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 7);
    \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.lastName, $event) || (ctx.lastName = $event);
      return $event;
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 5)(19, "label");
    \u0275\u0275text(20, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 8);
    \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 5)(23, "label");
    \u0275\u0275text(24, "Mot de passe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 9);
    \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
      return $event;
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 5)(27, "label");
    \u0275\u0275text(28, "Type de compte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "select", 10);
    \u0275\u0275twoWayListener("ngModelChange", function SignupComponent_Template_select_ngModelChange_29_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
      return $event;
    });
    \u0275\u0275elementStart(30, "option", 11);
    \u0275\u0275text(31, "Donneur");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "option", 12);
    \u0275\u0275text(33, "H\xF4pital");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "option", 13);
    \u0275\u0275text(35, "Centre de don");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "button", 14);
    \u0275\u0275text(37, "Cr\xE9er mon compte");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "p", 15);
    \u0275\u0275text(39, "D\xE9j\xE0 inscrit ? ");
    \u0275\u0275elementStart(40, "a", 16);
    \u0275\u0275text(41, "Se connecter");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.lastName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.password);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.role);
  }
}, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: 650px;\n  display: grid;\n  place-items: center;\n  padding: 50px 20px;\n  background: #fff5f5;\n}\n.auth-card[_ngcontent-%COMP%] {\n  width: min(520px, 100%);\n}\n.auth-logo[_ngcontent-%COMP%] {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.auth-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 18px 0 5px;\n}\n.auth-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: var(--muted);\n}\n.auth-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n  margin-top: 24px;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.bottom[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n}\n.bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--primary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=signup.component.css.map */"] });
var SignupComponent = _SignupComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignupComponent, [{
    type: Component,
    args: [{ standalone: true, imports: [FormsModule, RouterLink], template: '<div class="auth-page"><div class="auth-card card"><div class="auth-logo">\u2665</div><h1>Cr\xE9er un compte</h1><p>Choisissez votre r\xF4le sur la plateforme.</p><form (ngSubmit)="submit()"><div class="form-grid"><div class="form-group"><label>Pr\xE9nom</label><input [(ngModel)]="firstName" name="firstName" required></div><div class="form-group"><label>Nom</label><input [(ngModel)]="lastName" name="lastName" required></div></div><div class="form-group"><label>Email</label><input type="email" [(ngModel)]="email" name="email" required></div><div class="form-group"><label>Mot de passe</label><input type="password" [(ngModel)]="password" name="password" required></div><div class="form-group"><label>Type de compte</label><select [(ngModel)]="role" name="role"><option value="DONOR">Donneur</option><option value="HOSPITAL">H\xF4pital</option><option value="CENTER">Centre de don</option></select></div><button class="btn btn-primary full">Cr\xE9er mon compte</button></form><p class="bottom">D\xE9j\xE0 inscrit ? <a routerLink="/login">Se connecter</a></p></div></div>\n', styles: ["/* src/app/features/auth/signup/signup.component.css */\n.auth-page {\n  min-height: 650px;\n  display: grid;\n  place-items: center;\n  padding: 50px 20px;\n  background: #fff5f5;\n}\n.auth-card {\n  width: min(520px, 100%);\n}\n.auth-logo {\n  width: 55px;\n  height: 55px;\n  border-radius: 16px;\n  background: var(--primary);\n  color: white;\n  display: grid;\n  place-items: center;\n  font-size: 28px;\n}\n.auth-card h1 {\n  margin: 18px 0 5px;\n}\n.auth-card > p {\n  color: var(--muted);\n}\n.auth-card form {\n  display: grid;\n  gap: 16px;\n  margin-top: 24px;\n}\n.full {\n  width: 100%;\n  justify-content: center;\n}\n.bottom {\n  text-align: center;\n  font-size: 13px;\n}\n.bottom a {\n  color: var(--primary);\n  font-weight: 700;\n}\n/*# sourceMappingURL=signup.component.css.map */\n"] }]
  }], () => [{ type: AuthService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SignupComponent, { className: "SignupComponent", filePath: "src/app/features/auth/signup/signup.component.ts", lineNumber: 8 });
})();
export {
  SignupComponent
};
//# sourceMappingURL=chunk-2KAHF6XZ.js.map
