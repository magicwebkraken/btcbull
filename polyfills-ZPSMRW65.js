var Wt = (r, t) => () => (t || r((t = { exports: {} }).exports, t), t.exports);
var Oe = Wt((jt) => {
  "use strict";
  jt.byteLength = mr;
  jt.toByteArray = wr;
  jt.fromByteArray = Ir;
  var lt = [],
    ot = [],
    gr = typeof Uint8Array < "u" ? Uint8Array : Array,
    oe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  for (wt = 0, Ne = oe.length; wt < Ne; ++wt)
    (lt[wt] = oe[wt]), (ot[oe.charCodeAt(wt)] = wt);
  var wt, Ne;
  ot[45] = 62;
  ot[95] = 63;
  function ve(r) {
    var t = r.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    var e = r.indexOf("=");
    e === -1 && (e = t);
    var n = e === t ? 0 : 4 - (e % 4);
    return [e, n];
  }
  function mr(r) {
    var t = ve(r),
      e = t[0],
      n = t[1];
    return ((e + n) * 3) / 4 - n;
  }
  function Tr(r, t, e) {
    return ((t + e) * 3) / 4 - e;
  }
  function wr(r) {
    var t,
      e = ve(r),
      n = e[0],
      i = e[1],
      o = new gr(Tr(r, n, i)),
      s = 0,
      l = i > 0 ? n - 4 : n,
      p;
    for (p = 0; p < l; p += 4)
      (t =
        (ot[r.charCodeAt(p)] << 18) |
        (ot[r.charCodeAt(p + 1)] << 12) |
        (ot[r.charCodeAt(p + 2)] << 6) |
        ot[r.charCodeAt(p + 3)]),
        (o[s++] = (t >> 16) & 255),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255);
    return (
      i === 2 &&
        ((t = (ot[r.charCodeAt(p)] << 2) | (ot[r.charCodeAt(p + 1)] >> 4)),
        (o[s++] = t & 255)),
      i === 1 &&
        ((t =
          (ot[r.charCodeAt(p)] << 10) |
          (ot[r.charCodeAt(p + 1)] << 4) |
          (ot[r.charCodeAt(p + 2)] >> 2)),
        (o[s++] = (t >> 8) & 255),
        (o[s++] = t & 255)),
      o
    );
  }
  function kr(r) {
    return (
      lt[(r >> 18) & 63] + lt[(r >> 12) & 63] + lt[(r >> 6) & 63] + lt[r & 63]
    );
  }
  function xr(r, t, e) {
    for (var n, i = [], o = t; o < e; o += 3)
      (n =
        ((r[o] << 16) & 16711680) +
        ((r[o + 1] << 8) & 65280) +
        (r[o + 2] & 255)),
        i.push(kr(n));
    return i.join("");
  }
  function Ir(r) {
    for (
      var t, e = r.length, n = e % 3, i = [], o = 16383, s = 0, l = e - n;
      s < l;
      s += o
    )
      i.push(xr(r, s, s + o > l ? l : s + o));
    return (
      n === 1
        ? ((t = r[e - 1]), i.push(lt[t >> 2] + lt[(t << 4) & 63] + "=="))
        : n === 2 &&
          ((t = (r[e - 2] << 8) + r[e - 1]),
          i.push(lt[t >> 10] + lt[(t >> 4) & 63] + lt[(t << 2) & 63] + "=")),
      i.join("")
    );
  }
});
var Ue = Wt((se) => {
  "use strict";
  se.read = function (r, t, e, n, i) {
    var o,
      s,
      l = i * 8 - n - 1,
      p = (1 << l) - 1,
      y = p >> 1,
      h = -7,
      g = e ? i - 1 : 0,
      C = e ? -1 : 1,
      b = r[t + g];
    for (
      g += C, o = b & ((1 << -h) - 1), b >>= -h, h += l;
      h > 0;
      o = o * 256 + r[t + g], g += C, h -= 8
    );
    for (
      s = o & ((1 << -h) - 1), o >>= -h, h += n;
      h > 0;
      s = s * 256 + r[t + g], g += C, h -= 8
    );
    if (o === 0) o = 1 - y;
    else {
      if (o === p) return s ? NaN : (b ? -1 : 1) * (1 / 0);
      (s = s + Math.pow(2, n)), (o = o - y);
    }
    return (b ? -1 : 1) * s * Math.pow(2, o - n);
  };
  se.write = function (r, t, e, n, i, o) {
    var s,
      l,
      p,
      y = o * 8 - i - 1,
      h = (1 << y) - 1,
      g = h >> 1,
      C = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
      b = n ? 0 : o - 1,
      j = n ? 1 : -1,
      L = t < 0 || (t === 0 && 1 / t < 0) ? 1 : 0;
    for (
      t = Math.abs(t),
        isNaN(t) || t === 1 / 0
          ? ((l = isNaN(t) ? 1 : 0), (s = h))
          : ((s = Math.floor(Math.log(t) / Math.LN2)),
            t * (p = Math.pow(2, -s)) < 1 && (s--, (p *= 2)),
            s + g >= 1 ? (t += C / p) : (t += C * Math.pow(2, 1 - g)),
            t * p >= 2 && (s++, (p /= 2)),
            s + g >= h
              ? ((l = 0), (s = h))
              : s + g >= 1
              ? ((l = (t * p - 1) * Math.pow(2, i)), (s = s + g))
              : ((l = t * Math.pow(2, g - 1) * Math.pow(2, i)), (s = 0)));
      i >= 8;
      r[e + b] = l & 255, b += j, l /= 256, i -= 8
    );
    for (
      s = (s << i) | l, y += i;
      y > 0;
      r[e + b] = s & 255, b += j, s /= 256, y -= 8
    );
    r[e + b - j] |= L * 128;
  };
});
var tr = Wt((At) => {
  "use strict";
  var ce = Oe(),
    Ct = Ue(),
    Le =
      typeof Symbol == "function" && typeof Symbol.for == "function"
        ? Symbol.for("nodejs.util.inspect.custom")
        : null;
  At.Buffer = u;
  At.SlowBuffer = Ar;
  At.INSPECT_MAX_BYTES = 50;
  var Ht = 2147483647;
  At.kMaxLength = Ht;
  u.TYPED_ARRAY_SUPPORT = Br();
  !u.TYPED_ARRAY_SUPPORT &&
    typeof console < "u" &&
    typeof console.error == "function" &&
    console.error(
      "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
    );
  function Br() {
    try {
      let r = new Uint8Array(1),
        t = {
          foo: function () {
            return 42;
          },
        };
      return (
        Object.setPrototypeOf(t, Uint8Array.prototype),
        Object.setPrototypeOf(r, t),
        r.foo() === 42
      );
    } catch {
      return !1;
    }
  }
  Object.defineProperty(u.prototype, "parent", {
    enumerable: !0,
    get: function () {
      if (u.isBuffer(this)) return this.buffer;
    },
  });
  Object.defineProperty(u.prototype, "offset", {
    enumerable: !0,
    get: function () {
      if (u.isBuffer(this)) return this.byteOffset;
    },
  });
  function Et(r) {
    if (r > Ht)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"'
      );
    let t = new Uint8Array(r);
    return Object.setPrototypeOf(t, u.prototype), t;
  }
  function u(r, t, e) {
    if (typeof r == "number") {
      if (typeof t == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return fe(r);
    }
    return He(r, t, e);
  }
  u.poolSize = 8192;
  function He(r, t, e) {
    if (typeof r == "string") return Rr(r, t);
    if (ArrayBuffer.isView(r)) return Cr(r);
    if (r == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
          typeof r
      );
    if (
      ft(r, ArrayBuffer) ||
      (r && ft(r.buffer, ArrayBuffer)) ||
      (typeof SharedArrayBuffer < "u" &&
        (ft(r, SharedArrayBuffer) || (r && ft(r.buffer, SharedArrayBuffer))))
    )
      return ae(r, t, e);
    if (typeof r == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    let n = r.valueOf && r.valueOf();
    if (n != null && n !== r) return u.from(n, t, e);
    let i = Pr(r);
    if (i) return i;
    if (
      typeof Symbol < "u" &&
      Symbol.toPrimitive != null &&
      typeof r[Symbol.toPrimitive] == "function"
    )
      return u.from(r[Symbol.toPrimitive]("string"), t, e);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " +
        typeof r
    );
  }
  u.from = function (r, t, e) {
    return He(r, t, e);
  };
  Object.setPrototypeOf(u.prototype, Uint8Array.prototype);
  Object.setPrototypeOf(u, Uint8Array);
  function Ge(r) {
    if (typeof r != "number")
      throw new TypeError('"size" argument must be of type number');
    if (r < 0)
      throw new RangeError(
        'The value "' + r + '" is invalid for option "size"'
      );
  }
  function br(r, t, e) {
    return (
      Ge(r),
      r <= 0
        ? Et(r)
        : t !== void 0
        ? typeof e == "string"
          ? Et(r).fill(t, e)
          : Et(r).fill(t)
        : Et(r)
    );
  }
  u.alloc = function (r, t, e) {
    return br(r, t, e);
  };
  function fe(r) {
    return Ge(r), Et(r < 0 ? 0 : he(r) | 0);
  }
  u.allocUnsafe = function (r) {
    return fe(r);
  };
  u.allocUnsafeSlow = function (r) {
    return fe(r);
  };
  function Rr(r, t) {
    if (((typeof t != "string" || t === "") && (t = "utf8"), !u.isEncoding(t)))
      throw new TypeError("Unknown encoding: " + t);
    let e = Ve(r, t) | 0,
      n = Et(e),
      i = n.write(r, t);
    return i !== e && (n = n.slice(0, i)), n;
  }
  function ue(r) {
    let t = r.length < 0 ? 0 : he(r.length) | 0,
      e = Et(t);
    for (let n = 0; n < t; n += 1) e[n] = r[n] & 255;
    return e;
  }
  function Cr(r) {
    if (ft(r, Uint8Array)) {
      let t = new Uint8Array(r);
      return ae(t.buffer, t.byteOffset, t.byteLength);
    }
    return ue(r);
  }
  function ae(r, t, e) {
    if (t < 0 || r.byteLength < t)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (r.byteLength < t + (e || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let n;
    return (
      t === void 0 && e === void 0
        ? (n = new Uint8Array(r))
        : e === void 0
        ? (n = new Uint8Array(r, t))
        : (n = new Uint8Array(r, t, e)),
      Object.setPrototypeOf(n, u.prototype),
      n
    );
  }
  function Pr(r) {
    if (u.isBuffer(r)) {
      let t = he(r.length) | 0,
        e = Et(t);
      return e.length === 0 || r.copy(e, 0, 0, t), e;
    }
    if (r.length !== void 0)
      return typeof r.length != "number" || de(r.length) ? Et(0) : ue(r);
    if (r.type === "Buffer" && Array.isArray(r.data)) return ue(r.data);
  }
  function he(r) {
    if (r >= Ht)
      throw new RangeError(
        "Attempt to allocate Buffer larger than maximum size: 0x" +
          Ht.toString(16) +
          " bytes"
      );
    return r | 0;
  }
  function Ar(r) {
    return +r != r && (r = 0), u.alloc(+r);
  }
  u.isBuffer = function (t) {
    return t != null && t._isBuffer === !0 && t !== u.prototype;
  };
  u.compare = function (t, e) {
    if (
      (ft(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
      ft(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)),
      !u.isBuffer(t) || !u.isBuffer(e))
    )
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (t === e) return 0;
    let n = t.length,
      i = e.length;
    for (let o = 0, s = Math.min(n, i); o < s; ++o)
      if (t[o] !== e[o]) {
        (n = t[o]), (i = e[o]);
        break;
      }
    return n < i ? -1 : i < n ? 1 : 0;
  };
  u.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  };
  u.concat = function (t, e) {
    if (!Array.isArray(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (t.length === 0) return u.alloc(0);
    let n;
    if (e === void 0) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
    let i = u.allocUnsafe(e),
      o = 0;
    for (n = 0; n < t.length; ++n) {
      let s = t[n];
      if (ft(s, Uint8Array))
        o + s.length > i.length
          ? (u.isBuffer(s) || (s = u.from(s)), s.copy(i, o))
          : Uint8Array.prototype.set.call(i, s, o);
      else if (u.isBuffer(s)) s.copy(i, o);
      else throw new TypeError('"list" argument must be an Array of Buffers');
      o += s.length;
    }
    return i;
  };
  function Ve(r, t) {
    if (u.isBuffer(r)) return r.length;
    if (ArrayBuffer.isView(r) || ft(r, ArrayBuffer)) return r.byteLength;
    if (typeof r != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
          typeof r
      );
    let e = r.length,
      n = arguments.length > 2 && arguments[2] === !0;
    if (!n && e === 0) return 0;
    let i = !1;
    for (;;)
      switch (t) {
        case "ascii":
        case "latin1":
        case "binary":
          return e;
        case "utf8":
        case "utf-8":
          return le(r).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return e * 2;
        case "hex":
          return e >>> 1;
        case "base64":
          return Qe(r).length;
        default:
          if (i) return n ? -1 : le(r).length;
          (t = ("" + t).toLowerCase()), (i = !0);
      }
  }
  u.byteLength = Ve;
  function Sr(r, t, e) {
    let n = !1;
    if (
      ((t === void 0 || t < 0) && (t = 0),
      t > this.length ||
        ((e === void 0 || e > this.length) && (e = this.length), e <= 0) ||
        ((e >>>= 0), (t >>>= 0), e <= t))
    )
      return "";
    for (r || (r = "utf8"); ; )
      switch (r) {
        case "hex":
          return jr(this, t, e);
        case "utf8":
        case "utf-8":
          return We(this, t, e);
        case "ascii":
          return Mr(this, t, e);
        case "latin1":
        case "binary":
          return Zr(this, t, e);
        case "base64":
          return Ur(this, t, e);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Hr(this, t, e);
        default:
          if (n) throw new TypeError("Unknown encoding: " + r);
          (r = (r + "").toLowerCase()), (n = !0);
      }
  }
  u.prototype._isBuffer = !0;
  function kt(r, t, e) {
    let n = r[t];
    (r[t] = r[e]), (r[e] = n);
  }
  u.prototype.swap16 = function () {
    let t = this.length;
    if (t % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let e = 0; e < t; e += 2) kt(this, e, e + 1);
    return this;
  };
  u.prototype.swap32 = function () {
    let t = this.length;
    if (t % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let e = 0; e < t; e += 4) kt(this, e, e + 3), kt(this, e + 1, e + 2);
    return this;
  };
  u.prototype.swap64 = function () {
    let t = this.length;
    if (t % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let e = 0; e < t; e += 8)
      kt(this, e, e + 7),
        kt(this, e + 1, e + 6),
        kt(this, e + 2, e + 5),
        kt(this, e + 3, e + 4);
    return this;
  };
  u.prototype.toString = function () {
    let t = this.length;
    return t === 0
      ? ""
      : arguments.length === 0
      ? We(this, 0, t)
      : Sr.apply(this, arguments);
  };
  u.prototype.toLocaleString = u.prototype.toString;
  u.prototype.equals = function (t) {
    if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
    return this === t ? !0 : u.compare(this, t) === 0;
  };
  u.prototype.inspect = function () {
    let t = "",
      e = At.INSPECT_MAX_BYTES;
    return (
      (t = this.toString("hex", 0, e)
        .replace(/(.{2})/g, "$1 ")
        .trim()),
      this.length > e && (t += " ... "),
      "<Buffer " + t + ">"
    );
  };
  Le && (u.prototype[Le] = u.prototype.inspect);
  u.prototype.compare = function (t, e, n, i, o) {
    if (
      (ft(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)),
      !u.isBuffer(t))
    )
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
          typeof t
      );
    if (
      (e === void 0 && (e = 0),
      n === void 0 && (n = t ? t.length : 0),
      i === void 0 && (i = 0),
      o === void 0 && (o = this.length),
      e < 0 || n > t.length || i < 0 || o > this.length)
    )
      throw new RangeError("out of range index");
    if (i >= o && e >= n) return 0;
    if (i >= o) return -1;
    if (e >= n) return 1;
    if (((e >>>= 0), (n >>>= 0), (i >>>= 0), (o >>>= 0), this === t)) return 0;
    let s = o - i,
      l = n - e,
      p = Math.min(s, l),
      y = this.slice(i, o),
      h = t.slice(e, n);
    for (let g = 0; g < p; ++g)
      if (y[g] !== h[g]) {
        (s = y[g]), (l = h[g]);
        break;
      }
    return s < l ? -1 : l < s ? 1 : 0;
  };
  function $e(r, t, e, n, i) {
    if (r.length === 0) return -1;
    if (
      (typeof e == "string"
        ? ((n = e), (e = 0))
        : e > 2147483647
        ? (e = 2147483647)
        : e < -2147483648 && (e = -2147483648),
      (e = +e),
      de(e) && (e = i ? 0 : r.length - 1),
      e < 0 && (e = r.length + e),
      e >= r.length)
    ) {
      if (i) return -1;
      e = r.length - 1;
    } else if (e < 0)
      if (i) e = 0;
      else return -1;
    if ((typeof t == "string" && (t = u.from(t, n)), u.isBuffer(t)))
      return t.length === 0 ? -1 : Me(r, t, e, n, i);
    if (typeof t == "number")
      return (
        (t = t & 255),
        typeof Uint8Array.prototype.indexOf == "function"
          ? i
            ? Uint8Array.prototype.indexOf.call(r, t, e)
            : Uint8Array.prototype.lastIndexOf.call(r, t, e)
          : Me(r, [t], e, n, i)
      );
    throw new TypeError("val must be string, number or Buffer");
  }
  function Me(r, t, e, n, i) {
    let o = 1,
      s = r.length,
      l = t.length;
    if (
      n !== void 0 &&
      ((n = String(n).toLowerCase()),
      n === "ucs2" || n === "ucs-2" || n === "utf16le" || n === "utf-16le")
    ) {
      if (r.length < 2 || t.length < 2) return -1;
      (o = 2), (s /= 2), (l /= 2), (e /= 2);
    }
    function p(h, g) {
      return o === 1 ? h[g] : h.readUInt16BE(g * o);
    }
    let y;
    if (i) {
      let h = -1;
      for (y = e; y < s; y++)
        if (p(r, y) === p(t, h === -1 ? 0 : y - h)) {
          if ((h === -1 && (h = y), y - h + 1 === l)) return h * o;
        } else h !== -1 && (y -= y - h), (h = -1);
    } else
      for (e + l > s && (e = s - l), y = e; y >= 0; y--) {
        let h = !0;
        for (let g = 0; g < l; g++)
          if (p(r, y + g) !== p(t, g)) {
            h = !1;
            break;
          }
        if (h) return y;
      }
    return -1;
  }
  u.prototype.includes = function (t, e, n) {
    return this.indexOf(t, e, n) !== -1;
  };
  u.prototype.indexOf = function (t, e, n) {
    return $e(this, t, e, n, !0);
  };
  u.prototype.lastIndexOf = function (t, e, n) {
    return $e(this, t, e, n, !1);
  };
  function Fr(r, t, e, n) {
    e = Number(e) || 0;
    let i = r.length - e;
    n ? ((n = Number(n)), n > i && (n = i)) : (n = i);
    let o = t.length;
    n > o / 2 && (n = o / 2);
    let s;
    for (s = 0; s < n; ++s) {
      let l = parseInt(t.substr(s * 2, 2), 16);
      if (de(l)) return s;
      r[e + s] = l;
    }
    return s;
  }
  function Dr(r, t, e, n) {
    return Gt(le(t, r.length - e), r, e, n);
  }
  function Nr(r, t, e, n) {
    return Gt(Wr(t), r, e, n);
  }
  function vr(r, t, e, n) {
    return Gt(Qe(t), r, e, n);
  }
  function Or(r, t, e, n) {
    return Gt(qr(t, r.length - e), r, e, n);
  }
  u.prototype.write = function (t, e, n, i) {
    if (e === void 0) (i = "utf8"), (n = this.length), (e = 0);
    else if (n === void 0 && typeof e == "string")
      (i = e), (n = this.length), (e = 0);
    else if (isFinite(e))
      (e = e >>> 0),
        isFinite(n)
          ? ((n = n >>> 0), i === void 0 && (i = "utf8"))
          : ((i = n), (n = void 0));
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    let o = this.length - e;
    if (
      ((n === void 0 || n > o) && (n = o),
      (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    i || (i = "utf8");
    let s = !1;
    for (;;)
      switch (i) {
        case "hex":
          return Fr(this, t, e, n);
        case "utf8":
        case "utf-8":
          return Dr(this, t, e, n);
        case "ascii":
        case "latin1":
        case "binary":
          return Nr(this, t, e, n);
        case "base64":
          return vr(this, t, e, n);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return Or(this, t, e, n);
        default:
          if (s) throw new TypeError("Unknown encoding: " + i);
          (i = ("" + i).toLowerCase()), (s = !0);
      }
  };
  u.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  };
  function Ur(r, t, e) {
    return t === 0 && e === r.length
      ? ce.fromByteArray(r)
      : ce.fromByteArray(r.slice(t, e));
  }
  function We(r, t, e) {
    e = Math.min(r.length, e);
    let n = [],
      i = t;
    for (; i < e; ) {
      let o = r[i],
        s = null,
        l = o > 239 ? 4 : o > 223 ? 3 : o > 191 ? 2 : 1;
      if (i + l <= e) {
        let p, y, h, g;
        switch (l) {
          case 1:
            o < 128 && (s = o);
            break;
          case 2:
            (p = r[i + 1]),
              (p & 192) === 128 &&
                ((g = ((o & 31) << 6) | (p & 63)), g > 127 && (s = g));
            break;
          case 3:
            (p = r[i + 1]),
              (y = r[i + 2]),
              (p & 192) === 128 &&
                (y & 192) === 128 &&
                ((g = ((o & 15) << 12) | ((p & 63) << 6) | (y & 63)),
                g > 2047 && (g < 55296 || g > 57343) && (s = g));
            break;
          case 4:
            (p = r[i + 1]),
              (y = r[i + 2]),
              (h = r[i + 3]),
              (p & 192) === 128 &&
                (y & 192) === 128 &&
                (h & 192) === 128 &&
                ((g =
                  ((o & 15) << 18) |
                  ((p & 63) << 12) |
                  ((y & 63) << 6) |
                  (h & 63)),
                g > 65535 && g < 1114112 && (s = g));
        }
      }
      s === null
        ? ((s = 65533), (l = 1))
        : s > 65535 &&
          ((s -= 65536),
          n.push(((s >>> 10) & 1023) | 55296),
          (s = 56320 | (s & 1023))),
        n.push(s),
        (i += l);
    }
    return Lr(n);
  }
  var Ze = 4096;
  function Lr(r) {
    let t = r.length;
    if (t <= Ze) return String.fromCharCode.apply(String, r);
    let e = "",
      n = 0;
    for (; n < t; )
      e += String.fromCharCode.apply(String, r.slice(n, (n += Ze)));
    return e;
  }
  function Mr(r, t, e) {
    let n = "";
    e = Math.min(r.length, e);
    for (let i = t; i < e; ++i) n += String.fromCharCode(r[i] & 127);
    return n;
  }
  function Zr(r, t, e) {
    let n = "";
    e = Math.min(r.length, e);
    for (let i = t; i < e; ++i) n += String.fromCharCode(r[i]);
    return n;
  }
  function jr(r, t, e) {
    let n = r.length;
    (!t || t < 0) && (t = 0), (!e || e < 0 || e > n) && (e = n);
    let i = "";
    for (let o = t; o < e; ++o) i += Xr[r[o]];
    return i;
  }
  function Hr(r, t, e) {
    let n = r.slice(t, e),
      i = "";
    for (let o = 0; o < n.length - 1; o += 2)
      i += String.fromCharCode(n[o] + n[o + 1] * 256);
    return i;
  }
  u.prototype.slice = function (t, e) {
    let n = this.length;
    (t = ~~t),
      (e = e === void 0 ? n : ~~e),
      t < 0 ? ((t += n), t < 0 && (t = 0)) : t > n && (t = n),
      e < 0 ? ((e += n), e < 0 && (e = 0)) : e > n && (e = n),
      e < t && (e = t);
    let i = this.subarray(t, e);
    return Object.setPrototypeOf(i, u.prototype), i;
  };
  function K(r, t, e) {
    if (r % 1 !== 0 || r < 0) throw new RangeError("offset is not uint");
    if (r + t > e)
      throw new RangeError("Trying to access beyond buffer length");
  }
  u.prototype.readUintLE = u.prototype.readUIntLE = function (t, e, n) {
    (t = t >>> 0), (e = e >>> 0), n || K(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return i;
  };
  u.prototype.readUintBE = u.prototype.readUIntBE = function (t, e, n) {
    (t = t >>> 0), (e = e >>> 0), n || K(t, e, this.length);
    let i = this[t + --e],
      o = 1;
    for (; e > 0 && (o *= 256); ) i += this[t + --e] * o;
    return i;
  };
  u.prototype.readUint8 = u.prototype.readUInt8 = function (t, e) {
    return (t = t >>> 0), e || K(t, 1, this.length), this[t];
  };
  u.prototype.readUint16LE = u.prototype.readUInt16LE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 2, this.length), this[t] | (this[t + 1] << 8)
    );
  };
  u.prototype.readUint16BE = u.prototype.readUInt16BE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 2, this.length), (this[t] << 8) | this[t + 1]
    );
  };
  u.prototype.readUint32LE = u.prototype.readUInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || K(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
        this[t + 3] * 16777216
    );
  };
  u.prototype.readUint32BE = u.prototype.readUInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || K(t, 4, this.length),
      this[t] * 16777216 +
        ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  };
  u.prototype.readBigUInt64LE = mt(function (t) {
    (t = t >>> 0), Pt(t, "offset");
    let e = this[t],
      n = this[t + 7];
    (e === void 0 || n === void 0) && vt(t, this.length - 8);
    let i = e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24,
      o = this[++t] + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + n * 2 ** 24;
    return BigInt(i) + (BigInt(o) << BigInt(32));
  });
  u.prototype.readBigUInt64BE = mt(function (t) {
    (t = t >>> 0), Pt(t, "offset");
    let e = this[t],
      n = this[t + 7];
    (e === void 0 || n === void 0) && vt(t, this.length - 8);
    let i = e * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t],
      o = this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n;
    return (BigInt(i) << BigInt(32)) + BigInt(o);
  });
  u.prototype.readIntLE = function (t, e, n) {
    (t = t >>> 0), (e = e >>> 0), n || K(t, e, this.length);
    let i = this[t],
      o = 1,
      s = 0;
    for (; ++s < e && (o *= 256); ) i += this[t + s] * o;
    return (o *= 128), i >= o && (i -= Math.pow(2, 8 * e)), i;
  };
  u.prototype.readIntBE = function (t, e, n) {
    (t = t >>> 0), (e = e >>> 0), n || K(t, e, this.length);
    let i = e,
      o = 1,
      s = this[t + --i];
    for (; i > 0 && (o *= 256); ) s += this[t + --i] * o;
    return (o *= 128), s >= o && (s -= Math.pow(2, 8 * e)), s;
  };
  u.prototype.readInt8 = function (t, e) {
    return (
      (t = t >>> 0),
      e || K(t, 1, this.length),
      this[t] & 128 ? (255 - this[t] + 1) * -1 : this[t]
    );
  };
  u.prototype.readInt16LE = function (t, e) {
    (t = t >>> 0), e || K(t, 2, this.length);
    let n = this[t] | (this[t + 1] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  u.prototype.readInt16BE = function (t, e) {
    (t = t >>> 0), e || K(t, 2, this.length);
    let n = this[t + 1] | (this[t] << 8);
    return n & 32768 ? n | 4294901760 : n;
  };
  u.prototype.readInt32LE = function (t, e) {
    return (
      (t = t >>> 0),
      e || K(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  };
  u.prototype.readInt32BE = function (t, e) {
    return (
      (t = t >>> 0),
      e || K(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  };
  u.prototype.readBigInt64LE = mt(function (t) {
    (t = t >>> 0), Pt(t, "offset");
    let e = this[t],
      n = this[t + 7];
    (e === void 0 || n === void 0) && vt(t, this.length - 8);
    let i =
      this[t + 4] + this[t + 5] * 2 ** 8 + this[t + 6] * 2 ** 16 + (n << 24);
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(e + this[++t] * 2 ** 8 + this[++t] * 2 ** 16 + this[++t] * 2 ** 24)
    );
  });
  u.prototype.readBigInt64BE = mt(function (t) {
    (t = t >>> 0), Pt(t, "offset");
    let e = this[t],
      n = this[t + 7];
    (e === void 0 || n === void 0) && vt(t, this.length - 8);
    let i = (e << 24) + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + this[++t];
    return (
      (BigInt(i) << BigInt(32)) +
      BigInt(this[++t] * 2 ** 24 + this[++t] * 2 ** 16 + this[++t] * 2 ** 8 + n)
    );
  });
  u.prototype.readFloatLE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 4, this.length), Ct.read(this, t, !0, 23, 4)
    );
  };
  u.prototype.readFloatBE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 4, this.length), Ct.read(this, t, !1, 23, 4)
    );
  };
  u.prototype.readDoubleLE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 8, this.length), Ct.read(this, t, !0, 52, 8)
    );
  };
  u.prototype.readDoubleBE = function (t, e) {
    return (
      (t = t >>> 0), e || K(t, 8, this.length), Ct.read(this, t, !1, 52, 8)
    );
  };
  function nt(r, t, e, n, i, o) {
    if (!u.isBuffer(r))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < o)
      throw new RangeError('"value" argument is out of bounds');
    if (e + n > r.length) throw new RangeError("Index out of range");
  }
  u.prototype.writeUintLE = u.prototype.writeUIntLE = function (t, e, n, i) {
    if (((t = +t), (e = e >>> 0), (n = n >>> 0), !i)) {
      let l = Math.pow(2, 8 * n) - 1;
      nt(this, t, e, n, l, 0);
    }
    let o = 1,
      s = 0;
    for (this[e] = t & 255; ++s < n && (o *= 256); )
      this[e + s] = (t / o) & 255;
    return e + n;
  };
  u.prototype.writeUintBE = u.prototype.writeUIntBE = function (t, e, n, i) {
    if (((t = +t), (e = e >>> 0), (n = n >>> 0), !i)) {
      let l = Math.pow(2, 8 * n) - 1;
      nt(this, t, e, n, l, 0);
    }
    let o = n - 1,
      s = 1;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      this[e + o] = (t / s) & 255;
    return e + n;
  };
  u.prototype.writeUint8 = u.prototype.writeUInt8 = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 1, 255, 0),
      (this[e] = t & 255),
      e + 1
    );
  };
  u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 2, 65535, 0),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 2, 65535, 0),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 4, 4294967295, 0),
      (this[e + 3] = t >>> 24),
      (this[e + 2] = t >>> 16),
      (this[e + 1] = t >>> 8),
      (this[e] = t & 255),
      e + 4
    );
  };
  u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 4, 4294967295, 0),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  function qe(r, t, e, n, i) {
    Ke(t, n, i, r, e, 7);
    let o = Number(t & BigInt(4294967295));
    (r[e++] = o),
      (o = o >> 8),
      (r[e++] = o),
      (o = o >> 8),
      (r[e++] = o),
      (o = o >> 8),
      (r[e++] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[e++] = s),
      (s = s >> 8),
      (r[e++] = s),
      (s = s >> 8),
      (r[e++] = s),
      (s = s >> 8),
      (r[e++] = s),
      e
    );
  }
  function Xe(r, t, e, n, i) {
    Ke(t, n, i, r, e, 7);
    let o = Number(t & BigInt(4294967295));
    (r[e + 7] = o),
      (o = o >> 8),
      (r[e + 6] = o),
      (o = o >> 8),
      (r[e + 5] = o),
      (o = o >> 8),
      (r[e + 4] = o);
    let s = Number((t >> BigInt(32)) & BigInt(4294967295));
    return (
      (r[e + 3] = s),
      (s = s >> 8),
      (r[e + 2] = s),
      (s = s >> 8),
      (r[e + 1] = s),
      (s = s >> 8),
      (r[e] = s),
      e + 8
    );
  }
  u.prototype.writeBigUInt64LE = mt(function (t, e = 0) {
    return qe(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  u.prototype.writeBigUInt64BE = mt(function (t, e = 0) {
    return Xe(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
  });
  u.prototype.writeIntLE = function (t, e, n, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let p = Math.pow(2, 8 * n - 1);
      nt(this, t, e, n, p - 1, -p);
    }
    let o = 0,
      s = 1,
      l = 0;
    for (this[e] = t & 255; ++o < n && (s *= 256); )
      t < 0 && l === 0 && this[e + o - 1] !== 0 && (l = 1),
        (this[e + o] = (((t / s) >> 0) - l) & 255);
    return e + n;
  };
  u.prototype.writeIntBE = function (t, e, n, i) {
    if (((t = +t), (e = e >>> 0), !i)) {
      let p = Math.pow(2, 8 * n - 1);
      nt(this, t, e, n, p - 1, -p);
    }
    let o = n - 1,
      s = 1,
      l = 0;
    for (this[e + o] = t & 255; --o >= 0 && (s *= 256); )
      t < 0 && l === 0 && this[e + o + 1] !== 0 && (l = 1),
        (this[e + o] = (((t / s) >> 0) - l) & 255);
    return e + n;
  };
  u.prototype.writeInt8 = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 1, 127, -128),
      t < 0 && (t = 255 + t + 1),
      (this[e] = t & 255),
      e + 1
    );
  };
  u.prototype.writeInt16LE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 2, 32767, -32768),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      e + 2
    );
  };
  u.prototype.writeInt16BE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 2, 32767, -32768),
      (this[e] = t >>> 8),
      (this[e + 1] = t & 255),
      e + 2
    );
  };
  u.prototype.writeInt32LE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 4, 2147483647, -2147483648),
      (this[e] = t & 255),
      (this[e + 1] = t >>> 8),
      (this[e + 2] = t >>> 16),
      (this[e + 3] = t >>> 24),
      e + 4
    );
  };
  u.prototype.writeInt32BE = function (t, e, n) {
    return (
      (t = +t),
      (e = e >>> 0),
      n || nt(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      (this[e] = t >>> 24),
      (this[e + 1] = t >>> 16),
      (this[e + 2] = t >>> 8),
      (this[e + 3] = t & 255),
      e + 4
    );
  };
  u.prototype.writeBigInt64LE = mt(function (t, e = 0) {
    return qe(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  u.prototype.writeBigInt64BE = mt(function (t, e = 0) {
    return Xe(
      this,
      t,
      e,
      -BigInt("0x8000000000000000"),
      BigInt("0x7fffffffffffffff")
    );
  });
  function Ye(r, t, e, n, i, o) {
    if (e + n > r.length) throw new RangeError("Index out of range");
    if (e < 0) throw new RangeError("Index out of range");
  }
  function ze(r, t, e, n, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || Ye(r, t, e, 4, 34028234663852886e22, -34028234663852886e22),
      Ct.write(r, t, e, n, 23, 4),
      e + 4
    );
  }
  u.prototype.writeFloatLE = function (t, e, n) {
    return ze(this, t, e, !0, n);
  };
  u.prototype.writeFloatBE = function (t, e, n) {
    return ze(this, t, e, !1, n);
  };
  function Je(r, t, e, n, i) {
    return (
      (t = +t),
      (e = e >>> 0),
      i || Ye(r, t, e, 8, 17976931348623157e292, -17976931348623157e292),
      Ct.write(r, t, e, n, 52, 8),
      e + 8
    );
  }
  u.prototype.writeDoubleLE = function (t, e, n) {
    return Je(this, t, e, !0, n);
  };
  u.prototype.writeDoubleBE = function (t, e, n) {
    return Je(this, t, e, !1, n);
  };
  u.prototype.copy = function (t, e, n, i) {
    if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
    if (
      (n || (n = 0),
      !i && i !== 0 && (i = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      i > 0 && i < n && (i = n),
      i === n || t.length === 0 || this.length === 0)
    )
      return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
    if (i < 0) throw new RangeError("sourceEnd out of bounds");
    i > this.length && (i = this.length),
      t.length - e < i - n && (i = t.length - e + n);
    let o = i - n;
    return (
      this === t && typeof Uint8Array.prototype.copyWithin == "function"
        ? this.copyWithin(e, n, i)
        : Uint8Array.prototype.set.call(t, this.subarray(n, i), e),
      o
    );
  };
  u.prototype.fill = function (t, e, n, i) {
    if (typeof t == "string") {
      if (
        (typeof e == "string"
          ? ((i = e), (e = 0), (n = this.length))
          : typeof n == "string" && ((i = n), (n = this.length)),
        i !== void 0 && typeof i != "string")
      )
        throw new TypeError("encoding must be a string");
      if (typeof i == "string" && !u.isEncoding(i))
        throw new TypeError("Unknown encoding: " + i);
      if (t.length === 1) {
        let s = t.charCodeAt(0);
        ((i === "utf8" && s < 128) || i === "latin1") && (t = s);
      }
    } else
      typeof t == "number"
        ? (t = t & 255)
        : typeof t == "boolean" && (t = Number(t));
    if (e < 0 || this.length < e || this.length < n)
      throw new RangeError("Out of range index");
    if (n <= e) return this;
    (e = e >>> 0), (n = n === void 0 ? this.length : n >>> 0), t || (t = 0);
    let o;
    if (typeof t == "number") for (o = e; o < n; ++o) this[o] = t;
    else {
      let s = u.isBuffer(t) ? t : u.from(t, i),
        l = s.length;
      if (l === 0)
        throw new TypeError(
          'The value "' + t + '" is invalid for argument "value"'
        );
      for (o = 0; o < n - e; ++o) this[o + e] = s[o % l];
    }
    return this;
  };
  var Rt = {};
  function pe(r, t, e) {
    Rt[r] = class extends e {
      constructor() {
        super(),
          Object.defineProperty(this, "message", {
            value: t.apply(this, arguments),
            writable: !0,
            configurable: !0,
          }),
          (this.name = `${this.name} [${r}]`),
          this.stack,
          delete this.name;
      }
      get code() {
        return r;
      }
      set code(i) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: i,
          writable: !0,
        });
      }
      toString() {
        return `${this.name} [${r}]: ${this.message}`;
      }
    };
  }
  pe(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function (r) {
      return r
        ? `${r} is outside of buffer bounds`
        : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  );
  pe(
    "ERR_INVALID_ARG_TYPE",
    function (r, t) {
      return `The "${r}" argument must be of type number. Received type ${typeof t}`;
    },
    TypeError
  );
  pe(
    "ERR_OUT_OF_RANGE",
    function (r, t, e) {
      let n = `The value of "${r}" is out of range.`,
        i = e;
      return (
        Number.isInteger(e) && Math.abs(e) > 2 ** 32
          ? (i = je(String(e)))
          : typeof e == "bigint" &&
            ((i = String(e)),
            (e > BigInt(2) ** BigInt(32) || e < -(BigInt(2) ** BigInt(32))) &&
              (i = je(i)),
            (i += "n")),
        (n += ` It must be ${t}. Received ${i}`),
        n
      );
    },
    RangeError
  );
  function je(r) {
    let t = "",
      e = r.length,
      n = r[0] === "-" ? 1 : 0;
    for (; e >= n + 4; e -= 3) t = `_${r.slice(e - 3, e)}${t}`;
    return `${r.slice(0, e)}${t}`;
  }
  function Gr(r, t, e) {
    Pt(t, "offset"),
      (r[t] === void 0 || r[t + e] === void 0) && vt(t, r.length - (e + 1));
  }
  function Ke(r, t, e, n, i, o) {
    if (r > e || r < t) {
      let s = typeof t == "bigint" ? "n" : "",
        l;
      throw (
        (o > 3
          ? t === 0 || t === BigInt(0)
            ? (l = `>= 0${s} and < 2${s} ** ${(o + 1) * 8}${s}`)
            : (l = `>= -(2${s} ** ${(o + 1) * 8 - 1}${s}) and < 2 ** ${
                (o + 1) * 8 - 1
              }${s}`)
          : (l = `>= ${t}${s} and <= ${e}${s}`),
        new Rt.ERR_OUT_OF_RANGE("value", l, r))
      );
    }
    Gr(n, i, o);
  }
  function Pt(r, t) {
    if (typeof r != "number") throw new Rt.ERR_INVALID_ARG_TYPE(t, "number", r);
  }
  function vt(r, t, e) {
    throw Math.floor(r) !== r
      ? (Pt(r, e), new Rt.ERR_OUT_OF_RANGE(e || "offset", "an integer", r))
      : t < 0
      ? new Rt.ERR_BUFFER_OUT_OF_BOUNDS()
      : new Rt.ERR_OUT_OF_RANGE(
          e || "offset",
          `>= ${e ? 1 : 0} and <= ${t}`,
          r
        );
  }
  var Vr = /[^+/0-9A-Za-z-_]/g;
  function $r(r) {
    if (((r = r.split("=")[0]), (r = r.trim().replace(Vr, "")), r.length < 2))
      return "";
    for (; r.length % 4 !== 0; ) r = r + "=";
    return r;
  }
  function le(r, t) {
    t = t || 1 / 0;
    let e,
      n = r.length,
      i = null,
      o = [];
    for (let s = 0; s < n; ++s) {
      if (((e = r.charCodeAt(s)), e > 55295 && e < 57344)) {
        if (!i) {
          if (e > 56319) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          } else if (s + 1 === n) {
            (t -= 3) > -1 && o.push(239, 191, 189);
            continue;
          }
          i = e;
          continue;
        }
        if (e < 56320) {
          (t -= 3) > -1 && o.push(239, 191, 189), (i = e);
          continue;
        }
        e = (((i - 55296) << 10) | (e - 56320)) + 65536;
      } else i && (t -= 3) > -1 && o.push(239, 191, 189);
      if (((i = null), e < 128)) {
        if ((t -= 1) < 0) break;
        o.push(e);
      } else if (e < 2048) {
        if ((t -= 2) < 0) break;
        o.push((e >> 6) | 192, (e & 63) | 128);
      } else if (e < 65536) {
        if ((t -= 3) < 0) break;
        o.push((e >> 12) | 224, ((e >> 6) & 63) | 128, (e & 63) | 128);
      } else if (e < 1114112) {
        if ((t -= 4) < 0) break;
        o.push(
          (e >> 18) | 240,
          ((e >> 12) & 63) | 128,
          ((e >> 6) & 63) | 128,
          (e & 63) | 128
        );
      } else throw new Error("Invalid code point");
    }
    return o;
  }
  function Wr(r) {
    let t = [];
    for (let e = 0; e < r.length; ++e) t.push(r.charCodeAt(e) & 255);
    return t;
  }
  function qr(r, t) {
    let e,
      n,
      i,
      o = [];
    for (let s = 0; s < r.length && !((t -= 2) < 0); ++s)
      (e = r.charCodeAt(s)), (n = e >> 8), (i = e % 256), o.push(i), o.push(n);
    return o;
  }
  function Qe(r) {
    return ce.toByteArray($r(r));
  }
  function Gt(r, t, e, n) {
    let i;
    for (i = 0; i < n && !(i + e >= t.length || i >= r.length); ++i)
      t[i + e] = r[i];
    return i;
  }
  function ft(r, t) {
    return (
      r instanceof t ||
      (r != null &&
        r.constructor != null &&
        r.constructor.name != null &&
        r.constructor.name === t.name)
    );
  }
  function de(r) {
    return r !== r;
  }
  var Xr = (function () {
    let r = "0123456789abcdef",
      t = new Array(256);
    for (let e = 0; e < 16; ++e) {
      let n = e * 16;
      for (let i = 0; i < 16; ++i) t[n + i] = r[e] + r[i];
    }
    return t;
  })();
  function mt(r) {
    return typeof BigInt > "u" ? Yr : r;
  }
  function Yr() {
    throw new Error("BigInt not supported");
  }
});
(function (r) {
  let t = r.performance;
  function e(U) {
    t && t.mark && t.mark(U);
  }
  function n(U, m) {
    t && t.measure && t.measure(U, m);
  }
  e("Zone");
  let i = r.__Zone_symbol_prefix || "__zone_symbol__";
  function o(U) {
    return i + U;
  }
  let s = r[o("forceDuplicateZoneCheck")] === !0;
  if (r.Zone) {
    if (s || typeof r.Zone.__symbol__ != "function")
      throw new Error("Zone already loaded.");
    return r.Zone;
  }
  let l = (() => {
      let m = class m {
        static assertZonePatched() {
          if (r.Promise !== ut.ZoneAwarePromise)
            throw new Error(
              "Zone.js has detected that ZoneAwarePromise `(window|global).Promise` has been overwritten.\nMost likely cause is that a Promise polyfill has been loaded after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. If you must load one, do so before loading zone.js.)"
            );
        }
        static get root() {
          let c = m.current;
          for (; c.parent; ) c = c.parent;
          return c;
        }
        static get current() {
          return W.zone;
        }
        static get currentTask() {
          return st;
        }
        static __load_patch(c, w, P = !1) {
          if (ut.hasOwnProperty(c)) {
            if (!P && s) throw Error("Already loaded patch: " + c);
          } else if (!r["__Zone_disable_" + c]) {
            let O = "Zone:" + c;
            e(O), (ut[c] = w(r, m, z)), n(O, O);
          }
        }
        get parent() {
          return this._parent;
        }
        get name() {
          return this._name;
        }
        constructor(c, w) {
          (this._parent = c),
            (this._name = w ? w.name || "unnamed" : "<root>"),
            (this._properties = (w && w.properties) || {}),
            (this._zoneDelegate = new y(
              this,
              this._parent && this._parent._zoneDelegate,
              w
            ));
        }
        get(c) {
          let w = this.getZoneWith(c);
          if (w) return w._properties[c];
        }
        getZoneWith(c) {
          let w = this;
          for (; w; ) {
            if (w._properties.hasOwnProperty(c)) return w;
            w = w._parent;
          }
          return null;
        }
        fork(c) {
          if (!c) throw new Error("ZoneSpec required!");
          return this._zoneDelegate.fork(this, c);
        }
        wrap(c, w) {
          if (typeof c != "function")
            throw new Error("Expecting function got: " + c);
          let P = this._zoneDelegate.intercept(this, c, w),
            O = this;
          return function () {
            return O.runGuarded(P, this, arguments, w);
          };
        }
        run(c, w, P, O) {
          W = { parent: W, zone: this };
          try {
            return this._zoneDelegate.invoke(this, c, w, P, O);
          } finally {
            W = W.parent;
          }
        }
        runGuarded(c, w = null, P, O) {
          W = { parent: W, zone: this };
          try {
            try {
              return this._zoneDelegate.invoke(this, c, w, P, O);
            } catch (d) {
              if (this._zoneDelegate.handleError(this, d)) throw d;
            }
          } finally {
            W = W.parent;
          }
        }
        runTask(c, w, P) {
          if (c.zone != this)
            throw new Error(
              "A task can only be run in the zone of creation! (Creation: " +
                (c.zone || Q).name +
                "; Execution: " +
                this.name +
                ")"
            );
          if (c.state === H && (c.type === et || c.type === R)) return;
          let O = c.state != x;
          O && c._transitionTo(x, M), c.runCount++;
          let d = st;
          (st = c), (W = { parent: W, zone: this });
          try {
            c.type == R &&
              c.data &&
              !c.data.isPeriodic &&
              (c.cancelFn = void 0);
            try {
              return this._zoneDelegate.invokeTask(this, c, w, P);
            } catch (E) {
              if (this._zoneDelegate.handleError(this, E)) throw E;
            }
          } finally {
            c.state !== H &&
              c.state !== T &&
              (c.type == et || (c.data && c.data.isPeriodic)
                ? O && c._transitionTo(M, x)
                : ((c.runCount = 0),
                  this._updateTaskCount(c, -1),
                  O && c._transitionTo(H, x, H))),
              (W = W.parent),
              (st = d);
          }
        }
        scheduleTask(c) {
          if (c.zone && c.zone !== this) {
            let P = this;
            for (; P; ) {
              if (P === c.zone)
                throw Error(
                  `can not reschedule task to ${this.name} which is descendants of the original zone ${c.zone.name}`
                );
              P = P.parent;
            }
          }
          c._transitionTo(Y, H);
          let w = [];
          (c._zoneDelegates = w), (c._zone = this);
          try {
            c = this._zoneDelegate.scheduleTask(this, c);
          } catch (P) {
            throw (
              (c._transitionTo(T, Y, H),
              this._zoneDelegate.handleError(this, P),
              P)
            );
          }
          return (
            c._zoneDelegates === w && this._updateTaskCount(c, 1),
            c.state == Y && c._transitionTo(M, Y),
            c
          );
        }
        scheduleMicroTask(c, w, P, O) {
          return this.scheduleTask(new h(v, c, w, P, O, void 0));
        }
        scheduleMacroTask(c, w, P, O, d) {
          return this.scheduleTask(new h(R, c, w, P, O, d));
        }
        scheduleEventTask(c, w, P, O, d) {
          return this.scheduleTask(new h(et, c, w, P, O, d));
        }
        cancelTask(c) {
          if (c.zone != this)
            throw new Error(
              "A task can only be cancelled in the zone of creation! (Creation: " +
                (c.zone || Q).name +
                "; Execution: " +
                this.name +
                ")"
            );
          if (!(c.state !== M && c.state !== x)) {
            c._transitionTo(G, M, x);
            try {
              this._zoneDelegate.cancelTask(this, c);
            } catch (w) {
              throw (
                (c._transitionTo(T, G),
                this._zoneDelegate.handleError(this, w),
                w)
              );
            }
            return (
              this._updateTaskCount(c, -1),
              c._transitionTo(H, G),
              (c.runCount = 0),
              c
            );
          }
        }
        _updateTaskCount(c, w) {
          let P = c._zoneDelegates;
          w == -1 && (c._zoneDelegates = null);
          for (let O = 0; O < P.length; O++) P[O]._updateTaskCount(c.type, w);
        }
      };
      m.__symbol__ = o;
      let U = m;
      return U;
    })(),
    p = {
      name: "",
      onHasTask: (U, m, f, c) => U.hasTask(f, c),
      onScheduleTask: (U, m, f, c) => U.scheduleTask(f, c),
      onInvokeTask: (U, m, f, c, w, P) => U.invokeTask(f, c, w, P),
      onCancelTask: (U, m, f, c) => U.cancelTask(f, c),
    };
  class y {
    constructor(m, f, c) {
      (this._taskCounts = { microTask: 0, macroTask: 0, eventTask: 0 }),
        (this.zone = m),
        (this._parentDelegate = f),
        (this._forkZS = c && (c && c.onFork ? c : f._forkZS)),
        (this._forkDlgt = c && (c.onFork ? f : f._forkDlgt)),
        (this._forkCurrZone = c && (c.onFork ? this.zone : f._forkCurrZone)),
        (this._interceptZS = c && (c.onIntercept ? c : f._interceptZS)),
        (this._interceptDlgt = c && (c.onIntercept ? f : f._interceptDlgt)),
        (this._interceptCurrZone =
          c && (c.onIntercept ? this.zone : f._interceptCurrZone)),
        (this._invokeZS = c && (c.onInvoke ? c : f._invokeZS)),
        (this._invokeDlgt = c && (c.onInvoke ? f : f._invokeDlgt)),
        (this._invokeCurrZone =
          c && (c.onInvoke ? this.zone : f._invokeCurrZone)),
        (this._handleErrorZS = c && (c.onHandleError ? c : f._handleErrorZS)),
        (this._handleErrorDlgt =
          c && (c.onHandleError ? f : f._handleErrorDlgt)),
        (this._handleErrorCurrZone =
          c && (c.onHandleError ? this.zone : f._handleErrorCurrZone)),
        (this._scheduleTaskZS =
          c && (c.onScheduleTask ? c : f._scheduleTaskZS)),
        (this._scheduleTaskDlgt =
          c && (c.onScheduleTask ? f : f._scheduleTaskDlgt)),
        (this._scheduleTaskCurrZone =
          c && (c.onScheduleTask ? this.zone : f._scheduleTaskCurrZone)),
        (this._invokeTaskZS = c && (c.onInvokeTask ? c : f._invokeTaskZS)),
        (this._invokeTaskDlgt = c && (c.onInvokeTask ? f : f._invokeTaskDlgt)),
        (this._invokeTaskCurrZone =
          c && (c.onInvokeTask ? this.zone : f._invokeTaskCurrZone)),
        (this._cancelTaskZS = c && (c.onCancelTask ? c : f._cancelTaskZS)),
        (this._cancelTaskDlgt = c && (c.onCancelTask ? f : f._cancelTaskDlgt)),
        (this._cancelTaskCurrZone =
          c && (c.onCancelTask ? this.zone : f._cancelTaskCurrZone)),
        (this._hasTaskZS = null),
        (this._hasTaskDlgt = null),
        (this._hasTaskDlgtOwner = null),
        (this._hasTaskCurrZone = null);
      let w = c && c.onHasTask,
        P = f && f._hasTaskZS;
      (w || P) &&
        ((this._hasTaskZS = w ? c : p),
        (this._hasTaskDlgt = f),
        (this._hasTaskDlgtOwner = this),
        (this._hasTaskCurrZone = m),
        c.onScheduleTask ||
          ((this._scheduleTaskZS = p),
          (this._scheduleTaskDlgt = f),
          (this._scheduleTaskCurrZone = this.zone)),
        c.onInvokeTask ||
          ((this._invokeTaskZS = p),
          (this._invokeTaskDlgt = f),
          (this._invokeTaskCurrZone = this.zone)),
        c.onCancelTask ||
          ((this._cancelTaskZS = p),
          (this._cancelTaskDlgt = f),
          (this._cancelTaskCurrZone = this.zone)));
    }
    fork(m, f) {
      return this._forkZS
        ? this._forkZS.onFork(this._forkDlgt, this.zone, m, f)
        : new l(m, f);
    }
    intercept(m, f, c) {
      return this._interceptZS
        ? this._interceptZS.onIntercept(
            this._interceptDlgt,
            this._interceptCurrZone,
            m,
            f,
            c
          )
        : f;
    }
    invoke(m, f, c, w, P) {
      return this._invokeZS
        ? this._invokeZS.onInvoke(
            this._invokeDlgt,
            this._invokeCurrZone,
            m,
            f,
            c,
            w,
            P
          )
        : f.apply(c, w);
    }
    handleError(m, f) {
      return this._handleErrorZS
        ? this._handleErrorZS.onHandleError(
            this._handleErrorDlgt,
            this._handleErrorCurrZone,
            m,
            f
          )
        : !0;
    }
    scheduleTask(m, f) {
      let c = f;
      if (this._scheduleTaskZS)
        this._hasTaskZS && c._zoneDelegates.push(this._hasTaskDlgtOwner),
          (c = this._scheduleTaskZS.onScheduleTask(
            this._scheduleTaskDlgt,
            this._scheduleTaskCurrZone,
            m,
            f
          )),
          c || (c = f);
      else if (f.scheduleFn) f.scheduleFn(f);
      else if (f.type == v) S(f);
      else throw new Error("Task is missing scheduleFn.");
      return c;
    }
    invokeTask(m, f, c, w) {
      return this._invokeTaskZS
        ? this._invokeTaskZS.onInvokeTask(
            this._invokeTaskDlgt,
            this._invokeTaskCurrZone,
            m,
            f,
            c,
            w
          )
        : f.callback.apply(c, w);
    }
    cancelTask(m, f) {
      let c;
      if (this._cancelTaskZS)
        c = this._cancelTaskZS.onCancelTask(
          this._cancelTaskDlgt,
          this._cancelTaskCurrZone,
          m,
          f
        );
      else {
        if (!f.cancelFn) throw Error("Task is not cancelable");
        c = f.cancelFn(f);
      }
      return c;
    }
    hasTask(m, f) {
      try {
        this._hasTaskZS &&
          this._hasTaskZS.onHasTask(
            this._hasTaskDlgt,
            this._hasTaskCurrZone,
            m,
            f
          );
      } catch (c) {
        this.handleError(m, c);
      }
    }
    _updateTaskCount(m, f) {
      let c = this._taskCounts,
        w = c[m],
        P = (c[m] = w + f);
      if (P < 0) throw new Error("More tasks executed then were scheduled.");
      if (w == 0 || P == 0) {
        let O = {
          microTask: c.microTask > 0,
          macroTask: c.macroTask > 0,
          eventTask: c.eventTask > 0,
          change: m,
        };
        this.hasTask(this.zone, O);
      }
    }
  }
  class h {
    constructor(m, f, c, w, P, O) {
      if (
        ((this._zone = null),
        (this.runCount = 0),
        (this._zoneDelegates = null),
        (this._state = "notScheduled"),
        (this.type = m),
        (this.source = f),
        (this.data = w),
        (this.scheduleFn = P),
        (this.cancelFn = O),
        !c)
      )
        throw new Error("callback is not defined");
      this.callback = c;
      let d = this;
      m === et && w && w.useG
        ? (this.invoke = h.invokeTask)
        : (this.invoke = function () {
            return h.invokeTask.call(r, d, this, arguments);
          });
    }
    static invokeTask(m, f, c) {
      m || (m = this), rt++;
      try {
        return m.runCount++, m.zone.runTask(m, f, c);
      } finally {
        rt == 1 && k(), rt--;
      }
    }
    get zone() {
      return this._zone;
    }
    get state() {
      return this._state;
    }
    cancelScheduleRequest() {
      this._transitionTo(H, Y);
    }
    _transitionTo(m, f, c) {
      if (this._state === f || this._state === c)
        (this._state = m), m == H && (this._zoneDelegates = null);
      else
        throw new Error(
          `${this.type} '${
            this.source
          }': can not transition to '${m}', expecting state '${f}'${
            c ? " or '" + c + "'" : ""
          }, was '${this._state}'.`
        );
    }
    toString() {
      return this.data && typeof this.data.handleId < "u"
        ? this.data.handleId.toString()
        : Object.prototype.toString.call(this);
    }
    toJSON() {
      return {
        type: this.type,
        state: this.state,
        source: this.source,
        zone: this.zone.name,
        runCount: this.runCount,
      };
    }
  }
  let g = o("setTimeout"),
    C = o("Promise"),
    b = o("then"),
    j = [],
    L = !1,
    tt;
  function X(U) {
    if ((tt || (r[C] && (tt = r[C].resolve(0))), tt)) {
      let m = tt[b];
      m || (m = tt.then), m.call(tt, U);
    } else r[g](U, 0);
  }
  function S(U) {
    rt === 0 && j.length === 0 && X(k), U && j.push(U);
  }
  function k() {
    if (!L) {
      for (L = !0; j.length; ) {
        let U = j;
        j = [];
        for (let m = 0; m < U.length; m++) {
          let f = U[m];
          try {
            f.zone.runTask(f, null, null);
          } catch (c) {
            z.onUnhandledError(c);
          }
        }
      }
      z.microtaskDrainDone(), (L = !1);
    }
  }
  let Q = { name: "NO ZONE" },
    H = "notScheduled",
    Y = "scheduling",
    M = "scheduled",
    x = "running",
    G = "canceling",
    T = "unknown",
    v = "microTask",
    R = "macroTask",
    et = "eventTask",
    ut = {},
    z = {
      symbol: o,
      currentZoneFrame: () => W,
      onUnhandledError: q,
      microtaskDrainDone: q,
      scheduleMicroTask: S,
      showUncaughtError: () => !l[o("ignoreConsoleErrorUncaughtError")],
      patchEventTarget: () => [],
      patchOnProperties: q,
      patchMSOLod: () => q,
      bindArguments: () => [],
      patchThen: () => q,
      patchMacroTask: () => q,
      patchEventPrototype: () => q,
      isIEOrEdge: () => !1,
      getGlobalObjects: () => {},
      ObjectDefineProperty: () => q,
      ObjectGetOwnPropertyDescriptor: () => {},
      ObjectCreate: () => {},
      ArraySlice: () => [],
      patchClass: () => q,
      wrapWithCurrentZone: () => q,
      filterProperties: () => [],
      attachOriginToPatched: () => q,
      _redefineProperty: () => q,
      patchCallbacks: () => q,
      nativeScheduleMicroTask: X,
    },
    W = { parent: null, zone: new l(null, null) },
    st = null,
    rt = 0;
  function q() {}
  return n("Zone", "Zone"), (r.Zone = l);
})((typeof window < "u" && window) || (typeof self < "u" && self) || global);
var Ft = Object.getOwnPropertyDescriptor,
  Jt = Object.defineProperty,
  Kt = Object.getPrototypeOf,
  rr = Object.create,
  nr = Array.prototype.slice,
  Qt = "addEventListener",
  te = "removeEventListener",
  qt = Zone.__symbol__(Qt),
  Xt = Zone.__symbol__(te),
  ht = "true",
  pt = "false",
  Dt = Zone.__symbol__("");
