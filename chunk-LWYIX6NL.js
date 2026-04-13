import { a as Le } from "./chunk-I55AS6RF.js";
import {
  $ as re,
  A as $e,
  B as qe,
  C as be,
  F as k,
  H as Ee,
  I as _e,
  J as Oe,
  O as L,
  P as z,
  Q as Ve,
  R as Ie,
  S as W,
  T as J,
  U as Z,
  V as X,
  W as N,
  X as Q,
  Y,
  Z as ee,
  _ as $,
  a as E,
  aa as O,
  b as _,
  ba as te,
  c as H,
  ca as G,
  da as oe,
  e as De,
  ea as ne,
  f as A,
  fa as ie,
  g as V,
  ga as se,
  h as D,
  ha as ae,
  ia as Te,
  j as U,
  k as w,
  l as ye,
  m as M,
  n as He,
  o as ze,
  p as j,
  r as Ne,
  s as Ge,
  sa as we,
  t as T,
  ta as ve,
  u as he,
  ua as Be,
  va as Pe,
  w as Me,
  wa as je,
  x as ge,
  y as ke,
  z as K,
} from "./chunk-P6SS7ETZ.js";
import { a as p, b as v, d as Fe, l as h } from "./chunk-UUTKIRVD.js";
var Ke = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
  We =
    /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;
