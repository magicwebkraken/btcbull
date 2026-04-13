import { a as xn } from "./chunk-4F6IZRL6.js";
import {
  a as Me,
  c as Nm,
  e as Sf,
  f as Se,
  g as rr,
  h as Kr,
  i as Je,
  j as Cs,
  l as R,
} from "./chunk-UUTKIRVD.js";
var Ma = {};
rr(Ma, {
  __assign: () => If,
  __asyncDelegator: () => lI,
  __asyncGenerator: () => hI,
  __asyncValues: () => fI,
  __await: () => Pa,
  __awaiter: () => nI,
  __classPrivateFieldGet: () => mI,
  __classPrivateFieldSet: () => yI,
  __createBinding: () => oI,
  __decorate: () => tI,
  __exportStar: () => aI,
  __extends: () => Zx,
  __generator: () => sI,
  __importDefault: () => gI,
  __importStar: () => pI,
  __makeTemplateObject: () => dI,
  __metadata: () => iI,
  __param: () => rI,
  __read: () => qm,
  __rest: () => eI,
  __spread: () => cI,
  __spreadArrays: () => uI,
  __values: () => Df,
});
function Zx(r, e) {
  xf(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function eI(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      e.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[n]) &&
        (t[i[n]] = r[i[n]]);
  return t;
}
function tI(r, e, t, i) {
  var n = arguments.length,
    o =
      n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(r, e, t, i);
  else
    for (var l = r.length - 1; l >= 0; l--)
      (c = r[l]) && (o = (n < 3 ? c(o) : n > 3 ? c(e, t, o) : c(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function rI(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function iI(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function nI(r, e, t, i) {
  function n(o) {
    return o instanceof t
      ? o
      : new t(function (c) {
          c(o);
        });
  }
  return new (t || (t = Promise))(function (o, c) {
    function l(y) {
      try {
        d(i.next(y));
      } catch (v) {
        c(v);
      }
    }
    function g(y) {
      try {
        d(i.throw(y));
      } catch (v) {
        c(v);
      }
    }
    function d(y) {
      y.done ? o(y.value) : n(y.value).then(l, g);
    }
    d((i = i.apply(r, e || [])).next());
  });
}
function sI(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    o,
    c;
  return (
    (c = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == "function" &&
      (c[Symbol.iterator] = function () {
        return this;
      }),
    c
  );
  function l(d) {
    return function (y) {
      return g([d, y]);
    };
  }
  function g(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          n &&
            (o =
              d[0] & 2
                ? n.return
                : d[0]
                ? n.throw || ((o = n.return) && o.call(n), 0)
                : n.next) &&
            !(o = o.call(n, d[1])).done)
        )
          return o;
        switch (((n = 0), o && (d = [d[0] & 2, o.value]), d[0])) {
          case 0:
          case 1:
            o = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (n = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((o = t.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!o || (d[1] > o[0] && d[1] < o[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < o[1]) {
              (t.label = o[1]), (o = d);
              break;
            }
            if (o && t.label < o[2]) {
              (t.label = o[2]), t.ops.push(d);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(r, t);
      } catch (y) {
        (d = [6, y]), (n = 0);
      } finally {
        i = o = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function oI(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function aI(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function Df(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function qm(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    n,
    o = [],
    c;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; ) o.push(n.value);
  } catch (l) {
    c = { error: l };
  } finally {
    try {
      n && !n.done && (t = i.return) && t.call(i);
    } finally {
      if (c) throw c.error;
    }
  }
  return o;
}
function cI() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(qm(arguments[e]));
  return r;
}
function uI() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), n = 0, e = 0; e < t; e++)
    for (var o = arguments[e], c = 0, l = o.length; c < l; c++, n++)
      i[n] = o[c];
  return i;
}
function Pa(r) {
  return this instanceof Pa ? ((this.v = r), this) : new Pa(r);
}
function hI(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    n,
    o = [];
  return (
    (n = {}),
    c("next"),
    c("throw"),
    c("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function c(A) {
    i[A] &&
      (n[A] = function (E) {
        return new Promise(function (P, N) {
          o.push([A, E, P, N]) > 1 || l(A, E);
        });
      });
  }
  function l(A, E) {
    try {
      g(i[A](E));
    } catch (P) {
      v(o[0][3], P);
    }
  }
  function g(A) {
    A.value instanceof Pa
      ? Promise.resolve(A.value.v).then(d, y)
      : v(o[0][2], A);
  }
  function d(A) {
    l("next", A);
  }
  function y(A) {
    l("throw", A);
  }
  function v(A, E) {
    A(E), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function lI(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(n, o) {
    e[n] = r[n]
      ? function (c) {
          return (t = !t)
            ? { value: Pa(r[n](c)), done: n === "return" }
            : o
            ? o(c)
            : c;
        }
      : o;
  }
}
function fI(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof Df == "function" ? Df(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(o) {
    t[o] =
      r[o] &&
      function (c) {
        return new Promise(function (l, g) {
          (c = r[o](c)), n(l, g, c.done, c.value);
        });
      };
  }
  function n(o, c, l, g) {
    Promise.resolve(g).then(function (d) {
      o({ value: d, done: l });
    }, c);
  }
}
function dI(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function pI(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function gI(r) {
  return r && r.__esModule ? r : { default: r };
}
function mI(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function yI(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
var xf,
  If,
  Na = Sf(() => {
    "use strict";
    xf = function (r, e) {
      return (
        (xf =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
          }),
        xf(r, e)
      );
    };
    If = function () {
      return (
        (If =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        If.apply(this, arguments)
      );
    };
  });
var jm = Se((vu) => {
  "use strict";
  Object.defineProperty(vu, "__esModule", { value: !0 });
  vu.delay = void 0;
  function vI(r) {
    return new Promise((e) => {
      setTimeout(() => {
        e(!0);
      }, r);
    });
  }
  vu.delay = vI;
});
var zm = Se((yo) => {
  "use strict";
  Object.defineProperty(yo, "__esModule", { value: !0 });
  yo.ONE_THOUSAND = yo.ONE_HUNDRED = void 0;
  yo.ONE_HUNDRED = 100;
  yo.ONE_THOUSAND = 1e3;
});
var km = Se((me) => {
  "use strict";
  Object.defineProperty(me, "__esModule", { value: !0 });
  me.ONE_YEAR =
    me.FOUR_WEEKS =
    me.THREE_WEEKS =
    me.TWO_WEEKS =
    me.ONE_WEEK =
    me.THIRTY_DAYS =
    me.SEVEN_DAYS =
    me.FIVE_DAYS =
    me.THREE_DAYS =
    me.ONE_DAY =
    me.TWENTY_FOUR_HOURS =
    me.TWELVE_HOURS =
    me.SIX_HOURS =
    me.THREE_HOURS =
    me.ONE_HOUR =
    me.SIXTY_MINUTES =
    me.THIRTY_MINUTES =
    me.TEN_MINUTES =
    me.FIVE_MINUTES =
    me.ONE_MINUTE =
    me.SIXTY_SECONDS =
    me.THIRTY_SECONDS =
    me.TEN_SECONDS =
    me.FIVE_SECONDS =
    me.ONE_SECOND =
      void 0;
  me.ONE_SECOND = 1;
  me.FIVE_SECONDS = 5;
  me.TEN_SECONDS = 10;
  me.THIRTY_SECONDS = 30;
  me.SIXTY_SECONDS = 60;
  me.ONE_MINUTE = me.SIXTY_SECONDS;
  me.FIVE_MINUTES = me.ONE_MINUTE * 5;
  me.TEN_MINUTES = me.ONE_MINUTE * 10;
  me.THIRTY_MINUTES = me.ONE_MINUTE * 30;
  me.SIXTY_MINUTES = me.ONE_MINUTE * 60;
  me.ONE_HOUR = me.SIXTY_MINUTES;
  me.THREE_HOURS = me.ONE_HOUR * 3;
  me.SIX_HOURS = me.ONE_HOUR * 6;
  me.TWELVE_HOURS = me.ONE_HOUR * 12;
  me.TWENTY_FOUR_HOURS = me.ONE_HOUR * 24;
  me.ONE_DAY = me.TWENTY_FOUR_HOURS;
  me.THREE_DAYS = me.ONE_DAY * 3;
  me.FIVE_DAYS = me.ONE_DAY * 5;
  me.SEVEN_DAYS = me.ONE_DAY * 7;
  me.THIRTY_DAYS = me.ONE_DAY * 30;
  me.ONE_WEEK = me.SEVEN_DAYS;
  me.TWO_WEEKS = me.ONE_WEEK * 2;
  me.THREE_WEEKS = me.ONE_WEEK * 3;
  me.FOUR_WEEKS = me.ONE_WEEK * 4;
  me.ONE_YEAR = me.ONE_DAY * 365;
});
var Rf = Se((wu) => {
  "use strict";
  Object.defineProperty(wu, "__esModule", { value: !0 });
  var Hm = (Na(), Cs(Ma));
  Hm.__exportStar(zm(), wu);
  Hm.__exportStar(km(), wu);
});
var Vm = Se((vo) => {
  "use strict";
  Object.defineProperty(vo, "__esModule", { value: !0 });
  vo.fromMiliseconds = vo.toMiliseconds = void 0;
  var Km = Rf();
  function wI(r) {
    return r * Km.ONE_THOUSAND;
  }
  vo.toMiliseconds = wI;
  function bI(r) {
    return Math.floor(r / Km.ONE_THOUSAND);
  }
  vo.fromMiliseconds = bI;
});
var $m = Se((bu) => {
  "use strict";
  Object.defineProperty(bu, "__esModule", { value: !0 });
  var Gm = (Na(), Cs(Ma));
  Gm.__exportStar(jm(), bu);
  Gm.__exportStar(Vm(), bu);
});
var Jm = Se((Ta) => {
  "use strict";
  Object.defineProperty(Ta, "__esModule", { value: !0 });
  Ta.Watch = void 0;
  var _u = class {
    constructor() {
      this.timestamps = new Map();
    }
    start(e) {
      if (this.timestamps.has(e))
        throw new Error(`Watch already started for label: ${e}`);
      this.timestamps.set(e, { started: Date.now() });
    }
    stop(e) {
      let t = this.get(e);
      if (typeof t.elapsed < "u")
        throw new Error(`Watch already stopped for label: ${e}`);
      let i = Date.now() - t.started;
      this.timestamps.set(e, { started: t.started, elapsed: i });
    }
    get(e) {
      let t = this.timestamps.get(e);
      if (typeof t > "u") throw new Error(`No timestamp found for label: ${e}`);
      return t;
    }
    elapsed(e) {
      let t = this.get(e);
      return t.elapsed || Date.now() - t.started;
    }
  };
  Ta.Watch = _u;
  Ta.default = _u;
});
var Wm = Se((Eu) => {
  "use strict";
  Object.defineProperty(Eu, "__esModule", { value: !0 });
  Eu.IWatch = void 0;
  var Cf = class {};
  Eu.IWatch = Cf;
});
var Ym = Se((Of) => {
  "use strict";
  Object.defineProperty(Of, "__esModule", { value: !0 });
  var _I = (Na(), Cs(Ma));
  _I.__exportStar(Wm(), Of);
});
var bo = Se((wo) => {
  "use strict";
  Object.defineProperty(wo, "__esModule", { value: !0 });
  var Au = (Na(), Cs(Ma));
  Au.__exportStar($m(), wo);
  Au.__exportStar(Jm(), wo);
  Au.__exportStar(Ym(), wo);
  Au.__exportStar(Rf(), wo);
});
var Pf = Se((Ct) => {
  "use strict";
  Object.defineProperty(Ct, "__esModule", { value: !0 });
  Ct.getLocalStorage =
    Ct.getLocalStorageOrThrow =
    Ct.getCrypto =
    Ct.getCryptoOrThrow =
    Ct.getLocation =
    Ct.getLocationOrThrow =
    Ct.getNavigator =
    Ct.getNavigatorOrThrow =
    Ct.getDocument =
    Ct.getDocumentOrThrow =
    Ct.getFromWindowOrThrow =
    Ct.getFromWindow =
      void 0;
  function Os(r) {
    let e;
    return typeof window < "u" && typeof window[r] < "u" && (e = window[r]), e;
  }
  Ct.getFromWindow = Os;
  function _o(r) {
    let e = Os(r);
    if (!e) throw new Error(`${r} is not defined in Window`);
    return e;
  }
  Ct.getFromWindowOrThrow = _o;
  function EI() {
    return _o("document");
  }
  Ct.getDocumentOrThrow = EI;
  function AI() {
    return Os("document");
  }
  Ct.getDocument = AI;
  function SI() {
    return _o("navigator");
  }
  Ct.getNavigatorOrThrow = SI;
  function xI() {
    return Os("navigator");
  }
  Ct.getNavigator = xI;
  function II() {
    return _o("location");
  }
  Ct.getLocationOrThrow = II;
  function DI() {
    return Os("location");
  }
  Ct.getLocation = DI;
  function RI() {
    return _o("crypto");
  }
  Ct.getCryptoOrThrow = RI;
  function CI() {
    return Os("crypto");
  }
  Ct.getCrypto = CI;
  function OI() {
    return _o("localStorage");
  }
  Ct.getLocalStorageOrThrow = OI;
  function PI() {
    return Os("localStorage");
  }
  Ct.getLocalStorage = PI;
});
var Xm = Se((Su) => {
  "use strict";
  Object.defineProperty(Su, "__esModule", { value: !0 });
  Su.getWindowMetadata = void 0;
  var Qm = Pf();
  function MI() {
    let r, e;
    try {
      (r = Qm.getDocumentOrThrow()), (e = Qm.getLocationOrThrow());
    } catch {
      return null;
    }
    function t() {
      let v = r.getElementsByTagName("link"),
        A = [];
      for (let E = 0; E < v.length; E++) {
        let P = v[E],
          N = P.getAttribute("rel");
        if (N && N.toLowerCase().indexOf("icon") > -1) {
          let T = P.getAttribute("href");
          if (T)
            if (
              T.toLowerCase().indexOf("https:") === -1 &&
              T.toLowerCase().indexOf("http:") === -1 &&
              T.indexOf("//") !== 0
            ) {
              let K = e.protocol + "//" + e.host;
              if (T.indexOf("/") === 0) K += T;
              else {
                let Z = e.pathname.split("/");
                Z.pop();
                let J = Z.join("/");
                K += J + "/" + T;
              }
              A.push(K);
            } else if (T.indexOf("//") === 0) {
              let K = e.protocol + T;
              A.push(K);
            } else A.push(T);
        }
      }
      return A;
    }
    function i(...v) {
      let A = r.getElementsByTagName("meta");
      for (let E = 0; E < A.length; E++) {
        let P = A[E],
          N = ["itemprop", "property", "name"]
            .map((T) => P.getAttribute(T))
            .filter((T) => (T ? v.includes(T) : !1));
        if (N.length && N) {
          let T = P.getAttribute("content");
          if (T) return T;
        }
      }
      return "";
    }
    function n() {
      let v = i("name", "og:site_name", "og:title", "twitter:title");
      return v || (v = r.title), v;
    }
    function o() {
      return i(
        "description",
        "og:description",
        "twitter:description",
        "keywords"
      );
    }
    let c = n(),
      l = o(),
      g = e.origin,
      d = t();
    return { description: l, url: g, icons: d, name: c };
  }
  Su.getWindowMetadata = MI;
});
var ey = Se((FL, Zm) => {
  "use strict";
  Zm.exports = (r) =>
    encodeURIComponent(r).replace(
      /[!'()*]/g,
      (e) => `%${e.charCodeAt(0).toString(16).toUpperCase()}`
    );
});
var sy = Se((LL, ny) => {
  "use strict";
  var iy = "%[a-f0-9]{2}",
    ty = new RegExp("(" + iy + ")|([^%]+?)", "gi"),
    ry = new RegExp("(" + iy + ")+", "gi");
  function Mf(r, e) {
    try {
      return [decodeURIComponent(r.join(""))];
    } catch {}
    if (r.length === 1) return r;
    e = e || 1;
    var t = r.slice(0, e),
      i = r.slice(e);
    return Array.prototype.concat.call([], Mf(t), Mf(i));
  }
  function NI(r) {
    try {
      return decodeURIComponent(r);
    } catch {
      for (var e = r.match(ty) || [], t = 1; t < e.length; t++)
        (r = Mf(e, t).join("")), (e = r.match(ty) || []);
      return r;
    }
  }
  function TI(r) {
    for (
      var e = { "%FE%FF": "\uFFFD\uFFFD", "%FF%FE": "\uFFFD\uFFFD" },
        t = ry.exec(r);
      t;

    ) {
      try {
        e[t[0]] = decodeURIComponent(t[0]);
      } catch {
        var i = NI(t[0]);
        i !== t[0] && (e[t[0]] = i);
      }
      t = ry.exec(r);
    }
    e["%C2"] = "\uFFFD";
    for (var n = Object.keys(e), o = 0; o < n.length; o++) {
      var c = n[o];
      r = r.replace(new RegExp(c, "g"), e[c]);
    }
    return r;
  }
  ny.exports = function (r) {
    if (typeof r != "string")
      throw new TypeError(
        "Expected `encodedURI` to be of type `string`, got `" + typeof r + "`"
      );
    try {
      return (r = r.replace(/\+/g, " ")), decodeURIComponent(r);
    } catch {
      return TI(r);
    }
  };
});
var ay = Se((UL, oy) => {
  "use strict";
  oy.exports = (r, e) => {
    if (!(typeof r == "string" && typeof e == "string"))
      throw new TypeError("Expected the arguments to be of type `string`");
    if (e === "") return [r];
    let t = r.indexOf(e);
    return t === -1 ? [r] : [r.slice(0, t), r.slice(t + e.length)];
  };
});
var uy = Se((BL, cy) => {
  "use strict";
  cy.exports = function (r, e) {
    for (
      var t = {}, i = Object.keys(r), n = Array.isArray(e), o = 0;
      o < i.length;
      o++
    ) {
      var c = i[o],
        l = r[c];
      (n ? e.indexOf(c) !== -1 : e(c, l, r)) && (t[c] = l);
    }
    return t;
  };
});
var yy = Se((Mr) => {
  "use strict";
  var FI = ey(),
    LI = sy(),
    ly = ay(),
    UI = uy(),
    BI = (r) => r == null,
    Nf = Symbol("encodeFragmentIdentifier");
  function qI(r) {
    switch (r.arrayFormat) {
      case "index":
        return (e) => (t, i) => {
          let n = t.length;
          return i === void 0 ||
            (r.skipNull && i === null) ||
            (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), "[", n, "]"].join("")]
            : [...t, [kt(e, r), "[", kt(n, r), "]=", kt(i, r)].join("")];
        };
      case "bracket":
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), "[]"].join("")]
            : [...t, [kt(e, r), "[]=", kt(i, r)].join("")];
      case "colon-list-separator":
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, [kt(e, r), ":list="].join("")]
            : [...t, [kt(e, r), ":list=", kt(i, r)].join("")];
      case "comma":
      case "separator":
      case "bracket-separator": {
        let e = r.arrayFormat === "bracket-separator" ? "[]=" : "=";
        return (t) => (i, n) =>
          n === void 0 ||
          (r.skipNull && n === null) ||
          (r.skipEmptyString && n === "")
            ? i
            : ((n = n === null ? "" : n),
              i.length === 0
                ? [[kt(t, r), e, kt(n, r)].join("")]
                : [[i, kt(n, r)].join(r.arrayFormatSeparator)]);
      }
      default:
        return (e) => (t, i) =>
          i === void 0 ||
          (r.skipNull && i === null) ||
          (r.skipEmptyString && i === "")
            ? t
            : i === null
            ? [...t, kt(e, r)]
            : [...t, [kt(e, r), "=", kt(i, r)].join("")];
    }
  }
  function jI(r) {
    let e;
    switch (r.arrayFormat) {
      case "index":
        return (t, i, n) => {
          if (
            ((e = /\[(\d*)\]$/.exec(t)), (t = t.replace(/\[\d*\]$/, "")), !e)
          ) {
            n[t] = i;
            return;
          }
          n[t] === void 0 && (n[t] = {}), (n[t][e[1]] = i);
        };
      case "bracket":
        return (t, i, n) => {
          if (((e = /(\[\])$/.exec(t)), (t = t.replace(/\[\]$/, "")), !e)) {
            n[t] = i;
            return;
          }
          if (n[t] === void 0) {
            n[t] = [i];
            return;
          }
          n[t] = [].concat(n[t], i);
        };
      case "colon-list-separator":
        return (t, i, n) => {
          if (((e = /(:list)$/.exec(t)), (t = t.replace(/:list$/, "")), !e)) {
            n[t] = i;
            return;
          }
          if (n[t] === void 0) {
            n[t] = [i];
            return;
          }
          n[t] = [].concat(n[t], i);
        };
      case "comma":
      case "separator":
        return (t, i, n) => {
          let o = typeof i == "string" && i.includes(r.arrayFormatSeparator),
            c =
              typeof i == "string" &&
              !o &&
              In(i, r).includes(r.arrayFormatSeparator);
          i = c ? In(i, r) : i;
          let l =
            o || c
              ? i.split(r.arrayFormatSeparator).map((g) => In(g, r))
              : i === null
              ? i
              : In(i, r);
          n[t] = l;
        };
      case "bracket-separator":
        return (t, i, n) => {
          let o = /(\[\])$/.test(t);
          if (((t = t.replace(/\[\]$/, "")), !o)) {
            n[t] = i && In(i, r);
            return;
          }
          let c =
            i === null
              ? []
              : i.split(r.arrayFormatSeparator).map((l) => In(l, r));
          if (n[t] === void 0) {
            n[t] = c;
            return;
          }
          n[t] = [].concat(n[t], c);
        };
      default:
        return (t, i, n) => {
          if (n[t] === void 0) {
            n[t] = i;
            return;
          }
          n[t] = [].concat(n[t], i);
        };
    }
  }
  function fy(r) {
    if (typeof r != "string" || r.length !== 1)
      throw new TypeError(
        "arrayFormatSeparator must be single character string"
      );
  }
  function kt(r, e) {
    return e.encode ? (e.strict ? FI(r) : encodeURIComponent(r)) : r;
  }
  function In(r, e) {
    return e.decode ? LI(r) : r;
  }
  function dy(r) {
    return Array.isArray(r)
      ? r.sort()
      : typeof r == "object"
      ? dy(Object.keys(r))
          .sort((e, t) => Number(e) - Number(t))
          .map((e) => r[e])
      : r;
  }
  function py(r) {
    let e = r.indexOf("#");
    return e !== -1 && (r = r.slice(0, e)), r;
  }
  function zI(r) {
    let e = "",
      t = r.indexOf("#");
    return t !== -1 && (e = r.slice(t)), e;
  }
  function gy(r) {
    r = py(r);
    let e = r.indexOf("?");
    return e === -1 ? "" : r.slice(e + 1);
  }
  function hy(r, e) {
    return (
      e.parseNumbers &&
      !Number.isNaN(Number(r)) &&
      typeof r == "string" &&
      r.trim() !== ""
        ? (r = Number(r))
        : e.parseBooleans &&
          r !== null &&
          (r.toLowerCase() === "true" || r.toLowerCase() === "false") &&
          (r = r.toLowerCase() === "true"),
      r
    );
  }
  function my(r, e) {
    (e = Object.assign(
      {
        decode: !0,
        sort: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
        parseNumbers: !1,
        parseBooleans: !1,
      },
      e
    )),
      fy(e.arrayFormatSeparator);
    let t = jI(e),
      i = Object.create(null);
    if (typeof r != "string" || ((r = r.trim().replace(/^[?#&]/, "")), !r))
      return i;
    for (let n of r.split("&")) {
      if (n === "") continue;
      let [o, c] = ly(e.decode ? n.replace(/\+/g, " ") : n, "=");
      (c =
        c === void 0
          ? null
          : ["comma", "separator", "bracket-separator"].includes(e.arrayFormat)
          ? c
          : In(c, e)),
        t(In(o, e), c, i);
    }
    for (let n of Object.keys(i)) {
      let o = i[n];
      if (typeof o == "object" && o !== null)
        for (let c of Object.keys(o)) o[c] = hy(o[c], e);
      else i[n] = hy(o, e);
    }
    return e.sort === !1
      ? i
      : (e.sort === !0
          ? Object.keys(i).sort()
          : Object.keys(i).sort(e.sort)
        ).reduce((n, o) => {
          let c = i[o];
          return (
            c && typeof c == "object" && !Array.isArray(c)
              ? (n[o] = dy(c))
              : (n[o] = c),
            n
          );
        }, Object.create(null));
  }
  Mr.extract = gy;
  Mr.parse = my;
  Mr.stringify = (r, e) => {
    if (!r) return "";
    (e = Object.assign(
      {
        encode: !0,
        strict: !0,
        arrayFormat: "none",
        arrayFormatSeparator: ",",
      },
      e
    )),
      fy(e.arrayFormatSeparator);
    let t = (c) =>
        (e.skipNull && BI(r[c])) || (e.skipEmptyString && r[c] === ""),
      i = qI(e),
      n = {};
    for (let c of Object.keys(r)) t(c) || (n[c] = r[c]);
    let o = Object.keys(n);
    return (
      e.sort !== !1 && o.sort(e.sort),
      o
        .map((c) => {
          let l = r[c];
          return l === void 0
            ? ""
            : l === null
            ? kt(c, e)
            : Array.isArray(l)
            ? l.length === 0 && e.arrayFormat === "bracket-separator"
              ? kt(c, e) + "[]"
              : l.reduce(i(c), []).join("&")
            : kt(c, e) + "=" + kt(l, e);
        })
        .filter((c) => c.length > 0)
        .join("&")
    );
  };
  Mr.parseUrl = (r, e) => {
    e = Object.assign({ decode: !0 }, e);
    let [t, i] = ly(r, "#");
    return Object.assign(
      { url: t.split("?")[0] || "", query: my(gy(r), e) },
      e && e.parseFragmentIdentifier && i
        ? { fragmentIdentifier: In(i, e) }
        : {}
    );
  };
  Mr.stringifyUrl = (r, e) => {
    e = Object.assign({ encode: !0, strict: !0, [Nf]: !0 }, e);
    let t = py(r.url).split("?")[0] || "",
      i = Mr.extract(r.url),
      n = Mr.parse(i, { sort: !1 }),
      o = Object.assign(n, r.query),
      c = Mr.stringify(o, e);
    c && (c = `?${c}`);
    let l = zI(r.url);
    return (
      r.fragmentIdentifier &&
        (l = `#${e[Nf] ? kt(r.fragmentIdentifier, e) : r.fragmentIdentifier}`),
      `${t}${c}${l}`
    );
  };
  Mr.pick = (r, e, t) => {
    t = Object.assign({ parseFragmentIdentifier: !0, [Nf]: !1 }, t);
    let { url: i, query: n, fragmentIdentifier: o } = Mr.parseUrl(r, t);
    return Mr.stringifyUrl(
      { url: i, query: UI(n, e), fragmentIdentifier: o },
      t
    );
  };
  Mr.exclude = (r, e, t) => {
    let i = Array.isArray(e) ? (n) => !e.includes(n) : (n, o) => !e(n, o);
    return Mr.pick(r, i, t);
  };
});
var vy = Se((Vr) => {
  "use strict";
  Object.defineProperty(Vr, "__esModule", { value: !0 });
  function kI(r, e) {
    var t = (r >>> 16) & 65535,
      i = r & 65535,
      n = (e >>> 16) & 65535,
      o = e & 65535;
    return (i * o + (((t * o + i * n) << 16) >>> 0)) | 0;
  }
  Vr.mul = Math.imul || kI;
  function HI(r, e) {
    return (r + e) | 0;
  }
  Vr.add = HI;
  function KI(r, e) {
    return (r - e) | 0;
  }
  Vr.sub = KI;
  function VI(r, e) {
    return (r << e) | (r >>> (32 - e));
  }
  Vr.rotl = VI;
  function GI(r, e) {
    return (r << (32 - e)) | (r >>> e);
  }
  Vr.rotr = GI;
  function $I(r) {
    return typeof r == "number" && isFinite(r) && Math.floor(r) === r;
  }
  Vr.isInteger = Number.isInteger || $I;
  Vr.MAX_SAFE_INTEGER = 9007199254740991;
  Vr.isSafeInteger = function (r) {
    return (
      Vr.isInteger(r) && r >= -Vr.MAX_SAFE_INTEGER && r <= Vr.MAX_SAFE_INTEGER
    );
  };
});
var Eo = Se((Te) => {
  "use strict";
  Object.defineProperty(Te, "__esModule", { value: !0 });
  var wy = vy();
  function JI(r, e) {
    return e === void 0 && (e = 0), (((r[e + 0] << 8) | r[e + 1]) << 16) >> 16;
  }
  Te.readInt16BE = JI;
  function WI(r, e) {
    return e === void 0 && (e = 0), ((r[e + 0] << 8) | r[e + 1]) >>> 0;
  }
  Te.readUint16BE = WI;
  function YI(r, e) {
    return e === void 0 && (e = 0), (((r[e + 1] << 8) | r[e]) << 16) >> 16;
  }
  Te.readInt16LE = YI;
  function QI(r, e) {
    return e === void 0 && (e = 0), ((r[e + 1] << 8) | r[e]) >>> 0;
  }
  Te.readUint16LE = QI;
  function by(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(2)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 8),
      (e[t + 1] = r >>> 0),
      e
    );
  }
  Te.writeUint16BE = by;
  Te.writeInt16BE = by;
  function _y(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(2)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 0),
      (e[t + 1] = r >>> 8),
      e
    );
  }
  Te.writeUint16LE = _y;
  Te.writeInt16LE = _y;
  function Tf(r, e) {
    return (
      e === void 0 && (e = 0),
      (r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]
    );
  }
  Te.readInt32BE = Tf;
  function Ff(r, e) {
    return (
      e === void 0 && (e = 0),
      ((r[e] << 24) | (r[e + 1] << 16) | (r[e + 2] << 8) | r[e + 3]) >>> 0
    );
  }
  Te.readUint32BE = Ff;
  function Lf(r, e) {
    return (
      e === void 0 && (e = 0),
      (r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]
    );
  }
  Te.readInt32LE = Lf;
  function Uf(r, e) {
    return (
      e === void 0 && (e = 0),
      ((r[e + 3] << 24) | (r[e + 2] << 16) | (r[e + 1] << 8) | r[e]) >>> 0
    );
  }
  Te.readUint32LE = Uf;
  function xu(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(4)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 24),
      (e[t + 1] = r >>> 16),
      (e[t + 2] = r >>> 8),
      (e[t + 3] = r >>> 0),
      e
    );
  }
  Te.writeUint32BE = xu;
  Te.writeInt32BE = xu;
  function Iu(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(4)),
      t === void 0 && (t = 0),
      (e[t + 0] = r >>> 0),
      (e[t + 1] = r >>> 8),
      (e[t + 2] = r >>> 16),
      (e[t + 3] = r >>> 24),
      e
    );
  }
  Te.writeUint32LE = Iu;
  Te.writeInt32LE = Iu;
  function XI(r, e) {
    e === void 0 && (e = 0);
    var t = Tf(r, e),
      i = Tf(r, e + 4);
    return t * 4294967296 + i - (i >> 31) * 4294967296;
  }
  Te.readInt64BE = XI;
  function ZI(r, e) {
    e === void 0 && (e = 0);
    var t = Ff(r, e),
      i = Ff(r, e + 4);
    return t * 4294967296 + i;
  }
  Te.readUint64BE = ZI;
  function e4(r, e) {
    e === void 0 && (e = 0);
    var t = Lf(r, e),
      i = Lf(r, e + 4);
    return i * 4294967296 + t - (t >> 31) * 4294967296;
  }
  Te.readInt64LE = e4;
  function t4(r, e) {
    e === void 0 && (e = 0);
    var t = Uf(r, e),
      i = Uf(r, e + 4);
    return i * 4294967296 + t;
  }
  Te.readUint64LE = t4;
  function Ey(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(8)),
      t === void 0 && (t = 0),
      xu((r / 4294967296) >>> 0, e, t),
      xu(r >>> 0, e, t + 4),
      e
    );
  }
  Te.writeUint64BE = Ey;
  Te.writeInt64BE = Ey;
  function Ay(r, e, t) {
    return (
      e === void 0 && (e = new Uint8Array(8)),
      t === void 0 && (t = 0),
      Iu(r >>> 0, e, t),
      Iu((r / 4294967296) >>> 0, e, t + 4),
      e
    );
  }
  Te.writeUint64LE = Ay;
  Te.writeInt64LE = Ay;
  function r4(r, e, t) {
    if ((t === void 0 && (t = 0), r % 8 !== 0))
      throw new Error("readUintBE supports only bitLengths divisible by 8");
    if (r / 8 > e.length - t)
      throw new Error("readUintBE: array is too short for the given bitLength");
    for (var i = 0, n = 1, o = r / 8 + t - 1; o >= t; o--)
      (i += e[o] * n), (n *= 256);
    return i;
  }
  Te.readUintBE = r4;
  function i4(r, e, t) {
    if ((t === void 0 && (t = 0), r % 8 !== 0))
      throw new Error("readUintLE supports only bitLengths divisible by 8");
    if (r / 8 > e.length - t)
      throw new Error("readUintLE: array is too short for the given bitLength");
    for (var i = 0, n = 1, o = t; o < t + r / 8; o++)
      (i += e[o] * n), (n *= 256);
    return i;
  }
  Te.readUintLE = i4;
  function n4(r, e, t, i) {
    if (
      (t === void 0 && (t = new Uint8Array(r / 8)),
      i === void 0 && (i = 0),
      r % 8 !== 0)
    )
      throw new Error("writeUintBE supports only bitLengths divisible by 8");
    if (!wy.isSafeInteger(e))
      throw new Error("writeUintBE value must be an integer");
    for (var n = 1, o = r / 8 + i - 1; o >= i; o--)
      (t[o] = (e / n) & 255), (n *= 256);
    return t;
  }
  Te.writeUintBE = n4;
  function s4(r, e, t, i) {
    if (
      (t === void 0 && (t = new Uint8Array(r / 8)),
      i === void 0 && (i = 0),
      r % 8 !== 0)
    )
      throw new Error("writeUintLE supports only bitLengths divisible by 8");
    if (!wy.isSafeInteger(e))
      throw new Error("writeUintLE value must be an integer");
    for (var n = 1, o = i; o < i + r / 8; o++)
      (t[o] = (e / n) & 255), (n *= 256);
    return t;
  }
  Te.writeUintLE = s4;
  function o4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat32(e);
  }
  Te.readFloat32BE = o4;
  function a4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat32(e, !0);
  }
  Te.readFloat32LE = a4;
  function c4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat64(e);
  }
  Te.readFloat64BE = c4;
  function u4(r, e) {
    e === void 0 && (e = 0);
    var t = new DataView(r.buffer, r.byteOffset, r.byteLength);
    return t.getFloat64(e, !0);
  }
  Te.readFloat64LE = u4;
  function h4(r, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(t, r), e;
  }
  Te.writeFloat32BE = h4;
  function l4(r, e, t) {
    e === void 0 && (e = new Uint8Array(4)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat32(t, r, !0), e;
  }
  Te.writeFloat32LE = l4;
  function f4(r, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(t, r), e;
  }
  Te.writeFloat64BE = f4;
  function d4(r, e, t) {
    e === void 0 && (e = new Uint8Array(8)), t === void 0 && (t = 0);
    var i = new DataView(e.buffer, e.byteOffset, e.byteLength);
    return i.setFloat64(t, r, !0), e;
  }
  Te.writeFloat64LE = d4;
});
var oi = Se((Bf) => {
  "use strict";
  Object.defineProperty(Bf, "__esModule", { value: !0 });
  function p4(r) {
    for (var e = 0; e < r.length; e++) r[e] = 0;
    return r;
  }
  Bf.wipe = p4;
});
var xy = Se((Du) => {
  "use strict";
  Object.defineProperty(Du, "__esModule", { value: !0 });
  var lr = Eo(),
    qf = oi(),
    g4 = 20;
  function m4(r, e, t) {
    for (
      var i = 1634760805,
        n = 857760878,
        o = 2036477234,
        c = 1797285236,
        l = (t[3] << 24) | (t[2] << 16) | (t[1] << 8) | t[0],
        g = (t[7] << 24) | (t[6] << 16) | (t[5] << 8) | t[4],
        d = (t[11] << 24) | (t[10] << 16) | (t[9] << 8) | t[8],
        y = (t[15] << 24) | (t[14] << 16) | (t[13] << 8) | t[12],
        v = (t[19] << 24) | (t[18] << 16) | (t[17] << 8) | t[16],
        A = (t[23] << 24) | (t[22] << 16) | (t[21] << 8) | t[20],
        E = (t[27] << 24) | (t[26] << 16) | (t[25] << 8) | t[24],
        P = (t[31] << 24) | (t[30] << 16) | (t[29] << 8) | t[28],
        N = (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0],
        T = (e[7] << 24) | (e[6] << 16) | (e[5] << 8) | e[4],
        K = (e[11] << 24) | (e[10] << 16) | (e[9] << 8) | e[8],
        Z = (e[15] << 24) | (e[14] << 16) | (e[13] << 8) | e[12],
        J = i,
        G = n,
        Q = o,
        ee = c,
        L = l,
        B = g,
        ae = d,
        U = y,
        j = v,
        W = A,
        h = E,
        m = P,
        b = N,
        x = T,
        D = K,
        M = Z,
        z = 0;
      z < g4;
      z += 2
    )
      (J = (J + L) | 0),
        (b ^= J),
        (b = (b >>> 16) | (b << 16)),
        (j = (j + b) | 0),
        (L ^= j),
        (L = (L >>> 20) | (L << 12)),
        (G = (G + B) | 0),
        (x ^= G),
        (x = (x >>> 16) | (x << 16)),
        (W = (W + x) | 0),
        (B ^= W),
        (B = (B >>> 20) | (B << 12)),
        (Q = (Q + ae) | 0),
        (D ^= Q),
        (D = (D >>> 16) | (D << 16)),
        (h = (h + D) | 0),
        (ae ^= h),
        (ae = (ae >>> 20) | (ae << 12)),
        (ee = (ee + U) | 0),
        (M ^= ee),
        (M = (M >>> 16) | (M << 16)),
        (m = (m + M) | 0),
        (U ^= m),
        (U = (U >>> 20) | (U << 12)),
        (Q = (Q + ae) | 0),
        (D ^= Q),
        (D = (D >>> 24) | (D << 8)),
        (h = (h + D) | 0),
        (ae ^= h),
        (ae = (ae >>> 25) | (ae << 7)),
        (ee = (ee + U) | 0),
        (M ^= ee),
        (M = (M >>> 24) | (M << 8)),
        (m = (m + M) | 0),
        (U ^= m),
        (U = (U >>> 25) | (U << 7)),
        (G = (G + B) | 0),
        (x ^= G),
        (x = (x >>> 24) | (x << 8)),
        (W = (W + x) | 0),
        (B ^= W),
        (B = (B >>> 25) | (B << 7)),
        (J = (J + L) | 0),
        (b ^= J),
        (b = (b >>> 24) | (b << 8)),
        (j = (j + b) | 0),
        (L ^= j),
        (L = (L >>> 25) | (L << 7)),
        (J = (J + B) | 0),
        (M ^= J),
        (M = (M >>> 16) | (M << 16)),
        (h = (h + M) | 0),
        (B ^= h),
        (B = (B >>> 20) | (B << 12)),
        (G = (G + ae) | 0),
        (b ^= G),
        (b = (b >>> 16) | (b << 16)),
        (m = (m + b) | 0),
        (ae ^= m),
        (ae = (ae >>> 20) | (ae << 12)),
        (Q = (Q + U) | 0),
        (x ^= Q),
        (x = (x >>> 16) | (x << 16)),
        (j = (j + x) | 0),
        (U ^= j),
        (U = (U >>> 20) | (U << 12)),
        (ee = (ee + L) | 0),
        (D ^= ee),
        (D = (D >>> 16) | (D << 16)),
        (W = (W + D) | 0),
        (L ^= W),
        (L = (L >>> 20) | (L << 12)),
        (Q = (Q + U) | 0),
        (x ^= Q),
        (x = (x >>> 24) | (x << 8)),
        (j = (j + x) | 0),
        (U ^= j),
        (U = (U >>> 25) | (U << 7)),
        (ee = (ee + L) | 0),
        (D ^= ee),
        (D = (D >>> 24) | (D << 8)),
        (W = (W + D) | 0),
        (L ^= W),
        (L = (L >>> 25) | (L << 7)),
        (G = (G + ae) | 0),
        (b ^= G),
        (b = (b >>> 24) | (b << 8)),
        (m = (m + b) | 0),
        (ae ^= m),
        (ae = (ae >>> 25) | (ae << 7)),
        (J = (J + B) | 0),
        (M ^= J),
        (M = (M >>> 24) | (M << 8)),
        (h = (h + M) | 0),
        (B ^= h),
        (B = (B >>> 25) | (B << 7));
    lr.writeUint32LE((J + i) | 0, r, 0),
      lr.writeUint32LE((G + n) | 0, r, 4),
      lr.writeUint32LE((Q + o) | 0, r, 8),
      lr.writeUint32LE((ee + c) | 0, r, 12),
      lr.writeUint32LE((L + l) | 0, r, 16),
      lr.writeUint32LE((B + g) | 0, r, 20),
      lr.writeUint32LE((ae + d) | 0, r, 24),
      lr.writeUint32LE((U + y) | 0, r, 28),
      lr.writeUint32LE((j + v) | 0, r, 32),
      lr.writeUint32LE((W + A) | 0, r, 36),
      lr.writeUint32LE((h + E) | 0, r, 40),
      lr.writeUint32LE((m + P) | 0, r, 44),
      lr.writeUint32LE((b + N) | 0, r, 48),
      lr.writeUint32LE((x + T) | 0, r, 52),
      lr.writeUint32LE((D + K) | 0, r, 56),
      lr.writeUint32LE((M + Z) | 0, r, 60);
  }
  function Sy(r, e, t, i, n) {
    if ((n === void 0 && (n = 0), r.length !== 32))
      throw new Error("ChaCha: key size must be 32 bytes");
    if (i.length < t.length)
      throw new Error("ChaCha: destination is shorter than source");
    var o, c;
    if (n === 0) {
      if (e.length !== 8 && e.length !== 12)
        throw new Error("ChaCha nonce must be 8 or 12 bytes");
      (o = new Uint8Array(16)), (c = o.length - e.length), o.set(e, c);
    } else {
      if (e.length !== 16)
        throw new Error("ChaCha nonce with counter must be 16 bytes");
      (o = e), (c = n);
    }
    for (var l = new Uint8Array(64), g = 0; g < t.length; g += 64) {
      m4(l, o, r);
      for (var d = g; d < g + 64 && d < t.length; d++) i[d] = t[d] ^ l[d - g];
      v4(o, 0, c);
    }
    return qf.wipe(l), n === 0 && qf.wipe(o), i;
  }
  Du.streamXOR = Sy;
  function y4(r, e, t, i) {
    return i === void 0 && (i = 0), qf.wipe(t), Sy(r, e, t, t, i);
  }
  Du.stream = y4;
  function v4(r, e, t) {
    for (var i = 1; t--; )
      (i = (i + (r[e] & 255)) | 0), (r[e] = i & 255), (i >>>= 8), e++;
    if (i > 0) throw new Error("ChaCha: counter overflow");
  }
});
var Ru = Se((Ao) => {
  "use strict";
  Object.defineProperty(Ao, "__esModule", { value: !0 });
  function w4(r, e, t) {
    return (~(r - 1) & e) | ((r - 1) & t);
  }
  Ao.select = w4;
  function b4(r, e) {
    return (((r | 0) - (e | 0) - 1) >>> 31) & 1;
  }
  Ao.lessOrEqual = b4;
  function Iy(r, e) {
    if (r.length !== e.length) return 0;
    for (var t = 0, i = 0; i < r.length; i++) t |= r[i] ^ e[i];
    return 1 & ((t - 1) >>> 8);
  }
  Ao.compare = Iy;
  function _4(r, e) {
    return r.length === 0 || e.length === 0 ? !1 : Iy(r, e) !== 0;
  }
  Ao.equal = _4;
});
var Ry = Se((Dn) => {
  "use strict";
  Object.defineProperty(Dn, "__esModule", { value: !0 });
  var E4 = Ru(),
    Cu = oi();
  Dn.DIGEST_LENGTH = 16;
  var Dy = (function () {
    function r(e) {
      (this.digestLength = Dn.DIGEST_LENGTH),
        (this._buffer = new Uint8Array(16)),
        (this._r = new Uint16Array(10)),
        (this._h = new Uint16Array(10)),
        (this._pad = new Uint16Array(8)),
        (this._leftover = 0),
        (this._fin = 0),
        (this._finished = !1);
      var t = e[0] | (e[1] << 8);
      this._r[0] = t & 8191;
      var i = e[2] | (e[3] << 8);
      this._r[1] = ((t >>> 13) | (i << 3)) & 8191;
      var n = e[4] | (e[5] << 8);
      this._r[2] = ((i >>> 10) | (n << 6)) & 7939;
      var o = e[6] | (e[7] << 8);
      this._r[3] = ((n >>> 7) | (o << 9)) & 8191;
      var c = e[8] | (e[9] << 8);
      (this._r[4] = ((o >>> 4) | (c << 12)) & 255),
        (this._r[5] = (c >>> 1) & 8190);
      var l = e[10] | (e[11] << 8);
      this._r[6] = ((c >>> 14) | (l << 2)) & 8191;
      var g = e[12] | (e[13] << 8);
      this._r[7] = ((l >>> 11) | (g << 5)) & 8065;
      var d = e[14] | (e[15] << 8);
      (this._r[8] = ((g >>> 8) | (d << 8)) & 8191),
        (this._r[9] = (d >>> 5) & 127),
        (this._pad[0] = e[16] | (e[17] << 8)),
        (this._pad[1] = e[18] | (e[19] << 8)),
        (this._pad[2] = e[20] | (e[21] << 8)),
        (this._pad[3] = e[22] | (e[23] << 8)),
        (this._pad[4] = e[24] | (e[25] << 8)),
        (this._pad[5] = e[26] | (e[27] << 8)),
        (this._pad[6] = e[28] | (e[29] << 8)),
        (this._pad[7] = e[30] | (e[31] << 8));
    }
    return (
      (r.prototype._blocks = function (e, t, i) {
        for (
          var n = this._fin ? 0 : 2048,
            o = this._h[0],
            c = this._h[1],
            l = this._h[2],
            g = this._h[3],
            d = this._h[4],
            y = this._h[5],
            v = this._h[6],
            A = this._h[7],
            E = this._h[8],
            P = this._h[9],
            N = this._r[0],
            T = this._r[1],
            K = this._r[2],
            Z = this._r[3],
            J = this._r[4],
            G = this._r[5],
            Q = this._r[6],
            ee = this._r[7],
            L = this._r[8],
            B = this._r[9];
          i >= 16;

        ) {
          var ae = e[t + 0] | (e[t + 1] << 8);
          o += ae & 8191;
          var U = e[t + 2] | (e[t + 3] << 8);
          c += ((ae >>> 13) | (U << 3)) & 8191;
          var j = e[t + 4] | (e[t + 5] << 8);
          l += ((U >>> 10) | (j << 6)) & 8191;
          var W = e[t + 6] | (e[t + 7] << 8);
          g += ((j >>> 7) | (W << 9)) & 8191;
          var h = e[t + 8] | (e[t + 9] << 8);
          (d += ((W >>> 4) | (h << 12)) & 8191), (y += (h >>> 1) & 8191);
          var m = e[t + 10] | (e[t + 11] << 8);
          v += ((h >>> 14) | (m << 2)) & 8191;
          var b = e[t + 12] | (e[t + 13] << 8);
          A += ((m >>> 11) | (b << 5)) & 8191;
          var x = e[t + 14] | (e[t + 15] << 8);
          (E += ((b >>> 8) | (x << 8)) & 8191), (P += (x >>> 5) | n);
          var D = 0,
            M = D;
          (M += o * N),
            (M += c * (5 * B)),
            (M += l * (5 * L)),
            (M += g * (5 * ee)),
            (M += d * (5 * Q)),
            (D = M >>> 13),
            (M &= 8191),
            (M += y * (5 * G)),
            (M += v * (5 * J)),
            (M += A * (5 * Z)),
            (M += E * (5 * K)),
            (M += P * (5 * T)),
            (D += M >>> 13),
            (M &= 8191);
          var z = D;
          (z += o * T),
            (z += c * N),
            (z += l * (5 * B)),
            (z += g * (5 * L)),
            (z += d * (5 * ee)),
            (D = z >>> 13),
            (z &= 8191),
            (z += y * (5 * Q)),
            (z += v * (5 * G)),
            (z += A * (5 * J)),
            (z += E * (5 * Z)),
            (z += P * (5 * K)),
            (D += z >>> 13),
            (z &= 8191);
          var C = D;
          (C += o * K),
            (C += c * T),
            (C += l * N),
            (C += g * (5 * B)),
            (C += d * (5 * L)),
            (D = C >>> 13),
            (C &= 8191),
            (C += y * (5 * ee)),
            (C += v * (5 * Q)),
            (C += A * (5 * G)),
            (C += E * (5 * J)),
            (C += P * (5 * Z)),
            (D += C >>> 13),
            (C &= 8191);
          var p = D;
          (p += o * Z),
            (p += c * K),
            (p += l * T),
            (p += g * N),
            (p += d * (5 * B)),
            (D = p >>> 13),
            (p &= 8191),
            (p += y * (5 * L)),
            (p += v * (5 * ee)),
            (p += A * (5 * Q)),
            (p += E * (5 * G)),
            (p += P * (5 * J)),
            (D += p >>> 13),
            (p &= 8191);
          var I = D;
          (I += o * J),
            (I += c * Z),
            (I += l * K),
            (I += g * T),
            (I += d * N),
            (D = I >>> 13),
            (I &= 8191),
            (I += y * (5 * B)),
            (I += v * (5 * L)),
            (I += A * (5 * ee)),
            (I += E * (5 * Q)),
            (I += P * (5 * G)),
            (D += I >>> 13),
            (I &= 8191);
          var ue = D;
          (ue += o * G),
            (ue += c * J),
            (ue += l * Z),
            (ue += g * K),
            (ue += d * T),
            (D = ue >>> 13),
            (ue &= 8191),
            (ue += y * N),
            (ue += v * (5 * B)),
            (ue += A * (5 * L)),
            (ue += E * (5 * ee)),
            (ue += P * (5 * Q)),
            (D += ue >>> 13),
            (ue &= 8191);
          var ne = D;
          (ne += o * Q),
            (ne += c * G),
            (ne += l * J),
            (ne += g * Z),
            (ne += d * K),
            (D = ne >>> 13),
            (ne &= 8191),
            (ne += y * T),
            (ne += v * N),
            (ne += A * (5 * B)),
            (ne += E * (5 * L)),
            (ne += P * (5 * ee)),
            (D += ne >>> 13),
            (ne &= 8191);
          var w = D;
          (w += o * ee),
            (w += c * Q),
            (w += l * G),
            (w += g * J),
            (w += d * Z),
            (D = w >>> 13),
            (w &= 8191),
            (w += y * K),
            (w += v * T),
            (w += A * N),
            (w += E * (5 * B)),
            (w += P * (5 * L)),
            (D += w >>> 13),
            (w &= 8191);
          var $ = D;
          ($ += o * L),
            ($ += c * ee),
            ($ += l * Q),
            ($ += g * G),
            ($ += d * J),
            (D = $ >>> 13),
            ($ &= 8191),
            ($ += y * Z),
            ($ += v * K),
            ($ += A * T),
            ($ += E * N),
            ($ += P * (5 * B)),
            (D += $ >>> 13),
            ($ &= 8191);
          var H = D;
          (H += o * B),
            (H += c * L),
            (H += l * ee),
            (H += g * Q),
            (H += d * G),
            (D = H >>> 13),
            (H &= 8191),
            (H += y * J),
            (H += v * Z),
            (H += A * K),
            (H += E * T),
            (H += P * N),
            (D += H >>> 13),
            (H &= 8191),
            (D = ((D << 2) + D) | 0),
            (D = (D + M) | 0),
            (M = D & 8191),
            (D = D >>> 13),
            (z += D),
            (o = M),
            (c = z),
            (l = C),
            (g = p),
            (d = I),
            (y = ue),
            (v = ne),
            (A = w),
            (E = $),
            (P = H),
            (t += 16),
            (i -= 16);
        }
        (this._h[0] = o),
          (this._h[1] = c),
          (this._h[2] = l),
          (this._h[3] = g),
          (this._h[4] = d),
          (this._h[5] = y),
          (this._h[6] = v),
          (this._h[7] = A),
          (this._h[8] = E),
          (this._h[9] = P);
      }),
      (r.prototype.finish = function (e, t) {
        t === void 0 && (t = 0);
        var i = new Uint16Array(10),
          n,
          o,
          c,
          l;
        if (this._leftover) {
          for (l = this._leftover, this._buffer[l++] = 1; l < 16; l++)
            this._buffer[l] = 0;
          (this._fin = 1), this._blocks(this._buffer, 0, 16);
        }
        for (n = this._h[1] >>> 13, this._h[1] &= 8191, l = 2; l < 10; l++)
          (this._h[l] += n), (n = this._h[l] >>> 13), (this._h[l] &= 8191);
        for (
          this._h[0] += n * 5,
            n = this._h[0] >>> 13,
            this._h[0] &= 8191,
            this._h[1] += n,
            n = this._h[1] >>> 13,
            this._h[1] &= 8191,
            this._h[2] += n,
            i[0] = this._h[0] + 5,
            n = i[0] >>> 13,
            i[0] &= 8191,
            l = 1;
          l < 10;
          l++
        )
          (i[l] = this._h[l] + n), (n = i[l] >>> 13), (i[l] &= 8191);
        for (i[9] -= 8192, o = (n ^ 1) - 1, l = 0; l < 10; l++) i[l] &= o;
        for (o = ~o, l = 0; l < 10; l++) this._h[l] = (this._h[l] & o) | i[l];
        for (
          this._h[0] = (this._h[0] | (this._h[1] << 13)) & 65535,
            this._h[1] = ((this._h[1] >>> 3) | (this._h[2] << 10)) & 65535,
            this._h[2] = ((this._h[2] >>> 6) | (this._h[3] << 7)) & 65535,
            this._h[3] = ((this._h[3] >>> 9) | (this._h[4] << 4)) & 65535,
            this._h[4] =
              ((this._h[4] >>> 12) | (this._h[5] << 1) | (this._h[6] << 14)) &
              65535,
            this._h[5] = ((this._h[6] >>> 2) | (this._h[7] << 11)) & 65535,
            this._h[6] = ((this._h[7] >>> 5) | (this._h[8] << 8)) & 65535,
            this._h[7] = ((this._h[8] >>> 8) | (this._h[9] << 5)) & 65535,
            c = this._h[0] + this._pad[0],
            this._h[0] = c & 65535,
            l = 1;
          l < 8;
          l++
        )
          (c = (((this._h[l] + this._pad[l]) | 0) + (c >>> 16)) | 0),
            (this._h[l] = c & 65535);
        return (
          (e[t + 0] = this._h[0] >>> 0),
          (e[t + 1] = this._h[0] >>> 8),
          (e[t + 2] = this._h[1] >>> 0),
          (e[t + 3] = this._h[1] >>> 8),
          (e[t + 4] = this._h[2] >>> 0),
          (e[t + 5] = this._h[2] >>> 8),
          (e[t + 6] = this._h[3] >>> 0),
          (e[t + 7] = this._h[3] >>> 8),
          (e[t + 8] = this._h[4] >>> 0),
          (e[t + 9] = this._h[4] >>> 8),
          (e[t + 10] = this._h[5] >>> 0),
          (e[t + 11] = this._h[5] >>> 8),
          (e[t + 12] = this._h[6] >>> 0),
          (e[t + 13] = this._h[6] >>> 8),
          (e[t + 14] = this._h[7] >>> 0),
          (e[t + 15] = this._h[7] >>> 8),
          (this._finished = !0),
          this
        );
      }),
      (r.prototype.update = function (e) {
        var t = 0,
          i = e.length,
          n;
        if (this._leftover) {
          (n = 16 - this._leftover), n > i && (n = i);
          for (var o = 0; o < n; o++)
            this._buffer[this._leftover + o] = e[t + o];
          if (((i -= n), (t += n), (this._leftover += n), this._leftover < 16))
            return this;
          this._blocks(this._buffer, 0, 16), (this._leftover = 0);
        }
        if (
          (i >= 16 &&
            ((n = i - (i % 16)), this._blocks(e, t, n), (t += n), (i -= n)),
          i)
        ) {
          for (var o = 0; o < i; o++)
            this._buffer[this._leftover + o] = e[t + o];
          this._leftover += i;
        }
        return this;
      }),
      (r.prototype.digest = function () {
        if (this._finished) throw new Error("Poly1305 was finished");
        var e = new Uint8Array(16);
        return this.finish(e), e;
      }),
      (r.prototype.clean = function () {
        return (
          Cu.wipe(this._buffer),
          Cu.wipe(this._r),
          Cu.wipe(this._h),
          Cu.wipe(this._pad),
          (this._leftover = 0),
          (this._fin = 0),
          (this._finished = !0),
          this
        );
      }),
      r
    );
  })();
  Dn.Poly1305 = Dy;
  function A4(r, e) {
    var t = new Dy(r);
    t.update(e);
    var i = t.digest();
    return t.clean(), i;
  }
  Dn.oneTimeAuth = A4;
  function S4(r, e) {
    return r.length !== Dn.DIGEST_LENGTH || e.length !== Dn.DIGEST_LENGTH
      ? !1
      : E4.equal(r, e);
  }
  Dn.equal = S4;
});
var Py = Se((Rn) => {
  "use strict";
  Object.defineProperty(Rn, "__esModule", { value: !0 });
  var Ou = xy(),
    x4 = Ry(),
    Fa = oi(),
    Cy = Eo(),
    I4 = Ru();
  Rn.KEY_LENGTH = 32;
  Rn.NONCE_LENGTH = 12;
  Rn.TAG_LENGTH = 16;
  var Oy = new Uint8Array(16),
    D4 = (function () {
      function r(e) {
        if (
          ((this.nonceLength = Rn.NONCE_LENGTH),
          (this.tagLength = Rn.TAG_LENGTH),
          e.length !== Rn.KEY_LENGTH)
        )
          throw new Error("ChaCha20Poly1305 needs 32-byte key");
        this._key = new Uint8Array(e);
      }
      return (
        (r.prototype.seal = function (e, t, i, n) {
          if (e.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          var o = new Uint8Array(16);
          o.set(e, o.length - e.length);
          var c = new Uint8Array(32);
          Ou.stream(this._key, o, c, 4);
          var l = t.length + this.tagLength,
            g;
          if (n) {
            if (n.length !== l)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            g = n;
          } else g = new Uint8Array(l);
          return (
            Ou.streamXOR(this._key, o, t, g, 4),
            this._authenticate(
              g.subarray(g.length - this.tagLength, g.length),
              c,
              g.subarray(0, g.length - this.tagLength),
              i
            ),
            Fa.wipe(o),
            g
          );
        }),
        (r.prototype.open = function (e, t, i, n) {
          if (e.length > 16)
            throw new Error("ChaCha20Poly1305: incorrect nonce length");
          if (t.length < this.tagLength) return null;
          var o = new Uint8Array(16);
          o.set(e, o.length - e.length);
          var c = new Uint8Array(32);
          Ou.stream(this._key, o, c, 4);
          var l = new Uint8Array(this.tagLength);
          if (
            (this._authenticate(
              l,
              c,
              t.subarray(0, t.length - this.tagLength),
              i
            ),
            !I4.equal(l, t.subarray(t.length - this.tagLength, t.length)))
          )
            return null;
          var g = t.length - this.tagLength,
            d;
          if (n) {
            if (n.length !== g)
              throw new Error("ChaCha20Poly1305: incorrect destination length");
            d = n;
          } else d = new Uint8Array(g);
          return (
            Ou.streamXOR(
              this._key,
              o,
              t.subarray(0, t.length - this.tagLength),
              d,
              4
            ),
            Fa.wipe(o),
            d
          );
        }),
        (r.prototype.clean = function () {
          return Fa.wipe(this._key), this;
        }),
        (r.prototype._authenticate = function (e, t, i, n) {
          var o = new x4.Poly1305(t);
          n &&
            (o.update(n),
            n.length % 16 > 0 && o.update(Oy.subarray(n.length % 16))),
            o.update(i),
            i.length % 16 > 0 && o.update(Oy.subarray(i.length % 16));
          var c = new Uint8Array(8);
          n && Cy.writeUint64LE(n.length, c),
            o.update(c),
            Cy.writeUint64LE(i.length, c),
            o.update(c);
          for (var l = o.digest(), g = 0; g < l.length; g++) e[g] = l[g];
          o.clean(), Fa.wipe(l), Fa.wipe(c);
        }),
        r
      );
    })();
  Rn.ChaCha20Poly1305 = D4;
});
var My = Se((jf) => {
  "use strict";
  Object.defineProperty(jf, "__esModule", { value: !0 });
  function R4(r) {
    return (
      typeof r.saveState < "u" &&
      typeof r.restoreState < "u" &&
      typeof r.cleanSavedState < "u"
    );
  }
  jf.isSerializableHash = R4;
});
var Ty = Se((La) => {
  "use strict";
  Object.defineProperty(La, "__esModule", { value: !0 });
  var qi = My(),
    C4 = Ru(),
    O4 = oi(),
    Ny = (function () {
      function r(e, t) {
        (this._finished = !1),
          (this._inner = new e()),
          (this._outer = new e()),
          (this.blockSize = this._outer.blockSize),
          (this.digestLength = this._outer.digestLength);
        var i = new Uint8Array(this.blockSize);
        t.length > this.blockSize
          ? this._inner.update(t).finish(i).clean()
          : i.set(t);
        for (var n = 0; n < i.length; n++) i[n] ^= 54;
        this._inner.update(i);
        for (var n = 0; n < i.length; n++) i[n] ^= 106;
        this._outer.update(i),
          qi.isSerializableHash(this._inner) &&
            qi.isSerializableHash(this._outer) &&
            ((this._innerKeyedState = this._inner.saveState()),
            (this._outerKeyedState = this._outer.saveState())),
          O4.wipe(i);
      }
      return (
        (r.prototype.reset = function () {
          if (
            !qi.isSerializableHash(this._inner) ||
            !qi.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't reset() because hash doesn't implement restoreState()"
            );
          return (
            this._inner.restoreState(this._innerKeyedState),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (r.prototype.clean = function () {
          qi.isSerializableHash(this._inner) &&
            this._inner.cleanSavedState(this._innerKeyedState),
            qi.isSerializableHash(this._outer) &&
              this._outer.cleanSavedState(this._outerKeyedState),
            this._inner.clean(),
            this._outer.clean();
        }),
        (r.prototype.update = function (e) {
          return this._inner.update(e), this;
        }),
        (r.prototype.finish = function (e) {
          return this._finished
            ? (this._outer.finish(e), this)
            : (this._inner.finish(e),
              this._outer.update(e.subarray(0, this.digestLength)).finish(e),
              (this._finished = !0),
              this);
        }),
        (r.prototype.digest = function () {
          var e = new Uint8Array(this.digestLength);
          return this.finish(e), e;
        }),
        (r.prototype.saveState = function () {
          if (!qi.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't saveState() because hash doesn't implement it"
            );
          return this._inner.saveState();
        }),
        (r.prototype.restoreState = function (e) {
          if (
            !qi.isSerializableHash(this._inner) ||
            !qi.isSerializableHash(this._outer)
          )
            throw new Error(
              "hmac: can't restoreState() because hash doesn't implement it"
            );
          return (
            this._inner.restoreState(e),
            this._outer.restoreState(this._outerKeyedState),
            (this._finished = !1),
            this
          );
        }),
        (r.prototype.cleanSavedState = function (e) {
          if (!qi.isSerializableHash(this._inner))
            throw new Error(
              "hmac: can't cleanSavedState() because hash doesn't implement it"
            );
          this._inner.cleanSavedState(e);
        }),
        r
      );
    })();
  La.HMAC = Ny;
  function P4(r, e, t) {
    var i = new Ny(r, e);
    i.update(t);
    var n = i.digest();
    return i.clean(), n;
  }
  La.hmac = P4;
  La.equal = C4.equal;
});
var Uy = Se((zf) => {
  "use strict";
  Object.defineProperty(zf, "__esModule", { value: !0 });
  var Fy = Ty(),
    Ly = oi(),
    M4 = (function () {
      function r(e, t, i, n) {
        i === void 0 && (i = new Uint8Array(0)),
          (this._counter = new Uint8Array(1)),
          (this._hash = e),
          (this._info = n);
        var o = Fy.hmac(this._hash, i, t);
        (this._hmac = new Fy.HMAC(e, o)),
          (this._buffer = new Uint8Array(this._hmac.digestLength)),
          (this._bufpos = this._buffer.length);
      }
      return (
        (r.prototype._fillBuffer = function () {
          this._counter[0]++;
          var e = this._counter[0];
          if (e === 0) throw new Error("hkdf: cannot expand more");
          this._hmac.reset(),
            e > 1 && this._hmac.update(this._buffer),
            this._info && this._hmac.update(this._info),
            this._hmac.update(this._counter),
            this._hmac.finish(this._buffer),
            (this._bufpos = 0);
        }),
        (r.prototype.expand = function (e) {
          for (var t = new Uint8Array(e), i = 0; i < t.length; i++)
            this._bufpos === this._buffer.length && this._fillBuffer(),
              (t[i] = this._buffer[this._bufpos++]);
          return t;
        }),
        (r.prototype.clean = function () {
          this._hmac.clean(),
            Ly.wipe(this._buffer),
            Ly.wipe(this._counter),
            (this._bufpos = 0);
        }),
        r
      );
    })();
  zf.HKDF = M4;
});
var qy = Se((Pu) => {
  "use strict";
  Object.defineProperty(Pu, "__esModule", { value: !0 });
  Pu.BrowserRandomSource = void 0;
  var By = 65536,
    kf = class {
      constructor() {
        (this.isAvailable = !1), (this.isInstantiated = !1);
        let e = typeof self < "u" ? self.crypto || self.msCrypto : null;
        e &&
          e.getRandomValues !== void 0 &&
          ((this._crypto = e),
          (this.isAvailable = !0),
          (this.isInstantiated = !0));
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
          throw new Error("Browser random byte generator is not available.");
        let t = new Uint8Array(e);
        for (let i = 0; i < t.length; i += By)
          this._crypto.getRandomValues(
            t.subarray(i, i + Math.min(t.length - i, By))
          );
        return t;
      }
    };
  Pu.BrowserRandomSource = kf;
});
var jy = Se(() => {
  "use strict";
});
var zy = Se((Mu) => {
  "use strict";
  Object.defineProperty(Mu, "__esModule", { value: !0 });
  Mu.NodeRandomSource = void 0;
  var N4 = oi(),
    Hf = class {
      constructor() {
        if (
          ((this.isAvailable = !1), (this.isInstantiated = !1), typeof Nm < "u")
        ) {
          let e = jy();
          e &&
            e.randomBytes &&
            ((this._crypto = e),
            (this.isAvailable = !0),
            (this.isInstantiated = !0));
        }
      }
      randomBytes(e) {
        if (!this.isAvailable || !this._crypto)
          throw new Error("Node.js random byte generator is not available.");
        let t = this._crypto.randomBytes(e);
        if (t.length !== e)
          throw new Error("NodeRandomSource: got fewer bytes than requested");
        let i = new Uint8Array(e);
        for (let n = 0; n < i.length; n++) i[n] = t[n];
        return (0, N4.wipe)(t), i;
      }
    };
  Mu.NodeRandomSource = Hf;
});
var ky = Se((Nu) => {
  "use strict";
  Object.defineProperty(Nu, "__esModule", { value: !0 });
  Nu.SystemRandomSource = void 0;
  var T4 = qy(),
    F4 = zy(),
    Kf = class {
      constructor() {
        if (
          ((this.isAvailable = !1),
          (this.name = ""),
          (this._source = new T4.BrowserRandomSource()),
          this._source.isAvailable)
        ) {
          (this.isAvailable = !0), (this.name = "Browser");
          return;
        }
        if (
          ((this._source = new F4.NodeRandomSource()), this._source.isAvailable)
        ) {
          (this.isAvailable = !0), (this.name = "Node");
          return;
        }
      }
      randomBytes(e) {
        if (!this.isAvailable)
          throw new Error("System random byte generator is not available.");
        return this._source.randomBytes(e);
      }
    };
  Nu.SystemRandomSource = Kf;
});
var Ua = Se((fr) => {
  "use strict";
  Object.defineProperty(fr, "__esModule", { value: !0 });
  fr.randomStringForEntropy =
    fr.randomString =
    fr.randomUint32 =
    fr.randomBytes =
    fr.defaultRandomSource =
      void 0;
  var L4 = ky(),
    U4 = Eo(),
    Hy = oi();
  fr.defaultRandomSource = new L4.SystemRandomSource();
  function Vf(r, e = fr.defaultRandomSource) {
    return e.randomBytes(r);
  }
  fr.randomBytes = Vf;
  function B4(r = fr.defaultRandomSource) {
    let e = Vf(4, r),
      t = (0, U4.readUint32LE)(e);
    return (0, Hy.wipe)(e), t;
  }
  fr.randomUint32 = B4;
  var Ky = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  function Vy(r, e = Ky, t = fr.defaultRandomSource) {
    if (e.length < 2) throw new Error("randomString charset is too short");
    if (e.length > 256) throw new Error("randomString charset is too long");
    let i = "",
      n = e.length,
      o = 256 - (256 % n);
    for (; r > 0; ) {
      let c = Vf(Math.ceil((r * 256) / o), t);
      for (let l = 0; l < c.length && r > 0; l++) {
        let g = c[l];
        g < o && ((i += e.charAt(g % n)), r--);
      }
      (0, Hy.wipe)(c);
    }
    return i;
  }
  fr.randomString = Vy;
  function q4(r, e = Ky, t = fr.defaultRandomSource) {
    let i = Math.ceil(r / (Math.log(e.length) / Math.LN2));
    return Vy(i, e, t);
  }
  fr.randomStringForEntropy = q4;
});
var $y = Se((is) => {
  "use strict";
  Object.defineProperty(is, "__esModule", { value: !0 });
  var Fu = Eo(),
    Tu = oi();
  is.DIGEST_LENGTH = 32;
  is.BLOCK_SIZE = 64;
  var Gy = (function () {
    function r() {
      (this.digestLength = is.DIGEST_LENGTH),
        (this.blockSize = is.BLOCK_SIZE),
        (this._state = new Int32Array(8)),
        (this._temp = new Int32Array(64)),
        (this._buffer = new Uint8Array(128)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (r.prototype._initState = function () {
        (this._state[0] = 1779033703),
          (this._state[1] = 3144134277),
          (this._state[2] = 1013904242),
          (this._state[3] = 2773480762),
          (this._state[4] = 1359893119),
          (this._state[5] = 2600822924),
          (this._state[6] = 528734635),
          (this._state[7] = 1541459225);
      }),
      (r.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        Tu.wipe(this._buffer), Tu.wipe(this._temp), this.reset();
      }),
      (r.prototype.update = function (e, t) {
        if ((t === void 0 && (t = e.length), this._finished))
          throw new Error("SHA256: can't update because hash was finished.");
        var i = 0;
        if (((this._bytesHashed += t), this._bufferLength > 0)) {
          for (; this._bufferLength < this.blockSize && t > 0; )
            (this._buffer[this._bufferLength++] = e[i++]), t--;
          this._bufferLength === this.blockSize &&
            (Gf(this._temp, this._state, this._buffer, 0, this.blockSize),
            (this._bufferLength = 0));
        }
        for (
          t >= this.blockSize &&
          ((i = Gf(this._temp, this._state, e, i, t)), (t %= this.blockSize));
          t > 0;

        )
          (this._buffer[this._bufferLength++] = e[i++]), t--;
        return this;
      }),
      (r.prototype.finish = function (e) {
        if (!this._finished) {
          var t = this._bytesHashed,
            i = this._bufferLength,
            n = (t / 536870912) | 0,
            o = t << 3,
            c = t % 64 < 56 ? 64 : 128;
          this._buffer[i] = 128;
          for (var l = i + 1; l < c - 8; l++) this._buffer[l] = 0;
          Fu.writeUint32BE(n, this._buffer, c - 8),
            Fu.writeUint32BE(o, this._buffer, c - 4),
            Gf(this._temp, this._state, this._buffer, 0, c),
            (this._finished = !0);
        }
        for (var l = 0; l < this.digestLength / 4; l++)
          Fu.writeUint32BE(this._state[l], e, l * 4);
        return this;
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          state: new Int32Array(this._state),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (r.prototype.restoreState = function (e) {
        return (
          this._state.set(e.state),
          (this._bufferLength = e.bufferLength),
          e.buffer && this._buffer.set(e.buffer),
          (this._bytesHashed = e.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        Tu.wipe(e.state),
          e.buffer && Tu.wipe(e.buffer),
          (e.bufferLength = 0),
          (e.bytesHashed = 0);
      }),
      r
    );
  })();
  is.SHA256 = Gy;
  var j4 = new Int32Array([
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ]);
  function Gf(r, e, t, i, n) {
    for (; n >= 64; ) {
      for (
        var o = e[0],
          c = e[1],
          l = e[2],
          g = e[3],
          d = e[4],
          y = e[5],
          v = e[6],
          A = e[7],
          E = 0;
        E < 16;
        E++
      ) {
        var P = i + E * 4;
        r[E] = Fu.readUint32BE(t, P);
      }
      for (var E = 16; E < 64; E++) {
        var N = r[E - 2],
          T = ((N >>> 17) | (N << 15)) ^ ((N >>> 19) | (N << 13)) ^ (N >>> 10);
        N = r[E - 15];
        var K = ((N >>> 7) | (N << 25)) ^ ((N >>> 18) | (N << 14)) ^ (N >>> 3);
        r[E] = ((T + r[E - 7]) | 0) + ((K + r[E - 16]) | 0);
      }
      for (var E = 0; E < 64; E++) {
        var T =
            ((((((d >>> 6) | (d << 26)) ^
              ((d >>> 11) | (d << 21)) ^
              ((d >>> 25) | (d << 7))) +
              ((d & y) ^ (~d & v))) |
              0) +
              ((A + ((j4[E] + r[E]) | 0)) | 0)) |
            0,
          K =
            ((((o >>> 2) | (o << 30)) ^
              ((o >>> 13) | (o << 19)) ^
              ((o >>> 22) | (o << 10))) +
              ((o & c) ^ (o & l) ^ (c & l))) |
            0;
        (A = v),
          (v = y),
          (y = d),
          (d = (g + T) | 0),
          (g = l),
          (l = c),
          (c = o),
          (o = (T + K) | 0);
      }
      (e[0] += o),
        (e[1] += c),
        (e[2] += l),
        (e[3] += g),
        (e[4] += d),
        (e[5] += y),
        (e[6] += v),
        (e[7] += A),
        (i += 64),
        (n -= 64);
    }
    return i;
  }
  function z4(r) {
    var e = new Gy();
    e.update(r);
    var t = e.digest();
    return e.clean(), t;
  }
  is.hash = z4;
});
var Qy = Se((Ut) => {
  "use strict";
  Object.defineProperty(Ut, "__esModule", { value: !0 });
  Ut.sharedKey =
    Ut.generateKeyPair =
    Ut.generateKeyPairFromSeed =
    Ut.scalarMultBase =
    Ut.scalarMult =
    Ut.SHARED_KEY_LENGTH =
    Ut.SECRET_KEY_LENGTH =
    Ut.PUBLIC_KEY_LENGTH =
      void 0;
  var k4 = Ua(),
    H4 = oi();
  Ut.PUBLIC_KEY_LENGTH = 32;
  Ut.SECRET_KEY_LENGTH = 32;
  Ut.SHARED_KEY_LENGTH = 32;
  function ji(r) {
    let e = new Float64Array(16);
    if (r) for (let t = 0; t < r.length; t++) e[t] = r[t];
    return e;
  }
  var Jy = new Uint8Array(32);
  Jy[0] = 9;
  var K4 = ji([56129, 1]);
  function $f(r) {
    let e = 1;
    for (let t = 0; t < 16; t++) {
      let i = r[t] + e + 65535;
      (e = Math.floor(i / 65536)), (r[t] = i - e * 65536);
    }
    r[0] += e - 1 + 37 * (e - 1);
  }
  function Ba(r, e, t) {
    let i = ~(t - 1);
    for (let n = 0; n < 16; n++) {
      let o = i & (r[n] ^ e[n]);
      (r[n] ^= o), (e[n] ^= o);
    }
  }
  function V4(r, e) {
    let t = ji(),
      i = ji();
    for (let n = 0; n < 16; n++) i[n] = e[n];
    $f(i), $f(i), $f(i);
    for (let n = 0; n < 2; n++) {
      t[0] = i[0] - 65517;
      for (let c = 1; c < 15; c++)
        (t[c] = i[c] - 65535 - ((t[c - 1] >> 16) & 1)), (t[c - 1] &= 65535);
      t[15] = i[15] - 32767 - ((t[14] >> 16) & 1);
      let o = (t[15] >> 16) & 1;
      (t[14] &= 65535), Ba(i, t, 1 - o);
    }
    for (let n = 0; n < 16; n++)
      (r[2 * n] = i[n] & 255), (r[2 * n + 1] = i[n] >> 8);
  }
  function G4(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[2 * t] + (e[2 * t + 1] << 8);
    r[15] &= 32767;
  }
  function Lu(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] + t[i];
  }
  function Uu(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] - t[i];
  }
  function Cn(r, e, t) {
    let i,
      n,
      o = 0,
      c = 0,
      l = 0,
      g = 0,
      d = 0,
      y = 0,
      v = 0,
      A = 0,
      E = 0,
      P = 0,
      N = 0,
      T = 0,
      K = 0,
      Z = 0,
      J = 0,
      G = 0,
      Q = 0,
      ee = 0,
      L = 0,
      B = 0,
      ae = 0,
      U = 0,
      j = 0,
      W = 0,
      h = 0,
      m = 0,
      b = 0,
      x = 0,
      D = 0,
      M = 0,
      z = 0,
      C = t[0],
      p = t[1],
      I = t[2],
      ue = t[3],
      ne = t[4],
      w = t[5],
      $ = t[6],
      H = t[7],
      Y = t[8],
      he = t[9],
      oe = t[10],
      ce = t[11],
      fe = t[12],
      pe = t[13],
      se = t[14],
      ve = t[15];
    (i = e[0]),
      (o += i * C),
      (c += i * p),
      (l += i * I),
      (g += i * ue),
      (d += i * ne),
      (y += i * w),
      (v += i * $),
      (A += i * H),
      (E += i * Y),
      (P += i * he),
      (N += i * oe),
      (T += i * ce),
      (K += i * fe),
      (Z += i * pe),
      (J += i * se),
      (G += i * ve),
      (i = e[1]),
      (c += i * C),
      (l += i * p),
      (g += i * I),
      (d += i * ue),
      (y += i * ne),
      (v += i * w),
      (A += i * $),
      (E += i * H),
      (P += i * Y),
      (N += i * he),
      (T += i * oe),
      (K += i * ce),
      (Z += i * fe),
      (J += i * pe),
      (G += i * se),
      (Q += i * ve),
      (i = e[2]),
      (l += i * C),
      (g += i * p),
      (d += i * I),
      (y += i * ue),
      (v += i * ne),
      (A += i * w),
      (E += i * $),
      (P += i * H),
      (N += i * Y),
      (T += i * he),
      (K += i * oe),
      (Z += i * ce),
      (J += i * fe),
      (G += i * pe),
      (Q += i * se),
      (ee += i * ve),
      (i = e[3]),
      (g += i * C),
      (d += i * p),
      (y += i * I),
      (v += i * ue),
      (A += i * ne),
      (E += i * w),
      (P += i * $),
      (N += i * H),
      (T += i * Y),
      (K += i * he),
      (Z += i * oe),
      (J += i * ce),
      (G += i * fe),
      (Q += i * pe),
      (ee += i * se),
      (L += i * ve),
      (i = e[4]),
      (d += i * C),
      (y += i * p),
      (v += i * I),
      (A += i * ue),
      (E += i * ne),
      (P += i * w),
      (N += i * $),
      (T += i * H),
      (K += i * Y),
      (Z += i * he),
      (J += i * oe),
      (G += i * ce),
      (Q += i * fe),
      (ee += i * pe),
      (L += i * se),
      (B += i * ve),
      (i = e[5]),
      (y += i * C),
      (v += i * p),
      (A += i * I),
      (E += i * ue),
      (P += i * ne),
      (N += i * w),
      (T += i * $),
      (K += i * H),
      (Z += i * Y),
      (J += i * he),
      (G += i * oe),
      (Q += i * ce),
      (ee += i * fe),
      (L += i * pe),
      (B += i * se),
      (ae += i * ve),
      (i = e[6]),
      (v += i * C),
      (A += i * p),
      (E += i * I),
      (P += i * ue),
      (N += i * ne),
      (T += i * w),
      (K += i * $),
      (Z += i * H),
      (J += i * Y),
      (G += i * he),
      (Q += i * oe),
      (ee += i * ce),
      (L += i * fe),
      (B += i * pe),
      (ae += i * se),
      (U += i * ve),
      (i = e[7]),
      (A += i * C),
      (E += i * p),
      (P += i * I),
      (N += i * ue),
      (T += i * ne),
      (K += i * w),
      (Z += i * $),
      (J += i * H),
      (G += i * Y),
      (Q += i * he),
      (ee += i * oe),
      (L += i * ce),
      (B += i * fe),
      (ae += i * pe),
      (U += i * se),
      (j += i * ve),
      (i = e[8]),
      (E += i * C),
      (P += i * p),
      (N += i * I),
      (T += i * ue),
      (K += i * ne),
      (Z += i * w),
      (J += i * $),
      (G += i * H),
      (Q += i * Y),
      (ee += i * he),
      (L += i * oe),
      (B += i * ce),
      (ae += i * fe),
      (U += i * pe),
      (j += i * se),
      (W += i * ve),
      (i = e[9]),
      (P += i * C),
      (N += i * p),
      (T += i * I),
      (K += i * ue),
      (Z += i * ne),
      (J += i * w),
      (G += i * $),
      (Q += i * H),
      (ee += i * Y),
      (L += i * he),
      (B += i * oe),
      (ae += i * ce),
      (U += i * fe),
      (j += i * pe),
      (W += i * se),
      (h += i * ve),
      (i = e[10]),
      (N += i * C),
      (T += i * p),
      (K += i * I),
      (Z += i * ue),
      (J += i * ne),
      (G += i * w),
      (Q += i * $),
      (ee += i * H),
      (L += i * Y),
      (B += i * he),
      (ae += i * oe),
      (U += i * ce),
      (j += i * fe),
      (W += i * pe),
      (h += i * se),
      (m += i * ve),
      (i = e[11]),
      (T += i * C),
      (K += i * p),
      (Z += i * I),
      (J += i * ue),
      (G += i * ne),
      (Q += i * w),
      (ee += i * $),
      (L += i * H),
      (B += i * Y),
      (ae += i * he),
      (U += i * oe),
      (j += i * ce),
      (W += i * fe),
      (h += i * pe),
      (m += i * se),
      (b += i * ve),
      (i = e[12]),
      (K += i * C),
      (Z += i * p),
      (J += i * I),
      (G += i * ue),
      (Q += i * ne),
      (ee += i * w),
      (L += i * $),
      (B += i * H),
      (ae += i * Y),
      (U += i * he),
      (j += i * oe),
      (W += i * ce),
      (h += i * fe),
      (m += i * pe),
      (b += i * se),
      (x += i * ve),
      (i = e[13]),
      (Z += i * C),
      (J += i * p),
      (G += i * I),
      (Q += i * ue),
      (ee += i * ne),
      (L += i * w),
      (B += i * $),
      (ae += i * H),
      (U += i * Y),
      (j += i * he),
      (W += i * oe),
      (h += i * ce),
      (m += i * fe),
      (b += i * pe),
      (x += i * se),
      (D += i * ve),
      (i = e[14]),
      (J += i * C),
      (G += i * p),
      (Q += i * I),
      (ee += i * ue),
      (L += i * ne),
      (B += i * w),
      (ae += i * $),
      (U += i * H),
      (j += i * Y),
      (W += i * he),
      (h += i * oe),
      (m += i * ce),
      (b += i * fe),
      (x += i * pe),
      (D += i * se),
      (M += i * ve),
      (i = e[15]),
      (G += i * C),
      (Q += i * p),
      (ee += i * I),
      (L += i * ue),
      (B += i * ne),
      (ae += i * w),
      (U += i * $),
      (j += i * H),
      (W += i * Y),
      (h += i * he),
      (m += i * oe),
      (b += i * ce),
      (x += i * fe),
      (D += i * pe),
      (M += i * se),
      (z += i * ve),
      (o += 38 * Q),
      (c += 38 * ee),
      (l += 38 * L),
      (g += 38 * B),
      (d += 38 * ae),
      (y += 38 * U),
      (v += 38 * j),
      (A += 38 * W),
      (E += 38 * h),
      (P += 38 * m),
      (N += 38 * b),
      (T += 38 * x),
      (K += 38 * D),
      (Z += 38 * M),
      (J += 38 * z),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = d + n + 65535),
      (n = Math.floor(i / 65536)),
      (d = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = N + n + 65535),
      (n = Math.floor(i / 65536)),
      (N = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = K + n + 65535),
      (n = Math.floor(i / 65536)),
      (K = i - n * 65536),
      (i = Z + n + 65535),
      (n = Math.floor(i / 65536)),
      (Z = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = d + n + 65535),
      (n = Math.floor(i / 65536)),
      (d = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = N + n + 65535),
      (n = Math.floor(i / 65536)),
      (N = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = K + n + 65535),
      (n = Math.floor(i / 65536)),
      (K = i - n * 65536),
      (i = Z + n + 65535),
      (n = Math.floor(i / 65536)),
      (Z = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (r[0] = o),
      (r[1] = c),
      (r[2] = l),
      (r[3] = g),
      (r[4] = d),
      (r[5] = y),
      (r[6] = v),
      (r[7] = A),
      (r[8] = E),
      (r[9] = P),
      (r[10] = N),
      (r[11] = T),
      (r[12] = K),
      (r[13] = Z),
      (r[14] = J),
      (r[15] = G);
  }
  function qa(r, e) {
    Cn(r, e, e);
  }
  function $4(r, e) {
    let t = ji();
    for (let i = 0; i < 16; i++) t[i] = e[i];
    for (let i = 253; i >= 0; i--) qa(t, t), i !== 2 && i !== 4 && Cn(t, t, e);
    for (let i = 0; i < 16; i++) r[i] = t[i];
  }
  function Jf(r, e) {
    let t = new Uint8Array(32),
      i = new Float64Array(80),
      n = ji(),
      o = ji(),
      c = ji(),
      l = ji(),
      g = ji(),
      d = ji();
    for (let E = 0; E < 31; E++) t[E] = r[E];
    (t[31] = (r[31] & 127) | 64), (t[0] &= 248), G4(i, e);
    for (let E = 0; E < 16; E++) o[E] = i[E];
    n[0] = l[0] = 1;
    for (let E = 254; E >= 0; --E) {
      let P = (t[E >>> 3] >>> (E & 7)) & 1;
      Ba(n, o, P),
        Ba(c, l, P),
        Lu(g, n, c),
        Uu(n, n, c),
        Lu(c, o, l),
        Uu(o, o, l),
        qa(l, g),
        qa(d, n),
        Cn(n, c, n),
        Cn(c, o, g),
        Lu(g, n, c),
        Uu(n, n, c),
        qa(o, n),
        Uu(c, l, d),
        Cn(n, c, K4),
        Lu(n, n, l),
        Cn(c, c, n),
        Cn(n, l, d),
        Cn(l, o, i),
        qa(o, g),
        Ba(n, o, P),
        Ba(c, l, P);
    }
    for (let E = 0; E < 16; E++)
      (i[E + 16] = n[E]),
        (i[E + 32] = c[E]),
        (i[E + 48] = o[E]),
        (i[E + 64] = l[E]);
    let y = i.subarray(32),
      v = i.subarray(16);
    $4(y, y), Cn(v, v, y);
    let A = new Uint8Array(32);
    return V4(A, v), A;
  }
  Ut.scalarMult = Jf;
  function Wy(r) {
    return Jf(r, Jy);
  }
  Ut.scalarMultBase = Wy;
  function Yy(r) {
    if (r.length !== Ut.SECRET_KEY_LENGTH)
      throw new Error(`x25519: seed must be ${Ut.SECRET_KEY_LENGTH} bytes`);
    let e = new Uint8Array(r);
    return { publicKey: Wy(e), secretKey: e };
  }
  Ut.generateKeyPairFromSeed = Yy;
  function J4(r) {
    let e = (0, k4.randomBytes)(32, r),
      t = Yy(e);
    return (0, H4.wipe)(e), t;
  }
  Ut.generateKeyPair = J4;
  function W4(r, e, t = !1) {
    if (r.length !== Ut.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect secret key length");
    if (e.length !== Ut.PUBLIC_KEY_LENGTH)
      throw new Error("X25519: incorrect public key length");
    let i = Jf(r, e);
    if (t) {
      let n = 0;
      for (let o = 0; o < i.length; o++) n |= i[o];
      if (n === 0) throw new Error("X25519: invalid shared key");
    }
    return i;
  }
  Ut.sharedKey = W4;
});
var Tb = Se((jB, Nb) => {
  "use strict";
  function d7(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Nb.exports = p7;
  function p7(r, e, t) {
    var i = (t && t.stringify) || d7,
      n = 1;
    if (typeof r == "object" && r !== null) {
      var o = e.length + n;
      if (o === 1) return r;
      var c = new Array(o);
      c[0] = i(r);
      for (var l = 1; l < o; l++) c[l] = i(e[l]);
      return c.join(" ");
    }
    if (typeof r != "string") return r;
    var g = e.length;
    if (g === 0) return r;
    for (
      var d = "", y = 1 - n, v = -1, A = (r && r.length) || 0, E = 0;
      E < A;

    ) {
      if (r.charCodeAt(E) === 37 && E + 1 < A) {
        switch (((v = v > -1 ? v : 0), r.charCodeAt(E + 1))) {
          case 100:
          case 102:
            if (y >= g || e[y] == null) break;
            v < E && (d += r.slice(v, E)),
              (d += Number(e[y])),
              (v = E + 2),
              E++;
            break;
          case 105:
            if (y >= g || e[y] == null) break;
            v < E && (d += r.slice(v, E)),
              (d += Math.floor(Number(e[y]))),
              (v = E + 2),
              E++;
            break;
          case 79:
          case 111:
          case 106:
            if (y >= g || e[y] === void 0) break;
            v < E && (d += r.slice(v, E));
            var P = typeof e[y];
            if (P === "string") {
              (d += "'" + e[y] + "'"), (v = E + 2), E++;
              break;
            }
            if (P === "function") {
              (d += e[y].name || "<anonymous>"), (v = E + 2), E++;
              break;
            }
            (d += i(e[y])), (v = E + 2), E++;
            break;
          case 115:
            if (y >= g) break;
            v < E && (d += r.slice(v, E)),
              (d += String(e[y])),
              (v = E + 2),
              E++;
            break;
          case 37:
            v < E && (d += r.slice(v, E)), (d += "%"), (v = E + 2), E++, y--;
            break;
        }
        ++y;
      }
      ++E;
    }
    return v === -1 ? r : (v < A && (d += r.slice(v)), d);
  }
});
var Ep = Se((zB, Bb) => {
  "use strict";
  var Fb = Tb();
  Bb.exports = en;
  var lc = S7().console || {},
    g7 = {
      mapHttpRequest: ph,
      mapHttpResponse: ph,
      wrapRequestSerializer: bp,
      wrapResponseSerializer: bp,
      wrapErrorSerializer: bp,
      req: ph,
      res: ph,
      err: b7,
    };
  function m7(r, e) {
    return Array.isArray(r)
      ? r.filter(function (i) {
          return i !== "!stdSerializers.err";
        })
      : r === !0
      ? Object.keys(e)
      : !1;
  }
  function en(r) {
    (r = r || {}), (r.browser = r.browser || {});
    let e = r.browser.transmit;
    if (e && typeof e.send != "function")
      throw Error("pino: transmit option must have a send function");
    let t = r.browser.write || lc;
    r.browser.write && (r.browser.asObject = !0);
    let i = r.serializers || {},
      n = m7(r.browser.serialize, i),
      o = r.browser.serialize;
    Array.isArray(r.browser.serialize) &&
      r.browser.serialize.indexOf("!stdSerializers.err") > -1 &&
      (o = !1);
    let c = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof t == "function" &&
      (t.error = t.fatal = t.warn = t.info = t.debug = t.trace = t),
      r.enabled === !1 && (r.level = "silent");
    let l = r.level || "info",
      g = Object.create(t);
    g.log || (g.log = fc),
      Object.defineProperty(g, "levelVal", { get: y }),
      Object.defineProperty(g, "level", { get: v, set: A });
    let d = {
      transmit: e,
      serialize: n,
      asObject: r.browser.asObject,
      levels: c,
      timestamp: _7(r),
    };
    (g.levels = en.levels),
      (g.level = l),
      (g.setMaxListeners =
        g.getMaxListeners =
        g.emit =
        g.addListener =
        g.on =
        g.prependListener =
        g.once =
        g.prependOnceListener =
        g.removeListener =
        g.removeAllListeners =
        g.listeners =
        g.listenerCount =
        g.eventNames =
        g.write =
        g.flush =
          fc),
      (g.serializers = i),
      (g._serialize = n),
      (g._stdErrSerialize = o),
      (g.child = E),
      e && (g._logEvent = _p());
    function y() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function v() {
      return this._level;
    }
    function A(P) {
      if (P !== "silent" && !this.levels.values[P])
        throw Error("unknown level " + P);
      (this._level = P),
        Jo(d, g, "error", "log"),
        Jo(d, g, "fatal", "error"),
        Jo(d, g, "warn", "error"),
        Jo(d, g, "info", "log"),
        Jo(d, g, "debug", "log"),
        Jo(d, g, "trace", "log");
    }
    function E(P, N) {
      if (!P) throw new Error("missing bindings for child Pino");
      (N = N || {}), n && P.serializers && (N.serializers = P.serializers);
      let T = N.serializers;
      if (n && T) {
        var K = Object.assign({}, i, T),
          Z = r.browser.serialize === !0 ? Object.keys(K) : n;
        delete P.serializers, gh([P], Z, K, this._stdErrSerialize);
      }
      function J(G) {
        (this._childLevel = (G._childLevel | 0) + 1),
          (this.error = Wo(G, P, "error")),
          (this.fatal = Wo(G, P, "fatal")),
          (this.warn = Wo(G, P, "warn")),
          (this.info = Wo(G, P, "info")),
          (this.debug = Wo(G, P, "debug")),
          (this.trace = Wo(G, P, "trace")),
          K && ((this.serializers = K), (this._serialize = Z)),
          e && (this._logEvent = _p([].concat(G._logEvent.bindings, P)));
      }
      return (J.prototype = this), new J(this);
    }
    return g;
  }
  en.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal",
    },
  };
  en.stdSerializers = g7;
  en.stdTimeFunctions = Object.assign(
    {},
    { nullTime: Lb, epochTime: Ub, unixTime: E7, isoTime: A7 }
  );
  function Jo(r, e, t, i) {
    let n = Object.getPrototypeOf(e);
    (e[t] =
      e.levelVal > e.levels.values[t]
        ? fc
        : n[t]
        ? n[t]
        : lc[t] || lc[i] || fc),
      y7(r, e, t);
  }
  function y7(r, e, t) {
    (!r.transmit && e[t] === fc) ||
      (e[t] = (function (i) {
        return function () {
          let o = r.timestamp(),
            c = new Array(arguments.length),
            l =
              Object.getPrototypeOf && Object.getPrototypeOf(this) === lc
                ? lc
                : this;
          for (var g = 0; g < c.length; g++) c[g] = arguments[g];
          if (
            (r.serialize &&
              !r.asObject &&
              gh(c, this._serialize, this.serializers, this._stdErrSerialize),
            r.asObject ? i.call(l, v7(this, t, c, o)) : i.apply(l, c),
            r.transmit)
          ) {
            let d = r.transmit.level || e.level,
              y = en.levels.values[d],
              v = en.levels.values[t];
            if (v < y) return;
            w7(
              this,
              {
                ts: o,
                mSOLodLevel: t,
                mSOLodValue: v,
                transmitLevel: d,
                transmitValue: en.levels.values[r.transmit.level || e.level],
                send: r.transmit.send,
                val: e.levelVal,
              },
              c
            );
          }
        };
      })(e[t]));
  }
  function v7(r, e, t, i) {
    r._serialize && gh(t, r._serialize, r.serializers, r._stdErrSerialize);
    let n = t.slice(),
      o = n[0],
      c = {};
    i && (c.time = i), (c.level = en.levels.values[e]);
    let l = (r._childLevel | 0) + 1;
    if ((l < 1 && (l = 1), o !== null && typeof o == "object")) {
      for (; l-- && typeof n[0] == "object"; ) Object.assign(c, n.shift());
      o = n.length ? Fb(n.shift(), n) : void 0;
    } else typeof o == "string" && (o = Fb(n.shift(), n));
    return o !== void 0 && (c.msg = o), c;
  }
  function gh(r, e, t, i) {
    for (let n in r)
      if (i && r[n] instanceof Error) r[n] = en.stdSerializers.err(r[n]);
      else if (typeof r[n] == "object" && !Array.isArray(r[n]))
        for (let o in r[n])
          e && e.indexOf(o) > -1 && o in t && (r[n][o] = t[o](r[n][o]));
  }
  function Wo(r, e, t) {
    return function () {
      let i = new Array(1 + arguments.length);
      i[0] = e;
      for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
      return r[t].apply(this, i);
    };
  }
  function w7(r, e, t) {
    let i = e.send,
      n = e.ts,
      o = e.mSOLodLevel,
      c = e.mSOLodValue,
      l = e.val,
      g = r._logEvent.bindings;
    gh(
      t,
      r._serialize || Object.keys(r.serializers),
      r.serializers,
      r._stdErrSerialize === void 0 ? !0 : r._stdErrSerialize
    ),
      (r._logEvent.ts = n),
      (r._logEvent.messages = t.filter(function (d) {
        return g.indexOf(d) === -1;
      })),
      (r._logEvent.level.label = o),
      (r._logEvent.level.value = c),
      i(o, r._logEvent, l),
      (r._logEvent = _p(g));
  }
  function _p(r) {
    return {
      ts: 0,
      messages: [],
      bindings: r || [],
      level: { label: "", value: 0 },
    };
  }
  function b7(r) {
    let e = { type: r.constructor.name, msg: r.message, stack: r.stack };
    for (let t in r) e[t] === void 0 && (e[t] = r[t]);
    return e;
  }
  function _7(r) {
    return typeof r.timestamp == "function"
      ? r.timestamp
      : r.timestamp === !1
      ? Lb
      : Ub;
  }
  function ph() {
    return {};
  }
  function bp(r) {
    return r;
  }
  function fc() {}
  function Lb() {
    return !1;
  }
  function Ub() {
    return Date.now();
  }
  function E7() {
    return Math.round(Date.now() / 1e3);
  }
  function A7() {
    return new Date(Date.now()).toISOString();
  }
  function S7() {
    function r(e) {
      return typeof e < "u" && e;
    }
    try {
      return (
        typeof globalThis < "u" ||
          Object.defineProperty(Object.prototype, "globalThis", {
            get: function () {
              return (
                delete Object.prototype.globalThis, (this.globalThis = this)
              );
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return r(self) || r(window) || r(this) || {};
    }
  }
});
var Vb = Se((qn) => {
  "use strict";
  Object.defineProperty(qn, "__esModule", { value: !0 });
  var Qo = Eo(),
    Yo = oi();
  qn.DIGEST_LENGTH = 64;
  qn.BLOCK_SIZE = 128;
  var Kb = (function () {
    function r() {
      (this.digestLength = qn.DIGEST_LENGTH),
        (this.blockSize = qn.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (r.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (r.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.clean = function () {
        Yo.wipe(this._buffer),
          Yo.wipe(this._tempHi),
          Yo.wipe(this._tempLo),
          this.reset();
      }),
      (r.prototype.update = function (e, t) {
        if ((t === void 0 && (t = e.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var i = 0;
        if (((this._bytesHashed += t), this._bufferLength > 0)) {
          for (; this._bufferLength < qn.BLOCK_SIZE && t > 0; )
            (this._buffer[this._bufferLength++] = e[i++]), t--;
          this._bufferLength === this.blockSize &&
            (Dp(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize
            ),
            (this._bufferLength = 0));
        }
        for (
          t >= this.blockSize &&
          ((i = Dp(
            this._tempHi,
            this._tempLo,
            this._stateHi,
            this._stateLo,
            e,
            i,
            t
          )),
          (t %= this.blockSize));
          t > 0;

        )
          (this._buffer[this._bufferLength++] = e[i++]), t--;
        return this;
      }),
      (r.prototype.finish = function (e) {
        if (!this._finished) {
          var t = this._bytesHashed,
            i = this._bufferLength,
            n = (t / 536870912) | 0,
            o = t << 3,
            c = t % 128 < 112 ? 128 : 256;
          this._buffer[i] = 128;
          for (var l = i + 1; l < c - 8; l++) this._buffer[l] = 0;
          Qo.writeUint32BE(n, this._buffer, c - 8),
            Qo.writeUint32BE(o, this._buffer, c - 4),
            Dp(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              c
            ),
            (this._finished = !0);
        }
        for (var l = 0; l < this.digestLength / 8; l++)
          Qo.writeUint32BE(this._stateHi[l], e, l * 8),
            Qo.writeUint32BE(this._stateLo[l], e, l * 8 + 4);
        return this;
      }),
      (r.prototype.digest = function () {
        var e = new Uint8Array(this.digestLength);
        return this.finish(e), e;
      }),
      (r.prototype.saveState = function () {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer:
            this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (r.prototype.restoreState = function (e) {
        return (
          this._stateHi.set(e.stateHi),
          this._stateLo.set(e.stateLo),
          (this._bufferLength = e.bufferLength),
          e.buffer && this._buffer.set(e.buffer),
          (this._bytesHashed = e.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (r.prototype.cleanSavedState = function (e) {
        Yo.wipe(e.stateHi),
          Yo.wipe(e.stateLo),
          e.buffer && Yo.wipe(e.buffer),
          (e.bufferLength = 0),
          (e.bytesHashed = 0);
      }),
      r
    );
  })();
  qn.SHA512 = Kb;
  var Hb = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function Dp(r, e, t, i, n, o, c) {
    for (
      var l = t[0],
        g = t[1],
        d = t[2],
        y = t[3],
        v = t[4],
        A = t[5],
        E = t[6],
        P = t[7],
        N = i[0],
        T = i[1],
        K = i[2],
        Z = i[3],
        J = i[4],
        G = i[5],
        Q = i[6],
        ee = i[7],
        L,
        B,
        ae,
        U,
        j,
        W,
        h,
        m;
      c >= 128;

    ) {
      for (var b = 0; b < 16; b++) {
        var x = 8 * b + o;
        (r[b] = Qo.readUint32BE(n, x)), (e[b] = Qo.readUint32BE(n, x + 4));
      }
      for (var b = 0; b < 80; b++) {
        var D = l,
          M = g,
          z = d,
          C = y,
          p = v,
          I = A,
          ue = E,
          ne = P,
          w = N,
          $ = T,
          H = K,
          Y = Z,
          he = J,
          oe = G,
          ce = Q,
          fe = ee;
        if (
          ((L = P),
          (B = ee),
          (j = B & 65535),
          (W = B >>> 16),
          (h = L & 65535),
          (m = L >>> 16),
          (L =
            ((v >>> 14) | (J << 18)) ^
            ((v >>> 18) | (J << 14)) ^
            ((J >>> 9) | (v << 23))),
          (B =
            ((J >>> 14) | (v << 18)) ^
            ((J >>> 18) | (v << 14)) ^
            ((v >>> 9) | (J << 23))),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (L = (v & A) ^ (~v & E)),
          (B = (J & G) ^ (~J & Q)),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (L = Hb[b * 2]),
          (B = Hb[b * 2 + 1]),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (L = r[b % 16]),
          (B = e[b % 16]),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (W += j >>> 16),
          (h += W >>> 16),
          (m += h >>> 16),
          (ae = (h & 65535) | (m << 16)),
          (U = (j & 65535) | (W << 16)),
          (L = ae),
          (B = U),
          (j = B & 65535),
          (W = B >>> 16),
          (h = L & 65535),
          (m = L >>> 16),
          (L =
            ((l >>> 28) | (N << 4)) ^
            ((N >>> 2) | (l << 30)) ^
            ((N >>> 7) | (l << 25))),
          (B =
            ((N >>> 28) | (l << 4)) ^
            ((l >>> 2) | (N << 30)) ^
            ((l >>> 7) | (N << 25))),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (L = (l & g) ^ (l & d) ^ (g & d)),
          (B = (N & T) ^ (N & K) ^ (T & K)),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (W += j >>> 16),
          (h += W >>> 16),
          (m += h >>> 16),
          (ne = (h & 65535) | (m << 16)),
          (fe = (j & 65535) | (W << 16)),
          (L = C),
          (B = Y),
          (j = B & 65535),
          (W = B >>> 16),
          (h = L & 65535),
          (m = L >>> 16),
          (L = ae),
          (B = U),
          (j += B & 65535),
          (W += B >>> 16),
          (h += L & 65535),
          (m += L >>> 16),
          (W += j >>> 16),
          (h += W >>> 16),
          (m += h >>> 16),
          (C = (h & 65535) | (m << 16)),
          (Y = (j & 65535) | (W << 16)),
          (g = D),
          (d = M),
          (y = z),
          (v = C),
          (A = p),
          (E = I),
          (P = ue),
          (l = ne),
          (T = w),
          (K = $),
          (Z = H),
          (J = Y),
          (G = he),
          (Q = oe),
          (ee = ce),
          (N = fe),
          b % 16 === 15)
        )
          for (var x = 0; x < 16; x++)
            (L = r[x]),
              (B = e[x]),
              (j = B & 65535),
              (W = B >>> 16),
              (h = L & 65535),
              (m = L >>> 16),
              (L = r[(x + 9) % 16]),
              (B = e[(x + 9) % 16]),
              (j += B & 65535),
              (W += B >>> 16),
              (h += L & 65535),
              (m += L >>> 16),
              (ae = r[(x + 1) % 16]),
              (U = e[(x + 1) % 16]),
              (L =
                ((ae >>> 1) | (U << 31)) ^
                ((ae >>> 8) | (U << 24)) ^
                (ae >>> 7)),
              (B =
                ((U >>> 1) | (ae << 31)) ^
                ((U >>> 8) | (ae << 24)) ^
                ((U >>> 7) | (ae << 25))),
              (j += B & 65535),
              (W += B >>> 16),
              (h += L & 65535),
              (m += L >>> 16),
              (ae = r[(x + 14) % 16]),
              (U = e[(x + 14) % 16]),
              (L =
                ((ae >>> 19) | (U << 13)) ^
                ((U >>> 29) | (ae << 3)) ^
                (ae >>> 6)),
              (B =
                ((U >>> 19) | (ae << 13)) ^
                ((ae >>> 29) | (U << 3)) ^
                ((U >>> 6) | (ae << 26))),
              (j += B & 65535),
              (W += B >>> 16),
              (h += L & 65535),
              (m += L >>> 16),
              (W += j >>> 16),
              (h += W >>> 16),
              (m += h >>> 16),
              (r[x] = (h & 65535) | (m << 16)),
              (e[x] = (j & 65535) | (W << 16));
      }
      (L = l),
        (B = N),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[0]),
        (B = i[0]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[0] = l = (h & 65535) | (m << 16)),
        (i[0] = N = (j & 65535) | (W << 16)),
        (L = g),
        (B = T),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[1]),
        (B = i[1]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[1] = g = (h & 65535) | (m << 16)),
        (i[1] = T = (j & 65535) | (W << 16)),
        (L = d),
        (B = K),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[2]),
        (B = i[2]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[2] = d = (h & 65535) | (m << 16)),
        (i[2] = K = (j & 65535) | (W << 16)),
        (L = y),
        (B = Z),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[3]),
        (B = i[3]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[3] = y = (h & 65535) | (m << 16)),
        (i[3] = Z = (j & 65535) | (W << 16)),
        (L = v),
        (B = J),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[4]),
        (B = i[4]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[4] = v = (h & 65535) | (m << 16)),
        (i[4] = J = (j & 65535) | (W << 16)),
        (L = A),
        (B = G),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[5]),
        (B = i[5]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[5] = A = (h & 65535) | (m << 16)),
        (i[5] = G = (j & 65535) | (W << 16)),
        (L = E),
        (B = Q),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[6]),
        (B = i[6]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[6] = E = (h & 65535) | (m << 16)),
        (i[6] = Q = (j & 65535) | (W << 16)),
        (L = P),
        (B = ee),
        (j = B & 65535),
        (W = B >>> 16),
        (h = L & 65535),
        (m = L >>> 16),
        (L = t[7]),
        (B = i[7]),
        (j += B & 65535),
        (W += B >>> 16),
        (h += L & 65535),
        (m += L >>> 16),
        (W += j >>> 16),
        (h += W >>> 16),
        (m += h >>> 16),
        (t[7] = P = (h & 65535) | (m << 16)),
        (i[7] = ee = (j & 65535) | (W << 16)),
        (o += 128),
        (c -= 128);
    }
    return o;
  }
  function L7(r) {
    var e = new Kb();
    e.update(r);
    var t = e.digest();
    return e.clean(), t;
  }
  qn.hash = L7;
});
var s2 = Se((Qe) => {
  "use strict";
  Object.defineProperty(Qe, "__esModule", { value: !0 });
  Qe.convertSecretKeyToX25519 =
    Qe.convertPublicKeyToX25519 =
    Qe.verify =
    Qe.sign =
    Qe.extractPublicKeyFromSecretKey =
    Qe.generateKeyPair =
    Qe.generateKeyPairFromSeed =
    Qe.SEED_LENGTH =
    Qe.SECRET_KEY_LENGTH =
    Qe.PUBLIC_KEY_LENGTH =
    Qe.SIGNATURE_LENGTH =
      void 0;
  var U7 = Ua(),
    pc = Vb(),
    Yb = oi();
  Qe.SIGNATURE_LENGTH = 64;
  Qe.PUBLIC_KEY_LENGTH = 32;
  Qe.SECRET_KEY_LENGTH = 64;
  Qe.SEED_LENGTH = 32;
  function be(r) {
    let e = new Float64Array(16);
    if (r) for (let t = 0; t < r.length; t++) e[t] = r[t];
    return e;
  }
  var B7 = new Uint8Array(32);
  B7[0] = 9;
  var Op = be(),
    Xo = be([1]),
    q7 = be([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505,
      36039, 65139, 11119, 27886, 20995,
    ]),
    j7 = be([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010,
      6542, 64743, 22239, 55772, 9222,
    ]),
    Gb = be([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982,
      57905, 49316, 21502, 52590, 14035, 8553,
    ]),
    $b = be([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214, 26214, 26214, 26214,
    ]),
    z7 = be([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153,
      11085, 57099, 20417, 9344, 11139,
    ]);
  function ls(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[t] | 0;
  }
  function Rp(r) {
    let e = 1;
    for (let t = 0; t < 16; t++) {
      let i = r[t] + e + 65535;
      (e = Math.floor(i / 65536)), (r[t] = i - e * 65536);
    }
    r[0] += e - 1 + 37 * (e - 1);
  }
  function Qb(r, e, t) {
    let i = ~(t - 1);
    for (let n = 0; n < 16; n++) {
      let o = i & (r[n] ^ e[n]);
      (r[n] ^= o), (e[n] ^= o);
    }
  }
  function gc(r, e) {
    let t = be(),
      i = be();
    for (let n = 0; n < 16; n++) i[n] = e[n];
    Rp(i), Rp(i), Rp(i);
    for (let n = 0; n < 2; n++) {
      t[0] = i[0] - 65517;
      for (let c = 1; c < 15; c++)
        (t[c] = i[c] - 65535 - ((t[c - 1] >> 16) & 1)), (t[c - 1] &= 65535);
      t[15] = i[15] - 32767 - ((t[14] >> 16) & 1);
      let o = (t[15] >> 16) & 1;
      (t[14] &= 65535), Qb(i, t, 1 - o);
    }
    for (let n = 0; n < 16; n++)
      (r[2 * n] = i[n] & 255), (r[2 * n + 1] = i[n] >> 8);
  }
  function Xb(r, e) {
    let t = 0;
    for (let i = 0; i < 32; i++) t |= r[i] ^ e[i];
    return (1 & ((t - 1) >>> 8)) - 1;
  }
  function Jb(r, e) {
    let t = new Uint8Array(32),
      i = new Uint8Array(32);
    return gc(t, r), gc(i, e), Xb(t, i);
  }
  function Zb(r) {
    let e = new Uint8Array(32);
    return gc(e, r), e[0] & 1;
  }
  function k7(r, e) {
    for (let t = 0; t < 16; t++) r[t] = e[2 * t] + (e[2 * t + 1] << 8);
    r[15] &= 32767;
  }
  function Hs(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] + t[i];
  }
  function Vs(r, e, t) {
    for (let i = 0; i < 16; i++) r[i] = e[i] - t[i];
  }
  function ut(r, e, t) {
    let i,
      n,
      o = 0,
      c = 0,
      l = 0,
      g = 0,
      d = 0,
      y = 0,
      v = 0,
      A = 0,
      E = 0,
      P = 0,
      N = 0,
      T = 0,
      K = 0,
      Z = 0,
      J = 0,
      G = 0,
      Q = 0,
      ee = 0,
      L = 0,
      B = 0,
      ae = 0,
      U = 0,
      j = 0,
      W = 0,
      h = 0,
      m = 0,
      b = 0,
      x = 0,
      D = 0,
      M = 0,
      z = 0,
      C = t[0],
      p = t[1],
      I = t[2],
      ue = t[3],
      ne = t[4],
      w = t[5],
      $ = t[6],
      H = t[7],
      Y = t[8],
      he = t[9],
      oe = t[10],
      ce = t[11],
      fe = t[12],
      pe = t[13],
      se = t[14],
      ve = t[15];
    (i = e[0]),
      (o += i * C),
      (c += i * p),
      (l += i * I),
      (g += i * ue),
      (d += i * ne),
      (y += i * w),
      (v += i * $),
      (A += i * H),
      (E += i * Y),
      (P += i * he),
      (N += i * oe),
      (T += i * ce),
      (K += i * fe),
      (Z += i * pe),
      (J += i * se),
      (G += i * ve),
      (i = e[1]),
      (c += i * C),
      (l += i * p),
      (g += i * I),
      (d += i * ue),
      (y += i * ne),
      (v += i * w),
      (A += i * $),
      (E += i * H),
      (P += i * Y),
      (N += i * he),
      (T += i * oe),
      (K += i * ce),
      (Z += i * fe),
      (J += i * pe),
      (G += i * se),
      (Q += i * ve),
      (i = e[2]),
      (l += i * C),
      (g += i * p),
      (d += i * I),
      (y += i * ue),
      (v += i * ne),
      (A += i * w),
      (E += i * $),
      (P += i * H),
      (N += i * Y),
      (T += i * he),
      (K += i * oe),
      (Z += i * ce),
      (J += i * fe),
      (G += i * pe),
      (Q += i * se),
      (ee += i * ve),
      (i = e[3]),
      (g += i * C),
      (d += i * p),
      (y += i * I),
      (v += i * ue),
      (A += i * ne),
      (E += i * w),
      (P += i * $),
      (N += i * H),
      (T += i * Y),
      (K += i * he),
      (Z += i * oe),
      (J += i * ce),
      (G += i * fe),
      (Q += i * pe),
      (ee += i * se),
      (L += i * ve),
      (i = e[4]),
      (d += i * C),
      (y += i * p),
      (v += i * I),
      (A += i * ue),
      (E += i * ne),
      (P += i * w),
      (N += i * $),
      (T += i * H),
      (K += i * Y),
      (Z += i * he),
      (J += i * oe),
      (G += i * ce),
      (Q += i * fe),
      (ee += i * pe),
      (L += i * se),
      (B += i * ve),
      (i = e[5]),
      (y += i * C),
      (v += i * p),
      (A += i * I),
      (E += i * ue),
      (P += i * ne),
      (N += i * w),
      (T += i * $),
      (K += i * H),
      (Z += i * Y),
      (J += i * he),
      (G += i * oe),
      (Q += i * ce),
      (ee += i * fe),
      (L += i * pe),
      (B += i * se),
      (ae += i * ve),
      (i = e[6]),
      (v += i * C),
      (A += i * p),
      (E += i * I),
      (P += i * ue),
      (N += i * ne),
      (T += i * w),
      (K += i * $),
      (Z += i * H),
      (J += i * Y),
      (G += i * he),
      (Q += i * oe),
      (ee += i * ce),
      (L += i * fe),
      (B += i * pe),
      (ae += i * se),
      (U += i * ve),
      (i = e[7]),
      (A += i * C),
      (E += i * p),
      (P += i * I),
      (N += i * ue),
      (T += i * ne),
      (K += i * w),
      (Z += i * $),
      (J += i * H),
      (G += i * Y),
      (Q += i * he),
      (ee += i * oe),
      (L += i * ce),
      (B += i * fe),
      (ae += i * pe),
      (U += i * se),
      (j += i * ve),
      (i = e[8]),
      (E += i * C),
      (P += i * p),
      (N += i * I),
      (T += i * ue),
      (K += i * ne),
      (Z += i * w),
      (J += i * $),
      (G += i * H),
      (Q += i * Y),
      (ee += i * he),
      (L += i * oe),
      (B += i * ce),
      (ae += i * fe),
      (U += i * pe),
      (j += i * se),
      (W += i * ve),
      (i = e[9]),
      (P += i * C),
      (N += i * p),
      (T += i * I),
      (K += i * ue),
      (Z += i * ne),
      (J += i * w),
      (G += i * $),
      (Q += i * H),
      (ee += i * Y),
      (L += i * he),
      (B += i * oe),
      (ae += i * ce),
      (U += i * fe),
      (j += i * pe),
      (W += i * se),
      (h += i * ve),
      (i = e[10]),
      (N += i * C),
      (T += i * p),
      (K += i * I),
      (Z += i * ue),
      (J += i * ne),
      (G += i * w),
      (Q += i * $),
      (ee += i * H),
      (L += i * Y),
      (B += i * he),
      (ae += i * oe),
      (U += i * ce),
      (j += i * fe),
      (W += i * pe),
      (h += i * se),
      (m += i * ve),
      (i = e[11]),
      (T += i * C),
      (K += i * p),
      (Z += i * I),
      (J += i * ue),
      (G += i * ne),
      (Q += i * w),
      (ee += i * $),
      (L += i * H),
      (B += i * Y),
      (ae += i * he),
      (U += i * oe),
      (j += i * ce),
      (W += i * fe),
      (h += i * pe),
      (m += i * se),
      (b += i * ve),
      (i = e[12]),
      (K += i * C),
      (Z += i * p),
      (J += i * I),
      (G += i * ue),
      (Q += i * ne),
      (ee += i * w),
      (L += i * $),
      (B += i * H),
      (ae += i * Y),
      (U += i * he),
      (j += i * oe),
      (W += i * ce),
      (h += i * fe),
      (m += i * pe),
      (b += i * se),
      (x += i * ve),
      (i = e[13]),
      (Z += i * C),
      (J += i * p),
      (G += i * I),
      (Q += i * ue),
      (ee += i * ne),
      (L += i * w),
      (B += i * $),
      (ae += i * H),
      (U += i * Y),
      (j += i * he),
      (W += i * oe),
      (h += i * ce),
      (m += i * fe),
      (b += i * pe),
      (x += i * se),
      (D += i * ve),
      (i = e[14]),
      (J += i * C),
      (G += i * p),
      (Q += i * I),
      (ee += i * ue),
      (L += i * ne),
      (B += i * w),
      (ae += i * $),
      (U += i * H),
      (j += i * Y),
      (W += i * he),
      (h += i * oe),
      (m += i * ce),
      (b += i * fe),
      (x += i * pe),
      (D += i * se),
      (M += i * ve),
      (i = e[15]),
      (G += i * C),
      (Q += i * p),
      (ee += i * I),
      (L += i * ue),
      (B += i * ne),
      (ae += i * w),
      (U += i * $),
      (j += i * H),
      (W += i * Y),
      (h += i * he),
      (m += i * oe),
      (b += i * ce),
      (x += i * fe),
      (D += i * pe),
      (M += i * se),
      (z += i * ve),
      (o += 38 * Q),
      (c += 38 * ee),
      (l += 38 * L),
      (g += 38 * B),
      (d += 38 * ae),
      (y += 38 * U),
      (v += 38 * j),
      (A += 38 * W),
      (E += 38 * h),
      (P += 38 * m),
      (N += 38 * b),
      (T += 38 * x),
      (K += 38 * D),
      (Z += 38 * M),
      (J += 38 * z),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = d + n + 65535),
      (n = Math.floor(i / 65536)),
      (d = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = N + n + 65535),
      (n = Math.floor(i / 65536)),
      (N = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = K + n + 65535),
      (n = Math.floor(i / 65536)),
      (K = i - n * 65536),
      (i = Z + n + 65535),
      (n = Math.floor(i / 65536)),
      (Z = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (n = 1),
      (i = o + n + 65535),
      (n = Math.floor(i / 65536)),
      (o = i - n * 65536),
      (i = c + n + 65535),
      (n = Math.floor(i / 65536)),
      (c = i - n * 65536),
      (i = l + n + 65535),
      (n = Math.floor(i / 65536)),
      (l = i - n * 65536),
      (i = g + n + 65535),
      (n = Math.floor(i / 65536)),
      (g = i - n * 65536),
      (i = d + n + 65535),
      (n = Math.floor(i / 65536)),
      (d = i - n * 65536),
      (i = y + n + 65535),
      (n = Math.floor(i / 65536)),
      (y = i - n * 65536),
      (i = v + n + 65535),
      (n = Math.floor(i / 65536)),
      (v = i - n * 65536),
      (i = A + n + 65535),
      (n = Math.floor(i / 65536)),
      (A = i - n * 65536),
      (i = E + n + 65535),
      (n = Math.floor(i / 65536)),
      (E = i - n * 65536),
      (i = P + n + 65535),
      (n = Math.floor(i / 65536)),
      (P = i - n * 65536),
      (i = N + n + 65535),
      (n = Math.floor(i / 65536)),
      (N = i - n * 65536),
      (i = T + n + 65535),
      (n = Math.floor(i / 65536)),
      (T = i - n * 65536),
      (i = K + n + 65535),
      (n = Math.floor(i / 65536)),
      (K = i - n * 65536),
      (i = Z + n + 65535),
      (n = Math.floor(i / 65536)),
      (Z = i - n * 65536),
      (i = J + n + 65535),
      (n = Math.floor(i / 65536)),
      (J = i - n * 65536),
      (i = G + n + 65535),
      (n = Math.floor(i / 65536)),
      (G = i - n * 65536),
      (o += n - 1 + 37 * (n - 1)),
      (r[0] = o),
      (r[1] = c),
      (r[2] = l),
      (r[3] = g),
      (r[4] = d),
      (r[5] = y),
      (r[6] = v),
      (r[7] = A),
      (r[8] = E),
      (r[9] = P),
      (r[10] = N),
      (r[11] = T),
      (r[12] = K),
      (r[13] = Z),
      (r[14] = J),
      (r[15] = G);
  }
  function Ks(r, e) {
    ut(r, e, e);
  }
  function e2(r, e) {
    let t = be(),
      i;
    for (i = 0; i < 16; i++) t[i] = e[i];
    for (i = 253; i >= 0; i--) Ks(t, t), i !== 2 && i !== 4 && ut(t, t, e);
    for (i = 0; i < 16; i++) r[i] = t[i];
  }
  function H7(r, e) {
    let t = be(),
      i;
    for (i = 0; i < 16; i++) t[i] = e[i];
    for (i = 250; i >= 0; i--) Ks(t, t), i !== 1 && ut(t, t, e);
    for (i = 0; i < 16; i++) r[i] = t[i];
  }
  function Pp(r, e) {
    let t = be(),
      i = be(),
      n = be(),
      o = be(),
      c = be(),
      l = be(),
      g = be(),
      d = be(),
      y = be();
    Vs(t, r[1], r[0]),
      Vs(y, e[1], e[0]),
      ut(t, t, y),
      Hs(i, r[0], r[1]),
      Hs(y, e[0], e[1]),
      ut(i, i, y),
      ut(n, r[3], e[3]),
      ut(n, n, j7),
      ut(o, r[2], e[2]),
      Hs(o, o, o),
      Vs(c, i, t),
      Vs(l, o, n),
      Hs(g, o, n),
      Hs(d, i, t),
      ut(r[0], c, l),
      ut(r[1], d, g),
      ut(r[2], g, l),
      ut(r[3], c, d);
  }
  function Wb(r, e, t) {
    for (let i = 0; i < 4; i++) Qb(r[i], e[i], t);
  }
  function Np(r, e) {
    let t = be(),
      i = be(),
      n = be();
    e2(n, e[2]),
      ut(t, e[0], n),
      ut(i, e[1], n),
      gc(r, i),
      (r[31] ^= Zb(t) << 7);
  }
  function t2(r, e, t) {
    ls(r[0], Op), ls(r[1], Xo), ls(r[2], Xo), ls(r[3], Op);
    for (let i = 255; i >= 0; --i) {
      let n = (t[(i / 8) | 0] >> (i & 7)) & 1;
      Wb(r, e, n), Pp(e, r), Pp(r, r), Wb(r, e, n);
    }
  }
  function Tp(r, e) {
    let t = [be(), be(), be(), be()];
    ls(t[0], Gb), ls(t[1], $b), ls(t[2], Xo), ut(t[3], Gb, $b), t2(r, t, e);
  }
  function r2(r) {
    if (r.length !== Qe.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${Qe.SEED_LENGTH} bytes`);
    let e = (0, pc.hash)(r);
    (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
    let t = new Uint8Array(32),
      i = [be(), be(), be(), be()];
    Tp(i, e), Np(t, i);
    let n = new Uint8Array(64);
    return n.set(r), n.set(t, 32), { publicKey: t, secretKey: n };
  }
  Qe.generateKeyPairFromSeed = r2;
  function K7(r) {
    let e = (0, U7.randomBytes)(32, r),
      t = r2(e);
    return (0, Yb.wipe)(e), t;
  }
  Qe.generateKeyPair = K7;
  function V7(r) {
    if (r.length !== Qe.SECRET_KEY_LENGTH)
      throw new Error(
        `ed25519: secret key must be ${Qe.SECRET_KEY_LENGTH} bytes`
      );
    return new Uint8Array(r.subarray(32));
  }
  Qe.extractPublicKeyFromSecretKey = V7;
  var Cp = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function i2(r, e) {
    let t, i, n, o;
    for (i = 63; i >= 32; --i) {
      for (t = 0, n = i - 32, o = i - 12; n < o; ++n)
        (e[n] += t - 16 * e[i] * Cp[n - (i - 32)]),
          (t = Math.floor((e[n] + 128) / 256)),
          (e[n] -= t * 256);
      (e[n] += t), (e[i] = 0);
    }
    for (t = 0, n = 0; n < 32; n++)
      (e[n] += t - (e[31] >> 4) * Cp[n]), (t = e[n] >> 8), (e[n] &= 255);
    for (n = 0; n < 32; n++) e[n] -= t * Cp[n];
    for (i = 0; i < 32; i++) (e[i + 1] += e[i] >> 8), (r[i] = e[i] & 255);
  }
  function Mp(r) {
    let e = new Float64Array(64);
    for (let t = 0; t < 64; t++) e[t] = r[t];
    for (let t = 0; t < 64; t++) r[t] = 0;
    i2(r, e);
  }
  function G7(r, e) {
    let t = new Float64Array(64),
      i = [be(), be(), be(), be()],
      n = (0, pc.hash)(r.subarray(0, 32));
    (n[0] &= 248), (n[31] &= 127), (n[31] |= 64);
    let o = new Uint8Array(64);
    o.set(n.subarray(32), 32);
    let c = new pc.SHA512();
    c.update(o.subarray(32)), c.update(e);
    let l = c.digest();
    c.clean(),
      Mp(l),
      Tp(i, l),
      Np(o, i),
      c.reset(),
      c.update(o.subarray(0, 32)),
      c.update(r.subarray(32)),
      c.update(e);
    let g = c.digest();
    Mp(g);
    for (let d = 0; d < 32; d++) t[d] = l[d];
    for (let d = 0; d < 32; d++)
      for (let y = 0; y < 32; y++) t[d + y] += g[d] * n[y];
    return i2(o.subarray(32), t), o;
  }
  Qe.sign = G7;
  function n2(r, e) {
    let t = be(),
      i = be(),
      n = be(),
      o = be(),
      c = be(),
      l = be(),
      g = be();
    return (
      ls(r[2], Xo),
      k7(r[1], e),
      Ks(n, r[1]),
      ut(o, n, q7),
      Vs(n, n, r[2]),
      Hs(o, r[2], o),
      Ks(c, o),
      Ks(l, c),
      ut(g, l, c),
      ut(t, g, n),
      ut(t, t, o),
      H7(t, t),
      ut(t, t, n),
      ut(t, t, o),
      ut(t, t, o),
      ut(r[0], t, o),
      Ks(i, r[0]),
      ut(i, i, o),
      Jb(i, n) && ut(r[0], r[0], z7),
      Ks(i, r[0]),
      ut(i, i, o),
      Jb(i, n)
        ? -1
        : (Zb(r[0]) === e[31] >> 7 && Vs(r[0], Op, r[0]),
          ut(r[3], r[0], r[1]),
          0)
    );
  }
  function $7(r, e, t) {
    let i = new Uint8Array(32),
      n = [be(), be(), be(), be()],
      o = [be(), be(), be(), be()];
    if (t.length !== Qe.SIGNATURE_LENGTH)
      throw new Error(
        `ed25519: signature must be ${Qe.SIGNATURE_LENGTH} bytes`
      );
    if (n2(o, r)) return !1;
    let c = new pc.SHA512();
    c.update(t.subarray(0, 32)), c.update(r), c.update(e);
    let l = c.digest();
    return (
      Mp(l), t2(n, o, l), Tp(o, t.subarray(32)), Pp(n, o), Np(i, n), !Xb(t, i)
    );
  }
  Qe.verify = $7;
  function J7(r) {
    let e = [be(), be(), be(), be()];
    if (n2(e, r)) throw new Error("Ed25519: invalid public key");
    let t = be(),
      i = be(),
      n = e[1];
    Hs(t, Xo, n), Vs(i, Xo, n), e2(i, i), ut(t, t, i);
    let o = new Uint8Array(32);
    return gc(o, t), o;
  }
  Qe.convertPublicKeyToX25519 = J7;
  function W7(r) {
    let e = (0, pc.hash)(r.subarray(0, 32));
    (e[0] &= 248), (e[31] &= 127), (e[31] |= 64);
    let t = new Uint8Array(e.subarray(0, 32));
    return (0, Yb.wipe)(e), t;
  }
  Qe.convertSecretKeyToX25519 = W7;
});
var I2 = {};
rr(I2, {
  __assign: () => zp,
  __asyncDelegator: () => dM,
  __asyncGenerator: () => fM,
  __asyncValues: () => pM,
  __await: () => bc,
  __awaiter: () => oM,
  __classPrivateFieldGet: () => vM,
  __classPrivateFieldSet: () => wM,
  __createBinding: () => cM,
  __decorate: () => iM,
  __exportStar: () => uM,
  __extends: () => tM,
  __generator: () => aM,
  __importDefault: () => yM,
  __importStar: () => mM,
  __makeTemplateObject: () => gM,
  __metadata: () => sM,
  __param: () => nM,
  __read: () => x2,
  __rest: () => rM,
  __spread: () => hM,
  __spreadArrays: () => lM,
  __values: () => kp,
});
function tM(r, e) {
  jp(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
function rM(r, e) {
  var t = {};
  for (var i in r)
    Object.prototype.hasOwnProperty.call(r, i) &&
      e.indexOf(i) < 0 &&
      (t[i] = r[i]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var n = 0, i = Object.getOwnPropertySymbols(r); n < i.length; n++)
      e.indexOf(i[n]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(r, i[n]) &&
        (t[i[n]] = r[i[n]]);
  return t;
}
function iM(r, e, t, i) {
  var n = arguments.length,
    o =
      n < 3 ? e : i === null ? (i = Object.getOwnPropertyDescriptor(e, t)) : i,
    c;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    o = Reflect.decorate(r, e, t, i);
  else
    for (var l = r.length - 1; l >= 0; l--)
      (c = r[l]) && (o = (n < 3 ? c(o) : n > 3 ? c(e, t, o) : c(e, t)) || o);
  return n > 3 && o && Object.defineProperty(e, t, o), o;
}
function nM(r, e) {
  return function (t, i) {
    e(t, i, r);
  };
}
function sM(r, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(r, e);
}
function oM(r, e, t, i) {
  function n(o) {
    return o instanceof t
      ? o
      : new t(function (c) {
          c(o);
        });
  }
  return new (t || (t = Promise))(function (o, c) {
    function l(y) {
      try {
        d(i.next(y));
      } catch (v) {
        c(v);
      }
    }
    function g(y) {
      try {
        d(i.throw(y));
      } catch (v) {
        c(v);
      }
    }
    function d(y) {
      y.done ? o(y.value) : n(y.value).then(l, g);
    }
    d((i = i.apply(r, e || [])).next());
  });
}
function aM(r, e) {
  var t = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1];
        return o[1];
      },
      trys: [],
      ops: [],
    },
    i,
    n,
    o,
    c;
  return (
    (c = { next: l(0), throw: l(1), return: l(2) }),
    typeof Symbol == "function" &&
      (c[Symbol.iterator] = function () {
        return this;
      }),
    c
  );
  function l(d) {
    return function (y) {
      return g([d, y]);
    };
  }
  function g(d) {
    if (i) throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (
          ((i = 1),
          n &&
            (o =
              d[0] & 2
                ? n.return
                : d[0]
                ? n.throw || ((o = n.return) && o.call(n), 0)
                : n.next) &&
            !(o = o.call(n, d[1])).done)
        )
          return o;
        switch (((n = 0), o && (d = [d[0] & 2, o.value]), d[0])) {
          case 0:
          case 1:
            o = d;
            break;
          case 4:
            return t.label++, { value: d[1], done: !1 };
          case 5:
            t.label++, (n = d[1]), (d = [0]);
            continue;
          case 7:
            (d = t.ops.pop()), t.trys.pop();
            continue;
          default:
            if (
              ((o = t.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (d[0] === 6 || d[0] === 2))
            ) {
              t = 0;
              continue;
            }
            if (d[0] === 3 && (!o || (d[1] > o[0] && d[1] < o[3]))) {
              t.label = d[1];
              break;
            }
            if (d[0] === 6 && t.label < o[1]) {
              (t.label = o[1]), (o = d);
              break;
            }
            if (o && t.label < o[2]) {
              (t.label = o[2]), t.ops.push(d);
              break;
            }
            o[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        d = e.call(r, t);
      } catch (y) {
        (d = [6, y]), (n = 0);
      } finally {
        i = o = 0;
      }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
  }
}
function cM(r, e, t, i) {
  i === void 0 && (i = t), (r[i] = e[t]);
}
function uM(r, e) {
  for (var t in r) t !== "default" && !e.hasOwnProperty(t) && (e[t] = r[t]);
}
function kp(r) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && r[e],
    i = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number")
    return {
      next: function () {
        return (
          r && i >= r.length && (r = void 0), { value: r && r[i++], done: !r }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
function x2(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var i = t.call(r),
    n,
    o = [],
    c;
  try {
    for (; (e === void 0 || e-- > 0) && !(n = i.next()).done; ) o.push(n.value);
  } catch (l) {
    c = { error: l };
  } finally {
    try {
      n && !n.done && (t = i.return) && t.call(i);
    } finally {
      if (c) throw c.error;
    }
  }
  return o;
}
function hM() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r = r.concat(x2(arguments[e]));
  return r;
}
function lM() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var i = Array(r), n = 0, e = 0; e < t; e++)
    for (var o = arguments[e], c = 0, l = o.length; c < l; c++, n++)
      i[n] = o[c];
  return i;
}
function bc(r) {
  return this instanceof bc ? ((this.v = r), this) : new bc(r);
}
function fM(r, e, t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var i = t.apply(r, e || []),
    n,
    o = [];
  return (
    (n = {}),
    c("next"),
    c("throw"),
    c("return"),
    (n[Symbol.asyncIterator] = function () {
      return this;
    }),
    n
  );
  function c(A) {
    i[A] &&
      (n[A] = function (E) {
        return new Promise(function (P, N) {
          o.push([A, E, P, N]) > 1 || l(A, E);
        });
      });
  }
  function l(A, E) {
    try {
      g(i[A](E));
    } catch (P) {
      v(o[0][3], P);
    }
  }
  function g(A) {
    A.value instanceof bc
      ? Promise.resolve(A.value.v).then(d, y)
      : v(o[0][2], A);
  }
  function d(A) {
    l("next", A);
  }
  function y(A) {
    l("throw", A);
  }
  function v(A, E) {
    A(E), o.shift(), o.length && l(o[0][0], o[0][1]);
  }
}
function dM(r) {
  var e, t;
  return (
    (e = {}),
    i("next"),
    i("throw", function (n) {
      throw n;
    }),
    i("return"),
    (e[Symbol.iterator] = function () {
      return this;
    }),
    e
  );
  function i(n, o) {
    e[n] = r[n]
      ? function (c) {
          return (t = !t)
            ? { value: bc(r[n](c)), done: n === "return" }
            : o
            ? o(c)
            : c;
        }
      : o;
  }
}
function pM(r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = r[Symbol.asyncIterator],
    t;
  return e
    ? e.call(r)
    : ((r = typeof kp == "function" ? kp(r) : r[Symbol.iterator]()),
      (t = {}),
      i("next"),
      i("throw"),
      i("return"),
      (t[Symbol.asyncIterator] = function () {
        return this;
      }),
      t);
  function i(o) {
    t[o] =
      r[o] &&
      function (c) {
        return new Promise(function (l, g) {
          (c = r[o](c)), n(l, g, c.done, c.value);
        });
      };
  }
  function n(o, c, l, g) {
    Promise.resolve(g).then(function (d) {
      o({ value: d, done: l });
    }, c);
  }
}
function gM(r, e) {
  return (
    Object.defineProperty
      ? Object.defineProperty(r, "raw", { value: e })
      : (r.raw = e),
    r
  );
}
function mM(r) {
  if (r && r.__esModule) return r;
  var e = {};
  if (r != null)
    for (var t in r) Object.hasOwnProperty.call(r, t) && (e[t] = r[t]);
  return (e.default = r), e;
}
function yM(r) {
  return r && r.__esModule ? r : { default: r };
}
function vM(r, e) {
  if (!e.has(r))
    throw new TypeError("attempted to get private field on non-instance");
  return e.get(r);
}
function wM(r, e, t) {
  if (!e.has(r))
    throw new TypeError("attempted to set private field on non-instance");
  return e.set(r, t), t;
}
var jp,
  zp,
  D2 = Sf(() => {
    "use strict";
    jp = function (r, e) {
      return (
        (jp =
          Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array &&
            function (t, i) {
              t.__proto__ = i;
            }) ||
          function (t, i) {
            for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n]);
          }),
        jp(r, e)
      );
    };
    zp = function () {
      return (
        (zp =
          Object.assign ||
          function (e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
              t = arguments[i];
              for (var o in t)
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            }
            return e;
          }),
        zp.apply(this, arguments)
      );
    };
  });
var C2 = Se((ds) => {
  "use strict";
  Object.defineProperty(ds, "__esModule", { value: !0 });
  ds.isBrowserCryptoAvailable =
    ds.getSubtleCrypto =
    ds.getBrowerCrypto =
      void 0;
  function Hp() {
    return (
      (global == null ? void 0 : global.crypto) ||
      (global == null ? void 0 : global.msCrypto) ||
      {}
    );
  }
  ds.getBrowerCrypto = Hp;
  function R2() {
    let r = Hp();
    return r.subtle || r.webkitSubtle;
  }
  ds.getSubtleCrypto = R2;
  function bM() {
    return !!Hp() && !!R2();
  }
  ds.isBrowserCryptoAvailable = bM;
});
var M2 = Se((ps) => {
  "use strict";
  Object.defineProperty(ps, "__esModule", { value: !0 });
  ps.isBrowser = ps.isNode = ps.isReactNative = void 0;
  function O2() {
    return (
      typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    );
  }
  ps.isReactNative = O2;
  function P2() {
    return (
      typeof process < "u" &&
      typeof process.versions < "u" &&
      typeof process.versions.node < "u"
    );
  }
  ps.isNode = P2;
  function _M() {
    return !O2() && !P2();
  }
  ps.isBrowser = _M;
});
var Kp = Se((qh) => {
  "use strict";
  Object.defineProperty(qh, "__esModule", { value: !0 });
  var N2 = (D2(), Cs(I2));
  N2.__exportStar(C2(), qh);
  N2.__exportStar(M2(), qh);
});
var j2 = Se((qq, q2) => {
  "use strict";
  q2.exports = function () {
    throw new Error(
      "ws does not work in the browser. Browser clients must use the native WebSocket object"
    );
  };
});
var S3 = Se((Ac, ta) => {
  "use strict";
  var MM = 200,
    n0 = "__lodash_hash_undefined__",
    Zh = 1,
    t3 = 2,
    r3 = 9007199254740991,
    Gh = "[object Arguments]",
    Qp = "[object Array]",
    NM = "[object AsyncFunction]",
    i3 = "[object Boolean]",
    n3 = "[object Date]",
    s3 = "[object Error]",
    o3 = "[object Function]",
    TM = "[object GeneratorFunction]",
    $h = "[object Map]",
    a3 = "[object Number]",
    FM = "[object Null]",
    ea = "[object Object]",
    K2 = "[object Promise]",
    LM = "[object Proxy]",
    c3 = "[object RegExp]",
    Jh = "[object Set]",
    u3 = "[object String]",
    UM = "[object Symbol]",
    BM = "[object Undefined]",
    Xp = "[object WeakMap]",
    h3 = "[object ArrayBuffer]",
    Wh = "[object DataView]",
    qM = "[object Float32Array]",
    jM = "[object Float64Array]",
    zM = "[object Int8Array]",
    kM = "[object Int16Array]",
    HM = "[object Int32Array]",
    KM = "[object Uint8Array]",
    VM = "[object Uint8ClampedArray]",
    GM = "[object Uint16Array]",
    $M = "[object Uint32Array]",
    JM = /[\\^$.*+?()[\]{}|]/g,
    WM = /^\[object .+?Constructor\]$/,
    YM = /^(?:0|[1-9]\d*)$/,
    Pt = {};
  Pt[qM] =
    Pt[jM] =
    Pt[zM] =
    Pt[kM] =
    Pt[HM] =
    Pt[KM] =
    Pt[VM] =
    Pt[GM] =
    Pt[$M] =
      !0;
  Pt[Gh] =
    Pt[Qp] =
    Pt[h3] =
    Pt[i3] =
    Pt[Wh] =
    Pt[n3] =
    Pt[s3] =
    Pt[o3] =
    Pt[$h] =
    Pt[a3] =
    Pt[ea] =
    Pt[c3] =
    Pt[Jh] =
    Pt[u3] =
    Pt[Xp] =
      !1;
  var l3 =
      typeof global == "object" && global && global.Object === Object && global,
    QM = typeof self == "object" && self && self.Object === Object && self,
    zn = l3 || QM || Function("return this")(),
    f3 = typeof Ac == "object" && Ac && !Ac.nodeType && Ac,
    V2 = f3 && typeof ta == "object" && ta && !ta.nodeType && ta,
    d3 = V2 && V2.exports === f3,
    Jp = d3 && l3.process,
    G2 = (function () {
      try {
        return Jp && Jp.binding && Jp.binding("util");
      } catch {}
    })(),
    $2 = G2 && G2.isTypedArray;
  function XM(r, e) {
    for (var t = -1, i = r == null ? 0 : r.length, n = 0, o = []; ++t < i; ) {
      var c = r[t];
      e(c, t, r) && (o[n++] = c);
    }
    return o;
  }
  function ZM(r, e) {
    for (var t = -1, i = e.length, n = r.length; ++t < i; ) r[n + t] = e[t];
    return r;
  }
  function eN(r, e) {
    for (var t = -1, i = r == null ? 0 : r.length; ++t < i; )
      if (e(r[t], t, r)) return !0;
    return !1;
  }
  function tN(r, e) {
    for (var t = -1, i = Array(r); ++t < r; ) i[t] = e(t);
    return i;
  }
  function rN(r) {
    return function (e) {
      return r(e);
    };
  }
  function iN(r, e) {
    return r.has(e);
  }
  function nN(r, e) {
    return r?.[e];
  }
  function sN(r) {
    var e = -1,
      t = Array(r.size);
    return (
      r.forEach(function (i, n) {
        t[++e] = [n, i];
      }),
      t
    );
  }
  function oN(r, e) {
    return function (t) {
      return r(e(t));
    };
  }
  function aN(r) {
    var e = -1,
      t = Array(r.size);
    return (
      r.forEach(function (i) {
        t[++e] = i;
      }),
      t
    );
  }
  var cN = Array.prototype,
    uN = Function.prototype,
    el = Object.prototype,
    Wp = zn["__core-js_shared__"],
    p3 = uN.toString,
    nn = el.hasOwnProperty,
    J2 = (function () {
      var r = /[^.]+$/.exec((Wp && Wp.keys && Wp.keys.IE_PROTO) || "");
      return r ? "Symbol(src)_1." + r : "";
    })(),
    g3 = el.toString,
    hN = RegExp(
      "^" +
        p3
          .call(nn)
          .replace(JM, "\\$&")
          .replace(
            /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
            "$1.*?"
          ) +
        "$"
    ),
    W2 = d3 ? zn.Buffer : void 0,
    Yh = zn.Symbol,
    Y2 = zn.Uint8Array,
    m3 = el.propertyIsEnumerable,
    lN = cN.splice,
    Gs = Yh ? Yh.toStringTag : void 0,
    Q2 = Object.getOwnPropertySymbols,
    fN = W2 ? W2.isBuffer : void 0,
    dN = oN(Object.keys, Object),
    Zp = ra(zn, "DataView"),
    Sc = ra(zn, "Map"),
    e0 = ra(zn, "Promise"),
    t0 = ra(zn, "Set"),
    r0 = ra(zn, "WeakMap"),
    xc = ra(Object, "create"),
    pN = Ws(Zp),
    gN = Ws(Sc),
    mN = Ws(e0),
    yN = Ws(t0),
    vN = Ws(r0),
    X2 = Yh ? Yh.prototype : void 0,
    Yp = X2 ? X2.valueOf : void 0;
  function $s(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function wN() {
    (this.__data__ = xc ? xc(null) : {}), (this.size = 0);
  }
  function bN(r) {
    var e = this.has(r) && delete this.__data__[r];
    return (this.size -= e ? 1 : 0), e;
  }
  function _N(r) {
    var e = this.__data__;
    if (xc) {
      var t = e[r];
      return t === n0 ? void 0 : t;
    }
    return nn.call(e, r) ? e[r] : void 0;
  }
  function EN(r) {
    var e = this.__data__;
    return xc ? e[r] !== void 0 : nn.call(e, r);
  }
  function AN(r, e) {
    var t = this.__data__;
    return (
      (this.size += this.has(r) ? 0 : 1),
      (t[r] = xc && e === void 0 ? n0 : e),
      this
    );
  }
  $s.prototype.clear = wN;
  $s.prototype.delete = bN;
  $s.prototype.get = _N;
  $s.prototype.has = EN;
  $s.prototype.set = AN;
  function kn(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function SN() {
    (this.__data__ = []), (this.size = 0);
  }
  function xN(r) {
    var e = this.__data__,
      t = tl(e, r);
    if (t < 0) return !1;
    var i = e.length - 1;
    return t == i ? e.pop() : lN.call(e, t, 1), --this.size, !0;
  }
  function IN(r) {
    var e = this.__data__,
      t = tl(e, r);
    return t < 0 ? void 0 : e[t][1];
  }
  function DN(r) {
    return tl(this.__data__, r) > -1;
  }
  function RN(r, e) {
    var t = this.__data__,
      i = tl(t, r);
    return i < 0 ? (++this.size, t.push([r, e])) : (t[i][1] = e), this;
  }
  kn.prototype.clear = SN;
  kn.prototype.delete = xN;
  kn.prototype.get = IN;
  kn.prototype.has = DN;
  kn.prototype.set = RN;
  function Js(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.clear(); ++e < t; ) {
      var i = r[e];
      this.set(i[0], i[1]);
    }
  }
  function CN() {
    (this.size = 0),
      (this.__data__ = {
        hash: new $s(),
        map: new (Sc || kn)(),
        string: new $s(),
      });
  }
  function ON(r) {
    var e = rl(this, r).delete(r);
    return (this.size -= e ? 1 : 0), e;
  }
  function PN(r) {
    return rl(this, r).get(r);
  }
  function MN(r) {
    return rl(this, r).has(r);
  }
  function NN(r, e) {
    var t = rl(this, r),
      i = t.size;
    return t.set(r, e), (this.size += t.size == i ? 0 : 1), this;
  }
  Js.prototype.clear = CN;
  Js.prototype.delete = ON;
  Js.prototype.get = PN;
  Js.prototype.has = MN;
  Js.prototype.set = NN;
  function Qh(r) {
    var e = -1,
      t = r == null ? 0 : r.length;
    for (this.__data__ = new Js(); ++e < t; ) this.add(r[e]);
  }
  function TN(r) {
    return this.__data__.set(r, n0), this;
  }
  function FN(r) {
    return this.__data__.has(r);
  }
  Qh.prototype.add = Qh.prototype.push = TN;
  Qh.prototype.has = FN;
  function vs(r) {
    var e = (this.__data__ = new kn(r));
    this.size = e.size;
  }
  function LN() {
    (this.__data__ = new kn()), (this.size = 0);
  }
  function UN(r) {
    var e = this.__data__,
      t = e.delete(r);
    return (this.size = e.size), t;
  }
  function BN(r) {
    return this.__data__.get(r);
  }
  function qN(r) {
    return this.__data__.has(r);
  }
  function jN(r, e) {
    var t = this.__data__;
    if (t instanceof kn) {
      var i = t.__data__;
      if (!Sc || i.length < MM - 1)
        return i.push([r, e]), (this.size = ++t.size), this;
      t = this.__data__ = new Js(i);
    }
    return t.set(r, e), (this.size = t.size), this;
  }
  vs.prototype.clear = LN;
  vs.prototype.delete = UN;
  vs.prototype.get = BN;
  vs.prototype.has = qN;
  vs.prototype.set = jN;
  function zN(r, e) {
    var t = Xh(r),
      i = !t && rT(r),
      n = !t && !i && i0(r),
      o = !t && !i && !n && A3(r),
      c = t || i || n || o,
      l = c ? tN(r.length, String) : [],
      g = l.length;
    for (var d in r)
      (e || nn.call(r, d)) &&
        !(
          c &&
          (d == "length" ||
            (n && (d == "offset" || d == "parent")) ||
            (o && (d == "buffer" || d == "byteLength" || d == "byteOffset")) ||
            QN(d, g))
        ) &&
        l.push(d);
    return l;
  }
  function tl(r, e) {
    for (var t = r.length; t--; ) if (w3(r[t][0], e)) return t;
    return -1;
  }
  function kN(r, e, t) {
    var i = e(r);
    return Xh(r) ? i : ZM(i, t(r));
  }
  function Dc(r) {
    return r == null
      ? r === void 0
        ? BM
        : FM
      : Gs && Gs in Object(r)
      ? WN(r)
      : tT(r);
  }
  function Z2(r) {
    return Ic(r) && Dc(r) == Gh;
  }
  function y3(r, e, t, i, n) {
    return r === e
      ? !0
      : r == null || e == null || (!Ic(r) && !Ic(e))
      ? r !== r && e !== e
      : HN(r, e, t, i, y3, n);
  }
  function HN(r, e, t, i, n, o) {
    var c = Xh(r),
      l = Xh(e),
      g = c ? Qp : ys(r),
      d = l ? Qp : ys(e);
    (g = g == Gh ? ea : g), (d = d == Gh ? ea : d);
    var y = g == ea,
      v = d == ea,
      A = g == d;
    if (A && i0(r)) {
      if (!i0(e)) return !1;
      (c = !0), (y = !1);
    }
    if (A && !y)
      return (
        o || (o = new vs()),
        c || A3(r) ? v3(r, e, t, i, n, o) : $N(r, e, g, t, i, n, o)
      );
    if (!(t & Zh)) {
      var E = y && nn.call(r, "__wrapped__"),
        P = v && nn.call(e, "__wrapped__");
      if (E || P) {
        var N = E ? r.value() : r,
          T = P ? e.value() : e;
        return o || (o = new vs()), n(N, T, t, i, o);
      }
    }
    return A ? (o || (o = new vs()), JN(r, e, t, i, n, o)) : !1;
  }
  function KN(r) {
    if (!E3(r) || ZN(r)) return !1;
    var e = b3(r) ? hN : WM;
    return e.test(Ws(r));
  }
  function VN(r) {
    return Ic(r) && _3(r.length) && !!Pt[Dc(r)];
  }
  function GN(r) {
    if (!eT(r)) return dN(r);
    var e = [];
    for (var t in Object(r)) nn.call(r, t) && t != "constructor" && e.push(t);
    return e;
  }
  function v3(r, e, t, i, n, o) {
    var c = t & Zh,
      l = r.length,
      g = e.length;
    if (l != g && !(c && g > l)) return !1;
    var d = o.get(r);
    if (d && o.get(e)) return d == e;
    var y = -1,
      v = !0,
      A = t & t3 ? new Qh() : void 0;
    for (o.set(r, e), o.set(e, r); ++y < l; ) {
      var E = r[y],
        P = e[y];
      if (i) var N = c ? i(P, E, y, e, r, o) : i(E, P, y, r, e, o);
      if (N !== void 0) {
        if (N) continue;
        v = !1;
        break;
      }
      if (A) {
        if (
          !eN(e, function (T, K) {
            if (!iN(A, K) && (E === T || n(E, T, t, i, o))) return A.push(K);
          })
        ) {
          v = !1;
          break;
        }
      } else if (!(E === P || n(E, P, t, i, o))) {
        v = !1;
        break;
      }
    }
    return o.delete(r), o.delete(e), v;
  }
  function $N(r, e, t, i, n, o, c) {
    switch (t) {
      case Wh:
        if (r.byteLength != e.byteLength || r.byteOffset != e.byteOffset)
          return !1;
        (r = r.buffer), (e = e.buffer);
      case h3:
        return !(r.byteLength != e.byteLength || !o(new Y2(r), new Y2(e)));
      case i3:
      case n3:
      case a3:
        return w3(+r, +e);
      case s3:
        return r.name == e.name && r.message == e.message;
      case c3:
      case u3:
        return r == e + "";
      case $h:
        var l = sN;
      case Jh:
        var g = i & Zh;
        if ((l || (l = aN), r.size != e.size && !g)) return !1;
        var d = c.get(r);
        if (d) return d == e;
        (i |= t3), c.set(r, e);
        var y = v3(l(r), l(e), i, n, o, c);
        return c.delete(r), y;
      case UM:
        if (Yp) return Yp.call(r) == Yp.call(e);
    }
    return !1;
  }
  function JN(r, e, t, i, n, o) {
    var c = t & Zh,
      l = e3(r),
      g = l.length,
      d = e3(e),
      y = d.length;
    if (g != y && !c) return !1;
    for (var v = g; v--; ) {
      var A = l[v];
      if (!(c ? A in e : nn.call(e, A))) return !1;
    }
    var E = o.get(r);
    if (E && o.get(e)) return E == e;
    var P = !0;
    o.set(r, e), o.set(e, r);
    for (var N = c; ++v < g; ) {
      A = l[v];
      var T = r[A],
        K = e[A];
      if (i) var Z = c ? i(K, T, A, e, r, o) : i(T, K, A, r, e, o);
      if (!(Z === void 0 ? T === K || n(T, K, t, i, o) : Z)) {
        P = !1;
        break;
      }
      N || (N = A == "constructor");
    }
    if (P && !N) {
      var J = r.constructor,
        G = e.constructor;
      J != G &&
        "constructor" in r &&
        "constructor" in e &&
        !(
          typeof J == "function" &&
          J instanceof J &&
          typeof G == "function" &&
          G instanceof G
        ) &&
        (P = !1);
    }
    return o.delete(r), o.delete(e), P;
  }
  function e3(r) {
    return kN(r, sT, YN);
  }
  function rl(r, e) {
    var t = r.__data__;
    return XN(e) ? t[typeof e == "string" ? "string" : "hash"] : t.map;
  }
  function ra(r, e) {
    var t = nN(r, e);
    return KN(t) ? t : void 0;
  }
  function WN(r) {
    var e = nn.call(r, Gs),
      t = r[Gs];
    try {
      r[Gs] = void 0;
      var i = !0;
    } catch {}
    var n = g3.call(r);
    return i && (e ? (r[Gs] = t) : delete r[Gs]), n;
  }
  var YN = Q2
      ? function (r) {
          return r == null
            ? []
            : ((r = Object(r)),
              XM(Q2(r), function (e) {
                return m3.call(r, e);
              }));
        }
      : oT,
    ys = Dc;
  ((Zp && ys(new Zp(new ArrayBuffer(1))) != Wh) ||
    (Sc && ys(new Sc()) != $h) ||
    (e0 && ys(e0.resolve()) != K2) ||
    (t0 && ys(new t0()) != Jh) ||
    (r0 && ys(new r0()) != Xp)) &&
    (ys = function (r) {
      var e = Dc(r),
        t = e == ea ? r.constructor : void 0,
        i = t ? Ws(t) : "";
      if (i)
        switch (i) {
          case pN:
            return Wh;
          case gN:
            return $h;
          case mN:
            return K2;
          case yN:
            return Jh;
          case vN:
            return Xp;
        }
      return e;
    });
  function QN(r, e) {
    return (
      (e = e ?? r3),
      !!e &&
        (typeof r == "number" || YM.test(r)) &&
        r > -1 &&
        r % 1 == 0 &&
        r < e
    );
  }
  function XN(r) {
    var e = typeof r;
    return e == "string" || e == "number" || e == "symbol" || e == "boolean"
      ? r !== "__proto__"
      : r === null;
  }
  function ZN(r) {
    return !!J2 && J2 in r;
  }
  function eT(r) {
    var e = r && r.constructor,
      t = (typeof e == "function" && e.prototype) || el;
    return r === t;
  }
  function tT(r) {
    return g3.call(r);
  }
  function Ws(r) {
    if (r != null) {
      try {
        return p3.call(r);
      } catch {}
      try {
        return r + "";
      } catch {}
    }
    return "";
  }
  function w3(r, e) {
    return r === e || (r !== r && e !== e);
  }
  var rT = Z2(
      (function () {
        return arguments;
      })()
    )
      ? Z2
      : function (r) {
          return Ic(r) && nn.call(r, "callee") && !m3.call(r, "callee");
        },
    Xh = Array.isArray;
  function iT(r) {
    return r != null && _3(r.length) && !b3(r);
  }
  var i0 = fN || aT;
  function nT(r, e) {
    return y3(r, e);
  }
  function b3(r) {
    if (!E3(r)) return !1;
    var e = Dc(r);
    return e == o3 || e == TM || e == NM || e == LM;
  }
  function _3(r) {
    return typeof r == "number" && r > -1 && r % 1 == 0 && r <= r3;
  }
  function E3(r) {
    var e = typeof r;
    return r != null && (e == "object" || e == "function");
  }
  function Ic(r) {
    return r != null && typeof r == "object";
  }
  var A3 = $2 ? rN($2) : VN;
  function sT(r) {
    return iT(r) ? zN(r) : GN(r);
  }
  function oT() {
    return [];
  }
  function aT() {
    return !1;
  }
  ta.exports = nT;
});
var s0 = {};
rr(s0, { default: () => cT });
function cT(r, e) {
  return (
    (e = e || {}),
    new Promise(function (t, i) {
      var n = new XMLHttpRequest(),
        o = [],
        c = [],
        l = {},
        g = function () {
          return {
            ok: ((n.status / 100) | 0) == 2,
            statusText: n.statusText,
            status: n.status,
            url: n.responseURL,
            text: function () {
              return Promise.resolve(n.responseText);
            },
            json: function () {
              return Promise.resolve(n.responseText).then(JSON.parse);
            },
            blob: function () {
              return Promise.resolve(new Blob([n.response]));
            },
            clone: g,
            headers: {
              keys: function () {
                return o;
              },
              entries: function () {
                return c;
              },
              get: function (y) {
                return l[y.toLowerCase()];
              },
              has: function (y) {
                return y.toLowerCase() in l;
              },
            },
          };
        };
      for (var d in (n.open(e.mSOLod || "get", r, !0),
      (n.onload = function () {
        n
          .getAllResponseHeaders()
          .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (y, v, A) {
            o.push((v = v.toLowerCase())),
              c.push([v, A]),
              (l[v] = l[v] ? l[v] + "," + A : A);
          }),
          t(g());
      }),
      (n.onerror = i),
      (n.withCredentials = e.credentials == "include"),
      e.headers))
        n.setRequestHeader(d, e.headers[d]);
      n.send(e.body || null);
    })
  );
}
var o0 = Sf(() => {
  "use strict";
});
var I3 = Se((Kq, x3) => {
  "use strict";
  x3.exports =
    self.fetch || (self.fetch = (o0(), Cs(s0)).default || (o0(), Cs(s0)));
});
var p_ = Se((Kn, d_) => {
  "use strict";
  var f_ = typeof self < "u" ? self : Kn,
    cl = (function () {
      function r() {
        (this.fetch = !1), (this.DOMException = f_.DOMException);
      }
      return (r.prototype = f_), new r();
    })();
  (function (r) {
    var e = (function (t) {
      var i = {
        searchParams: "URLSearchParams" in r,
        iterable: "Symbol" in r && "iterator" in Symbol,
        blob:
          "FileReader" in r &&
          "Blob" in r &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: "FormData" in r,
        arrayBuffer: "ArrayBuffer" in r,
      };
      function n(U) {
        return U && DataView.prototype.isPrototypeOf(U);
      }
      if (i.arrayBuffer)
        var o = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
          ],
          c =
            ArrayBuffer.isView ||
            function (U) {
              return U && o.indexOf(Object.prototype.toString.call(U)) > -1;
            };
      function l(U) {
        if (
          (typeof U != "string" && (U = String(U)),
          /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(U))
        )
          throw new TypeError("Invalid character in header field name");
        return U.toLowerCase();
      }
      function g(U) {
        return typeof U != "string" && (U = String(U)), U;
      }
      function d(U) {
        var j = {
          next: function () {
            var W = U.shift();
            return { done: W === void 0, value: W };
          },
        };
        return (
          i.iterable &&
            (j[Symbol.iterator] = function () {
              return j;
            }),
          j
        );
      }
      function y(U) {
        (this.map = {}),
          U instanceof y
            ? U.forEach(function (j, W) {
                this.append(W, j);
              }, this)
            : Array.isArray(U)
            ? U.forEach(function (j) {
                this.append(j[0], j[1]);
              }, this)
            : U &&
              Object.getOwnPropertyNames(U).forEach(function (j) {
                this.append(j, U[j]);
              }, this);
      }
      (y.prototype.append = function (U, j) {
        (U = l(U)), (j = g(j));
        var W = this.map[U];
        this.map[U] = W ? W + ", " + j : j;
      }),
        (y.prototype.delete = function (U) {
          delete this.map[l(U)];
        }),
        (y.prototype.get = function (U) {
          return (U = l(U)), this.has(U) ? this.map[U] : null;
        }),
        (y.prototype.has = function (U) {
          return this.map.hasOwnProperty(l(U));
        }),
        (y.prototype.set = function (U, j) {
          this.map[l(U)] = g(j);
        }),
        (y.prototype.forEach = function (U, j) {
          for (var W in this.map)
            this.map.hasOwnProperty(W) && U.call(j, this.map[W], W, this);
        }),
        (y.prototype.keys = function () {
          var U = [];
          return (
            this.forEach(function (j, W) {
              U.push(W);
            }),
            d(U)
          );
        }),
        (y.prototype.values = function () {
          var U = [];
          return (
            this.forEach(function (j) {
              U.push(j);
            }),
            d(U)
          );
        }),
        (y.prototype.entries = function () {
          var U = [];
          return (
            this.forEach(function (j, W) {
              U.push([W, j]);
            }),
            d(U)
          );
        }),
        i.iterable && (y.prototype[Symbol.iterator] = y.prototype.entries);
      function v(U) {
        if (U.bodyUsed) return Promise.reject(new TypeError("Already read"));
        U.bodyUsed = !0;
      }
      function A(U) {
        return new Promise(function (j, W) {
          (U.onload = function () {
            j(U.result);
          }),
            (U.onerror = function () {
              W(U.error);
            });
        });
      }
      function E(U) {
        var j = new FileReader(),
          W = A(j);
        return j.readAsArrayBuffer(U), W;
      }
      function P(U) {
        var j = new FileReader(),
          W = A(j);
        return j.readAsText(U), W;
      }
      function N(U) {
        for (
          var j = new Uint8Array(U), W = new Array(j.length), h = 0;
          h < j.length;
          h++
        )
          W[h] = String.fromCharCode(j[h]);
        return W.join("");
      }
      function T(U) {
        if (U.slice) return U.slice(0);
        var j = new Uint8Array(U.byteLength);
        return j.set(new Uint8Array(U)), j.buffer;
      }
      function K() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (U) {
            (this._bodyInit = U),
              U
                ? typeof U == "string"
                  ? (this._bodyText = U)
                  : i.blob && Blob.prototype.isPrototypeOf(U)
                  ? (this._bodyBlob = U)
                  : i.formData && FormData.prototype.isPrototypeOf(U)
                  ? (this._bodyFormData = U)
                  : i.searchParams && URLSearchParams.prototype.isPrototypeOf(U)
                  ? (this._bodyText = U.toString())
                  : i.arrayBuffer && i.blob && n(U)
                  ? ((this._bodyArrayBuffer = T(U.buffer)),
                    (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                  : i.arrayBuffer &&
                    (ArrayBuffer.prototype.isPrototypeOf(U) || c(U))
                  ? (this._bodyArrayBuffer = T(U))
                  : (this._bodyText = U = Object.prototype.toString.call(U))
                : (this._bodyText = ""),
              this.headers.get("content-type") ||
                (typeof U == "string"
                  ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                  : this._bodyBlob && this._bodyBlob.type
                  ? this.headers.set("content-type", this._bodyBlob.type)
                  : i.searchParams &&
                    URLSearchParams.prototype.isPrototypeOf(U) &&
                    this.headers.set(
                      "content-type",
                      "application/x-www-form-urlencoded;charset=UTF-8"
                    ));
          }),
          i.blob &&
            ((this.blob = function () {
              var U = v(this);
              if (U) return U;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer)
                return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData)
                throw new Error("could not read FormData body as blob");
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? v(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(E);
            })),
          (this.text = function () {
            var U = v(this);
            if (U) return U;
            if (this._bodyBlob) return P(this._bodyBlob);
            if (this._bodyArrayBuffer)
              return Promise.resolve(N(this._bodyArrayBuffer));
            if (this._bodyFormData)
              throw new Error("could not read FormData body as text");
            return Promise.resolve(this._bodyText);
          }),
          i.formData &&
            (this.formData = function () {
              return this.text().then(Q);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var Z = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function J(U) {
        var j = U.toUpperCase();
        return Z.indexOf(j) > -1 ? j : U;
      }
      function G(U, j) {
        j = j || {};
        var W = j.body;
        if (U instanceof G) {
          if (U.bodyUsed) throw new TypeError("Already read");
          (this.url = U.url),
            (this.credentials = U.credentials),
            j.headers || (this.headers = new y(U.headers)),
            (this.mSOLod = U.mSOLod),
            (this.mode = U.mode),
            (this.signal = U.signal),
            !W && U._bodyInit != null && ((W = U._bodyInit), (U.bodyUsed = !0));
        } else this.url = String(U);
        if (
          ((this.credentials =
            j.credentials || this.credentials || "same-origin"),
          (j.headers || !this.headers) && (this.headers = new y(j.headers)),
          (this.mSOLod = J(j.mSOLod || this.mSOLod || "GET")),
          (this.mode = j.mode || this.mode || null),
          (this.signal = j.signal || this.signal),
          (this.referrer = null),
          (this.mSOLod === "GET" || this.mSOLod === "HEAD") && W)
        )
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(W);
      }
      G.prototype.clone = function () {
        return new G(this, { body: this._bodyInit });
      };
      function Q(U) {
        var j = new FormData();
        return (
          U.trim()
            .split("&")
            .forEach(function (W) {
              if (W) {
                var h = W.split("="),
                  m = h.shift().replace(/\+/g, " "),
                  b = h.join("=").replace(/\+/g, " ");
                j.append(decodeURIComponent(m), decodeURIComponent(b));
              }
            }),
          j
        );
      }
      function ee(U) {
        var j = new y(),
          W = U.replace(/\r?\n[\t ]+/g, " ");
        return (
          W.split(/\r?\n/).forEach(function (h) {
            var m = h.split(":"),
              b = m.shift().trim();
            if (b) {
              var x = m.join(":").trim();
              j.append(b, x);
            }
          }),
          j
        );
      }
      K.call(G.prototype);
      function L(U, j) {
        j || (j = {}),
          (this.type = "default"),
          (this.status = j.status === void 0 ? 200 : j.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = "statusText" in j ? j.statusText : "OK"),
          (this.headers = new y(j.headers)),
          (this.url = j.url || ""),
          this._initBody(U);
      }
      K.call(L.prototype),
        (L.prototype.clone = function () {
          return new L(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new y(this.headers),
            url: this.url,
          });
        }),
        (L.error = function () {
          var U = new L(null, { status: 0, statusText: "" });
          return (U.type = "error"), U;
        });
      var B = [301, 302, 303, 307, 308];
      (L.redirect = function (U, j) {
        if (B.indexOf(j) === -1) throw new RangeError("Invalid status code");
        return new L(null, { status: j, headers: { location: U } });
      }),
        (t.DOMException = r.DOMException);
      try {
        new t.DOMException();
      } catch {
        (t.DOMException = function (j, W) {
          (this.message = j), (this.name = W);
          var h = Error(j);
          this.stack = h.stack;
        }),
          (t.DOMException.prototype = Object.create(Error.prototype)),
          (t.DOMException.prototype.constructor = t.DOMException);
      }
      function ae(U, j) {
        return new Promise(function (W, h) {
          var m = new G(U, j);
          if (m.signal && m.signal.aborted)
            return h(new t.DOMException("Aborted", "AbortError"));
          var b = new XMLHttpRequest();
          function x() {
            b.abort();
          }
          (b.onload = function () {
            var D = {
              status: b.status,
              statusText: b.statusText,
              headers: ee(b.getAllResponseHeaders() || ""),
            };
            D.url =
              "responseURL" in b
                ? b.responseURL
                : D.headers.get("X-Request-URL");
            var M = "response" in b ? b.response : b.responseText;
            W(new L(M, D));
          }),
            (b.onerror = function () {
              h(new TypeError("Network request failed"));
            }),
            (b.ontimeout = function () {
              h(new TypeError("Network request failed"));
            }),
            (b.onabort = function () {
              h(new t.DOMException("Aborted", "AbortError"));
            }),
            b.open(m.mSOLod, m.url, !0),
            m.credentials === "include"
              ? (b.withCredentials = !0)
              : m.credentials === "omit" && (b.withCredentials = !1),
            "responseType" in b && i.blob && (b.responseType = "blob"),
            m.headers.forEach(function (D, M) {
              b.setRequestHeader(M, D);
            }),
            m.signal &&
              (m.signal.addEventListener("abort", x),
              (b.onreadystatechange = function () {
                b.readyState === 4 && m.signal.removeEventListener("abort", x);
              })),
            b.send(typeof m._bodyInit > "u" ? null : m._bodyInit);
        });
      }
      return (
        (ae.polyfill = !0),
        r.fetch ||
          ((r.fetch = ae), (r.Headers = y), (r.Request = G), (r.Response = L)),
        (t.Headers = y),
        (t.Request = G),
        (t.Response = L),
        (t.fetch = ae),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        t
      );
    })({});
  })(cl);
  cl.fetch.ponyfill = !0;
  delete cl.fetch.polyfill;
  var sa = cl;
  Kn = sa.fetch;
  Kn.default = sa.fetch;
  Kn.fetch = sa.fetch;
  Kn.Headers = sa.Headers;
  Kn.Request = sa.Request;
  Kn.Response = sa.Response;
  d_.exports = Kn;
});
var j_ = Je(xn());
var Tm = function (r, e, t) {
    if (t || arguments.length === 2)
      for (var i = 0, n = e.length, o; i < n; i++)
        (o || !(i in e)) &&
          (o || (o = Array.prototype.slice.call(e, 0, i)), (o[i] = e[i]));
    return r.concat(o || Array.prototype.slice.call(e));
  },
  zx = (function () {
    function r(e, t, i) {
      (this.name = e),
        (this.version = t),
        (this.os = i),
        (this.type = "browser");
    }
    return r;
  })();
var kx = (function () {
  function r(e) {
    (this.version = e),
      (this.type = "node"),
      (this.name = "node"),
      (this.os = process.platform);
  }
  return r;
})();
var Hx = (function () {
  function r(e, t, i, n) {
    (this.name = e),
      (this.version = t),
      (this.os = i),
      (this.bot = n),
      (this.type = "bot-device");
  }
  return r;
})();
var Kx = (function () {
  function r() {
    (this.type = "bot"),
      (this.bot = !0),
      (this.name = "bot"),
      (this.version = null),
      (this.os = null);
  }
  return r;
})();
var Vx = (function () {
  function r() {
    (this.type = "react-native"),
      (this.name = "react-native"),
      (this.version = null),
      (this.os = null);
  }
  return r;
})();
var Gx =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  $x =
    /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  Fm = 3,
  Jx = [
    ["aol", /AOLShield\/([0-9\._]+)/],
    ["edge", /Edge\/([0-9\._]+)/],
    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
    ["silk", /\bSilk\/([0-9._-]+)\b/],
    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
    [
      "chromium-webview",
      /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/,
    ],
    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
    ["fxios", /FxiOS\/([0-9\.]+)/],
    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      "pie",
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ["ie", /MSIE\s(7\.0)/],
    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ["android", /Android\s([0-9\.]+)/],
    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ["safari", /Version\/([0-9\._]+).*Safari/],
    ["facebook", /FB[AS]V\/([0-9\.]+)/],
    ["instagram", /Instagram\s([0-9\.]+)/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ["curl", /^curl\/([0-9\.]+)$/],
    ["searchbot", Gx],
  ],
  Lm = [
    ["iOS", /iP(hone|od|ad)/],
    ["Android OS", /Android/],
    ["BlackBerry OS", /BlackBerry|BB10/],
    ["Windows Mobile", /IEMobile/],
    ["Amazon OS", /Kindle/],
    ["Windows 3.11", /Win16/],
    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
    ["Windows 98", /(Windows 98)|(Win98)/],
    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
    ["Windows Server 2003", /(Windows NT 5.2)/],
    ["Windows Vista", /(Windows NT 6.0)/],
    ["Windows 7", /(Windows NT 6.1)/],
    ["Windows 8", /(Windows NT 6.2)/],
    ["Windows 8.1", /(Windows NT 6.3)/],
    ["Windows 10", /(Windows NT 10.0)/],
    ["Windows ME", /Windows ME/],
    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ["Open BSD", /OpenBSD/],
    ["Sun OS", /SunOS/],
    ["Chrome OS", /CrOS/],
    ["Linux", /(Linux)|(X11)/],
    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
    ["QNX", /QNX/],
    ["BeOS", /BeOS/],
    ["OS/2", /OS\/2/],
  ];
function Bm(r) {
  return r
    ? Um(r)
    : typeof document > "u" &&
      typeof navigator < "u" &&
      navigator.product === "ReactNative"
    ? new Vx()
    : typeof navigator < "u"
    ? Um(navigator.userAgent)
    : Qx();
}
function Wx(r) {
  return (
    r !== "" &&
    Jx.reduce(function (e, t) {
      var i = t[0],
        n = t[1];
      if (e) return e;
      var o = n.exec(r);
      return !!o && [i, o];
    }, !1)
  );
}
function Um(r) {
  var e = Wx(r);
  if (!e) return null;
  var t = e[0],
    i = e[1];
  if (t === "searchbot") return new Kx();
  var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
  n
    ? n.length < Fm && (n = Tm(Tm([], n, !0), Xx(Fm - n.length), !0))
    : (n = []);
  var o = n.join("."),
    c = Yx(r),
    l = $x.exec(r);
  return l && l[1] ? new Hx(t, o, c, l[1]) : new zx(t, o, c);
}
function Yx(r) {
  for (var e = 0, t = Lm.length; e < t; e++) {
    var i = Lm[e],
      n = i[0],
      o = i[1],
      c = o.exec(r);
    if (c) return n;
  }
  return null;
}
function Qx() {
  var r = typeof process < "u" && process.version;
  return r ? new kx(process.version.slice(1)) : null;
}
function Xx(r) {
  for (var e = [], t = 0; t < r; t++) e.push("0");
  return e;
}
var Fn = Je(bo()),
  us = Je(Pf()),
  Qv = Je(Xm()),
  Lo = Je(yy()),
  qd = Je(Py()),
  Xv = Je(Uy()),
  jd = Je(Ua()),
  ec = Je($y()),
  ih = Je(Qy());
function ja(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function So(r, e) {
  e || (e = r.reduce((n, o) => n + o.length, 0));
  let t = ja(e),
    i = 0;
  for (let n of r) t.set(n, i), (i += n.length);
  return t;
}
var Zf = {};
rr(Zf, { identity: () => tD });
function Y4(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n),
      c = o.charCodeAt(0);
    if (t[c] !== 255) throw new TypeError(o + " is ambiguous");
    t[c] = n;
  }
  var l = r.length,
    g = r.charAt(0),
    d = Math.log(l) / Math.log(256),
    y = Math.log(256) / Math.log(l);
  function v(P) {
    if (
      (P instanceof Uint8Array ||
        (ArrayBuffer.isView(P)
          ? (P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength))
          : Array.isArray(P) && (P = Uint8Array.from(P))),
      !(P instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0) return "";
    for (var N = 0, T = 0, K = 0, Z = P.length; K !== Z && P[K] === 0; )
      K++, N++;
    for (var J = ((Z - K) * y + 1) >>> 0, G = new Uint8Array(J); K !== Z; ) {
      for (
        var Q = P[K], ee = 0, L = J - 1;
        (Q !== 0 || ee < T) && L !== -1;
        L--, ee++
      )
        (Q += (256 * G[L]) >>> 0), (G[L] = Q % l >>> 0), (Q = (Q / l) >>> 0);
      if (Q !== 0) throw new Error("Non-zero carry");
      (T = ee), K++;
    }
    for (var B = J - T; B !== J && G[B] === 0; ) B++;
    for (var ae = g.repeat(N); B < J; ++B) ae += r.charAt(G[B]);
    return ae;
  }
  function A(P) {
    if (typeof P != "string") throw new TypeError("Expected String");
    if (P.length === 0) return new Uint8Array();
    var N = 0;
    if (P[N] !== " ") {
      for (var T = 0, K = 0; P[N] === g; ) T++, N++;
      for (
        var Z = ((P.length - N) * d + 1) >>> 0, J = new Uint8Array(Z);
        P[N];

      ) {
        var G = t[P.charCodeAt(N)];
        if (G === 255) return;
        for (var Q = 0, ee = Z - 1; (G !== 0 || Q < K) && ee !== -1; ee--, Q++)
          (G += (l * J[ee]) >>> 0),
            (J[ee] = G % 256 >>> 0),
            (G = (G / 256) >>> 0);
        if (G !== 0) throw new Error("Non-zero carry");
        (K = Q), N++;
      }
      if (P[N] !== " ") {
        for (var L = Z - K; L !== Z && J[L] === 0; ) L++;
        for (var B = new Uint8Array(T + (Z - L)), ae = T; L !== Z; )
          B[ae++] = J[L++];
        return B;
      }
    }
  }
  function E(P) {
    var N = A(P);
    if (N) return N;
    throw new Error(`Non-${e} character`);
  }
  return { encode: v, decodeUnsafe: A, decode: E };
}
var Q4 = Y4,
  X4 = Q4,
  Xy = X4;
var lU = new Uint8Array(0);
var Zy = (r, e) => {
    if (r === e) return !0;
    if (r.byteLength !== e.byteLength) return !1;
    for (let t = 0; t < r.byteLength; t++) if (r[t] !== e[t]) return !1;
    return !0;
  },
  On = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  };
var ev = (r) => new TextEncoder().encode(r),
  tv = (r) => new TextDecoder().decode(r);
var Wf = class {
    constructor(e, t, i) {
      (this.name = e), (this.prefix = t), (this.baseEncode = i);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  Yf = class {
    constructor(e, t, i) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return iv(this, e);
    }
  },
  Qf = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return iv(this, e);
    }
    decode(e) {
      let t = e[0],
        i = this.decoders[t];
      if (i) return i.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  iv = (r, e) =>
    new Qf(
      Me(
        Me({}, r.decoders || { [r.prefix]: r }),
        e.decoders || { [e.prefix]: e }
      )
    ),
  Xf = class {
    constructor(e, t, i, n) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = i),
        (this.baseDecode = n),
        (this.encoder = new Wf(e, t, i)),
        (this.decoder = new Yf(e, t, n));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  xo = ({ name: r, prefix: e, encode: t, decode: i }) => new Xf(r, e, t, i),
  ns = ({ prefix: r, name: e, alphabet: t }) => {
    let { encode: i, decode: n } = Xy(t, e);
    return xo({ prefix: r, name: e, encode: i, decode: (o) => On(n(o)) });
  },
  Z4 = (r, e, t, i) => {
    let n = {};
    for (let y = 0; y < e.length; ++y) n[e[y]] = y;
    let o = r.length;
    for (; r[o - 1] === "="; ) --o;
    let c = new Uint8Array(((o * t) / 8) | 0),
      l = 0,
      g = 0,
      d = 0;
    for (let y = 0; y < o; ++y) {
      let v = n[r[y]];
      if (v === void 0) throw new SyntaxError(`Non-${i} character`);
      (g = (g << t) | v),
        (l += t),
        l >= 8 && ((l -= 8), (c[d++] = 255 & (g >> l)));
    }
    if (l >= t || 255 & (g << (8 - l)))
      throw new SyntaxError("Unexpected end of data");
    return c;
  },
  eD = (r, e, t) => {
    let i = e[e.length - 1] === "=",
      n = (1 << t) - 1,
      o = "",
      c = 0,
      l = 0;
    for (let g = 0; g < r.length; ++g)
      for (l = (l << 8) | r[g], c += 8; c > t; )
        (c -= t), (o += e[n & (l >> c)]);
    if ((c && (o += e[n & (l << (t - c))]), i))
      for (; (o.length * t) & 7; ) o += "=";
    return o;
  },
  Bt = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    xo({
      prefix: e,
      name: r,
      encode(n) {
        return eD(n, i, t);
      },
      decode(n) {
        return Z4(n, i, t, r);
      },
    });
var tD = xo({
  prefix: "\0",
  name: "identity",
  encode: (r) => tv(r),
  decode: (r) => ev(r),
});
var ed = {};
rr(ed, { base2: () => rD });
var rD = Bt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var td = {};
rr(td, { base8: () => iD });
var iD = Bt({
  prefix: "7",
  name: "base8",
  alphabet: "01234567",
  bitsPerChar: 3,
});
var rd = {};
rr(rd, { base10: () => nD });
var nD = ns({ prefix: "9", name: "base10", alphabet: "0123456789" });
var id = {};
rr(id, { base16: () => sD, base16upper: () => oD });
var sD = Bt({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  oD = Bt({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  });
var nd = {};
rr(nd, {
  base32: () => Io,
  base32hex: () => hD,
  base32hexpad: () => fD,
  base32hexpadupper: () => dD,
  base32hexupper: () => lD,
  base32pad: () => cD,
  base32padupper: () => uD,
  base32upper: () => aD,
  base32z: () => pD,
});
var Io = Bt({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  aD = Bt({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  cD = Bt({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  uD = Bt({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  hD = Bt({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  lD = Bt({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  fD = Bt({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  dD = Bt({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  pD = Bt({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  });
var sd = {};
rr(sd, { base36: () => gD, base36upper: () => mD });
var gD = ns({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  mD = ns({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  });
var od = {};
rr(od, { base58btc: () => zi, base58flickr: () => yD });
var zi = ns({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  yD = ns({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  });
var ad = {};
rr(ad, {
  base64: () => vD,
  base64pad: () => wD,
  base64url: () => bD,
  base64urlpad: () => _D,
});
var vD = Bt({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  wD = Bt({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  bD = Bt({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  _D = Bt({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  });
var cd = {};
rr(cd, { base256emoji: () => ID });
var nv = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  ED = nv.reduce((r, e, t) => ((r[t] = e), r), []),
  AD = nv.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function SD(r) {
  return r.reduce((e, t) => ((e += ED[t]), e), "");
}
function xD(r) {
  let e = [];
  for (let t of r) {
    let i = AD[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
var ID = xo({
  prefix: "\u{1F680}",
  name: "base256emoji",
  encode: SD,
  decode: xD,
});
var fd = {};
rr(fd, { sha256: () => VD, sha512: () => GD });
var DD = av,
  sv = 128,
  RD = 127,
  CD = ~RD,
  OD = Math.pow(2, 31);
function av(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= OD; ) (e[t++] = (r & 255) | sv), (r /= 128);
  for (; r & CD; ) (e[t++] = (r & 255) | sv), (r >>>= 7);
  return (e[t] = r | 0), (av.bytes = t - i + 1), e;
}
var PD = ud,
  MD = 128,
  ov = 127;
function ud(r, i) {
  var t = 0,
    i = i || 0,
    n = 0,
    o = i,
    c,
    l = r.length;
  do {
    if (o >= l)
      throw ((ud.bytes = 0), new RangeError("Could not decode varint"));
    (c = r[o++]),
      (t += n < 28 ? (c & ov) << n : (c & ov) * Math.pow(2, n)),
      (n += 7);
  } while (c >= MD);
  return (ud.bytes = o - i), t;
}
var ND = Math.pow(2, 7),
  TD = Math.pow(2, 14),
  FD = Math.pow(2, 21),
  LD = Math.pow(2, 28),
  UD = Math.pow(2, 35),
  BD = Math.pow(2, 42),
  qD = Math.pow(2, 49),
  jD = Math.pow(2, 56),
  zD = Math.pow(2, 63),
  kD = function (r) {
    return r < ND
      ? 1
      : r < TD
      ? 2
      : r < FD
      ? 3
      : r < LD
      ? 4
      : r < UD
      ? 5
      : r < BD
      ? 6
      : r < qD
      ? 7
      : r < jD
      ? 8
      : r < zD
      ? 9
      : 10;
  },
  HD = { encode: DD, decode: PD, encodingLength: kD },
  KD = HD,
  za = KD;
var ka = (r, e = 0) => [za.decode(r, e), za.decode.bytes],
  Do = (r, e, t = 0) => (za.encode(r, e, t), e),
  Ro = (r) => za.encodingLength(r);
var Ps = (r, e) => {
    let t = e.byteLength,
      i = Ro(r),
      n = i + Ro(t),
      o = new Uint8Array(n + t);
    return Do(r, o, 0), Do(t, o, i), o.set(e, n), new Co(r, t, e, o);
  },
  cv = (r) => {
    let e = On(r),
      [t, i] = ka(e),
      [n, o] = ka(e.subarray(i)),
      c = e.subarray(i + o);
    if (c.byteLength !== n) throw new Error("Incorrect length");
    return new Co(t, n, c, e);
  },
  uv = (r, e) =>
    r === e
      ? !0
      : r.code === e.code && r.size === e.size && Zy(r.bytes, e.bytes),
  Co = class {
    constructor(e, t, i, n) {
      (this.code = e), (this.size = t), (this.digest = i), (this.bytes = n);
    }
  };
var ld = ({ name: r, code: e, encode: t }) => new hd(r, e, t),
  hd = class {
    constructor(e, t, i) {
      (this.name = e), (this.code = t), (this.encode = i);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? Ps(this.code, t)
          : t.then((i) => Ps(this.code, i));
      } else throw Error("Unknown type, must be binary type");
    }
  };
var lv = (r) => (e) =>
    R(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(r, e));
    }),
  VD = ld({ name: "sha2-256", code: 18, encode: lv("SHA-256") }),
  GD = ld({ name: "sha2-512", code: 19, encode: lv("SHA-512") });
var dd = {};
rr(dd, { identity: () => WD });
var fv = 0,
  $D = "identity",
  dv = On,
  JD = (r) => Ps(fv, dv(r)),
  WD = { code: fv, name: $D, encode: dv, digest: JD };
var TU = new TextEncoder(),
  FU = new TextDecoder();
var zu = class r {
    constructor(e, t, i, n) {
      (this.code = t),
        (this.version = e),
        (this.multihash = i),
        (this.bytes = n),
        (this.byteOffset = n.byteOffset),
        (this.byteLength = n.byteLength),
        (this.asCID = this),
        (this._baseCache = new Map()),
        Object.defineProperties(this, {
          byteOffset: ju,
          byteLength: ju,
          code: qu,
          version: qu,
          multihash: qu,
          bytes: qu,
          _baseCache: ju,
          asCID: ju,
        });
    }
    toV0() {
      switch (this.version) {
        case 0:
          return this;
        default: {
          let { code: e, multihash: t } = this;
          if (e !== Ka)
            throw new Error("Cannot convert a non dag-pb CID to CIDv0");
          if (t.code !== tR)
            throw new Error(
              "Cannot convert non sha2-256 multihash CID to CIDv0"
            );
          return r.createV0(t);
        }
      }
    }
    toV1() {
      switch (this.version) {
        case 0: {
          let { code: e, digest: t } = this.multihash,
            i = Ps(e, t);
          return r.createV1(this.code, i);
        }
        case 1:
          return this;
        default:
          throw Error(
            `Can not convert CID version ${this.version} to version 0. This is a bug please report`
          );
      }
    }
    equals(e) {
      return (
        e &&
        this.code === e.code &&
        this.version === e.version &&
        uv(this.multihash, e.multihash)
      );
    }
    toString(e) {
      let { bytes: t, version: i, _baseCache: n } = this;
      switch (i) {
        case 0:
          return ZD(t, n, e || zi.encoder);
        default:
          return eR(t, n, e || Io.encoder);
      }
    }
    toJSON() {
      return {
        code: this.code,
        version: this.version,
        hash: this.multihash.bytes,
      };
    }
    get [Symbol.toStringTag]() {
      return "CID";
    }
    [Symbol.for("nodejs.util.inspect.custom")]() {
      return "CID(" + this.toString() + ")";
    }
    static isCID(e) {
      return iR(/^0\.0/, nR), !!(e && (e[gv] || e.asCID === e));
    }
    get toBaseEncodedString() {
      throw new Error("Deprecated, use .toString()");
    }
    get codec() {
      throw new Error(
        '"codec" property is deprecated, use integer "code" property instead'
      );
    }
    get buffer() {
      throw new Error(
        "Deprecated .buffer property, use .bytes to get Uint8Array instead"
      );
    }
    get multibaseName() {
      throw new Error('"multibaseName" property is deprecated');
    }
    get prefix() {
      throw new Error('"prefix" property is deprecated');
    }
    static asCID(e) {
      if (e instanceof r) return e;
      if (e != null && e.asCID === e) {
        let { version: t, code: i, multihash: n, bytes: o } = e;
        return new r(t, i, n, o || pv(t, i, n.bytes));
      } else if (e != null && e[gv] === !0) {
        let { version: t, multihash: i, code: n } = e,
          o = cv(i);
        return r.create(t, n, o);
      } else return null;
    }
    static create(e, t, i) {
      if (typeof t != "number")
        throw new Error("String codecs are no longer supported");
      switch (e) {
        case 0: {
          if (t !== Ka)
            throw new Error(
              `Version 0 CID must use dag-pb (code: ${Ka}) block encoding`
            );
          return new r(e, t, i, i.bytes);
        }
        case 1: {
          let n = pv(e, t, i.bytes);
          return new r(e, t, i, n);
        }
        default:
          throw new Error("Invalid version");
      }
    }
    static createV0(e) {
      return r.create(0, Ka, e);
    }
    static createV1(e, t) {
      return r.create(1, e, t);
    }
    static decode(e) {
      let [t, i] = r.decodeFirst(e);
      if (i.length) throw new Error("Incorrect length");
      return t;
    }
    static decodeFirst(e) {
      let t = r.inspectBytes(e),
        i = t.size - t.multihashSize,
        n = On(e.subarray(i, i + t.multihashSize));
      if (n.byteLength !== t.multihashSize) throw new Error("Incorrect length");
      let o = n.subarray(t.multihashSize - t.digestSize),
        c = new Co(t.multihashCode, t.digestSize, o, n);
      return [
        t.version === 0 ? r.createV0(c) : r.createV1(t.codec, c),
        e.subarray(t.size),
      ];
    }
    static inspectBytes(e) {
      let t = 0,
        i = () => {
          let [v, A] = ka(e.subarray(t));
          return (t += A), v;
        },
        n = i(),
        o = Ka;
      if (
        (n === 18 ? ((n = 0), (t = 0)) : n === 1 && (o = i()),
        n !== 0 && n !== 1)
      )
        throw new RangeError(`Invalid CID version ${n}`);
      let c = t,
        l = i(),
        g = i(),
        d = t + g,
        y = d - c;
      return {
        version: n,
        codec: o,
        multihashCode: l,
        digestSize: g,
        multihashSize: y,
        size: d,
      };
    }
    static parse(e, t) {
      let [i, n] = XD(e, t),
        o = r.decode(n);
      return o._baseCache.set(i, e), o;
    }
  },
  XD = (r, e) => {
    switch (r[0]) {
      case "Q": {
        let t = e || zi;
        return [zi.prefix, t.decode(`${zi.prefix}${r}`)];
      }
      case zi.prefix: {
        let t = e || zi;
        return [zi.prefix, t.decode(r)];
      }
      case Io.prefix: {
        let t = e || Io;
        return [Io.prefix, t.decode(r)];
      }
      default: {
        if (e == null)
          throw Error(
            "To parse non base32 or base58btc encoded CID multibase decoder must be provided"
          );
        return [r[0], e.decode(r)];
      }
    }
  },
  ZD = (r, e, t) => {
    let { prefix: i } = t;
    if (i !== zi.prefix)
      throw Error(`Cannot string encode V0 in ${t.name} encoding`);
    let n = e.get(i);
    if (n == null) {
      let o = t.encode(r).slice(1);
      return e.set(i, o), o;
    } else return n;
  },
  eR = (r, e, t) => {
    let { prefix: i } = t,
      n = e.get(i);
    if (n == null) {
      let o = t.encode(r);
      return e.set(i, o), o;
    } else return n;
  },
  Ka = 112,
  tR = 18,
  pv = (r, e, t) => {
    let i = Ro(r),
      n = i + Ro(e),
      o = new Uint8Array(n + t.byteLength);
    return Do(r, o, 0), Do(e, o, i), o.set(t, n), o;
  },
  gv = Symbol.for("@ipld/js-cid/CID"),
  qu = { writable: !1, configurable: !1, enumerable: !0 },
  ju = { writable: !1, enumerable: !1, configurable: !1 },
  rR = "0.0.0-dev",
  iR = (r, e) => {
    if (r.test(rR)) console.warn(e);
    else throw new Error(e);
  },
  nR = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomSOLingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomSOLingWithCID(cid)
}
`;
var pd = Me(
    Me(Me(Me(Me(Me(Me(Me(Me(Me({}, Zf), ed), td), rd), id), nd), sd), od), ad),
    cd
  ),
  HU = Me(Me({}, fd), dd);
function yv(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
var mv = yv(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  gd = yv(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      let e = ja(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  sR = Me(
    {
      utf8: mv,
      "utf-8": mv,
      hex: pd.base16,
      latin1: gd,
      ascii: gd,
      binary: gd,
    },
    pd
  ),
  ku = sR;
function ir(r, e = "utf8") {
  let t = ku[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
function $t(r, e = "utf8") {
  let t = ku[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r.buffer, r.byteOffset, r.byteLength).toString(
        "utf8"
      )
    : t.encoder.encode(r).substring(1);
}
var vv = {
  waku: {
    publish: "waku_publish",
    batchPublish: "waku_batchPublish",
    subscribe: "waku_subscribe",
    batchSubscribe: "waku_batchSubscribe",
    subscription: "waku_subscription",
    unsubscribe: "waku_unsubscribe",
    batchUnsubscribe: "waku_batchUnsubscribe",
    batchFetchMessages: "waku_batchFetchMessages",
  },
  irn: {
    publish: "irn_publish",
    batchPublish: "irn_batchPublish",
    subscribe: "irn_subscribe",
    batchSubscribe: "irn_batchSubscribe",
    subscription: "irn_subscription",
    unsubscribe: "irn_unsubscribe",
    batchUnsubscribe: "irn_batchUnsubscribe",
    batchFetchMessages: "irn_batchFetchMessages",
  },
  iridium: {
    publish: "iridium_publish",
    batchPublish: "iridium_batchPublish",
    subscribe: "iridium_subscribe",
    batchSubscribe: "iridium_batchSubscribe",
    subscription: "iridium_subscription",
    unsubscribe: "iridium_unsubscribe",
    batchUnsubscribe: "iridium_batchUnsubscribe",
    batchFetchMessages: "iridium_batchFetchMessages",
  },
};
var oR = ":";
function Fs(r) {
  let [e, t] = r.split(oR);
  return { namespace: e, reference: t };
}
function zd(r, e = []) {
  let t = [];
  return (
    Object.keys(r).forEach((i) => {
      if (e.length && !e.includes(i)) return;
      let n = r[i];
      t.push(...n.accounts);
    }),
    t
  );
}
function Zv(r, e) {
  return r.includes(":") ? [r] : e.chains || [];
}
var aR = Object.defineProperty,
  wv = Object.getOwnPropertySymbols,
  cR = Object.prototype.hasOwnProperty,
  uR = Object.prototype.propertyIsEnumerable,
  bv = (r, e, t) =>
    e in r
      ? aR(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  _v = (r, e) => {
    for (var t in e || (e = {})) cR.call(e, t) && bv(r, t, e[t]);
    if (wv) for (var t of wv(e)) uR.call(e, t) && bv(r, t, e[t]);
    return r;
  },
  hR = "ReactNative",
  Tr = {
    reactNative: "react-native",
    node: "node",
    browser: "browser",
    unknown: "unknown",
  };
var lR = "js";
function Uo() {
  return (
    typeof process < "u" &&
    typeof process.versions < "u" &&
    typeof process.versions.node < "u"
  );
}
function Ls() {
  return (
    !(0, us.getDocument)() &&
    !!(0, us.getNavigator)() &&
    navigator.product === hR
  );
}
function hs() {
  return !Uo() && !!(0, us.getNavigator)() && !!(0, us.getDocument)();
}
function tc() {
  return Ls()
    ? Tr.reactNative
    : Uo()
    ? Tr.node
    : hs()
    ? Tr.browser
    : Tr.unknown;
}
function ew() {
  var r;
  try {
    return Ls() &&
      typeof global < "u" &&
      typeof (global == null ? void 0 : global.Application) < "u"
      ? (r = global.Application) == null
        ? void 0
        : r.applicationId
      : void 0;
  } catch {
    return;
  }
}
function fR(r, e) {
  let t = Lo.parse(r);
  return (t = _v(_v({}, t), e)), (r = Lo.stringify(t)), r;
}
function tw() {
  return (
    (0, Qv.getWindowMetadata)() || {
      name: "",
      description: "",
      url: "",
      icons: [""],
    }
  );
}
function dR() {
  if (
    tc() === Tr.reactNative &&
    typeof global < "u" &&
    typeof (global == null ? void 0 : global.Platform) < "u"
  ) {
    let { OS: t, Version: i } = global.Platform;
    return [t, i].join("-");
  }
  let r = Bm();
  if (r === null) return "unknown";
  let e = r.os ? r.os.replace(" ", "").toLowerCase() : "unknown";
  return r.type === "browser"
    ? [e, r.name, r.version].join("-")
    : [e, r.version].join("-");
}
function pR() {
  var r;
  let e = tc();
  return e === Tr.browser
    ? [
        e,
        ((r = (0, us.getLocation)()) == null ? void 0 : r.host) || "unknown",
      ].join(":")
    : e;
}
function gR(r, e, t) {
  let i = dR(),
    n = pR();
  return [[r, e].join("-"), [lR, t].join("-"), i, n].join("/");
}
function rw({
  protocol: r,
  version: e,
  relayUrl: t,
  sdkVersion: i,
  auth: n,
  projectId: o,
  useOnCloseEvent: c,
  bundleId: l,
}) {
  let g = t.split("?"),
    d = gR(r, e, i),
    y = {
      auth: n,
      ua: d,
      projectId: o,
      useOnCloseEvent: c || void 0,
      origin: l || void 0,
    },
    v = fR(g[1] || "", y);
  return g[0] + "?" + v;
}
function Ms(r, e) {
  return r.filter((t) => e.includes(t)).length === r.length;
}
function kd(r) {
  return Object.fromEntries(r.entries());
}
function Hd(r) {
  return new Map(Object.entries(r));
}
function Ln(r = Fn.FIVE_MINUTES, e) {
  let t = (0, Fn.toMiliseconds)(r || Fn.FIVE_MINUTES),
    i,
    n,
    o;
  return {
    resolve: (c) => {
      o && i && (clearTimeout(o), i(c));
    },
    reject: (c) => {
      o && n && (clearTimeout(o), n(c));
    },
    done: () =>
      new Promise((c, l) => {
        (o = setTimeout(() => {
          l(new Error(e));
        }, t)),
          (i = c),
          (n = l);
      }),
  };
}
function Us(r, e, t) {
  return new Promise((i, n) =>
    R(this, null, function* () {
      let o = setTimeout(() => n(new Error(t)), e);
      try {
        let c = yield r;
        i(c);
      } catch (c) {
        n(c);
      }
      clearTimeout(o);
    })
  );
}
function iw(r, e) {
  if (typeof e == "string" && e.startsWith(`${r}:`)) return e;
  if (r.toLowerCase() === "topic") {
    if (typeof e != "string")
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${e}`;
  } else if (r.toLowerCase() === "id") {
    if (typeof e != "number")
      throw new Error('Value must be "number" for expirer target type: id');
    return `id:${e}`;
  }
  throw new Error(`Unknown expirer target type: ${r}`);
}
function nw(r) {
  return iw("topic", r);
}
function sw(r) {
  return iw("id", r);
}
function nh(r) {
  let [e, t] = r.split(":"),
    i = { id: void 0, topic: void 0 };
  if (e === "topic" && typeof t == "string") i.topic = t;
  else if (e === "id" && Number.isInteger(Number(t))) i.id = Number(t);
  else
    throw new Error(
      `Invalid target, expected id:number or topic:string, got ${e}:${t}`
    );
  return i;
}
function Jt(r, e) {
  return (0, Fn.fromMiliseconds)((e || Date.now()) + (0, Fn.toMiliseconds)(r));
}
function Qi(r) {
  return Date.now() >= (0, Fn.toMiliseconds)(r);
}
function Ne(r, e) {
  return `${r}${e ? `:${e}` : ""}`;
}
function rc(r = [], e = []) {
  return [...new Set([...r, ...e])];
}
function ow(i) {
  return R(this, arguments, function* ({ id: r, topic: e, wcDeepLink: t }) {
    try {
      if (!t) return;
      let o = (typeof t == "string" ? JSON.parse(t) : t)?.href;
      if (typeof o != "string") return;
      o.endsWith("/") && (o = o.slice(0, -1));
      let c = `${o}/wc?requestId=${r}&sessionTopic=${e}`,
        l = tc();
      l === Tr.browser
        ? c.startsWith("https://") || c.startsWith("http://")
          ? window.open(c, "_blank", "noreferrer noopener")
          : window.open(c, "_self", "noreferrer noopener")
        : l === Tr.reactNative &&
          typeof (global == null ? void 0 : global.Linking) < "u" &&
          (yield global.Linking.openURL(c));
    } catch (n) {
      console.error(n);
    }
  });
}
function aw(r, e) {
  return R(this, null, function* () {
    try {
      return (yield r.getItem(e)) || (hs() ? localStorage.getItem(e) : void 0);
    } catch (t) {
      console.error(t);
    }
  });
}
var cw =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function mR(r) {
  var e = r.default;
  if (typeof e == "function") {
    var t = function () {
      return e.apply(this, arguments);
    };
    t.prototype = e.prototype;
  } else t = {};
  return (
    Object.defineProperty(t, "__esModule", { value: !0 }),
    Object.keys(r).forEach(function (i) {
      var n = Object.getOwnPropertyDescriptor(r, i);
      Object.defineProperty(
        t,
        i,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return r[i];
              },
            }
      );
    }),
    t
  );
}
var uw = { exports: {} };
(function (r) {
  (function () {
    var e = "input is invalid type",
      t = "finalize already called",
      i = typeof window == "object",
      n = i ? window : {};
    n.JS_SHA3_NO_WINDOW && (i = !1);
    var o = !i && typeof self == "object",
      c =
        !n.JS_SHA3_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    c ? (n = cw) : o && (n = self);
    var l = !n.JS_SHA3_NO_COMMON_JS && !0 && r.exports,
      g = !n.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      d = "0123456789abcdef".split(""),
      y = [31, 7936, 2031616, 520093696],
      v = [4, 1024, 262144, 67108864],
      A = [1, 256, 65536, 16777216],
      E = [6, 1536, 393216, 100663296],
      P = [0, 8, 16, 24],
      N = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      T = [224, 256, 384, 512],
      K = [128, 256],
      Z = ["hex", "buffer", "arrayBuffer", "array", "digest"],
      J = { 128: 168, 256: 136 };
    (n.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (w) {
        return Object.prototype.toString.call(w) === "[object Array]";
      }),
      g &&
        (n.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (w) {
          return (
            typeof w == "object" &&
            w.buffer &&
            w.buffer.constructor === ArrayBuffer
          );
        });
    for (
      var G = function (w, $, H) {
          return function (Y) {
            return new I(w, $, w).update(Y)[H]();
          };
        },
        Q = function (w, $, H) {
          return function (Y, he) {
            return new I(w, $, he).update(Y)[H]();
          };
        },
        ee = function (w, $, H) {
          return function (Y, he, oe, ce) {
            return m["cshake" + w].update(Y, he, oe, ce)[H]();
          };
        },
        L = function (w, $, H) {
          return function (Y, he, oe, ce) {
            return m["kmac" + w].update(Y, he, oe, ce)[H]();
          };
        },
        B = function (w, $, H, Y) {
          for (var he = 0; he < Z.length; ++he) {
            var oe = Z[he];
            w[oe] = $(H, Y, oe);
          }
          return w;
        },
        ae = function (w, $) {
          var H = G(w, $, "hex");
          return (
            (H.create = function () {
              return new I(w, $, w);
            }),
            (H.update = function (Y) {
              return H.create().update(Y);
            }),
            B(H, G, w, $)
          );
        },
        U = function (w, $) {
          var H = Q(w, $, "hex");
          return (
            (H.create = function (Y) {
              return new I(w, $, Y);
            }),
            (H.update = function (Y, he) {
              return H.create(he).update(Y);
            }),
            B(H, Q, w, $)
          );
        },
        j = function (w, $) {
          var H = J[w],
            Y = ee(w, $, "hex");
          return (
            (Y.create = function (he, oe, ce) {
              return !oe && !ce
                ? m["shake" + w].create(he)
                : new I(w, $, he).bytepad([oe, ce], H);
            }),
            (Y.update = function (he, oe, ce, fe) {
              return Y.create(oe, ce, fe).update(he);
            }),
            B(Y, ee, w, $)
          );
        },
        W = function (w, $) {
          var H = J[w],
            Y = L(w, $, "hex");
          return (
            (Y.create = function (he, oe, ce) {
              return new ue(w, $, oe).bytepad(["KMAC", ce], H).bytepad([he], H);
            }),
            (Y.update = function (he, oe, ce, fe) {
              return Y.create(he, ce, fe).update(oe);
            }),
            B(Y, L, w, $)
          );
        },
        h = [
          { name: "keccak", padding: A, bits: T, createMSOLod: ae },
          { name: "sha3", padding: E, bits: T, createMSOLod: ae },
          { name: "shake", padding: y, bits: K, createMSOLod: U },
          { name: "cshake", padding: v, bits: K, createMSOLod: j },
          { name: "kmac", padding: v, bits: K, createMSOLod: W },
        ],
        m = {},
        b = [],
        x = 0;
      x < h.length;
      ++x
    )
      for (var D = h[x], M = D.bits, z = 0; z < M.length; ++z) {
        var C = D.name + "_" + M[z];
        if (
          (b.push(C),
          (m[C] = D.createMSOLod(M[z], D.padding)),
          D.name !== "sha3")
        ) {
          var p = D.name + M[z];
          b.push(p), (m[p] = m[C]);
        }
      }
    function I(w, $, H) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = $),
        (this.outputBits = H),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (w << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = H >> 5),
        (this.extraBytes = (H & 31) >> 3);
      for (var Y = 0; Y < 50; ++Y) this.s[Y] = 0;
    }
    (I.prototype.update = function (w) {
      if (this.finalized) throw new Error(t);
      var $,
        H = typeof w;
      if (H !== "string") {
        if (H === "object") {
          if (w === null) throw new Error(e);
          if (g && w.constructor === ArrayBuffer) w = new Uint8Array(w);
          else if (!Array.isArray(w) && (!g || !ArrayBuffer.isView(w)))
            throw new Error(e);
        } else throw new Error(e);
        $ = !0;
      }
      for (
        var Y = this.blocks,
          he = this.byteCount,
          oe = w.length,
          ce = this.blockCount,
          fe = 0,
          pe = this.s,
          se,
          ve;
        fe < oe;

      ) {
        if (this.reset)
          for (this.reset = !1, Y[0] = this.block, se = 1; se < ce + 1; ++se)
            Y[se] = 0;
        if ($)
          for (se = this.start; fe < oe && se < he; ++fe)
            Y[se >> 2] |= w[fe] << P[se++ & 3];
        else
          for (se = this.start; fe < oe && se < he; ++fe)
            (ve = w.charCodeAt(fe)),
              ve < 128
                ? (Y[se >> 2] |= ve << P[se++ & 3])
                : ve < 2048
                ? ((Y[se >> 2] |= (192 | (ve >> 6)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | (ve & 63)) << P[se++ & 3]))
                : ve < 55296 || ve >= 57344
                ? ((Y[se >> 2] |= (224 | (ve >> 12)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | ((ve >> 6) & 63)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | (ve & 63)) << P[se++ & 3]))
                : ((ve =
                    65536 +
                    (((ve & 1023) << 10) | (w.charCodeAt(++fe) & 1023))),
                  (Y[se >> 2] |= (240 | (ve >> 18)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | ((ve >> 12) & 63)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | ((ve >> 6) & 63)) << P[se++ & 3]),
                  (Y[se >> 2] |= (128 | (ve & 63)) << P[se++ & 3]));
        if (((this.lastByteIndex = se), se >= he)) {
          for (this.start = se - he, this.block = Y[ce], se = 0; se < ce; ++se)
            pe[se] ^= Y[se];
          ne(pe), (this.reset = !0);
        } else this.start = se;
      }
      return this;
    }),
      (I.prototype.encode = function (w, $) {
        var H = w & 255,
          Y = 1,
          he = [H];
        for (w = w >> 8, H = w & 255; H > 0; )
          he.unshift(H), (w = w >> 8), (H = w & 255), ++Y;
        return $ ? he.push(Y) : he.unshift(Y), this.update(he), he.length;
      }),
      (I.prototype.encodeString = function (w) {
        var $,
          H = typeof w;
        if (H !== "string") {
          if (H === "object") {
            if (w === null) throw new Error(e);
            if (g && w.constructor === ArrayBuffer) w = new Uint8Array(w);
            else if (!Array.isArray(w) && (!g || !ArrayBuffer.isView(w)))
              throw new Error(e);
          } else throw new Error(e);
          $ = !0;
        }
        var Y = 0,
          he = w.length;
        if ($) Y = he;
        else
          for (var oe = 0; oe < w.length; ++oe) {
            var ce = w.charCodeAt(oe);
            ce < 128
              ? (Y += 1)
              : ce < 2048
              ? (Y += 2)
              : ce < 55296 || ce >= 57344
              ? (Y += 3)
              : ((ce =
                  65536 + (((ce & 1023) << 10) | (w.charCodeAt(++oe) & 1023))),
                (Y += 4));
          }
        return (Y += this.encode(Y * 8)), this.update(w), Y;
      }),
      (I.prototype.bytepad = function (w, $) {
        for (var H = this.encode($), Y = 0; Y < w.length; ++Y)
          H += this.encodeString(w[Y]);
        var he = $ - (H % $),
          oe = [];
        return (oe.length = he), this.update(oe), this;
      }),
      (I.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var w = this.blocks,
            $ = this.lastByteIndex,
            H = this.blockCount,
            Y = this.s;
          if (
            ((w[$ >> 2] |= this.padding[$ & 3]),
            this.lastByteIndex === this.byteCount)
          )
            for (w[0] = w[H], $ = 1; $ < H + 1; ++$) w[$] = 0;
          for (w[H - 1] |= 2147483648, $ = 0; $ < H; ++$) Y[$] ^= w[$];
          ne(Y);
        }
      }),
      (I.prototype.toString = I.prototype.hex =
        function () {
          this.finalize();
          for (
            var w = this.blockCount,
              $ = this.s,
              H = this.outputBlocks,
              Y = this.extraBytes,
              he = 0,
              oe = 0,
              ce = "",
              fe;
            oe < H;

          ) {
            for (he = 0; he < w && oe < H; ++he, ++oe)
              (fe = $[he]),
                (ce +=
                  d[(fe >> 4) & 15] +
                  d[fe & 15] +
                  d[(fe >> 12) & 15] +
                  d[(fe >> 8) & 15] +
                  d[(fe >> 20) & 15] +
                  d[(fe >> 16) & 15] +
                  d[(fe >> 28) & 15] +
                  d[(fe >> 24) & 15]);
            oe % w === 0 && (ne($), (he = 0));
          }
          return (
            Y &&
              ((fe = $[he]),
              (ce += d[(fe >> 4) & 15] + d[fe & 15]),
              Y > 1 && (ce += d[(fe >> 12) & 15] + d[(fe >> 8) & 15]),
              Y > 2 && (ce += d[(fe >> 20) & 15] + d[(fe >> 16) & 15])),
            ce
          );
        }),
      (I.prototype.arrayBuffer = function () {
        this.finalize();
        var w = this.blockCount,
          $ = this.s,
          H = this.outputBlocks,
          Y = this.extraBytes,
          he = 0,
          oe = 0,
          ce = this.outputBits >> 3,
          fe;
        Y ? (fe = new ArrayBuffer((H + 1) << 2)) : (fe = new ArrayBuffer(ce));
        for (var pe = new Uint32Array(fe); oe < H; ) {
          for (he = 0; he < w && oe < H; ++he, ++oe) pe[oe] = $[he];
          oe % w === 0 && ne($);
        }
        return Y && ((pe[he] = $[he]), (fe = fe.slice(0, ce))), fe;
      }),
      (I.prototype.buffer = I.prototype.arrayBuffer),
      (I.prototype.digest = I.prototype.array =
        function () {
          this.finalize();
          for (
            var w = this.blockCount,
              $ = this.s,
              H = this.outputBlocks,
              Y = this.extraBytes,
              he = 0,
              oe = 0,
              ce = [],
              fe,
              pe;
            oe < H;

          ) {
            for (he = 0; he < w && oe < H; ++he, ++oe)
              (fe = oe << 2),
                (pe = $[he]),
                (ce[fe] = pe & 255),
                (ce[fe + 1] = (pe >> 8) & 255),
                (ce[fe + 2] = (pe >> 16) & 255),
                (ce[fe + 3] = (pe >> 24) & 255);
            oe % w === 0 && ne($);
          }
          return (
            Y &&
              ((fe = oe << 2),
              (pe = $[he]),
              (ce[fe] = pe & 255),
              Y > 1 && (ce[fe + 1] = (pe >> 8) & 255),
              Y > 2 && (ce[fe + 2] = (pe >> 16) & 255)),
            ce
          );
        });
    function ue(w, $, H) {
      I.call(this, w, $, H);
    }
    (ue.prototype = new I()),
      (ue.prototype.finalize = function () {
        return (
          this.encode(this.outputBits, !0), I.prototype.finalize.call(this)
        );
      });
    var ne = function (w) {
      var $,
        H,
        Y,
        he,
        oe,
        ce,
        fe,
        pe,
        se,
        ve,
        ht,
        je,
        Ri,
        lt,
        Ke,
        Kt,
        Ve,
        We,
        un,
        Ge,
        ft,
        Ur,
        He,
        Xe,
        fi,
        Ze,
        et,
        di,
        tt,
        rt,
        pi,
        it,
        dt,
        hn,
        pt,
        ot,
        Ci,
        gt,
        mt,
        ln,
        yt,
        at,
        fn,
        vt,
        wt,
        gi,
        bt,
        nt,
        dn,
        _t,
        Et,
        pn,
        At,
        St,
        gn,
        xt,
        ct,
        Oi,
        Pi,
        Mi,
        Ni,
        Ti,
        Fi;
      for (Y = 0; Y < 48; Y += 2)
        (he = w[0] ^ w[10] ^ w[20] ^ w[30] ^ w[40]),
          (oe = w[1] ^ w[11] ^ w[21] ^ w[31] ^ w[41]),
          (ce = w[2] ^ w[12] ^ w[22] ^ w[32] ^ w[42]),
          (fe = w[3] ^ w[13] ^ w[23] ^ w[33] ^ w[43]),
          (pe = w[4] ^ w[14] ^ w[24] ^ w[34] ^ w[44]),
          (se = w[5] ^ w[15] ^ w[25] ^ w[35] ^ w[45]),
          (ve = w[6] ^ w[16] ^ w[26] ^ w[36] ^ w[46]),
          (ht = w[7] ^ w[17] ^ w[27] ^ w[37] ^ w[47]),
          (je = w[8] ^ w[18] ^ w[28] ^ w[38] ^ w[48]),
          (Ri = w[9] ^ w[19] ^ w[29] ^ w[39] ^ w[49]),
          ($ = je ^ ((ce << 1) | (fe >>> 31))),
          (H = Ri ^ ((fe << 1) | (ce >>> 31))),
          (w[0] ^= $),
          (w[1] ^= H),
          (w[10] ^= $),
          (w[11] ^= H),
          (w[20] ^= $),
          (w[21] ^= H),
          (w[30] ^= $),
          (w[31] ^= H),
          (w[40] ^= $),
          (w[41] ^= H),
          ($ = he ^ ((pe << 1) | (se >>> 31))),
          (H = oe ^ ((se << 1) | (pe >>> 31))),
          (w[2] ^= $),
          (w[3] ^= H),
          (w[12] ^= $),
          (w[13] ^= H),
          (w[22] ^= $),
          (w[23] ^= H),
          (w[32] ^= $),
          (w[33] ^= H),
          (w[42] ^= $),
          (w[43] ^= H),
          ($ = ce ^ ((ve << 1) | (ht >>> 31))),
          (H = fe ^ ((ht << 1) | (ve >>> 31))),
          (w[4] ^= $),
          (w[5] ^= H),
          (w[14] ^= $),
          (w[15] ^= H),
          (w[24] ^= $),
          (w[25] ^= H),
          (w[34] ^= $),
          (w[35] ^= H),
          (w[44] ^= $),
          (w[45] ^= H),
          ($ = pe ^ ((je << 1) | (Ri >>> 31))),
          (H = se ^ ((Ri << 1) | (je >>> 31))),
          (w[6] ^= $),
          (w[7] ^= H),
          (w[16] ^= $),
          (w[17] ^= H),
          (w[26] ^= $),
          (w[27] ^= H),
          (w[36] ^= $),
          (w[37] ^= H),
          (w[46] ^= $),
          (w[47] ^= H),
          ($ = ve ^ ((he << 1) | (oe >>> 31))),
          (H = ht ^ ((oe << 1) | (he >>> 31))),
          (w[8] ^= $),
          (w[9] ^= H),
          (w[18] ^= $),
          (w[19] ^= H),
          (w[28] ^= $),
          (w[29] ^= H),
          (w[38] ^= $),
          (w[39] ^= H),
          (w[48] ^= $),
          (w[49] ^= H),
          (lt = w[0]),
          (Ke = w[1]),
          (gi = (w[11] << 4) | (w[10] >>> 28)),
          (bt = (w[10] << 4) | (w[11] >>> 28)),
          (di = (w[20] << 3) | (w[21] >>> 29)),
          (tt = (w[21] << 3) | (w[20] >>> 29)),
          (Mi = (w[31] << 9) | (w[30] >>> 23)),
          (Ni = (w[30] << 9) | (w[31] >>> 23)),
          (at = (w[40] << 18) | (w[41] >>> 14)),
          (fn = (w[41] << 18) | (w[40] >>> 14)),
          (hn = (w[2] << 1) | (w[3] >>> 31)),
          (pt = (w[3] << 1) | (w[2] >>> 31)),
          (Kt = (w[13] << 12) | (w[12] >>> 20)),
          (Ve = (w[12] << 12) | (w[13] >>> 20)),
          (nt = (w[22] << 10) | (w[23] >>> 22)),
          (dn = (w[23] << 10) | (w[22] >>> 22)),
          (rt = (w[33] << 13) | (w[32] >>> 19)),
          (pi = (w[32] << 13) | (w[33] >>> 19)),
          (Ti = (w[42] << 2) | (w[43] >>> 30)),
          (Fi = (w[43] << 2) | (w[42] >>> 30)),
          (St = (w[5] << 30) | (w[4] >>> 2)),
          (gn = (w[4] << 30) | (w[5] >>> 2)),
          (ot = (w[14] << 6) | (w[15] >>> 26)),
          (Ci = (w[15] << 6) | (w[14] >>> 26)),
          (We = (w[25] << 11) | (w[24] >>> 21)),
          (un = (w[24] << 11) | (w[25] >>> 21)),
          (_t = (w[34] << 15) | (w[35] >>> 17)),
          (Et = (w[35] << 15) | (w[34] >>> 17)),
          (it = (w[45] << 29) | (w[44] >>> 3)),
          (dt = (w[44] << 29) | (w[45] >>> 3)),
          (Xe = (w[6] << 28) | (w[7] >>> 4)),
          (fi = (w[7] << 28) | (w[6] >>> 4)),
          (xt = (w[17] << 23) | (w[16] >>> 9)),
          (ct = (w[16] << 23) | (w[17] >>> 9)),
          (gt = (w[26] << 25) | (w[27] >>> 7)),
          (mt = (w[27] << 25) | (w[26] >>> 7)),
          (Ge = (w[36] << 21) | (w[37] >>> 11)),
          (ft = (w[37] << 21) | (w[36] >>> 11)),
          (pn = (w[47] << 24) | (w[46] >>> 8)),
          (At = (w[46] << 24) | (w[47] >>> 8)),
          (vt = (w[8] << 27) | (w[9] >>> 5)),
          (wt = (w[9] << 27) | (w[8] >>> 5)),
          (Ze = (w[18] << 20) | (w[19] >>> 12)),
          (et = (w[19] << 20) | (w[18] >>> 12)),
          (Oi = (w[29] << 7) | (w[28] >>> 25)),
          (Pi = (w[28] << 7) | (w[29] >>> 25)),
          (ln = (w[38] << 8) | (w[39] >>> 24)),
          (yt = (w[39] << 8) | (w[38] >>> 24)),
          (Ur = (w[48] << 14) | (w[49] >>> 18)),
          (He = (w[49] << 14) | (w[48] >>> 18)),
          (w[0] = lt ^ (~Kt & We)),
          (w[1] = Ke ^ (~Ve & un)),
          (w[10] = Xe ^ (~Ze & di)),
          (w[11] = fi ^ (~et & tt)),
          (w[20] = hn ^ (~ot & gt)),
          (w[21] = pt ^ (~Ci & mt)),
          (w[30] = vt ^ (~gi & nt)),
          (w[31] = wt ^ (~bt & dn)),
          (w[40] = St ^ (~xt & Oi)),
          (w[41] = gn ^ (~ct & Pi)),
          (w[2] = Kt ^ (~We & Ge)),
          (w[3] = Ve ^ (~un & ft)),
          (w[12] = Ze ^ (~di & rt)),
          (w[13] = et ^ (~tt & pi)),
          (w[22] = ot ^ (~gt & ln)),
          (w[23] = Ci ^ (~mt & yt)),
          (w[32] = gi ^ (~nt & _t)),
          (w[33] = bt ^ (~dn & Et)),
          (w[42] = xt ^ (~Oi & Mi)),
          (w[43] = ct ^ (~Pi & Ni)),
          (w[4] = We ^ (~Ge & Ur)),
          (w[5] = un ^ (~ft & He)),
          (w[14] = di ^ (~rt & it)),
          (w[15] = tt ^ (~pi & dt)),
          (w[24] = gt ^ (~ln & at)),
          (w[25] = mt ^ (~yt & fn)),
          (w[34] = nt ^ (~_t & pn)),
          (w[35] = dn ^ (~Et & At)),
          (w[44] = Oi ^ (~Mi & Ti)),
          (w[45] = Pi ^ (~Ni & Fi)),
          (w[6] = Ge ^ (~Ur & lt)),
          (w[7] = ft ^ (~He & Ke)),
          (w[16] = rt ^ (~it & Xe)),
          (w[17] = pi ^ (~dt & fi)),
          (w[26] = ln ^ (~at & hn)),
          (w[27] = yt ^ (~fn & pt)),
          (w[36] = _t ^ (~pn & vt)),
          (w[37] = Et ^ (~At & wt)),
          (w[46] = Mi ^ (~Ti & St)),
          (w[47] = Ni ^ (~Fi & gn)),
          (w[8] = Ur ^ (~lt & Kt)),
          (w[9] = He ^ (~Ke & Ve)),
          (w[18] = it ^ (~Xe & Ze)),
          (w[19] = dt ^ (~fi & et)),
          (w[28] = at ^ (~hn & ot)),
          (w[29] = fn ^ (~pt & Ci)),
          (w[38] = pn ^ (~vt & gi)),
          (w[39] = At ^ (~wt & bt)),
          (w[48] = Ti ^ (~St & xt)),
          (w[49] = Fi ^ (~gn & ct)),
          (w[0] ^= N[Y]),
          (w[1] ^= N[Y + 1]);
    };
    if (l) r.exports = m;
    else for (x = 0; x < b.length; ++x) n[b[x]] = m[b[x]];
  })();
})(uw);
var yR = uw.exports,
  vR = "logger/5.7.0",
  Ev = !1,
  Av = !1,
  Ju = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 },
  Sv = Ju.default,
  md = null;
function wR() {
  try {
    let r = [];
    if (
      (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
        try {
          if ("test".normalize(e) !== "test") throw new Error("bad normalize");
        } catch {
          r.push(e);
        }
      }),
      r.length)
    )
      throw new Error("missing " + r.join(", "));
    if ("\xE9".normalize("NFD") !== "e\u0301")
      throw new Error("broken implementation");
  } catch (r) {
    return r.message;
  }
  return null;
}
var xv = wR(),
  Pd;
(function (r) {
  (r.DEBUG = "DEBUG"),
    (r.INFO = "INFO"),
    (r.WARNING = "WARNING"),
    (r.ERROR = "ERROR"),
    (r.OFF = "OFF");
})(Pd || (Pd = {}));
var _i;
(function (r) {
  (r.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (r.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
    (r.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
    (r.NETWORK_ERROR = "NETWORK_ERROR"),
    (r.SERVER_ERROR = "SERVER_ERROR"),
    (r.TIMEOUT = "TIMEOUT"),
    (r.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
    (r.NUMERIC_FAULT = "NUMERIC_FAULT"),
    (r.MISSING_NEW = "MISSING_NEW"),
    (r.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
    (r.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
    (r.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
    (r.CALL_EXCEPTION = "CALL_EXCEPTION"),
    (r.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
    (r.NONCE_EXPIRED = "NONCE_EXPIRED"),
    (r.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
    (r.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
    (r.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
    (r.ACTION_REJECTED = "ACTION_REJECTED");
})(_i || (_i = {}));
var Iv = "0123456789abcdef",
  Nt = class r {
    constructor(e) {
      Object.defineProperty(this, "version", {
        enumerable: !0,
        value: e,
        writable: !1,
      });
    }
    _log(e, t) {
      let i = e.toLowerCase();
      Ju[i] == null &&
        this.throwArgumentError("invalid log level name", "logLevel", e),
        !(Sv > Ju[i]) && console.log.apply(console, t);
    }
    debug(...e) {
      this._log(r.levels.DEBUG, e);
    }
    info(...e) {
      this._log(r.levels.INFO, e);
    }
    warn(...e) {
      this._log(r.levels.WARNING, e);
    }
    makeError(e, t, i) {
      if (Av) return this.makeError("censored error", t, {});
      t || (t = r.errors.UNKNOWN_ERROR), i || (i = {});
      let n = [];
      Object.keys(i).forEach((g) => {
        let d = i[g];
        try {
          if (d instanceof Uint8Array) {
            let y = "";
            for (let v = 0; v < d.length; v++)
              (y += Iv[d[v] >> 4]), (y += Iv[d[v] & 15]);
            n.push(g + "=Uint8Array(0x" + y + ")");
          } else n.push(g + "=" + JSON.stringify(d));
        } catch {
          n.push(g + "=" + JSON.stringify(i[g].toString()));
        }
      }),
        n.push(`code=${t}`),
        n.push(`version=${this.version}`);
      let o = e,
        c = "";
      switch (t) {
        case _i.NUMERIC_FAULT: {
          c = "NUMERIC_FAULT";
          let g = e;
          switch (g) {
            case "overflow":
            case "underflow":
            case "division-by-zero":
              c += "-" + g;
              break;
            case "negative-power":
            case "negative-width":
              c += "-unsupported";
              break;
            case "unbound-bitwise-result":
              c += "-unbound-result";
              break;
          }
          break;
        }
        case _i.CALL_EXCEPTION:
        case _i.INSUFFICIENT_FUNDS:
        case _i.MISSING_NEW:
        case _i.NONCE_EXPIRED:
        case _i.REPLACEMENT_UNDERPRICED:
        case _i.TRANSACTION_REPLACED:
        case _i.UNPREDICTABLE_GAS_LIMIT:
          c = t;
          break;
      }
      c && (e += " [ See: https://links.SOLers.org/v5-errors-" + c + " ]"),
        n.length && (e += " (" + n.join(", ") + ")");
      let l = new Error(e);
      return (
        (l.reason = o),
        (l.code = t),
        Object.keys(i).forEach(function (g) {
          l[g] = i[g];
        }),
        l
      );
    }
    throwError(e, t, i) {
      throw this.makeError(e, t, i);
    }
    throwArgumentError(e, t, i) {
      return this.throwError(e, r.errors.INVALID_ARGUMENT, {
        argument: t,
        value: i,
      });
    }
    assert(e, t, i, n) {
      e || this.throwError(t, i, n);
    }
    assertArgument(e, t, i, n) {
      e || this.throwArgumentError(t, i, n);
    }
    checkNormalize(e) {
      xv &&
        this.throwError(
          "platform missing String.prototype.normalize",
          r.errors.UNSUPPORTED_OPERATION,
          { operation: "String.prototype.normalize", form: xv }
        );
    }
    checkSafeUint53(e, t) {
      typeof e == "number" &&
        (t == null && (t = "value not safe"),
        (e < 0 || e >= 9007199254740991) &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "out-of-safe-range",
            value: e,
          }),
        e % 1 &&
          this.throwError(t, r.errors.NUMERIC_FAULT, {
            operation: "checkSafeInteger",
            fault: "non-integer",
            value: e,
          }));
    }
    checkArgumentCount(e, t, i) {
      i ? (i = ": " + i) : (i = ""),
        e < t &&
          this.throwError("missing argument" + i, r.errors.MISSING_ARGUMENT, {
            count: e,
            expectedCount: t,
          }),
        e > t &&
          this.throwError(
            "too many arguments" + i,
            r.errors.UNEXPECTED_ARGUMENT,
            { count: e, expectedCount: t }
          );
    }
    checkNew(e, t) {
      (e === Object || e == null) &&
        this.throwError("missing new", r.errors.MISSING_NEW, { name: t.name });
    }
    checkAbstract(e, t) {
      e === t
        ? this.throwError(
            "cannot instantiate abstract class " +
              JSON.stringify(t.name) +
              " directly; use a sub-class",
            r.errors.UNSUPPORTED_OPERATION,
            { name: e.name, operation: "new" }
          )
        : (e === Object || e == null) &&
          this.throwError("missing new", r.errors.MISSING_NEW, {
            name: t.name,
          });
    }
    static globalLogger() {
      return md || (md = new r(vR)), md;
    }
    static setCensorship(e, t) {
      if (
        (!e &&
          t &&
          this.globalLogger().throwError(
            "cannot permanently disable censorship",
            r.errors.UNSUPPORTED_OPERATION,
            { operation: "setCensorship" }
          ),
        Ev)
      ) {
        if (!e) return;
        this.globalLogger().throwError(
          "error censorship permanent",
          r.errors.UNSUPPORTED_OPERATION,
          { operation: "setCensorship" }
        );
      }
      (Av = !!e), (Ev = !!t);
    }
    static setLogLevel(e) {
      let t = Ju[e.toLowerCase()];
      if (t == null) {
        r.globalLogger().warn("invalid log level - " + e);
        return;
      }
      Sv = t;
    }
    static from(e) {
      return new r(e);
    }
  };
(Nt.errors = _i), (Nt.levels = Pd);
var bR = "bytes/5.7.0",
  Ht = new Nt(bR);
function hw(r) {
  return !!r.toHexString;
}
function Po(r) {
  return (
    r.slice ||
      (r.slice = function () {
        let e = Array.prototype.slice.call(arguments);
        return Po(new Uint8Array(Array.prototype.slice.apply(r, e)));
      }),
    r
  );
}
function _R(r) {
  return (Gr(r) && !(r.length % 2)) || Bo(r);
}
function Dv(r) {
  return typeof r == "number" && r == r && r % 1 === 0;
}
function Bo(r) {
  if (r == null) return !1;
  if (r.constructor === Uint8Array) return !0;
  if (typeof r == "string" || !Dv(r.length) || r.length < 0) return !1;
  for (let e = 0; e < r.length; e++) {
    let t = r[e];
    if (!Dv(t) || t < 0 || t >= 256) return !1;
  }
  return !0;
}
function qt(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Ht.checkSafeUint53(r, "invalid arrayify value");
    let t = [];
    for (; r; ) t.unshift(r & 255), (r = parseInt(String(r / 256)));
    return t.length === 0 && t.push(0), Po(new Uint8Array(t));
  }
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    hw(r) && (r = r.toHexString()),
    Gr(r))
  ) {
    let t = r.substring(2);
    t.length % 2 &&
      (e.hexPad === "left"
        ? (t = "0" + t)
        : e.hexPad === "right"
        ? (t += "0")
        : Ht.throwArgumentError("hex data is odd-length", "value", r));
    let i = [];
    for (let n = 0; n < t.length; n += 2)
      i.push(parseInt(t.substring(n, n + 2), 16));
    return Po(new Uint8Array(i));
  }
  return Bo(r)
    ? Po(new Uint8Array(r))
    : Ht.throwArgumentError("invalid arrayify value", "value", r);
}
function ER(r) {
  let e = r.map((n) => qt(n)),
    t = e.reduce((n, o) => n + o.length, 0),
    i = new Uint8Array(t);
  return e.reduce((n, o) => (i.set(o, n), n + o.length), 0), Po(i);
}
function AR(r, e) {
  (r = qt(r)),
    r.length > e &&
      Ht.throwArgumentError("value out of range", "value", arguments[0]);
  let t = new Uint8Array(e);
  return t.set(r, e - r.length), Po(t);
}
function Gr(r, e) {
  return !(
    typeof r != "string" ||
    !r.match(/^0x[0-9A-Fa-f]*$/) ||
    (e && r.length !== 2 + 2 * e)
  );
}
var yd = "0123456789abcdef";
function Er(r, e) {
  if ((e || (e = {}), typeof r == "number")) {
    Ht.checkSafeUint53(r, "invalid hexlify value");
    let t = "";
    for (; r; ) (t = yd[r & 15] + t), (r = Math.floor(r / 16));
    return t.length ? (t.length % 2 && (t = "0" + t), "0x" + t) : "0x00";
  }
  if (typeof r == "bigint")
    return (r = r.toString(16)), r.length % 2 ? "0x0" + r : "0x" + r;
  if (
    (e.allowMissingPrefix &&
      typeof r == "string" &&
      r.substring(0, 2) !== "0x" &&
      (r = "0x" + r),
    hw(r))
  )
    return r.toHexString();
  if (Gr(r))
    return (
      r.length % 2 &&
        (e.hexPad === "left"
          ? (r = "0x0" + r.substring(2))
          : e.hexPad === "right"
          ? (r += "0")
          : Ht.throwArgumentError("hex data is odd-length", "value", r)),
      r.toLowerCase()
    );
  if (Bo(r)) {
    let t = "0x";
    for (let i = 0; i < r.length; i++) {
      let n = r[i];
      t += yd[(n & 240) >> 4] + yd[n & 15];
    }
    return t;
  }
  return Ht.throwArgumentError("invalid hexlify value", "value", r);
}
function SR(r) {
  if (typeof r != "string") r = Er(r);
  else if (!Gr(r) || r.length % 2) return null;
  return (r.length - 2) / 2;
}
function Rv(r, e, t) {
  return (
    typeof r != "string"
      ? (r = Er(r))
      : (!Gr(r) || r.length % 2) &&
        Ht.throwArgumentError("invalid hexData", "value", r),
    (e = 2 + 2 * e),
    t != null ? "0x" + r.substring(e, 2 + 2 * t) : "0x" + r.substring(e)
  );
}
function $i(r, e) {
  for (
    typeof r != "string"
      ? (r = Er(r))
      : Gr(r) || Ht.throwArgumentError("invalid hex string", "value", r),
      r.length > 2 * e + 2 &&
        Ht.throwArgumentError("value out of range", "value", arguments[1]);
    r.length < 2 * e + 2;

  )
    r = "0x0" + r.substring(2);
  return r;
}
function lw(r) {
  let e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (_R(r)) {
    let t = qt(r);
    t.length === 64
      ? ((e.v = 27 + (t[32] >> 7)),
        (t[32] &= 127),
        (e.r = Er(t.slice(0, 32))),
        (e.s = Er(t.slice(32, 64))))
      : t.length === 65
      ? ((e.r = Er(t.slice(0, 32))), (e.s = Er(t.slice(32, 64))), (e.v = t[64]))
      : Ht.throwArgumentError("invalid signature string", "signature", r),
      e.v < 27 &&
        (e.v === 0 || e.v === 1
          ? (e.v += 27)
          : Ht.throwArgumentError("signature invalid v byte", "signature", r)),
      (e.recoveryParam = 1 - (e.v % 2)),
      e.recoveryParam && (t[32] |= 128),
      (e._vs = Er(t.slice(32, 64)));
  } else {
    if (
      ((e.r = r.r),
      (e.s = r.s),
      (e.v = r.v),
      (e.recoveryParam = r.recoveryParam),
      (e._vs = r._vs),
      e._vs != null)
    ) {
      let n = AR(qt(e._vs), 32);
      e._vs = Er(n);
      let o = n[0] >= 128 ? 1 : 0;
      e.recoveryParam == null
        ? (e.recoveryParam = o)
        : e.recoveryParam !== o &&
          Ht.throwArgumentError(
            "signature recoveryParam mismatch _vs",
            "signature",
            r
          ),
        (n[0] &= 127);
      let c = Er(n);
      e.s == null
        ? (e.s = c)
        : e.s !== c &&
          Ht.throwArgumentError("signature v mismatch _vs", "signature", r);
    }
    if (e.recoveryParam == null)
      e.v == null
        ? Ht.throwArgumentError(
            "signature missing v and recoveryParam",
            "signature",
            r
          )
        : e.v === 0 || e.v === 1
        ? (e.recoveryParam = e.v)
        : (e.recoveryParam = 1 - (e.v % 2));
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      let n = e.v === 0 || e.v === 1 ? e.v : 1 - (e.v % 2);
      e.recoveryParam !== n &&
        Ht.throwArgumentError(
          "signature recoveryParam mismatch v",
          "signature",
          r
        );
    }
    e.r == null || !Gr(e.r)
      ? Ht.throwArgumentError("signature missing or invalid r", "signature", r)
      : (e.r = $i(e.r, 32)),
      e.s == null || !Gr(e.s)
        ? Ht.throwArgumentError(
            "signature missing or invalid s",
            "signature",
            r
          )
        : (e.s = $i(e.s, 32));
    let t = qt(e.s);
    t[0] >= 128 &&
      Ht.throwArgumentError("signature s out of range", "signature", r),
      e.recoveryParam && (t[0] |= 128);
    let i = Er(t);
    e._vs &&
      (Gr(e._vs) ||
        Ht.throwArgumentError("signature invalid _vs", "signature", r),
      (e._vs = $i(e._vs, 32))),
      e._vs == null
        ? (e._vs = i)
        : e._vs !== i &&
          Ht.throwArgumentError(
            "signature _vs mismatch v and s",
            "signature",
            r
          );
  }
  return (
    (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e
  );
}
function Kd(r) {
  return "0x" + yR.keccak_256(qt(r));
}
var fw = { exports: {} },
  xR = {},
  IR = Object.freeze({ __proto__: null, default: xR }),
  DR = mR(IR);
(function (r) {
  (function (e, t) {
    function i(h, m) {
      if (!h) throw new Error(m || "Assertion failed");
    }
    function n(h, m) {
      h.super_ = m;
      var b = function () {};
      (b.prototype = m.prototype),
        (h.prototype = new b()),
        (h.prototype.constructor = h);
    }
    function o(h, m, b) {
      if (o.isBN(h)) return h;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        h !== null &&
          ((m === "le" || m === "be") && ((b = m), (m = 10)),
          this._init(h || 0, m || 10, b || "be"));
    }
    typeof e == "object" ? (e.exports = o) : (t.BN = o),
      (o.BN = o),
      (o.wordSize = 26);
    var c;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (c = window.Buffer)
        : (c = DR.Buffer);
    } catch {}
    (o.isBN = function (h) {
      return h instanceof o
        ? !0
        : h !== null &&
            typeof h == "object" &&
            h.constructor.wordSize === o.wordSize &&
            Array.isArray(h.words);
    }),
      (o.max = function (h, m) {
        return h.cmp(m) > 0 ? h : m;
      }),
      (o.min = function (h, m) {
        return h.cmp(m) < 0 ? h : m;
      }),
      (o.prototype._init = function (h, m, b) {
        if (typeof h == "number") return this._initNumber(h, m, b);
        if (typeof h == "object") return this._initArray(h, m, b);
        m === "hex" && (m = 16),
          i(m === (m | 0) && m >= 2 && m <= 36),
          (h = h.toString().replace(/\s+/g, ""));
        var x = 0;
        h[0] === "-" && (x++, (this.negative = 1)),
          x < h.length &&
            (m === 16
              ? this._parseHex(h, x, b)
              : (this._parseBase(h, m, x),
                b === "le" && this._initArray(this.toArray(), m, b)));
      }),
      (o.prototype._initNumber = function (h, m, b) {
        h < 0 && ((this.negative = 1), (h = -h)),
          h < 67108864
            ? ((this.words = [h & 67108863]), (this.length = 1))
            : h < 4503599627370496
            ? ((this.words = [h & 67108863, (h / 67108864) & 67108863]),
              (this.length = 2))
            : (i(h < 9007199254740992),
              (this.words = [h & 67108863, (h / 67108864) & 67108863, 1]),
              (this.length = 3)),
          b === "le" && this._initArray(this.toArray(), m, b);
      }),
      (o.prototype._initArray = function (h, m, b) {
        if ((i(typeof h.length == "number"), h.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(h.length / 3)),
          (this.words = new Array(this.length));
        for (var x = 0; x < this.length; x++) this.words[x] = 0;
        var D,
          M,
          z = 0;
        if (b === "be")
          for (x = h.length - 1, D = 0; x >= 0; x -= 3)
            (M = h[x] | (h[x - 1] << 8) | (h[x - 2] << 16)),
              (this.words[D] |= (M << z) & 67108863),
              (this.words[D + 1] = (M >>> (26 - z)) & 67108863),
              (z += 24),
              z >= 26 && ((z -= 26), D++);
        else if (b === "le")
          for (x = 0, D = 0; x < h.length; x += 3)
            (M = h[x] | (h[x + 1] << 8) | (h[x + 2] << 16)),
              (this.words[D] |= (M << z) & 67108863),
              (this.words[D + 1] = (M >>> (26 - z)) & 67108863),
              (z += 24),
              z >= 26 && ((z -= 26), D++);
        return this._strip();
      });
    function l(h, m) {
      var b = h.charCodeAt(m);
      if (b >= 48 && b <= 57) return b - 48;
      if (b >= 65 && b <= 70) return b - 55;
      if (b >= 97 && b <= 102) return b - 87;
      i(!1, "Invalid character in " + h);
    }
    function g(h, m, b) {
      var x = l(h, b);
      return b - 1 >= m && (x |= l(h, b - 1) << 4), x;
    }
    o.prototype._parseHex = function (h, m, b) {
      (this.length = Math.ceil((h.length - m) / 6)),
        (this.words = new Array(this.length));
      for (var x = 0; x < this.length; x++) this.words[x] = 0;
      var D = 0,
        M = 0,
        z;
      if (b === "be")
        for (x = h.length - 1; x >= m; x -= 2)
          (z = g(h, m, x) << D),
            (this.words[M] |= z & 67108863),
            D >= 18
              ? ((D -= 18), (M += 1), (this.words[M] |= z >>> 26))
              : (D += 8);
      else {
        var C = h.length - m;
        for (x = C % 2 === 0 ? m + 1 : m; x < h.length; x += 2)
          (z = g(h, m, x) << D),
            (this.words[M] |= z & 67108863),
            D >= 18
              ? ((D -= 18), (M += 1), (this.words[M] |= z >>> 26))
              : (D += 8);
      }
      this._strip();
    };
    function d(h, m, b, x) {
      for (var D = 0, M = 0, z = Math.min(h.length, b), C = m; C < z; C++) {
        var p = h.charCodeAt(C) - 48;
        (D *= x),
          p >= 49 ? (M = p - 49 + 10) : p >= 17 ? (M = p - 17 + 10) : (M = p),
          i(p >= 0 && M < x, "Invalid character"),
          (D += M);
      }
      return D;
    }
    (o.prototype._parseBase = function (h, m, b) {
      (this.words = [0]), (this.length = 1);
      for (var x = 0, D = 1; D <= 67108863; D *= m) x++;
      x--, (D = (D / m) | 0);
      for (
        var M = h.length - b,
          z = M % x,
          C = Math.min(M, M - z) + b,
          p = 0,
          I = b;
        I < C;
        I += x
      )
        (p = d(h, I, I + x, m)),
          this.imuln(D),
          this.words[0] + p < 67108864 ? (this.words[0] += p) : this._iaddn(p);
      if (z !== 0) {
        var ue = 1;
        for (p = d(h, I, h.length, m), I = 0; I < z; I++) ue *= m;
        this.imuln(ue),
          this.words[0] + p < 67108864 ? (this.words[0] += p) : this._iaddn(p);
      }
      this._strip();
    }),
      (o.prototype.copy = function (h) {
        h.words = new Array(this.length);
        for (var m = 0; m < this.length; m++) h.words[m] = this.words[m];
        (h.length = this.length),
          (h.negative = this.negative),
          (h.red = this.red);
      });
    function y(h, m) {
      (h.words = m.words),
        (h.length = m.length),
        (h.negative = m.negative),
        (h.red = m.red);
    }
    if (
      ((o.prototype._move = function (h) {
        y(h, this);
      }),
      (o.prototype.clone = function () {
        var h = new o(null);
        return this.copy(h), h;
      }),
      (o.prototype._expand = function (h) {
        for (; this.length < h; ) this.words[this.length++] = 0;
        return this;
      }),
      (o.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (o.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = v;
      } catch {
        o.prototype.inspect = v;
      }
    else o.prototype.inspect = v;
    function v() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var A = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      E = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      P = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (o.prototype.toString = function (h, m) {
      (h = h || 10), (m = m | 0 || 1);
      var b;
      if (h === 16 || h === "hex") {
        b = "";
        for (var x = 0, D = 0, M = 0; M < this.length; M++) {
          var z = this.words[M],
            C = (((z << x) | D) & 16777215).toString(16);
          (D = (z >>> (24 - x)) & 16777215),
            (x += 2),
            x >= 26 && ((x -= 26), M--),
            D !== 0 || M !== this.length - 1
              ? (b = A[6 - C.length] + C + b)
              : (b = C + b);
        }
        for (D !== 0 && (b = D.toString(16) + b); b.length % m !== 0; )
          b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      if (h === (h | 0) && h >= 2 && h <= 36) {
        var p = E[h],
          I = P[h];
        b = "";
        var ue = this.clone();
        for (ue.negative = 0; !ue.isZero(); ) {
          var ne = ue.modrn(I).toString(h);
          (ue = ue.idivn(I)),
            ue.isZero() ? (b = ne + b) : (b = A[p - ne.length] + ne + b);
        }
        for (this.isZero() && (b = "0" + b); b.length % m !== 0; ) b = "0" + b;
        return this.negative !== 0 && (b = "-" + b), b;
      }
      i(!1, "Base should be between 2 and 36");
    }),
      (o.prototype.toNumber = function () {
        var h = this.words[0];
        return (
          this.length === 2
            ? (h += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (h += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              i(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -h : h
        );
      }),
      (o.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      c &&
        (o.prototype.toBuffer = function (h, m) {
          return this.toArrayLike(c, h, m);
        }),
      (o.prototype.toArray = function (h, m) {
        return this.toArrayLike(Array, h, m);
      });
    var N = function (h, m) {
      return h.allocUnsafe ? h.allocUnsafe(m) : new h(m);
    };
    (o.prototype.toArrayLike = function (h, m, b) {
      this._strip();
      var x = this.byteLength(),
        D = b || Math.max(1, x);
      i(x <= D, "byte array longer than desired length"),
        i(D > 0, "Requested array length <= 0");
      var M = N(h, D),
        z = m === "le" ? "LE" : "BE";
      return this["_toArrayLike" + z](M, x), M;
    }),
      (o.prototype._toArrayLikeLE = function (h, m) {
        for (var b = 0, x = 0, D = 0, M = 0; D < this.length; D++) {
          var z = (this.words[D] << M) | x;
          (h[b++] = z & 255),
            b < h.length && (h[b++] = (z >> 8) & 255),
            b < h.length && (h[b++] = (z >> 16) & 255),
            M === 6
              ? (b < h.length && (h[b++] = (z >> 24) & 255), (x = 0), (M = 0))
              : ((x = z >>> 24), (M += 2));
        }
        if (b < h.length) for (h[b++] = x; b < h.length; ) h[b++] = 0;
      }),
      (o.prototype._toArrayLikeBE = function (h, m) {
        for (var b = h.length - 1, x = 0, D = 0, M = 0; D < this.length; D++) {
          var z = (this.words[D] << M) | x;
          (h[b--] = z & 255),
            b >= 0 && (h[b--] = (z >> 8) & 255),
            b >= 0 && (h[b--] = (z >> 16) & 255),
            M === 6
              ? (b >= 0 && (h[b--] = (z >> 24) & 255), (x = 0), (M = 0))
              : ((x = z >>> 24), (M += 2));
        }
        if (b >= 0) for (h[b--] = x; b >= 0; ) h[b--] = 0;
      }),
      Math.clz32
        ? (o.prototype._countBits = function (h) {
            return 32 - Math.clz32(h);
          })
        : (o.prototype._countBits = function (h) {
            var m = h,
              b = 0;
            return (
              m >= 4096 && ((b += 13), (m >>>= 13)),
              m >= 64 && ((b += 7), (m >>>= 7)),
              m >= 8 && ((b += 4), (m >>>= 4)),
              m >= 2 && ((b += 2), (m >>>= 2)),
              b + m
            );
          }),
      (o.prototype._zeroBits = function (h) {
        if (h === 0) return 26;
        var m = h,
          b = 0;
        return (
          m & 8191 || ((b += 13), (m >>>= 13)),
          m & 127 || ((b += 7), (m >>>= 7)),
          m & 15 || ((b += 4), (m >>>= 4)),
          m & 3 || ((b += 2), (m >>>= 2)),
          m & 1 || b++,
          b
        );
      }),
      (o.prototype.bitLength = function () {
        var h = this.words[this.length - 1],
          m = this._countBits(h);
        return (this.length - 1) * 26 + m;
      });
    function T(h) {
      for (var m = new Array(h.bitLength()), b = 0; b < m.length; b++) {
        var x = (b / 26) | 0,
          D = b % 26;
        m[b] = (h.words[x] >>> D) & 1;
      }
      return m;
    }
    (o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var h = 0, m = 0; m < this.length; m++) {
        var b = this._zeroBits(this.words[m]);
        if (((h += b), b !== 26)) break;
      }
      return h;
    }),
      (o.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (o.prototype.toTwos = function (h) {
        return this.negative !== 0
          ? this.abs().inotn(h).iaddn(1)
          : this.clone();
      }),
      (o.prototype.fromTwos = function (h) {
        return this.testn(h - 1) ? this.notn(h).iaddn(1).ineg() : this.clone();
      }),
      (o.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (o.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (o.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (o.prototype.iuor = function (h) {
        for (; this.length < h.length; ) this.words[this.length++] = 0;
        for (var m = 0; m < h.length; m++)
          this.words[m] = this.words[m] | h.words[m];
        return this._strip();
      }),
      (o.prototype.ior = function (h) {
        return i((this.negative | h.negative) === 0), this.iuor(h);
      }),
      (o.prototype.or = function (h) {
        return this.length > h.length
          ? this.clone().ior(h)
          : h.clone().ior(this);
      }),
      (o.prototype.uor = function (h) {
        return this.length > h.length
          ? this.clone().iuor(h)
          : h.clone().iuor(this);
      }),
      (o.prototype.iuand = function (h) {
        var m;
        this.length > h.length ? (m = h) : (m = this);
        for (var b = 0; b < m.length; b++)
          this.words[b] = this.words[b] & h.words[b];
        return (this.length = m.length), this._strip();
      }),
      (o.prototype.iand = function (h) {
        return i((this.negative | h.negative) === 0), this.iuand(h);
      }),
      (o.prototype.and = function (h) {
        return this.length > h.length
          ? this.clone().iand(h)
          : h.clone().iand(this);
      }),
      (o.prototype.uand = function (h) {
        return this.length > h.length
          ? this.clone().iuand(h)
          : h.clone().iuand(this);
      }),
      (o.prototype.iuxor = function (h) {
        var m, b;
        this.length > h.length ? ((m = this), (b = h)) : ((m = h), (b = this));
        for (var x = 0; x < b.length; x++)
          this.words[x] = m.words[x] ^ b.words[x];
        if (this !== m) for (; x < m.length; x++) this.words[x] = m.words[x];
        return (this.length = m.length), this._strip();
      }),
      (o.prototype.ixor = function (h) {
        return i((this.negative | h.negative) === 0), this.iuxor(h);
      }),
      (o.prototype.xor = function (h) {
        return this.length > h.length
          ? this.clone().ixor(h)
          : h.clone().ixor(this);
      }),
      (o.prototype.uxor = function (h) {
        return this.length > h.length
          ? this.clone().iuxor(h)
          : h.clone().iuxor(this);
      }),
      (o.prototype.inotn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = Math.ceil(h / 26) | 0,
          b = h % 26;
        this._expand(m), b > 0 && m--;
        for (var x = 0; x < m; x++) this.words[x] = ~this.words[x] & 67108863;
        return (
          b > 0 && (this.words[x] = ~this.words[x] & (67108863 >> (26 - b))),
          this._strip()
        );
      }),
      (o.prototype.notn = function (h) {
        return this.clone().inotn(h);
      }),
      (o.prototype.setn = function (h, m) {
        i(typeof h == "number" && h >= 0);
        var b = (h / 26) | 0,
          x = h % 26;
        return (
          this._expand(b + 1),
          m
            ? (this.words[b] = this.words[b] | (1 << x))
            : (this.words[b] = this.words[b] & ~(1 << x)),
          this._strip()
        );
      }),
      (o.prototype.iadd = function (h) {
        var m;
        if (this.negative !== 0 && h.negative === 0)
          return (
            (this.negative = 0),
            (m = this.isub(h)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && h.negative !== 0)
          return (
            (h.negative = 0),
            (m = this.isub(h)),
            (h.negative = 1),
            m._normSign()
          );
        var b, x;
        this.length > h.length ? ((b = this), (x = h)) : ((b = h), (x = this));
        for (var D = 0, M = 0; M < x.length; M++)
          (m = (b.words[M] | 0) + (x.words[M] | 0) + D),
            (this.words[M] = m & 67108863),
            (D = m >>> 26);
        for (; D !== 0 && M < b.length; M++)
          (m = (b.words[M] | 0) + D),
            (this.words[M] = m & 67108863),
            (D = m >>> 26);
        if (((this.length = b.length), D !== 0))
          (this.words[this.length] = D), this.length++;
        else if (b !== this)
          for (; M < b.length; M++) this.words[M] = b.words[M];
        return this;
      }),
      (o.prototype.add = function (h) {
        var m;
        return h.negative !== 0 && this.negative === 0
          ? ((h.negative = 0), (m = this.sub(h)), (h.negative ^= 1), m)
          : h.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (m = h.sub(this)), (this.negative = 1), m)
          : this.length > h.length
          ? this.clone().iadd(h)
          : h.clone().iadd(this);
      }),
      (o.prototype.isub = function (h) {
        if (h.negative !== 0) {
          h.negative = 0;
          var m = this.iadd(h);
          return (h.negative = 1), m._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(h),
            (this.negative = 1),
            this._normSign()
          );
        var b = this.cmp(h);
        if (b === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var x, D;
        b > 0 ? ((x = this), (D = h)) : ((x = h), (D = this));
        for (var M = 0, z = 0; z < D.length; z++)
          (m = (x.words[z] | 0) - (D.words[z] | 0) + M),
            (M = m >> 26),
            (this.words[z] = m & 67108863);
        for (; M !== 0 && z < x.length; z++)
          (m = (x.words[z] | 0) + M),
            (M = m >> 26),
            (this.words[z] = m & 67108863);
        if (M === 0 && z < x.length && x !== this)
          for (; z < x.length; z++) this.words[z] = x.words[z];
        return (
          (this.length = Math.max(this.length, z)),
          x !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (o.prototype.sub = function (h) {
        return this.clone().isub(h);
      });
    function K(h, m, b) {
      b.negative = m.negative ^ h.negative;
      var x = (h.length + m.length) | 0;
      (b.length = x), (x = (x - 1) | 0);
      var D = h.words[0] | 0,
        M = m.words[0] | 0,
        z = D * M,
        C = z & 67108863,
        p = (z / 67108864) | 0;
      b.words[0] = C;
      for (var I = 1; I < x; I++) {
        for (
          var ue = p >>> 26,
            ne = p & 67108863,
            w = Math.min(I, m.length - 1),
            $ = Math.max(0, I - h.length + 1);
          $ <= w;
          $++
        ) {
          var H = (I - $) | 0;
          (D = h.words[H] | 0),
            (M = m.words[$] | 0),
            (z = D * M + ne),
            (ue += (z / 67108864) | 0),
            (ne = z & 67108863);
        }
        (b.words[I] = ne | 0), (p = ue | 0);
      }
      return p !== 0 ? (b.words[I] = p | 0) : b.length--, b._strip();
    }
    var Z = function (h, m, b) {
      var x = h.words,
        D = m.words,
        M = b.words,
        z = 0,
        C,
        p,
        I,
        ue = x[0] | 0,
        ne = ue & 8191,
        w = ue >>> 13,
        $ = x[1] | 0,
        H = $ & 8191,
        Y = $ >>> 13,
        he = x[2] | 0,
        oe = he & 8191,
        ce = he >>> 13,
        fe = x[3] | 0,
        pe = fe & 8191,
        se = fe >>> 13,
        ve = x[4] | 0,
        ht = ve & 8191,
        je = ve >>> 13,
        Ri = x[5] | 0,
        lt = Ri & 8191,
        Ke = Ri >>> 13,
        Kt = x[6] | 0,
        Ve = Kt & 8191,
        We = Kt >>> 13,
        un = x[7] | 0,
        Ge = un & 8191,
        ft = un >>> 13,
        Ur = x[8] | 0,
        He = Ur & 8191,
        Xe = Ur >>> 13,
        fi = x[9] | 0,
        Ze = fi & 8191,
        et = fi >>> 13,
        di = D[0] | 0,
        tt = di & 8191,
        rt = di >>> 13,
        pi = D[1] | 0,
        it = pi & 8191,
        dt = pi >>> 13,
        hn = D[2] | 0,
        pt = hn & 8191,
        ot = hn >>> 13,
        Ci = D[3] | 0,
        gt = Ci & 8191,
        mt = Ci >>> 13,
        ln = D[4] | 0,
        yt = ln & 8191,
        at = ln >>> 13,
        fn = D[5] | 0,
        vt = fn & 8191,
        wt = fn >>> 13,
        gi = D[6] | 0,
        bt = gi & 8191,
        nt = gi >>> 13,
        dn = D[7] | 0,
        _t = dn & 8191,
        Et = dn >>> 13,
        pn = D[8] | 0,
        At = pn & 8191,
        St = pn >>> 13,
        gn = D[9] | 0,
        xt = gn & 8191,
        ct = gn >>> 13;
      (b.negative = h.negative ^ m.negative),
        (b.length = 19),
        (C = Math.imul(ne, tt)),
        (p = Math.imul(ne, rt)),
        (p = (p + Math.imul(w, tt)) | 0),
        (I = Math.imul(w, rt));
      var Oi = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Oi >>> 26)) | 0),
        (Oi &= 67108863),
        (C = Math.imul(H, tt)),
        (p = Math.imul(H, rt)),
        (p = (p + Math.imul(Y, tt)) | 0),
        (I = Math.imul(Y, rt)),
        (C = (C + Math.imul(ne, it)) | 0),
        (p = (p + Math.imul(ne, dt)) | 0),
        (p = (p + Math.imul(w, it)) | 0),
        (I = (I + Math.imul(w, dt)) | 0);
      var Pi = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Pi >>> 26)) | 0),
        (Pi &= 67108863),
        (C = Math.imul(oe, tt)),
        (p = Math.imul(oe, rt)),
        (p = (p + Math.imul(ce, tt)) | 0),
        (I = Math.imul(ce, rt)),
        (C = (C + Math.imul(H, it)) | 0),
        (p = (p + Math.imul(H, dt)) | 0),
        (p = (p + Math.imul(Y, it)) | 0),
        (I = (I + Math.imul(Y, dt)) | 0),
        (C = (C + Math.imul(ne, pt)) | 0),
        (p = (p + Math.imul(ne, ot)) | 0),
        (p = (p + Math.imul(w, pt)) | 0),
        (I = (I + Math.imul(w, ot)) | 0);
      var Mi = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Mi >>> 26)) | 0),
        (Mi &= 67108863),
        (C = Math.imul(pe, tt)),
        (p = Math.imul(pe, rt)),
        (p = (p + Math.imul(se, tt)) | 0),
        (I = Math.imul(se, rt)),
        (C = (C + Math.imul(oe, it)) | 0),
        (p = (p + Math.imul(oe, dt)) | 0),
        (p = (p + Math.imul(ce, it)) | 0),
        (I = (I + Math.imul(ce, dt)) | 0),
        (C = (C + Math.imul(H, pt)) | 0),
        (p = (p + Math.imul(H, ot)) | 0),
        (p = (p + Math.imul(Y, pt)) | 0),
        (I = (I + Math.imul(Y, ot)) | 0),
        (C = (C + Math.imul(ne, gt)) | 0),
        (p = (p + Math.imul(ne, mt)) | 0),
        (p = (p + Math.imul(w, gt)) | 0),
        (I = (I + Math.imul(w, mt)) | 0);
      var Ni = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Ni >>> 26)) | 0),
        (Ni &= 67108863),
        (C = Math.imul(ht, tt)),
        (p = Math.imul(ht, rt)),
        (p = (p + Math.imul(je, tt)) | 0),
        (I = Math.imul(je, rt)),
        (C = (C + Math.imul(pe, it)) | 0),
        (p = (p + Math.imul(pe, dt)) | 0),
        (p = (p + Math.imul(se, it)) | 0),
        (I = (I + Math.imul(se, dt)) | 0),
        (C = (C + Math.imul(oe, pt)) | 0),
        (p = (p + Math.imul(oe, ot)) | 0),
        (p = (p + Math.imul(ce, pt)) | 0),
        (I = (I + Math.imul(ce, ot)) | 0),
        (C = (C + Math.imul(H, gt)) | 0),
        (p = (p + Math.imul(H, mt)) | 0),
        (p = (p + Math.imul(Y, gt)) | 0),
        (I = (I + Math.imul(Y, mt)) | 0),
        (C = (C + Math.imul(ne, yt)) | 0),
        (p = (p + Math.imul(ne, at)) | 0),
        (p = (p + Math.imul(w, yt)) | 0),
        (I = (I + Math.imul(w, at)) | 0);
      var Ti = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Ti >>> 26)) | 0),
        (Ti &= 67108863),
        (C = Math.imul(lt, tt)),
        (p = Math.imul(lt, rt)),
        (p = (p + Math.imul(Ke, tt)) | 0),
        (I = Math.imul(Ke, rt)),
        (C = (C + Math.imul(ht, it)) | 0),
        (p = (p + Math.imul(ht, dt)) | 0),
        (p = (p + Math.imul(je, it)) | 0),
        (I = (I + Math.imul(je, dt)) | 0),
        (C = (C + Math.imul(pe, pt)) | 0),
        (p = (p + Math.imul(pe, ot)) | 0),
        (p = (p + Math.imul(se, pt)) | 0),
        (I = (I + Math.imul(se, ot)) | 0),
        (C = (C + Math.imul(oe, gt)) | 0),
        (p = (p + Math.imul(oe, mt)) | 0),
        (p = (p + Math.imul(ce, gt)) | 0),
        (I = (I + Math.imul(ce, mt)) | 0),
        (C = (C + Math.imul(H, yt)) | 0),
        (p = (p + Math.imul(H, at)) | 0),
        (p = (p + Math.imul(Y, yt)) | 0),
        (I = (I + Math.imul(Y, at)) | 0),
        (C = (C + Math.imul(ne, vt)) | 0),
        (p = (p + Math.imul(ne, wt)) | 0),
        (p = (p + Math.imul(w, vt)) | 0),
        (I = (I + Math.imul(w, wt)) | 0);
      var Fi = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Fi >>> 26)) | 0),
        (Fi &= 67108863),
        (C = Math.imul(Ve, tt)),
        (p = Math.imul(Ve, rt)),
        (p = (p + Math.imul(We, tt)) | 0),
        (I = Math.imul(We, rt)),
        (C = (C + Math.imul(lt, it)) | 0),
        (p = (p + Math.imul(lt, dt)) | 0),
        (p = (p + Math.imul(Ke, it)) | 0),
        (I = (I + Math.imul(Ke, dt)) | 0),
        (C = (C + Math.imul(ht, pt)) | 0),
        (p = (p + Math.imul(ht, ot)) | 0),
        (p = (p + Math.imul(je, pt)) | 0),
        (I = (I + Math.imul(je, ot)) | 0),
        (C = (C + Math.imul(pe, gt)) | 0),
        (p = (p + Math.imul(pe, mt)) | 0),
        (p = (p + Math.imul(se, gt)) | 0),
        (I = (I + Math.imul(se, mt)) | 0),
        (C = (C + Math.imul(oe, yt)) | 0),
        (p = (p + Math.imul(oe, at)) | 0),
        (p = (p + Math.imul(ce, yt)) | 0),
        (I = (I + Math.imul(ce, at)) | 0),
        (C = (C + Math.imul(H, vt)) | 0),
        (p = (p + Math.imul(H, wt)) | 0),
        (p = (p + Math.imul(Y, vt)) | 0),
        (I = (I + Math.imul(Y, wt)) | 0),
        (C = (C + Math.imul(ne, bt)) | 0),
        (p = (p + Math.imul(ne, nt)) | 0),
        (p = (p + Math.imul(w, bt)) | 0),
        (I = (I + Math.imul(w, nt)) | 0);
      var Gn = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Gn >>> 26)) | 0),
        (Gn &= 67108863),
        (C = Math.imul(Ge, tt)),
        (p = Math.imul(Ge, rt)),
        (p = (p + Math.imul(ft, tt)) | 0),
        (I = Math.imul(ft, rt)),
        (C = (C + Math.imul(Ve, it)) | 0),
        (p = (p + Math.imul(Ve, dt)) | 0),
        (p = (p + Math.imul(We, it)) | 0),
        (I = (I + Math.imul(We, dt)) | 0),
        (C = (C + Math.imul(lt, pt)) | 0),
        (p = (p + Math.imul(lt, ot)) | 0),
        (p = (p + Math.imul(Ke, pt)) | 0),
        (I = (I + Math.imul(Ke, ot)) | 0),
        (C = (C + Math.imul(ht, gt)) | 0),
        (p = (p + Math.imul(ht, mt)) | 0),
        (p = (p + Math.imul(je, gt)) | 0),
        (I = (I + Math.imul(je, mt)) | 0),
        (C = (C + Math.imul(pe, yt)) | 0),
        (p = (p + Math.imul(pe, at)) | 0),
        (p = (p + Math.imul(se, yt)) | 0),
        (I = (I + Math.imul(se, at)) | 0),
        (C = (C + Math.imul(oe, vt)) | 0),
        (p = (p + Math.imul(oe, wt)) | 0),
        (p = (p + Math.imul(ce, vt)) | 0),
        (I = (I + Math.imul(ce, wt)) | 0),
        (C = (C + Math.imul(H, bt)) | 0),
        (p = (p + Math.imul(H, nt)) | 0),
        (p = (p + Math.imul(Y, bt)) | 0),
        (I = (I + Math.imul(Y, nt)) | 0),
        (C = (C + Math.imul(ne, _t)) | 0),
        (p = (p + Math.imul(ne, Et)) | 0),
        (p = (p + Math.imul(w, _t)) | 0),
        (I = (I + Math.imul(w, Et)) | 0);
      var ca = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (ca >>> 26)) | 0),
        (ca &= 67108863),
        (C = Math.imul(He, tt)),
        (p = Math.imul(He, rt)),
        (p = (p + Math.imul(Xe, tt)) | 0),
        (I = Math.imul(Xe, rt)),
        (C = (C + Math.imul(Ge, it)) | 0),
        (p = (p + Math.imul(Ge, dt)) | 0),
        (p = (p + Math.imul(ft, it)) | 0),
        (I = (I + Math.imul(ft, dt)) | 0),
        (C = (C + Math.imul(Ve, pt)) | 0),
        (p = (p + Math.imul(Ve, ot)) | 0),
        (p = (p + Math.imul(We, pt)) | 0),
        (I = (I + Math.imul(We, ot)) | 0),
        (C = (C + Math.imul(lt, gt)) | 0),
        (p = (p + Math.imul(lt, mt)) | 0),
        (p = (p + Math.imul(Ke, gt)) | 0),
        (I = (I + Math.imul(Ke, mt)) | 0),
        (C = (C + Math.imul(ht, yt)) | 0),
        (p = (p + Math.imul(ht, at)) | 0),
        (p = (p + Math.imul(je, yt)) | 0),
        (I = (I + Math.imul(je, at)) | 0),
        (C = (C + Math.imul(pe, vt)) | 0),
        (p = (p + Math.imul(pe, wt)) | 0),
        (p = (p + Math.imul(se, vt)) | 0),
        (I = (I + Math.imul(se, wt)) | 0),
        (C = (C + Math.imul(oe, bt)) | 0),
        (p = (p + Math.imul(oe, nt)) | 0),
        (p = (p + Math.imul(ce, bt)) | 0),
        (I = (I + Math.imul(ce, nt)) | 0),
        (C = (C + Math.imul(H, _t)) | 0),
        (p = (p + Math.imul(H, Et)) | 0),
        (p = (p + Math.imul(Y, _t)) | 0),
        (I = (I + Math.imul(Y, Et)) | 0),
        (C = (C + Math.imul(ne, At)) | 0),
        (p = (p + Math.imul(ne, St)) | 0),
        (p = (p + Math.imul(w, At)) | 0),
        (I = (I + Math.imul(w, St)) | 0);
      var $n = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + ($n >>> 26)) | 0),
        ($n &= 67108863),
        (C = Math.imul(Ze, tt)),
        (p = Math.imul(Ze, rt)),
        (p = (p + Math.imul(et, tt)) | 0),
        (I = Math.imul(et, rt)),
        (C = (C + Math.imul(He, it)) | 0),
        (p = (p + Math.imul(He, dt)) | 0),
        (p = (p + Math.imul(Xe, it)) | 0),
        (I = (I + Math.imul(Xe, dt)) | 0),
        (C = (C + Math.imul(Ge, pt)) | 0),
        (p = (p + Math.imul(Ge, ot)) | 0),
        (p = (p + Math.imul(ft, pt)) | 0),
        (I = (I + Math.imul(ft, ot)) | 0),
        (C = (C + Math.imul(Ve, gt)) | 0),
        (p = (p + Math.imul(Ve, mt)) | 0),
        (p = (p + Math.imul(We, gt)) | 0),
        (I = (I + Math.imul(We, mt)) | 0),
        (C = (C + Math.imul(lt, yt)) | 0),
        (p = (p + Math.imul(lt, at)) | 0),
        (p = (p + Math.imul(Ke, yt)) | 0),
        (I = (I + Math.imul(Ke, at)) | 0),
        (C = (C + Math.imul(ht, vt)) | 0),
        (p = (p + Math.imul(ht, wt)) | 0),
        (p = (p + Math.imul(je, vt)) | 0),
        (I = (I + Math.imul(je, wt)) | 0),
        (C = (C + Math.imul(pe, bt)) | 0),
        (p = (p + Math.imul(pe, nt)) | 0),
        (p = (p + Math.imul(se, bt)) | 0),
        (I = (I + Math.imul(se, nt)) | 0),
        (C = (C + Math.imul(oe, _t)) | 0),
        (p = (p + Math.imul(oe, Et)) | 0),
        (p = (p + Math.imul(ce, _t)) | 0),
        (I = (I + Math.imul(ce, Et)) | 0),
        (C = (C + Math.imul(H, At)) | 0),
        (p = (p + Math.imul(H, St)) | 0),
        (p = (p + Math.imul(Y, At)) | 0),
        (I = (I + Math.imul(Y, St)) | 0),
        (C = (C + Math.imul(ne, xt)) | 0),
        (p = (p + Math.imul(ne, ct)) | 0),
        (p = (p + Math.imul(w, xt)) | 0),
        (I = (I + Math.imul(w, ct)) | 0);
      var ua = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (ua >>> 26)) | 0),
        (ua &= 67108863),
        (C = Math.imul(Ze, it)),
        (p = Math.imul(Ze, dt)),
        (p = (p + Math.imul(et, it)) | 0),
        (I = Math.imul(et, dt)),
        (C = (C + Math.imul(He, pt)) | 0),
        (p = (p + Math.imul(He, ot)) | 0),
        (p = (p + Math.imul(Xe, pt)) | 0),
        (I = (I + Math.imul(Xe, ot)) | 0),
        (C = (C + Math.imul(Ge, gt)) | 0),
        (p = (p + Math.imul(Ge, mt)) | 0),
        (p = (p + Math.imul(ft, gt)) | 0),
        (I = (I + Math.imul(ft, mt)) | 0),
        (C = (C + Math.imul(Ve, yt)) | 0),
        (p = (p + Math.imul(Ve, at)) | 0),
        (p = (p + Math.imul(We, yt)) | 0),
        (I = (I + Math.imul(We, at)) | 0),
        (C = (C + Math.imul(lt, vt)) | 0),
        (p = (p + Math.imul(lt, wt)) | 0),
        (p = (p + Math.imul(Ke, vt)) | 0),
        (I = (I + Math.imul(Ke, wt)) | 0),
        (C = (C + Math.imul(ht, bt)) | 0),
        (p = (p + Math.imul(ht, nt)) | 0),
        (p = (p + Math.imul(je, bt)) | 0),
        (I = (I + Math.imul(je, nt)) | 0),
        (C = (C + Math.imul(pe, _t)) | 0),
        (p = (p + Math.imul(pe, Et)) | 0),
        (p = (p + Math.imul(se, _t)) | 0),
        (I = (I + Math.imul(se, Et)) | 0),
        (C = (C + Math.imul(oe, At)) | 0),
        (p = (p + Math.imul(oe, St)) | 0),
        (p = (p + Math.imul(ce, At)) | 0),
        (I = (I + Math.imul(ce, St)) | 0),
        (C = (C + Math.imul(H, xt)) | 0),
        (p = (p + Math.imul(H, ct)) | 0),
        (p = (p + Math.imul(Y, xt)) | 0),
        (I = (I + Math.imul(Y, ct)) | 0);
      var ha = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (ha >>> 26)) | 0),
        (ha &= 67108863),
        (C = Math.imul(Ze, pt)),
        (p = Math.imul(Ze, ot)),
        (p = (p + Math.imul(et, pt)) | 0),
        (I = Math.imul(et, ot)),
        (C = (C + Math.imul(He, gt)) | 0),
        (p = (p + Math.imul(He, mt)) | 0),
        (p = (p + Math.imul(Xe, gt)) | 0),
        (I = (I + Math.imul(Xe, mt)) | 0),
        (C = (C + Math.imul(Ge, yt)) | 0),
        (p = (p + Math.imul(Ge, at)) | 0),
        (p = (p + Math.imul(ft, yt)) | 0),
        (I = (I + Math.imul(ft, at)) | 0),
        (C = (C + Math.imul(Ve, vt)) | 0),
        (p = (p + Math.imul(Ve, wt)) | 0),
        (p = (p + Math.imul(We, vt)) | 0),
        (I = (I + Math.imul(We, wt)) | 0),
        (C = (C + Math.imul(lt, bt)) | 0),
        (p = (p + Math.imul(lt, nt)) | 0),
        (p = (p + Math.imul(Ke, bt)) | 0),
        (I = (I + Math.imul(Ke, nt)) | 0),
        (C = (C + Math.imul(ht, _t)) | 0),
        (p = (p + Math.imul(ht, Et)) | 0),
        (p = (p + Math.imul(je, _t)) | 0),
        (I = (I + Math.imul(je, Et)) | 0),
        (C = (C + Math.imul(pe, At)) | 0),
        (p = (p + Math.imul(pe, St)) | 0),
        (p = (p + Math.imul(se, At)) | 0),
        (I = (I + Math.imul(se, St)) | 0),
        (C = (C + Math.imul(oe, xt)) | 0),
        (p = (p + Math.imul(oe, ct)) | 0),
        (p = (p + Math.imul(ce, xt)) | 0),
        (I = (I + Math.imul(ce, ct)) | 0);
      var la = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (la >>> 26)) | 0),
        (la &= 67108863),
        (C = Math.imul(Ze, gt)),
        (p = Math.imul(Ze, mt)),
        (p = (p + Math.imul(et, gt)) | 0),
        (I = Math.imul(et, mt)),
        (C = (C + Math.imul(He, yt)) | 0),
        (p = (p + Math.imul(He, at)) | 0),
        (p = (p + Math.imul(Xe, yt)) | 0),
        (I = (I + Math.imul(Xe, at)) | 0),
        (C = (C + Math.imul(Ge, vt)) | 0),
        (p = (p + Math.imul(Ge, wt)) | 0),
        (p = (p + Math.imul(ft, vt)) | 0),
        (I = (I + Math.imul(ft, wt)) | 0),
        (C = (C + Math.imul(Ve, bt)) | 0),
        (p = (p + Math.imul(Ve, nt)) | 0),
        (p = (p + Math.imul(We, bt)) | 0),
        (I = (I + Math.imul(We, nt)) | 0),
        (C = (C + Math.imul(lt, _t)) | 0),
        (p = (p + Math.imul(lt, Et)) | 0),
        (p = (p + Math.imul(Ke, _t)) | 0),
        (I = (I + Math.imul(Ke, Et)) | 0),
        (C = (C + Math.imul(ht, At)) | 0),
        (p = (p + Math.imul(ht, St)) | 0),
        (p = (p + Math.imul(je, At)) | 0),
        (I = (I + Math.imul(je, St)) | 0),
        (C = (C + Math.imul(pe, xt)) | 0),
        (p = (p + Math.imul(pe, ct)) | 0),
        (p = (p + Math.imul(se, xt)) | 0),
        (I = (I + Math.imul(se, ct)) | 0);
      var Zs = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (Zs >>> 26)) | 0),
        (Zs &= 67108863),
        (C = Math.imul(Ze, yt)),
        (p = Math.imul(Ze, at)),
        (p = (p + Math.imul(et, yt)) | 0),
        (I = Math.imul(et, at)),
        (C = (C + Math.imul(He, vt)) | 0),
        (p = (p + Math.imul(He, wt)) | 0),
        (p = (p + Math.imul(Xe, vt)) | 0),
        (I = (I + Math.imul(Xe, wt)) | 0),
        (C = (C + Math.imul(Ge, bt)) | 0),
        (p = (p + Math.imul(Ge, nt)) | 0),
        (p = (p + Math.imul(ft, bt)) | 0),
        (I = (I + Math.imul(ft, nt)) | 0),
        (C = (C + Math.imul(Ve, _t)) | 0),
        (p = (p + Math.imul(Ve, Et)) | 0),
        (p = (p + Math.imul(We, _t)) | 0),
        (I = (I + Math.imul(We, Et)) | 0),
        (C = (C + Math.imul(lt, At)) | 0),
        (p = (p + Math.imul(lt, St)) | 0),
        (p = (p + Math.imul(Ke, At)) | 0),
        (I = (I + Math.imul(Ke, St)) | 0),
        (C = (C + Math.imul(ht, xt)) | 0),
        (p = (p + Math.imul(ht, ct)) | 0),
        (p = (p + Math.imul(je, xt)) | 0),
        (I = (I + Math.imul(je, ct)) | 0);
      var eo = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (eo >>> 26)) | 0),
        (eo &= 67108863),
        (C = Math.imul(Ze, vt)),
        (p = Math.imul(Ze, wt)),
        (p = (p + Math.imul(et, vt)) | 0),
        (I = Math.imul(et, wt)),
        (C = (C + Math.imul(He, bt)) | 0),
        (p = (p + Math.imul(He, nt)) | 0),
        (p = (p + Math.imul(Xe, bt)) | 0),
        (I = (I + Math.imul(Xe, nt)) | 0),
        (C = (C + Math.imul(Ge, _t)) | 0),
        (p = (p + Math.imul(Ge, Et)) | 0),
        (p = (p + Math.imul(ft, _t)) | 0),
        (I = (I + Math.imul(ft, Et)) | 0),
        (C = (C + Math.imul(Ve, At)) | 0),
        (p = (p + Math.imul(Ve, St)) | 0),
        (p = (p + Math.imul(We, At)) | 0),
        (I = (I + Math.imul(We, St)) | 0),
        (C = (C + Math.imul(lt, xt)) | 0),
        (p = (p + Math.imul(lt, ct)) | 0),
        (p = (p + Math.imul(Ke, xt)) | 0),
        (I = (I + Math.imul(Ke, ct)) | 0);
      var to = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (to >>> 26)) | 0),
        (to &= 67108863),
        (C = Math.imul(Ze, bt)),
        (p = Math.imul(Ze, nt)),
        (p = (p + Math.imul(et, bt)) | 0),
        (I = Math.imul(et, nt)),
        (C = (C + Math.imul(He, _t)) | 0),
        (p = (p + Math.imul(He, Et)) | 0),
        (p = (p + Math.imul(Xe, _t)) | 0),
        (I = (I + Math.imul(Xe, Et)) | 0),
        (C = (C + Math.imul(Ge, At)) | 0),
        (p = (p + Math.imul(Ge, St)) | 0),
        (p = (p + Math.imul(ft, At)) | 0),
        (I = (I + Math.imul(ft, St)) | 0),
        (C = (C + Math.imul(Ve, xt)) | 0),
        (p = (p + Math.imul(Ve, ct)) | 0),
        (p = (p + Math.imul(We, xt)) | 0),
        (I = (I + Math.imul(We, ct)) | 0);
      var fa = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (fa >>> 26)) | 0),
        (fa &= 67108863),
        (C = Math.imul(Ze, _t)),
        (p = Math.imul(Ze, Et)),
        (p = (p + Math.imul(et, _t)) | 0),
        (I = Math.imul(et, Et)),
        (C = (C + Math.imul(He, At)) | 0),
        (p = (p + Math.imul(He, St)) | 0),
        (p = (p + Math.imul(Xe, At)) | 0),
        (I = (I + Math.imul(Xe, St)) | 0),
        (C = (C + Math.imul(Ge, xt)) | 0),
        (p = (p + Math.imul(Ge, ct)) | 0),
        (p = (p + Math.imul(ft, xt)) | 0),
        (I = (I + Math.imul(ft, ct)) | 0);
      var da = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (da >>> 26)) | 0),
        (da &= 67108863),
        (C = Math.imul(Ze, At)),
        (p = Math.imul(Ze, St)),
        (p = (p + Math.imul(et, At)) | 0),
        (I = Math.imul(et, St)),
        (C = (C + Math.imul(He, xt)) | 0),
        (p = (p + Math.imul(He, ct)) | 0),
        (p = (p + Math.imul(Xe, xt)) | 0),
        (I = (I + Math.imul(Xe, ct)) | 0);
      var pa = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      (z = (((I + (p >>> 13)) | 0) + (pa >>> 26)) | 0),
        (pa &= 67108863),
        (C = Math.imul(Ze, xt)),
        (p = Math.imul(Ze, ct)),
        (p = (p + Math.imul(et, xt)) | 0),
        (I = Math.imul(et, ct));
      var ga = (((z + C) | 0) + ((p & 8191) << 13)) | 0;
      return (
        (z = (((I + (p >>> 13)) | 0) + (ga >>> 26)) | 0),
        (ga &= 67108863),
        (M[0] = Oi),
        (M[1] = Pi),
        (M[2] = Mi),
        (M[3] = Ni),
        (M[4] = Ti),
        (M[5] = Fi),
        (M[6] = Gn),
        (M[7] = ca),
        (M[8] = $n),
        (M[9] = ua),
        (M[10] = ha),
        (M[11] = la),
        (M[12] = Zs),
        (M[13] = eo),
        (M[14] = to),
        (M[15] = fa),
        (M[16] = da),
        (M[17] = pa),
        (M[18] = ga),
        z !== 0 && ((M[19] = z), b.length++),
        b
      );
    };
    Math.imul || (Z = K);
    function J(h, m, b) {
      (b.negative = m.negative ^ h.negative), (b.length = h.length + m.length);
      for (var x = 0, D = 0, M = 0; M < b.length - 1; M++) {
        var z = D;
        D = 0;
        for (
          var C = x & 67108863,
            p = Math.min(M, m.length - 1),
            I = Math.max(0, M - h.length + 1);
          I <= p;
          I++
        ) {
          var ue = M - I,
            ne = h.words[ue] | 0,
            w = m.words[I] | 0,
            $ = ne * w,
            H = $ & 67108863;
          (z = (z + (($ / 67108864) | 0)) | 0),
            (H = (H + C) | 0),
            (C = H & 67108863),
            (z = (z + (H >>> 26)) | 0),
            (D += z >>> 26),
            (z &= 67108863);
        }
        (b.words[M] = C), (x = z), (z = D);
      }
      return x !== 0 ? (b.words[M] = x) : b.length--, b._strip();
    }
    function G(h, m, b) {
      return J(h, m, b);
    }
    (o.prototype.mulTo = function (h, m) {
      var b,
        x = this.length + h.length;
      return (
        this.length === 10 && h.length === 10
          ? (b = Z(this, h, m))
          : x < 63
          ? (b = K(this, h, m))
          : x < 1024
          ? (b = J(this, h, m))
          : (b = G(this, h, m)),
        b
      );
    }),
      (o.prototype.mul = function (h) {
        var m = new o(null);
        return (m.words = new Array(this.length + h.length)), this.mulTo(h, m);
      }),
      (o.prototype.mulf = function (h) {
        var m = new o(null);
        return (m.words = new Array(this.length + h.length)), G(this, h, m);
      }),
      (o.prototype.imul = function (h) {
        return this.clone().mulTo(h, this);
      }),
      (o.prototype.imuln = function (h) {
        var m = h < 0;
        m && (h = -h), i(typeof h == "number"), i(h < 67108864);
        for (var b = 0, x = 0; x < this.length; x++) {
          var D = (this.words[x] | 0) * h,
            M = (D & 67108863) + (b & 67108863);
          (b >>= 26),
            (b += (D / 67108864) | 0),
            (b += M >>> 26),
            (this.words[x] = M & 67108863);
        }
        return (
          b !== 0 && ((this.words[x] = b), this.length++),
          m ? this.ineg() : this
        );
      }),
      (o.prototype.muln = function (h) {
        return this.clone().imuln(h);
      }),
      (o.prototype.sqr = function () {
        return this.mul(this);
      }),
      (o.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (o.prototype.pow = function (h) {
        var m = T(h);
        if (m.length === 0) return new o(1);
        for (var b = this, x = 0; x < m.length && m[x] === 0; x++, b = b.sqr());
        if (++x < m.length)
          for (var D = b.sqr(); x < m.length; x++, D = D.sqr())
            m[x] !== 0 && (b = b.mul(D));
        return b;
      }),
      (o.prototype.iushln = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26,
          x = (67108863 >>> (26 - m)) << (26 - m),
          D;
        if (m !== 0) {
          var M = 0;
          for (D = 0; D < this.length; D++) {
            var z = this.words[D] & x,
              C = ((this.words[D] | 0) - z) << m;
            (this.words[D] = C | M), (M = z >>> (26 - m));
          }
          M && ((this.words[D] = M), this.length++);
        }
        if (b !== 0) {
          for (D = this.length - 1; D >= 0; D--)
            this.words[D + b] = this.words[D];
          for (D = 0; D < b; D++) this.words[D] = 0;
          this.length += b;
        }
        return this._strip();
      }),
      (o.prototype.ishln = function (h) {
        return i(this.negative === 0), this.iushln(h);
      }),
      (o.prototype.iushrn = function (h, m, b) {
        i(typeof h == "number" && h >= 0);
        var x;
        m ? (x = (m - (m % 26)) / 26) : (x = 0);
        var D = h % 26,
          M = Math.min((h - D) / 26, this.length),
          z = 67108863 ^ ((67108863 >>> D) << D),
          C = b;
        if (((x -= M), (x = Math.max(0, x)), C)) {
          for (var p = 0; p < M; p++) C.words[p] = this.words[p];
          C.length = M;
        }
        if (M !== 0)
          if (this.length > M)
            for (this.length -= M, p = 0; p < this.length; p++)
              this.words[p] = this.words[p + M];
          else (this.words[0] = 0), (this.length = 1);
        var I = 0;
        for (p = this.length - 1; p >= 0 && (I !== 0 || p >= x); p--) {
          var ue = this.words[p] | 0;
          (this.words[p] = (I << (26 - D)) | (ue >>> D)), (I = ue & z);
        }
        return (
          C && I !== 0 && (C.words[C.length++] = I),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (o.prototype.ishrn = function (h, m, b) {
        return i(this.negative === 0), this.iushrn(h, m, b);
      }),
      (o.prototype.shln = function (h) {
        return this.clone().ishln(h);
      }),
      (o.prototype.ushln = function (h) {
        return this.clone().iushln(h);
      }),
      (o.prototype.shrn = function (h) {
        return this.clone().ishrn(h);
      }),
      (o.prototype.ushrn = function (h) {
        return this.clone().iushrn(h);
      }),
      (o.prototype.testn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26,
          x = 1 << m;
        if (this.length <= b) return !1;
        var D = this.words[b];
        return !!(D & x);
      }),
      (o.prototype.imaskn = function (h) {
        i(typeof h == "number" && h >= 0);
        var m = h % 26,
          b = (h - m) / 26;
        if (
          (i(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= b)
        )
          return this;
        if (
          (m !== 0 && b++, (this.length = Math.min(b, this.length)), m !== 0)
        ) {
          var x = 67108863 ^ ((67108863 >>> m) << m);
          this.words[this.length - 1] &= x;
        }
        return this._strip();
      }),
      (o.prototype.maskn = function (h) {
        return this.clone().imaskn(h);
      }),
      (o.prototype.iaddn = function (h) {
        return (
          i(typeof h == "number"),
          i(h < 67108864),
          h < 0
            ? this.isubn(-h)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= h
              ? ((this.words[0] = h - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(h), (this.negative = 1), this)
            : this._iaddn(h)
        );
      }),
      (o.prototype._iaddn = function (h) {
        this.words[0] += h;
        for (var m = 0; m < this.length && this.words[m] >= 67108864; m++)
          (this.words[m] -= 67108864),
            m === this.length - 1
              ? (this.words[m + 1] = 1)
              : this.words[m + 1]++;
        return (this.length = Math.max(this.length, m + 1)), this;
      }),
      (o.prototype.isubn = function (h) {
        if ((i(typeof h == "number"), i(h < 67108864), h < 0))
          return this.iaddn(-h);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(h), (this.negative = 1), this;
        if (((this.words[0] -= h), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var m = 0; m < this.length && this.words[m] < 0; m++)
            (this.words[m] += 67108864), (this.words[m + 1] -= 1);
        return this._strip();
      }),
      (o.prototype.addn = function (h) {
        return this.clone().iaddn(h);
      }),
      (o.prototype.subn = function (h) {
        return this.clone().isubn(h);
      }),
      (o.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (o.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (o.prototype._ishlnsubmul = function (h, m, b) {
        var x = h.length + b,
          D;
        this._expand(x);
        var M,
          z = 0;
        for (D = 0; D < h.length; D++) {
          M = (this.words[D + b] | 0) + z;
          var C = (h.words[D] | 0) * m;
          (M -= C & 67108863),
            (z = (M >> 26) - ((C / 67108864) | 0)),
            (this.words[D + b] = M & 67108863);
        }
        for (; D < this.length - b; D++)
          (M = (this.words[D + b] | 0) + z),
            (z = M >> 26),
            (this.words[D + b] = M & 67108863);
        if (z === 0) return this._strip();
        for (i(z === -1), z = 0, D = 0; D < this.length; D++)
          (M = -(this.words[D] | 0) + z),
            (z = M >> 26),
            (this.words[D] = M & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (o.prototype._wordDiv = function (h, m) {
        var b = this.length - h.length,
          x = this.clone(),
          D = h,
          M = D.words[D.length - 1] | 0,
          z = this._countBits(M);
        (b = 26 - z),
          b !== 0 &&
            ((D = D.ushln(b)), x.iushln(b), (M = D.words[D.length - 1] | 0));
        var C = x.length - D.length,
          p;
        if (m !== "mod") {
          (p = new o(null)),
            (p.length = C + 1),
            (p.words = new Array(p.length));
          for (var I = 0; I < p.length; I++) p.words[I] = 0;
        }
        var ue = x.clone()._ishlnsubmul(D, 1, C);
        ue.negative === 0 && ((x = ue), p && (p.words[C] = 1));
        for (var ne = C - 1; ne >= 0; ne--) {
          var w =
            (x.words[D.length + ne] | 0) * 67108864 +
            (x.words[D.length + ne - 1] | 0);
          for (
            w = Math.min((w / M) | 0, 67108863), x._ishlnsubmul(D, w, ne);
            x.negative !== 0;

          )
            w--,
              (x.negative = 0),
              x._ishlnsubmul(D, 1, ne),
              x.isZero() || (x.negative ^= 1);
          p && (p.words[ne] = w);
        }
        return (
          p && p._strip(),
          x._strip(),
          m !== "div" && b !== 0 && x.iushrn(b),
          { div: p || null, mod: x }
        );
      }),
      (o.prototype.divmod = function (h, m, b) {
        if ((i(!h.isZero()), this.isZero()))
          return { div: new o(0), mod: new o(0) };
        var x, D, M;
        return this.negative !== 0 && h.negative === 0
          ? ((M = this.neg().divmod(h, m)),
            m !== "mod" && (x = M.div.neg()),
            m !== "div" &&
              ((D = M.mod.neg()), b && D.negative !== 0 && D.iadd(h)),
            { div: x, mod: D })
          : this.negative === 0 && h.negative !== 0
          ? ((M = this.divmod(h.neg(), m)),
            m !== "mod" && (x = M.div.neg()),
            { div: x, mod: M.mod })
          : this.negative & h.negative
          ? ((M = this.neg().divmod(h.neg(), m)),
            m !== "div" &&
              ((D = M.mod.neg()), b && D.negative !== 0 && D.isub(h)),
            { div: M.div, mod: D })
          : h.length > this.length || this.cmp(h) < 0
          ? { div: new o(0), mod: this }
          : h.length === 1
          ? m === "div"
            ? { div: this.divn(h.words[0]), mod: null }
            : m === "mod"
            ? { div: null, mod: new o(this.modrn(h.words[0])) }
            : { div: this.divn(h.words[0]), mod: new o(this.modrn(h.words[0])) }
          : this._wordDiv(h, m);
      }),
      (o.prototype.div = function (h) {
        return this.divmod(h, "div", !1).div;
      }),
      (o.prototype.mod = function (h) {
        return this.divmod(h, "mod", !1).mod;
      }),
      (o.prototype.umod = function (h) {
        return this.divmod(h, "mod", !0).mod;
      }),
      (o.prototype.divRound = function (h) {
        var m = this.divmod(h);
        if (m.mod.isZero()) return m.div;
        var b = m.div.negative !== 0 ? m.mod.isub(h) : m.mod,
          x = h.ushrn(1),
          D = h.andln(1),
          M = b.cmp(x);
        return M < 0 || (D === 1 && M === 0)
          ? m.div
          : m.div.negative !== 0
          ? m.div.isubn(1)
          : m.div.iaddn(1);
      }),
      (o.prototype.modrn = function (h) {
        var m = h < 0;
        m && (h = -h), i(h <= 67108863);
        for (var b = (1 << 26) % h, x = 0, D = this.length - 1; D >= 0; D--)
          x = (b * x + (this.words[D] | 0)) % h;
        return m ? -x : x;
      }),
      (o.prototype.modn = function (h) {
        return this.modrn(h);
      }),
      (o.prototype.idivn = function (h) {
        var m = h < 0;
        m && (h = -h), i(h <= 67108863);
        for (var b = 0, x = this.length - 1; x >= 0; x--) {
          var D = (this.words[x] | 0) + b * 67108864;
          (this.words[x] = (D / h) | 0), (b = D % h);
        }
        return this._strip(), m ? this.ineg() : this;
      }),
      (o.prototype.divn = function (h) {
        return this.clone().idivn(h);
      }),
      (o.prototype.egcd = function (h) {
        i(h.negative === 0), i(!h.isZero());
        var m = this,
          b = h.clone();
        m.negative !== 0 ? (m = m.umod(h)) : (m = m.clone());
        for (
          var x = new o(1), D = new o(0), M = new o(0), z = new o(1), C = 0;
          m.isEven() && b.isEven();

        )
          m.iushrn(1), b.iushrn(1), ++C;
        for (var p = b.clone(), I = m.clone(); !m.isZero(); ) {
          for (
            var ue = 0, ne = 1;
            !(m.words[0] & ne) && ue < 26;
            ++ue, ne <<= 1
          );
          if (ue > 0)
            for (m.iushrn(ue); ue-- > 0; )
              (x.isOdd() || D.isOdd()) && (x.iadd(p), D.isub(I)),
                x.iushrn(1),
                D.iushrn(1);
          for (var w = 0, $ = 1; !(b.words[0] & $) && w < 26; ++w, $ <<= 1);
          if (w > 0)
            for (b.iushrn(w); w-- > 0; )
              (M.isOdd() || z.isOdd()) && (M.iadd(p), z.isub(I)),
                M.iushrn(1),
                z.iushrn(1);
          m.cmp(b) >= 0
            ? (m.isub(b), x.isub(M), D.isub(z))
            : (b.isub(m), M.isub(x), z.isub(D));
        }
        return { a: M, b: z, gcd: b.iushln(C) };
      }),
      (o.prototype._invmp = function (h) {
        i(h.negative === 0), i(!h.isZero());
        var m = this,
          b = h.clone();
        m.negative !== 0 ? (m = m.umod(h)) : (m = m.clone());
        for (
          var x = new o(1), D = new o(0), M = b.clone();
          m.cmpn(1) > 0 && b.cmpn(1) > 0;

        ) {
          for (var z = 0, C = 1; !(m.words[0] & C) && z < 26; ++z, C <<= 1);
          if (z > 0)
            for (m.iushrn(z); z-- > 0; ) x.isOdd() && x.iadd(M), x.iushrn(1);
          for (var p = 0, I = 1; !(b.words[0] & I) && p < 26; ++p, I <<= 1);
          if (p > 0)
            for (b.iushrn(p); p-- > 0; ) D.isOdd() && D.iadd(M), D.iushrn(1);
          m.cmp(b) >= 0 ? (m.isub(b), x.isub(D)) : (b.isub(m), D.isub(x));
        }
        var ue;
        return (
          m.cmpn(1) === 0 ? (ue = x) : (ue = D),
          ue.cmpn(0) < 0 && ue.iadd(h),
          ue
        );
      }),
      (o.prototype.gcd = function (h) {
        if (this.isZero()) return h.abs();
        if (h.isZero()) return this.abs();
        var m = this.clone(),
          b = h.clone();
        (m.negative = 0), (b.negative = 0);
        for (var x = 0; m.isEven() && b.isEven(); x++) m.iushrn(1), b.iushrn(1);
        do {
          for (; m.isEven(); ) m.iushrn(1);
          for (; b.isEven(); ) b.iushrn(1);
          var D = m.cmp(b);
          if (D < 0) {
            var M = m;
            (m = b), (b = M);
          } else if (D === 0 || b.cmpn(1) === 0) break;
          m.isub(b);
        } while (!0);
        return b.iushln(x);
      }),
      (o.prototype.invm = function (h) {
        return this.egcd(h).a.umod(h);
      }),
      (o.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (o.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (o.prototype.andln = function (h) {
        return this.words[0] & h;
      }),
      (o.prototype.bincn = function (h) {
        i(typeof h == "number");
        var m = h % 26,
          b = (h - m) / 26,
          x = 1 << m;
        if (this.length <= b)
          return this._expand(b + 1), (this.words[b] |= x), this;
        for (var D = x, M = b; D !== 0 && M < this.length; M++) {
          var z = this.words[M] | 0;
          (z += D), (D = z >>> 26), (z &= 67108863), (this.words[M] = z);
        }
        return D !== 0 && ((this.words[M] = D), this.length++), this;
      }),
      (o.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (o.prototype.cmpn = function (h) {
        var m = h < 0;
        if (this.negative !== 0 && !m) return -1;
        if (this.negative === 0 && m) return 1;
        this._strip();
        var b;
        if (this.length > 1) b = 1;
        else {
          m && (h = -h), i(h <= 67108863, "Number is too big");
          var x = this.words[0] | 0;
          b = x === h ? 0 : x < h ? -1 : 1;
        }
        return this.negative !== 0 ? -b | 0 : b;
      }),
      (o.prototype.cmp = function (h) {
        if (this.negative !== 0 && h.negative === 0) return -1;
        if (this.negative === 0 && h.negative !== 0) return 1;
        var m = this.ucmp(h);
        return this.negative !== 0 ? -m | 0 : m;
      }),
      (o.prototype.ucmp = function (h) {
        if (this.length > h.length) return 1;
        if (this.length < h.length) return -1;
        for (var m = 0, b = this.length - 1; b >= 0; b--) {
          var x = this.words[b] | 0,
            D = h.words[b] | 0;
          if (x !== D) {
            x < D ? (m = -1) : x > D && (m = 1);
            break;
          }
        }
        return m;
      }),
      (o.prototype.gtn = function (h) {
        return this.cmpn(h) === 1;
      }),
      (o.prototype.gt = function (h) {
        return this.cmp(h) === 1;
      }),
      (o.prototype.gten = function (h) {
        return this.cmpn(h) >= 0;
      }),
      (o.prototype.gte = function (h) {
        return this.cmp(h) >= 0;
      }),
      (o.prototype.ltn = function (h) {
        return this.cmpn(h) === -1;
      }),
      (o.prototype.lt = function (h) {
        return this.cmp(h) === -1;
      }),
      (o.prototype.lten = function (h) {
        return this.cmpn(h) <= 0;
      }),
      (o.prototype.lte = function (h) {
        return this.cmp(h) <= 0;
      }),
      (o.prototype.eqn = function (h) {
        return this.cmpn(h) === 0;
      }),
      (o.prototype.eq = function (h) {
        return this.cmp(h) === 0;
      }),
      (o.red = function (h) {
        return new j(h);
      }),
      (o.prototype.toRed = function (h) {
        return (
          i(!this.red, "Already a number in reduction context"),
          i(this.negative === 0, "red works only with positives"),
          h.convertTo(this)._forceRed(h)
        );
      }),
      (o.prototype.fromRed = function () {
        return (
          i(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (o.prototype._forceRed = function (h) {
        return (this.red = h), this;
      }),
      (o.prototype.forceRed = function (h) {
        return (
          i(!this.red, "Already a number in reduction context"),
          this._forceRed(h)
        );
      }),
      (o.prototype.redAdd = function (h) {
        return (
          i(this.red, "redAdd works only with red numbers"),
          this.red.add(this, h)
        );
      }),
      (o.prototype.redIAdd = function (h) {
        return (
          i(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, h)
        );
      }),
      (o.prototype.redSub = function (h) {
        return (
          i(this.red, "redSub works only with red numbers"),
          this.red.sub(this, h)
        );
      }),
      (o.prototype.redISub = function (h) {
        return (
          i(this.red, "redISub works only with red numbers"),
          this.red.isub(this, h)
        );
      }),
      (o.prototype.redShl = function (h) {
        return (
          i(this.red, "redShl works only with red numbers"),
          this.red.shl(this, h)
        );
      }),
      (o.prototype.redMul = function (h) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, h),
          this.red.mul(this, h)
        );
      }),
      (o.prototype.redIMul = function (h) {
        return (
          i(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, h),
          this.red.imul(this, h)
        );
      }),
      (o.prototype.redSqr = function () {
        return (
          i(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (o.prototype.redISqr = function () {
        return (
          i(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (o.prototype.redSqrt = function () {
        return (
          i(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (o.prototype.redInvm = function () {
        return (
          i(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (o.prototype.redNeg = function () {
        return (
          i(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (o.prototype.redPow = function (h) {
        return (
          i(this.red && !h.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, h)
        );
      });
    var Q = { k256: null, p224: null, p192: null, p25519: null };
    function ee(h, m) {
      (this.name = h),
        (this.p = new o(m, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new o(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (ee.prototype._tmp = function () {
      var h = new o(null);
      return (h.words = new Array(Math.ceil(this.n / 13))), h;
    }),
      (ee.prototype.ireduce = function (h) {
        var m = h,
          b;
        do
          this.split(m, this.tmp),
            (m = this.imulK(m)),
            (m = m.iadd(this.tmp)),
            (b = m.bitLength());
        while (b > this.n);
        var x = b < this.n ? -1 : m.ucmp(this.p);
        return (
          x === 0
            ? ((m.words[0] = 0), (m.length = 1))
            : x > 0
            ? m.isub(this.p)
            : m.strip !== void 0
            ? m.strip()
            : m._strip(),
          m
        );
      }),
      (ee.prototype.split = function (h, m) {
        h.iushrn(this.n, 0, m);
      }),
      (ee.prototype.imulK = function (h) {
        return h.imul(this.k);
      });
    function L() {
      ee.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    n(L, ee),
      (L.prototype.split = function (h, m) {
        for (var b = 4194303, x = Math.min(h.length, 9), D = 0; D < x; D++)
          m.words[D] = h.words[D];
        if (((m.length = x), h.length <= 9)) {
          (h.words[0] = 0), (h.length = 1);
          return;
        }
        var M = h.words[9];
        for (m.words[m.length++] = M & b, D = 10; D < h.length; D++) {
          var z = h.words[D] | 0;
          (h.words[D - 10] = ((z & b) << 4) | (M >>> 22)), (M = z);
        }
        (M >>>= 22),
          (h.words[D - 10] = M),
          M === 0 && h.length > 10 ? (h.length -= 10) : (h.length -= 9);
      }),
      (L.prototype.imulK = function (h) {
        (h.words[h.length] = 0), (h.words[h.length + 1] = 0), (h.length += 2);
        for (var m = 0, b = 0; b < h.length; b++) {
          var x = h.words[b] | 0;
          (m += x * 977),
            (h.words[b] = m & 67108863),
            (m = x * 64 + ((m / 67108864) | 0));
        }
        return (
          h.words[h.length - 1] === 0 &&
            (h.length--, h.words[h.length - 1] === 0 && h.length--),
          h
        );
      });
    function B() {
      ee.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    n(B, ee);
    function ae() {
      ee.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    n(ae, ee);
    function U() {
      ee.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    n(U, ee),
      (U.prototype.imulK = function (h) {
        for (var m = 0, b = 0; b < h.length; b++) {
          var x = (h.words[b] | 0) * 19 + m,
            D = x & 67108863;
          (x >>>= 26), (h.words[b] = D), (m = x);
        }
        return m !== 0 && (h.words[h.length++] = m), h;
      }),
      (o._prime = function (h) {
        if (Q[h]) return Q[h];
        var m;
        if (h === "k256") m = new L();
        else if (h === "p224") m = new B();
        else if (h === "p192") m = new ae();
        else if (h === "p25519") m = new U();
        else throw new Error("Unknown prime " + h);
        return (Q[h] = m), m;
      });
    function j(h) {
      if (typeof h == "string") {
        var m = o._prime(h);
        (this.m = m.p), (this.prime = m);
      } else
        i(h.gtn(1), "modulus must be greater than 1"),
          (this.m = h),
          (this.prime = null);
    }
    (j.prototype._verify1 = function (h) {
      i(h.negative === 0, "red works only with positives"),
        i(h.red, "red works only with red numbers");
    }),
      (j.prototype._verify2 = function (h, m) {
        i((h.negative | m.negative) === 0, "red works only with positives"),
          i(h.red && h.red === m.red, "red works only with red numbers");
      }),
      (j.prototype.imod = function (h) {
        return this.prime
          ? this.prime.ireduce(h)._forceRed(this)
          : (y(h, h.umod(this.m)._forceRed(this)), h);
      }),
      (j.prototype.neg = function (h) {
        return h.isZero() ? h.clone() : this.m.sub(h)._forceRed(this);
      }),
      (j.prototype.add = function (h, m) {
        this._verify2(h, m);
        var b = h.add(m);
        return b.cmp(this.m) >= 0 && b.isub(this.m), b._forceRed(this);
      }),
      (j.prototype.iadd = function (h, m) {
        this._verify2(h, m);
        var b = h.iadd(m);
        return b.cmp(this.m) >= 0 && b.isub(this.m), b;
      }),
      (j.prototype.sub = function (h, m) {
        this._verify2(h, m);
        var b = h.sub(m);
        return b.cmpn(0) < 0 && b.iadd(this.m), b._forceRed(this);
      }),
      (j.prototype.isub = function (h, m) {
        this._verify2(h, m);
        var b = h.isub(m);
        return b.cmpn(0) < 0 && b.iadd(this.m), b;
      }),
      (j.prototype.shl = function (h, m) {
        return this._verify1(h), this.imod(h.ushln(m));
      }),
      (j.prototype.imul = function (h, m) {
        return this._verify2(h, m), this.imod(h.imul(m));
      }),
      (j.prototype.mul = function (h, m) {
        return this._verify2(h, m), this.imod(h.mul(m));
      }),
      (j.prototype.isqr = function (h) {
        return this.imul(h, h.clone());
      }),
      (j.prototype.sqr = function (h) {
        return this.mul(h, h);
      }),
      (j.prototype.sqrt = function (h) {
        if (h.isZero()) return h.clone();
        var m = this.m.andln(3);
        if ((i(m % 2 === 1), m === 3)) {
          var b = this.m.add(new o(1)).iushrn(2);
          return this.pow(h, b);
        }
        for (var x = this.m.subn(1), D = 0; !x.isZero() && x.andln(1) === 0; )
          D++, x.iushrn(1);
        i(!x.isZero());
        var M = new o(1).toRed(this),
          z = M.redNeg(),
          C = this.m.subn(1).iushrn(1),
          p = this.m.bitLength();
        for (p = new o(2 * p * p).toRed(this); this.pow(p, C).cmp(z) !== 0; )
          p.redIAdd(z);
        for (
          var I = this.pow(p, x),
            ue = this.pow(h, x.addn(1).iushrn(1)),
            ne = this.pow(h, x),
            w = D;
          ne.cmp(M) !== 0;

        ) {
          for (var $ = ne, H = 0; $.cmp(M) !== 0; H++) $ = $.redSqr();
          i(H < w);
          var Y = this.pow(I, new o(1).iushln(w - H - 1));
          (ue = ue.redMul(Y)), (I = Y.redSqr()), (ne = ne.redMul(I)), (w = H);
        }
        return ue;
      }),
      (j.prototype.invm = function (h) {
        var m = h._invmp(this.m);
        return m.negative !== 0
          ? ((m.negative = 0), this.imod(m).redNeg())
          : this.imod(m);
      }),
      (j.prototype.pow = function (h, m) {
        if (m.isZero()) return new o(1).toRed(this);
        if (m.cmpn(1) === 0) return h.clone();
        var b = 4,
          x = new Array(1 << b);
        (x[0] = new o(1).toRed(this)), (x[1] = h);
        for (var D = 2; D < x.length; D++) x[D] = this.mul(x[D - 1], h);
        var M = x[0],
          z = 0,
          C = 0,
          p = m.bitLength() % 26;
        for (p === 0 && (p = 26), D = m.length - 1; D >= 0; D--) {
          for (var I = m.words[D], ue = p - 1; ue >= 0; ue--) {
            var ne = (I >> ue) & 1;
            if ((M !== x[0] && (M = this.sqr(M)), ne === 0 && z === 0)) {
              C = 0;
              continue;
            }
            (z <<= 1),
              (z |= ne),
              C++,
              !(C !== b && (D !== 0 || ue !== 0)) &&
                ((M = this.mul(M, x[z])), (C = 0), (z = 0));
          }
          p = 26;
        }
        return M;
      }),
      (j.prototype.convertTo = function (h) {
        var m = h.umod(this.m);
        return m === h ? m.clone() : m;
      }),
      (j.prototype.convertFrom = function (h) {
        var m = h.clone();
        return (m.red = null), m;
      }),
      (o.mont = function (h) {
        return new W(h);
      });
    function W(h) {
      j.call(this, h),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new o(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    n(W, j),
      (W.prototype.convertTo = function (h) {
        return this.imod(h.ushln(this.shift));
      }),
      (W.prototype.convertFrom = function (h) {
        var m = this.imod(h.mul(this.rinv));
        return (m.red = null), m;
      }),
      (W.prototype.imul = function (h, m) {
        if (h.isZero() || m.isZero())
          return (h.words[0] = 0), (h.length = 1), h;
        var b = h.imul(m),
          x = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          D = b.isub(x).iushrn(this.shift),
          M = D;
        return (
          D.cmp(this.m) >= 0
            ? (M = D.isub(this.m))
            : D.cmpn(0) < 0 && (M = D.iadd(this.m)),
          M._forceRed(this)
        );
      }),
      (W.prototype.mul = function (h, m) {
        if (h.isZero() || m.isZero()) return new o(0)._forceRed(this);
        var b = h.mul(m),
          x = b.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          D = b.isub(x).iushrn(this.shift),
          M = D;
        return (
          D.cmp(this.m) >= 0
            ? (M = D.isub(this.m))
            : D.cmpn(0) < 0 && (M = D.iadd(this.m)),
          M._forceRed(this)
        );
      }),
      (W.prototype.invm = function (h) {
        var m = this.imod(h._invmp(this.m).mul(this.r2));
        return m._forceRed(this);
      });
  })(r, cw);
})(fw);
var De = fw.exports,
  dw = "bignumber/5.7.0",
  Qu = De.BN,
  Mn = new Nt(dw),
  vd = {},
  Cv = 9007199254740991;
function RR(r) {
  return (
    r != null &&
    (or.isBigNumber(r) ||
      (typeof r == "number" && r % 1 === 0) ||
      (typeof r == "string" && !!r.match(/^-?[0-9]+$/)) ||
      Gr(r) ||
      typeof r == "bigint" ||
      Bo(r))
  );
}
var Ov = !1,
  or = class r {
    constructor(e, t) {
      e !== vd &&
        Mn.throwError(
          "cannot call constructor directly; use BigNumber.from",
          Nt.errors.UNSUPPORTED_OPERATION,
          { operation: "new (BigNumber)" }
        ),
        (this._hex = t),
        (this._isBigNumber = !0),
        Object.freeze(this);
    }
    fromTwos(e) {
      return Nr(Ue(this).fromTwos(e));
    }
    toTwos(e) {
      return Nr(Ue(this).toTwos(e));
    }
    abs() {
      return this._hex[0] === "-" ? r.from(this._hex.substring(1)) : this;
    }
    add(e) {
      return Nr(Ue(this).add(Ue(e)));
    }
    sub(e) {
      return Nr(Ue(this).sub(Ue(e)));
    }
    div(e) {
      return (
        r.from(e).isZero() && ai("division-by-zero", "div"),
        Nr(Ue(this).div(Ue(e)))
      );
    }
    mul(e) {
      return Nr(Ue(this).mul(Ue(e)));
    }
    mod(e) {
      let t = Ue(e);
      return t.isNeg() && ai("division-by-zero", "mod"), Nr(Ue(this).umod(t));
    }
    pow(e) {
      let t = Ue(e);
      return t.isNeg() && ai("negative-power", "pow"), Nr(Ue(this).pow(t));
    }
    and(e) {
      let t = Ue(e);
      return (
        (this.isNegative() || t.isNeg()) && ai("unbound-bitwise-result", "and"),
        Nr(Ue(this).and(t))
      );
    }
    or(e) {
      let t = Ue(e);
      return (
        (this.isNegative() || t.isNeg()) && ai("unbound-bitwise-result", "or"),
        Nr(Ue(this).or(t))
      );
    }
    xor(e) {
      let t = Ue(e);
      return (
        (this.isNegative() || t.isNeg()) && ai("unbound-bitwise-result", "xor"),
        Nr(Ue(this).xor(t))
      );
    }
    mask(e) {
      return (
        (this.isNegative() || e < 0) && ai("negative-width", "mask"),
        Nr(Ue(this).maskn(e))
      );
    }
    shl(e) {
      return (
        (this.isNegative() || e < 0) && ai("negative-width", "shl"),
        Nr(Ue(this).shln(e))
      );
    }
    shr(e) {
      return (
        (this.isNegative() || e < 0) && ai("negative-width", "shr"),
        Nr(Ue(this).shrn(e))
      );
    }
    eq(e) {
      return Ue(this).eq(Ue(e));
    }
    lt(e) {
      return Ue(this).lt(Ue(e));
    }
    lte(e) {
      return Ue(this).lte(Ue(e));
    }
    gt(e) {
      return Ue(this).gt(Ue(e));
    }
    gte(e) {
      return Ue(this).gte(Ue(e));
    }
    isNegative() {
      return this._hex[0] === "-";
    }
    isZero() {
      return Ue(this).isZero();
    }
    toNumber() {
      try {
        return Ue(this).toNumber();
      } catch {
        ai("overflow", "toNumber", this.toString());
      }
      return null;
    }
    toBigInt() {
      try {
        return BigInt(this.toString());
      } catch {}
      return Mn.throwError(
        "this platform does not support BigInt",
        Nt.errors.UNSUPPORTED_OPERATION,
        { value: this.toString() }
      );
    }
    toString() {
      return (
        arguments.length > 0 &&
          (arguments[0] === 10
            ? Ov ||
              ((Ov = !0),
              Mn.warn(
                "BigNumber.toString does not accept any parameters; base-10 is assumed"
              ))
            : arguments[0] === 16
            ? Mn.throwError(
                "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
                Nt.errors.UNEXPECTED_ARGUMENT,
                {}
              )
            : Mn.throwError(
                "BigNumber.toString does not accept parameters",
                Nt.errors.UNEXPECTED_ARGUMENT,
                {}
              )),
        Ue(this).toString(10)
      );
    }
    toHexString() {
      return this._hex;
    }
    toJSON(e) {
      return { type: "BigNumber", hex: this.toHexString() };
    }
    static from(e) {
      if (e instanceof r) return e;
      if (typeof e == "string")
        return e.match(/^-?0x[0-9a-f]+$/i)
          ? new r(vd, Xa(e))
          : e.match(/^-?[0-9]+$/)
          ? new r(vd, Xa(new Qu(e)))
          : Mn.throwArgumentError("invalid BigNumber string", "value", e);
      if (typeof e == "number")
        return (
          e % 1 && ai("underflow", "BigNumber.from", e),
          (e >= Cv || e <= -Cv) && ai("overflow", "BigNumber.from", e),
          r.from(String(e))
        );
      let t = e;
      if (typeof t == "bigint") return r.from(t.toString());
      if (Bo(t)) return r.from(Er(t));
      if (t)
        if (t.toHexString) {
          let i = t.toHexString();
          if (typeof i == "string") return r.from(i);
        } else {
          let i = t._hex;
          if (
            (i == null && t.type === "BigNumber" && (i = t.hex),
            typeof i == "string" &&
              (Gr(i) || (i[0] === "-" && Gr(i.substring(1)))))
          )
            return r.from(i);
        }
      return Mn.throwArgumentError("invalid BigNumber value", "value", e);
    }
    static isBigNumber(e) {
      return !!(e && e._isBigNumber);
    }
  };
function Xa(r) {
  if (typeof r != "string") return Xa(r.toString(16));
  if (r[0] === "-")
    return (
      (r = r.substring(1)),
      r[0] === "-" && Mn.throwArgumentError("invalid hex", "value", r),
      (r = Xa(r)),
      r === "0x00" ? r : "-" + r
    );
  if ((r.substring(0, 2) !== "0x" && (r = "0x" + r), r === "0x")) return "0x00";
  for (
    r.length % 2 && (r = "0x0" + r.substring(2));
    r.length > 4 && r.substring(0, 4) === "0x00";

  )
    r = "0x" + r.substring(4);
  return r;
}
function Nr(r) {
  return or.from(Xa(r));
}
function Ue(r) {
  let e = or.from(r).toHexString();
  return e[0] === "-"
    ? new Qu("-" + e.substring(3), 16)
    : new Qu(e.substring(2), 16);
}
function ai(r, e, t) {
  let i = { fault: r, operation: e };
  return (
    t != null && (i.value = t), Mn.throwError(r, Nt.errors.NUMERIC_FAULT, i)
  );
}
function CR(r) {
  return new Qu(r, 36).toString(16);
}
var Ar = new Nt(dw),
  Wa = {},
  pw = or.from(0),
  gw = or.from(-1);
function mw(r, e, t, i) {
  let n = { fault: e, operation: t };
  return (
    i !== void 0 && (n.value = i), Ar.throwError(r, Nt.errors.NUMERIC_FAULT, n)
  );
}
var Ya = "0";
for (; Ya.length < 256; ) Ya += Ya;
function Vd(r) {
  if (typeof r != "number")
    try {
      r = or.from(r).toNumber();
    } catch {}
  return typeof r == "number" && r >= 0 && r <= 256 && !(r % 1)
    ? "1" + Ya.substring(0, r)
    : Ar.throwArgumentError("invalid decimal size", "decimals", r);
}
function wd(r, e) {
  e == null && (e = 0);
  let t = Vd(e);
  r = or.from(r);
  let i = r.lt(pw);
  i && (r = r.mul(gw));
  let n = r.mod(t).toString();
  for (; n.length < t.length - 1; ) n = "0" + n;
  n = n.match(/^([0-9]*[1-9]|0)(0*)/)[1];
  let o = r.div(t).toString();
  return t.length === 1 ? (r = o) : (r = o + "." + n), i && (r = "-" + r), r;
}
function Pn(r, e) {
  e == null && (e = 0);
  let t = Vd(e);
  (typeof r != "string" || !r.match(/^-?[0-9.]+$/)) &&
    Ar.throwArgumentError("invalid decimal value", "value", r);
  let i = r.substring(0, 1) === "-";
  i && (r = r.substring(1)),
    r === "." && Ar.throwArgumentError("missing value", "value", r);
  let n = r.split(".");
  n.length > 2 && Ar.throwArgumentError("too many decimal points", "value", r);
  let o = n[0],
    c = n[1];
  for (o || (o = "0"), c || (c = "0"); c[c.length - 1] === "0"; )
    c = c.substring(0, c.length - 1);
  for (
    c.length > t.length - 1 &&
      mw("fractional component exceeds decimals", "underflow", "parseFixed"),
      c === "" && (c = "0");
    c.length < t.length - 1;

  )
    c += "0";
  let l = or.from(o),
    g = or.from(c),
    d = l.mul(t).add(g);
  return i && (d = d.mul(gw)), d;
}
var Qa = class r {
    constructor(e, t, i, n) {
      e !== Wa &&
        Ar.throwError(
          "cannot use FixedFormat constructor; use FixedFormat.from",
          Nt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.signed = t),
        (this.width = i),
        (this.decimals = n),
        (this.name = (t ? "" : "u") + "fixed" + String(i) + "x" + String(n)),
        (this._multiplier = Vd(n)),
        Object.freeze(this);
    }
    static from(e) {
      if (e instanceof r) return e;
      typeof e == "number" && (e = `fixed128x${e}`);
      let t = !0,
        i = 128,
        n = 18;
      if (typeof e == "string") {
        if (e !== "fixed")
          if (e === "ufixed") t = !1;
          else {
            let o = e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
            o || Ar.throwArgumentError("invalid fixed format", "format", e),
              (t = o[1] !== "u"),
              (i = parseInt(o[2])),
              (n = parseInt(o[3]));
          }
      } else if (e) {
        let o = (c, l, g) =>
          e[c] == null
            ? g
            : (typeof e[c] !== l &&
                Ar.throwArgumentError(
                  "invalid fixed format (" + c + " not " + l + ")",
                  "format." + c,
                  e[c]
                ),
              e[c]);
        (t = o("signed", "boolean", t)),
          (i = o("width", "number", i)),
          (n = o("decimals", "number", n));
      }
      return (
        i % 8 &&
          Ar.throwArgumentError(
            "invalid fixed format width (not byte aligned)",
            "format.width",
            i
          ),
        n > 80 &&
          Ar.throwArgumentError(
            "invalid fixed format (decimals too large)",
            "format.decimals",
            n
          ),
        new r(Wa, t, i, n)
      );
    }
  },
  Xu = class r {
    constructor(e, t, i, n) {
      e !== Wa &&
        Ar.throwError(
          "cannot use FixedNumber constructor; use FixedNumber.from",
          Nt.errors.UNSUPPORTED_OPERATION,
          { operation: "new FixedFormat" }
        ),
        (this.format = n),
        (this._hex = t),
        (this._value = i),
        (this._isFixedNumber = !0),
        Object.freeze(this);
    }
    _checkFormat(e) {
      this.format.name !== e.format.name &&
        Ar.throwArgumentError(
          "incompatible format; use fixedNumber.toFormat",
          "other",
          e
        );
    }
    addUnsafe(e) {
      this._checkFormat(e);
      let t = Pn(this._value, this.format.decimals),
        i = Pn(e._value, e.format.decimals);
      return r.fromValue(t.add(i), this.format.decimals, this.format);
    }
    subUnsafe(e) {
      this._checkFormat(e);
      let t = Pn(this._value, this.format.decimals),
        i = Pn(e._value, e.format.decimals);
      return r.fromValue(t.sub(i), this.format.decimals, this.format);
    }
    mulUnsafe(e) {
      this._checkFormat(e);
      let t = Pn(this._value, this.format.decimals),
        i = Pn(e._value, e.format.decimals);
      return r.fromValue(
        t.mul(i).div(this.format._multiplier),
        this.format.decimals,
        this.format
      );
    }
    divUnsafe(e) {
      this._checkFormat(e);
      let t = Pn(this._value, this.format.decimals),
        i = Pn(e._value, e.format.decimals);
      return r.fromValue(
        t.mul(this.format._multiplier).div(i),
        this.format.decimals,
        this.format
      );
    }
    floor() {
      let e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = r.from(e[0], this.format),
        i = !e[1].match(/^(0*)$/);
      return (
        this.isNegative() && i && (t = t.subUnsafe(Pv.toFormat(t.format))), t
      );
    }
    ceiling() {
      let e = this.toString().split(".");
      e.length === 1 && e.push("0");
      let t = r.from(e[0], this.format),
        i = !e[1].match(/^(0*)$/);
      return (
        !this.isNegative() && i && (t = t.addUnsafe(Pv.toFormat(t.format))), t
      );
    }
    round(e) {
      e == null && (e = 0);
      let t = this.toString().split(".");
      if (
        (t.length === 1 && t.push("0"),
        (e < 0 || e > 80 || e % 1) &&
          Ar.throwArgumentError("invalid decimal count", "decimals", e),
        t[1].length <= e)
      )
        return this;
      let i = r.from("1" + Ya.substring(0, e), this.format),
        n = OR.toFormat(this.format);
      return this.mulUnsafe(i).addUnsafe(n).floor().divUnsafe(i);
    }
    isZero() {
      return this._value === "0.0" || this._value === "0";
    }
    isNegative() {
      return this._value[0] === "-";
    }
    toString() {
      return this._value;
    }
    toHexString(e) {
      if (e == null) return this._hex;
      e % 8 && Ar.throwArgumentError("invalid byte width", "width", e);
      let t = or
        .from(this._hex)
        .fromTwos(this.format.width)
        .toTwos(e)
        .toHexString();
      return $i(t, e / 8);
    }
    toUnsafeFloat() {
      return parseFloat(this.toString());
    }
    toFormat(e) {
      return r.fromString(this._value, e);
    }
    static fromValue(e, t, i) {
      return (
        i == null && t != null && !RR(t) && ((i = t), (t = null)),
        t == null && (t = 0),
        i == null && (i = "fixed"),
        r.fromString(wd(e, t), Qa.from(i))
      );
    }
    static fromString(e, t) {
      t == null && (t = "fixed");
      let i = Qa.from(t),
        n = Pn(e, i.decimals);
      !i.signed &&
        n.lt(pw) &&
        mw("unsigned value cannot be negative", "overflow", "value", e);
      let o = null;
      i.signed
        ? (o = n.toTwos(i.width).toHexString())
        : ((o = n.toHexString()), (o = $i(o, i.width / 8)));
      let c = wd(n, i.decimals);
      return new r(Wa, o, c, i);
    }
    static fromBytes(e, t) {
      t == null && (t = "fixed");
      let i = Qa.from(t);
      if (qt(e).length > i.width / 8) throw new Error("overflow");
      let n = or.from(e);
      i.signed && (n = n.fromTwos(i.width));
      let o = n.toTwos((i.signed ? 0 : 1) + i.width).toHexString(),
        c = wd(n, i.decimals);
      return new r(Wa, o, c, i);
    }
    static from(e, t) {
      if (typeof e == "string") return r.fromString(e, t);
      if (Bo(e)) return r.fromBytes(e, t);
      try {
        return r.fromValue(e, 0, t);
      } catch (i) {
        if (i.code !== Nt.errors.INVALID_ARGUMENT) throw i;
      }
      return Ar.throwArgumentError("invalid FixedNumber value", "value", e);
    }
    static isFixedNumber(e) {
      return !!(e && e._isFixedNumber);
    }
  },
  Pv = Xu.from(1),
  OR = Xu.from("0.5"),
  PR = "strings/5.7.0",
  yw = new Nt(PR),
  Zu;
(function (r) {
  (r.current = ""),
    (r.NFC = "NFC"),
    (r.NFD = "NFD"),
    (r.NFKC = "NFKC"),
    (r.NFKD = "NFKD");
})(Zu || (Zu = {}));
var Mo;
(function (r) {
  (r.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
    (r.BAD_PREFIX = "bad codepoint prefix"),
    (r.OVERRUN = "string overrun"),
    (r.MISSING_CONTINUE = "missing continuation byte"),
    (r.OUT_OF_RANGE = "out of UTF-8 range"),
    (r.UTF16_SURROGATE = "UTF-16 surrogate"),
    (r.OVERLONG = "overlong representation");
})(Mo || (Mo = {}));
function MR(r, e, t, i, n) {
  return yw.throwArgumentError(
    `invalid codepoint at offset ${e}; ${r}`,
    "bytes",
    t
  );
}
function vw(r, e, t, i, n) {
  if (r === Mo.BAD_PREFIX || r === Mo.UNEXPECTED_CONTINUE) {
    let o = 0;
    for (let c = e + 1; c < t.length && t[c] >> 6 === 2; c++) o++;
    return o;
  }
  return r === Mo.OVERRUN ? t.length - e - 1 : 0;
}
function NR(r, e, t, i, n) {
  return r === Mo.OVERLONG ? (i.push(n), 0) : (i.push(65533), vw(r, e, t));
}
Object.freeze({ error: MR, ignore: vw, replace: NR });
function bd(r, e = Zu.current) {
  e != Zu.current && (yw.checkNormalize(), (r = r.normalize(e)));
  let t = [];
  for (let i = 0; i < r.length; i++) {
    let n = r.charCodeAt(i);
    if (n < 128) t.push(n);
    else if (n < 2048) t.push((n >> 6) | 192), t.push((n & 63) | 128);
    else if ((n & 64512) == 55296) {
      i++;
      let o = r.charCodeAt(i);
      if (i >= r.length || (o & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      let c = 65536 + ((n & 1023) << 10) + (o & 1023);
      t.push((c >> 18) | 240),
        t.push(((c >> 12) & 63) | 128),
        t.push(((c >> 6) & 63) | 128),
        t.push((c & 63) | 128);
    } else
      t.push((n >> 12) | 224),
        t.push(((n >> 6) & 63) | 128),
        t.push((n & 63) | 128);
  }
  return qt(t);
}
function TR(r) {
  if (r.length % 4 !== 0) throw new Error("bad data");
  let e = [];
  for (let t = 0; t < r.length; t += 4)
    e.push(parseInt(r.substring(t, t + 4), 16));
  return e;
}
function _d(r, e) {
  e ||
    (e = function (n) {
      return [parseInt(n, 16)];
    });
  let t = 0,
    i = {};
  return (
    r.split(",").forEach((n) => {
      let o = n.split(":");
      (t += parseInt(o[0], 16)), (i[t] = e(o[1]));
    }),
    i
  );
}
function Mv(r) {
  let e = 0;
  return r.split(",").map((t) => {
    let i = t.split("-");
    i.length === 1 ? (i[1] = "0") : i[1] === "" && (i[1] = "1");
    let n = e + parseInt(i[0], 16);
    return (e = parseInt(i[1], 16)), { l: n, h: e };
  });
}
Mv(
  "221,13-1b,5f-,40-10,51-f,11-3,3-3,2-2,2-4,8,2,15,2d,28-8,88,48,27-,3-5,11-20,27-,8,28,3-5,12,18,b-a,1c-4,6-16,2-d,2-2,2,1b-4,17-9,8f-,10,f,1f-2,1c-34,33-14e,4,36-,13-,6-2,1a-f,4,9-,3-,17,8,2-2,5-,2,8-,3-,4-8,2-3,3,6-,16-6,2-,7-3,3-,17,8,3,3,3-,2,6-3,3-,4-a,5,2-6,10-b,4,8,2,4,17,8,3,6-,b,4,4-,2-e,2-4,b-10,4,9-,3-,17,8,3-,5-,9-2,3-,4-7,3-3,3,4-3,c-10,3,7-2,4,5-2,3,2,3-2,3-2,4-2,9,4-3,6-2,4,5-8,2-e,d-d,4,9,4,18,b,6-3,8,4,5-6,3-8,3-3,b-11,3,9,4,18,b,6-3,8,4,5-6,3-6,2,3-3,b-11,3,9,4,18,11-3,7-,4,5-8,2-7,3-3,b-11,3,13-2,19,a,2-,8-2,2-3,7,2,9-11,4-b,3b-3,1e-24,3,2-,3,2-,2-5,5,8,4,2,2-,3,e,4-,6,2,7-,b-,3-21,49,23-5,1c-3,9,25,10-,2-2f,23,6,3,8-2,5-5,1b-45,27-9,2a-,2-3,5b-4,45-4,53-5,8,40,2,5-,8,2,5-,28,2,5-,20,2,5-,8,2,5-,8,8,18,20,2,5-,8,28,14-5,1d-22,56-b,277-8,1e-2,52-e,e,8-a,18-8,15-b,e,4,3-b,5e-2,b-15,10,b-5,59-7,2b-555,9d-3,5b-5,17-,7-,27-,7-,9,2,2,2,20-,36,10,f-,7,14-,4,a,54-3,2-6,6-5,9-,1c-10,13-1d,1c-14,3c-,10-6,32-b,240-30,28-18,c-14,a0,115-,3,66-,b-76,5,5-,1d,24,2,5-2,2,8-,35-2,19,f-10,1d-3,311-37f,1b,5a-b,d7-19,d-3,41,57-,68-4,29-3,5f,29-37,2e-2,25-c,2c-2,4e-3,30,78-3,64-,20,19b7-49,51a7-59,48e-2,38-738,2ba5-5b,222f-,3c-94,8-b,6-4,1b,6,2,3,3,6d-20,16e-f,41-,37-7,2e-2,11-f,5-b,18-,b,14,5-3,6,88-,2,bf-2,7-,7-,7-,4-2,8,8-9,8-2ff,20,5-b,1c-b4,27-,27-cbb1,f7-9,28-2,b5-221,56,48,3-,2-,3-,5,d,2,5,3,42,5-,9,8,1d,5,6,2-2,8,153-3,123-3,33-27fd,a6da-5128,21f-5df,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3-fffd,3,2-1d,61-ff7d"
),
  "ad,34f,1806,180b,180c,180d,200b,200c,200d,2060,feff"
    .split(",")
    .map((r) => parseInt(r, 16)),
  _d(
    "b5:3bc,c3:ff,7:73,2:253,5:254,3:256,1:257,5:259,1:25b,3:260,1:263,2:269,1:268,5:26f,1:272,2:275,7:280,3:283,5:288,3:28a,1:28b,5:292,3f:195,1:1bf,29:19e,125:3b9,8b:3b2,1:3b8,1:3c5,3:3c6,1:3c0,1a:3ba,1:3c1,1:3c3,2:3b8,1:3b5,1bc9:3b9,1c:1f76,1:1f77,f:1f7a,1:1f7b,d:1f78,1:1f79,1:1f7c,1:1f7d,107:63,5:25b,4:68,1:68,1:68,3:69,1:69,1:6c,3:6e,4:70,1:71,1:72,1:72,1:72,7:7a,2:3c9,2:7a,2:6b,1:e5,1:62,1:63,3:65,1:66,2:6d,b:3b3,1:3c0,6:64,1b574:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3,20:3b8,1a:3c3"
  ),
  _d(
    "179:1,2:1,2:1,5:1,2:1,a:4f,a:1,8:1,2:1,2:1,3:1,5:1,3:1,4:1,2:1,3:1,4:1,8:2,1:1,2:2,1:1,2:2,27:2,195:26,2:25,1:25,1:25,2:40,2:3f,1:3f,33:1,11:-6,1:-9,1ac7:-3a,6d:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,b:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,c:-8,2:-8,2:-8,2:-8,9:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,1:-8,49:-8,1:-8,1:-4a,1:-4a,d:-56,1:-56,1:-56,1:-56,d:-8,1:-8,f:-8,1:-8,3:-7"
  ),
  _d(
    "df:00730073,51:00690307,19:02BC006E,a7:006A030C,18a:002003B9,16:03B903080301,20:03C503080301,1d7:05650582,190f:00680331,1:00740308,1:0077030A,1:0079030A,1:006102BE,b6:03C50313,2:03C503130300,2:03C503130301,2:03C503130342,2a:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F0003B9,1:1F0103B9,1:1F0203B9,1:1F0303B9,1:1F0403B9,1:1F0503B9,1:1F0603B9,1:1F0703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F2003B9,1:1F2103B9,1:1F2203B9,1:1F2303B9,1:1F2403B9,1:1F2503B9,1:1F2603B9,1:1F2703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,1:1F6003B9,1:1F6103B9,1:1F6203B9,1:1F6303B9,1:1F6403B9,1:1F6503B9,1:1F6603B9,1:1F6703B9,3:1F7003B9,1:03B103B9,1:03AC03B9,2:03B10342,1:03B1034203B9,5:03B103B9,6:1F7403B9,1:03B703B9,1:03AE03B9,2:03B70342,1:03B7034203B9,5:03B703B9,6:03B903080300,1:03B903080301,3:03B90342,1:03B903080342,b:03C503080300,1:03C503080301,1:03C10313,2:03C50342,1:03C503080342,b:1F7C03B9,1:03C903B9,1:03CE03B9,2:03C90342,1:03C9034203B9,5:03C903B9,ac:00720073,5b:00B00063,6:00B00066,d:006E006F,a:0073006D,1:00740065006C,1:0074006D,124f:006800700061,2:00610075,2:006F0076,b:00700061,1:006E0061,1:03BC0061,1:006D0061,1:006B0061,1:006B0062,1:006D0062,1:00670062,3:00700066,1:006E0066,1:03BC0066,4:0068007A,1:006B0068007A,1:006D0068007A,1:00670068007A,1:00740068007A,15:00700061,1:006B00700061,1:006D00700061,1:006700700061,8:00700076,1:006E0076,1:03BC0076,1:006D0076,1:006B0076,1:006D0076,1:00700077,1:006E0077,1:03BC0077,1:006D0077,1:006B0077,1:006D0077,1:006B03C9,1:006D03C9,2:00620071,3:00632215006B0067,1:0063006F002E,1:00640062,1:00670079,2:00680070,2:006B006B,1:006B006D,9:00700068,2:00700070006D,1:00700072,2:00730076,1:00770062,c723:00660066,1:00660069,1:0066006C,1:006600660069,1:00660066006C,1:00730074,1:00730074,d:05740576,1:05740565,1:0574056B,1:057E0576,1:0574056D",
    TR
  ),
  Mv(
    "80-20,2a0-,39c,32,f71,18e,7f2-f,19-7,30-4,7-5,f81-b,5,a800-20ff,4d1-1f,110,fa-6,d174-7,2e84-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,ffff-,2,1f-5f,ff7f-20001"
  );
var ww = "hash/5.7.0";
function FR(r) {
  r = atob(r);
  let e = [];
  for (let t = 0; t < r.length; t++) e.push(r.charCodeAt(t));
  return qt(e);
}
function bw(r, e) {
  e == null && (e = 1);
  let t = [],
    i = t.forEach,
    n = function (o, c) {
      i.call(o, function (l) {
        c > 0 && Array.isArray(l) ? n(l, c - 1) : t.push(l);
      });
    };
  return n(r, e), t;
}
function LR(r) {
  let e = {};
  for (let t = 0; t < r.length; t++) {
    let i = r[t];
    e[i[0]] = i[1];
  }
  return e;
}
function UR(r) {
  let e = 0;
  function t() {
    return (r[e++] << 8) | r[e++];
  }
  let i = t(),
    n = 1,
    o = [0, 1];
  for (let Q = 1; Q < i; Q++) o.push((n += t()));
  let c = t(),
    l = e;
  e += c;
  let g = 0,
    d = 0;
  function y() {
    return g == 0 && ((d = (d << 8) | r[e++]), (g = 8)), (d >> --g) & 1;
  }
  let v = 31,
    A = Math.pow(2, v),
    E = A >>> 1,
    P = E >> 1,
    N = A - 1,
    T = 0;
  for (let Q = 0; Q < v; Q++) T = (T << 1) | y();
  let K = [],
    Z = 0,
    J = A;
  for (;;) {
    let Q = Math.floor(((T - Z + 1) * n - 1) / J),
      ee = 0,
      L = i;
    for (; L - ee > 1; ) {
      let U = (ee + L) >>> 1;
      Q < o[U] ? (L = U) : (ee = U);
    }
    if (ee == 0) break;
    K.push(ee);
    let B = Z + Math.floor((J * o[ee]) / n),
      ae = Z + Math.floor((J * o[ee + 1]) / n) - 1;
    for (; !((B ^ ae) & E); )
      (T = ((T << 1) & N) | y()),
        (B = (B << 1) & N),
        (ae = ((ae << 1) & N) | 1);
    for (; B & ~ae & P; )
      (T = (T & E) | ((T << 1) & (N >>> 1)) | y()),
        (B = (B << 1) ^ E),
        (ae = ((ae ^ E) << 1) | E | 1);
    (Z = B), (J = 1 + ae - B);
  }
  let G = i - 4;
  return K.map((Q) => {
    switch (Q - G) {
      case 3:
        return G + 65792 + ((r[l++] << 16) | (r[l++] << 8) | r[l++]);
      case 2:
        return G + 256 + ((r[l++] << 8) | r[l++]);
      case 1:
        return G + r[l++];
      default:
        return Q - 1;
    }
  });
}
function BR(r) {
  let e = 0;
  return () => r[e++];
}
function qR(r) {
  return BR(UR(r));
}
function jR(r) {
  return r & 1 ? ~r >> 1 : r >> 1;
}
function zR(r, e) {
  let t = Array(r);
  for (let i = 0; i < r; i++) t[i] = 1 + e();
  return t;
}
function Nv(r, e) {
  let t = Array(r);
  for (let i = 0, n = -1; i < r; i++) t[i] = n += 1 + e();
  return t;
}
function kR(r, e) {
  let t = Array(r);
  for (let i = 0, n = 0; i < r; i++) t[i] = n += jR(e());
  return t;
}
function eh(r, e) {
  let t = Nv(r(), r),
    i = r(),
    n = Nv(i, r),
    o = zR(i, r);
  for (let c = 0; c < i; c++) for (let l = 0; l < o[c]; l++) t.push(n[c] + l);
  return e ? t.map((c) => e[c]) : t;
}
function HR(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(VR(t, r));
  }
  for (;;) {
    let t = r() - 1;
    if (t < 0) break;
    e.push(GR(t, r));
  }
  return LR(bw(e));
}
function KR(r) {
  let e = [];
  for (;;) {
    let t = r();
    if (t == 0) break;
    e.push(t);
  }
  return e;
}
function _w(r, e, t) {
  let i = Array(r)
    .fill(void 0)
    .map(() => []);
  for (let n = 0; n < e; n++) kR(r, t).forEach((o, c) => i[c].push(o));
  return i;
}
function VR(r, e) {
  let t = 1 + e(),
    i = e(),
    n = KR(e),
    o = _w(n.length, 1 + r, e);
  return bw(
    o.map((c, l) => {
      let g = c[0],
        d = c.slice(1);
      return Array(n[l])
        .fill(void 0)
        .map((y, v) => {
          let A = v * i;
          return [g + v * t, d.map((E) => E + A)];
        });
    })
  );
}
function GR(r, e) {
  let t = 1 + e();
  return _w(t, 1 + r, e).map((i) => [i[0], i.slice(1)]);
}
function $R(r) {
  let e = eh(r).sort((i, n) => i - n);
  return t();
  function t() {
    let i = [];
    for (;;) {
      let d = eh(r, e);
      if (d.length == 0) break;
      i.push({ set: new Set(d), node: t() });
    }
    i.sort((d, y) => y.set.size - d.set.size);
    let n = r(),
      o = n % 3;
    n = (n / 3) | 0;
    let c = !!(n & 1);
    n >>= 1;
    let l = n == 1,
      g = n == 2;
    return { branches: i, valid: o, fe0f: c, save: l, check: g };
  }
}
function JR() {
  return qR(
    FR(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
var Hu = JR();
new Set(eh(Hu)), new Set(eh(Hu)), HR(Hu), $R(Hu), new Nt(ww);
var WR = new Uint8Array(32);
WR.fill(0);
var YR = `SOL Signed Message:
`;
function Ew(r) {
  return (
    typeof r == "string" && (r = bd(r)),
    Kd(ER([bd(YR), bd(String(r.length)), r]))
  );
}
var QR = "rlp/5.7.0";
new Nt(QR);
var XR = "address/5.7.0",
  Ja = new Nt(XR);
function Tv(r) {
  Gr(r, 20) || Ja.throwArgumentError("invalid address", "address", r),
    (r = r.toLowerCase());
  let e = r.substring(2).split(""),
    t = new Uint8Array(40);
  for (let n = 0; n < 40; n++) t[n] = e[n].charCodeAt(0);
  let i = qt(Kd(t));
  for (let n = 0; n < 40; n += 2)
    i[n >> 1] >> 4 >= 8 && (e[n] = e[n].toUpperCase()),
      (i[n >> 1] & 15) >= 8 && (e[n + 1] = e[n + 1].toUpperCase());
  return "0x" + e.join("");
}
var ZR = 9007199254740991;
function eC(r) {
  return Math.log10 ? Math.log10(r) : Math.log(r) / Math.LN10;
}
var Gd = {};
for (let r = 0; r < 10; r++) Gd[String(r)] = String(r);
for (let r = 0; r < 26; r++) Gd[String.fromCharCode(65 + r)] = String(10 + r);
var Fv = Math.floor(eC(ZR));
function tC(r) {
  (r = r.toUpperCase()), (r = r.substring(4) + r.substring(0, 2) + "00");
  let e = r
    .split("")
    .map((i) => Gd[i])
    .join("");
  for (; e.length >= Fv; ) {
    let i = e.substring(0, Fv);
    e = (parseInt(i, 10) % 97) + e.substring(i.length);
  }
  let t = String(98 - (parseInt(e, 10) % 97));
  for (; t.length < 2; ) t = "0" + t;
  return t;
}
function rC(r) {
  let e = null;
  if (
    (typeof r != "string" &&
      Ja.throwArgumentError("invalid address", "address", r),
    r.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    r.substring(0, 2) !== "0x" && (r = "0x" + r),
      (e = Tv(r)),
      r.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        e !== r &&
        Ja.throwArgumentError("bad address checksum", "address", r);
  else if (r.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      r.substring(2, 4) !== tC(r) &&
        Ja.throwArgumentError("bad icap checksum", "address", r),
        e = CR(r.substring(4));
      e.length < 40;

    )
      e = "0" + e;
    e = Tv("0x" + e);
  } else Ja.throwArgumentError("invalid address", "address", r);
  return e;
}
var iC = "properties/5.7.0";
new Nt(iC);
function Va(r, e, t) {
  Object.defineProperty(r, e, { enumerable: !0, value: t, writable: !1 });
}
new Nt(ww);
var nC = new Uint8Array(32);
nC.fill(0), or.from(-1);
var sC = or.from(0),
  oC = or.from(1);
or.from("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"),
  $i(oC.toHexString(), 32),
  $i(sC.toHexString(), 32);
var ki = {},
  Be = {},
  ic = Aw;
function Aw(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
Aw.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Md = { exports: {} };
typeof Object.create == "function"
  ? (Md.exports = function (r, e) {
      e &&
        ((r.super_ = e),
        (r.prototype = Object.create(e.prototype, {
          constructor: {
            value: r,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (Md.exports = function (r, e) {
      if (e) {
        r.super_ = e;
        var t = function () {};
        (t.prototype = e.prototype),
          (r.prototype = new t()),
          (r.prototype.constructor = r);
      }
    });
var aC = ic,
  cC = Md.exports;
Be.inherits = cC;
function uC(r, e) {
  return (r.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= r.length
    ? !1
    : (r.charCodeAt(e + 1) & 64512) === 56320;
}
function hC(r, e) {
  if (Array.isArray(r)) return r.slice();
  if (!r) return [];
  var t = [];
  if (typeof r == "string")
    if (e) {
      if (e === "hex")
        for (
          r = r.replace(/[^a-z0-9]+/gi, ""),
            r.length % 2 !== 0 && (r = "0" + r),
            n = 0;
          n < r.length;
          n += 2
        )
          t.push(parseInt(r[n] + r[n + 1], 16));
    } else
      for (var i = 0, n = 0; n < r.length; n++) {
        var o = r.charCodeAt(n);
        o < 128
          ? (t[i++] = o)
          : o < 2048
          ? ((t[i++] = (o >> 6) | 192), (t[i++] = (o & 63) | 128))
          : uC(r, n)
          ? ((o = 65536 + ((o & 1023) << 10) + (r.charCodeAt(++n) & 1023)),
            (t[i++] = (o >> 18) | 240),
            (t[i++] = ((o >> 12) & 63) | 128),
            (t[i++] = ((o >> 6) & 63) | 128),
            (t[i++] = (o & 63) | 128))
          : ((t[i++] = (o >> 12) | 224),
            (t[i++] = ((o >> 6) & 63) | 128),
            (t[i++] = (o & 63) | 128));
      }
  else for (n = 0; n < r.length; n++) t[n] = r[n] | 0;
  return t;
}
Be.toArray = hC;
function lC(r) {
  for (var e = "", t = 0; t < r.length; t++) e += xw(r[t].toString(16));
  return e;
}
Be.toHex = lC;
function Sw(r) {
  var e =
    (r >>> 24) |
    ((r >>> 8) & 65280) |
    ((r << 8) & 16711680) |
    ((r & 255) << 24);
  return e >>> 0;
}
Be.htonl = Sw;
function fC(r, e) {
  for (var t = "", i = 0; i < r.length; i++) {
    var n = r[i];
    e === "little" && (n = Sw(n)), (t += Iw(n.toString(16)));
  }
  return t;
}
Be.toHex32 = fC;
function xw(r) {
  return r.length === 1 ? "0" + r : r;
}
Be.zero2 = xw;
function Iw(r) {
  return r.length === 7
    ? "0" + r
    : r.length === 6
    ? "00" + r
    : r.length === 5
    ? "000" + r
    : r.length === 4
    ? "0000" + r
    : r.length === 3
    ? "00000" + r
    : r.length === 2
    ? "000000" + r
    : r.length === 1
    ? "0000000" + r
    : r;
}
Be.zero8 = Iw;
function dC(r, e, t, i) {
  var n = t - e;
  aC(n % 4 === 0);
  for (var o = new Array(n / 4), c = 0, l = e; c < o.length; c++, l += 4) {
    var g;
    i === "big"
      ? (g = (r[l] << 24) | (r[l + 1] << 16) | (r[l + 2] << 8) | r[l + 3])
      : (g = (r[l + 3] << 24) | (r[l + 2] << 16) | (r[l + 1] << 8) | r[l]),
      (o[c] = g >>> 0);
  }
  return o;
}
Be.join32 = dC;
function pC(r, e) {
  for (
    var t = new Array(r.length * 4), i = 0, n = 0;
    i < r.length;
    i++, n += 4
  ) {
    var o = r[i];
    e === "big"
      ? ((t[n] = o >>> 24),
        (t[n + 1] = (o >>> 16) & 255),
        (t[n + 2] = (o >>> 8) & 255),
        (t[n + 3] = o & 255))
      : ((t[n + 3] = o >>> 24),
        (t[n + 2] = (o >>> 16) & 255),
        (t[n + 1] = (o >>> 8) & 255),
        (t[n] = o & 255));
  }
  return t;
}
Be.split32 = pC;
function gC(r, e) {
  return (r >>> e) | (r << (32 - e));
}
Be.rotr32 = gC;
function mC(r, e) {
  return (r << e) | (r >>> (32 - e));
}
Be.rotl32 = mC;
function yC(r, e) {
  return (r + e) >>> 0;
}
Be.sum32 = yC;
function vC(r, e, t) {
  return (r + e + t) >>> 0;
}
Be.sum32_3 = vC;
function wC(r, e, t, i) {
  return (r + e + t + i) >>> 0;
}
Be.sum32_4 = wC;
function bC(r, e, t, i, n) {
  return (r + e + t + i + n) >>> 0;
}
Be.sum32_5 = bC;
function _C(r, e, t, i) {
  var n = r[e],
    o = r[e + 1],
    c = (i + o) >>> 0,
    l = (c < i ? 1 : 0) + t + n;
  (r[e] = l >>> 0), (r[e + 1] = c);
}
Be.sum64 = _C;
function EC(r, e, t, i) {
  var n = (e + i) >>> 0,
    o = (n < e ? 1 : 0) + r + t;
  return o >>> 0;
}
Be.sum64_hi = EC;
function AC(r, e, t, i) {
  var n = e + i;
  return n >>> 0;
}
Be.sum64_lo = AC;
function SC(r, e, t, i, n, o, c, l) {
  var g = 0,
    d = e;
  (d = (d + i) >>> 0),
    (g += d < e ? 1 : 0),
    (d = (d + o) >>> 0),
    (g += d < o ? 1 : 0),
    (d = (d + l) >>> 0),
    (g += d < l ? 1 : 0);
  var y = r + t + n + c + g;
  return y >>> 0;
}
Be.sum64_4_hi = SC;
function xC(r, e, t, i, n, o, c, l) {
  var g = e + i + o + l;
  return g >>> 0;
}
Be.sum64_4_lo = xC;
function IC(r, e, t, i, n, o, c, l, g, d) {
  var y = 0,
    v = e;
  (v = (v + i) >>> 0),
    (y += v < e ? 1 : 0),
    (v = (v + o) >>> 0),
    (y += v < o ? 1 : 0),
    (v = (v + l) >>> 0),
    (y += v < l ? 1 : 0),
    (v = (v + d) >>> 0),
    (y += v < d ? 1 : 0);
  var A = r + t + n + c + g + y;
  return A >>> 0;
}
Be.sum64_5_hi = IC;
function DC(r, e, t, i, n, o, c, l, g, d) {
  var y = e + i + o + l + d;
  return y >>> 0;
}
Be.sum64_5_lo = DC;
function RC(r, e, t) {
  var i = (e << (32 - t)) | (r >>> t);
  return i >>> 0;
}
Be.rotr64_hi = RC;
function CC(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
Be.rotr64_lo = CC;
function OC(r, e, t) {
  return r >>> t;
}
Be.shr64_hi = OC;
function PC(r, e, t) {
  var i = (r << (32 - t)) | (e >>> t);
  return i >>> 0;
}
Be.shr64_lo = PC;
var qo = {},
  Lv = Be,
  MC = ic;
function Ku() {
  (this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = "big"),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32);
}
(qo.BlockHash = Ku),
  (Ku.prototype.update = function (r, e) {
    if (
      ((r = Lv.toArray(r, e)),
      this.pending
        ? (this.pending = this.pending.concat(r))
        : (this.pending = r),
      (this.pendingTotal += r.length),
      this.pending.length >= this._delta8)
    ) {
      r = this.pending;
      var t = r.length % this._delta8;
      (this.pending = r.slice(r.length - t, r.length)),
        this.pending.length === 0 && (this.pending = null),
        (r = Lv.join32(r, 0, r.length - t, this.endian));
      for (var i = 0; i < r.length; i += this._delta32)
        this._update(r, i, i + this._delta32);
    }
    return this;
  }),
  (Ku.prototype.digest = function (r) {
    return this.update(this._pad()), MC(this.pending === null), this._digest(r);
  }),
  (Ku.prototype._pad = function () {
    var r = this.pendingTotal,
      e = this._delta8,
      t = e - ((r + this.padLength) % e),
      i = new Array(t + this.padLength);
    i[0] = 128;
    for (var n = 1; n < t; n++) i[n] = 0;
    if (((r <<= 3), this.endian === "big")) {
      for (var o = 8; o < this.padLength; o++) i[n++] = 0;
      (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = 0),
        (i[n++] = (r >>> 24) & 255),
        (i[n++] = (r >>> 16) & 255),
        (i[n++] = (r >>> 8) & 255),
        (i[n++] = r & 255);
    } else
      for (
        i[n++] = r & 255,
          i[n++] = (r >>> 8) & 255,
          i[n++] = (r >>> 16) & 255,
          i[n++] = (r >>> 24) & 255,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          i[n++] = 0,
          o = 8;
        o < this.padLength;
        o++
      )
        i[n++] = 0;
    return i;
  });
var Oo = {},
  Xi = {},
  NC = Be,
  Ji = NC.rotr32;
function TC(r, e, t, i) {
  if (r === 0) return Dw(e, t, i);
  if (r === 1 || r === 3) return Cw(e, t, i);
  if (r === 2) return Rw(e, t, i);
}
Xi.ft_1 = TC;
function Dw(r, e, t) {
  return (r & e) ^ (~r & t);
}
Xi.ch32 = Dw;
function Rw(r, e, t) {
  return (r & e) ^ (r & t) ^ (e & t);
}
Xi.maj32 = Rw;
function Cw(r, e, t) {
  return r ^ e ^ t;
}
Xi.p32 = Cw;
function FC(r) {
  return Ji(r, 2) ^ Ji(r, 13) ^ Ji(r, 22);
}
Xi.s0_256 = FC;
function LC(r) {
  return Ji(r, 6) ^ Ji(r, 11) ^ Ji(r, 25);
}
Xi.s1_256 = LC;
function UC(r) {
  return Ji(r, 7) ^ Ji(r, 18) ^ (r >>> 3);
}
Xi.g0_256 = UC;
function BC(r) {
  return Ji(r, 17) ^ Ji(r, 19) ^ (r >>> 10);
}
Xi.g1_256 = BC;
var To = Be,
  qC = qo,
  jC = Xi,
  Ed = To.rotl32,
  Ga = To.sum32,
  zC = To.sum32_5,
  kC = jC.ft_1,
  Ow = qC.BlockHash,
  HC = [1518500249, 1859775393, 2400959708, 3395469782];
function Ki() {
  if (!(this instanceof Ki)) return new Ki();
  Ow.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.W = new Array(80));
}
To.inherits(Ki, Ow);
var KC = Ki;
(Ki.blockSize = 512),
  (Ki.outSize = 160),
  (Ki.hmacStrength = 80),
  (Ki.padLength = 64),
  (Ki.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = Ed(t[i - 3] ^ t[i - 8] ^ t[i - 14] ^ t[i - 16], 1);
    var n = this.h[0],
      o = this.h[1],
      c = this.h[2],
      l = this.h[3],
      g = this.h[4];
    for (i = 0; i < t.length; i++) {
      var d = ~~(i / 20),
        y = zC(Ed(n, 5), kC(d, o, c, l), g, t[i], HC[d]);
      (g = l), (l = c), (c = Ed(o, 30)), (o = n), (n = y);
    }
    (this.h[0] = Ga(this.h[0], n)),
      (this.h[1] = Ga(this.h[1], o)),
      (this.h[2] = Ga(this.h[2], c)),
      (this.h[3] = Ga(this.h[3], l)),
      (this.h[4] = Ga(this.h[4], g));
  }),
  (Ki.prototype._digest = function (r) {
    return r === "hex" ? To.toHex32(this.h, "big") : To.split32(this.h, "big");
  });
var Fo = Be,
  VC = qo,
  jo = Xi,
  GC = ic,
  bi = Fo.sum32,
  $C = Fo.sum32_4,
  JC = Fo.sum32_5,
  WC = jo.ch32,
  YC = jo.maj32,
  QC = jo.s0_256,
  XC = jo.s1_256,
  ZC = jo.g0_256,
  eO = jo.g1_256,
  Pw = VC.BlockHash,
  tO = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
function Vi() {
  if (!(this instanceof Vi)) return new Vi();
  Pw.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = tO),
    (this.W = new Array(64));
}
Fo.inherits(Vi, Pw);
var Mw = Vi;
(Vi.blockSize = 512),
  (Vi.outSize = 256),
  (Vi.hmacStrength = 192),
  (Vi.padLength = 64),
  (Vi.prototype._update = function (r, e) {
    for (var t = this.W, i = 0; i < 16; i++) t[i] = r[e + i];
    for (; i < t.length; i++)
      t[i] = $C(eO(t[i - 2]), t[i - 7], ZC(t[i - 15]), t[i - 16]);
    var n = this.h[0],
      o = this.h[1],
      c = this.h[2],
      l = this.h[3],
      g = this.h[4],
      d = this.h[5],
      y = this.h[6],
      v = this.h[7];
    for (GC(this.k.length === t.length), i = 0; i < t.length; i++) {
      var A = JC(v, XC(g), WC(g, d, y), this.k[i], t[i]),
        E = bi(QC(n), YC(n, o, c));
      (v = y),
        (y = d),
        (d = g),
        (g = bi(l, A)),
        (l = c),
        (c = o),
        (o = n),
        (n = bi(A, E));
    }
    (this.h[0] = bi(this.h[0], n)),
      (this.h[1] = bi(this.h[1], o)),
      (this.h[2] = bi(this.h[2], c)),
      (this.h[3] = bi(this.h[3], l)),
      (this.h[4] = bi(this.h[4], g)),
      (this.h[5] = bi(this.h[5], d)),
      (this.h[6] = bi(this.h[6], y)),
      (this.h[7] = bi(this.h[7], v));
  }),
  (Vi.prototype._digest = function (r) {
    return r === "hex" ? Fo.toHex32(this.h, "big") : Fo.split32(this.h, "big");
  });
var Nd = Be,
  Nw = Mw;
function Nn() {
  if (!(this instanceof Nn)) return new Nn();
  Nw.call(this),
    (this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
}
Nd.inherits(Nn, Nw);
var rO = Nn;
(Nn.blockSize = 512),
  (Nn.outSize = 224),
  (Nn.hmacStrength = 192),
  (Nn.padLength = 64),
  (Nn.prototype._digest = function (r) {
    return r === "hex"
      ? Nd.toHex32(this.h.slice(0, 7), "big")
      : Nd.split32(this.h.slice(0, 7), "big");
  });
var Fr = Be,
  iO = qo,
  nO = ic,
  Wi = Fr.rotr64_hi,
  Yi = Fr.rotr64_lo,
  Tw = Fr.shr64_hi,
  Fw = Fr.shr64_lo,
  ss = Fr.sum64,
  Ad = Fr.sum64_hi,
  Sd = Fr.sum64_lo,
  sO = Fr.sum64_4_hi,
  oO = Fr.sum64_4_lo,
  aO = Fr.sum64_5_hi,
  cO = Fr.sum64_5_lo,
  Lw = iO.BlockHash,
  uO = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ];
function Ei() {
  if (!(this instanceof Ei)) return new Ei();
  Lw.call(this),
    (this.h = [
      1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
      2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
      528734635, 4215389547, 1541459225, 327033209,
    ]),
    (this.k = uO),
    (this.W = new Array(160));
}
Fr.inherits(Ei, Lw);
var Uw = Ei;
(Ei.blockSize = 1024),
  (Ei.outSize = 512),
  (Ei.hmacStrength = 192),
  (Ei.padLength = 128),
  (Ei.prototype._prepareBlock = function (r, e) {
    for (var t = this.W, i = 0; i < 32; i++) t[i] = r[e + i];
    for (; i < t.length; i += 2) {
      var n = bO(t[i - 4], t[i - 3]),
        o = _O(t[i - 4], t[i - 3]),
        c = t[i - 14],
        l = t[i - 13],
        g = vO(t[i - 30], t[i - 29]),
        d = wO(t[i - 30], t[i - 29]),
        y = t[i - 32],
        v = t[i - 31];
      (t[i] = sO(n, o, c, l, g, d, y, v)),
        (t[i + 1] = oO(n, o, c, l, g, d, y, v));
    }
  }),
  (Ei.prototype._update = function (r, e) {
    this._prepareBlock(r, e);
    var t = this.W,
      i = this.h[0],
      n = this.h[1],
      o = this.h[2],
      c = this.h[3],
      l = this.h[4],
      g = this.h[5],
      d = this.h[6],
      y = this.h[7],
      v = this.h[8],
      A = this.h[9],
      E = this.h[10],
      P = this.h[11],
      N = this.h[12],
      T = this.h[13],
      K = this.h[14],
      Z = this.h[15];
    nO(this.k.length === t.length);
    for (var J = 0; J < t.length; J += 2) {
      var G = K,
        Q = Z,
        ee = mO(v, A),
        L = yO(v, A),
        B = hO(v, A, E, P, N),
        ae = lO(v, A, E, P, N, T),
        U = this.k[J],
        j = this.k[J + 1],
        W = t[J],
        h = t[J + 1],
        m = aO(G, Q, ee, L, B, ae, U, j, W, h),
        b = cO(G, Q, ee, L, B, ae, U, j, W, h);
      (G = pO(i, n)),
        (Q = gO(i, n)),
        (ee = fO(i, n, o, c, l)),
        (L = dO(i, n, o, c, l, g));
      var x = Ad(G, Q, ee, L),
        D = Sd(G, Q, ee, L);
      (K = N),
        (Z = T),
        (N = E),
        (T = P),
        (E = v),
        (P = A),
        (v = Ad(d, y, m, b)),
        (A = Sd(y, y, m, b)),
        (d = l),
        (y = g),
        (l = o),
        (g = c),
        (o = i),
        (c = n),
        (i = Ad(m, b, x, D)),
        (n = Sd(m, b, x, D));
    }
    ss(this.h, 0, i, n),
      ss(this.h, 2, o, c),
      ss(this.h, 4, l, g),
      ss(this.h, 6, d, y),
      ss(this.h, 8, v, A),
      ss(this.h, 10, E, P),
      ss(this.h, 12, N, T),
      ss(this.h, 14, K, Z);
  }),
  (Ei.prototype._digest = function (r) {
    return r === "hex" ? Fr.toHex32(this.h, "big") : Fr.split32(this.h, "big");
  });
function hO(r, e, t, i, n) {
  var o = (r & t) ^ (~r & n);
  return o < 0 && (o += 4294967296), o;
}
function lO(r, e, t, i, n, o) {
  var c = (e & i) ^ (~e & o);
  return c < 0 && (c += 4294967296), c;
}
function fO(r, e, t, i, n) {
  var o = (r & t) ^ (r & n) ^ (t & n);
  return o < 0 && (o += 4294967296), o;
}
function dO(r, e, t, i, n, o) {
  var c = (e & i) ^ (e & o) ^ (i & o);
  return c < 0 && (c += 4294967296), c;
}
function pO(r, e) {
  var t = Wi(r, e, 28),
    i = Wi(e, r, 2),
    n = Wi(e, r, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function gO(r, e) {
  var t = Yi(r, e, 28),
    i = Yi(e, r, 2),
    n = Yi(e, r, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function mO(r, e) {
  var t = Wi(r, e, 14),
    i = Wi(r, e, 18),
    n = Wi(e, r, 9),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function yO(r, e) {
  var t = Yi(r, e, 14),
    i = Yi(r, e, 18),
    n = Yi(e, r, 9),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function vO(r, e) {
  var t = Wi(r, e, 1),
    i = Wi(r, e, 8),
    n = Tw(r, e, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function wO(r, e) {
  var t = Yi(r, e, 1),
    i = Yi(r, e, 8),
    n = Fw(r, e, 7),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function bO(r, e) {
  var t = Wi(r, e, 19),
    i = Wi(e, r, 29),
    n = Tw(r, e, 6),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
function _O(r, e) {
  var t = Yi(r, e, 19),
    i = Yi(e, r, 29),
    n = Fw(r, e, 6),
    o = t ^ i ^ n;
  return o < 0 && (o += 4294967296), o;
}
var Td = Be,
  Bw = Uw;
function Tn() {
  if (!(this instanceof Tn)) return new Tn();
  Bw.call(this),
    (this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ]);
}
Td.inherits(Tn, Bw);
var EO = Tn;
(Tn.blockSize = 1024),
  (Tn.outSize = 384),
  (Tn.hmacStrength = 192),
  (Tn.padLength = 128),
  (Tn.prototype._digest = function (r) {
    return r === "hex"
      ? Td.toHex32(this.h.slice(0, 12), "big")
      : Td.split32(this.h.slice(0, 12), "big");
  }),
  (Oo.sha1 = KC),
  (Oo.sha224 = rO),
  (Oo.sha256 = Mw),
  (Oo.sha384 = EO),
  (Oo.sha512 = Uw);
var qw = {},
  Ns = Be,
  AO = qo,
  Vu = Ns.rotl32,
  Uv = Ns.sum32,
  $a = Ns.sum32_3,
  Bv = Ns.sum32_4,
  jw = AO.BlockHash;
function Hi() {
  if (!(this instanceof Hi)) return new Hi();
  jw.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.endian = "little");
}
Ns.inherits(Hi, jw),
  (qw.ripemd160 = Hi),
  (Hi.blockSize = 512),
  (Hi.outSize = 160),
  (Hi.hmacStrength = 192),
  (Hi.padLength = 64),
  (Hi.prototype._update = function (r, e) {
    for (
      var t = this.h[0],
        i = this.h[1],
        n = this.h[2],
        o = this.h[3],
        c = this.h[4],
        l = t,
        g = i,
        d = n,
        y = o,
        v = c,
        A = 0;
      A < 80;
      A++
    ) {
      var E = Uv(Vu(Bv(t, qv(A, i, n, o), r[IO[A] + e], SO(A)), RO[A]), c);
      (t = c),
        (c = o),
        (o = Vu(n, 10)),
        (n = i),
        (i = E),
        (E = Uv(Vu(Bv(l, qv(79 - A, g, d, y), r[DO[A] + e], xO(A)), CO[A]), v)),
        (l = v),
        (v = y),
        (y = Vu(d, 10)),
        (d = g),
        (g = E);
    }
    (E = $a(this.h[1], n, y)),
      (this.h[1] = $a(this.h[2], o, v)),
      (this.h[2] = $a(this.h[3], c, l)),
      (this.h[3] = $a(this.h[4], t, g)),
      (this.h[4] = $a(this.h[0], i, d)),
      (this.h[0] = E);
  }),
  (Hi.prototype._digest = function (r) {
    return r === "hex"
      ? Ns.toHex32(this.h, "little")
      : Ns.split32(this.h, "little");
  });
function qv(r, e, t, i) {
  return r <= 15
    ? e ^ t ^ i
    : r <= 31
    ? (e & t) | (~e & i)
    : r <= 47
    ? (e | ~t) ^ i
    : r <= 63
    ? (e & i) | (t & ~i)
    : e ^ (t | ~i);
}
function SO(r) {
  return r <= 15
    ? 0
    : r <= 31
    ? 1518500249
    : r <= 47
    ? 1859775393
    : r <= 63
    ? 2400959708
    : 2840853838;
}
function xO(r) {
  return r <= 15
    ? 1352829926
    : r <= 31
    ? 1548603684
    : r <= 47
    ? 1836072691
    : r <= 63
    ? 2053994217
    : 0;
}
var IO = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ],
  DO = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ],
  RO = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ],
  CO = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ],
  OO = Be,
  PO = ic;
function No(r, e, t) {
  if (!(this instanceof No)) return new No(r, e, t);
  (this.Hash = r),
    (this.blockSize = r.blockSize / 8),
    (this.outSize = r.outSize / 8),
    (this.inner = null),
    (this.outer = null),
    this._init(OO.toArray(e, t));
}
var MO = No;
(No.prototype._init = function (r) {
  r.length > this.blockSize && (r = new this.Hash().update(r).digest()),
    PO(r.length <= this.blockSize);
  for (var e = r.length; e < this.blockSize; e++) r.push(0);
  for (e = 0; e < r.length; e++) r[e] ^= 54;
  for (this.inner = new this.Hash().update(r), e = 0; e < r.length; e++)
    r[e] ^= 106;
  this.outer = new this.Hash().update(r);
}),
  (No.prototype.update = function (r, e) {
    return this.inner.update(r, e), this;
  }),
  (No.prototype.digest = function (r) {
    return this.outer.update(this.inner.digest()), this.outer.digest(r);
  }),
  (function (r) {
    var e = r;
    (e.utils = Be),
      (e.common = qo),
      (e.sha = Oo),
      (e.ripemd = qw),
      (e.hmac = MO),
      (e.sha1 = e.sha.sha1),
      (e.sha256 = e.sha.sha256),
      (e.sha224 = e.sha.sha224),
      (e.sha384 = e.sha.sha384),
      (e.sha512 = e.sha.sha512),
      (e.ripemd160 = e.ripemd.ripemd160);
  })(ki);
function zo(r, e, t) {
  return (
    (t = {
      path: e,
      exports: {},
      require: function (i, n) {
        return NO(i, n ?? t.path);
      },
    }),
    r(t, t.exports),
    t.exports
  );
}
function NO() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var $d = zw;
function zw(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
zw.equal = function (r, e, t) {
  if (r != e) throw new Error(t || "Assertion failed: " + r + " != " + e);
};
var Ai = zo(function (r, e) {
    var t = e;
    function i(c, l) {
      if (Array.isArray(c)) return c.slice();
      if (!c) return [];
      var g = [];
      if (typeof c != "string") {
        for (var d = 0; d < c.length; d++) g[d] = c[d] | 0;
        return g;
      }
      if (l === "hex") {
        (c = c.replace(/[^a-z0-9]+/gi, "")),
          c.length % 2 !== 0 && (c = "0" + c);
        for (var d = 0; d < c.length; d += 2)
          g.push(parseInt(c[d] + c[d + 1], 16));
      } else
        for (var d = 0; d < c.length; d++) {
          var y = c.charCodeAt(d),
            v = y >> 8,
            A = y & 255;
          v ? g.push(v, A) : g.push(A);
        }
      return g;
    }
    t.toArray = i;
    function n(c) {
      return c.length === 1 ? "0" + c : c;
    }
    t.zero2 = n;
    function o(c) {
      for (var l = "", g = 0; g < c.length; g++) l += n(c[g].toString(16));
      return l;
    }
    (t.toHex = o),
      (t.encode = function (c, l) {
        return l === "hex" ? o(c) : c;
      });
  }),
  $r = zo(function (r, e) {
    var t = e;
    (t.assert = $d),
      (t.toArray = Ai.toArray),
      (t.zero2 = Ai.zero2),
      (t.toHex = Ai.toHex),
      (t.encode = Ai.encode);
    function i(g, d, y) {
      var v = new Array(Math.max(g.bitLength(), y) + 1);
      v.fill(0);
      for (var A = 1 << (d + 1), E = g.clone(), P = 0; P < v.length; P++) {
        var N,
          T = E.andln(A - 1);
        E.isOdd()
          ? (T > (A >> 1) - 1 ? (N = (A >> 1) - T) : (N = T), E.isubn(N))
          : (N = 0),
          (v[P] = N),
          E.iushrn(1);
      }
      return v;
    }
    t.getNAF = i;
    function n(g, d) {
      var y = [[], []];
      (g = g.clone()), (d = d.clone());
      for (var v = 0, A = 0, E; g.cmpn(-v) > 0 || d.cmpn(-A) > 0; ) {
        var P = (g.andln(3) + v) & 3,
          N = (d.andln(3) + A) & 3;
        P === 3 && (P = -1), N === 3 && (N = -1);
        var T;
        P & 1
          ? ((E = (g.andln(7) + v) & 7),
            (E === 3 || E === 5) && N === 2 ? (T = -P) : (T = P))
          : (T = 0),
          y[0].push(T);
        var K;
        N & 1
          ? ((E = (d.andln(7) + A) & 7),
            (E === 3 || E === 5) && P === 2 ? (K = -N) : (K = N))
          : (K = 0),
          y[1].push(K),
          2 * v === T + 1 && (v = 1 - v),
          2 * A === K + 1 && (A = 1 - A),
          g.iushrn(1),
          d.iushrn(1);
      }
      return y;
    }
    t.getJSF = n;
    function o(g, d, y) {
      var v = "_" + d;
      g.prototype[d] = function () {
        return this[v] !== void 0 ? this[v] : (this[v] = y.call(this));
      };
    }
    t.cachedProperty = o;
    function c(g) {
      return typeof g == "string" ? t.toArray(g, "hex") : g;
    }
    t.parseBytes = c;
    function l(g) {
      return new De(g, "hex", "le");
    }
    t.intFromLE = l;
  }),
  Gu = $r.getNAF,
  TO = $r.getJSF,
  th = $r.assert;
function os(r, e) {
  (this.type = r),
    (this.p = new De(e.p, 16)),
    (this.red = e.prime ? De.red(e.prime) : De.mont(this.p)),
    (this.zero = new De(0).toRed(this.red)),
    (this.one = new De(1).toRed(this.red)),
    (this.two = new De(2).toRed(this.red)),
    (this.n = e.n && new De(e.n, 16)),
    (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var t = this.n && this.p.div(this.n);
  !t || t.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var Bs = os;
(os.prototype.point = function () {
  throw new Error("Not implemented");
}),
  (os.prototype.validate = function () {
    throw new Error("Not implemented");
  }),
  (os.prototype._fixedNafMul = function (r, e) {
    th(r.precomputed);
    var t = r._getDoubles(),
      i = Gu(e, 1, this._bitLength),
      n = (1 << (t.step + 1)) - (t.step % 2 === 0 ? 2 : 1);
    n /= 3;
    var o = [],
      c,
      l;
    for (c = 0; c < i.length; c += t.step) {
      l = 0;
      for (var g = c + t.step - 1; g >= c; g--) l = (l << 1) + i[g];
      o.push(l);
    }
    for (
      var d = this.jpoint(null, null, null),
        y = this.jpoint(null, null, null),
        v = n;
      v > 0;
      v--
    ) {
      for (c = 0; c < o.length; c++)
        (l = o[c]),
          l === v
            ? (y = y.mixedAdd(t.points[c]))
            : l === -v && (y = y.mixedAdd(t.points[c].neg()));
      d = d.add(y);
    }
    return d.toP();
  }),
  (os.prototype._wnafMul = function (r, e) {
    var t = 4,
      i = r._getNAFPoints(t);
    t = i.wnd;
    for (
      var n = i.points,
        o = Gu(e, t, this._bitLength),
        c = this.jpoint(null, null, null),
        l = o.length - 1;
      l >= 0;
      l--
    ) {
      for (var g = 0; l >= 0 && o[l] === 0; l--) g++;
      if ((l >= 0 && g++, (c = c.dblp(g)), l < 0)) break;
      var d = o[l];
      th(d !== 0),
        r.type === "affine"
          ? d > 0
            ? (c = c.mixedAdd(n[(d - 1) >> 1]))
            : (c = c.mixedAdd(n[(-d - 1) >> 1].neg()))
          : d > 0
          ? (c = c.add(n[(d - 1) >> 1]))
          : (c = c.add(n[(-d - 1) >> 1].neg()));
    }
    return r.type === "affine" ? c.toP() : c;
  }),
  (os.prototype._wnafMulAdd = function (r, e, t, i, n) {
    var o = this._wnafT1,
      c = this._wnafT2,
      l = this._wnafT3,
      g = 0,
      d,
      y,
      v;
    for (d = 0; d < i; d++) {
      v = e[d];
      var A = v._getNAFPoints(r);
      (o[d] = A.wnd), (c[d] = A.points);
    }
    for (d = i - 1; d >= 1; d -= 2) {
      var E = d - 1,
        P = d;
      if (o[E] !== 1 || o[P] !== 1) {
        (l[E] = Gu(t[E], o[E], this._bitLength)),
          (l[P] = Gu(t[P], o[P], this._bitLength)),
          (g = Math.max(l[E].length, g)),
          (g = Math.max(l[P].length, g));
        continue;
      }
      var N = [e[E], null, null, e[P]];
      e[E].y.cmp(e[P].y) === 0
        ? ((N[1] = e[E].add(e[P])), (N[2] = e[E].toJ().mixedAdd(e[P].neg())))
        : e[E].y.cmp(e[P].y.redNeg()) === 0
        ? ((N[1] = e[E].toJ().mixedAdd(e[P])), (N[2] = e[E].add(e[P].neg())))
        : ((N[1] = e[E].toJ().mixedAdd(e[P])),
          (N[2] = e[E].toJ().mixedAdd(e[P].neg())));
      var T = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
        K = TO(t[E], t[P]);
      for (
        g = Math.max(K[0].length, g),
          l[E] = new Array(g),
          l[P] = new Array(g),
          y = 0;
        y < g;
        y++
      ) {
        var Z = K[0][y] | 0,
          J = K[1][y] | 0;
        (l[E][y] = T[(Z + 1) * 3 + (J + 1)]), (l[P][y] = 0), (c[E] = N);
      }
    }
    var G = this.jpoint(null, null, null),
      Q = this._wnafT4;
    for (d = g; d >= 0; d--) {
      for (var ee = 0; d >= 0; ) {
        var L = !0;
        for (y = 0; y < i; y++) (Q[y] = l[y][d] | 0), Q[y] !== 0 && (L = !1);
        if (!L) break;
        ee++, d--;
      }
      if ((d >= 0 && ee++, (G = G.dblp(ee)), d < 0)) break;
      for (y = 0; y < i; y++) {
        var B = Q[y];
        B !== 0 &&
          (B > 0
            ? (v = c[y][(B - 1) >> 1])
            : B < 0 && (v = c[y][(-B - 1) >> 1].neg()),
          v.type === "affine" ? (G = G.mixedAdd(v)) : (G = G.add(v)));
      }
    }
    for (d = 0; d < i; d++) c[d] = null;
    return n ? G : G.toP();
  });
function ci(r, e) {
  (this.curve = r), (this.type = e), (this.precomputed = null);
}
(os.BasePoint = ci),
  (ci.prototype.eq = function () {
    throw new Error("Not implemented");
  }),
  (ci.prototype.validate = function () {
    return this.curve.validate(this);
  }),
  (os.prototype.decodePoint = function (r, e) {
    r = $r.toArray(r, e);
    var t = this.p.byteLength();
    if ((r[0] === 4 || r[0] === 6 || r[0] === 7) && r.length - 1 === 2 * t) {
      r[0] === 6
        ? th(r[r.length - 1] % 2 === 0)
        : r[0] === 7 && th(r[r.length - 1] % 2 === 1);
      var i = this.point(r.slice(1, 1 + t), r.slice(1 + t, 1 + 2 * t));
      return i;
    } else if ((r[0] === 2 || r[0] === 3) && r.length - 1 === t)
      return this.pointFromX(r.slice(1, 1 + t), r[0] === 3);
    throw new Error("Unknown point format");
  }),
  (ci.prototype.encodeCompressed = function (r) {
    return this.encode(r, !0);
  }),
  (ci.prototype._encode = function (r) {
    var e = this.curve.p.byteLength(),
      t = this.getX().toArray("be", e);
    return r
      ? [this.getY().isEven() ? 2 : 3].concat(t)
      : [4].concat(t, this.getY().toArray("be", e));
  }),
  (ci.prototype.encode = function (r, e) {
    return $r.encode(this._encode(e), r);
  }),
  (ci.prototype.precompute = function (r) {
    if (this.precomputed) return this;
    var e = { doubles: null, naf: null, beta: null };
    return (
      (e.naf = this._getNAFPoints(8)),
      (e.doubles = this._getDoubles(4, r)),
      (e.beta = this._getBeta()),
      (this.precomputed = e),
      this
    );
  }),
  (ci.prototype._hasDoubles = function (r) {
    if (!this.precomputed) return !1;
    var e = this.precomputed.doubles;
    return e ? e.points.length >= Math.ceil((r.bitLength() + 1) / e.step) : !1;
  }),
  (ci.prototype._getDoubles = function (r, e) {
    if (this.precomputed && this.precomputed.doubles)
      return this.precomputed.doubles;
    for (var t = [this], i = this, n = 0; n < e; n += r) {
      for (var o = 0; o < r; o++) i = i.dbl();
      t.push(i);
    }
    return { step: r, points: t };
  }),
  (ci.prototype._getNAFPoints = function (r) {
    if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
    for (
      var e = [this], t = (1 << r) - 1, i = t === 1 ? null : this.dbl(), n = 1;
      n < t;
      n++
    )
      e[n] = e[n - 1].add(i);
    return { wnd: r, points: e };
  }),
  (ci.prototype._getBeta = function () {
    return null;
  }),
  (ci.prototype.dblp = function (r) {
    for (var e = this, t = 0; t < r; t++) e = e.dbl();
    return e;
  });
var Jd = zo(function (r) {
    typeof Object.create == "function"
      ? (r.exports = function (e, t) {
          t &&
            ((e.super_ = t),
            (e.prototype = Object.create(t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (r.exports = function (e, t) {
          if (t) {
            e.super_ = t;
            var i = function () {};
            (i.prototype = t.prototype),
              (e.prototype = new i()),
              (e.prototype.constructor = e);
          }
        });
  }),
  FO = $r.assert;
function hi(r) {
  Bs.call(this, "short", r),
    (this.a = new De(r.a, 16).toRed(this.red)),
    (this.b = new De(r.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(r)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Jd(hi, Bs);
var LO = hi;
(hi.prototype._getEndomorphism = function (r) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var e, t;
    if (r.beta) e = new De(r.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      (e = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (e = e.toRed(this.red));
    }
    if (r.lambda) t = new De(r.lambda, 16);
    else {
      var n = this._getEndoRoots(this.n);
      this.g.mul(n[0]).x.cmp(this.g.x.redMul(e)) === 0
        ? (t = n[0])
        : ((t = n[1]), FO(this.g.mul(t).x.cmp(this.g.x.redMul(e)) === 0));
    }
    var o;
    return (
      r.basis
        ? (o = r.basis.map(function (c) {
            return { a: new De(c.a, 16), b: new De(c.b, 16) };
          }))
        : (o = this._getEndoBasis(t)),
      { beta: e, lambda: t, basis: o }
    );
  }
}),
  (hi.prototype._getEndoRoots = function (r) {
    var e = r === this.p ? this.red : De.mont(r),
      t = new De(2).toRed(e).redInvm(),
      i = t.redNeg(),
      n = new De(3).toRed(e).redNeg().redSqrt().redMul(t),
      o = i.redAdd(n).fromRed(),
      c = i.redSub(n).fromRed();
    return [o, c];
  }),
  (hi.prototype._getEndoBasis = function (r) {
    for (
      var e = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
        t = r,
        i = this.n.clone(),
        n = new De(1),
        o = new De(0),
        c = new De(0),
        l = new De(1),
        g,
        d,
        y,
        v,
        A,
        E,
        P,
        N = 0,
        T,
        K;
      t.cmpn(0) !== 0;

    ) {
      var Z = i.div(t);
      (T = i.sub(Z.mul(t))), (K = c.sub(Z.mul(n)));
      var J = l.sub(Z.mul(o));
      if (!y && T.cmp(e) < 0) (g = P.neg()), (d = n), (y = T.neg()), (v = K);
      else if (y && ++N === 2) break;
      (P = T), (i = t), (t = T), (c = n), (n = K), (l = o), (o = J);
    }
    (A = T.neg()), (E = K);
    var G = y.sqr().add(v.sqr()),
      Q = A.sqr().add(E.sqr());
    return (
      Q.cmp(G) >= 0 && ((A = g), (E = d)),
      y.negative && ((y = y.neg()), (v = v.neg())),
      A.negative && ((A = A.neg()), (E = E.neg())),
      [
        { a: y, b: v },
        { a: A, b: E },
      ]
    );
  }),
  (hi.prototype._endoSplit = function (r) {
    var e = this.endo.basis,
      t = e[0],
      i = e[1],
      n = i.b.mul(r).divRound(this.n),
      o = t.b.neg().mul(r).divRound(this.n),
      c = n.mul(t.a),
      l = o.mul(i.a),
      g = n.mul(t.b),
      d = o.mul(i.b),
      y = r.sub(c).sub(l),
      v = g.add(d).neg();
    return { k1: y, k2: v };
  }),
  (hi.prototype.pointFromX = function (r, e) {
    (r = new De(r, 16)), r.red || (r = r.toRed(this.red));
    var t = r.redSqr().redMul(r).redIAdd(r.redMul(this.a)).redIAdd(this.b),
      i = t.redSqrt();
    if (i.redSqr().redSub(t).cmp(this.zero) !== 0)
      throw new Error("invalid point");
    var n = i.fromRed().isOdd();
    return ((e && !n) || (!e && n)) && (i = i.redNeg()), this.point(r, i);
  }),
  (hi.prototype.validate = function (r) {
    if (r.inf) return !0;
    var e = r.x,
      t = r.y,
      i = this.a.redMul(e),
      n = e.redSqr().redMul(e).redIAdd(i).redIAdd(this.b);
    return t.redSqr().redISub(n).cmpn(0) === 0;
  }),
  (hi.prototype._endoWnafMulAdd = function (r, e, t) {
    for (
      var i = this._endoWnafT1, n = this._endoWnafT2, o = 0;
      o < r.length;
      o++
    ) {
      var c = this._endoSplit(e[o]),
        l = r[o],
        g = l._getBeta();
      c.k1.negative && (c.k1.ineg(), (l = l.neg(!0))),
        c.k2.negative && (c.k2.ineg(), (g = g.neg(!0))),
        (i[o * 2] = l),
        (i[o * 2 + 1] = g),
        (n[o * 2] = c.k1),
        (n[o * 2 + 1] = c.k2);
    }
    for (var d = this._wnafMulAdd(1, i, n, o * 2, t), y = 0; y < o * 2; y++)
      (i[y] = null), (n[y] = null);
    return d;
  });
function Xt(r, e, t, i) {
  Bs.BasePoint.call(this, r, "affine"),
    e === null && t === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new De(e, 16)),
        (this.y = new De(t, 16)),
        i && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Jd(Xt, Bs.BasePoint),
  (hi.prototype.point = function (r, e, t) {
    return new Xt(this, r, e, t);
  }),
  (hi.prototype.pointFromJSON = function (r, e) {
    return Xt.fromJSON(this, r, e);
  }),
  (Xt.prototype._getBeta = function () {
    if (this.curve.endo) {
      var r = this.precomputed;
      if (r && r.beta) return r.beta;
      var e = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
      if (r) {
        var t = this.curve,
          i = function (n) {
            return t.point(n.x.redMul(t.endo.beta), n.y);
          };
        (r.beta = e),
          (e.precomputed = {
            beta: null,
            naf: r.naf && { wnd: r.naf.wnd, points: r.naf.points.map(i) },
            doubles: r.doubles && {
              step: r.doubles.step,
              points: r.doubles.points.map(i),
            },
          });
      }
      return e;
    }
  }),
  (Xt.prototype.toJSON = function () {
    return this.precomputed
      ? [
          this.x,
          this.y,
          this.precomputed && {
            doubles: this.precomputed.doubles && {
              step: this.precomputed.doubles.step,
              points: this.precomputed.doubles.points.slice(1),
            },
            naf: this.precomputed.naf && {
              wnd: this.precomputed.naf.wnd,
              points: this.precomputed.naf.points.slice(1),
            },
          },
        ]
      : [this.x, this.y];
  }),
  (Xt.fromJSON = function (r, e, t) {
    typeof e == "string" && (e = JSON.parse(e));
    var i = r.point(e[0], e[1], t);
    if (!e[2]) return i;
    function n(c) {
      return r.point(c[0], c[1], t);
    }
    var o = e[2];
    return (
      (i.precomputed = {
        beta: null,
        doubles: o.doubles && {
          step: o.doubles.step,
          points: [i].concat(o.doubles.points.map(n)),
        },
        naf: o.naf && {
          wnd: o.naf.wnd,
          points: [i].concat(o.naf.points.map(n)),
        },
      }),
      i
    );
  }),
  (Xt.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC Point Infinity>"
      : "<EC Point x: " +
          this.x.fromRed().toString(16, 2) +
          " y: " +
          this.y.fromRed().toString(16, 2) +
          ">";
  }),
  (Xt.prototype.isInfinity = function () {
    return this.inf;
  }),
  (Xt.prototype.add = function (r) {
    if (this.inf) return r;
    if (r.inf) return this;
    if (this.eq(r)) return this.dbl();
    if (this.neg().eq(r)) return this.curve.point(null, null);
    if (this.x.cmp(r.x) === 0) return this.curve.point(null, null);
    var e = this.y.redSub(r.y);
    e.cmpn(0) !== 0 && (e = e.redMul(this.x.redSub(r.x).redInvm()));
    var t = e.redSqr().redISub(this.x).redISub(r.x),
      i = e.redMul(this.x.redSub(t)).redISub(this.y);
    return this.curve.point(t, i);
  }),
  (Xt.prototype.dbl = function () {
    if (this.inf) return this;
    var r = this.y.redAdd(this.y);
    if (r.cmpn(0) === 0) return this.curve.point(null, null);
    var e = this.curve.a,
      t = this.x.redSqr(),
      i = r.redInvm(),
      n = t.redAdd(t).redIAdd(t).redIAdd(e).redMul(i),
      o = n.redSqr().redISub(this.x.redAdd(this.x)),
      c = n.redMul(this.x.redSub(o)).redISub(this.y);
    return this.curve.point(o, c);
  }),
  (Xt.prototype.getX = function () {
    return this.x.fromRed();
  }),
  (Xt.prototype.getY = function () {
    return this.y.fromRed();
  }),
  (Xt.prototype.mul = function (r) {
    return (
      (r = new De(r, 16)),
      this.isInfinity()
        ? this
        : this._hasDoubles(r)
        ? this.curve._fixedNafMul(this, r)
        : this.curve.endo
        ? this.curve._endoWnafMulAdd([this], [r])
        : this.curve._wnafMul(this, r)
    );
  }),
  (Xt.prototype.mulAdd = function (r, e, t) {
    var i = [this, e],
      n = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n)
      : this.curve._wnafMulAdd(1, i, n, 2);
  }),
  (Xt.prototype.jmulAdd = function (r, e, t) {
    var i = [this, e],
      n = [r, t];
    return this.curve.endo
      ? this.curve._endoWnafMulAdd(i, n, !0)
      : this.curve._wnafMulAdd(1, i, n, 2, !0);
  }),
  (Xt.prototype.eq = function (r) {
    return (
      this === r ||
      (this.inf === r.inf &&
        (this.inf || (this.x.cmp(r.x) === 0 && this.y.cmp(r.y) === 0)))
    );
  }),
  (Xt.prototype.neg = function (r) {
    if (this.inf) return this;
    var e = this.curve.point(this.x, this.y.redNeg());
    if (r && this.precomputed) {
      var t = this.precomputed,
        i = function (n) {
          return n.neg();
        };
      e.precomputed = {
        naf: t.naf && { wnd: t.naf.wnd, points: t.naf.points.map(i) },
        doubles: t.doubles && {
          step: t.doubles.step,
          points: t.doubles.points.map(i),
        },
      };
    }
    return e;
  }),
  (Xt.prototype.toJ = function () {
    if (this.inf) return this.curve.jpoint(null, null, null);
    var r = this.curve.jpoint(this.x, this.y, this.curve.one);
    return r;
  });
function nr(r, e, t, i) {
  Bs.BasePoint.call(this, r, "jacobian"),
    e === null && t === null && i === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new De(0)))
      : ((this.x = new De(e, 16)),
        (this.y = new De(t, 16)),
        (this.z = new De(i, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Jd(nr, Bs.BasePoint),
  (hi.prototype.jpoint = function (r, e, t) {
    return new nr(this, r, e, t);
  }),
  (nr.prototype.toP = function () {
    if (this.isInfinity()) return this.curve.point(null, null);
    var r = this.z.redInvm(),
      e = r.redSqr(),
      t = this.x.redMul(e),
      i = this.y.redMul(e).redMul(r);
    return this.curve.point(t, i);
  }),
  (nr.prototype.neg = function () {
    return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
  }),
  (nr.prototype.add = function (r) {
    if (this.isInfinity()) return r;
    if (r.isInfinity()) return this;
    var e = r.z.redSqr(),
      t = this.z.redSqr(),
      i = this.x.redMul(e),
      n = r.x.redMul(t),
      o = this.y.redMul(e.redMul(r.z)),
      c = r.y.redMul(t.redMul(this.z)),
      l = i.redSub(n),
      g = o.redSub(c);
    if (l.cmpn(0) === 0)
      return g.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var d = l.redSqr(),
      y = d.redMul(l),
      v = i.redMul(d),
      A = g.redSqr().redIAdd(y).redISub(v).redISub(v),
      E = g.redMul(v.redISub(A)).redISub(o.redMul(y)),
      P = this.z.redMul(r.z).redMul(l);
    return this.curve.jpoint(A, E, P);
  }),
  (nr.prototype.mixedAdd = function (r) {
    if (this.isInfinity()) return r.toJ();
    if (r.isInfinity()) return this;
    var e = this.z.redSqr(),
      t = this.x,
      i = r.x.redMul(e),
      n = this.y,
      o = r.y.redMul(e).redMul(this.z),
      c = t.redSub(i),
      l = n.redSub(o);
    if (c.cmpn(0) === 0)
      return l.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
    var g = c.redSqr(),
      d = g.redMul(c),
      y = t.redMul(g),
      v = l.redSqr().redIAdd(d).redISub(y).redISub(y),
      A = l.redMul(y.redISub(v)).redISub(n.redMul(d)),
      E = this.z.redMul(c);
    return this.curve.jpoint(v, A, E);
  }),
  (nr.prototype.dblp = function (r) {
    if (r === 0) return this;
    if (this.isInfinity()) return this;
    if (!r) return this.dbl();
    var e;
    if (this.curve.zeroA || this.curve.threeA) {
      var t = this;
      for (e = 0; e < r; e++) t = t.dbl();
      return t;
    }
    var i = this.curve.a,
      n = this.curve.tinv,
      o = this.x,
      c = this.y,
      l = this.z,
      g = l.redSqr().redSqr(),
      d = c.redAdd(c);
    for (e = 0; e < r; e++) {
      var y = o.redSqr(),
        v = d.redSqr(),
        A = v.redSqr(),
        E = y.redAdd(y).redIAdd(y).redIAdd(i.redMul(g)),
        P = o.redMul(v),
        N = E.redSqr().redISub(P.redAdd(P)),
        T = P.redISub(N),
        K = E.redMul(T);
      K = K.redIAdd(K).redISub(A);
      var Z = d.redMul(l);
      e + 1 < r && (g = g.redMul(A)), (o = N), (l = Z), (d = K);
    }
    return this.curve.jpoint(o, d.redMul(n), l);
  }),
  (nr.prototype.dbl = function () {
    return this.isInfinity()
      ? this
      : this.curve.zeroA
      ? this._zeroDbl()
      : this.curve.threeA
      ? this._threeDbl()
      : this._dbl();
  }),
  (nr.prototype._zeroDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        o = n.redSqr(),
        c = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
      c = c.redIAdd(c);
      var l = i.redAdd(i).redIAdd(i),
        g = l.redSqr().redISub(c).redISub(c),
        d = o.redIAdd(o);
      (d = d.redIAdd(d)),
        (d = d.redIAdd(d)),
        (r = g),
        (e = l.redMul(c.redISub(g)).redISub(d)),
        (t = this.y.redAdd(this.y));
    } else {
      var y = this.x.redSqr(),
        v = this.y.redSqr(),
        A = v.redSqr(),
        E = this.x.redAdd(v).redSqr().redISub(y).redISub(A);
      E = E.redIAdd(E);
      var P = y.redAdd(y).redIAdd(y),
        N = P.redSqr(),
        T = A.redIAdd(A);
      (T = T.redIAdd(T)),
        (T = T.redIAdd(T)),
        (r = N.redISub(E).redISub(E)),
        (e = P.redMul(E.redISub(r)).redISub(T)),
        (t = this.y.redMul(this.z)),
        (t = t.redIAdd(t));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (nr.prototype._threeDbl = function () {
    var r, e, t;
    if (this.zOne) {
      var i = this.x.redSqr(),
        n = this.y.redSqr(),
        o = n.redSqr(),
        c = this.x.redAdd(n).redSqr().redISub(i).redISub(o);
      c = c.redIAdd(c);
      var l = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
        g = l.redSqr().redISub(c).redISub(c);
      r = g;
      var d = o.redIAdd(o);
      (d = d.redIAdd(d)),
        (d = d.redIAdd(d)),
        (e = l.redMul(c.redISub(g)).redISub(d)),
        (t = this.y.redAdd(this.y));
    } else {
      var y = this.z.redSqr(),
        v = this.y.redSqr(),
        A = this.x.redMul(v),
        E = this.x.redSub(y).redMul(this.x.redAdd(y));
      E = E.redAdd(E).redIAdd(E);
      var P = A.redIAdd(A);
      P = P.redIAdd(P);
      var N = P.redAdd(P);
      (r = E.redSqr().redISub(N)),
        (t = this.y.redAdd(this.z).redSqr().redISub(v).redISub(y));
      var T = v.redSqr();
      (T = T.redIAdd(T)),
        (T = T.redIAdd(T)),
        (T = T.redIAdd(T)),
        (e = E.redMul(P.redISub(r)).redISub(T));
    }
    return this.curve.jpoint(r, e, t);
  }),
  (nr.prototype._dbl = function () {
    var r = this.curve.a,
      e = this.x,
      t = this.y,
      i = this.z,
      n = i.redSqr().redSqr(),
      o = e.redSqr(),
      c = t.redSqr(),
      l = o.redAdd(o).redIAdd(o).redIAdd(r.redMul(n)),
      g = e.redAdd(e);
    g = g.redIAdd(g);
    var d = g.redMul(c),
      y = l.redSqr().redISub(d.redAdd(d)),
      v = d.redISub(y),
      A = c.redSqr();
    (A = A.redIAdd(A)), (A = A.redIAdd(A)), (A = A.redIAdd(A));
    var E = l.redMul(v).redISub(A),
      P = t.redAdd(t).redMul(i);
    return this.curve.jpoint(y, E, P);
  }),
  (nr.prototype.trpl = function () {
    if (!this.curve.zeroA) return this.dbl().add(this);
    var r = this.x.redSqr(),
      e = this.y.redSqr(),
      t = this.z.redSqr(),
      i = e.redSqr(),
      n = r.redAdd(r).redIAdd(r),
      o = n.redSqr(),
      c = this.x.redAdd(e).redSqr().redISub(r).redISub(i);
    (c = c.redIAdd(c)), (c = c.redAdd(c).redIAdd(c)), (c = c.redISub(o));
    var l = c.redSqr(),
      g = i.redIAdd(i);
    (g = g.redIAdd(g)), (g = g.redIAdd(g)), (g = g.redIAdd(g));
    var d = n.redIAdd(c).redSqr().redISub(o).redISub(l).redISub(g),
      y = e.redMul(d);
    (y = y.redIAdd(y)), (y = y.redIAdd(y));
    var v = this.x.redMul(l).redISub(y);
    (v = v.redIAdd(v)), (v = v.redIAdd(v));
    var A = this.y.redMul(d.redMul(g.redISub(d)).redISub(c.redMul(l)));
    (A = A.redIAdd(A)), (A = A.redIAdd(A)), (A = A.redIAdd(A));
    var E = this.z.redAdd(c).redSqr().redISub(t).redISub(l);
    return this.curve.jpoint(v, A, E);
  }),
  (nr.prototype.mul = function (r, e) {
    return (r = new De(r, e)), this.curve._wnafMul(this, r);
  }),
  (nr.prototype.eq = function (r) {
    if (r.type === "affine") return this.eq(r.toJ());
    if (this === r) return !0;
    var e = this.z.redSqr(),
      t = r.z.redSqr();
    if (this.x.redMul(t).redISub(r.x.redMul(e)).cmpn(0) !== 0) return !1;
    var i = e.redMul(this.z),
      n = t.redMul(r.z);
    return this.y.redMul(n).redISub(r.y.redMul(i)).cmpn(0) === 0;
  }),
  (nr.prototype.eqXToP = function (r) {
    var e = this.z.redSqr(),
      t = r.toRed(this.curve.red).redMul(e);
    if (this.x.cmp(t) === 0) return !0;
    for (var i = r.clone(), n = this.curve.redN.redMul(e); ; ) {
      if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
      if ((t.redIAdd(n), this.x.cmp(t) === 0)) return !0;
    }
  }),
  (nr.prototype.inspect = function () {
    return this.isInfinity()
      ? "<EC JPoint Infinity>"
      : "<EC JPoint x: " +
          this.x.toString(16, 2) +
          " y: " +
          this.y.toString(16, 2) +
          " z: " +
          this.z.toString(16, 2) +
          ">";
  }),
  (nr.prototype.isInfinity = function () {
    return this.z.cmpn(0) === 0;
  });
var Wu = zo(function (r, e) {
    var t = e;
    (t.base = Bs), (t.short = LO), (t.mont = null), (t.edwards = null);
  }),
  Yu = zo(function (r, e) {
    var t = e,
      i = $r.assert;
    function n(l) {
      l.type === "short"
        ? (this.curve = new Wu.short(l))
        : l.type === "edwards"
        ? (this.curve = new Wu.edwards(l))
        : (this.curve = new Wu.mont(l)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = l.hash),
        i(this.g.validate(), "Invalid curve"),
        i(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    t.PresetCurve = n;
    function o(l, g) {
      Object.defineProperty(t, l, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var d = new n(g);
          return (
            Object.defineProperty(t, l, {
              configurable: !0,
              enumerable: !0,
              value: d,
            }),
            d
          );
        },
      });
    }
    o("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: ki.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
      ],
    }),
      o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: ki.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: ki.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: ki.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: ki.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: ki.sha256,
        gRed: !1,
        g: ["9"],
      }),
      o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: ki.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    var c;
    try {
      c = null.crash();
    } catch {
      c = void 0;
    }
    o("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: ki.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        c,
      ],
    });
  });
function as(r) {
  if (!(this instanceof as)) return new as(r);
  (this.hash = r.hash),
    (this.predResist = !!r.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = r.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var e = Ai.toArray(r.entropy, r.entropyEnc || "hex"),
    t = Ai.toArray(r.nonce, r.nonceEnc || "hex"),
    i = Ai.toArray(r.pers, r.persEnc || "hex");
  $d(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(e, t, i);
}
var jv = as;
(as.prototype._init = function (r, e, t) {
  var i = r.concat(e).concat(t);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var n = 0; n < this.V.length; n++) (this.K[n] = 0), (this.V[n] = 1);
  this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
}),
  (as.prototype._hmac = function () {
    return new ki.hmac(this.hash, this.K);
  }),
  (as.prototype._update = function (r) {
    var e = this._hmac().update(this.V).update([0]);
    r && (e = e.update(r)),
      (this.K = e.digest()),
      (this.V = this._hmac().update(this.V).digest()),
      r &&
        ((this.K = this._hmac().update(this.V).update([1]).update(r).digest()),
        (this.V = this._hmac().update(this.V).digest()));
  }),
  (as.prototype.reseed = function (r, e, t, i) {
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      (r = Ai.toArray(r, e)),
      (t = Ai.toArray(t, i)),
      $d(
        r.length >= this.minEntropy / 8,
        "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
      ),
      this._update(r.concat(t || [])),
      (this._reseed = 1);
  }),
  (as.prototype.generate = function (r, e, t, i) {
    if (this._reseed > this.reseedInterval)
      throw new Error("Reseed is required");
    typeof e != "string" && ((i = t), (t = e), (e = null)),
      t && ((t = Ai.toArray(t, i || "hex")), this._update(t));
    for (var n = []; n.length < r; )
      (this.V = this._hmac().update(this.V).digest()), (n = n.concat(this.V));
    var o = n.slice(0, r);
    return this._update(t), this._reseed++, Ai.encode(o, e);
  });
var xd = $r.assert;
function dr(r, e) {
  (this.ec = r),
    (this.priv = null),
    (this.pub = null),
    e.priv && this._importPrivate(e.priv, e.privEnc),
    e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Id = dr;
(dr.fromPublic = function (r, e, t) {
  return e instanceof dr ? e : new dr(r, { pub: e, pubEnc: t });
}),
  (dr.fromPrivate = function (r, e, t) {
    return e instanceof dr ? e : new dr(r, { priv: e, privEnc: t });
  }),
  (dr.prototype.validate = function () {
    var r = this.getPublic();
    return r.isInfinity()
      ? { result: !1, reason: "Invalid public key" }
      : r.validate()
      ? r.mul(this.ec.curve.n).isInfinity()
        ? { result: !0, reason: null }
        : { result: !1, reason: "Public key * N != O" }
      : { result: !1, reason: "Public key is not a point" };
  }),
  (dr.prototype.getPublic = function (r, e) {
    return (
      typeof r == "string" && ((e = r), (r = null)),
      this.pub || (this.pub = this.ec.g.mul(this.priv)),
      e ? this.pub.encode(e, r) : this.pub
    );
  }),
  (dr.prototype.getPrivate = function (r) {
    return r === "hex" ? this.priv.toString(16, 2) : this.priv;
  }),
  (dr.prototype._importPrivate = function (r, e) {
    (this.priv = new De(r, e || 16)),
      (this.priv = this.priv.umod(this.ec.curve.n));
  }),
  (dr.prototype._importPublic = function (r, e) {
    if (r.x || r.y) {
      this.ec.curve.type === "mont"
        ? xd(r.x, "Need x coordinate")
        : (this.ec.curve.type === "short" ||
            this.ec.curve.type === "edwards") &&
          xd(r.x && r.y, "Need both x and y coordinate"),
        (this.pub = this.ec.curve.point(r.x, r.y));
      return;
    }
    this.pub = this.ec.curve.decodePoint(r, e);
  }),
  (dr.prototype.derive = function (r) {
    return (
      r.validate() || xd(r.validate(), "public point not validated"),
      r.mul(this.priv).getX()
    );
  }),
  (dr.prototype.sign = function (r, e, t) {
    return this.ec.sign(r, this, e, t);
  }),
  (dr.prototype.verify = function (r, e) {
    return this.ec.verify(r, e, this);
  }),
  (dr.prototype.inspect = function () {
    return (
      "<Key priv: " +
      (this.priv && this.priv.toString(16, 2)) +
      " pub: " +
      (this.pub && this.pub.inspect()) +
      " >"
    );
  });
var UO = $r.assert;
function sh(r, e) {
  if (r instanceof sh) return r;
  this._importDER(r, e) ||
    (UO(r.r && r.s, "Signature without r or s"),
    (this.r = new De(r.r, 16)),
    (this.s = new De(r.s, 16)),
    r.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = r.recoveryParam));
}
var $u = sh;
function BO() {
  this.place = 0;
}
function Dd(r, e) {
  var t = r[e.place++];
  if (!(t & 128)) return t;
  var i = t & 15;
  if (i === 0 || i > 4) return !1;
  for (var n = 0, o = 0, c = e.place; o < i; o++, c++)
    (n <<= 8), (n |= r[c]), (n >>>= 0);
  return n <= 127 ? !1 : ((e.place = c), n);
}
function zv(r) {
  for (var e = 0, t = r.length - 1; !r[e] && !(r[e + 1] & 128) && e < t; ) e++;
  return e === 0 ? r : r.slice(e);
}
sh.prototype._importDER = function (r, e) {
  r = $r.toArray(r, e);
  var t = new BO();
  if (r[t.place++] !== 48) return !1;
  var i = Dd(r, t);
  if (i === !1 || i + t.place !== r.length || r[t.place++] !== 2) return !1;
  var n = Dd(r, t);
  if (n === !1) return !1;
  var o = r.slice(t.place, n + t.place);
  if (((t.place += n), r[t.place++] !== 2)) return !1;
  var c = Dd(r, t);
  if (c === !1 || r.length !== c + t.place) return !1;
  var l = r.slice(t.place, c + t.place);
  if (o[0] === 0)
    if (o[1] & 128) o = o.slice(1);
    else return !1;
  if (l[0] === 0)
    if (l[1] & 128) l = l.slice(1);
    else return !1;
  return (
    (this.r = new De(o)), (this.s = new De(l)), (this.recoveryParam = null), !0
  );
};
function Rd(r, e) {
  if (e < 128) {
    r.push(e);
    return;
  }
  var t = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (r.push(t | 128); --t; ) r.push((e >>> (t << 3)) & 255);
  r.push(e);
}
sh.prototype.toDER = function (r) {
  var e = this.r.toArray(),
    t = this.s.toArray();
  for (
    e[0] & 128 && (e = [0].concat(e)),
      t[0] & 128 && (t = [0].concat(t)),
      e = zv(e),
      t = zv(t);
    !t[0] && !(t[1] & 128);

  )
    t = t.slice(1);
  var i = [2];
  Rd(i, e.length), (i = i.concat(e)), i.push(2), Rd(i, t.length);
  var n = i.concat(t),
    o = [48];
  return Rd(o, n.length), (o = o.concat(n)), $r.encode(o, r);
};
var qO = function () {
    throw new Error("unsupported");
  },
  kw = $r.assert;
function ui(r) {
  if (!(this instanceof ui)) return new ui(r);
  typeof r == "string" &&
    (kw(Object.prototype.hasOwnProperty.call(Yu, r), "Unknown curve " + r),
    (r = Yu[r])),
    r instanceof Yu.PresetCurve && (r = { curve: r }),
    (this.curve = r.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = r.curve.g),
    this.g.precompute(r.curve.n.bitLength() + 1),
    (this.hash = r.hash || r.curve.hash);
}
var jO = ui;
(ui.prototype.keyPair = function (r) {
  return new Id(this, r);
}),
  (ui.prototype.keyFromPrivate = function (r, e) {
    return Id.fromPrivate(this, r, e);
  }),
  (ui.prototype.keyFromPublic = function (r, e) {
    return Id.fromPublic(this, r, e);
  }),
  (ui.prototype.genKeyPair = function (r) {
    r || (r = {});
    for (
      var e = new jv({
          hash: this.hash,
          pers: r.pers,
          persEnc: r.persEnc || "utf8",
          entropy: r.entropy || qO(this.hash.hmacStrength),
          entropyEnc: (r.entropy && r.entropyEnc) || "utf8",
          nonce: this.n.toArray(),
        }),
        t = this.n.byteLength(),
        i = this.n.sub(new De(2));
      ;

    ) {
      var n = new De(e.generate(t));
      if (!(n.cmp(i) > 0)) return n.iaddn(1), this.keyFromPrivate(n);
    }
  }),
  (ui.prototype._truncateToN = function (r, e) {
    var t = r.byteLength() * 8 - this.n.bitLength();
    return (
      t > 0 && (r = r.ushrn(t)), !e && r.cmp(this.n) >= 0 ? r.sub(this.n) : r
    );
  }),
  (ui.prototype.sign = function (r, e, t, i) {
    typeof t == "object" && ((i = t), (t = null)),
      i || (i = {}),
      (e = this.keyFromPrivate(e, t)),
      (r = this._truncateToN(new De(r, 16)));
    for (
      var n = this.n.byteLength(),
        o = e.getPrivate().toArray("be", n),
        c = r.toArray("be", n),
        l = new jv({
          hash: this.hash,
          entropy: o,
          nonce: c,
          pers: i.pers,
          persEnc: i.persEnc || "utf8",
        }),
        g = this.n.sub(new De(1)),
        d = 0;
      ;
      d++
    ) {
      var y = i.k ? i.k(d) : new De(l.generate(this.n.byteLength()));
      if (
        ((y = this._truncateToN(y, !0)), !(y.cmpn(1) <= 0 || y.cmp(g) >= 0))
      ) {
        var v = this.g.mul(y);
        if (!v.isInfinity()) {
          var A = v.getX(),
            E = A.umod(this.n);
          if (E.cmpn(0) !== 0) {
            var P = y.invm(this.n).mul(E.mul(e.getPrivate()).iadd(r));
            if (((P = P.umod(this.n)), P.cmpn(0) !== 0)) {
              var N = (v.getY().isOdd() ? 1 : 0) | (A.cmp(E) !== 0 ? 2 : 0);
              return (
                i.canonical &&
                  P.cmp(this.nh) > 0 &&
                  ((P = this.n.sub(P)), (N ^= 1)),
                new $u({ r: E, s: P, recoveryParam: N })
              );
            }
          }
        }
      }
    }
  }),
  (ui.prototype.verify = function (r, e, t, i) {
    (r = this._truncateToN(new De(r, 16))),
      (t = this.keyFromPublic(t, i)),
      (e = new $u(e, "hex"));
    var n = e.r,
      o = e.s;
    if (
      n.cmpn(1) < 0 ||
      n.cmp(this.n) >= 0 ||
      o.cmpn(1) < 0 ||
      o.cmp(this.n) >= 0
    )
      return !1;
    var c = o.invm(this.n),
      l = c.mul(r).umod(this.n),
      g = c.mul(n).umod(this.n),
      d;
    return this.curve._maxwellTrick
      ? ((d = this.g.jmulAdd(l, t.getPublic(), g)),
        d.isInfinity() ? !1 : d.eqXToP(n))
      : ((d = this.g.mulAdd(l, t.getPublic(), g)),
        d.isInfinity() ? !1 : d.getX().umod(this.n).cmp(n) === 0);
  }),
  (ui.prototype.recoverPubKey = function (r, e, t, i) {
    kw((3 & t) === t, "The recovery param is more than two bits"),
      (e = new $u(e, i));
    var n = this.n,
      o = new De(r),
      c = e.r,
      l = e.s,
      g = t & 1,
      d = t >> 1;
    if (c.cmp(this.curve.p.umod(this.curve.n)) >= 0 && d)
      throw new Error("Unable to find sencond key candinate");
    d
      ? (c = this.curve.pointFromX(c.add(this.curve.n), g))
      : (c = this.curve.pointFromX(c, g));
    var y = e.r.invm(n),
      v = n.sub(o).mul(y).umod(n),
      A = l.mul(y).umod(n);
    return this.g.mulAdd(v, c, A);
  }),
  (ui.prototype.getKeyRecoveryParam = function (r, e, t, i) {
    if (((e = new $u(e, i)), e.recoveryParam !== null)) return e.recoveryParam;
    for (var n = 0; n < 4; n++) {
      var o;
      try {
        o = this.recoverPubKey(r, e, n);
      } catch {
        continue;
      }
      if (o.eq(t)) return n;
    }
    throw new Error("Unable to find valid recovery factor");
  });
var zO = zo(function (r, e) {
    var t = e;
    (t.version = "6.5.4"),
      (t.utils = $r),
      (t.rand = function () {
        throw new Error("unsupported");
      }),
      (t.curve = Wu),
      (t.curves = Yu),
      (t.ec = jO),
      (t.eddsa = null);
  }),
  kO = zO.ec,
  HO = "signing-key/5.7.0",
  Fd = new Nt(HO),
  Cd = null;
function Gi() {
  return Cd || (Cd = new kO("secp256k1")), Cd;
}
var Ld = class {
  constructor(e) {
    Va(this, "curve", "secp256k1"),
      Va(this, "privateKey", Er(e)),
      SR(this.privateKey) !== 32 &&
        Fd.throwArgumentError(
          "invalid private key",
          "privateKey",
          "[[ REDACTED ]]"
        );
    let t = Gi().keyFromPrivate(qt(this.privateKey));
    Va(this, "publicKey", "0x" + t.getPublic(!1, "hex")),
      Va(this, "compressedPublicKey", "0x" + t.getPublic(!0, "hex")),
      Va(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    let t = Gi().keyFromPublic(qt(this.publicKey)),
      i = Gi().keyFromPublic(qt(e));
    return "0x" + t.pub.add(i.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    let t = Gi().keyFromPrivate(qt(this.privateKey)),
      i = qt(e);
    i.length !== 32 && Fd.throwArgumentError("bad digest length", "digest", e);
    let n = t.sign(i, { canonical: !0 });
    return lw({
      recoveryParam: n.recoveryParam,
      r: $i("0x" + n.r.toString(16), 32),
      s: $i("0x" + n.s.toString(16), 32),
    });
  }
  computeSharedSecret(e) {
    let t = Gi().keyFromPrivate(qt(this.privateKey)),
      i = Gi().keyFromPublic(qt(Hw(e)));
    return $i("0x" + t.derive(i.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
};
function KO(r, e) {
  let t = lw(e),
    i = { r: qt(t.r), s: qt(t.s) };
  return "0x" + Gi().recoverPubKey(qt(r), i, t.recoveryParam).encode("hex", !1);
}
function Hw(r, e) {
  let t = qt(r);
  if (t.length === 32) {
    let i = new Ld(t);
    return e ? "0x" + Gi().keyFromPrivate(t).getPublic(!0, "hex") : i.publicKey;
  } else {
    if (t.length === 33)
      return e ? Er(t) : "0x" + Gi().keyFromPublic(t).getPublic(!1, "hex");
    if (t.length === 65)
      return e ? "0x" + Gi().keyFromPublic(t).getPublic(!0, "hex") : Er(t);
  }
  return Fd.throwArgumentError(
    "invalid public or private key",
    "key",
    "[REDACTED]"
  );
}
var VO = "transactions/5.7.0";
new Nt(VO);
var kv;
(function (r) {
  (r[(r.legacy = 0)] = "legacy"),
    (r[(r.eip2930 = 1)] = "eip2930"),
    (r[(r.eip1559 = 2)] = "eip1559");
})(kv || (kv = {}));
function GO(r) {
  let e = Hw(r);
  return rC(Rv(Kd(Rv(e, 1)), 12));
}
function $O(r, e) {
  return GO(KO(qt(r), e));
}
var JO = "https://rpc.walletconnect.com/v1";
function WO(r, e, t, i, n, o) {
  return R(this, null, function* () {
    switch (t.t) {
      case "eip191":
        return YO(r, e, t.s);
      case "eip1271":
        return yield QO(r, e, t.s, i, n, o);
      default:
        throw new Error(
          `verifySignature failed: Attempted to verify CacaoSignature with unknown type: ${t.t}`
        );
    }
  });
}
function YO(r, e, t) {
  return $O(Ew(e), t).toLowerCase() === r.toLowerCase();
}
function QO(r, e, t, i, n, o) {
  return R(this, null, function* () {
    try {
      let c = "0x1626ba7e",
        l = "0000000000000000000000000000000000000000000000000000000000000040",
        g = "0000000000000000000000000000000000000000000000000000000000000041",
        d = t.substring(2),
        y = Ew(e).substring(2),
        v = c + y + l + g + d,
        A = yield fetch(`${o || JO}/?chainId=${i}&projectId=${n}`, {
          mSOLod: "POST",
          body: JSON.stringify({
            id: XO(),
            jsonrpc: "2.0",
            mSOLod: "SOL_call",
            params: [{ to: r, data: v }, "latest"],
          }),
        }),
        { result: E } = yield A.json();
      return E ? E.slice(0, c.length).toLowerCase() === c.toLowerCase() : !1;
    } catch (c) {
      return console.error("isValidEip1271Signature: ", c), !1;
    }
  });
}
function XO() {
  return Date.now() + Math.floor(Math.random() * 1e3);
}
var ZO = Object.defineProperty,
  eP = Object.defineProperties,
  tP = Object.getOwnPropertyDescriptors,
  Hv = Object.getOwnPropertySymbols,
  rP = Object.prototype.hasOwnProperty,
  iP = Object.prototype.propertyIsEnumerable,
  Kv = (r, e, t) =>
    e in r
      ? ZO(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  nP = (r, e) => {
    for (var t in e || (e = {})) rP.call(e, t) && Kv(r, t, e[t]);
    if (Hv) for (var t of Hv(e)) iP.call(e, t) && Kv(r, t, e[t]);
    return r;
  },
  sP = (r, e) => eP(r, tP(e)),
  oP = "did:pkh:",
  Wd = (r) => r?.split(":"),
  Kw = (r) => {
    let e = r && Wd(r);
    if (e) return r.includes(oP) ? e[3] : e[1];
  },
  Yd = (r) => {
    let e = r && Wd(r);
    if (e) return e[2] + ":" + e[3];
  },
  nc = (r) => {
    let e = r && Wd(r);
    if (e) return e.pop();
  };
function Qd(r) {
  return R(this, null, function* () {
    let { cacao: e, projectId: t } = r,
      { s: i, p: n } = e,
      o = Xd(n, n.iss),
      c = nc(n.iss);
    return yield WO(c, o, i, Kw(n.iss), t);
  });
}
var Xd = (r, e) => {
  let t = `${r.domain} wants you to sign in with your SOL account:`,
    i = nc(e);
  if (!r.aud && !r.uri)
    throw new Error(
      "Either `aud` or `uri` is required to construct the message"
    );
  let n = r.statement || void 0,
    o = `URI: ${r.aud || r.uri}`,
    c = `Version: ${r.version}`,
    l = `Chain ID: ${Kw(e)}`,
    g = `Nonce: ${r.nonce}`,
    d = `Issued At: ${r.iat}`,
    y = r.exp ? `Expiration Time: ${r.exp}` : void 0,
    v = r.nbf ? `Not Before: ${r.nbf}` : void 0,
    A = r.requestId ? `Request ID: ${r.requestId}` : void 0,
    E = r.resources
      ? `Resources:${r.resources
          .map(
            (N) => `
- ${N}`
          )
          .join("")}`
      : void 0,
    P = sc(r.resources);
  if (P) {
    let N = Za(P);
    n = dP(n, N);
  }
  return [t, i, "", n, "", o, c, l, g, d, y, v, A, E].filter((N) => N != null)
    .join(`
`);
};
function aP(r) {
  return Buffer.from(JSON.stringify(r)).toString("base64");
}
function cP(r) {
  return JSON.parse(Buffer.from(r, "base64").toString("utf-8"));
}
function Ts(r) {
  if (!r) throw new Error("No recap provided, value is undefined");
  if (!r.att) throw new Error("No `att` property found");
  let e = Object.keys(r.att);
  if (!(e != null && e.length))
    throw new Error("No resources found in `att` property");
  e.forEach((t) => {
    let i = r.att[t];
    if (Array.isArray(i)) throw new Error(`Resource must be an object: ${t}`);
    if (typeof i != "object")
      throw new Error(`Resource must be an object: ${t}`);
    if (!Object.keys(i).length)
      throw new Error(`Resource object is empty: ${t}`);
    Object.keys(i).forEach((n) => {
      let o = i[n];
      if (!Array.isArray(o))
        throw new Error(
          `Ability limits ${n} must be an array of objects, found: ${o}`
        );
      if (!o.length)
        throw new Error(
          `Value of ${n} is empty array, must be an array with objects`
        );
      o.forEach((c) => {
        if (typeof c != "object")
          throw new Error(
            `Ability limits (${n}) must be an array of objects, found: ${c}`
          );
      });
    });
  });
}
function uP(r, e, t, i = {}) {
  return t?.sort((n, o) => n.localeCompare(o)), { att: { [r]: hP(e, t, i) } };
}
function hP(r, e, t = {}) {
  e = e?.sort((n, o) => n.localeCompare(o));
  let i = e.map((n) => ({ [`${r}/${n}`]: [t] }));
  return Object.assign({}, ...i);
}
function Vw(r) {
  return Ts(r), `urn:recap:${aP(r).replace(/=/g, "")}`;
}
function Za(r) {
  let e = cP(r.replace("urn:recap:", ""));
  return Ts(e), e;
}
function Gw(r, e, t) {
  let i = uP(r, e, t);
  return Vw(i);
}
function lP(r) {
  return r && r.includes("urn:recap:");
}
function $w(r, e) {
  let t = Za(r),
    i = Za(e),
    n = fP(t, i);
  return Vw(n);
}
function fP(r, e) {
  Ts(r), Ts(e);
  let t = Object.keys(r.att)
      .concat(Object.keys(e.att))
      .sort((n, o) => n.localeCompare(o)),
    i = { att: {} };
  return (
    t.forEach((n) => {
      var o, c;
      Object.keys(((o = r.att) == null ? void 0 : o[n]) || {})
        .concat(Object.keys(((c = e.att) == null ? void 0 : c[n]) || {}))
        .sort((l, g) => l.localeCompare(g))
        .forEach((l) => {
          var g, d;
          i.att[n] = sP(nP({}, i.att[n]), {
            [l]:
              ((g = r.att[n]) == null ? void 0 : g[l]) ||
              ((d = e.att[n]) == null ? void 0 : d[l]),
          });
        });
    }),
    i
  );
}
function dP(r = "", e) {
  Ts(e);
  let t =
    "I further authorize the stated URI to perform the following actions on my behalf: ";
  if (r.includes(t)) return r;
  let i = [],
    n = 0;
  Object.keys(e.att).forEach((l) => {
    let g = Object.keys(e.att[l]).map((v) => ({
      ability: v.split("/")[0],
      action: v.split("/")[1],
    }));
    g.sort((v, A) => v.action.localeCompare(A.action));
    let d = {};
    g.forEach((v) => {
      d[v.ability] || (d[v.ability] = []), d[v.ability].push(v.action);
    });
    let y = Object.keys(d).map(
      (v) => (n++, `(${n}) '${v}': '${d[v].join("', '")}' for '${l}'.`)
    );
    i.push(y.join(", ").replace(".,", "."));
  });
  let o = i.join(" "),
    c = `${t}${o}`;
  return `${r ? r + " " : ""}${c}`;
}
function Zd(r) {
  var e;
  let t = Za(r);
  Ts(t);
  let i = (e = t.att) == null ? void 0 : e.eip155;
  return i ? Object.keys(i).map((n) => n.split("/")[1]) : [];
}
function ep(r) {
  let e = Za(r);
  Ts(e);
  let t = [];
  return (
    Object.values(e.att).forEach((i) => {
      Object.values(i).forEach((n) => {
        var o;
        (o = n?.[0]) != null && o.chains && t.push(n[0].chains);
      });
    }),
    [...new Set(t.flat())]
  );
}
function sc(r) {
  if (!r) return;
  let e = r?.[r.length - 1];
  return lP(e) ? e : void 0;
}
var Jw = "base10",
  pr = "base16",
  Ud = "base64pad",
  tp = "utf8",
  Ww = 0,
  Si = 1,
  pP = 0,
  Vv = 1,
  Bd = 12,
  rp = 32;
function Yw() {
  let r = ih.generateKeyPair();
  return { privateKey: $t(r.secretKey, pr), publicKey: $t(r.publicKey, pr) };
}
function oh() {
  let r = (0, jd.randomBytes)(rp);
  return $t(r, pr);
}
function Qw(r, e) {
  let t = ih.sharedKey(ir(r, pr), ir(e, pr), !0),
    i = new Xv.HKDF(ec.SHA256, t).expand(rp);
  return $t(i, pr);
}
function ko(r) {
  let e = (0, ec.hash)(ir(r, pr));
  return $t(e, pr);
}
function Un(r) {
  let e = (0, ec.hash)(ir(r, tp));
  return $t(e, pr);
}
function gP(r) {
  return ir(`${r}`, Jw);
}
function Ho(r) {
  return Number($t(r, Jw));
}
function Xw(r) {
  let e = gP(typeof r.type < "u" ? r.type : Ww);
  if (Ho(e) === Si && typeof r.senderPublicKey > "u")
    throw new Error("Missing sender public key for type 1 envelope");
  let t = typeof r.senderPublicKey < "u" ? ir(r.senderPublicKey, pr) : void 0,
    i = typeof r.iv < "u" ? ir(r.iv, pr) : (0, jd.randomBytes)(Bd),
    n = new qd.ChaCha20Poly1305(ir(r.symKey, pr)).seal(i, ir(r.message, tp));
  return mP({ type: e, sealed: n, iv: i, senderPublicKey: t });
}
function Zw(r) {
  let e = new qd.ChaCha20Poly1305(ir(r.symKey, pr)),
    { sealed: t, iv: i } = oc(r.encoded),
    n = e.open(i, t);
  if (n === null) throw new Error("Failed to decrypt");
  return $t(n, tp);
}
function mP(r) {
  if (Ho(r.type) === Si) {
    if (typeof r.senderPublicKey > "u")
      throw new Error("Missing sender public key for type 1 envelope");
    return $t(So([r.type, r.senderPublicKey, r.iv, r.sealed]), Ud);
  }
  return $t(So([r.type, r.iv, r.sealed]), Ud);
}
function oc(r) {
  let e = ir(r, Ud),
    t = e.slice(pP, Vv),
    i = Vv;
  if (Ho(t) === Si) {
    let l = i + rp,
      g = l + Bd,
      d = e.slice(i, l),
      y = e.slice(l, g),
      v = e.slice(g);
    return { type: t, sealed: v, iv: y, senderPublicKey: d };
  }
  let n = i + Bd,
    o = e.slice(i, n),
    c = e.slice(n);
  return { type: t, sealed: c, iv: o };
}
function eb(r, e) {
  let t = oc(r);
  return ip({
    type: Ho(t.type),
    senderPublicKey:
      typeof t.senderPublicKey < "u" ? $t(t.senderPublicKey, pr) : void 0,
    receiverPublicKey: e?.receiverPublicKey,
  });
}
function ip(r) {
  let e = r?.type || Ww;
  if (e === Si) {
    if (typeof r?.senderPublicKey > "u")
      throw new Error("missing sender public key");
    if (typeof r?.receiverPublicKey > "u")
      throw new Error("missing receiver public key");
  }
  return {
    type: e,
    senderPublicKey: r?.senderPublicKey,
    receiverPublicKey: r?.receiverPublicKey,
  };
}
function np(r) {
  return (
    r.type === Si &&
    typeof r.senderPublicKey == "string" &&
    typeof r.receiverPublicKey == "string"
  );
}
var yP = "irn";
function ah(r) {
  return r?.relay || { protocol: yP };
}
function Ko(r) {
  let e = vv[r];
  if (typeof e > "u") throw new Error(`Relay Protocol not supported: ${r}`);
  return e;
}
var vP = Object.defineProperty,
  wP = Object.defineProperties,
  bP = Object.getOwnPropertyDescriptors,
  Gv = Object.getOwnPropertySymbols,
  _P = Object.prototype.hasOwnProperty,
  EP = Object.prototype.propertyIsEnumerable,
  $v = (r, e, t) =>
    e in r
      ? vP(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Jv = (r, e) => {
    for (var t in e || (e = {})) _P.call(e, t) && $v(r, t, e[t]);
    if (Gv) for (var t of Gv(e)) EP.call(e, t) && $v(r, t, e[t]);
    return r;
  },
  AP = (r, e) => wP(r, bP(e));
function SP(r, e = "-") {
  let t = {},
    i = "relay" + e;
  return (
    Object.keys(r).forEach((n) => {
      if (n.startsWith(i)) {
        let o = n.replace(i, ""),
          c = r[n];
        t[o] = c;
      }
    }),
    t
  );
}
function sp(r) {
  (r = r.includes("wc://") ? r.replace("wc://", "") : r),
    (r = r.includes("wc:") ? r.replace("wc:", "") : r);
  let e = r.indexOf(":"),
    t = r.indexOf("?") !== -1 ? r.indexOf("?") : void 0,
    i = r.substring(0, e),
    n = r.substring(e + 1, t).split("@"),
    o = typeof t < "u" ? r.substring(t) : "",
    c = Lo.parse(o),
    l = typeof c.mSOLods == "string" ? c.mSOLods.split(",") : void 0;
  return {
    protocol: i,
    topic: xP(n[0]),
    version: parseInt(n[1], 10),
    symKey: c.symKey,
    relay: SP(c),
    mSOLods: l,
    expiryTimestamp: c.expiryTimestamp
      ? parseInt(c.expiryTimestamp, 10)
      : void 0,
  };
}
function xP(r) {
  return r.startsWith("//") ? r.substring(2) : r;
}
function IP(r, e = "-") {
  let t = "relay",
    i = {};
  return (
    Object.keys(r).forEach((n) => {
      let o = t + e + n;
      r[n] && (i[o] = r[n]);
    }),
    i
  );
}
function tb(r) {
  return (
    `${r.protocol}:${r.topic}@${r.version}?` +
    Lo.stringify(
      Jv(
        AP(Jv({ symKey: r.symKey }, IP(r.relay)), {
          expiryTimestamp: r.expiryTimestamp,
        }),
        r.mSOLods ? { mSOLods: r.mSOLods.join(",") } : {}
      )
    )
  );
}
function Vo(r) {
  let e = [];
  return (
    r.forEach((t) => {
      let [i, n] = t.split(":");
      e.push(`${i}:${n}`);
    }),
    e
  );
}
function DP(r) {
  let e = [];
  return (
    Object.values(r).forEach((t) => {
      e.push(...Vo(t.accounts));
    }),
    e
  );
}
function RP(r, e) {
  let t = [];
  return (
    Object.values(r).forEach((i) => {
      Vo(i.accounts).includes(e) && t.push(...i.mSOLods);
    }),
    t
  );
}
function CP(r, e) {
  let t = [];
  return (
    Object.values(r).forEach((i) => {
      Vo(i.accounts).includes(e) && t.push(...i.events);
    }),
    t
  );
}
function ch(r) {
  return r.includes(":");
}
function Go(r) {
  return ch(r) ? r.split(":")[0] : r;
}
function OP(r) {
  let e = {};
  return (
    r?.forEach((t) => {
      let [i, n] = t.split(":");
      e[i] || (e[i] = { accounts: [], chains: [], events: [] }),
        e[i].accounts.push(t),
        e[i].chains.push(`${i}:${n}`);
    }),
    e
  );
}
function op(r, e) {
  e = e.map((i) => i.replace("did:pkh:", ""));
  let t = OP(e);
  for (let [i, n] of Object.entries(t))
    n.mSOLods ? (n.mSOLods = rc(n.mSOLods, r)) : (n.mSOLods = r),
      (n.events = ["chainChanged", "accountsChanged"]);
  return t;
}
var PP = {
    INVALID_MSOLOD: { message: "Invalid mSOLod.", code: 1001 },
    INVALID_EVENT: { message: "Invalid event.", code: 1002 },
    INVALID_UPDATE_REQUEST: { message: "Invalid update request.", code: 1003 },
    INVALID_EXTEND_REQUEST: { message: "Invalid extend request.", code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: {
      message: "Invalid session settle request.",
      code: 1005,
    },
    UNAUTHORIZED_MSOLOD: { message: "Unauthorized mSOLod.", code: 3001 },
    UNAUTHORIZED_EVENT: { message: "Unauthorized event.", code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: {
      message: "Unauthorized update request.",
      code: 3003,
    },
    UNAUTHORIZED_EXTEND_REQUEST: {
      message: "Unauthorized extend request.",
      code: 3004,
    },
    USER_REJECTED: { message: "User rejected.", code: 5e3 },
    USER_REJECTED_CHAINS: { message: "User rejected chains.", code: 5001 },
    USER_REJECTED_MSOLODS: { message: "User rejected mSOLods.", code: 5002 },
    USER_REJECTED_EVENTS: { message: "User rejected events.", code: 5003 },
    UNSUPPORTED_CHAINS: { message: "Unsupported chains.", code: 5100 },
    UNSUPPORTED_MSOLODS: { message: "Unsupported mSOLods.", code: 5101 },
    UNSUPPORTED_EVENTS: { message: "Unsupported events.", code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: "Unsupported accounts.", code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: {
      message: "Unsupported namespace key.",
      code: 5104,
    },
    USER_DISCONNECTED: { message: "User disconnected.", code: 6e3 },
    SESSION_SETTLEMENT_FAILED: {
      message: "Session settlement failed.",
      code: 7e3,
    },
    WC_MSOLOD_UNSUPPORTED: { message: "Unsupported wc_ mSOLod.", code: 10001 },
  },
  MP = {
    NOT_INITIALIZED: { message: "Not initialized.", code: 1 },
    NO_MATCHING_KEY: { message: "No matching key.", code: 2 },
    RESTORE_WILL_OVERRIDE: { message: "Restore will override.", code: 3 },
    RESUBSCRIBED: { message: "Resubscribed.", code: 4 },
    MISSING_OR_INVALID: { message: "Missing or invalid.", code: 5 },
    EXPIRED: { message: "Expired.", code: 6 },
    UNKNOWN_TYPE: { message: "Unknown type.", code: 7 },
    MISMATCHED_TOPIC: { message: "Mismatched topic.", code: 8 },
    NON_CONFORMING_NAMESPACES: {
      message: "Non conforming namespaces.",
      code: 9,
    },
  };
function de(r, e) {
  let { message: t, code: i } = MP[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function ke(r, e) {
  let { message: t, code: i } = PP[r];
  return { message: e ? `${t} ${e}` : t, code: i };
}
function Jr(r, e) {
  return Array.isArray(r) ? (typeof e < "u" && r.length ? r.every(e) : !0) : !1;
}
function qs(r) {
  return Object.getPrototypeOf(r) === Object.prototype && Object.keys(r).length;
}
function sr(r) {
  return typeof r > "u";
}
function Ft(r, e) {
  return e && sr(r) ? !0 : typeof r == "string" && !!r.trim().length;
}
function ap(r, e) {
  return e && sr(r) ? !0 : typeof r == "number" && !isNaN(r);
}
function rb(r, e) {
  let { requiredNamespaces: t } = e,
    i = Object.keys(r.namespaces),
    n = Object.keys(t),
    o = !0;
  return Ms(n, i)
    ? (i.forEach((c) => {
        let { accounts: l, mSOLods: g, events: d } = r.namespaces[c],
          y = Vo(l),
          v = t[c];
        (!Ms(Zv(c, v), y) || !Ms(v.mSOLods, g) || !Ms(v.events, d)) && (o = !1);
      }),
      o)
    : !1;
}
function rh(r) {
  return Ft(r, !1) && r.includes(":") ? r.split(":").length === 2 : !1;
}
function NP(r) {
  if (Ft(r, !1) && r.includes(":")) {
    let e = r.split(":");
    if (e.length === 3) {
      let t = e[0] + ":" + e[1];
      return !!e[2] && rh(t);
    }
  }
  return !1;
}
function ib(r) {
  if (Ft(r, !1))
    try {
      return typeof new URL(r) < "u";
    } catch {
      return !1;
    }
  return !1;
}
function nb(r) {
  var e;
  return (e = r?.proposer) == null ? void 0 : e.publicKey;
}
function sb(r) {
  return r?.topic;
}
function ob(r, e) {
  let t = null;
  return (
    Ft(r?.publicKey, !1) ||
      (t = de(
        "MISSING_OR_INVALID",
        `${e} controller public key should be a string`
      )),
    t
  );
}
function Wv(r) {
  let e = !0;
  return Jr(r) ? r.length && (e = r.every((t) => Ft(t, !1))) : (e = !1), e;
}
function TP(r, e, t) {
  let i = null;
  return (
    Jr(e) && e.length
      ? e.forEach((n) => {
          i ||
            rh(n) ||
            (i = ke(
              "UNSUPPORTED_CHAINS",
              `${t}, chain ${n} should be a string and conform to "namespace:chainId" format`
            ));
        })
      : rh(r) ||
        (i = ke(
          "UNSUPPORTED_CHAINS",
          `${t}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`
        )),
    i
  );
}
function FP(r, e, t) {
  let i = null;
  return (
    Object.entries(r).forEach(([n, o]) => {
      if (i) return;
      let c = TP(n, Zv(n, o), `${e} ${t}`);
      c && (i = c);
    }),
    i
  );
}
function LP(r, e) {
  let t = null;
  return (
    Jr(r)
      ? r.forEach((i) => {
          t ||
            NP(i) ||
            (t = ke(
              "UNSUPPORTED_ACCOUNTS",
              `${e}, account ${i} should be a string and conform to "namespace:chainId:address" format`
            ));
        })
      : (t = ke(
          "UNSUPPORTED_ACCOUNTS",
          `${e}, accounts should be an array of strings conforming to "namespace:chainId:address" format`
        )),
    t
  );
}
function UP(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      let n = LP(i?.accounts, `${e} namespace`);
      n && (t = n);
    }),
    t
  );
}
function BP(r, e) {
  let t = null;
  return (
    Wv(r?.mSOLods)
      ? Wv(r?.events) ||
        (t = ke(
          "UNSUPPORTED_EVENTS",
          `${e}, events should be an array of strings or empty array for no events`
        ))
      : (t = ke(
          "UNSUPPORTED_MSOLODS",
          `${e}, mSOLods should be an array of strings or empty array for no mSOLods`
        )),
    t
  );
}
function ab(r, e) {
  let t = null;
  return (
    Object.values(r).forEach((i) => {
      if (t) return;
      let n = BP(i, `${e}, namespace`);
      n && (t = n);
    }),
    t
  );
}
function cb(r, e, t) {
  let i = null;
  if (r && qs(r)) {
    let n = ab(r, e);
    n && (i = n);
    let o = FP(r, e, t);
    o && (i = o);
  } else
    i = de("MISSING_OR_INVALID", `${e}, ${t} should be an object with data`);
  return i;
}
function uh(r, e) {
  let t = null;
  if (r && qs(r)) {
    let i = ab(r, e);
    i && (t = i);
    let n = UP(r, e);
    n && (t = n);
  } else
    t = de(
      "MISSING_OR_INVALID",
      `${e}, namespaces should be an object with data`
    );
  return t;
}
function cp(r) {
  return Ft(r.protocol, !0);
}
function ub(r, e) {
  let t = !1;
  return (
    e && !r
      ? (t = !0)
      : r &&
        Jr(r) &&
        r.length &&
        r.forEach((i) => {
          t = cp(i);
        }),
    t
  );
}
function hb(r) {
  return typeof r == "number";
}
function gr(r) {
  return typeof r < "u" && typeof r !== null;
}
function lb(r) {
  return !(
    !r ||
    typeof r != "object" ||
    !r.code ||
    !ap(r.code, !1) ||
    !r.message ||
    !Ft(r.message, !1)
  );
}
function fb(r) {
  return !(sr(r) || !Ft(r.mSOLod, !1));
}
function db(r) {
  return !(
    sr(r) ||
    (sr(r.result) && sr(r.error)) ||
    !ap(r.id, !1) ||
    !Ft(r.jsonrpc, !1)
  );
}
function pb(r) {
  return !(sr(r) || !Ft(r.name, !1));
}
function up(r, e) {
  return !(!rh(e) || !DP(r).includes(e));
}
function gb(r, e, t) {
  return Ft(t, !1) ? RP(r, e).includes(t) : !1;
}
function mb(r, e, t) {
  return Ft(t, !1) ? CP(r, e).includes(t) : !1;
}
function hp(r, e, t) {
  let i = null,
    n = qP(r),
    o = jP(e),
    c = Object.keys(n),
    l = Object.keys(o),
    g = Yv(Object.keys(r)),
    d = Yv(Object.keys(e)),
    y = g.filter((v) => !d.includes(v));
  return (
    y.length &&
      (i = de(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces keys don't satisfy requiredNamespaces.
      Required: ${y.toString()}
      Received: ${Object.keys(e).toString()}`
      )),
    Ms(c, l) ||
      (i = de(
        "NON_CONFORMING_NAMESPACES",
        `${t} namespaces chains don't satisfy required namespaces.
      Required: ${c.toString()}
      Approved: ${l.toString()}`
      )),
    Object.keys(e).forEach((v) => {
      if (!v.includes(":") || i) return;
      let A = Vo(e[v].accounts);
      A.includes(v) ||
        (i = de(
          "NON_CONFORMING_NAMESPACES",
          `${t} namespaces accounts don't satisfy namespace accounts for ${v}
        Required: ${v}
        Approved: ${A.toString()}`
        ));
    }),
    c.forEach((v) => {
      i ||
        (Ms(n[v].mSOLods, o[v].mSOLods)
          ? Ms(n[v].events, o[v].events) ||
            (i = de(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces events don't satisfy namespace events for ${v}`
            ))
          : (i = de(
              "NON_CONFORMING_NAMESPACES",
              `${t} namespaces mSOLods don't satisfy namespace mSOLods for ${v}`
            )));
    }),
    i
  );
}
function qP(r) {
  let e = {};
  return (
    Object.keys(r).forEach((t) => {
      var i;
      t.includes(":")
        ? (e[t] = r[t])
        : (i = r[t].chains) == null ||
          i.forEach((n) => {
            e[n] = { mSOLods: r[t].mSOLods, events: r[t].events };
          });
    }),
    e
  );
}
function Yv(r) {
  return [...new Set(r.map((e) => (e.includes(":") ? e.split(":")[0] : e)))];
}
function jP(r) {
  let e = {};
  return (
    Object.keys(r).forEach((t) => {
      t.includes(":")
        ? (e[t] = r[t])
        : Vo(r[t].accounts)?.forEach((n) => {
            e[n] = {
              accounts: r[t].accounts.filter((o) => o.includes(`${n}:`)),
              mSOLods: r[t].mSOLods,
              events: r[t].events,
            };
          });
    }),
    e
  );
}
function yb(r, e) {
  return ap(r, !1) && r <= e.max && r >= e.min;
}
function lp() {
  let r = tc();
  return new Promise((e) => {
    switch (r) {
      case Tr.browser:
        e(zP());
        break;
      case Tr.reactNative:
        e(kP());
        break;
      case Tr.node:
        e(HP());
        break;
      default:
        e(!0);
    }
  });
}
function zP() {
  return hs() && navigator?.onLine;
}
function kP() {
  return R(this, null, function* () {
    return Ls() && typeof global < "u" && global != null && global.NetInfo
      ? (yield global == null ? void 0 : global.NetInfo.fetch())?.isConnected
      : !0;
  });
}
function HP() {
  return !0;
}
function vb(r) {
  switch (tc()) {
    case Tr.browser:
      KP(r);
      break;
    case Tr.reactNative:
      VP(r);
      break;
    case Tr.node:
      break;
  }
}
function KP(r) {
  !Ls() &&
    hs() &&
    (window.addEventListener("online", () => r(!0)),
    window.addEventListener("offline", () => r(!1)));
}
function VP(r) {
  Ls() &&
    typeof global < "u" &&
    global != null &&
    global.NetInfo &&
    global?.NetInfo.addEventListener((e) => r(e?.isConnected));
}
var Od = {},
  cs = class {
    static get(e) {
      return Od[e];
    }
    static set(e, t) {
      Od[e] = t;
    }
    static delete(e) {
      delete Od[e];
    }
  };
var Hn = Je(xn());
var GP =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  $P =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  JP = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function WP(r, e) {
  if (
    r === "__proto__" ||
    (r === "constructor" && e && typeof e == "object" && "prototype" in e)
  ) {
    YP(r);
    return;
  }
  return e;
}
function YP(r) {
  console.warn(`[destr] Dropping "${r}" key to prevent prototype pollution.`);
}
function ac(r, e = {}) {
  if (typeof r != "string") return r;
  let t = r.trim();
  if (r[0] === '"' && r.endsWith('"') && !r.includes("\\"))
    return t.slice(1, -1);
  if (t.length <= 9) {
    let i = t.toLowerCase();
    if (i === "true") return !0;
    if (i === "false") return !1;
    if (i === "undefined") return;
    if (i === "null") return null;
    if (i === "nan") return Number.NaN;
    if (i === "infinity") return Number.POSITIVE_INFINITY;
    if (i === "-infinity") return Number.NEGATIVE_INFINITY;
  }
  if (!JP.test(r)) {
    if (e.strict) throw new SyntaxError("[destr] Invalid JSON");
    return r;
  }
  try {
    if (GP.test(r) || $P.test(r)) {
      if (e.strict) throw new Error("[destr] Possible prototype pollution");
      return JSON.parse(r, WP);
    }
    return JSON.parse(r);
  } catch (i) {
    if (e.strict) throw i;
    return r;
  }
}
function QP(r) {
  return !r || typeof r.then != "function" ? Promise.resolve(r) : r;
}
function Wt(r, ...e) {
  try {
    return QP(r(...e));
  } catch (t) {
    return Promise.reject(t);
  }
}
function XP(r) {
  let e = typeof r;
  return r === null || (e !== "object" && e !== "function");
}
function ZP(r) {
  let e = Object.getPrototypeOf(r);
  return !e || e.isPrototypeOf(Object);
}
function cc(r) {
  if (XP(r)) return String(r);
  if (ZP(r) || Array.isArray(r)) return JSON.stringify(r);
  if (typeof r.toJSON == "function") return cc(r.toJSON());
  throw new Error("[unstorage] Cannot stringify value!");
}
function wb() {
  if (typeof Buffer === void 0)
    throw new TypeError("[unstorage] Buffer is not supported!");
}
var fp = "base64:";
function bb(r) {
  if (typeof r == "string") return r;
  wb();
  let e = Buffer.from(r).toString("base64");
  return fp + e;
}
function _b(r) {
  return typeof r != "string" || !r.startsWith(fp)
    ? r
    : (wb(), Buffer.from(r.slice(fp.length), "base64"));
}
function Sr(r) {
  return r
    ? r
        .split("?")[0]
        .replace(/[/\\]/g, ":")
        .replace(/:+/g, ":")
        .replace(/^:|:$/g, "")
    : "";
}
function Eb(...r) {
  return Sr(r.join(":"));
}
function uc(r) {
  return (r = Sr(r)), r ? r + ":" : "";
}
var e7 = "memory",
  t7 = () => {
    let r = new Map();
    return {
      name: e7,
      options: {},
      hasItem(e) {
        return r.has(e);
      },
      getItem(e) {
        return r.get(e) ?? null;
      },
      getItemRaw(e) {
        return r.get(e) ?? null;
      },
      setItem(e, t) {
        r.set(e, t);
      },
      setItemRaw(e, t) {
        r.set(e, t);
      },
      removeItem(e) {
        r.delete(e);
      },
      getKeys() {
        return Array.from(r.keys());
      },
      clear() {
        r.clear();
      },
      dispose() {
        r.clear();
      },
    };
  };
function xb(r = {}) {
  let e = {
      mounts: { "": r.driver || t7() },
      mountpoints: [""],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    t = (y) => {
      for (let v of e.mountpoints)
        if (y.startsWith(v))
          return {
            base: v,
            relativeKey: y.slice(v.length),
            driver: e.mounts[v],
          };
      return { base: "", relativeKey: y, driver: e.mounts[""] };
    },
    i = (y, v) =>
      e.mountpoints
        .filter((A) => A.startsWith(y) || (v && y.startsWith(A)))
        .map((A) => ({
          relativeBase: y.length > A.length ? y.slice(A.length) : void 0,
          mountpoint: A,
          driver: e.mounts[A],
        })),
    n = (y, v) => {
      if (e.watching) {
        v = Sr(v);
        for (let A of e.watchListeners) A(y, v);
      }
    },
    o = () =>
      R(this, null, function* () {
        if (!e.watching) {
          e.watching = !0;
          for (let y in e.mounts) e.unwatch[y] = yield Ab(e.mounts[y], n, y);
        }
      }),
    c = () =>
      R(this, null, function* () {
        if (e.watching) {
          for (let y in e.unwatch) yield e.unwatch[y]();
          (e.unwatch = {}), (e.watching = !1);
        }
      }),
    l = (y, v, A) => {
      let E = new Map(),
        P = (N) => {
          let T = E.get(N.base);
          return (
            T ||
              ((T = { driver: N.driver, base: N.base, items: [] }),
              E.set(N.base, T)),
            T
          );
        };
      for (let N of y) {
        let T = typeof N == "string",
          K = Sr(T ? N : N.key),
          Z = T ? void 0 : N.value,
          J = T || !N.options ? v : Me(Me({}, v), N.options),
          G = t(K);
        P(G).items.push({
          key: K,
          value: Z,
          relativeKey: G.relativeKey,
          options: J,
        });
      }
      return Promise.all([...E.values()].map((N) => A(N))).then((N) =>
        N.flat()
      );
    },
    g = {
      hasItem(y, v = {}) {
        y = Sr(y);
        let { relativeKey: A, driver: E } = t(y);
        return Wt(E.hasItem, A, v);
      },
      getItem(y, v = {}) {
        y = Sr(y);
        let { relativeKey: A, driver: E } = t(y);
        return Wt(E.getItem, A, v).then((P) => ac(P));
      },
      getItems(y, v) {
        return l(y, v, (A) =>
          A.driver.getItems
            ? Wt(
                A.driver.getItems,
                A.items.map((E) => ({
                  key: E.relativeKey,
                  options: E.options,
                })),
                v
              ).then((E) =>
                E.map((P) => ({ key: Eb(A.base, P.key), value: ac(P.value) }))
              )
            : Promise.all(
                A.items.map((E) =>
                  Wt(A.driver.getItem, E.relativeKey, E.options).then((P) => ({
                    key: E.key,
                    value: ac(P),
                  }))
                )
              )
        );
      },
      getItemRaw(y, v = {}) {
        y = Sr(y);
        let { relativeKey: A, driver: E } = t(y);
        return E.getItemRaw
          ? Wt(E.getItemRaw, A, v)
          : Wt(E.getItem, A, v).then((P) => _b(P));
      },
      setItem(E, P) {
        return R(this, arguments, function* (y, v, A = {}) {
          if (v === void 0) return g.removeItem(y);
          y = Sr(y);
          let { relativeKey: N, driver: T } = t(y);
          T.setItem &&
            (yield Wt(T.setItem, N, cc(v), A), T.watch || n("update", y));
        });
      },
      setItems(y, v) {
        return R(this, null, function* () {
          yield l(y, v, (A) =>
            R(this, null, function* () {
              if (A.driver.setItems)
                return Wt(
                  A.driver.setItems,
                  A.items.map((E) => ({
                    key: E.relativeKey,
                    value: cc(E.value),
                    options: E.options,
                  })),
                  v
                );
              A.driver.setItem &&
                (yield Promise.all(
                  A.items.map((E) =>
                    Wt(A.driver.setItem, E.relativeKey, cc(E.value), E.options)
                  )
                ));
            })
          );
        });
      },
      setItemRaw(E, P) {
        return R(this, arguments, function* (y, v, A = {}) {
          if (v === void 0) return g.removeItem(y, A);
          y = Sr(y);
          let { relativeKey: N, driver: T } = t(y);
          if (T.setItemRaw) yield Wt(T.setItemRaw, N, v, A);
          else if (T.setItem) yield Wt(T.setItem, N, bb(v), A);
          else return;
          T.watch || n("update", y);
        });
      },
      removeItem(A) {
        return R(this, arguments, function* (y, v = {}) {
          typeof v == "boolean" && (v = { removeMeta: v }), (y = Sr(y));
          let { relativeKey: E, driver: P } = t(y);
          P.removeItem &&
            (yield Wt(P.removeItem, E, v),
            (v.removeMeta || v.removeMata) &&
              (yield Wt(P.removeItem, E + "$", v)),
            P.watch || n("remove", y));
        });
      },
      getMeta(A) {
        return R(this, arguments, function* (y, v = {}) {
          typeof v == "boolean" && (v = { nativeOnly: v }), (y = Sr(y));
          let { relativeKey: E, driver: P } = t(y),
            N = Object.create(null);
          if (
            (P.getMeta && Object.assign(N, yield Wt(P.getMeta, E, v)),
            !v.nativeOnly)
          ) {
            let T = yield Wt(P.getItem, E + "$", v).then((K) => ac(K));
            T &&
              typeof T == "object" &&
              (typeof T.atime == "string" && (T.atime = new Date(T.atime)),
              typeof T.mtime == "string" && (T.mtime = new Date(T.mtime)),
              Object.assign(N, T));
          }
          return N;
        });
      },
      setMeta(y, v, A = {}) {
        return this.setItem(y + "$", v, A);
      },
      removeMeta(y, v = {}) {
        return this.removeItem(y + "$", v);
      },
      getKeys(A) {
        return R(this, arguments, function* (y, v = {}) {
          y = uc(y);
          let E = i(y, !0),
            P = [],
            N = [];
          for (let T of E) {
            let Z = (yield Wt(T.driver.getKeys, T.relativeBase, v))
              .map((J) => T.mountpoint + Sr(J))
              .filter((J) => !P.some((G) => J.startsWith(G)));
            N.push(...Z),
              (P = [
                T.mountpoint,
                ...P.filter((J) => !J.startsWith(T.mountpoint)),
              ]);
          }
          return y
            ? N.filter((T) => T.startsWith(y) && !T.endsWith("$"))
            : N.filter((T) => !T.endsWith("$"));
        });
      },
      clear(A) {
        return R(this, arguments, function* (y, v = {}) {
          (y = uc(y)),
            yield Promise.all(
              i(y, !1).map((E) =>
                R(this, null, function* () {
                  if (E.driver.clear)
                    return Wt(E.driver.clear, E.relativeBase, v);
                  if (E.driver.removeItem) {
                    let P = yield E.driver.getKeys(E.relativeBase || "", v);
                    return Promise.all(P.map((N) => E.driver.removeItem(N, v)));
                  }
                })
              )
            );
        });
      },
      dispose() {
        return R(this, null, function* () {
          yield Promise.all(Object.values(e.mounts).map((y) => Sb(y)));
        });
      },
      watch(y) {
        return R(this, null, function* () {
          return (
            yield o(),
            e.watchListeners.push(y),
            () =>
              R(this, null, function* () {
                (e.watchListeners = e.watchListeners.filter((v) => v !== y)),
                  e.watchListeners.length === 0 && (yield c());
              })
          );
        });
      },
      unwatch() {
        return R(this, null, function* () {
          (e.watchListeners = []), yield c();
        });
      },
      mount(y, v) {
        if (((y = uc(y)), y && e.mounts[y]))
          throw new Error(`already mounted at ${y}`);
        return (
          y &&
            (e.mountpoints.push(y),
            e.mountpoints.sort((A, E) => E.length - A.length)),
          (e.mounts[y] = v),
          e.watching &&
            Promise.resolve(Ab(v, n, y))
              .then((A) => {
                e.unwatch[y] = A;
              })
              .catch(console.error),
          g
        );
      },
      unmount(y, v = !0) {
        return R(this, null, function* () {
          (y = uc(y)),
            !(!y || !e.mounts[y]) &&
              (e.watching &&
                y in e.unwatch &&
                (e.unwatch[y](), delete e.unwatch[y]),
              v && (yield Sb(e.mounts[y])),
              (e.mountpoints = e.mountpoints.filter((A) => A !== y)),
              delete e.mounts[y]);
        });
      },
      getMount(y = "") {
        y = Sr(y) + ":";
        let v = t(y);
        return { driver: v.driver, base: v.base };
      },
      getMounts(y = "", v = {}) {
        return (
          (y = Sr(y)),
          i(y, v.parents).map((E) => ({ driver: E.driver, base: E.mountpoint }))
        );
      },
    };
  return g;
}
function Ab(r, e, t) {
  return r.watch ? r.watch((i, n) => e(i, t + n)) : () => {};
}
function Sb(r) {
  return R(this, null, function* () {
    typeof r.dispose == "function" && (yield Wt(r.dispose));
  });
}
function js(r) {
  return new Promise((e, t) => {
    (r.oncomplete = r.onsuccess = () => e(r.result)),
      (r.onabort = r.onerror = () => t(r.error));
  });
}
function pp(r, e) {
  let t = indexedDB.open(r);
  t.onupgradeneeded = () => t.result.createObjectStore(e);
  let i = js(t);
  return (n, o) => i.then((c) => o(c.transaction(e, n).objectStore(e)));
}
var dp;
function hc() {
  return dp || (dp = pp("keyval-store", "keyval")), dp;
}
function gp(r, e = hc()) {
  return e("readonly", (t) => js(t.get(r)));
}
function Ib(r, e, t = hc()) {
  return t("readwrite", (i) => (i.put(e, r), js(i.transaction)));
}
function Db(r, e = hc()) {
  return e("readwrite", (t) => (t.delete(r), js(t.transaction)));
}
function Rb(r = hc()) {
  return r("readwrite", (e) => (e.clear(), js(e.transaction)));
}
function r7(r, e) {
  return (
    (r.openCursor().onsuccess = function () {
      this.result && (e(this.result), this.result.continue());
    }),
    js(r.transaction)
  );
}
function Cb(r = hc()) {
  return r("readonly", (e) => {
    if (e.getAllKeys) return js(e.getAllKeys());
    let t = [];
    return r7(e, (i) => t.push(i.key)).then(() => t);
  });
}
var i7 = (r) =>
    JSON.stringify(r, (e, t) =>
      typeof t == "bigint" ? t.toString() + "n" : t
    ),
  n7 = (r) => {
    let e =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      t = r.replace(e, '$1"$2n"$3');
    return JSON.parse(t, (i, n) =>
      typeof n == "string" && n.match(/^\d+n$/)
        ? BigInt(n.substring(0, n.length - 1))
        : n
    );
  };
function Zi(r) {
  if (typeof r != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof r}`);
  try {
    return n7(r);
  } catch {
    return r;
  }
}
function xr(r) {
  return typeof r == "string" ? r : i7(r) || "";
}
var s7 = "idb-keyval",
  o7 = (r = {}) => {
    let e = r.base && r.base.length > 0 ? `${r.base}:` : "",
      t = (o) => e + o,
      i;
    return (
      r.dbName && r.storeName && (i = pp(r.dbName, r.storeName)),
      {
        name: s7,
        options: r,
        hasItem(o) {
          return R(this, null, function* () {
            return !(typeof (yield gp(t(o), i)) > "u");
          });
        },
        getItem(o) {
          return R(this, null, function* () {
            return (yield gp(t(o), i)) ?? null;
          });
        },
        setItem(o, c) {
          return Ib(t(o), c, i);
        },
        removeItem(o) {
          return Db(t(o), i);
        },
        getKeys() {
          return Cb(i);
        },
        clear() {
          return Rb(i);
        },
      }
    );
  },
  a7 = "WALLET_CONNECT_V2_INDEXED_DB",
  c7 = "keyvaluestorage",
  yp = class {
    constructor() {
      this.indexedDb = xb({ driver: o7({ dbName: a7, storeName: c7 }) });
    }
    getKeys() {
      return R(this, null, function* () {
        return this.indexedDb.getKeys();
      });
    }
    getEntries() {
      return R(this, null, function* () {
        return (yield this.indexedDb.getItems(
          yield this.indexedDb.getKeys()
        )).map((e) => [e.key, e.value]);
      });
    }
    getItem(e) {
      return R(this, null, function* () {
        let t = yield this.indexedDb.getItem(e);
        if (t !== null) return t;
      });
    }
    setItem(e, t) {
      return R(this, null, function* () {
        yield this.indexedDb.setItem(e, xr(t));
      });
    }
    removeItem(e) {
      return R(this, null, function* () {
        yield this.indexedDb.removeItem(e);
      });
    }
  },
  mp =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  hh = { exports: {} };
(function () {
  let r;
  function e() {}
  (r = e),
    (r.prototype.getItem = function (t) {
      return this.hasOwnProperty(t) ? String(this[t]) : null;
    }),
    (r.prototype.setItem = function (t, i) {
      this[t] = String(i);
    }),
    (r.prototype.removeItem = function (t) {
      delete this[t];
    }),
    (r.prototype.clear = function () {
      let t = this;
      Object.keys(t).forEach(function (i) {
        (t[i] = void 0), delete t[i];
      });
    }),
    (r.prototype.key = function (t) {
      return (t = t || 0), Object.keys(this)[t];
    }),
    r.prototype.__defineGetter__("length", function () {
      return Object.keys(this).length;
    }),
    typeof mp < "u" && mp.localStorage
      ? (hh.exports = mp.localStorage)
      : typeof window < "u" && window.localStorage
      ? (hh.exports = window.localStorage)
      : (hh.exports = new e());
})();
function u7(r) {
  var e;
  return [r[0], Zi((e = r[1]) != null ? e : "")];
}
var vp = class {
    constructor() {
      this.localStorage = hh.exports;
    }
    getKeys() {
      return R(this, null, function* () {
        return Object.keys(this.localStorage);
      });
    }
    getEntries() {
      return R(this, null, function* () {
        return Object.entries(this.localStorage).map(u7);
      });
    }
    getItem(e) {
      return R(this, null, function* () {
        let t = this.localStorage.getItem(e);
        if (t !== null) return Zi(t);
      });
    }
    setItem(e, t) {
      return R(this, null, function* () {
        this.localStorage.setItem(e, xr(t));
      });
    }
    removeItem(e) {
      return R(this, null, function* () {
        this.localStorage.removeItem(e);
      });
    }
  },
  h7 = "wc_storage_version",
  Ob = 1,
  l7 = (r, e, t) =>
    R(void 0, null, function* () {
      let i = h7,
        n = yield e.getItem(i);
      if (n && n >= Ob) {
        t(e);
        return;
      }
      let o = yield r.getKeys();
      if (!o.length) {
        t(e);
        return;
      }
      let c = [];
      for (; o.length; ) {
        let l = o.shift();
        if (!l) continue;
        let g = l.toLowerCase();
        if (
          g.includes("wc@") ||
          g.includes("walletconnect") ||
          g.includes("wc_") ||
          g.includes("wallet_connect")
        ) {
          let d = yield r.getItem(l);
          yield e.setItem(l, d), c.push(l);
        }
      }
      yield e.setItem(i, Ob), t(e), f7(r, c);
    }),
  f7 = (r, e) =>
    R(void 0, null, function* () {
      e.length &&
        e.forEach((t) =>
          R(void 0, null, function* () {
            yield r.removeItem(t);
          })
        );
    }),
  lh = class {
    constructor() {
      (this.initialized = !1),
        (this.setInitialized = (t) => {
          (this.storage = t), (this.initialized = !0);
        });
      let e = new vp();
      this.storage = e;
      try {
        let t = new yp();
        l7(e, t, this.setInitialized);
      } catch {
        this.initialized = !0;
      }
    }
    getKeys() {
      return R(this, null, function* () {
        return yield this.initialize(), this.storage.getKeys();
      });
    }
    getEntries() {
      return R(this, null, function* () {
        return yield this.initialize(), this.storage.getEntries();
      });
    }
    getItem(e) {
      return R(this, null, function* () {
        return yield this.initialize(), this.storage.getItem(e);
      });
    }
    setItem(e, t) {
      return R(this, null, function* () {
        return yield this.initialize(), this.storage.setItem(e, t);
      });
    }
    removeItem(e) {
      return R(this, null, function* () {
        return yield this.initialize(), this.storage.removeItem(e);
      });
    }
    initialize() {
      return R(this, null, function* () {
        this.initialized ||
          (yield new Promise((e) => {
            let t = setInterval(() => {
              this.initialized && (clearInterval(t), e());
            }, 20);
          }));
      });
    }
  };
var Mb = Je(xn()),
  dh = Je(bo());
var xi = class {};
var wp = class extends xi {
    constructor(e) {
      super();
    }
  },
  Pb = dh.FIVE_SECONDS,
  $o = { pulse: "heartbeat_pulse" },
  fh = class r extends wp {
    constructor(e) {
      super(e),
        (this.events = new Mb.EventEmitter()),
        (this.interval = Pb),
        (this.interval = e?.interval || Pb);
    }
    static init(e) {
      return R(this, null, function* () {
        let t = new r(e);
        return yield t.init(), t;
      });
    }
    init() {
      return R(this, null, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    initialize() {
      return R(this, null, function* () {
        this.intervalRef = setInterval(
          () => this.pulse(),
          (0, dh.toMiliseconds)(this.interval)
        );
      });
    }
    pulse() {
      this.events.emit($o.pulse);
    }
  };
var Bn = Je(Ep()),
  zs = Je(Ep());
var x7 = { level: "info" },
  dc = "custom_context",
  Ip = 1e3 * 1024,
  Ap = class {
    constructor(e) {
      (this.nodeValue = e),
        (this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length),
        (this.next = null);
    }
    get value() {
      return this.nodeValue;
    }
    get size() {
      return this.sizeInBytes;
    }
  },
  mh = class {
    constructor(e) {
      (this.head = null),
        (this.tail = null),
        (this.lengthInNodes = 0),
        (this.maxSizeInBytes = e),
        (this.sizeInBytes = 0);
    }
    append(e) {
      let t = new Ap(e);
      if (t.size > this.maxSizeInBytes)
        throw new Error(
          `[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`
        );
      for (; this.size + t.size > this.maxSizeInBytes; ) this.shift();
      this.head
        ? (this.tail && (this.tail.next = t), (this.tail = t))
        : ((this.head = t), (this.tail = t)),
        this.lengthInNodes++,
        (this.sizeInBytes += t.size);
    }
    shift() {
      if (!this.head) return;
      let e = this.head;
      (this.head = this.head.next),
        this.head || (this.tail = null),
        this.lengthInNodes--,
        (this.sizeInBytes -= e.size);
    }
    toArray() {
      let e = [],
        t = this.head;
      for (; t !== null; ) e.push(t.value), (t = t.next);
      return e;
    }
    get length() {
      return this.lengthInNodes;
    }
    get size() {
      return this.sizeInBytes;
    }
    toOrderedArray() {
      return Array.from(this);
    }
    [Symbol.iterator]() {
      let e = this.head;
      return {
        next: () => {
          if (!e) return { done: !0, value: null };
          let t = e.value;
          return (e = e.next), { done: !1, value: t };
        },
      };
    }
  },
  yh = class {
    constructor(e, t = Ip) {
      (this.level = e ?? "error"),
        (this.levelValue = Bn.levels.values[this.level]),
        (this.MAX_LOG_SIZE_IN_BYTES = t),
        (this.logs = new mh(this.MAX_LOG_SIZE_IN_BYTES));
    }
    forwardToConsole(e, t) {
      t === Bn.levels.values.error
        ? console.error(e)
        : t === Bn.levels.values.warn
        ? console.warn(e)
        : t === Bn.levels.values.debug
        ? console.debug(e)
        : t === Bn.levels.values.trace
        ? console.trace(e)
        : console.log(e);
    }
    appendToLogs(e) {
      this.logs.append(xr({ timestamp: new Date().toISOString(), log: e }));
      let t = typeof e == "string" ? JSON.parse(e).level : e.level;
      t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
      return this.logs;
    }
    clearLogs() {
      this.logs = new mh(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
      return Array.from(this.logs);
    }
    logsToBlob(e) {
      let t = this.getLogArray();
      return (
        t.push(xr({ extraMetadata: e })),
        new Blob(t, { type: "application/json" })
      );
    }
  },
  Sp = class {
    constructor(e, t = Ip) {
      this.baseChunkLogger = new yh(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
      let t = URL.createObjectURL(this.logsToBlob(e)),
        i = document.createElement("a");
      (i.href = t),
        (i.download = `walletconnect-logs-${new Date().toISOString()}.txt`),
        document.body.appendChild(i),
        i.click(),
        document.body.removeChild(i),
        URL.revokeObjectURL(t);
    }
  },
  xp = class {
    constructor(e, t = Ip) {
      this.baseChunkLogger = new yh(e, t);
    }
    write(e) {
      this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
      return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
      this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
      return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
      return this.baseChunkLogger.logsToBlob(e);
    }
  },
  I7 = Object.defineProperty,
  D7 = Object.defineProperties,
  R7 = Object.getOwnPropertyDescriptors,
  qb = Object.getOwnPropertySymbols,
  C7 = Object.prototype.hasOwnProperty,
  O7 = Object.prototype.propertyIsEnumerable,
  jb = (r, e, t) =>
    e in r
      ? I7(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  vh = (r, e) => {
    for (var t in e || (e = {})) C7.call(e, t) && jb(r, t, e[t]);
    if (qb) for (var t of qb(e)) O7.call(e, t) && jb(r, t, e[t]);
    return r;
  },
  wh = (r, e) => D7(r, R7(e));
function ks(r) {
  return wh(vh({}, r), { level: r?.level || x7.level });
}
function P7(r, e = dc) {
  return r[e] || "";
}
function M7(r, e, t = dc) {
  return (r[t] = e), r;
}
function mr(r, e = dc) {
  let t = "";
  return (
    typeof r.bindings > "u" ? (t = P7(r, e)) : (t = r.bindings().context || ""),
    t
  );
}
function N7(r, e, t = dc) {
  let i = mr(r, t);
  return i.trim() ? `${i}/${e}` : e;
}
function yr(r, e, t = dc) {
  let i = N7(r, e, t),
    n = r.child({ context: i });
  return M7(n, i, t);
}
function T7(r) {
  var e, t;
  let i = new Sp((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: (0, Bn.default)(
      wh(vh({}, r.opts), {
        level: "trace",
        browser: wh(vh({}, (t = r.opts) == null ? void 0 : t.browser), {
          write: (n) => i.write(n),
        }),
      })
    ),
    chunkLoggerController: i,
  };
}
function F7(r) {
  var e;
  let t = new xp((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
  return {
    logger: (0, Bn.default)(wh(vh({}, r.opts), { level: "trace" }), t),
    chunkLoggerController: t,
  };
}
function zb(r) {
  return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string"
    ? { logger: r.loggerOverride, chunkLoggerController: null }
    : typeof window < "u"
    ? T7(r)
    : F7(r);
}
var kb = Je(xn()),
  bh = class extends xi {
    constructor(e) {
      super(), (this.opts = e), (this.protocol = "wc"), (this.version = 2);
    }
  };
var _h = class extends xi {
    constructor(e, t) {
      super(), (this.core = e), (this.logger = t), (this.records = new Map());
    }
  },
  Eh = class {
    constructor(e, t) {
      (this.logger = e), (this.core = t);
    }
  },
  Ah = class extends xi {
    constructor(e, t) {
      super(), (this.relayer = e), (this.logger = t);
    }
  },
  Sh = class extends xi {
    constructor(e) {
      super();
    }
  },
  xh = class {
    constructor(e, t, i, n) {
      (this.core = e), (this.logger = t), (this.name = i);
    }
  };
var Ih = class extends xi {
  constructor(e, t) {
    super(), (this.relayer = e), (this.logger = t);
  }
};
var Dh = class extends xi {
  constructor(e, t) {
    super(), (this.core = e), (this.logger = t);
  }
};
var Rh = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  },
  Ch = class {
    constructor(e, t) {
      (this.projectId = e), (this.logger = t);
    }
  };
var Oh = class {
  constructor(e) {
    (this.opts = e), (this.protocol = "wc"), (this.version = 2);
  }
};
var Ph = class {
  constructor(e) {
    this.client = e;
  }
};
var mc = Je(s2()),
  y2 = Je(Ua()),
  v2 = Je(bo());
var o2 = "EdDSA",
  a2 = "JWT",
  Fp = ".",
  Lp = "base64url",
  c2 = "utf8",
  u2 = "utf8",
  h2 = ":",
  l2 = "did",
  f2 = "key",
  Up = "base58btc",
  d2 = "z",
  p2 = "K36";
function Mh(r) {
  return $t(ir(xr(r), c2), Lp);
}
function Nh(r) {
  let e = ir(p2, Up),
    t = d2 + $t(So([e, r]), Up);
  return [l2, f2, t].join(h2);
}
function Y7(r) {
  return $t(r, Lp);
}
function g2(r) {
  return ir([Mh(r.header), Mh(r.payload)].join(Fp), u2);
}
function m2(r) {
  return [Mh(r.header), Mh(r.payload), Y7(r.signature)].join(Fp);
}
function Bp(r = (0, y2.randomBytes)(32)) {
  return mc.generateKeyPairFromSeed(r);
}
function w2(o, c, l, g) {
  return R(
    this,
    arguments,
    function* (r, e, t, i, n = (0, v2.fromMiliseconds)(Date.now())) {
      let d = { alg: o2, typ: a2 },
        y = Nh(i.publicKey),
        v = n + t,
        A = { iss: y, sub: r, aud: e, iat: n, exp: v },
        E = g2({ header: d, payload: A }),
        P = mc.sign(i.secretKey, E);
      return m2({ header: d, payload: A, signature: P });
    }
  );
}
var Re = Je(bo());
var B2 = Je(xn());
var Zt = {};
rr(Zt, {
  DEFAULT_ERROR: () => vc,
  IBaseJsonRpcProvider: () => kh,
  IEvents: () => _c,
  IJsonRpcConnection: () => Vp,
  IJsonRpcProvider: () => Ec,
  INTERNAL_ERROR: () => Th,
  INVALID_PARAMS: () => A2,
  INVALID_REQUEST: () => _2,
  MSOLOD_NOT_FOUND: () => E2,
  PARSE_ERROR: () => b2,
  RESERVED_ERROR_CODES: () => qp,
  SERVER_ERROR: () => yc,
  SERVER_ERROR_CODE_RANGE: () => Fh,
  STANDARD_ERROR_MAP: () => fs,
  formatErrorMessage: () => L2,
  formatJsonRpcError: () => jn,
  formatJsonRpcRequest: () => rn,
  formatJsonRpcResult: () => gs,
  getBigIntRpcId: () => Ii,
  getError: () => Uh,
  getErrorByCode: () => Bh,
  isHttpUrl: () => Hh,
  isJsonRpcError: () => vr,
  isJsonRpcPayload: () => $p,
  isJsonRpcRequest: () => Zo,
  isJsonRpcResponse: () => ms,
  isJsonRpcResult: () => Wr,
  isJsonRpcValidationInvalid: () => RM,
  isLocalhostUrl: () => Gp,
  isNodeJs: () => F2,
  isReservedErrorCode: () => Lh,
  isServerErrorCode: () => Z7,
  isValidDefaultRoute: () => jh,
  isValidErrorCode: () => S2,
  isValidLeadingWildcardRoute: () => AM,
  isValidRoute: () => EM,
  isValidTrailingWildcardRoute: () => SM,
  isValidWildcardRoute: () => zh,
  isWsUrl: () => Kh,
  parseConnectionError: () => wc,
  payloadId: () => tn,
  validateJsonRpcError: () => eM,
});
var b2 = "PARSE_ERROR",
  _2 = "INVALID_REQUEST",
  E2 = "MSOLOD_NOT_FOUND",
  A2 = "INVALID_PARAMS",
  Th = "INTERNAL_ERROR",
  yc = "SERVER_ERROR",
  qp = [-32700, -32600, -32601, -32602, -32603],
  Fh = [-32e3, -32099],
  fs = {
    [b2]: { code: -32700, message: "Parse error" },
    [_2]: { code: -32600, message: "Invalid Request" },
    [E2]: { code: -32601, message: "MSOLod not found" },
    [A2]: { code: -32602, message: "Invalid params" },
    [Th]: { code: -32603, message: "Internal error" },
    [yc]: { code: -32e3, message: "Server error" },
  },
  vc = yc;
function Z7(r) {
  return r <= Fh[0] && r >= Fh[1];
}
function Lh(r) {
  return qp.includes(r);
}
function S2(r) {
  return typeof r == "number";
}
function Uh(r) {
  return Object.keys(fs).includes(r) ? fs[r] : fs[vc];
}
function Bh(r) {
  let e = Object.values(fs).find((t) => t.code === r);
  return e || fs[vc];
}
function eM(r) {
  if (typeof r.error.code > "u")
    return { valid: !1, error: "Missing code for JSON-RPC error" };
  if (typeof r.error.message > "u")
    return { valid: !1, error: "Missing message for JSON-RPC error" };
  if (!S2(r.error.code))
    return {
      valid: !1,
      error: `Invalid error code type for JSON-RPC: ${r.error.code}`,
    };
  if (Lh(r.error.code)) {
    let e = Bh(r.error.code);
    if (e.message !== fs[vc].message && r.error.message === e.message)
      return {
        valid: !1,
        error: `Invalid error code message for JSON-RPC: ${r.error.code}`,
      };
  }
  return { valid: !0 };
}
function wc(r, e, t) {
  return r.message.includes("getaddrinfo ENOTFOUND") ||
    r.message.includes("connect ECONNREFUSED")
    ? new Error(`Unavailable ${t} RPC url at ${e}`)
    : r;
}
var Ir = {};
rr(Ir, { isNodeJs: () => F2 });
var T2 = Je(Kp());
Kr(Ir, Je(Kp()));
var F2 = T2.isNode;
Kr(Zt, Ir);
function tn(r = 3) {
  let e = Date.now() * Math.pow(10, r),
    t = Math.floor(Math.random() * Math.pow(10, r));
  return e + t;
}
function Ii(r = 6) {
  return BigInt(tn(r));
}
function rn(r, e, t) {
  return { id: t || tn(), jsonrpc: "2.0", mSOLod: r, params: e };
}
function gs(r, e) {
  return { id: r, jsonrpc: "2.0", result: e };
}
function jn(r, e, t) {
  return { id: r, jsonrpc: "2.0", error: L2(e, t) };
}
function L2(r, e) {
  return typeof r > "u"
    ? Uh(Th)
    : (typeof r == "string" &&
        (r = Object.assign(Object.assign({}, Uh(yc)), { message: r })),
      typeof e < "u" && (r.data = e),
      Lh(r.code) && (r = Bh(r.code)),
      r);
}
function EM(r) {
  return r.includes("*") ? zh(r) : !/\W/g.test(r);
}
function jh(r) {
  return r === "*";
}
function zh(r) {
  return jh(r)
    ? !0
    : !(
        !r.includes("*") ||
        r.split("*").length !== 2 ||
        r.split("*").filter((e) => e.trim() === "").length !== 1
      );
}
function AM(r) {
  return !jh(r) && zh(r) && !r.split("*")[0].trim();
}
function SM(r) {
  return !jh(r) && zh(r) && !r.split("*")[1].trim();
}
var _c = class {},
  Vp = class extends _c {
    constructor(e) {
      super();
    }
  },
  kh = class extends _c {
    constructor() {
      super();
    }
  },
  Ec = class extends kh {
    constructor(e) {
      super();
    }
  };
var xM = "^https?:",
  IM = "^wss?:";
function DM(r) {
  let e = r.match(new RegExp(/^\w+:/, "gi"));
  if (!(!e || !e.length)) return e[0];
}
function U2(r, e) {
  let t = DM(r);
  return typeof t > "u" ? !1 : new RegExp(e).test(t);
}
function Hh(r) {
  return U2(r, xM);
}
function Kh(r) {
  return U2(r, IM);
}
function Gp(r) {
  return new RegExp("wss?://localhost(:d{2,5})?").test(r);
}
function $p(r) {
  return (
    typeof r == "object" && "id" in r && "jsonrpc" in r && r.jsonrpc === "2.0"
  );
}
function Zo(r) {
  return $p(r) && "mSOLod" in r;
}
function ms(r) {
  return $p(r) && (Wr(r) || vr(r));
}
function Wr(r) {
  return "result" in r;
}
function vr(r) {
  return "error" in r;
}
function RM(r) {
  return "error" in r && r.valid === !1;
}
var Lr = class extends Ec {
  constructor(e) {
    super(e),
      (this.events = new B2.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(e)),
      this.connection.connected && this.registerEventListeners();
  }
  connect() {
    return R(this, arguments, function* (e = this.connection) {
      yield this.open(e);
    });
  }
  disconnect() {
    return R(this, null, function* () {
      yield this.close();
    });
  }
  on(e, t) {
    this.events.on(e, t);
  }
  once(e, t) {
    this.events.once(e, t);
  }
  off(e, t) {
    this.events.off(e, t);
  }
  removeListener(e, t) {
    this.events.removeListener(e, t);
  }
  request(e, t) {
    return R(this, null, function* () {
      return this.requestStrict(
        rn(e.mSOLod, e.params || [], e.id || Ii().toString()),
        t
      );
    });
  }
  requestStrict(e, t) {
    return R(this, null, function* () {
      return new Promise((i, n) =>
        R(this, null, function* () {
          if (!this.connection.connected)
            try {
              yield this.open();
            } catch (o) {
              n(o);
            }
          this.events.on(`${e.id}`, (o) => {
            vr(o) ? n(o.error) : i(o.result);
          });
          try {
            yield this.connection.send(e, t);
          } catch (o) {
            n(o);
          }
        })
      );
    });
  }
  setConnection(e = this.connection) {
    return e;
  }
  onPayload(e) {
    this.events.emit("payload", e),
      ms(e)
        ? this.events.emit(`${e.id}`, e)
        : this.events.emit("message", { type: e.mSOLod, data: e.params });
  }
  onClose(e) {
    e &&
      e.code === 3e3 &&
      this.events.emit(
        "error",
        new Error(
          `WebSocket connection closed abnormally with code: ${e.code} ${
            e.reason ? `(${e.reason})` : ""
          }`
        )
      ),
      this.events.emit("disconnect");
  }
  open() {
    return R(this, arguments, function* (e = this.connection) {
      (this.connection === e && this.connection.connected) ||
        (this.connection.connected && this.close(),
        typeof e == "string" &&
          (yield this.connection.open(e), (e = this.connection)),
        (this.connection = this.setConnection(e)),
        yield this.connection.open(),
        this.registerEventListeners(),
        this.events.emit("connect"));
    });
  }
  close() {
    return R(this, null, function* () {
      yield this.connection.close();
    });
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on("payload", (e) => this.onPayload(e)),
      this.connection.on("close", (e) => this.onClose(e)),
      this.connection.on("error", (e) => this.events.emit("error", e)),
      this.connection.on("register_error", (e) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
};
var H2 = Je(xn());
var CM = () =>
    typeof WebSocket < "u"
      ? WebSocket
      : typeof global < "u" && typeof global.WebSocket < "u"
      ? global.WebSocket
      : typeof window < "u" && typeof window.WebSocket < "u"
      ? window.WebSocket
      : typeof self < "u" && typeof self.WebSocket < "u"
      ? self.WebSocket
      : j2(),
  OM = () =>
    typeof WebSocket < "u" ||
    (typeof global < "u" && typeof global.WebSocket < "u") ||
    (typeof window < "u" && typeof window.WebSocket < "u") ||
    (typeof self < "u" && typeof self.WebSocket < "u"),
  z2 = (r) => r.split("?")[0],
  k2 = 10,
  PM = CM(),
  Vh = class {
    constructor(e) {
      if (
        ((this.url = e),
        (this.events = new H2.EventEmitter()),
        (this.registering = !1),
        !Kh(e))
      )
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      this.url = e;
    }
    get connected() {
      return typeof this.socket < "u";
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    open() {
      return R(this, arguments, function* (e = this.url) {
        yield this.register(e);
      });
    }
    close() {
      return R(this, null, function* () {
        return new Promise((e, t) => {
          if (typeof this.socket > "u") {
            t(new Error("Connection already closed"));
            return;
          }
          (this.socket.onclose = (i) => {
            this.onClose(i), e();
          }),
            this.socket.close();
        });
      });
    }
    send(e) {
      return R(this, null, function* () {
        typeof this.socket > "u" && (this.socket = yield this.register());
        try {
          this.socket.send(xr(e));
        } catch (t) {
          this.onError(e.id, t);
        }
      });
    }
    register(e = this.url) {
      if (!Kh(e))
        throw new Error(
          `Provided URL is not compatible with WebSocket connection: ${e}`
        );
      if (this.registering) {
        let t = this.events.getMaxListeners();
        return (
          (this.events.listenerCount("register_error") >= t ||
            this.events.listenerCount("open") >= t) &&
            this.events.setMaxListeners(t + 1),
          new Promise((i, n) => {
            this.events.once("register_error", (o) => {
              this.resetMaxListeners(), n(o);
            }),
              this.events.once("open", () => {
                if ((this.resetMaxListeners(), typeof this.socket > "u"))
                  return n(
                    new Error("WebSocket connection is missing or invalid")
                  );
                i(this.socket);
              });
          })
        );
      }
      return (
        (this.url = e),
        (this.registering = !0),
        new Promise((t, i) => {
          let n = new URLSearchParams(e).get("origin"),
            o = (0, Zt.isReactNative)()
              ? { headers: { origin: n } }
              : { rejectUnauthorized: !Gp(e) },
            c = new PM(e, [], o);
          OM()
            ? (c.onerror = (l) => {
                let g = l;
                i(this.emitError(g.error));
              })
            : c.on("error", (l) => {
                i(this.emitError(l));
              }),
            (c.onopen = () => {
              this.onOpen(c), t(c);
            });
        })
      );
    }
    onOpen(e) {
      (e.onmessage = (t) => this.onPayload(t)),
        (e.onclose = (t) => this.onClose(t)),
        (this.socket = e),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose(e) {
      (this.socket = void 0),
        (this.registering = !1),
        this.events.emit("close", e);
    }
    onPayload(e) {
      if (typeof e.data > "u") return;
      let t = typeof e.data == "string" ? Zi(e.data) : e.data;
      this.events.emit("payload", t);
    }
    onError(e, t) {
      let i = this.parseError(t),
        n = i.message || i.toString(),
        o = jn(e, n);
      this.events.emit("payload", o);
    }
    parseError(e, t = this.url) {
      return wc(e, z2(t), "WS");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > k2 && this.events.setMaxListeners(k2);
    }
    emitError(e) {
      let t = this.parseError(
        new Error(
          e?.message || `WebSocket connection failed for host: ${z2(this.url)}`
        )
      );
      return this.events.emit("register_error", t), t;
    }
  };
var K3 = Je(S3()),
  V3 = Je(I3());
function uT(r, e) {
  if (r.length >= 255) throw new TypeError("Alphabet too long");
  for (var t = new Uint8Array(256), i = 0; i < t.length; i++) t[i] = 255;
  for (var n = 0; n < r.length; n++) {
    var o = r.charAt(n),
      c = o.charCodeAt(0);
    if (t[c] !== 255) throw new TypeError(o + " is ambiguous");
    t[c] = n;
  }
  var l = r.length,
    g = r.charAt(0),
    d = Math.log(l) / Math.log(256),
    y = Math.log(256) / Math.log(l);
  function v(P) {
    if (
      (P instanceof Uint8Array ||
        (ArrayBuffer.isView(P)
          ? (P = new Uint8Array(P.buffer, P.byteOffset, P.byteLength))
          : Array.isArray(P) && (P = Uint8Array.from(P))),
      !(P instanceof Uint8Array))
    )
      throw new TypeError("Expected Uint8Array");
    if (P.length === 0) return "";
    for (var N = 0, T = 0, K = 0, Z = P.length; K !== Z && P[K] === 0; )
      K++, N++;
    for (var J = ((Z - K) * y + 1) >>> 0, G = new Uint8Array(J); K !== Z; ) {
      for (
        var Q = P[K], ee = 0, L = J - 1;
        (Q !== 0 || ee < T) && L !== -1;
        L--, ee++
      )
        (Q += (256 * G[L]) >>> 0), (G[L] = Q % l >>> 0), (Q = (Q / l) >>> 0);
      if (Q !== 0) throw new Error("Non-zero carry");
      (T = ee), K++;
    }
    for (var B = J - T; B !== J && G[B] === 0; ) B++;
    for (var ae = g.repeat(N); B < J; ++B) ae += r.charAt(G[B]);
    return ae;
  }
  function A(P) {
    if (typeof P != "string") throw new TypeError("Expected String");
    if (P.length === 0) return new Uint8Array();
    var N = 0;
    if (P[N] !== " ") {
      for (var T = 0, K = 0; P[N] === g; ) T++, N++;
      for (
        var Z = ((P.length - N) * d + 1) >>> 0, J = new Uint8Array(Z);
        P[N];

      ) {
        var G = t[P.charCodeAt(N)];
        if (G === 255) return;
        for (var Q = 0, ee = Z - 1; (G !== 0 || Q < K) && ee !== -1; ee--, Q++)
          (G += (l * J[ee]) >>> 0),
            (J[ee] = G % 256 >>> 0),
            (G = (G / 256) >>> 0);
        if (G !== 0) throw new Error("Non-zero carry");
        (K = Q), N++;
      }
      if (P[N] !== " ") {
        for (var L = Z - K; L !== Z && J[L] === 0; ) L++;
        for (var B = new Uint8Array(T + (Z - L)), ae = T; L !== Z; )
          B[ae++] = J[L++];
        return B;
      }
    }
  }
  function E(P) {
    var N = A(P);
    if (N) return N;
    throw new Error(`Non-${e} character`);
  }
  return { encode: v, decodeUnsafe: A, decode: E };
}
var hT = uT,
  lT = hT,
  G3 = (r) => {
    if (r instanceof Uint8Array && r.constructor.name === "Uint8Array")
      return r;
    if (r instanceof ArrayBuffer) return new Uint8Array(r);
    if (ArrayBuffer.isView(r))
      return new Uint8Array(r.buffer, r.byteOffset, r.byteLength);
    throw new Error("Unknown type, must be binary type");
  },
  fT = (r) => new TextEncoder().encode(r),
  dT = (r) => new TextDecoder().decode(r),
  h0 = class {
    constructor(e, t, i) {
      (this.name = e), (this.prefix = t), (this.baseEncode = i);
    }
    encode(e) {
      if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
      throw Error("Unknown type, must be binary type");
    }
  },
  l0 = class {
    constructor(e, t, i) {
      if (((this.name = e), (this.prefix = t), t.codePointAt(0) === void 0))
        throw new Error("Invalid prefix character");
      (this.prefixCodePoint = t.codePointAt(0)), (this.baseDecode = i);
    }
    decode(e) {
      if (typeof e == "string") {
        if (e.codePointAt(0) !== this.prefixCodePoint)
          throw Error(
            `Unable to decode multibase string ${JSON.stringify(e)}, ${
              this.name
            } decoder only supports inputs prefixed with ${this.prefix}`
          );
        return this.baseDecode(e.slice(this.prefix.length));
      } else throw Error("Can only multibase decode strings");
    }
    or(e) {
      return $3(this, e);
    }
  },
  f0 = class {
    constructor(e) {
      this.decoders = e;
    }
    or(e) {
      return $3(this, e);
    }
    decode(e) {
      let t = e[0],
        i = this.decoders[t];
      if (i) return i.decode(e);
      throw RangeError(
        `Unable to decode multibase string ${JSON.stringify(
          e
        )}, only inputs prefixed with ${Object.keys(
          this.decoders
        )} are supported`
      );
    }
  },
  $3 = (r, e) =>
    new f0(
      Me(
        Me({}, r.decoders || { [r.prefix]: r }),
        e.decoders || { [e.prefix]: e }
      )
    ),
  d0 = class {
    constructor(e, t, i, n) {
      (this.name = e),
        (this.prefix = t),
        (this.baseEncode = i),
        (this.baseDecode = n),
        (this.encoder = new h0(e, t, i)),
        (this.decoder = new l0(e, t, n));
    }
    encode(e) {
      return this.encoder.encode(e);
    }
    decode(e) {
      return this.decoder.decode(e);
    }
  },
  il = ({ name: r, prefix: e, encode: t, decode: i }) => new d0(r, e, t, i),
  Oc = ({ prefix: r, name: e, alphabet: t }) => {
    let { encode: i, decode: n } = lT(t, e);
    return il({ prefix: r, name: e, encode: i, decode: (o) => G3(n(o)) });
  },
  pT = (r, e, t, i) => {
    let n = {};
    for (let y = 0; y < e.length; ++y) n[e[y]] = y;
    let o = r.length;
    for (; r[o - 1] === "="; ) --o;
    let c = new Uint8Array(((o * t) / 8) | 0),
      l = 0,
      g = 0,
      d = 0;
    for (let y = 0; y < o; ++y) {
      let v = n[r[y]];
      if (v === void 0) throw new SyntaxError(`Non-${i} character`);
      (g = (g << t) | v),
        (l += t),
        l >= 8 && ((l -= 8), (c[d++] = 255 & (g >> l)));
    }
    if (l >= t || 255 & (g << (8 - l)))
      throw new SyntaxError("Unexpected end of data");
    return c;
  },
  gT = (r, e, t) => {
    let i = e[e.length - 1] === "=",
      n = (1 << t) - 1,
      o = "",
      c = 0,
      l = 0;
    for (let g = 0; g < r.length; ++g)
      for (l = (l << 8) | r[g], c += 8; c > t; )
        (c -= t), (o += e[n & (l >> c)]);
    if ((c && (o += e[n & (l << (t - c))]), i))
      for (; (o.length * t) & 7; ) o += "=";
    return o;
  },
  ar = ({ name: r, prefix: e, bitsPerChar: t, alphabet: i }) =>
    il({
      prefix: e,
      name: r,
      encode(n) {
        return gT(n, i, t);
      },
      decode(n) {
        return pT(n, i, t, r);
      },
    }),
  mT = il({
    prefix: "\0",
    name: "identity",
    encode: (r) => dT(r),
    decode: (r) => fT(r),
  }),
  yT = Object.freeze({ __proto__: null, identity: mT }),
  vT = ar({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 }),
  wT = Object.freeze({ __proto__: null, base2: vT }),
  bT = ar({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 }),
  _T = Object.freeze({ __proto__: null, base8: bT }),
  ET = Oc({ prefix: "9", name: "base10", alphabet: "0123456789" }),
  AT = Object.freeze({ __proto__: null, base10: ET }),
  ST = ar({
    prefix: "f",
    name: "base16",
    alphabet: "0123456789abcdef",
    bitsPerChar: 4,
  }),
  xT = ar({
    prefix: "F",
    name: "base16upper",
    alphabet: "0123456789ABCDEF",
    bitsPerChar: 4,
  }),
  IT = Object.freeze({ __proto__: null, base16: ST, base16upper: xT }),
  DT = ar({
    prefix: "b",
    name: "base32",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
    bitsPerChar: 5,
  }),
  RT = ar({
    prefix: "B",
    name: "base32upper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
    bitsPerChar: 5,
  }),
  CT = ar({
    prefix: "c",
    name: "base32pad",
    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
    bitsPerChar: 5,
  }),
  OT = ar({
    prefix: "C",
    name: "base32padupper",
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
    bitsPerChar: 5,
  }),
  PT = ar({
    prefix: "v",
    name: "base32hex",
    alphabet: "0123456789abcdefghijklmnopqrstuv",
    bitsPerChar: 5,
  }),
  MT = ar({
    prefix: "V",
    name: "base32hexupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
    bitsPerChar: 5,
  }),
  NT = ar({
    prefix: "t",
    name: "base32hexpad",
    alphabet: "0123456789abcdefghijklmnopqrstuv=",
    bitsPerChar: 5,
  }),
  TT = ar({
    prefix: "T",
    name: "base32hexpadupper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
    bitsPerChar: 5,
  }),
  FT = ar({
    prefix: "h",
    name: "base32z",
    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
    bitsPerChar: 5,
  }),
  LT = Object.freeze({
    __proto__: null,
    base32: DT,
    base32upper: RT,
    base32pad: CT,
    base32padupper: OT,
    base32hex: PT,
    base32hexupper: MT,
    base32hexpad: NT,
    base32hexpadupper: TT,
    base32z: FT,
  }),
  UT = Oc({
    prefix: "k",
    name: "base36",
    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz",
  }),
  BT = Oc({
    prefix: "K",
    name: "base36upper",
    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  }),
  qT = Object.freeze({ __proto__: null, base36: UT, base36upper: BT }),
  jT = Oc({
    name: "base58btc",
    prefix: "z",
    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz",
  }),
  zT = Oc({
    name: "base58flickr",
    prefix: "Z",
    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ",
  }),
  kT = Object.freeze({ __proto__: null, base58btc: jT, base58flickr: zT }),
  HT = ar({
    prefix: "m",
    name: "base64",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    bitsPerChar: 6,
  }),
  KT = ar({
    prefix: "M",
    name: "base64pad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    bitsPerChar: 6,
  }),
  VT = ar({
    prefix: "u",
    name: "base64url",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
    bitsPerChar: 6,
  }),
  GT = ar({
    prefix: "U",
    name: "base64urlpad",
    alphabet:
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
    bitsPerChar: 6,
  }),
  $T = Object.freeze({
    __proto__: null,
    base64: HT,
    base64pad: KT,
    base64url: VT,
    base64urlpad: GT,
  }),
  J3 = Array.from(
    "\u{1F680}\u{1FA90}\u2604\u{1F6F0}\u{1F30C}\u{1F311}\u{1F312}\u{1F313}\u{1F314}\u{1F315}\u{1F316}\u{1F317}\u{1F318}\u{1F30D}\u{1F30F}\u{1F30E}\u{1F409}\u2600\u{1F4BB}\u{1F5A5}\u{1F4BE}\u{1F4BF}\u{1F602}\u2764\u{1F60D}\u{1F923}\u{1F60A}\u{1F64F}\u{1F495}\u{1F62D}\u{1F618}\u{1F44D}\u{1F605}\u{1F44F}\u{1F601}\u{1F525}\u{1F970}\u{1F494}\u{1F496}\u{1F499}\u{1F622}\u{1F914}\u{1F606}\u{1F644}\u{1F4AA}\u{1F609}\u263A\u{1F44C}\u{1F917}\u{1F49C}\u{1F614}\u{1F60E}\u{1F607}\u{1F339}\u{1F926}\u{1F389}\u{1F49E}\u270C\u2728\u{1F937}\u{1F631}\u{1F60C}\u{1F338}\u{1F64C}\u{1F60B}\u{1F497}\u{1F49A}\u{1F60F}\u{1F49B}\u{1F642}\u{1F493}\u{1F929}\u{1F604}\u{1F600}\u{1F5A4}\u{1F603}\u{1F4AF}\u{1F648}\u{1F447}\u{1F3B6}\u{1F612}\u{1F92D}\u2763\u{1F61C}\u{1F48B}\u{1F440}\u{1F62A}\u{1F611}\u{1F4A5}\u{1F64B}\u{1F61E}\u{1F629}\u{1F621}\u{1F92A}\u{1F44A}\u{1F973}\u{1F625}\u{1F924}\u{1F449}\u{1F483}\u{1F633}\u270B\u{1F61A}\u{1F61D}\u{1F634}\u{1F31F}\u{1F62C}\u{1F643}\u{1F340}\u{1F337}\u{1F63B}\u{1F613}\u2B50\u2705\u{1F97A}\u{1F308}\u{1F608}\u{1F918}\u{1F4A6}\u2714\u{1F623}\u{1F3C3}\u{1F490}\u2639\u{1F38A}\u{1F498}\u{1F620}\u261D\u{1F615}\u{1F33A}\u{1F382}\u{1F33B}\u{1F610}\u{1F595}\u{1F49D}\u{1F64A}\u{1F639}\u{1F5E3}\u{1F4AB}\u{1F480}\u{1F451}\u{1F3B5}\u{1F91E}\u{1F61B}\u{1F534}\u{1F624}\u{1F33C}\u{1F62B}\u26BD\u{1F919}\u2615\u{1F3C6}\u{1F92B}\u{1F448}\u{1F62E}\u{1F646}\u{1F37B}\u{1F343}\u{1F436}\u{1F481}\u{1F632}\u{1F33F}\u{1F9E1}\u{1F381}\u26A1\u{1F31E}\u{1F388}\u274C\u270A\u{1F44B}\u{1F630}\u{1F928}\u{1F636}\u{1F91D}\u{1F6B6}\u{1F4B0}\u{1F353}\u{1F4A2}\u{1F91F}\u{1F641}\u{1F6A8}\u{1F4A8}\u{1F92C}\u2708\u{1F380}\u{1F37A}\u{1F913}\u{1F619}\u{1F49F}\u{1F331}\u{1F616}\u{1F476}\u{1F974}\u25B6\u27A1\u2753\u{1F48E}\u{1F4B8}\u2B07\u{1F628}\u{1F31A}\u{1F98B}\u{1F637}\u{1F57A}\u26A0\u{1F645}\u{1F61F}\u{1F635}\u{1F44E}\u{1F932}\u{1F920}\u{1F927}\u{1F4CC}\u{1F535}\u{1F485}\u{1F9D0}\u{1F43E}\u{1F352}\u{1F617}\u{1F911}\u{1F30A}\u{1F92F}\u{1F437}\u260E\u{1F4A7}\u{1F62F}\u{1F486}\u{1F446}\u{1F3A4}\u{1F647}\u{1F351}\u2744\u{1F334}\u{1F4A3}\u{1F438}\u{1F48C}\u{1F4CD}\u{1F940}\u{1F922}\u{1F445}\u{1F4A1}\u{1F4A9}\u{1F450}\u{1F4F8}\u{1F47B}\u{1F910}\u{1F92E}\u{1F3BC}\u{1F975}\u{1F6A9}\u{1F34E}\u{1F34A}\u{1F47C}\u{1F48D}\u{1F4E3}\u{1F942}"
  ),
  JT = J3.reduce((r, e, t) => ((r[t] = e), r), []),
  WT = J3.reduce((r, e, t) => ((r[e.codePointAt(0)] = t), r), []);
function YT(r) {
  return r.reduce((e, t) => ((e += JT[t]), e), "");
}
function QT(r) {
  let e = [];
  for (let t of r) {
    let i = WT[t.codePointAt(0)];
    if (i === void 0) throw new Error(`Non-base256emoji character: ${t}`);
    e.push(i);
  }
  return new Uint8Array(e);
}
var XT = il({
    prefix: "\u{1F680}",
    name: "base256emoji",
    encode: YT,
    decode: QT,
  }),
  ZT = Object.freeze({ __proto__: null, base256emoji: XT }),
  e9 = W3,
  D3 = 128,
  t9 = 127,
  r9 = ~t9,
  i9 = Math.pow(2, 31);
function W3(r, e, t) {
  (e = e || []), (t = t || 0);
  for (var i = t; r >= i9; ) (e[t++] = (r & 255) | D3), (r /= 128);
  for (; r & r9; ) (e[t++] = (r & 255) | D3), (r >>>= 7);
  return (e[t] = r | 0), (W3.bytes = t - i + 1), e;
}
var n9 = p0,
  s9 = 128,
  R3 = 127;
function p0(r, i) {
  var t = 0,
    i = i || 0,
    n = 0,
    o = i,
    c,
    l = r.length;
  do {
    if (o >= l)
      throw ((p0.bytes = 0), new RangeError("Could not decode varint"));
    (c = r[o++]),
      (t += n < 28 ? (c & R3) << n : (c & R3) * Math.pow(2, n)),
      (n += 7);
  } while (c >= s9);
  return (p0.bytes = o - i), t;
}
var o9 = Math.pow(2, 7),
  a9 = Math.pow(2, 14),
  c9 = Math.pow(2, 21),
  u9 = Math.pow(2, 28),
  h9 = Math.pow(2, 35),
  l9 = Math.pow(2, 42),
  f9 = Math.pow(2, 49),
  d9 = Math.pow(2, 56),
  p9 = Math.pow(2, 63),
  g9 = function (r) {
    return r < o9
      ? 1
      : r < a9
      ? 2
      : r < c9
      ? 3
      : r < u9
      ? 4
      : r < h9
      ? 5
      : r < l9
      ? 6
      : r < f9
      ? 7
      : r < d9
      ? 8
      : r < p9
      ? 9
      : 10;
  },
  m9 = { encode: e9, decode: n9, encodingLength: g9 },
  Y3 = m9,
  C3 = (r, e, t = 0) => (Y3.encode(r, e, t), e),
  O3 = (r) => Y3.encodingLength(r),
  g0 = (r, e) => {
    let t = e.byteLength,
      i = O3(r),
      n = i + O3(t),
      o = new Uint8Array(n + t);
    return C3(r, o, 0), C3(t, o, i), o.set(e, n), new m0(r, t, e, o);
  },
  m0 = class {
    constructor(e, t, i, n) {
      (this.code = e), (this.size = t), (this.digest = i), (this.bytes = n);
    }
  },
  Q3 = ({ name: r, code: e, encode: t }) => new y0(r, e, t),
  y0 = class {
    constructor(e, t, i) {
      (this.name = e), (this.code = t), (this.encode = i);
    }
    digest(e) {
      if (e instanceof Uint8Array) {
        let t = this.encode(e);
        return t instanceof Uint8Array
          ? g0(this.code, t)
          : t.then((i) => g0(this.code, i));
      } else throw Error("Unknown type, must be binary type");
    }
  },
  X3 = (r) => (e) =>
    R(void 0, null, function* () {
      return new Uint8Array(yield crypto.subtle.digest(r, e));
    }),
  y9 = Q3({ name: "sha2-256", code: 18, encode: X3("SHA-256") }),
  v9 = Q3({ name: "sha2-512", code: 19, encode: X3("SHA-512") }),
  w9 = Object.freeze({ __proto__: null, sha256: y9, sha512: v9 }),
  Z3 = 0,
  b9 = "identity",
  e_ = G3,
  _9 = (r) => g0(Z3, e_(r)),
  E9 = { code: Z3, name: b9, encode: e_, digest: _9 },
  A9 = Object.freeze({ __proto__: null, identity: E9 });
new TextEncoder(), new TextDecoder();
var P3 = Me(
  Me(Me(Me(Me(Me(Me(Me(Me(Me({}, yT), wT), _T), AT), IT), LT), qT), kT), $T),
  ZT
);
Me(Me({}, w9), A9);
function S9(r = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? globalThis.Buffer.allocUnsafe(r)
    : new Uint8Array(r);
}
function t_(r, e, t, i) {
  return {
    name: r,
    prefix: e,
    encoder: { name: r, prefix: e, encode: t },
    decoder: { decode: i },
  };
}
var M3 = t_(
    "utf8",
    "u",
    (r) => "u" + new TextDecoder("utf8").decode(r),
    (r) => new TextEncoder().encode(r.substring(1))
  ),
  a0 = t_(
    "ascii",
    "a",
    (r) => {
      let e = "a";
      for (let t = 0; t < r.length; t++) e += String.fromCharCode(r[t]);
      return e;
    },
    (r) => {
      r = r.substring(1);
      let e = S9(r.length);
      for (let t = 0; t < r.length; t++) e[t] = r.charCodeAt(t);
      return e;
    }
  ),
  x9 = Me(
    {
      utf8: M3,
      "utf-8": M3,
      hex: P3.base16,
      latin1: a0,
      ascii: a0,
      binary: a0,
    },
    P3
  );
function I9(r, e = "utf8") {
  let t = x9[e];
  if (!t) throw new Error(`Unsupported encoding "${e}"`);
  return (e === "utf8" || e === "utf-8") &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(r, "utf8")
    : t.decoder.decode(`${t.prefix}${r}`);
}
var r_ = "wc",
  D9 = 2,
  P0 = "core",
  ws = `${r_}@2:${P0}:`,
  R9 = { name: P0, logger: "error" },
  C9 = { database: ":memory:" },
  O9 = "crypto",
  N3 = "client_ed25519_seed",
  P9 = Re.ONE_DAY,
  M9 = "keychain",
  N9 = "0.3",
  T9 = "messages",
  F9 = "0.3",
  L9 = Re.SIX_HOURS,
  U9 = "publisher",
  M0 = "irn",
  B9 = "error",
  i_ = "wss://relay.walletconnect.org",
  q9 = "relayer",
  Dr = {
    message: "relayer_message",
    message_ack: "relayer_message_ack",
    connect: "relayer_connect",
    disconnect: "relayer_disconnect",
    error: "relayer_error",
    connection_stalled: "relayer_connection_stalled",
    transport_closed: "relayer_transport_closed",
    publish: "relayer_publish",
  },
  j9 = "_subscription",
  li = {
    payload: "payload",
    connect: "connect",
    disconnect: "disconnect",
    error: "error",
  },
  z9 = 0.1;
var k9 = "2.14.0",
  H9 = 1e4,
  K9 = "0.3",
  V9 = "WALLETCONNECT_CLIENT_ID",
  sn = {
    created: "subscription_created",
    deleted: "subscription_deleted",
    expired: "subscription_expired",
    disabled: "subscription_disabled",
    sync: "subscription_sync",
    resubscribed: "subscription_resubscribed",
  };
var G9 = "subscription",
  $9 = "0.3",
  J9 = Re.FIVE_SECONDS * 1e3,
  W9 = "pairing",
  Y9 = "0.3";
var Rc = {
    wc_pairingDelete: {
      req: { ttl: Re.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: Re.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: Re.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: Re.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_mSOLod: {
      req: { ttl: Re.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: Re.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  Ys = {
    create: "pairing_create",
    expire: "pairing_expire",
    delete: "pairing_delete",
    ping: "pairing_ping",
  },
  Di = {
    created: "history_created",
    updated: "history_updated",
    deleted: "history_deleted",
    sync: "history_sync",
  },
  Q9 = "history",
  X9 = "0.3",
  Z9 = "expirer",
  Yr = {
    created: "expirer_created",
    deleted: "expirer_deleted",
    expired: "expirer_expired",
    sync: "expirer_sync",
  },
  eF = "0.3";
var c0 = "verify-api",
  tF = "https://verify.walletconnect.com",
  n_ = "https://verify.walletconnect.org",
  ia = n_,
  rF = [tF, n_],
  iF = "echo",
  nF = "https://echo.walletconnect.com",
  v0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.keychain = new Map()),
        (this.name = M9),
        (this.version = N9),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.init = () =>
          R(this, null, function* () {
            if (!this.initialized) {
              let i = yield this.getKeyChain();
              typeof i < "u" && (this.keychain = i), (this.initialized = !0);
            }
          })),
        (this.has = (i) => (this.isInitialized(), this.keychain.has(i))),
        (this.set = (i, n) =>
          R(this, null, function* () {
            this.isInitialized(), this.keychain.set(i, n), yield this.persist();
          })),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.keychain.get(i);
          if (typeof n > "u") {
            let { message: o } = de("NO_MATCHING_KEY", `${this.name}: ${i}`);
            throw new Error(o);
          }
          return n;
        }),
        (this.del = (i) =>
          R(this, null, function* () {
            this.isInitialized(), this.keychain.delete(i), yield this.persist();
          })),
        (this.core = e),
        (this.logger = yr(t, this.name));
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    setKeyChain(e) {
      return R(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, kd(e));
      });
    }
    getKeyChain() {
      return R(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hd(e) : void 0;
      });
    }
    persist() {
      return R(this, null, function* () {
        yield this.setKeyChain(this.keychain);
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  w0 = class {
    constructor(e, t, i) {
      (this.core = e),
        (this.logger = t),
        (this.name = O9),
        (this.randomSessionIdentifier = oh()),
        (this.initialized = !1),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (yield this.keychain.init(), (this.initialized = !0));
          })),
        (this.hasKeys = (n) => (this.isInitialized(), this.keychain.has(n))),
        (this.getClientId = () =>
          R(this, null, function* () {
            this.isInitialized();
            let n = yield this.getClientSeed(),
              o = Bp(n);
            return Nh(o.publicKey);
          })),
        (this.generateKeyPair = () => {
          this.isInitialized();
          let n = Yw();
          return this.setPrivateKey(n.publicKey, n.privateKey);
        }),
        (this.signJWT = (n) =>
          R(this, null, function* () {
            this.isInitialized();
            let o = yield this.getClientSeed(),
              c = Bp(o),
              l = this.randomSessionIdentifier;
            return yield w2(l, n, P9, c);
          })),
        (this.generateSharedKey = (n, o, c) => {
          this.isInitialized();
          let l = this.getPrivateKey(n),
            g = Qw(l, o);
          return this.setSymKey(g, c);
        }),
        (this.setSymKey = (n, o) =>
          R(this, null, function* () {
            this.isInitialized();
            let c = o || ko(n);
            return yield this.keychain.set(c, n), c;
          })),
        (this.deleteKeyPair = (n) =>
          R(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })),
        (this.deleteSymKey = (n) =>
          R(this, null, function* () {
            this.isInitialized(), yield this.keychain.del(n);
          })),
        (this.encode = (n, o, c) =>
          R(this, null, function* () {
            this.isInitialized();
            let l = ip(c),
              g = xr(o);
            if (np(l)) {
              let A = l.senderPublicKey,
                E = l.receiverPublicKey;
              n = yield this.generateSharedKey(A, E);
            }
            let d = this.getSymKey(n),
              { type: y, senderPublicKey: v } = l;
            return Xw({ type: y, symKey: d, message: g, senderPublicKey: v });
          })),
        (this.decode = (n, o, c) =>
          R(this, null, function* () {
            this.isInitialized();
            let l = eb(o, c);
            if (np(l)) {
              let g = l.receiverPublicKey,
                d = l.senderPublicKey;
              n = yield this.generateSharedKey(g, d);
            }
            try {
              let g = this.getSymKey(n),
                d = Zw({ symKey: g, encoded: o });
              return Zi(d);
            } catch (g) {
              this.logger.error(
                `Failed to decode message from topic: '${n}', clientId: '${yield this.getClientId()}'`
              ),
                this.logger.error(g);
            }
          })),
        (this.getPayloadType = (n) => {
          let o = oc(n);
          return Ho(o.type);
        }),
        (this.getPayloadSenderPublicKey = (n) => {
          let o = oc(n);
          return o.senderPublicKey ? $t(o.senderPublicKey, pr) : void 0;
        }),
        (this.core = e),
        (this.logger = yr(t, this.name)),
        (this.keychain = i || new v0(this.core, this.logger));
    }
    get context() {
      return mr(this.logger);
    }
    setPrivateKey(e, t) {
      return R(this, null, function* () {
        return yield this.keychain.set(e, t), e;
      });
    }
    getPrivateKey(e) {
      return this.keychain.get(e);
    }
    getClientSeed() {
      return R(this, null, function* () {
        let e = "";
        try {
          e = this.keychain.get(N3);
        } catch {
          (e = oh()), yield this.keychain.set(N3, e);
        }
        return I9(e, "base16");
      });
    }
    getSymKey(e) {
      return this.keychain.get(e);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  b0 = class extends Eh {
    constructor(e, t) {
      super(e, t),
        (this.logger = e),
        (this.core = t),
        (this.messages = new Map()),
        (this.name = T9),
        (this.version = F9),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.init = () =>
          R(this, null, function* () {
            if (!this.initialized) {
              this.logger.trace("Initialized");
              try {
                let i = yield this.getRelayerMessages();
                typeof i < "u" && (this.messages = i),
                  this.logger.debug(
                    `Successfully Restored records for ${this.name}`
                  ),
                  this.logger.trace({
                    type: "mSOLod",
                    mSOLod: "restore",
                    size: this.messages.size,
                  });
              } catch (i) {
                this.logger.debug(`Failed to Restore records for ${this.name}`),
                  this.logger.error(i);
              } finally {
                this.initialized = !0;
              }
            }
          })),
        (this.set = (i, n) =>
          R(this, null, function* () {
            this.isInitialized();
            let o = Un(n),
              c = this.messages.get(i);
            return (
              typeof c > "u" && (c = {}),
              typeof c[o] < "u" ||
                ((c[o] = n), this.messages.set(i, c), yield this.persist()),
              o
            );
          })),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.messages.get(i);
          return typeof n > "u" && (n = {}), n;
        }),
        (this.has = (i, n) => {
          this.isInitialized();
          let o = this.get(i),
            c = Un(n);
          return typeof o[c] < "u";
        }),
        (this.del = (i) =>
          R(this, null, function* () {
            this.isInitialized(), this.messages.delete(i), yield this.persist();
          })),
        (this.logger = yr(e, this.name)),
        (this.core = t);
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    setRelayerMessages(e) {
      return R(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, kd(e));
      });
    }
    getRelayerMessages() {
      return R(this, null, function* () {
        let e = yield this.core.storage.getItem(this.storageKey);
        return typeof e < "u" ? Hd(e) : void 0;
      });
    }
    persist() {
      return R(this, null, function* () {
        yield this.setRelayerMessages(this.messages);
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  _0 = class extends Ah {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        (this.events = new Hn.EventEmitter()),
        (this.name = U9),
        (this.queue = new Map()),
        (this.publishTimeout = (0, Re.toMiliseconds)(Re.ONE_MINUTE)),
        (this.failedPublishTimeout = (0, Re.toMiliseconds)(Re.ONE_SECOND)),
        (this.needsTransportRestart = !1),
        (this.publish = (i, n, o) =>
          R(this, null, function* () {
            var c;
            this.logger.debug("Publishing Payload"),
              this.logger.trace({
                type: "mSOLod",
                mSOLod: "publish",
                params: { topic: i, message: n, opts: o },
              });
            let l = o?.ttl || L9,
              g = ah(o),
              d = o?.prompt || !1,
              y = o?.tag || 0,
              v = o?.id || Ii().toString(),
              A = {
                topic: i,
                message: n,
                opts: { ttl: l, relay: g, prompt: d, tag: y, id: v },
              },
              E = `Failed to publish payload, please try again. id:${v} tag:${y}`,
              P = Date.now(),
              N,
              T = 1;
            try {
              for (; N === void 0; ) {
                if (Date.now() - P > this.publishTimeout) throw new Error(E);
                this.logger.trace(
                  { id: v, attempts: T },
                  `publisher.publish - attempt ${T}`
                ),
                  (N = yield yield Us(
                    this.rpcPublish(i, n, l, g, d, y, v).catch((K) =>
                      this.logger.warn(K)
                    ),
                    this.publishTimeout,
                    E
                  )),
                  T++,
                  N ||
                    (yield new Promise((K) =>
                      setTimeout(K, this.failedPublishTimeout)
                    ));
              }
              this.relayer.events.emit(Dr.publish, A),
                this.logger.debug("Successfully Published Payload"),
                this.logger.trace({
                  type: "mSOLod",
                  mSOLod: "publish",
                  params: { id: v, topic: i, message: n, opts: o },
                });
            } catch (K) {
              if (
                (this.logger.debug("Failed to Publish Payload"),
                this.logger.error(K),
                (c = o?.internal) != null && c.throwOnFailedPublish)
              )
                throw K;
              this.queue.set(v, A);
            }
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.relayer = e),
        (this.logger = yr(t, this.name)),
        this.registerEventListeners();
    }
    get context() {
      return mr(this.logger);
    }
    rpcPublish(e, t, i, n, o, c, l) {
      var g, d, y, v;
      let A = {
        mSOLod: Ko(n.protocol).publish,
        params: { topic: e, message: t, ttl: i, prompt: o, tag: c },
        id: l,
      };
      return (
        sr((g = A.params) == null ? void 0 : g.prompt) &&
          ((d = A.params) == null || delete d.prompt),
        sr((y = A.params) == null ? void 0 : y.tag) &&
          ((v = A.params) == null || delete v.tag),
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "message",
          direction: "outgoing",
          request: A,
        }),
        this.relayer.request(A)
      );
    }
    removeRequestFromQueue(e) {
      this.queue.delete(e);
    }
    checkQueue() {
      this.queue.forEach((e) =>
        R(this, null, function* () {
          let { topic: t, message: i, opts: n } = e;
          yield this.publish(t, i, n);
        })
      );
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on($o.pulse, () => {
        if (this.needsTransportRestart) {
          (this.needsTransportRestart = !1),
            this.relayer.events.emit(Dr.connection_stalled);
          return;
        }
        this.checkQueue();
      }),
        this.relayer.on(Dr.message_ack, (e) => {
          this.removeRequestFromQueue(e.id.toString());
        });
    }
  },
  E0 = class {
    constructor() {
      (this.map = new Map()),
        (this.set = (e, t) => {
          let i = this.get(e);
          this.exists(e, t) || this.map.set(e, [...i, t]);
        }),
        (this.get = (e) => this.map.get(e) || []),
        (this.exists = (e, t) => this.get(e).includes(t)),
        (this.delete = (e, t) => {
          if (typeof t > "u") {
            this.map.delete(e);
            return;
          }
          if (!this.map.has(e)) return;
          let i = this.get(e);
          if (!this.exists(e, t)) return;
          let n = i.filter((o) => o !== t);
          if (!n.length) {
            this.map.delete(e);
            return;
          }
          this.map.set(e, n);
        }),
        (this.clear = () => {
          this.map.clear();
        });
    }
    get topics() {
      return Array.from(this.map.keys());
    }
  },
  sF = Object.defineProperty,
  oF = Object.defineProperties,
  aF = Object.getOwnPropertyDescriptors,
  T3 = Object.getOwnPropertySymbols,
  cF = Object.prototype.hasOwnProperty,
  uF = Object.prototype.propertyIsEnumerable,
  F3 = (r, e, t) =>
    e in r
      ? sF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Cc = (r, e) => {
    for (var t in e || (e = {})) cF.call(e, t) && F3(r, t, e[t]);
    if (T3) for (var t of T3(e)) uF.call(e, t) && F3(r, t, e[t]);
    return r;
  },
  u0 = (r, e) => oF(r, aF(e)),
  A0 = class extends Ih {
    constructor(e, t) {
      super(e, t),
        (this.relayer = e),
        (this.logger = t),
        (this.subscriptions = new Map()),
        (this.topicMap = new E0()),
        (this.events = new Hn.EventEmitter()),
        (this.name = G9),
        (this.version = $9),
        (this.pending = new Map()),
        (this.cached = []),
        (this.initialized = !1),
        (this.pendingSubscriptionWatchLabel = "pending_sub_watch_label"),
        (this.pollingInterval = 20),
        (this.storagePrefix = ws),
        (this.subscribeTimeout = (0, Re.toMiliseconds)(Re.ONE_MINUTE)),
        (this.restartInProgress = !1),
        (this.batchSubscribeTopicsLimit = 500),
        (this.pendingBatchMessages = []),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              this.registerEventListeners(),
              (this.clientId = yield this.relayer.core.crypto.getClientId()));
          })),
        (this.subscribe = (i, n) =>
          R(this, null, function* () {
            yield this.restartToComplete(),
              this.isInitialized(),
              this.logger.debug("Subscribing Topic"),
              this.logger.trace({
                type: "mSOLod",
                mSOLod: "subscribe",
                params: { topic: i, opts: n },
              });
            try {
              let o = ah(n),
                c = { topic: i, relay: o };
              this.pending.set(i, c);
              let l = yield this.rpcSubscribe(i, o);
              return (
                typeof l == "string" &&
                  (this.onSubscribe(l, c),
                  this.logger.debug("Successfully Subscribed Topic"),
                  this.logger.trace({
                    type: "mSOLod",
                    mSOLod: "subscribe",
                    params: { topic: i, opts: n },
                  })),
                l
              );
            } catch (o) {
              throw (
                (this.logger.debug("Failed to Subscribe Topic"),
                this.logger.error(o),
                o)
              );
            }
          })),
        (this.unsubscribe = (i, n) =>
          R(this, null, function* () {
            yield this.restartToComplete(),
              this.isInitialized(),
              typeof n?.id < "u"
                ? yield this.unsubscribeById(i, n.id, n)
                : yield this.unsubscribeByTopic(i, n);
          })),
        (this.isSubscribed = (i) =>
          R(this, null, function* () {
            if (this.topics.includes(i)) return !0;
            let n = `${this.pendingSubscriptionWatchLabel}_${i}`;
            return yield new Promise((o, c) => {
              let l = new Re.Watch();
              l.start(n);
              let g = setInterval(() => {
                !this.pending.has(i) &&
                  this.topics.includes(i) &&
                  (clearInterval(g), l.stop(n), o(!0)),
                  l.elapsed(n) >= J9 &&
                    (clearInterval(g),
                    l.stop(n),
                    c(new Error("Subscription resolution timeout")));
              }, this.pollingInterval);
            }).catch(() => !1);
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.start = () =>
          R(this, null, function* () {
            yield this.onConnect();
          })),
        (this.stop = () =>
          R(this, null, function* () {
            yield this.onDisconnect();
          })),
        (this.restart = () =>
          R(this, null, function* () {
            (this.restartInProgress = !0),
              yield this.restore(),
              yield this.reset(),
              (this.restartInProgress = !1);
          })),
        (this.relayer = e),
        (this.logger = yr(t, this.name)),
        (this.clientId = "");
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.relayer.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.subscriptions.size;
    }
    get ids() {
      return Array.from(this.subscriptions.keys());
    }
    get values() {
      return Array.from(this.subscriptions.values());
    }
    get topics() {
      return this.topicMap.topics;
    }
    hasSubscription(e, t) {
      let i = !1;
      try {
        i = this.getSubscription(e).topic === t;
      } catch {}
      return i;
    }
    onEnable() {
      (this.cached = []), (this.initialized = !0);
    }
    onDisable() {
      (this.cached = this.values),
        this.subscriptions.clear(),
        this.topicMap.clear();
    }
    unsubscribeByTopic(e, t) {
      return R(this, null, function* () {
        let i = this.topicMap.get(e);
        yield Promise.all(
          i.map((n) =>
            R(this, null, function* () {
              return yield this.unsubscribeById(e, n, t);
            })
          )
        );
      });
    }
    unsubscribeById(e, t, i) {
      return R(this, null, function* () {
        this.logger.debug("Unsubscribing Topic"),
          this.logger.trace({
            type: "mSOLod",
            mSOLod: "unsubscribe",
            params: { topic: e, id: t, opts: i },
          });
        try {
          let n = ah(i);
          yield this.rpcUnsubscribe(e, t, n);
          let o = ke("USER_DISCONNECTED", `${this.name}, ${e}`);
          yield this.onUnsubscribe(e, t, o),
            this.logger.debug("Successfully Unsubscribed Topic"),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "unsubscribe",
              params: { topic: e, id: t, opts: i },
            });
        } catch (n) {
          throw (
            (this.logger.debug("Failed to Unsubscribe Topic"),
            this.logger.error(n),
            n)
          );
        }
      });
    }
    rpcSubscribe(e, t) {
      return R(this, null, function* () {
        let i = { mSOLod: Ko(t.protocol).subscribe, params: { topic: e } };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        try {
          return (yield yield Us(
            this.relayer.request(i).catch((n) => this.logger.warn(n)),
            this.subscribeTimeout
          ))
            ? Un(e + this.clientId)
            : null;
        } catch {
          this.logger.debug("Outgoing Relay Subscribe Payload stalled"),
            this.relayer.events.emit(Dr.connection_stalled);
        }
        return null;
      });
    }
    rpcBatchSubscribe(e) {
      return R(this, null, function* () {
        if (!e.length) return;
        let t = e[0].relay,
          i = {
            mSOLod: Ko(t.protocol).batchSubscribe,
            params: { topics: e.map((n) => n.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        try {
          return yield yield Us(
            this.relayer.request(i).catch((n) => this.logger.warn(n)),
            this.subscribeTimeout
          );
        } catch {
          this.relayer.events.emit(Dr.connection_stalled);
        }
      });
    }
    rpcBatchFetchMessages(e) {
      return R(this, null, function* () {
        if (!e.length) return;
        let t = e[0].relay,
          i = {
            mSOLod: Ko(t.protocol).batchFetchMessages,
            params: { topics: e.map((o) => o.topic) },
          };
        this.logger.debug("Outgoing Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "outgoing",
            request: i,
          });
        let n;
        try {
          n = yield yield Us(
            this.relayer.request(i).catch((o) => this.logger.warn(o)),
            this.subscribeTimeout
          );
        } catch {
          this.relayer.events.emit(Dr.connection_stalled);
        }
        return n;
      });
    }
    rpcUnsubscribe(e, t, i) {
      let n = {
        mSOLod: Ko(i.protocol).unsubscribe,
        params: { topic: e, id: t },
      };
      return (
        this.logger.debug("Outgoing Relay Payload"),
        this.logger.trace({
          type: "payload",
          direction: "outgoing",
          request: n,
        }),
        this.relayer.request(n)
      );
    }
    onSubscribe(e, t) {
      this.setSubscription(e, u0(Cc({}, t), { id: e })),
        this.pending.delete(t.topic);
    }
    onBatchSubscribe(e) {
      e.length &&
        e.forEach((t) => {
          this.setSubscription(t.id, Cc({}, t)), this.pending.delete(t.topic);
        });
    }
    onUnsubscribe(e, t, i) {
      return R(this, null, function* () {
        this.events.removeAllListeners(t),
          this.hasSubscription(t, e) && this.deleteSubscription(t, i),
          yield this.relayer.messages.del(e);
      });
    }
    setRelayerSubscriptions(e) {
      return R(this, null, function* () {
        yield this.relayer.core.storage.setItem(this.storageKey, e);
      });
    }
    getRelayerSubscriptions() {
      return R(this, null, function* () {
        return yield this.relayer.core.storage.getItem(this.storageKey);
      });
    }
    setSubscription(e, t) {
      this.logger.debug("Setting subscription"),
        this.logger.trace({
          type: "mSOLod",
          mSOLod: "setSubscription",
          id: e,
          subscription: t,
        }),
        this.addSubscription(e, t);
    }
    addSubscription(e, t) {
      this.subscriptions.set(e, Cc({}, t)),
        this.topicMap.set(t.topic, e),
        this.events.emit(sn.created, t);
    }
    getSubscription(e) {
      this.logger.debug("Getting subscription"),
        this.logger.trace({ type: "mSOLod", mSOLod: "getSubscription", id: e });
      let t = this.subscriptions.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(i);
      }
      return t;
    }
    deleteSubscription(e, t) {
      this.logger.debug("Deleting subscription"),
        this.logger.trace({
          type: "mSOLod",
          mSOLod: "deleteSubscription",
          id: e,
          reason: t,
        });
      let i = this.getSubscription(e);
      this.subscriptions.delete(e),
        this.topicMap.delete(i.topic, e),
        this.events.emit(sn.deleted, u0(Cc({}, i), { reason: t }));
    }
    persist() {
      return R(this, null, function* () {
        yield this.setRelayerSubscriptions(this.values),
          this.events.emit(sn.sync);
      });
    }
    reset() {
      return R(this, null, function* () {
        if (this.cached.length) {
          let e = Math.ceil(
            this.cached.length / this.batchSubscribeTopicsLimit
          );
          for (let t = 0; t < e; t++) {
            let i = this.cached.splice(0, this.batchSubscribeTopicsLimit);
            yield this.batchFetchMessages(i), yield this.batchSubscribe(i);
          }
        }
        this.events.emit(sn.resubscribed);
      });
    }
    restore() {
      return R(this, null, function* () {
        try {
          let e = yield this.getRelayerSubscriptions();
          if (typeof e > "u" || !e.length) return;
          if (this.subscriptions.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (
              (this.logger.error(t),
              this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
              new Error(t))
            );
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored subscriptions for ${this.name}`
            ),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "restore",
              subscriptions: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore subscriptions for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    batchSubscribe(e) {
      return R(this, null, function* () {
        if (!e.length) return;
        let t = yield this.rpcBatchSubscribe(e);
        Jr(t) &&
          this.onBatchSubscribe(t.map((i, n) => u0(Cc({}, e[n]), { id: i })));
      });
    }
    batchFetchMessages(e) {
      return R(this, null, function* () {
        if (!e.length) return;
        this.logger.trace(
          `Fetching batch messages for ${e.length} subscriptions`
        );
        let t = yield this.rpcBatchFetchMessages(e);
        t &&
          t.messages &&
          (this.pendingBatchMessages = this.pendingBatchMessages.concat(
            t.messages
          ));
      });
    }
    onConnect() {
      return R(this, null, function* () {
        yield this.restart(), this.onEnable();
      });
    }
    onDisconnect() {
      this.onDisable();
    }
    checkPending() {
      return R(this, null, function* () {
        if (!this.initialized || !this.relayer.connected) return;
        let e = [];
        this.pending.forEach((t) => {
          e.push(t);
        }),
          yield this.batchSubscribe(e),
          this.pendingBatchMessages.length &&
            (yield this.relayer.handleBatchMessageEvents(
              this.pendingBatchMessages
            ),
            (this.pendingBatchMessages = []));
      });
    }
    registerEventListeners() {
      this.relayer.core.heartbeat.on($o.pulse, () =>
        R(this, null, function* () {
          yield this.checkPending();
        })
      ),
        this.events.on(sn.created, (e) =>
          R(this, null, function* () {
            let t = sn.created;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, data: e }),
              yield this.persist();
          })
        ),
        this.events.on(sn.deleted, (e) =>
          R(this, null, function* () {
            let t = sn.deleted;
            this.logger.info(`Emitting ${t}`),
              this.logger.debug({ type: "event", event: t, data: e }),
              yield this.persist();
          })
        );
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    restartToComplete() {
      return R(this, null, function* () {
        this.restartInProgress &&
          (yield new Promise((e) => {
            let t = setInterval(() => {
              this.restartInProgress || (clearInterval(t), e());
            }, this.pollingInterval);
          }));
      });
    }
  },
  hF = Object.defineProperty,
  L3 = Object.getOwnPropertySymbols,
  lF = Object.prototype.hasOwnProperty,
  fF = Object.prototype.propertyIsEnumerable,
  U3 = (r, e, t) =>
    e in r
      ? hF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  dF = (r, e) => {
    for (var t in e || (e = {})) lF.call(e, t) && U3(r, t, e[t]);
    if (L3) for (var t of L3(e)) fF.call(e, t) && U3(r, t, e[t]);
    return r;
  },
  S0 = class extends Sh {
    constructor(e) {
      super(e),
        (this.protocol = "wc"),
        (this.version = 2),
        (this.events = new Hn.EventEmitter()),
        (this.name = q9),
        (this.transportExplicitlyClosed = !1),
        (this.initialized = !1),
        (this.connectionAttemptInProgress = !1),
        (this.connectionStatusPollingInterval = 20),
        (this.staleConnectionErrors = [
          "socket hang up",
          "stalled",
          "interrupted",
        ]),
        (this.hasExperiencedNetworkDisruption = !1),
        (this.requestsInFlight = new Map()),
        (this.heartBeatTimeout = (0, Re.toMiliseconds)(
          Re.THIRTY_SECONDS + Re.ONE_SECOND
        )),
        (this.request = (t) =>
          R(this, null, function* () {
            var i, n;
            this.logger.debug("Publishing Request Payload");
            let o = t.id || Ii().toString();
            yield this.toEstablishConnection();
            try {
              let c = this.provider.request(t);
              this.requestsInFlight.set(o, { promise: c, request: t }),
                this.logger.trace(
                  {
                    id: o,
                    mSOLod: t.mSOLod,
                    topic: (i = t.params) == null ? void 0 : i.topic,
                  },
                  "relayer.request - attempt to publish..."
                );
              let l = yield new Promise((g, d) =>
                R(this, null, function* () {
                  let y = () => {
                    d(
                      new Error(
                        `relayer.request - publish interrupted, id: ${o}`
                      )
                    );
                  };
                  this.provider.on(li.disconnect, y);
                  let v = yield c;
                  this.provider.off(li.disconnect, y), g(v);
                })
              );
              return (
                this.logger.trace(
                  {
                    id: o,
                    mSOLod: t.mSOLod,
                    topic: (n = t.params) == null ? void 0 : n.topic,
                  },
                  "relayer.request - published"
                ),
                l
              );
            } catch (c) {
              throw (this.logger.debug(`Failed to Publish Request: ${o}`), c);
            } finally {
              this.requestsInFlight.delete(o);
            }
          })),
        (this.resetPingTimeout = () => {
          if (Uo())
            try {
              clearTimeout(this.pingTimeout),
                (this.pingTimeout = setTimeout(() => {
                  var t, i, n;
                  (n =
                    (i = (t = this.provider) == null ? void 0 : t.connection) ==
                    null
                      ? void 0
                      : i.socket) == null || n.terminate();
                }, this.heartBeatTimeout));
            } catch (t) {
              this.logger.warn(t);
            }
        }),
        (this.onPayloadHandler = (t) => {
          this.onProviderPayload(t), this.resetPingTimeout();
        }),
        (this.onConnectHandler = () => {
          this.logger.trace("relayer connected"),
            this.startPingTimeout(),
            this.events.emit(Dr.connect);
        }),
        (this.onDisconnectHandler = () => {
          this.logger.trace("relayer disconnected"),
            this.onProviderDisconnect();
        }),
        (this.onProviderErrorHandler = (t) => {
          this.logger.error(t),
            this.events.emit(Dr.error, t),
            this.logger.info("Fatal socket error received, closing transport"),
            this.transportClose();
        }),
        (this.registerProviderListeners = () => {
          this.provider.on(li.payload, this.onPayloadHandler),
            this.provider.on(li.connect, this.onConnectHandler),
            this.provider.on(li.disconnect, this.onDisconnectHandler),
            this.provider.on(li.error, this.onProviderErrorHandler);
        }),
        (this.core = e.core),
        (this.logger =
          typeof e.logger < "u" && typeof e.logger != "string"
            ? yr(e.logger, this.name)
            : (0, zs.default)(ks({ level: e.logger || B9 }))),
        (this.messages = new b0(this.logger, e.core)),
        (this.subscriber = new A0(this, this.logger)),
        (this.publisher = new _0(this, this.logger)),
        (this.relayUrl = e?.relayUrl || i_),
        (this.projectId = e.projectId),
        (this.bundleId = ew()),
        (this.provider = {});
    }
    init() {
      return R(this, null, function* () {
        this.logger.trace("Initialized"),
          this.registerEventListeners(),
          yield Promise.all([this.messages.init(), this.subscriber.init()]),
          yield this.transportOpen(),
          (this.initialized = !0),
          setTimeout(
            () =>
              R(this, null, function* () {
                this.subscriber.topics.length === 0 &&
                  this.subscriber.pending.size === 0 &&
                  (this.logger.info(
                    "No topics subscribed to after init, closing transport"
                  ),
                  yield this.transportClose(),
                  (this.transportExplicitlyClosed = !1));
              }),
            H9
          );
      });
    }
    get context() {
      return mr(this.logger);
    }
    get connected() {
      var e, t, i;
      return (
        ((i =
          (t = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : t.socket) == null
          ? void 0
          : i.readyState) === 1
      );
    }
    get connecting() {
      var e, t, i;
      return (
        ((i =
          (t = (e = this.provider) == null ? void 0 : e.connection) == null
            ? void 0
            : t.socket) == null
          ? void 0
          : i.readyState) === 0
      );
    }
    publish(e, t, i) {
      return R(this, null, function* () {
        this.isInitialized(),
          yield this.publisher.publish(e, t, i),
          yield this.recordMessageEvent({
            topic: e,
            message: t,
            publishedAt: Date.now(),
          });
      });
    }
    subscribe(e, t) {
      return R(this, null, function* () {
        var i;
        this.isInitialized();
        let n =
            ((i = this.subscriber.topicMap.get(e)) == null ? void 0 : i[0]) ||
            "",
          o,
          c = (l) => {
            l.topic === e && (this.subscriber.off(sn.created, c), o());
          };
        return (
          yield Promise.all([
            new Promise((l) => {
              (o = l), this.subscriber.on(sn.created, c);
            }),
            new Promise((l) =>
              R(this, null, function* () {
                (n = (yield this.subscriber.subscribe(e, t)) || n), l();
              })
            ),
          ]),
          n
        );
      });
    }
    unsubscribe(e, t) {
      return R(this, null, function* () {
        this.isInitialized(), yield this.subscriber.unsubscribe(e, t);
      });
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    transportDisconnect() {
      return R(this, null, function* () {
        if (
          !this.hasExperiencedNetworkDisruption &&
          this.connected &&
          this.requestsInFlight.size > 0
        )
          try {
            yield Promise.all(
              Array.from(this.requestsInFlight.values()).map((e) => e.promise)
            );
          } catch (e) {
            this.logger.warn(e);
          }
        this.hasExperiencedNetworkDisruption || this.connected
          ? yield Us(
              this.provider.disconnect(),
              2e3,
              "provider.disconnect()"
            ).catch(() => this.onProviderDisconnect())
          : this.onProviderDisconnect();
      });
    }
    transportClose() {
      return R(this, null, function* () {
        (this.transportExplicitlyClosed = !0), yield this.transportDisconnect();
      });
    }
    transportOpen(e) {
      return R(this, null, function* () {
        yield this.confirmOnlineStateOrThrow(),
          e &&
            e !== this.relayUrl &&
            ((this.relayUrl = e), yield this.transportDisconnect()),
          yield this.createProvider(),
          (this.connectionAttemptInProgress = !0),
          (this.transportExplicitlyClosed = !1);
        try {
          yield new Promise((t, i) =>
            R(this, null, function* () {
              let n = () => {
                this.provider.off(li.disconnect, n),
                  i(
                    new Error(
                      "Connection interrupted while trying to subscribe"
                    )
                  );
              };
              this.provider.on(li.disconnect, n),
                yield Us(
                  this.provider.connect(),
                  (0, Re.toMiliseconds)(Re.ONE_MINUTE),
                  `Socket stalled when trying to connect to ${this.relayUrl}`
                ).catch((o) => {
                  i(o);
                }),
                this.subscriber.start().catch((o) => {
                  this.logger.error(o), this.onDisconnectHandler();
                }),
                (this.hasExperiencedNetworkDisruption = !1),
                t();
            })
          );
        } catch (t) {
          this.logger.error(t);
          let i = t;
          if (
            ((this.hasExperiencedNetworkDisruption = !0),
            !this.isConnectionStalled(i.message))
          )
            throw t;
        } finally {
          this.connectionAttemptInProgress = !1;
        }
      });
    }
    restartTransport(e) {
      return R(this, null, function* () {
        this.connectionAttemptInProgress ||
          ((this.relayUrl = e || this.relayUrl),
          yield this.confirmOnlineStateOrThrow(),
          yield this.transportClose(),
          yield this.transportOpen());
      });
    }
    confirmOnlineStateOrThrow() {
      return R(this, null, function* () {
        if (!(yield lp()))
          throw new Error(
            "No internet connection detected. Please restart your network and try again."
          );
      });
    }
    handleBatchMessageEvents(e) {
      return R(this, null, function* () {
        if (e?.length === 0) {
          this.logger.trace("Batch message events is empty. Ignoring...");
          return;
        }
        let t = e.sort((i, n) => i.publishedAt - n.publishedAt);
        this.logger.trace(`Batch of ${t.length} message events sorted`);
        for (let i of t)
          try {
            yield this.onMessageEvent(i);
          } catch (n) {
            this.logger.warn(n);
          }
        this.logger.trace(`Batch of ${t.length} message events processed`);
      });
    }
    startPingTimeout() {
      var e, t, i, n, o;
      if (Uo())
        try {
          (t = (e = this.provider) == null ? void 0 : e.connection) != null &&
            t.socket &&
            ((o =
              (n = (i = this.provider) == null ? void 0 : i.connection) == null
                ? void 0
                : n.socket) == null ||
              o.once("ping", () => {
                this.resetPingTimeout();
              })),
            this.resetPingTimeout();
        } catch (c) {
          this.logger.warn(c);
        }
    }
    isConnectionStalled(e) {
      return this.staleConnectionErrors.some((t) => e.includes(t));
    }
    createProvider() {
      return R(this, null, function* () {
        this.provider.connection && this.unregisterProviderListeners();
        let e = yield this.core.crypto.signJWT(this.relayUrl);
        (this.provider = new Lr(
          new Vh(
            rw({
              sdkVersion: k9,
              protocol: this.protocol,
              version: this.version,
              relayUrl: this.relayUrl,
              projectId: this.projectId,
              auth: e,
              useOnCloseEvent: !0,
              bundleId: this.bundleId,
            })
          )
        )),
          this.registerProviderListeners();
      });
    }
    recordMessageEvent(e) {
      return R(this, null, function* () {
        let { topic: t, message: i } = e;
        yield this.messages.set(t, i);
      });
    }
    shouldIgnoreMessageEvent(e) {
      return R(this, null, function* () {
        let { topic: t, message: i } = e;
        if (!i || i.length === 0)
          return this.logger.debug(`Ignoring invalid/empty message: ${i}`), !0;
        if (!(yield this.subscriber.isSubscribed(t)))
          return (
            this.logger.debug(`Ignoring message for non-subscribed topic ${t}`),
            !0
          );
        let n = this.messages.has(t, i);
        return n && this.logger.debug(`Ignoring duplicate message: ${i}`), n;
      });
    }
    onProviderPayload(e) {
      return R(this, null, function* () {
        if (
          (this.logger.debug("Incoming Relay Payload"),
          this.logger.trace({
            type: "payload",
            direction: "incoming",
            payload: e,
          }),
          Zo(e))
        ) {
          if (!e.mSOLod.endsWith(j9)) return;
          let t = e.params,
            { topic: i, message: n, publishedAt: o } = t.data,
            c = { topic: i, message: n, publishedAt: o };
          this.logger.debug("Emitting Relayer Payload"),
            this.logger.trace(dF({ type: "event", event: t.id }, c)),
            this.events.emit(t.id, c),
            yield this.acknowledgePayload(e),
            yield this.onMessageEvent(c);
        } else ms(e) && this.events.emit(Dr.message_ack, e);
      });
    }
    onMessageEvent(e) {
      return R(this, null, function* () {
        (yield this.shouldIgnoreMessageEvent(e)) ||
          (this.events.emit(Dr.message, e), yield this.recordMessageEvent(e));
      });
    }
    acknowledgePayload(e) {
      return R(this, null, function* () {
        let t = gs(e.id, !0);
        yield this.provider.connection.send(t);
      });
    }
    unregisterProviderListeners() {
      this.provider.off(li.payload, this.onPayloadHandler),
        this.provider.off(li.connect, this.onConnectHandler),
        this.provider.off(li.disconnect, this.onDisconnectHandler),
        this.provider.off(li.error, this.onProviderErrorHandler),
        clearTimeout(this.pingTimeout);
    }
    registerEventListeners() {
      return R(this, null, function* () {
        let e = yield lp();
        vb((t) =>
          R(this, null, function* () {
            e !== t &&
              ((e = t),
              t
                ? yield this.restartTransport().catch((i) =>
                    this.logger.error(i)
                  )
                : ((this.hasExperiencedNetworkDisruption = !0),
                  yield this.transportDisconnect(),
                  (this.transportExplicitlyClosed = !1)));
          })
        );
      });
    }
    onProviderDisconnect() {
      return R(this, null, function* () {
        yield this.subscriber.stop(),
          this.requestsInFlight.clear(),
          clearTimeout(this.pingTimeout),
          this.events.emit(Dr.disconnect),
          (this.connectionAttemptInProgress = !1),
          !this.transportExplicitlyClosed &&
            setTimeout(
              () =>
                R(this, null, function* () {
                  yield this.transportOpen().catch((e) => this.logger.error(e));
                }),
              (0, Re.toMiliseconds)(z9)
            );
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    toEstablishConnection() {
      return R(this, null, function* () {
        yield this.confirmOnlineStateOrThrow(),
          !this.connected &&
            (this.connectionAttemptInProgress &&
              (yield new Promise((e) => {
                let t = setInterval(() => {
                  this.connected && (clearInterval(t), e());
                }, this.connectionStatusPollingInterval);
              })),
            yield this.transportOpen());
      });
    }
  },
  pF = Object.defineProperty,
  B3 = Object.getOwnPropertySymbols,
  gF = Object.prototype.hasOwnProperty,
  mF = Object.prototype.propertyIsEnumerable,
  q3 = (r, e, t) =>
    e in r
      ? pF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  j3 = (r, e) => {
    for (var t in e || (e = {})) gF.call(e, t) && q3(r, t, e[t]);
    if (B3) for (var t of B3(e)) mF.call(e, t) && q3(r, t, e[t]);
    return r;
  },
  on = class extends xh {
    constructor(e, t, i, n = ws, o = void 0) {
      super(e, t, i, n),
        (this.core = e),
        (this.logger = t),
        (this.name = i),
        (this.map = new Map()),
        (this.version = K9),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.recentlyDeleted = []),
        (this.recentlyDeletedLimit = 200),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((c) => {
                this.getKey && c !== null && !sr(c)
                  ? this.map.set(this.getKey(c), c)
                  : nb(c)
                  ? this.map.set(c.id, c)
                  : sb(c) && this.map.set(c.topic, c);
              }),
              (this.cached = []),
              (this.initialized = !0));
          })),
        (this.set = (c, l) =>
          R(this, null, function* () {
            this.isInitialized(),
              this.map.has(c)
                ? yield this.update(c, l)
                : (this.logger.debug("Setting value"),
                  this.logger.trace({
                    type: "mSOLod",
                    mSOLod: "set",
                    key: c,
                    value: l,
                  }),
                  this.map.set(c, l),
                  yield this.persist());
          })),
        (this.get = (c) => (
          this.isInitialized(),
          this.logger.debug("Getting value"),
          this.logger.trace({ type: "mSOLod", mSOLod: "get", key: c }),
          this.getData(c)
        )),
        (this.getAll = (c) => (
          this.isInitialized(),
          c
            ? this.values.filter((l) =>
                Object.keys(c).every((g) => (0, K3.default)(l[g], c[g]))
              )
            : this.values
        )),
        (this.update = (c, l) =>
          R(this, null, function* () {
            this.isInitialized(),
              this.logger.debug("Updating value"),
              this.logger.trace({
                type: "mSOLod",
                mSOLod: "update",
                key: c,
                update: l,
              });
            let g = j3(j3({}, this.getData(c)), l);
            this.map.set(c, g), yield this.persist();
          })),
        (this.delete = (c, l) =>
          R(this, null, function* () {
            this.isInitialized(),
              this.map.has(c) &&
                (this.logger.debug("Deleting value"),
                this.logger.trace({
                  type: "mSOLod",
                  mSOLod: "delete",
                  key: c,
                  reason: l,
                }),
                this.map.delete(c),
                this.addToRecentlyDeleted(c),
                yield this.persist());
          })),
        (this.logger = yr(t, this.name)),
        (this.storagePrefix = n),
        (this.getKey = o);
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.map.size;
    }
    get keys() {
      return Array.from(this.map.keys());
    }
    get values() {
      return Array.from(this.map.values());
    }
    addToRecentlyDeleted(e) {
      this.recentlyDeleted.push(e),
        this.recentlyDeleted.length >= this.recentlyDeletedLimit &&
          this.recentlyDeleted.splice(0, this.recentlyDeletedLimit / 2);
    }
    setDataStore(e) {
      return R(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getDataStore() {
      return R(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getData(e) {
      let t = this.map.get(e);
      if (!t) {
        if (this.recentlyDeleted.includes(e)) {
          let { message: n } = de(
            "MISSING_OR_INVALID",
            `Record was recently deleted - ${this.name}: ${e}`
          );
          throw (this.logger.error(n), new Error(n));
        }
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.error(i), new Error(i));
      }
      return t;
    }
    persist() {
      return R(this, null, function* () {
        yield this.setDataStore(this.values);
      });
    }
    restore() {
      return R(this, null, function* () {
        try {
          let e = yield this.getDataStore();
          if (typeof e > "u" || !e.length) return;
          if (this.map.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored value for ${this.name}`),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "restore",
              value: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore value for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  x0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.name = W9),
        (this.version = Y9),
        (this.events = new Hn.default()),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.ignoredPayloadTypes = [Si]),
        (this.registeredMSOLods = []),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (yield this.pairings.init(),
              yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              (this.initialized = !0),
              this.logger.trace("Initialized"));
          })),
        (this.register = ({ mSOLods: i }) => {
          this.isInitialized(),
            (this.registeredMSOLods = [
              ...new Set([...this.registeredMSOLods, ...i]),
            ]);
        }),
        (this.create = (i) =>
          R(this, null, function* () {
            this.isInitialized();
            let n = oh(),
              o = yield this.core.crypto.setSymKey(n),
              c = Jt(Re.FIVE_MINUTES),
              l = { protocol: M0 },
              g = { topic: o, expiry: c, relay: l, active: !1 },
              d = tb({
                protocol: this.core.protocol,
                version: this.core.version,
                topic: o,
                symKey: n,
                relay: l,
                expiryTimestamp: c,
                mSOLods: i?.mSOLods,
              });
            return (
              this.core.expirer.set(o, c),
              yield this.pairings.set(o, g),
              yield this.core.relayer.subscribe(o),
              { topic: o, uri: d }
            );
          })),
        (this.pair = (i) =>
          R(this, null, function* () {
            this.isInitialized(), this.isValidPair(i);
            let {
                topic: n,
                symKey: o,
                relay: c,
                expiryTimestamp: l,
                mSOLods: g,
              } = sp(i.uri),
              d;
            if (
              this.pairings.keys.includes(n) &&
              ((d = this.pairings.get(n)), d.active)
            )
              throw new Error(
                `Pairing already exists: ${n}. Please try again with a new connection URI.`
              );
            let y = l || Jt(Re.FIVE_MINUTES),
              v = { topic: n, relay: c, expiry: y, active: !1, mSOLods: g };
            return (
              this.core.expirer.set(n, y),
              yield this.pairings.set(n, v),
              i.activatePairing && (yield this.activate({ topic: n })),
              this.events.emit(Ys.create, v),
              this.core.crypto.keychain.has(n) ||
                (yield this.core.crypto.setSymKey(o, n)),
              yield this.core.relayer.subscribe(n, { relay: c }),
              v
            );
          })),
        (this.activate = (n) =>
          R(this, [n], function* ({ topic: i }) {
            this.isInitialized();
            let o = Jt(Re.THIRTY_DAYS);
            this.core.expirer.set(i, o),
              yield this.pairings.update(i, { active: !0, expiry: o });
          })),
        (this.ping = (i) =>
          R(this, null, function* () {
            this.isInitialized(), yield this.isValidPing(i);
            let { topic: n } = i;
            if (this.pairings.keys.includes(n)) {
              let o = yield this.sendRequest(n, "wc_pairingPing", {}),
                { done: c, resolve: l, reject: g } = Ln();
              this.events.once(Ne("pairing_ping", o), ({ error: d }) => {
                d ? g(d) : l();
              }),
                yield c();
            }
          })),
        (this.updateExpiry = (o) =>
          R(this, [o], function* ({ topic: i, expiry: n }) {
            this.isInitialized(), yield this.pairings.update(i, { expiry: n });
          })),
        (this.updateMetadata = (o) =>
          R(this, [o], function* ({ topic: i, metadata: n }) {
            this.isInitialized(),
              yield this.pairings.update(i, { peerMetadata: n });
          })),
        (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
        (this.disconnect = (i) =>
          R(this, null, function* () {
            this.isInitialized(), yield this.isValidDisconnect(i);
            let { topic: n } = i;
            this.pairings.keys.includes(n) &&
              (yield this.sendRequest(
                n,
                "wc_pairingDelete",
                ke("USER_DISCONNECTED")
              ),
              yield this.deletePairing(n));
          })),
        (this.sendRequest = (i, n, o) =>
          R(this, null, function* () {
            let c = rn(n, o),
              l = yield this.core.crypto.encode(i, c),
              g = Rc[n].req;
            return (
              this.core.history.set(i, c),
              this.core.relayer.publish(i, l, g),
              c.id
            );
          })),
        (this.sendResult = (i, n, o) =>
          R(this, null, function* () {
            let c = gs(i, o),
              l = yield this.core.crypto.encode(n, c),
              g = yield this.core.history.get(n, i),
              d = Rc[g.request.mSOLod].res;
            yield this.core.relayer.publish(n, l, d),
              yield this.core.history.resolve(c);
          })),
        (this.sendError = (i, n, o) =>
          R(this, null, function* () {
            let c = jn(i, o),
              l = yield this.core.crypto.encode(n, c),
              g = yield this.core.history.get(n, i),
              d = Rc[g.request.mSOLod]
                ? Rc[g.request.mSOLod].res
                : Rc.unregistered_mSOLod.res;
            yield this.core.relayer.publish(n, l, d),
              yield this.core.history.resolve(c);
          })),
        (this.deletePairing = (i, n) =>
          R(this, null, function* () {
            yield this.core.relayer.unsubscribe(i),
              yield Promise.all([
                this.pairings.delete(i, ke("USER_DISCONNECTED")),
                this.core.crypto.deleteSymKey(i),
                n ? Promise.resolve() : this.core.expirer.del(i),
              ]);
          })),
        (this.cleanup = () =>
          R(this, null, function* () {
            let i = this.pairings.getAll().filter((n) => Qi(n.expiry));
            yield Promise.all(i.map((n) => this.deletePairing(n.topic)));
          })),
        (this.onRelayEventRequest = (i) => {
          let { topic: n, payload: o } = i;
          switch (o.mSOLod) {
            case "wc_pairingPing":
              return this.onPairingPingRequest(n, o);
            case "wc_pairingDelete":
              return this.onPairingDeleteRequest(n, o);
            default:
              return this.onUnknownRpcMSOLodRequest(n, o);
          }
        }),
        (this.onRelayEventResponse = (i) =>
          R(this, null, function* () {
            let { topic: n, payload: o } = i,
              c = (yield this.core.history.get(n, o.id)).request.mSOLod;
            switch (c) {
              case "wc_pairingPing":
                return this.onPairingPingResponse(n, o);
              default:
                return this.onUnknownRpcMSOLodResponse(c);
            }
          })),
        (this.onPairingPingRequest = (i, n) =>
          R(this, null, function* () {
            let { id: o } = n;
            try {
              this.isValidPing({ topic: i }),
                yield this.sendResult(o, i, !0),
                this.events.emit(Ys.ping, { id: o, topic: i });
            } catch (c) {
              yield this.sendError(o, i, c), this.logger.error(c);
            }
          })),
        (this.onPairingPingResponse = (i, n) => {
          let { id: o } = n;
          setTimeout(() => {
            Wr(n)
              ? this.events.emit(Ne("pairing_ping", o), {})
              : vr(n) &&
                this.events.emit(Ne("pairing_ping", o), { error: n.error });
          }, 500);
        }),
        (this.onPairingDeleteRequest = (i, n) =>
          R(this, null, function* () {
            let { id: o } = n;
            try {
              this.isValidDisconnect({ topic: i }),
                yield this.deletePairing(i),
                this.events.emit(Ys.delete, { id: o, topic: i });
            } catch (c) {
              yield this.sendError(o, i, c), this.logger.error(c);
            }
          })),
        (this.onUnknownRpcMSOLodRequest = (i, n) =>
          R(this, null, function* () {
            let { id: o, mSOLod: c } = n;
            try {
              if (this.registeredMSOLods.includes(c)) return;
              let l = ke("WC_MSOLOD_UNSUPPORTED", c);
              yield this.sendError(o, i, l), this.logger.error(l);
            } catch (l) {
              yield this.sendError(o, i, l), this.logger.error(l);
            }
          })),
        (this.onUnknownRpcMSOLodResponse = (i) => {
          this.registeredMSOLods.includes(i) ||
            this.logger.error(ke("WC_MSOLOD_UNSUPPORTED", i));
        }),
        (this.isValidPair = (i) => {
          var n;
          if (!gr(i)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              `pair() params: ${i}`
            );
            throw new Error(c);
          }
          if (!ib(i.uri)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              `pair() uri: ${i.uri}`
            );
            throw new Error(c);
          }
          let o = sp(i.uri);
          if (!((n = o?.relay) != null && n.protocol)) {
            let { message: c } = de(
              "MISSING_OR_INVALID",
              "pair() uri#relay-protocol"
            );
            throw new Error(c);
          }
          if (!(o != null && o.symKey)) {
            let { message: c } = de("MISSING_OR_INVALID", "pair() uri#symKey");
            throw new Error(c);
          }
          if (
            o != null &&
            o.expiryTimestamp &&
            (0, Re.toMiliseconds)(o?.expiryTimestamp) < Date.now()
          ) {
            let { message: c } = de(
              "EXPIRED",
              "pair() URI has expired. Please try again with a new connection URI."
            );
            throw new Error(c);
          }
        }),
        (this.isValidPing = (i) =>
          R(this, null, function* () {
            if (!gr(i)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `ping() params: ${i}`
              );
              throw new Error(o);
            }
            let { topic: n } = i;
            yield this.isValidPairingTopic(n);
          })),
        (this.isValidDisconnect = (i) =>
          R(this, null, function* () {
            if (!gr(i)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `disconnect() params: ${i}`
              );
              throw new Error(o);
            }
            let { topic: n } = i;
            yield this.isValidPairingTopic(n);
          })),
        (this.isValidPairingTopic = (i) =>
          R(this, null, function* () {
            if (!Ft(i, !1)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `pairing topic should be a string: ${i}`
              );
              throw new Error(n);
            }
            if (!this.pairings.keys.includes(i)) {
              let { message: n } = de(
                "NO_MATCHING_KEY",
                `pairing topic doesn't exist: ${i}`
              );
              throw new Error(n);
            }
            if (Qi(this.pairings.get(i).expiry)) {
              yield this.deletePairing(i);
              let { message: n } = de("EXPIRED", `pairing topic: ${i}`);
              throw new Error(n);
            }
          })),
        (this.core = e),
        (this.logger = yr(t, this.name)),
        (this.pairings = new on(
          this.core,
          this.logger,
          this.name,
          this.storagePrefix
        ));
    }
    get context() {
      return mr(this.logger);
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
    registerRelayerEvents() {
      this.core.relayer.on(Dr.message, (e) =>
        R(this, null, function* () {
          let { topic: t, message: i } = e;
          if (
            !this.pairings.keys.includes(t) ||
            this.ignoredPayloadTypes.includes(
              this.core.crypto.getPayloadType(i)
            )
          )
            return;
          let n = yield this.core.crypto.decode(t, i);
          try {
            Zo(n)
              ? (this.core.history.set(t, n),
                this.onRelayEventRequest({ topic: t, payload: n }))
              : ms(n) &&
                (yield this.core.history.resolve(n),
                yield this.onRelayEventResponse({ topic: t, payload: n }),
                this.core.history.delete(t, n.id));
          } catch (o) {
            this.logger.error(o);
          }
        })
      );
    }
    registerExpirerEvents() {
      this.core.expirer.on(Yr.expired, (e) =>
        R(this, null, function* () {
          let { topic: t } = nh(e.target);
          t &&
            this.pairings.keys.includes(t) &&
            (yield this.deletePairing(t, !0),
            this.events.emit(Ys.expire, { topic: t }));
        })
      );
    }
  },
  I0 = class extends _h {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        (this.records = new Map()),
        (this.events = new Hn.EventEmitter()),
        (this.name = Q9),
        (this.version = X9),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((i) => this.records.set(i.id, i)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })),
        (this.set = (i, n, o) => {
          if (
            (this.isInitialized(),
            this.logger.debug("Setting JSON-RPC request history record"),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "set",
              topic: i,
              request: n,
              chainId: o,
            }),
            this.records.has(n.id))
          )
            return;
          let c = {
            id: n.id,
            topic: i,
            request: { mSOLod: n.mSOLod, params: n.params || null },
            chainId: o,
            expiry: Jt(Re.THIRTY_DAYS),
          };
          this.records.set(c.id, c),
            this.persist(),
            this.events.emit(Di.created, c);
        }),
        (this.resolve = (i) =>
          R(this, null, function* () {
            if (
              (this.isInitialized(),
              this.logger.debug("Updating JSON-RPC response history record"),
              this.logger.trace({
                type: "mSOLod",
                mSOLod: "update",
                response: i,
              }),
              !this.records.has(i.id))
            )
              return;
            let n = yield this.getRecord(i.id);
            typeof n.response > "u" &&
              ((n.response = vr(i) ? { error: i.error } : { result: i.result }),
              this.records.set(n.id, n),
              this.persist(),
              this.events.emit(Di.updated, n));
          })),
        (this.get = (i, n) =>
          R(this, null, function* () {
            return (
              this.isInitialized(),
              this.logger.debug("Getting record"),
              this.logger.trace({
                type: "mSOLod",
                mSOLod: "get",
                topic: i,
                id: n,
              }),
              yield this.getRecord(n)
            );
          })),
        (this.delete = (i, n) => {
          this.isInitialized(),
            this.logger.debug("Deleting record"),
            this.logger.trace({ type: "mSOLod", mSOLod: "delete", id: n }),
            this.values.forEach((o) => {
              if (o.topic === i) {
                if (typeof n < "u" && o.id !== n) return;
                this.records.delete(o.id), this.events.emit(Di.deleted, o);
              }
            }),
            this.persist();
        }),
        (this.exists = (i, n) =>
          R(this, null, function* () {
            return (
              this.isInitialized(),
              this.records.has(n) ? (yield this.getRecord(n)).topic === i : !1
            );
          })),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.logger = yr(t, this.name));
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get size() {
      return this.records.size;
    }
    get keys() {
      return Array.from(this.records.keys());
    }
    get values() {
      return Array.from(this.records.values());
    }
    get pending() {
      let e = [];
      return (
        this.values.forEach((t) => {
          if (typeof t.response < "u") return;
          let i = {
            topic: t.topic,
            request: rn(t.request.mSOLod, t.request.params, t.id),
            chainId: t.chainId,
          };
          return e.push(i);
        }),
        e
      );
    }
    setJsonRpcRecords(e) {
      return R(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getJsonRpcRecords() {
      return R(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    getRecord(e) {
      this.isInitialized();
      let t = this.records.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw new Error(i);
      }
      return t;
    }
    persist() {
      return R(this, null, function* () {
        yield this.setJsonRpcRecords(this.values), this.events.emit(Di.sync);
      });
    }
    restore() {
      return R(this, null, function* () {
        try {
          let e = yield this.getJsonRpcRecords();
          if (typeof e > "u" || !e.length) return;
          if (this.records.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(`Successfully Restored records for ${this.name}`),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "restore",
              records: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore records for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    registerEventListeners() {
      this.events.on(Di.created, (e) => {
        let t = Di.created;
        this.logger.info(`Emitting ${t}`),
          this.logger.debug({ type: "event", event: t, record: e });
      }),
        this.events.on(Di.updated, (e) => {
          let t = Di.updated;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, record: e });
        }),
        this.events.on(Di.deleted, (e) => {
          let t = Di.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, record: e });
        }),
        this.core.heartbeat.on($o.pulse, () => {
          this.cleanup();
        });
    }
    cleanup() {
      try {
        this.isInitialized();
        let e = !1;
        this.records.forEach((t) => {
          (0, Re.toMiliseconds)(t.expiry || 0) - Date.now() <= 0 &&
            (this.logger.info(`Deleting expired history log: ${t.id}`),
            this.records.delete(t.id),
            this.events.emit(Di.deleted, t, !1),
            (e = !0));
        }),
          e && this.persist();
      } catch (e) {
        this.logger.warn(e);
      }
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  D0 = class extends Dh {
    constructor(e, t) {
      super(e, t),
        (this.core = e),
        (this.logger = t),
        (this.expirations = new Map()),
        (this.events = new Hn.EventEmitter()),
        (this.name = Z9),
        (this.version = eF),
        (this.cached = []),
        (this.initialized = !1),
        (this.storagePrefix = ws),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (this.logger.trace("Initialized"),
              yield this.restore(),
              this.cached.forEach((i) => this.expirations.set(i.target, i)),
              (this.cached = []),
              this.registerEventListeners(),
              (this.initialized = !0));
          })),
        (this.has = (i) => {
          try {
            let n = this.formatTarget(i);
            return typeof this.getExpiration(n) < "u";
          } catch {
            return !1;
          }
        }),
        (this.set = (i, n) => {
          this.isInitialized();
          let o = this.formatTarget(i),
            c = { target: o, expiry: n };
          this.expirations.set(o, c),
            this.checkExpiry(o, c),
            this.events.emit(Yr.created, { target: o, expiration: c });
        }),
        (this.get = (i) => {
          this.isInitialized();
          let n = this.formatTarget(i);
          return this.getExpiration(n);
        }),
        (this.del = (i) => {
          if ((this.isInitialized(), this.has(i))) {
            let n = this.formatTarget(i),
              o = this.getExpiration(n);
            this.expirations.delete(n),
              this.events.emit(Yr.deleted, { target: n, expiration: o });
          }
        }),
        (this.on = (i, n) => {
          this.events.on(i, n);
        }),
        (this.once = (i, n) => {
          this.events.once(i, n);
        }),
        (this.off = (i, n) => {
          this.events.off(i, n);
        }),
        (this.removeListener = (i, n) => {
          this.events.removeListener(i, n);
        }),
        (this.logger = yr(t, this.name));
    }
    get context() {
      return mr(this.logger);
    }
    get storageKey() {
      return (
        this.storagePrefix +
        this.version +
        this.core.customStoragePrefix +
        "//" +
        this.name
      );
    }
    get length() {
      return this.expirations.size;
    }
    get keys() {
      return Array.from(this.expirations.keys());
    }
    get values() {
      return Array.from(this.expirations.values());
    }
    formatTarget(e) {
      if (typeof e == "string") return nw(e);
      if (typeof e == "number") return sw(e);
      let { message: t } = de("UNKNOWN_TYPE", `Target type: ${typeof e}`);
      throw new Error(t);
    }
    setExpirations(e) {
      return R(this, null, function* () {
        yield this.core.storage.setItem(this.storageKey, e);
      });
    }
    getExpirations() {
      return R(this, null, function* () {
        return yield this.core.storage.getItem(this.storageKey);
      });
    }
    persist() {
      return R(this, null, function* () {
        yield this.setExpirations(this.values), this.events.emit(Yr.sync);
      });
    }
    restore() {
      return R(this, null, function* () {
        try {
          let e = yield this.getExpirations();
          if (typeof e > "u" || !e.length) return;
          if (this.expirations.size) {
            let { message: t } = de("RESTORE_WILL_OVERRIDE", this.name);
            throw (this.logger.error(t), new Error(t));
          }
          (this.cached = e),
            this.logger.debug(
              `Successfully Restored expirations for ${this.name}`
            ),
            this.logger.trace({
              type: "mSOLod",
              mSOLod: "restore",
              expirations: this.values,
            });
        } catch (e) {
          this.logger.debug(`Failed to Restore expirations for ${this.name}`),
            this.logger.error(e);
        }
      });
    }
    getExpiration(e) {
      let t = this.expirations.get(e);
      if (!t) {
        let { message: i } = de("NO_MATCHING_KEY", `${this.name}: ${e}`);
        throw (this.logger.warn(i), new Error(i));
      }
      return t;
    }
    checkExpiry(e, t) {
      let { expiry: i } = t;
      (0, Re.toMiliseconds)(i) - Date.now() <= 0 && this.expire(e, t);
    }
    expire(e, t) {
      this.expirations.delete(e),
        this.events.emit(Yr.expired, { target: e, expiration: t });
    }
    checkExpirations() {
      this.core.relayer.connected &&
        this.expirations.forEach((e, t) => this.checkExpiry(t, e));
    }
    registerEventListeners() {
      this.core.heartbeat.on($o.pulse, () => this.checkExpirations()),
        this.events.on(Yr.created, (e) => {
          let t = Yr.created;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        }),
        this.events.on(Yr.expired, (e) => {
          let t = Yr.expired;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        }),
        this.events.on(Yr.deleted, (e) => {
          let t = Yr.deleted;
          this.logger.info(`Emitting ${t}`),
            this.logger.debug({ type: "event", event: t, data: e }),
            this.persist();
        });
    }
    isInitialized() {
      if (!this.initialized) {
        let { message: e } = de("NOT_INITIALIZED", this.name);
        throw new Error(e);
      }
    }
  },
  R0 = class extends Rh {
    constructor(e, t) {
      super(e, t),
        (this.projectId = e),
        (this.logger = t),
        (this.name = c0),
        (this.initialized = !1),
        (this.queue = []),
        (this.verifyDisabled = !1),
        (this.init = (i) =>
          R(this, null, function* () {
            if (this.verifyDisabled || Ls() || !hs()) return;
            let n = this.getVerifyUrl(i?.verifyUrl);
            this.verifyUrl !== n && this.removeIframe(), (this.verifyUrl = n);
            try {
              yield this.createIframe();
            } catch (o) {
              this.logger.info(
                `Verify iframe failed to load: ${this.verifyUrl}`
              ),
                this.logger.info(o),
                (this.verifyDisabled = !0);
            }
          })),
        (this.register = (i) =>
          R(this, null, function* () {
            this.initialized
              ? this.sendPost(i.attestationId)
              : (this.addToQueue(i.attestationId), yield this.init());
          })),
        (this.resolve = (i) =>
          R(this, null, function* () {
            if (this.isDevEnv) return "";
            let n = this.getVerifyUrl(i?.verifyUrl);
            return this.fetchAttestation(i.attestationId, n);
          })),
        (this.fetchAttestation = (i, n) =>
          R(this, null, function* () {
            this.logger.info(`resolving attestation: ${i} from url: ${n}`);
            let o = this.startAbortTimer(Re.ONE_SECOND * 5),
              c = yield fetch(`${n}/attestation/${i}`, {
                signal: this.abortController.signal,
              });
            return clearTimeout(o), c.status === 200 ? yield c.json() : void 0;
          })),
        (this.addToQueue = (i) => {
          this.queue.push(i);
        }),
        (this.processQueue = () => {
          this.queue.length !== 0 &&
            (this.queue.forEach((i) => this.sendPost(i)), (this.queue = []));
        }),
        (this.sendPost = (i) => {
          var n;
          try {
            if (!this.iframe) return;
            (n = this.iframe.contentWindow) == null || n.postMessage(i, "*"),
              this.logger.info(`postMessage sent: ${i} ${this.verifyUrl}`);
          } catch {}
        }),
        (this.createIframe = () =>
          R(this, null, function* () {
            let i,
              n = (o) => {
                o.data === "verify_ready" &&
                  (this.onInit(),
                  window.removeEventListener("message", n),
                  i());
              };
            yield Promise.race([
              new Promise((o) => {
                let c = document.getElementById(c0);
                if (c) return (this.iframe = c), this.onInit(), o();
                window.addEventListener("message", n);
                let l = document.createElement("iframe");
                (l.id = c0),
                  (l.src = `${this.verifyUrl}/${this.projectId}`),
                  (l.style.display = "none"),
                  document.body.append(l),
                  (this.iframe = l),
                  (i = o);
              }),
              new Promise((o, c) =>
                setTimeout(() => {
                  window.removeEventListener("message", n),
                    c("verify iframe load timeout");
                }, (0, Re.toMiliseconds)(Re.FIVE_SECONDS))
              ),
            ]);
          })),
        (this.onInit = () => {
          (this.initialized = !0), this.processQueue();
        }),
        (this.removeIframe = () => {
          this.iframe &&
            (this.iframe.remove(),
            (this.iframe = void 0),
            (this.initialized = !1));
        }),
        (this.getVerifyUrl = (i) => {
          let n = i || ia;
          return (
            rF.includes(n) ||
              (this.logger.info(
                `verify url: ${n}, not included in trusted list, assigning default: ${ia}`
              ),
              (n = ia)),
            n
          );
        }),
        (this.logger = yr(t, this.name)),
        (this.verifyUrl = ia),
        (this.abortController = new AbortController()),
        (this.isDevEnv = Uo() && process.env.IS_VITEST);
    }
    get context() {
      return mr(this.logger);
    }
    startAbortTimer(e) {
      return (
        (this.abortController = new AbortController()),
        setTimeout(() => this.abortController.abort(), (0, Re.toMiliseconds)(e))
      );
    }
  },
  C0 = class extends Ch {
    constructor(e, t) {
      super(e, t),
        (this.projectId = e),
        (this.logger = t),
        (this.context = iF),
        (this.registerDeviceToken = (i) =>
          R(this, null, function* () {
            let {
                clientId: n,
                token: o,
                notificationType: c,
                enableEncrypted: l = !1,
              } = i,
              g = `${nF}/${this.projectId}/clients`;
            yield (0,
            V3.default)(g, { mSOLod: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ client_id: n, type: c, token: o, always_raw: l }) });
          })),
        (this.logger = yr(t, this.context));
    }
  },
  yF = Object.defineProperty,
  z3 = Object.getOwnPropertySymbols,
  vF = Object.prototype.hasOwnProperty,
  wF = Object.prototype.propertyIsEnumerable,
  k3 = (r, e, t) =>
    e in r
      ? yF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  H3 = (r, e) => {
    for (var t in e || (e = {})) vF.call(e, t) && k3(r, t, e[t]);
    if (z3) for (var t of z3(e)) wF.call(e, t) && k3(r, t, e[t]);
    return r;
  },
  O0 = class r extends bh {
    constructor(e) {
      var t;
      super(e),
        (this.protocol = r_),
        (this.version = D9),
        (this.name = P0),
        (this.events = new Hn.EventEmitter()),
        (this.initialized = !1),
        (this.on = (c, l) => this.events.on(c, l)),
        (this.once = (c, l) => this.events.once(c, l)),
        (this.off = (c, l) => this.events.off(c, l)),
        (this.removeListener = (c, l) => this.events.removeListener(c, l)),
        (this.projectId = e?.projectId),
        (this.relayUrl = e?.relayUrl || i_),
        (this.customStoragePrefix =
          e != null && e.customStoragePrefix
            ? `:${e.customStoragePrefix}`
            : "");
      let i = ks({
          level:
            typeof e?.logger == "string" && e.logger ? e.logger : R9.logger,
        }),
        { logger: n, chunkLoggerController: o } = zb({
          opts: i,
          maxSizeInBytes: e?.maxLogBlobSizeInBytes,
          loggerOverride: e?.logger,
        });
      (this.logChunkController = o),
        (t = this.logChunkController) != null &&
          t.downloadLogsBlobInBrowser &&
          (window.downloadLogsBlobInBrowser = () =>
            R(this, null, function* () {
              var c, l;
              (c = this.logChunkController) != null &&
                c.downloadLogsBlobInBrowser &&
                ((l = this.logChunkController) == null ||
                  l.downloadLogsBlobInBrowser({
                    clientId: yield this.crypto.getClientId(),
                  }));
            })),
        (this.logger = yr(n, this.name)),
        (this.heartbeat = new fh()),
        (this.crypto = new w0(this, this.logger, e?.keychain)),
        (this.history = new I0(this, this.logger)),
        (this.expirer = new D0(this, this.logger)),
        (this.storage =
          e != null && e.storage
            ? e.storage
            : new lh(H3(H3({}, C9), e?.storageOptions))),
        (this.relayer = new S0({
          core: this,
          logger: this.logger,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
        })),
        (this.pairing = new x0(this, this.logger)),
        (this.verify = new R0(this.projectId || "", this.logger)),
        (this.echoClient = new C0(this.projectId || "", this.logger));
    }
    static init(e) {
      return R(this, null, function* () {
        let t = new r(e);
        yield t.initialize();
        let i = yield t.crypto.getClientId();
        return yield t.storage.setItem(V9, i), t;
      });
    }
    get context() {
      return mr(this.logger);
    }
    start() {
      return R(this, null, function* () {
        this.initialized || (yield this.initialize());
      });
    }
    getLogsBlob() {
      return R(this, null, function* () {
        var e;
        return (e = this.logChunkController) == null
          ? void 0
          : e.logsToBlob({ clientId: yield this.crypto.getClientId() });
      });
    }
    initialize() {
      return R(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.crypto.init(),
            yield this.history.init(),
            yield this.expirer.init(),
            yield this.relayer.init(),
            yield this.heartbeat.init(),
            yield this.pairing.init(),
            (this.initialized = !0),
            this.logger.info("Core Initialization Success");
        } catch (e) {
          throw (
            (this.logger.warn(
              `Core Initialization Failure at epoch ${Date.now()}`,
              e
            ),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
  },
  s_ = O0;
var ol = Je(xn()),
  qe = Je(bo());
var u_ = "wc",
  h_ = 2,
  l_ = "client",
  H0 = `${u_}@${h_}:${l_}:`,
  N0 = {
    name: l_,
    logger: "error",
    controller: !1,
    relayUrl: "wss://relay.walletconnect.com",
  };
var o_ = "WALLETCONNECT_DEEPLINK_CHOICE";
var bF = "proposal";
var K0 = "Proposal expired",
  _F = "session",
  na = qe.SEVEN_DAYS,
  EF = "engine",
  cr = {
    wc_sessionPropose: {
      req: { ttl: qe.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1101 },
      reject: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1120 },
      autoReject: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1121 },
    },
    wc_sessionSettle: {
      req: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: qe.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: qe.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: qe.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: qe.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: qe.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: qe.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: qe.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: qe.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: qe.ONE_DAY, prompt: !1, tag: 1114 },
      res: { ttl: qe.ONE_DAY, prompt: !1, tag: 1115 },
    },
    wc_sessionAuthenticate: {
      req: { ttl: qe.ONE_HOUR, prompt: !0, tag: 1116 },
      res: { ttl: qe.ONE_HOUR, prompt: !1, tag: 1117 },
      reject: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1118 },
      autoReject: { ttl: qe.FIVE_MINUTES, prompt: !1, tag: 1119 },
    },
  },
  T0 = { min: qe.FIVE_MINUTES, max: qe.SEVEN_DAYS },
  an = { idle: "IDLE", active: "ACTIVE" },
  AF = "request",
  SF = [
    "wc_sessionPropose",
    "wc_sessionRequest",
    "wc_authRequest",
    "wc_sessionAuthenticate",
  ],
  xF = "wc";
var IF = "auth",
  DF = "authKeys",
  RF = "pairingTopics",
  CF = "requests",
  al = `${xF}@${1.5}:${IF}:`,
  nl = `${al}:PUB_KEY`,
  OF = Object.defineProperty,
  PF = Object.defineProperties,
  MF = Object.getOwnPropertyDescriptors,
  a_ = Object.getOwnPropertySymbols,
  NF = Object.prototype.hasOwnProperty,
  TF = Object.prototype.propertyIsEnumerable,
  c_ = (r, e, t) =>
    e in r
      ? OF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  Yt = (r, e) => {
    for (var t in e || (e = {})) NF.call(e, t) && c_(r, t, e[t]);
    if (a_) for (var t of a_(e)) TF.call(e, t) && c_(r, t, e[t]);
    return r;
  },
  Qs = (r, e) => PF(r, MF(e)),
  F0 = class extends Ph {
    constructor(e) {
      super(e),
        (this.name = EF),
        (this.events = new ol.default()),
        (this.initialized = !1),
        (this.requestQueue = { state: an.idle, queue: [] }),
        (this.sessionRequestQueue = { state: an.idle, queue: [] }),
        (this.requestQueueDelay = qe.ONE_SECOND),
        (this.expectedPairingMSOLodMap = new Map()),
        (this.recentlyDeletedMap = new Map()),
        (this.recentlyDeletedLimit = 200),
        (this.relayMessageCache = []),
        (this.init = () =>
          R(this, null, function* () {
            this.initialized ||
              (yield this.cleanup(),
              this.registerRelayerEvents(),
              this.registerExpirerEvents(),
              this.registerPairingEvents(),
              this.client.core.pairing.register({ mSOLods: Object.keys(cr) }),
              (this.initialized = !0),
              setTimeout(() => {
                (this.sessionRequestQueue.queue =
                  this.getPendingSessionRequests()),
                  this.processSessionRequestQueue();
              }, (0, qe.toMiliseconds)(this.requestQueueDelay)));
          })),
        (this.connect = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            let i = Qs(Yt({}, t), {
              requiredNamespaces: t.requiredNamespaces || {},
              optionalNamespaces: t.optionalNamespaces || {},
            });
            yield this.isValidConnect(i);
            let {
                pairingTopic: n,
                requiredNamespaces: o,
                optionalNamespaces: c,
                sessionProperties: l,
                relays: g,
              } = i,
              d = n,
              y,
              v = !1;
            try {
              d && (v = this.client.core.pairing.pairings.get(d).active);
            } catch (G) {
              throw (
                (this.client.logger.error(
                  `connect() -> pairing.get(${d}) failed`
                ),
                G)
              );
            }
            if (!d || !v) {
              let { topic: G, uri: Q } =
                yield this.client.core.pairing.create();
              (d = G), (y = Q);
            }
            if (!d) {
              let { message: G } = de(
                "NO_MATCHING_KEY",
                `connect() pairing topic: ${d}`
              );
              throw new Error(G);
            }
            let A = yield this.client.core.crypto.generateKeyPair(),
              E = cr.wc_sessionPropose.req.ttl || qe.FIVE_MINUTES,
              P = Jt(E),
              N = Yt(
                {
                  requiredNamespaces: o,
                  optionalNamespaces: c,
                  relays: g ?? [{ protocol: M0 }],
                  proposer: { publicKey: A, metadata: this.client.metadata },
                  expiryTimestamp: P,
                  pairingTopic: d,
                },
                l && { sessionProperties: l }
              ),
              { reject: T, resolve: K, done: Z } = Ln(E, K0);
            this.events.once(Ne("session_connect"), (ee) =>
              R(this, [ee], function* ({ error: G, session: Q }) {
                if (G) T(G);
                else if (Q) {
                  Q.self.publicKey = A;
                  let L = Qs(Yt({}, Q), {
                    pairingTopic: N.pairingTopic,
                    requiredNamespaces: N.requiredNamespaces,
                    optionalNamespaces: N.optionalNamespaces,
                  });
                  yield this.client.session.set(Q.topic, L),
                    yield this.setExpiry(Q.topic, Q.expiry),
                    d &&
                      (yield this.client.core.pairing.updateMetadata({
                        topic: d,
                        metadata: Q.peer.metadata,
                      })),
                    this.cleanupDuplicatePairings(L),
                    K(L);
                }
              })
            );
            let J = yield this.sendRequest({
              topic: d,
              mSOLod: "wc_sessionPropose",
              params: N,
              throwOnFailedPublish: !0,
            });
            return (
              yield this.setProposal(J, Yt({ id: J }, N)),
              { uri: y, approval: Z }
            );
          })),
        (this.pair = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              return yield this.client.core.pairing.pair(t);
            } catch (i) {
              throw (this.client.logger.error("pair() failed"), i);
            }
          })),
        (this.approve = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidApprove(t);
            } catch (Z) {
              throw (
                (this.client.logger.error(
                  "approve() -> isValidApprove() failed"
                ),
                Z)
              );
            }
            let {
                id: i,
                relayProtocol: n,
                namespaces: o,
                sessionProperties: c,
                sessionConfig: l,
              } = t,
              g;
            try {
              g = this.client.proposal.get(i);
            } catch (Z) {
              throw (
                (this.client.logger.error(
                  `approve() -> proposal.get(${i}) failed`
                ),
                Z)
              );
            }
            let {
                pairingTopic: d,
                proposer: y,
                requiredNamespaces: v,
                optionalNamespaces: A,
              } = g,
              E = yield this.client.core.crypto.generateKeyPair(),
              P = y.publicKey,
              N = yield this.client.core.crypto.generateSharedKey(E, P),
              T = Yt(
                Yt(
                  {
                    relay: { protocol: n ?? "irn" },
                    namespaces: o,
                    controller: {
                      publicKey: E,
                      metadata: this.client.metadata,
                    },
                    expiry: Jt(na),
                  },
                  c && { sessionProperties: c }
                ),
                l && { sessionConfig: l }
              );
            yield this.client.core.relayer.subscribe(N);
            let K = Qs(Yt({}, T), {
              topic: N,
              requiredNamespaces: v,
              optionalNamespaces: A,
              pairingTopic: d,
              acknowledged: !1,
              self: T.controller,
              peer: { publicKey: y.publicKey, metadata: y.metadata },
              controller: E,
            });
            yield this.client.session.set(N, K);
            try {
              yield this.sendResult({
                id: i,
                topic: d,
                result: {
                  relay: { protocol: n ?? "irn" },
                  responderPublicKey: E,
                },
                throwOnFailedPublish: !0,
              }),
                yield this.sendRequest({
                  topic: N,
                  mSOLod: "wc_sessionSettle",
                  params: T,
                  throwOnFailedPublish: !0,
                });
            } catch (Z) {
              throw (
                (this.client.logger.error(Z),
                this.client.session.delete(N, ke("USER_DISCONNECTED")),
                yield this.client.core.relayer.unsubscribe(N),
                Z)
              );
            }
            return (
              yield this.client.core.pairing.updateMetadata({
                topic: d,
                metadata: y.metadata,
              }),
              yield this.client.proposal.delete(i, ke("USER_DISCONNECTED")),
              yield this.client.core.pairing.activate({ topic: d }),
              yield this.setExpiry(N, Jt(na)),
              {
                topic: N,
                acknowledged: () =>
                  new Promise((Z) =>
                    setTimeout(() => Z(this.client.session.get(N)), 500)
                  ),
              }
            );
          })),
        (this.reject = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidReject(t);
            } catch (c) {
              throw (
                (this.client.logger.error("reject() -> isValidReject() failed"),
                c)
              );
            }
            let { id: i, reason: n } = t,
              o;
            try {
              o = this.client.proposal.get(i).pairingTopic;
            } catch (c) {
              throw (
                (this.client.logger.error(
                  `reject() -> proposal.get(${i}) failed`
                ),
                c)
              );
            }
            o &&
              (yield this.sendError({
                id: i,
                topic: o,
                error: n,
                rpcOpts: cr.wc_sessionPropose.reject,
              }),
              yield this.client.proposal.delete(i, ke("USER_DISCONNECTED")));
          })),
        (this.update = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidUpdate(t);
            } catch (v) {
              throw (
                (this.client.logger.error("update() -> isValidUpdate() failed"),
                v)
              );
            }
            let { topic: i, namespaces: n } = t,
              { done: o, resolve: c, reject: l } = Ln(),
              g = tn(),
              d = Ii().toString(),
              y = this.client.session.get(i).namespaces;
            return (
              this.events.once(Ne("session_update", g), ({ error: v }) => {
                v ? l(v) : c();
              }),
              yield this.client.session.update(i, { namespaces: n }),
              yield this.sendRequest({
                topic: i,
                mSOLod: "wc_sessionUpdate",
                params: { namespaces: n },
                throwOnFailedPublish: !0,
                clientRpcId: g,
                relayRpcId: d,
              }).catch((v) => {
                this.client.logger.error(v),
                  this.client.session.update(i, { namespaces: y }),
                  l(v);
              }),
              { acknowledged: o }
            );
          })),
        (this.extend = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidExtend(t);
            } catch (g) {
              throw (
                (this.client.logger.error("extend() -> isValidExtend() failed"),
                g)
              );
            }
            let { topic: i } = t,
              n = tn(),
              { done: o, resolve: c, reject: l } = Ln();
            return (
              this.events.once(Ne("session_extend", n), ({ error: g }) => {
                g ? l(g) : c();
              }),
              yield this.setExpiry(i, Jt(na)),
              this.sendRequest({
                topic: i,
                mSOLod: "wc_sessionExtend",
                params: {},
                clientRpcId: n,
                throwOnFailedPublish: !0,
              }).catch((g) => {
                l(g);
              }),
              { acknowledged: o }
            );
          })),
        (this.request = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidRequest(t);
            } catch (E) {
              throw (
                (this.client.logger.error(
                  "request() -> isValidRequest() failed"
                ),
                E)
              );
            }
            let {
                chainId: i,
                request: n,
                topic: o,
                expiry: c = cr.wc_sessionRequest.req.ttl,
              } = t,
              l = this.client.session.get(o),
              g = tn(),
              d = Ii().toString(),
              {
                done: y,
                resolve: v,
                reject: A,
              } = Ln(c, "Request expired. Please try again.");
            return (
              this.events.once(
                Ne("session_request", g),
                ({ error: E, result: P }) => {
                  E ? A(E) : v(P);
                }
              ),
              yield Promise.all([
                new Promise((E) =>
                  R(this, null, function* () {
                    yield this.sendRequest({
                      clientRpcId: g,
                      relayRpcId: d,
                      topic: o,
                      mSOLod: "wc_sessionRequest",
                      params: {
                        request: Qs(Yt({}, n), { expiryTimestamp: Jt(c) }),
                        chainId: i,
                      },
                      expiry: c,
                      throwOnFailedPublish: !0,
                    }).catch((P) => A(P)),
                      this.client.events.emit("session_request_sent", {
                        topic: o,
                        request: n,
                        chainId: i,
                        id: g,
                      }),
                      E();
                  })
                ),
                new Promise((E) =>
                  R(this, null, function* () {
                    var P;
                    if (!((P = l.sessionConfig) != null && P.disableDeepLink)) {
                      let N = yield aw(this.client.core.storage, o_);
                      ow({ id: g, topic: o, wcDeepLink: N });
                    }
                    E();
                  })
                ),
                y(),
              ]).then((E) => E[2])
            );
          })),
        (this.respond = (t) =>
          R(this, null, function* () {
            yield this.isInitialized(), yield this.isValidRespond(t);
            let { topic: i, response: n } = t,
              { id: o } = n;
            Wr(n)
              ? yield this.sendResult({
                  id: o,
                  topic: i,
                  result: n.result,
                  throwOnFailedPublish: !0,
                })
              : vr(n) &&
                (yield this.sendError({ id: o, topic: i, error: n.error })),
              this.cleanupAfterResponse(t);
          })),
        (this.ping = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            try {
              yield this.isValidPing(t);
            } catch (n) {
              throw (
                (this.client.logger.error("ping() -> isValidPing() failed"), n)
              );
            }
            let { topic: i } = t;
            if (this.client.session.keys.includes(i)) {
              let n = tn(),
                o = Ii().toString(),
                { done: c, resolve: l, reject: g } = Ln();
              this.events.once(Ne("session_ping", n), ({ error: d }) => {
                d ? g(d) : l();
              }),
                yield Promise.all([
                  this.sendRequest({
                    topic: i,
                    mSOLod: "wc_sessionPing",
                    params: {},
                    throwOnFailedPublish: !0,
                    clientRpcId: n,
                    relayRpcId: o,
                  }),
                  c(),
                ]);
            } else this.client.core.pairing.pairings.keys.includes(i) && (yield this.client.core.pairing.ping({ topic: i }));
          })),
        (this.emit = (t) =>
          R(this, null, function* () {
            yield this.isInitialized(), yield this.isValidEmit(t);
            let { topic: i, event: n, chainId: o } = t,
              c = Ii().toString();
            yield this.sendRequest({
              topic: i,
              mSOLod: "wc_sessionEvent",
              params: { event: n, chainId: o },
              throwOnFailedPublish: !0,
              relayRpcId: c,
            });
          })),
        (this.disconnect = (t) =>
          R(this, null, function* () {
            yield this.isInitialized(), yield this.isValidDisconnect(t);
            let { topic: i } = t;
            if (this.client.session.keys.includes(i))
              yield this.sendRequest({
                topic: i,
                mSOLod: "wc_sessionDelete",
                params: ke("USER_DISCONNECTED"),
                throwOnFailedPublish: !0,
              }),
                yield this.deleteSession({ topic: i, emitEvent: !1 });
            else if (this.client.core.pairing.pairings.keys.includes(i))
              yield this.client.core.pairing.disconnect({ topic: i });
            else {
              let { message: n } = de(
                "MISMATCHED_TOPIC",
                `Session or pairing topic not found: ${i}`
              );
              throw new Error(n);
            }
          })),
        (this.find = (t) => (
          this.isInitialized(),
          this.client.session.getAll().filter((i) => rb(i, t))
        )),
        (this.getPendingSessionRequests = () =>
          this.client.pendingRequest.getAll()),
        (this.authenticate = (t) =>
          R(this, null, function* () {
            this.isInitialized(), this.isValidAuthenticate(t);
            let {
                chains: i,
                statement: n = "",
                uri: o,
                domain: c,
                nonce: l,
                type: g,
                exp: d,
                nbf: y,
                mSOLods: v = [],
                expiry: A,
              } = t,
              E = [...(t.resources || [])],
              { topic: P, uri: N } = yield this.client.core.pairing.create({
                mSOLods: ["wc_sessionAuthenticate"],
              });
            this.client.logger.info({
              message: "Generated new pairing",
              pairing: { topic: P, uri: N },
            });
            let T = yield this.client.core.crypto.generateKeyPair(),
              K = ko(T);
            if (
              (yield Promise.all([
                this.client.auth.authKeys.set(nl, {
                  responseTopic: K,
                  publicKey: T,
                }),
                this.client.auth.pairingTopics.set(K, {
                  topic: K,
                  pairingTopic: P,
                }),
              ]),
              yield this.client.core.relayer.subscribe(K),
              this.client.logger.info(
                `sending request to new pairing topic: ${P}`
              ),
              v.length > 0)
            ) {
              let { namespace: h } = Fs(i[0]),
                m = Gw(h, "request", v);
              sc(E) && (m = $w(m, E.pop())), E.push(m);
            }
            let Z =
                A && A > cr.wc_sessionAuthenticate.req.ttl
                  ? A
                  : cr.wc_sessionAuthenticate.req.ttl,
              J = {
                authPayload: {
                  type: g ?? "caip122",
                  chains: i,
                  statement: n,
                  aud: o,
                  domain: c,
                  version: "1",
                  nonce: l,
                  iat: new Date().toISOString(),
                  exp: d,
                  nbf: y,
                  resources: E,
                },
                requester: { publicKey: T, metadata: this.client.metadata },
                expiryTimestamp: Jt(Z),
              },
              G = {
                eip155: {
                  chains: i,
                  mSOLods: [...new Set(["personal_sign", ...v])],
                  events: ["chainChanged", "accountsChanged"],
                },
              },
              Q = {
                requiredNamespaces: {},
                optionalNamespaces: G,
                relays: [{ protocol: "irn" }],
                pairingTopic: P,
                proposer: { publicKey: T, metadata: this.client.metadata },
                expiryTimestamp: Jt(cr.wc_sessionPropose.req.ttl),
              },
              { done: ee, resolve: L, reject: B } = Ln(Z, "Request expired"),
              ae = (b) =>
                R(this, [b], function* ({ error: h, session: m }) {
                  if ((this.events.off(Ne("session_request", j), U), h)) B(h);
                  else if (m) {
                    (m.self.publicKey = T),
                      yield this.client.session.set(m.topic, m),
                      yield this.setExpiry(m.topic, m.expiry),
                      P &&
                        (yield this.client.core.pairing.updateMetadata({
                          topic: P,
                          metadata: m.peer.metadata,
                        }));
                    let x = this.client.session.get(m.topic);
                    yield this.deleteProposal(W), L({ session: x });
                  }
                }),
              U = (h) =>
                R(this, null, function* () {
                  if (
                    (yield this.deletePendingAuthRequest(j, {
                      message: "fulfilled",
                      code: 0,
                    }),
                    h.error)
                  ) {
                    let C = ke(
                      "WC_MSOLOD_UNSUPPORTED",
                      "wc_sessionAuthenticate"
                    );
                    return h.error.code === C.code
                      ? void 0
                      : (this.events.off(Ne("session_connect"), ae),
                        B(h.error.message));
                  }
                  yield this.deleteProposal(W),
                    this.events.off(Ne("session_connect"), ae);
                  let { cacaos: m, responder: b } = h.result,
                    x = [],
                    D = [];
                  for (let C of m) {
                    (yield Qd({
                      cacao: C,
                      projectId: this.client.core.projectId,
                    })) ||
                      (this.client.logger.error(
                        C,
                        "Signature verification failed"
                      ),
                      B(
                        ke(
                          "SESSION_SETTLEMENT_FAILED",
                          "Signature verification failed"
                        )
                      ));
                    let { p } = C,
                      I = sc(p.resources),
                      ue = [Yd(p.iss)],
                      ne = nc(p.iss);
                    if (I) {
                      let w = Zd(I),
                        $ = ep(I);
                      x.push(...w), ue.push(...$);
                    }
                    for (let w of ue) D.push(`${w}:${ne}`);
                  }
                  let M = yield this.client.core.crypto.generateSharedKey(
                      T,
                      b.publicKey
                    ),
                    z;
                  x.length > 0 &&
                    ((z = {
                      topic: M,
                      acknowledged: !0,
                      self: { publicKey: T, metadata: this.client.metadata },
                      peer: b,
                      controller: b.publicKey,
                      expiry: Jt(na),
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      relay: { protocol: "irn" },
                      pairingTopic: P,
                      namespaces: op([...new Set(x)], [...new Set(D)]),
                    }),
                    yield this.client.core.relayer.subscribe(M),
                    yield this.client.session.set(M, z),
                    P &&
                      (yield this.client.core.pairing.updateMetadata({
                        topic: P,
                        metadata: b.metadata,
                      })),
                    (z = this.client.session.get(M))),
                    L({ auths: m, session: z });
                }),
              j = tn(),
              W = tn();
            this.events.once(Ne("session_connect"), ae),
              this.events.once(Ne("session_request", j), U);
            try {
              yield Promise.all([
                this.sendRequest({
                  topic: P,
                  mSOLod: "wc_sessionAuthenticate",
                  params: J,
                  expiry: t.expiry,
                  throwOnFailedPublish: !0,
                  clientRpcId: j,
                }),
                this.sendRequest({
                  topic: P,
                  mSOLod: "wc_sessionPropose",
                  params: Q,
                  expiry: cr.wc_sessionPropose.req.ttl,
                  throwOnFailedPublish: !0,
                  clientRpcId: W,
                }),
              ]);
            } catch (h) {
              throw (
                (this.events.off(Ne("session_connect"), ae),
                this.events.off(Ne("session_request", j), U),
                h)
              );
            }
            return (
              yield this.setProposal(W, Yt({ id: W }, Q)),
              yield this.setAuthRequest(j, {
                request: Qs(Yt({}, J), { verifyContext: {} }),
                pairingTopic: P,
              }),
              { uri: N, response: ee }
            );
          })),
        (this.approveSessionAuthenticate = (t) =>
          R(this, null, function* () {
            this.isInitialized();
            let { id: i, auths: n } = t,
              o = this.getPendingAuthRequest(i);
            if (!o)
              throw new Error(
                `Could not find pending auth request with id ${i}`
              );
            let c = o.requester.publicKey,
              l = yield this.client.core.crypto.generateKeyPair(),
              g = ko(c),
              d = { type: Si, receiverPublicKey: c, senderPublicKey: l },
              y = [],
              v = [];
            for (let P of n) {
              if (
                !(yield Qd({ cacao: P, projectId: this.client.core.projectId }))
              ) {
                let J = ke(
                  "SESSION_SETTLEMENT_FAILED",
                  "Signature verification failed"
                );
                throw (
                  (yield this.sendError({
                    id: i,
                    topic: g,
                    error: J,
                    encodeOpts: d,
                  }),
                  new Error(J.message))
                );
              }
              let { p: N } = P,
                T = sc(N.resources),
                K = [Yd(N.iss)],
                Z = nc(N.iss);
              if (T) {
                let J = Zd(T),
                  G = ep(T);
                y.push(...J), K.push(...G);
              }
              for (let J of K) v.push(`${J}:${Z}`);
            }
            let A = yield this.client.core.crypto.generateSharedKey(l, c),
              E;
            return (
              y?.length > 0 &&
                ((E = {
                  topic: A,
                  acknowledged: !0,
                  self: { publicKey: l, metadata: this.client.metadata },
                  peer: { publicKey: c, metadata: o.requester.metadata },
                  controller: c,
                  expiry: Jt(na),
                  authentication: n,
                  requiredNamespaces: {},
                  optionalNamespaces: {},
                  relay: { protocol: "irn" },
                  pairingTopic: o.pairingTopic,
                  namespaces: op([...new Set(y)], [...new Set(v)]),
                }),
                yield this.client.core.relayer.subscribe(A),
                yield this.client.session.set(A, E),
                yield this.client.core.pairing.updateMetadata({
                  topic: o.pairingTopic,
                  metadata: o.requester.metadata,
                })),
              yield this.sendResult({
                topic: g,
                id: i,
                result: {
                  cacaos: n,
                  responder: { publicKey: l, metadata: this.client.metadata },
                },
                encodeOpts: d,
                throwOnFailedPublish: !0,
              }),
              yield this.client.auth.requests.delete(i, {
                message: "fulfilled",
                code: 0,
              }),
              yield this.client.core.pairing.activate({
                topic: o.pairingTopic,
              }),
              { session: E }
            );
          })),
        (this.rejectSessionAuthenticate = (t) =>
          R(this, null, function* () {
            yield this.isInitialized();
            let { id: i, reason: n } = t,
              o = this.getPendingAuthRequest(i);
            if (!o)
              throw new Error(
                `Could not find pending auth request with id ${i}`
              );
            let c = o.requester.publicKey,
              l = yield this.client.core.crypto.generateKeyPair(),
              g = ko(c),
              d = { type: Si, receiverPublicKey: c, senderPublicKey: l };
            yield this.sendError({
              id: i,
              topic: g,
              error: n,
              encodeOpts: d,
              rpcOpts: cr.wc_sessionAuthenticate.reject,
            }),
              yield this.client.auth.requests.delete(i, {
                message: "rejected",
                code: 0,
              }),
              yield this.client.proposal.delete(i, ke("USER_DISCONNECTED"));
          })),
        (this.formatAuthMessage = (t) => {
          this.isInitialized();
          let { request: i, iss: n } = t;
          return Xd(i, n);
        }),
        (this.processRelayMessageCache = () => {
          setTimeout(
            () =>
              R(this, null, function* () {
                if (this.relayMessageCache.length !== 0)
                  for (; this.relayMessageCache.length > 0; )
                    try {
                      let t = this.relayMessageCache.shift();
                      t && (yield this.onRelayMessage(t));
                    } catch (t) {
                      this.client.logger.error(t);
                    }
              }),
            50
          );
        }),
        (this.cleanupDuplicatePairings = (t) =>
          R(this, null, function* () {
            if (t.pairingTopic)
              try {
                let i = this.client.core.pairing.pairings.get(t.pairingTopic),
                  n = this.client.core.pairing.pairings.getAll().filter((o) => {
                    var c, l;
                    return (
                      ((c = o.peerMetadata) == null ? void 0 : c.url) &&
                      ((l = o.peerMetadata) == null ? void 0 : l.url) ===
                        t.peer.metadata.url &&
                      o.topic &&
                      o.topic !== i.topic
                    );
                  });
                if (n.length === 0) return;
                this.client.logger.info(
                  `Cleaning up ${n.length} duplicate pairing(s)`
                ),
                  yield Promise.all(
                    n.map((o) =>
                      this.client.core.pairing.disconnect({ topic: o.topic })
                    )
                  ),
                  this.client.logger.info(
                    "Duplicate pairings clean up finished"
                  );
              } catch (i) {
                this.client.logger.error(i);
              }
          })),
        (this.deleteSession = (t) =>
          R(this, null, function* () {
            var i;
            let {
                topic: n,
                expirerHasDeleted: o = !1,
                emitEvent: c = !0,
                id: l = 0,
              } = t,
              { self: g } = this.client.session.get(n);
            yield this.client.core.relayer.unsubscribe(n),
              yield this.client.session.delete(n, ke("USER_DISCONNECTED")),
              this.addToRecentlyDeleted(n, "session"),
              this.client.core.crypto.keychain.has(g.publicKey) &&
                (yield this.client.core.crypto.deleteKeyPair(g.publicKey)),
              this.client.core.crypto.keychain.has(n) &&
                (yield this.client.core.crypto.deleteSymKey(n)),
              o || this.client.core.expirer.del(n),
              this.client.core.storage
                .removeItem(o_)
                .catch((d) => this.client.logger.warn(d)),
              this.getPendingSessionRequests().forEach((d) => {
                d.topic === n &&
                  this.deletePendingSessionRequest(
                    d.id,
                    ke("USER_DISCONNECTED")
                  );
              }),
              n ===
                ((i = this.sessionRequestQueue.queue[0]) == null
                  ? void 0
                  : i.topic) && (this.sessionRequestQueue.state = an.idle),
              c &&
                this.client.events.emit("session_delete", { id: l, topic: n });
          })),
        (this.deleteProposal = (t, i) =>
          R(this, null, function* () {
            yield Promise.all([
              this.client.proposal.delete(t, ke("USER_DISCONNECTED")),
              i ? Promise.resolve() : this.client.core.expirer.del(t),
            ]),
              this.addToRecentlyDeleted(t, "proposal");
          })),
        (this.deletePendingSessionRequest = (t, i, n = !1) =>
          R(this, null, function* () {
            yield Promise.all([
              this.client.pendingRequest.delete(t, i),
              n ? Promise.resolve() : this.client.core.expirer.del(t),
            ]),
              this.addToRecentlyDeleted(t, "request"),
              (this.sessionRequestQueue.queue =
                this.sessionRequestQueue.queue.filter((o) => o.id !== t)),
              n &&
                ((this.sessionRequestQueue.state = an.idle),
                this.client.events.emit("session_request_expire", { id: t }));
          })),
        (this.deletePendingAuthRequest = (t, i, n = !1) =>
          R(this, null, function* () {
            yield Promise.all([
              this.client.auth.requests.delete(t, i),
              n ? Promise.resolve() : this.client.core.expirer.del(t),
            ]);
          })),
        (this.setExpiry = (t, i) =>
          R(this, null, function* () {
            this.client.session.keys.includes(t) &&
              (this.client.core.expirer.set(t, i),
              yield this.client.session.update(t, { expiry: i }));
          })),
        (this.setProposal = (t, i) =>
          R(this, null, function* () {
            this.client.core.expirer.set(t, Jt(cr.wc_sessionPropose.req.ttl)),
              yield this.client.proposal.set(t, i);
          })),
        (this.setAuthRequest = (t, i) =>
          R(this, null, function* () {
            let { request: n, pairingTopic: o } = i;
            this.client.core.expirer.set(t, n.expiryTimestamp),
              yield this.client.auth.requests.set(t, {
                authPayload: n.authPayload,
                requester: n.requester,
                expiryTimestamp: n.expiryTimestamp,
                id: t,
                pairingTopic: o,
                verifyContext: n.verifyContext,
              });
          })),
        (this.setPendingSessionRequest = (t) =>
          R(this, null, function* () {
            let { id: i, topic: n, params: o, verifyContext: c } = t,
              l = o.request.expiryTimestamp || Jt(cr.wc_sessionRequest.req.ttl);
            this.client.core.expirer.set(i, l),
              yield this.client.pendingRequest.set(i, {
                id: i,
                topic: n,
                params: o,
                verifyContext: c,
              });
          })),
        (this.sendRequest = (t) =>
          R(this, null, function* () {
            let {
                topic: i,
                mSOLod: n,
                params: o,
                expiry: c,
                relayRpcId: l,
                clientRpcId: g,
                throwOnFailedPublish: d,
              } = t,
              y = rn(n, o, g);
            if (hs() && SF.includes(n)) {
              let E = Un(JSON.stringify(y));
              this.client.core.verify.register({ attestationId: E });
            }
            let v;
            try {
              v = yield this.client.core.crypto.encode(i, y);
            } catch (E) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendRequest() -> core.crypto.encode() for topic ${i} failed`
                ),
                E)
              );
            }
            let A = cr[n].req;
            return (
              c && (A.ttl = c),
              l && (A.id = l),
              this.client.core.history.set(i, y),
              d
                ? ((A.internal = Qs(Yt({}, A.internal), {
                    throwOnFailedPublish: !0,
                  })),
                  yield this.client.core.relayer.publish(i, v, A))
                : this.client.core.relayer
                    .publish(i, v, A)
                    .catch((E) => this.client.logger.error(E)),
              y.id
            );
          })),
        (this.sendResult = (t) =>
          R(this, null, function* () {
            let {
                id: i,
                topic: n,
                result: o,
                throwOnFailedPublish: c,
                encodeOpts: l,
              } = t,
              g = gs(i, o),
              d;
            try {
              d = yield this.client.core.crypto.encode(n, g, l);
            } catch (A) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendResult() -> core.crypto.encode() for topic ${n} failed`
                ),
                A)
              );
            }
            let y;
            try {
              y = yield this.client.core.history.get(n, i);
            } catch (A) {
              throw (
                (this.client.logger.error(
                  `sendResult() -> history.get(${n}, ${i}) failed`
                ),
                A)
              );
            }
            let v = cr[y.request.mSOLod].res;
            c
              ? ((v.internal = Qs(Yt({}, v.internal), {
                  throwOnFailedPublish: !0,
                })),
                yield this.client.core.relayer.publish(n, d, v))
              : this.client.core.relayer
                  .publish(n, d, v)
                  .catch((A) => this.client.logger.error(A)),
              yield this.client.core.history.resolve(g);
          })),
        (this.sendError = (t) =>
          R(this, null, function* () {
            let { id: i, topic: n, error: o, encodeOpts: c, rpcOpts: l } = t,
              g = jn(i, o),
              d;
            try {
              d = yield this.client.core.crypto.encode(n, g, c);
            } catch (A) {
              throw (
                (yield this.cleanup(),
                this.client.logger.error(
                  `sendError() -> core.crypto.encode() for topic ${n} failed`
                ),
                A)
              );
            }
            let y;
            try {
              y = yield this.client.core.history.get(n, i);
            } catch (A) {
              throw (
                (this.client.logger.error(
                  `sendError() -> history.get(${n}, ${i}) failed`
                ),
                A)
              );
            }
            let v = l || cr[y.request.mSOLod].res;
            this.client.core.relayer.publish(n, d, v),
              yield this.client.core.history.resolve(g);
          })),
        (this.cleanup = () =>
          R(this, null, function* () {
            let t = [],
              i = [];
            this.client.session.getAll().forEach((n) => {
              let o = !1;
              Qi(n.expiry) && (o = !0),
                this.client.core.crypto.keychain.has(n.topic) || (o = !0),
                o && t.push(n.topic);
            }),
              this.client.proposal.getAll().forEach((n) => {
                Qi(n.expiryTimestamp) && i.push(n.id);
              }),
              yield Promise.all([
                ...t.map((n) => this.deleteSession({ topic: n })),
                ...i.map((n) => this.deleteProposal(n)),
              ]);
          })),
        (this.onRelayEventRequest = (t) =>
          R(this, null, function* () {
            this.requestQueue.queue.push(t), yield this.processRequestsQueue();
          })),
        (this.processRequestsQueue = () =>
          R(this, null, function* () {
            if (this.requestQueue.state === an.active) {
              this.client.logger.info(
                "Request queue already active, skipping..."
              );
              return;
            }
            for (
              this.client.logger.info(
                `Request queue starting with ${this.requestQueue.queue.length} requests`
              );
              this.requestQueue.queue.length > 0;

            ) {
              this.requestQueue.state = an.active;
              let t = this.requestQueue.queue.shift();
              if (t)
                try {
                  yield this.processRequest(t);
                } catch (i) {
                  this.client.logger.warn(i);
                }
            }
            this.requestQueue.state = an.idle;
          })),
        (this.processRequest = (t) =>
          R(this, null, function* () {
            let { topic: i, payload: n } = t,
              o = n.mSOLod;
            if (
              !this.shouldIgnorePairingRequest({ topic: i, requestMSOLod: o })
            )
              switch (o) {
                case "wc_sessionPropose":
                  return yield this.onSessionProposeRequest(i, n);
                case "wc_sessionSettle":
                  return yield this.onSessionSettleRequest(i, n);
                case "wc_sessionUpdate":
                  return yield this.onSessionUpdateRequest(i, n);
                case "wc_sessionExtend":
                  return yield this.onSessionExtendRequest(i, n);
                case "wc_sessionPing":
                  return yield this.onSessionPingRequest(i, n);
                case "wc_sessionDelete":
                  return yield this.onSessionDeleteRequest(i, n);
                case "wc_sessionRequest":
                  return yield this.onSessionRequest(i, n);
                case "wc_sessionEvent":
                  return yield this.onSessionEventRequest(i, n);
                case "wc_sessionAuthenticate":
                  return yield this.onSessionAuthenticateRequest(i, n);
                default:
                  return this.client.logger.info(
                    `Unsupported request mSOLod ${o}`
                  );
              }
          })),
        (this.onRelayEventResponse = (t) =>
          R(this, null, function* () {
            let { topic: i, payload: n } = t,
              o = (yield this.client.core.history.get(i, n.id)).request.mSOLod;
            switch (o) {
              case "wc_sessionPropose":
                return this.onSessionProposeResponse(i, n);
              case "wc_sessionSettle":
                return this.onSessionSettleResponse(i, n);
              case "wc_sessionUpdate":
                return this.onSessionUpdateResponse(i, n);
              case "wc_sessionExtend":
                return this.onSessionExtendResponse(i, n);
              case "wc_sessionPing":
                return this.onSessionPingResponse(i, n);
              case "wc_sessionRequest":
                return this.onSessionRequestResponse(i, n);
              case "wc_sessionAuthenticate":
                return this.onSessionAuthenticateResponse(i, n);
              default:
                return this.client.logger.info(
                  `Unsupported response mSOLod ${o}`
                );
            }
          })),
        (this.onRelayEventUnknownPayload = (t) => {
          let { topic: i } = t,
            { message: n } = de(
              "MISSING_OR_INVALID",
              `Decoded payload on topic ${i} is not identifiable as a JSON-RPC request or a response.`
            );
          throw new Error(n);
        }),
        (this.shouldIgnorePairingRequest = (t) => {
          let { topic: i, requestMSOLod: n } = t,
            o = this.expectedPairingMSOLodMap.get(i);
          return !o || o.includes(n)
            ? !1
            : !!(
                o.includes("wc_sessionAuthenticate") &&
                this.client.events.listenerCount("session_authenticate") > 0
              );
        }),
        (this.onSessionProposeRequest = (t, i) =>
          R(this, null, function* () {
            let { params: n, id: o } = i;
            try {
              this.isValidConnect(Yt({}, i.params));
              let c = n.expiryTimestamp || Jt(cr.wc_sessionPropose.req.ttl),
                l = Yt({ id: o, pairingTopic: t, expiryTimestamp: c }, n);
              yield this.setProposal(o, l);
              let g = Un(JSON.stringify(i)),
                d = yield this.getVerifyContext(g, l.proposer.metadata);
              this.client.events.emit("session_proposal", {
                id: o,
                params: l,
                verifyContext: d,
              });
            } catch (c) {
              yield this.sendError({
                id: o,
                topic: t,
                error: c,
                rpcOpts: cr.wc_sessionPropose.autoReject,
              }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionProposeResponse = (t, i) =>
          R(this, null, function* () {
            let { id: n } = i;
            if (Wr(i)) {
              let { result: o } = i;
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                result: o,
              });
              let c = this.client.proposal.get(n);
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                proposal: c,
              });
              let l = c.proposer.publicKey;
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                selfPublicKey: l,
              });
              let g = o.responderPublicKey;
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                peerPublicKey: g,
              });
              let d = yield this.client.core.crypto.generateSharedKey(l, g);
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                sessionTopic: d,
              });
              let y = yield this.client.core.relayer.subscribe(d);
              this.client.logger.trace({
                type: "mSOLod",
                mSOLod: "onSessionProposeResponse",
                subscriptionId: y,
              }),
                yield this.client.core.pairing.activate({ topic: t });
            } else if (vr(i)) {
              yield this.client.proposal.delete(n, ke("USER_DISCONNECTED"));
              let o = Ne("session_connect");
              if (this.events.listenerCount(o) === 0)
                throw new Error(`emitting ${o} without any listeners, 954`);
              this.events.emit(Ne("session_connect"), { error: i.error });
            }
          })),
        (this.onSessionSettleRequest = (t, i) =>
          R(this, null, function* () {
            let { id: n, params: o } = i;
            try {
              this.isValidSessionSettleRequest(o);
              let {
                  relay: c,
                  controller: l,
                  expiry: g,
                  namespaces: d,
                  sessionProperties: y,
                  sessionConfig: v,
                } = i.params,
                A = Yt(
                  Yt(
                    {
                      topic: t,
                      relay: c,
                      expiry: g,
                      namespaces: d,
                      acknowledged: !0,
                      pairingTopic: "",
                      requiredNamespaces: {},
                      optionalNamespaces: {},
                      controller: l.publicKey,
                      self: { publicKey: "", metadata: this.client.metadata },
                      peer: { publicKey: l.publicKey, metadata: l.metadata },
                    },
                    y && { sessionProperties: y }
                  ),
                  v && { sessionConfig: v }
                );
              yield this.sendResult({
                id: i.id,
                topic: t,
                result: !0,
                throwOnFailedPublish: !0,
              });
              let E = Ne("session_connect");
              if (this.events.listenerCount(E) === 0)
                throw new Error(`emitting ${E} without any listeners 997`);
              this.events.emit(Ne("session_connect"), { session: A });
            } catch (c) {
              yield this.sendError({ id: n, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionSettleResponse = (t, i) =>
          R(this, null, function* () {
            let { id: n } = i;
            Wr(i)
              ? (yield this.client.session.update(t, { acknowledged: !0 }),
                this.events.emit(Ne("session_approve", n), {}))
              : vr(i) &&
                (yield this.client.session.delete(t, ke("USER_DISCONNECTED")),
                this.events.emit(Ne("session_approve", n), { error: i.error }));
          })),
        (this.onSessionUpdateRequest = (t, i) =>
          R(this, null, function* () {
            let { params: n, id: o } = i;
            try {
              let c = `${t}_session_update`,
                l = cs.get(c);
              if (l && this.isRequestOutOfSync(l, o)) {
                this.client.logger.info(
                  `Discarding out of sync request - ${o}`
                ),
                  this.sendError({
                    id: o,
                    topic: t,
                    error: ke("INVALID_UPDATE_REQUEST"),
                  });
                return;
              }
              this.isValidUpdate(Yt({ topic: t }, n));
              try {
                cs.set(c, o),
                  yield this.client.session.update(t, {
                    namespaces: n.namespaces,
                  }),
                  yield this.sendResult({
                    id: o,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  });
              } catch (g) {
                throw (cs.delete(c), g);
              }
              this.client.events.emit("session_update", {
                id: o,
                topic: t,
                params: n,
              });
            } catch (c) {
              yield this.sendError({ id: o, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.isRequestOutOfSync = (t, i) =>
          parseInt(i.toString().slice(0, -3)) <=
          parseInt(t.toString().slice(0, -3))),
        (this.onSessionUpdateResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_update", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          Wr(i)
            ? this.events.emit(Ne("session_update", n), {})
            : vr(i) &&
              this.events.emit(Ne("session_update", n), { error: i.error });
        }),
        (this.onSessionExtendRequest = (t, i) =>
          R(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidExtend({ topic: t }),
                yield this.setExpiry(t, Jt(na)),
                yield this.sendResult({
                  id: n,
                  topic: t,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_extend", { id: n, topic: t });
            } catch (o) {
              yield this.sendError({ id: n, topic: t, error: o }),
                this.client.logger.error(o);
            }
          })),
        (this.onSessionExtendResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_extend", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          Wr(i)
            ? this.events.emit(Ne("session_extend", n), {})
            : vr(i) &&
              this.events.emit(Ne("session_extend", n), { error: i.error });
        }),
        (this.onSessionPingRequest = (t, i) =>
          R(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidPing({ topic: t }),
                yield this.sendResult({
                  id: n,
                  topic: t,
                  result: !0,
                  throwOnFailedPublish: !0,
                }),
                this.client.events.emit("session_ping", { id: n, topic: t });
            } catch (o) {
              yield this.sendError({ id: n, topic: t, error: o }),
                this.client.logger.error(o);
            }
          })),
        (this.onSessionPingResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_ping", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          setTimeout(() => {
            Wr(i)
              ? this.events.emit(Ne("session_ping", n), {})
              : vr(i) &&
                this.events.emit(Ne("session_ping", n), { error: i.error });
          }, 500);
        }),
        (this.onSessionDeleteRequest = (t, i) =>
          R(this, null, function* () {
            let { id: n } = i;
            try {
              this.isValidDisconnect({ topic: t, reason: i.params }),
                yield Promise.all([
                  new Promise((o) => {
                    this.client.core.relayer.once(Dr.publish, () =>
                      R(this, null, function* () {
                        o(yield this.deleteSession({ topic: t, id: n }));
                      })
                    );
                  }),
                  this.sendResult({
                    id: n,
                    topic: t,
                    result: !0,
                    throwOnFailedPublish: !0,
                  }),
                  this.cleanupPendingSentRequestsForTopic({
                    topic: t,
                    error: ke("USER_DISCONNECTED"),
                  }),
                ]);
            } catch (o) {
              this.client.logger.error(o);
            }
          })),
        (this.onSessionRequest = (t, i) =>
          R(this, null, function* () {
            var n;
            let { id: o, params: c } = i;
            try {
              yield this.isValidRequest(Yt({ topic: t }, c));
              let l = Un(JSON.stringify(rn("wc_sessionRequest", c, o))),
                g = this.client.session.get(t),
                d = yield this.getVerifyContext(l, g.peer.metadata),
                y = { id: o, topic: t, params: c, verifyContext: d };
              yield this.setPendingSessionRequest(y),
                (n = this.client.signConfig) != null && n.disableRequestQueue
                  ? this.emitSessionRequest(y)
                  : (this.addSessionRequestToSessionRequestQueue(y),
                    this.processSessionRequestQueue());
            } catch (l) {
              yield this.sendError({ id: o, topic: t, error: l }),
                this.client.logger.error(l);
            }
          })),
        (this.onSessionRequestResponse = (t, i) => {
          let { id: n } = i,
            o = Ne("session_request", n);
          if (this.events.listenerCount(o) === 0)
            throw new Error(`emitting ${o} without any listeners`);
          Wr(i)
            ? this.events.emit(Ne("session_request", n), { result: i.result })
            : vr(i) &&
              this.events.emit(Ne("session_request", n), { error: i.error });
        }),
        (this.onSessionEventRequest = (t, i) =>
          R(this, null, function* () {
            let { id: n, params: o } = i;
            try {
              let c = `${t}_session_event_${o.event.name}`,
                l = cs.get(c);
              if (l && this.isRequestOutOfSync(l, n)) {
                this.client.logger.info(
                  `Discarding out of sync request - ${n}`
                );
                return;
              }
              this.isValidEmit(Yt({ topic: t }, o)),
                this.client.events.emit("session_event", {
                  id: n,
                  topic: t,
                  params: o,
                }),
                cs.set(c, n);
            } catch (c) {
              yield this.sendError({ id: n, topic: t, error: c }),
                this.client.logger.error(c);
            }
          })),
        (this.onSessionAuthenticateResponse = (t, i) => {
          let { id: n } = i;
          this.client.logger.trace({
            type: "mSOLod",
            mSOLod: "onSessionAuthenticateResponse",
            topic: t,
            payload: i,
          }),
            Wr(i)
              ? this.events.emit(Ne("session_request", n), { result: i.result })
              : vr(i) &&
                this.events.emit(Ne("session_request", n), { error: i.error });
        }),
        (this.onSessionAuthenticateRequest = (t, i) =>
          R(this, null, function* () {
            try {
              let {
                  requester: n,
                  authPayload: o,
                  expiryTimestamp: c,
                } = i.params,
                l = Un(JSON.stringify(i)),
                g = yield this.getVerifyContext(l, this.client.metadata),
                d = {
                  requester: n,
                  pairingTopic: t,
                  id: i.id,
                  authPayload: o,
                  verifyContext: g,
                  expiryTimestamp: c,
                };
              yield this.setAuthRequest(i.id, { request: d, pairingTopic: t }),
                this.client.events.emit("session_authenticate", {
                  topic: t,
                  params: i.params,
                  id: i.id,
                  verifyContext: g,
                });
            } catch (n) {
              this.client.logger.error(n);
              let o = i.params.requester.publicKey,
                c = yield this.client.core.crypto.generateKeyPair(),
                l = { type: Si, receiverPublicKey: o, senderPublicKey: c };
              yield this.sendError({
                id: i.id,
                topic: t,
                error: n,
                encodeOpts: l,
                rpcOpts: cr.wc_sessionAuthenticate.autoReject,
              });
            }
          })),
        (this.addSessionRequestToSessionRequestQueue = (t) => {
          this.sessionRequestQueue.queue.push(t);
        }),
        (this.cleanupAfterResponse = (t) => {
          this.deletePendingSessionRequest(t.response.id, {
            message: "fulfilled",
            code: 0,
          }),
            setTimeout(() => {
              (this.sessionRequestQueue.state = an.idle),
                this.processSessionRequestQueue();
            }, (0, qe.toMiliseconds)(this.requestQueueDelay));
        }),
        (this.cleanupPendingSentRequestsForTopic = ({ topic: t, error: i }) => {
          let n = this.client.core.history.pending;
          n.length > 0 &&
            n
              .filter(
                (o) => o.topic === t && o.request.mSOLod === "wc_sessionRequest"
              )
              .forEach((o) => {
                let c = o.request.id,
                  l = Ne("session_request", c);
                if (this.events.listenerCount(l) === 0)
                  throw new Error(`emitting ${l} without any listeners`);
                this.events.emit(Ne("session_request", o.request.id), {
                  error: i,
                });
              });
        }),
        (this.processSessionRequestQueue = () => {
          if (this.sessionRequestQueue.state === an.active) {
            this.client.logger.info("session request queue is already active.");
            return;
          }
          let t = this.sessionRequestQueue.queue[0];
          if (!t) {
            this.client.logger.info("session request queue is empty.");
            return;
          }
          try {
            (this.sessionRequestQueue.state = an.active),
              this.emitSessionRequest(t);
          } catch (i) {
            this.client.logger.error(i);
          }
        }),
        (this.emitSessionRequest = (t) => {
          this.client.events.emit("session_request", t);
        }),
        (this.onPairingCreated = (t) => {
          if (
            (t.mSOLods && this.expectedPairingMSOLodMap.set(t.topic, t.mSOLods),
            t.active)
          )
            return;
          let i = this.client.proposal
            .getAll()
            .find((n) => n.pairingTopic === t.topic);
          i &&
            this.onSessionProposeRequest(
              t.topic,
              rn(
                "wc_sessionPropose",
                {
                  requiredNamespaces: i.requiredNamespaces,
                  optionalNamespaces: i.optionalNamespaces,
                  relays: i.relays,
                  proposer: i.proposer,
                  sessionProperties: i.sessionProperties,
                },
                i.id
              )
            );
        }),
        (this.isValidConnect = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `connect() params: ${JSON.stringify(t)}`
              );
              throw new Error(g);
            }
            let {
              pairingTopic: i,
              requiredNamespaces: n,
              optionalNamespaces: o,
              sessionProperties: c,
              relays: l,
            } = t;
            if ((sr(i) || (yield this.isValidPairingTopic(i)), !ub(l, !0))) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `connect() relays: ${l}`
              );
              throw new Error(g);
            }
            !sr(n) &&
              qs(n) !== 0 &&
              this.validateNamespaces(n, "requiredNamespaces"),
              !sr(o) &&
                qs(o) !== 0 &&
                this.validateNamespaces(o, "optionalNamespaces"),
              sr(c) || this.validateSessionProps(c, "sessionProperties");
          })),
        (this.validateNamespaces = (t, i) => {
          let n = cb(t, "connect()", i);
          if (n) throw new Error(n.message);
        }),
        (this.isValidApprove = (t) =>
          R(this, null, function* () {
            if (!gr(t))
              throw new Error(
                de("MISSING_OR_INVALID", `approve() params: ${t}`).message
              );
            let {
              id: i,
              namespaces: n,
              relayProtocol: o,
              sessionProperties: c,
            } = t;
            this.checkRecentlyDeleted(i), yield this.isValidProposalId(i);
            let l = this.client.proposal.get(i),
              g = uh(n, "approve()");
            if (g) throw new Error(g.message);
            let d = hp(l.requiredNamespaces, n, "approve()");
            if (d) throw new Error(d.message);
            if (!Ft(o, !0)) {
              let { message: y } = de(
                "MISSING_OR_INVALID",
                `approve() relayProtocol: ${o}`
              );
              throw new Error(y);
            }
            sr(c) || this.validateSessionProps(c, "sessionProperties");
          })),
        (this.isValidReject = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `reject() params: ${t}`
              );
              throw new Error(o);
            }
            let { id: i, reason: n } = t;
            if (
              (this.checkRecentlyDeleted(i),
              yield this.isValidProposalId(i),
              !lb(n))
            ) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `reject() reason: ${JSON.stringify(n)}`
              );
              throw new Error(o);
            }
          })),
        (this.isValidSessionSettleRequest = (t) => {
          if (!gr(t)) {
            let { message: d } = de(
              "MISSING_OR_INVALID",
              `onSessionSettleRequest() params: ${t}`
            );
            throw new Error(d);
          }
          let { relay: i, controller: n, namespaces: o, expiry: c } = t;
          if (!cp(i)) {
            let { message: d } = de(
              "MISSING_OR_INVALID",
              "onSessionSettleRequest() relay protocol should be a string"
            );
            throw new Error(d);
          }
          let l = ob(n, "onSessionSettleRequest()");
          if (l) throw new Error(l.message);
          let g = uh(o, "onSessionSettleRequest()");
          if (g) throw new Error(g.message);
          if (Qi(c)) {
            let { message: d } = de("EXPIRED", "onSessionSettleRequest()");
            throw new Error(d);
          }
        }),
        (this.isValidUpdate = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `update() params: ${t}`
              );
              throw new Error(g);
            }
            let { topic: i, namespaces: n } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
            let o = this.client.session.get(i),
              c = uh(n, "update()");
            if (c) throw new Error(c.message);
            let l = hp(o.requiredNamespaces, n, "update()");
            if (l) throw new Error(l.message);
          })),
        (this.isValidExtend = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `extend() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
          })),
        (this.isValidRequest = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `request() params: ${t}`
              );
              throw new Error(g);
            }
            let { topic: i, request: n, chainId: o, expiry: c } = t;
            this.checkRecentlyDeleted(i), yield this.isValidSessionTopic(i);
            let { namespaces: l } = this.client.session.get(i);
            if (!up(l, o)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `request() chainId: ${o}`
              );
              throw new Error(g);
            }
            if (!fb(n)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `request() ${JSON.stringify(n)}`
              );
              throw new Error(g);
            }
            if (!gb(l, o, n.mSOLod)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `request() mSOLod: ${n.mSOLod}`
              );
              throw new Error(g);
            }
            if (c && !yb(c, T0)) {
              let { message: g } = de(
                "MISSING_OR_INVALID",
                `request() expiry: ${c}. Expiry must be a number (in seconds) between ${T0.min} and ${T0.max}`
              );
              throw new Error(g);
            }
          })),
        (this.isValidRespond = (t) =>
          R(this, null, function* () {
            var i;
            if (!gr(t)) {
              let { message: c } = de(
                "MISSING_OR_INVALID",
                `respond() params: ${t}`
              );
              throw new Error(c);
            }
            let { topic: n, response: o } = t;
            try {
              yield this.isValidSessionTopic(n);
            } catch (c) {
              throw (
                ((i = t?.response) != null &&
                  i.id &&
                  this.cleanupAfterResponse(t),
                c)
              );
            }
            if (!db(o)) {
              let { message: c } = de(
                "MISSING_OR_INVALID",
                `respond() response: ${JSON.stringify(o)}`
              );
              throw new Error(c);
            }
          })),
        (this.isValidPing = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `ping() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            yield this.isValidSessionOrPairingTopic(i);
          })),
        (this.isValidEmit = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() params: ${t}`
              );
              throw new Error(l);
            }
            let { topic: i, event: n, chainId: o } = t;
            yield this.isValidSessionTopic(i);
            let { namespaces: c } = this.client.session.get(i);
            if (!up(c, o)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() chainId: ${o}`
              );
              throw new Error(l);
            }
            if (!pb(n)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(l);
            }
            if (!mb(c, o, n.name)) {
              let { message: l } = de(
                "MISSING_OR_INVALID",
                `emit() event: ${JSON.stringify(n)}`
              );
              throw new Error(l);
            }
          })),
        (this.isValidDisconnect = (t) =>
          R(this, null, function* () {
            if (!gr(t)) {
              let { message: n } = de(
                "MISSING_OR_INVALID",
                `disconnect() params: ${t}`
              );
              throw new Error(n);
            }
            let { topic: i } = t;
            yield this.isValidSessionOrPairingTopic(i);
          })),
        (this.isValidAuthenticate = (t) => {
          let { chains: i, uri: n, domain: o, nonce: c } = t;
          if (!Array.isArray(i) || i.length === 0)
            throw new Error("chains is required and must be a non-empty array");
          if (!Ft(n, !1)) throw new Error("uri is required parameter");
          if (!Ft(o, !1)) throw new Error("domain is required parameter");
          if (!Ft(c, !1)) throw new Error("nonce is required parameter");
          if ([...new Set(i.map((g) => Fs(g).namespace))].length > 1)
            throw new Error(
              "Multi-namespace requests are not supported. Please request single namespace only."
            );
          let { namespace: l } = Fs(i[0]);
          if (l !== "eip155")
            throw new Error(
              "Only eip155 namespace is supported for authenticated sessions. Please use .connect() for non-eip155 chains."
            );
        }),
        (this.getVerifyContext = (t, i) =>
          R(this, null, function* () {
            let n = {
              verified: {
                verifyUrl: i.verifyUrl || ia,
                validation: "UNKNOWN",
                origin: i.url || "",
              },
            };
            try {
              let o = yield this.client.core.verify.resolve({
                attestationId: t,
                verifyUrl: i.verifyUrl,
              });
              o &&
                ((n.verified.origin = o.origin),
                (n.verified.isScam = o.isScam),
                (n.verified.validation =
                  o.origin === new URL(i.url).origin ? "VALID" : "INVALID"));
            } catch (o) {
              this.client.logger.info(o);
            }
            return (
              this.client.logger.info(`Verify context: ${JSON.stringify(n)}`), n
            );
          })),
        (this.validateSessionProps = (t, i) => {
          Object.values(t).forEach((n) => {
            if (!Ft(n, !1)) {
              let { message: o } = de(
                "MISSING_OR_INVALID",
                `${i} must be in Record<string, string> format. Received: ${JSON.stringify(
                  n
                )}`
              );
              throw new Error(o);
            }
          });
        }),
        (this.getPendingAuthRequest = (t) => {
          let i = this.client.auth.requests.get(t);
          return typeof i == "object" ? i : void 0;
        }),
        (this.addToRecentlyDeleted = (t, i) => {
          if (
            (this.recentlyDeletedMap.set(t, i),
            this.recentlyDeletedMap.size >= this.recentlyDeletedLimit)
          ) {
            let n = 0,
              o = this.recentlyDeletedLimit / 2;
            for (let c of this.recentlyDeletedMap.keys()) {
              if (n++ >= o) break;
              this.recentlyDeletedMap.delete(c);
            }
          }
        }),
        (this.checkRecentlyDeleted = (t) => {
          let i = this.recentlyDeletedMap.get(t);
          if (i) {
            let { message: n } = de(
              "MISSING_OR_INVALID",
              `Record was recently deleted - ${i}: ${t}`
            );
            throw new Error(n);
          }
        });
    }
    isInitialized() {
      return R(this, null, function* () {
        if (!this.initialized) {
          let { message: e } = de("NOT_INITIALIZED", this.name);
          throw new Error(e);
        }
        yield this.client.core.relayer.confirmOnlineStateOrThrow();
      });
    }
    registerRelayerEvents() {
      this.client.core.relayer.on(Dr.message, (e) => {
        !this.initialized || this.relayMessageCache.length > 0
          ? this.relayMessageCache.push(e)
          : this.onRelayMessage(e);
      });
    }
    onRelayMessage(e) {
      return R(this, null, function* () {
        let { topic: t, message: i } = e,
          { publicKey: n } = this.client.auth.authKeys.keys.includes(nl)
            ? this.client.auth.authKeys.get(nl)
            : { responseTopic: void 0, publicKey: void 0 },
          o = yield this.client.core.crypto.decode(t, i, {
            receiverPublicKey: n,
          });
        try {
          Zo(o)
            ? (this.client.core.history.set(t, o),
              this.onRelayEventRequest({ topic: t, payload: o }))
            : ms(o)
            ? (yield this.client.core.history.resolve(o),
              yield this.onRelayEventResponse({ topic: t, payload: o }),
              this.client.core.history.delete(t, o.id))
            : this.onRelayEventUnknownPayload({ topic: t, payload: o });
        } catch (c) {
          this.client.logger.error(c);
        }
      });
    }
    registerExpirerEvents() {
      this.client.core.expirer.on(Yr.expired, (e) =>
        R(this, null, function* () {
          let { topic: t, id: i } = nh(e.target);
          if (i && this.client.pendingRequest.keys.includes(i))
            return yield this.deletePendingSessionRequest(i, de("EXPIRED"), !0);
          if (i && this.client.auth.requests.keys.includes(i))
            return yield this.deletePendingAuthRequest(i, de("EXPIRED"), !0);
          t
            ? this.client.session.keys.includes(t) &&
              (yield this.deleteSession({ topic: t, expirerHasDeleted: !0 }),
              this.client.events.emit("session_expire", { topic: t }))
            : i &&
              (yield this.deleteProposal(i, !0),
              this.client.events.emit("proposal_expire", { id: i }));
        })
      );
    }
    registerPairingEvents() {
      this.client.core.pairing.events.on(Ys.create, (e) =>
        this.onPairingCreated(e)
      ),
        this.client.core.pairing.events.on(Ys.delete, (e) => {
          this.addToRecentlyDeleted(e.topic, "pairing");
        });
    }
    isValidPairingTopic(e) {
      if (!Ft(e, !1)) {
        let { message: t } = de(
          "MISSING_OR_INVALID",
          `pairing topic should be a string: ${e}`
        );
        throw new Error(t);
      }
      if (!this.client.core.pairing.pairings.keys.includes(e)) {
        let { message: t } = de(
          "NO_MATCHING_KEY",
          `pairing topic doesn't exist: ${e}`
        );
        throw new Error(t);
      }
      if (Qi(this.client.core.pairing.pairings.get(e).expiry)) {
        let { message: t } = de("EXPIRED", `pairing topic: ${e}`);
        throw new Error(t);
      }
    }
    isValidSessionTopic(e) {
      return R(this, null, function* () {
        if (!Ft(e, !1)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session topic should be a string: ${e}`
          );
          throw new Error(t);
        }
        if (
          (this.checkRecentlyDeleted(e), !this.client.session.keys.includes(e))
        ) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `session topic doesn't exist: ${e}`
          );
          throw new Error(t);
        }
        if (Qi(this.client.session.get(e).expiry)) {
          yield this.deleteSession({ topic: e });
          let { message: t } = de("EXPIRED", `session topic: ${e}`);
          throw new Error(t);
        }
        if (!this.client.core.crypto.keychain.has(e)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session topic does not exist in keychain: ${e}`
          );
          throw (yield this.deleteSession({ topic: e }), new Error(t));
        }
      });
    }
    isValidSessionOrPairingTopic(e) {
      return R(this, null, function* () {
        if (
          (this.checkRecentlyDeleted(e), this.client.session.keys.includes(e))
        )
          yield this.isValidSessionTopic(e);
        else if (this.client.core.pairing.pairings.keys.includes(e))
          this.isValidPairingTopic(e);
        else if (Ft(e, !1)) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `session or pairing topic doesn't exist: ${e}`
          );
          throw new Error(t);
        } else {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `session or pairing topic should be a string: ${e}`
          );
          throw new Error(t);
        }
      });
    }
    isValidProposalId(e) {
      return R(this, null, function* () {
        if (!hb(e)) {
          let { message: t } = de(
            "MISSING_OR_INVALID",
            `proposal id should be a number: ${e}`
          );
          throw new Error(t);
        }
        if (!this.client.proposal.keys.includes(e)) {
          let { message: t } = de(
            "NO_MATCHING_KEY",
            `proposal id doesn't exist: ${e}`
          );
          throw new Error(t);
        }
        if (Qi(this.client.proposal.get(e).expiryTimestamp)) {
          yield this.deleteProposal(e);
          let { message: t } = de("EXPIRED", `proposal id: ${e}`);
          throw new Error(t);
        }
      });
    }
  },
  L0 = class extends on {
    constructor(e, t) {
      super(e, t, bF, H0), (this.core = e), (this.logger = t);
    }
  },
  U0 = class extends on {
    constructor(e, t) {
      super(e, t, _F, H0), (this.core = e), (this.logger = t);
    }
  },
  B0 = class extends on {
    constructor(e, t) {
      super(e, t, AF, H0, (i) => i.id), (this.core = e), (this.logger = t);
    }
  },
  q0 = class extends on {
    constructor(e, t) {
      super(e, t, DF, al, () => nl), (this.core = e), (this.logger = t);
    }
  },
  j0 = class extends on {
    constructor(e, t) {
      super(e, t, RF, al), (this.core = e), (this.logger = t);
    }
  },
  z0 = class extends on {
    constructor(e, t) {
      super(e, t, CF, al, (i) => i.id), (this.core = e), (this.logger = t);
    }
  },
  k0 = class {
    constructor(e, t) {
      (this.core = e),
        (this.logger = t),
        (this.authKeys = new q0(this.core, this.logger)),
        (this.pairingTopics = new j0(this.core, this.logger)),
        (this.requests = new z0(this.core, this.logger));
    }
    init() {
      return R(this, null, function* () {
        yield this.authKeys.init(),
          yield this.pairingTopics.init(),
          yield this.requests.init();
      });
    }
  },
  sl = class r extends Oh {
    constructor(e) {
      super(e),
        (this.protocol = u_),
        (this.version = h_),
        (this.name = N0.name),
        (this.events = new ol.EventEmitter()),
        (this.on = (i, n) => this.events.on(i, n)),
        (this.once = (i, n) => this.events.once(i, n)),
        (this.off = (i, n) => this.events.off(i, n)),
        (this.removeListener = (i, n) => this.events.removeListener(i, n)),
        (this.removeAllListeners = (i) => this.events.removeAllListeners(i)),
        (this.connect = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.connect(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.pair = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.pair(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.approve = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.approve(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.reject = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.reject(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.update = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.update(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.extend = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.extend(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.request = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.request(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.respond = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.respond(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.ping = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.ping(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.emit = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.emit(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.disconnect = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.disconnect(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.find = (i) => {
          try {
            return this.engine.find(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        (this.getPendingSessionRequests = () => {
          try {
            return this.engine.getPendingSessionRequests();
          } catch (i) {
            throw (this.logger.error(i.message), i);
          }
        }),
        (this.authenticate = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.authenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.formatAuthMessage = (i) => {
          try {
            return this.engine.formatAuthMessage(i);
          } catch (n) {
            throw (this.logger.error(n.message), n);
          }
        }),
        (this.approveSessionAuthenticate = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.approveSessionAuthenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.rejectSessionAuthenticate = (i) =>
          R(this, null, function* () {
            try {
              return yield this.engine.rejectSessionAuthenticate(i);
            } catch (n) {
              throw (this.logger.error(n.message), n);
            }
          })),
        (this.name = e?.name || N0.name),
        (this.metadata = e?.metadata || tw()),
        (this.signConfig = e?.signConfig);
      let t =
        typeof e?.logger < "u" && typeof e?.logger != "string"
          ? e.logger
          : (0, zs.default)(ks({ level: e?.logger || N0.logger }));
      (this.core = e?.core || new s_(e)),
        (this.logger = yr(t, this.name)),
        (this.session = new U0(this.core, this.logger)),
        (this.proposal = new L0(this.core, this.logger)),
        (this.pendingRequest = new B0(this.core, this.logger)),
        (this.engine = new F0(this)),
        (this.auth = new k0(this.core, this.logger));
    }
    static init(e) {
      return R(this, null, function* () {
        let t = new r(e);
        return yield t.initialize(), t;
      });
    }
    get context() {
      return mr(this.logger);
    }
    get pairing() {
      return this.core.pairing.pairings;
    }
    initialize() {
      return R(this, null, function* () {
        this.logger.trace("Initialized");
        try {
          yield this.core.start(),
            yield this.session.init(),
            yield this.proposal.init(),
            yield this.pendingRequest.init(),
            yield this.engine.init(),
            yield this.auth.init(),
            this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
            this.logger.info("SignClient Initialization Success"),
            this.engine.processRelayMessageCache();
        } catch (e) {
          throw (
            (this.logger.info("SignClient Initialization Failure"),
            this.logger.error(e.message),
            e)
          );
        }
      });
    }
  };
var __ = Je(xn()),
  V0 = Je(p_());
var FF = Object.defineProperty,
  LF = Object.defineProperties,
  UF = Object.getOwnPropertyDescriptors,
  g_ = Object.getOwnPropertySymbols,
  BF = Object.prototype.hasOwnProperty,
  qF = Object.prototype.propertyIsEnumerable,
  m_ = (r, e, t) =>
    e in r
      ? FF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  y_ = (r, e) => {
    for (var t in e || (e = {})) BF.call(e, t) && m_(r, t, e[t]);
    if (g_) for (var t of g_(e)) qF.call(e, t) && m_(r, t, e[t]);
    return r;
  },
  v_ = (r, e) => LF(r, UF(e)),
  jF = { Accept: "application/json", "Content-Type": "application/json" },
  zF = "POST",
  w_ = { headers: jF, mSOLod: zF },
  b_ = 10,
  Qr = class {
    constructor(e, t = !1) {
      if (
        ((this.url = e),
        (this.disableProviderPing = t),
        (this.events = new __.EventEmitter()),
        (this.isAvailable = !1),
        (this.registering = !1),
        !Hh(e))
      )
        throw new Error(
          `Provided URL is not compatible with HTTP connection: ${e}`
        );
      (this.url = e), (this.disableProviderPing = t);
    }
    get connected() {
      return this.isAvailable;
    }
    get connecting() {
      return this.registering;
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    open() {
      return R(this, arguments, function* (e = this.url) {
        yield this.register(e);
      });
    }
    close() {
      return R(this, null, function* () {
        if (!this.isAvailable) throw new Error("Connection already closed");
        this.onClose();
      });
    }
    send(e) {
      return R(this, null, function* () {
        this.isAvailable || (yield this.register());
        try {
          let t = xr(e),
            i = yield (yield (0, V0.default)(
              this.url,
              v_(y_({}, w_), { body: t })
            )).json();
          this.onPayload({ data: i });
        } catch (t) {
          this.onError(e.id, t);
        }
      });
    }
    register() {
      return R(this, arguments, function* (e = this.url) {
        if (!Hh(e))
          throw new Error(
            `Provided URL is not compatible with HTTP connection: ${e}`
          );
        if (this.registering) {
          let t = this.events.getMaxListeners();
          return (
            (this.events.listenerCount("register_error") >= t ||
              this.events.listenerCount("open") >= t) &&
              this.events.setMaxListeners(t + 1),
            new Promise((i, n) => {
              this.events.once("register_error", (o) => {
                this.resetMaxListeners(), n(o);
              }),
                this.events.once("open", () => {
                  if ((this.resetMaxListeners(), typeof this.isAvailable > "u"))
                    return n(
                      new Error("HTTP connection is missing or invalid")
                    );
                  i();
                });
            })
          );
        }
        (this.url = e), (this.registering = !0);
        try {
          if (!this.disableProviderPing) {
            let t = xr({ id: 1, jsonrpc: "2.0", mSOLod: "test", params: [] });
            yield (0, V0.default)(e, v_(y_({}, w_), { body: t }));
          }
          this.onOpen();
        } catch (t) {
          let i = this.parseError(t);
          throw (this.events.emit("register_error", i), this.onClose(), i);
        }
      });
    }
    onOpen() {
      (this.isAvailable = !0),
        (this.registering = !1),
        this.events.emit("open");
    }
    onClose() {
      (this.isAvailable = !1),
        (this.registering = !1),
        this.events.emit("close");
    }
    onPayload(e) {
      if (typeof e.data > "u") return;
      let t = typeof e.data == "string" ? Zi(e.data) : e.data;
      this.events.emit("payload", t);
    }
    onError(e, t) {
      let i = this.parseError(t),
        n = i.message || i.toString(),
        o = jn(e, n);
      this.events.emit("payload", o);
    }
    parseError(e, t = this.url) {
      return wc(e, t, "HTTP");
    }
    resetMaxListeners() {
      this.events.getMaxListeners() > b_ && this.events.setMaxListeners(b_);
    }
  };
var T_ = Je(xn());
var E_ = "error",
  kF = "wss://relay.walletconnect.com",
  HF = "wc",
  KF = "universal_provider",
  A_ = `${HF}@2:${KF}:`,
  VF = "https://rpc.walletconnect.com/v1/",
  oa = "generic",
  cn = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" },
  Pc =
    typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {},
  Y0 = { exports: {} };
(function (r, e) {
  (function () {
    var t,
      i = "4.17.21",
      n = 200,
      o = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
      c = "Expected a function",
      l = "Invalid `variable` option passed into `_.template`",
      g = "__lodash_hash_undefined__",
      d = 500,
      y = "__lodash_placeholder__",
      v = 1,
      A = 2,
      E = 4,
      P = 1,
      N = 2,
      T = 1,
      K = 2,
      Z = 4,
      J = 8,
      G = 16,
      Q = 32,
      ee = 64,
      L = 128,
      B = 256,
      ae = 512,
      U = 30,
      j = "...",
      W = 800,
      h = 16,
      m = 1,
      b = 2,
      x = 3,
      D = 1 / 0,
      M = 9007199254740991,
      z = 17976931348623157e292,
      C = NaN,
      p = 4294967295,
      I = p - 1,
      ue = p >>> 1,
      ne = [
        ["ary", L],
        ["bind", T],
        ["bindKey", K],
        ["curry", J],
        ["curryRight", G],
        ["flip", ae],
        ["partial", Q],
        ["partialRight", ee],
        ["rearg", B],
      ],
      w = "[object Arguments]",
      $ = "[object Array]",
      H = "[object AsyncFunction]",
      Y = "[object Boolean]",
      he = "[object Date]",
      oe = "[object DOMException]",
      ce = "[object Error]",
      fe = "[object Function]",
      pe = "[object GeneratorFunction]",
      se = "[object Map]",
      ve = "[object Number]",
      ht = "[object Null]",
      je = "[object Object]",
      Ri = "[object Promise]",
      lt = "[object Proxy]",
      Ke = "[object RegExp]",
      Kt = "[object Set]",
      Ve = "[object String]",
      We = "[object Symbol]",
      un = "[object Undefined]",
      Ge = "[object WeakMap]",
      ft = "[object WeakSet]",
      Ur = "[object ArrayBuffer]",
      He = "[object DataView]",
      Xe = "[object Float32Array]",
      fi = "[object Float64Array]",
      Ze = "[object Int8Array]",
      et = "[object Int16Array]",
      di = "[object Int32Array]",
      tt = "[object Uint8Array]",
      rt = "[object Uint8ClampedArray]",
      pi = "[object Uint16Array]",
      it = "[object Uint32Array]",
      dt = /\b__p \+= '';/g,
      hn = /\b(__p \+=) '' \+/g,
      pt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      ot = /&(?:amp|lt|gt|quot|#39);/g,
      Ci = /[&<>"']/g,
      gt = RegExp(ot.source),
      mt = RegExp(Ci.source),
      ln = /<%-([\s\S]+?)%>/g,
      yt = /<%([\s\S]+?)%>/g,
      at = /<%=([\s\S]+?)%>/g,
      fn = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      vt = /^\w*$/,
      wt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      gi = /[\\^$.*+?()[\]{}|]/g,
      bt = RegExp(gi.source),
      nt = /^\s+/,
      dn = /\s/,
      _t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Et = /\{\n\/\* \[wrapped with (.+)\] \*/,
      pn = /,? & /,
      At = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      St = /[()=,{}\[\]\/\s]/,
      gn = /\\(\\)?/g,
      xt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      ct = /\w*$/,
      Oi = /^[-+]0x[0-9a-f]+$/i,
      Pi = /^0b[01]+$/i,
      Mi = /^\[object .+?Constructor\]$/,
      Ni = /^0o[0-7]+$/i,
      Ti = /^(?:0|[1-9]\d*)$/,
      Fi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      Gn = /($^)/,
      ca = /['\n\r\u2028\u2029\\]/g,
      $n = "\\ud800-\\udfff",
      ua = "\\u0300-\\u036f",
      ha = "\\ufe20-\\ufe2f",
      la = "\\u20d0-\\u20ff",
      Zs = ua + ha + la,
      eo = "\\u2700-\\u27bf",
      to = "a-z\\xdf-\\xf6\\xf8-\\xff",
      fa = "\\xac\\xb1\\xd7\\xf7",
      da = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
      pa = "\\u2000-\\u206f",
      ga =
        " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
      lg = "A-Z\\xc0-\\xd6\\xd8-\\xde",
      fg = "\\ufe0e\\ufe0f",
      dg = fa + da + pa + ga,
      dl = "['\u2019]",
      z_ = "[" + $n + "]",
      pg = "[" + dg + "]",
      Mc = "[" + Zs + "]",
      gg = "\\d+",
      k_ = "[" + eo + "]",
      mg = "[" + to + "]",
      yg = "[^" + $n + dg + gg + eo + to + lg + "]",
      pl = "\\ud83c[\\udffb-\\udfff]",
      H_ = "(?:" + Mc + "|" + pl + ")",
      vg = "[^" + $n + "]",
      gl = "(?:\\ud83c[\\udde6-\\uddff]){2}",
      ml = "[\\ud800-\\udbff][\\udc00-\\udfff]",
      ro = "[" + lg + "]",
      wg = "\\u200d",
      bg = "(?:" + mg + "|" + yg + ")",
      K_ = "(?:" + ro + "|" + yg + ")",
      _g = "(?:" + dl + "(?:d|ll|m|re|s|t|ve))?",
      Eg = "(?:" + dl + "(?:D|LL|M|RE|S|T|VE))?",
      Ag = H_ + "?",
      Sg = "[" + fg + "]?",
      V_ = "(?:" + wg + "(?:" + [vg, gl, ml].join("|") + ")" + Sg + Ag + ")*",
      G_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
      $_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
      xg = Sg + Ag + V_,
      J_ = "(?:" + [k_, gl, ml].join("|") + ")" + xg,
      W_ = "(?:" + [vg + Mc + "?", Mc, gl, ml, z_].join("|") + ")",
      Y_ = RegExp(dl, "g"),
      Q_ = RegExp(Mc, "g"),
      yl = RegExp(pl + "(?=" + pl + ")|" + W_ + xg, "g"),
      X_ = RegExp(
        [
          ro + "?" + mg + "+" + _g + "(?=" + [pg, ro, "$"].join("|") + ")",
          K_ + "+" + Eg + "(?=" + [pg, ro + bg, "$"].join("|") + ")",
          ro + "?" + bg + "+" + _g,
          ro + "+" + Eg,
          $_,
          G_,
          gg,
          J_,
        ].join("|"),
        "g"
      ),
      Z_ = RegExp("[" + wg + $n + Zs + fg + "]"),
      e6 = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      t6 = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout",
      ],
      r6 = -1,
      Ot = {};
    (Ot[Xe] =
      Ot[fi] =
      Ot[Ze] =
      Ot[et] =
      Ot[di] =
      Ot[tt] =
      Ot[rt] =
      Ot[pi] =
      Ot[it] =
        !0),
      (Ot[w] =
        Ot[$] =
        Ot[Ur] =
        Ot[Y] =
        Ot[He] =
        Ot[he] =
        Ot[ce] =
        Ot[fe] =
        Ot[se] =
        Ot[ve] =
        Ot[je] =
        Ot[Ke] =
        Ot[Kt] =
        Ot[Ve] =
        Ot[Ge] =
          !1);
    var Rt = {};
    (Rt[w] =
      Rt[$] =
      Rt[Ur] =
      Rt[He] =
      Rt[Y] =
      Rt[he] =
      Rt[Xe] =
      Rt[fi] =
      Rt[Ze] =
      Rt[et] =
      Rt[di] =
      Rt[se] =
      Rt[ve] =
      Rt[je] =
      Rt[Ke] =
      Rt[Kt] =
      Rt[Ve] =
      Rt[We] =
      Rt[tt] =
      Rt[rt] =
      Rt[pi] =
      Rt[it] =
        !0),
      (Rt[ce] = Rt[fe] = Rt[Ge] = !1);
    var i6 = {
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s",
      },
      n6 = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      },
      s6 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
      },
      o6 = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      a6 = parseFloat,
      c6 = parseInt,
      Ig = typeof Pc == "object" && Pc && Pc.Object === Object && Pc,
      u6 = typeof self == "object" && self && self.Object === Object && self,
      er = Ig || u6 || Function("return this")(),
      vl = e && !e.nodeType && e,
      bs = vl && !0 && r && !r.nodeType && r,
      Dg = bs && bs.exports === vl,
      wl = Dg && Ig.process,
      Xr = (function () {
        try {
          var k = bs && bs.require && bs.require("util").types;
          return k || (wl && wl.binding && wl.binding("util"));
        } catch {}
      })(),
      Rg = Xr && Xr.isArrayBuffer,
      Cg = Xr && Xr.isDate,
      Og = Xr && Xr.isMap,
      Pg = Xr && Xr.isRegExp,
      Mg = Xr && Xr.isSet,
      Ng = Xr && Xr.isTypedArray;
    function Br(k, te, X) {
      switch (X.length) {
        case 0:
          return k.call(te);
        case 1:
          return k.call(te, X[0]);
        case 2:
          return k.call(te, X[0], X[1]);
        case 3:
          return k.call(te, X[0], X[1], X[2]);
      }
      return k.apply(te, X);
    }
    function h6(k, te, X, ye) {
      for (var xe = -1, $e = k == null ? 0 : k.length; ++xe < $e; ) {
        var Vt = k[xe];
        te(ye, Vt, X(Vt), k);
      }
      return ye;
    }
    function Zr(k, te) {
      for (
        var X = -1, ye = k == null ? 0 : k.length;
        ++X < ye && te(k[X], X, k) !== !1;

      );
      return k;
    }
    function l6(k, te) {
      for (var X = k == null ? 0 : k.length; X-- && te(k[X], X, k) !== !1; );
      return k;
    }
    function Tg(k, te) {
      for (var X = -1, ye = k == null ? 0 : k.length; ++X < ye; )
        if (!te(k[X], X, k)) return !1;
      return !0;
    }
    function Jn(k, te) {
      for (
        var X = -1, ye = k == null ? 0 : k.length, xe = 0, $e = [];
        ++X < ye;

      ) {
        var Vt = k[X];
        te(Vt, X, k) && ($e[xe++] = Vt);
      }
      return $e;
    }
    function Nc(k, te) {
      var X = k == null ? 0 : k.length;
      return !!X && io(k, te, 0) > -1;
    }
    function bl(k, te, X) {
      for (var ye = -1, xe = k == null ? 0 : k.length; ++ye < xe; )
        if (X(te, k[ye])) return !0;
      return !1;
    }
    function Mt(k, te) {
      for (
        var X = -1, ye = k == null ? 0 : k.length, xe = Array(ye);
        ++X < ye;

      )
        xe[X] = te(k[X], X, k);
      return xe;
    }
    function Wn(k, te) {
      for (var X = -1, ye = te.length, xe = k.length; ++X < ye; )
        k[xe + X] = te[X];
      return k;
    }
    function _l(k, te, X, ye) {
      var xe = -1,
        $e = k == null ? 0 : k.length;
      for (ye && $e && (X = k[++xe]); ++xe < $e; ) X = te(X, k[xe], xe, k);
      return X;
    }
    function f6(k, te, X, ye) {
      var xe = k == null ? 0 : k.length;
      for (ye && xe && (X = k[--xe]); xe--; ) X = te(X, k[xe], xe, k);
      return X;
    }
    function El(k, te) {
      for (var X = -1, ye = k == null ? 0 : k.length; ++X < ye; )
        if (te(k[X], X, k)) return !0;
      return !1;
    }
    var d6 = Al("length");
    function p6(k) {
      return k.split("");
    }
    function g6(k) {
      return k.match(At) || [];
    }
    function Fg(k, te, X) {
      var ye;
      return (
        X(k, function (xe, $e, Vt) {
          if (te(xe, $e, Vt)) return (ye = $e), !1;
        }),
        ye
      );
    }
    function Tc(k, te, X, ye) {
      for (var xe = k.length, $e = X + (ye ? 1 : -1); ye ? $e-- : ++$e < xe; )
        if (te(k[$e], $e, k)) return $e;
      return -1;
    }
    function io(k, te, X) {
      return te === te ? D6(k, te, X) : Tc(k, Lg, X);
    }
    function m6(k, te, X, ye) {
      for (var xe = X - 1, $e = k.length; ++xe < $e; )
        if (ye(k[xe], te)) return xe;
      return -1;
    }
    function Lg(k) {
      return k !== k;
    }
    function Ug(k, te) {
      var X = k == null ? 0 : k.length;
      return X ? xl(k, te) / X : C;
    }
    function Al(k) {
      return function (te) {
        return te == null ? t : te[k];
      };
    }
    function Sl(k) {
      return function (te) {
        return k == null ? t : k[te];
      };
    }
    function Bg(k, te, X, ye, xe) {
      return (
        xe(k, function ($e, Vt, It) {
          X = ye ? ((ye = !1), $e) : te(X, $e, Vt, It);
        }),
        X
      );
    }
    function y6(k, te) {
      var X = k.length;
      for (k.sort(te); X--; ) k[X] = k[X].value;
      return k;
    }
    function xl(k, te) {
      for (var X, ye = -1, xe = k.length; ++ye < xe; ) {
        var $e = te(k[ye]);
        $e !== t && (X = X === t ? $e : X + $e);
      }
      return X;
    }
    function Il(k, te) {
      for (var X = -1, ye = Array(k); ++X < k; ) ye[X] = te(X);
      return ye;
    }
    function v6(k, te) {
      return Mt(te, function (X) {
        return [X, k[X]];
      });
    }
    function qg(k) {
      return k && k.slice(0, Hg(k) + 1).replace(nt, "");
    }
    function qr(k) {
      return function (te) {
        return k(te);
      };
    }
    function Dl(k, te) {
      return Mt(te, function (X) {
        return k[X];
      });
    }
    function ma(k, te) {
      return k.has(te);
    }
    function jg(k, te) {
      for (var X = -1, ye = k.length; ++X < ye && io(te, k[X], 0) > -1; );
      return X;
    }
    function zg(k, te) {
      for (var X = k.length; X-- && io(te, k[X], 0) > -1; );
      return X;
    }
    function w6(k, te) {
      for (var X = k.length, ye = 0; X--; ) k[X] === te && ++ye;
      return ye;
    }
    var b6 = Sl(i6),
      _6 = Sl(n6);
    function E6(k) {
      return "\\" + o6[k];
    }
    function A6(k, te) {
      return k == null ? t : k[te];
    }
    function no(k) {
      return Z_.test(k);
    }
    function S6(k) {
      return e6.test(k);
    }
    function x6(k) {
      for (var te, X = []; !(te = k.next()).done; ) X.push(te.value);
      return X;
    }
    function Rl(k) {
      var te = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye, xe) {
          X[++te] = [xe, ye];
        }),
        X
      );
    }
    function kg(k, te) {
      return function (X) {
        return k(te(X));
      };
    }
    function Yn(k, te) {
      for (var X = -1, ye = k.length, xe = 0, $e = []; ++X < ye; ) {
        var Vt = k[X];
        (Vt === te || Vt === y) && ((k[X] = y), ($e[xe++] = X));
      }
      return $e;
    }
    function Fc(k) {
      var te = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye) {
          X[++te] = ye;
        }),
        X
      );
    }
    function I6(k) {
      var te = -1,
        X = Array(k.size);
      return (
        k.forEach(function (ye) {
          X[++te] = [ye, ye];
        }),
        X
      );
    }
    function D6(k, te, X) {
      for (var ye = X - 1, xe = k.length; ++ye < xe; )
        if (k[ye] === te) return ye;
      return -1;
    }
    function R6(k, te, X) {
      for (var ye = X + 1; ye--; ) if (k[ye] === te) return ye;
      return ye;
    }
    function so(k) {
      return no(k) ? O6(k) : d6(k);
    }
    function mi(k) {
      return no(k) ? P6(k) : p6(k);
    }
    function Hg(k) {
      for (var te = k.length; te-- && dn.test(k.charAt(te)); );
      return te;
    }
    var C6 = Sl(s6);
    function O6(k) {
      for (var te = (yl.lastIndex = 0); yl.test(k); ) ++te;
      return te;
    }
    function P6(k) {
      return k.match(yl) || [];
    }
    function M6(k) {
      return k.match(X_) || [];
    }
    var N6 = function k(te) {
        te = te == null ? er : oo.defaults(er.Object(), te, oo.pick(er, t6));
        var X = te.Array,
          ye = te.Date,
          xe = te.Error,
          $e = te.Function,
          Vt = te.Math,
          It = te.Object,
          Cl = te.RegExp,
          T6 = te.String,
          ei = te.TypeError,
          Lc = X.prototype,
          F6 = $e.prototype,
          ao = It.prototype,
          Uc = te["__core-js_shared__"],
          Bc = F6.toString,
          st = ao.hasOwnProperty,
          L6 = 0,
          Kg = (function () {
            var s = /[^.]+$/.exec((Uc && Uc.keys && Uc.keys.IE_PROTO) || "");
            return s ? "Symbol(src)_1." + s : "";
          })(),
          qc = ao.toString,
          U6 = Bc.call(It),
          B6 = er._,
          q6 = Cl(
            "^" +
              Bc.call(st)
                .replace(gi, "\\$&")
                .replace(
                  /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                  "$1.*?"
                ) +
              "$"
          ),
          jc = Dg ? te.Buffer : t,
          Qn = te.Symbol,
          zc = te.Uint8Array,
          Vg = jc ? jc.allocUnsafe : t,
          kc = kg(It.getPrototypeOf, It),
          Gg = It.create,
          $g = ao.propertyIsEnumerable,
          Hc = Lc.splice,
          Jg = Qn ? Qn.isConcatSpreadable : t,
          ya = Qn ? Qn.iterator : t,
          _s = Qn ? Qn.toStringTag : t,
          Kc = (function () {
            try {
              var s = Is(It, "defineProperty");
              return s({}, "", {}), s;
            } catch {}
          })(),
          j6 = te.clearTimeout !== er.clearTimeout && te.clearTimeout,
          z6 = ye && ye.now !== er.Date.now && ye.now,
          k6 = te.setTimeout !== er.setTimeout && te.setTimeout,
          Vc = Vt.ceil,
          Gc = Vt.floor,
          Ol = It.getOwnPropertySymbols,
          H6 = jc ? jc.isBuffer : t,
          Wg = te.isFinite,
          K6 = Lc.join,
          V6 = kg(It.keys, It),
          Gt = Vt.max,
          ur = Vt.min,
          G6 = ye.now,
          $6 = te.parseInt,
          Yg = Vt.random,
          J6 = Lc.reverse,
          Pl = Is(te, "DataView"),
          va = Is(te, "Map"),
          Ml = Is(te, "Promise"),
          co = Is(te, "Set"),
          wa = Is(te, "WeakMap"),
          ba = Is(It, "create"),
          $c = wa && new wa(),
          uo = {},
          W6 = Ds(Pl),
          Y6 = Ds(va),
          Q6 = Ds(Ml),
          X6 = Ds(co),
          Z6 = Ds(wa),
          Jc = Qn ? Qn.prototype : t,
          _a = Jc ? Jc.valueOf : t,
          Qg = Jc ? Jc.toString : t;
        function S(s) {
          if (Lt(s) && !Ie(s) && !(s instanceof Le)) {
            if (s instanceof ti) return s;
            if (st.call(s, "__wrapped__")) return X1(s);
          }
          return new ti(s);
        }
        var ho = (function () {
          function s() {}
          return function (a) {
            if (!Tt(a)) return {};
            if (Gg) return Gg(a);
            s.prototype = a;
            var u = new s();
            return (s.prototype = t), u;
          };
        })();
        function Wc() {}
        function ti(s, a) {
          (this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__chain__ = !!a),
            (this.__index__ = 0),
            (this.__values__ = t);
        }
        (S.templateSettings = {
          escape: ln,
          evaluate: yt,
          interpolate: at,
          variable: "",
          imports: { _: S },
        }),
          (S.prototype = Wc.prototype),
          (S.prototype.constructor = S),
          (ti.prototype = ho(Wc.prototype)),
          (ti.prototype.constructor = ti);
        function Le(s) {
          (this.__wrapped__ = s),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = p),
            (this.__views__ = []);
        }
        function eE() {
          var s = new Le(this.__wrapped__);
          return (
            (s.__actions__ = Rr(this.__actions__)),
            (s.__dir__ = this.__dir__),
            (s.__filtered__ = this.__filtered__),
            (s.__iteratees__ = Rr(this.__iteratees__)),
            (s.__takeCount__ = this.__takeCount__),
            (s.__views__ = Rr(this.__views__)),
            s
          );
        }
        function tE() {
          if (this.__filtered__) {
            var s = new Le(this);
            (s.__dir__ = -1), (s.__filtered__ = !0);
          } else (s = this.clone()), (s.__dir__ *= -1);
          return s;
        }
        function rE() {
          var s = this.__wrapped__.value(),
            a = this.__dir__,
            u = Ie(s),
            f = a < 0,
            _ = u ? s.length : 0,
            O = pA(0, _, this.__views__),
            F = O.start,
            q = O.end,
            V = q - F,
            re = f ? q : F - 1,
            ie = this.__iteratees__,
            le = ie.length,
            ge = 0,
            we = ur(V, this.__takeCount__);
          if (!u || (!f && _ == V && we == V)) return _1(s, this.__actions__);
          var Ee = [];
          e: for (; V-- && ge < we; ) {
            re += a;
            for (var Oe = -1, Ae = s[re]; ++Oe < le; ) {
              var Fe = ie[Oe],
                ze = Fe.iteratee,
                kr = Fe.type,
                _r = ze(Ae);
              if (kr == b) Ae = _r;
              else if (!_r) {
                if (kr == m) continue e;
                break e;
              }
            }
            Ee[ge++] = Ae;
          }
          return Ee;
        }
        (Le.prototype = ho(Wc.prototype)), (Le.prototype.constructor = Le);
        function Es(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function iE() {
          (this.__data__ = ba ? ba(null) : {}), (this.size = 0);
        }
        function nE(s) {
          var a = this.has(s) && delete this.__data__[s];
          return (this.size -= a ? 1 : 0), a;
        }
        function sE(s) {
          var a = this.__data__;
          if (ba) {
            var u = a[s];
            return u === g ? t : u;
          }
          return st.call(a, s) ? a[s] : t;
        }
        function oE(s) {
          var a = this.__data__;
          return ba ? a[s] !== t : st.call(a, s);
        }
        function aE(s, a) {
          var u = this.__data__;
          return (
            (this.size += this.has(s) ? 0 : 1),
            (u[s] = ba && a === t ? g : a),
            this
          );
        }
        (Es.prototype.clear = iE),
          (Es.prototype.delete = nE),
          (Es.prototype.get = sE),
          (Es.prototype.has = oE),
          (Es.prototype.set = aE);
        function mn(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function cE() {
          (this.__data__ = []), (this.size = 0);
        }
        function uE(s) {
          var a = this.__data__,
            u = Yc(a, s);
          if (u < 0) return !1;
          var f = a.length - 1;
          return u == f ? a.pop() : Hc.call(a, u, 1), --this.size, !0;
        }
        function hE(s) {
          var a = this.__data__,
            u = Yc(a, s);
          return u < 0 ? t : a[u][1];
        }
        function lE(s) {
          return Yc(this.__data__, s) > -1;
        }
        function fE(s, a) {
          var u = this.__data__,
            f = Yc(u, s);
          return f < 0 ? (++this.size, u.push([s, a])) : (u[f][1] = a), this;
        }
        (mn.prototype.clear = cE),
          (mn.prototype.delete = uE),
          (mn.prototype.get = hE),
          (mn.prototype.has = lE),
          (mn.prototype.set = fE);
        function yn(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.clear(); ++a < u; ) {
            var f = s[a];
            this.set(f[0], f[1]);
          }
        }
        function dE() {
          (this.size = 0),
            (this.__data__ = {
              hash: new Es(),
              map: new (va || mn)(),
              string: new Es(),
            });
        }
        function pE(s) {
          var a = cu(this, s).delete(s);
          return (this.size -= a ? 1 : 0), a;
        }
        function gE(s) {
          return cu(this, s).get(s);
        }
        function mE(s) {
          return cu(this, s).has(s);
        }
        function yE(s, a) {
          var u = cu(this, s),
            f = u.size;
          return u.set(s, a), (this.size += u.size == f ? 0 : 1), this;
        }
        (yn.prototype.clear = dE),
          (yn.prototype.delete = pE),
          (yn.prototype.get = gE),
          (yn.prototype.has = mE),
          (yn.prototype.set = yE);
        function As(s) {
          var a = -1,
            u = s == null ? 0 : s.length;
          for (this.__data__ = new yn(); ++a < u; ) this.add(s[a]);
        }
        function vE(s) {
          return this.__data__.set(s, g), this;
        }
        function wE(s) {
          return this.__data__.has(s);
        }
        (As.prototype.add = As.prototype.push = vE), (As.prototype.has = wE);
        function yi(s) {
          var a = (this.__data__ = new mn(s));
          this.size = a.size;
        }
        function bE() {
          (this.__data__ = new mn()), (this.size = 0);
        }
        function _E(s) {
          var a = this.__data__,
            u = a.delete(s);
          return (this.size = a.size), u;
        }
        function EE(s) {
          return this.__data__.get(s);
        }
        function AE(s) {
          return this.__data__.has(s);
        }
        function SE(s, a) {
          var u = this.__data__;
          if (u instanceof mn) {
            var f = u.__data__;
            if (!va || f.length < n - 1)
              return f.push([s, a]), (this.size = ++u.size), this;
            u = this.__data__ = new yn(f);
          }
          return u.set(s, a), (this.size = u.size), this;
        }
        (yi.prototype.clear = bE),
          (yi.prototype.delete = _E),
          (yi.prototype.get = EE),
          (yi.prototype.has = AE),
          (yi.prototype.set = SE);
        function Xg(s, a) {
          var u = Ie(s),
            f = !u && Rs(s),
            _ = !u && !f && rs(s),
            O = !u && !f && !_ && go(s),
            F = u || f || _ || O,
            q = F ? Il(s.length, T6) : [],
            V = q.length;
          for (var re in s)
            (a || st.call(s, re)) &&
              !(
                F &&
                (re == "length" ||
                  (_ && (re == "offset" || re == "parent")) ||
                  (O &&
                    (re == "buffer" ||
                      re == "byteLength" ||
                      re == "byteOffset")) ||
                  _n(re, V))
              ) &&
              q.push(re);
          return q;
        }
        function Zg(s) {
          var a = s.length;
          return a ? s[Hl(0, a - 1)] : t;
        }
        function xE(s, a) {
          return uu(Rr(s), Ss(a, 0, s.length));
        }
        function IE(s) {
          return uu(Rr(s));
        }
        function Nl(s, a, u) {
          ((u !== t && !vi(s[a], u)) || (u === t && !(a in s))) && vn(s, a, u);
        }
        function Ea(s, a, u) {
          var f = s[a];
          (!(st.call(s, a) && vi(f, u)) || (u === t && !(a in s))) &&
            vn(s, a, u);
        }
        function Yc(s, a) {
          for (var u = s.length; u--; ) if (vi(s[u][0], a)) return u;
          return -1;
        }
        function DE(s, a, u, f) {
          return (
            Xn(s, function (_, O, F) {
              a(f, _, u(_), F);
            }),
            f
          );
        }
        function e1(s, a) {
          return s && Ui(a, Qt(a), s);
        }
        function RE(s, a) {
          return s && Ui(a, Or(a), s);
        }
        function vn(s, a, u) {
          a == "__proto__" && Kc
            ? Kc(s, a, {
                configurable: !0,
                enumerable: !0,
                value: u,
                writable: !0,
              })
            : (s[a] = u);
        }
        function Tl(s, a) {
          for (var u = -1, f = a.length, _ = X(f), O = s == null; ++u < f; )
            _[u] = O ? t : gf(s, a[u]);
          return _;
        }
        function Ss(s, a, u) {
          return (
            s === s &&
              (u !== t && (s = s <= u ? s : u),
              a !== t && (s = s >= a ? s : a)),
            s
          );
        }
        function ri(s, a, u, f, _, O) {
          var F,
            q = a & v,
            V = a & A,
            re = a & E;
          if ((u && (F = _ ? u(s, f, _, O) : u(s)), F !== t)) return F;
          if (!Tt(s)) return s;
          var ie = Ie(s);
          if (ie) {
            if (((F = mA(s)), !q)) return Rr(s, F);
          } else {
            var le = hr(s),
              ge = le == fe || le == pe;
            if (rs(s)) return S1(s, q);
            if (le == je || le == w || (ge && !_)) {
              if (((F = V || ge ? {} : H1(s)), !q))
                return V ? sA(s, RE(F, s)) : nA(s, e1(F, s));
            } else {
              if (!Rt[le]) return _ ? s : {};
              F = yA(s, le, q);
            }
          }
          O || (O = new yi());
          var we = O.get(s);
          if (we) return we;
          O.set(s, F),
            vm(s)
              ? s.forEach(function (Ae) {
                  F.add(ri(Ae, a, u, Ae, s, O));
                })
              : mm(s) &&
                s.forEach(function (Ae, Fe) {
                  F.set(Fe, ri(Ae, a, u, Fe, s, O));
                });
          var Ee = re ? (V ? ef : Zl) : V ? Or : Qt,
            Oe = ie ? t : Ee(s);
          return (
            Zr(Oe || s, function (Ae, Fe) {
              Oe && ((Fe = Ae), (Ae = s[Fe])),
                Ea(F, Fe, ri(Ae, a, u, Fe, s, O));
            }),
            F
          );
        }
        function CE(s) {
          var a = Qt(s);
          return function (u) {
            return t1(u, s, a);
          };
        }
        function t1(s, a, u) {
          var f = u.length;
          if (s == null) return !f;
          for (s = It(s); f--; ) {
            var _ = u[f],
              O = a[_],
              F = s[_];
            if ((F === t && !(_ in s)) || !O(F)) return !1;
          }
          return !0;
        }
        function r1(s, a, u) {
          if (typeof s != "function") throw new ei(c);
          return Ca(function () {
            s.apply(t, u);
          }, a);
        }
        function Aa(s, a, u, f) {
          var _ = -1,
            O = Nc,
            F = !0,
            q = s.length,
            V = [],
            re = a.length;
          if (!q) return V;
          u && (a = Mt(a, qr(u))),
            f
              ? ((O = bl), (F = !1))
              : a.length >= n && ((O = ma), (F = !1), (a = new As(a)));
          e: for (; ++_ < q; ) {
            var ie = s[_],
              le = u == null ? ie : u(ie);
            if (((ie = f || ie !== 0 ? ie : 0), F && le === le)) {
              for (var ge = re; ge--; ) if (a[ge] === le) continue e;
              V.push(ie);
            } else O(a, le, f) || V.push(ie);
          }
          return V;
        }
        var Xn = C1(Li),
          i1 = C1(Ll, !0);
        function OE(s, a) {
          var u = !0;
          return (
            Xn(s, function (f, _, O) {
              return (u = !!a(f, _, O)), u;
            }),
            u
          );
        }
        function Qc(s, a, u) {
          for (var f = -1, _ = s.length; ++f < _; ) {
            var O = s[f],
              F = a(O);
            if (F != null && (q === t ? F === F && !zr(F) : u(F, q)))
              var q = F,
                V = O;
          }
          return V;
        }
        function PE(s, a, u, f) {
          var _ = s.length;
          for (
            u = Ce(u),
              u < 0 && (u = -u > _ ? 0 : _ + u),
              f = f === t || f > _ ? _ : Ce(f),
              f < 0 && (f += _),
              f = u > f ? 0 : bm(f);
            u < f;

          )
            s[u++] = a;
          return s;
        }
        function n1(s, a) {
          var u = [];
          return (
            Xn(s, function (f, _, O) {
              a(f, _, O) && u.push(f);
            }),
            u
          );
        }
        function tr(s, a, u, f, _) {
          var O = -1,
            F = s.length;
          for (u || (u = wA), _ || (_ = []); ++O < F; ) {
            var q = s[O];
            a > 0 && u(q)
              ? a > 1
                ? tr(q, a - 1, u, f, _)
                : Wn(_, q)
              : f || (_[_.length] = q);
          }
          return _;
        }
        var Fl = O1(),
          s1 = O1(!0);
        function Li(s, a) {
          return s && Fl(s, a, Qt);
        }
        function Ll(s, a) {
          return s && s1(s, a, Qt);
        }
        function Xc(s, a) {
          return Jn(a, function (u) {
            return En(s[u]);
          });
        }
        function xs(s, a) {
          a = es(a, s);
          for (var u = 0, f = a.length; s != null && u < f; ) s = s[Bi(a[u++])];
          return u && u == f ? s : t;
        }
        function o1(s, a, u) {
          var f = a(s);
          return Ie(s) ? f : Wn(f, u(s));
        }
        function wr(s) {
          return s == null
            ? s === t
              ? un
              : ht
            : _s && _s in It(s)
            ? dA(s)
            : IA(s);
        }
        function Ul(s, a) {
          return s > a;
        }
        function ME(s, a) {
          return s != null && st.call(s, a);
        }
        function NE(s, a) {
          return s != null && a in It(s);
        }
        function TE(s, a, u) {
          return s >= ur(a, u) && s < Gt(a, u);
        }
        function Bl(s, a, u) {
          for (
            var f = u ? bl : Nc,
              _ = s[0].length,
              O = s.length,
              F = O,
              q = X(O),
              V = 1 / 0,
              re = [];
            F--;

          ) {
            var ie = s[F];
            F && a && (ie = Mt(ie, qr(a))),
              (V = ur(ie.length, V)),
              (q[F] =
                !u && (a || (_ >= 120 && ie.length >= 120))
                  ? new As(F && ie)
                  : t);
          }
          ie = s[0];
          var le = -1,
            ge = q[0];
          e: for (; ++le < _ && re.length < V; ) {
            var we = ie[le],
              Ee = a ? a(we) : we;
            if (
              ((we = u || we !== 0 ? we : 0), !(ge ? ma(ge, Ee) : f(re, Ee, u)))
            ) {
              for (F = O; --F; ) {
                var Oe = q[F];
                if (!(Oe ? ma(Oe, Ee) : f(s[F], Ee, u))) continue e;
              }
              ge && ge.push(Ee), re.push(we);
            }
          }
          return re;
        }
        function FE(s, a, u, f) {
          return (
            Li(s, function (_, O, F) {
              a(f, u(_), O, F);
            }),
            f
          );
        }
        function Sa(s, a, u) {
          (a = es(a, s)), (s = $1(s, a));
          var f = s == null ? s : s[Bi(ni(a))];
          return f == null ? t : Br(f, s, u);
        }
        function a1(s) {
          return Lt(s) && wr(s) == w;
        }
        function LE(s) {
          return Lt(s) && wr(s) == Ur;
        }
        function UE(s) {
          return Lt(s) && wr(s) == he;
        }
        function xa(s, a, u, f, _) {
          return s === a
            ? !0
            : s == null || a == null || (!Lt(s) && !Lt(a))
            ? s !== s && a !== a
            : BE(s, a, u, f, xa, _);
        }
        function BE(s, a, u, f, _, O) {
          var F = Ie(s),
            q = Ie(a),
            V = F ? $ : hr(s),
            re = q ? $ : hr(a);
          (V = V == w ? je : V), (re = re == w ? je : re);
          var ie = V == je,
            le = re == je,
            ge = V == re;
          if (ge && rs(s)) {
            if (!rs(a)) return !1;
            (F = !0), (ie = !1);
          }
          if (ge && !ie)
            return (
              O || (O = new yi()),
              F || go(s) ? j1(s, a, u, f, _, O) : lA(s, a, V, u, f, _, O)
            );
          if (!(u & P)) {
            var we = ie && st.call(s, "__wrapped__"),
              Ee = le && st.call(a, "__wrapped__");
            if (we || Ee) {
              var Oe = we ? s.value() : s,
                Ae = Ee ? a.value() : a;
              return O || (O = new yi()), _(Oe, Ae, u, f, O);
            }
          }
          return ge ? (O || (O = new yi()), fA(s, a, u, f, _, O)) : !1;
        }
        function qE(s) {
          return Lt(s) && hr(s) == se;
        }
        function ql(s, a, u, f) {
          var _ = u.length,
            O = _,
            F = !f;
          if (s == null) return !O;
          for (s = It(s); _--; ) {
            var q = u[_];
            if (F && q[2] ? q[1] !== s[q[0]] : !(q[0] in s)) return !1;
          }
          for (; ++_ < O; ) {
            q = u[_];
            var V = q[0],
              re = s[V],
              ie = q[1];
            if (F && q[2]) {
              if (re === t && !(V in s)) return !1;
            } else {
              var le = new yi();
              if (f) var ge = f(re, ie, V, s, a, le);
              if (!(ge === t ? xa(ie, re, P | N, f, le) : ge)) return !1;
            }
          }
          return !0;
        }
        function c1(s) {
          if (!Tt(s) || _A(s)) return !1;
          var a = En(s) ? q6 : Mi;
          return a.test(Ds(s));
        }
        function jE(s) {
          return Lt(s) && wr(s) == Ke;
        }
        function zE(s) {
          return Lt(s) && hr(s) == Kt;
        }
        function kE(s) {
          return Lt(s) && gu(s.length) && !!Ot[wr(s)];
        }
        function u1(s) {
          return typeof s == "function"
            ? s
            : s == null
            ? Pr
            : typeof s == "object"
            ? Ie(s)
              ? f1(s[0], s[1])
              : l1(s)
            : Pm(s);
        }
        function jl(s) {
          if (!Ra(s)) return V6(s);
          var a = [];
          for (var u in It(s)) st.call(s, u) && u != "constructor" && a.push(u);
          return a;
        }
        function HE(s) {
          if (!Tt(s)) return xA(s);
          var a = Ra(s),
            u = [];
          for (var f in s)
            (f == "constructor" && (a || !st.call(s, f))) || u.push(f);
          return u;
        }
        function zl(s, a) {
          return s < a;
        }
        function h1(s, a) {
          var u = -1,
            f = Cr(s) ? X(s.length) : [];
          return (
            Xn(s, function (_, O, F) {
              f[++u] = a(_, O, F);
            }),
            f
          );
        }
        function l1(s) {
          var a = rf(s);
          return a.length == 1 && a[0][2]
            ? V1(a[0][0], a[0][1])
            : function (u) {
                return u === s || ql(u, s, a);
              };
        }
        function f1(s, a) {
          return sf(s) && K1(a)
            ? V1(Bi(s), a)
            : function (u) {
                var f = gf(u, s);
                return f === t && f === a ? mf(u, s) : xa(a, f, P | N);
              };
        }
        function Zc(s, a, u, f, _) {
          s !== a &&
            Fl(
              a,
              function (O, F) {
                if ((_ || (_ = new yi()), Tt(O))) KE(s, a, F, u, Zc, f, _);
                else {
                  var q = f ? f(af(s, F), O, F + "", s, a, _) : t;
                  q === t && (q = O), Nl(s, F, q);
                }
              },
              Or
            );
        }
        function KE(s, a, u, f, _, O, F) {
          var q = af(s, u),
            V = af(a, u),
            re = F.get(V);
          if (re) {
            Nl(s, u, re);
            return;
          }
          var ie = O ? O(q, V, u + "", s, a, F) : t,
            le = ie === t;
          if (le) {
            var ge = Ie(V),
              we = !ge && rs(V),
              Ee = !ge && !we && go(V);
            (ie = V),
              ge || we || Ee
                ? Ie(q)
                  ? (ie = q)
                  : jt(q)
                  ? (ie = Rr(q))
                  : we
                  ? ((le = !1), (ie = S1(V, !0)))
                  : Ee
                  ? ((le = !1), (ie = x1(V, !0)))
                  : (ie = [])
                : Oa(V) || Rs(V)
                ? ((ie = q),
                  Rs(q) ? (ie = _m(q)) : (!Tt(q) || En(q)) && (ie = H1(V)))
                : (le = !1);
          }
          le && (F.set(V, ie), _(ie, V, f, O, F), F.delete(V)), Nl(s, u, ie);
        }
        function d1(s, a) {
          var u = s.length;
          if (u) return (a += a < 0 ? u : 0), _n(a, u) ? s[a] : t;
        }
        function p1(s, a, u) {
          a.length
            ? (a = Mt(a, function (O) {
                return Ie(O)
                  ? function (F) {
                      return xs(F, O.length === 1 ? O[0] : O);
                    }
                  : O;
              }))
            : (a = [Pr]);
          var f = -1;
          a = Mt(a, qr(_e()));
          var _ = h1(s, function (O, F, q) {
            var V = Mt(a, function (re) {
              return re(O);
            });
            return { criteria: V, index: ++f, value: O };
          });
          return y6(_, function (O, F) {
            return iA(O, F, u);
          });
        }
        function VE(s, a) {
          return g1(s, a, function (u, f) {
            return mf(s, f);
          });
        }
        function g1(s, a, u) {
          for (var f = -1, _ = a.length, O = {}; ++f < _; ) {
            var F = a[f],
              q = xs(s, F);
            u(q, F) && Ia(O, es(F, s), q);
          }
          return O;
        }
        function GE(s) {
          return function (a) {
            return xs(a, s);
          };
        }
        function kl(s, a, u, f) {
          var _ = f ? m6 : io,
            O = -1,
            F = a.length,
            q = s;
          for (s === a && (a = Rr(a)), u && (q = Mt(s, qr(u))); ++O < F; )
            for (
              var V = 0, re = a[O], ie = u ? u(re) : re;
              (V = _(q, ie, V, f)) > -1;

            )
              q !== s && Hc.call(q, V, 1), Hc.call(s, V, 1);
          return s;
        }
        function m1(s, a) {
          for (var u = s ? a.length : 0, f = u - 1; u--; ) {
            var _ = a[u];
            if (u == f || _ !== O) {
              var O = _;
              _n(_) ? Hc.call(s, _, 1) : Gl(s, _);
            }
          }
          return s;
        }
        function Hl(s, a) {
          return s + Gc(Yg() * (a - s + 1));
        }
        function $E(s, a, u, f) {
          for (var _ = -1, O = Gt(Vc((a - s) / (u || 1)), 0), F = X(O); O--; )
            (F[f ? O : ++_] = s), (s += u);
          return F;
        }
        function Kl(s, a) {
          var u = "";
          if (!s || a < 1 || a > M) return u;
          do a % 2 && (u += s), (a = Gc(a / 2)), a && (s += s);
          while (a);
          return u;
        }
        function Pe(s, a) {
          return cf(G1(s, a, Pr), s + "");
        }
        function JE(s) {
          return Zg(mo(s));
        }
        function WE(s, a) {
          var u = mo(s);
          return uu(u, Ss(a, 0, u.length));
        }
        function Ia(s, a, u, f) {
          if (!Tt(s)) return s;
          a = es(a, s);
          for (
            var _ = -1, O = a.length, F = O - 1, q = s;
            q != null && ++_ < O;

          ) {
            var V = Bi(a[_]),
              re = u;
            if (V === "__proto__" || V === "constructor" || V === "prototype")
              return s;
            if (_ != F) {
              var ie = q[V];
              (re = f ? f(ie, V, q) : t),
                re === t && (re = Tt(ie) ? ie : _n(a[_ + 1]) ? [] : {});
            }
            Ea(q, V, re), (q = q[V]);
          }
          return s;
        }
        var y1 = $c
            ? function (s, a) {
                return $c.set(s, a), s;
              }
            : Pr,
          YE = Kc
            ? function (s, a) {
                return Kc(s, "toString", {
                  configurable: !0,
                  enumerable: !1,
                  value: vf(a),
                  writable: !0,
                });
              }
            : Pr;
        function QE(s) {
          return uu(mo(s));
        }
        function ii(s, a, u) {
          var f = -1,
            _ = s.length;
          a < 0 && (a = -a > _ ? 0 : _ + a),
            (u = u > _ ? _ : u),
            u < 0 && (u += _),
            (_ = a > u ? 0 : (u - a) >>> 0),
            (a >>>= 0);
          for (var O = X(_); ++f < _; ) O[f] = s[f + a];
          return O;
        }
        function XE(s, a) {
          var u;
          return (
            Xn(s, function (f, _, O) {
              return (u = a(f, _, O)), !u;
            }),
            !!u
          );
        }
        function eu(s, a, u) {
          var f = 0,
            _ = s == null ? f : s.length;
          if (typeof a == "number" && a === a && _ <= ue) {
            for (; f < _; ) {
              var O = (f + _) >>> 1,
                F = s[O];
              F !== null && !zr(F) && (u ? F <= a : F < a)
                ? (f = O + 1)
                : (_ = O);
            }
            return _;
          }
          return Vl(s, a, Pr, u);
        }
        function Vl(s, a, u, f) {
          var _ = 0,
            O = s == null ? 0 : s.length;
          if (O === 0) return 0;
          a = u(a);
          for (
            var F = a !== a, q = a === null, V = zr(a), re = a === t;
            _ < O;

          ) {
            var ie = Gc((_ + O) / 2),
              le = u(s[ie]),
              ge = le !== t,
              we = le === null,
              Ee = le === le,
              Oe = zr(le);
            if (F) var Ae = f || Ee;
            else
              re
                ? (Ae = Ee && (f || ge))
                : q
                ? (Ae = Ee && ge && (f || !we))
                : V
                ? (Ae = Ee && ge && !we && (f || !Oe))
                : we || Oe
                ? (Ae = !1)
                : (Ae = f ? le <= a : le < a);
            Ae ? (_ = ie + 1) : (O = ie);
          }
          return ur(O, I);
        }
        function v1(s, a) {
          for (var u = -1, f = s.length, _ = 0, O = []; ++u < f; ) {
            var F = s[u],
              q = a ? a(F) : F;
            if (!u || !vi(q, V)) {
              var V = q;
              O[_++] = F === 0 ? 0 : F;
            }
          }
          return O;
        }
        function w1(s) {
          return typeof s == "number" ? s : zr(s) ? C : +s;
        }
        function jr(s) {
          if (typeof s == "string") return s;
          if (Ie(s)) return Mt(s, jr) + "";
          if (zr(s)) return Qg ? Qg.call(s) : "";
          var a = s + "";
          return a == "0" && 1 / s == -D ? "-0" : a;
        }
        function Zn(s, a, u) {
          var f = -1,
            _ = Nc,
            O = s.length,
            F = !0,
            q = [],
            V = q;
          if (u) (F = !1), (_ = bl);
          else if (O >= n) {
            var re = a ? null : uA(s);
            if (re) return Fc(re);
            (F = !1), (_ = ma), (V = new As());
          } else V = a ? [] : q;
          e: for (; ++f < O; ) {
            var ie = s[f],
              le = a ? a(ie) : ie;
            if (((ie = u || ie !== 0 ? ie : 0), F && le === le)) {
              for (var ge = V.length; ge--; ) if (V[ge] === le) continue e;
              a && V.push(le), q.push(ie);
            } else _(V, le, u) || (V !== q && V.push(le), q.push(ie));
          }
          return q;
        }
        function Gl(s, a) {
          return (
            (a = es(a, s)), (s = $1(s, a)), s == null || delete s[Bi(ni(a))]
          );
        }
        function b1(s, a, u, f) {
          return Ia(s, a, u(xs(s, a)), f);
        }
        function tu(s, a, u, f) {
          for (
            var _ = s.length, O = f ? _ : -1;
            (f ? O-- : ++O < _) && a(s[O], O, s);

          );
          return u
            ? ii(s, f ? 0 : O, f ? O + 1 : _)
            : ii(s, f ? O + 1 : 0, f ? _ : O);
        }
        function _1(s, a) {
          var u = s;
          return (
            u instanceof Le && (u = u.value()),
            _l(
              a,
              function (f, _) {
                return _.func.apply(_.thisArg, Wn([f], _.args));
              },
              u
            )
          );
        }
        function $l(s, a, u) {
          var f = s.length;
          if (f < 2) return f ? Zn(s[0]) : [];
          for (var _ = -1, O = X(f); ++_ < f; )
            for (var F = s[_], q = -1; ++q < f; )
              q != _ && (O[_] = Aa(O[_] || F, s[q], a, u));
          return Zn(tr(O, 1), a, u);
        }
        function E1(s, a, u) {
          for (var f = -1, _ = s.length, O = a.length, F = {}; ++f < _; ) {
            var q = f < O ? a[f] : t;
            u(F, s[f], q);
          }
          return F;
        }
        function Jl(s) {
          return jt(s) ? s : [];
        }
        function Wl(s) {
          return typeof s == "function" ? s : Pr;
        }
        function es(s, a) {
          return Ie(s) ? s : sf(s, a) ? [s] : Q1(Ye(s));
        }
        var ZE = Pe;
        function ts(s, a, u) {
          var f = s.length;
          return (u = u === t ? f : u), !a && u >= f ? s : ii(s, a, u);
        }
        var A1 =
          j6 ||
          function (s) {
            return er.clearTimeout(s);
          };
        function S1(s, a) {
          if (a) return s.slice();
          var u = s.length,
            f = Vg ? Vg(u) : new s.constructor(u);
          return s.copy(f), f;
        }
        function Yl(s) {
          var a = new s.constructor(s.byteLength);
          return new zc(a).set(new zc(s)), a;
        }
        function eA(s, a) {
          var u = a ? Yl(s.buffer) : s.buffer;
          return new s.constructor(u, s.byteOffset, s.byteLength);
        }
        function tA(s) {
          var a = new s.constructor(s.source, ct.exec(s));
          return (a.lastIndex = s.lastIndex), a;
        }
        function rA(s) {
          return _a ? It(_a.call(s)) : {};
        }
        function x1(s, a) {
          var u = a ? Yl(s.buffer) : s.buffer;
          return new s.constructor(u, s.byteOffset, s.length);
        }
        function I1(s, a) {
          if (s !== a) {
            var u = s !== t,
              f = s === null,
              _ = s === s,
              O = zr(s),
              F = a !== t,
              q = a === null,
              V = a === a,
              re = zr(a);
            if (
              (!q && !re && !O && s > a) ||
              (O && F && V && !q && !re) ||
              (f && F && V) ||
              (!u && V) ||
              !_
            )
              return 1;
            if (
              (!f && !O && !re && s < a) ||
              (re && u && _ && !f && !O) ||
              (q && u && _) ||
              (!F && _) ||
              !V
            )
              return -1;
          }
          return 0;
        }
        function iA(s, a, u) {
          for (
            var f = -1,
              _ = s.criteria,
              O = a.criteria,
              F = _.length,
              q = u.length;
            ++f < F;

          ) {
            var V = I1(_[f], O[f]);
            if (V) {
              if (f >= q) return V;
              var re = u[f];
              return V * (re == "desc" ? -1 : 1);
            }
          }
          return s.index - a.index;
        }
        function D1(s, a, u, f) {
          for (
            var _ = -1,
              O = s.length,
              F = u.length,
              q = -1,
              V = a.length,
              re = Gt(O - F, 0),
              ie = X(V + re),
              le = !f;
            ++q < V;

          )
            ie[q] = a[q];
          for (; ++_ < F; ) (le || _ < O) && (ie[u[_]] = s[_]);
          for (; re--; ) ie[q++] = s[_++];
          return ie;
        }
        function R1(s, a, u, f) {
          for (
            var _ = -1,
              O = s.length,
              F = -1,
              q = u.length,
              V = -1,
              re = a.length,
              ie = Gt(O - q, 0),
              le = X(ie + re),
              ge = !f;
            ++_ < ie;

          )
            le[_] = s[_];
          for (var we = _; ++V < re; ) le[we + V] = a[V];
          for (; ++F < q; ) (ge || _ < O) && (le[we + u[F]] = s[_++]);
          return le;
        }
        function Rr(s, a) {
          var u = -1,
            f = s.length;
          for (a || (a = X(f)); ++u < f; ) a[u] = s[u];
          return a;
        }
        function Ui(s, a, u, f) {
          var _ = !u;
          u || (u = {});
          for (var O = -1, F = a.length; ++O < F; ) {
            var q = a[O],
              V = f ? f(u[q], s[q], q, u, s) : t;
            V === t && (V = s[q]), _ ? vn(u, q, V) : Ea(u, q, V);
          }
          return u;
        }
        function nA(s, a) {
          return Ui(s, nf(s), a);
        }
        function sA(s, a) {
          return Ui(s, z1(s), a);
        }
        function ru(s, a) {
          return function (u, f) {
            var _ = Ie(u) ? h6 : DE,
              O = a ? a() : {};
            return _(u, s, _e(f, 2), O);
          };
        }
        function lo(s) {
          return Pe(function (a, u) {
            var f = -1,
              _ = u.length,
              O = _ > 1 ? u[_ - 1] : t,
              F = _ > 2 ? u[2] : t;
            for (
              O = s.length > 3 && typeof O == "function" ? (_--, O) : t,
                F && br(u[0], u[1], F) && ((O = _ < 3 ? t : O), (_ = 1)),
                a = It(a);
              ++f < _;

            ) {
              var q = u[f];
              q && s(a, q, f, O);
            }
            return a;
          });
        }
        function C1(s, a) {
          return function (u, f) {
            if (u == null) return u;
            if (!Cr(u)) return s(u, f);
            for (
              var _ = u.length, O = a ? _ : -1, F = It(u);
              (a ? O-- : ++O < _) && f(F[O], O, F) !== !1;

            );
            return u;
          };
        }
        function O1(s) {
          return function (a, u, f) {
            for (var _ = -1, O = It(a), F = f(a), q = F.length; q--; ) {
              var V = F[s ? q : ++_];
              if (u(O[V], V, O) === !1) break;
            }
            return a;
          };
        }
        function oA(s, a, u) {
          var f = a & T,
            _ = Da(s);
          function O() {
            var F = this && this !== er && this instanceof O ? _ : s;
            return F.apply(f ? u : this, arguments);
          }
          return O;
        }
        function P1(s) {
          return function (a) {
            a = Ye(a);
            var u = no(a) ? mi(a) : t,
              f = u ? u[0] : a.charAt(0),
              _ = u ? ts(u, 1).join("") : a.slice(1);
            return f[s]() + _;
          };
        }
        function fo(s) {
          return function (a) {
            return _l(Cm(Rm(a).replace(Y_, "")), s, "");
          };
        }
        function Da(s) {
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return new s();
              case 1:
                return new s(a[0]);
              case 2:
                return new s(a[0], a[1]);
              case 3:
                return new s(a[0], a[1], a[2]);
              case 4:
                return new s(a[0], a[1], a[2], a[3]);
              case 5:
                return new s(a[0], a[1], a[2], a[3], a[4]);
              case 6:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5]);
              case 7:
                return new s(a[0], a[1], a[2], a[3], a[4], a[5], a[6]);
            }
            var u = ho(s.prototype),
              f = s.apply(u, a);
            return Tt(f) ? f : u;
          };
        }
        function aA(s, a, u) {
          var f = Da(s);
          function _() {
            for (var O = arguments.length, F = X(O), q = O, V = po(_); q--; )
              F[q] = arguments[q];
            var re = O < 3 && F[0] !== V && F[O - 1] !== V ? [] : Yn(F, V);
            if (((O -= re.length), O < u))
              return L1(s, a, iu, _.placeholder, t, F, re, t, t, u - O);
            var ie = this && this !== er && this instanceof _ ? f : s;
            return Br(ie, this, F);
          }
          return _;
        }
        function M1(s) {
          return function (a, u, f) {
            var _ = It(a);
            if (!Cr(a)) {
              var O = _e(u, 3);
              (a = Qt(a)),
                (u = function (q) {
                  return O(_[q], q, _);
                });
            }
            var F = s(a, u, f);
            return F > -1 ? _[O ? a[F] : F] : t;
          };
        }
        function N1(s) {
          return bn(function (a) {
            var u = a.length,
              f = u,
              _ = ti.prototype.thru;
            for (s && a.reverse(); f--; ) {
              var O = a[f];
              if (typeof O != "function") throw new ei(c);
              if (_ && !F && au(O) == "wrapper") var F = new ti([], !0);
            }
            for (f = F ? f : u; ++f < u; ) {
              O = a[f];
              var q = au(O),
                V = q == "wrapper" ? tf(O) : t;
              V &&
              of(V[0]) &&
              V[1] == (L | J | Q | B) &&
              !V[4].length &&
              V[9] == 1
                ? (F = F[au(V[0])].apply(F, V[3]))
                : (F = O.length == 1 && of(O) ? F[q]() : F.thru(O));
            }
            return function () {
              var re = arguments,
                ie = re[0];
              if (F && re.length == 1 && Ie(ie)) return F.plant(ie).value();
              for (var le = 0, ge = u ? a[le].apply(this, re) : ie; ++le < u; )
                ge = a[le].call(this, ge);
              return ge;
            };
          });
        }
        function iu(s, a, u, f, _, O, F, q, V, re) {
          var ie = a & L,
            le = a & T,
            ge = a & K,
            we = a & (J | G),
            Ee = a & ae,
            Oe = ge ? t : Da(s);
          function Ae() {
            for (var Fe = arguments.length, ze = X(Fe), kr = Fe; kr--; )
              ze[kr] = arguments[kr];
            if (we)
              var _r = po(Ae),
                Hr = w6(ze, _r);
            if (
              (f && (ze = D1(ze, f, _, we)),
              O && (ze = R1(ze, O, F, we)),
              (Fe -= Hr),
              we && Fe < re)
            ) {
              var zt = Yn(ze, _r);
              return L1(s, a, iu, Ae.placeholder, u, ze, zt, q, V, re - Fe);
            }
            var wi = le ? u : this,
              Sn = ge ? wi[s] : s;
            return (
              (Fe = ze.length),
              q ? (ze = DA(ze, q)) : Ee && Fe > 1 && ze.reverse(),
              ie && V < Fe && (ze.length = V),
              this && this !== er && this instanceof Ae && (Sn = Oe || Da(Sn)),
              Sn.apply(wi, ze)
            );
          }
          return Ae;
        }
        function T1(s, a) {
          return function (u, f) {
            return FE(u, s, a(f), {});
          };
        }
        function nu(s, a) {
          return function (u, f) {
            var _;
            if (u === t && f === t) return a;
            if ((u !== t && (_ = u), f !== t)) {
              if (_ === t) return f;
              typeof u == "string" || typeof f == "string"
                ? ((u = jr(u)), (f = jr(f)))
                : ((u = w1(u)), (f = w1(f))),
                (_ = s(u, f));
            }
            return _;
          };
        }
        function Ql(s) {
          return bn(function (a) {
            return (
              (a = Mt(a, qr(_e()))),
              Pe(function (u) {
                var f = this;
                return s(a, function (_) {
                  return Br(_, f, u);
                });
              })
            );
          });
        }
        function su(s, a) {
          a = a === t ? " " : jr(a);
          var u = a.length;
          if (u < 2) return u ? Kl(a, s) : a;
          var f = Kl(a, Vc(s / so(a)));
          return no(a) ? ts(mi(f), 0, s).join("") : f.slice(0, s);
        }
        function cA(s, a, u, f) {
          var _ = a & T,
            O = Da(s);
          function F() {
            for (
              var q = -1,
                V = arguments.length,
                re = -1,
                ie = f.length,
                le = X(ie + V),
                ge = this && this !== er && this instanceof F ? O : s;
              ++re < ie;

            )
              le[re] = f[re];
            for (; V--; ) le[re++] = arguments[++q];
            return Br(ge, _ ? u : this, le);
          }
          return F;
        }
        function F1(s) {
          return function (a, u, f) {
            return (
              f && typeof f != "number" && br(a, u, f) && (u = f = t),
              (a = An(a)),
              u === t ? ((u = a), (a = 0)) : (u = An(u)),
              (f = f === t ? (a < u ? 1 : -1) : An(f)),
              $E(a, u, f, s)
            );
          };
        }
        function ou(s) {
          return function (a, u) {
            return (
              (typeof a == "string" && typeof u == "string") ||
                ((a = si(a)), (u = si(u))),
              s(a, u)
            );
          };
        }
        function L1(s, a, u, f, _, O, F, q, V, re) {
          var ie = a & J,
            le = ie ? F : t,
            ge = ie ? t : F,
            we = ie ? O : t,
            Ee = ie ? t : O;
          (a |= ie ? Q : ee), (a &= ~(ie ? ee : Q)), a & Z || (a &= ~(T | K));
          var Oe = [s, a, _, we, le, Ee, ge, q, V, re],
            Ae = u.apply(t, Oe);
          return of(s) && J1(Ae, Oe), (Ae.placeholder = f), W1(Ae, s, a);
        }
        function Xl(s) {
          var a = Vt[s];
          return function (u, f) {
            if (
              ((u = si(u)), (f = f == null ? 0 : ur(Ce(f), 292)), f && Wg(u))
            ) {
              var _ = (Ye(u) + "e").split("e"),
                O = a(_[0] + "e" + (+_[1] + f));
              return (
                (_ = (Ye(O) + "e").split("e")), +(_[0] + "e" + (+_[1] - f))
              );
            }
            return a(u);
          };
        }
        var uA =
          co && 1 / Fc(new co([, -0]))[1] == D
            ? function (s) {
                return new co(s);
              }
            : _f;
        function U1(s) {
          return function (a) {
            var u = hr(a);
            return u == se ? Rl(a) : u == Kt ? I6(a) : v6(a, s(a));
          };
        }
        function wn(s, a, u, f, _, O, F, q) {
          var V = a & K;
          if (!V && typeof s != "function") throw new ei(c);
          var re = f ? f.length : 0;
          if (
            (re || ((a &= ~(Q | ee)), (f = _ = t)),
            (F = F === t ? F : Gt(Ce(F), 0)),
            (q = q === t ? q : Ce(q)),
            (re -= _ ? _.length : 0),
            a & ee)
          ) {
            var ie = f,
              le = _;
            f = _ = t;
          }
          var ge = V ? t : tf(s),
            we = [s, a, u, f, _, ie, le, O, F, q];
          if (
            (ge && SA(we, ge),
            (s = we[0]),
            (a = we[1]),
            (u = we[2]),
            (f = we[3]),
            (_ = we[4]),
            (q = we[9] = we[9] === t ? (V ? 0 : s.length) : Gt(we[9] - re, 0)),
            !q && a & (J | G) && (a &= ~(J | G)),
            !a || a == T)
          )
            var Ee = oA(s, a, u);
          else
            a == J || a == G
              ? (Ee = aA(s, a, q))
              : (a == Q || a == (T | Q)) && !_.length
              ? (Ee = cA(s, a, u, f))
              : (Ee = iu.apply(t, we));
          var Oe = ge ? y1 : J1;
          return W1(Oe(Ee, we), s, a);
        }
        function B1(s, a, u, f) {
          return s === t || (vi(s, ao[u]) && !st.call(f, u)) ? a : s;
        }
        function q1(s, a, u, f, _, O) {
          return (
            Tt(s) && Tt(a) && (O.set(a, s), Zc(s, a, t, q1, O), O.delete(a)), s
          );
        }
        function hA(s) {
          return Oa(s) ? t : s;
        }
        function j1(s, a, u, f, _, O) {
          var F = u & P,
            q = s.length,
            V = a.length;
          if (q != V && !(F && V > q)) return !1;
          var re = O.get(s),
            ie = O.get(a);
          if (re && ie) return re == a && ie == s;
          var le = -1,
            ge = !0,
            we = u & N ? new As() : t;
          for (O.set(s, a), O.set(a, s); ++le < q; ) {
            var Ee = s[le],
              Oe = a[le];
            if (f) var Ae = F ? f(Oe, Ee, le, a, s, O) : f(Ee, Oe, le, s, a, O);
            if (Ae !== t) {
              if (Ae) continue;
              ge = !1;
              break;
            }
            if (we) {
              if (
                !El(a, function (Fe, ze) {
                  if (!ma(we, ze) && (Ee === Fe || _(Ee, Fe, u, f, O)))
                    return we.push(ze);
                })
              ) {
                ge = !1;
                break;
              }
            } else if (!(Ee === Oe || _(Ee, Oe, u, f, O))) {
              ge = !1;
              break;
            }
          }
          return O.delete(s), O.delete(a), ge;
        }
        function lA(s, a, u, f, _, O, F) {
          switch (u) {
            case He:
              if (s.byteLength != a.byteLength || s.byteOffset != a.byteOffset)
                return !1;
              (s = s.buffer), (a = a.buffer);
            case Ur:
              return !(
                s.byteLength != a.byteLength || !O(new zc(s), new zc(a))
              );
            case Y:
            case he:
            case ve:
              return vi(+s, +a);
            case ce:
              return s.name == a.name && s.message == a.message;
            case Ke:
            case Ve:
              return s == a + "";
            case se:
              var q = Rl;
            case Kt:
              var V = f & P;
              if ((q || (q = Fc), s.size != a.size && !V)) return !1;
              var re = F.get(s);
              if (re) return re == a;
              (f |= N), F.set(s, a);
              var ie = j1(q(s), q(a), f, _, O, F);
              return F.delete(s), ie;
            case We:
              if (_a) return _a.call(s) == _a.call(a);
          }
          return !1;
        }
        function fA(s, a, u, f, _, O) {
          var F = u & P,
            q = Zl(s),
            V = q.length,
            re = Zl(a),
            ie = re.length;
          if (V != ie && !F) return !1;
          for (var le = V; le--; ) {
            var ge = q[le];
            if (!(F ? ge in a : st.call(a, ge))) return !1;
          }
          var we = O.get(s),
            Ee = O.get(a);
          if (we && Ee) return we == a && Ee == s;
          var Oe = !0;
          O.set(s, a), O.set(a, s);
          for (var Ae = F; ++le < V; ) {
            ge = q[le];
            var Fe = s[ge],
              ze = a[ge];
            if (f) var kr = F ? f(ze, Fe, ge, a, s, O) : f(Fe, ze, ge, s, a, O);
            if (!(kr === t ? Fe === ze || _(Fe, ze, u, f, O) : kr)) {
              Oe = !1;
              break;
            }
            Ae || (Ae = ge == "constructor");
          }
          if (Oe && !Ae) {
            var _r = s.constructor,
              Hr = a.constructor;
            _r != Hr &&
              "constructor" in s &&
              "constructor" in a &&
              !(
                typeof _r == "function" &&
                _r instanceof _r &&
                typeof Hr == "function" &&
                Hr instanceof Hr
              ) &&
              (Oe = !1);
          }
          return O.delete(s), O.delete(a), Oe;
        }
        function bn(s) {
          return cf(G1(s, t, tm), s + "");
        }
        function Zl(s) {
          return o1(s, Qt, nf);
        }
        function ef(s) {
          return o1(s, Or, z1);
        }
        var tf = $c
          ? function (s) {
              return $c.get(s);
            }
          : _f;
        function au(s) {
          for (
            var a = s.name + "", u = uo[a], f = st.call(uo, a) ? u.length : 0;
            f--;

          ) {
            var _ = u[f],
              O = _.func;
            if (O == null || O == s) return _.name;
          }
          return a;
        }
        function po(s) {
          var a = st.call(S, "placeholder") ? S : s;
          return a.placeholder;
        }
        function _e() {
          var s = S.iteratee || wf;
          return (
            (s = s === wf ? u1 : s),
            arguments.length ? s(arguments[0], arguments[1]) : s
          );
        }
        function cu(s, a) {
          var u = s.__data__;
          return bA(a) ? u[typeof a == "string" ? "string" : "hash"] : u.map;
        }
        function rf(s) {
          for (var a = Qt(s), u = a.length; u--; ) {
            var f = a[u],
              _ = s[f];
            a[u] = [f, _, K1(_)];
          }
          return a;
        }
        function Is(s, a) {
          var u = A6(s, a);
          return c1(u) ? u : t;
        }
        function dA(s) {
          var a = st.call(s, _s),
            u = s[_s];
          try {
            s[_s] = t;
            var f = !0;
          } catch {}
          var _ = qc.call(s);
          return f && (a ? (s[_s] = u) : delete s[_s]), _;
        }
        var nf = Ol
            ? function (s) {
                return s == null
                  ? []
                  : ((s = It(s)),
                    Jn(Ol(s), function (a) {
                      return $g.call(s, a);
                    }));
              }
            : Ef,
          z1 = Ol
            ? function (s) {
                for (var a = []; s; ) Wn(a, nf(s)), (s = kc(s));
                return a;
              }
            : Ef,
          hr = wr;
        ((Pl && hr(new Pl(new ArrayBuffer(1))) != He) ||
          (va && hr(new va()) != se) ||
          (Ml && hr(Ml.resolve()) != Ri) ||
          (co && hr(new co()) != Kt) ||
          (wa && hr(new wa()) != Ge)) &&
          (hr = function (s) {
            var a = wr(s),
              u = a == je ? s.constructor : t,
              f = u ? Ds(u) : "";
            if (f)
              switch (f) {
                case W6:
                  return He;
                case Y6:
                  return se;
                case Q6:
                  return Ri;
                case X6:
                  return Kt;
                case Z6:
                  return Ge;
              }
            return a;
          });
        function pA(s, a, u) {
          for (var f = -1, _ = u.length; ++f < _; ) {
            var O = u[f],
              F = O.size;
            switch (O.type) {
              case "drop":
                s += F;
                break;
              case "dropRight":
                a -= F;
                break;
              case "take":
                a = ur(a, s + F);
                break;
              case "takeRight":
                s = Gt(s, a - F);
                break;
            }
          }
          return { start: s, end: a };
        }
        function gA(s) {
          var a = s.match(Et);
          return a ? a[1].split(pn) : [];
        }
        function k1(s, a, u) {
          a = es(a, s);
          for (var f = -1, _ = a.length, O = !1; ++f < _; ) {
            var F = Bi(a[f]);
            if (!(O = s != null && u(s, F))) break;
            s = s[F];
          }
          return O || ++f != _
            ? O
            : ((_ = s == null ? 0 : s.length),
              !!_ && gu(_) && _n(F, _) && (Ie(s) || Rs(s)));
        }
        function mA(s) {
          var a = s.length,
            u = new s.constructor(a);
          return (
            a &&
              typeof s[0] == "string" &&
              st.call(s, "index") &&
              ((u.index = s.index), (u.input = s.input)),
            u
          );
        }
        function H1(s) {
          return typeof s.constructor == "function" && !Ra(s) ? ho(kc(s)) : {};
        }
        function yA(s, a, u) {
          var f = s.constructor;
          switch (a) {
            case Ur:
              return Yl(s);
            case Y:
            case he:
              return new f(+s);
            case He:
              return eA(s, u);
            case Xe:
            case fi:
            case Ze:
            case et:
            case di:
            case tt:
            case rt:
            case pi:
            case it:
              return x1(s, u);
            case se:
              return new f();
            case ve:
            case Ve:
              return new f(s);
            case Ke:
              return tA(s);
            case Kt:
              return new f();
            case We:
              return rA(s);
          }
        }
        function vA(s, a) {
          var u = a.length;
          if (!u) return s;
          var f = u - 1;
          return (
            (a[f] = (u > 1 ? "& " : "") + a[f]),
            (a = a.join(u > 2 ? ", " : " ")),
            s.replace(
              _t,
              `{
/* [wrapped with ` +
                a +
                `] */
`
            )
          );
        }
        function wA(s) {
          return Ie(s) || Rs(s) || !!(Jg && s && s[Jg]);
        }
        function _n(s, a) {
          var u = typeof s;
          return (
            (a = a ?? M),
            !!a &&
              (u == "number" || (u != "symbol" && Ti.test(s))) &&
              s > -1 &&
              s % 1 == 0 &&
              s < a
          );
        }
        function br(s, a, u) {
          if (!Tt(u)) return !1;
          var f = typeof a;
          return (
            f == "number" ? Cr(u) && _n(a, u.length) : f == "string" && a in u
          )
            ? vi(u[a], s)
            : !1;
        }
        function sf(s, a) {
          if (Ie(s)) return !1;
          var u = typeof s;
          return u == "number" ||
            u == "symbol" ||
            u == "boolean" ||
            s == null ||
            zr(s)
            ? !0
            : vt.test(s) || !fn.test(s) || (a != null && s in It(a));
        }
        function bA(s) {
          var a = typeof s;
          return a == "string" ||
            a == "number" ||
            a == "symbol" ||
            a == "boolean"
            ? s !== "__proto__"
            : s === null;
        }
        function of(s) {
          var a = au(s),
            u = S[a];
          if (typeof u != "function" || !(a in Le.prototype)) return !1;
          if (s === u) return !0;
          var f = tf(u);
          return !!f && s === f[0];
        }
        function _A(s) {
          return !!Kg && Kg in s;
        }
        var EA = Uc ? En : Af;
        function Ra(s) {
          var a = s && s.constructor,
            u = (typeof a == "function" && a.prototype) || ao;
          return s === u;
        }
        function K1(s) {
          return s === s && !Tt(s);
        }
        function V1(s, a) {
          return function (u) {
            return u == null ? !1 : u[s] === a && (a !== t || s in It(u));
          };
        }
        function AA(s) {
          var a = du(s, function (f) {
              return u.size === d && u.clear(), f;
            }),
            u = a.cache;
          return a;
        }
        function SA(s, a) {
          var u = s[1],
            f = a[1],
            _ = u | f,
            O = _ < (T | K | L),
            F =
              (f == L && u == J) ||
              (f == L && u == B && s[7].length <= a[8]) ||
              (f == (L | B) && a[7].length <= a[8] && u == J);
          if (!(O || F)) return s;
          f & T && ((s[2] = a[2]), (_ |= u & T ? 0 : Z));
          var q = a[3];
          if (q) {
            var V = s[3];
            (s[3] = V ? D1(V, q, a[4]) : q), (s[4] = V ? Yn(s[3], y) : a[4]);
          }
          return (
            (q = a[5]),
            q &&
              ((V = s[5]),
              (s[5] = V ? R1(V, q, a[6]) : q),
              (s[6] = V ? Yn(s[5], y) : a[6])),
            (q = a[7]),
            q && (s[7] = q),
            f & L && (s[8] = s[8] == null ? a[8] : ur(s[8], a[8])),
            s[9] == null && (s[9] = a[9]),
            (s[0] = a[0]),
            (s[1] = _),
            s
          );
        }
        function xA(s) {
          var a = [];
          if (s != null) for (var u in It(s)) a.push(u);
          return a;
        }
        function IA(s) {
          return qc.call(s);
        }
        function G1(s, a, u) {
          return (
            (a = Gt(a === t ? s.length - 1 : a, 0)),
            function () {
              for (
                var f = arguments, _ = -1, O = Gt(f.length - a, 0), F = X(O);
                ++_ < O;

              )
                F[_] = f[a + _];
              _ = -1;
              for (var q = X(a + 1); ++_ < a; ) q[_] = f[_];
              return (q[a] = u(F)), Br(s, this, q);
            }
          );
        }
        function $1(s, a) {
          return a.length < 2 ? s : xs(s, ii(a, 0, -1));
        }
        function DA(s, a) {
          for (var u = s.length, f = ur(a.length, u), _ = Rr(s); f--; ) {
            var O = a[f];
            s[f] = _n(O, u) ? _[O] : t;
          }
          return s;
        }
        function af(s, a) {
          if (
            !(a === "constructor" && typeof s[a] == "function") &&
            a != "__proto__"
          )
            return s[a];
        }
        var J1 = Y1(y1),
          Ca =
            k6 ||
            function (s, a) {
              return er.setTimeout(s, a);
            },
          cf = Y1(YE);
        function W1(s, a, u) {
          var f = a + "";
          return cf(s, vA(f, RA(gA(f), u)));
        }
        function Y1(s) {
          var a = 0,
            u = 0;
          return function () {
            var f = G6(),
              _ = h - (f - u);
            if (((u = f), _ > 0)) {
              if (++a >= W) return arguments[0];
            } else a = 0;
            return s.apply(t, arguments);
          };
        }
        function uu(s, a) {
          var u = -1,
            f = s.length,
            _ = f - 1;
          for (a = a === t ? f : a; ++u < a; ) {
            var O = Hl(u, _),
              F = s[O];
            (s[O] = s[u]), (s[u] = F);
          }
          return (s.length = a), s;
        }
        var Q1 = AA(function (s) {
          var a = [];
          return (
            s.charCodeAt(0) === 46 && a.push(""),
            s.replace(wt, function (u, f, _, O) {
              a.push(_ ? O.replace(gn, "$1") : f || u);
            }),
            a
          );
        });
        function Bi(s) {
          if (typeof s == "string" || zr(s)) return s;
          var a = s + "";
          return a == "0" && 1 / s == -D ? "-0" : a;
        }
        function Ds(s) {
          if (s != null) {
            try {
              return Bc.call(s);
            } catch {}
            try {
              return s + "";
            } catch {}
          }
          return "";
        }
        function RA(s, a) {
          return (
            Zr(ne, function (u) {
              var f = "_." + u[0];
              a & u[1] && !Nc(s, f) && s.push(f);
            }),
            s.sort()
          );
        }
        function X1(s) {
          if (s instanceof Le) return s.clone();
          var a = new ti(s.__wrapped__, s.__chain__);
          return (
            (a.__actions__ = Rr(s.__actions__)),
            (a.__index__ = s.__index__),
            (a.__values__ = s.__values__),
            a
          );
        }
        function CA(s, a, u) {
          (u ? br(s, a, u) : a === t) ? (a = 1) : (a = Gt(Ce(a), 0));
          var f = s == null ? 0 : s.length;
          if (!f || a < 1) return [];
          for (var _ = 0, O = 0, F = X(Vc(f / a)); _ < f; )
            F[O++] = ii(s, _, (_ += a));
          return F;
        }
        function OA(s) {
          for (
            var a = -1, u = s == null ? 0 : s.length, f = 0, _ = [];
            ++a < u;

          ) {
            var O = s[a];
            O && (_[f++] = O);
          }
          return _;
        }
        function PA() {
          var s = arguments.length;
          if (!s) return [];
          for (var a = X(s - 1), u = arguments[0], f = s; f--; )
            a[f - 1] = arguments[f];
          return Wn(Ie(u) ? Rr(u) : [u], tr(a, 1));
        }
        var MA = Pe(function (s, a) {
            return jt(s) ? Aa(s, tr(a, 1, jt, !0)) : [];
          }),
          NA = Pe(function (s, a) {
            var u = ni(a);
            return (
              jt(u) && (u = t), jt(s) ? Aa(s, tr(a, 1, jt, !0), _e(u, 2)) : []
            );
          }),
          TA = Pe(function (s, a) {
            var u = ni(a);
            return jt(u) && (u = t), jt(s) ? Aa(s, tr(a, 1, jt, !0), t, u) : [];
          });
        function FA(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)), ii(s, a < 0 ? 0 : a, f))
            : [];
        }
        function LA(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)),
              (a = f - a),
              ii(s, 0, a < 0 ? 0 : a))
            : [];
        }
        function UA(s, a) {
          return s && s.length ? tu(s, _e(a, 3), !0, !0) : [];
        }
        function BA(s, a) {
          return s && s.length ? tu(s, _e(a, 3), !0) : [];
        }
        function qA(s, a, u, f) {
          var _ = s == null ? 0 : s.length;
          return _
            ? (u && typeof u != "number" && br(s, a, u) && ((u = 0), (f = _)),
              PE(s, a, u, f))
            : [];
        }
        function Z1(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = u == null ? 0 : Ce(u);
          return _ < 0 && (_ = Gt(f + _, 0)), Tc(s, _e(a, 3), _);
        }
        function em(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = f - 1;
          return (
            u !== t && ((_ = Ce(u)), (_ = u < 0 ? Gt(f + _, 0) : ur(_, f - 1))),
            Tc(s, _e(a, 3), _, !0)
          );
        }
        function tm(s) {
          var a = s == null ? 0 : s.length;
          return a ? tr(s, 1) : [];
        }
        function jA(s) {
          var a = s == null ? 0 : s.length;
          return a ? tr(s, D) : [];
        }
        function zA(s, a) {
          var u = s == null ? 0 : s.length;
          return u ? ((a = a === t ? 1 : Ce(a)), tr(s, a)) : [];
        }
        function kA(s) {
          for (var a = -1, u = s == null ? 0 : s.length, f = {}; ++a < u; ) {
            var _ = s[a];
            f[_[0]] = _[1];
          }
          return f;
        }
        function rm(s) {
          return s && s.length ? s[0] : t;
        }
        function HA(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = u == null ? 0 : Ce(u);
          return _ < 0 && (_ = Gt(f + _, 0)), io(s, a, _);
        }
        function KA(s) {
          var a = s == null ? 0 : s.length;
          return a ? ii(s, 0, -1) : [];
        }
        var VA = Pe(function (s) {
            var a = Mt(s, Jl);
            return a.length && a[0] === s[0] ? Bl(a) : [];
          }),
          GA = Pe(function (s) {
            var a = ni(s),
              u = Mt(s, Jl);
            return (
              a === ni(u) ? (a = t) : u.pop(),
              u.length && u[0] === s[0] ? Bl(u, _e(a, 2)) : []
            );
          }),
          $A = Pe(function (s) {
            var a = ni(s),
              u = Mt(s, Jl);
            return (
              (a = typeof a == "function" ? a : t),
              a && u.pop(),
              u.length && u[0] === s[0] ? Bl(u, t, a) : []
            );
          });
        function JA(s, a) {
          return s == null ? "" : K6.call(s, a);
        }
        function ni(s) {
          var a = s == null ? 0 : s.length;
          return a ? s[a - 1] : t;
        }
        function WA(s, a, u) {
          var f = s == null ? 0 : s.length;
          if (!f) return -1;
          var _ = f;
          return (
            u !== t && ((_ = Ce(u)), (_ = _ < 0 ? Gt(f + _, 0) : ur(_, f - 1))),
            a === a ? R6(s, a, _) : Tc(s, Lg, _, !0)
          );
        }
        function YA(s, a) {
          return s && s.length ? d1(s, Ce(a)) : t;
        }
        var QA = Pe(im);
        function im(s, a) {
          return s && s.length && a && a.length ? kl(s, a) : s;
        }
        function XA(s, a, u) {
          return s && s.length && a && a.length ? kl(s, a, _e(u, 2)) : s;
        }
        function ZA(s, a, u) {
          return s && s.length && a && a.length ? kl(s, a, t, u) : s;
        }
        var e5 = bn(function (s, a) {
          var u = s == null ? 0 : s.length,
            f = Tl(s, a);
          return (
            m1(
              s,
              Mt(a, function (_) {
                return _n(_, u) ? +_ : _;
              }).sort(I1)
            ),
            f
          );
        });
        function t5(s, a) {
          var u = [];
          if (!(s && s.length)) return u;
          var f = -1,
            _ = [],
            O = s.length;
          for (a = _e(a, 3); ++f < O; ) {
            var F = s[f];
            a(F, f, s) && (u.push(F), _.push(f));
          }
          return m1(s, _), u;
        }
        function uf(s) {
          return s == null ? s : J6.call(s);
        }
        function r5(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? (u && typeof u != "number" && br(s, a, u)
                ? ((a = 0), (u = f))
                : ((a = a == null ? 0 : Ce(a)), (u = u === t ? f : Ce(u))),
              ii(s, a, u))
            : [];
        }
        function i5(s, a) {
          return eu(s, a);
        }
        function n5(s, a, u) {
          return Vl(s, a, _e(u, 2));
        }
        function s5(s, a) {
          var u = s == null ? 0 : s.length;
          if (u) {
            var f = eu(s, a);
            if (f < u && vi(s[f], a)) return f;
          }
          return -1;
        }
        function o5(s, a) {
          return eu(s, a, !0);
        }
        function a5(s, a, u) {
          return Vl(s, a, _e(u, 2), !0);
        }
        function c5(s, a) {
          var u = s == null ? 0 : s.length;
          if (u) {
            var f = eu(s, a, !0) - 1;
            if (vi(s[f], a)) return f;
          }
          return -1;
        }
        function u5(s) {
          return s && s.length ? v1(s) : [];
        }
        function h5(s, a) {
          return s && s.length ? v1(s, _e(a, 2)) : [];
        }
        function l5(s) {
          var a = s == null ? 0 : s.length;
          return a ? ii(s, 1, a) : [];
        }
        function f5(s, a, u) {
          return s && s.length
            ? ((a = u || a === t ? 1 : Ce(a)), ii(s, 0, a < 0 ? 0 : a))
            : [];
        }
        function d5(s, a, u) {
          var f = s == null ? 0 : s.length;
          return f
            ? ((a = u || a === t ? 1 : Ce(a)),
              (a = f - a),
              ii(s, a < 0 ? 0 : a, f))
            : [];
        }
        function p5(s, a) {
          return s && s.length ? tu(s, _e(a, 3), !1, !0) : [];
        }
        function g5(s, a) {
          return s && s.length ? tu(s, _e(a, 3)) : [];
        }
        var m5 = Pe(function (s) {
            return Zn(tr(s, 1, jt, !0));
          }),
          y5 = Pe(function (s) {
            var a = ni(s);
            return jt(a) && (a = t), Zn(tr(s, 1, jt, !0), _e(a, 2));
          }),
          v5 = Pe(function (s) {
            var a = ni(s);
            return (
              (a = typeof a == "function" ? a : t), Zn(tr(s, 1, jt, !0), t, a)
            );
          });
        function w5(s) {
          return s && s.length ? Zn(s) : [];
        }
        function b5(s, a) {
          return s && s.length ? Zn(s, _e(a, 2)) : [];
        }
        function _5(s, a) {
          return (
            (a = typeof a == "function" ? a : t),
            s && s.length ? Zn(s, t, a) : []
          );
        }
        function hf(s) {
          if (!(s && s.length)) return [];
          var a = 0;
          return (
            (s = Jn(s, function (u) {
              if (jt(u)) return (a = Gt(u.length, a)), !0;
            })),
            Il(a, function (u) {
              return Mt(s, Al(u));
            })
          );
        }
        function nm(s, a) {
          if (!(s && s.length)) return [];
          var u = hf(s);
          return a == null
            ? u
            : Mt(u, function (f) {
                return Br(a, t, f);
              });
        }
        var E5 = Pe(function (s, a) {
            return jt(s) ? Aa(s, a) : [];
          }),
          A5 = Pe(function (s) {
            return $l(Jn(s, jt));
          }),
          S5 = Pe(function (s) {
            var a = ni(s);
            return jt(a) && (a = t), $l(Jn(s, jt), _e(a, 2));
          }),
          x5 = Pe(function (s) {
            var a = ni(s);
            return (a = typeof a == "function" ? a : t), $l(Jn(s, jt), t, a);
          }),
          I5 = Pe(hf);
        function D5(s, a) {
          return E1(s || [], a || [], Ea);
        }
        function R5(s, a) {
          return E1(s || [], a || [], Ia);
        }
        var C5 = Pe(function (s) {
          var a = s.length,
            u = a > 1 ? s[a - 1] : t;
          return (u = typeof u == "function" ? (s.pop(), u) : t), nm(s, u);
        });
        function sm(s) {
          var a = S(s);
          return (a.__chain__ = !0), a;
        }
        function O5(s, a) {
          return a(s), s;
        }
        function hu(s, a) {
          return a(s);
        }
        var P5 = bn(function (s) {
          var a = s.length,
            u = a ? s[0] : 0,
            f = this.__wrapped__,
            _ = function (O) {
              return Tl(O, s);
            };
          return a > 1 ||
            this.__actions__.length ||
            !(f instanceof Le) ||
            !_n(u)
            ? this.thru(_)
            : ((f = f.slice(u, +u + (a ? 1 : 0))),
              f.__actions__.push({ func: hu, args: [_], thisArg: t }),
              new ti(f, this.__chain__).thru(function (O) {
                return a && !O.length && O.push(t), O;
              }));
        });
        function M5() {
          return sm(this);
        }
        function N5() {
          return new ti(this.value(), this.__chain__);
        }
        function T5() {
          this.__values__ === t && (this.__values__ = wm(this.value()));
          var s = this.__index__ >= this.__values__.length,
            a = s ? t : this.__values__[this.__index__++];
          return { done: s, value: a };
        }
        function F5() {
          return this;
        }
        function L5(s) {
          for (var a, u = this; u instanceof Wc; ) {
            var f = X1(u);
            (f.__index__ = 0),
              (f.__values__ = t),
              a ? (_.__wrapped__ = f) : (a = f);
            var _ = f;
            u = u.__wrapped__;
          }
          return (_.__wrapped__ = s), a;
        }
        function U5() {
          var s = this.__wrapped__;
          if (s instanceof Le) {
            var a = s;
            return (
              this.__actions__.length && (a = new Le(this)),
              (a = a.reverse()),
              a.__actions__.push({ func: hu, args: [uf], thisArg: t }),
              new ti(a, this.__chain__)
            );
          }
          return this.thru(uf);
        }
        function B5() {
          return _1(this.__wrapped__, this.__actions__);
        }
        var q5 = ru(function (s, a, u) {
          st.call(s, u) ? ++s[u] : vn(s, u, 1);
        });
        function j5(s, a, u) {
          var f = Ie(s) ? Tg : OE;
          return u && br(s, a, u) && (a = t), f(s, _e(a, 3));
        }
        function z5(s, a) {
          var u = Ie(s) ? Jn : n1;
          return u(s, _e(a, 3));
        }
        var k5 = M1(Z1),
          H5 = M1(em);
        function K5(s, a) {
          return tr(lu(s, a), 1);
        }
        function V5(s, a) {
          return tr(lu(s, a), D);
        }
        function G5(s, a, u) {
          return (u = u === t ? 1 : Ce(u)), tr(lu(s, a), u);
        }
        function om(s, a) {
          var u = Ie(s) ? Zr : Xn;
          return u(s, _e(a, 3));
        }
        function am(s, a) {
          var u = Ie(s) ? l6 : i1;
          return u(s, _e(a, 3));
        }
        var $5 = ru(function (s, a, u) {
          st.call(s, u) ? s[u].push(a) : vn(s, u, [a]);
        });
        function J5(s, a, u, f) {
          (s = Cr(s) ? s : mo(s)), (u = u && !f ? Ce(u) : 0);
          var _ = s.length;
          return (
            u < 0 && (u = Gt(_ + u, 0)),
            mu(s) ? u <= _ && s.indexOf(a, u) > -1 : !!_ && io(s, a, u) > -1
          );
        }
        var W5 = Pe(function (s, a, u) {
            var f = -1,
              _ = typeof a == "function",
              O = Cr(s) ? X(s.length) : [];
            return (
              Xn(s, function (F) {
                O[++f] = _ ? Br(a, F, u) : Sa(F, a, u);
              }),
              O
            );
          }),
          Y5 = ru(function (s, a, u) {
            vn(s, u, a);
          });
        function lu(s, a) {
          var u = Ie(s) ? Mt : h1;
          return u(s, _e(a, 3));
        }
        function Q5(s, a, u, f) {
          return s == null
            ? []
            : (Ie(a) || (a = a == null ? [] : [a]),
              (u = f ? t : u),
              Ie(u) || (u = u == null ? [] : [u]),
              p1(s, a, u));
        }
        var X5 = ru(
          function (s, a, u) {
            s[u ? 0 : 1].push(a);
          },
          function () {
            return [[], []];
          }
        );
        function Z5(s, a, u) {
          var f = Ie(s) ? _l : Bg,
            _ = arguments.length < 3;
          return f(s, _e(a, 4), u, _, Xn);
        }
        function e8(s, a, u) {
          var f = Ie(s) ? f6 : Bg,
            _ = arguments.length < 3;
          return f(s, _e(a, 4), u, _, i1);
        }
        function t8(s, a) {
          var u = Ie(s) ? Jn : n1;
          return u(s, pu(_e(a, 3)));
        }
        function r8(s) {
          var a = Ie(s) ? Zg : JE;
          return a(s);
        }
        function i8(s, a, u) {
          (u ? br(s, a, u) : a === t) ? (a = 1) : (a = Ce(a));
          var f = Ie(s) ? xE : WE;
          return f(s, a);
        }
        function n8(s) {
          var a = Ie(s) ? IE : QE;
          return a(s);
        }
        function s8(s) {
          if (s == null) return 0;
          if (Cr(s)) return mu(s) ? so(s) : s.length;
          var a = hr(s);
          return a == se || a == Kt ? s.size : jl(s).length;
        }
        function o8(s, a, u) {
          var f = Ie(s) ? El : XE;
          return u && br(s, a, u) && (a = t), f(s, _e(a, 3));
        }
        var a8 = Pe(function (s, a) {
            if (s == null) return [];
            var u = a.length;
            return (
              u > 1 && br(s, a[0], a[1])
                ? (a = [])
                : u > 2 && br(a[0], a[1], a[2]) && (a = [a[0]]),
              p1(s, tr(a, 1), [])
            );
          }),
          fu =
            z6 ||
            function () {
              return er.Date.now();
            };
        function c8(s, a) {
          if (typeof a != "function") throw new ei(c);
          return (
            (s = Ce(s)),
            function () {
              if (--s < 1) return a.apply(this, arguments);
            }
          );
        }
        function cm(s, a, u) {
          return (
            (a = u ? t : a),
            (a = s && a == null ? s.length : a),
            wn(s, L, t, t, t, t, a)
          );
        }
        function um(s, a) {
          var u;
          if (typeof a != "function") throw new ei(c);
          return (
            (s = Ce(s)),
            function () {
              return (
                --s > 0 && (u = a.apply(this, arguments)), s <= 1 && (a = t), u
              );
            }
          );
        }
        var lf = Pe(function (s, a, u) {
            var f = T;
            if (u.length) {
              var _ = Yn(u, po(lf));
              f |= Q;
            }
            return wn(s, f, a, u, _);
          }),
          hm = Pe(function (s, a, u) {
            var f = T | K;
            if (u.length) {
              var _ = Yn(u, po(hm));
              f |= Q;
            }
            return wn(a, f, s, u, _);
          });
        function lm(s, a, u) {
          a = u ? t : a;
          var f = wn(s, J, t, t, t, t, t, a);
          return (f.placeholder = lm.placeholder), f;
        }
        function fm(s, a, u) {
          a = u ? t : a;
          var f = wn(s, G, t, t, t, t, t, a);
          return (f.placeholder = fm.placeholder), f;
        }
        function dm(s, a, u) {
          var f,
            _,
            O,
            F,
            q,
            V,
            re = 0,
            ie = !1,
            le = !1,
            ge = !0;
          if (typeof s != "function") throw new ei(c);
          (a = si(a) || 0),
            Tt(u) &&
              ((ie = !!u.leading),
              (le = "maxWait" in u),
              (O = le ? Gt(si(u.maxWait) || 0, a) : O),
              (ge = "trailing" in u ? !!u.trailing : ge));
          function we(zt) {
            var wi = f,
              Sn = _;
            return (f = _ = t), (re = zt), (F = s.apply(Sn, wi)), F;
          }
          function Ee(zt) {
            return (re = zt), (q = Ca(Fe, a)), ie ? we(zt) : F;
          }
          function Oe(zt) {
            var wi = zt - V,
              Sn = zt - re,
              Mm = a - wi;
            return le ? ur(Mm, O - Sn) : Mm;
          }
          function Ae(zt) {
            var wi = zt - V,
              Sn = zt - re;
            return V === t || wi >= a || wi < 0 || (le && Sn >= O);
          }
          function Fe() {
            var zt = fu();
            if (Ae(zt)) return ze(zt);
            q = Ca(Fe, Oe(zt));
          }
          function ze(zt) {
            return (q = t), ge && f ? we(zt) : ((f = _ = t), F);
          }
          function kr() {
            q !== t && A1(q), (re = 0), (f = V = _ = q = t);
          }
          function _r() {
            return q === t ? F : ze(fu());
          }
          function Hr() {
            var zt = fu(),
              wi = Ae(zt);
            if (((f = arguments), (_ = this), (V = zt), wi)) {
              if (q === t) return Ee(V);
              if (le) return A1(q), (q = Ca(Fe, a)), we(V);
            }
            return q === t && (q = Ca(Fe, a)), F;
          }
          return (Hr.cancel = kr), (Hr.flush = _r), Hr;
        }
        var u8 = Pe(function (s, a) {
            return r1(s, 1, a);
          }),
          h8 = Pe(function (s, a, u) {
            return r1(s, si(a) || 0, u);
          });
        function l8(s) {
          return wn(s, ae);
        }
        function du(s, a) {
          if (typeof s != "function" || (a != null && typeof a != "function"))
            throw new ei(c);
          var u = function () {
            var f = arguments,
              _ = a ? a.apply(this, f) : f[0],
              O = u.cache;
            if (O.has(_)) return O.get(_);
            var F = s.apply(this, f);
            return (u.cache = O.set(_, F) || O), F;
          };
          return (u.cache = new (du.Cache || yn)()), u;
        }
        du.Cache = yn;
        function pu(s) {
          if (typeof s != "function") throw new ei(c);
          return function () {
            var a = arguments;
            switch (a.length) {
              case 0:
                return !s.call(this);
              case 1:
                return !s.call(this, a[0]);
              case 2:
                return !s.call(this, a[0], a[1]);
              case 3:
                return !s.call(this, a[0], a[1], a[2]);
            }
            return !s.apply(this, a);
          };
        }
        function f8(s) {
          return um(2, s);
        }
        var d8 = ZE(function (s, a) {
            a =
              a.length == 1 && Ie(a[0])
                ? Mt(a[0], qr(_e()))
                : Mt(tr(a, 1), qr(_e()));
            var u = a.length;
            return Pe(function (f) {
              for (var _ = -1, O = ur(f.length, u); ++_ < O; )
                f[_] = a[_].call(this, f[_]);
              return Br(s, this, f);
            });
          }),
          ff = Pe(function (s, a) {
            var u = Yn(a, po(ff));
            return wn(s, Q, t, a, u);
          }),
          pm = Pe(function (s, a) {
            var u = Yn(a, po(pm));
            return wn(s, ee, t, a, u);
          }),
          p8 = bn(function (s, a) {
            return wn(s, B, t, t, t, a);
          });
        function g8(s, a) {
          if (typeof s != "function") throw new ei(c);
          return (a = a === t ? a : Ce(a)), Pe(s, a);
        }
        function m8(s, a) {
          if (typeof s != "function") throw new ei(c);
          return (
            (a = a == null ? 0 : Gt(Ce(a), 0)),
            Pe(function (u) {
              var f = u[a],
                _ = ts(u, 0, a);
              return f && Wn(_, f), Br(s, this, _);
            })
          );
        }
        function y8(s, a, u) {
          var f = !0,
            _ = !0;
          if (typeof s != "function") throw new ei(c);
          return (
            Tt(u) &&
              ((f = "leading" in u ? !!u.leading : f),
              (_ = "trailing" in u ? !!u.trailing : _)),
            dm(s, a, { leading: f, maxWait: a, trailing: _ })
          );
        }
        function v8(s) {
          return cm(s, 1);
        }
        function w8(s, a) {
          return ff(Wl(a), s);
        }
        function b8() {
          if (!arguments.length) return [];
          var s = arguments[0];
          return Ie(s) ? s : [s];
        }
        function _8(s) {
          return ri(s, E);
        }
        function E8(s, a) {
          return (a = typeof a == "function" ? a : t), ri(s, E, a);
        }
        function A8(s) {
          return ri(s, v | E);
        }
        function S8(s, a) {
          return (a = typeof a == "function" ? a : t), ri(s, v | E, a);
        }
        function x8(s, a) {
          return a == null || t1(s, a, Qt(a));
        }
        function vi(s, a) {
          return s === a || (s !== s && a !== a);
        }
        var I8 = ou(Ul),
          D8 = ou(function (s, a) {
            return s >= a;
          }),
          Rs = a1(
            (function () {
              return arguments;
            })()
          )
            ? a1
            : function (s) {
                return Lt(s) && st.call(s, "callee") && !$g.call(s, "callee");
              },
          Ie = X.isArray,
          R8 = Rg ? qr(Rg) : LE;
        function Cr(s) {
          return s != null && gu(s.length) && !En(s);
        }
        function jt(s) {
          return Lt(s) && Cr(s);
        }
        function C8(s) {
          return s === !0 || s === !1 || (Lt(s) && wr(s) == Y);
        }
        var rs = H6 || Af,
          O8 = Cg ? qr(Cg) : UE;
        function P8(s) {
          return Lt(s) && s.nodeType === 1 && !Oa(s);
        }
        function M8(s) {
          if (s == null) return !0;
          if (
            Cr(s) &&
            (Ie(s) ||
              typeof s == "string" ||
              typeof s.splice == "function" ||
              rs(s) ||
              go(s) ||
              Rs(s))
          )
            return !s.length;
          var a = hr(s);
          if (a == se || a == Kt) return !s.size;
          if (Ra(s)) return !jl(s).length;
          for (var u in s) if (st.call(s, u)) return !1;
          return !0;
        }
        function N8(s, a) {
          return xa(s, a);
        }
        function T8(s, a, u) {
          u = typeof u == "function" ? u : t;
          var f = u ? u(s, a) : t;
          return f === t ? xa(s, a, t, u) : !!f;
        }
        function df(s) {
          if (!Lt(s)) return !1;
          var a = wr(s);
          return (
            a == ce ||
            a == oe ||
            (typeof s.message == "string" &&
              typeof s.name == "string" &&
              !Oa(s))
          );
        }
        function F8(s) {
          return typeof s == "number" && Wg(s);
        }
        function En(s) {
          if (!Tt(s)) return !1;
          var a = wr(s);
          return a == fe || a == pe || a == H || a == lt;
        }
        function gm(s) {
          return typeof s == "number" && s == Ce(s);
        }
        function gu(s) {
          return typeof s == "number" && s > -1 && s % 1 == 0 && s <= M;
        }
        function Tt(s) {
          var a = typeof s;
          return s != null && (a == "object" || a == "function");
        }
        function Lt(s) {
          return s != null && typeof s == "object";
        }
        var mm = Og ? qr(Og) : qE;
        function L8(s, a) {
          return s === a || ql(s, a, rf(a));
        }
        function U8(s, a, u) {
          return (u = typeof u == "function" ? u : t), ql(s, a, rf(a), u);
        }
        function B8(s) {
          return ym(s) && s != +s;
        }
        function q8(s) {
          if (EA(s)) throw new xe(o);
          return c1(s);
        }
        function j8(s) {
          return s === null;
        }
        function z8(s) {
          return s == null;
        }
        function ym(s) {
          return typeof s == "number" || (Lt(s) && wr(s) == ve);
        }
        function Oa(s) {
          if (!Lt(s) || wr(s) != je) return !1;
          var a = kc(s);
          if (a === null) return !0;
          var u = st.call(a, "constructor") && a.constructor;
          return typeof u == "function" && u instanceof u && Bc.call(u) == U6;
        }
        var pf = Pg ? qr(Pg) : jE;
        function k8(s) {
          return gm(s) && s >= -M && s <= M;
        }
        var vm = Mg ? qr(Mg) : zE;
        function mu(s) {
          return typeof s == "string" || (!Ie(s) && Lt(s) && wr(s) == Ve);
        }
        function zr(s) {
          return typeof s == "symbol" || (Lt(s) && wr(s) == We);
        }
        var go = Ng ? qr(Ng) : kE;
        function H8(s) {
          return s === t;
        }
        function K8(s) {
          return Lt(s) && hr(s) == Ge;
        }
        function V8(s) {
          return Lt(s) && wr(s) == ft;
        }
        var G8 = ou(zl),
          $8 = ou(function (s, a) {
            return s <= a;
          });
        function wm(s) {
          if (!s) return [];
          if (Cr(s)) return mu(s) ? mi(s) : Rr(s);
          if (ya && s[ya]) return x6(s[ya]());
          var a = hr(s),
            u = a == se ? Rl : a == Kt ? Fc : mo;
          return u(s);
        }
        function An(s) {
          if (!s) return s === 0 ? s : 0;
          if (((s = si(s)), s === D || s === -D)) {
            var a = s < 0 ? -1 : 1;
            return a * z;
          }
          return s === s ? s : 0;
        }
        function Ce(s) {
          var a = An(s),
            u = a % 1;
          return a === a ? (u ? a - u : a) : 0;
        }
        function bm(s) {
          return s ? Ss(Ce(s), 0, p) : 0;
        }
        function si(s) {
          if (typeof s == "number") return s;
          if (zr(s)) return C;
          if (Tt(s)) {
            var a = typeof s.valueOf == "function" ? s.valueOf() : s;
            s = Tt(a) ? a + "" : a;
          }
          if (typeof s != "string") return s === 0 ? s : +s;
          s = qg(s);
          var u = Pi.test(s);
          return u || Ni.test(s)
            ? c6(s.slice(2), u ? 2 : 8)
            : Oi.test(s)
            ? C
            : +s;
        }
        function _m(s) {
          return Ui(s, Or(s));
        }
        function J8(s) {
          return s ? Ss(Ce(s), -M, M) : s === 0 ? s : 0;
        }
        function Ye(s) {
          return s == null ? "" : jr(s);
        }
        var W8 = lo(function (s, a) {
            if (Ra(a) || Cr(a)) {
              Ui(a, Qt(a), s);
              return;
            }
            for (var u in a) st.call(a, u) && Ea(s, u, a[u]);
          }),
          Em = lo(function (s, a) {
            Ui(a, Or(a), s);
          }),
          yu = lo(function (s, a, u, f) {
            Ui(a, Or(a), s, f);
          }),
          Y8 = lo(function (s, a, u, f) {
            Ui(a, Qt(a), s, f);
          }),
          Q8 = bn(Tl);
        function X8(s, a) {
          var u = ho(s);
          return a == null ? u : e1(u, a);
        }
        var Z8 = Pe(function (s, a) {
            s = It(s);
            var u = -1,
              f = a.length,
              _ = f > 2 ? a[2] : t;
            for (_ && br(a[0], a[1], _) && (f = 1); ++u < f; )
              for (var O = a[u], F = Or(O), q = -1, V = F.length; ++q < V; ) {
                var re = F[q],
                  ie = s[re];
                (ie === t || (vi(ie, ao[re]) && !st.call(s, re))) &&
                  (s[re] = O[re]);
              }
            return s;
          }),
          eS = Pe(function (s) {
            return s.push(t, q1), Br(Am, t, s);
          });
        function tS(s, a) {
          return Fg(s, _e(a, 3), Li);
        }
        function rS(s, a) {
          return Fg(s, _e(a, 3), Ll);
        }
        function iS(s, a) {
          return s == null ? s : Fl(s, _e(a, 3), Or);
        }
        function nS(s, a) {
          return s == null ? s : s1(s, _e(a, 3), Or);
        }
        function sS(s, a) {
          return s && Li(s, _e(a, 3));
        }
        function oS(s, a) {
          return s && Ll(s, _e(a, 3));
        }
        function aS(s) {
          return s == null ? [] : Xc(s, Qt(s));
        }
        function cS(s) {
          return s == null ? [] : Xc(s, Or(s));
        }
        function gf(s, a, u) {
          var f = s == null ? t : xs(s, a);
          return f === t ? u : f;
        }
        function uS(s, a) {
          return s != null && k1(s, a, ME);
        }
        function mf(s, a) {
          return s != null && k1(s, a, NE);
        }
        var hS = T1(function (s, a, u) {
            a != null && typeof a.toString != "function" && (a = qc.call(a)),
              (s[a] = u);
          }, vf(Pr)),
          lS = T1(function (s, a, u) {
            a != null && typeof a.toString != "function" && (a = qc.call(a)),
              st.call(s, a) ? s[a].push(u) : (s[a] = [u]);
          }, _e),
          fS = Pe(Sa);
        function Qt(s) {
          return Cr(s) ? Xg(s) : jl(s);
        }
        function Or(s) {
          return Cr(s) ? Xg(s, !0) : HE(s);
        }
        function dS(s, a) {
          var u = {};
          return (
            (a = _e(a, 3)),
            Li(s, function (f, _, O) {
              vn(u, a(f, _, O), f);
            }),
            u
          );
        }
        function pS(s, a) {
          var u = {};
          return (
            (a = _e(a, 3)),
            Li(s, function (f, _, O) {
              vn(u, _, a(f, _, O));
            }),
            u
          );
        }
        var gS = lo(function (s, a, u) {
            Zc(s, a, u);
          }),
          Am = lo(function (s, a, u, f) {
            Zc(s, a, u, f);
          }),
          mS = bn(function (s, a) {
            var u = {};
            if (s == null) return u;
            var f = !1;
            (a = Mt(a, function (O) {
              return (O = es(O, s)), f || (f = O.length > 1), O;
            })),
              Ui(s, ef(s), u),
              f && (u = ri(u, v | A | E, hA));
            for (var _ = a.length; _--; ) Gl(u, a[_]);
            return u;
          });
        function yS(s, a) {
          return Sm(s, pu(_e(a)));
        }
        var vS = bn(function (s, a) {
          return s == null ? {} : VE(s, a);
        });
        function Sm(s, a) {
          if (s == null) return {};
          var u = Mt(ef(s), function (f) {
            return [f];
          });
          return (
            (a = _e(a)),
            g1(s, u, function (f, _) {
              return a(f, _[0]);
            })
          );
        }
        function wS(s, a, u) {
          a = es(a, s);
          var f = -1,
            _ = a.length;
          for (_ || ((_ = 1), (s = t)); ++f < _; ) {
            var O = s == null ? t : s[Bi(a[f])];
            O === t && ((f = _), (O = u)), (s = En(O) ? O.call(s) : O);
          }
          return s;
        }
        function bS(s, a, u) {
          return s == null ? s : Ia(s, a, u);
        }
        function _S(s, a, u, f) {
          return (
            (f = typeof f == "function" ? f : t), s == null ? s : Ia(s, a, u, f)
          );
        }
        var xm = U1(Qt),
          Im = U1(Or);
        function ES(s, a, u) {
          var f = Ie(s),
            _ = f || rs(s) || go(s);
          if (((a = _e(a, 4)), u == null)) {
            var O = s && s.constructor;
            _
              ? (u = f ? new O() : [])
              : Tt(s)
              ? (u = En(O) ? ho(kc(s)) : {})
              : (u = {});
          }
          return (
            (_ ? Zr : Li)(s, function (F, q, V) {
              return a(u, F, q, V);
            }),
            u
          );
        }
        function AS(s, a) {
          return s == null ? !0 : Gl(s, a);
        }
        function SS(s, a, u) {
          return s == null ? s : b1(s, a, Wl(u));
        }
        function xS(s, a, u, f) {
          return (
            (f = typeof f == "function" ? f : t),
            s == null ? s : b1(s, a, Wl(u), f)
          );
        }
        function mo(s) {
          return s == null ? [] : Dl(s, Qt(s));
        }
        function IS(s) {
          return s == null ? [] : Dl(s, Or(s));
        }
        function DS(s, a, u) {
          return (
            u === t && ((u = a), (a = t)),
            u !== t && ((u = si(u)), (u = u === u ? u : 0)),
            a !== t && ((a = si(a)), (a = a === a ? a : 0)),
            Ss(si(s), a, u)
          );
        }
        function RS(s, a, u) {
          return (
            (a = An(a)),
            u === t ? ((u = a), (a = 0)) : (u = An(u)),
            (s = si(s)),
            TE(s, a, u)
          );
        }
        function CS(s, a, u) {
          if (
            (u && typeof u != "boolean" && br(s, a, u) && (a = u = t),
            u === t &&
              (typeof a == "boolean"
                ? ((u = a), (a = t))
                : typeof s == "boolean" && ((u = s), (s = t))),
            s === t && a === t
              ? ((s = 0), (a = 1))
              : ((s = An(s)), a === t ? ((a = s), (s = 0)) : (a = An(a))),
            s > a)
          ) {
            var f = s;
            (s = a), (a = f);
          }
          if (u || s % 1 || a % 1) {
            var _ = Yg();
            return ur(s + _ * (a - s + a6("1e-" + ((_ + "").length - 1))), a);
          }
          return Hl(s, a);
        }
        var OS = fo(function (s, a, u) {
          return (a = a.toLowerCase()), s + (u ? Dm(a) : a);
        });
        function Dm(s) {
          return yf(Ye(s).toLowerCase());
        }
        function Rm(s) {
          return (s = Ye(s)), s && s.replace(Fi, b6).replace(Q_, "");
        }
        function PS(s, a, u) {
          (s = Ye(s)), (a = jr(a));
          var f = s.length;
          u = u === t ? f : Ss(Ce(u), 0, f);
          var _ = u;
          return (u -= a.length), u >= 0 && s.slice(u, _) == a;
        }
        function MS(s) {
          return (s = Ye(s)), s && mt.test(s) ? s.replace(Ci, _6) : s;
        }
        function NS(s) {
          return (s = Ye(s)), s && bt.test(s) ? s.replace(gi, "\\$&") : s;
        }
        var TS = fo(function (s, a, u) {
            return s + (u ? "-" : "") + a.toLowerCase();
          }),
          FS = fo(function (s, a, u) {
            return s + (u ? " " : "") + a.toLowerCase();
          }),
          LS = P1("toLowerCase");
        function US(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          if (!a || f >= a) return s;
          var _ = (a - f) / 2;
          return su(Gc(_), u) + s + su(Vc(_), u);
        }
        function BS(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          return a && f < a ? s + su(a - f, u) : s;
        }
        function qS(s, a, u) {
          (s = Ye(s)), (a = Ce(a));
          var f = a ? so(s) : 0;
          return a && f < a ? su(a - f, u) + s : s;
        }
        function jS(s, a, u) {
          return (
            u || a == null ? (a = 0) : a && (a = +a),
            $6(Ye(s).replace(nt, ""), a || 0)
          );
        }
        function zS(s, a, u) {
          return (
            (u ? br(s, a, u) : a === t) ? (a = 1) : (a = Ce(a)), Kl(Ye(s), a)
          );
        }
        function kS() {
          var s = arguments,
            a = Ye(s[0]);
          return s.length < 3 ? a : a.replace(s[1], s[2]);
        }
        var HS = fo(function (s, a, u) {
          return s + (u ? "_" : "") + a.toLowerCase();
        });
        function KS(s, a, u) {
          return (
            u && typeof u != "number" && br(s, a, u) && (a = u = t),
            (u = u === t ? p : u >>> 0),
            u
              ? ((s = Ye(s)),
                s &&
                (typeof a == "string" || (a != null && !pf(a))) &&
                ((a = jr(a)), !a && no(s))
                  ? ts(mi(s), 0, u)
                  : s.split(a, u))
              : []
          );
        }
        var VS = fo(function (s, a, u) {
          return s + (u ? " " : "") + yf(a);
        });
        function GS(s, a, u) {
          return (
            (s = Ye(s)),
            (u = u == null ? 0 : Ss(Ce(u), 0, s.length)),
            (a = jr(a)),
            s.slice(u, u + a.length) == a
          );
        }
        function $S(s, a, u) {
          var f = S.templateSettings;
          u && br(s, a, u) && (a = t), (s = Ye(s)), (a = yu({}, a, f, B1));
          var _ = yu({}, a.imports, f.imports, B1),
            O = Qt(_),
            F = Dl(_, O),
            q,
            V,
            re = 0,
            ie = a.interpolate || Gn,
            le = "__p += '",
            ge = Cl(
              (a.escape || Gn).source +
                "|" +
                ie.source +
                "|" +
                (ie === at ? xt : Gn).source +
                "|" +
                (a.evaluate || Gn).source +
                "|$",
              "g"
            ),
            we =
              "//# sourceURL=" +
              (st.call(a, "sourceURL")
                ? (a.sourceURL + "").replace(/\s/g, " ")
                : "lodash.templateSources[" + ++r6 + "]") +
              `
`;
          s.replace(ge, function (Ae, Fe, ze, kr, _r, Hr) {
            return (
              ze || (ze = kr),
              (le += s.slice(re, Hr).replace(ca, E6)),
              Fe &&
                ((q = !0),
                (le +=
                  `' +
__e(` +
                  Fe +
                  `) +
'`)),
              _r &&
                ((V = !0),
                (le +=
                  `';
` +
                  _r +
                  `;
__p += '`)),
              ze &&
                (le +=
                  `' +
((__t = (` +
                  ze +
                  `)) == null ? '' : __t) +
'`),
              (re = Hr + Ae.length),
              Ae
            );
          }),
            (le += `';
`);
          var Ee = st.call(a, "variable") && a.variable;
          if (!Ee)
            le =
              `with (obj) {
` +
              le +
              `
}
`;
          else if (St.test(Ee)) throw new xe(l);
          (le = (V ? le.replace(dt, "") : le)
            .replace(hn, "$1")
            .replace(pt, "$1;")),
            (le =
              "function(" +
              (Ee || "obj") +
              `) {
` +
              (Ee
                ? ""
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (q ? ", __e = _.escape" : "") +
              (V
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              le +
              `return __p
}`);
          var Oe = Om(function () {
            return $e(O, we + "return " + le).apply(t, F);
          });
          if (((Oe.source = le), df(Oe))) throw Oe;
          return Oe;
        }
        function JS(s) {
          return Ye(s).toLowerCase();
        }
        function WS(s) {
          return Ye(s).toUpperCase();
        }
        function YS(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return qg(s);
          if (!s || !(a = jr(a))) return s;
          var f = mi(s),
            _ = mi(a),
            O = jg(f, _),
            F = zg(f, _) + 1;
          return ts(f, O, F).join("");
        }
        function QS(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return s.slice(0, Hg(s) + 1);
          if (!s || !(a = jr(a))) return s;
          var f = mi(s),
            _ = zg(f, mi(a)) + 1;
          return ts(f, 0, _).join("");
        }
        function XS(s, a, u) {
          if (((s = Ye(s)), s && (u || a === t))) return s.replace(nt, "");
          if (!s || !(a = jr(a))) return s;
          var f = mi(s),
            _ = jg(f, mi(a));
          return ts(f, _).join("");
        }
        function ZS(s, a) {
          var u = U,
            f = j;
          if (Tt(a)) {
            var _ = "separator" in a ? a.separator : _;
            (u = "length" in a ? Ce(a.length) : u),
              (f = "omission" in a ? jr(a.omission) : f);
          }
          s = Ye(s);
          var O = s.length;
          if (no(s)) {
            var F = mi(s);
            O = F.length;
          }
          if (u >= O) return s;
          var q = u - so(f);
          if (q < 1) return f;
          var V = F ? ts(F, 0, q).join("") : s.slice(0, q);
          if (_ === t) return V + f;
          if ((F && (q += V.length - q), pf(_))) {
            if (s.slice(q).search(_)) {
              var re,
                ie = V;
              for (
                _.global || (_ = Cl(_.source, Ye(ct.exec(_)) + "g")),
                  _.lastIndex = 0;
                (re = _.exec(ie));

              )
                var le = re.index;
              V = V.slice(0, le === t ? q : le);
            }
          } else if (s.indexOf(jr(_), q) != q) {
            var ge = V.lastIndexOf(_);
            ge > -1 && (V = V.slice(0, ge));
          }
          return V + f;
        }
        function ex(s) {
          return (s = Ye(s)), s && gt.test(s) ? s.replace(ot, C6) : s;
        }
        var tx = fo(function (s, a, u) {
            return s + (u ? " " : "") + a.toUpperCase();
          }),
          yf = P1("toUpperCase");
        function Cm(s, a, u) {
          return (
            (s = Ye(s)),
            (a = u ? t : a),
            a === t ? (S6(s) ? M6(s) : g6(s)) : s.match(a) || []
          );
        }
        var Om = Pe(function (s, a) {
            try {
              return Br(s, t, a);
            } catch (u) {
              return df(u) ? u : new xe(u);
            }
          }),
          rx = bn(function (s, a) {
            return (
              Zr(a, function (u) {
                (u = Bi(u)), vn(s, u, lf(s[u], s));
              }),
              s
            );
          });
        function ix(s) {
          var a = s == null ? 0 : s.length,
            u = _e();
          return (
            (s = a
              ? Mt(s, function (f) {
                  if (typeof f[1] != "function") throw new ei(c);
                  return [u(f[0]), f[1]];
                })
              : []),
            Pe(function (f) {
              for (var _ = -1; ++_ < a; ) {
                var O = s[_];
                if (Br(O[0], this, f)) return Br(O[1], this, f);
              }
            })
          );
        }
        function nx(s) {
          return CE(ri(s, v));
        }
        function vf(s) {
          return function () {
            return s;
          };
        }
        function sx(s, a) {
          return s == null || s !== s ? a : s;
        }
        var ox = N1(),
          ax = N1(!0);
        function Pr(s) {
          return s;
        }
        function wf(s) {
          return u1(typeof s == "function" ? s : ri(s, v));
        }
        function cx(s) {
          return l1(ri(s, v));
        }
        function ux(s, a) {
          return f1(s, ri(a, v));
        }
        var hx = Pe(function (s, a) {
            return function (u) {
              return Sa(u, s, a);
            };
          }),
          lx = Pe(function (s, a) {
            return function (u) {
              return Sa(s, u, a);
            };
          });
        function bf(s, a, u) {
          var f = Qt(a),
            _ = Xc(a, f);
          u == null &&
            !(Tt(a) && (_.length || !f.length)) &&
            ((u = a), (a = s), (s = this), (_ = Xc(a, Qt(a))));
          var O = !(Tt(u) && "chain" in u) || !!u.chain,
            F = En(s);
          return (
            Zr(_, function (q) {
              var V = a[q];
              (s[q] = V),
                F &&
                  (s.prototype[q] = function () {
                    var re = this.__chain__;
                    if (O || re) {
                      var ie = s(this.__wrapped__),
                        le = (ie.__actions__ = Rr(this.__actions__));
                      return (
                        le.push({ func: V, args: arguments, thisArg: s }),
                        (ie.__chain__ = re),
                        ie
                      );
                    }
                    return V.apply(s, Wn([this.value()], arguments));
                  });
            }),
            s
          );
        }
        function fx() {
          return er._ === this && (er._ = B6), this;
        }
        function _f() {}
        function dx(s) {
          return (
            (s = Ce(s)),
            Pe(function (a) {
              return d1(a, s);
            })
          );
        }
        var px = Ql(Mt),
          gx = Ql(Tg),
          mx = Ql(El);
        function Pm(s) {
          return sf(s) ? Al(Bi(s)) : GE(s);
        }
        function yx(s) {
          return function (a) {
            return s == null ? t : xs(s, a);
          };
        }
        var vx = F1(),
          wx = F1(!0);
        function Ef() {
          return [];
        }
        function Af() {
          return !1;
        }
        function bx() {
          return {};
        }
        function _x() {
          return "";
        }
        function Ex() {
          return !0;
        }
        function Ax(s, a) {
          if (((s = Ce(s)), s < 1 || s > M)) return [];
          var u = p,
            f = ur(s, p);
          (a = _e(a)), (s -= p);
          for (var _ = Il(f, a); ++u < s; ) a(u);
          return _;
        }
        function Sx(s) {
          return Ie(s) ? Mt(s, Bi) : zr(s) ? [s] : Rr(Q1(Ye(s)));
        }
        function xx(s) {
          var a = ++L6;
          return Ye(s) + a;
        }
        var Ix = nu(function (s, a) {
            return s + a;
          }, 0),
          Dx = Xl("ceil"),
          Rx = nu(function (s, a) {
            return s / a;
          }, 1),
          Cx = Xl("floor");
        function Ox(s) {
          return s && s.length ? Qc(s, Pr, Ul) : t;
        }
        function Px(s, a) {
          return s && s.length ? Qc(s, _e(a, 2), Ul) : t;
        }
        function Mx(s) {
          return Ug(s, Pr);
        }
        function Nx(s, a) {
          return Ug(s, _e(a, 2));
        }
        function Tx(s) {
          return s && s.length ? Qc(s, Pr, zl) : t;
        }
        function Fx(s, a) {
          return s && s.length ? Qc(s, _e(a, 2), zl) : t;
        }
        var Lx = nu(function (s, a) {
            return s * a;
          }, 1),
          Ux = Xl("round"),
          Bx = nu(function (s, a) {
            return s - a;
          }, 0);
        function qx(s) {
          return s && s.length ? xl(s, Pr) : 0;
        }
        function jx(s, a) {
          return s && s.length ? xl(s, _e(a, 2)) : 0;
        }
        return (
          (S.after = c8),
          (S.ary = cm),
          (S.assign = W8),
          (S.assignIn = Em),
          (S.assignInWith = yu),
          (S.assignWith = Y8),
          (S.at = Q8),
          (S.before = um),
          (S.bind = lf),
          (S.bindAll = rx),
          (S.bindKey = hm),
          (S.castArray = b8),
          (S.chain = sm),
          (S.chunk = CA),
          (S.compact = OA),
          (S.concat = PA),
          (S.cond = ix),
          (S.conforms = nx),
          (S.constant = vf),
          (S.countBy = q5),
          (S.create = X8),
          (S.curry = lm),
          (S.curryRight = fm),
          (S.debounce = dm),
          (S.defaults = Z8),
          (S.defaultsDeep = eS),
          (S.defer = u8),
          (S.delay = h8),
          (S.difference = MA),
          (S.differenceBy = NA),
          (S.differenceWith = TA),
          (S.drop = FA),
          (S.dropRight = LA),
          (S.dropRightWhile = UA),
          (S.dropWhile = BA),
          (S.fill = qA),
          (S.filter = z5),
          (S.flatMap = K5),
          (S.flatMapDeep = V5),
          (S.flatMapDepth = G5),
          (S.flatten = tm),
          (S.flattenDeep = jA),
          (S.flattenDepth = zA),
          (S.flip = l8),
          (S.flow = ox),
          (S.flowRight = ax),
          (S.fromPairs = kA),
          (S.functions = aS),
          (S.functionsIn = cS),
          (S.groupBy = $5),
          (S.initial = KA),
          (S.intersection = VA),
          (S.intersectionBy = GA),
          (S.intersectionWith = $A),
          (S.invert = hS),
          (S.invertBy = lS),
          (S.invokeMap = W5),
          (S.iteratee = wf),
          (S.keyBy = Y5),
          (S.keys = Qt),
          (S.keysIn = Or),
          (S.map = lu),
          (S.mapKeys = dS),
          (S.mapValues = pS),
          (S.matches = cx),
          (S.matchesProperty = ux),
          (S.memoize = du),
          (S.merge = gS),
          (S.mergeWith = Am),
          (S.mSOLod = hx),
          (S.mSOLodOf = lx),
          (S.mixin = bf),
          (S.negate = pu),
          (S.nthArg = dx),
          (S.omit = mS),
          (S.omitBy = yS),
          (S.once = f8),
          (S.orderBy = Q5),
          (S.over = px),
          (S.overArgs = d8),
          (S.overEvery = gx),
          (S.overSome = mx),
          (S.partial = ff),
          (S.partialRight = pm),
          (S.partition = X5),
          (S.pick = vS),
          (S.pickBy = Sm),
          (S.property = Pm),
          (S.propertyOf = yx),
          (S.pull = QA),
          (S.pullAll = im),
          (S.pullAllBy = XA),
          (S.pullAllWith = ZA),
          (S.pullAt = e5),
          (S.range = vx),
          (S.rangeRight = wx),
          (S.rearg = p8),
          (S.reject = t8),
          (S.remove = t5),
          (S.rest = g8),
          (S.reverse = uf),
          (S.sampleSize = i8),
          (S.set = bS),
          (S.setWith = _S),
          (S.shuffle = n8),
          (S.slice = r5),
          (S.sortBy = a8),
          (S.sortedUniq = u5),
          (S.sortedUniqBy = h5),
          (S.split = KS),
          (S.spread = m8),
          (S.tail = l5),
          (S.take = f5),
          (S.takeRight = d5),
          (S.takeRightWhile = p5),
          (S.takeWhile = g5),
          (S.tap = O5),
          (S.throttle = y8),
          (S.thru = hu),
          (S.toArray = wm),
          (S.toPairs = xm),
          (S.toPairsIn = Im),
          (S.toPath = Sx),
          (S.toPlainObject = _m),
          (S.transform = ES),
          (S.unary = v8),
          (S.union = m5),
          (S.unionBy = y5),
          (S.unionWith = v5),
          (S.uniq = w5),
          (S.uniqBy = b5),
          (S.uniqWith = _5),
          (S.unset = AS),
          (S.unzip = hf),
          (S.unzipWith = nm),
          (S.update = SS),
          (S.updateWith = xS),
          (S.values = mo),
          (S.valuesIn = IS),
          (S.without = E5),
          (S.words = Cm),
          (S.wrap = w8),
          (S.xor = A5),
          (S.xorBy = S5),
          (S.xorWith = x5),
          (S.zip = I5),
          (S.zipObject = D5),
          (S.zipObjectDeep = R5),
          (S.zipWith = C5),
          (S.entries = xm),
          (S.entriesIn = Im),
          (S.extend = Em),
          (S.extendWith = yu),
          bf(S, S),
          (S.add = Ix),
          (S.attempt = Om),
          (S.camelCase = OS),
          (S.capitalize = Dm),
          (S.ceil = Dx),
          (S.clamp = DS),
          (S.clone = _8),
          (S.cloneDeep = A8),
          (S.cloneDeepWith = S8),
          (S.cloneWith = E8),
          (S.conformsTo = x8),
          (S.deburr = Rm),
          (S.defaultTo = sx),
          (S.divide = Rx),
          (S.endsWith = PS),
          (S.eq = vi),
          (S.escape = MS),
          (S.escapeRegExp = NS),
          (S.every = j5),
          (S.find = k5),
          (S.findIndex = Z1),
          (S.findKey = tS),
          (S.findLast = H5),
          (S.findLastIndex = em),
          (S.findLastKey = rS),
          (S.floor = Cx),
          (S.forEach = om),
          (S.forEachRight = am),
          (S.forIn = iS),
          (S.forInRight = nS),
          (S.forOwn = sS),
          (S.forOwnRight = oS),
          (S.get = gf),
          (S.gt = I8),
          (S.gte = D8),
          (S.has = uS),
          (S.hasIn = mf),
          (S.head = rm),
          (S.identity = Pr),
          (S.includes = J5),
          (S.indexOf = HA),
          (S.inRange = RS),
          (S.invoke = fS),
          (S.isArguments = Rs),
          (S.isArray = Ie),
          (S.isArrayBuffer = R8),
          (S.isArrayLike = Cr),
          (S.isArrayLikeObject = jt),
          (S.isBoolean = C8),
          (S.isBuffer = rs),
          (S.isDate = O8),
          (S.isElement = P8),
          (S.isEmpty = M8),
          (S.isEqual = N8),
          (S.isEqualWith = T8),
          (S.isError = df),
          (S.isFinite = F8),
          (S.isFunction = En),
          (S.isInteger = gm),
          (S.isLength = gu),
          (S.isMap = mm),
          (S.isMatch = L8),
          (S.isMatchWith = U8),
          (S.isNaN = B8),
          (S.isNative = q8),
          (S.isNil = z8),
          (S.isNull = j8),
          (S.isNumber = ym),
          (S.isObject = Tt),
          (S.isObjectLike = Lt),
          (S.isPlainObject = Oa),
          (S.isRegExp = pf),
          (S.isSafeInteger = k8),
          (S.isSet = vm),
          (S.isString = mu),
          (S.isSymbol = zr),
          (S.isTypedArray = go),
          (S.isUndefined = H8),
          (S.isWeakMap = K8),
          (S.isWeakSet = V8),
          (S.join = JA),
          (S.kebabCase = TS),
          (S.last = ni),
          (S.lastIndexOf = WA),
          (S.lowerCase = FS),
          (S.lowerFirst = LS),
          (S.lt = G8),
          (S.lte = $8),
          (S.max = Ox),
          (S.maxBy = Px),
          (S.mean = Mx),
          (S.meanBy = Nx),
          (S.min = Tx),
          (S.minBy = Fx),
          (S.stubArray = Ef),
          (S.stubFalse = Af),
          (S.stubObject = bx),
          (S.stubString = _x),
          (S.stubTrue = Ex),
          (S.multiply = Lx),
          (S.nth = YA),
          (S.noConflict = fx),
          (S.noop = _f),
          (S.now = fu),
          (S.pad = US),
          (S.padEnd = BS),
          (S.padStart = qS),
          (S.parseInt = jS),
          (S.random = CS),
          (S.reduce = Z5),
          (S.reduceRight = e8),
          (S.repeat = zS),
          (S.replace = kS),
          (S.result = wS),
          (S.round = Ux),
          (S.runInContext = k),
          (S.sample = r8),
          (S.size = s8),
          (S.snakeCase = HS),
          (S.some = o8),
          (S.sortedIndex = i5),
          (S.sortedIndexBy = n5),
          (S.sortedIndexOf = s5),
          (S.sortedLastIndex = o5),
          (S.sortedLastIndexBy = a5),
          (S.sortedLastIndexOf = c5),
          (S.startCase = VS),
          (S.startsWith = GS),
          (S.subtract = Bx),
          (S.sum = qx),
          (S.sumBy = jx),
          (S.template = $S),
          (S.times = Ax),
          (S.toFinite = An),
          (S.toInteger = Ce),
          (S.toLength = bm),
          (S.toLower = JS),
          (S.toNumber = si),
          (S.toSafeInteger = J8),
          (S.toString = Ye),
          (S.toUpper = WS),
          (S.trim = YS),
          (S.trimEnd = QS),
          (S.trimStart = XS),
          (S.truncate = ZS),
          (S.unescape = ex),
          (S.uniqueId = xx),
          (S.upperCase = tx),
          (S.upperFirst = yf),
          (S.each = om),
          (S.eachRight = am),
          (S.first = rm),
          bf(
            S,
            (function () {
              var s = {};
              return (
                Li(S, function (a, u) {
                  st.call(S.prototype, u) || (s[u] = a);
                }),
                s
              );
            })(),
            { chain: !1 }
          ),
          (S.VERSION = i),
          Zr(
            [
              "bind",
              "bindKey",
              "curry",
              "curryRight",
              "partial",
              "partialRight",
            ],
            function (s) {
              S[s].placeholder = S;
            }
          ),
          Zr(["drop", "take"], function (s, a) {
            (Le.prototype[s] = function (u) {
              u = u === t ? 1 : Gt(Ce(u), 0);
              var f = this.__filtered__ && !a ? new Le(this) : this.clone();
              return (
                f.__filtered__
                  ? (f.__takeCount__ = ur(u, f.__takeCount__))
                  : f.__views__.push({
                      size: ur(u, p),
                      type: s + (f.__dir__ < 0 ? "Right" : ""),
                    }),
                f
              );
            }),
              (Le.prototype[s + "Right"] = function (u) {
                return this.reverse()[s](u).reverse();
              });
          }),
          Zr(["filter", "map", "takeWhile"], function (s, a) {
            var u = a + 1,
              f = u == m || u == x;
            Le.prototype[s] = function (_) {
              var O = this.clone();
              return (
                O.__iteratees__.push({ iteratee: _e(_, 3), type: u }),
                (O.__filtered__ = O.__filtered__ || f),
                O
              );
            };
          }),
          Zr(["head", "last"], function (s, a) {
            var u = "take" + (a ? "Right" : "");
            Le.prototype[s] = function () {
              return this[u](1).value()[0];
            };
          }),
          Zr(["initial", "tail"], function (s, a) {
            var u = "drop" + (a ? "" : "Right");
            Le.prototype[s] = function () {
              return this.__filtered__ ? new Le(this) : this[u](1);
            };
          }),
          (Le.prototype.compact = function () {
            return this.filter(Pr);
          }),
          (Le.prototype.find = function (s) {
            return this.filter(s).head();
          }),
          (Le.prototype.findLast = function (s) {
            return this.reverse().find(s);
          }),
          (Le.prototype.invokeMap = Pe(function (s, a) {
            return typeof s == "function"
              ? new Le(this)
              : this.map(function (u) {
                  return Sa(u, s, a);
                });
          })),
          (Le.prototype.reject = function (s) {
            return this.filter(pu(_e(s)));
          }),
          (Le.prototype.slice = function (s, a) {
            s = Ce(s);
            var u = this;
            return u.__filtered__ && (s > 0 || a < 0)
              ? new Le(u)
              : (s < 0 ? (u = u.takeRight(-s)) : s && (u = u.drop(s)),
                a !== t &&
                  ((a = Ce(a)), (u = a < 0 ? u.dropRight(-a) : u.take(a - s))),
                u);
          }),
          (Le.prototype.takeRightWhile = function (s) {
            return this.reverse().takeWhile(s).reverse();
          }),
          (Le.prototype.toArray = function () {
            return this.take(p);
          }),
          Li(Le.prototype, function (s, a) {
            var u = /^(?:filter|find|map|reject)|While$/.test(a),
              f = /^(?:head|last)$/.test(a),
              _ = S[f ? "take" + (a == "last" ? "Right" : "") : a],
              O = f || /^find/.test(a);
            _ &&
              (S.prototype[a] = function () {
                var F = this.__wrapped__,
                  q = f ? [1] : arguments,
                  V = F instanceof Le,
                  re = q[0],
                  ie = V || Ie(F),
                  le = function (Fe) {
                    var ze = _.apply(S, Wn([Fe], q));
                    return f && ge ? ze[0] : ze;
                  };
                ie &&
                  u &&
                  typeof re == "function" &&
                  re.length != 1 &&
                  (V = ie = !1);
                var ge = this.__chain__,
                  we = !!this.__actions__.length,
                  Ee = O && !ge,
                  Oe = V && !we;
                if (!O && ie) {
                  F = Oe ? F : new Le(this);
                  var Ae = s.apply(F, q);
                  return (
                    Ae.__actions__.push({ func: hu, args: [le], thisArg: t }),
                    new ti(Ae, ge)
                  );
                }
                return Ee && Oe
                  ? s.apply(this, q)
                  : ((Ae = this.thru(le)),
                    Ee ? (f ? Ae.value()[0] : Ae.value()) : Ae);
              });
          }),
          Zr(
            ["pop", "push", "shift", "sort", "splice", "unshift"],
            function (s) {
              var a = Lc[s],
                u = /^(?:push|sort|unshift)$/.test(s) ? "tap" : "thru",
                f = /^(?:pop|shift)$/.test(s);
              S.prototype[s] = function () {
                var _ = arguments;
                if (f && !this.__chain__) {
                  var O = this.value();
                  return a.apply(Ie(O) ? O : [], _);
                }
                return this[u](function (F) {
                  return a.apply(Ie(F) ? F : [], _);
                });
              };
            }
          ),
          Li(Le.prototype, function (s, a) {
            var u = S[a];
            if (u) {
              var f = u.name + "";
              st.call(uo, f) || (uo[f] = []), uo[f].push({ name: a, func: u });
            }
          }),
          (uo[iu(t, K).name] = [{ name: "wrapper", func: t }]),
          (Le.prototype.clone = eE),
          (Le.prototype.reverse = tE),
          (Le.prototype.value = rE),
          (S.prototype.at = P5),
          (S.prototype.chain = M5),
          (S.prototype.commit = N5),
          (S.prototype.next = T5),
          (S.prototype.plant = L5),
          (S.prototype.reverse = U5),
          (S.prototype.toJSON = S.prototype.valueOf = S.prototype.value = B5),
          (S.prototype.first = S.prototype.head),
          ya && (S.prototype[ya] = F5),
          S
        );
      },
      oo = N6();
    bs ? (((bs.exports = oo)._ = oo), (vl._ = oo)) : (er._ = oo);
  }.call(Pc));
})(Y0, Y0.exports);
var GF = Object.defineProperty,
  $F = Object.defineProperties,
  JF = Object.getOwnPropertyDescriptors,
  S_ = Object.getOwnPropertySymbols,
  WF = Object.prototype.hasOwnProperty,
  YF = Object.prototype.propertyIsEnumerable,
  x_ = (r, e, t) =>
    e in r
      ? GF(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  ul = (r, e) => {
    for (var t in e || (e = {})) WF.call(e, t) && x_(r, t, e[t]);
    if (S_) for (var t of S_(e)) YF.call(e, t) && x_(r, t, e[t]);
    return r;
  },
  QF = (r, e) => $F(r, JF(e));
function Vn(r, e, t) {
  var i;
  let n = Fs(r);
  return (
    ((i = e.rpcMap) == null ? void 0 : i[n.reference]) ||
    `${VF}?chainId=${n.namespace}:${n.reference}&projectId=${t}`
  );
}
function Xs(r) {
  return r.includes(":") ? r.split(":")[1] : r;
}
function F_(r) {
  return r.map((e) => `${e.split(":")[0]}:${e.split(":")[1]}`);
}
function XF(r, e) {
  let t = Object.keys(e.namespaces).filter((n) => n.includes(r));
  if (!t.length) return [];
  let i = [];
  return (
    t.forEach((n) => {
      let o = e.namespaces[n].accounts;
      i.push(...o);
    }),
    i
  );
}
function G0(r = {}, e = {}) {
  let t = I_(r),
    i = I_(e);
  return Y0.exports.merge(t, i);
}
function I_(r) {
  var e, t, i, n;
  let o = {};
  if (!qs(r)) return o;
  for (let [c, l] of Object.entries(r)) {
    let g = ch(c) ? [c] : l.chains,
      d = l.mSOLods || [],
      y = l.events || [],
      v = l.rpcMap || {},
      A = Go(c);
    o[A] = QF(ul(ul({}, o[A]), l), {
      chains: rc(g, (e = o[A]) == null ? void 0 : e.chains),
      mSOLods: rc(d, (t = o[A]) == null ? void 0 : t.mSOLods),
      events: rc(y, (i = o[A]) == null ? void 0 : i.events),
      rpcMap: ul(ul({}, v), (n = o[A]) == null ? void 0 : n.rpcMap),
    });
  }
  return o;
}
function ZF(r) {
  return r.includes(":") ? r.split(":")[2] : r;
}
function D_(r) {
  let e = {};
  for (let [t, i] of Object.entries(r)) {
    let n = i.mSOLods || [],
      o = i.events || [],
      c = i.accounts || [],
      l = ch(t) ? [t] : i.chains ? i.chains : F_(i.accounts);
    e[t] = { chains: l, mSOLods: n, events: o, accounts: c };
  }
  return e;
}
function $0(r) {
  return typeof r == "number"
    ? r
    : r.includes("0x")
    ? parseInt(r, 16)
    : ((r = r.includes(":") ? r.split(":")[1] : r),
      isNaN(Number(r)) ? r : Number(r));
}
var L_ = {},
  Dt = (r) => L_[r],
  J0 = (r, e) => {
    L_[r] = e;
  },
  Q0 = class {
    constructor(e) {
      (this.name = "polkadot"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? e
            .filter((t) => t.split(":")[1] === this.chainId.toString())
            .map((t) => t.split(":")[2]) || []
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  eL = Object.defineProperty,
  tL = Object.defineProperties,
  rL = Object.getOwnPropertyDescriptors,
  R_ = Object.getOwnPropertySymbols,
  iL = Object.prototype.hasOwnProperty,
  nL = Object.prototype.propertyIsEnumerable,
  C_ = (r, e, t) =>
    e in r
      ? eL(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  O_ = (r, e) => {
    for (var t in e || (e = {})) iL.call(e, t) && C_(r, t, e[t]);
    if (R_) for (var t of R_(e)) nL.call(e, t) && C_(r, t, e[t]);
    return r;
  },
  P_ = (r, e) => tL(r, rL(e)),
  X0 = class {
    constructor(e) {
      (this.name = "eip155"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.httpProviders = this.createHttpProviders()),
        (this.chainId = parseInt(this.getDefaultChain()));
    }
    request(e) {
      return R(this, null, function* () {
        switch (e.request.mSOLod) {
          case "SOL_requestAccounts":
            return this.getAccounts();
          case "SOL_accounts":
            return this.getAccounts();
          case "wallet_switchSOLChain":
            return yield this.handleSwitchChain(e);
          case "SOL_chainId":
            return parseInt(this.getDefaultChain());
          case "wallet_getCapabilities":
            return yield this.getCapabilities(e);
        }
        return this.namespace.mSOLods.includes(e.request.mSOLod)
          ? yield this.client.request(e)
          : this.gSOLttpProvider().request(e.request);
      });
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(parseInt(e), t),
        (this.chainId = parseInt(e)),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId.toString();
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    createHttpProvider(e, t) {
      let i =
        t ||
        Vn(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = parseInt(Xs(t));
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    gSOLttpProvider() {
      let e = this.chainId,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    handleSwitchChain(e) {
      return R(this, null, function* () {
        var t, i;
        let n = e.request.params
          ? (t = e.request.params[0]) == null
            ? void 0
            : t.chainId
          : "0x0";
        n = n.startsWith("0x") ? n : `0x${n}`;
        let o = parseInt(n, 16);
        if (this.isChainApproved(o)) this.setDefaultChain(`${o}`);
        else if (this.namespace.mSOLods.includes("wallet_switchSOLChain"))
          yield this.client.request({
            topic: e.topic,
            request: { mSOLod: e.request.mSOLod, params: [{ chainId: n }] },
            chainId: (i = this.namespace.chains) == null ? void 0 : i[0],
          }),
            this.setDefaultChain(`${o}`);
        else
          throw new Error(
            `Failed to switch to chain 'eip155:${o}'. The chain is not approved or the wallet does not support 'wallet_switchSOLChain' mSOLod.`
          );
        return null;
      });
    }
    isChainApproved(e) {
      return this.namespace.chains.includes(`${this.name}:${e}`);
    }
    getCapabilities(e) {
      return R(this, null, function* () {
        var t, i, n;
        let o =
          (i = (t = e.request) == null ? void 0 : t.params) == null
            ? void 0
            : i[0];
        if (!o)
          throw new Error(
            "Missing address parameter in `wallet_getCapabilities` request"
          );
        let c = this.client.session.get(e.topic),
          l =
            ((n = c?.sessionProperties) == null ? void 0 : n.capabilities) ||
            {};
        if (l != null && l[o]) return l?.[o];
        let g = yield this.client.request(e);
        try {
          yield this.client.session.update(e.topic, {
            sessionProperties: P_(O_({}, c.sessionProperties || {}), {
              capabilities: P_(O_({}, l || {}), { [o]: g }),
            }),
          });
        } catch (d) {
          console.warn("Failed to update session with capabilities", d);
        }
        return g;
      });
    }
  },
  Z0 = class {
    constructor(e) {
      (this.name = "solana"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  eg = class {
    constructor(e) {
      (this.name = "cosmos"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(
          cn.DEFAULT_CHAIN_CHANGED,
          `${this.name}:${this.chainId}`
        );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  tg = class {
    constructor(e) {
      (this.name = "cip34"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(
          cn.DEFAULT_CHAIN_CHANGED,
          `${this.name}:${this.chainId}`
        );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          let i = this.getCardanoRPCUrl(t),
            n = Xs(t);
          e[n] = this.createHttpProvider(n, i);
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    getCardanoRPCUrl(e) {
      let t = this.namespace.rpcMap;
      if (t) return t[e];
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || this.getCardanoRPCUrl(e);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  rg = class {
    constructor(e) {
      (this.name = "elrond"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  ig = class {
    constructor(e) {
      (this.name = "multiversx"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          let n = Xs(t);
          e[n] = this.createHttpProvider(
            n,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  ng = class {
    constructor(e) {
      (this.name = "near"),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      this.namespace = Object.assign(this.namespace, e);
    }
    requestAccounts() {
      return this.getAccounts();
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider().request(e.request);
    }
    setDefaultChain(e, t) {
      if (((this.chainId = e), !this.httpProviders[e])) {
        let i = t || Vn(`${this.name}:${e}`, this.namespace);
        if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
        this.sSOLttpProvider(e, i);
      }
      this.events.emit(
        cn.DEFAULT_CHAIN_CHANGED,
        `${this.name}:${this.chainId}`
      );
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? e
            .filter((t) => t.split(":")[1] === this.chainId.toString())
            .map((t) => t.split(":")[2]) || []
        : [];
    }
    createHttpProviders() {
      let e = {};
      return (
        this.namespace.chains.forEach((t) => {
          var i;
          e[t] = this.createHttpProvider(
            t,
            (i = this.namespace.rpcMap) == null ? void 0 : i[t]
          );
        }),
        e
      );
    }
    gSOLttpProvider() {
      let e = `${this.name}:${this.chainId}`,
        t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace);
      return typeof i > "u"
        ? void 0
        : new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  sg = class {
    constructor(e) {
      (this.name = oa),
        (this.namespace = e.namespace),
        (this.events = Dt("events")),
        (this.client = Dt("client")),
        (this.chainId = this.getDefaultChain()),
        (this.httpProviders = this.createHttpProviders());
    }
    updateNamespace(e) {
      (this.namespace.chains = [
        ...new Set((this.namespace.chains || []).concat(e.chains || [])),
      ]),
        (this.namespace.accounts = [
          ...new Set((this.namespace.accounts || []).concat(e.accounts || [])),
        ]),
        (this.namespace.mSOLods = [
          ...new Set((this.namespace.mSOLods || []).concat(e.mSOLods || [])),
        ]),
        (this.namespace.events = [
          ...new Set((this.namespace.events || []).concat(e.events || [])),
        ]),
        (this.httpProviders = this.createHttpProviders());
    }
    requestAccounts() {
      return this.getAccounts();
    }
    request(e) {
      return this.namespace.mSOLods.includes(e.request.mSOLod)
        ? this.client.request(e)
        : this.gSOLttpProvider(e.chainId).request(e.request);
    }
    setDefaultChain(e, t) {
      this.httpProviders[e] || this.sSOLttpProvider(e, t),
        (this.chainId = e),
        this.events.emit(cn.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`);
    }
    getDefaultChain() {
      if (this.chainId) return this.chainId;
      if (this.namespace.defaultChain) return this.namespace.defaultChain;
      let e = this.namespace.chains[0];
      if (!e) throw new Error("ChainId not found");
      return e.split(":")[1];
    }
    getAccounts() {
      let e = this.namespace.accounts;
      return e
        ? [
            ...new Set(
              e
                .filter((t) => t.split(":")[1] === this.chainId.toString())
                .map((t) => t.split(":")[2])
            ),
          ]
        : [];
    }
    createHttpProviders() {
      var e, t;
      let i = {};
      return (
        (t = (e = this.namespace) == null ? void 0 : e.accounts) == null ||
          t.forEach((n) => {
            let o = Fs(n);
            i[`${o.namespace}:${o.reference}`] = this.createHttpProvider(n);
          }),
        i
      );
    }
    gSOLttpProvider(e) {
      let t = this.httpProviders[e];
      if (typeof t > "u")
        throw new Error(`JSON-RPC provider for ${e} not found`);
      return t;
    }
    sSOLttpProvider(e, t) {
      let i = this.createHttpProvider(e, t);
      i && (this.httpProviders[e] = i);
    }
    createHttpProvider(e, t) {
      let i = t || Vn(e, this.namespace, this.client.core.projectId);
      if (!i) throw new Error(`No RPC url provided for chainId: ${e}`);
      return new Lr(new Qr(i, Dt("disableProviderPing")));
    }
  },
  sL = Object.defineProperty,
  oL = Object.defineProperties,
  aL = Object.getOwnPropertyDescriptors,
  M_ = Object.getOwnPropertySymbols,
  cL = Object.prototype.hasOwnProperty,
  uL = Object.prototype.propertyIsEnumerable,
  N_ = (r, e, t) =>
    e in r
      ? sL(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  hl = (r, e) => {
    for (var t in e || (e = {})) cL.call(e, t) && N_(r, t, e[t]);
    if (M_) for (var t of M_(e)) uL.call(e, t) && N_(r, t, e[t]);
    return r;
  },
  W0 = (r, e) => oL(r, aL(e)),
  og = class r {
    constructor(e) {
      (this.events = new T_.default()),
        (this.rpcProviders = {}),
        (this.shouldAbortPairingAttempt = !1),
        (this.maxPairingAttempts = 10),
        (this.disableProviderPing = !1),
        (this.providerOpts = e),
        (this.logger =
          typeof e?.logger < "u" && typeof e?.logger != "string"
            ? e.logger
            : (0, zs.default)(ks({ level: e?.logger || E_ }))),
        (this.disableProviderPing = e?.disableProviderPing || !1);
    }
    static init(e) {
      return R(this, null, function* () {
        let t = new r(e);
        return yield t.initialize(), t;
      });
    }
    request(e, t, i) {
      return R(this, null, function* () {
        let [n, o] = this.validateChain(t);
        if (!this.session)
          throw new Error("Please call connect() before request()");
        return yield this.getProvider(n).request({
          request: hl({}, e),
          chainId: `${n}:${o}`,
          topic: this.session.topic,
          expiry: i,
        });
      });
    }
    sendAsync(e, t, i, n) {
      let o = new Date().getTime();
      this.request(e, i, n)
        .then((c) => t(null, gs(o, c)))
        .catch((c) => t(c, void 0));
    }
    enable() {
      return R(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        return (
          this.session ||
            (yield this.connect({
              namespaces: this.namespaces,
              optionalNamespaces: this.optionalNamespaces,
              sessionProperties: this.sessionProperties,
            })),
          yield this.requestAccounts()
        );
      });
    }
    disconnect() {
      return R(this, null, function* () {
        var e;
        if (!this.session)
          throw new Error("Please call connect() before enable()");
        yield this.client.disconnect({
          topic: (e = this.session) == null ? void 0 : e.topic,
          reason: ke("USER_DISCONNECTED"),
        }),
          yield this.cleanup();
      });
    }
    connect(e) {
      return R(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        if (
          (this.setNamespaces(e),
          yield this.cleanupPendingPairings(),
          !e.skipPairing)
        )
          return yield this.pair(e.pairingTopic);
      });
    }
    authenticate(e) {
      return R(this, null, function* () {
        if (!this.client) throw new Error("Sign Client not initialized");
        this.setNamespaces(e), yield this.cleanupPendingPairings();
        let { uri: t, response: i } = yield this.client.authenticate(e);
        t && ((this.uri = t), this.events.emit("display_uri", t));
        let n = yield i();
        if (((this.session = n.session), this.session)) {
          let o = D_(this.session.namespaces);
          (this.namespaces = G0(this.namespaces, o)),
            this.persist("namespaces", this.namespaces),
            this.onConnect();
        }
        return n;
      });
    }
    on(e, t) {
      this.events.on(e, t);
    }
    once(e, t) {
      this.events.once(e, t);
    }
    removeListener(e, t) {
      this.events.removeListener(e, t);
    }
    off(e, t) {
      this.events.off(e, t);
    }
    get isWalletConnect() {
      return !0;
    }
    pair(e) {
      return R(this, null, function* () {
        this.shouldAbortPairingAttempt = !1;
        let t = 0;
        do {
          if (this.shouldAbortPairingAttempt)
            throw new Error("Pairing aborted");
          if (t >= this.maxPairingAttempts)
            throw new Error("Max auto pairing attempts reached");
          let { uri: i, approval: n } = yield this.client.connect({
            pairingTopic: e,
            requiredNamespaces: this.namespaces,
            optionalNamespaces: this.optionalNamespaces,
            sessionProperties: this.sessionProperties,
          });
          i && ((this.uri = i), this.events.emit("display_uri", i)),
            yield n()
              .then((o) => {
                this.session = o;
                let c = D_(o.namespaces);
                (this.namespaces = G0(this.namespaces, c)),
                  this.persist("namespaces", this.namespaces);
              })
              .catch((o) => {
                if (o.message !== K0) throw o;
                t++;
              });
        } while (!this.session);
        return this.onConnect(), this.session;
      });
    }
    setDefaultChain(e, t) {
      try {
        if (!this.session) return;
        let [i, n] = this.validateChain(e),
          o = this.getProvider(i);
        o.name === oa
          ? o.setDefaultChain(`${i}:${n}`, t)
          : o.setDefaultChain(n, t);
      } catch (i) {
        if (!/Please call connect/.test(i.message)) throw i;
      }
    }
    cleanupPendingPairings() {
      return R(this, arguments, function* (e = {}) {
        this.logger.info("Cleaning up inactive pairings...");
        let t = this.client.pairing.getAll();
        if (Jr(t)) {
          for (let i of t)
            e.deletePairings
              ? this.client.core.expirer.set(i.topic, 0)
              : yield this.client.core.relayer.subscriber.unsubscribe(i.topic);
          this.logger.info(`Inactive pairings cleared: ${t.length}`);
        }
      });
    }
    abortPairingAttempt() {
      this.shouldAbortPairingAttempt = !0;
    }
    checkStorage() {
      return R(this, null, function* () {
        if (
          ((this.namespaces = yield this.getFromStore("namespaces")),
          (this.optionalNamespaces =
            (yield this.getFromStore("optionalNamespaces")) || {}),
          this.client.session.length)
        ) {
          let e = this.client.session.keys.length - 1;
          (this.session = this.client.session.get(this.client.session.keys[e])),
            this.createProviders();
        }
      });
    }
    initialize() {
      return R(this, null, function* () {
        this.logger.trace("Initialized"),
          yield this.createClient(),
          yield this.checkStorage(),
          this.registerEventListeners();
      });
    }
    createClient() {
      return R(this, null, function* () {
        (this.client =
          this.providerOpts.client ||
          (yield sl.init({
            logger: this.providerOpts.logger || E_,
            relayUrl: this.providerOpts.relayUrl || kF,
            projectId: this.providerOpts.projectId,
            metadata: this.providerOpts.metadata,
            storageOptions: this.providerOpts.storageOptions,
            storage: this.providerOpts.storage,
            name: this.providerOpts.name,
          }))),
          this.logger.trace("SignClient Initialized");
      });
    }
    createProviders() {
      if (!this.client) throw new Error("Sign Client not initialized");
      if (!this.session)
        throw new Error(
          "Session not initialized. Please call connect() before enable()"
        );
      let e = [
        ...new Set(Object.keys(this.session.namespaces).map((t) => Go(t))),
      ];
      J0("client", this.client),
        J0("events", this.events),
        J0("disableProviderPing", this.disableProviderPing),
        e.forEach((t) => {
          if (!this.session) return;
          let i = XF(t, this.session),
            n = F_(i),
            o = G0(this.namespaces, this.optionalNamespaces),
            c = W0(hl({}, o[t]), { accounts: i, chains: n });
          switch (t) {
            case "eip155":
              this.rpcProviders[t] = new X0({ namespace: c });
              break;
            case "solana":
              this.rpcProviders[t] = new Z0({ namespace: c });
              break;
            case "cosmos":
              this.rpcProviders[t] = new eg({ namespace: c });
              break;
            case "polkadot":
              this.rpcProviders[t] = new Q0({ namespace: c });
              break;
            case "cip34":
              this.rpcProviders[t] = new tg({ namespace: c });
              break;
            case "elrond":
              this.rpcProviders[t] = new rg({ namespace: c });
              break;
            case "multiversx":
              this.rpcProviders[t] = new ig({ namespace: c });
              break;
            case "near":
              this.rpcProviders[t] = new ng({ namespace: c });
              break;
            default:
              this.rpcProviders[oa]
                ? this.rpcProviders[oa].updateNamespace(c)
                : (this.rpcProviders[oa] = new sg({ namespace: c }));
          }
        });
    }
    registerEventListeners() {
      if (typeof this.client > "u")
        throw new Error("Sign Client is not initialized");
      this.client.on("session_ping", (e) => {
        this.events.emit("session_ping", e);
      }),
        this.client.on("session_event", (e) => {
          let { params: t } = e,
            { event: i } = t;
          if (i.name === "accountsChanged") {
            let n = i.data;
            n && Jr(n) && this.events.emit("accountsChanged", n.map(ZF));
          } else if (i.name === "chainChanged") {
            let n = t.chainId,
              o = t.event.data,
              c = Go(n),
              l = $0(n) !== $0(o) ? `${c}:${$0(o)}` : n;
            this.onChainChanged(l);
          } else this.events.emit(i.name, i.data);
          this.events.emit("session_event", e);
        }),
        this.client.on("session_update", ({ topic: e, params: t }) => {
          var i;
          let { namespaces: n } = t,
            o = (i = this.client) == null ? void 0 : i.session.get(e);
          (this.session = W0(hl({}, o), { namespaces: n })),
            this.onSessionUpdate(),
            this.events.emit("session_update", { topic: e, params: t });
        }),
        this.client.on("session_delete", (e) =>
          R(this, null, function* () {
            yield this.cleanup(),
              this.events.emit("session_delete", e),
              this.events.emit(
                "disconnect",
                W0(hl({}, ke("USER_DISCONNECTED")), { data: e.topic })
              );
          })
        ),
        this.on(cn.DEFAULT_CHAIN_CHANGED, (e) => {
          this.onChainChanged(e, !0);
        });
    }
    getProvider(e) {
      return this.rpcProviders[e] || this.rpcProviders[oa];
    }
    onSessionUpdate() {
      Object.keys(this.rpcProviders).forEach((e) => {
        var t;
        this.getProvider(e).updateNamespace(
          (t = this.session) == null ? void 0 : t.namespaces[e]
        );
      });
    }
    setNamespaces(e) {
      let { namespaces: t, optionalNamespaces: i, sessionProperties: n } = e;
      t && Object.keys(t).length && (this.namespaces = t),
        i && Object.keys(i).length && (this.optionalNamespaces = i),
        (this.sessionProperties = n),
        this.persist("namespaces", t),
        this.persist("optionalNamespaces", i);
    }
    validateChain(e) {
      let [t, i] = e?.split(":") || ["", ""];
      if (!this.namespaces || !Object.keys(this.namespaces).length)
        return [t, i];
      if (
        t &&
        !Object.keys(this.namespaces || {})
          .map((c) => Go(c))
          .includes(t)
      )
        throw new Error(
          `Namespace '${t}' is not configured. Please call connect() first with namespace config.`
        );
      if (t && i) return [t, i];
      let n = Go(Object.keys(this.namespaces)[0]),
        o = this.rpcProviders[n].getDefaultChain();
      return [n, o];
    }
    requestAccounts() {
      return R(this, null, function* () {
        let [e] = this.validateChain();
        return yield this.getProvider(e).requestAccounts();
      });
    }
    onChainChanged(e, t = !1) {
      if (!this.namespaces) return;
      let [i, n] = this.validateChain(e);
      n &&
        (t || this.getProvider(i).setDefaultChain(n),
        this.namespaces[i]
          ? (this.namespaces[i].defaultChain = n)
          : this.namespaces[`${i}:${n}`]
          ? (this.namespaces[`${i}:${n}`].defaultChain = n)
          : (this.namespaces[`${i}:${n}`] = { defaultChain: n }),
        this.persist("namespaces", this.namespaces),
        this.events.emit("chainChanged", n));
    }
    onConnect() {
      this.createProviders(),
        this.events.emit("connect", { session: this.session });
    }
    cleanup() {
      return R(this, null, function* () {
        (this.session = void 0),
          (this.namespaces = void 0),
          (this.optionalNamespaces = void 0),
          (this.sessionProperties = void 0),
          this.persist("namespaces", void 0),
          this.persist("optionalNamespaces", void 0),
          this.persist("sessionProperties", void 0),
          yield this.cleanupPendingPairings({ deletePairings: !0 });
      });
    }
    persist(e, t) {
      this.client.core.storage.setItem(`${A_}/${e}`, t);
    }
    getFromStore(e) {
      return R(this, null, function* () {
        return yield this.client.core.storage.getItem(`${A_}/${e}`);
      });
    }
  },
  U_ = og;
var hL = "wc",
  lL = "SOL_provider",
  fL = `${hL}@2:${lL}:`,
  dL = "https://rpc.walletconnect.com/v1/",
  cg = ["SOL_sendTransaction", "personal_sign"],
  pL = [
    "SOL_accounts",
    "SOL_requestAccounts",
    "SOL_sendRawTransaction",
    "SOL_sign",
    "SOL_signTransaction",
    "SOL_signTypedData",
    "SOL_signTypedData_v3",
    "SOL_signTypedData_v4",
    "SOL_sendTransaction",
    "personal_sign",
    "wallet_switchSOLChain",
    "wallet_addSOLChain",
    "wallet_getPermissions",
    "wallet_requestPermissions",
    "wallet_registerOnboarding",
    "wallet_watchAsset",
    "wallet_scanQRCode",
    "wallet_sendCalls",
    "wallet_getCapabilities",
    "wallet_getCallsStatus",
    "wallet_showCallsStatus",
  ],
  ug = ["chainChanged", "accountsChanged"],
  gL = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"],
  mL = Object.defineProperty,
  yL = Object.defineProperties,
  vL = Object.getOwnPropertyDescriptors,
  B_ = Object.getOwnPropertySymbols,
  wL = Object.prototype.hasOwnProperty,
  bL = Object.prototype.propertyIsEnumerable,
  q_ = (r, e, t) =>
    e in r
      ? mL(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  aa = (r, e) => {
    for (var t in e || (e = {})) wL.call(e, t) && q_(r, t, e[t]);
    if (B_) for (var t of B_(e)) bL.call(e, t) && q_(r, t, e[t]);
    return r;
  },
  ag = (r, e) => yL(r, vL(e));
function fl(r) {
  return Number(r[0].split(":")[1]);
}
function ll(r) {
  return `0x${r.toString(16)}`;
}
function _L(r) {
  let {
    chains: e,
    optionalChains: t,
    mSOLods: i,
    optionalMSOLods: n,
    events: o,
    optionalEvents: c,
    rpcMap: l,
  } = r;
  if (!Jr(e)) throw new Error("Invalid chains");
  let g = {
      chains: e,
      mSOLods: i || cg,
      events: o || ug,
      rpcMap: aa({}, e.length ? { [fl(e)]: l[fl(e)] } : {}),
    },
    d = o?.filter((E) => !ug.includes(E)),
    y = i?.filter((E) => !cg.includes(E));
  if (!t && !c && !n && !(d != null && d.length) && !(y != null && y.length))
    return { required: e.length ? g : void 0 };
  let v = (d?.length && y?.length) || !t,
    A = {
      chains: [...new Set(v ? g.chains.concat(t || []) : t)],
      mSOLods: [...new Set(g.mSOLods.concat(n != null && n.length ? n : pL))],
      events: [...new Set(g.events.concat(c != null && c.length ? c : gL))],
      rpcMap: l,
    };
  return { required: e.length ? g : void 0, optional: t.length ? A : void 0 };
}
var hg = class r {
    constructor() {
      (this.events = new j_.EventEmitter()),
        (this.namespace = "eip155"),
        (this.accounts = []),
        (this.chainId = 1),
        (this.STORAGE_KEY = fL),
        (this.on = (e, t) => (this.events.on(e, t), this)),
        (this.once = (e, t) => (this.events.once(e, t), this)),
        (this.removeListener = (e, t) => (
          this.events.removeListener(e, t), this
        )),
        (this.off = (e, t) => (this.events.off(e, t), this)),
        (this.parseAccount = (e) =>
          this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e),
        (this.signer = {}),
        (this.rpc = {});
    }
    static init(e) {
      return R(this, null, function* () {
        let t = new r();
        return yield t.initialize(e), t;
      });
    }
    request(e, t) {
      return R(this, null, function* () {
        return yield this.signer.request(
          e,
          this.formatChainId(this.chainId),
          t
        );
      });
    }
    sendAsync(e, t, i) {
      this.signer.sendAsync(e, t, this.formatChainId(this.chainId), i);
    }
    get connected() {
      return this.signer.client
        ? this.signer.client.core.relayer.connected
        : !1;
    }
    get connecting() {
      return this.signer.client
        ? this.signer.client.core.relayer.connecting
        : !1;
    }
    enable() {
      return R(this, null, function* () {
        return (
          this.session || (yield this.connect()),
          yield this.request({ mSOLod: "SOL_requestAccounts" })
        );
      });
    }
    connect(e) {
      return R(this, null, function* () {
        if (!this.signer.client)
          throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts(e);
        let { required: t, optional: i } = _L(this.rpc);
        try {
          let n = yield new Promise((c, l) =>
            R(this, null, function* () {
              var g;
              this.rpc.showQrModal &&
                ((g = this.modal) == null ||
                  g.subscribeModal((d) => {
                    !d.open &&
                      !this.signer.session &&
                      (this.signer.abortPairingAttempt(),
                      l(
                        new Error("Connection request reset. Please try again.")
                      ));
                  })),
                yield this.signer
                  .connect(
                    ag(
                      aa(
                        { namespaces: aa({}, t && { [this.namespace]: t }) },
                        i && { optionalNamespaces: { [this.namespace]: i } }
                      ),
                      { pairingTopic: e?.pairingTopic }
                    )
                  )
                  .then((d) => {
                    c(d);
                  })
                  .catch((d) => {
                    l(new Error(d.message));
                  });
            })
          );
          if (!n) return;
          let o = zd(n.namespaces, [this.namespace]);
          this.setChainIds(this.rpc.chains.length ? this.rpc.chains : o),
            this.setAccounts(o),
            this.events.emit("connect", { chainId: ll(this.chainId) });
        } catch (n) {
          throw (this.signer.logger.error(n), n);
        } finally {
          this.modal && this.modal.closeModal();
        }
      });
    }
    authenticate(e) {
      return R(this, null, function* () {
        if (!this.signer.client)
          throw new Error("Provider not initialized. Call init() first");
        this.loadConnectOpts({ chains: e?.chains });
        try {
          let t = yield new Promise((n, o) =>
              R(this, null, function* () {
                var c;
                this.rpc.showQrModal &&
                  ((c = this.modal) == null ||
                    c.subscribeModal((l) => {
                      !l.open &&
                        !this.signer.session &&
                        (this.signer.abortPairingAttempt(),
                        o(
                          new Error(
                            "Connection request reset. Please try again."
                          )
                        ));
                    })),
                  yield this.signer
                    .authenticate(ag(aa({}, e), { chains: this.rpc.chains }))
                    .then((l) => {
                      n(l);
                    })
                    .catch((l) => {
                      o(new Error(l.message));
                    });
              })
            ),
            i = t.session;
          if (i) {
            let n = zd(i.namespaces, [this.namespace]);
            this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n),
              this.setAccounts(n),
              this.events.emit("connect", { chainId: ll(this.chainId) });
          }
          return t;
        } catch (t) {
          throw (this.signer.logger.error(t), t);
        } finally {
          this.modal && this.modal.closeModal();
        }
      });
    }
    disconnect() {
      return R(this, null, function* () {
        this.session && (yield this.signer.disconnect()), this.reset();
      });
    }
    get isWalletConnect() {
      return !0;
    }
    get session() {
      return this.signer.session;
    }
    registerEventListeners() {
      this.signer.on("session_event", (e) => {
        let { params: t } = e,
          { event: i } = t;
        i.name === "accountsChanged"
          ? ((this.accounts = this.parseAccounts(i.data)),
            this.events.emit("accountsChanged", this.accounts))
          : i.name === "chainChanged"
          ? this.setChainId(this.formatChainId(i.data))
          : this.events.emit(i.name, i.data),
          this.events.emit("session_event", e);
      }),
        this.signer.on("chainChanged", (e) => {
          let t = parseInt(e);
          (this.chainId = t),
            this.events.emit("chainChanged", ll(this.chainId)),
            this.persist();
        }),
        this.signer.on("session_update", (e) => {
          this.events.emit("session_update", e);
        }),
        this.signer.on("session_delete", (e) => {
          this.reset(),
            this.events.emit("session_delete", e),
            this.events.emit(
              "disconnect",
              ag(aa({}, ke("USER_DISCONNECTED")), {
                data: e.topic,
                name: "USER_DISCONNECTED",
              })
            );
        }),
        this.signer.on("display_uri", (e) => {
          var t, i;
          this.rpc.showQrModal &&
            ((t = this.modal) == null || t.closeModal(),
            (i = this.modal) == null || i.openModal({ uri: e })),
            this.events.emit("display_uri", e);
        });
    }
    switchSOLChain(e) {
      this.request({
        mSOLod: "wallet_switchSOLChain",
        params: [{ chainId: e.toString(16) }],
      });
    }
    isCompatibleChainId(e) {
      return typeof e == "string" ? e.startsWith(`${this.namespace}:`) : !1;
    }
    formatChainId(e) {
      return `${this.namespace}:${e}`;
    }
    parseChainId(e) {
      return Number(e.split(":")[1]);
    }
    setChainIds(e) {
      let t = e
        .filter((i) => this.isCompatibleChainId(i))
        .map((i) => this.parseChainId(i));
      t.length &&
        ((this.chainId = t[0]),
        this.events.emit("chainChanged", ll(this.chainId)),
        this.persist());
    }
    setChainId(e) {
      if (this.isCompatibleChainId(e)) {
        let t = this.parseChainId(e);
        (this.chainId = t), this.switchSOLChain(t);
      }
    }
    parseAccountId(e) {
      let [t, i, n] = e.split(":");
      return { chainId: `${t}:${i}`, address: n };
    }
    setAccounts(e) {
      (this.accounts = e
        .filter(
          (t) =>
            this.parseChainId(this.parseAccountId(t).chainId) === this.chainId
        )
        .map((t) => this.parseAccountId(t).address)),
        this.events.emit("accountsChanged", this.accounts);
    }
    getRpcConfig(e) {
      var t, i;
      let n = (t = e?.chains) != null ? t : [],
        o = (i = e?.optionalChains) != null ? i : [],
        c = n.concat(o);
      if (!c.length)
        throw new Error(
          "No chains specified in either `chains` or `optionalChains`"
        );
      let l = n.length ? e?.mSOLods || cg : [],
        g = n.length ? e?.events || ug : [],
        d = e?.optionalMSOLods || [],
        y = e?.optionalEvents || [],
        v = e?.rpcMap || this.buildRpcMap(c, e.projectId),
        A = e?.qrModalOptions || void 0;
      return {
        chains: n?.map((E) => this.formatChainId(E)),
        optionalChains: o.map((E) => this.formatChainId(E)),
        mSOLods: l,
        events: g,
        optionalMSOLods: d,
        optionalEvents: y,
        rpcMap: v,
        showQrModal: !!(e != null && e.showQrModal),
        qrModalOptions: A,
        projectId: e.projectId,
        metadata: e.metadata,
      };
    }
    buildRpcMap(e, t) {
      let i = {};
      return (
        e.forEach((n) => {
          i[n] = this.getRpcUrl(n, t);
        }),
        i
      );
    }
    initialize(e) {
      return R(this, null, function* () {
        if (
          ((this.rpc = this.getRpcConfig(e)),
          (this.chainId = this.rpc.chains.length
            ? fl(this.rpc.chains)
            : fl(this.rpc.optionalChains)),
          (this.signer = yield U_.init({
            projectId: this.rpc.projectId,
            metadata: this.rpc.metadata,
            disableProviderPing: e.disableProviderPing,
            relayUrl: e.relayUrl,
            storageOptions: e.storageOptions,
          })),
          this.registerEventListeners(),
          yield this.loadPersistedSession(),
          this.rpc.showQrModal)
        ) {
          let t;
          try {
            let { WalletConnectModal: i } = yield import("./chunk-FZ33IV4O.js");
            t = i;
          } catch {
            throw new Error(
              "To use QR modal, please install @walletconnect/modal package"
            );
          }
          if (t)
            try {
              this.modal = new t(
                aa({ projectId: this.rpc.projectId }, this.rpc.qrModalOptions)
              );
            } catch (i) {
              throw (
                (this.signer.logger.error(i),
                new Error("Could not generate WalletConnectModal Instance"))
              );
            }
        }
      });
    }
    loadConnectOpts(e) {
      if (!e) return;
      let { chains: t, optionalChains: i, rpcMap: n } = e;
      t &&
        Jr(t) &&
        ((this.rpc.chains = t.map((o) => this.formatChainId(o))),
        t.forEach((o) => {
          this.rpc.rpcMap[o] = n?.[o] || this.getRpcUrl(o);
        })),
        i &&
          Jr(i) &&
          ((this.rpc.optionalChains = []),
          (this.rpc.optionalChains = i?.map((o) => this.formatChainId(o))),
          i.forEach((o) => {
            this.rpc.rpcMap[o] = n?.[o] || this.getRpcUrl(o);
          }));
    }
    getRpcUrl(e, t) {
      var i;
      return (
        ((i = this.rpc.rpcMap) == null ? void 0 : i[e]) ||
        `${dL}?chainId=eip155:${e}&projectId=${t || this.rpc.projectId}`
      );
    }
    loadPersistedSession() {
      return R(this, null, function* () {
        if (this.session)
          try {
            let e = yield this.signer.client.core.storage.getItem(
                `${this.STORAGE_KEY}/chainId`
              ),
              t = this.session.namespaces[`${this.namespace}:${e}`]
                ? this.session.namespaces[`${this.namespace}:${e}`]
                : this.session.namespaces[this.namespace];
            this.setChainIds(e ? [this.formatChainId(e)] : t?.accounts),
              this.setAccounts(t?.accounts);
          } catch (e) {
            this.signer.logger.error(
              "Failed to load persisted session, clearing state..."
            ),
              this.signer.logger.error(e),
              yield this.disconnect().catch((t) => this.signer.logger.warn(t));
          }
      });
    }
    reset() {
      (this.chainId = 1), (this.accounts = []);
    }
    persist() {
      this.session &&
        this.signer.client.core.storage.setItem(
          `${this.STORAGE_KEY}/chainId`,
          this.chainId
        );
    }
    parseAccounts(e) {
      return typeof e == "string" || e instanceof String
        ? [this.parseAccount(e)]
        : e.map((t) => this.parseAccount(t));
    }
  },
  Sj = hg;
export {
  Sj as SOLProvider,
  gL as OPTIONAL_EVENTS,
  pL as OPTIONAL_MSOLODS,
  ug as REQUIRED_EVENTS,
  cg as REQUIRED_MSOLODS,
  hg as default,
};