function ee(r, t) {
  return Zone.current.wrap(r, t);
}
function re(r, t, e, n, i) {
  return Zone.current.scheduleMacroTask(r, t, e, n, i);
}
var Z = Zone.__symbol__,
  Mt = typeof window < "u",
  bt = Mt ? window : void 0,
  J = (Mt && bt) || (typeof self == "object" && self) || global,
  ir = "removeAttribute";
function ne(r, t) {
  for (let e = r.length - 1; e >= 0; e--)
    typeof r[e] == "function" && (r[e] = ee(r[e], t + "_" + e));
  return r;
}
function or(r, t) {
  let e = r.constructor.name;
  for (let n = 0; n < t.length; n++) {
    let i = t[n],
      o = r[i];
    if (o) {
      let s = Ft(r, i);
      if (!Ie(s)) continue;
      r[i] = ((l) => {
        let p = function () {
          return l.apply(this, ne(arguments, e + "." + i));
        };
        return dt(p, l), p;
      })(o);
    }
  }
}
function Ie(r) {
  return r
    ? r.writable === !1
      ? !1
      : !(typeof r.get == "function" && typeof r.set > "u")
    : !0;
}
var Be = typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope,
  Zt =
    !("nw" in J) &&
    typeof J.process < "u" &&
    {}.toString.call(J.process) === "[object process]",
  ie = !Zt && !Be && !!(Mt && bt.HTMLElement),
  be =
    typeof J.process < "u" &&
    {}.toString.call(J.process) === "[object process]" &&
    !Be &&
    !!(Mt && bt.HTMLElement),
  Lt = {},
  Te = function (r) {
    if (((r = r || J.event), !r)) return;
    let t = Lt[r.type];
    t || (t = Lt[r.type] = Z("ON_PROPERTY" + r.type));
    let e = this || r.target || J,
      n = e[t],
      i;
    if (ie && e === bt && r.type === "error") {
      let o = r;
      (i =
        n && n.call(this, o.message, o.filename, o.lineno, o.colno, o.error)),
        i === !0 && r.preventDefault();
    } else
      (i = n && n.apply(this, arguments)),
        i != null && !i && r.preventDefault();
    return i;
  };
