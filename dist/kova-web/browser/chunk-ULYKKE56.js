import {
  environment
} from "./chunk-E3BMGIF5.js";
import {
  HttpClient
} from "./chunk-YWOJPOKT.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-H2OO3OVH.js";

// src/app/core/services/profile.ts
var Profile = class _Profile {
  http = inject(HttpClient);
  base = `${environment.apiUrl}/profile`;
  get() {
    return this.http.get(this.base);
  }
  update(fullName, phone, avatarUrl) {
    return this.http.put(this.base, { fullName, phone, avatarUrl });
  }
  changePassword(currentPassword, newPassword) {
    return this.http.post(`${this.base}/password`, { currentPassword, newPassword });
  }
  addresses() {
    return this.http.get(`${this.base}/addresses`);
  }
  saveAddress(address) {
    return this.http.post(`${this.base}/addresses`, address);
  }
  deleteAddress(id) {
    return this.http.delete(`${this.base}/addresses/${id}`);
  }
  static \u0275fac = function Profile_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Profile)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Profile, factory: _Profile.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Profile, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  Profile
};
//# sourceMappingURL=chunk-ULYKKE56.js.map
