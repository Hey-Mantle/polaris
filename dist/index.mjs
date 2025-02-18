import e, { createContext as Nt, useContext as It, useState as be } from "react";
import { Banner as Fe, BlockStack as x, Text as h, InlineStack as Z, Thumbnail as Bt, Button as ce, Divider as Re, Box as ne, Badge as qe, Icon as ye, Grid as Se, Page as Ne, ButtonGroup as _e, Layout as ge, Card as Ae, Modal as st, InlineGrid as Ht } from "@shopify/polaris";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ft(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var pt = { exports: {} };
(function(n, a) {
  (function(u, s) {
    n.exports = s();
  })(mt, function() {
    var u = 1e3, s = 6e4, b = 36e5, y = "millisecond", d = "second", j = "minute", m = "hour", k = "day", P = "week", M = "month", T = "quarter", A = "year", B = "date", v = "Invalid Date", g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, O = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, w = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f) {
      var o = ["th", "st", "nd", "rd"], l = f % 100;
      return "[" + f + (o[(l - 20) % 10] || o[l] || o[0]) + "]";
    } }, L = function(f, o, l) {
      var p = String(f);
      return !p || p.length >= o ? f : "" + Array(o + 1 - p.length).join(l) + f;
    }, Y = { s: L, z: function(f) {
      var o = -f.utcOffset(), l = Math.abs(o), p = Math.floor(l / 60), i = l % 60;
      return (o <= 0 ? "+" : "-") + L(p, 2, "0") + ":" + L(i, 2, "0");
    }, m: function f(o, l) {
      if (o.date() < l.date())
        return -f(l, o);
      var p = 12 * (l.year() - o.year()) + (l.month() - o.month()), i = o.clone().add(p, M), $ = l - i < 0, D = o.clone().add(p + ($ ? -1 : 1), M);
      return +(-(p + (l - i) / ($ ? i - D : D - i)) || 0);
    }, a: function(f) {
      return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
    }, p: function(f) {
      return { M, y: A, w: P, d: k, D: B, h: m, m: j, s: d, ms: y, Q: T }[f] || String(f || "").toLowerCase().replace(/s$/, "");
    }, u: function(f) {
      return f === void 0;
    } }, E = "en", S = {};
    S[E] = w;
    var G = "$isDayjsObject", ee = function(f) {
      return f instanceof R || !(!f || !f[G]);
    }, oe = function f(o, l, p) {
      var i;
      if (!o)
        return E;
      if (typeof o == "string") {
        var $ = o.toLowerCase();
        S[$] && (i = $), l && (S[$] = l, i = $);
        var D = o.split("-");
        if (!i && D.length > 1)
          return f(D[0]);
      } else {
        var z = o.name;
        S[z] = o, i = z;
      }
      return !p && i && (E = i), i || !p && E;
    }, U = function(f, o) {
      if (ee(f))
        return f.clone();
      var l = typeof o == "object" ? o : {};
      return l.date = f, l.args = arguments, new R(l);
    }, F = Y;
    F.l = oe, F.i = ee, F.w = function(f, o) {
      return U(f, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
    };
    var R = function() {
      function f(l) {
        this.$L = oe(l.locale, null, !0), this.parse(l), this.$x = this.$x || l.x || {}, this[G] = !0;
      }
      var o = f.prototype;
      return o.parse = function(l) {
        this.$d = function(p) {
          var i = p.date, $ = p.utc;
          if (i === null)
            return /* @__PURE__ */ new Date(NaN);
          if (F.u(i))
            return /* @__PURE__ */ new Date();
          if (i instanceof Date)
            return new Date(i);
          if (typeof i == "string" && !/Z$/i.test(i)) {
            var D = i.match(g);
            if (D) {
              var z = D[2] - 1 || 0, K = (D[7] || "0").substring(0, 3);
              return $ ? new Date(Date.UTC(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, K)) : new Date(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, K);
            }
          }
          return new Date(i);
        }(l), this.init();
      }, o.init = function() {
        var l = this.$d;
        this.$y = l.getFullYear(), this.$M = l.getMonth(), this.$D = l.getDate(), this.$W = l.getDay(), this.$H = l.getHours(), this.$m = l.getMinutes(), this.$s = l.getSeconds(), this.$ms = l.getMilliseconds();
      }, o.$utils = function() {
        return F;
      }, o.isValid = function() {
        return this.$d.toString() !== v;
      }, o.isSame = function(l, p) {
        var i = U(l);
        return this.startOf(p) <= i && i <= this.endOf(p);
      }, o.isAfter = function(l, p) {
        return U(l) < this.startOf(p);
      }, o.isBefore = function(l, p) {
        return this.endOf(p) < U(l);
      }, o.$g = function(l, p, i) {
        return F.u(l) ? this[p] : this.set(i, l);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(l, p) {
        var i = this, $ = !!F.u(p) || p, D = F.p(l), z = function(ue, Q) {
          var fe = F.w(i.$u ? Date.UTC(i.$y, Q, ue) : new Date(i.$y, Q, ue), i);
          return $ ? fe : fe.endOf(k);
        }, K = function(ue, Q) {
          return F.w(i.toDate()[ue].apply(i.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Q)), i);
        }, q = this.$W, te = this.$M, le = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case A:
            return $ ? z(1, 0) : z(31, 11);
          case M:
            return $ ? z(1, te) : z(0, te + 1);
          case P:
            var se = this.$locale().weekStart || 0, me = (q < se ? q + 7 : q) - se;
            return z($ ? le - me : le + (6 - me), te);
          case k:
          case B:
            return K(de + "Hours", 0);
          case m:
            return K(de + "Minutes", 1);
          case j:
            return K(de + "Seconds", 2);
          case d:
            return K(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o.endOf = function(l) {
        return this.startOf(l, !1);
      }, o.$set = function(l, p) {
        var i, $ = F.p(l), D = "set" + (this.$u ? "UTC" : ""), z = (i = {}, i[k] = D + "Date", i[B] = D + "Date", i[M] = D + "Month", i[A] = D + "FullYear", i[m] = D + "Hours", i[j] = D + "Minutes", i[d] = D + "Seconds", i[y] = D + "Milliseconds", i)[$], K = $ === k ? this.$D + (p - this.$W) : p;
        if ($ === M || $ === A) {
          var q = this.clone().set(B, 1);
          q.$d[z](K), q.init(), this.$d = q.set(B, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          z && this.$d[z](K);
        return this.init(), this;
      }, o.set = function(l, p) {
        return this.clone().$set(l, p);
      }, o.get = function(l) {
        return this[F.p(l)]();
      }, o.add = function(l, p) {
        var i, $ = this;
        l = Number(l);
        var D = F.p(p), z = function(te) {
          var le = U($);
          return F.w(le.date(le.date() + Math.round(te * l)), $);
        };
        if (D === M)
          return this.set(M, this.$M + l);
        if (D === A)
          return this.set(A, this.$y + l);
        if (D === k)
          return z(1);
        if (D === P)
          return z(7);
        var K = (i = {}, i[j] = s, i[m] = b, i[d] = u, i)[D] || 1, q = this.$d.getTime() + l * K;
        return F.w(q, this);
      }, o.subtract = function(l, p) {
        return this.add(-1 * l, p);
      }, o.format = function(l) {
        var p = this, i = this.$locale();
        if (!this.isValid())
          return i.invalidDate || v;
        var $ = l || "YYYY-MM-DDTHH:mm:ssZ", D = F.z(this), z = this.$H, K = this.$m, q = this.$M, te = i.weekdays, le = i.months, de = i.meridiem, se = function(Q, fe, ve, Ce) {
          return Q && (Q[fe] || Q(p, $)) || ve[fe].slice(0, Ce);
        }, me = function(Q) {
          return F.s(z % 12 || 12, Q, "0");
        }, ue = de || function(Q, fe, ve) {
          var Ce = Q < 12 ? "AM" : "PM";
          return ve ? Ce.toLowerCase() : Ce;
        };
        return $.replace(O, function(Q, fe) {
          return fe || function(ve) {
            switch (ve) {
              case "YY":
                return String(p.$y).slice(-2);
              case "YYYY":
                return F.s(p.$y, 4, "0");
              case "M":
                return q + 1;
              case "MM":
                return F.s(q + 1, 2, "0");
              case "MMM":
                return se(i.monthsShort, q, le, 3);
              case "MMMM":
                return se(le, q);
              case "D":
                return p.$D;
              case "DD":
                return F.s(p.$D, 2, "0");
              case "d":
                return String(p.$W);
              case "dd":
                return se(i.weekdaysMin, p.$W, te, 2);
              case "ddd":
                return se(i.weekdaysShort, p.$W, te, 3);
              case "dddd":
                return te[p.$W];
              case "H":
                return String(z);
              case "HH":
                return F.s(z, 2, "0");
              case "h":
                return me(1);
              case "hh":
                return me(2);
              case "a":
                return ue(z, K, !0);
              case "A":
                return ue(z, K, !1);
              case "m":
                return String(K);
              case "mm":
                return F.s(K, 2, "0");
              case "s":
                return String(p.$s);
              case "ss":
                return F.s(p.$s, 2, "0");
              case "SSS":
                return F.s(p.$ms, 3, "0");
              case "Z":
                return D;
            }
            return null;
          }(Q) || D.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(l, p, i) {
        var $, D = this, z = F.p(p), K = U(l), q = (K.utcOffset() - this.utcOffset()) * s, te = this - K, le = function() {
          return F.m(D, K);
        };
        switch (z) {
          case A:
            $ = le() / 12;
            break;
          case M:
            $ = le();
            break;
          case T:
            $ = le() / 3;
            break;
          case P:
            $ = (te - q) / 6048e5;
            break;
          case k:
            $ = (te - q) / 864e5;
            break;
          case m:
            $ = te / b;
            break;
          case j:
            $ = te / s;
            break;
          case d:
            $ = te / u;
            break;
          default:
            $ = te;
        }
        return i ? $ : F.a($);
      }, o.daysInMonth = function() {
        return this.endOf(M).$D;
      }, o.$locale = function() {
        return S[this.$L];
      }, o.locale = function(l, p) {
        if (!l)
          return this.$L;
        var i = this.clone(), $ = oe(l, p, !0);
        return $ && (i.$L = $), i;
      }, o.clone = function() {
        return F.w(this.$d, this);
      }, o.toDate = function() {
        return new Date(this.valueOf());
      }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o.toISOString = function() {
        return this.$d.toISOString();
      }, o.toString = function() {
        return this.$d.toUTCString();
      }, f;
    }(), re = R.prototype;
    return U.prototype = re, [["$ms", y], ["$s", d], ["$m", j], ["$H", m], ["$W", k], ["$M", M], ["$y", A], ["$D", B]].forEach(function(f) {
      re[f[1]] = function(o) {
        return this.$g(o, f[0], f[1]);
      };
    }), U.extend = function(f, o) {
      return f.$i || (f(o, R, U), f.$i = !0), U;
    }, U.locale = oe, U.isDayjs = ee, U.unix = function(f) {
      return U(1e3 * f);
    }, U.en = S[E], U.Ls = S, U.p = {}, U;
  });
})(pt);
var zt = pt.exports;
const je = /* @__PURE__ */ ft(zt);
var Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ut;
function Wt() {
  if (ut)
    return Me;
  ut = 1;
  var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(j, m, k) {
    var P, M = {}, T = null, A = null;
    k !== void 0 && (T = "" + k), m.key !== void 0 && (T = "" + m.key), m.ref !== void 0 && (A = m.ref);
    for (P in m)
      s.call(m, P) && !y.hasOwnProperty(P) && (M[P] = m[P]);
    if (j && j.defaultProps)
      for (P in m = j.defaultProps, m)
        M[P] === void 0 && (M[P] = m[P]);
    return { $$typeof: a, type: j, key: T, ref: A, props: M, _owner: b.current };
  }
  return Me.Fragment = u, Me.jsx = d, Me.jsxs = d, Me;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Ut() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), b = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), j = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), B = Symbol.iterator, v = "@@iterator";
    function g(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = B && t[B] || t[v];
      return typeof r == "function" ? r : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), C = 1; C < r; C++)
          c[C - 1] = arguments[C];
        L("error", t, c);
      }
    }
    function L(t, r, c) {
      {
        var C = O.ReactDebugCurrentFrame, H = C.getStackAddendum();
        H !== "" && (r += "%s", c = c.concat([H]));
        var W = c.map(function(I) {
          return String(I);
        });
        W.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var Y = !1, E = !1, S = !1, G = !1, ee = !1, oe;
    oe = Symbol.for("react.module.reference");
    function U(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === y || ee || t === b || t === k || t === P || G || t === A || Y || E || S || typeof t == "object" && t !== null && (t.$$typeof === T || t.$$typeof === M || t.$$typeof === d || t.$$typeof === j || t.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === oe || t.getModuleId !== void 0));
    }
    function F(t, r, c) {
      var C = t.displayName;
      if (C)
        return C;
      var H = r.displayName || r.name || "";
      return H !== "" ? c + "(" + H + ")" : c;
    }
    function R(t) {
      return t.displayName || "Context";
    }
    function re(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case u:
          return "Portal";
        case y:
          return "Profiler";
        case b:
          return "StrictMode";
        case k:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case j:
            var r = t;
            return R(r) + ".Consumer";
          case d:
            var c = t;
            return R(c._context) + ".Provider";
          case m:
            return F(t, t.render, "ForwardRef");
          case M:
            var C = t.displayName || null;
            return C !== null ? C : re(t.type) || "Memo";
          case T: {
            var H = t, W = H._payload, I = H._init;
            try {
              return re(I(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var f = Object.assign, o = 0, l, p, i, $, D, z, K;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function te() {
      {
        if (o === 0) {
          l = console.log, p = console.info, i = console.warn, $ = console.error, D = console.group, z = console.groupCollapsed, K = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        o++;
      }
    }
    function le() {
      {
        if (o--, o === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: f({}, t, {
              value: l
            }),
            info: f({}, t, {
              value: p
            }),
            warn: f({}, t, {
              value: i
            }),
            error: f({}, t, {
              value: $
            }),
            group: f({}, t, {
              value: D
            }),
            groupCollapsed: f({}, t, {
              value: z
            }),
            groupEnd: f({}, t, {
              value: K
            })
          });
        }
        o < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = O.ReactCurrentDispatcher, se;
    function me(t, r, c) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (H) {
            var C = H.stack.trim().match(/\n( *(at )?)/);
            se = C && C[1] || "";
          }
        return `
` + se + t;
      }
    }
    var ue = !1, Q;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new fe();
    }
    function ve(t, r) {
      if (!t || ue)
        return "";
      {
        var c = Q.get(t);
        if (c !== void 0)
          return c;
      }
      var C;
      ue = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = de.current, de.current = null, te();
      try {
        if (r) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (pe) {
              C = pe;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (pe) {
              C = pe;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pe) {
            C = pe;
          }
          t();
        }
      } catch (pe) {
        if (pe && C && typeof pe.stack == "string") {
          for (var N = pe.stack.split(`
`), ae = C.stack.split(`
`), J = N.length - 1, X = ae.length - 1; J >= 1 && X >= 0 && N[J] !== ae[X]; )
            X--;
          for (; J >= 1 && X >= 0; J--, X--)
            if (N[J] !== ae[X]) {
              if (J !== 1 || X !== 1)
                do
                  if (J--, X--, X < 0 || N[J] !== ae[X]) {
                    var ie = `
` + N[J].replace(" at new ", " at ");
                    return t.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", t.displayName)), typeof t == "function" && Q.set(t, ie), ie;
                  }
                while (J >= 1 && X >= 0);
              break;
            }
        }
      } finally {
        ue = !1, de.current = W, le(), Error.prepareStackTrace = H;
      }
      var De = t ? t.displayName || t.name : "", it = De ? me(De) : "";
      return typeof t == "function" && Q.set(t, it), it;
    }
    function Ce(t, r, c) {
      return ve(t, !1);
    }
    function ht(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function Oe(t, r, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ve(t, ht(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case k:
          return me("Suspense");
        case P:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            return Ce(t.render);
          case M:
            return Oe(t.type, r, c);
          case T: {
            var C = t, H = C._payload, W = C._init;
            try {
              return Oe(W(H), r, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Je = {}, Ge = O.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var r = t._owner, c = Oe(t.type, t._source, r ? r.type : null);
        Ge.setExtraStackFrame(c);
      } else
        Ge.setExtraStackFrame(null);
    }
    function vt(t, r, c, C, H) {
      {
        var W = Function.call.bind(Le);
        for (var I in t)
          if (W(t, I)) {
            var N = void 0;
            try {
              if (typeof t[I] != "function") {
                var ae = Error((C || "React class") + ": " + c + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              N = t[I](r, I, C, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (J) {
              N = J;
            }
            N && !(N instanceof Error) && (xe(H), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", c, I, typeof N), xe(null)), N instanceof Error && !(N.message in Je) && (Je[N.message] = !0, xe(H), w("Failed %s type: %s", c, N.message), xe(null));
          }
      }
    }
    var Et = Array.isArray;
    function Be(t) {
      return Et(t);
    }
    function bt(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, c = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function St(t) {
      try {
        return Xe(t), !1;
      } catch {
        return !0;
      }
    }
    function Xe(t) {
      return "" + t;
    }
    function Qe(t) {
      if (St(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(t)), Xe(t);
    }
    var Pe = O.ReactCurrentOwner, wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt, He;
    He = {};
    function Ct(t) {
      if (Le.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (Le.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Dt(t, r) {
      if (typeof t.ref == "string" && Pe.current && r && Pe.current.stateNode !== r) {
        var c = re(Pe.current.type);
        He[c] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', re(Pe.current.type), t.ref), He[c] = !0);
      }
    }
    function kt(t, r) {
      {
        var c = function() {
          et || (et = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function Pt(t, r) {
      {
        var c = function() {
          tt || (tt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Mt = function(t, r, c, C, H, W, I) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: c,
        props: I,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return N._store = {}, Object.defineProperty(N._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(N, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function At(t, r, c, C, H) {
      {
        var W, I = {}, N = null, ae = null;
        c !== void 0 && (Qe(c), N = "" + c), $t(r) && (Qe(r.key), N = "" + r.key), Ct(r) && (ae = r.ref, Dt(r, H));
        for (W in r)
          Le.call(r, W) && !wt.hasOwnProperty(W) && (I[W] = r[W]);
        if (t && t.defaultProps) {
          var J = t.defaultProps;
          for (W in J)
            I[W] === void 0 && (I[W] = J[W]);
        }
        if (N || ae) {
          var X = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          N && kt(I, X), ae && Pt(I, X);
        }
        return Mt(t, N, ae, H, C, Pe.current, I);
      }
    }
    var ze = O.ReactCurrentOwner, nt = O.ReactDebugCurrentFrame;
    function $e(t) {
      if (t) {
        var r = t._owner, c = Oe(t.type, t._source, r ? r.type : null);
        nt.setExtraStackFrame(c);
      } else
        nt.setExtraStackFrame(null);
    }
    var We;
    We = !1;
    function Ue(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function rt() {
      {
        if (ze.current) {
          var t = re(ze.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ot(t) {
      {
        if (t !== void 0) {
          var r = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + r + ":" + c + ".";
        }
        return "";
      }
    }
    var at = {};
    function Lt(t) {
      {
        var r = rt();
        if (!r) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (r = `

Check the top-level render call using <` + c + ">.");
        }
        return r;
      }
    }
    function lt(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Lt(r);
        if (at[c])
          return;
        at[c] = !0;
        var C = "";
        t && t._owner && t._owner !== ze.current && (C = " It was passed a child from " + re(t._owner.type) + "."), $e(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, C), $e(null);
      }
    }
    function ot(t, r) {
      {
        if (typeof t != "object")
          return;
        if (Be(t))
          for (var c = 0; c < t.length; c++) {
            var C = t[c];
            Ue(C) && lt(C, r);
          }
        else if (Ue(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var H = g(t);
          if (typeof H == "function" && H !== t.entries)
            for (var W = H.call(t), I; !(I = W.next()).done; )
              Ue(I.value) && lt(I.value, r);
        }
      }
    }
    function xt(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var c;
        if (typeof r == "function")
          c = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === M))
          c = r.propTypes;
        else
          return;
        if (c) {
          var C = re(r);
          vt(c, t.props, "prop", C, t);
        } else if (r.PropTypes !== void 0 && !We) {
          We = !0;
          var H = re(r);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(t) {
      {
        for (var r = Object.keys(t.props), c = 0; c < r.length; c++) {
          var C = r[c];
          if (C !== "children" && C !== "key") {
            $e(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), $e(null);
            break;
          }
        }
        t.ref !== null && ($e(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function ct(t, r, c, C, H, W) {
      {
        var I = U(t);
        if (!I) {
          var N = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = Ot(H);
          ae ? N += ae : N += rt();
          var J;
          t === null ? J = "null" : Be(t) ? J = "array" : t !== void 0 && t.$$typeof === a ? (J = "<" + (re(t.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : J = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", J, N);
        }
        var X = At(t, r, c, H, W);
        if (X == null)
          return X;
        if (I) {
          var ie = r.children;
          if (ie !== void 0)
            if (C)
              if (Be(ie)) {
                for (var De = 0; De < ie.length; De++)
                  ot(ie[De], t);
                Object.freeze && Object.freeze(ie);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ot(ie, t);
        }
        return t === s ? Tt(X) : xt(X), X;
      }
    }
    function jt(t, r, c) {
      return ct(t, r, c, !0);
    }
    function Yt(t, r, c) {
      return ct(t, r, c, !1);
    }
    var Ft = Yt, Rt = jt;
    Te.Fragment = s, Te.jsx = Ft, Te.jsxs = Rt;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Wt() : Ut();
const _ = {
  // Common
  loading: "Loading...",
  error: "An error occurred",
  retry: "Retry",
  cancel: "Cancel",
  continue: "Continue",
  // Subscription
  subscribe: "Subscribe",
  subscribeNow: "Subscribe Now",
  upgradeNow: "Upgrade Now",
  manageSubscription: "Manage Subscription",
  cancelSubscription: "Cancel Subscription",
  // Payment
  addPaymentMethod: "Add Payment Method",
  updatePaymentMethod: "Update Payment Method",
  // Features
  featureNotAvailable: "This feature is not available on your current plan",
  upgradeRequired: "Upgrade Required",
  limitReached: "Limit Reached"
}, Vt = Nt(void 0), Kt = () => {
  const n = It(Vt);
  if (n === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return n;
}, Zt = (n = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: n,
  notation: "standard"
}), he = (n, a = "USD", u = !0) => {
  let s = Zt(a).format(n);
  return u && (s = s.replace(/\.00$/, "")), s;
};
var V = /* @__PURE__ */ ((n) => (n.Annual = "ANNUAL", n.Every30Days = "EVERY_30_DAYS", n))(V || {});
const qt = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "year";
    case "EVERY_30_DAYS":
    default:
      return "month";
  }
}, Jt = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "yr";
    case "EVERY_30_DAYS":
    default:
      return "mo";
  }
}, ke = ({
  interval: n = "EVERY_30_DAYS",
  useShortFormPlanIntervals: a = !0
}) => a ? Jt(n) : qt(n), Ke = ({
  plan: n,
  customFieldKey: a = "recommended"
}) => {
  var u;
  return !!((u = n.customFields) != null && u[a]);
}, Ze = ({
  plan: n,
  customFieldKey: a = "buttonLabel"
}) => {
  var u;
  return ((u = n.customFields) == null ? void 0 : u[a]) || _.subscribe;
}, yt = ({ plan: n }) => {
  var a;
  return ((a = n.discounts) == null ? void 0 : a.length) > 0 ? n.discounts.reduce(
    (u, s) => u.discountedAmount < s.discountedAmount ? u : s
  ) : void 0;
}, Gt = (n = 4) => n % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : n % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : n % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : n === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, Xt = (n = 4) => n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : n === 1 ? 1 : 4, fn = ({
  orientation: n = "horizontal",
  onShowPlans: a,
  onCancelPlan: u,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: b = async () => {
  },
  i18n: y,
  subscription: d,
  refetch: j = async () => {
  },
  apps: m = []
}) => /* @__PURE__ */ e.createElement(Fe, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(x, { gap: "400" }, /* @__PURE__ */ e.createElement(h, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(x, { gap: "300" }, m.map((k, P) => /* @__PURE__ */ e.createElement(x, { gap: "300" }, /* @__PURE__ */ e.createElement(Z, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(Z, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Bt,
  {
    source: k.iconUrl,
    alt: k.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, { variant: "headingSm" }, k.name), /* @__PURE__ */ e.createElement(h, null, k.description))), /* @__PURE__ */ e.createElement(Z, { gap: "400" }, /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(ce, null, y.Install)))), P < m.length - 1 && /* @__PURE__ */ e.createElement(Re, null))))));
var we = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
we.displayName = "CheckIcon";
var Ie = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
Ie.displayName = "PlusIcon";
const Qt = ({ plan: n, t: a, translatePlanName: u, planNameTextVariant: s, planDescriptionTextVariant: b }) => /* @__PURE__ */ e.createElement(x, { gap: "100" }, /* @__PURE__ */ e.createElement(h, { variant: s, alignment: "center" }, u ? a(n.name) : n.name), n.description && /* @__PURE__ */ e.createElement(h, { variant: b, tone: "subdued", alignment: "center" }, a(n.description))), en = ({ plan: n, discount: a, t: u, priceTextVariant: s, useShortFormPlanIntervals: b = !0 }) => /* @__PURE__ */ e.createElement(x, { gap: "100" }, !!a && /* @__PURE__ */ e.createElement(Z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { variant: s }, he(a.presentmentDiscountedAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(
  h,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  he(n.presentmentAmount, n.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg", tone: "subdued" }, u(_.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: b })))), !a && /* @__PURE__ */ e.createElement(Z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: s }, he(n.presentmentAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(_.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: b })))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(x, null, n.usageCharges.map((y, d) => /* @__PURE__ */ e.createElement(Z, { key: `plan-usageCharge-${d}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "subdued" })), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg" }, u(y.terms)))))), tn = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(x, { gap: "300" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(Z, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "subdued" })), /* @__PURE__ */ e.createElement(h, null, a(_.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, b) => {
  const y = n.features[s];
  if (y.type !== "boolean" || y.value === !0)
    return /* @__PURE__ */ e.createElement(Z, { key: `plan-feature-${b}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "subdued" })), y.type === "boolean" ? /* @__PURE__ */ e.createElement(h, null, a(y.name)) : /* @__PURE__ */ e.createElement(h, null, y.value, " ", a(y.name)));
})), nn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: b = !0,
  trialDaysAsFeature: y = !1,
  expanded: d = !1,
  isActivePlan: j = !1,
  isRecommendedPlan: m = !1,
  isCustomPlan: k = !1,
  showRecommendedPlanBadge: P = !0,
  t: M,
  translatePlanName: T = !0,
  planNameTextVariant: A = "headingMd",
  planDescriptionTextVariant: B = "bodyLg",
  priceTextVariant: v = "heading3xl"
}) => {
  const [g, O] = e.useState(!1), w = M || ((Y) => Y), L = async ({ plan: Y, discount: E }) => {
    s ? (O(!0), await s({ plan: Y, discount: E }) !== !0 && O(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ne, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(ne, { paddingBlock: d || m ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    ne,
    {
      background: m || k ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: d || m ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(x, { gap: "800" }, /* @__PURE__ */ e.createElement(x, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Qt,
      {
        plan: n,
        t: w,
        translatePlanName: T,
        planNameTextVariant: A,
        planDescriptionTextVariant: B
      }
    ), /* @__PURE__ */ e.createElement(
      en,
      {
        plan: n,
        discount: a,
        useShortFormPlanIntervals: b,
        t: w,
        priceTextVariant: v
      }
    )), /* @__PURE__ */ e.createElement(
      ce,
      {
        size: "large",
        variant: m ? "primary" : "secondary",
        onClick: async () => {
          await L({ plan: n, discount: a });
        },
        disabled: j,
        loading: g
      },
      w(u || _.SelectPlan)
    ), /* @__PURE__ */ e.createElement(tn, { plan: n, t: w, trialDaysAsFeature: y }), m && P && /* @__PURE__ */ e.createElement(Z, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(qe, { tone: "success" }, w(_.MostPopular))))
  )));
}, Ee = {
  /**
   * Recommended plans will be highlighted and optionally expanded
   */
  Highlighted: "highlighted",
  /**
   * All plans will be displayed in a horizontal stack based on the screen size
   */
  Horizontal: "horizontal",
  /**
   * All plans will be displayed in a vertical stack
   */
  Vertical: "vertical"
}, Ye = ({
  plans: n,
  customer: a,
  onSelectPlan: u,
  planInterval: s,
  cardType: b = Ee.Horizontal,
  trialDaysAsFeature: y = !0,
  useShortFormPlanIntervals: d = !0,
  keyForRecommended: j = "recommended",
  keyForCustomButtonLabel: m = "buttonLabel",
  showRecommendedPlanBadge: k = !0,
  applyDiscount: P = !0,
  t: M,
  translatePlanName: T = !0
}) => {
  var L;
  const A = (L = a == null ? void 0 : a.subscription) != null && L.active ? a.subscription : void 0, B = A == null ? void 0 : A.plan, v = s ? n.filter((Y) => Y.interval === s) : n, g = b === Ee.Vertical ? 1 : Xt(v.length), O = Gt(g), w = M || ((Y) => Y);
  return /* @__PURE__ */ e.createElement(Se, { columns: g }, v.map((Y) => {
    const E = P ? yt({ plan: Y }) : void 0, S = (B == null ? void 0 : B.id) === Y.id && !(A != null && A.cancelOn);
    return /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: O, key: Y.id }, b === Ee.Highlighted && /* @__PURE__ */ e.createElement(
      nn,
      {
        key: `HighlightedPlanCard-${Y.id}`,
        plan: Y,
        discount: E,
        onSelectPlan: u,
        isActivePlan: S,
        trialDaysAsFeature: y,
        useShortFormPlanIntervals: d,
        isCustomPlan: Y.availability !== "public",
        isRecommendedPlan: Ke({ plan: Y, customFieldKey: j }),
        buttonLabel: Ze({ plan: Y, customFieldKey: m }),
        showRecommendedPlanBadge: k,
        t: w,
        translatePlanName: T
      }
    ), b === Ee.Horizontal && /* @__PURE__ */ e.createElement(
      on,
      {
        key: `HorizontalPlanCard-${Y.id}`,
        plan: Y,
        discount: E,
        onSelectPlan: u,
        isActivePlan: S,
        trialDaysAsFeature: y,
        useShortFormPlanIntervals: d,
        isRecommendedPlan: Ke({ plan: Y, customFieldKey: j }),
        buttonLabel: Ze({ plan: Y, customFieldKey: m }),
        showRecommendedPlanBadge: k,
        t: w,
        translatePlanName: T
      }
    ));
  }));
}, pn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: b = !0,
  // boolean
  customFieldCta: y,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: j = !0,
  // boolean
  showTrialDaysAsFeature: m = !0,
  // boolean
  useShortFormPlanIntervals: k,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: P = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: M = !0
  // boolean: show custom plans
}) => {
  const T = n == null ? void 0 : n.subscription, A = new URLSearchParams(window.location.search), B = a.some((S) => S.interval === V.Annual) && a.some((S) => S.interval === V.Every30Days), v = a.find((S) => S.id === (T == null ? void 0 : T.plan.id)), [g, O] = be(
    v ? v.interval : B ? V.Annual : V.Every30Days
  ), w = a.filter((S) => S.availability === "public"), L = M ? a.filter((S) => S.availability !== "public") : [], [Y, E] = be(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: _.Plans,
      backAction: s ? { content: _.Back, url: s } : void 0,
      secondaryActions: j && B ? /* @__PURE__ */ e.createElement(_e, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: g === V.Every30Days,
          onClick: () => O(V.Every30Days)
        },
        _.Monthly
      ), /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: g === V.Annual,
          onClick: () => O(V.Annual)
        },
        _.Yearly
      )) : void 0,
      fullWidth: P === "full",
      narrowWidth: P === "narrow"
    },
    /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(x, { gap: "1000" }, Y && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: _.SubscribeSuccessTitle,
        onDismiss: () => {
          E(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      _.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: w,
        onSelectPlan: u,
        planInterval: g,
        cardType: Ee.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: y,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: b
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(Re, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(x, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(h, { variant: "headingMd" }, _.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: L,
        onSelectPlan: u,
        planInterval: g,
        cardType: Ee.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: y,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: b
      }
    )))))
  );
}, rn = ({ plan: n, t: a, translatePlanName: u, isRecommendedPlan: s = !1, planNameTextVariant: b, planDescriptionTextVariant: y, showRecommendedPlanBadge: d }) => /* @__PURE__ */ e.createElement(x, { gap: "100" }, /* @__PURE__ */ e.createElement(Z, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(h, { variant: b }, u ? a(n.name) : n.name), s && d && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, a(_.MostPopular))), n.description && /* @__PURE__ */ e.createElement(h, { variant: y, tone: "subdued" }, a(n.description))), an = ({ plan: n, discount: a, t: u, useShortFormPlanIntervals: s = !0, priceTextVariant: b }) => /* @__PURE__ */ e.createElement(x, null, !!a && a.presentmentDiscountedAmount > 0 && /* @__PURE__ */ e.createElement(Z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { variant: b }, he(a.presentmentDiscountedAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
  h,
  {
    variant: b,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  n.presentmentAmount
), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg", tone: "subdued" }, u(_.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: s })))), (!a || a.presentmentDiscountedAmount == 0) && /* @__PURE__ */ e.createElement(Z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: b }, he(n.presentmentAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(_.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: s })))), n.usageCharges && n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(x, null, n.usageCharges.map((y, d) => /* @__PURE__ */ e.createElement(Z, { key: `plan-usageCharge-${d}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "subdued" })), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg" }, u(y.terms)))))), ln = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(x, { gap: "100" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(Z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "subdued" })), /* @__PURE__ */ e.createElement(h, null, a(_.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, b) => {
  const y = n.features[s];
  if (y.type !== "boolean" || y.value === !0)
    return /* @__PURE__ */ e.createElement(Z, { key: `plan-feature-${b}`, align: "start", gap: "100", wrap: !1 }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "subdued" })), y.type === "boolean" ? /* @__PURE__ */ e.createElement(h, null, a(y.name)) : /* @__PURE__ */ e.createElement(h, null, y.value, " ", a(y.name)));
})), on = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: b = !0,
  trialDaysAsFeature: y = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: j = !1,
  t: m,
  translatePlanName: k = !0,
  showRecommendedPlanBadge: P = !0,
  planNameTextVariant: M = "bodyLg",
  planDescriptionTextVariant: T = "bodyMd",
  priceTextVariant: A = "headingXl"
}) => {
  const [B, v] = e.useState(!1), g = m || ((w) => w), O = async ({ plan: w, discount: L }) => {
    s ? (v(!0), await s({ plan: w, discount: L }) !== !0 && v(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(x, { gap: "400" }, /* @__PURE__ */ e.createElement(
    rn,
    {
      plan: n,
      isRecommendedPlan: d,
      showRecommendedPlanBadge: P,
      t: g,
      translatePlanName: k,
      planNameTextVariant: M,
      planDescriptionTextVariant: T
    }
  ), /* @__PURE__ */ e.createElement(
    an,
    {
      plan: n,
      discount: a,
      useShortFormPlanIntervals: b,
      t: g,
      priceTextVariant: A
    }
  ), /* @__PURE__ */ e.createElement(
    ce,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await O({ plan: n, discount: a });
      },
      disabled: j,
      loading: B
    },
    g(j ? _.CurrentPlan : u || _.SelectPlan)
  ), /* @__PURE__ */ e.createElement(ln, { plan: n, trialDaysAsFeature: y, t: g })));
}, yn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: b = !0,
  // boolean
  customFieldCta: y = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: j = !0,
  // boolean
  showTrialDaysAsFeature: m = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: P = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: M = !0
  // boolean: show custom plans
}) => {
  const T = n == null ? void 0 : n.subscription, A = new URLSearchParams(window.location.search), B = a.some((S) => S.interval === V.Annual) && a.some((S) => S.interval === V.Every30Days), v = a.find((S) => S.id === (T == null ? void 0 : T.plan.id)), [g, O] = be(
    v ? v.interval : B ? V.Annual : V.Every30Days
  ), w = a.filter((S) => S.availability === "public"), L = M ? a.filter((S) => S.availability !== "public") : [], [Y, E] = be(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: _.Plans,
      backAction: s && s !== "" ? { content: _.Back, url: s } : void 0,
      secondaryActions: j && B ? /* @__PURE__ */ e.createElement(_e, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: g === V.Every30Days,
          onClick: () => O(V.Every30Days)
        },
        _.Monthly
      ), /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: g === V.Annual,
          onClick: () => O(V.Annual)
        },
        _.Yearly
      )) : void 0,
      fullWidth: P === "full",
      narrowWidth: P === "narrow"
    },
    /* @__PURE__ */ e.createElement(ne, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(x, { gap: "1000" }, Y && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: _.SubscribeSuccessTitle,
        onDismiss: () => {
          E(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      _.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: w,
        onSelectPlan: u,
        planInterval: g,
        cardType: Ee.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: y,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: b
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(Re, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(x, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(h, { variant: "headingMd" }, _.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: L,
        onSelectPlan: u,
        planInterval: g,
        cardType: Ee.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: y,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: b
      }
    ))))))
  );
}, cn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: b = !0,
  trialDaysAsFeature: y = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: j = !1,
  t: m = _t,
  translatePlanName: k = !0,
  showRecommendedPlanBadge: P = !0,
  planNameTextVariant: M = "bodyLg",
  planDescriptionTextVariant: T = "bodyMd",
  priceTextVariant: A = "headingXl"
}) => {
  const [B, v] = e.useState(!1), g = async ({ plan: E, discount: S }) => {
    s ? (v(!0), await s({ plan: E, discount: S }) !== !0 && v(!1)) : console.log("No onSelectPlan callback provided");
  }, O = ({ plan: E }) => /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, { variant: M }, k ? m(E.name) : E.name), E.description && /* @__PURE__ */ e.createElement(h, { variant: T, tone: "subdued" }, m(E.description))), w = ({ plan: E }) => /* @__PURE__ */ e.createElement(x, { gap: "200" }, /* @__PURE__ */ e.createElement(h, { fontWeight: "medium" }, m(_.Features)), /* @__PURE__ */ e.createElement(x, { gap: "100" }, y && E.trialDays && E.trialDays > 0 ? /* @__PURE__ */ e.createElement(Z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "positive" })), /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, m(_.FreeTrialLength.replace("{{ trialDays }}", E.trialDays)))) : null, E.featuresOrder.map((S, G) => {
    const ee = E.features[S];
    if (ee.type !== "boolean" || ee.value === !0)
      return /* @__PURE__ */ e.createElement(Z, { key: `plan-feature-${G}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: we, tone: "positive" })), ee.type === "boolean" ? /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, ee.name) : /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, ee.value, " ", ee.name));
  }))), L = ({ plan: E, discount: S }) => /* @__PURE__ */ e.createElement(x, { gap: "100" }, S ? /* @__PURE__ */ e.createElement(Z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { variant: A }, he(S.presentmentDiscountedAmount, E.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
    h,
    {
      variant: A,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    E.presentmentAmount
  ), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg", tone: "subdued" }, _.Per, " ", ke({ interval: E.interval, useShortFormPlanIntervals: b }))) : /* @__PURE__ */ e.createElement(Z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: A }, he(E.presentmentAmount, E.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(h, { alignment: "center", variant: "bodyLg", tone: "subdued" }, _.Per, " ", ke({ interval: E.interval, useShortFormPlanIntervals: b }))), E.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(x, null, E.usageCharges.map((G, ee) => /* @__PURE__ */ e.createElement(Z, { key: `plan-usageCharge-${ee}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "positive" })), /* @__PURE__ */ e.createElement(h, { variant: "bodyLg" }, G.terms))))), Y = ({ plan: E, discount: S }) => /* @__PURE__ */ e.createElement(Z, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    ce,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await g({ plan: E, discount: S });
      },
      disabled: j,
      loading: B
    },
    m(j ? _.CurrentPlan : u || _.SelectPlan)
  ), d && P && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, m(_.MostPopular)));
  return /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(Se, null, /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(x, { gap: "300" }, O({ plan: n }), L({ plan: n, discount: a }), /* @__PURE__ */ e.createElement(ne, null, Y({ plan: n, discount: a })))), /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, w({ plan: n }))));
}, gn = ({
  plans: n,
  customer: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: b = "recommended",
  keyForCustomButtonLabel: y = "buttonLabel",
  showPlanIntervalToggle: d = !1,
  // boolean
  trialDaysAsFeature: j = !0,
  // boolean
  useShortFormPlanIntervals: m = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: k = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: M = !0,
  // boolean
  applyDiscount: T = !0,
  t: A,
  translatePlanName: B = !0
}) => {
  var F;
  const v = new URLSearchParams(window.location.search), g = n.some((R) => R.interval === V.Annual) && n.some((R) => R.interval === V.Every30Days), O = (F = a == null ? void 0 : a.subscription) != null && F.active ? a.subscription : void 0, w = O == null ? void 0 : O.plan, [L, Y] = be(
    w ? w.interval : g ? V.Annual : V.Every30Days
  ), E = n.filter(
    (R) => R.availability !== "customerTag" && R.availability !== "customer"
  ), S = d && g ? E.filter((R) => R.interval === L) : E, G = P ? n.filter(
    (R) => R.availability === "customerTag" || R.availability === "customer"
  ) : [], [ee, oe] = be(
    v.get("subscribed") === "true"
  ), U = A || ((R) => R);
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: _.Plans,
      backAction: s !== "" ? { content: _.Back, url: s } : void 0,
      secondaryActions: d && g ? /* @__PURE__ */ e.createElement(_e, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: L === V.Every30Days,
          onClick: () => Y(V.Every30Days)
        },
        _.Monthly
      ), /* @__PURE__ */ e.createElement(
        ce,
        {
          pressed: L === V.Annual,
          onClick: () => Y(V.Annual)
        },
        _.Year
      )) : void 0,
      fullWidth: k === "full",
      narrowWidth: k === "narrow"
    },
    /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(x, { gap: "400" }, ee && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: _.SubscribeSuccessTitle,
        onDismiss: () => {
          oe(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      _.SubscribeSuccessBody
    ), S.map((R, re) => {
      const f = T ? yt({ plan: R }) : void 0, o = (w == null ? void 0 : w.id) === R.id && !(O != null && O.cancelOn);
      return /* @__PURE__ */ e.createElement(
        cn,
        {
          key: `plan-${re}`,
          plan: R,
          discount: f,
          onSelectPlan: u,
          isActivePlan: o,
          trialDaysAsFeature: j,
          useShortFormPlanIntervals: m,
          isCustomPlan: R.availability !== "public",
          isRecommendedPlan: Ke({ plan: R, customFieldKey: b }),
          buttonLabel: Ze({ plan: R, customFieldKey: y }),
          showRecommendedPlanBadge: M,
          t: U,
          translatePlanName: B
        }
      );
    }), (G == null ? void 0 : G.length) > 0 && /* @__PURE__ */ e.createElement(Re, { borderColor: "border" }), (G == null ? void 0 : G.length) > 0 && /* @__PURE__ */ e.createElement(x, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(h, { variant: "headingMd" }, _.CustomPlans)), /* @__PURE__ */ e.createElement(Se, null, G.map((R, re) => {
      var o;
      const f = ((o = R.discounts) == null ? void 0 : o.length) > 0 ? R.discounts.reduce(
        (l, p) => l.discountedAmount < p.discountedAmount ? l : p
      ) : null;
      return /* @__PURE__ */ e.createElement(Se.Cell, { key: `custom-plan-${re}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(x, { gap: "400" }, titleComponent({ plan: R, discount: f }), pricingComponent({ plan: R, discount: f }), ctaComponent({ plan: R, discount: f }), featuresComponent({ plan: R, discount: f }))));
    }))))))
  );
};
var gt = { exports: {} };
(function(n, a) {
  (function(u, s) {
    n.exports = s();
  })(mt, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, b, y) {
      var d = b.prototype, j = d.format;
      y.en.formats = u, d.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var k = this.$locale().formats, P = function(M, T) {
          return M.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, B, v) {
            var g = v && v.toUpperCase();
            return B || T[v] || u[v] || T[g].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(O, w, L) {
              return w || L.slice(1);
            });
          });
        }(m, k === void 0 ? {} : k);
        return j.call(this, P);
      };
    };
  });
})(gt);
var sn = gt.exports;
const un = /* @__PURE__ */ ft(sn);
je.extend(un);
const Ve = ({
  orientation: n = "horizontal",
  onShowPlans: a,
  onCancelPlan: u,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: b = async () => {
  },
  i18n: y,
  subscription: d,
  refetch: j = async () => {
  },
  t: m,
  translatePlanName: k = !0,
  hideSelectPlanButton: P = !1
}) => {
  var oe;
  const [M, T] = be(!1), [A, B] = be(!1), v = m || ((U) => U), g = {
    ..._,
    ...y || {}
  };
  if (!d)
    return /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(x, { gap: "200" }, /* @__PURE__ */ e.createElement(h, { variant: "headingMd" }, v(g.Subscription)), /* @__PURE__ */ e.createElement(h, null, v(g.NotSubscribed)), /* @__PURE__ */ e.createElement(Z, { align: "end" }, /* @__PURE__ */ e.createElement(_e, null, !P && /* @__PURE__ */ e.createElement(
      ce,
      {
        variant: "primary",
        onClick: a,
        accessibilityLabel: v(g.ChangePlan)
      },
      v(g.SelectPlan)
    )))));
  const { plan: O } = d, w = he(d.presentmentTotal, O.presentmentCurrencyCode), L = v(O.interval === V.Annual ? g.Year : g.Month), Y = n === "horizontal" ? Ht : x, E = (oe = d == null ? void 0 : d.appliedDiscount) == null ? void 0 : oe.discount, S = E ? E.percentage ? `${E.percentage}%` : he(E.presentmentAmount, O.presentmentCurrencyCode) : null, G = E && d.appliedDiscount.discountEndsAt && je().isAfter(je(d.appliedDiscount.discountEndsAt)), ee = O.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(x, { gap: "200" }, /* @__PURE__ */ e.createElement(h, { variant: "headingMd" }, v(g.Subscription)), /* @__PURE__ */ e.createElement(x, { gap: "400" }, /* @__PURE__ */ e.createElement(Y, { columns: ee, gap: "300" }, /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, null, v(g.CurrentPlan)), /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, k ? v(O.name) : O.name), d.cancelOn && /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, v("Canceled, active until {{ date }}").replace("{{ date }}", je(d.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, null, v(g.Price)), /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, { tone: "subdued" }, v(g.AmountPerInterval).replace("{{ amount }}", w).replace("{{ interval }}", L)), E && !G && /* @__PURE__ */ e.createElement(h, { tone: "success" }, v(g.DiscountAmount).replace("{{ amount }}", S)), E && G && /* @__PURE__ */ e.createElement(h, { tone: "subdued", textDecorationLine: "line-through" }, v(g.DiscountAmountExpired).replace("{{ amount }}", S)))), O.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(x, null, /* @__PURE__ */ e.createElement(h, null, v(g.UsageCharges || "Usage charges")), O.usageCharges.map((U, F) => /* @__PURE__ */ e.createElement(h, { key: `usage-charge-${F}`, tone: "subdued" }, v(U.terms))))), /* @__PURE__ */ e.createElement(Z, { align: "end" }, /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(
    ce,
    {
      onClick: () => {
        u ? u() : T(!0);
      },
      accessibilityLabel: v(g.CancelPlan),
      tone: "critical",
      disabled: !!d.cancelOn
    },
    v(g.CancelPlan)
  ), !P && /* @__PURE__ */ e.createElement(
    ce,
    {
      variant: "primary",
      onClick: a,
      accessibilityLabel: v(g.ChangePlan)
    },
    v(g.ChangePlan)
  ))))), M && /* @__PURE__ */ e.createElement(
    st,
    {
      open: !0,
      onClose: () => T(!1),
      title: v(g.CancelPlan),
      primaryAction: {
        content: v(g.CancelPlan),
        destructive: !0,
        loading: A,
        disabled: A,
        onAction: async () => {
          B(!0), await b(), await j(), B(!1), T(!1), s();
        }
      },
      secondaryActions: [
        {
          content: v(g.Back),
          disabled: A,
          onAction: () => T(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(st.Section, null, v(g.CancelConfirmation))
  ));
}, hn = ({
  backUrl: n = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: a = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: u, i18n: s, subscription: b, refetch: y } = Kt(), d = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: s.Subscription,
      backAction: n ? { content: s.Back, url: n } : void 0,
      fullWidth: a === "full",
      narrowWidth: a === "narrow"
    },
    /* @__PURE__ */ e.createElement(x, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: b,
        refetch: y
      }
    ), /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: b,
        refetch: y
      }
    )), /* @__PURE__ */ e.createElement(ge.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: b,
        refetch: y,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  fn as BundleCard,
  nn as HighlightedPlanCard,
  yn as HighlightedPlanCards,
  on as HorizontalPlanCard,
  pn as HorizontalPlanCards,
  Ye as PlanCardStack,
  Ee as PlanCardType,
  Ve as SubscriptionSummaryCard,
  hn as SubscriptionSummaryPage,
  cn as VerticalPlanCard,
  gn as VerticalPlanCards
};
