import e, { createContext as Ht, useContext as Ut, useState as ve } from "react";
import { Banner as je, BlockStack as _, Text as u, InlineStack as z, Thumbnail as zt, Button as ie, Divider as Ie, Card as ke, Icon as ge, Checkbox as ut, Collapsible as Vt, Modal as Ye, Box as re, Badge as Ge, Grid as Ce, Page as Ne, ButtonGroup as Re, Layout as Ee, InlineGrid as Zt } from "@shopify/polaris";
var ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function gt(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var vt = { exports: {} };
(function(n, r) {
  (function(d, s) {
    n.exports = s();
  })(ft, function() {
    var d = 1e3, s = 6e4, y = 36e5, h = "millisecond", m = "second", T = "minute", f = "hour", w = "day", P = "week", O = "month", I = "quarter", x = "year", j = "date", v = "Invalid Date", C = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, D = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(p) {
      var o = ["th", "st", "nd", "rd"], l = p % 100;
      return "[" + p + (o[(l - 20) % 10] || o[l] || o[0]) + "]";
    } }, N = function(p, o, l) {
      var E = String(p);
      return !E || E.length >= o ? p : "" + Array(o + 1 - E.length).join(l) + p;
    }, B = { s: N, z: function(p) {
      var o = -p.utcOffset(), l = Math.abs(o), E = Math.floor(l / 60), c = l % 60;
      return (o <= 0 ? "+" : "-") + N(E, 2, "0") + ":" + N(c, 2, "0");
    }, m: function p(o, l) {
      if (o.date() < l.date())
        return -p(l, o);
      var E = 12 * (l.year() - o.year()) + (l.month() - o.month()), c = o.clone().add(E, O), A = l - c < 0, R = o.clone().add(E + (A ? -1 : 1), O);
      return +(-(E + (l - c) / (A ? c - R : R - c)) || 0);
    }, a: function(p) {
      return p < 0 ? Math.ceil(p) || 0 : Math.floor(p);
    }, p: function(p) {
      return { M: O, y: x, w: P, d: w, D: j, h: f, m: T, s: m, ms: h, Q: I }[p] || String(p || "").toLowerCase().replace(/s$/, "");
    }, u: function(p) {
      return p === void 0;
    } }, S = "en", b = {};
    b[S] = M;
    var $ = "$isDayjsObject", G = function(p) {
      return p instanceof ae || !(!p || !p[$]);
    }, q = function p(o, l, E) {
      var c;
      if (!o)
        return S;
      if (typeof o == "string") {
        var A = o.toLowerCase();
        b[A] && (c = A), l && (b[A] = l, c = A);
        var R = o.split("-");
        if (!c && R.length > 1)
          return p(R[0]);
      } else {
        var V = o.name;
        b[V] = o, c = V;
      }
      return !E && c && (S = c), c || !E && S;
    }, g = function(p, o) {
      if (G(p))
        return p.clone();
      var l = typeof o == "object" ? o : {};
      return l.date = p, l.args = arguments, new ae(l);
    }, Y = B;
    Y.l = q, Y.i = G, Y.w = function(p, o) {
      return g(p, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
    };
    var ae = function() {
      function p(l) {
        this.$L = q(l.locale, null, !0), this.parse(l), this.$x = this.$x || l.x || {}, this[$] = !0;
      }
      var o = p.prototype;
      return o.parse = function(l) {
        this.$d = function(E) {
          var c = E.date, A = E.utc;
          if (c === null)
            return /* @__PURE__ */ new Date(NaN);
          if (Y.u(c))
            return /* @__PURE__ */ new Date();
          if (c instanceof Date)
            return new Date(c);
          if (typeof c == "string" && !/Z$/i.test(c)) {
            var R = c.match(C);
            if (R) {
              var V = R[2] - 1 || 0, J = (R[7] || "0").substring(0, 3);
              return A ? new Date(Date.UTC(R[1], V, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, J)) : new Date(R[1], V, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, J);
            }
          }
          return new Date(c);
        }(l), this.init();
      }, o.init = function() {
        var l = this.$d;
        this.$y = l.getFullYear(), this.$M = l.getMonth(), this.$D = l.getDate(), this.$W = l.getDay(), this.$H = l.getHours(), this.$m = l.getMinutes(), this.$s = l.getSeconds(), this.$ms = l.getMilliseconds();
      }, o.$utils = function() {
        return Y;
      }, o.isValid = function() {
        return this.$d.toString() !== v;
      }, o.isSame = function(l, E) {
        var c = g(l);
        return this.startOf(E) <= c && c <= this.endOf(E);
      }, o.isAfter = function(l, E) {
        return g(l) < this.startOf(E);
      }, o.isBefore = function(l, E) {
        return this.endOf(E) < g(l);
      }, o.$g = function(l, E, c) {
        return Y.u(l) ? this[E] : this.set(c, l);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(l, E) {
        var c = this, A = !!Y.u(E) || E, R = Y.p(l), V = function(ue, te) {
          var fe = Y.w(c.$u ? Date.UTC(c.$y, te, ue) : new Date(c.$y, te, ue), c);
          return A ? fe : fe.endOf(w);
        }, J = function(ue, te) {
          return Y.w(c.toDate()[ue].apply(c.toDate("s"), (A ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), c);
        }, X = this.$W, ne = this.$M, oe = this.$D, de = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case x:
            return A ? V(1, 0) : V(31, 11);
          case O:
            return A ? V(1, ne) : V(0, ne + 1);
          case P:
            var se = this.$locale().weekStart || 0, me = (X < se ? X + 7 : X) - se;
            return V(A ? oe - me : oe + (6 - me), ne);
          case w:
          case j:
            return J(de + "Hours", 0);
          case f:
            return J(de + "Minutes", 1);
          case T:
            return J(de + "Seconds", 2);
          case m:
            return J(de + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o.endOf = function(l) {
        return this.startOf(l, !1);
      }, o.$set = function(l, E) {
        var c, A = Y.p(l), R = "set" + (this.$u ? "UTC" : ""), V = (c = {}, c[w] = R + "Date", c[j] = R + "Date", c[O] = R + "Month", c[x] = R + "FullYear", c[f] = R + "Hours", c[T] = R + "Minutes", c[m] = R + "Seconds", c[h] = R + "Milliseconds", c)[A], J = A === w ? this.$D + (E - this.$W) : E;
        if (A === O || A === x) {
          var X = this.clone().set(j, 1);
          X.$d[V](J), X.init(), this.$d = X.set(j, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          V && this.$d[V](J);
        return this.init(), this;
      }, o.set = function(l, E) {
        return this.clone().$set(l, E);
      }, o.get = function(l) {
        return this[Y.p(l)]();
      }, o.add = function(l, E) {
        var c, A = this;
        l = Number(l);
        var R = Y.p(E), V = function(ne) {
          var oe = g(A);
          return Y.w(oe.date(oe.date() + Math.round(ne * l)), A);
        };
        if (R === O)
          return this.set(O, this.$M + l);
        if (R === x)
          return this.set(x, this.$y + l);
        if (R === w)
          return V(1);
        if (R === P)
          return V(7);
        var J = (c = {}, c[T] = s, c[f] = y, c[m] = d, c)[R] || 1, X = this.$d.getTime() + l * J;
        return Y.w(X, this);
      }, o.subtract = function(l, E) {
        return this.add(-1 * l, E);
      }, o.format = function(l) {
        var E = this, c = this.$locale();
        if (!this.isValid())
          return c.invalidDate || v;
        var A = l || "YYYY-MM-DDTHH:mm:ssZ", R = Y.z(this), V = this.$H, J = this.$m, X = this.$M, ne = c.weekdays, oe = c.months, de = c.meridiem, se = function(te, fe, ye, we) {
          return te && (te[fe] || te(E, A)) || ye[fe].slice(0, we);
        }, me = function(te) {
          return Y.s(V % 12 || 12, te, "0");
        }, ue = de || function(te, fe, ye) {
          var we = te < 12 ? "AM" : "PM";
          return ye ? we.toLowerCase() : we;
        };
        return A.replace(D, function(te, fe) {
          return fe || function(ye) {
            switch (ye) {
              case "YY":
                return String(E.$y).slice(-2);
              case "YYYY":
                return Y.s(E.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return Y.s(X + 1, 2, "0");
              case "MMM":
                return se(c.monthsShort, X, oe, 3);
              case "MMMM":
                return se(oe, X);
              case "D":
                return E.$D;
              case "DD":
                return Y.s(E.$D, 2, "0");
              case "d":
                return String(E.$W);
              case "dd":
                return se(c.weekdaysMin, E.$W, ne, 2);
              case "ddd":
                return se(c.weekdaysShort, E.$W, ne, 3);
              case "dddd":
                return ne[E.$W];
              case "H":
                return String(V);
              case "HH":
                return Y.s(V, 2, "0");
              case "h":
                return me(1);
              case "hh":
                return me(2);
              case "a":
                return ue(V, J, !0);
              case "A":
                return ue(V, J, !1);
              case "m":
                return String(J);
              case "mm":
                return Y.s(J, 2, "0");
              case "s":
                return String(E.$s);
              case "ss":
                return Y.s(E.$s, 2, "0");
              case "SSS":
                return Y.s(E.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(te) || R.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(l, E, c) {
        var A, R = this, V = Y.p(E), J = g(l), X = (J.utcOffset() - this.utcOffset()) * s, ne = this - J, oe = function() {
          return Y.m(R, J);
        };
        switch (V) {
          case x:
            A = oe() / 12;
            break;
          case O:
            A = oe();
            break;
          case I:
            A = oe() / 3;
            break;
          case P:
            A = (ne - X) / 6048e5;
            break;
          case w:
            A = (ne - X) / 864e5;
            break;
          case f:
            A = ne / y;
            break;
          case T:
            A = ne / s;
            break;
          case m:
            A = ne / d;
            break;
          default:
            A = ne;
        }
        return c ? A : Y.a(A);
      }, o.daysInMonth = function() {
        return this.endOf(O).$D;
      }, o.$locale = function() {
        return b[this.$L];
      }, o.locale = function(l, E) {
        if (!l)
          return this.$L;
        var c = this.clone(), A = q(l, E, !0);
        return A && (c.$L = A), c;
      }, o.clone = function() {
        return Y.w(this.$d, this);
      }, o.toDate = function() {
        return new Date(this.valueOf());
      }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o.toISOString = function() {
        return this.$d.toISOString();
      }, o.toString = function() {
        return this.$d.toUTCString();
      }, p;
    }(), F = ae.prototype;
    return g.prototype = F, [["$ms", h], ["$s", m], ["$m", T], ["$H", f], ["$W", w], ["$M", O], ["$y", x], ["$D", j]].forEach(function(p) {
      F[p[1]] = function(o) {
        return this.$g(o, p[0], p[1]);
      };
    }), g.extend = function(p, o) {
      return p.$i || (p(o, ae, g), p.$i = !0), g;
    }, g.locale = q, g.isDayjs = G, g.unix = function(p) {
      return g(1e3 * p);
    }, g.en = b[S], g.Ls = b, g.p = {}, g;
  });
})(vt);
var Kt = vt.exports;
const Le = /* @__PURE__ */ gt(Kt);
var $e = {}, dt;
function qt() {
  if (dt)
    return $e;
  dt = 1;
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var n = e, r = Symbol.for("react.element"), d = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(T, f, w) {
    var P, O = {}, I = null, x = null;
    w !== void 0 && (I = "" + w), f.key !== void 0 && (I = "" + f.key), f.ref !== void 0 && (x = f.ref);
    for (P in f)
      s.call(f, P) && !h.hasOwnProperty(P) && (O[P] = f[P]);
    if (T && T.defaultProps)
      for (P in f = T.defaultProps, f)
        O[P] === void 0 && (O[P] = f[P]);
    return { $$typeof: r, type: T, key: I, ref: x, props: O, _owner: y.current };
  }
  return $e.Fragment = d, $e.jsx = m, $e.jsxs = m, $e;
}
var Ae = {}, mt;
function Gt() {
  if (mt)
    return Ae;
  mt = 1;
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return process.env.NODE_ENV !== "production" && function() {
    var n = e, r = Symbol.for("react.element"), d = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), T = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), P = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), j = Symbol.iterator, v = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var a = j && t[j] || t[v];
      return typeof a == "function" ? a : null;
    }
    var D = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function M(t) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), k = 1; k < a; k++)
          i[k - 1] = arguments[k];
        N("error", t, i);
      }
    }
    function N(t, a, i) {
      {
        var k = D.ReactDebugCurrentFrame, U = k.getStackAddendum();
        U !== "" && (a += "%s", i = i.concat([U]));
        var Z = i.map(function(H) {
          return String(H);
        });
        Z.unshift("Warning: " + a), Function.prototype.apply.call(console[t], console, Z);
      }
    }
    var B = !1, S = !1, b = !1, $ = !1, G = !1, q;
    q = Symbol.for("react.module.reference");
    function g(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === h || G || t === y || t === w || t === P || $ || t === x || B || S || b || typeof t == "object" && t !== null && (t.$$typeof === I || t.$$typeof === O || t.$$typeof === m || t.$$typeof === T || t.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function Y(t, a, i) {
      var k = t.displayName;
      if (k)
        return k;
      var U = a.displayName || a.name || "";
      return U !== "" ? i + "(" + U + ")" : i;
    }
    function ae(t) {
      return t.displayName || "Context";
    }
    function F(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && M("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case d:
          return "Portal";
        case h:
          return "Profiler";
        case y:
          return "StrictMode";
        case w:
          return "Suspense";
        case P:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case T:
            var a = t;
            return ae(a) + ".Consumer";
          case m:
            var i = t;
            return ae(i._context) + ".Provider";
          case f:
            return Y(t, t.render, "ForwardRef");
          case O:
            var k = t.displayName || null;
            return k !== null ? k : F(t.type) || "Memo";
          case I: {
            var U = t, Z = U._payload, H = U._init;
            try {
              return F(H(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var p = Object.assign, o = 0, l, E, c, A, R, V, J;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function ne() {
      {
        if (o === 0) {
          l = console.log, E = console.info, c = console.warn, A = console.error, R = console.group, V = console.groupCollapsed, J = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: X,
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
    function oe() {
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
              value: E
            }),
            warn: p({}, t, {
              value: c
            }),
            error: p({}, t, {
              value: A
            }),
            group: p({}, t, {
              value: R
            }),
            groupCollapsed: p({}, t, {
              value: V
            }),
            groupEnd: p({}, t, {
              value: J
            })
          });
        }
        o < 0 && M("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var de = D.ReactCurrentDispatcher, se;
    function me(t, a, i) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (U) {
            var k = U.stack.trim().match(/\n( *(at )?)/);
            se = k && k[1] || "";
          }
        return `
` + se + t;
      }
    }
    var ue = !1, te;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      te = new fe();
    }
    function ye(t, a) {
      if (!t || ue)
        return "";
      {
        var i = te.get(t);
        if (i !== void 0)
          return i;
      }
      var k;
      ue = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = de.current, de.current = null, ne();
      try {
        if (a) {
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
            } catch (he) {
              k = he;
            }
            Reflect.construct(t, [], H);
          } else {
            try {
              H.call();
            } catch (he) {
              k = he;
            }
            t.call(H.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (he) {
            k = he;
          }
          t();
        }
      } catch (he) {
        if (he && k && typeof he.stack == "string") {
          for (var W = he.stack.split(`
`), le = k.stack.split(`
`), Q = W.length - 1, ee = le.length - 1; Q >= 1 && ee >= 0 && W[Q] !== le[ee]; )
            ee--;
          for (; Q >= 1 && ee >= 0; Q--, ee--)
            if (W[Q] !== le[ee]) {
              if (Q !== 1 || ee !== 1)
                do
                  if (Q--, ee--, ee < 0 || W[Q] !== le[ee]) {
                    var ce = `
` + W[Q].replace(" at new ", " at ");
                    return t.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, ce), ce;
                  }
                while (Q >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        ue = !1, de.current = Z, oe(), Error.prepareStackTrace = U;
      }
      var De = t ? t.displayName || t.name : "", st = De ? me(De) : "";
      return typeof t == "function" && te.set(t, st), st;
    }
    function we(t, a, i) {
      return ye(t, !1);
    }
    function Ct(t) {
      var a = t.prototype;
      return !!(a && a.isReactComponent);
    }
    function Te(t, a, i) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ye(t, Ct(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case w:
          return me("Suspense");
        case P:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case f:
            return we(t.render);
          case O:
            return Te(t.type, a, i);
          case I: {
            var k = t, U = k._payload, Z = k._init;
            try {
              return Te(Z(U), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Oe = Object.prototype.hasOwnProperty, Je = {}, Xe = D.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var a = t._owner, i = Te(t.type, t._source, a ? a.type : null);
        Xe.setExtraStackFrame(i);
      } else
        Xe.setExtraStackFrame(null);
    }
    function St(t, a, i, k, U) {
      {
        var Z = Function.call.bind(Oe);
        for (var H in t)
          if (Z(t, H)) {
            var W = void 0;
            try {
              if (typeof t[H] != "function") {
                var le = Error((k || "React class") + ": " + i + " type `" + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[H] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              W = t[H](a, H, k, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Q) {
              W = Q;
            }
            W && !(W instanceof Error) && (xe(U), M("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", i, H, typeof W), xe(null)), W instanceof Error && !(W.message in Je) && (Je[W.message] = !0, xe(U), M("Failed %s type: %s", i, W.message), xe(null));
          }
      }
    }
    var wt = Array.isArray;
    function We(t) {
      return wt(t);
    }
    function Pt(t) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return i;
      }
    }
    function Dt(t) {
      try {
        return Qe(t), !1;
      } catch {
        return !0;
      }
    }
    function Qe(t) {
      return "" + t;
    }
    function et(t) {
      if (Dt(t))
        return M("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Pt(t)), Qe(t);
    }
    var Me = D.ReactCurrentOwner, kt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tt, nt, He;
    He = {};
    function Mt(t) {
      if (Oe.call(t, "ref")) {
        var a = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function $t(t) {
      if (Oe.call(t, "key")) {
        var a = Object.getOwnPropertyDescriptor(t, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function At(t, a) {
      if (typeof t.ref == "string" && Me.current && a && Me.current.stateNode !== a) {
        var i = F(Me.current.type);
        He[i] || (M('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Me.current.type), t.ref), He[i] = !0);
      }
    }
    function Rt(t, a) {
      {
        var i = function() {
          tt || (tt = !0, M("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function Tt(t, a) {
      {
        var i = function() {
          nt || (nt = !0, M("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Ot = function(t, a, i, k, U, Z, H) {
      var W = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: a,
        ref: i,
        props: H,
        // Record the component responsible for creating this element.
        _owner: Z
      };
      return W._store = {}, Object.defineProperty(W._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(W, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(W, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(W.props), Object.freeze(W)), W;
    };
    function xt(t, a, i, k, U) {
      {
        var Z, H = {}, W = null, le = null;
        i !== void 0 && (et(i), W = "" + i), $t(a) && (et(a.key), W = "" + a.key), Mt(a) && (le = a.ref, At(a, U));
        for (Z in a)
          Oe.call(a, Z) && !kt.hasOwnProperty(Z) && (H[Z] = a[Z]);
        if (t && t.defaultProps) {
          var Q = t.defaultProps;
          for (Z in Q)
            H[Z] === void 0 && (H[Z] = Q[Z]);
        }
        if (W || le) {
          var ee = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          W && Rt(H, ee), le && Tt(H, ee);
        }
        return Ot(t, W, le, U, k, Me.current, H);
      }
    }
    var Ue = D.ReactCurrentOwner, rt = D.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var a = t._owner, i = Te(t.type, t._source, a ? a.type : null);
        rt.setExtraStackFrame(i);
      } else
        rt.setExtraStackFrame(null);
    }
    var ze;
    ze = !1;
    function Ve(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function at() {
      {
        if (Ue.current) {
          var t = F(Ue.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Lt(t) {
      {
        if (t !== void 0) {
          var a = t.fileName.replace(/^.*[\\\/]/, ""), i = t.lineNumber;
          return `

Check your code at ` + a + ":" + i + ".";
        }
        return "";
      }
    }
    var lt = {};
    function Yt(t) {
      {
        var a = at();
        if (!a) {
          var i = typeof t == "string" ? t : t.displayName || t.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function ot(t, a) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var i = Yt(a);
        if (lt[i])
          return;
        lt[i] = !0;
        var k = "";
        t && t._owner && t._owner !== Ue.current && (k = " It was passed a child from " + F(t._owner.type) + "."), Pe(t), M('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, k), Pe(null);
      }
    }
    function it(t, a) {
      {
        if (typeof t != "object")
          return;
        if (We(t))
          for (var i = 0; i < t.length; i++) {
            var k = t[i];
            Ve(k) && ot(k, a);
          }
        else if (Ve(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var U = C(t);
          if (typeof U == "function" && U !== t.entries)
            for (var Z = U.call(t), H; !(H = Z.next()).done; )
              Ve(H.value) && ot(H.value, a);
        }
      }
    }
    function Ft(t) {
      {
        var a = t.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === O))
          i = a.propTypes;
        else
          return;
        if (i) {
          var k = F(a);
          St(i, t.props, "prop", k, t);
        } else if (a.PropTypes !== void 0 && !ze) {
          ze = !0;
          var U = F(a);
          M("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && M("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jt(t) {
      {
        for (var a = Object.keys(t.props), i = 0; i < a.length; i++) {
          var k = a[i];
          if (k !== "children" && k !== "key") {
            Pe(t), M("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), Pe(null);
            break;
          }
        }
        t.ref !== null && (Pe(t), M("Invalid attribute `ref` supplied to `React.Fragment`."), Pe(null));
      }
    }
    function ct(t, a, i, k, U, Z) {
      {
        var H = g(t);
        if (!H) {
          var W = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Lt(U);
          le ? W += le : W += at();
          var Q;
          t === null ? Q = "null" : We(t) ? Q = "array" : t !== void 0 && t.$$typeof === r ? (Q = "<" + (F(t.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : Q = typeof t, M("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Q, W);
        }
        var ee = xt(t, a, i, U, Z);
        if (ee == null)
          return ee;
        if (H) {
          var ce = a.children;
          if (ce !== void 0)
            if (k)
              if (We(ce)) {
                for (var De = 0; De < ce.length; De++)
                  it(ce[De], t);
                Object.freeze && Object.freeze(ce);
              } else
                M("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              it(ce, t);
        }
        return t === s ? jt(ee) : Ft(ee), ee;
      }
    }
    function It(t, a, i) {
      return ct(t, a, i, !0);
    }
    function Nt(t, a, i) {
      return ct(t, a, i, !1);
    }
    var Bt = Nt, Wt = It;
    Ae.Fragment = s, Ae.jsx = Bt, Ae.jsxs = Wt;
  }(), Ae;
}
process.env.NODE_ENV === "production" ? qt() : Gt();
const L = {
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
}, Jt = Ht(void 0), Xt = () => {
  const n = Ut(Jt);
  if (n === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return n;
}, Qt = (n = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: n,
  notation: "standard"
}), pe = (n, r = "USD", d = !0) => {
  let s = Qt(r).format(n);
  return d && (s = s.replace(/\.00$/, "")), s;
};
var K = /* @__PURE__ */ ((n) => (n.Annual = "ANNUAL", n.Every30Days = "EVERY_30_DAYS", n))(K || {});
const en = (n = "EVERY_30_DAYS") => {
  switch (n) {
    case "ANNUAL":
      return "year";
    case "EVERY_30_DAYS":
    default:
      return "month";
  }
}, tn = (n = "EVERY_30_DAYS") => {
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
}) => r ? tn(n) : en(n), Ke = ({
  plan: n,
  customFieldKey: r = "recommended"
}) => {
  var d;
  return !!((d = n.customFields) != null && d[r]);
}, qe = ({
  plan: n,
  customFieldKey: r = "buttonLabel"
}) => {
  var d;
  return ((d = n.customFields) == null ? void 0 : d[r]) || L.subscribe;
}, ht = ({ plan: n }) => {
  var r;
  return ((r = n.discounts) == null ? void 0 : r.length) > 0 ? n.discounts.reduce(
    (d, s) => d.discountedAmount < s.discountedAmount ? d : s
  ) : void 0;
}, nn = (n = 4) => n % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : n % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : n % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : n === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, rn = (n = 4) => n % 4 === 0 ? 4 : n % 3 === 0 ? 3 : n % 2 === 0 ? 2 : n === 1 ? 1 : 4, pn = ({
  orientation: n = "horizontal",
  onShowPlans: r,
  onCancelPlan: d,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: y = async () => {
  },
  i18n: h,
  subscription: m,
  refetch: T = async () => {
  },
  apps: f = []
}) => /* @__PURE__ */ e.createElement(je, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(u, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(_, { gap: "300" }, f.map((w, P) => /* @__PURE__ */ e.createElement(_, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(z, { gap: "300" }, /* @__PURE__ */ e.createElement(
  zt,
  {
    source: w.iconUrl,
    alt: w.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, { variant: "headingSm" }, w.name), /* @__PURE__ */ e.createElement(u, null, w.description))), /* @__PURE__ */ e.createElement(z, { gap: "400" }, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(ie, null, h.Install)))), P < f.length - 1 && /* @__PURE__ */ e.createElement(Ie, null))))));
var Et = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    d: "M13.28 9.03a.75.75 0 0 0-1.06-1.06l-2.97 2.97-1.22-1.22a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l3.5-3.5Z"
  }), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
  }));
};
Et.displayName = "CheckCircleIcon";
var Se = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
Se.displayName = "CheckIcon";
var pt = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M5.72 8.47a.75.75 0 0 1 1.06 0l3.47 3.47 3.47-3.47a.75.75 0 1 1 1.06 1.06l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 0 1 0-1.06Z"
  }));
};
pt.displayName = "ChevronDownIcon";
var yt = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M14.53 12.28a.75.75 0 0 1-1.06 0l-3.47-3.47-3.47 3.47a.75.75 0 0 1-1.06-1.06l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 0 1 0 1.06Z"
  }));
};
yt.displayName = "ChevronUpIcon";
var Be = function(r) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, r), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
Be.displayName = "PlusIcon";
const yn = ({
  title: n = "Checklist",
  steps: r = [],
  showProgress: d = !0,
  showProgressText: s = !0,
  hideCompleted: y = !1,
  allowExpandCompleted: h = !0,
  showDescription: m = !0,
  enableDescriptionModal: T = !1,
  completionMessage: f = "All items completed! Great job!",
  noItemsMessage: w = "No items in this checklist yet."
}) => {
  const [P, O] = ve(!1), [I, x] = ve(null), j = r.filter((g) => g.completed).length, v = r.length, C = v > 0 ? Math.round(j / v * 100) : 0, D = j === v && v > 0, M = r.filter((g) => !g.completed), N = r.filter((g) => g.completed), B = y ? M : r, S = () => {
    O(!P);
  }, b = (g) => {
    if (T) {
      const Y = r.find((ae) => ae.id === g);
      Y && Y.description && x(g);
    }
  }, $ = () => {
    x(null);
  }, G = I ? r.find((g) => g.id === I) : null, q = (g) => {
    const Y = /* @__PURE__ */ e.createElement(
      u,
      {
        variant: "bodyMd",
        tone: g.completed ? "subdued" : "base",
        textDecorationLine: g.completed ? "line-through" : "none"
      },
      g.name
    );
    return T && g.description ? /* @__PURE__ */ e.createElement(
      "span",
      {
        style: {
          cursor: "pointer",
          textDecoration: "underline",
          textDecorationColor: "transparent",
          transition: "text-decoration-color 0.2s ease"
        },
        onMouseEnter: (ae) => {
          ae.target.style.textDecorationColor = "currentColor";
        },
        onMouseLeave: (ae) => {
          ae.target.style.textDecorationColor = "transparent";
        },
        onClick: () => b(g.id)
      },
      Y
    ) : Y;
  };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(_, { gap: "200" }, /* @__PURE__ */ e.createElement(z, { align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, n), D && /* @__PURE__ */ e.createElement(z, { gap: "100", blockAlign: "center" }, /* @__PURE__ */ e.createElement(ge, { source: Et, tone: "success" }), /* @__PURE__ */ e.createElement(u, { tone: "success" }, "Complete!"))), d && v > 0 && /* @__PURE__ */ e.createElement(_, { gap: "100" }, s && /* @__PURE__ */ e.createElement(z, { align: "space-between" }, /* @__PURE__ */ e.createElement(u, { variant: "bodyMd", tone: "subdued" }, "Progress: ", j, " of ", v, " completed"), /* @__PURE__ */ e.createElement(u, { variant: "bodyMd", tone: "subdued" }, C, "%")), /* @__PURE__ */ e.createElement(
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
          backgroundColor: D ? "#00a047" : "#006fbb",
          transition: "width 0.3s ease"
        }
      }
    )
  ))), /* @__PURE__ */ e.createElement(_, { gap: "300" }, B.map((g) => /* @__PURE__ */ e.createElement(z, { key: g.id, align: "space-between", blockAlign: "start" }, /* @__PURE__ */ e.createElement(z, { gap: "300", blockAlign: "start" }, /* @__PURE__ */ e.createElement(
    ut,
    {
      id: `checklist-step-${g.id}`,
      checked: g.completed,
      onChange: () => handleToggle(g.id)
    }
  ), /* @__PURE__ */ e.createElement(_, { gap: "100" }, q(g), g.description && m && /* @__PURE__ */ e.createElement(u, { variant: "bodySm", tone: "subdued" }, g.description)))))), y && h && N.length > 0 && /* @__PURE__ */ e.createElement(_, { gap: "200" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      variant: "plain",
      onClick: S,
      icon: P ? yt : pt,
      disclosure: P ? "up" : "down"
    },
    P ? "Hide" : "Show",
    " ",
    j,
    " completed ",
    j === 1 ? "item" : "items"
  ), /* @__PURE__ */ e.createElement(
    Vt,
    {
      open: P,
      id: "completed-steps",
      transition: { duration: "200ms", timingFunction: "ease-in-out" }
    },
    /* @__PURE__ */ e.createElement(_, { gap: "300" }, N.map((g) => /* @__PURE__ */ e.createElement(z, { key: g.id, align: "space-between", blockAlign: "start" }, /* @__PURE__ */ e.createElement(z, { gap: "300", blockAlign: "start" }, /* @__PURE__ */ e.createElement(
      ut,
      {
        id: `checklist-step-${g.id}`,
        checked: g.completed,
        onChange: () => handleToggle(g.id)
      }
    ), /* @__PURE__ */ e.createElement(_, { gap: "100" }, q(g), g.description && m && /* @__PURE__ */ e.createElement(u, { variant: "bodySm", tone: "subdued" }, g.description))))))
  )), B.length === 0 && y && v > 0 && !h && (typeof f == "string" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued", alignment: "center" }, f) : f), v === 0 && (typeof w == "string" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued", alignment: "center" }, w) : w)), G && /* @__PURE__ */ e.createElement(
    Ye,
    {
      open: !!I,
      onClose: $,
      title: G.name,
      primaryAction: {
        content: "Close",
        onAction: $
      }
    },
    /* @__PURE__ */ e.createElement(Ye.Section, null, /* @__PURE__ */ e.createElement(u, { variant: "bodyMd" }, G.description))
  ));
}, an = ({
  plan: n,
  t: r,
  translatePlanName: d,
  planNameTextVariant: s,
  planDescriptionTextVariant: y
}) => /* @__PURE__ */ e.createElement(_, { gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: s, alignment: "center" }, d ? r(n.name) : n.name), n.description && /* @__PURE__ */ e.createElement(
  u,
  {
    variant: y,
    tone: "subdued",
    alignment: "center"
  },
  r(n.description)
)), ln = ({
  plan: n,
  discount: r,
  t: d,
  priceTextVariant: s,
  useShortFormPlanIntervals: y = !0,
  toggleYearlySubtitle: h = !1
}) => /* @__PURE__ */ e.createElement(_, { gap: "100" }, !!r && /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: s }, pe(
  r.presentmentDiscountedAmount,
  n.presentmentCurrencyCode,
  !0
)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  pe(n.presentmentAmount, n.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, d(L.Per), " ", d(
  _e({
    interval: n.interval,
    useShortFormPlanIntervals: y
  })
))), !r && /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: s }, pe(n.presentmentAmount, n.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, d(L.Per), " ", d(
  _e({
    interval: n.interval,
    useShortFormPlanIntervals: y
  })
))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(_, null, n.usageCharges.map((m, T) => /* @__PURE__ */ e.createElement(
  z,
  {
    key: `plan-usageCharge-${T}`,
    align: "center",
    gap: "100"
  },
  /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Be, tone: "subdued" })),
  /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d(m.terms))
))), h && /* @__PURE__ */ e.createElement(u, { variant: "bodyMd", tone: "subdued", alignment: "center" }, "Billed yearly")), on = ({
  plan: n,
  t: r,
  trialDaysAsFeature: d = !1
}) => /* @__PURE__ */ e.createElement(_, { gap: "300" }, d && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, r(L.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, y) => {
  const h = n.features[s];
  if ((h.type !== "boolean" || h.value === !0) && h.visible)
    return /* @__PURE__ */ e.createElement(z, { key: `plan-feature-${y}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "subdued" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, r(h.name)) : /* @__PURE__ */ e.createElement(u, null, h.value, " ", r(h.name)));
})), cn = ({
  plan: n,
  discount: r,
  buttonLabel: d,
  onSelectPlan: s,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  expanded: m = !1,
  isActivePlan: T = !1,
  isRecommendedPlan: f = !1,
  isCustomPlan: w = !1,
  showRecommendedPlanBadge: P = !0,
  t: O,
  translatePlanName: I = !0,
  planNameTextVariant: x = "headingMd",
  planDescriptionTextVariant: j = "bodyLg",
  priceTextVariant: v = "heading3xl",
  toggleYearlySubtitle: C = !1
}) => {
  const [D, M] = e.useState(!1), N = O || ((S) => S), B = async ({ plan: S, discount: b }) => {
    s ? (M(!0), await s({ plan: S, discount: b }) !== !0 && M(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(re, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    re,
    {
      paddingBlock: m || f ? void 0 : "800",
      minHeight: "100%"
    },
    /* @__PURE__ */ e.createElement(
      re,
      {
        background: f || w ? "bg-surface" : "bg-surface-secondary",
        borderStyle: "solid",
        borderColor: "border",
        borderWidth: "025",
        paddingBlock: m || f ? "1600" : "800",
        paddingInline: "400",
        borderRadius: "200",
        minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
      },
      /* @__PURE__ */ e.createElement(_, { gap: "800" }, /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(
        an,
        {
          plan: n,
          t: N,
          translatePlanName: I,
          planNameTextVariant: x,
          planDescriptionTextVariant: j
        }
      ), /* @__PURE__ */ e.createElement(
        ln,
        {
          plan: n,
          discount: r,
          useShortFormPlanIntervals: y,
          t: N,
          priceTextVariant: v,
          toggleYearlySubtitle: C
        }
      )), /* @__PURE__ */ e.createElement(
        ie,
        {
          size: "large",
          variant: f ? "primary" : "secondary",
          onClick: async () => {
            await B({ plan: n, discount: r });
          },
          disabled: T,
          loading: D
        },
        N(d || L.SelectPlan)
      ), /* @__PURE__ */ e.createElement(
        on,
        {
          plan: n,
          t: N,
          trialDaysAsFeature: h
        }
      ), f && P && /* @__PURE__ */ e.createElement(z, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Ge, { tone: "success" }, N(L.MostPopular))))
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
  onSelectPlan: d,
  planInterval: s,
  cardType: y = be.Horizontal,
  trialDaysAsFeature: h = !0,
  useShortFormPlanIntervals: m = !0,
  keyForRecommended: T = "recommended",
  keyForCustomButtonLabel: f = "buttonLabel",
  showRecommendedPlanBadge: w = !0,
  applyDiscount: P = !0,
  t: O,
  translatePlanName: I = !0,
  toggleYearlySubtitle: x = !1
}) => {
  var B;
  const j = (B = r == null ? void 0 : r.subscription) != null && B.active ? r.subscription : void 0, v = j == null ? void 0 : j.plan, C = s ? n.filter((S) => S.interval === s) : n, D = y === be.Vertical ? 1 : rn(C.length), M = nn(D), N = O || ((S) => S);
  return /* @__PURE__ */ e.createElement(Ce, { columns: D }, C.map((S) => {
    const b = P ? ht({ plan: S }) : void 0, $ = (v == null ? void 0 : v.id) === S.id && !(j != null && j.cancelOn);
    return /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: M, key: S.id }, y === be.Highlighted && /* @__PURE__ */ e.createElement(
      cn,
      {
        key: `HighlightedPlanCard-${S.id}`,
        plan: S,
        discount: b,
        onSelectPlan: d,
        isActivePlan: $,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: m,
        isCustomPlan: S.availability !== "public",
        isRecommendedPlan: Ke({ plan: S, customFieldKey: T }),
        buttonLabel: qe({ plan: S, customFieldKey: f }),
        showRecommendedPlanBadge: w,
        toggleYearlySubtitle: x,
        t: N,
        translatePlanName: I
      }
    ), y === be.Horizontal && /* @__PURE__ */ e.createElement(
      mn,
      {
        key: `HorizontalPlanCard-${S.id}`,
        plan: S,
        discount: b,
        onSelectPlan: d,
        isActivePlan: $,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: m,
        isRecommendedPlan: Ke({ plan: S, customFieldKey: T }),
        buttonLabel: qe({ plan: S, customFieldKey: f }),
        showRecommendedPlanBadge: w,
        toggleYearlySubtitle: x,
        t: N,
        translatePlanName: I
      }
    ));
  }));
}, bn = ({
  customer: n,
  plans: r,
  onSubscribe: d,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: h,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: m = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: T = !0,
  // boolean
  showTrialDaysAsFeature: f = !0,
  // boolean
  useShortFormPlanIntervals: w,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: P = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: O = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: I = !1
  // boolean: toggle monthly pricing
}) => {
  const x = n == null ? void 0 : n.subscription, j = new URLSearchParams(window.location.search), v = r.some(($) => $.interval === K.Annual) && r.some(($) => $.interval === K.Every30Days), C = r.find(($) => $.id === (x == null ? void 0 : x.plan.id)), [D, M] = ve(
    C ? C.interval : v ? K.Annual : K.Every30Days
  ), N = r.filter(($) => $.availability === "public"), B = O ? r.filter(($) => $.availability !== "public") : [], [S, b] = ve(
    j.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: L.Plans,
      backAction: s ? { content: L.Back, url: s } : void 0,
      secondaryActions: T && v ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === K.Every30Days,
          onClick: () => M(K.Every30Days)
        },
        L.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === K.Annual,
          onClick: () => M(K.Annual)
        },
        L.Yearly
      )) : void 0,
      fullWidth: P === "full",
      narrowWidth: P === "narrow"
    },
    /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement(_, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      je,
      {
        tone: "success",
        title: L.SubscribeSuccessTitle,
        onDismiss: () => {
          b(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      L.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: N,
        onSelectPlan: d,
        planInterval: D,
        cardType: be.Horizontal,
        keyForRecommended: m,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: y,
        toggleYearlySubtitle: I
      }
    ), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(Ie, { borderColor: "border" }), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(_, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, L.CustomPlans)), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: B,
        onSelectPlan: d,
        planInterval: D,
        cardType: be.Horizontal,
        keyForRecommended: m,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: y
      }
    )))))
  );
}, sn = ({
  plan: n,
  t: r,
  translatePlanName: d,
  isRecommendedPlan: s = !1,
  planNameTextVariant: y,
  planDescriptionTextVariant: h,
  showRecommendedPlanBadge: m
}) => /* @__PURE__ */ e.createElement(_, { gap: "100" }, /* @__PURE__ */ e.createElement(z, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: y }, d ? r(n.name) : n.name), s && m && /* @__PURE__ */ e.createElement(Ge, { tone: "success" }, r(L.MostPopular))), n.description && /* @__PURE__ */ e.createElement(u, { variant: h, tone: "subdued" }, r(n.description))), un = ({
  plan: n,
  discount: r,
  t: d,
  useShortFormPlanIntervals: s = !0,
  priceTextVariant: y,
  toggleYearlySubtitle: h = !1
}) => /* @__PURE__ */ e.createElement(_, null, r ? /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: y }, pe(
  r.presentmentDiscountedAmount,
  n.presentmentCurrencyCode
)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: y,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  n.presentmentAmount
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, L.Per, " ", _e({
  interval: n.interval,
  useShortFormPlanIntervals: s
}))) : /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: y }, pe(n.presentmentAmount, n.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, L.Per, " ", _e({
  interval: n.interval,
  useShortFormPlanIntervals: s
}))), n.usageCharges && n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(_, null, n.usageCharges.map((m, T) => /* @__PURE__ */ e.createElement(
  z,
  {
    key: `plan-usageCharge-${T}`,
    align: "start",
    gap: "100"
  },
  /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Be, tone: "subdued" })),
  /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d(m.terms))
))), h && /* @__PURE__ */ e.createElement(u, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), dn = ({
  plan: n,
  t: r,
  trialDaysAsFeature: d = !1
}) => /* @__PURE__ */ e.createElement(_, { gap: "100" }, d && n.trialDays && n.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, r(L.FreeTrialLength).replace("{{ trialDays }}", n.trialDays))) : null, n.featuresOrder.map((s, y) => {
  const h = n.features[s];
  if ((h.type !== "boolean" || h.value === !0) && h.visible)
    return /* @__PURE__ */ e.createElement(
      z,
      {
        key: `plan-feature-${y}`,
        align: "start",
        gap: "100",
        wrap: !1
      },
      /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "subdued" })),
      h.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, r(h.name)) : /* @__PURE__ */ e.createElement(u, null, h.value, " ", r(h.name))
    );
})), mn = ({
  plan: n,
  discount: r,
  buttonLabel: d,
  onSelectPlan: s,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: m = !1,
  isActivePlan: T = !1,
  t: f,
  translatePlanName: w = !0,
  showRecommendedPlanBadge: P = !0,
  planNameTextVariant: O = "bodyLg",
  planDescriptionTextVariant: I = "bodyMd",
  priceTextVariant: x = "headingXl",
  toggleYearlySubtitle: j = !1
}) => {
  const [v, C] = e.useState(!1), D = f || ((N) => N), M = async ({ plan: N, discount: B }) => {
    s ? (C(!0), await s({ plan: N, discount: B }) !== !0 && C(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(
    sn,
    {
      plan: n,
      isRecommendedPlan: m,
      showRecommendedPlanBadge: P,
      t: D,
      translatePlanName: w,
      planNameTextVariant: O,
      planDescriptionTextVariant: I
    }
  ), /* @__PURE__ */ e.createElement(
    un,
    {
      plan: n,
      discount: r,
      useShortFormPlanIntervals: y,
      t: D,
      priceTextVariant: x,
      toggleYearlySubtitle: j
    }
  ), /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: m ? "primary" : "secondary",
      onClick: async () => {
        await M({ plan: n, discount: r });
      },
      disabled: T,
      loading: v
    },
    D(
      T ? L.CurrentPlan : d || L.SelectPlan
    )
  ), /* @__PURE__ */ e.createElement(
    dn,
    {
      plan: n,
      trialDaysAsFeature: h,
      t: D
    }
  )));
}, Cn = ({
  customer: n,
  plans: r,
  onSubscribe: d,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: m = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: T = !0,
  // boolean
  showTrialDaysAsFeature: f = !0,
  // boolean
  useShortFormPlanIntervals: w = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: P = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: O = !0,
  // boolean: show custom plans
  toggleYearlySubtitle: I = !1
  // boolean: show monthly pricing for annual plans
}) => {
  const x = n == null ? void 0 : n.subscription, j = new URLSearchParams(window.location.search), v = r.some(($) => $.interval === K.Annual) && r.some(($) => $.interval === K.Every30Days), C = r.find(($) => $.id === (x == null ? void 0 : x.plan.id)), [D, M] = ve(
    C ? C.interval : v ? K.Annual : K.Every30Days
  ), N = r.filter(($) => $.availability === "public"), B = O ? r.filter(($) => $.availability !== "public") : [], [S, b] = ve(
    j.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: L.Plans,
      backAction: s && s !== "" ? { content: L.Back, url: s } : void 0,
      secondaryActions: T && v ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === K.Every30Days,
          onClick: () => M(K.Every30Days)
        },
        L.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: D === K.Annual,
          onClick: () => M(K.Annual)
        },
        L.Yearly
      )) : void 0,
      fullWidth: P === "full",
      narrowWidth: P === "narrow"
    },
    /* @__PURE__ */ e.createElement(re, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement(_, { gap: "1000" }, S && /* @__PURE__ */ e.createElement(
      je,
      {
        tone: "success",
        title: L.SubscribeSuccessTitle,
        onDismiss: () => {
          b(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      L.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: N,
        onSelectPlan: d,
        planInterval: D,
        cardType: be.Highlighted,
        keyForRecommended: m,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: y,
        toggleYearlySubtitle: I
      }
    ), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(Ie, { borderColor: "border" }), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(_, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, L.CustomPlans)), /* @__PURE__ */ e.createElement(
      Fe,
      {
        plans: B,
        onSelectPlan: d,
        planInterval: D,
        cardType: be.Highlighted,
        keyForRecommended: m,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: f,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: y
      }
    ))))))
  );
}, fn = ({
  plan: n,
  discount: r,
  buttonLabel: d,
  onSelectPlan: s,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: m = !1,
  isActivePlan: T = !1,
  t: f = _t,
  translatePlanName: w = !0,
  showRecommendedPlanBadge: P = !0,
  planNameTextVariant: O = "bodyLg",
  planDescriptionTextVariant: I = "bodyMd",
  priceTextVariant: x = "headingXl",
  toggleYearlySubtitle: j = !1
}) => {
  const [v, C] = e.useState(!1), D = async ({ plan: b, discount: $ }) => {
    s ? (C(!0), await s({ plan: b, discount: $ }) !== !0 && C(!1)) : console.log("No onSelectPlan callback provided");
  }, M = ({ plan: b }) => /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, { variant: O }, w ? f(b.name) : b.name), b.description && /* @__PURE__ */ e.createElement(u, { variant: I, tone: "subdued" }, f(b.description))), N = ({ plan: b }) => /* @__PURE__ */ e.createElement(_, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { fontWeight: "medium" }, f(L.Features)), /* @__PURE__ */ e.createElement(_, { gap: "100" }, h && b.trialDays && b.trialDays > 0 ? /* @__PURE__ */ e.createElement(z, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, f(
    L.FreeTrialLength.replace(
      "{{ trialDays }}",
      b.trialDays
    )
  ))) : null, b.featuresOrder.map(($, G) => {
    const q = b.features[$];
    if ((q.type !== "boolean" || q.value === !0) && q.visible)
      return /* @__PURE__ */ e.createElement(
        z,
        {
          key: `plan-feature-${G}`,
          align: "start",
          gap: "100"
        },
        /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Se, tone: "positive" })),
        q.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, q.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, q.value, " ", q.name)
      );
  }))), B = ({ plan: b, discount: $, toggleYearlySubtitle: G }) => /* @__PURE__ */ e.createElement(_, { gap: "100" }, $ ? /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: x }, pe(
    $.presentmentDiscountedAmount,
    b.presentmentCurrencyCode
  )), /* @__PURE__ */ e.createElement(
    u,
    {
      variant: x,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    b.presentmentAmount
  ), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, L.Per, " ", _e({
    interval: b.interval,
    useShortFormPlanIntervals: y
  }))) : /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: x }, pe(b.presentmentAmount, b.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, L.Per, " ", _e({
    interval: b.interval,
    useShortFormPlanIntervals: y
  }))), b.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(_, null, b.usageCharges.map((q, g) => /* @__PURE__ */ e.createElement(
    z,
    {
      key: `plan-usageCharge-${g}`,
      align: "start",
      gap: "100"
    },
    /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(ge, { source: Be, tone: "positive" })),
    /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, q.terms)
  ))), G && /* @__PURE__ */ e.createElement(u, { variant: "bodyMd", tone: "subdued", alignment: "left" }, "Billed yearly")), S = ({ plan: b, discount: $ }) => /* @__PURE__ */ e.createElement(z, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    ie,
    {
      size: "large",
      variant: m ? "primary" : "secondary",
      onClick: async () => {
        await D({ plan: b, discount: $ });
      },
      disabled: T,
      loading: v
    },
    f(
      T ? L.CurrentPlan : d || L.SelectPlan
    )
  ), m && P && /* @__PURE__ */ e.createElement(Ge, { tone: "success" }, f(L.MostPopular)));
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(Ce, null, /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(_, { gap: "300" }, M({ plan: n }), B({ plan: n, discount: r, toggleYearlySubtitle: j }), /* @__PURE__ */ e.createElement(re, null, S({ plan: n, discount: r })))), /* @__PURE__ */ e.createElement(Ce.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, N({ plan: n }))));
}, Sn = ({
  plans: n,
  customer: r,
  onSubscribe: d,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: y = "recommended",
  keyForCustomButtonLabel: h = "buttonLabel",
  showPlanIntervalToggle: m = !1,
  // boolean
  trialDaysAsFeature: T = !0,
  // boolean
  useShortFormPlanIntervals: f = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: O = !0,
  // boolean
  applyDiscount: I = !0,
  t: x,
  translatePlanName: j = !0,
  toggleYearlySubtitle: v = !1
}) => {
  var ae;
  const C = new URLSearchParams(window.location.search), D = n.some((F) => F.interval === K.Annual) && n.some((F) => F.interval === K.Every30Days), M = (ae = r == null ? void 0 : r.subscription) != null && ae.active ? r.subscription : void 0, N = M == null ? void 0 : M.plan, [B, S] = ve(
    N ? N.interval : D ? K.Annual : K.Every30Days
  ), b = n.filter(
    (F) => F.availability !== "customerTag" && F.availability !== "customer"
  ), $ = m && D ? b.filter((F) => F.interval === B) : b, G = P ? n.filter(
    (F) => F.availability === "customerTag" || F.availability === "customer"
  ) : [], [q, g] = ve(
    C.get("subscribed") === "true"
  ), Y = x || ((F) => F);
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: L.Plans,
      backAction: s !== "" ? { content: L.Back, url: s } : void 0,
      secondaryActions: m && D ? /* @__PURE__ */ e.createElement(Re, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: B === K.Every30Days,
          onClick: () => S(K.Every30Days)
        },
        L.Monthly
      ), /* @__PURE__ */ e.createElement(
        ie,
        {
          pressed: B === K.Annual,
          onClick: () => S(K.Annual)
        },
        L.Year
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement(_, { gap: "400" }, q && /* @__PURE__ */ e.createElement(
      je,
      {
        tone: "success",
        title: L.SubscribeSuccessTitle,
        onDismiss: () => {
          g(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      L.SubscribeSuccessBody
    ), $.map((F, p) => {
      const o = I ? ht({ plan: F }) : void 0, l = (N == null ? void 0 : N.id) === F.id && !(M != null && M.cancelOn);
      return /* @__PURE__ */ e.createElement(
        fn,
        {
          key: `plan-${p}`,
          plan: F,
          discount: o,
          onSelectPlan: d,
          isActivePlan: l,
          trialDaysAsFeature: T,
          useShortFormPlanIntervals: f,
          isCustomPlan: F.availability !== "public",
          isRecommendedPlan: Ke({ plan: F, customFieldKey: y }),
          buttonLabel: qe({ plan: F, customFieldKey: h }),
          showRecommendedPlanBadge: O,
          t: Y,
          translatePlanName: j,
          toggleYearlySubtitle: v
        }
      );
    }), (G == null ? void 0 : G.length) > 0 && /* @__PURE__ */ e.createElement(Ie, { borderColor: "border" }), (G == null ? void 0 : G.length) > 0 && /* @__PURE__ */ e.createElement(_, { gap: "300" }, /* @__PURE__ */ e.createElement(re, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, L.CustomPlans)), /* @__PURE__ */ e.createElement(Ce, null, G.map((F, p) => {
      var l;
      const o = ((l = F.discounts) == null ? void 0 : l.length) > 0 ? F.discounts.reduce(
        (E, c) => E.discountedAmount < c.discountedAmount ? E : c
      ) : null;
      return /* @__PURE__ */ e.createElement(Ce.Cell, { key: `custom-plan-${p}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(_, { gap: "400" }, titleComponent({ plan: F, discount: o }), pricingComponent({ plan: F, discount: o, toggleYearlySubtitle: v }), ctaComponent({ plan: F, discount: o }), featuresComponent({ plan: F, discount: o }))));
    }))))))
  );
};
var bt = { exports: {} };
(function(n, r) {
  (function(d, s) {
    n.exports = s();
  })(ft, function() {
    var d = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, y, h) {
      var m = y.prototype, T = m.format;
      h.en.formats = d, m.format = function(f) {
        f === void 0 && (f = "YYYY-MM-DDTHH:mm:ssZ");
        var w = this.$locale().formats, P = function(O, I) {
          return O.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, j, v) {
            var C = v && v.toUpperCase();
            return j || I[v] || d[v] || I[C].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(D, M, N) {
              return M || N.slice(1);
            });
          });
        }(f, w === void 0 ? {} : w);
        return T.call(this, P);
      };
    };
  });
})(bt);
var gn = bt.exports;
const vn = /* @__PURE__ */ gt(gn);
Le.extend(vn);
const Ze = ({
  orientation: n = "horizontal",
  onShowPlans: r,
  onCancelPlan: d,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: y = async () => {
  },
  i18n: h,
  subscription: m,
  refetch: T = async () => {
  },
  t: f,
  translatePlanName: w = !0,
  hideSelectPlanButton: P = !1
}) => {
  var q;
  const [O, I] = ve(!1), [x, j] = ve(!1), v = f || ((g) => g), C = {
    ...L,
    ...h || {}
  };
  if (!m)
    return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(_, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, v(C.Subscription)), /* @__PURE__ */ e.createElement(u, null, v(C.NotSubscribed)), /* @__PURE__ */ e.createElement(z, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, !P && /* @__PURE__ */ e.createElement(
      ie,
      {
        variant: "primary",
        onClick: r,
        accessibilityLabel: v(C.ChangePlan)
      },
      v(C.SelectPlan)
    )))));
  const { plan: D } = m, M = pe(m.presentmentTotal, D.presentmentCurrencyCode), N = v(D.interval === K.Annual ? C.Year : C.Month), B = n === "horizontal" ? Zt : _, S = (q = m == null ? void 0 : m.appliedDiscount) == null ? void 0 : q.discount, b = S ? S.percentage ? `${S.percentage}%` : pe(S.presentmentAmount, D.presentmentCurrencyCode) : null, $ = S && m.appliedDiscount.discountEndsAt && Le().isAfter(Le(m.appliedDiscount.discountEndsAt)), G = D.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ke, null, /* @__PURE__ */ e.createElement(_, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, v(C.Subscription)), /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(B, { columns: G, gap: "300" }, /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, null, v(C.CurrentPlan)), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, w ? v(D.name) : D.name), m.cancelOn && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, v("Canceled, active until {{ date }}").replace("{{ date }}", Le(m.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, null, v(C.Price)), /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, v(C.AmountPerInterval).replace("{{ amount }}", M).replace("{{ interval }}", N)), S && !$ && /* @__PURE__ */ e.createElement(u, { tone: "success" }, v(C.DiscountAmount).replace("{{ amount }}", b)), S && $ && /* @__PURE__ */ e.createElement(u, { tone: "subdued", textDecorationLine: "line-through" }, v(C.DiscountAmountExpired).replace("{{ amount }}", b)))), D.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(_, null, /* @__PURE__ */ e.createElement(u, null, v(C.UsageCharges || "Usage charges")), D.usageCharges.map((g, Y) => /* @__PURE__ */ e.createElement(u, { key: `usage-charge-${Y}`, tone: "subdued" }, v(g.terms))))), /* @__PURE__ */ e.createElement(z, { align: "end" }, /* @__PURE__ */ e.createElement(Re, null, /* @__PURE__ */ e.createElement(
    ie,
    {
      onClick: () => {
        d ? d() : I(!0);
      },
      accessibilityLabel: v(C.CancelPlan),
      tone: "critical",
      disabled: !!m.cancelOn
    },
    v(C.CancelPlan)
  ), !P && /* @__PURE__ */ e.createElement(
    ie,
    {
      variant: "primary",
      onClick: r,
      accessibilityLabel: v(C.ChangePlan)
    },
    v(C.ChangePlan)
  ))))), O && /* @__PURE__ */ e.createElement(
    Ye,
    {
      open: !0,
      onClose: () => I(!1),
      title: v(C.CancelPlan),
      primaryAction: {
        content: v(C.CancelPlan),
        destructive: !0,
        loading: x,
        disabled: x,
        onAction: async () => {
          j(!0), await y(), await T(), j(!1), I(!1), s();
        }
      },
      secondaryActions: [
        {
          content: v(C.Back),
          disabled: x,
          onAction: () => I(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(Ye.Section, null, v(C.CancelConfirmation))
  ));
}, wn = ({
  backUrl: n = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: r = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: d, i18n: s, subscription: y, refetch: h } = Xt(), m = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    Ne,
    {
      title: s.Subscription,
      backAction: n ? { content: s.Back, url: n } : void 0,
      fullWidth: r === "full",
      narrowWidth: r === "narrow"
    },
    /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Ze,
      {
        onShowPlans: m,
        cancelSubscription: d,
        i18n: s,
        subscription: y,
        refetch: h
      }
    ), /* @__PURE__ */ e.createElement(Ee, null, /* @__PURE__ */ e.createElement(Ee.Section, null, /* @__PURE__ */ e.createElement(
      Ze,
      {
        onShowPlans: m,
        cancelSubscription: d,
        i18n: s,
        subscription: y,
        refetch: h
      }
    )), /* @__PURE__ */ e.createElement(Ee.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Ze,
      {
        onShowPlans: m,
        cancelSubscription: d,
        i18n: s,
        subscription: y,
        refetch: h,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  pn as BundleCard,
  yn as ChecklistCard,
  cn as HighlightedPlanCard,
  Cn as HighlightedPlanCards,
  mn as HorizontalPlanCard,
  bn as HorizontalPlanCards,
  Fe as PlanCardStack,
  be as PlanCardType,
  Ze as SubscriptionSummaryCard,
  wn as SubscriptionSummaryPage,
  fn as VerticalPlanCard,
  Sn as VerticalPlanCards
};
