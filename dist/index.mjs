import e, { createContext as It, useContext as Bt, useState as be } from "react";
import { Banner as Fe, BlockStack as L, Text as v, InlineStack as q, Thumbnail as Nt, Button as ie, Divider as je, Box as re, Badge as qe, Icon as ve, Grid as Se, Page as Ie, ButtonGroup as Re, Layout as he, Card as ke, Modal as ct, InlineGrid as Wt } from "@shopify/polaris";
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function mt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var gt = { exports: {} };
(function(n, a) {
  (function(u, c) {
    n.exports = c();
  })(ft, function() {
    var u = 1e3, c = 6e4, y = 36e5, h = "millisecond", d = "second", T = "minute", f = "hour", _ = "day", A = "week", R = "month", N = "quarter", O = "year", W = "date", E = "Invalid Date", b = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(g) {
      var i = ["th", "st", "nd", "rd"], l = g % 100;
      return "[" + g + (i[(l - 20) % 10] || i[l] || i[0]) + "]";
    } }, F = function(g, i, l) {
      var m = String(g);
      return !m || m.length >= i ? g : "" + Array(i + 1 - m.length).join(l) + g;
    }, j = { s: F, z: function(g) {
      var i = -g.utcOffset(), l = Math.abs(i), m = Math.floor(l / 60), s = l % 60;
      return (i <= 0 ? "+" : "-") + F(m, 2, "0") + ":" + F(s, 2, "0");
    }, m: function g(i, l) {
      if (i.date() < l.date())
        return -g(l, i);
      var m = 12 * (l.year() - i.year()) + (l.month() - i.month()), s = i.clone().add(m, R), P = l - s < 0, D = i.clone().add(m + (P ? -1 : 1), R);
      return +(-(m + (l - s) / (P ? s - D : D - s)) || 0);
    }, a: function(g) {
      return g < 0 ? Math.ceil(g) || 0 : Math.floor(g);
    }, p: function(g) {
      return { M: R, y: O, w: A, d: _, D: W, h: f, m: T, s: d, ms: h, Q: N }[g] || String(g || "").toLowerCase().replace(/s$/, "");
    }, u: function(g) {
      return g === void 0;
    } }, S = "en", p = {};
    p[S] = $;
    var M = "$isDayjsObject", Q = function(g) {
      return g instanceof ue || !(!g || !g[M]);
    }, G = function g(i, l, m) {
      var s;
      if (!i)
        return S;
      if (typeof i == "string") {
        var P = i.toLowerCase();
        p[P] && (s = P), l && (p[P] = l, s = P);
        var D = i.split("-");
        if (!s && D.length > 1)
          return g(D[0]);
      } else {
        var z = i.name;
        p[z] = i, s = z;
      }
      return !m && s && (S = s), s || !m && S;
    }, U = function(g, i) {
      if (Q(g))
        return g.clone();
      var l = typeof i == "object" ? i : {};
      return l.date = g, l.args = arguments, new ue(l);
    }, I = j;
    I.l = G, I.i = Q, I.w = function(g, i) {
      return U(g, { locale: i.$L, utc: i.$u, x: i.$x, $offset: i.$offset });
    };
    var ue = function() {
      function g(l) {
        this.$L = G(l.locale, null, !0), this.parse(l), this.$x = this.$x || l.x || {}, this[M] = !0;
      }
      var i = g.prototype;
      return i.parse = function(l) {
        this.$d = function(m) {
          var s = m.date, P = m.utc;
          if (s === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(s))
            return /* @__PURE__ */ new Date();
          if (s instanceof Date)
            return new Date(s);
          if (typeof s == "string" && !/Z$/i.test(s)) {
            var D = s.match(b);
            if (D) {
              var z = D[2] - 1 || 0, K = (D[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, K)) : new Date(D[1], z, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, K);
            }
          }
          return new Date(s);
        }(l), this.init();
      }, i.init = function() {
        var l = this.$d;
        this.$y = l.getFullYear(), this.$M = l.getMonth(), this.$D = l.getDate(), this.$W = l.getDay(), this.$H = l.getHours(), this.$m = l.getMinutes(), this.$s = l.getSeconds(), this.$ms = l.getMilliseconds();
      }, i.$utils = function() {
        return I;
      }, i.isValid = function() {
        return this.$d.toString() !== E;
      }, i.isSame = function(l, m) {
        var s = U(l);
        return this.startOf(m) <= s && s <= this.endOf(m);
      }, i.isAfter = function(l, m) {
        return U(l) < this.startOf(m);
      }, i.isBefore = function(l, m) {
        return this.endOf(m) < U(l);
      }, i.$g = function(l, m, s) {
        return I.u(l) ? this[m] : this.set(s, l);
      }, i.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, i.valueOf = function() {
        return this.$d.getTime();
      }, i.startOf = function(l, m) {
        var s = this, P = !!I.u(m) || m, D = I.p(l), z = function(ce, te) {
          var me = I.w(s.$u ? Date.UTC(s.$y, te, ce) : new Date(s.$y, te, ce), s);
          return P ? me : me.endOf(_);
        }, K = function(ce, te) {
          return I.w(s.toDate()[ce].apply(s.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), s);
        }, Z = this.$W, ne = this.$M, le = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case O:
            return P ? z(1, 0) : z(31, 11);
          case R:
            return P ? z(1, ne) : z(0, ne + 1);
          case A:
            var se = this.$locale().weekStart || 0, fe = (Z < se ? Z + 7 : Z) - se;
            return z(P ? le - fe : le + (6 - fe), ne);
          case _:
          case W:
            return K(de + "Hours", 0);
          case f:
            return K(de + "Minutes", 1);
          case T:
            return K(de + "Seconds", 2);
          case d:
            return K(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, i.endOf = function(l) {
        return this.startOf(l, !1);
      }, i.$set = function(l, m) {
        var s, P = I.p(l), D = "set" + (this.$u ? "UTC" : ""), z = (s = {}, s[_] = D + "Date", s[W] = D + "Date", s[R] = D + "Month", s[O] = D + "FullYear", s[f] = D + "Hours", s[T] = D + "Minutes", s[d] = D + "Seconds", s[h] = D + "Milliseconds", s)[P], K = P === _ ? this.$D + (m - this.$W) : m;
        if (P === R || P === O) {
          var Z = this.clone().set(W, 1);
          Z.$d[z](K), Z.init(), this.$d = Z.set(W, Math.min(this.$D, Z.daysInMonth())).$d;
        } else
          z && this.$d[z](K);
        return this.init(), this;
      }, i.set = function(l, m) {
        return this.clone().$set(l, m);
      }, i.get = function(l) {
        return this[I.p(l)]();
      }, i.add = function(l, m) {
        var s, P = this;
        l = Number(l);
        var D = I.p(m), z = function(ne) {
          var le = U(P);
          return I.w(le.date(le.date() + Math.round(ne * l)), P);
        };
        if (D === R)
          return this.set(R, this.$M + l);
        if (D === O)
          return this.set(O, this.$y + l);
        if (D === _)
          return z(1);
        if (D === A)
          return z(7);
        var K = (s = {}, s[T] = c, s[f] = y, s[d] = u, s)[D] || 1, Z = this.$d.getTime() + l * K;
        return I.w(Z, this);
      }, i.subtract = function(l, m) {
        return this.add(-1 * l, m);
      }, i.format = function(l) {
        var m = this, s = this.$locale();
        if (!this.isValid())
          return s.invalidDate || E;
        var P = l || "YYYY-MM-DDTHH:mm:ssZ", D = I.z(this), z = this.$H, K = this.$m, Z = this.$M, ne = s.weekdays, le = s.months, de = s.meridiem, se = function(te, me, ye, we) {
          return te && (te[me] || te(m, P)) || ye[me].slice(0, we);
        }, fe = function(te) {
          return I.s(z % 12 || 12, te, "0");
        }, ce = de || function(te, me, ye) {
          var we = te < 12 ? "AM" : "PM";
          return ye ? we.toLowerCase() : we;
        };
        return P.replace(w, function(te, me) {
          return me || function(ye) {
            switch (ye) {
              case "YY":
                return String(m.$y).slice(-2);
              case "YYYY":
                return I.s(m.$y, 4, "0");
              case "M":
                return Z + 1;
              case "MM":
                return I.s(Z + 1, 2, "0");
              case "MMM":
                return se(s.monthsShort, Z, le, 3);
              case "MMMM":
                return se(le, Z);
              case "D":
                return m.$D;
              case "DD":
                return I.s(m.$D, 2, "0");
              case "d":
                return String(m.$W);
              case "dd":
                return se(s.weekdaysMin, m.$W, ne, 2);
              case "ddd":
                return se(s.weekdaysShort, m.$W, ne, 3);
              case "dddd":
                return ne[m.$W];
              case "H":
                return String(z);
              case "HH":
                return I.s(z, 2, "0");
              case "h":
                return fe(1);
              case "hh":
                return fe(2);
              case "a":
                return ce(z, K, !0);
              case "A":
                return ce(z, K, !1);
              case "m":
                return String(K);
              case "mm":
                return I.s(K, 2, "0");
              case "s":
                return String(m.$s);
              case "ss":
                return I.s(m.$s, 2, "0");
              case "SSS":
                return I.s(m.$ms, 3, "0");
              case "Z":
                return D;
            }
            return null;
          }(te) || D.replace(":", "");
        });
      }, i.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, i.diff = function(l, m, s) {
        var P, D = this, z = I.p(m), K = U(l), Z = (K.utcOffset() - this.utcOffset()) * c, ne = this - K, le = function() {
          return I.m(D, K);
        };
        switch (z) {
          case O:
            P = le() / 12;
            break;
          case R:
            P = le();
            break;
          case N:
            P = le() / 3;
            break;
          case A:
            P = (ne - Z) / 6048e5;
            break;
          case _:
            P = (ne - Z) / 864e5;
            break;
          case f:
            P = ne / y;
            break;
          case T:
            P = ne / c;
            break;
          case d:
            P = ne / u;
            break;
          default:
            P = ne;
        }
        return s ? P : I.a(P);
      }, i.daysInMonth = function() {
        return this.endOf(R).$D;
      }, i.$locale = function() {
        return p[this.$L];
      }, i.locale = function(l, m) {
        if (!l)
          return this.$L;
        var s = this.clone(), P = G(l, m, !0);
        return P && (s.$L = P), s;
      }, i.clone = function() {
        return I.w(this.$d, this);
      }, i.toDate = function() {
        return new Date(this.valueOf());
      }, i.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, i.toISOString = function() {
        return this.$d.toISOString();
      }, i.toString = function() {
        return this.$d.toUTCString();
      }, g;
    }(), x = ue.prototype;
    return U.prototype = x, [["$ms", h], ["$s", d], ["$m", T], ["$H", f], ["$W", _], ["$M", R], ["$y", O], ["$D", W]].forEach(function(g) {
      x[g[1]] = function(i) {
        return this.$g(i, g[0], g[1]);
      };
    }), U.extend = function(g, i) {
      return g.$i || (g(i, ue, U), g.$i = !0), U;
    }, U.locale = G, U.isDayjs = Q, U.unix = function(g) {
      return U(1e3 * g);
    }, U.en = p[S], U.Ls = p, U.p = {}, U;
  });
})(gt);
var Ht = gt.exports;
const Le = /* @__PURE__ */ mt(Ht);
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
function Ut() {
  if (ut)
    return Me;
  ut = 1;
  var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(T, f, _) {
    var A, R = {}, N = null, O = null;
    _ !== void 0 && (N = "" + _), f.key !== void 0 && (N = "" + f.key), f.ref !== void 0 && (O = f.ref);
    for (A in f)
      c.call(f, A) && !h.hasOwnProperty(A) && (R[A] = f[A]);
    if (T && T.defaultProps)
      for (A in f = T.defaultProps, f)
        R[A] === void 0 && (R[A] = f[A]);
    return { $$typeof: a, type: T, key: N, ref: O, props: R, _owner: y.current };
  }
  return Me.Fragment = u, Me.jsx = d, Me.jsxs = d, Me;
}
var Ae = {};
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
function zt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), O = Symbol.for("react.offscreen"), W = Symbol.iterator, E = "@@iterator";
    function b(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = W && t[W] || t[E];
      return typeof r == "function" ? r : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(t) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), C = 1; C < r; C++)
          o[C - 1] = arguments[C];
        F("error", t, o);
      }
    }
    function F(t, r, o) {
      {
        var C = w.ReactDebugCurrentFrame, H = C.getStackAddendum();
        H !== "" && (r += "%s", o = o.concat([H]));
        var V = o.map(function(B) {
          return String(B);
        });
        V.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var j = !1, S = !1, p = !1, M = !1, Q = !1, G;
    G = Symbol.for("react.module.reference");
    function U(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === c || t === h || Q || t === y || t === _ || t === A || M || t === O || j || S || p || typeof t == "object" && t !== null && (t.$$typeof === N || t.$$typeof === R || t.$$typeof === d || t.$$typeof === T || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === G || t.getModuleId !== void 0));
    }
    function I(t, r, o) {
      var C = t.displayName;
      if (C)
        return C;
      var H = r.displayName || r.name || "";
      return H !== "" ? o + "(" + H + ")" : o;
    }
    function ue(t) {
      return t.displayName || "Context";
    }
    function x(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case c:
          return "Fragment";
        case u:
          return "Portal";
        case h:
          return "Profiler";
        case y:
          return "StrictMode";
        case _:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case T:
            var r = t;
            return ue(r) + ".Consumer";
          case d:
            var o = t;
            return ue(o._context) + ".Provider";
          case f:
            return I(t, t.render, "ForwardRef");
          case R:
            var C = t.displayName || null;
            return C !== null ? C : x(t.type) || "Memo";
          case N: {
            var H = t, V = H._payload, B = H._init;
            try {
              return x(B(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var g = Object.assign, i = 0, l, m, s, P, D, z, K;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function ne() {
      {
        if (i === 0) {
          l = console.log, m = console.info, s = console.warn, P = console.error, D = console.group, z = console.groupCollapsed, K = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Z,
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
        i++;
      }
    }
    function le() {
      {
        if (i--, i === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: g({}, t, {
              value: l
            }),
            info: g({}, t, {
              value: m
            }),
            warn: g({}, t, {
              value: s
            }),
            error: g({}, t, {
              value: P
            }),
            group: g({}, t, {
              value: D
            }),
            groupCollapsed: g({}, t, {
              value: z
            }),
            groupEnd: g({}, t, {
              value: K
            })
          });
        }
        i < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = w.ReactCurrentDispatcher, se;
    function fe(t, r, o) {
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
    var ce = !1, te;
    {
      var me = typeof WeakMap == "function" ? WeakMap : Map;
      te = new me();
    }
    function ye(t, r) {
      if (!t || ce)
        return "";
      {
        var o = te.get(t);
        if (o !== void 0)
          return o;
      }
      var C;
      ce = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = de.current, de.current = null, ne();
      try {
        if (r) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (ge) {
              C = ge;
            }
            Reflect.construct(t, [], B);
          } else {
            try {
              B.call();
            } catch (ge) {
              C = ge;
            }
            t.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            C = ge;
          }
          t();
        }
      } catch (ge) {
        if (ge && C && typeof ge.stack == "string") {
          for (var Y = ge.stack.split(`
`), ae = C.stack.split(`
`), X = Y.length - 1, ee = ae.length - 1; X >= 1 && ee >= 0 && Y[X] !== ae[ee]; )
            ee--;
          for (; X >= 1 && ee >= 0; X--, ee--)
            if (Y[X] !== ae[ee]) {
              if (X !== 1 || ee !== 1)
                do
                  if (X--, ee--, ee < 0 || Y[X] !== ae[ee]) {
                    var oe = `
` + Y[X].replace(" at new ", " at ");
                    return t.displayName && oe.includes("<anonymous>") && (oe = oe.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, oe), oe;
                  }
                while (X >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        ce = !1, de.current = V, le(), Error.prepareStackTrace = H;
      }
      var De = t ? t.displayName || t.name : "", st = De ? fe(De) : "";
      return typeof t == "function" && te.set(t, st), st;
    }
    function we(t, r, o) {
      return ye(t, !1);
    }
    function Et(t) {
      var r = t.prototype;
      return !!(r && r.isReactComponent);
    }
    function Te(t, r, o) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ye(t, Et(t));
      if (typeof t == "string")
        return fe(t);
      switch (t) {
        case _:
          return fe("Suspense");
        case A:
          return fe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return we(t.render);
          case R:
            return Te(t.type, r, o);
          case N: {
            var C = t, H = C._payload, V = C._init;
            try {
              return Te(V(H), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Ge = {}, Ze = w.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var r = t._owner, o = Te(t.type, t._source, r ? r.type : null);
        Ze.setExtraStackFrame(o);
      } else
        Ze.setExtraStackFrame(null);
    }
    function yt(t, r, o, C, H) {
      {
        var V = Function.call.bind(Oe);
        for (var B in t)
          if (V(t, B)) {
            var Y = void 0;
            try {
              if (typeof t[B] != "function") {
                var ae = Error((C || "React class") + ": " + o + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              Y = t[B](r, B, C, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              Y = X;
            }
            Y && !(Y instanceof Error) && (xe(H), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", o, B, typeof Y), xe(null)), Y instanceof Error && !(Y.message in Ge) && (Ge[Y.message] = !0, xe(H), $("Failed %s type: %s", o, Y.message), xe(null));
          }
      }
    }
    var pt = Array.isArray;
    function Ne(t) {
      return pt(t);
    }
    function bt(t) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return o;
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
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", bt(t)), Xe(t);
    }
    var $e = w.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt, We;
    We = {};
    function wt(t) {
      if (Oe.call(t, "ref")) {
        var r = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Pt(t) {
      if (Oe.call(t, "key")) {
        var r = Object.getOwnPropertyDescriptor(t, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Dt(t, r) {
      if (typeof t.ref == "string" && $e.current && r && $e.current.stateNode !== r) {
        var o = x($e.current.type);
        We[o] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', x($e.current.type), t.ref), We[o] = !0);
      }
    }
    function $t(t, r) {
      {
        var o = function() {
          et || (et = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Mt(t, r) {
      {
        var o = function() {
          tt || (tt = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var At = function(t, r, o, C, H, V, B) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: o,
        props: B,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Rt(t, r, o, C, H) {
      {
        var V, B = {}, Y = null, ae = null;
        o !== void 0 && (Qe(o), Y = "" + o), Pt(r) && (Qe(r.key), Y = "" + r.key), wt(r) && (ae = r.ref, Dt(r, H));
        for (V in r)
          Oe.call(r, V) && !Ct.hasOwnProperty(V) && (B[V] = r[V]);
        if (t && t.defaultProps) {
          var X = t.defaultProps;
          for (V in X)
            B[V] === void 0 && (B[V] = X[V]);
        }
        if (Y || ae) {
          var ee = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          Y && $t(B, ee), ae && Mt(B, ee);
        }
        return At(t, Y, ae, H, C, $e.current, B);
      }
    }
    var He = w.ReactCurrentOwner, nt = w.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var r = t._owner, o = Te(t.type, t._source, r ? r.type : null);
        nt.setExtraStackFrame(o);
      } else
        nt.setExtraStackFrame(null);
    }
    var Ue;
    Ue = !1;
    function ze(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function rt() {
      {
        if (He.current) {
          var t = x(He.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function kt(t) {
      {
        if (t !== void 0) {
          var r = t.fileName.replace(/^.*[\\\/]/, ""), o = t.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
    }
    var at = {};
    function Tt(t) {
      {
        var r = rt();
        if (!r) {
          var o = typeof t == "string" ? t : t.displayName || t.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function lt(t, r) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var o = Tt(r);
        if (at[o])
          return;
        at[o] = !0;
        var C = "";
        t && t._owner && t._owner !== He.current && (C = " It was passed a child from " + x(t._owner.type) + "."), Pe(t), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, C), Pe(null);
      }
    }
    function it(t, r) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var o = 0; o < t.length; o++) {
            var C = t[o];
            ze(C) && lt(C, r);
          }
        else if (ze(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var H = b(t);
          if (typeof H == "function" && H !== t.entries)
            for (var V = H.call(t), B; !(B = V.next()).done; )
              ze(B.value) && lt(B.value, r);
        }
      }
    }
    function Ot(t) {
      {
        var r = t.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === R))
          o = r.propTypes;
        else
          return;
        if (o) {
          var C = x(r);
          yt(o, t.props, "prop", C, t);
        } else if (r.PropTypes !== void 0 && !Ue) {
          Ue = !0;
          var H = x(r);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xt(t) {
      {
        for (var r = Object.keys(t.props), o = 0; o < r.length; o++) {
          var C = r[o];
          if (C !== "children" && C !== "key") {
            Pe(t), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), Pe(null);
            break;
          }
        }
        t.ref !== null && (Pe(t), $("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function ot(t, r, o, C, H, V) {
      {
        var B = U(t);
        if (!B) {
          var Y = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = kt(H);
          ae ? Y += ae : Y += rt();
          var X;
          t === null ? X = "null" : Ne(t) ? X = "array" : t !== void 0 && t.$$typeof === a ? (X = "<" + (x(t.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : X = typeof t, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, Y);
        }
        var ee = Rt(t, r, o, H, V);
        if (ee == null)
          return ee;
        if (B) {
          var oe = r.children;
          if (oe !== void 0)
            if (C)
              if (Ne(oe)) {
                for (var De = 0; De < oe.length; De++)
                  it(oe[De], t);
                Object.freeze && Object.freeze(oe);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(oe, t);
        }
        return t === c ? xt(ee) : Ot(ee), ee;
      }
    }
    function Lt(t, r, o) {
      return ot(t, r, o, !0);
    }
    function Yt(t, r, o) {
      return ot(t, r, o, !1);
    }
    var Ft = Yt, jt = Lt;
    Ae.Fragment = c, Ae.jsx = Ft, Ae.jsxs = jt;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? Ut() : zt();
const k = {
  AmountPerInterval: "{{ amount }} per {{ interval }}",
  Back: "Back",
  Cancel: "Cancel",
  CancelConfirmation: "Are you sure you want to cancel your subscription?",
  CancelPlan: "Cancel plan",
  ChangePlan: "Change plan",
  CurrentPlan: "Current plan",
  CustomPlans: "Custom plans",
  CustomPlansDescription: "Plans tailored to your specific needs",
  DiscountAmount: "{{ amount }} discount",
  DiscountAmountExpired: "{{ amount }} discount expired",
  FreeTrialLength: "{{ trialDays }}-day free trial",
  Features: "Features",
  Month: "month",
  MonthShort: "mo",
  Monthly: "Monthly",
  NextBillingDate: "Next billing date",
  NotSubscribed: "You're not subscribed to a plan yet.",
  Year: "year",
  YearShort: "yr",
  Yearly: "Yearly",
  MostPopular: "Most popular",
  Per: "/",
  Plans: "Plans",
  Price: "Price",
  SelectPlan: "Select plan",
  SubscribeSuccessTitle: "Subscription successful",
  SubscribeSuccessBody: "Thanks for subscribing to our app!",
  Subscription: "Subscription",
  SubscriptionCancelled: "Subscription cancelled",
  UsageCharges: "Usage charges",
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
}, Vt = It(void 0), Jt = () => {
  const n = Bt(Vt);
  if (n === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return n;
}, Kt = (n = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: n,
  notation: "standard"
}), Ee = (n, a = "USD", u = !0) => {
  let c = Kt(a).format(n);
  return u && (c = c.replace(/\.00$/, "")), c;
};
var J = /* @__PURE__ */ ((n) => (n.Annual = "ANNUAL", n.Every30Days = "EVERY_30_DAYS", n))(J || {});
const qt = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "year";
    case "EVERY_30_DAYS":
    default:
      return "month";
  }
}, Gt = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "yr";
    case "EVERY_30_DAYS":
    default:
      return "mo";
  }
}, _e = ({
  interval: n = "EVERY_30_DAYS",
  useShortFormPlanIntervals: a = !0
}) => a ? Gt(n) : qt(n), Je = ({
  plan: n,
  customFieldKey: a = "recommended"
}) => {
  var u;
  return !!((u = n.customFields) != null && u[a]);
}, Ke = ({
  plan: n,
  customFieldKey: a = "buttonLabel"
}) => {
  var u;
  return ((u = n.customFields) == null ? void 0 : u[a]) || k.subscribe;
}, vt = ({ plan: n }) => {
  var a;
  return ((a = n.discounts) == null ? void 0 : a.length) > 0 ? n.discounts.reduce(
    (u, c) => u.discountedAmount < c.discountedAmount ? u : c
  ) : void 0;
}, Zt = (n = 4) => n % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : n % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : n % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : n === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, Xt = (n = 4) => n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : n === 1 ? 1 : 4, mn = ({
  orientation: n = "horizontal",
  onShowPlans: a,
  onCancelPlan: u,
  onPlanCancelled: c = () => {
  },
  cancelSubscription: y = async () => {
  },
  i18n: h,
  subscription: d,
  refetch: T = async () => {
  },
  apps: f = []
}) => /* @__PURE__ */ e.createElement(Fe, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(L, { gap: "400" }, /* @__PURE__ */ e.createElement(v, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(L, { gap: "300" }, f.map((_, A) => /* @__PURE__ */ e.createElement(L, { gap: "300" }, /* @__PURE__ */ e.createElement(q, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(q, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Nt,
  {
    source: _.iconUrl,
    alt: _.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, { variant: "headingSm" }, _.name), /* @__PURE__ */ e.createElement(v, null, _.description))), /* @__PURE__ */ e.createElement(q, { gap: "400" }, /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(ie, null, h.Install)))), A < f.length - 1 && /* @__PURE__ */ e.createElement(je, null))))));
var Ce = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Ce.displayName = "CheckIcon";
var Be = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
Be.displayName = "PlusIcon";
const Qt = ({ plan: n, t: a, translatePlanName: u, planNameTextVariant: c, planDescriptionTextVariant: y }) => /* @__PURE__ */ e.createElement(L, { gap: "100" }, /* @__PURE__ */ e.createElement(v, { variant: c, alignment: "center" }, u ? a(n.name) : n.name), n.description && /* @__PURE__ */ e.createElement(v, { variant: y, tone: "subdued", alignment: "center" }, a(n.description))), en = ({ plan: n, discount: a, t: u, priceTextVariant: c, useShortFormPlanIntervals: y = !0, toggleYearlySubtitle: h = !1 }) => /* @__PURE__ */ e.createElement(L, { gap: "100" }, !!a && /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { variant: c }, Ee(a.presentmentDiscountedAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(
  v,
  {
    variant: c,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Ee(n.presentmentAmount, n.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg", tone: "subdued" }, u(k.Per), " ", u(_e({ interval: n.interval, useShortFormPlanIntervals: y })))), !a && /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: c }, Ee(n.presentmentAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(k.Per), " ", u(_e({ interval: n.interval, useShortFormPlanIntervals: y })))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(L, null, n.usageCharges.map((d, T) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${T}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Be, tone: "subdued" })), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg" }, u(d.terms))))), h && /* @__PURE__ */ e.createElement(v, { variant: "bodyMd", tone: "subdued", alignment: "center" }, "Billed yearly")), tn = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(L, { gap: "300" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(v, null, a(k.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((c, y) => {
  const h = n.features[c];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${y}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "subdued" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(v, null, a(h.name)) : /* @__PURE__ */ e.createElement(v, null, h.value, " ", a(h.name)));
})), nn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: c,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  expanded: d = !1,
  isActivePlan: T = !1,
  isRecommendedPlan: f = !1,
  isCustomPlan: _ = !1,
  showRecommendedPlanBadge: A = !0,
  t: R,
  translatePlanName: N = !0,
  planNameTextVariant: O = "headingMd",
  planDescriptionTextVariant: W = "bodyLg",
  priceTextVariant: E = "heading3xl",
  toggleYearlySubtitle: b = !1
}) => {
  const [w, $] = e.useState(!1), F = R || ((S) => S), j = async ({ plan: S, discount: p }) => {
    c ? ($(!0), await c({ plan: S, discount: p }) !== !0 && $(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(re, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(re, { paddingBlock: d || f ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    re,
    {
      background: f || _ ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: d || f ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(L, { gap: "800" }, /* @__PURE__ */ e.createElement(L, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Qt,
      {
        plan: n,
        t: F,
        translatePlanName: N,
        planNameTextVariant: O,
        planDescriptionTextVariant: W
      }
    ), /* @__PURE__ */ e.createElement(
      en,
      {
        plan: n,
        discount: a,
        useShortFormPlanIntervals: y,
        t: F,
        priceTextVariant: E,
        toggleYearlySubtitle: b
      }
    )), /* @__PURE__ */ e.createElement(
      ie,
      {
        size: "large",
        variant: f ? "primary" : "secondary",
        onClick: async () => {
          await j({ plan: n, discount: a });
        },
        disabled: T,
        loading: w
      },
      F(u || k.SelectPlan)
    ), /* @__PURE__ */ e.createElement(tn, { plan: n, t: F, trialDaysAsFeature: h }), f && A && /* @__PURE__ */ e.createElement(q, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(qe, { tone: "success" }, F(k.MostPopular))))
  )));
}, pe = {
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
  planInterval: c,
  cardType: y = pe.Horizontal,
  trialDaysAsFeature: h = !0,
  useShortFormPlanIntervals: d = !0,
  keyForRecommended: T = "recommended",
  keyForCustomButtonLabel: f = "buttonLabel",
  showRecommendedPlanBadge: _ = !0,
  applyDiscount: A = !0,
  t: R,
  translatePlanName: N = !0,
  toggleYearlySubtitle: O = !1
}) => {
  var j;
  const W = (j = a == null ? void 0 : a.subscription) != null && j.active ? a.subscription : void 0, E = W == null ? void 0 : W.plan, b = c ? n.filter((S) => S.interval === c) : n, w = y === pe.Vertical ? 1 : Xt(b.length), $ = Zt(w), F = R || ((S) => S);
  return /* @__PURE__ */ e.createElement(Se, { columns: w }, b.map((S) => {
    const p = A ? vt({ plan: S }) : void 0, M = (E == null ? void 0 : E.id) === S.id && !(W != null && W.cancelOn);
    return /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: $, key: S.id }, y === pe.Highlighted && /* @__PURE__ */ e.createElement(
      nn,
      {
        key: `HighlightedPlanCard-${S.id}`,
        plan: S,
        discount: p,
        onSelectPlan: u,
        isActivePlan: M,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: d,
        isCustomPlan: S.availability !== "public",
        isRecommendedPlan: Je({ plan: S, customFieldKey: T }),
        buttonLabel: Ke({ plan: S, customFieldKey: f }),
        showRecommendedPlanBadge: _,
        toggleYearlySubtitle: O,
        t: F,
        translatePlanName: N
      }
    ), y === pe.Horizontal && /* @__PURE__ */ e.createElement(
      on,
      {
        key: `HorizontalPlanCard-${S.id}`,
        plan: S,
        discount: p,
        onSelectPlan: u,
        isActivePlan: M,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: d,
        isRecommendedPlan: Je({ plan: S, customFieldKey: T }),
        buttonLabel: Ke({ plan: S, customFieldKey: f }),
        showRecommendedPlanBadge: _,
        toggleYearlySubtitle: O,
        t: F,
        translatePlanName: N
      }
    ));
  }));
}, gn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: c = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: h,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: T = !0,
  // boolean
  showTrialDaysAsFeature: f = !0,
  // boolean
  useShortFormPlanIntervals: _,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: R = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: N = !1
  // boolean: toggle monthly pricing
}) => {
  const O = n == null ? void 0 : n.subscription, W = new URLSearchParams(window.location.search), E = a.some((M) => M.interval === J.Annual) && a.some((M) => M.interval === J.Every30Days), b = a.find((M) => M.id === (O == null ? void 0 : O.plan.id)), [w, $] = be(
    b ? b.interval : E ? J.Annual : J.Every30Days
  ), F = a.filter((M) => M.availability === "public"), j = R ? a.filter((M) => M.availability !== "public") : [], [S, p] = be(
    W.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ie,
    {
      title: k.Plans,
      backAction: c ? { content: k.Back, url: c } : void 0,
      secondaryActions: T && E ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: w === J.Every30Days,
          onClick: () => $(J.Every30Days)
        },
        k.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: w === J.Annual,
          onClick: () => $(J.Annual)
        },
        k.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(he, null, /* @__PURE__ */ e.createElement(he.Section, null, /* @__PURE__ */ e.createElement(L, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: k.SubscribeSuccessTitle,
        onDismiss: () => {
          p(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      k.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: F,
        onSelectPlan: u,
        planInterval: w,
        cardType: pe.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: _,
        showRecommendedPlanBadge: y,
        toggleYearlySubtitle: N
      }
    ), (j == null ? void 0 : j.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (j == null ? void 0 : j.length) > 0 && /* @__PURE__ */ e.createElement(L, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(v, { variant: "headingMd" }, k.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: j,
        onSelectPlan: u,
        planInterval: w,
        cardType: pe.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: _,
        showRecommendedPlanBadge: y
      }
    )))))
  );
}, rn = ({ plan: n, t: a, translatePlanName: u, isRecommendedPlan: c = !1, planNameTextVariant: y, planDescriptionTextVariant: h, showRecommendedPlanBadge: d }) => /* @__PURE__ */ e.createElement(L, { gap: "100" }, /* @__PURE__ */ e.createElement(q, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(v, { variant: y }, u ? a(n.name) : n.name), c && d && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, a(k.MostPopular))), n.description && /* @__PURE__ */ e.createElement(v, { variant: h, tone: "subdued" }, a(n.description))), an = ({ plan: n, discount: a, t: u, useShortFormPlanIntervals: c = !0, priceTextVariant: y, toggleYearlySubtitle: h = !1 }) => /* @__PURE__ */ e.createElement(L, null, !!a && a.presentmentDiscountedAmount > 0 && /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { variant: y }, Ee(a.presentmentDiscountedAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
  v,
  {
    variant: y,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  n.presentmentAmount
), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg", tone: "subdued" }, u(k.Per), " ", u(_e({ interval: n.interval, useShortFormPlanIntervals: c })))), (!a || a.presentmentDiscountedAmount == 0) && /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: y }, Ee(n.presentmentAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(k.Per), " ", u(_e({ interval: n.interval, useShortFormPlanIntervals: c })))), n.usageCharges && n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(L, null, n.usageCharges.map((d, T) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${T}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Be, tone: "subdued" })), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg" }, u(d.terms))))), h && /* @__PURE__ */ e.createElement(v, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), ln = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(L, { gap: "100" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(v, null, a(k.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((c, y) => {
  const h = n.features[c];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${y}`, align: "start", gap: "100", wrap: !1 }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "subdued" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(v, null, a(h.name)) : /* @__PURE__ */ e.createElement(v, null, h.value, " ", a(h.name)));
})), on = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: c,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: T = !1,
  t: f,
  translatePlanName: _ = !0,
  showRecommendedPlanBadge: A = !0,
  planNameTextVariant: R = "bodyLg",
  planDescriptionTextVariant: N = "bodyMd",
  priceTextVariant: O = "headingXl",
  toggleYearlySubtitle: W = !1
}) => {
  const [E, b] = e.useState(!1), w = f || ((F) => F), $ = async ({ plan: F, discount: j }) => {
    c ? (b(!0), await c({ plan: F, discount: j }) !== !0 && b(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(L, { gap: "400" }, /* @__PURE__ */ e.createElement(
    rn,
    {
      plan: n,
      isRecommendedPlan: d,
      showRecommendedPlanBadge: A,
      t: w,
      translatePlanName: _,
      planNameTextVariant: R,
      planDescriptionTextVariant: N
    }
  ), /* @__PURE__ */ e.createElement(
    an,
    {
      plan: n,
      discount: a,
      useShortFormPlanIntervals: y,
      t: w,
      priceTextVariant: O,
      toggleYearlySubtitle: W
    }
  ), /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await $({ plan: n, discount: a });
      },
      disabled: T,
      loading: E
    },
    w(T ? k.CurrentPlan : u || k.SelectPlan)
  ), /* @__PURE__ */ e.createElement(ln, { plan: n, trialDaysAsFeature: h, t: w })));
}, vn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: c = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: T = !0,
  // boolean
  showTrialDaysAsFeature: f = !0,
  // boolean
  useShortFormPlanIntervals: _ = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: R = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: N = !1
  // boolean: show monthly pricing for annual plans
}) => {
  const O = n == null ? void 0 : n.subscription, W = new URLSearchParams(window.location.search), E = a.some((M) => M.interval === J.Annual) && a.some((M) => M.interval === J.Every30Days), b = a.find((M) => M.id === (O == null ? void 0 : O.plan.id)), [w, $] = be(
    b ? b.interval : E ? J.Annual : J.Every30Days
  ), F = a.filter((M) => M.availability === "public"), j = R ? a.filter((M) => M.availability !== "public") : [], [S, p] = be(
    W.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ie,
    {
      title: k.Plans,
      backAction: c && c !== "" ? { content: k.Back, url: c } : void 0,
      secondaryActions: T && E ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: w === J.Every30Days,
          onClick: () => $(J.Every30Days)
        },
        k.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: w === J.Annual,
          onClick: () => $(J.Annual)
        },
        k.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(re, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(he, null, /* @__PURE__ */ e.createElement(he.Section, null, /* @__PURE__ */ e.createElement(L, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: k.SubscribeSuccessTitle,
        onDismiss: () => {
          p(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      k.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: F,
        onSelectPlan: u,
        planInterval: w,
        cardType: pe.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: _,
        showRecommendedPlanBadge: y,
        toggleYearlySubtitle: N
      }
    ), (j == null ? void 0 : j.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (j == null ? void 0 : j.length) > 0 && /* @__PURE__ */ e.createElement(L, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(v, { variant: "headingMd" }, k.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plans: j,
        onSelectPlan: u,
        planInterval: w,
        cardType: pe.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: _,
        showRecommendedPlanBadge: y
      }
    ))))))
  );
}, sn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: c,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: T = !1,
  t: f = _t,
  translatePlanName: _ = !0,
  showRecommendedPlanBadge: A = !0,
  planNameTextVariant: R = "bodyLg",
  planDescriptionTextVariant: N = "bodyMd",
  priceTextVariant: O = "headingXl",
  toggleYearlySubtitle: W = !1
}) => {
  const [E, b] = e.useState(!1), w = async ({ plan: p, discount: M }) => {
    c ? (b(!0), await c({ plan: p, discount: M }) !== !0 && b(!1)) : console.log("No onSelectPlan callback provided");
  }, $ = ({ plan: p }) => /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, { variant: R }, _ ? f(p.name) : p.name), p.description && /* @__PURE__ */ e.createElement(v, { variant: N, tone: "subdued" }, f(p.description))), F = ({ plan: p }) => /* @__PURE__ */ e.createElement(L, { gap: "200" }, /* @__PURE__ */ e.createElement(v, { fontWeight: "medium" }, f(k.Features)), /* @__PURE__ */ e.createElement(L, { gap: "100" }, h && p.trialDays && p.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "positive" })), /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, f(k.FreeTrialLength.replace("{{ trialDays }}", p.trialDays)))) : null, p.featuresOrder.map((M, Q) => {
    const G = p.features[M];
    if (G.type !== "boolean" || G.value === !0)
      return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${Q}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Ce, tone: "positive" })), G.type === "boolean" ? /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, G.name) : /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, G.value, " ", G.name));
  }))), j = ({ plan: p, discount: M, toggleYearlySubtitle: Q }) => /* @__PURE__ */ e.createElement(L, { gap: "100" }, M ? /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { variant: O }, Ee(M.presentmentDiscountedAmount, p.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
    v,
    {
      variant: O,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    p.presentmentAmount
  ), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg", tone: "subdued" }, k.Per, " ", _e({ interval: p.interval, useShortFormPlanIntervals: y }))) : /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: O }, Ee(p.presentmentAmount, p.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(v, { alignment: "center", variant: "bodyLg", tone: "subdued" }, k.Per, " ", _e({ interval: p.interval, useShortFormPlanIntervals: y }))), p.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(L, null, p.usageCharges.map((G, U) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${U}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ve, { source: Be, tone: "positive" })), /* @__PURE__ */ e.createElement(v, { variant: "bodyLg" }, G.terms)))), Q && /* @__PURE__ */ e.createElement(v, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), S = ({ plan: p, discount: M }) => /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await w({ plan: p, discount: M });
      },
      disabled: T,
      loading: E
    },
    f(T ? k.CurrentPlan : u || k.SelectPlan)
  ), d && A && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, f(k.MostPopular)));
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(Se, null, /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(L, { gap: "300" }, $({ plan: n }), j({ plan: n, discount: a, toggleYearlySubtitle: W }), /* @__PURE__ */ e.createElement(re, null, S({ plan: n, discount: a })))), /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, F({ plan: n }))));
}, hn = ({
  plans: n,
  customer: a,
  onSubscribe: u,
  backUrl: c = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: y = "recommended",
  keyForCustomButtonLabel: h = "buttonLabel",
  showPlanIntervalToggle: d = !1,
  // boolean
  trialDaysAsFeature: T = !0,
  // boolean
  useShortFormPlanIntervals: f = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: _ = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: A = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: R = !0,
  // boolean
  applyDiscount: N = !0,
  t: O,
  translatePlanName: W = !0,
  toggleYearlySubtitle: E = !1
}) => {
  var ue;
  const b = new URLSearchParams(window.location.search), w = n.some((x) => x.interval === J.Annual) && n.some((x) => x.interval === J.Every30Days), $ = (ue = a == null ? void 0 : a.subscription) != null && ue.active ? a.subscription : void 0, F = $ == null ? void 0 : $.plan, [j, S] = be(
    F ? F.interval : w ? J.Annual : J.Every30Days
  ), p = n.filter(
    (x) => x.availability !== "customerTag" && x.availability !== "customer"
  ), M = d && w ? p.filter((x) => x.interval === j) : p, Q = A ? n.filter(
    (x) => x.availability === "customerTag" || x.availability === "customer"
  ) : [], [G, U] = be(
    b.get("subscribed") === "true"
  ), I = O || ((x) => x);
  return /* @__PURE__ */ e.createElement(
    Ie,
    {
      title: k.Plans,
      backAction: c !== "" ? { content: k.Back, url: c } : void 0,
      secondaryActions: d && w ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: j === J.Every30Days,
          onClick: () => S(J.Every30Days)
        },
        k.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: j === J.Annual,
          onClick: () => S(J.Annual)
        },
        k.Year
      )) : void 0,
      fullWidth: _ === "full",
      narrowWidth: _ === "narrow"
    },
    /* @__PURE__ */ e.createElement(he, null, /* @__PURE__ */ e.createElement(he.Section, null, /* @__PURE__ */ e.createElement(L, { gap: "400" }, G && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: k.SubscribeSuccessTitle,
        onDismiss: () => {
          U(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      k.SubscribeSuccessBody
    ), M.map((x, g) => {
      const i = N ? vt({ plan: x }) : void 0, l = (F == null ? void 0 : F.id) === x.id && !($ != null && $.cancelOn);
      return /* @__PURE__ */ e.createElement(
        sn,
        {
          key: `plan-${g}`,
          plan: x,
          discount: i,
          onSelectPlan: u,
          isActivePlan: l,
          trialDaysAsFeature: T,
          useShortFormPlanIntervals: f,
          isCustomPlan: x.availability !== "public",
          isRecommendedPlan: Je({ plan: x, customFieldKey: y }),
          buttonLabel: Ke({ plan: x, customFieldKey: h }),
          showRecommendedPlanBadge: R,
          t: I,
          translatePlanName: W,
          toggleYearlySubtitle: E
        }
      );
    }), (Q == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (Q == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ e.createElement(L, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(v, { variant: "headingMd" }, k.CustomPlans)), /* @__PURE__ */ e.createElement(Se, null, Q.map((x, g) => {
      var l;
      const i = ((l = x.discounts) == null ? void 0 : l.length) > 0 ? x.discounts.reduce(
        (m, s) => m.discountedAmount < s.discountedAmount ? m : s
      ) : null;
      return /* @__PURE__ */ e.createElement(Se.Cell, { key: `custom-plan-${g}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(L, { gap: "400" }, titleComponent({ plan: x, discount: i }), pricingComponent({ plan: x, discount: i, toggleYearlySubtitle: E }), ctaComponent({ plan: x, discount: i }), featuresComponent({ plan: x, discount: i }))));
    }))))))
  );
};
var ht = { exports: {} };
(function(n, a) {
  (function(u, c) {
    n.exports = c();
  })(ft, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(c, y, h) {
      var d = y.prototype, T = d.format;
      h.en.formats = u, d.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var _ = this.$locale().formats, A = function(R, N) {
          return R.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(O, W, E) {
            var b = E && E.toUpperCase();
            return W || N[E] || u[E] || N[b].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(w, $, F) {
              return $ || F.slice(1);
            });
          });
        }(f, _ === void 0 ? {} : _);
        return T.call(this, A);
      };
    };
  });
})(ht);
var cn = ht.exports;
const un = /* @__PURE__ */ mt(cn);
Le.extend(un);
const Ve = ({
  orientation: n = "horizontal",
  onShowPlans: a,
  onCancelPlan: u,
  onPlanCancelled: c = () => {
  },
  cancelSubscription: y = async () => {
  },
  i18n: h,
  subscription: d,
  refetch: T = async () => {
  },
  t: f,
  translatePlanName: _ = !0,
  hideSelectPlanButton: A = !1
}) => {
  var G;
  const [R, N] = be(!1), [O, W] = be(!1), E = f || ((U) => U), b = {
    ...k,
    ...h || {}
  };
  if (!d)
    return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(L, { gap: "200" }, /* @__PURE__ */ e.createElement(v, { variant: "headingMd" }, E(b.Subscription)), /* @__PURE__ */ e.createElement(v, null, E(b.NotSubscribed)), /* @__PURE__ */ e.createElement(q, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, !A && /* @__PURE__ */ e.createElement(
      ie,
      {
        variant: "primary",
        onClick: a,
        accessibilityLabel: E(b.ChangePlan)
      },
      E(b.SelectPlan)
    )))));
  const { plan: w } = d, $ = Ee(d.presentmentTotal, w.presentmentCurrencyCode), F = E(w.interval === J.Annual ? b.Year : b.Month), j = n === "horizontal" ? Wt : L, S = (G = d == null ? void 0 : d.appliedDiscount) == null ? void 0 : G.discount, p = S ? S.percentage ? `${S.percentage}%` : Ee(S.presentmentAmount, w.presentmentCurrencyCode) : null, M = S && d.appliedDiscount.discountEndsAt && Le().isAfter(Le(d.appliedDiscount.discountEndsAt)), Q = w.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(L, { gap: "200" }, /* @__PURE__ */ e.createElement(v, { variant: "headingMd" }, E(b.Subscription)), /* @__PURE__ */ e.createElement(L, { gap: "400" }, /* @__PURE__ */ e.createElement(j, { columns: Q, gap: "300" }, /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, null, E(b.CurrentPlan)), /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, _ ? E(w.name) : w.name), d.cancelOn && /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, E("Canceled, active until {{ date }}").replace("{{ date }}", Le(d.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, null, E(b.Price)), /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, { tone: "subdued" }, E(b.AmountPerInterval).replace("{{ amount }}", $).replace("{{ interval }}", F)), S && !M && /* @__PURE__ */ e.createElement(v, { tone: "success" }, E(b.DiscountAmount).replace("{{ amount }}", p)), S && M && /* @__PURE__ */ e.createElement(v, { tone: "subdued", textDecorationLine: "line-through" }, E(b.DiscountAmountExpired).replace("{{ amount }}", p)))), w.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(L, null, /* @__PURE__ */ e.createElement(v, null, E(b.UsageCharges || "Usage charges")), w.usageCharges.map((U, I) => /* @__PURE__ */ e.createElement(v, { key: `usage-charge-${I}`, tone: "subdued" }, E(U.terms))))), /* @__PURE__ */ e.createElement(q, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, /* @__PURE__ */ e.createElement(
    ie,
    {
      onClick: () => {
        u ? u() : N(!0);
      },
      accessibilityLabel: E(b.CancelPlan),
      tone: "critical",
      disabled: !!d.cancelOn
    },
    E(b.CancelPlan)
  ), !A && /* @__PURE__ */ e.createElement(
    ie,
    {
      variant: "primary",
      onClick: a,
      accessibilityLabel: E(b.ChangePlan)
    },
    E(b.ChangePlan)
  ))))), R && /* @__PURE__ */ e.createElement(
    ct,
    {
      open: !0,
      onClose: () => N(!1),
      title: E(b.CancelPlan),
      primaryAction: {
        content: E(b.CancelPlan),
        destructive: !0,
        loading: O,
        disabled: O,
        onAction: async () => {
          W(!0), await y(), await T(), W(!1), N(!1), c();
        }
      },
      secondaryActions: [
        {
          content: E(b.Back),
          disabled: O,
          onAction: () => N(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(ct.Section, null, E(b.CancelConfirmation))
  ));
}, En = ({
  backUrl: n = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: a = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: u, i18n: c, subscription: y, refetch: h } = Jt(), d = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    Ie,
    {
      title: c.Subscription,
      backAction: n ? { content: c.Back, url: n } : void 0,
      fullWidth: a === "full",
      narrowWidth: a === "narrow"
    },
    /* @__PURE__ */ e.createElement(L, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: c,
        subscription: y,
        refetch: h
      }
    ), /* @__PURE__ */ e.createElement(he, null, /* @__PURE__ */ e.createElement(he.Section, null, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: c,
        subscription: y,
        refetch: h
      }
    )), /* @__PURE__ */ e.createElement(he.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: c,
        subscription: y,
        refetch: h,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  mn as BundleCard,
  nn as HighlightedPlanCard,
  vn as HighlightedPlanCards,
  on as HorizontalPlanCard,
  gn as HorizontalPlanCards,
  Ye as PlanCardStack,
  pe as PlanCardType,
  Ve as SubscriptionSummaryCard,
  En as SubscriptionSummaryPage,
  sn as VerticalPlanCard,
  hn as VerticalPlanCards
};