function we(r, t, e) {
  let n = Ft(r, t);
  if (
    (!n && e && Ft(e, t) && (n = { enumerable: !0, configurable: !0 }),
    !n || !n.configurable)
  )
    return;
  let i = Z("on" + t + "patched");
  if (r.hasOwnProperty(i) && r[i]) return;
  delete n.writable, delete n.value;
  let o = n.get,
    s = n.set,
    l = t.slice(2),
    p = Lt[l];
  p || (p = Lt[l] = Z("ON_PROPERTY" + l)),
    (n.set = function (y) {
      let h = this;
      if ((!h && r === J && (h = J), !h)) return;
      typeof h[p] == "function" && h.removeEventListener(l, Te),
        s && s.call(h, null),
        (h[p] = y),
        typeof y == "function" && h.addEventListener(l, Te, !1);
    }),
    (n.get = function () {
      let y = this;
      if ((!y && r === J && (y = J), !y)) return null;
      let h = y[p];
      if (h) return h;
      if (o) {
        let g = o.call(this);
        if (g)
          return (
            n.set.call(this, g),
            typeof y[ir] == "function" && y.removeAttribute(t),
            g
          );
      }
      return null;
    }),
    Jt(r, t, n),
    (r[i] = !0);
}
function Re(r, t, e) {
  if (t) for (let n = 0; n < t.length; n++) we(r, "on" + t[n], e);
  else {
    let n = [];
    for (let i in r) i.slice(0, 2) == "on" && n.push(i);
    for (let i = 0; i < n.length; i++) we(r, n[i], e);
  }
}
var ct = Z("originalInstance");
function Nt(r) {
  let t = J[r];
  if (!t) return;
  (J[Z(r)] = t),
    (J[r] = function () {
      let i = ne(arguments, r);
      switch (i.length) {
        case 0:
          this[ct] = new t();
          break;
        case 1:
          this[ct] = new t(i[0]);
          break;
        case 2:
          this[ct] = new t(i[0], i[1]);
          break;
        case 3:
          this[ct] = new t(i[0], i[1], i[2]);
          break;
        case 4:
          this[ct] = new t(i[0], i[1], i[2], i[3]);
          break;
        default:
          throw new Error("Arg list too long.");
      }
    }),
    dt(J[r], t);
  let e = new t(function () {}),
    n;
  for (n in e)
    (r === "XMLHttpRequest" && n === "responseBlob") ||
      (function (i) {
        typeof e[i] == "function"
          ? (J[r].prototype[i] = function () {
              return this[ct][i].apply(this[ct], arguments);
            })
          : Jt(J[r].prototype, i, {
              set: function (o) {
                typeof o == "function"
                  ? ((this[ct][i] = ee(o, r + "." + i)), dt(this[ct][i], o))
                  : (this[ct][i] = o);
              },
              get: function () {
                return this[ct][i];
              },
            });
      })(n);
  for (n in t) n !== "prototype" && t.hasOwnProperty(n) && (J[r][n] = t[n]);
}
function yt(r, t, e) {
  let n = r;
  for (; n && !n.hasOwnProperty(t); ) n = Kt(n);
  !n && r[t] && (n = r);
  let i = Z(t),
    o = null;
  if (n && (!(o = n[i]) || !n.hasOwnProperty(i))) {
    o = n[i] = n[t];
    let s = n && Ft(n, t);
    if (Ie(s)) {
      let l = e(o, i, t);
      (n[t] = function () {
        return l(this, arguments);
      }),
        dt(n[t], o);
    }
  }
  return o;
}
function sr(r, t, e) {
  let n = null;
  function i(o) {
    let s = o.data;
    return (
      (s.args[s.cbIdx] = function () {
        o.invoke.apply(this, arguments);
      }),
      n.apply(s.target, s.args),
      o
    );
  }
  n = yt(
    r,
    t,
    (o) =>
      function (s, l) {
        let p = e(s, l);
        return p.cbIdx >= 0 && typeof l[p.cbIdx] == "function"
          ? re(p.name, l[p.cbIdx], p, i)
          : o.apply(s, l);
      }
  );
}
function dt(r, t) {
  r[Z("OriginalDelegate")] = t;
}
var ke = !1,
  Yt = !1;
