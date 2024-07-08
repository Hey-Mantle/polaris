import e, { createContext as Ye, useContext as xe, useState as te } from "react";
import { Banner as ye, BlockStack as D, Text as u, InlineStack as I, Thumbnail as Be, Button as Z, Divider as ve, Box as U, Badge as De, Icon as V, Grid as re, Page as pe, ButtonGroup as me, Layout as X, Card as ge, Modal as Me, InlineGrid as Oe } from "@shopify/polaris";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ae = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(we, function() {
    var c = 1e3, s = 6e4, f = 36e5, m = "millisecond", o = "second", B = "minute", v = "hour", M = "day", F = "week", P = "month", O = "quarter", A = "year", g = "date", h = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(d) {
      var r = ["th", "st", "nd", "rd"], a = d % 100;
      return "[" + d + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, w = function(d, r, a) {
      var i = String(d);
      return !i || i.length >= r ? d : "" + Array(r + 1 - i.length).join(a) + d;
    }, C = { s: w, z: function(d) {
      var r = -d.utcOffset(), a = Math.abs(r), i = Math.floor(a / 60), l = a % 60;
      return (r <= 0 ? "+" : "-") + w(i, 2, "0") + ":" + w(l, 2, "0");
    }, m: function d(r, a) {
      if (r.date() < a.date())
        return -d(a, r);
      var i = 12 * (a.year() - r.year()) + (a.month() - r.month()), l = r.clone().add(i, P), p = a - l < 0, b = r.clone().add(i + (p ? -1 : 1), P);
      return +(-(i + (a - l) / (p ? l - b : b - l)) || 0);
    }, a: function(d) {
      return d < 0 ? Math.ceil(d) || 0 : Math.floor(d);
    }, p: function(d) {
      return { M: P, y: A, w: F, d: M, D: g, h: v, m: B, s: o, ms: m, Q: O }[d] || String(d || "").toLowerCase().replace(/s$/, "");
    }, u: function(d) {
      return d === void 0;
    } }, y = "en", E = {};
    E[y] = x;
    var N = "$isDayjsObject", j = function(d) {
      return d instanceof k || !(!d || !d[N]);
    }, G = function d(r, a, i) {
      var l;
      if (!r)
        return y;
      if (typeof r == "string") {
        var p = r.toLowerCase();
        E[p] && (l = p), a && (E[p] = a, l = p);
        var b = r.split("-");
        if (!l && b.length > 1)
          return d(b[0]);
      } else {
        var T = r.name;
        E[T] = r, l = T;
      }
      return !i && l && (y = l), l || !i && y;
    }, _ = function(d, r) {
      if (j(d))
        return d.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = d, a.args = arguments, new k(a);
    }, Y = C;
    Y.l = G, Y.i = j, Y.w = function(d, r) {
      return _(d, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var k = function() {
      function d(a) {
        this.$L = G(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[N] = !0;
      }
      var r = d.prototype;
      return r.parse = function(a) {
        this.$d = function(i) {
          var l = i.date, p = i.utc;
          if (l === null)
            return /* @__PURE__ */ new Date(NaN);
          if (Y.u(l))
            return /* @__PURE__ */ new Date();
          if (l instanceof Date)
            return new Date(l);
          if (typeof l == "string" && !/Z$/i.test(l)) {
            var b = l.match($);
            if (b) {
              var T = b[2] - 1 || 0, z = (b[7] || "0").substring(0, 3);
              return p ? new Date(Date.UTC(b[1], T, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, z)) : new Date(b[1], T, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, z);
            }
          }
          return new Date(l);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return Y;
      }, r.isValid = function() {
        return this.$d.toString() !== h;
      }, r.isSame = function(a, i) {
        var l = _(a);
        return this.startOf(i) <= l && l <= this.endOf(i);
      }, r.isAfter = function(a, i) {
        return _(a) < this.startOf(i);
      }, r.isBefore = function(a, i) {
        return this.endOf(i) < _(a);
      }, r.$g = function(a, i, l) {
        return Y.u(a) ? this[i] : this.set(l, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, i) {
        var l = this, p = !!Y.u(i) || i, b = Y.p(a), T = function(ae, R) {
          var q = Y.w(l.$u ? Date.UTC(l.$y, R, ae) : new Date(l.$y, R, ae), l);
          return p ? q : q.endOf(M);
        }, z = function(ae, R) {
          return Y.w(l.toDate()[ae].apply(l.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), l);
        }, W = this.$W, K = this.$M, J = this.$D, se = "set" + (this.$u ? "UTC" : "");
        switch (b) {
          case A:
            return p ? T(1, 0) : T(31, 11);
          case P:
            return p ? T(1, K) : T(0, K + 1);
          case F:
            var ne = this.$locale().weekStart || 0, ue = (W < ne ? W + 7 : W) - ne;
            return T(p ? J - ue : J + (6 - ue), K);
          case M:
          case g:
            return z(se + "Hours", 0);
          case v:
            return z(se + "Minutes", 1);
          case B:
            return z(se + "Seconds", 2);
          case o:
            return z(se + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, i) {
        var l, p = Y.p(a), b = "set" + (this.$u ? "UTC" : ""), T = (l = {}, l[M] = b + "Date", l[g] = b + "Date", l[P] = b + "Month", l[A] = b + "FullYear", l[v] = b + "Hours", l[B] = b + "Minutes", l[o] = b + "Seconds", l[m] = b + "Milliseconds", l)[p], z = p === M ? this.$D + (i - this.$W) : i;
        if (p === P || p === A) {
          var W = this.clone().set(g, 1);
          W.$d[T](z), W.init(), this.$d = W.set(g, Math.min(this.$D, W.daysInMonth())).$d;
        } else
          T && this.$d[T](z);
        return this.init(), this;
      }, r.set = function(a, i) {
        return this.clone().$set(a, i);
      }, r.get = function(a) {
        return this[Y.p(a)]();
      }, r.add = function(a, i) {
        var l, p = this;
        a = Number(a);
        var b = Y.p(i), T = function(K) {
          var J = _(p);
          return Y.w(J.date(J.date() + Math.round(K * a)), p);
        };
        if (b === P)
          return this.set(P, this.$M + a);
        if (b === A)
          return this.set(A, this.$y + a);
        if (b === M)
          return T(1);
        if (b === F)
          return T(7);
        var z = (l = {}, l[B] = s, l[v] = f, l[o] = c, l)[b] || 1, W = this.$d.getTime() + a * z;
        return Y.w(W, this);
      }, r.subtract = function(a, i) {
        return this.add(-1 * a, i);
      }, r.format = function(a) {
        var i = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || h;
        var p = a || "YYYY-MM-DDTHH:mm:ssZ", b = Y.z(this), T = this.$H, z = this.$m, W = this.$M, K = l.weekdays, J = l.months, se = l.meridiem, ne = function(R, q, de, he) {
          return R && (R[q] || R(i, p)) || de[q].slice(0, he);
        }, ue = function(R) {
          return Y.s(T % 12 || 12, R, "0");
        }, ae = se || function(R, q, de) {
          var he = R < 12 ? "AM" : "PM";
          return de ? he.toLowerCase() : he;
        };
        return p.replace(H, function(R, q) {
          return q || function(de) {
            switch (de) {
              case "YY":
                return String(i.$y).slice(-2);
              case "YYYY":
                return Y.s(i.$y, 4, "0");
              case "M":
                return W + 1;
              case "MM":
                return Y.s(W + 1, 2, "0");
              case "MMM":
                return ne(l.monthsShort, W, J, 3);
              case "MMMM":
                return ne(J, W);
              case "D":
                return i.$D;
              case "DD":
                return Y.s(i.$D, 2, "0");
              case "d":
                return String(i.$W);
              case "dd":
                return ne(l.weekdaysMin, i.$W, K, 2);
              case "ddd":
                return ne(l.weekdaysShort, i.$W, K, 3);
              case "dddd":
                return K[i.$W];
              case "H":
                return String(T);
              case "HH":
                return Y.s(T, 2, "0");
              case "h":
                return ue(1);
              case "hh":
                return ue(2);
              case "a":
                return ae(T, z, !0);
              case "A":
                return ae(T, z, !1);
              case "m":
                return String(z);
              case "mm":
                return Y.s(z, 2, "0");
              case "s":
                return String(i.$s);
              case "ss":
                return Y.s(i.$s, 2, "0");
              case "SSS":
                return Y.s(i.$ms, 3, "0");
              case "Z":
                return b;
            }
            return null;
          }(R) || b.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, i, l) {
        var p, b = this, T = Y.p(i), z = _(a), W = (z.utcOffset() - this.utcOffset()) * s, K = this - z, J = function() {
          return Y.m(b, z);
        };
        switch (T) {
          case A:
            p = J() / 12;
            break;
          case P:
            p = J();
            break;
          case O:
            p = J() / 3;
            break;
          case F:
            p = (K - W) / 6048e5;
            break;
          case M:
            p = (K - W) / 864e5;
            break;
          case v:
            p = K / f;
            break;
          case B:
            p = K / s;
            break;
          case o:
            p = K / c;
            break;
          default:
            p = K;
        }
        return l ? p : Y.a(p);
      }, r.daysInMonth = function() {
        return this.endOf(P).$D;
      }, r.$locale = function() {
        return E[this.$L];
      }, r.locale = function(a, i) {
        if (!a)
          return this.$L;
        var l = this.clone(), p = G(a, i, !0);
        return p && (l.$L = p), l;
      }, r.clone = function() {
        return Y.w(this.$d, this);
      }, r.toDate = function() {
        return new Date(this.valueOf());
      }, r.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, r.toISOString = function() {
        return this.$d.toISOString();
      }, r.toString = function() {
        return this.$d.toUTCString();
      }, d;
    }(), ce = k.prototype;
    return _.prototype = ce, [["$ms", m], ["$s", o], ["$m", B], ["$H", v], ["$W", M], ["$M", P], ["$y", A], ["$D", g]].forEach(function(d) {
      ce[d[1]] = function(r) {
        return this.$g(r, d[0], d[1]);
      };
    }), _.extend = function(d, r) {
      return d.$i || (d(r, k, _), d.$i = !0), _;
    }, _.locale = G, _.isDayjs = j, _.unix = function(d) {
      return _(1e3 * d);
    }, _.en = E[y], _.Ls = E, _.p = {}, _;
  });
})(Ae);
var Fe = Ae.exports;
const fe = /* @__PURE__ */ Pe(Fe), L = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ie = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, S = {
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
  UsageCharges: "Usage charges"
}, He = Ye(), Te = () => {
  const t = xe(He);
  if (t === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return t;
}, Ie = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), Q = (t, n = "USD", c = !0) => {
  let s = Ie(n).format(t);
  return c && (s = s.replace(/\.00$/, "")), s;
}, _e = (t = L.Every30Days) => {
  switch (t) {
    case L.Annual:
      return "year";
    case L.Every30Days:
    default:
      return "month";
  }
}, ze = (t = L.Every30Days) => {
  switch (t) {
    case L.Annual:
      return "yr";
    case L.Every30Days:
    default:
      return "mo";
  }
}, oe = ({
  interval: t = L.Every30Days,
  useShortFormPlanIntervals: n = !0
}) => n ? ze(t) : _e(t), Ce = ({ plan: t, customFieldKey: n = "recommended" }) => {
  var c;
  return !!((c = t.customFields) != null && c[n]);
}, $e = ({ plan: t, customFieldKey: n = "buttonLabel" }) => {
  var c;
  return ((c = t.customFields) == null ? void 0 : c[n]) || S.SelectPlan;
}, ke = ({ plan: t }) => {
  var n;
  return ((n = t.discounts) == null ? void 0 : n.length) > 0 ? t.discounts.reduce(
    (c, s) => c.discountedAmount < s.discountedAmount ? c : s
  ) : void 0;
}, We = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, Ne = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4, nt = ({
  orientation: t = "horizontal",
  onShowPlans: n,
  onCancelPlan: c,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: f = async () => {
  },
  i18n: m,
  subscription: o,
  refetch: B = async () => {
  },
  apps: v = []
}) => /* @__PURE__ */ e.createElement(ye, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(D, { gap: "400" }, /* @__PURE__ */ e.createElement(u, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(D, { gap: "300" }, v.map((M, F) => /* @__PURE__ */ e.createElement(D, { gap: "300" }, /* @__PURE__ */ e.createElement(I, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(I, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Be,
  {
    source: M.iconUrl,
    alt: M.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, { variant: "headingSm" }, M.name), /* @__PURE__ */ e.createElement(u, null, M.description))), /* @__PURE__ */ e.createElement(I, { gap: "400" }, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(Z, null, m.Install)))), F < v.length - 1 && /* @__PURE__ */ e.createElement(ve, null))))));
var le = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
le.displayName = "CheckIcon";
var be = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
be.displayName = "PlusIcon";
const je = ({ plan: t, t: n, translatePlanName: c, planNameTextVariant: s, planDescriptionTextVariant: f }) => /* @__PURE__ */ e.createElement(D, { gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: s, alignment: "center" }, c ? n(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(u, { variant: f, tone: "subdued", alignment: "center" }, n(t.description))), Ue = ({ plan: t, discount: n, t: c, priceTextVariant: s, useShortFormPlanIntervals: f = !0 }) => /* @__PURE__ */ e.createElement(D, { gap: "100" }, !!n && /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: s }, Q(n.presentmentDiscountedAmount, t.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Q(t.presentmentAmount, t.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: f })))), !n && /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: s }, Q(t.presentmentAmount, t.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: f })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(D, null, t.usageCharges.map((m, o) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${o}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: be, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, c(m.terms)))))), Ke = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(D, { gap: "300" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, n(S.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, f) => {
  const m = t.features[s];
  if (m.type !== "boolean" || m.value === !0)
    return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${f}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "subdued" })), m.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, n(m.name)) : /* @__PURE__ */ e.createElement(u, null, m.value, " ", n(m.name)));
})), Re = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: f = !0,
  trialDaysAsFeature: m = !1,
  expanded: o = !1,
  isActivePlan: B = !1,
  isRecommendedPlan: v = !1,
  isCustomPlan: M = !1,
  showRecommendedPlanBadge: F = !0,
  t: P,
  translatePlanName: O = !0,
  planNameTextVariant: A = "headingMd",
  planDescriptionTextVariant: g = "bodyLg",
  priceTextVariant: h = "heading3xl"
}) => {
  const [$, H] = e.useState(!1), x = P || ((C) => C), w = async ({ plan: C, discount: y }) => {
    s ? (H(!0), await s({ plan: C, discount: y }) !== !0 && H(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(U, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(U, { paddingBlock: o || v ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    U,
    {
      background: v || M ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: o || v ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(D, { gap: "800" }, /* @__PURE__ */ e.createElement(D, { gap: "400" }, /* @__PURE__ */ e.createElement(
      je,
      {
        plan: t,
        t: x,
        translatePlanName: O,
        planNameTextVariant: A,
        planDescriptionTextVariant: g
      }
    ), /* @__PURE__ */ e.createElement(
      Ue,
      {
        plan: t,
        discount: n,
        useShortFormPlanIntervals: f,
        t: x,
        priceTextVariant: h
      }
    )), /* @__PURE__ */ e.createElement(
      Z,
      {
        size: "large",
        variant: v ? "primary" : "secondary",
        onClick: async () => {
          await w({ plan: t, discount: n });
        },
        disabled: B,
        loading: $
      },
      x(c || S.SelectPlan)
    ), /* @__PURE__ */ e.createElement(Ke, { plan: t, t: x, trialDaysAsFeature: m }), v && F && /* @__PURE__ */ e.createElement(I, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(De, { tone: "success" }, x(S.MostPopular))))
  )));
}, ee = {
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
}, Ee = ({
  plans: t,
  customer: n,
  onSelectPlan: c,
  planInterval: s,
  cardType: f = ee.Horizontal,
  trialDaysAsFeature: m = !0,
  useShortFormPlanIntervals: o = !0,
  keyForRecommended: B = "recommended",
  keyForCustomButtonLabel: v = "buttonLabel",
  showRecommendedPlanBadge: M = !0,
  applyDiscount: F = !0,
  t: P,
  translatePlanName: O = !0
}) => {
  var w;
  const A = (w = n == null ? void 0 : n.subscription) != null && w.active ? n.subscription : void 0, g = A == null ? void 0 : A.plan, h = s ? t.filter((C) => C.interval === s) : t, $ = f === ee.Vertical ? 1 : Ne(h.length), H = We($), x = P || ((C) => C);
  return /* @__PURE__ */ e.createElement(re, { columns: $ }, h.map((C) => {
    const y = F ? ke({ plan: C }) : void 0, E = (g == null ? void 0 : g.id) === C.id && !(A != null && A.cancelOn);
    return /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: H, key: C.id }, f === ee.Highlighted && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HighlightedPlanCard-${C.id}`,
        plan: C,
        discount: y,
        onSelectPlan: c,
        isActivePlan: E,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: o,
        isCustomPlan: C.availability !== ie.Public,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: B }),
        buttonLabel: $e({ plan: C, customFieldKey: v }),
        showRecommendedPlanBadge: M,
        t: x,
        translatePlanName: O
      }
    ), f === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Ve,
      {
        key: `HorizontalPlanCard-${C.id}`,
        plan: C,
        discount: y,
        onSelectPlan: c,
        isActivePlan: E,
        trialDaysAsFeature: m,
        useShortFormPlanIntervals: o,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: B }),
        buttonLabel: $e({ plan: C, customFieldKey: v }),
        showRecommendedPlanBadge: M,
        t: x,
        translatePlanName: O
      }
    ));
  }));
}, at = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: f = !0,
  // boolean
  customFieldCta: m,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: o = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: B = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: M,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: F = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), g = n.some((E) => E.interval === L.Annual) && n.some((E) => E.interval === L.Every30Days), h = n.find((E) => E.id === (O == null ? void 0 : O.plan.id)), [$, H] = te(
    h ? h.interval : g ? L.Annual : L.Every30Days
  ), x = n.filter((E) => E.availability === ie.Public), w = P ? n.filter((E) => E.availability !== ie.Public) : [], [C, y] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s ? { content: S.Back, url: s } : void 0,
      secondaryActions: B && g ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Every30Days,
          onClick: () => H(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Annual,
          onClick: () => H(L.Annual)
        },
        S.Yearly
      )) : void 0,
      fullWidth: F === "full",
      narrowWidth: F === "narrow"
    },
    /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement(D, { gap: "1000" }, C && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          y(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: x,
        onSelectPlan: c,
        planInterval: $,
        cardType: ee.Horizontal,
        keyForRecommended: o,
        keyForCustomButtonLabel: m,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: f
      }
    ), (w == null ? void 0 : w.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (w == null ? void 0 : w.length) > 0 && /* @__PURE__ */ e.createElement(D, { gap: "300" }, /* @__PURE__ */ e.createElement(U, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: w,
        onSelectPlan: c,
        planInterval: $,
        cardType: ee.Horizontal,
        keyForRecommended: o,
        keyForCustomButtonLabel: m,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: f
      }
    )))))
  );
}, Ze = ({ plan: t, t: n, translatePlanName: c, isRecommendedPlan: s = !1, planNameTextVariant: f, planDescriptionTextVariant: m, showRecommendedPlanBadge: o }) => /* @__PURE__ */ e.createElement(D, { gap: "100" }, /* @__PURE__ */ e.createElement(I, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: f }, c ? n(t.name) : t.name), s && o && /* @__PURE__ */ e.createElement(De, { tone: "success" }, n(S.MostPopular))), t.description && /* @__PURE__ */ e.createElement(u, { variant: m, tone: "subdued" }, n(t.description))), Je = ({ plan: t, discount: n, t: c, useShortFormPlanIntervals: s = !0, priceTextVariant: f }) => /* @__PURE__ */ e.createElement(D, null, !!n && /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: f }, Q(n.presentmentDiscountedAmount, t.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: f,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.presentmentAmount
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: s })))), !n && /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: f }, Q(t.presentmentAmount, t.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: s })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(D, null, t.usageCharges.map((m, o) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${o}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: be, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, c(m.terms)))))), Ge = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(D, { gap: "100" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, n(S.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, f) => {
  const m = t.features[s];
  if (m.type !== "boolean" || m.value === !0)
    return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${f}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "subdued" })), m.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, n(m.name)) : /* @__PURE__ */ e.createElement(u, null, m.value, " ", n(m.name)));
})), Ve = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: f = !0,
  trialDaysAsFeature: m = !1,
  isRecommendedPlan: o = !1,
  isActivePlan: B = !1,
  t: v,
  translatePlanName: M = !0,
  showRecommendedPlanBadge: F = !0,
  planNameTextVariant: P = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: A = "headingXl"
}) => {
  const [g, h] = e.useState(!1), $ = v || ((x) => x), H = async ({ plan: x, discount: w }) => {
    s ? (h(!0), await s({ plan: x, discount: w }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(D, { gap: "400" }, /* @__PURE__ */ e.createElement(
    Ze,
    {
      plan: t,
      isRecommendedPlan: o,
      showRecommendedPlanBadge: F,
      t: $,
      translatePlanName: M,
      planNameTextVariant: P,
      planDescriptionTextVariant: O
    }
  ), /* @__PURE__ */ e.createElement(
    Je,
    {
      plan: t,
      discount: n,
      useShortFormPlanIntervals: f,
      t: $,
      priceTextVariant: A
    }
  ), /* @__PURE__ */ e.createElement(
    Z,
    {
      size: "large",
      variant: o ? "primary" : "secondary",
      onClick: async () => {
        await H({ plan: t, discount: n });
      },
      disabled: B,
      loading: g
    },
    $(B ? S.CurrentPlan : c || S.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Ge, { plan: t, trialDaysAsFeature: m, t: $ })));
}, rt = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: f = !0,
  // boolean
  customFieldCta: m = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: o = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: B = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: M = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: F = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), g = n.some((E) => E.interval === L.Annual) && n.some((E) => E.interval === L.Every30Days), h = n.find((E) => E.id === (O == null ? void 0 : O.plan.id)), [$, H] = te(
    h ? h.interval : g ? L.Annual : L.Every30Days
  ), x = n.filter((E) => E.availability === ie.Public), w = P ? n.filter((E) => E.availability !== ie.Public) : [], [C, y] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s && s !== "" ? { content: S.Back, url: s } : void 0,
      secondaryActions: B && g ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Every30Days,
          onClick: () => H(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Annual,
          onClick: () => H(L.Annual)
        },
        S.Yearly
      )) : void 0,
      fullWidth: F === "full",
      narrowWidth: F === "narrow"
    },
    /* @__PURE__ */ e.createElement(U, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement(D, { gap: "1000" }, C && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          y(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: x,
        onSelectPlan: c,
        planInterval: $,
        cardType: ee.Highlighted,
        keyForRecommended: o,
        keyForCustomButtonLabel: m,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: f
      }
    ), (w == null ? void 0 : w.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (w == null ? void 0 : w.length) > 0 && /* @__PURE__ */ e.createElement(D, { gap: "300" }, /* @__PURE__ */ e.createElement(U, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: w,
        onSelectPlan: c,
        planInterval: $,
        cardType: ee.Highlighted,
        keyForRecommended: o,
        keyForCustomButtonLabel: m,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: f
      }
    ))))))
  );
}, Xe = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: f = !0,
  trialDaysAsFeature: m = !1,
  isRecommendedPlan: o = !1,
  isActivePlan: B = !1,
  t: v = _t,
  translatePlanName: M = !0,
  showRecommendedPlanBadge: F = !0,
  planNameTextVariant: P = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: A = "headingXl"
}) => {
  const [g, h] = e.useState(!1), $ = async ({ plan: y, discount: E }) => {
    s ? (h(!0), await s({ plan: y, discount: E }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  }, H = ({ plan: y }) => /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, { variant: P }, M ? v(y.name) : y.name), y.description && /* @__PURE__ */ e.createElement(u, { variant: O, tone: "subdued" }, v(y.description))), x = ({ plan: y }) => /* @__PURE__ */ e.createElement(D, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { fontWeight: "medium" }, v(S.Features)), /* @__PURE__ */ e.createElement(D, { gap: "100" }, m && y.trialDays && y.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, v(S.FreeTrialLength.replace("{{ trialDays }}", y.trialDays)))) : null, y.featuresOrder.map((E, N) => {
    const j = y.features[E];
    if (j.type !== "boolean" || j.value === !0)
      return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${N}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: le, tone: "positive" })), j.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, j.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, j.value, " ", j.name));
  }))), w = ({ plan: y, discount: E }) => /* @__PURE__ */ e.createElement(D, { gap: "100" }, E ? /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: A }, Q(E.presentmentDiscountedAmount, y.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
    u,
    {
      variant: A,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    y.presentmentAmount
  ), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, S.Per, " ", oe({ interval: y.interval, useShortFormPlanIntervals: f }))) : /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: A }, Q(y.presentmentAmount, y.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, S.Per, " ", oe({ interval: y.interval, useShortFormPlanIntervals: f }))), y.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(D, null, y.usageCharges.map((N, j) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${j}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(U, null, /* @__PURE__ */ e.createElement(V, { source: be, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, N.terms))))), C = ({ plan: y, discount: E }) => /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    Z,
    {
      size: "large",
      variant: o ? "primary" : "secondary",
      onClick: async () => {
        await $({ plan: y, discount: E });
      },
      disabled: B,
      loading: g
    },
    v(B ? S.CurrentPlan : c || S.SelectPlan)
  ), o && F && /* @__PURE__ */ e.createElement(De, { tone: "success" }, v(S.MostPopular)));
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(D, { gap: "300" }, H({ plan: t }), w({ plan: t, discount: n }), /* @__PURE__ */ e.createElement(U, null, C({ plan: t, discount: n })))), /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, x({ plan: t }))));
}, lt = ({
  plans: t,
  customer: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: f = "recommended",
  keyForCustomButtonLabel: m = "buttonLabel",
  showPlanIntervalToggle: o = !1,
  // boolean
  trialDaysAsFeature: B = !0,
  // boolean
  useShortFormPlanIntervals: v = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: M = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: F = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: P = !0,
  // boolean
  applyDiscount: O = !0,
  t: A,
  translatePlanName: g = !0
}) => {
  var Y;
  const h = new URLSearchParams(window.location.search), $ = t.some((k) => k.interval === L.Annual) && t.some((k) => k.interval === L.Every30Days), H = (Y = n == null ? void 0 : n.subscription) != null && Y.active ? n.subscription : void 0, x = H == null ? void 0 : H.plan, [w, C] = te(
    x ? x.interval : $ ? L.Annual : L.Every30Days
  ), y = t.filter(
    (k) => k.availability !== "customerTag" && k.availability !== "customer"
  ), E = o && $ ? y.filter((k) => k.interval === w) : y, N = F ? t.filter(
    (k) => k.availability === "customerTag" || k.availability === "customer"
  ) : [], [j, G] = te(
    h.get("subscribed") === "true"
  ), _ = A || ((k) => k);
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s !== "" ? { content: S.Back, url: s } : void 0,
      secondaryActions: o && $ ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: w === L.Every30Days,
          onClick: () => C(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: w === L.Annual,
          onClick: () => C(L.Annual)
        },
        S.Year
      )) : void 0,
      fullWidth: M === "full",
      narrowWidth: M === "narrow"
    },
    /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement(D, { gap: "400" }, j && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          G(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), E.map((k, ce) => {
      const d = O ? ke({ plan: k }) : void 0, r = (x == null ? void 0 : x.id) === k.id && !(H != null && H.cancelOn);
      return /* @__PURE__ */ e.createElement(
        Xe,
        {
          key: `plan-${ce}`,
          plan: k,
          discount: d,
          onSelectPlan: c,
          isActivePlan: r,
          trialDaysAsFeature: B,
          useShortFormPlanIntervals: v,
          isCustomPlan: k.availability !== ie.Public,
          isRecommendedPlan: Ce({ plan: k, customFieldKey: f }),
          buttonLabel: $e({ plan: k, customFieldKey: m }),
          showRecommendedPlanBadge: P,
          t: _,
          translatePlanName: g
        }
      );
    }), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (N == null ? void 0 : N.length) > 0 && /* @__PURE__ */ e.createElement(D, { gap: "300" }, /* @__PURE__ */ e.createElement(U, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(re, null, N.map((k, ce) => {
      var r;
      const d = ((r = k.discounts) == null ? void 0 : r.length) > 0 ? k.discounts.reduce(
        (a, i) => a.discountedAmount < i.discountedAmount ? a : i
      ) : null;
      return /* @__PURE__ */ e.createElement(re.Cell, { key: `custom-plan-${ce}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(D, { gap: "400" }, titleComponent({ plan: k, discount: d }), pricingComponent({ plan: k, discount: d }), ctaComponent({ plan: k, discount: d }), featuresComponent({ plan: k, discount: d }))));
    }))))))
  );
};
var Le = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(we, function() {
    var c = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, f, m) {
      var o = f.prototype, B = o.format;
      m.en.formats = c, o.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var M = this.$locale().formats, F = function(P, O) {
          return P.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, g, h) {
            var $ = h && h.toUpperCase();
            return g || O[h] || c[h] || O[$].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, x, w) {
              return x || w.slice(1);
            });
          });
        }(v, M === void 0 ? {} : M);
        return B.call(this, F);
      };
    };
  });
})(Le);
var Qe = Le.exports;
const qe = /* @__PURE__ */ Pe(Qe);
fe.extend(qe);
const Se = ({
  orientation: t = "horizontal",
  onShowPlans: n,
  onCancelPlan: c,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: f = async () => {
  },
  i18n: m,
  subscription: o,
  refetch: B = async () => {
  },
  t: v,
  translatePlanName: M = !0
}) => {
  var j;
  const [F, P] = te(!1), [O, A] = te(!1), g = v || ((G) => G), h = {
    ...S,
    ...m || {}
  };
  if (!o)
    return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(D, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, g(h.Subscription)), /* @__PURE__ */ e.createElement(u, null, g(h.NotSubscribed)), /* @__PURE__ */ e.createElement(I, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(
      Z,
      {
        variant: "primary",
        onClick: n,
        accessibilityLabel: g(h.ChangePlan)
      },
      g(h.SelectPlan)
    )))));
  const { plan: $ } = o, H = Q(o.presentmentTotal, $.presentmentCurrencyCode), x = g($.interval === L.Annual ? h.Year : h.Month), w = t === "horizontal" ? Oe : D, C = (j = o == null ? void 0 : o.appliedDiscount) == null ? void 0 : j.discount, y = C ? C.percentage ? `${C.percentage}%` : Q(C.presentmentAmount, $.presentmentCurrencyCode) : null, E = C && o.appliedDiscount.discountEndsAt && fe().isAfter(fe(o.appliedDiscount.discountEndsAt)), N = $.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(D, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, g(h.Subscription)), /* @__PURE__ */ e.createElement(D, { gap: "400" }, /* @__PURE__ */ e.createElement(w, { columns: N, gap: "300" }, /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, null, g(h.CurrentPlan)), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, M ? g($.name) : $.name), o.cancelOn && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g("Canceled, active until {{ date }}").replace("{{ date }}", fe(o.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, null, g(h.Price)), /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g(h.AmountPerInterval).replace("{{ amount }}", H).replace("{{ interval }}", x)), C && !E && /* @__PURE__ */ e.createElement(u, { tone: "success" }, g(h.DiscountAmount).replace("{{ amount }}", y)), C && E && /* @__PURE__ */ e.createElement(u, { tone: "subdued", textDecorationLine: "line-through" }, g(h.DiscountAmountExpired).replace("{{ amount }}", y)))), $.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(D, null, /* @__PURE__ */ e.createElement(u, null, g(h.UsageCharges || "Usage charges")), $.usageCharges.map((G, _) => /* @__PURE__ */ e.createElement(u, { key: `usage-charge-${_}`, tone: "subdued" }, g(G.terms))))), /* @__PURE__ */ e.createElement(I, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(
    Z,
    {
      onClick: () => {
        c ? c() : P(!0);
      },
      accessibilityLabel: g(h.CancelPlan),
      tone: "critical",
      disabled: !!o.cancelOn
    },
    g(h.CancelPlan)
  ), /* @__PURE__ */ e.createElement(
    Z,
    {
      variant: "primary",
      onClick: n,
      accessibilityLabel: g(h.ChangePlan)
    },
    g(h.ChangePlan)
  ))))), F && /* @__PURE__ */ e.createElement(
    Me,
    {
      open: !0,
      onClose: () => P(!1),
      title: g(h.CancelPlan),
      primaryAction: {
        content: g(h.CancelPlan),
        destructive: !0,
        loading: O,
        disabled: O,
        onAction: async () => {
          A(!0), await f(), await B(), A(!1), P(!1), s();
        }
      },
      secondaryActions: [
        {
          content: g(h.Back),
          disabled: O,
          onAction: () => P(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(Me.Section, null, g(h.CancelConfirmation))
  ));
}, ct = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: n = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: c, i18n: s, subscription: f, refetch: m } = Te(), o = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: s.Subscription,
      backAction: t ? { content: s.Back, url: t } : void 0,
      fullWidth: n === "full",
      narrowWidth: n === "narrow"
    },
    /* @__PURE__ */ e.createElement(D, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: f,
        refetch: m
      }
    ), /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: f,
        refetch: m
      }
    )), /* @__PURE__ */ e.createElement(X.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: f,
        refetch: m,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  nt as BundleCard,
  Re as HighlightedPlanCard,
  rt as HighlightedPlanCards,
  Ve as HorizontalPlanCard,
  at as HorizontalPlanCards,
  Ee as PlanCardStack,
  ee as PlanCardType,
  Se as SubscriptionSummaryCard,
  ct as SubscriptionSummaryPage,
  Xe as VerticalPlanCard,
  lt as VerticalPlanCards
};
