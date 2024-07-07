import e, { createContext as Ye, useContext as xe, useState as te } from "react";
import { Banner as ye, BlockStack as $, Text as m, InlineStack as I, Thumbnail as Be, Button as J, Divider as ve, Box as K, Badge as Me, Icon as V, Grid as le, Page as be, ButtonGroup as me, Layout as X, Card as ge, Modal as we, InlineGrid as Oe } from "@shopify/polaris";
var De = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ke = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(De, function() {
    var c = 1e3, s = 6e4, E = 36e5, d = "millisecond", u = "second", D = "minute", b = "hour", M = "day", B = "week", L = "month", O = "quarter", x = "year", w = "date", g = "Invalid Date", h = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, P = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, H = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(f) {
      var r = ["th", "st", "nd", "rd"], a = f % 100;
      return "[" + f + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, v = function(f, r, a) {
      var o = String(f);
      return !o || o.length >= r ? f : "" + Array(r + 1 - o.length).join(a) + f;
    }, W = { s: v, z: function(f) {
      var r = -f.utcOffset(), a = Math.abs(r), o = Math.floor(a / 60), l = a % 60;
      return (r <= 0 ? "+" : "-") + v(o, 2, "0") + ":" + v(l, 2, "0");
    }, m: function f(r, a) {
      if (r.date() < a.date())
        return -f(a, r);
      var o = 12 * (a.year() - r.year()) + (a.month() - r.month()), l = r.clone().add(o, L), p = a - l < 0, S = r.clone().add(o + (p ? -1 : 1), L);
      return +(-(o + (a - l) / (p ? l - S : S - l)) || 0);
    }, a: function(f) {
      return f < 0 ? Math.ceil(f) || 0 : Math.floor(f);
    }, p: function(f) {
      return { M: L, y: x, w: B, d: M, D: w, h: b, m: D, s: u, ms: d, Q: O }[f] || String(f || "").toLowerCase().replace(/s$/, "");
    }, u: function(f) {
      return f === void 0;
    } }, y = "en", i = {};
    i[y] = H;
    var N = "$isDayjsObject", _ = function(f) {
      return f instanceof ne || !(!f || !f[N]);
    }, j = function f(r, a, o) {
      var l;
      if (!r)
        return y;
      if (typeof r == "string") {
        var p = r.toLowerCase();
        i[p] && (l = p), a && (i[p] = a, l = p);
        var S = r.split("-");
        if (!l && S.length > 1)
          return f(S[0]);
      } else {
        var F = r.name;
        i[F] = r, l = F;
      }
      return !o && l && (y = l), l || !o && y;
    }, T = function(f, r) {
      if (_(f))
        return f.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = f, a.args = arguments, new ne(a);
    }, k = W;
    k.l = j, k.i = _, k.w = function(f, r) {
      return T(f, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var ne = function() {
      function f(a) {
        this.$L = j(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[N] = !0;
      }
      var r = f.prototype;
      return r.parse = function(a) {
        this.$d = function(o) {
          var l = o.date, p = o.utc;
          if (l === null)
            return /* @__PURE__ */ new Date(NaN);
          if (k.u(l))
            return /* @__PURE__ */ new Date();
          if (l instanceof Date)
            return new Date(l);
          if (typeof l == "string" && !/Z$/i.test(l)) {
            var S = l.match(h);
            if (S) {
              var F = S[2] - 1 || 0, z = (S[7] || "0").substring(0, 3);
              return p ? new Date(Date.UTC(S[1], F, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, z)) : new Date(S[1], F, S[3] || 1, S[4] || 0, S[5] || 0, S[6] || 0, z);
            }
          }
          return new Date(l);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return k;
      }, r.isValid = function() {
        return this.$d.toString() !== g;
      }, r.isSame = function(a, o) {
        var l = T(a);
        return this.startOf(o) <= l && l <= this.endOf(o);
      }, r.isAfter = function(a, o) {
        return T(a) < this.startOf(o);
      }, r.isBefore = function(a, o) {
        return this.endOf(o) < T(a);
      }, r.$g = function(a, o, l) {
        return k.u(a) ? this[o] : this.set(l, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, o) {
        var l = this, p = !!k.u(o) || o, S = k.p(a), F = function(re, Z) {
          var q = k.w(l.$u ? Date.UTC(l.$y, Z, re) : new Date(l.$y, Z, re), l);
          return p ? q : q.endOf(M);
        }, z = function(re, Z) {
          return k.w(l.toDate()[re].apply(l.toDate("s"), (p ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Z)), l);
        }, U = this.$W, R = this.$M, G = this.$D, se = "set" + (this.$u ? "UTC" : "");
        switch (S) {
          case x:
            return p ? F(1, 0) : F(31, 11);
          case L:
            return p ? F(1, R) : F(0, R + 1);
          case B:
            var ae = this.$locale().weekStart || 0, ue = (U < ae ? U + 7 : U) - ae;
            return F(p ? G - ue : G + (6 - ue), R);
          case M:
          case w:
            return z(se + "Hours", 0);
          case b:
            return z(se + "Minutes", 1);
          case D:
            return z(se + "Seconds", 2);
          case u:
            return z(se + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, o) {
        var l, p = k.p(a), S = "set" + (this.$u ? "UTC" : ""), F = (l = {}, l[M] = S + "Date", l[w] = S + "Date", l[L] = S + "Month", l[x] = S + "FullYear", l[b] = S + "Hours", l[D] = S + "Minutes", l[u] = S + "Seconds", l[d] = S + "Milliseconds", l)[p], z = p === M ? this.$D + (o - this.$W) : o;
        if (p === L || p === x) {
          var U = this.clone().set(w, 1);
          U.$d[F](z), U.init(), this.$d = U.set(w, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          F && this.$d[F](z);
        return this.init(), this;
      }, r.set = function(a, o) {
        return this.clone().$set(a, o);
      }, r.get = function(a) {
        return this[k.p(a)]();
      }, r.add = function(a, o) {
        var l, p = this;
        a = Number(a);
        var S = k.p(o), F = function(R) {
          var G = T(p);
          return k.w(G.date(G.date() + Math.round(R * a)), p);
        };
        if (S === L)
          return this.set(L, this.$M + a);
        if (S === x)
          return this.set(x, this.$y + a);
        if (S === M)
          return F(1);
        if (S === B)
          return F(7);
        var z = (l = {}, l[D] = s, l[b] = E, l[u] = c, l)[S] || 1, U = this.$d.getTime() + a * z;
        return k.w(U, this);
      }, r.subtract = function(a, o) {
        return this.add(-1 * a, o);
      }, r.format = function(a) {
        var o = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || g;
        var p = a || "YYYY-MM-DDTHH:mm:ssZ", S = k.z(this), F = this.$H, z = this.$m, U = this.$M, R = l.weekdays, G = l.months, se = l.meridiem, ae = function(Z, q, de, he) {
          return Z && (Z[q] || Z(o, p)) || de[q].slice(0, he);
        }, ue = function(Z) {
          return k.s(F % 12 || 12, Z, "0");
        }, re = se || function(Z, q, de) {
          var he = Z < 12 ? "AM" : "PM";
          return de ? he.toLowerCase() : he;
        };
        return p.replace(P, function(Z, q) {
          return q || function(de) {
            switch (de) {
              case "YY":
                return String(o.$y).slice(-2);
              case "YYYY":
                return k.s(o.$y, 4, "0");
              case "M":
                return U + 1;
              case "MM":
                return k.s(U + 1, 2, "0");
              case "MMM":
                return ae(l.monthsShort, U, G, 3);
              case "MMMM":
                return ae(G, U);
              case "D":
                return o.$D;
              case "DD":
                return k.s(o.$D, 2, "0");
              case "d":
                return String(o.$W);
              case "dd":
                return ae(l.weekdaysMin, o.$W, R, 2);
              case "ddd":
                return ae(l.weekdaysShort, o.$W, R, 3);
              case "dddd":
                return R[o.$W];
              case "H":
                return String(F);
              case "HH":
                return k.s(F, 2, "0");
              case "h":
                return ue(1);
              case "hh":
                return ue(2);
              case "a":
                return re(F, z, !0);
              case "A":
                return re(F, z, !1);
              case "m":
                return String(z);
              case "mm":
                return k.s(z, 2, "0");
              case "s":
                return String(o.$s);
              case "ss":
                return k.s(o.$s, 2, "0");
              case "SSS":
                return k.s(o.$ms, 3, "0");
              case "Z":
                return S;
            }
            return null;
          }(Z) || S.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, o, l) {
        var p, S = this, F = k.p(o), z = T(a), U = (z.utcOffset() - this.utcOffset()) * s, R = this - z, G = function() {
          return k.m(S, z);
        };
        switch (F) {
          case x:
            p = G() / 12;
            break;
          case L:
            p = G();
            break;
          case O:
            p = G() / 3;
            break;
          case B:
            p = (R - U) / 6048e5;
            break;
          case M:
            p = (R - U) / 864e5;
            break;
          case b:
            p = R / E;
            break;
          case D:
            p = R / s;
            break;
          case u:
            p = R / c;
            break;
          default:
            p = R;
        }
        return l ? p : k.a(p);
      }, r.daysInMonth = function() {
        return this.endOf(L).$D;
      }, r.$locale = function() {
        return i[this.$L];
      }, r.locale = function(a, o) {
        if (!a)
          return this.$L;
        var l = this.clone(), p = j(a, o, !0);
        return p && (l.$L = p), l;
      }, r.clone = function() {
        return k.w(this.$d, this);
      }, r.toDate = function() {
        return new Date(this.valueOf());
      }, r.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, r.toISOString = function() {
        return this.$d.toISOString();
      }, r.toString = function() {
        return this.$d.toUTCString();
      }, f;
    }(), Y = ne.prototype;
    return T.prototype = Y, [["$ms", d], ["$s", u], ["$m", D], ["$H", b], ["$W", M], ["$M", L], ["$y", x], ["$D", w]].forEach(function(f) {
      Y[f[1]] = function(r) {
        return this.$g(r, f[0], f[1]);
      };
    }), T.extend = function(f, r) {
      return f.$i || (f(r, ne, T), f.$i = !0), T;
    }, T.locale = j, T.isDayjs = _, T.unix = function(f) {
      return T(1e3 * f);
    }, T.en = i[y], T.Ls = i, T.p = {}, T;
  });
})(ke);
var Fe = ke.exports;
const fe = /* @__PURE__ */ Pe(Fe), A = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ie = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, C = {
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
}, _e = (t = A.Every30Days) => {
  switch (t) {
    case A.Annual:
      return "year";
    case A.Every30Days:
    default:
      return "month";
  }
}, ze = (t = A.Every30Days) => {
  switch (t) {
    case A.Annual:
      return "yr";
    case A.Every30Days:
    default:
      return "mo";
  }
}, oe = ({
  interval: t = A.Every30Days,
  useShortFormPlanIntervals: n = !0
}) => n ? ze(t) : _e(t), Ce = ({ plan: t, customFieldKey: n = "recommended" }) => {
  var c;
  return !!((c = t.customFields) != null && c[n]);
}, $e = ({ plan: t, customFieldKey: n = "buttonLabel" }) => {
  var c;
  return ((c = t.customFields) == null ? void 0 : c[n]) || C.SelectPlan;
}, Ae = ({ plan: t }) => {
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
  i18n: d,
  subscription: u,
  refetch: D = async () => {
  },
  apps: b = []
}) => /* @__PURE__ */ e.createElement(ye, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(m, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement($, { gap: "300" }, b.map((M, B) => /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(I, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(I, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Be,
  {
    source: M.iconUrl,
    alt: M.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, { variant: "headingSm" }, M.name), /* @__PURE__ */ e.createElement(m, null, M.description))), /* @__PURE__ */ e.createElement(I, { gap: "400" }, /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(J, null, d.Install)))), B < b.length - 1 && /* @__PURE__ */ e.createElement(ve, null))))));
var ce = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
ce.displayName = "CheckIcon";
var pe = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
pe.displayName = "PlusIcon";
const je = ({ plan: t, t: n, translatePlanName: c, planNameTextVariant: s, planDescriptionTextVariant: E }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, /* @__PURE__ */ e.createElement(m, { variant: s, alignment: "center" }, c ? n(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(m, { variant: E, tone: "subdued", alignment: "center" }, n(t.description))), Ue = ({ plan: t, discount: n, t: c, priceTextVariant: s, currency: E, useShortFormPlanIntervals: d = !0 }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, !!n && /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { variant: s }, Q(n.discountedAmount, E, !0)), /* @__PURE__ */ e.createElement(
  m,
  {
    variant: s,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Q(t.amount, E, !0)
), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg", tone: "subdued" }, c(C.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: d })))), !n && /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: s }, Q(t.amount, E, !0)), /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(C.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: d })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, t.usageCharges.map((u, D) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${D}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: pe, tone: "subdued" })), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg" }, c(u.terms)))))), Ke = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement($, { gap: "300" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(m, null, n(C.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, E) => {
  const d = t.features[s];
  if (d.type !== "boolean" || d.value === !0)
    return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${E}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "subdued" })), d.type === "boolean" ? /* @__PURE__ */ e.createElement(m, null, n(d.name)) : /* @__PURE__ */ e.createElement(m, null, d.value, " ", n(d.name)));
})), Re = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: d = !1,
  expanded: u = !1,
  isActivePlan: D = !1,
  isRecommendedPlan: b = !1,
  isCustomPlan: M = !1,
  showRecommendedPlanBadge: B = !0,
  t: L,
  translatePlanName: O = !0,
  planNameTextVariant: x = "headingMd",
  planDescriptionTextVariant: w = "bodyLg",
  priceTextVariant: g = "heading3xl",
  currency: h
}) => {
  const [P, H] = e.useState(!1), v = L || ((y) => y), W = async ({ plan: y, discount: i }) => {
    s ? (H(!0), await s({ plan: y, discount: i }) !== !0 && H(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(K, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(K, { paddingBlock: u || b ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    K,
    {
      background: b || M ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: u || b ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement($, { gap: "800" }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
      je,
      {
        plan: t,
        t: v,
        translatePlanName: O,
        planNameTextVariant: x,
        planDescriptionTextVariant: w
      }
    ), /* @__PURE__ */ e.createElement(
      Ue,
      {
        plan: t,
        discount: n,
        useShortFormPlanIntervals: E,
        t: v,
        priceTextVariant: g,
        currency: h
      }
    )), /* @__PURE__ */ e.createElement(
      J,
      {
        size: "large",
        variant: b ? "primary" : "secondary",
        onClick: async () => {
          await W({ plan: t, discount: n });
        },
        disabled: D,
        loading: P
      },
      v(c || C.SelectPlan)
    ), /* @__PURE__ */ e.createElement(Ke, { plan: t, t: v, trialDaysAsFeature: d }), b && B && /* @__PURE__ */ e.createElement(I, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Me, { tone: "success" }, v(C.MostPopular))))
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
  trialDaysAsFeature: d = !0,
  useShortFormPlanIntervals: u = !0,
  keyForRecommended: D = "recommended",
  keyForCustomButtonLabel: b = "buttonLabel",
  showRecommendedPlanBadge: M = !0,
  applyDiscount: B = !0,
  t: L,
  translatePlanName: O = !0,
  currency: x
}) => {
  var W;
  const w = (W = n == null ? void 0 : n.subscription) != null && W.active ? n.subscription : void 0, g = w == null ? void 0 : w.plan, h = s ? t.filter((y) => y.interval === s) : t, P = E === ee.Vertical ? 1 : Ne(h.length), H = We(P), v = L || ((y) => y);
  return /* @__PURE__ */ e.createElement(le, { columns: P }, h.map((y) => {
    const i = B ? Ae({ plan: y }) : void 0, N = (g == null ? void 0 : g.id) === y.id && !(w != null && w.cancelOn), _ = x || y.currency;
    return /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: H, key: y.id }, E === ee.Highlighted && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HighlightedPlanCard-${y.id}`,
        plan: y,
        discount: i,
        onSelectPlan: c,
        isActivePlan: N,
        trialDaysAsFeature: d,
        useShortFormPlanIntervals: u,
        isCustomPlan: y.availability !== ie.Public,
        isRecommendedPlan: Ce({ plan: y, customFieldKey: D }),
        buttonLabel: $e({ plan: y, customFieldKey: b }),
        showRecommendedPlanBadge: M,
        t: v,
        translatePlanName: O,
        currency: _
      }
    ), E === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Ve,
      {
        key: `HorizontalPlanCard-${y.id}`,
        plan: y,
        discount: i,
        onSelectPlan: c,
        isActivePlan: N,
        trialDaysAsFeature: d,
        useShortFormPlanIntervals: u,
        isRecommendedPlan: Ce({ plan: y, customFieldKey: D }),
        buttonLabel: $e({ plan: y, customFieldKey: b }),
        showRecommendedPlanBadge: M,
        t: v,
        translatePlanName: O,
        currency: _
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
  customFieldCta: d,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: u = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: D = !0,
  // boolean
  showTrialDaysAsFeature: b = !0,
  // boolean
  useShortFormPlanIntervals: M,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: B = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: L = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, x = new URLSearchParams(window.location.search), w = n.some((i) => i.interval === A.Annual) && n.some((i) => i.interval === A.Every30Days), g = n.find((i) => i.id === (O == null ? void 0 : O.plan.id)), [h, P] = te(
    g ? g.interval : w ? A.Annual : A.Every30Days
  ), H = n.filter((i) => i.availability === ie.Public), v = L ? n.filter((i) => i.availability !== ie.Public) : [], [W, y] = te(
    x.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: C.Plans,
      backAction: s ? { content: C.Back, url: s } : void 0,
      secondaryActions: D && w ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: h === A.Every30Days,
          onClick: () => P(A.Every30Days)
        },
        C.Monthly
      ), /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: h === A.Annual,
          onClick: () => P(A.Annual)
        },
        C.Yearly
      )) : void 0,
      fullWidth: B === "full",
      narrowWidth: B === "narrow"
    },
    /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: C.SubscribeSuccessTitle,
        onDismiss: () => {
          y(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      C.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: H,
        onSelectPlan: c,
        planInterval: h,
        cardType: ee.Horizontal,
        keyForRecommended: u,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: E
      }
    ), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(K, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(m, { variant: "headingMd" }, C.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: v,
        onSelectPlan: c,
        planInterval: h,
        cardType: ee.Horizontal,
        keyForRecommended: u,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: E
      }
    )))))
  );
}, Ze = ({ plan: t, t: n, translatePlanName: c, isRecommendedPlan: s = !1, planNameTextVariant: E, planDescriptionTextVariant: d, showRecommendedPlanBadge: u }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, /* @__PURE__ */ e.createElement(I, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(m, { variant: E }, c ? n(t.name) : t.name), s && u && /* @__PURE__ */ e.createElement(Me, { tone: "success" }, n(C.MostPopular))), t.description && /* @__PURE__ */ e.createElement(m, { variant: d, tone: "subdued" }, n(t.description))), Je = ({ plan: t, discount: n, t: c, currency: s, useShortFormPlanIntervals: E = !0, priceTextVariant: d }) => /* @__PURE__ */ e.createElement($, null, !!n && /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { variant: d }, Q(n.discountedAmount, s)), /* @__PURE__ */ e.createElement(
  m,
  {
    variant: d,
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg", tone: "subdued" }, c(C.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: E })))), !n && /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: d }, Q(t.amount, s)), /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: "bodyLg", tone: "subdued" }, c(C.Per), " ", c(oe({ interval: t.interval, useShortFormPlanIntervals: E })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, t.usageCharges.map((u, D) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${D}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: pe, tone: "subdued" })), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg" }, c(u.terms)))))), Ge = ({ plan: t, t: n, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "subdued" })), /* @__PURE__ */ e.createElement(m, null, n(C.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((s, E) => {
  const d = t.features[s];
  if (d.type !== "boolean" || d.value === !0)
    return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${E}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "subdued" })), d.type === "boolean" ? /* @__PURE__ */ e.createElement(m, null, n(d.name)) : /* @__PURE__ */ e.createElement(m, null, d.value, " ", n(d.name)));
})), Ve = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: d = !1,
  isRecommendedPlan: u = !1,
  isActivePlan: D = !1,
  t: b,
  translatePlanName: M = !0,
  showRecommendedPlanBadge: B = !0,
  planNameTextVariant: L = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: x = "headingXl",
  currency: w
}) => {
  const [g, h] = e.useState(!1), P = b || ((v) => v), H = async ({ plan: v, discount: W }) => {
    s ? (h(!0), await s({ plan: v, discount: W }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
    Ze,
    {
      plan: t,
      isRecommendedPlan: u,
      showRecommendedPlanBadge: B,
      t: P,
      translatePlanName: M,
      planNameTextVariant: L,
      planDescriptionTextVariant: O
    }
  ), /* @__PURE__ */ e.createElement(
    Je,
    {
      plan: t,
      discount: n,
      useShortFormPlanIntervals: E,
      t: P,
      priceTextVariant: x,
      currency: w
    }
  ), /* @__PURE__ */ e.createElement(
    J,
    {
      size: "large",
      variant: u ? "primary" : "secondary",
      onClick: async () => {
        await H({ plan: t, discount: n });
      },
      disabled: D,
      loading: g
    },
    P(D ? C.CurrentPlan : c || C.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Ge, { plan: t, trialDaysAsFeature: d, t: P })));
}, rt = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: E = !0,
  // boolean
  customFieldCta: d = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: u = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: D = !0,
  // boolean
  showTrialDaysAsFeature: b = !0,
  // boolean
  useShortFormPlanIntervals: M = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: B = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: L = !0
  // boolean: show custom plans
}) => {
  const O = t == null ? void 0 : t.subscription, x = new URLSearchParams(window.location.search), w = n.some((i) => i.interval === A.Annual) && n.some((i) => i.interval === A.Every30Days), g = n.find((i) => i.id === (O == null ? void 0 : O.plan.id)), [h, P] = te(
    g ? g.interval : w ? A.Annual : A.Every30Days
  ), H = n.filter((i) => i.availability === ie.Public), v = L ? n.filter((i) => i.availability !== ie.Public) : [], [W, y] = te(
    x.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: C.Plans,
      backAction: s && s !== "" ? { content: C.Back, url: s } : void 0,
      secondaryActions: D && w ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: h === A.Every30Days,
          onClick: () => P(A.Every30Days)
        },
        C.Monthly
      ), /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: h === A.Annual,
          onClick: () => P(A.Annual)
        },
        C.Yearly
      )) : void 0,
      fullWidth: B === "full",
      narrowWidth: B === "narrow"
    },
    /* @__PURE__ */ e.createElement(K, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: C.SubscribeSuccessTitle,
        onDismiss: () => {
          y(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      C.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: H,
        onSelectPlan: c,
        planInterval: h,
        cardType: ee.Highlighted,
        keyForRecommended: u,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: E
      }
    ), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(K, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(m, { variant: "headingMd" }, C.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: v,
        onSelectPlan: c,
        planInterval: h,
        cardType: ee.Highlighted,
        keyForRecommended: u,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: b,
        useShortFormPlanIntervals: M,
        showRecommendedPlanBadge: E
      }
    ))))))
  );
}, Xe = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: s,
  useShortFormPlanIntervals: E = !0,
  trialDaysAsFeature: d = !1,
  isRecommendedPlan: u = !1,
  isActivePlan: D = !1,
  t: b = _t,
  translatePlanName: M = !0,
  showRecommendedPlanBadge: B = !0,
  planNameTextVariant: L = "bodyLg",
  planDescriptionTextVariant: O = "bodyMd",
  priceTextVariant: x = "headingXl",
  currency: w
}) => {
  const [g, h] = e.useState(!1), P = async ({ plan: i, discount: N }) => {
    s ? (h(!0), await s({ plan: i, discount: N }) !== !0 && h(!1)) : console.log("No onSelectPlan callback provided");
  }, H = ({ plan: i }) => /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, { variant: L }, M ? b(i.name) : i.name), i.description && /* @__PURE__ */ e.createElement(m, { variant: O, tone: "subdued" }, b(i.description))), v = ({ plan: i }) => /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(m, { fontWeight: "medium" }, b(C.Features)), /* @__PURE__ */ e.createElement($, { gap: "100" }, d && i.trialDays && i.trialDays > 0 ? /* @__PURE__ */ e.createElement(I, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, b(C.FreeTrialLength.replace("{{ trialDays }}", i.trialDays)))) : null, i.featuresOrder.map((N, _) => {
    const j = i.features[N];
    if (j.type !== "boolean" || j.value === !0)
      return /* @__PURE__ */ e.createElement(I, { key: `plan-feature-${_}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: ce, tone: "positive" })), j.type === "boolean" ? /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, j.name) : /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, j.value, " ", j.name));
  }))), W = ({ plan: i, discount: N }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, N ? /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { variant: x }, Q(N.discountedAmount, w)), /* @__PURE__ */ e.createElement(
    m,
    {
      variant: x,
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    i.amount
  ), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg", tone: "subdued" }, C.Per, " ", oe({ interval: i.interval, useShortFormPlanIntervals: E }))) : /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: x }, Q(i.amount, w)), /* @__PURE__ */ e.createElement(m, { alignment: "center", variant: "bodyLg", tone: "subdued" }, C.Per, " ", oe({ interval: i.interval, useShortFormPlanIntervals: E }))), i.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, i.usageCharges.map((_, j) => /* @__PURE__ */ e.createElement(I, { key: `plan-usageCharge-${j}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(V, { source: pe, tone: "positive" })), /* @__PURE__ */ e.createElement(m, { variant: "bodyLg" }, _.terms))))), y = ({ plan: i, discount: N }) => /* @__PURE__ */ e.createElement(I, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
    J,
    {
      size: "large",
      variant: u ? "primary" : "secondary",
      onClick: async () => {
        await P({ plan: i, discount: N });
      },
      disabled: D,
      loading: g
    },
    b(D ? C.CurrentPlan : c || C.SelectPlan)
  ), u && B && /* @__PURE__ */ e.createElement(Me, { tone: "success" }, b(C.MostPopular)));
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, /* @__PURE__ */ e.createElement($, { gap: "300" }, H({ plan: t }), W({ plan: t, discount: n }), /* @__PURE__ */ e.createElement(K, null, y({ plan: t, discount: n })))), /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } }, v({ plan: t }))));
}, lt = ({
  plans: t,
  customer: n,
  onSubscribe: c,
  backUrl: s = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended: E = "recommended",
  keyForCustomButtonLabel: d = "buttonLabel",
  showPlanIntervalToggle: u = !1,
  // boolean
  trialDaysAsFeature: D = !0,
  // boolean
  useShortFormPlanIntervals: b = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: M = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: B = !0,
  // boolean: show custom plans
  showRecommendedPlanBadge: L = !0,
  // boolean
  applyDiscount: O = !0,
  t: x,
  translatePlanName: w = !0,
  currency: g
}) => {
  var ne;
  const h = new URLSearchParams(window.location.search), P = t.some((Y) => Y.interval === A.Annual) && t.some((Y) => Y.interval === A.Every30Days), H = (ne = n == null ? void 0 : n.subscription) != null && ne.active ? n.subscription : void 0, v = H == null ? void 0 : H.plan, [W, y] = te(
    v ? v.interval : P ? A.Annual : A.Every30Days
  ), i = t.filter(
    (Y) => Y.availability !== "customerTag" && Y.availability !== "customer"
  ), N = u && P ? i.filter((Y) => Y.interval === W) : i, _ = B ? t.filter(
    (Y) => Y.availability === "customerTag" || Y.availability === "customer"
  ) : [], [j, T] = te(
    h.get("subscribed") === "true"
  ), k = x || ((Y) => Y);
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: C.Plans,
      backAction: s !== "" ? { content: C.Back, url: s } : void 0,
      secondaryActions: u && P ? /* @__PURE__ */ e.createElement(me, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: W === A.Every30Days,
          onClick: () => y(A.Every30Days)
        },
        C.Monthly
      ), /* @__PURE__ */ e.createElement(
        J,
        {
          pressed: W === A.Annual,
          onClick: () => y(A.Annual)
        },
        C.Year
      )) : void 0,
      fullWidth: M === "full",
      narrowWidth: M === "narrow"
    },
    /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, j && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: C.SubscribeSuccessTitle,
        onDismiss: () => {
          T(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      C.SubscribeSuccessBody
    ), N.map((Y, f) => {
      const r = O ? Ae({ plan: Y }) : void 0, a = (v == null ? void 0 : v.id) === Y.id && !(H != null && H.cancelOn);
      return /* @__PURE__ */ e.createElement(
        Xe,
        {
          key: `plan-${f}`,
          plan: Y,
          discount: r,
          onSelectPlan: c,
          isActivePlan: a,
          trialDaysAsFeature: D,
          useShortFormPlanIntervals: b,
          isCustomPlan: Y.availability !== ie.Public,
          isRecommendedPlan: Ce({ plan: Y, customFieldKey: E }),
          buttonLabel: $e({ plan: Y, customFieldKey: d }),
          showRecommendedPlanBadge: L,
          t: k,
          translatePlanName: w,
          currency: g || Y.currency
        }
      );
    }), (_ == null ? void 0 : _.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (_ == null ? void 0 : _.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(K, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(m, { variant: "headingMd" }, C.CustomPlans)), /* @__PURE__ */ e.createElement(le, null, _.map((Y, f) => {
      var a;
      const r = ((a = Y.discounts) == null ? void 0 : a.length) > 0 ? Y.discounts.reduce(
        (o, l) => o.discountedAmount < l.discountedAmount ? o : l
      ) : null;
      return /* @__PURE__ */ e.createElement(le.Cell, { key: `custom-plan-${f}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, titleComponent({ plan: Y, discount: r }), pricingComponent({ plan: Y, discount: r }), ctaComponent({ plan: Y, discount: r }), featuresComponent({ plan: Y, discount: r }))));
    }))))))
  );
};
var Le = { exports: {} };
(function(t, n) {
  (function(c, s) {
    t.exports = s();
  })(De, function() {
    var c = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(s, E, d) {
      var u = E.prototype, D = u.format;
      d.en.formats = c, u.format = function(b) {
        b === void 0 && (b = "YYYY-MM-DDTHH:mm:ssZ");
        var M = this.$locale().formats, B = function(L, O) {
          return L.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(x, w, g) {
            var h = g && g.toUpperCase();
            return w || O[g] || c[g] || O[h].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(P, H, v) {
              return H || v.slice(1);
            });
          });
        }(b, M === void 0 ? {} : M);
        return D.call(this, B);
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
  cancelSubscription: E = async () => {
  },
  i18n: d,
  subscription: u,
  refetch: D = async () => {
  },
  t: b,
  translatePlanName: M = !0,
  currency: B
}) => {
  var j;
  const [L, O] = te(!1), [x, w] = te(!1), g = b || ((T) => T), h = {
    ...C,
    ...d || {}
  };
  if (!u)
    return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(m, { variant: "headingMd" }, g(h.Subscription)), /* @__PURE__ */ e.createElement(m, null, g(h.NotSubscribed)), /* @__PURE__ */ e.createElement(I, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(
      J,
      {
        variant: "primary",
        onClick: n,
        accessibilityLabel: g(h.ChangePlan)
      },
      g(h.SelectPlan)
    )))));
  const { plan: P } = u;
  B = B || P.currency;
  const H = Q(u.total, B), v = g(P.interval === A.Annual ? h.Year : h.Month), W = t === "horizontal" ? Oe : $, y = (j = u == null ? void 0 : u.appliedDiscount) == null ? void 0 : j.discount, i = y ? y.percentage ? `${y.percentage}%` : Q(y.amount, B) : null, N = y && u.appliedDiscount.discountEndsAt && fe().isAfter(fe(u.appliedDiscount.discountEndsAt)), _ = P.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(ge, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(m, { variant: "headingMd" }, g(h.Subscription)), /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(W, { columns: _, gap: "300" }, /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, null, g(h.CurrentPlan)), /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, M ? g(P.name) : P.name), u.cancelOn && /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, g("Canceled, active until {{ date }}").replace("{{ date }}", fe(u.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, null, g(h.Price)), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, { tone: "subdued" }, g(h.AmountPerInterval).replace("{{ amount }}", H).replace("{{ interval }}", v)), y && !N && /* @__PURE__ */ e.createElement(m, { tone: "success" }, g(h.DiscountAmount).replace("{{ amount }}", i)), y && N && /* @__PURE__ */ e.createElement(m, { tone: "subdued", textDecorationLine: "line-through" }, g(h.DiscountAmountExpired).replace("{{ amount }}", i)))), P.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(m, null, g(h.UsageCharges || "Usage charges")), P.usageCharges.map((T, k) => /* @__PURE__ */ e.createElement(m, { key: `usage-charge-${k}`, tone: "subdued" }, g(T.terms))))), /* @__PURE__ */ e.createElement(I, { align: "end" }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(
    J,
    {
      onClick: () => {
        c ? c() : O(!0);
      },
      accessibilityLabel: g(h.CancelPlan),
      tone: "critical",
      disabled: !!u.cancelOn
    },
    g(h.CancelPlan)
  ), /* @__PURE__ */ e.createElement(
    J,
    {
      variant: "primary",
      onClick: n,
      accessibilityLabel: g(h.ChangePlan)
    },
    g(h.ChangePlan)
  ))))), L && /* @__PURE__ */ e.createElement(
    we,
    {
      open: !0,
      onClose: () => O(!1),
      title: g(h.CancelPlan),
      primaryAction: {
        content: g(h.CancelPlan),
        destructive: !0,
        loading: x,
        disabled: x,
        onAction: async () => {
          w(!0), await E(), await D(), w(!1), O(!1), s();
        }
      },
      secondaryActions: [
        {
          content: g(h.Back),
          disabled: x,
          onAction: () => O(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(we.Section, null, g(h.CancelConfirmation))
  ));
}, ct = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: n = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: c, i18n: s, subscription: E, refetch: d } = Te(), u = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: s.Subscription,
      backAction: t ? { content: s.Back, url: t } : void 0,
      fullWidth: n === "full",
      narrowWidth: n === "narrow"
    },
    /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: u,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: d
      }
    ), /* @__PURE__ */ e.createElement(X, null, /* @__PURE__ */ e.createElement(X.Section, null, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: u,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: d
      }
    )), /* @__PURE__ */ e.createElement(X.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: u,
        cancelSubscription: c,
        i18n: s,
        subscription: E,
        refetch: d,
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
