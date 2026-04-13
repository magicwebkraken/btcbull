import { d as i, e as n, g as t, h as o } from "./chunk-AT2NUKJ3.js";
import { l as s } from "./chunk-UUTKIRVD.js";
var a = class {
  constructor(e) {
    (this.openModal = t.open),
      (this.closeModal = t.close),
      (this.subscribeModal = t.subscribe),
      (this.setTheme = o.setThemeConfig),
      o.setThemeConfig(e),
      n.setConfig(e),
      this.initUi();
  }
  initUi() {
    return s(this, null, function* () {
      if (typeof window < "u") {
        yield import("./chunk-XAP23XJM.js");
        let e = document.createElement("wcm-modal");
        document.body.insertAdjacentElement("beforeend", e),
          i.setIsUiLoaded(!0);
      }
    });
  }
};
export { a as WalletConnectModal };
