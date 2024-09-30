import e, { createContext as Ye, useContext as xe, useState as te } from "react";
import { Banner as ye, BlockStack as C, Text as u, InlineStack as _, Thumbnail as Oe, Button as Z, Divider as ve, Box as j, Badge as $e, Icon as X, Grid as re, Page as pe, ButtonGroup as me, Layout as Q, Card as ge, Modal as Me, InlineGrid as Be } from "@shopify/polaris";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ae = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(we, function() {
    var c = 1e3, s = 6e4, E = 36e5, g = "millisecond", o = "second", F = "minute", v = "hour", D = "day", T = "week", Y = "month", O = "quarter", M = "year", B = "date", h = "Invalid Date", d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, x = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(m) {
      var r = ["th", "st", "nd", "rd"], a = m % 100;
      return "[" + m + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, $ = function(m, r, a) {
      var i = String(m);
      return !i || i.length >= r ? m : "" + Array(r + 1 - i.length).join(a) + m;
    }, w = { s: $, z: function(m) {
      var r = -m.utcOffset(), a = Math.abs(r), i = Math.floor(a / 60), l = a % 60;
      return (r <= 0 ? "+" : "-") + $(i, 2, "0") + ":" + $(l, 2, "0");
    }, m: function m(r, a) {
      if (r.date() < a.date())
        return -m(a, r);
      var i = 12 * (a.year() - r.year()) + (a.month() - r.month()), l = r.clone().add(i, Y), p = a - l < 0, b = r.clone().add(i + (p ? -1 : 1), Y);
      return +(-(i + (a - l) / (p ? l - b : b - l)) || 0);
    }, a: function(m) {
      return m < 0 ? Math.ceil(m) || 0 : Math.floor(m);
    }, p: function(m) {
      return { M: Y, y: M, w: T, d: D, D: B, h: v, m: F, s: o, ms: g, Q: O }[m] || String(m || "").toLowerCase().replace(/s$/, "");
    }, u: function(m) {
      return m === void 0;
    } }, f = "en", y = {};
    y[f] = x;
    var W = "$isDayjsObject", U = function(m) {
      return m instanceof k || !(!m || !m[W]);
    }, J = function m(r, a, i) {
      var l;
      if (!r)
        return f;
      if (typeof r == "string") {
        var p = r.toLowerCase();
        y[p] && (l = p), a && (y[p] = a, l = p);
        var b = r.split("-");
        if (!l && b.length > 1)
          return m(b[0]);
      } else {
        var H = r.name;
        y[H] = r, l = H;
      }
      return !i && l && (f = l), l || !i && f;
    }, I = function(m, r) {
      if (U(m))
        return m.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = m, a.args = arguments, new k(a);
    }, A = w;
    A.l = J, A.i = U, A.w = function(m, r) {
      return I(m, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var k = function() {
      function m(a) {
        this.$L = J(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[W] = !0;
      }
      var r = m.prototype;
      return r.parse = function(a) {
        this.$d = function(i) {
          var l = i.date, p = i.utc;
          if (l === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(l))
            return /* @__PURE__ */ new Date();
          if (l instanceof Date)
            return new Date(l);
          if (typeof l == "string" && !/Z$/i.test(l)) {
            var b = l.match(d);
            if (b) {
              var H = b[2] - 1 || 0, z = (b[7] || "0").substring(0, 3);
              return p ? new Date(Date.UTC(b[1], H, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, z)) : new Date(b[1], H, b[3] || 1, b[4] || 0, b[5] || 0, b[6] || 0, z);
            }
          }
          return new Date(l);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return A;
      }, r.isValid = function() {
        return this.$d.toString() !== h;
      }, r.isSame = function(a, i) {
        var l = I(a);
        return this.startOf(i) <= l && l <= this.endOf(i);
      }, r.isAfter = function(a, i) {
        return I(a) < this.startOf(i);
      }, r.isBefore = function(a, i) {
        return this.endOf(i) < I(a);
      }, r.$g = function(a, i, l) {
        return A.u(a) ? this[i] : this.set(l, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, i) {
        var l = this, p = !!A.u(i) || i, b = A.p(a), H = function(ae, R) {
          var q = A.w(l.$u ? Date.UTC(l.$y, R, ae) : new Date(l.$y, R, ae), l);
          return p ? q : q.endOf(D);
        }, z = function(ae, R) {
          return A.w(l.toDate()[ae].apply(l.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), l);
        }, N = this.$W, K = this.$M, G = this.$D, se = "set" + (this.$u ? "UTC" : "");
        switch (b) {
          case M:
            return p ? H(1, 0) : H(31, 11);
          case Y:
            return p ? H(1, K) : H(0, K + 1);
          case T:
            var ne = this.$locale().weekStart || 0, ue = (N < ne ? N + 7 : N) - ne;
            return H(p ? G - ue : G + (6 - ue), K);
          case D:
          case B:
            return z(se + "Hours", 0);
          case v:
            return z(se + "Minutes", 1);
          case F:
            return z(se + "Seconds", 2);
          case o:
            return z(se + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, i) {
        var l, p = A.p(a), b = "set" + (this.$u ? "UTC" : ""), H = (l = {}, l[D] = b + "Date", l[B] = b + "Date", l[Y] = b + "Month", l[M] = b + "FullYear", l[v] = b + "Hours", l[F] = b + "Minutes", l[o] = b + "Seconds", l[g] = b + "Milliseconds", l)[p], z = p === D ? this.$D + (i - this.$W) : i;
        if (p === Y || p === M) {
          var N = this.clone().set(B, 1);
          N.$d[H](z), N.init(), this.$d = N.set(B, Math.min(this.$D, N.daysInMonth())).$d;
        } else
          H && this.$d[H](z);
        return this.init(), this;
      }, r.set = function(a, i) {
        return this.clone().$set(a, i);
      }, r.get = function(a) {
        return this[A.p(a)]();
      }, r.add = function(a, i) {
        var l, p = this;
        a = Number(a);
        var b = A.p(i), H = function(K) {
          var G = I(p);
          return A.w(G.date(G.date() + Math.round(K * a)), p);
        };
        if (b === Y)
          return this.set(Y, this.$M + a);
        if (b === M)
          return this.set(M, this.$y + a);
        if (b === D)
          return H(1);
        if (b === T)
          return H(7);
        var z = (l = {}, l[F] = s, l[v] = E, l[o] = c, l)[b] || 1, N = this.$d.getTime() + a * z;
        return A.w(N, this);
      }, r.subtract = function(a, i) {
        return this.add(-1 * a, i);
      }, r.format = function(a) {
        var i = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || h;
        var p = a || "YYYY-MM-DDTHH:mm:ssZ", b = A.z(this), H = this.$H, z = this.$m, N = this.$M, K = l.weekdays, G = l.months, se = l.meridiem, ne = function(R, q, de, he) {
          return R && (R[q] || R(i, p)) || de[q].slice(0, he);
        }, ue = function(R) {
          return A.s(H % 12 || 12, R, "0");
        }, ae = se || function(R, q, de) {
          var he = R < 12 ? "AM" : "PM";
          return de ? he.toLowerCase() : he;
        };
        return p.replace(P, function(R, q) {
          return q || function(de) {
            switch (de) {
              case "YY":
                return String(i.$y).slice(-2);
              case "YYYY":
                return A.s(i.$y, 4, "0");
              case "M":
                return N + 1;
              case "MM":
                return A.s(N + 1, 2, "0");
              case "MMM":
                return ne(l.monthsShort, N, G, 3);
              case "MMMM":
                return ne(G, N);
              case "D":
                return i.$D;
              case "DD":
                return A.s(i.$D, 2, "0");
              case "d":
                return String(i.$W);
              case "dd":
                return ne(l.weekdaysMin, i.$W, K, 2);
              case "ddd":
                return ne(l.weekdaysShort, i.$W, K, 3);
              case "dddd":
                return K[i.$W];
              case "H":
                return String(H);
              case "HH":
                return A.s(H, 2, "0");
              case "h":
                return ue(1);
              case "hh":
                return ue(2);
              case "a":
                return ae(H, z, !0);
              case "A":
                return ae(H, z, !1);
              case "m":
                return String(z);
              case "mm":
                return A.s(z, 2, "0");
              case "s":
                return String(i.$s);
              case "ss":
                return A.s(i.$s, 2, "0");
              case "SSS":
                return A.s(i.$ms, 3, "0");
              case "Z":
                return b;
            }
            return null;
          }(R) || b.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, i, l) {
        var p, b = this, H = A.p(i), z = I(a), N = (z.utcOffset() - this.utcOffset()) * s, K = this - z, G = function() {
          return A.m(b, z);
        };
        switch (H) {
          case M:
            p = G() / 12;
            break;
          case Y:
            p = G();
            break;
          case O:
            p = G() / 3;
            break;
          case T:
            p = (K - N) / 6048e5;
            break;
          case D:
            p = (K - N) / 864e5;
            break;
          case v:
            p = K / E;
            break;
          case F:
            p = K / s;
            break;
          case o:
            p = K / c;
            break;
          default:
            p = K;
        }
        return l ? p : A.a(p);
      }, r.daysInMonth = function() {
        return this.endOf(Y).$D;
      }, r.$locale = function() {
        return y[this.$L];
      }, r.locale = function(a, i) {
        if (!a)
          return this.$L;
        var l = this.clone(), p = J(a, i, !0);
        return p && (l.$L = p), l;
      }, r.clone = function() {
        return A.w(this.$d, this);
      }, r.toDate = function() {
        return new Date(this.valueOf());
      }, r.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, r.toISOString = function() {
        return this.$d.toISOString();
      }, r.toString = function() {
        return this.$d.toUTCString();
      }, m;
    }(), ce = k.prototype;
    return I.prototype = ce, [["$ms", g], ["$s", o], ["$m", F], ["$H", v], ["$W", D], ["$M", Y], ["$y", M], ["$D", B]].forEach(function(m) {
      ce[m[1]] = function(r) {
        return this.$g(r, m[0], m[1]);
      };
    }), I.extend = function(m, r) {
      return m.$i || (m(r, k, I), m.$i = !0), I;
    }, I.locale = J, I.isDayjs = U, I.unix = function(m) {
      return I(1e3 * m);
    }, I.en = y[f], I.Ls = y, I.p = {}, I;
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
}, Te = Ye(), He = () => {
  const t = xe(Te);
  if (t === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return t;
}, Ie = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), V = (t, n = "USD", c = !0) => {
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
}, De = ({ plan: t, customFieldKey: n = "buttonLabel" }) => {
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
  cancelSubscription: E = async () => {
  },
  i18n: g,
  subscription: o,
  refetch: F = async () => {
  },
  apps: v = []
}) => /* @__PURE__ */ e.createElement(ye, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(C, { gap: "400" }, /* @__PURE__ */ e.createElement(u, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(C, { gap: "300" }, v.map((D, T) => /* @__PURE__ */ e.createElement(C, { gap: "300" }, /* @__PURE__ */ e.createElement(_, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(_, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Oe,
  {
    source: D.iconUrl,
    alt: D.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, { variant: "headingSm" }, D.name), /* @__PURE__ */ e.createElement(u, null, D.description))), /* @__PURE__ */ e.createElement(_, { gap: "400" }, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(Z, null, g.Install)))), T < v.length - 1 && /* @__PURE__ */ e.createElement(ve, null))))));
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
const je = ({ plan: t, t: n, translatePlanName: c, planNameTextVariant: s, planDescriptionTextVariant: E }) => /* @__PURE__ */ e.createElement(C, { gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: s, alignment: "center" }, c ? n(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(u, { variant: E, tone: "subdued", alignment: "center" }, n(t.description))), Ue = ({ plan: t, discount: n, t: c, priceTextVariant: s, useShortFormPlanIntervals: E = !0 }) => /* @__PURE__ */ e.createElement(C, { gap: "100" }, !!n && /* @__PURE__ */ e.createElement(_, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: s }, V(n.presentmentDiscountedAmount, t.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  V(t.presentmentAmount, t.presentmentCurrencyCode, !0)
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: E })))), !n && /* @__PURE__ */ e.createElement(_, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: s }, V(t.presentmentAmount, t.presentmentCurrencyCode, !0)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: E })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(C, null, t.usageCharges.map((g, o) => /* @__PURE__ */ e.createElement(_, { key: `plan-usageCharge-${o}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: be, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, c(g.terms)))))), Ke = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(C, { gap: "300" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(_, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, n(S.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, E) => {
  const g = t.features[s];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(_, { key: `plan-feature-${E}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "subdued" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, n(g.name)) : /* @__PURE__ */ e.createElement(u, null, g.value, " ", n(g.name)));
})), Re = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: g = !1,
  expanded: o = !1,
  isActivePlan: F = !1,
  isRecommendedPlan: v = !1,
  isCustomPlan: D = !1,
  showRecommendedPlanBadge: T = !0,
  t: Y,
  translatePlanName: O = !0,
  planNameTextVariant: M = "headingMd",
  planDescriptionTextVariant: B = "bodyLg",
  priceTextVariant: h = "heading3xl"
}) => {
  const [d, P] = e.useState(!1), x = Y || ((w) => w), $ = async ({ plan: w, discount: f }) => {
    s ? (P(!0), await s({ plan: w, discount: f }) !== !0 && P(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(j, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(j, { paddingBlock: o || v ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    j,
    {
      background: v || D ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: o || v ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(C, { gap: "800" }, /* @__PURE__ */ e.createElement(C, { gap: "400" }, /* @__PURE__ */ e.createElement(
      je,
      {
        plan: t,
        t: x,
        translatePlanName: O,
        planNameTextVariant: M,
        planDescriptionTextVariant: B
      }
    ), /* @__PURE__ */ e.createElement(
      Ue,
      {
        plan: t,
        discount: n,
        useShortFormPlanIntervals: E,
        t: x,
        priceTextVariant: h
      }
    )), /* @__PURE__ */ e.createElement(
      Z,
      {
        size: "large",
        variant: v ? "primary" : "secondary",
        onClick: async () => {
          await $({ plan: t, discount: n });
        },
        disabled: F,
        loading: d
      },
      x(c || S.SelectPlan)
    ), /* @__PURE__ */ e.createElement(Ke, { plan: t, t: x, trialDaysAsFeature: g }), v && T && /* @__PURE__ */ e.createElement(_, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement($e, { tone: "success" }, x(S.MostPopular))))
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
  cardType: E = ee.Horizontal,
  trialDaysAsFeature: g = !0,
  useShortFormPlanIntervals: o = !0,
  keyForRecommended: F = "recommended",
  keyForCustomButtonLabel: v = "buttonLabel",
  showRecommendedPlanBadge: D = !0,
  applyDiscount: T = !0,
  t: Y,
  translatePlanName: O = !0
}) => {
  var $;
  const M = ($ = n == null ? void 0 : n.subscription) != null && $.active ? n.subscription : void 0, B = M == null ? void 0 : M.plan, h = s ? t.filter((w) => w.interval === s) : t, d = E === ee.Vertical ? 1 : Ne(h.length), P = We(d), x = Y || ((w) => w);
  return /* @__PURE__ */ e.createElement(re, { columns: d }, h.map((w) => {
    const f = T ? ke({ plan: w }) : void 0, y = (B == null ? void 0 : B.id) === w.id && !(M != null && M.cancelOn);
    return /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: P, key: w.id }, E === ee.Highlighted && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HighlightedPlanCard-${w.id}`,
        plan: w,
        discount: f,
        onSelectPlan: c,
        isActivePlan: y,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: o,
        isCustomPlan: w.availability !== ie.Public,
        isRecommendedPlan: Ce({ plan: w, customFieldKey: F }),
        buttonLabel: De({ plan: w, customFieldKey: v }),
        showRecommendedPlanBadge: D,
        t: x,
        translatePlanName: O
      }
    ), E === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Xe,
      {
        key: `HorizontalPlanCard-${w.id}`,
        plan: w,
        discount: f,
        onSelectPlan: c,
        isActivePlan: y,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: o,
        isRecommendedPlan: Ce({ plan: w, customFieldKey: F }),
        buttonLabel: De({ plan: w, customFieldKey: v }),
        showRecommendedPlanBadge: D,
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
  showRecommendedBadge: E = !0,
  // boolean
  customFieldCta: g,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: o = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: F = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: D,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: Y = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, M = new URLSearchParams(window.location.search), B = n.some((y) => y.interval === L.Annual) && n.some((y) => y.interval === L.Every30Days), h = n.find((y) => y.id === (O == null ? void 0 : O.plan.id)), [d, P] = te(
    h ? h.interval : B ? L.Annual : L.Every30Days
  ), x = n.filter((y) => y.availability === ie.Public), $ = Y ? n.filter((y) => y.availability !== ie.Public) : [], [w, f] = te(
    M.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s ? { content: S.Back, url: s } : void 0,
      secondaryActions: F && B ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: d === L.Every30Days,
          onClick: () => P(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: d === L.Annual,
          onClick: () => P(L.Annual)
        },
        S.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(Q, null, /* @__PURE__ */ e.createElement(Q.Section, null, /* @__PURE__ */ e.createElement(C, { gap: "1000" }, w && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          f(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: x,
        onSelectPlan: c,
        planInterval: d,
        cardType: ee.Horizontal,
        keyForRecommended: o,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: D,
        showRecommendedPlanBadge: E
      }
    ), ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ e.createElement(C, { gap: "300" }, /* @__PURE__ */ e.createElement(j, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: $,
        onSelectPlan: c,
        planInterval: d,
        cardType: ee.Horizontal,
        keyForRecommended: o,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: D,
        showRecommendedPlanBadge: E
      }
    )))))
  );
}, Ze = ({ plan: t, t: n, translatePlanName: c, isRecommendedPlan: s = !1, planNameTextVariant: E, planDescriptionTextVariant: g, showRecommendedPlanBadge: o }) => /* @__PURE__ */ e.createElement(C, { gap: "100" }, /* @__PURE__ */ e.createElement(_, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: E }, c ? n(t.name) : t.name), s && o && /* @__PURE__ */ e.createElement($e, { tone: "success" }, n(S.MostPopular))), t.description && /* @__PURE__ */ e.createElement(u, { variant: g, tone: "subdued" }, n(t.description))), Ge = ({ plan: t, discount: n, t: c, useShortFormPlanIntervals: s = !0, priceTextVariant: E }) => /* @__PURE__ */ e.createElement(C, null, !!n && n.presentmentDiscountedAmount > 0 && /* @__PURE__ */ e.createElement(_, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: E }, V(n.presentmentDiscountedAmount, t.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: E,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.presentmentAmount
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: s })))), (!n || n.presentmentDiscountedAmount == 0) && /* @__PURE__ */ e.createElement(_, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: E }, V(t.presentmentAmount, t.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(S.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: s })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(C, null, t.usageCharges.map((g, o) => /* @__PURE__ */ e.createElement(_, { key: `plan-usageCharge-${o}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: be, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, c(g.terms)))))), Je = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(C, { gap: "100" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(_, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "subdued" })), /* @__PURE__ */ e.createElement(u, null, n(S.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, E) => {
  const g = t.features[s];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(_, { key: `plan-feature-${E}`, align: "start", gap: "100", wrap: !1 }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "subdued" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, null, n(g.name)) : /* @__PURE__ */ e.createElement(u, null, g.value, " ", n(g.name)));
})), Xe = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: g = !1,
  isRecommendedPlan: o = !1,
  isActivePlan: F = !1,
  t: v,
  translatePlanName: D = !0,
  showRecommendedPlanBadge: T = !0,
  planNameTextVariant: Y = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: M = "headingXl"
}) => {
  const [B, h] = e.useState(!1), d = v || ((x) => x), P = async ({ plan: x, discount: $ }) => {
    s ? (h(!0), await s({ plan: x, discount: $ }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(C, { gap: "400" }, /* @__PURE__ */ e.createElement(
    Ze,
    {
      plan: t,
      isRecommendedPlan: o,
      showRecommendedPlanBadge: T,
      t: d,
      translatePlanName: D,
      planNameTextVariant: Y,
      planDescriptionTextVariant: O
    }
  ), /* @__PURE__ */ e.createElement(
    Ge,
    {
      plan: t,
      discount: n,
      useShortFormPlanIntervals: E,
      t: d,
      priceTextVariant: M
    }
  ), /* @__PURE__ */ e.createElement(
    Z,
    {
      size: "large",
      variant: o ? "primary" : "secondary",
      onClick: async () => {
        await P({ plan: t, discount: n });
      },
      disabled: F,
      loading: B
    },
    d(F ? S.CurrentPlan : c || S.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Je, { plan: t, trialDaysAsFeature: g, t: d })));
}, rt = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: E = !0,
  // boolean
  customFieldCta: g = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: o = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: F = !0,
  // boolean
  showTrialDaysAsFeature: v = !0,
  // boolean
  useShortFormPlanIntervals: D = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: Y = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, M = new URLSearchParams(window.location.search), B = n.some((y) => y.interval === L.Annual) && n.some((y) => y.interval === L.Every30Days), h = n.find((y) => y.id === (O == null ? void 0 : O.plan.id)), [d, P] = te(
    h ? h.interval : B ? L.Annual : L.Every30Days
  ), x = n.filter((y) => y.availability === ie.Public), $ = Y ? n.filter((y) => y.availability !== ie.Public) : [], [w, f] = te(
    M.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s && s !== "" ? { content: S.Back, url: s } : void 0,
      secondaryActions: F && B ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: d === L.Every30Days,
          onClick: () => P(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: d === L.Annual,
          onClick: () => P(L.Annual)
        },
        S.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(j, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Q, null, /* @__PURE__ */ e.createElement(Q.Section, null, /* @__PURE__ */ e.createElement(C, { gap: "1000" }, w && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          f(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: x,
        onSelectPlan: c,
        planInterval: d,
        cardType: ee.Highlighted,
        keyForRecommended: o,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: D,
        showRecommendedPlanBadge: E
      }
    ), ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), ($ == null ? void 0 : $.length) > 0 && /* @__PURE__ */ e.createElement(C, { gap: "300" }, /* @__PURE__ */ e.createElement(j, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: $,
        onSelectPlan: c,
        planInterval: d,
        cardType: ee.Highlighted,
        keyForRecommended: o,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: v,
        useShortFormPlanIntervals: D,
        showRecommendedPlanBadge: E
      }
    ))))))
  );
}, Qe = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: g = !1,
  isRecommendedPlan: o = !1,
  isActivePlan: F = !1,
  t: v = _t,
  translatePlanName: D = !0,
  showRecommendedPlanBadge: T = !0,
  planNameTextVariant: Y = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: M = "headingXl"
}) => {
  const [B, h] = e.useState(!1), d = async ({ plan: f, discount: y }) => {
    s ? (h(!0), await s({ plan: f, discount: y }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  }, P = ({ plan: f }) => /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, { variant: Y }, D ? v(f.name) : f.name), f.description && /* @__PURE__ */ e.createElement(u, { variant: O, tone: "subdued" }, v(f.description))), x = ({ plan: f }) => /* @__PURE__ */ e.createElement(C, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { fontWeight: "medium" }, v(S.Features)), /* @__PURE__ */ e.createElement(C, { gap: "100" }, g && f.trialDays && f.trialDays > 0 ? /* @__PURE__ */ e.createElement(_, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, v(S.FreeTrialLength.replace("{{ trialDays }}", f.trialDays)))) : null, f.featuresOrder.map((y, W) => {
    const U = f.features[y];
    if (U.type !== "boolean" || U.value === !0)
      return /* @__PURE__ */ e.createElement(_, { key: `plan-feature-${W}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: le, tone: "positive" })), U.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, U.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, U.value, " ", U.name));
  }))), $ = ({ plan: f, discount: y }) => /* @__PURE__ */ e.createElement(C, { gap: "100" }, y ? /* @__PURE__ */ e.createElement(_, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: M }, V(y.presentmentDiscountedAmount, f.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(
    u,
    {
      variant: M,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    f.presentmentAmount
  ), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, S.Per, " ", oe({ interval: f.interval, useShortFormPlanIntervals: E }))) : /* @__PURE__ */ e.createElement(_, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: M }, V(f.presentmentAmount, f.presentmentCurrencyCode)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, S.Per, " ", oe({ interval: f.interval, useShortFormPlanIntervals: E }))), f.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(C, null, f.usageCharges.map((W, U) => /* @__PURE__ */ e.createElement(_, { key: `plan-usageCharge-${U}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(j, null, /* @__PURE__ */ e.createElement(X, { source: be, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, W.terms))))), w = ({ plan: f, discount: y }) => /* @__PURE__ */ e.createElement(_, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    Z,
    {
      size: "large",
      variant: o ? "primary" : "secondary",
      onClick: async () => {
        await d({ plan: f, discount: y });
      },
      disabled: F,
      loading: B
    },
    v(F ? S.CurrentPlan : c || S.SelectPlan)
  ), o && T && /* @__PURE__ */ e.createElement($e, { tone: "success" }, v(S.MostPopular)));
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement(C, { gap: "300" }, P({ plan: t }), $({ plan: t, discount: n }), /* @__PURE__ */ e.createElement(j, null, w({ plan: t, discount: n })))), /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, x({ plan: t }))));
}, lt = ({
  plans: t,
  customer: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: E = "recommended",
  keyForCustomButtonLabel: g = "buttonLabel",
  showPlanIntervalToggle: o = !1,
  // boolean
  trialDaysAsFeature: F = !0,
  // boolean
  useShortFormPlanIntervals: v = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: D = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: T = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: Y = !0,
  // boolean
  applyDiscount: O = !0,
  t: M,
  translatePlanName: B = !0
}) => {
  var A;
  const h = new URLSearchParams(window.location.search), d = t.some((k) => k.interval === L.Annual) && t.some((k) => k.interval === L.Every30Days), P = (A = n == null ? void 0 : n.subscription) != null && A.active ? n.subscription : void 0, x = P == null ? void 0 : P.plan, [$, w] = te(
    x ? x.interval : d ? L.Annual : L.Every30Days
  ), f = t.filter(
    (k) => k.availability !== "customerTag" && k.availability !== "customer"
  ), y = o && d ? f.filter((k) => k.interval === $) : f, W = T ? t.filter(
    (k) => k.availability === "customerTag" || k.availability === "customer"
  ) : [], [U, J] = te(
    h.get("subscribed") === "true"
  ), I = M || ((k) => k);
  return /* @__PURE__ */ e.createElement(
    pe,
    {
      title: S.Plans,
      backAction: s !== "" ? { content: S.Back, url: s } : void 0,
      secondaryActions: o && d ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Every30Days,
          onClick: () => w(L.Every30Days)
        },
        S.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: $ === L.Annual,
          onClick: () => w(L.Annual)
        },
        S.Year
      )) : void 0,
      fullWidth: D === "full",
      narrowWidth: D === "narrow"
    },
    /* @__PURE__ */ e.createElement(Q, null, /* @__PURE__ */ e.createElement(Q.Section, null, /* @__PURE__ */ e.createElement(C, { gap: "400" }, U && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: S.SubscribeSuccessTitle,
        onDismiss: () => {
          J(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      S.SubscribeSuccessBody
    ), y.map((k, ce) => {
      const m = O ? ke({ plan: k }) : void 0, r = (x == null ? void 0 : x.id) === k.id && !(P != null && P.cancelOn);
      return /* @__PURE__ */ e.createElement(
        Qe,
        {
          key: `plan-${ce}`,
          plan: k,
          discount: m,
          onSelectPlan: c,
          isActivePlan: r,
          trialDaysAsFeature: F,
          useShortFormPlanIntervals: v,
          isCustomPlan: k.availability !== ie.Public,
          isRecommendedPlan: Ce({ plan: k, customFieldKey: E }),
          buttonLabel: De({ plan: k, customFieldKey: g }),
          showRecommendedPlanBadge: Y,
          t: I,
          translatePlanName: B
        }
      );
    }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(C, { gap: "300" }, /* @__PURE__ */ e.createElement(j, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, S.CustomPlans)), /* @__PURE__ */ e.createElement(re, null, W.map((k, ce) => {
      var r;
      const m = ((r = k.discounts) == null ? void 0 : r.length) > 0 ? k.discounts.reduce(
        (a, i) => a.discountedAmount < i.discountedAmount ? a : i
      ) : null;
      return /* @__PURE__ */ e.createElement(re.Cell, { key: `custom-plan-${ce}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(C, { gap: "400" }, titleComponent({ plan: k, discount: m }), pricingComponent({ plan: k, discount: m }), ctaComponent({ plan: k, discount: m }), featuresComponent({ plan: k, discount: m }))));
    }))))))
  );
};
var Le = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(we, function() {
    var c = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, E, g) {
      var o = E.prototype, F = o.format;
      g.en.formats = c, o.format = function(v) {
        v === void 0 && (v = "YYYY-MM-DDTHH:mm:ssZ");
        var D = this.$locale().formats, T = function(Y, O) {
          return Y.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(M, B, h) {
            var d = h && h.toUpperCase();
            return B || O[h] || c[h] || O[d].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(P, x, $) {
              return x || $.slice(1);
            });
          });
        }(v, D === void 0 ? {} : D);
        return F.call(this, T);
      };
    };
  });
})(Le);
var Ve = Le.exports;
const qe = /* @__PURE__ */ Pe(Ve);
fe.extend(qe);
const Se = ({
  orientation: t = "horizontal",
  onShowPlans: n,
  onCancelPlan: c,
  onPlanCancelled: s = () => {
  },
  cancelSubscription: E = async () => {
  },
  i18n: g,
  subscription: o,
  refetch: F = async () => {
  },
  t: v,
  translatePlanName: D = !0,
  hideSelectPlanButton: T = !1
}) => {
  var J;
  const [Y, O] = te(!1), [M, B] = te(!1), h = v || ((I) => I), d = {
    ...S,
    ...g || {}
  };
  if (!o)
    return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(C, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, h(d.Subscription)), /* @__PURE__ */ e.createElement(u, null, h(d.NotSubscribed)), /* @__PURE__ */ e.createElement(_, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, !T && /* @__PURE__ */ e.createElement(
      Z,
      {
        variant: "primary",
        onClick: n,
        accessibilityLabel: h(d.ChangePlan)
      },
      h(d.SelectPlan)
    )))));
  const { plan: P } = o, x = V(o.presentmentTotal, P.presentmentCurrencyCode), $ = h(P.interval === L.Annual ? d.Year : d.Month), w = t === "horizontal" ? Be : C, f = (J = o == null ? void 0 : o.appliedDiscount) == null ? void 0 : J.discount, y = f ? f.percentage ? `${f.percentage}%` : V(f.presentmentAmount, P.presentmentCurrencyCode) : null, W = f && o.appliedDiscount.discountEndsAt && fe().isAfter(fe(o.appliedDiscount.discountEndsAt)), U = P.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(C, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, h(d.Subscription)), /* @__PURE__ */ e.createElement(C, { gap: "400" }, /* @__PURE__ */ e.createElement(w, { columns: U, gap: "300" }, /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, null, h(d.CurrentPlan)), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, D ? h(P.name) : P.name), o.cancelOn && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, h("Canceled, active until {{ date }}").replace("{{ date }}", fe(o.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, null, h(d.Price)), /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, h(d.AmountPerInterval).replace("{{ amount }}", x).replace("{{ interval }}", $)), f && !W && /* @__PURE__ */ e.createElement(u, { tone: "success" }, h(d.DiscountAmount).replace("{{ amount }}", y)), f && W && /* @__PURE__ */ e.createElement(u, { tone: "subdued", textDecorationLine: "line-through" }, h(d.DiscountAmountExpired).replace("{{ amount }}", y)))), P.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(C, null, /* @__PURE__ */ e.createElement(u, null, h(d.UsageCharges || "Usage charges")), P.usageCharges.map((I, A) => /* @__PURE__ */ e.createElement(u, { key: `usage-charge-${A}`, tone: "subdued" }, h(I.terms))))), /* @__PURE__ */ e.createElement(_, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(
    Z,
    {
      onClick: () => {
        c ? c() : O(!0);
      },
      accessibilityLabel: h(d.CancelPlan),
      tone: "critical",
      disabled: !!o.cancelOn
    },
    h(d.CancelPlan)
  ), !T && /* @__PURE__ */ e.createElement(
    Z,
    {
      variant: "primary",
      onClick: n,
      accessibilityLabel: h(d.ChangePlan)
    },
    h(d.ChangePlan)
  ))))), Y && /* @__PURE__ */ e.createElement(
    Me,
    {
      open: !0,
      onClose: () => O(!1),
      title: h(d.CancelPlan),
      primaryAction: {
        content: h(d.CancelPlan),
        destructive: !0,
        loading: M,
        disabled: M,
        onAction: async () => {
          B(!0), await E(), await F(), B(!1), O(!1), s();
        }
      },
      secondaryActions: [
        {
          content: h(d.Back),
          disabled: M,
          onAction: () => O(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(Me.Section, null, h(d.CancelConfirmation))
  ));
}, ct = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: n = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: c, i18n: s, subscription: E, refetch: g } = He(), o = () => {
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
    /* @__PURE__ */ e.createElement(C, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: g
      }
    ), /* @__PURE__ */ e.createElement(Q, null, /* @__PURE__ */ e.createElement(Q.Section, null, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: g
      }
    )), /* @__PURE__ */ e.createElement(Q.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: o,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: g,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  nt as BundleCard,
  Re as HighlightedPlanCard,
  rt as HighlightedPlanCards,
  Xe as HorizontalPlanCard,
  at as HorizontalPlanCards,
  Ee as PlanCardStack,
  ee as PlanCardType,
  Se as SubscriptionSummaryCard,
  ct as SubscriptionSummaryPage,
  Qe as VerticalPlanCard,
  lt as VerticalPlanCards
};
