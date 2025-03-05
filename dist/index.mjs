import e, { createContext as Rt, useContext as It, useState as Ee } from "react";
import { Banner as Fe, BlockStack as Y, Text as y, InlineStack as q, Thumbnail as Bt, Button as oe, Divider as Ne, Box as re, Badge as qe, Icon as ye, Grid as Se, Page as Re, ButtonGroup as Ae, Layout as ge, Card as _e, Modal as st, InlineGrid as Ht } from "@shopify/polaris";
var mt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ft(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var pt = { exports: {} };
(function(n, a) {
  (function(u, s) {
    n.exports = s();
  })(mt, function() {
    var u = 1e3, s = 6e4, v = 36e5, g = "millisecond", d = "second", L = "minute", m = "hour", k = "day", A = "week", _ = "month", I = "quarter", x = "year", B = "date", h = "Invalid Date", E = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, w = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, P = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(p) {
      var o = ["th", "st", "nd", "rd"], l = p % 100;
      return "[" + p + (o[(l - 20) % 10] || o[l] || o[0]) + "]";
    } }, F = function(p, o, l) {
      var f = String(p);
      return !f || f.length >= o ? p : "" + Array(o + 1 - f.length).join(l) + p;
    }, N = { s: F, z: function(p) {
      var o = -p.utcOffset(), l = Math.abs(o), f = Math.floor(l / 60), i = l % 60;
      return (o <= 0 ? "+" : "-") + F(f, 2, "0") + ":" + F(i, 2, "0");
    }, m: function p(o, l) {
      if (o.date() < l.date())
        return -p(l, o);
      var f = 12 * (l.year() - o.year()) + (l.month() - o.month()), i = o.clone().add(f, _), $ = l - i < 0, D = o.clone().add(f + ($ ? -1 : 1), _);
      return +(-(f + (l - i) / ($ ? i - D : D - i)) || 0);
    }, a: function(p) {
      return p < 0 ? Math.ceil(p) || 0 : Math.floor(p);
    }, p: function(p) {
      return { M: _, y: x, w: A, d: k, D: B, h: m, m: L, s: d, ms: g, Q: I }[p] || String(p || "").toLowerCase().replace(/s$/, "");
    }, u: function(p) {
      return p === void 0;
    } }, S = "en", b = {};
    b[S] = P;
    var M = "$isDayjsObject", Q = function(p) {
      return p instanceof ue || !(!p || !p[M]);
    }, J = function p(o, l, f) {
      var i;
      if (!o)
        return S;
      if (typeof o == "string") {
        var $ = o.toLowerCase();
        b[$] && (i = $), l && (b[$] = l, i = $);
        var D = o.split("-");
        if (!i && D.length > 1)
          return p(D[0]);
      } else {
        var W = o.name;
        b[W] = o, i = W;
      }
      return !f && i && (S = i), i || !f && S;
    }, z = function(p, o) {
      if (Q(p))
        return p.clone();
      var l = typeof o == "object" ? o : {};
      return l.date = p, l.args = arguments, new ue(l);
    }, R = N;
    R.l = J, R.i = Q, R.w = function(p, o) {
      return z(p, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
    };
    var ue = function() {
      function p(l) {
        this.$L = J(l.locale, null, !0), this.parse(l), this.$x = this.$x || l.x || {}, this[M] = !0;
      }
      var o = p.prototype;
      return o.parse = function(l) {
        this.$d = function(f) {
          var i = f.date, $ = f.utc;
          if (i === null)
            return /* @__PURE__ */ new Date(NaN);
          if (R.u(i))
            return /* @__PURE__ */ new Date();
          if (i instanceof Date)
            return new Date(i);
          if (typeof i == "string" && !/Z$/i.test(i)) {
            var D = i.match(E);
            if (D) {
              var W = D[2] - 1 || 0, Z = (D[7] || "0").substring(0, 3);
              return $ ? new Date(Date.UTC(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, Z)) : new Date(D[1], W, D[3] || 1, D[4] || 0, D[5] || 0, D[6] || 0, Z);
            }
          }
          return new Date(i);
        }(l), this.init();
      }, o.init = function() {
        var l = this.$d;
        this.$y = l.getFullYear(), this.$M = l.getMonth(), this.$D = l.getDate(), this.$W = l.getDay(), this.$H = l.getHours(), this.$m = l.getMinutes(), this.$s = l.getSeconds(), this.$ms = l.getMilliseconds();
      }, o.$utils = function() {
        return R;
      }, o.isValid = function() {
        return this.$d.toString() !== h;
      }, o.isSame = function(l, f) {
        var i = z(l);
        return this.startOf(f) <= i && i <= this.endOf(f);
      }, o.isAfter = function(l, f) {
        return z(l) < this.startOf(f);
      }, o.isBefore = function(l, f) {
        return this.endOf(f) < z(l);
      }, o.$g = function(l, f, i) {
        return R.u(l) ? this[f] : this.set(i, l);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(l, f) {
        var i = this, $ = !!R.u(f) || f, D = R.p(l), W = function(se, te) {
          var fe = R.w(i.$u ? Date.UTC(i.$y, te, se) : new Date(i.$y, te, se), i);
          return $ ? fe : fe.endOf(k);
        }, Z = function(se, te) {
          return R.w(i.toDate()[se].apply(i.toDate("s"), ($ ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), i);
        }, G = this.$W, ne = this.$M, le = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (D) {
          case x:
            return $ ? W(1, 0) : W(31, 11);
          case _:
            return $ ? W(1, ne) : W(0, ne + 1);
          case A:
            var ie = this.$locale().weekStart || 0, me = (G < ie ? G + 7 : G) - ie;
            return W($ ? le - me : le + (6 - me), ne);
          case k:
          case B:
            return Z(de + "Hours", 0);
          case m:
            return Z(de + "Minutes", 1);
          case L:
            return Z(de + "Seconds", 2);
          case d:
            return Z(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o.endOf = function(l) {
        return this.startOf(l, !1);
      }, o.$set = function(l, f) {
        var i, $ = R.p(l), D = "set" + (this.$u ? "UTC" : ""), W = (i = {}, i[k] = D + "Date", i[B] = D + "Date", i[_] = D + "Month", i[x] = D + "FullYear", i[m] = D + "Hours", i[L] = D + "Minutes", i[d] = D + "Seconds", i[g] = D + "Milliseconds", i)[$], Z = $ === k ? this.$D + (f - this.$W) : f;
        if ($ === _ || $ === x) {
          var G = this.clone().set(B, 1);
          G.$d[W](Z), G.init(), this.$d = G.set(B, Math.min(this.$D, G.daysInMonth())).$d;
        } else
          W && this.$d[W](Z);
        return this.init(), this;
      }, o.set = function(l, f) {
        return this.clone().$set(l, f);
      }, o.get = function(l) {
        return this[R.p(l)]();
      }, o.add = function(l, f) {
        var i, $ = this;
        l = Number(l);
        var D = R.p(f), W = function(ne) {
          var le = z($);
          return R.w(le.date(le.date() + Math.round(ne * l)), $);
        };
        if (D === _)
          return this.set(_, this.$M + l);
        if (D === x)
          return this.set(x, this.$y + l);
        if (D === k)
          return W(1);
        if (D === A)
          return W(7);
        var Z = (i = {}, i[L] = s, i[m] = v, i[d] = u, i)[D] || 1, G = this.$d.getTime() + l * Z;
        return R.w(G, this);
      }, o.subtract = function(l, f) {
        return this.add(-1 * l, f);
      }, o.format = function(l) {
        var f = this, i = this.$locale();
        if (!this.isValid())
          return i.invalidDate || h;
        var $ = l || "YYYY-MM-DDTHH:mm:ssZ", D = R.z(this), W = this.$H, Z = this.$m, G = this.$M, ne = i.weekdays, le = i.months, de = i.meridiem, ie = function(te, fe, ve, we) {
          return te && (te[fe] || te(f, $)) || ve[fe].slice(0, we);
        }, me = function(te) {
          return R.s(W % 12 || 12, te, "0");
        }, se = de || function(te, fe, ve) {
          var we = te < 12 ? "AM" : "PM";
          return ve ? we.toLowerCase() : we;
        };
        return $.replace(w, function(te, fe) {
          return fe || function(ve) {
            switch (ve) {
              case "YY":
                return String(f.$y).slice(-2);
              case "YYYY":
                return R.s(f.$y, 4, "0");
              case "M":
                return G + 1;
              case "MM":
                return R.s(G + 1, 2, "0");
              case "MMM":
                return ie(i.monthsShort, G, le, 3);
              case "MMMM":
                return ie(le, G);
              case "D":
                return f.$D;
              case "DD":
                return R.s(f.$D, 2, "0");
              case "d":
                return String(f.$W);
              case "dd":
                return ie(i.weekdaysMin, f.$W, ne, 2);
              case "ddd":
                return ie(i.weekdaysShort, f.$W, ne, 3);
              case "dddd":
                return ne[f.$W];
              case "H":
                return String(W);
              case "HH":
                return R.s(W, 2, "0");
              case "h":
                return me(1);
              case "hh":
                return me(2);
              case "a":
                return se(W, Z, !0);
              case "A":
                return se(W, Z, !1);
              case "m":
                return String(Z);
              case "mm":
                return R.s(Z, 2, "0");
              case "s":
                return String(f.$s);
              case "ss":
                return R.s(f.$s, 2, "0");
              case "SSS":
                return R.s(f.$ms, 3, "0");
              case "Z":
                return D;
            }
            return null;
          }(te) || D.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(l, f, i) {
        var $, D = this, W = R.p(f), Z = z(l), G = (Z.utcOffset() - this.utcOffset()) * s, ne = this - Z, le = function() {
          return R.m(D, Z);
        };
        switch (W) {
          case x:
            $ = le() / 12;
            break;
          case _:
            $ = le();
            break;
          case I:
            $ = le() / 3;
            break;
          case A:
            $ = (ne - G) / 6048e5;
            break;
          case k:
            $ = (ne - G) / 864e5;
            break;
          case m:
            $ = ne / v;
            break;
          case L:
            $ = ne / s;
            break;
          case d:
            $ = ne / u;
            break;
          default:
            $ = ne;
        }
        return i ? $ : R.a($);
      }, o.daysInMonth = function() {
        return this.endOf(_).$D;
      }, o.$locale = function() {
        return b[this.$L];
      }, o.locale = function(l, f) {
        if (!l)
          return this.$L;
        var i = this.clone(), $ = J(l, f, !0);
        return $ && (i.$L = $), i;
      }, o.clone = function() {
        return R.w(this.$d, this);
      }, o.toDate = function() {
        return new Date(this.valueOf());
      }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o.toISOString = function() {
        return this.$d.toISOString();
      }, o.toString = function() {
        return this.$d.toUTCString();
      }, p;
    }(), T = ue.prototype;
    return z.prototype = T, [["$ms", g], ["$s", d], ["$m", L], ["$H", m], ["$W", k], ["$M", _], ["$y", x], ["$D", B]].forEach(function(p) {
      T[p[1]] = function(o) {
        return this.$g(o, p[0], p[1]);
      };
    }), z.extend = function(p, o) {
      return p.$i || (p(o, ue, z), p.$i = !0), z;
    }, z.locale = J, z.isDayjs = Q, z.unix = function(p) {
      return z(1e3 * p);
    }, z.en = b[S], z.Ls = b, z.p = {}, z;
  });
})(pt);
var Ut = pt.exports;
const Ye = /* @__PURE__ */ ft(Ut);
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
function zt() {
  if (ut)
    return Me;
  ut = 1;
  var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, g = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(L, m, k) {
    var A, _ = {}, I = null, x = null;
    k !== void 0 && (I = "" + k), m.key !== void 0 && (I = "" + m.key), m.ref !== void 0 && (x = m.ref);
    for (A in m)
      s.call(m, A) && !g.hasOwnProperty(A) && (_[A] = m[A]);
    if (L && L.defaultProps)
      for (A in m = L.defaultProps, m)
        _[A] === void 0 && (_[A] = m[A]);
    return { $$typeof: a, type: L, key: I, ref: x, props: _, _owner: v.current };
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
function Wt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = e, a = Symbol.for("react.element"), u = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), g = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), L = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), k = Symbol.for("react.suspense"), A = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), B = Symbol.iterator, h = "@@iterator";
    function E(t) {
      if (t === null || typeof t != "object")
        return null;
      var r = B && t[B] || t[h];
      return typeof r == "function" ? r : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(t) {
      {
        for (var r = arguments.length, c = new Array(r > 1 ? r - 1 : 0), C = 1; C < r; C++)
          c[C - 1] = arguments[C];
        F("error", t, c);
      }
    }
    function F(t, r, c) {
      {
        var C = w.ReactDebugCurrentFrame, U = C.getStackAddendum();
        U !== "" && (r += "%s", c = c.concat([U]));
        var V = c.map(function(H) {
          return String(H);
        });
        V.unshift("Warning: " + r), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var N = !1, S = !1, b = !1, M = !1, Q = !1, J;
    J = Symbol.for("react.module.reference");
    function z(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === g || Q || t === v || t === k || t === A || M || t === x || N || S || b || typeof t == "object" && t !== null && (t.$$typeof === I || t.$$typeof === _ || t.$$typeof === d || t.$$typeof === L || t.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === J || t.getModuleId !== void 0));
    }
    function R(t, r, c) {
      var C = t.displayName;
      if (C)
        return C;
      var U = r.displayName || r.name || "";
      return U !== "" ? c + "(" + U + ")" : c;
    }
    function ue(t) {
      return t.displayName || "Context";
    }
    function T(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case u:
          return "Portal";
        case g:
          return "Profiler";
        case v:
          return "StrictMode";
        case k:
          return "Suspense";
        case A:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case L:
            var r = t;
            return ue(r) + ".Consumer";
          case d:
            var c = t;
            return ue(c._context) + ".Provider";
          case m:
            return R(t, t.render, "ForwardRef");
          case _:
            var C = t.displayName || null;
            return C !== null ? C : T(t.type) || "Memo";
          case I: {
            var U = t, V = U._payload, H = U._init;
            try {
              return T(H(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, o = 0, l, f, i, $, D, W, Z;
    function G() {
    }
    G.__reactDisabledLog = !0;
    function ne() {
      {
        if (o === 0) {
          l = console.log, f = console.info, i = console.warn, $ = console.error, D = console.group, W = console.groupCollapsed, Z = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: G,
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
            log: p({}, t, {
              value: l
            }),
            info: p({}, t, {
              value: f
            }),
            warn: p({}, t, {
              value: i
            }),
            error: p({}, t, {
              value: $
            }),
            group: p({}, t, {
              value: D
            }),
            groupCollapsed: p({}, t, {
              value: W
            }),
            groupEnd: p({}, t, {
              value: Z
            })
          });
        }
        o < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = w.ReactCurrentDispatcher, ie;
    function me(t, r, c) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (U) {
            var C = U.stack.trim().match(/\n( *(at )?)/);
            ie = C && C[1] || "";
          }
        return `
` + ie + t;
      }
    }
    var se = !1, te;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new fe();
    }
    function ve(t, r) {
      if (!t || se)
        return "";
      {
        var c = te.get(t);
        if (c !== void 0)
          return c;
      }
      var C;
      se = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = de.current, de.current = null, ne();
      try {
        if (r) {
          var H = function() {
            throw Error();
          };
          if (Object.defineProperty(H.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(H, []);
            } catch (pe) {
              C = pe;
            }
            Reflect.construct(t, [], H);
          } else {
            try {
              H.call();
            } catch (pe) {
              C = pe;
            }
            t.call(H.prototype);
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
          for (var j = pe.stack.split(`
`), ae = C.stack.split(`
`), X = j.length - 1, ee = ae.length - 1; X >= 1 && ee >= 0 && j[X] !== ae[ee]; )
            ee--;
          for (; X >= 1 && ee >= 0; X--, ee--)
            if (j[X] !== ae[ee]) {
              if (X !== 1 || ee !== 1)
                do
                  if (X--, ee--, ee < 0 || j[X] !== ae[ee]) {
                    var ce = `
` + j[X].replace(" at new ", " at ");
                    return t.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, ce), ce;
                  }
                while (X >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        se = !1, de.current = V, le(), Error.prepareStackTrace = U;
      }
      var De = t ? t.displayName || t.name : "", it = De ? me(De) : "";
      return typeof t == "function" && te.set(t, it), it;
    }
    function we(t, r, c) {
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
        case A:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case m:
            return we(t.render);
          case _:
            return Oe(t.type, r, c);
          case I: {
            var C = t, U = C._payload, V = C._init;
            try {
              return Oe(V(U), r, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Je = {}, Ge = w.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var r = t._owner, c = Oe(t.type, t._source, r ? r.type : null);
        Ge.setExtraStackFrame(c);
      } else
        Ge.setExtraStackFrame(null);
    }
    function vt(t, r, c, C, U) {
      {
        var V = Function.call.bind(Le);
        for (var H in t)
          if (V(t, H)) {
            var j = void 0;
            try {
              if (typeof t[H] != "function") {
                var ae = Error((C || "React class") + ": " + c + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ae.name = "Invariant Violation", ae;
              }
              j = t[H](r, H, C, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              j = X;
            }
            j && !(j instanceof Error) && (xe(U), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", c, H, typeof j), xe(null)), j instanceof Error && !(j.message in Je) && (Je[j.message] = !0, xe(U), P("Failed %s type: %s", c, j.message), xe(null));
          }
      }
    }
    var bt = Array.isArray;
    function Be(t) {
      return bt(t);
    }
    function Et(t) {
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
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Et(t)), Xe(t);
    }
    var Pe = w.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, tt, He;
    He = {};
    function wt(t) {
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
        var c = T(Pe.current.type);
        He[c] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(Pe.current.type), t.ref), He[c] = !0);
      }
    }
    function kt(t, r) {
      {
        var c = function() {
          et || (et = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          tt || (tt = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Mt = function(t, r, c, C, U, V, H) {
      var j = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: a,
        // Built-in properties that belong on the element
        type: t,
        key: r,
        ref: c,
        props: H,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return j._store = {}, Object.defineProperty(j._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(j, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.defineProperty(j, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(j.props), Object.freeze(j)), j;
    };
    function At(t, r, c, C, U) {
      {
        var V, H = {}, j = null, ae = null;
        c !== void 0 && (Qe(c), j = "" + c), $t(r) && (Qe(r.key), j = "" + r.key), wt(r) && (ae = r.ref, Dt(r, U));
        for (V in r)
          Le.call(r, V) && !Ct.hasOwnProperty(V) && (H[V] = r[V]);
        if (t && t.defaultProps) {
          var X = t.defaultProps;
          for (V in X)
            H[V] === void 0 && (H[V] = X[V]);
        }
        if (j || ae) {
          var ee = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          j && kt(H, ee), ae && Pt(H, ee);
        }
        return Mt(t, j, ae, U, C, Pe.current, H);
      }
    }
    var Ue = w.ReactCurrentOwner, nt = w.ReactDebugCurrentFrame;
    function $e(t) {
      if (t) {
        var r = t._owner, c = Oe(t.type, t._source, r ? r.type : null);
        nt.setExtraStackFrame(c);
      } else
        nt.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function We(t) {
      return typeof t == "object" && t !== null && t.$$typeof === a;
    }
    function rt() {
      {
        if (Ue.current) {
          var t = T(Ue.current.type);
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
        t && t._owner && t._owner !== Ue.current && (C = " It was passed a child from " + T(t._owner.type) + "."), $e(t), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, C), $e(null);
      }
    }
    function ot(t, r) {
      {
        if (typeof t != "object")
          return;
        if (Be(t))
          for (var c = 0; c < t.length; c++) {
            var C = t[c];
            We(C) && lt(C, r);
          }
        else if (We(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var U = E(t);
          if (typeof U == "function" && U !== t.entries)
            for (var V = U.call(t), H; !(H = V.next()).done; )
              We(H.value) && lt(H.value, r);
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
        r.$$typeof === _))
          c = r.propTypes;
        else
          return;
        if (c) {
          var C = T(r);
          vt(c, t.props, "prop", C, t);
        } else if (r.PropTypes !== void 0 && !ze) {
          ze = !0;
          var U = T(r);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Tt(t) {
      {
        for (var r = Object.keys(t.props), c = 0; c < r.length; c++) {
          var C = r[c];
          if (C !== "children" && C !== "key") {
            $e(t), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), $e(null);
            break;
          }
        }
        t.ref !== null && ($e(t), P("Invalid attribute `ref` supplied to `React.Fragment`."), $e(null));
      }
    }
    function ct(t, r, c, C, U, V) {
      {
        var H = z(t);
        if (!H) {
          var j = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (j += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ae = Ot(U);
          ae ? j += ae : j += rt();
          var X;
          t === null ? X = "null" : Be(t) ? X = "array" : t !== void 0 && t.$$typeof === a ? (X = "<" + (T(t.type) || "Unknown") + " />", j = " Did you accidentally export a JSX literal instead of a component?") : X = typeof t, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, j);
        }
        var ee = At(t, r, c, U, V);
        if (ee == null)
          return ee;
        if (H) {
          var ce = r.children;
          if (ce !== void 0)
            if (C)
              if (Be(ce)) {
                for (var De = 0; De < ce.length; De++)
                  ot(ce[De], t);
                Object.freeze && Object.freeze(ce);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ot(ce, t);
        }
        return t === s ? Tt(ee) : xt(ee), ee;
      }
    }
    function Yt(t, r, c) {
      return ct(t, r, c, !0);
    }
    function jt(t, r, c) {
      return ct(t, r, c, !1);
    }
    var Ft = jt, Nt = Yt;
    Te.Fragment = s, Te.jsx = Ft, Te.jsxs = Nt;
  }()), Te;
}
process.env.NODE_ENV === "production" ? zt() : Wt();
const O = {
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
}, Vt = Rt(void 0), Kt = () => {
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
var K = /* @__PURE__ */ ((n) => (n.Annual = "ANNUAL", n.Every30Days = "EVERY_30_DAYS", n))(K || {});
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
  return ((u = n.customFields) == null ? void 0 : u[a]) || O.subscribe;
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
  cancelSubscription: v = async () => {
  },
  i18n: g,
  subscription: d,
  refetch: L = async () => {
  },
  apps: m = []
}) => /* @__PURE__ */ e.createElement(Fe, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(Y, { gap: "400" }, /* @__PURE__ */ e.createElement(y, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(Y, { gap: "300" }, m.map((k, A) => /* @__PURE__ */ e.createElement(Y, { gap: "300" }, /* @__PURE__ */ e.createElement(q, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(q, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Bt,
  {
    source: k.iconUrl,
    alt: k.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, { variant: "headingSm" }, k.name), /* @__PURE__ */ e.createElement(y, null, k.description))), /* @__PURE__ */ e.createElement(q, { gap: "400" }, /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(oe, null, g.Install)))), A < m.length - 1 && /* @__PURE__ */ e.createElement(Ne, null))))));
var Ce = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Ce.displayName = "CheckIcon";
var Ie = function(a) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, a), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
Ie.displayName = "PlusIcon";
const Qt = ({ plan: n, t: a, translatePlanName: u, planNameTextVariant: s, planDescriptionTextVariant: v }) => /* @__PURE__ */ e.createElement(Y, { gap: "100" }, /* @__PURE__ */ e.createElement(y, { variant: s, alignment: "center" }, u ? a(n.name) : n.name), n.description && /* @__PURE__ */ e.createElement(y, { variant: v, tone: "subdued", alignment: "center" }, a(n.description))), en = ({ plan: n, discount: a, t: u, priceTextVariant: s, useShortFormPlanIntervals: v = !0, toggleYearlySubtitle: g = !1 }) => /* @__PURE__ */ e.createElement(Y, { gap: "100" }, !!a && /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { variant: s }, he(a.presentmentDiscountedAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(
  y,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  he(n.presentmentAmount, n.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg", tone: "subdued" }, u(O.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: v })))), !a && /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: s }, he(n.presentmentAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(O.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: v })))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(Y, null, n.usageCharges.map((d, L) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${L}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "subdued" })), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg" }, u(d.terms))))), g && n.usageCharges.length === 0 && n.interval === "ANNUAL" && /* @__PURE__ */ e.createElement(y, { variant: "bodyMd", tone: "subdued", alignment: "center" }, "Billed yearly")), tn = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(Y, { gap: "300" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(y, null, a(O.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, v) => {
  const g = n.features[s];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${v}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "subdued" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(y, null, a(g.name)) : /* @__PURE__ */ e.createElement(y, null, g.value, " ", a(g.name)));
})), nn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: v = !0,
  trialDaysAsFeature: g = !1,
  expanded: d = !1,
  isActivePlan: L = !1,
  isRecommendedPlan: m = !1,
  isCustomPlan: k = !1,
  showRecommendedPlanBadge: A = !0,
  t: _,
  translatePlanName: I = !0,
  planNameTextVariant: x = "headingMd",
  planDescriptionTextVariant: B = "bodyLg",
  priceTextVariant: h = "heading3xl",
  toggleYearlySubtitle: E = !1
}) => {
  const [w, P] = e.useState(!1), F = _ || ((S) => S), N = async ({ plan: S, discount: b }) => {
    s ? (P(!0), await s({ plan: S, discount: b }) !== !0 && P(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(re, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(re, { paddingBlock: d || m ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    re,
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
    /* @__PURE__ */ e.createElement(Y, { gap: "800" }, /* @__PURE__ */ e.createElement(Y, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Qt,
      {
        plan: n,
        t: F,
        translatePlanName: I,
        planNameTextVariant: x,
        planDescriptionTextVariant: B
      }
    ), /* @__PURE__ */ e.createElement(
      en,
      {
        plan: n,
        discount: a,
        useShortFormPlanIntervals: v,
        t: F,
        priceTextVariant: h,
        toggleYearlySubtitle: E
      }
    )), /* @__PURE__ */ e.createElement(
      oe,
      {
        size: "large",
        variant: m ? "primary" : "secondary",
        onClick: async () => {
          await N({ plan: n, discount: a });
        },
        disabled: L,
        loading: w
      },
      F(u || O.SelectPlan)
    ), /* @__PURE__ */ e.createElement(tn, { plan: n, t: F, trialDaysAsFeature: g }), m && A && /* @__PURE__ */ e.createElement(q, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(qe, { tone: "success" }, F(O.MostPopular))))
  )));
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
}, je = ({
  plans: n,
  customer: a,
  onSelectPlan: u,
  planInterval: s,
  cardType: v = be.Horizontal,
  trialDaysAsFeature: g = !0,
  useShortFormPlanIntervals: d = !0,
  keyForRecommended: L = "recommended",
  keyForCustomButtonLabel: m = "buttonLabel",
  showRecommendedPlanBadge: k = !0,
  applyDiscount: A = !0,
  t: _,
  translatePlanName: I = !0,
  toggleYearlySubtitle: x = !1
}) => {
  var N;
  const B = (N = a == null ? void 0 : a.subscription) != null && N.active ? a.subscription : void 0, h = B == null ? void 0 : B.plan, E = s ? n.filter((S) => S.interval === s) : n, w = v === be.Vertical ? 1 : Xt(E.length), P = Gt(w), F = _ || ((S) => S);
  return /* @__PURE__ */ e.createElement(Se, { columns: w }, E.map((S) => {
    const b = A ? yt({ plan: S }) : void 0, M = (h == null ? void 0 : h.id) === S.id && !(B != null && B.cancelOn);
    return /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: P, key: S.id }, v === be.Highlighted && /* @__PURE__ */ e.createElement(
      nn,
      {
        key: `HighlightedPlanCard-${S.id}`,
        plan: S,
        discount: b,
        onSelectPlan: u,
        isActivePlan: M,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: d,
        isCustomPlan: S.availability !== "public",
        isRecommendedPlan: Ke({ plan: S, customFieldKey: L }),
        buttonLabel: Ze({ plan: S, customFieldKey: m }),
        showRecommendedPlanBadge: k,
        toggleYearlySubtitle: x,
        t: F,
        translatePlanName: I
      }
    ), v === be.Horizontal && /* @__PURE__ */ e.createElement(
      on,
      {
        key: `HorizontalPlanCard-${S.id}`,
        plan: S,
        discount: b,
        onSelectPlan: u,
        isActivePlan: M,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: d,
        isRecommendedPlan: Ke({ plan: S, customFieldKey: L }),
        buttonLabel: Ze({ plan: S, customFieldKey: m }),
        showRecommendedPlanBadge: k,
        toggleYearlySubtitle: x,
        t: F,
        translatePlanName: I
      }
    ));
  }));
}, pn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: v = !0,
  // boolean
  customFieldCta: g,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: L = !0,
  // boolean
  showTrialDaysAsFeature: m = !0,
  // boolean
  useShortFormPlanIntervals: k,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: _ = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: I = !1
  // boolean: toggle monthly pricing
}) => {
  const x = n == null ? void 0 : n.subscription, B = new URLSearchParams(window.location.search), h = a.some((M) => M.interval === K.Annual) && a.some((M) => M.interval === K.Every30Days), E = a.find((M) => M.id === (x == null ? void 0 : x.plan.id)), [w, P] = Ee(
    E ? E.interval : h ? K.Annual : K.Every30Days
  ), F = a.filter((M) => M.availability === "public"), N = _ ? a.filter((M) => M.availability !== "public") : [], [S, b] = Ee(
    B.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Re,
    {
      title: O.Plans,
      backAction: s ? { content: O.Back, url: s } : void 0,
      secondaryActions: L && h ? /* @__PURE__ */ e.createElement(Ae, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: w === K.Every30Days,
          onClick: () => P(K.Every30Days)
        },
        O.Monthly
      ), /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: w === K.Annual,
          onClick: () => P(K.Annual)
        },
        O.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(Y, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: O.SubscribeSuccessTitle,
        onDismiss: () => {
          b(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      O.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      je,
      {
        plans: F,
        onSelectPlan: u,
        planInterval: w,
        cardType: be.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: v,
        toggleYearlySubtitle: I
      }
    ), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(Ne, { borderColor: "border" }), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(Y, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(y, { variant: "headingMd" }, O.CustomPlans)), /* @__PURE__ */ e.createElement(
      je,
      {
        plans: N,
        onSelectPlan: u,
        planInterval: w,
        cardType: be.Horizontal,
        keyForRecommended: d,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: v
      }
    )))))
  );
}, rn = ({ plan: n, t: a, translatePlanName: u, isRecommendedPlan: s = !1, planNameTextVariant: v, planDescriptionTextVariant: g, showRecommendedPlanBadge: d }) => /* @__PURE__ */ e.createElement(Y, { gap: "100" }, /* @__PURE__ */ e.createElement(q, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(y, { variant: v }, u ? a(n.name) : n.name), s && d && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, a(O.MostPopular))), n.description && /* @__PURE__ */ e.createElement(y, { variant: g, tone: "subdued" }, a(n.description))), an = ({ plan: n, discount: a, t: u, useShortFormPlanIntervals: s = !0, priceTextVariant: v, toggleYearlySubtitle: g = !1 }) => /* @__PURE__ */ e.createElement(Y, null, !!a && a.presentmentDiscountedAmount > 0 && /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { variant: v }, he(a.presentmentDiscountedAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
  y,
  {
    variant: v,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  n.presentmentAmount
), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg", tone: "subdued" }, u(O.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: s })))), (!a || a.presentmentDiscountedAmount == 0) && /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: v }, he(n.presentmentAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: "bodyLg", tone: "subdued" }, u(O.Per), " ", u(ke({ interval: n.interval, useShortFormPlanIntervals: s })))), n.usageCharges && n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(Y, null, n.usageCharges.map((d, L) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${L}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "subdued" })), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg" }, u(d.terms))))), g && n.usageCharges.length === 0 && n.interval === "ANNUAL" && /* @__PURE__ */ e.createElement(y, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), ln = ({ plan: n, t: a, trialDaysAsFeature: u = !1 }) => /* @__PURE__ */ e.createElement(Y, { gap: "100" }, u && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(y, null, a(O.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, v) => {
  const g = n.features[s];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${v}`, align: "start", gap: "100", wrap: !1 }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "subdued" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(y, null, a(g.name)) : /* @__PURE__ */ e.createElement(y, null, g.value, " ", a(g.name)));
})), on = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: v = !0,
  trialDaysAsFeature: g = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: L = !1,
  t: m,
  translatePlanName: k = !0,
  showRecommendedPlanBadge: A = !0,
  planNameTextVariant: _ = "bodyLg",
  planDescriptionTextVariant: I = "bodyMd",
  priceTextVariant: x = "headingXl",
  toggleYearlySubtitle: B = !1
}) => {
  const [h, E] = e.useState(!1), w = m || ((F) => F), P = async ({ plan: F, discount: N }) => {
    s ? (E(!0), await s({ plan: F, discount: N }) !== !0 && E(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(Y, { gap: "400" }, /* @__PURE__ */ e.createElement(
    rn,
    {
      plan: n,
      isRecommendedPlan: d,
      showRecommendedPlanBadge: A,
      t: w,
      translatePlanName: k,
      planNameTextVariant: _,
      planDescriptionTextVariant: I
    }
  ), /* @__PURE__ */ e.createElement(
    an,
    {
      plan: n,
      discount: a,
      useShortFormPlanIntervals: v,
      t: w,
      priceTextVariant: x,
      toggleYearlySubtitle: B
    }
  ), /* @__PURE__ */ e.createElement(
    oe,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await P({ plan: n, discount: a });
      },
      disabled: L,
      loading: h
    },
    w(L ? O.CurrentPlan : u || O.SelectPlan)
  ), /* @__PURE__ */ e.createElement(ln, { plan: n, trialDaysAsFeature: g, t: w })));
}, yn = ({
  customer: n,
  plans: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: v = !0,
  // boolean
  customFieldCta: g = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: d = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: L = !0,
  // boolean
  showTrialDaysAsFeature: m = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: _ = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: I = !1
  // boolean: show monthly pricing for annual plans
}) => {
  const x = n == null ? void 0 : n.subscription, B = new URLSearchParams(window.location.search), h = a.some((M) => M.interval === K.Annual) && a.some((M) => M.interval === K.Every30Days), E = a.find((M) => M.id === (x == null ? void 0 : x.plan.id)), [w, P] = Ee(
    E ? E.interval : h ? K.Annual : K.Every30Days
  ), F = a.filter((M) => M.availability === "public"), N = _ ? a.filter((M) => M.availability !== "public") : [], [S, b] = Ee(
    B.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Re,
    {
      title: O.Plans,
      backAction: s && s !== "" ? { content: O.Back, url: s } : void 0,
      secondaryActions: L && h ? /* @__PURE__ */ e.createElement(Ae, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: w === K.Every30Days,
          onClick: () => P(K.Every30Days)
        },
        O.Monthly
      ), /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: w === K.Annual,
          onClick: () => P(K.Annual)
        },
        O.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(re, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(Y, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: O.SubscribeSuccessTitle,
        onDismiss: () => {
          b(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      O.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      je,
      {
        plans: F,
        onSelectPlan: u,
        planInterval: w,
        cardType: be.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: v,
        toggleYearlySubtitle: I
      }
    ), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(Ne, { borderColor: "border" }), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(Y, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(y, { variant: "headingMd" }, O.CustomPlans)), /* @__PURE__ */ e.createElement(
      je,
      {
        plans: N,
        onSelectPlan: u,
        planInterval: w,
        cardType: be.Highlighted,
        keyForRecommended: d,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: v
      }
    ))))))
  );
}, cn = ({
  plan: n,
  discount: a,
  buttonLabel: u,
  onSelectPlan: s,
  useShortFormPlanIntervals: v = !0,
  trialDaysAsFeature: g = !1,
  isRecommendedPlan: d = !1,
  isActivePlan: L = !1,
  t: m = _t,
  translatePlanName: k = !0,
  showRecommendedPlanBadge: A = !0,
  planNameTextVariant: _ = "bodyLg",
  planDescriptionTextVariant: I = "bodyMd",
  priceTextVariant: x = "headingXl",
  toggleYearlySubtitle: B = !1
}) => {
  const [h, E] = e.useState(!1), w = async ({ plan: b, discount: M }) => {
    s ? (E(!0), await s({ plan: b, discount: M }) !== !0 && E(!1)) : console.log("No onSelectPlan callback provided");
  }, P = ({ plan: b }) => /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, { variant: _ }, k ? m(b.name) : b.name), b.description && /* @__PURE__ */ e.createElement(y, { variant: I, tone: "subdued" }, m(b.description))), F = ({ plan: b }) => /* @__PURE__ */ e.createElement(Y, { gap: "200" }, /* @__PURE__ */ e.createElement(y, { fontWeight: "medium" }, m(O.Features)), /* @__PURE__ */ e.createElement(Y, { gap: "100" }, g && b.trialDays && b.trialDays > 0 ? /* @__PURE__ */ e.createElement(q, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "positive" })), /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, m(O.FreeTrialLength.replace("{{ trialDays }}", b.trialDays)))) : null, b.featuresOrder.map((M, Q) => {
    const J = b.features[M];
    if (J.type !== "boolean" || J.value === !0)
      return /* @__PURE__ */ e.createElement(q, { key: `plan-feature-${Q}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ce, tone: "positive" })), J.type === "boolean" ? /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, J.name) : /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, J.value, " ", J.name));
  }))), N = ({ plan: b, discount: M, toggleYearlySubtitle: Q }) => /* @__PURE__ */ e.createElement(Y, { gap: "100" }, M ? /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { variant: x }, he(M.presentmentDiscountedAmount, b.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
    y,
    {
      variant: x,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    b.presentmentAmount
  ), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg", tone: "subdued" }, O.Per, " ", ke({ interval: b.interval, useShortFormPlanIntervals: v }))) : /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: x }, he(b.presentmentAmount, b.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(y, { alignment: "center", variant: "bodyLg", tone: "subdued" }, O.Per, " ", ke({ interval: b.interval, useShortFormPlanIntervals: v }))), b.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(Y, null, b.usageCharges.map((J, z) => /* @__PURE__ */ e.createElement(q, { key: `plan-usageCharge-${z}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ye, { source: Ie, tone: "positive" })), /* @__PURE__ */ e.createElement(y, { variant: "bodyLg" }, J.terms)))), Q && b.usageCharges.length === 0 && b.interval === "ANNUAL" && /* @__PURE__ */ e.createElement(y, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), S = ({ plan: b, discount: M }) => /* @__PURE__ */ e.createElement(q, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    oe,
    {
      size: "large",
      variant: d ? "primary" : "secondary",
      onClick: async () => {
        await w({ plan: b, discount: M });
      },
      disabled: L,
      loading: h
    },
    m(L ? O.CurrentPlan : u || O.SelectPlan)
  ), d && A && /* @__PURE__ */ e.createElement(qe, { tone: "success" }, m(O.MostPopular)));
  return /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(Se, null, /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(Y, { gap: "300" }, P({ plan: n }), N({ plan: n, discount: a, toggleYearlySubtitle: B }), /* @__PURE__ */ e.createElement(re, null, S({ plan: n, discount: a })))), /* @__PURE__ */ e.createElement(Se.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, F({ plan: n }))));
}, gn = ({
  plans: n,
  customer: a,
  onSubscribe: u,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: v = "recommended",
  keyForCustomButtonLabel: g = "buttonLabel",
  showPlanIntervalToggle: d = !1,
  // boolean
  trialDaysAsFeature: L = !0,
  // boolean
  useShortFormPlanIntervals: m = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: k = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: A = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: _ = !0,
  // boolean
  applyDiscount: I = !0,
  t: x,
  translatePlanName: B = !0,
  toggleYearlySubtitle: h = !1
}) => {
  var ue;
  const E = new URLSearchParams(window.location.search), w = n.some((T) => T.interval === K.Annual) && n.some((T) => T.interval === K.Every30Days), P = (ue = a == null ? void 0 : a.subscription) != null && ue.active ? a.subscription : void 0, F = P == null ? void 0 : P.plan, [N, S] = Ee(
    F ? F.interval : w ? K.Annual : K.Every30Days
  ), b = n.filter(
    (T) => T.availability !== "customerTag" && T.availability !== "customer"
  ), M = d && w ? b.filter((T) => T.interval === N) : b, Q = A ? n.filter(
    (T) => T.availability === "customerTag" || T.availability === "customer"
  ) : [], [J, z] = Ee(
    E.get("subscribed") === "true"
  ), R = x || ((T) => T);
  return /* @__PURE__ */ e.createElement(
    Re,
    {
      title: O.Plans,
      backAction: s !== "" ? { content: O.Back, url: s } : void 0,
      secondaryActions: d && w ? /* @__PURE__ */ e.createElement(Ae, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: N === K.Every30Days,
          onClick: () => S(K.Every30Days)
        },
        O.Monthly
      ), /* @__PURE__ */ e.createElement(
        oe,
        {
          pressed: N === K.Annual,
          onClick: () => S(K.Annual)
        },
        O.Year
      )) : void 0,
      fullWidth: k === "full",
      narrowWidth: k === "narrow"
    },
    /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(Y, { gap: "400" }, J && /* @__PURE__ */ e.createElement(
      Fe,
      {
        tone: "success",
        title: O.SubscribeSuccessTitle,
        onDismiss: () => {
          z(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      O.SubscribeSuccessBody
    ), M.map((T, p) => {
      const o = I ? yt({ plan: T }) : void 0, l = (F == null ? void 0 : F.id) === T.id && !(P != null && P.cancelOn);
      return /* @__PURE__ */ e.createElement(
        cn,
        {
          key: `plan-${p}`,
          plan: T,
          discount: o,
          onSelectPlan: u,
          isActivePlan: l,
          trialDaysAsFeature: L,
          useShortFormPlanIntervals: m,
          isCustomPlan: T.availability !== "public",
          isRecommendedPlan: Ke({ plan: T, customFieldKey: v }),
          buttonLabel: Ze({ plan: T, customFieldKey: g }),
          showRecommendedPlanBadge: _,
          t: R,
          translatePlanName: B,
          toggleYearlySubtitle: h
        }
      );
    }), (Q == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ e.createElement(Ne, { borderColor: "border" }), (Q == null ? void 0 : Q.length) > 0 && /* @__PURE__ */ e.createElement(Y, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(y, { variant: "headingMd" }, O.CustomPlans)), /* @__PURE__ */ e.createElement(Se, null, Q.map((T, p) => {
      var l;
      const o = ((l = T.discounts) == null ? void 0 : l.length) > 0 ? T.discounts.reduce(
        (f, i) => f.discountedAmount < i.discountedAmount ? f : i
      ) : null;
      return /* @__PURE__ */ e.createElement(Se.Cell, { key: `custom-plan-${p}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(Y, { gap: "400" }, titleComponent({ plan: T, discount: o }), pricingComponent({ plan: T, discount: o, toggleYearlySubtitle: h }), ctaComponent({ plan: T, discount: o }), featuresComponent({ plan: T, discount: o }))));
    }))))))
  );
};
var gt = { exports: {} };
(function(n, a) {
  (function(u, s) {
    n.exports = s();
  })(mt, function() {
    var u = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, v, g) {
      var d = v.prototype, L = d.format;
      g.en.formats = u, d.format = function(m) {
        m === void 0 && (m = "YYYY-MM-DDTHH:mm:ssZ");
        var k = this.$locale().formats, A = function(_, I) {
          return _.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, B, h) {
            var E = h && h.toUpperCase();
            return B || I[h] || u[h] || I[E].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(w, P, F) {
              return P || F.slice(1);
            });
          });
        }(m, k === void 0 ? {} : k);
        return L.call(this, A);
      };
    };
  });
})(gt);
var sn = gt.exports;
const un = /* @__PURE__ */ ft(sn);
Ye.extend(un);
const Ve = ({
  orientation: n = "horizontal",
  onShowPlans: a,
  onCancelPlan: u,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: v = async () => {
  },
  i18n: g,
  subscription: d,
  refetch: L = async () => {
  },
  t: m,
  translatePlanName: k = !0,
  hideSelectPlanButton: A = !1
}) => {
  var J;
  const [_, I] = Ee(!1), [x, B] = Ee(!1), h = m || ((z) => z), E = {
    ...O,
    ...g || {}
  };
  if (!d)
    return /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(Y, { gap: "200" }, /* @__PURE__ */ e.createElement(y, { variant: "headingMd" }, h(E.Subscription)), /* @__PURE__ */ e.createElement(y, null, h(E.NotSubscribed)), /* @__PURE__ */ e.createElement(q, { align: "end" }, /* @__PURE__ */ e.createElement(Ae, null, !A && /* @__PURE__ */ e.createElement(
      oe,
      {
        variant: "primary",
        onClick: a,
        accessibilityLabel: h(E.ChangePlan)
      },
      h(E.SelectPlan)
    )))));
  const { plan: w } = d, P = he(d.presentmentTotal, w.presentmentCurrencyCode), F = h(w.interval === K.Annual ? E.Year : E.Month), N = n === "horizontal" ? Ht : Y, S = (J = d == null ? void 0 : d.appliedDiscount) == null ? void 0 : J.discount, b = S ? S.percentage ? `${S.percentage}%` : he(S.presentmentAmount, w.presentmentCurrencyCode) : null, M = S && d.appliedDiscount.discountEndsAt && Ye().isAfter(Ye(d.appliedDiscount.discountEndsAt)), Q = w.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(_e, null, /* @__PURE__ */ e.createElement(Y, { gap: "200" }, /* @__PURE__ */ e.createElement(y, { variant: "headingMd" }, h(E.Subscription)), /* @__PURE__ */ e.createElement(Y, { gap: "400" }, /* @__PURE__ */ e.createElement(N, { columns: Q, gap: "300" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, null, h(E.CurrentPlan)), /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, k ? h(w.name) : w.name), d.cancelOn && /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, h("Canceled, active until {{ date }}").replace("{{ date }}", Ye(d.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, null, h(E.Price)), /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, { tone: "subdued" }, h(E.AmountPerInterval).replace("{{ amount }}", P).replace("{{ interval }}", F)), S && !M && /* @__PURE__ */ e.createElement(y, { tone: "success" }, h(E.DiscountAmount).replace("{{ amount }}", b)), S && M && /* @__PURE__ */ e.createElement(y, { tone: "subdued", textDecorationLine: "line-through" }, h(E.DiscountAmountExpired).replace("{{ amount }}", b)))), w.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(y, null, h(E.UsageCharges || "Usage charges")), w.usageCharges.map((z, R) => /* @__PURE__ */ e.createElement(y, { key: `usage-charge-${R}`, tone: "subdued" }, h(z.terms))))), /* @__PURE__ */ e.createElement(q, { align: "end" }, /* @__PURE__ */ e.createElement(Ae, null, /* @__PURE__ */ e.createElement(
    oe,
    {
      onClick: () => {
        u ? u() : I(!0);
      },
      accessibilityLabel: h(E.CancelPlan),
      tone: "critical",
      disabled: !!d.cancelOn
    },
    h(E.CancelPlan)
  ), !A && /* @__PURE__ */ e.createElement(
    oe,
    {
      variant: "primary",
      onClick: a,
      accessibilityLabel: h(E.ChangePlan)
    },
    h(E.ChangePlan)
  ))))), _ && /* @__PURE__ */ e.createElement(
    st,
    {
      open: !0,
      onClose: () => I(!1),
      title: h(E.CancelPlan),
      primaryAction: {
        content: h(E.CancelPlan),
        destructive: !0,
        loading: x,
        disabled: x,
        onAction: async () => {
          B(!0), await v(), await L(), B(!1), I(!1), s();
        }
      },
      secondaryActions: [
        {
          content: h(E.Back),
          disabled: x,
          onAction: () => I(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(st.Section, null, h(E.CancelConfirmation))
  ));
}, hn = ({
  backUrl: n = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: a = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: u, i18n: s, subscription: v, refetch: g } = Kt(), d = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    Re,
    {
      title: s.Subscription,
      backAction: n ? { content: s.Back, url: n } : void 0,
      fullWidth: a === "full",
      narrowWidth: a === "narrow"
    },
    /* @__PURE__ */ e.createElement(Y, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: v,
        refetch: g
      }
    ), /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(ge.Section, null, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: v,
        refetch: g
      }
    )), /* @__PURE__ */ e.createElement(ge.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Ve,
      {
        onShowPlans: d,
        cancelSubscription: u,
        i18n: s,
        subscription: v,
        refetch: g,
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
  je as PlanCardStack,
  be as PlanCardType,
  Ve as SubscriptionSummaryCard,
  hn as SubscriptionSummaryPage,
  cn as VerticalPlanCard,
  gn as VerticalPlanCards
};