function cr() {
  try {
    let r = bt.navigator.userAgent;
    if (r.indexOf("MSIE ") !== -1 || r.indexOf("Trident/") !== -1) return !0;
  } catch {}
  return !1;
}
function ur() {
  if (ke) return Yt;
  ke = !0;
  try {
    let r = bt.navigator.userAgent;
    (r.indexOf("MSIE ") !== -1 ||
      r.indexOf("Trident/") !== -1 ||
      r.indexOf("Edge/") !== -1) &&
      (Yt = !0);
  } catch {}
  return Yt;
}
Zone.__load_patch("ZoneAwarePromise", (r, t, e) => {
  let n = Object.getOwnPropertyDescriptor,
    i = Object.defineProperty;
  function o(d) {
    if (d && d.toString === Object.prototype.toString) {
      let E = d.constructor && d.constructor.name;
      return (E || "") + ": " + JSON.stringify(d);
    }
    return d ? d.toString() : Object.prototype.toString.call(d);
  }
  let s = e.symbol,
    l = [],
    p = r[s("DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION")] === !0,
    y = s("Promise"),
    h = s("then"),
    g = "__creationTrace__";
  (e.onUnhandledError = (d) => {
    if (e.showUncaughtError()) {
      let E = d && d.rejection;
      E
        ? console.error(
            "Unhandled Promise rejection:",
            E instanceof Error ? E.message : E,
            "; Zone:",
            d.zone.name,
            "; Task:",
            d.task && d.task.source,
            "; Value:",
            E,
            E instanceof Error ? E.stack : void 0
          )
        : console.error(d);
    }
  }),
    (e.microtaskDrainDone = () => {
      for (; l.length; ) {
        let d = l.shift();
        try {
          d.zone.runGuarded(() => {
            throw d.throwOriginal ? d.rejection : d;
          });
        } catch (E) {
          b(E);
        }
      }
    });
  let C = s("unhandledPromiseRejectionHandler");
  function b(d) {
    e.onUnhandledError(d);
    try {
      let E = t[C];
      typeof E == "function" && E.call(this, d);
    } catch {}
  }
  function j(d) {
    return d && d.then;
  }
  function L(d) {
    return d;
  }
  function tt(d) {
    return f.reject(d);
  }
  let X = s("state"),
    S = s("value"),
    k = s("finally"),
    Q = s("parentPromiseValue"),
    H = s("parentPromiseState"),
    Y = "Promise.then",
    M = null,
    x = !0,
    G = !1,
    T = 0;
  function v(d, E) {
    return (a) => {
      try {
        z(d, E, a);
      } catch (_) {
        z(d, !1, _);
      }
    };
  }
  let R = function () {
      let d = !1;
      return function (a) {
        return function () {
          d || ((d = !0), a.apply(null, arguments));
        };
      };
    },
    et = "Promise resolved with itself",
    ut = s("currentTaskTrace");
  function z(d, E, a) {
    let _ = R();
    if (d === a) throw new TypeError(et);
    if (d[X] === M) {
      let B = null;
      try {
        (typeof a == "object" || typeof a == "function") && (B = a && a.then);
      } catch (A) {
        return (
          _(() => {
            z(d, !1, A);
          })(),
          d
        );
      }
      if (
        E !== G &&
        a instanceof f &&
        a.hasOwnProperty(X) &&
        a.hasOwnProperty(S) &&
        a[X] !== M
      )
        st(a), z(d, a[X], a[S]);
      else if (E !== G && typeof B == "function")
        try {
          B.call(a, _(v(d, E)), _(v(d, !1)));
        } catch (A) {
          _(() => {
            z(d, !1, A);
          })();
        }
      else {
        d[X] = E;
        let A = d[S];
        if (
          ((d[S] = a),
          d[k] === k && E === x && ((d[X] = d[H]), (d[S] = d[Q])),
          E === G && a instanceof Error)
        ) {
          let I = t.currentTask && t.currentTask.data && t.currentTask.data[g];
          I &&
            i(a, ut, {
              configurable: !0,
              enumerable: !1,
              writable: !0,
              value: I,
            });
        }
        for (let I = 0; I < A.length; ) rt(d, A[I++], A[I++], A[I++], A[I++]);
        if (A.length == 0 && E == G) {
          d[X] = T;
          let I = a;
          try {
            throw new Error(
              "Uncaught (in promise): " +
                o(a) +
                (a && a.stack
                  ? `
` + a.stack
                  : "")
            );
          } catch (F) {
            I = F;
          }
          p && (I.throwOriginal = !0),
            (I.rejection = a),
            (I.promise = d),
            (I.zone = t.current),
            (I.task = t.currentTask),
            l.push(I),
            e.scheduleMicroTask();
        }
      }
    }
    return d;
  }
  let W = s("rejectionHandledHandler");
  function st(d) {
    if (d[X] === T) {
      try {
        let E = t[W];
        E &&
          typeof E == "function" &&
          E.call(this, { rejection: d[S], promise: d });
      } catch {}
      d[X] = G;
      for (let E = 0; E < l.length; E++) d === l[E].promise && l.splice(E, 1);
    }
  }
  function rt(d, E, a, _, B) {
    st(d);
    let A = d[X],
      I = A
        ? typeof _ == "function"
          ? _
          : L
        : typeof B == "function"
        ? B
        : tt;
    E.scheduleMicroTask(
      Y,
      () => {
        try {
          let F = d[S],
            D = !!a && k === a[k];
          D && ((a[Q] = F), (a[H] = A));
          let N = E.run(I, void 0, D && I !== tt && I !== L ? [] : [F]);
          z(a, !0, N);
        } catch (F) {
          z(a, !1, F);
        }
      },
      a
    );
  }
  let q = "function ZoneAwarePromise() { [native code] }",
    U = function () {},
    m = r.AggregateError;
  class f {
    static toString() {
      return q;
    }
    static resolve(E) {
      return z(new this(null), x, E);
    }
    static reject(E) {
      return z(new this(null), G, E);
    }
    static any(E) {
      if (!E || typeof E[Symbol.iterator] != "function")
        return Promise.reject(new m([], "All promises were rejected"));
      let a = [],
        _ = 0;
      try {
        for (let I of E) _++, a.push(f.resolve(I));
      } catch {
        return Promise.reject(new m([], "All promises were rejected"));
      }
      if (_ === 0)
        return Promise.reject(new m([], "All promises were rejected"));
      let B = !1,
        A = [];
      return new f((I, F) => {
        for (let D = 0; D < a.length; D++)
          a[D].then(
            (N) => {
              B || ((B = !0), I(N));
            },
            (N) => {
              A.push(N),
                _--,
                _ === 0 &&
                  ((B = !0), F(new m(A, "All promises were rejected")));
            }
          );
      });
    }
    static race(E) {
      let a,
        _,
        B = new this((F, D) => {
          (a = F), (_ = D);
        });
      function A(F) {
        a(F);
      }
      function I(F) {
        _(F);
      }
      for (let F of E) j(F) || (F = this.resolve(F)), F.then(A, I);
      return B;
    }
    static all(E) {
      return f.allWithCallback(E);
    }
    static allSettled(E) {
      return (this && this.prototype instanceof f ? this : f).allWithCallback(
        E,
        {
          thenCallback: (_) => ({ status: "fulfilled", value: _ }),
          errorCallback: (_) => ({ status: "rejected", reason: _ }),
        }
      );
    }
    static allWithCallback(E, a) {
      let _,
        B,
        A = new this((N, V) => {
          (_ = N), (B = V);
        }),
        I = 2,
        F = 0,
        D = [];
      for (let N of E) {
        j(N) || (N = this.resolve(N));
        let V = F;
        try {
          N.then(
            ($) => {
              (D[V] = a ? a.thenCallback($) : $), I--, I === 0 && _(D);
            },
            ($) => {
              a ? ((D[V] = a.errorCallback($)), I--, I === 0 && _(D)) : B($);
            }
          );
        } catch ($) {
          B($);
        }
        I++, F++;
      }
      return (I -= 2), I === 0 && _(D), A;
    }
    constructor(E) {
      let a = this;
      if (!(a instanceof f)) throw new Error("Must be an instanceof Promise.");
      (a[X] = M), (a[S] = []);
      try {
        let _ = R();
        E && E(_(v(a, x)), _(v(a, G)));
      } catch (_) {
        z(a, !1, _);
      }
    }
    get [Symbol.toStringTag]() {
      return "Promise";
    }
    get [Symbol.species]() {
      return f;
    }
    then(E, a) {
      let _ = this.constructor?.[Symbol.species];
      (!_ || typeof _ != "function") && (_ = this.constructor || f);
      let B = new _(U),
        A = t.current;
      return this[X] == M ? this[S].push(A, B, E, a) : rt(this, A, B, E, a), B;
    }
    catch(E) {
      return this.then(null, E);
    }
    finally(E) {
      let a = this.constructor?.[Symbol.species];
      (!a || typeof a != "function") && (a = f);
      let _ = new a(U);
      _[k] = k;
      let B = t.current;
      return this[X] == M ? this[S].push(B, _, E, E) : rt(this, B, _, E, E), _;
    }
  }
  (f.resolve = f.resolve),
    (f.reject = f.reject),
    (f.race = f.race),
    (f.all = f.all);
  let c = (r[y] = r.Promise);
  r.Promise = f;
  let w = s("thenPatched");
  function P(d) {
    let E = d.prototype,
      a = n(E, "then");
    if (a && (a.writable === !1 || !a.configurable)) return;
    let _ = E.then;
    (E[h] = _),
      (d.prototype.then = function (B, A) {
        return new f((F, D) => {
          _.call(this, F, D);
        }).then(B, A);
      }),
      (d[w] = !0);
  }
  e.patchThen = P;
  function O(d) {
    return function (E, a) {
      let _ = d.apply(E, a);
      if (_ instanceof f) return _;
      let B = _.constructor;
      return B[w] || P(B), _;
    };
  }
  return (
    c && (P(c), yt(r, "fetch", (d) => O(d))),
    (Promise[t.__symbol__("uncaughtPromiseErrors")] = l),
    f
  );
});
Zone.__load_patch("toString", (r) => {
  let t = Function.prototype.toString,
    e = Z("OriginalDelegate"),
    n = Z("Promise"),
    i = Z("Error"),
    o = function () {
      if (typeof this == "function") {
        let y = this[e];
        if (y)
          return typeof y == "function"
            ? t.call(y)
            : Object.prototype.toString.call(y);
        if (this === Promise) {
          let h = r[n];
          if (h) return t.call(h);
        }
        if (this === Error) {
          let h = r[i];
          if (h) return t.call(h);
        }
      }
      return t.call(this);
    };
  (o[e] = t), (Function.prototype.toString = o);
  let s = Object.prototype.toString,
    l = "[object Promise]";
  Object.prototype.toString = function () {
    return typeof Promise == "function" && this instanceof Promise
      ? l
      : s.call(this);
  };
});
var It = !1;
if (typeof window < "u")
  try {
    let r = Object.defineProperty({}, "passive", {
      get: function () {
        It = !0;
      },
    });
    window.addEventListener("test", r, r),
      window.removeEventListener("test", r, r);
  } catch {
    It = !1;
  }