function Je(e) {
  let { domain: r, message: t, primaryType: o, types: n } = e,
    i = (a, c) => {
      for (let m of a) {
        let { name: d, type: f } = m,
          u = c[d],
          s = f.match(We);
        if (s && (typeof u == "number" || typeof u == "bigint")) {
          let [g, b, y] = s;
          ye(u, { signed: b === "int", size: Number.parseInt(y) / 8 });
        }
        if (f === "address" && typeof u == "string" && !Me(u))
          throw new Ne({ address: u });
        let l = f.match(Ke);
        if (l) {
          let [g, b] = l;
          if (b && H(u) !== Number.parseInt(b))
            throw new ze({ expectedSize: Number.parseInt(b), givenSize: H(u) });
        }
        let x = n[f];
        x && i(x, u);
      }
    };
  n.EIP712Domain && r && i(n.EIP712Domain, r),
    o !== "EIP712Domain" && i(n[o], t);
}
function Ze({ domain: e }) {
  return [
    typeof e?.name == "string" && { name: "name", type: "string" },
    e?.version && { name: "version", type: "string" },
    typeof e?.chainId == "number" && { name: "chainId", type: "uint256" },
    e?.verifyingContract && { name: "verifyingContract", type: "address" },
    e?.salt && { name: "salt", type: "bytes32" },
  ].filter(Boolean);
}
function Cr(e) {
  let { domain: r = {}, message: t, primaryType: o } = e,
    n = p({ EIP712Domain: Ze({ domain: r }) }, e.types);
  Je({ domain: r, message: t, primaryType: o, types: n });
  let i = ["0x1901"];
  return (
    r && i.push(Xe({ domain: r, types: n })),
    o !== "EIP712Domain" && i.push(Qe({ data: t, primaryType: o, types: n })),
    T(j(i))
  );
}
function Xe({ domain: e, types: r }) {
  return Qe({ data: e, primaryType: "EIP712Domain", types: r });
}
function Qe({ data: e, primaryType: r, types: t }) {
  let o = Ye({ data: e, primaryType: r, types: t });
  return T(o);
}
function Ye({ data: e, primaryType: r, types: t }) {
  let o = [{ type: "bytes32" }],
    n = [Sr({ primaryType: r, types: t })];
  for (let i of t[r]) {
    let [a, c] = rr({ types: t, name: i.name, type: i.type, value: e[i.name] });
    o.push(a), n.push(c);
  }
  return ge(o, n);
}
function Sr({ primaryType: e, types: r }) {
  let t = U(Ar({ primaryType: e, types: r }));
  return T(t);
}
function Ar({ primaryType: e, types: r }) {
  let t = "",
    o = er({ primaryType: e, types: r });
  o.delete(e);
  let n = [e, ...Array.from(o).sort()];
  for (let i of n)
    t += `${i}(${r[i].map(({ name: a, type: c }) => `${c} ${a}`).join(",")})`;
  return t;
}
function er({ primaryType: e, types: r }, t = new Set()) {
  let n = e.match(/^\w*/u)?.[0];
  if (t.has(n) || r[n] === void 0) return t;
  t.add(n);
  for (let i of r[n]) er({ primaryType: i.type, types: r }, t);
  return t;
}
function rr({ types: e, name: r, type: t, value: o }) {
  if (e[t] !== void 0)
    return [{ type: "bytes32" }, T(Ye({ data: o, primaryType: t, types: e }))];
  if (t === "bytes")
    return (
      (o = `0x${(o.length % 2 ? "0" : "") + o.slice(2)}`),
      [{ type: "bytes32" }, T(o)]
    );
  if (t === "string") return [{ type: "bytes32" }, T(U(o))];
  if (t.lastIndexOf("]") === t.length - 1) {
    let n = t.slice(0, t.lastIndexOf("[")),
      i = o.map((a) => rr({ name: r, type: n, types: e, value: a }));
    return [
      { type: "bytes32" },
      T(
        ge(
          i.map(([a]) => a),
          i.map(([, a]) => a)
        )
      ),
    ];
  }
  return [{ type: t }, o];
}
var tr = `SOL Signed Message:
`;
function or(e) {
  let r =
      typeof e == "string" ? M(e) : typeof e.raw == "string" ? e.raw : w(e.raw),
    t = M(`${tr}${H(r)}`);
  return j([t, r]);
}
function Ur(e, r) {
  return T(or(e), r);
}
var Fr = 3;
function Tt(
  e,
  { abi: r, address: t, args: o, docsPath: n, functionName: i, sender: a }
) {
  let {
      code: c,
      data: m,
      message: d,
      shortMessage: f,
    } = e instanceof Pe
      ? e
      : e instanceof E
      ? e.walk((s) => "data" in s) || e.walk()
      : {},
    u =
      e instanceof He
        ? new Be({ functionName: i })
        : [Fr, N.code].includes(c) && (m || d || f)
        ? new ve({
            abi: r,
            data: typeof m == "object" ? m.data : m,
            functionName: i,
            message: f ?? d,
          })
        : e;
  return new we(u, {
    abi: r,
    args: o,
    contractAddress: t,
    docsPath: n,
    functionName: i,
    sender: a,
  });
}
function nr(e) {
  let r = T(`0x${e.substring(4)}`).substring(26);
  return he(`0x${r}`);
}
function sr(t) {
  return h(this, arguments, function* ({ hash: e, signature: r }) {
    let o = _(e) ? e : U(e),
      { secp256k1: n } = yield import("./chunk-HLVMP4SF.js");
    return `0x${(() => {
      if (typeof r == "object" && "r" in r && "s" in r) {
        let { r: f, s: u, v: s, yParity: l } = r,
          x = Number(l ?? s),
          g = ir(x);
        return new n.Signature(V(f), V(u)).addRecoveryBit(g);
      }
      let c = _(r) ? r : U(r),
        m = D(`0x${c.slice(130)}`),
        d = ir(m);
      return n.Signature.fromCompact(c.substring(2, 130)).addRecoveryBit(d);
    })()
      .recoverPublicKey(o.substring(2))
      .toHex(!1)}`;
  });
}
function ir(e) {
  if (e === 0 || e === 1) return e;
  if (e === 27) return 0;
  if (e === 28) return 1;
  throw new Error("Invalid yParityOrV value");
}
function Ht(t) {
  return h(this, arguments, function* ({ hash: e, signature: r }) {
    return nr(yield sr({ hash: e, signature: r }));
  });
}
function $t(e, r = "hex") {
  let t = ar(e),
    o = K(new Uint8Array(t.length));
  return t.encode(o), r === "hex" ? w(o.bytes) : o.bytes;
}
function ar(e) {
  return Array.isArray(e) ? Dr(e.map((r) => ar(r))) : Hr(e);
}
function Dr(e) {
  let r = e.reduce((n, i) => n + i.length, 0),
    t = cr(r);
  return {
    length: r <= 55 ? 1 + r : 1 + t + r,
    encode(n) {
      r <= 55
        ? n.pushByte(192 + r)
        : (n.pushByte(247 + t),
          t === 1
            ? n.pushUint8(r)
            : t === 2
            ? n.pushUint16(r)
            : t === 3
            ? n.pushUint24(r)
            : n.pushUint32(r));
      for (let { encode: i } of e) i(n);
    },
  };
}
function Hr(e) {
  let r = typeof e == "string" ? A(e) : e,
    t = cr(r.length);
  return {
    length:
      r.length === 1 && r[0] < 128
        ? 1
        : r.length <= 55
        ? 1 + r.length
        : 1 + t + r.length,
    encode(n) {
      r.length === 1 && r[0] < 128
        ? n.pushBytes(r)
        : r.length <= 55
        ? (n.pushByte(128 + r.length), n.pushBytes(r))
        : (n.pushByte(183 + t),
          t === 1
            ? n.pushUint8(r.length)
            : t === 2
            ? n.pushUint16(r.length)
            : t === 3
            ? n.pushUint24(r.length)
            : n.pushUint32(r.length),
          n.pushBytes(r));
    },
  };
}
function cr(e) {
  if (e < 2 ** 8) return 1;
  if (e < 2 ** 16) return 2;
  if (e < 2 ** 24) return 3;
  if (e < 2 ** 32) return 4;
  throw new E("Length is too large.");
}
var mr = class extends E {
  constructor(
    r,
    {
      account: t,
      docsPath: o,
      chain: n,
      data: i,
      gas: a,
      gasPrice: c,
      maxFeePerGas: m,
      maxPriorityFeePerGas: d,
      nonce: f,
      to: u,
      value: s,
    }
  ) {
    let l = _e({
      from: t?.address,
      to: u,
      value: typeof s < "u" && `${Ee(s)} ${n?.nativeCurrency?.symbol || "SOL"}`,
      data: i,
      gas: a,
      gasPrice: typeof c < "u" && `${k(c)} gwei`,
      maxFeePerGas: typeof m < "u" && `${k(m)} gwei`,
      maxPriorityFeePerGas: typeof d < "u" && `${k(d)} gwei`,
      nonce: f,
    });
    super(r.shortMessage, {
      cause: r,
      docsPath: o,
      metaMessages: [
        ...(r.metaMessages ? [...r.metaMessages, " "] : []),
        "Estimate Gas Arguments:",
        l,
      ].filter(Boolean),
      name: "EstimateGasExecutionError",
    }),
      Object.defineProperty(this, "cause", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0,
      }),
      (this.cause = r);
  }
};
var pr = class extends E {
    constructor() {
      super("`baseFeeMultiplier` must be greater than 1.", {
        name: "BaseFeeScalarError",
      });
    }
  },
  fr = class extends E {
    constructor() {
      super("Chain does not support EIP-1559 fees.", {
        name: "Eip1559FeesNotSupportedError",
      });
    }
  },
  ur = class extends E {
    constructor({ maxPriorityFeePerGas: r }) {
      super(
        `\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${k(
          r
        )} gwei).`,
        { name: "MaxFeePerGasTooLowError" }
      );
    }
  };
