import {
  Injectable,
  of,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-YYCSYC6E.js";

// src/app/features/donations/donation.service.ts
var _DonationService = class _DonationService {
  constructor() {
    this.donations = [
      { id: 1, donorName: "Amine Ben Ali", bloodType: "O+", centerName: "Centre Tunis", date: "2026-09-27", status: "COMPLETED", quantity: 450 },
      { id: 2, donorName: "Sara Trabelsi", bloodType: "A+", centerName: "Centre Nabeul", date: "2026-09-29", status: "ACCEPTED", quantity: 450 },
      { id: 3, donorName: "Yassine Gharbi", bloodType: "O-", centerName: "Centre Sousse", date: "2026-10-03", status: "PENDING", quantity: 450 }
    ];
  }
  getAll() {
    return of(this.donations);
  }
  getById(id) {
    return of(this.donations.find((d) => d.id === id));
  }
};
_DonationService.\u0275fac = function DonationService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DonationService)();
};
_DonationService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DonationService, factory: _DonationService.\u0275fac, providedIn: "root" });
var DonationService = _DonationService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DonationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DonationService
};
//# sourceMappingURL=chunk-PMIV4EBA.js.map
