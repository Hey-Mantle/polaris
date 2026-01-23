import e, { createContext as zt, useContext as Vt, useState as ve } from "react";
import { Banner as Ie, BlockStack as $, Text as f, InlineStack as z, Thumbnail as Zt, Button as ie, Divider as je, Card as ke, Icon as ce, Checkbox as mt, Collapsible as Kt, Modal as Ye, Box as ne, Badge as qe, Tooltip as Xe, Grid as Ce, Page as Ne, ButtonGroup as Re, Layout as Ee, InlineGrid as Gt } from "@shopify/polaris";
var vt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ht(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Et = { exports: {} };
(function(n, r) {
  (function(g, m) {
    n.exports = m();
  })(vt, function() {
    var g = 1e3, m = 6e4, p = 36e5, b = "millisecond", l = "second", A = "minute", v = "hour", S = "day", w = "week", O = "month", j = "quarter", L = "year", I = "date", h = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, F = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, y = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(i) {
      var s = ["th", "st", "nd", "rd"], o = i % 100;
      return "[" + i + (s[(o - 20) % 10] || s[o] || s[0]) + "]";
    } }, B = function(i, s, o) {
      var E = String(i);
      return !E || E.length >= s ? i : "" + Array(s + 1 - E.length).join(o) + i;
    }, U = { s: B, z: function(i) {
      var s = -i.utcOffset(), o = Math.abs(s), E = Math.floor(o / 60), d = o % 60;
      return (s <= 0 ? "+" : "-") + B(E, 2, "0") + ":" + B(d, 2, "0");
    }, m: function i(s, o) {
      if (s.date() < o.date())
        return -i(o, s);
      var E = 12 * (o.year() - s.year()) + (o.month() - s.month()), d = s.clone().add(E, O), P = o - d < 0, T = s.clone().add(E + (P ? -1 : 1), O);
      return +(-(E + (o - d) / (P ? d - T : T - d)) || 0);
    }, a: function(i) {
      return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
    }, p: function(i) {
      return { M: O, y: L, w, d: S, D: I, h: v, m: A, s: l, ms: b, Q: j }[i] || String(i || "").toLowerCase().replace(/s$/, "");
    }, u: function(i) {
      return i === void 0;
    } }, D = "en", R = {};
    R[D] = y;
    var k = "$isDayjsObject", _ = function(i) {
      return i instanceof re || !(!i || !i[k]);
    }, K = function i(s, o, E) {
      var d;
      if (!s)
        return D;
      if (typeof s == "string") {
        var P = s.toLowerCase();
        R[P] && (d = P), o && (R[P] = o, d = P);
        var T = s.split("-");
        if (!d && T.length > 1)
          return i(T[0]);
      } else {
        var V = s.name;
        R[V] = s, d = V;
      }
      return !E && d && (D = d), d || !E && D;
    }, c = function(i, s) {
      if (_(i))
        return i.clone();
      var o = typeof s == "object" ? s : {};
      return o.date = i, o.args = arguments, new re(o);
    }, x = U;
    x.l = K, x.i = _, x.w = function(i, s) {
      return c(i, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
    };
    var re = function() {
      function i(o) {
        this.$L = K(o.locale, null, !0), this.parse(o), this.$x = this.$x || o.x || {}, this[k] = !0;
      }
      var s = i.prototype;
      return s.parse = function(o) {
        this.$d = function(E) {
          var d = E.date, P = E.utc;
          if (d === null)
            return /* @__PURE__ */ new Date(NaN);
          if (x.u(d))
            return /* @__PURE__ */ new Date();
          if (d instanceof Date)
            return new Date(d);
          if (typeof d == "string" && !/Z$/i.test(d)) {
            var T = d.match(C);
            if (T) {
              var V = T[2] - 1 || 0, J = (T[7] || "0").substring(0, 3);
              return P ? new Date(Date.UTC(T[1], V, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, J)) : new Date(T[1], V, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, J);
            }
          }
          return new Date(d);
        }(o), this.init();
      }, s.init = function() {
        var o = this.$d;
        this.$y = o.getFullYear(), this.$M = o.getMonth(), this.$D = o.getDate(), this.$W = o.getDay(), this.$H = o.getHours(), this.$m = o.getMinutes(), this.$s = o.getSeconds(), this.$ms = o.getMilliseconds();
      }, s.$utils = function() {
        return x;
      }, s.isValid = function() {
        return this.$d.toString() !== h;
      }, s.isSame = function(o, E) {
        var d = c(o);
        return this.startOf(E) <= d && d <= this.endOf(E);
      }, s.isAfter = function(o, E) {
        return c(o) < this.startOf(E);
      }, s.isBefore = function(o, E) {
        return this.endOf(E) < c(o);
      }, s.$g = function(o, E, d) {
        return x.u(o) ? this[E] : this.set(d, o);
      }, s.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, s.valueOf = function() {
        return this.$d.getTime();
      }, s.startOf = function(o, E) {
        var d = this, P = !!x.u(E) || E, T = x.p(o), V = function(de, ee) {
          var ge = x.w(d.$u ? Date.UTC(d.$y, ee, de) : new Date(d.$y, ee, de), d);
          return P ? ge : ge.endOf(S);
        }, J = function(de, ee) {
          return x.w(d.toDate()[de].apply(d.toDate("s"), (P ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(ee)), d);
        }, q = this.$W, te = this.$M, oe = this.$D, me = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case L:
            return P ? V(1, 0) : V(31, 11);
          case O:
            return P ? V(1, te) : V(0, te + 1);
          case w:
            var ue = this.$locale().weekStart || 0, fe = (q < ue ? q + 7 : q) - ue;
            return V(P ? oe - fe : oe + (6 - fe), te);
          case S:
          case I:
            return J(me + "Hours", 0);
          case v:
            return J(me + "Minutes", 1);
          case A:
            return J(me + "Seconds", 2);
          case l:
            return J(me + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, s.endOf = function(o) {
        return this.startOf(o, !1);
      }, s.$set = function(o, E) {
        var d, P = x.p(o), T = "set" + (this.$u ? "UTC" : ""), V = (d = {}, d[S] = T + "Date", d[I] = T + "Date", d[O] = T + "Month", d[L] = T + "FullYear", d[v] = T + "Hours", d[A] = T + "Minutes", d[l] = T + "Seconds", d[b] = T + "Milliseconds", d)[P], J = P === S ? this.$D + (E - this.$W) : E;
        if (P === O || P === L) {
          var q = this.clone().set(I, 1);
          q.$d[V](J), q.init(), this.$d = q.set(I, Math.min(this.$D, q.daysInMonth())).$d;
        } else
          V && this.$d[V](J);
        return this.init(), this;
      }, s.set = function(o, E) {
        return this.clone().$set(o, E);
      }, s.get = function(o) {
        return this[x.p(o)]();
      }, s.add = function(o, E) {
        var d, P = this;
        o = Number(o);
        var T = x.p(E), V = function(te) {
          var oe = c(P);
          return x.w(oe.date(oe.date() + Math.round(te * o)), P);
        };
        if (T === O)
          return this.set(O, this.$M + o);
        if (T === L)
          return this.set(L, this.$y + o);
        if (T === S)
          return V(1);
        if (T === w)
          return V(7);
        var J = (d = {}, d[A] = m, d[v] = p, d[l] = g, d)[T] || 1, q = this.$d.getTime() + o * J;
        return x.w(q, this);
      }, s.subtract = function(o, E) {
        return this.add(-1 * o, E);
      }, s.format = function(o) {
        var E = this, d = this.$locale();
        if (!this.isValid())
          return d.invalidDate || h;
        var P = o || "YYYY-MM-DDTHH:mm:ssZ", T = x.z(this), V = this.$H, J = this.$m, q = this.$M, te = d.weekdays, oe = d.months, me = d.meridiem, ue = function(ee, ge, ye, we) {
          return ee && (ee[ge] || ee(E, P)) || ye[ge].slice(0, we);
        }, fe = function(ee) {
          return x.s(V % 12 || 12, ee, "0");
        }, de = me || function(ee, ge, ye) {
          var we = ee < 12 ? "AM" : "PM";
          return ye ? we.toLowerCase() : we;
        };
        return P.replace(F, function(ee, ge) {
          return ge || function(ye) {
            switch (ye) {
              case "YY":
                return String(E.$y).slice(-2);
              case "YYYY":
                return x.s(E.$y, 4, "0");
              case "M":
                return q + 1;
              case "MM":
                return x.s(q + 1, 2, "0");
              case "MMM":
                return ue(d.monthsShort, q, oe, 3);
              case "MMMM":
                return ue(oe, q);
              case "D":
                return E.$D;
              case "DD":
                return x.s(E.$D, 2, "0");
              case "d":
                return String(E.$W);
              case "dd":
                return ue(d.weekdaysMin, E.$W, te, 2);
              case "ddd":
                return ue(d.weekdaysShort, E.$W, te, 3);
              case "dddd":
                return te[E.$W];
              case "H":
                return String(V);
              case "HH":
                return x.s(V, 2, "0");
              case "h":
                return fe(1);
              case "hh":
                return fe(2);
              case "a":
                return de(V, J, !0);
              case "A":
                return de(V, J, !1);
              case "m":
                return String(J);
              case "mm":
                return x.s(J, 2, "0");
              case "s":
                return String(E.$s);
              case "ss":
                return x.s(E.$s, 2, "0");
              case "SSS":
                return x.s(E.$ms, 3, "0");
              case "Z":
                return T;
            }
            return null;
          }(ee) || T.replace(":", "");
        });
      }, s.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, s.diff = function(o, E, d) {
        var P, T = this, V = x.p(E), J = c(o), q = (J.utcOffset() - this.utcOffset()) * m, te = this - J, oe = function() {
          return x.m(T, J);
        };
        switch (V) {
          case L:
            P = oe() / 12;
            break;
          case O:
            P = oe();
            break;
          case j:
            P = oe() / 3;
            break;
          case w:
            P = (te - q) / 6048e5;
            break;
          case S:
            P = (te - q) / 864e5;
            break;
          case v:
            P = te / p;
            break;
          case A:
            P = te / m;
            break;
          case l:
            P = te / g;
            break;
          default:
            P = te;
        }
        return d ? P : x.a(P);
      }, s.daysInMonth = function() {
        return this.endOf(O).$D;
      }, s.$locale = function() {
        return R[this.$L];
      }, s.locale = function(o, E) {
        if (!o)
          return this.$L;
        var d = this.clone(), P = K(o, E, !0);
        return P && (d.$L = P), d;
      }, s.clone = function() {
        return x.w(this.$d, this);
      }, s.toDate = function() {
        return new Date(this.valueOf());
      }, s.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, s.toISOString = function() {
        return this.$d.toISOString();
      }, s.toString = function() {
        return this.$d.toUTCString();
      }, i;
    }(), ae = re.prototype;
    return c.prototype = ae, [["$ms", b], ["$s", l], ["$m", A], ["$H", v], ["$W", S], ["$M", O], ["$y", L], ["$D", I]].forEach(function(i) {
      ae[i[1]] = function(s) {
        return this.$g(s, i[0], i[1]);
      };
    }), c.extend = function(i, s) {
      return i.$i || (i(s, re, c), i.$i = !0), c;
    }, c.locale = K, c.isDayjs = _, c.unix = function(i) {
      return c(1e3 * i);
    }, c.en = R[D], c.Ls = R, c.p = {}, c;
  });
})(Et);
var Jt = Et.exports;
const Le = /* @__PURE__ */ ht(Jt);
var $e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ft;
function qt() {
  if (ft)
    return $e;
  ft = 1;
  var n = e, r = Symbol.for("react.element"), g = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, p = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(A, v, S) {
    var w, O = {}, j = null, L = null;
    S !== void 0 && (j = "" + S), v.key !== void 0 && (j = "" + v.key), v.ref !== void 0 && (L = v.ref);
    for (w in v)
      m.call(v, w) && !b.hasOwnProperty(w) && (O[w] = v[w]);
    if (A && A.defaultProps)
      for (w in v = A.defaultProps, v)
        O[w] === void 0 && (O[w] = v[w]);
    return { $$typeof: r, type: A, key: j, ref: L, props: O, _owner: p.current };
  }
  return $e.Fragment = g, $e.jsx = l, $e.jsxs = l, $e;
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
var gt;
function Xt() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = e, r = Symbol.for("react.element"), g = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), p = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), A = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), L = Symbol.for("react.offscreen"), I = Symbol.iterator, h = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = I && t[I] || t[h];
      return typeof a == "function" ? a : null;
    }
    var F = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(t) {
      {
        for (var a = arguments.length, u = new Array(a > 1 ? a - 1 : 0), M = 1; M < a; M++)
          u[M - 1] = arguments[M];
        B("error", t, u);
      }
    }
    function B(t, a, u) {
      {
        var M = F.ReactDebugCurrentFrame, H = M.getStackAddendum();
        H !== "" && (a += "%s", u = u.concat([H]));
        var Z = u.map(function(W) {
          return String(W);
        });
        Z.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, Z);
      }
    }
    var U = !1, D = !1, R = !1, k = !1, _ = !1, K;
    K = Symbol.for("react.module.reference");
    function c(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === m || t === b || _ || t === p || t === S || t === w || k || t === L || U || D || R || typeof t == "object" && t !== null && (t.$$typeof === j || t.$$typeof === O || t.$$typeof === l || t.$$typeof === A || t.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === K || t.getModuleId !== void 0));
    }
    function x(t, a, u) {
      var M = t.displayName;
      if (M)
        return M;
      var H = a.displayName || a.name || "";
      return H !== "" ? u + "(" + H + ")" : u;
    }
    function re(t) {
      return t.displayName || "Context";
    }
    function ae(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case m:
          return "Fragment";
        case g:
          return "Portal";
        case b:
          return "Profiler";
        case p:
          return "StrictMode";
        case S:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case A:
            var a = t;
            return re(a) + ".Consumer";
          case l:
            var u = t;
            return re(u._context) + ".Provider";
          case v:
            return x(t, t.render, "ForwardRef");
          case O:
            var M = t.displayName || null;
            return M !== null ? M : ae(t.type) || "Memo";
          case j: {
            var H = t, Z = H._payload, W = H._init;
            try {
              return ae(W(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var i = Object.assign, s = 0, o, E, d, P, T, V, J;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function te() {
      {
        if (s === 0) {
          o = console.log, E = console.info, d = console.warn, P = console.error, T = console.group, V = console.groupCollapsed, J = console.groupEnd;
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
        s++;
      }
    }
    function oe() {
      {
        if (s--, s === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: i({}, t, {
              value: o
            }),
            info: i({}, t, {
              value: E
            }),
            warn: i({}, t, {
              value: d
            }),
            error: i({}, t, {
              value: P
            }),
            group: i({}, t, {
              value: T
            }),
            groupCollapsed: i({}, t, {
              value: V
            }),
            groupEnd: i({}, t, {
              value: J
            })
          });
        }
        s < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var me = F.ReactCurrentDispatcher, ue;
    function fe(t, a, u) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (H) {
            var M = H.stack.trim().match(/\n( *(at )?)/);
            ue = M && M[1] || "";
          }
        return `
` + ue + t;
      }
    }
    var de = !1, ee;
    {
      var ge = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new ge();
    }
    function ye(t, a) {
      if (!t || de)
        return "";
      {
        var u = ee.get(t);
        if (u !== void 0)
          return u;
      }
      var M;
      de = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = me.current, me.current = null, te();
      try {
        if (a) {
          var W = function() {
            throw Error();
          };
          if (Object.defineProperty(W.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(W, []);
            } catch (he) {
              M = he;
            }
            Reflect.construct(t, [], W);
          } else {
            try {
              W.call();
            } catch (he) {
              M = he;
            }
            t.call(W.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            M = he;
          }
          t();
        }
      } catch (he) {
        if (he && M && typeof he.stack == "string") {
          for (var N = he.stack.split(`
`), le = M.stack.split(`
`), X = N.length - 1, Q = le.length - 1; X >= 1 && Q >= 0 && N[X] !== le[Q]; )
            Q--;
          for (; X >= 1 && Q >= 0; X--, Q--)
            if (N[X] !== le[Q]) {
              if (X !== 1 || Q !== 1)
                do
                  if (X--, Q--, Q < 0 || N[X] !== le[Q]) {
                    var se = `
` + N[X].replace(" at new ", " at ");
                    return t.displayName && se.includes("<anonymous>") && (se = se.replace("<anonymous>", t.displayName)), typeof t == "function" && ee.set(t, se), se;
                  }
                while (X >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        de = !1, me.current = Z, oe(), Error.prepareStackTrace = H;
      }
      var De = t ? t.displayName || t.name : "", dt = De ? fe(De) : "";
      return typeof t == "function" && ee.set(t, dt), dt;
    }
    function we(t, a, u) {
      return ye(t, !1);
    }
    function wt(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Te(t, a, u) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ye(t, wt(t));
      if (typeof t == "string")
        return fe(t);
      switch (t) {
        case S:
          return fe("Suspense");
        case w:
          return fe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case v:
            return we(t.render);
          case O:
            return Te(t.type, a, u);
          case j: {
            var M = t, H = M._payload, Z = M._init;
            try {
              return Te(Z(H), a, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Qe = {}, et = F.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var a = t._owner, u = Te(t.type, t._source, a ? a.type : null);
        et.setExtraStackFrame(u);
      } else
        et.setExtraStackFrame(null);
    }
    function Pt(t, a, u, M, H) {
      {
        var Z = Function.call.bind(Oe);
        for (var W in t)
          if (Z(t, W)) {
            var N = void 0;
            try {
              if (typeof t[W] != "function") {
                var le = Error((M || "React class") + ": " + u + " type `" + W + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[W] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              N = t[W](a, W, M, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              N = X;
            }
            N && !(N instanceof Error) && (xe(H), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", u, W, typeof N), xe(null)), N instanceof Error && !(N.message in Qe) && (Qe[N.message] = !0, xe(H), y("Failed %s type: %s", u, N.message), xe(null));
          }
      }
    }
    var Dt = Array.isArray;
    function Ue(t) {
      return Dt(t);
    }
    function kt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, u = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return u;
      }
    }
    function Mt(t) {
      try {
        return tt(t), !1;
      } catch {
        return !0;
      }
    }
    function tt(t) {
      return "" + t;
    }
    function nt(t) {
      if (Mt(t))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(t)), tt(t);
    }
    var Me = F.ReactCurrentOwner, $t = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, rt, at, He;
    He = {};
    function At(t) {
      if (Oe.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Rt(t) {
      if (Oe.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Tt(t, a) {
      if (typeof t.ref == "string" && Me.current && a && Me.current.stateNode !== a) {
        var u = ae(Me.current.type);
        He[u] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Me.current.type), t.ref), He[u] = !0);
      }
    }
    function Ot(t, a) {
      {
        var u = function() {
          rt || (rt = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function xt(t, a) {
      {
        var u = function() {
          at || (at = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        u.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var Lt = function(t, a, u, M, H, Z, W) {
      var N = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: u,
        props: W,
        // Record the component responsible for creating this element.
        _owner: Z
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
        value: M
      }), Object.defineProperty(N, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(N.props), Object.freeze(N)), N;
    };
    function Yt(t, a, u, M, H) {
      {
        var Z, W = {}, N = null, le = null;
        u !== void 0 && (nt(u), N = "" + u), Rt(a) && (nt(a.key), N = "" + a.key), At(a) && (le = a.ref, Tt(a, H));
        for (Z in a)
          Oe.call(a, Z) && !$t.hasOwnProperty(Z) && (W[Z] = a[Z]);
        if (t && t.defaultProps) {
          var X = t.defaultProps;
          for (Z in X)
            W[Z] === void 0 && (W[Z] = X[Z]);
        }
        if (N || le) {
          var Q = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          N && Ot(W, Q), le && xt(W, Q);
        }
        return Lt(t, N, le, H, M, Me.current, W);
      }
    }
    var ze = F.ReactCurrentOwner, lt = F.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var a = t._owner, u = Te(t.type, t._source, a ? a.type : null);
        lt.setExtraStackFrame(u);
      } else
        lt.setExtraStackFrame(null);
    }
    var Ve;
    Ve = !1;
    function Ze(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function ot() {
      {
        if (ze.current) {
          var t = ae(ze.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ft(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), u = t.lineNumber;
          return `

Check your code at ` + a + ":" + u + ".";
        }
        return "";
      }
    }
    var it = {};
    function It(t) {
      {
        var a = ot();
        if (!a) {
          var u = typeof t == "string" ? t : t.displayName || t.name;
          u && (a = `

Check the top-level render call using <` + u + ">.");
        }
        return a;
      }
    }
    function ct(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var u = It(a);
        if (it[u])
          return;
        it[u] = !0;
        var M = "";
        t && t._owner && t._owner !== ze.current && (M = " It was passed a child from " + ae(t._owner.type) + "."), Pe(t), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, M), Pe(null);
      }
    }
    function st(t, a) {
      {
        if (typeof t != "object")
          return;
        if (Ue(t))
          for (var u = 0; u < t.length; u++) {
            var M = t[u];
            Ze(M) && ct(M, a);
          }
        else if (Ze(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var H = C(t);
          if (typeof H == "function" && H !== t.entries)
            for (var Z = H.call(t), W; !(W = Z.next()).done; )
              Ze(W.value) && ct(W.value, a);
        }
      }
    }
    function jt(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var u;
        if (typeof a == "function")
          u = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === O))
          u = a.propTypes;
        else
          return;
        if (u) {
          var M = ae(a);
          Pt(u, t.props, "prop", M, t);
        } else if (a.PropTypes !== void 0 && !Ve) {
          Ve = !0;
          var H = ae(a);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nt(t) {
      {
        for (var a = Object.keys(t.props), u = 0; u < a.length; u++) {
          var M = a[u];
          if (M !== "children" && M !== "key") {
            Pe(t), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), Pe(null);
            break;
          }
        }
        t.ref !== null && (Pe(t), y("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function ut(t, a, u, M, H, Z) {
      {
        var W = c(t);
        if (!W) {
          var N = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (N += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Ft(H);
          le ? N += le : N += ot();
          var X;
          t === null ? X = "null" : Ue(t) ? X = "array" : t !== void 0 && t.$$typeof === r ? (X = "<" + (ae(t.type) || "Unknown") + " />", N = " Did you accidentally export a JSX literal instead of a component?") : X = typeof t, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, N);
        }
        var Q = Yt(t, a, u, H, Z);
        if (Q == null)
          return Q;
        if (W) {
          var se = a.children;
          if (se !== void 0)
            if (M)
              if (Ue(se)) {
                for (var De = 0; De < se.length; De++)
                  st(se[De], t);
                Object.freeze && Object.freeze(se);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              st(se, t);
        }
        return t === m ? Nt(Q) : jt(Q), Q;
      }
    }
    function Bt(t, a, u) {
      return ut(t, a, u, !0);
    }
    function Wt(t, a, u) {
      return ut(t, a, u, !1);
    }
    var Ut = Wt, Ht = Bt;
    Ae.Fragment = m, Ae.jsx = Ut, Ae.jsxs = Ht;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? qt() : Xt();
const Y = {
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
}, Qt = zt(void 0), en = () => {
  const n = Vt(Qt);
  if (n === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return n;
}, tn = (n = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: n,
  notation: "standard"
}), pe = (n, r = "USD", g = !0) => {
  let m = tn(r).format(n);
  return g && (m = m.replace(/\.00$/, "")), m;
};
var G = /* @__PURE__ */ ((n) => (n.Annual = "ANNUAL", n.Every30Days = "EVERY_30_DAYS", n))(G || {});
const nn = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "year";
    case "EVERY_30_DAYS":
    default:
      return "month";
  }
}, rn = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "yr";
    case "EVERY_30_DAYS":
    default:
      return "mo";
  }
}, _e = ({
  interval: n = "EVERY_30_DAYS",
  useShortFormPlanIntervals: r = !0
}) => r ? rn(n) : nn(n), Ge = ({
  plan: n,
  customFieldKey: r = "recommended"
}) => {
  var g;
  return !!((g = n.customFields) != null && g[r]);
}, Je = ({
  plan: n,
  customFieldKey: r = "buttonLabel",
  defaultLabel: g = Y.subscribe
}) => {
  var m;
  return ((m = n.customFields) == null ? void 0 : m[r]) || g;
}, pt = ({
  plan: n
}) => n.discounts && n.discounts.length > 0 ? n.discounts.reduce(
  (r, g) => r.discountedAmount < g.discountedAmount ? r : g
) : void 0, an = (n = 4) => n % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : n % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : n % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : n === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, ln = (n = 4) => n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : n === 1 ? 1 : 4, bn = ({
  orientation: n = "horizontal",
  onShowPlans: r,
  onCancelPlan: g,
  onPlanCancelled: m = () => {
  },
  cancelSubscription: p = async () => {
  },
  i18n: b,
  subscription: l,
  refetch: A = async () => {
  },
  apps: v = []
}) => /* @__PURE__ */ e.createElement(Ie, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(f, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement($, { gap: "300" }, v.map((S, w) => /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(z, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Zt,
  {
    source: S.iconUrl,
    alt: S.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, { variant: "headingSm" }, S.name), /* @__PURE__ */ e.createElement(f, null, S.description))), /* @__PURE__ */ e.createElement(z, { gap: "400" }, /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(ie, null, b.Install)))), w < v.length - 1 && /* @__PURE__ */ e.createElement(je, null))))));
var yt = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    d: "M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
yt.displayName = "CheckCircleIcon";
var Se = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Se.displayName = "CheckIcon";
var bt = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
bt.displayName = "ChevronDownIcon";
var Ct = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
Ct.displayName = "ChevronUpIcon";
var Be = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    d: "M10 14a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 1.5 0v3.5a.75.75 0 0 1-.75.75Z"
  }), /* @__PURE__ */ e.createElement("path", {
    d: "M9 7a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
  }), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
Be.displayName = "InfoIcon";
var We = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
We.displayName = "PlusIcon";
const Cn = ({
  title: n = "Checklist",
  steps: r = [],
  showProgress: g = !0,
  showProgressText: m = !0,
  hideCompleted: p = !1,
  allowExpandCompleted: b = !0,
  showDescription: l = !0,
  enableDescriptionModal: A = !1,
  completionMessage: v = "All items completed! Great job!",
  noItemsMessage: S = "No items in this checklist yet."
}) => {
  const [w, O] = ve(!1), [j, L] = ve(null), I = r.filter((c) => c.completed).length, h = r.length, C = h > 0 ? Math.round(I / h * 100) : 0, F = I === h && h > 0, y = r.filter((c) => !c.completed), B = r.filter((c) => c.completed), U = p ? y : r, D = () => {
    O(!w);
  }, R = (c) => {
    if (A) {
      const x = r.find((re) => re.id === c);
      x && x.description && L(c);
    }
  }, k = () => {
    L(null);
  }, _ = j ? r.find((c) => c.id === j) : null, K = (c) => {
    const x = /* @__PURE__ */ e.createElement(
      f,
      {
        variant: "bodyMd",
        tone: c.completed ? "subdued" : "base",
        textDecorationLine: c.completed ? "line-through" : "none"
      },
      c.name
    );
    return A && c.description ? /* @__PURE__ */ e.createElement(
      "span",
      {
        style: {
          cursor: "pointer",
          textDecoration: "underline",
          textDecorationColor: "transparent",
          transition: "text-decoration-color 0.2s ease"
        },
        onMouseEnter: (re) => {
          re.target.style.textDecorationColor = "currentColor";
        },
        onMouseLeave: (re) => {
          re.target.style.textDecorationColor = "transparent";
        },
        onClick: () => R(c.id)
      },
      x
    ) : x;
  };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(z, { align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, n), F && /* @__PURE__ */ e.createElement(z, { gap: "100", blockAlign: "center" }, /* @__PURE__ */ e.createElement(ce, { source: yt, tone: "success" }), /* @__PURE__ */ e.createElement(f, { tone: "success" }, "Complete!"))), g && h > 0 && /* @__PURE__ */ e.createElement($, { gap: "100" }, m && /* @__PURE__ */ e.createElement(z, { align: "space-between" }, /* @__PURE__ */ e.createElement(f, { variant: "bodyMd", tone: "subdued" }, "Progress: ", I, " of ", h, " completed"), /* @__PURE__ */ e.createElement(f, { variant: "bodyMd", tone: "subdued" }, C, "%")), /* @__PURE__ */ e.createElement(
    "div",
    {
      style: {
        width: "100%",
        height: "8px",
        backgroundColor: "#f0f0f0",
        borderRadius: "4px",
        overflow: "hidden"
      }
    },
    /* @__PURE__ */ e.createElement(
      "div",
      {
        style: {
          width: `${C}%`,
          height: "100%",
          backgroundColor: F ? "#00a047" : "#006fbb",
          transition: "width 0.3s ease"
        }
      }
    )
  ))), /* @__PURE__ */ e.createElement($, { gap: "300" }, U.map((c) => /* @__PURE__ */ e.createElement(z, { key: c.id, align: "space-between", blockAlign: "start" }, /* @__PURE__ */ e.createElement(z, { gap: "300", blockAlign: "start" }, /* @__PURE__ */ e.createElement(
    mt,
    {
      id: `checklist-step-${c.id}`,
      checked: c.completed,
      onChange: () => handleToggle(c.id)
    }
  ), /* @__PURE__ */ e.createElement($, { gap: "100" }, K(c), c.description && l && /* @__PURE__ */ e.createElement(f, { variant: "bodySm", tone: "subdued" }, c.description)))))), p && b && B.length > 0 && /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      variant: "plain",
      onClick: D,
      icon: w ? Ct : bt,
      disclosure: w ? "up" : "down"
    },
    w ? "Hide" : "Show",
    " ",
    I,
    " completed ",
    I === 1 ? "item" : "items"
  ), /* @__PURE__ */ e.createElement(
    Kt,
    {
      open: w,
      id: "completed-steps",
      transition: { duration: "200ms", timingFunction: "ease-in-out" }
    },
    /* @__PURE__ */ e.createElement($, { gap: "300" }, B.map((c) => /* @__PURE__ */ e.createElement(z, { key: c.id, align: "space-between", blockAlign: "start" }, /* @__PURE__ */ e.createElement(z, { gap: "300", blockAlign: "start" }, /* @__PURE__ */ e.createElement(
      mt,
      {
        id: `checklist-step-${c.id}`,
        checked: c.completed,
        onChange: () => handleToggle(c.id)
      }
    ), /* @__PURE__ */ e.createElement($, { gap: "100" }, K(c), c.description && l && /* @__PURE__ */ e.createElement(f, { variant: "bodySm", tone: "subdued" }, c.description))))))
  )), U.length === 0 && p && h > 0 && !b && (typeof v == "string" ? /* @__PURE__ */ e.createElement(f, { tone: "subdued", alignment: "center" }, v) : v), h === 0 && (typeof S == "string" ? /* @__PURE__ */ e.createElement(f, { tone: "subdued", alignment: "center" }, S) : S)), _ && /* @__PURE__ */ e.createElement(
    Ye,
    {
      open: !!j,
      onClose: k,
      title: _.name,
      primaryAction: {
        content: "Close",
        onAction: k
      }
    },
    /* @__PURE__ */ e.createElement(Ye.Section, null, /* @__PURE__ */ e.createElement(f, { variant: "bodyMd" }, _.description))
  ));
}, on = ({
  plan: n,
  t: r,
  translatePlanName: g,
  planNameTextVariant: m,
  planDescriptionTextVariant: p
}) => /* @__PURE__ */ e.createElement($, { gap: "100" }, /* @__PURE__ */ e.createElement(f, { variant: m, alignment: "center" }, g ? r(n.name) : n.name), n.description && /* @__PURE__ */ e.createElement(
  f,
  {
    variant: p,
    tone: "subdued",
    alignment: "center"
  },
  r(n.description)
)), cn = ({
  plan: n,
  discount: r,
  t: g,
  priceTextVariant: m,
  useShortFormPlanIntervals: p = !0,
  toggleYearlySubtitle: b = !1
}) => /* @__PURE__ */ e.createElement($, { gap: "100" }, !!r && /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { variant: m }, pe(
  r.presentmentDiscountedAmount,
  n.presentmentCurrencyCode,
  !0
)), /* @__PURE__ */ e.createElement(
  f,
  {
    variant: m,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  pe(n.presentmentAmount, n.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(f, { variant: "bodyLg", tone: "subdued" }, g(Y.Per), " ", g(
  _e({
    interval: n.interval,
    useShortFormPlanIntervals: p
  })
))), !r && /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: m }, pe(n.presentmentAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: "bodyLg", tone: "subdued" }, g(Y.Per), " ", g(
  _e({
    interval: n.interval,
    useShortFormPlanIntervals: p
  })
))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, n.usageCharges.filter((l) => l.terms && l.terms.length > 0).map((l, A) => /* @__PURE__ */ e.createElement(
  z,
  {
    key: `plan-usageCharge-${A}`,
    align: "center",
    gap: "100"
  },
  /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: We, tone: "subdued" })),
  /* @__PURE__ */ e.createElement(f, { variant: "bodyLg" }, g(l.terms))
))), b && /* @__PURE__ */ e.createElement(f, { variant: "bodyMd", tone: "subdued", alignment: "center" }, "Billed yearly")), sn = ({
  plan: n,
  t: r,
  trialDaysAsFeature: g = !1,
  showFeatureDescriptionAsTooltip: m = !0
}) => /* @__PURE__ */ e.createElement($, { gap: "300" }, g && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "subdued" })), /* @__PURE__ */ e.createElement(f, null, r(Y.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((p, b) => {
  const l = n.features[p];
  if ((l.type !== "boolean" || l.value === !0) && l.visible)
    return /* @__PURE__ */ e.createElement(z, { key: `plan-feature-${b}`, align: "center", gap: "100", wrap: !1 }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "subdued" })), l.type === "boolean" ? /* @__PURE__ */ e.createElement(f, null, r(l.name)) : /* @__PURE__ */ e.createElement(f, null, l.value, " ", r(l.name)), l.description && m && /* @__PURE__ */ e.createElement(Xe, { content: r(l.description) }, /* @__PURE__ */ e.createElement(ce, { source: Be, tone: "subdued" })));
})), un = ({
  plan: n,
  discount: r,
  buttonLabel: g,
  onSelectPlan: m,
  useShortFormPlanIntervals: p = !0,
  trialDaysAsFeature: b = !1,
  expanded: l = !1,
  isActivePlan: A = !1,
  isRecommendedPlan: v = !1,
  isCustomPlan: S = !1,
  showRecommendedPlanBadge: w = !0,
  t: O,
  translatePlanName: j = !0,
  planNameTextVariant: L = "headingMd",
  planDescriptionTextVariant: I = "bodyLg",
  priceTextVariant: h = "heading3xl",
  toggleYearlySubtitle: C = !1,
  showFeatureDescriptionAsTooltip: F = !0
}) => {
  const [y, B] = e.useState(!1), U = O || ((R) => R), D = async ({ plan: R, discount: k }) => {
    m ? (B(!0), await m({ plan: R, discount: k }) !== !0 && B(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ne, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    ne,
    {
      paddingBlock: l || v ? void 0 : "800",
      minHeight: "100%"
    },
    /* @__PURE__ */ e.createElement(
      ne,
      {
        background: v || S ? "bg-surface" : "bg-surface-secondary",
        borderStyle: "solid",
        borderColor: "border",
        borderWidth: "025",
        paddingBlock: l || v ? "1600" : "800",
        paddingInline: "400",
        borderRadius: "200",
        minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
      },
      /* @__PURE__ */ e.createElement($, { gap: "800" }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
        on,
        {
          plan: n,
          t: U,
          translatePlanName: j,
          planNameTextVariant: L,
          planDescriptionTextVariant: I
        }
      ), /* @__PURE__ */ e.createElement(
        cn,
        {
          plan: n,
          discount: r,
          useShortFormPlanIntervals: p,
          t: U,
          priceTextVariant: h,
          toggleYearlySubtitle: C
        }
      )), /* @__PURE__ */ e.createElement(
        ie,
        {
          size: "large",
          variant: v ? "primary" : "secondary",
          onClick: async () => {
            await D({ plan: n, discount: r });
          },
          disabled: A,
          loading: y
        },
        U(g || Y.SelectPlan)
      ), /* @__PURE__ */ e.createElement(
        sn,
        {
          plan: n,
          t: U,
          trialDaysAsFeature: b,
          showFeatureDescriptionAsTooltip: F
        }
      ), v && w && /* @__PURE__ */ e.createElement(z, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(qe, { tone: "success" }, U(Y.MostPopular))))
    )
  ));
}, be = {
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
}, Fe = ({
  plans: n,
  customer: r,
  onSelectPlan: g,
  planInterval: m,
  cardType: p = be.Horizontal,
  trialDaysAsFeature: b = !0,
  useShortFormPlanIntervals: l = !0,
  keyForRecommended: A = "recommended",
  keyForCustomButtonLabel: v = "buttonLabel",
  showRecommendedPlanBadge: S = !0,
  applyDiscount: w = !0,
  t: O,
  translatePlanName: j = !0,
  toggleYearlySubtitle: L = !1,
  showFeatureDescriptionAsTooltip: I = !0
}) => {
  var D;
  const h = (D = r == null ? void 0 : r.subscription) != null && D.active ? r.subscription : void 0, C = h == null ? void 0 : h.plan, F = m ? n.filter((R) => R.interval === m) : n, y = p === be.Vertical ? 1 : ln(F.length), B = an(y), U = O || ((R) => R);
  return /* @__PURE__ */ e.createElement(Ce, { columns: y }, F.map((R) => {
    const k = w ? pt({ plan: R }) : void 0, _ = (C == null ? void 0 : C.id) === R.id && !(h != null && h.cancelOn);
    return /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: B, key: R.id }, p === be.Highlighted && /* @__PURE__ */ e.createElement(
      un,
      {
        key: `HighlightedPlanCard-${R.id}`,
        plan: R,
        discount: k,
        onSelectPlan: g,
        isActivePlan: _,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: l,
        isCustomPlan: R.availability !== "public",
        isRecommendedPlan: Ge({ plan: R, customFieldKey: A }),
        buttonLabel: Je({ plan: R, customFieldKey: v }),
        showRecommendedPlanBadge: S,
        showFeatureDescriptionAsTooltip: I,
        toggleYearlySubtitle: L,
        t: U,
        translatePlanName: j
      }
    ), p === be.Horizontal && /* @__PURE__ */ e.createElement(
      gn,
      {
        key: `HorizontalPlanCard-${R.id}`,
        plan: R,
        discount: k,
        onSelectPlan: g,
        isActivePlan: _,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: l,
        isRecommendedPlan: Ge({ plan: R, customFieldKey: A }),
        buttonLabel: Je({ plan: R, customFieldKey: v }),
        showRecommendedPlanBadge: S,
        showFeatureDescriptionAsTooltip: I,
        toggleYearlySubtitle: L,
        t: U,
        translatePlanName: j
      }
    ));
  }));
}, Sn = ({
  customer: n,
  plans: r,
  onSubscribe: g,
  backUrl: m = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: p = !0,
  // boolean
  customFieldCta: b,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: l = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: A = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: S,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: O = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: j = !1,
  // boolean: toggle monthly pricing
  showFeatureDescriptionAsTooltip: L = !0
  // boolean: show feature description as tooltip
}) => {
  const I = n == null ? void 0 : n.subscription, h = new URLSearchParams(window.location.search), C = r.some((_) => _.interval === G.Annual) && r.some((_) => _.interval === G.Every30Days), F = r.find((_) => _.id === (I == null ? void 0 : I.plan.id)), [y, B] = ve(
    F ? F.interval : C ? G.Annual : G.Every30Days
  ), U = r.filter((_) => _.availability === "public"), D = O ? r.filter((_) => _.availability !== "public") : [], [R, k] = ve(
    h.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: Y.Plans,
      backAction: m ? { content: Y.Back, url: m } : void 0,
      secondaryActions: A && C ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: y === G.Every30Days,
          onClick: () => B(G.Every30Days)
        },
        Y.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: y === G.Annual,
          onClick: () => B(G.Annual)
        },
        Y.Yearly
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, R && /* @__PURE__ */ e.createElement(
      Ie,
      {
        tone: "success",
        title: Y.SubscribeSuccessTitle,
        onDismiss: () => {
          k(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      Y.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: U,
        onSelectPlan: g,
        planInterval: y,
        cardType: be.Horizontal,
        keyForRecommended: l,
        keyForCustomButtonLabel: b,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: S,
        showRecommendedPlanBadge: p,
        toggleYearlySubtitle: j,
        showFeatureDescriptionAsTooltip: L
      }
    ), (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, Y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: D,
        onSelectPlan: g,
        planInterval: y,
        cardType: be.Horizontal,
        keyForRecommended: l,
        keyForCustomButtonLabel: b,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: S,
        showRecommendedPlanBadge: p,
        showFeatureDescriptionAsTooltip: L
      }
    )))))
  );
}, dn = ({
  plan: n,
  t: r,
  translatePlanName: g,
  isRecommendedPlan: m = !1,
  planNameTextVariant: p,
  planDescriptionTextVariant: b,
  showRecommendedPlanBadge: l
}) => /* @__PURE__ */ e.createElement($, { gap: "100" }, /* @__PURE__ */ e.createElement(z, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(f, { variant: p }, g ? r(n.name) : n.name), m && l && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, r(Y.MostPopular))), n.description && /* @__PURE__ */ e.createElement(f, { variant: b, tone: "subdued" }, r(n.description))), mn = ({
  plan: n,
  discount: r,
  t: g,
  useShortFormPlanIntervals: m = !0,
  priceTextVariant: p,
  toggleYearlySubtitle: b = !1
}) => /* @__PURE__ */ e.createElement($, null, r ? /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { variant: p }, pe(
  r.presentmentDiscountedAmount,
  n.presentmentCurrencyCode
)), /* @__PURE__ */ e.createElement(
  f,
  {
    variant: p,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  n.presentmentAmount
), /* @__PURE__ */ e.createElement(f, { variant: "bodyLg", tone: "subdued" }, Y.Per, " ", _e({
  interval: n.interval,
  useShortFormPlanIntervals: m
}))) : /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: p }, pe(n.presentmentAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: "bodyLg", tone: "subdued" }, Y.Per, " ", _e({
  interval: n.interval,
  useShortFormPlanIntervals: m
}))), n.usageCharges && n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, n.usageCharges.filter((l) => l.terms && l.terms.length > 0).map((l, A) => /* @__PURE__ */ e.createElement(
  z,
  {
    key: `plan-usageCharge-${A}`,
    align: "start",
    gap: "100"
  },
  /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: We, tone: "subdued" })),
  /* @__PURE__ */ e.createElement(f, { variant: "bodyLg" }, g(l.terms))
))), b && /* @__PURE__ */ e.createElement(f, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), fn = ({
  plan: n,
  t: r,
  trialDaysAsFeature: g = !1,
  showFeatureDescriptionAsTooltip: m = !0
}) => /* @__PURE__ */ e.createElement($, { gap: "100" }, g && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "subdued" })), /* @__PURE__ */ e.createElement(f, null, r(Y.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((p, b) => {
  const l = n.features[p];
  if ((l.type !== "boolean" || l.value === !0) && l.visible)
    return /* @__PURE__ */ e.createElement(
      z,
      {
        key: `plan-feature-${b}`,
        align: "start",
        gap: "100",
        wrap: !1
      },
      /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "subdued" })),
      l.type === "boolean" ? /* @__PURE__ */ e.createElement(f, null, r(l.name)) : /* @__PURE__ */ e.createElement(f, null, l.value, " ", r(l.name)),
      l.description && m && /* @__PURE__ */ e.createElement(Xe, { content: r(l.description) }, /* @__PURE__ */ e.createElement(ce, { source: Be, tone: "subdued" }))
    );
})), gn = ({
  plan: n,
  discount: r,
  buttonLabel: g,
  onSelectPlan: m,
  useShortFormPlanIntervals: p = !0,
  trialDaysAsFeature: b = !1,
  isRecommendedPlan: l = !1,
  isActivePlan: A = !1,
  t: v,
  translatePlanName: S = !0,
  showRecommendedPlanBadge: w = !0,
  planNameTextVariant: O = "bodyLg",
  planDescriptionTextVariant: j = "bodyMd",
  priceTextVariant: L = "headingXl",
  toggleYearlySubtitle: I = !1,
  showFeatureDescriptionAsTooltip: h = !0
}) => {
  const [C, F] = e.useState(!1), y = v || ((U) => U), B = async ({ plan: U, discount: D }) => {
    m ? (F(!0), await m({ plan: U, discount: D }) !== !0 && F(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
    dn,
    {
      plan: n,
      isRecommendedPlan: l,
      showRecommendedPlanBadge: w,
      t: y,
      translatePlanName: S,
      planNameTextVariant: O,
      planDescriptionTextVariant: j
    }
  ), /* @__PURE__ */ e.createElement(
    mn,
    {
      plan: n,
      discount: r,
      useShortFormPlanIntervals: p,
      t: y,
      priceTextVariant: L,
      toggleYearlySubtitle: I
    }
  ), /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: l ? "primary" : "secondary",
      onClick: async () => {
        await B({ plan: n, discount: r });
      },
      disabled: A,
      loading: C
    },
    y(
      A ? Y.CurrentPlan : g || Y.SelectPlan
    )
  ), /* @__PURE__ */ e.createElement(
    fn,
    {
      plan: n,
      trialDaysAsFeature: b,
      showFeatureDescriptionAsTooltip: h,
      t: y
    }
  )));
}, wn = ({
  customer: n,
  plans: r,
  onSubscribe: g,
  backUrl: m = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: p = !0,
  // boolean
  customFieldCta: b = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: l = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: A = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: S = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: O = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: j = !1,
  // boolean: show monthly pricing for annual plans
  showFeatureDescriptionAsTooltip: L = !0
  // boolean: show feature description as tooltip
}) => {
  const I = n == null ? void 0 : n.subscription, h = new URLSearchParams(window.location.search), C = r.some((_) => _.interval === G.Annual) && r.some((_) => _.interval === G.Every30Days), F = r.find((_) => _.id === (I == null ? void 0 : I.plan.id)), [y, B] = ve(
    F ? F.interval : C ? G.Annual : G.Every30Days
  ), U = r.filter((_) => _.availability === "public"), D = O ? r.filter((_) => _.availability !== "public") : [], [R, k] = ve(
    h.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: Y.Plans,
      backAction: m && m !== "" ? { content: Y.Back, url: m } : void 0,
      secondaryActions: A && C ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: y === G.Every30Days,
          onClick: () => B(G.Every30Days)
        },
        Y.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: y === G.Annual,
          onClick: () => B(G.Annual)
        },
        Y.Yearly
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(ne, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, R && /* @__PURE__ */ e.createElement(
      Ie,
      {
        tone: "success",
        title: Y.SubscribeSuccessTitle,
        onDismiss: () => {
          k(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      Y.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: U,
        onSelectPlan: g,
        planInterval: y,
        cardType: be.Highlighted,
        keyForRecommended: l,
        keyForCustomButtonLabel: b,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: S,
        showRecommendedPlanBadge: p,
        toggleYearlySubtitle: j,
        showFeatureDescriptionAsTooltip: L
      }
    ), (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (D == null ? void 0 : D.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, Y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: D,
        onSelectPlan: g,
        planInterval: y,
        cardType: be.Highlighted,
        keyForRecommended: l,
        keyForCustomButtonLabel: b,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: S,
        showRecommendedPlanBadge: p,
        showFeatureDescriptionAsTooltip: L
      }
    ))))))
  );
}, vn = ({
  plan: n,
  discount: r,
  buttonLabel: g,
  onSelectPlan: m,
  useShortFormPlanIntervals: p = !0,
  trialDaysAsFeature: b = !1,
  isRecommendedPlan: l = !1,
  isActivePlan: A = !1,
  t: v = _t,
  translatePlanName: S = !0,
  showRecommendedPlanBadge: w = !0,
  planNameTextVariant: O = "bodyLg",
  planDescriptionTextVariant: j = "bodyMd",
  priceTextVariant: L = "headingXl",
  toggleYearlySubtitle: I = !1,
  showFeatureDescriptionAsTooltip: h = !0
}) => {
  const [C, F] = e.useState(!1), y = async ({ plan: k, discount: _ }) => {
    m ? (F(!0), await m({ plan: k, discount: _ }) !== !0 && F(!1)) : console.log("No onSelectPlan callback provided");
  }, B = ({ plan: k }) => /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, { variant: O }, S ? v(k.name) : k.name), k.description && /* @__PURE__ */ e.createElement(f, { variant: j, tone: "subdued" }, v(k.description))), U = ({ plan: k }) => /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(f, { fontWeight: "medium" }, v(Y.Features)), /* @__PURE__ */ e.createElement($, { gap: "100" }, b && k.trialDays && k.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "positive" })), /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, v(
    Y.FreeTrialLength.replace(
      "{{ trialDays }}",
      k.trialDays
    )
  ))) : null, k.featuresOrder.map((_, K) => {
    const c = k.features[_];
    if ((c.type !== "boolean" || c.value === !0) && c.visible)
      return /* @__PURE__ */ e.createElement(
        z,
        {
          key: `plan-feature-${K}`,
          align: "start",
          gap: "100",
          wrap: !1
        },
        /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: Se, tone: "positive" })),
        c.type === "boolean" ? /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, c.name) : /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, c.value, " ", c.name),
        c.description && h && /* @__PURE__ */ e.createElement(Xe, { content: v(c.description) }, /* @__PURE__ */ e.createElement(ce, { source: Be, tone: "subdued" }))
      );
  }))), D = ({ plan: k, discount: _, toggleYearlySubtitle: K }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, _ ? /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { variant: L }, pe(
    _.presentmentDiscountedAmount,
    k.presentmentCurrencyCode
  )), /* @__PURE__ */ e.createElement(
    f,
    {
      variant: L,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    k.presentmentAmount
  ), /* @__PURE__ */ e.createElement(f, { variant: "bodyLg", tone: "subdued" }, Y.Per, " ", _e({
    interval: k.interval,
    useShortFormPlanIntervals: p
  }))) : /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: L }, pe(k.presentmentAmount, k.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(f, { alignment: "center", variant: "bodyLg", tone: "subdued" }, Y.Per, " ", _e({
    interval: k.interval,
    useShortFormPlanIntervals: p
  }))), k.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, k.usageCharges.filter((c) => c.terms && c.terms.length > 0).map((c, x) => /* @__PURE__ */ e.createElement(
    z,
    {
      key: `plan-usageCharge-${x}`,
      align: "start",
      gap: "100"
    },
    /* @__PURE__ */ e.createElement(ne, null, /* @__PURE__ */ e.createElement(ce, { source: We, tone: "positive" })),
    /* @__PURE__ */ e.createElement(f, { variant: "bodyLg" }, c.terms)
  ))), K && /* @__PURE__ */ e.createElement(f, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), R = ({ plan: k, discount: _ }) => /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: l ? "primary" : "secondary",
      onClick: async () => {
        await y({ plan: k, discount: _ });
      },
      disabled: A,
      loading: C
    },
    v(
      A ? Y.CurrentPlan : g || Y.SelectPlan
    )
  ), l && w && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, v(Y.MostPopular)));
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(Ce, null, /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement($, { gap: "300" }, B({ plan: n }), D({ plan: n, discount: r, toggleYearlySubtitle: I }), /* @__PURE__ */ e.createElement(ne, null, R({ plan: n, discount: r })))), /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, U({ plan: n }))));
}, Pn = ({
  plans: n,
  customer: r,
  onSubscribe: g,
  backUrl: m = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: p = "recommended",
  keyForCustomButtonLabel: b = "buttonLabel",
  showPlanIntervalToggle: l = !1,
  // boolean
  trialDaysAsFeature: A = !0,
  // boolean
  useShortFormPlanIntervals: v = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: S = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: O = !0,
  // boolean
  applyDiscount: j = !0,
  t: L,
  translatePlanName: I = !0,
  toggleYearlySubtitle: h = !1,
  showFeatureDescriptionAsTooltip: C = !0
}) => {
  var ae;
  const F = new URLSearchParams(window.location.search), y = n.some((i) => i.interval === G.Annual) && n.some((i) => i.interval === G.Every30Days), B = (ae = r == null ? void 0 : r.subscription) != null && ae.active ? r.subscription : void 0, U = B == null ? void 0 : B.plan, [D, R] = ve(
    U ? U.interval : y ? G.Annual : G.Every30Days
  ), k = n.filter(
    (i) => i.availability !== "customerTag" && i.availability !== "customer"
  ), _ = l && y ? k.filter((i) => i.interval === D) : k, K = w ? n.filter(
    (i) => i.availability === "customerTag" || i.availability === "customer"
  ) : [], [c, x] = ve(
    F.get("subscribed") === "true"
  ), re = L || ((i) => i);
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: Y.Plans,
      backAction: m !== "" ? { content: Y.Back, url: m } : void 0,
      secondaryActions: l && y ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === G.Every30Days,
          onClick: () => R(G.Every30Days)
        },
        Y.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === G.Annual,
          onClick: () => R(G.Annual)
        },
        Y.Year
      )) : void 0,
      fullWidth: S === "full",
      narrowWidth: S === "narrow"
    },
    /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, c && /* @__PURE__ */ e.createElement(
      Ie,
      {
        tone: "success",
        title: Y.SubscribeSuccessTitle,
        onDismiss: () => {
          x(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      Y.SubscribeSuccessBody
    ), _.map((i, s) => {
      const o = j ? pt({ plan: i }) : void 0, E = (U == null ? void 0 : U.id) === i.id && !(B != null && B.cancelOn);
      return /* @__PURE__ */ e.createElement(
        vn,
        {
          key: `plan-${s}`,
          plan: i,
          discount: o,
          onSelectPlan: g,
          isActivePlan: E,
          trialDaysAsFeature: A,
          useShortFormPlanIntervals: v,
          isCustomPlan: i.availability !== "public",
          isRecommendedPlan: Ge({ plan: i, customFieldKey: p }),
          buttonLabel: Je({ plan: i, customFieldKey: b }),
          showRecommendedPlanBadge: O,
          t: re,
          translatePlanName: I,
          toggleYearlySubtitle: h,
          showFeatureDescriptionAsTooltip: C
        }
      );
    }), (K == null ? void 0 : K.length) > 0 && /* @__PURE__ */ e.createElement(je, { borderColor: "border" }), (K == null ? void 0 : K.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(ne, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, Y.CustomPlans)), /* @__PURE__ */ e.createElement(Ce, null, K.map((i, s) => {
      var E;
      const o = ((E = i.discounts) == null ? void 0 : E.length) > 0 ? i.discounts.reduce(
        (d, P) => d.discountedAmount < P.discountedAmount ? d : P
      ) : null;
      return /* @__PURE__ */ e.createElement(Ce.Cell, { key: `custom-plan-${s}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, titleComponent({ plan: i, discount: o }), pricingComponent({ plan: i, discount: o, toggleYearlySubtitle: h }), ctaComponent({ plan: i, discount: o }), featuresComponent({ plan: i, discount: o }))));
    }))))))
  );
};
var St = { exports: {} };
(function(n, r) {
  (function(g, m) {
    n.exports = m();
  })(vt, function() {
    var g = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(m, p, b) {
      var l = p.prototype, A = l.format;
      b.en.formats = g, l.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var S = this.$locale().formats, w = function(O, j) {
          return O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(L, I, h) {
            var C = h && h.toUpperCase();
            return I || j[h] || g[h] || j[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(F, y, B) {
              return y || B.slice(1);
            });
          });
        }(v, S === void 0 ? {} : S);
        return A.call(this, w);
      };
    };
  });
})(St);
var hn = St.exports;
const En = /* @__PURE__ */ ht(hn);
Le.extend(En);
const Ke = ({
  orientation: n = "horizontal",
  onShowPlans: r,
  onCancelPlan: g,
  onPlanCancelled: m = () => {
  },
  cancelSubscription: p = async () => {
  },
  i18n: b,
  subscription: l,
  refetch: A = async () => {
  },
  t: v,
  translatePlanName: S = !0,
  hideSelectPlanButton: w = !1
}) => {
  var K;
  const [O, j] = ve(!1), [L, I] = ve(!1), h = v || ((c) => c), C = {
    ...Y,
    ...b || {}
  };
  if (!l)
    return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, h(C.Subscription)), /* @__PURE__ */ e.createElement(f, null, h(C.NotSubscribed)), /* @__PURE__ */ e.createElement(z, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, !w && /* @__PURE__ */ e.createElement(
      ie,
      {
        variant: "primary",
        onClick: r,
        accessibilityLabel: h(C.ChangePlan)
      },
      h(C.SelectPlan)
    )))));
  const { plan: F } = l, y = pe(l.presentmentTotal, F.presentmentCurrencyCode), B = h(F.interval === G.Annual ? C.Year : C.Month), U = n === "horizontal" ? Gt : $, D = (K = l == null ? void 0 : l.appliedDiscount) == null ? void 0 : K.discount, R = D ? D.percentage ? `${D.percentage}%` : pe(D.presentmentAmount, F.presentmentCurrencyCode) : null, k = D && l.appliedDiscount.discountEndsAt && Le().isAfter(Le(l.appliedDiscount.discountEndsAt)), _ = F.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(f, { variant: "headingMd" }, h(C.Subscription)), /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(U, { columns: _, gap: "300" }, /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, null, h(C.CurrentPlan)), /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, S ? h(F.name) : F.name), l.cancelOn && /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, h("Canceled, active until {{ date }}").replace("{{ date }}", Le(l.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, null, h(C.Price)), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, { tone: "subdued" }, h(C.AmountPerInterval).replace("{{ amount }}", y).replace("{{ interval }}", B)), D && !k && /* @__PURE__ */ e.createElement(f, { tone: "success" }, h(C.DiscountAmount).replace("{{ amount }}", R)), D && k && /* @__PURE__ */ e.createElement(f, { tone: "subdued", textDecorationLine: "line-through" }, h(C.DiscountAmountExpired).replace("{{ amount }}", R)))), F.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(f, null, h(C.UsageCharges || "Usage charges")), F.usageCharges.filter((c) => c.terms && c.terms.length > 0).map((c, x) => /* @__PURE__ */ e.createElement(f, { key: `usage-charge-${x}`, tone: "subdued" }, h(c.terms))))), /* @__PURE__ */ e.createElement(z, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, /* @__PURE__ */ e.createElement(
    ie,
    {
      onClick: () => {
        g ? g() : j(!0);
      },
      accessibilityLabel: h(C.CancelPlan),
      tone: "critical",
      disabled: !!l.cancelOn
    },
    h(C.CancelPlan)
  ), !w && /* @__PURE__ */ e.createElement(
    ie,
    {
      variant: "primary",
      onClick: r,
      accessibilityLabel: h(C.ChangePlan)
    },
    h(C.ChangePlan)
  ))))), O && /* @__PURE__ */ e.createElement(
    Ye,
    {
      open: !0,
      onClose: () => j(!1),
      title: h(C.CancelPlan),
      primaryAction: {
        content: h(C.CancelPlan),
        destructive: !0,
        loading: L,
        disabled: L,
        onAction: async () => {
          I(!0), await p(), await A(), I(!1), j(!1), m();
        }
      },
      secondaryActions: [
        {
          content: h(C.Back),
          disabled: L,
          onAction: () => j(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(Ye.Section, null, h(C.CancelConfirmation))
  ));
}, Dn = ({
  backUrl: n = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: r = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: g, i18n: m, subscription: p, refetch: b } = en(), l = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: m.Subscription,
      backAction: n ? { content: m.Back, url: n } : void 0,
      fullWidth: r === "full",
      narrowWidth: r === "narrow"
    },
    /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Ke,
      {
        onShowPlans: l,
        cancelSubscription: g,
        i18n: m,
        subscription: p,
        refetch: b
      }
    ), /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement(
      Ke,
      {
        onShowPlans: l,
        cancelSubscription: g,
        i18n: m,
        subscription: p,
        refetch: b
      }
    )), /* @__PURE__ */ e.createElement(Ee.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Ke,
      {
        onShowPlans: l,
        cancelSubscription: g,
        i18n: m,
        subscription: p,
        refetch: b,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  bn as BundleCard,
  Cn as ChecklistCard,
  un as HighlightedPlanCard,
  wn as HighlightedPlanCards,
  gn as HorizontalPlanCard,
  Sn as HorizontalPlanCards,
  Fe as PlanCardStack,
  be as PlanCardType,
  Ke as SubscriptionSummaryCard,
  Dn as SubscriptionSummaryPage,
  vn as VerticalPlanCard,
  Pn as VerticalPlanCards
};