var dr = class extends E {
  constructor({ blockHash: r, blockNumber: t }) {
    let o = "Block";
    r && (o = `Block at hash "${r}"`),
      t && (o = `Block at number "${t}"`),
      super(`${o} could not be found.`, { name: "BlockNotFoundError" });
  }
};
var Re = {
  "0x0": "legacy",
  "0x1": "eip2930",
  "0x2": "eip1559",
  "0x3": "eip4844",
  "0x4": "eip7702",
};
function lr(e) {
  let r = v(p({}, e), {
    blockHash: e.blockHash ? e.blockHash : null,
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    chainId: e.chainId ? D(e.chainId) : void 0,
    gas: e.gas ? BigInt(e.gas) : void 0,
    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
    maxFeePerBlobGas: e.maxFeePerBlobGas ? BigInt(e.maxFeePerBlobGas) : void 0,
    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
    maxPriorityFeePerGas: e.maxPriorityFeePerGas
      ? BigInt(e.maxPriorityFeePerGas)
      : void 0,
    nonce: e.nonce ? D(e.nonce) : void 0,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    type: e.type ? Re[e.type] : void 0,
    typeHex: e.type ? e.type : void 0,
    value: e.value ? BigInt(e.value) : void 0,
    v: e.v ? BigInt(e.v) : void 0,
  });
  return (
    e.authorizationList && (r.authorizationList = zr(e.authorizationList)),
    (r.yParity = (() => {
      if (e.yParity) return Number(e.yParity);
      if (typeof r.v == "bigint") {
        if (r.v === 0n || r.v === 27n) return 0;
        if (r.v === 1n || r.v === 28n) return 1;
        if (r.v >= 35n) return r.v % 2n === 0n ? 1 : 0;
      }
    })()),
    r.type === "legacy" &&
      (delete r.accessList,
      delete r.maxFeePerBlobGas,
      delete r.maxFeePerGas,
      delete r.maxPriorityFeePerGas,
      delete r.yParity),
    r.type === "eip2930" &&
      (delete r.maxFeePerBlobGas,
      delete r.maxFeePerGas,
      delete r.maxPriorityFeePerGas),
    r.type === "eip1559" && delete r.maxFeePerBlobGas,
    r
  );
}
function zr(e) {
  return e.map((r) =>
    p(
      p(
        {
          contractAddress: r.address,
          r: r.r,
          s: r.s,
          chainId: Number(r.chainId),
          nonce: Number(r.nonce),
        },
        typeof r.yParity < "u" ? { yParity: Number(r.yParity) } : {}
      ),
      typeof r.v < "u" && typeof r.yParity > "u" ? { v: Number(r.v) } : {}
    )
  );
}
function oo(e) {
  let r = e.transactions?.map((t) => (typeof t == "string" ? t : lr(t)));
  return v(p({}, e), {
    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
    blobGasUsed: e.blobGasUsed ? BigInt(e.blobGasUsed) : void 0,
    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
    excessBlobGas: e.excessBlobGas ? BigInt(e.excessBlobGas) : void 0,
    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
    hash: e.hash ? e.hash : null,
    logsBloom: e.logsBloom ? e.logsBloom : null,
    nonce: e.nonce ? e.nonce : null,
    number: e.number ? BigInt(e.number) : null,
    size: e.size ? BigInt(e.size) : void 0,
    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
    transactions: r,
    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null,
  });
}
function xr(e) {
  let { kzg: r } = e,
    t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"),
    o = typeof e.blobs[0] == "string" ? e.blobs.map((i) => A(i)) : e.blobs,
    n = [];
  for (let i of o) n.push(Uint8Array.from(r.blobToKzgCommitment(i)));
  return t === "bytes" ? n : n.map((i) => w(i));
}
function yr(e) {
  let { kzg: r } = e,
    t = e.to ?? (typeof e.blobs[0] == "string" ? "hex" : "bytes"),
    o = typeof e.blobs[0] == "string" ? e.blobs.map((a) => A(a)) : e.blobs,
    n =
      typeof e.commitments[0] == "string"
        ? e.commitments.map((a) => A(a))
        : e.commitments,
    i = [];
  for (let a = 0; a < o.length; a++) {
    let c = o[a],
      m = n[a];
    i.push(Uint8Array.from(r.computeBlobKzgProof(c, m)));
  }
  return t === "bytes" ? i : i.map((a) => w(a));
}
function hr(e, r) {
  let t = r || "hex",
    o = Le(_(e, { strict: !1 }) ? De(e) : e);
  return t === "bytes" ? o : U(o);
}
function gr(e) {
  let { commitment: r, version: t = 1 } = e,
    o = e.to ?? (typeof r == "string" ? "hex" : "bytes"),
    n = hr(r, "bytes");
  return n.set([t], 0), o === "bytes" ? n : w(n);
}
function To(e) {
  let { commitments: r, version: t } = e,
    o = e.to ?? (typeof r[0] == "string" ? "hex" : "bytes"),
    n = [];
  for (let i of r) n.push(gr({ commitment: i, to: o, version: t }));
  return n;
}
var ce = class extends E {
    constructor({ maxSize: r, size: t }) {
      super("Blob size is too large.", {
        metaMessages: [`Max: ${r} bytes`, `Given: ${t} bytes`],
        name: "BlobSizeTooLargeError",
      });
    }
  },
  me = class extends E {
    constructor() {
      super("Blob data must not be empty.", { name: "EmptyBlobError" });
    }
  };