var ar = { useG: !0 },
  it = {},
  Ce = {},
  Pe = new RegExp("^" + Dt + "(\\w+)(true|false)$"),
  Ae = Z("propagationStopped");
function Se(r, t) {
  let e = (t ? t(r) : r) + pt,
    n = (t ? t(r) : r) + ht,
    i = Dt + e,
    o = Dt + n;
  (it[r] = {}), (it[r][pt] = i), (it[r][ht] = o);
}
function lr(r, t, e, n) {
  let i = (n && n.add) || Qt,
    o = (n && n.rm) || te,
    s = (n && n.listeners) || "eventListeners",
    l = (n && n.rmAll) || "removeAllListeners",
    p = Z(i),
    y = "." + i + ":",
    h = "prependListener",
    g = "." + h + ":",
    C = function (S, k, Q) {
      if (S.isRemoved) return;
      let H = S.callback;
      typeof H == "object" &&
        H.handleEvent &&
        ((S.callback = (x) => H.handleEvent(x)), (S.originalDelegate = H));
      let Y;
      try {
        S.invoke(S, k, [Q]);
      } catch (x) {
        Y = x;
      }
      let M = S.options;
      if (M && typeof M == "object" && M.once) {
        let x = S.originalDelegate ? S.originalDelegate : S.callback;
        k[o].call(k, Q.type, x, M);
      }
      return Y;
    };
  function b(S, k, Q) {
    if (((k = k || r.event), !k)) return;
    let H = S || k.target || r,
      Y = H[it[k.type][Q ? ht : pt]];
    if (Y) {
      let M = [];
      if (Y.length === 1) {
        let x = C(Y[0], H, k);
        x && M.push(x);
      } else {
        let x = Y.slice();
        for (let G = 0; G < x.length && !(k && k[Ae] === !0); G++) {
          let T = C(x[G], H, k);
          T && M.push(T);
        }
      }
      if (M.length === 1) throw M[0];
      for (let x = 0; x < M.length; x++) {
        let G = M[x];
        t.nativeScheduleMicroTask(() => {
          throw G;
        });
      }
    }
  }
  let j = function (S) {
      return b(this, S, !1);
    },
    L = function (S) {
      return b(this, S, !0);
    };
  function tt(S, k) {
    if (!S) return !1;
    let Q = !0;
    k && k.useG !== void 0 && (Q = k.useG);
    let H = k && k.vh,
      Y = !0;
    k && k.chkDup !== void 0 && (Y = k.chkDup);
    let M = !1;
    k && k.rt !== void 0 && (M = k.rt);
    let x = S;
    for (; x && !x.hasOwnProperty(i); ) x = Kt(x);
    if ((!x && S[i] && (x = S), !x || x[p])) return !1;
    let G = k && k.eventNameToString,
      T = {},
      v = (x[p] = x[i]),
      R = (x[Z(o)] = x[o]),
      et = (x[Z(s)] = x[s]),
      ut = (x[Z(l)] = x[l]),
      z;
    k && k.prepend && (z = x[Z(k.prepend)] = x[k.prepend]);
    function W(a, _) {
      return !It && typeof a == "object" && a
        ? !!a.capture
        : !It || !_
        ? a
        : typeof a == "boolean"
        ? { capture: a, passive: !0 }
        : a
        ? typeof a == "object" && a.passive !== !1
          ? { ...a, passive: !0 }
          : a
        : { passive: !0 };
    }
    let st = function (a) {
        if (!T.isExisting)
          return v.call(T.target, T.eventName, T.capture ? L : j, T.options);
      },
      rt = function (a) {
        if (!a.isRemoved) {
          let _ = it[a.eventName],
            B;
          _ && (B = _[a.capture ? ht : pt]);
          let A = B && a.target[B];
          if (A) {
            for (let I = 0; I < A.length; I++)
              if (A[I] === a) {
                A.splice(I, 1),
                  (a.isRemoved = !0),
                  A.length === 0 && ((a.allRemoved = !0), (a.target[B] = null));
                break;
              }
          }
        }
        if (a.allRemoved)
          return R.call(a.target, a.eventName, a.capture ? L : j, a.options);
      },
      q = function (a) {
        return v.call(T.target, T.eventName, a.invoke, T.options);
      },
      U = function (a) {
        return z.call(T.target, T.eventName, a.invoke, T.options);
      },
      m = function (a) {
        return R.call(a.target, a.eventName, a.invoke, a.options);
      },
      f = Q ? st : q,
      c = Q ? rt : m,
      w = function (a, _) {
        let B = typeof _;
        return (
          (B === "function" && a.callback === _) ||
          (B === "object" && a.originalDelegate === _)
        );
      },
      P = k && k.diff ? k.diff : w,
      O = Zone[Z("UNPATCHED_EVENTS")],
      d = r[Z("PASSIVE_EVENTS")],
      E = function (a, _, B, A, I = !1, F = !1) {
        return function () {
          let D = this || r,
            N = arguments[0];
          k && k.transferEventName && (N = k.transferEventName(N));
          let V = arguments[1];
          if (!V) return a.apply(this, arguments);
          if (Zt && N === "uncaughtException") return a.apply(this, arguments);
          let $ = !1;
          if (typeof V != "function") {
            if (!V.handleEvent) return a.apply(this, arguments);
            $ = !0;
          }
          if (H && !H(a, V, D, arguments)) return;
          let _t = It && !!d && d.indexOf(N) !== -1,
            at = W(arguments[2], _t);
          if (O) {
            for (let Tt = 0; Tt < O.length; Tt++)
              if (N === O[Tt])
                return _t ? a.call(D, N, V, at) : a.apply(this, arguments);
          }
          let Vt = at ? (typeof at == "boolean" ? !0 : at.capture) : !1,
            ye = at && typeof at == "object" ? at.once : !1,
            er = Zone.current,
            $t = it[N];
          $t || (Se(N, G), ($t = it[N]));
          let Ee = $t[Vt ? ht : pt],
            xt = D[Ee],
            _e = !1;
          if (xt) {
            if (((_e = !0), Y)) {
              for (let Tt = 0; Tt < xt.length; Tt++) if (P(xt[Tt], V)) return;
            }
          } else xt = D[Ee] = [];
          let Ot,
            ge = D.constructor.name,
            me = Ce[ge];
          me && (Ot = me[N]),
            Ot || (Ot = ge + _ + (G ? G(N) : N)),
            (T.options = at),
            ye && (T.options.once = !1),
            (T.target = D),
            (T.capture = Vt),
            (T.eventName = N),
            (T.isExisting = _e);
          let St = Q ? ar : void 0;
          St && (St.taskData = T);
          let gt = er.scheduleEventTask(Ot, V, St, B, A);
          if (
            ((T.target = null),
            St && (St.taskData = null),
            ye && (at.once = !0),
            (!It && typeof gt.options == "boolean") || (gt.options = at),
            (gt.target = D),
            (gt.capture = Vt),
            (gt.eventName = N),
            $ && (gt.originalDelegate = V),
            F ? xt.unshift(gt) : xt.push(gt),
            I)
          )
            return D;
        };
      };
    return (
      (x[i] = E(v, y, f, c, M)),
      z && (x[h] = E(z, g, U, c, M, !0)),
      (x[o] = function () {
        let a = this || r,
          _ = arguments[0];
        k && k.transferEventName && (_ = k.transferEventName(_));
        let B = arguments[2],
          A = B ? (typeof B == "boolean" ? !0 : B.capture) : !1,
          I = arguments[1];
        if (!I) return R.apply(this, arguments);
        if (H && !H(R, I, a, arguments)) return;
        let F = it[_],
          D;
        F && (D = F[A ? ht : pt]);
        let N = D && a[D];
        if (N)
          for (let V = 0; V < N.length; V++) {
            let $ = N[V];
            if (P($, I)) {
              if (
                (N.splice(V, 1),
                ($.isRemoved = !0),
                N.length === 0 &&
                  (($.allRemoved = !0), (a[D] = null), typeof _ == "string"))
              ) {
                let _t = Dt + "ON_PROPERTY" + _;
                a[_t] = null;
              }
              return $.zone.cancelTask($), M ? a : void 0;
            }
          }
        return R.apply(this, arguments);
      }),
      (x[s] = function () {
        let a = this || r,
          _ = arguments[0];
        k && k.transferEventName && (_ = k.transferEventName(_));
        let B = [],
          A = Fe(a, G ? G(_) : _);
        for (let I = 0; I < A.length; I++) {
          let F = A[I],
            D = F.originalDelegate ? F.originalDelegate : F.callback;
          B.push(D);
        }
        return B;
      }),
      (x[l] = function () {
        let a = this || r,
          _ = arguments[0];
        if (_) {
          k && k.transferEventName && (_ = k.transferEventName(_));
          let B = it[_];
          if (B) {
            let A = B[pt],
              I = B[ht],
              F = a[A],
              D = a[I];
            if (F) {
              let N = F.slice();
              for (let V = 0; V < N.length; V++) {
                let $ = N[V],
                  _t = $.originalDelegate ? $.originalDelegate : $.callback;
                this[o].call(this, _, _t, $.options);
              }
            }
            if (D) {
              let N = D.slice();
              for (let V = 0; V < N.length; V++) {
                let $ = N[V],
                  _t = $.originalDelegate ? $.originalDelegate : $.callback;
                this[o].call(this, _, _t, $.options);
              }
            }
          }
        } else {
          let B = Object.keys(a);
          for (let A = 0; A < B.length; A++) {
            let I = B[A],
              F = Pe.exec(I),
              D = F && F[1];
            D && D !== "removeListener" && this[l].call(this, D);
          }
          this[l].call(this, "removeListener");
        }
        if (M) return this;
      }),
      dt(x[i], v),
      dt(x[o], R),
      ut && dt(x[l], ut),
      et && dt(x[s], et),
      !0
    );
  }
  let X = [];
  for (let S = 0; S < e.length; S++) X[S] = tt(e[S], n);
  return X;
}
function Fe(r, t) {
  if (!t) {
    let o = [];
    for (let s in r) {
      let l = Pe.exec(s),
        p = l && l[1];
      if (p && (!t || p === t)) {
        let y = r[s];
        if (y) for (let h = 0; h < y.length; h++) o.push(y[h]);
      }
    }
    return o;
  }
  let e = it[t];
  e || (Se(t), (e = it[t]));
  let n = r[e[pt]],
    i = r[e[ht]];
  return n ? (i ? n.concat(i) : n.slice()) : i ? i.slice() : [];
}
function fr(r, t) {
  let e = r.Event;
  e &&
    e.prototype &&
    t.patchMSOLod(
      e.prototype,
      "stopImmediatePropagation",
      (n) =>
        function (i, o) {
          (i[Ae] = !0), n && n.apply(i, o);
        }
    );
}
function hr(r, t, e, n, i) {
  let o = Zone.__symbol__(n);
  if (t[o]) return;
  let s = (t[o] = t[n]);
  (t[n] = function (l, p, y) {
    return (
      p &&
        p.prototype &&
        i.forEach(function (h) {
          let g = `${e}.${n}::` + h,
            C = p.prototype;
          try {
            if (C.hasOwnProperty(h)) {
              let b = r.ObjectGetOwnPropertyDescriptor(C, h);
              b && b.value
                ? ((b.value = r.wrapWithCurrentZone(b.value, g)),
                  r._redefineProperty(p.prototype, h, b))
                : C[h] && (C[h] = r.wrapWithCurrentZone(C[h], g));
            } else C[h] && (C[h] = r.wrapWithCurrentZone(C[h], g));
          } catch {}
        }),
      s.call(t, l, p, y)
    );
  }),
    r.attachOriginToPatched(t[n], s);
}
function De(r, t, e) {
  if (!e || e.length === 0) return t;
  let n = e.filter((o) => o.target === r);
  if (!n || n.length === 0) return t;
  let i = n[0].ignoreProperties;
  return t.filter((o) => i.indexOf(o) === -1);
}
function xe(r, t, e, n) {
  if (!r) return;
  let i = De(r, t, e);
  Re(r, i, n);
}
function zt(r) {
  return Object.getOwnPropertyNames(r)
    .filter((t) => t.startsWith("on") && t.length > 2)
    .map((t) => t.substring(2));
}
function pr(r, t) {
  if ((Zt && !be) || Zone[r.symbol("patchEvents")]) return;
  let e = t.__Zone_ignore_on_properties,
    n = [];
  if (ie) {
    let i = window;
    n = n.concat([
      "Document",
      "SVGElement",
      "Element",
      "HTMLElement",
      "HTMLBodyElement",
      "HTMLMediaElement",
      "HTMLFrameSetElement",
      "HTMLFrameElement",
      "HTMLIFrameElement",
      "HTMLMarqueeElement",
      "Worker",
    ]);
    let o = cr() ? [{ target: i, ignoreProperties: ["error"] }] : [];
    xe(i, zt(i), e && e.concat(o), Kt(i));
  }
  n = n.concat([
    "XMLHttpRequest",
    "XMLHttpRequestEventTarget",
    "IDBIndex",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBDatabase",
    "IDBTransaction",
    "IDBCursor",
    "WebSocket",
  ]);
  for (let i = 0; i < n.length; i++) {
    let o = t[n[i]];
    o && o.prototype && xe(o.prototype, zt(o.prototype), e);
  }
}
Zone.__load_patch("util", (r, t, e) => {
  let n = zt(r);
  (e.patchOnProperties = Re),
    (e.patchMSOLod = yt),
    (e.bindArguments = ne),
    (e.patchMacroTask = sr);
  let i = t.__symbol__("BLACK_LISTED_EVENTS"),
    o = t.__symbol__("UNPATCHED_EVENTS");
  r[o] && (r[i] = r[o]),
    r[i] && (t[i] = t[o] = r[i]),
    (e.patchEventPrototype = fr),
    (e.patchEventTarget = lr),
    (e.isIEOrEdge = ur),
    (e.ObjectDefineProperty = Jt),
    (e.ObjectGetOwnPropertyDescriptor = Ft),
    (e.ObjectCreate = rr),
    (e.ArraySlice = nr),
    (e.patchClass = Nt),
    (e.wrapWithCurrentZone = ee),
    (e.filterProperties = De),
    (e.attachOriginToPatched = dt),
    (e._redefineProperty = Object.defineProperty),
    (e.patchCallbacks = hr),
    (e.getGlobalObjects = () => ({
      globalSources: Ce,
      zoneSymbolEventNames: it,
      eventNames: n,
      isBrowser: ie,
      isMix: be,
      isNode: Zt,
      TRUE_STR: ht,
      FALSE_STR: pt,
      ZONE_SYMBOL_PREFIX: Dt,
      ADD_EVENT_LISTENER_STR: Qt,
      REMOVE_EVENT_LISTENER_STR: te,
    }));
});
function dr(r, t) {
  t.patchMSOLod(
    r,
    "queueMicrotask",
    (e) =>
      function (n, i) {
        Zone.current.scheduleMicroTask("queueMicrotask", i[0]);
      }
  );
}
var Ut = Z("zoneTask");
function Bt(r, t, e, n) {
  let i = null,
    o = null;
  (t += n), (e += n);
  let s = {};
  function l(y) {
    let h = y.data;
    return (
      (h.args[0] = function () {
        return y.invoke.apply(this, arguments);
      }),
      (h.handleId = i.apply(r, h.args)),
      y
    );
  }
  function p(y) {
    return o.call(r, y.data.handleId);
  }
  (i = yt(
    r,
    t,
    (y) =>
      function (h, g) {
        if (typeof g[0] == "function") {
          let C = {
              isPeriodic: n === "Interval",
              delay: n === "Timeout" || n === "Interval" ? g[1] || 0 : void 0,
              args: g,
            },
            b = g[0];
          g[0] = function () {
            try {
              return b.apply(this, arguments);
            } finally {
              C.isPeriodic ||
                (typeof C.handleId == "number"
                  ? delete s[C.handleId]
                  : C.handleId && (C.handleId[Ut] = null));
            }
          };
          let j = re(t, g[0], C, l, p);
          if (!j) return j;
          let L = j.data.handleId;
          return (
            typeof L == "number" ? (s[L] = j) : L && (L[Ut] = j),
            L &&
              L.ref &&
              L.unref &&
              typeof L.ref == "function" &&
              typeof L.unref == "function" &&
              ((j.ref = L.ref.bind(L)), (j.unref = L.unref.bind(L))),
            typeof L == "number" || L ? L : j
          );
        } else return y.apply(r, g);
      }
  )),
    (o = yt(
      r,
      e,
      (y) =>
        function (h, g) {
          let C = g[0],
            b;
          typeof C == "number" ? (b = s[C]) : ((b = C && C[Ut]), b || (b = C)),
            b && typeof b.type == "string"
              ? b.state !== "notScheduled" &&
                ((b.cancelFn && b.data.isPeriodic) || b.runCount === 0) &&
                (typeof C == "number" ? delete s[C] : C && (C[Ut] = null),
                b.zone.cancelTask(b))
              : y.apply(r, g);
        }
    ));
}
function yr(r, t) {
  let { isBrowser: e, isMix: n } = t.getGlobalObjects();
  if ((!e && !n) || !r.customElements || !("customElements" in r)) return;
  let i = [
    "connectedCallback",
    "disconnectedCallback",
    "adoptedCallback",
    "attributeChangedCallback",
  ];
  t.patchCallbacks(t, r.customElements, "customElements", "define", i);
}
function Er(r, t) {
  if (Zone[t.symbol("patchEventTarget")]) return;
  let {
    eventNames: e,
    zoneSymbolEventNames: n,
    TRUE_STR: i,
    FALSE_STR: o,
    ZONE_SYMBOL_PREFIX: s,
  } = t.getGlobalObjects();
  for (let p = 0; p < e.length; p++) {
    let y = e[p],
      h = y + o,
      g = y + i,
      C = s + h,
      b = s + g;
    (n[y] = {}), (n[y][o] = C), (n[y][i] = b);
  }
  let l = r.EventTarget;
  if (!(!l || !l.prototype))
    return t.patchEventTarget(r, t, [l && l.prototype]), !0;
}
function _r(r, t) {
  t.patchEventPrototype(r, t);
}
Zone.__load_patch("legacy", (r) => {
  let t = r[Zone.__symbol__("legacyPatch")];
  t && t();
});
Zone.__load_patch("timers", (r) => {
  let t = "set",
    e = "clear";
  Bt(r, t, e, "Timeout"), Bt(r, t, e, "Interval"), Bt(r, t, e, "Immediate");
});
Zone.__load_patch("requestAnimationFrame", (r) => {
  Bt(r, "request", "cancel", "AnimationFrame"),
    Bt(r, "mozRequest", "mozCancel", "AnimationFrame"),
    Bt(r, "webkitRequest", "webkitCancel", "AnimationFrame");
});
Zone.__load_patch("blocking", (r, t) => {
  let e = ["alert", "prompt", "confirm"];
  for (let n = 0; n < e.length; n++) {
    let i = e[n];
    yt(
      r,
      i,
      (o, s, l) =>
        function (p, y) {
          return t.current.run(o, r, y, l);
        }
    );
  }
});
Zone.__load_patch("EventTarget", (r, t, e) => {
  _r(r, e), Er(r, e);
  let n = r.XMLHttpRequestEventTarget;
  n && n.prototype && e.patchEventTarget(r, e, [n.prototype]);
});
Zone.__load_patch("MutationObserver", (r, t, e) => {
  Nt("MutationObserver"), Nt("WebKitMutationObserver");
});
Zone.__load_patch("IntersectionObserver", (r, t, e) => {
  Nt("IntersectionObserver");
});
Zone.__load_patch("FileReader", (r, t, e) => {
  Nt("FileReader");
});
Zone.__load_patch("on_property", (r, t, e) => {
  pr(e, r);
});
Zone.__load_patch("customElements", (r, t, e) => {
  yr(r, e);
});
Zone.__load_patch("XHR", (r, t) => {
  p(r);
  let e = Z("xhrTask"),
    n = Z("xhrSync"),
    i = Z("xhrListener"),
    o = Z("xhrScheduled"),
    s = Z("xhrURL"),
    l = Z("xhrErrorBeforeScheduled");
  function p(y) {
    let h = y.XMLHttpRequest;
    if (!h) return;
    let g = h.prototype;
    function C(T) {
      return T[e];
    }
    let b = g[qt],
      j = g[Xt];
    if (!b) {
      let T = y.XMLHttpRequestEventTarget;
      if (T) {
        let v = T.prototype;
        (b = v[qt]), (j = v[Xt]);
      }
    }
    let L = "readystatechange",
      tt = "scheduled";
    function X(T) {
      let v = T.data,
        R = v.target;
      (R[o] = !1), (R[l] = !1);
      let et = R[i];
      b || ((b = R[qt]), (j = R[Xt])), et && j.call(R, L, et);
      let ut = (R[i] = () => {
        if (R.readyState === R.DONE)
          if (!v.aborted && R[o] && T.state === tt) {
            let W = R[t.__symbol__("loadfalse")];
            if (R.status !== 0 && W && W.length > 0) {
              let st = T.invoke;
              (T.invoke = function () {
                let rt = R[t.__symbol__("loadfalse")];
                for (let q = 0; q < rt.length; q++)
                  rt[q] === T && rt.splice(q, 1);
                !v.aborted && T.state === tt && st.call(T);
              }),
                W.push(T);
            } else T.invoke();
          } else !v.aborted && R[o] === !1 && (R[l] = !0);
      });
      return (
        b.call(R, L, ut), R[e] || (R[e] = T), x.apply(R, v.args), (R[o] = !0), T
      );
    }
    function S() {}
    function k(T) {
      let v = T.data;
      return (v.aborted = !0), G.apply(v.target, v.args);
    }
    let Q = yt(
        g,
        "open",
        () =>
          function (T, v) {
            return (T[n] = v[2] == !1), (T[s] = v[1]), Q.apply(T, v);
          }
      ),
      H = "XMLHttpRequest.send",
      Y = Z("fetchTaskAborting"),
      M = Z("fetchTaskScheduling"),
      x = yt(
        g,
        "send",
        () =>
          function (T, v) {
            if (t.current[M] === !0 || T[n]) return x.apply(T, v);
            {
              let R = {
                  target: T,
                  url: T[s],
                  isPeriodic: !1,
                  args: v,
                  aborted: !1,
                },
                et = re(H, S, R, X, k);
              T && T[l] === !0 && !R.aborted && et.state === tt && et.invoke();
            }
          }
      ),
      G = yt(
        g,
        "abort",
        () =>
          function (T, v) {
            let R = C(T);
            if (R && typeof R.type == "string") {
              if (R.cancelFn == null || (R.data && R.data.aborted)) return;
              R.zone.cancelTask(R);
            } else if (t.current[Y] === !0) return G.apply(T, v);
          }
      );
  }
});
Zone.__load_patch("geolocation", (r) => {
  r.navigator &&
    r.navigator.geolocation &&
    or(r.navigator.geolocation, ["getCurrentPosition", "watchPosition"]);
});
Zone.__load_patch("PromiseRejectionEvent", (r, t) => {
  function e(n) {
    return function (i) {
      Fe(r, n).forEach((s) => {
        let l = r.PromiseRejectionEvent;
        if (l) {
          let p = new l(n, { promise: i.promise, reason: i.rejection });
          s.invoke(p);
        }
      });
    };
  }
  r.PromiseRejectionEvent &&
    ((t[Z("unhandledPromiseRejectionHandler")] = e("unhandledrejection")),
    (t[Z("rejectionHandledHandler")] = e("rejectionhandled")));
});
Zone.__load_patch("queueMicrotask", (r, t, e) => {
  dr(r, e);
});
window.global = window;
global.Buffer = global.Buffer || tr().Buffer;