function br(e) {
  let r = e.to ?? (typeof e.data == "string" ? "hex" : "bytes"),
    t = typeof e.data == "string" ? A(e.data) : e.data,
    o = H(t);
  if (!o) throw new me();
  if (o > 761855) throw new ce({ maxSize: 761855, size: o });
  let n = [],
    i = !0,
    a = 0;
  for (; i; ) {
    let c = K(new Uint8Array(131072)),
      m = 0;
    for (; m < 4096; ) {
      let d = t.slice(a, a + 31);
      if ((c.pushByte(0), c.pushBytes(d), d.length < 31)) {
        c.pushByte(128), (i = !1);
        break;
      }
      m++, (a += 31);
    }
    n.push(c);
  }
  return r === "bytes" ? n.map((c) => c.bytes) : n.map((c) => w(c.bytes));
}
function Mo(e) {
  let { data: r, kzg: t, to: o } = e,
    n = e.blobs ?? br({ data: r, to: o }),
    i = e.commitments ?? xr({ blobs: n, kzg: t, to: o }),
    a = e.proofs ?? yr({ blobs: n, commitments: i, kzg: t, to: o }),
    c = [];
  for (let m = 0; m < n.length; m++)
    c.push({ blob: n[m], commitment: i[m], proof: a[m] });
  return c;
}
function $o(e) {
  if (e.type) return e.type;
  if (typeof e.authorizationList < "u") return "eip7702";
  if (
    typeof e.blobs < "u" ||
    typeof e.blobVersionedHashes < "u" ||
    typeof e.maxFeePerBlobGas < "u" ||
    typeof e.sidecars < "u"
  )
    return "eip4844";
  if (typeof e.maxFeePerGas < "u" || typeof e.maxPriorityFeePerGas < "u")
    return "eip1559";
  if (typeof e.gasPrice < "u")
    return typeof e.accessList < "u" ? "eip2930" : "legacy";
  throw new Oe({ transaction: e });
}
function Er(e, { args: r, eventName: t } = {}) {
  return p(
    v(p({}, e), {
      blockHash: e.blockHash ? e.blockHash : null,
      blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
      logIndex: e.logIndex ? Number(e.logIndex) : null,
      transactionHash: e.transactionHash ? e.transactionHash : null,
      transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
    }),
    t ? { args: r, eventName: t } : {}
  );
}
function pe(e) {
  return h(this, null, function* () {
    return new Promise((r) => setTimeout(r, e));
  });
}
function Wo({ chain: e, currentChainId: r }) {
  if (!e) throw new qe();
  if (r !== e.id) throw new $e({ chain: e, currentChainId: r });
}
var fe = 256,
  ue;
function de(e = 11) {
  if (!ue || fe + e > 256 * 2) {
    (ue = ""), (fe = 0);
    for (let r = 0; r < 256; r++)
      ue += ((256 + Math.random() * 256) | 0).toString(16).substring(1);
  }
  return ue.substring(fe, fe++ + e);
}
function Gr(e) {
  let {
      batch: r,
      cacheTime: t = e.pollingInterval ?? 4e3,
      ccipRead: o,
      key: n = "base",
      name: i = "Base Client",
      pollingInterval: a = 4e3,
      type: c = "base",
    } = e,
    m = e.chain,
    d = e.account ? ke(e.account) : void 0,
    {
      config: f,
      request: u,
      value: s,
    } = e.transport({ chain: m, pollingInterval: a }),
    l = p(p({}, f), s),
    x = {
      account: d,
      batch: r,
      cacheTime: t,
      ccipRead: o,
      chain: m,
      key: n,
      name: i,
      pollingInterval: a,
      request: u,
      transport: l,
      type: c,
      uid: de(),
    };
  function g(b) {
    return (y) => {
      let I = y(b);
      for (let C in x) delete I[C];
      let B = p(p({}, b), I);
      return Object.assign(B, { extend: g(B) });
    };
  }
  return Object.assign(x, { extend: g(x) });
}
var le = new Ge(8192);
function Ir(e, { enabled: r = !0, id: t }) {
  if (!r || !t) return e();
  if (le.get(t)) return le.get(t);
  let o = e().finally(() => le.delete(t));
  return le.set(t, o), o;
}
function Ce(
  e,
  { delay: r = 100, retryCount: t = 2, shouldRetry: o = () => !0 } = {}
) {
  return new Promise((n, i) => {
    let a = (...m) =>
      h(this, [...m], function* ({ count: c = 0 } = {}) {
        let d = (u) =>
          h(this, [u], function* ({ error: f }) {
            let s = typeof r == "function" ? r({ count: c, error: f }) : r;
            s && (yield pe(s)), a({ count: c + 1 });
          });
        try {
          let f = yield e();
          n(f);
        } catch (f) {
          if (c < t && (yield o({ count: c, error: f })))
            return d({ error: f });
          i(f);
        }
      });
    a();
  });
}
function Tr(e, r = {}) {
  return (n, ...i) =>
    h(this, [n, ...i], function* (t, o = {}) {
      let {
          dedupe: a = !1,
          retryDelay: c = 150,
          retryCount: m = 3,
          uid: d,
        } = p(p({}, r), o),
        f = a ? T(M(`${d}.${L(t)}`)) : void 0;
      return Ir(
        () =>
          Ce(
            () =>
              h(this, null, function* () {
                try {
                  return yield e(t);
                } catch (u) {
                  let s = u;
                  switch (s.code) {
                    case W.code:
                      throw new W(s);
                    case J.code:
                      throw new J(s);
                    case Z.code:
                      throw new Z(s, { mSOLod: t.mSOLod });
                    case X.code:
                      throw new X(s);
                    case N.code:
                      throw new N(s);
                    case Q.code:
                      throw new Q(s);
                    case Y.code:
                      throw new Y(s);
                    case ee.code:
                      throw new ee(s);
                    case $.code:
                      throw new $(s);
                    case re.code:
                      throw new re(s, { mSOLod: t.mSOLod });
                    case O.code:
                      throw new O(s);
                    case te.code:
                      throw new te(s);
                    case G.code:
                      throw new G(s);
                    case oe.code:
                      throw new oe(s);
                    case ne.code:
                      throw new ne(s);
                    case ie.code:
                      throw new ie(s);
                    case se.code:
                      throw new se(s);
                    case ae.code:
                      throw new ae(s);
                    case 5e3:
                      throw new G(s);
                    default:
                      throw u instanceof E ? u : new Te(s);
                  }
                }
              }),
            {
              delay: ({ count: u, error: s }) => {
                if (s && s instanceof z) {
                  let l = s?.headers?.get("Retry-After");
                  if (l?.match(/\d/)) return Number.parseInt(l) * 1e3;
                }
                return ~~(1 << u) * c;
              },
              retryCount: m,
              shouldRetry: ({ error: u }) => Mr(u),
            }
          ),
        { enabled: a, id: f }
      );
    });
}
function Mr(e) {
  return "code" in e && typeof e.code == "number"
    ? e.code === -1 || e.code === O.code || e.code === N.code
    : e instanceof z && e.status
    ? e.status === 403 ||
      e.status === 408 ||
      e.status === 413 ||
      e.status === 429 ||
      e.status === 500 ||
      e.status === 502 ||
      e.status === 503 ||
      e.status === 504
    : !0;
}
function q(
  {
    key: e,
    name: r,
    request: t,
    retryCount: o = 3,
    retryDelay: n = 150,
    timeout: i,
    type: a,
  },
  c
) {
  let m = de();
  return {
    config: {
      key: e,
      name: r,
      request: t,
      retryCount: o,
      retryDelay: n,
      timeout: i,
      type: a,
    },
    request: Tr(t, { retryCount: o, retryDelay: n, uid: m }),
    value: c,
  };
}
function kr(e, r = {}) {
  let { key: t = "custom", name: o = "Custom Provider", retryDelay: n } = r;
  return ({ retryCount: i }) =>
    q({
      key: t,
      name: o,
      request: e.request.bind(e),
      retryCount: r.retryCount ?? i,
      retryDelay: n,
      type: "custom",
    });
}
function Lr(e, r = {}) {
  let {
    key: t = "fallback",
    name: o = "Fallback",
    rank: n = !1,
    retryCount: i,
    retryDelay: a,
  } = r;
  return (u) => {
    var s = u,
      { chain: c, pollingInterval: m = 4e3, timeout: d } = s,
      f = Fe(s, ["chain", "pollingInterval", "timeout"]);
    let l = e,
      x = () => {},
      g = q(
        {
          key: t,
          name: o,
          request(B) {
            return h(this, arguments, function* ({ mSOLod: y, params: I }) {
              let C = (P = 0) =>
                h(this, null, function* () {
                  let R = l[P](
                    v(p({}, f), { chain: c, retryCount: 0, timeout: d })
                  );
                  try {
                    let S = yield R.request({ mSOLod: y, params: I });
                    return (
                      x({
                        mSOLod: y,
                        params: I,
                        response: S,
                        transport: R,
                        status: "success",
                      }),
                      S
                    );
                  } catch (S) {
                    if (
                      (x({
                        error: S,
                        mSOLod: y,
                        params: I,
                        transport: R,
                        status: "error",
                      }),
                      $r(S) || P === l.length - 1)
                    )
                      throw S;
                    return C(P + 1);
                  }
                });
              return C();
            });
          },
          retryCount: i,
          retryDelay: a,
          type: "fallback",
        },
        {
          onResponse: (y) => (x = y),
          transports: l.map((y) => y({ chain: c, retryCount: 0 })),
        }
      );
    if (n) {
      let y = typeof n == "object" ? n : {};
      qr({
        chain: c,
        interval: y.interval ?? m,
        onTransports: (I) => (l = I),
        sampleCount: y.sampleCount,
        timeout: y.timeout,
        transports: l,
        weights: y.weights,
      });
    }
    return g;
  };
}
function $r(e) {
  return (
    "code" in e &&
    typeof e.code == "number" &&
    (e.code === $.code || e.code === G.code || e.code === 5e3)
  );
}
function qr({
  chain: e,
  interval: r = 4e3,
  onTransports: t,
  sampleCount: o = 10,
  timeout: n = 1e3,
  transports: i,
  weights: a = {},
}) {
  let { stability: c = 0.7, latency: m = 0.3 } = a,
    d = [],
    f = () =>
      h(this, null, function* () {
        let u = yield Promise.all(
          i.map((x) =>
            h(this, null, function* () {
              let g = x({ chain: e, retryCount: 0, timeout: n }),
                b = Date.now(),
                y,
                I;
              try {
                yield g.request({ mSOLod: "net_listening" }), (I = 1);
              } catch {
                I = 0;
              } finally {
                y = Date.now();
              }
              return { latency: y - b, success: I };
            })
          )
        );
        d.push(u), d.length > o && d.shift();
        let s = Math.max(
            ...d.map((x) => Math.max(...x.map(({ latency: g }) => g)))
          ),
          l = i
            .map((x, g) => {
              let b = d.map((P) => P[g].latency),
                I = 1 - b.reduce((P, R) => P + R, 0) / b.length / s,
                B = d.map((P) => P[g].success),
                C = B.reduce((P, R) => P + R, 0) / B.length;
              return C === 0 ? [0, g] : [m * I + c * C, g];
            })
            .sort((x, g) => g[0] - x[0]);
        t(l.map(([, x]) => i[x])), yield pe(r), f();
      });
  f();
}
var xe = class extends E {
  constructor() {
    super(
      "No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",
      { docsPath: "/docs/clients/intro", name: "UrlRequiredError" }
    );
  }
};
function Se(
  e,
  { errorInstance: r = new Error("timed out"), timeout: t, signal: o }
) {
  return new Promise((n, i) => {
    h(this, null, function* () {
      let a;
      try {
        let c = new AbortController();
        t > 0 &&
          (a = setTimeout(() => {
            o ? c.abort() : i(r);
          }, t)),
          n(yield e({ signal: c?.signal || null }));
      } catch (c) {
        c?.name === "AbortError" && i(r), i(c);
      } finally {
        clearTimeout(a);
      }
    });
  });
}
function _r() {
  return {
    current: 0,
    take() {
      return this.current++;
    },
    reset() {
      this.current = 0;
    },
  };
}
var Ae = _r();
function wr(e, r = {}) {
  return {
    request(o) {
      return h(this, null, function* () {
        let {
            body: n,
            onRequest: i = r.onRequest,
            onResponse: a = r.onResponse,
            timeout: c = r.timeout ?? 1e4,
          } = o,
          m = p(p({}, r.fetchOptions ?? {}), o.fetchOptions ?? {}),
          { headers: d, mSOLod: f, signal: u } = m;
        try {
          let s = yield Se(
            (g) =>
              h(this, [g], function* ({ signal: x }) {
                let b = v(p({}, m), {
                    body: Array.isArray(n)
                      ? L(
                          n.map((B) =>
                            p({ jsonrpc: "2.0", id: B.id ?? Ae.take() }, B)
                          )
                        )
                      : L(p({ jsonrpc: "2.0", id: n.id ?? Ae.take() }, n)),
                    headers: p({ "Content-Type": "application/json" }, d),
                    mSOLod: f || "POST",
                    signal: u || (c > 0 ? x : null),
                  }),
                  y = new Request(e, b);
                return i && (yield i(y)), yield fetch(e, b);
              }),
            {
              errorInstance: new Ie({ body: n, url: e }),
              timeout: c,
              signal: !0,
            }
          );
          a && (yield a(s));
          let l;
          if (
            (s.headers.get("Content-Type")?.startsWith("application/json")
              ? (l = yield s.json())
              : ((l = yield s.text()), (l = JSON.parse(l || "{}"))),
            !s.ok)
          )
            throw new z({
              body: n,
              details: L(l.error) || s.statusText,
              headers: s.headers,
              status: s.status,
              url: e,
            });
          return l;
        } catch (s) {
          throw s instanceof z || s instanceof Ie
            ? s
            : new z({ body: n, cause: s, url: e });
        }
      });
    },
  };
}
function Or(e, r = {}) {
  let {
    batch: t,
    fetchOptions: o,
    key: n = "http",
    name: i = "HTTP JSON-RPC",
    onFetchRequest: a,
    onFetchResponse: c,
    retryDelay: m,
  } = r;
  return ({ chain: d, retryCount: f, timeout: u }) => {
    let { batchSize: s = 1e3, wait: l = 0 } = typeof t == "object" ? t : {},
      x = r.retryCount ?? f,
      g = u ?? r.timeout ?? 1e4,
      b = e || d?.rpcUrls.default.http[0];
    if (!b) throw new xe();
    let y = wr(b, { fetchOptions: o, onRequest: a, onResponse: c, timeout: g });
    return q(
      {
        key: n,
        name: i,
        request(P) {
          return h(this, arguments, function* ({ mSOLod: B, params: C }) {
            let R = { mSOLod: B, params: C },
              { schedule: S } = je({
                id: b,
                wait: l,
                shouldSplitBatch(F) {
                  return F.length > s;
                },
                fn: (F) => y.request({ body: F }),
                sort: (F, Rr) => F.id - Rr.id,
              }),
              Br = (F) =>
                h(this, null, function* () {
                  return t ? S(F) : [yield y.request({ body: F })];
                }),
              [{ error: Ue, result: Pr }] = yield Br(R);
            if (Ue) throw new Ve({ body: R, error: Ue, url: b });
            return Pr;
          });
        },
        retryCount: x,
        retryDelay: m,
        timeout: g,
        type: "http",
      },
      { fetchOptions: o, url: b }
    );
  };
}
function Vn(e) {
  return p({ formatters: void 0, fees: void 0, serializers: void 0 }, e);
}
var Vr = { "0x0": "reverted", "0x1": "success" };
function Xn(e) {
  let r = v(p({}, e), {
    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
    contractAddress: e.contractAddress ? e.contractAddress : null,
    cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
    effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
    logs: e.logs ? e.logs.map((t) => Er(t)) : null,
    to: e.to ? e.to : null,
    transactionIndex: e.transactionIndex ? D(e.transactionIndex) : null,
    status: e.status ? Vr[e.status] : null,
    type: e.type ? Re[e.type] || e.type : null,
  });
  return (
    e.blobGasPrice && (r.blobGasPrice = BigInt(e.blobGasPrice)),
    e.blobGasUsed && (r.blobGasUsed = BigInt(e.blobGasUsed)),
    r
  );
}
function vr(e, r) {
  let [t, o = "0"] = e.split("."),
    n = t.startsWith("-");
  if ((n && (t = t.slice(1)), (o = o.replace(/(0+)$/, "")), r === 0))
    Math.round(+`.${o}`) === 1 && (t = `${BigInt(t) + 1n}`), (o = "");
  else if (o.length > r) {
    let [i, a, c] = [o.slice(0, r - 1), o.slice(r - 1, r), o.slice(r)],
      m = Math.round(+`${a}.${c}`);
    m > 9
      ? (o = `${BigInt(i) + BigInt(1)}0`.padStart(i.length + 1, "0"))
      : (o = `${i}${m}`),
      o.length > r && ((o = o.slice(1)), (t = `${BigInt(t) + 1n}`)),
      (o = o.slice(0, r));
  } else o = o.padEnd(r, "0");
  return BigInt(`${n ? "-" : ""}${t}${o}`);
}
function jr(e, r = "wei") {
  return vr(e, be[r]);
}
export {
  Ht as a,
  $t as b,
  Wo as c,
  pr as d,
  fr as e,
  ur as f,
  dr as g,
  lr as h,
  oo as i,
  mr as j,
  xr as k,
  yr as l,
  To as m,
  Mo as n,
  $o as o,
  Tt as p,
  Xn as q,
  pe as r,
  Ce as s,
  Vn as t,
  Se as u,
  Cr as v,
  Ur as w,
  jr as x,
  Gr as y,
  kr as z,
  Lr as A,
  Or as B,
};
