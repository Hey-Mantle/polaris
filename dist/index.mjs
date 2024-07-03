import e, { createContext as Le, useContext as xe, useState as te } from "react";
import { Banner as ye, BlockStack as b, Text as g, InlineStack as F, Thumbnail as Ye, Button as V, Divider as ve, Box as z, Badge as Ce, Icon as J, Grid as le, Page as be, ButtonGroup as de, Layout as G, Card as me, Modal as $e, InlineGrid as Te } from "@shopify/polaris";
var Me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ke = { exports: {} };
(function(t, l) {
  (function(i, o) {
    t.exports = o();
  })(Me, function() {
    var i = 1e3, o = 6e4, C = 36e5, h = "millisecond", E = "second", x = "minute", S = "hour", w = "day", T = "week", D = "month", k = "quarter", A = "year", d = "date", u = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var r = ["th", "st", "nd", "rd"], a = s % 100;
      return "[" + s + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, L = function(s, r, a) {
      var m = String(s);
      return !m || m.length >= r ? s : "" + Array(r + 1 - m.length).join(a) + s;
    }, p = { s: L, z: function(s) {
      var r = -s.utcOffset(), a = Math.abs(r), m = Math.floor(a / 60), c = a % 60;
      return (r <= 0 ? "+" : "-") + L(m, 2, "0") + ":" + L(c, 2, "0");
    }, m: function s(r, a) {
      if (r.date() < a.date())
        return -s(a, r);
      var m = 12 * (a.year() - r.year()) + (a.month() - r.month()), c = r.clone().add(m, D), f = a - c < 0, y = r.clone().add(m + (f ? -1 : 1), D);
      return +(-(m + (a - c) / (f ? c - y : y - c)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: D, y: A, w: T, d: w, D: d, h: S, m: x, s: E, ms: h, Q: k }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, N = "en", $ = {};
    $[N] = W;
    var ne = "$isDayjsObject", X = function(s) {
      return s instanceof j || !(!s || !s[ne]);
    }, K = function s(r, a, m) {
      var c;
      if (!r)
        return N;
      if (typeof r == "string") {
        var f = r.toLowerCase();
        $[f] && (c = f), a && ($[f] = a, c = f);
        var y = r.split("-");
        if (!c && y.length > 1)
          return s(y[0]);
      } else {
        var Y = r.name;
        $[Y] = r, c = Y;
      }
      return !m && c && (N = c), c || !m && N;
    }, B = function(s, r) {
      if (X(s))
        return s.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = s, a.args = arguments, new j(a);
    }, n = p;
    n.l = K, n.i = X, n.w = function(s, r) {
      return B(s, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var j = function() {
      function s(a) {
        this.$L = K(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[ne] = !0;
      }
      var r = s.prototype;
      return r.parse = function(a) {
        this.$d = function(m) {
          var c = m.date, f = m.utc;
          if (c === null)
            return /* @__PURE__ */ new Date(NaN);
          if (n.u(c))
            return /* @__PURE__ */ new Date();
          if (c instanceof Date)
            return new Date(c);
          if (typeof c == "string" && !/Z$/i.test(c)) {
            var y = c.match(M);
            if (y) {
              var Y = y[2] - 1 || 0, O = (y[7] || "0").substring(0, 3);
              return f ? new Date(Date.UTC(y[1], Y, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, O)) : new Date(y[1], Y, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, O);
            }
          }
          return new Date(c);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return n;
      }, r.isValid = function() {
        return this.$d.toString() !== u;
      }, r.isSame = function(a, m) {
        var c = B(a);
        return this.startOf(m) <= c && c <= this.endOf(m);
      }, r.isAfter = function(a, m) {
        return B(a) < this.startOf(m);
      }, r.isBefore = function(a, m) {
        return this.endOf(m) < B(a);
      }, r.$g = function(a, m, c) {
        return n.u(a) ? this[m] : this.set(c, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, m) {
        var c = this, f = !!n.u(m) || m, y = n.p(a), Y = function(re, R) {
          var q = n.w(c.$u ? Date.UTC(c.$y, R, re) : new Date(c.$y, R, re), c);
          return f ? q : q.endOf(w);
        }, O = function(re, R) {
          return n.w(c.toDate()[re].apply(c.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), c);
        }, _ = this.$W, U = this.$M, Z = this.$D, ie = "set" + (this.$u ? "UTC" : "");
        switch (y) {
          case A:
            return f ? Y(1, 0) : Y(31, 11);
          case D:
            return f ? Y(1, U) : Y(0, U + 1);
          case T:
            var ae = this.$locale().weekStart || 0, oe = (_ < ae ? _ + 7 : _) - ae;
            return Y(f ? Z - oe : Z + (6 - oe), U);
          case w:
          case d:
            return O(ie + "Hours", 0);
          case S:
            return O(ie + "Minutes", 1);
          case x:
            return O(ie + "Seconds", 2);
          case E:
            return O(ie + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, m) {
        var c, f = n.p(a), y = "set" + (this.$u ? "UTC" : ""), Y = (c = {}, c[w] = y + "Date", c[d] = y + "Date", c[D] = y + "Month", c[A] = y + "FullYear", c[S] = y + "Hours", c[x] = y + "Minutes", c[E] = y + "Seconds", c[h] = y + "Milliseconds", c)[f], O = f === w ? this.$D + (m - this.$W) : m;
        if (f === D || f === A) {
          var _ = this.clone().set(d, 1);
          _.$d[Y](O), _.init(), this.$d = _.set(d, Math.min(this.$D, _.daysInMonth())).$d;
        } else
          Y && this.$d[Y](O);
        return this.init(), this;
      }, r.set = function(a, m) {
        return this.clone().$set(a, m);
      }, r.get = function(a) {
        return this[n.p(a)]();
      }, r.add = function(a, m) {
        var c, f = this;
        a = Number(a);
        var y = n.p(m), Y = function(U) {
          var Z = B(f);
          return n.w(Z.date(Z.date() + Math.round(U * a)), f);
        };
        if (y === D)
          return this.set(D, this.$M + a);
        if (y === A)
          return this.set(A, this.$y + a);
        if (y === w)
          return Y(1);
        if (y === T)
          return Y(7);
        var O = (c = {}, c[x] = o, c[S] = C, c[E] = i, c)[y] || 1, _ = this.$d.getTime() + a * O;
        return n.w(_, this);
      }, r.subtract = function(a, m) {
        return this.add(-1 * a, m);
      }, r.format = function(a) {
        var m = this, c = this.$locale();
        if (!this.isValid())
          return c.invalidDate || u;
        var f = a || "YYYY-MM-DDTHH:mm:ssZ", y = n.z(this), Y = this.$H, O = this.$m, _ = this.$M, U = c.weekdays, Z = c.months, ie = c.meridiem, ae = function(R, q, ue, he) {
          return R && (R[q] || R(m, f)) || ue[q].slice(0, he);
        }, oe = function(R) {
          return n.s(Y % 12 || 12, R, "0");
        }, re = ie || function(R, q, ue) {
          var he = R < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return f.replace(H, function(R, q) {
          return q || function(ue) {
            switch (ue) {
              case "YY":
                return String(m.$y).slice(-2);
              case "YYYY":
                return n.s(m.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return n.s(_ + 1, 2, "0");
              case "MMM":
                return ae(c.monthsShort, _, Z, 3);
              case "MMMM":
                return ae(Z, _);
              case "D":
                return m.$D;
              case "DD":
                return n.s(m.$D, 2, "0");
              case "d":
                return String(m.$W);
              case "dd":
                return ae(c.weekdaysMin, m.$W, U, 2);
              case "ddd":
                return ae(c.weekdaysShort, m.$W, U, 3);
              case "dddd":
                return U[m.$W];
              case "H":
                return String(Y);
              case "HH":
                return n.s(Y, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return re(Y, O, !0);
              case "A":
                return re(Y, O, !1);
              case "m":
                return String(O);
              case "mm":
                return n.s(O, 2, "0");
              case "s":
                return String(m.$s);
              case "ss":
                return n.s(m.$s, 2, "0");
              case "SSS":
                return n.s(m.$ms, 3, "0");
              case "Z":
                return y;
            }
            return null;
          }(R) || y.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, m, c) {
        var f, y = this, Y = n.p(m), O = B(a), _ = (O.utcOffset() - this.utcOffset()) * o, U = this - O, Z = function() {
          return n.m(y, O);
        };
        switch (Y) {
          case A:
            f = Z() / 12;
            break;
          case D:
            f = Z();
            break;
          case k:
            f = Z() / 3;
            break;
          case T:
            f = (U - _) / 6048e5;
            break;
          case w:
            f = (U - _) / 864e5;
            break;
          case S:
            f = U / C;
            break;
          case x:
            f = U / o;
            break;
          case E:
            f = U / i;
            break;
          default:
            f = U;
        }
        return c ? f : n.a(f);
      }, r.daysInMonth = function() {
        return this.endOf(D).$D;
      }, r.$locale = function() {
        return $[this.$L];
      }, r.locale = function(a, m) {
        if (!a)
          return this.$L;
        var c = this.clone(), f = K(a, m, !0);
        return f && (c.$L = f), c;
      }, r.clone = function() {
        return n.w(this.$d, this);
      }, r.toDate = function() {
        return new Date(this.valueOf());
      }, r.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, r.toISOString = function() {
        return this.$d.toISOString();
      }, r.toString = function() {
        return this.$d.toUTCString();
      }, s;
    }(), I = j.prototype;
    return B.prototype = I, [["$ms", h], ["$s", E], ["$m", x], ["$H", S], ["$W", w], ["$M", D], ["$y", A], ["$D", d]].forEach(function(s) {
      I[s[1]] = function(r) {
        return this.$g(r, s[0], s[1]);
      };
    }), B.extend = function(s, r) {
      return s.$i || (s(r, j, B), s.$i = !0), B;
    }, B.locale = K, B.isDayjs = X, B.unix = function(s) {
      return B(1e3 * s);
    }, B.en = $[N], B.Ls = $, B.p = {}, B;
  });
})(ke);
var Be = ke.exports;
const Ee = /* @__PURE__ */ Pe(Be), P = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ge = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, v = {
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
}, Fe = Le(), Oe = () => {
  const t = xe(Fe);
  if (t === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return t;
}, He = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), Q = (t, l = "USD", i = !0) => {
  let o = He(l).format(t);
  return i && (o = o.replace(/\.00$/, "")), o;
}, Ie = (t = P.Every30Days) => {
  switch (t) {
    case P.Annual:
      return "year";
    case P.Every30Days:
    default:
      return "month";
  }
}, _e = (t = P.Every30Days) => {
  switch (t) {
    case P.Annual:
      return "yr";
    case P.Every30Days:
    default:
      return "mo";
  }
}, se = ({
  interval: t = P.Every30Days,
  useShortFormPlanIntervals: l = !0
}) => l ? _e(t) : Ie(t), we = ({ plan: t, customFieldKey: l = "recommended" }) => {
  var i;
  return !!((i = t.customFields) != null && i[l]);
}, De = ({ plan: t, customFieldKey: l = "buttonLabel" }) => {
  var i;
  return ((i = t.customFields) == null ? void 0 : i[l]) || v.SelectPlan;
}, ze = ({ plan: t }) => {
  var l;
  return ((l = t.discounts) == null ? void 0 : l.length) > 0 ? t.discounts.reduce(
    (i, o) => i.discountedAmount < o.discountedAmount ? i : o
  ) : void 0;
}, We = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, Ne = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4, tt = ({
  orientation: t = "horizontal",
  onShowPlans: l,
  onCancelPlan: i,
  onPlanCancelled: o = () => {
  },
  cancelSubscription: C = async () => {
  },
  i18n: h,
  subscription: E,
  refetch: x = async () => {
  },
  apps: S = []
}) => /* @__PURE__ */ e.createElement(ye, { title: "Bundle and save!", tone: "success" }, /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(g, null, "Save money on your subscription when you install these great apps."), /* @__PURE__ */ e.createElement(b, { gap: "300" }, S.map((w, T) => /* @__PURE__ */ e.createElement(b, { gap: "300" }, /* @__PURE__ */ e.createElement(F, { gap: "200", align: "space-between", blockAlign: "center" }, /* @__PURE__ */ e.createElement(F, { gap: "300" }, /* @__PURE__ */ e.createElement(
  Ye,
  {
    source: w.iconUrl,
    alt: w.name,
    size: "small"
  }
), /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, { variant: "headingSm" }, w.name), /* @__PURE__ */ e.createElement(g, null, w.description))), /* @__PURE__ */ e.createElement(F, { gap: "400" }, /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, "20% off"), /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(V, null, h.Install)))), T < S.length - 1 && /* @__PURE__ */ e.createElement(ve, null))))));
var ce = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
ce.displayName = "CheckIcon";
var pe = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
pe.displayName = "PlusIcon";
const je = ({ plan: t, t: l, translatePlanName: i }) => /* @__PURE__ */ e.createElement(b, { gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd", alignment: "center" }, i ? l(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued", alignment: "center" }, l(t.description))), Ue = ({ plan: t, discount: l, t: i, useShortFormPlanIntervals: o = !0 }) => /* @__PURE__ */ e.createElement(b, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(F, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "heading3xl" }, Q(l.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Q(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: o })))), !l && /* @__PURE__ */ e.createElement(F, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "heading3xl" }, Q(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: o })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(b, null, t.usageCharges.map((C, h) => /* @__PURE__ */ e.createElement(F, { key: `plan-usageCharge-${h}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: pe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i(C.terms)))))), Re = ({ plan: t, t: l, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement(b, { gap: "300" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(F, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(v.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((o, C) => {
  const h = t.features[o];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(F, { key: `plan-feature-${C}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), Ve = ({
  plan: t,
  discount: l,
  buttonLabel: i,
  onSelectPlan: o,
  useShortFormPlanIntervals: C = !0,
  trialDaysAsFeature: h = !1,
  expanded: E = !1,
  isActivePlan: x = !1,
  isRecommendedPlan: S = !1,
  isCustomPlan: w = !1,
  showRecommendedPlanBadge: T = !0,
  t: D,
  translatePlanName: k = !0
}) => {
  const [A, d] = e.useState(!1), u = D || ((H) => H), M = async ({ plan: H, discount: W }) => {
    o ? (d(!0), await o({ plan: H, discount: W }) !== !0 && d(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(z, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(z, { paddingBlock: E || S ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    z,
    {
      background: S || w ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: E || S ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(b, { gap: "800" }, /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(je, { plan: t, t: u, translatePlanName: k }), /* @__PURE__ */ e.createElement(
      Ue,
      {
        plan: t,
        discount: l,
        useShortFormPlanIntervals: C,
        t: u
      }
    )), /* @__PURE__ */ e.createElement(
      V,
      {
        size: "large",
        variant: S ? "primary" : "secondary",
        onClick: async () => {
          await M({ plan: t, discount: l });
        },
        disabled: x,
        loading: A
      },
      u(i || v.SelectPlan)
    ), /* @__PURE__ */ e.createElement(Re, { plan: t, t: u, trialDaysAsFeature: h }), S && T && /* @__PURE__ */ e.createElement(F, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Ce, { tone: "success" }, u(v.MostPopular))))
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
}, fe = ({
  plans: t,
  customer: l,
  onSelectPlan: i,
  planInterval: o,
  cardType: C = ee.Horizontal,
  trialDaysAsFeature: h = !0,
  useShortFormPlanIntervals: E = !0,
  keyForRecommended: x = "recommended",
  keyForCustomButtonLabel: S = "buttonLabel",
  showRecommendedPlanBadge: w = !0,
  applyDiscount: T = !0,
  t: D,
  translatePlanName: k = !0
}) => {
  var L;
  const A = (L = l == null ? void 0 : l.subscription) != null && L.active ? l.subscription : void 0, d = A == null ? void 0 : A.plan, u = o ? t.filter((p) => p.interval === o) : t, M = C === ee.Vertical ? 1 : Ne(u.length), H = We(M), W = D || ((p) => p);
  return /* @__PURE__ */ e.createElement(le, { columns: M }, u.map((p) => {
    const N = T ? ze({ plan: p }) : void 0, $ = (d == null ? void 0 : d.id) === p.id && !(A != null && A.cancelOn);
    return /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: H, key: p.id }, C === ee.Highlighted && /* @__PURE__ */ e.createElement(
      Ve,
      {
        key: `HighlightedPlanCard-${p.id}`,
        plan: p,
        discount: N,
        onSelectPlan: i,
        isActivePlan: $,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: E,
        isCustomPlan: p.availability !== ge.Public,
        isRecommendedPlan: we({ plan: p, customFieldKey: x }),
        buttonLabel: De({ plan: p, customFieldKey: S }),
        showRecommendedPlanBadge: w,
        t: W,
        translatePlanName: k
      }
    ), C === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Je,
      {
        key: `HorizontalPlanCard-${p.id}`,
        plan: p,
        discount: N,
        onSelectPlan: i,
        isActivePlan: $,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: E,
        isRecommendedPlan: we({ plan: p, customFieldKey: x }),
        buttonLabel: De({ plan: p, customFieldKey: S }),
        showRecommendedPlanBadge: w,
        t: W,
        translatePlanName: k
      }
    ));
  }));
}, nt = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: o = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: C = !0,
  // boolean
  customFieldCta: h,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: E = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: x = !0,
  // boolean
  showTrialDaysAsFeature: S = !0,
  // boolean
  useShortFormPlanIntervals: w,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const k = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some(($) => $.interval === P.Annual) && l.some(($) => $.interval === P.Every30Days), u = l.find(($) => $.id === (k == null ? void 0 : k.plan.id)), [M, H] = te(
    u ? u.interval : d ? P.Annual : P.Every30Days
  ), W = l.filter(($) => $.availability === ge.Public), L = D ? l.filter(($) => $.availability !== ge.Public) : [], [p, N] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: v.Plans,
      backAction: o ? { content: v.Back, url: o } : void 0,
      secondaryActions: x && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Every30Days,
          onClick: () => H(P.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Annual,
          onClick: () => H(P.Annual)
        },
        v.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(b, { gap: "1000" }, p && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          N(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      fe,
      {
        plans: W,
        onSelectPlan: i,
        planInterval: M,
        cardType: ee.Horizontal,
        keyForRecommended: E,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: S,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: C
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(b, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(
      fe,
      {
        plans: L,
        onSelectPlan: i,
        planInterval: M,
        cardType: ee.Horizontal,
        keyForRecommended: E,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: S,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: C
      }
    )))))
  );
}, Ze = ({ plan: t, t: l, translatePlanName: i, isRecommendedPlan: o = !1 }) => /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(F, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i ? l(t.name) : t.name), o && /* @__PURE__ */ e.createElement(Ce, { tone: "success" }, l(v.MostPopular))), t.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(t.description))), Ke = ({ plan: t, discount: l, t: i, useShortFormPlanIntervals: o = !0 }) => /* @__PURE__ */ e.createElement(b, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(F, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(l.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: o })))), !l && /* @__PURE__ */ e.createElement(F, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(t.amount, t.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: o })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(b, null, t.usageCharges.map((C, h) => /* @__PURE__ */ e.createElement(F, { key: `plan-usageCharge-${h}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: pe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i(C.terms)))))), Xe = ({ plan: t, t: l, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement(b, { gap: "100" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(F, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(v.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((o, C) => {
  const h = t.features[o];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(F, { key: `plan-feature-${C}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), Je = ({
  plan: t,
  discount: l,
  buttonLabel: i,
  onSelectPlan: o,
  useShortFormPlanIntervals: C = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: E = !1,
  isActivePlan: x = !1,
  t: S,
  translatePlanName: w = !0
}) => {
  const [T, D] = e.useState(!1), k = S || ((d) => d), A = async ({ plan: d, discount: u }) => {
    o ? (D(!0), await o({ plan: d, discount: u }) !== !0 && D(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(Ze, { plan: t, isRecommendedPlan: E, t: k, translatePlanName: w }), /* @__PURE__ */ e.createElement(
    Ke,
    {
      plan: t,
      discount: l,
      useShortFormPlanIntervals: C,
      t: k
    }
  ), /* @__PURE__ */ e.createElement(
    V,
    {
      size: "large",
      variant: E ? "primary" : "secondary",
      onClick: async () => {
        await A({ plan: t, discount: l });
      },
      disabled: x,
      loading: T
    },
    k(x ? v.CurrentPlan : i || v.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Xe, { plan: t, trialDaysAsFeature: h, t: k })));
}, at = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: o = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: C = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: E = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: x = !0,
  // boolean
  showTrialDaysAsFeature: S = !0,
  // boolean
  useShortFormPlanIntervals: w = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const k = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some(($) => $.interval === P.Annual) && l.some(($) => $.interval === P.Every30Days), u = l.find(($) => $.id === (k == null ? void 0 : k.plan.id)), [M, H] = te(
    u ? u.interval : d ? P.Annual : P.Every30Days
  ), W = l.filter(($) => $.availability === ge.Public), L = D ? l.filter(($) => $.availability !== ge.Public) : [], [p, N] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: v.Plans,
      backAction: o && o !== "" ? { content: v.Back, url: o } : void 0,
      secondaryActions: x && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Every30Days,
          onClick: () => H(P.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Annual,
          onClick: () => H(P.Annual)
        },
        v.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(z, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(b, { gap: "1000" }, p && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          N(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      fe,
      {
        plans: W,
        onSelectPlan: i,
        planInterval: M,
        cardType: ee.Highlighted,
        keyForRecommended: E,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: S,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: C
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement(b, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(
      fe,
      {
        plans: L,
        onSelectPlan: i,
        planInterval: M,
        cardType: ee.Highlighted,
        keyForRecommended: E,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: S,
        useShortFormPlanIntervals: w,
        showRecommendedPlanBadge: C
      }
    ))))))
  );
}, rt = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: o = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: C = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: E = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: x = !1,
  // boolean
  showTrialDaysAsFeature: S = !0,
  // boolean
  useShortFormPlanIntervals: w = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const k = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some((n) => n.interval === P.Annual) && l.some((n) => n.interval === P.Every30Days), u = l.find((n) => n.id === (k == null ? void 0 : k.plan.id)), [M, H] = te(
    u ? u.interval : d ? P.Annual : P.Every30Days
  ), W = l.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), L = x && d ? W.filter((n) => n.interval === M) : W, p = D ? l.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [N, $] = te(
    A.get("subscribed") === "true"
  ), ne = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, n.description)), X = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement(b, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { fontWeight: "medium" }, v.Features), /* @__PURE__ */ e.createElement(b, { gap: "100" }, S && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(F, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, v.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((I, s) => {
    const r = n.features[I];
    if (r.type !== "boolean" || r.value === !0)
      return /* @__PURE__ */ e.createElement(F, { key: `plan-feature-${s}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), r.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.name) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.value, " ", r.name));
  }))), K = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement(b, { gap: "100" }, j ? /* @__PURE__ */ e.createElement(F, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(j.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    g,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, v.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: w }))) : /* @__PURE__ */ e.createElement(F, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(n.amount, n.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, v.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: w }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(b, null, n.usageCharges.map((I, s) => /* @__PURE__ */ e.createElement(F, { key: `plan-usageCharge-${s}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: pe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, I.terms))))), B = ({ plan: n, discount: j }) => {
    const I = h && n.customFields[h], s = n.customFields && n.customFields[E];
    return /* @__PURE__ */ e.createElement(F, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      V,
      {
        size: "large",
        variant: s ? "primary" : "secondary",
        onClick: () => i({ planId: n.id, discountId: j == null ? void 0 : j.id }),
        disabled: (u == null ? void 0 : u.id) === n.id
      },
      (u == null ? void 0 : u.id) === n.id ? v.CurrentPlan : I ? n.customFields[h] : v.SelectPlan
    ), s && C && /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(Ce, { tone: "success" }, v.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: v.Plans,
      backAction: o !== "" ? { content: v.Back, url: o } : void 0,
      secondaryActions: x && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Every30Days,
          onClick: () => H(P.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        V,
        {
          pressed: M === P.Annual,
          onClick: () => H(P.Annual)
        },
        v.Year
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(b, { gap: "400" }, N && /* @__PURE__ */ e.createElement(
      ye,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          $(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), L.map((n, j) => {
      var s;
      const I = ((s = n.discounts) == null ? void 0 : s.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${j}` }, /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(b, { gap: "200" }, ne({ plan: n, discount: I }), K({ plan: n, discount: I })), /* @__PURE__ */ e.createElement(z, null, B({ plan: n, discount: I })))), /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, X({ plan: n, discount: I }))));
    }), (p == null ? void 0 : p.length) > 0 && /* @__PURE__ */ e.createElement(ve, { borderColor: "border" }), (p == null ? void 0 : p.length) > 0 && /* @__PURE__ */ e.createElement(b, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(le, null, p.map((n, j) => {
      var s;
      const I = ((s = n.discounts) == null ? void 0 : s.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(le.Cell, { key: `custom-plan-${j}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(b, { gap: "400" }, ne({ plan: n, discount: I }), K({ plan: n, discount: I }), B({ plan: n, discount: I }), X({ plan: n, discount: I }))));
    }))))))
  );
};
var Ae = { exports: {} };
(function(t, l) {
  (function(i, o) {
    t.exports = o();
  })(Me, function() {
    var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(o, C, h) {
      var E = C.prototype, x = E.format;
      h.en.formats = i, E.format = function(S) {
        S === void 0 && (S = "YYYY-MM-DDTHH:mm:ssZ");
        var w = this.$locale().formats, T = function(D, k) {
          return D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, d, u) {
            var M = u && u.toUpperCase();
            return d || k[u] || i[u] || k[M].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, W, L) {
              return W || L.slice(1);
            });
          });
        }(S, w === void 0 ? {} : w);
        return x.call(this, T);
      };
    };
  });
})(Ae);
var Ge = Ae.exports;
const Qe = /* @__PURE__ */ Pe(Ge);
Ee.extend(Qe);
const Se = ({
  orientation: t = "horizontal",
  onShowPlans: l,
  onCancelPlan: i,
  onPlanCancelled: o = () => {
  },
  cancelSubscription: C = async () => {
  },
  i18n: h,
  subscription: E,
  refetch: x = async () => {
  },
  t: S,
  translatePlanName: w = !0
}) => {
  var X;
  const [T, D] = te(!1), [k, A] = te(!1), d = S || ((K) => K), u = {
    ...v,
    ...h || {}
  };
  if (!E)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(b, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, d(u.Subscription)), /* @__PURE__ */ e.createElement(g, null, d(u.NotSubscribed)), /* @__PURE__ */ e.createElement(F, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      V,
      {
        variant: "primary",
        onClick: l,
        accessibilityLabel: d(u.ChangePlan)
      },
      d(u.SelectPlan)
    )))));
  const { plan: M } = E, H = Q(E.total, M.currency), W = d(M.interval === P.Annual ? u.Year : u.Month), L = t === "horizontal" ? Te : b, p = (X = E == null ? void 0 : E.appliedDiscount) == null ? void 0 : X.discount, N = p ? p.percentage ? `${p.percentage}%` : Q(p.amount, M.currency) : null, $ = p && E.appliedDiscount.discountEndsAt && Ee().isAfter(Ee(E.appliedDiscount.discountEndsAt)), ne = M.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(b, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, d(u.Subscription)), /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(L, { columns: ne, gap: "300" }, /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, null, d(u.CurrentPlan)), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, w ? d(M.name) : M.name), E.cancelOn && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, d("Canceled, active until {{ date }}").replace("{{ date }}", Ee(E.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, null, d(u.Price)), /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, d(u.AmountPerInterval).replace("{{ amount }}", H).replace("{{ interval }}", W)), p && !$ && /* @__PURE__ */ e.createElement(g, { tone: "success" }, d(u.DiscountAmount).replace("{{ amount }}", N)), p && $ && /* @__PURE__ */ e.createElement(g, { tone: "subdued", textDecorationLine: "line-through" }, d(u.DiscountAmountExpired).replace("{{ amount }}", N)))), M.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(b, null, /* @__PURE__ */ e.createElement(g, null, d(u.UsageCharges || "Usage charges")), M.usageCharges.map((K, B) => /* @__PURE__ */ e.createElement(g, { key: `usage-charge-${B}`, tone: "subdued" }, d(K.terms))))), /* @__PURE__ */ e.createElement(F, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
    V,
    {
      onClick: () => {
        i ? i() : D(!0);
      },
      accessibilityLabel: d(u.CancelPlan),
      tone: "critical",
      disabled: !!E.cancelOn
    },
    d(u.CancelPlan)
  ), /* @__PURE__ */ e.createElement(
    V,
    {
      variant: "primary",
      onClick: l,
      accessibilityLabel: d(u.ChangePlan)
    },
    d(u.ChangePlan)
  ))))), T && /* @__PURE__ */ e.createElement(
    $e,
    {
      open: !0,
      onClose: () => D(!1),
      title: d(u.CancelPlan),
      primaryAction: {
        content: d(u.CancelPlan),
        destructive: !0,
        loading: k,
        disabled: k,
        onAction: async () => {
          A(!0), await C(), await x(), A(!1), D(!1), o();
        }
      },
      secondaryActions: [
        {
          content: d(u.Back),
          disabled: k,
          onAction: () => D(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement($e.Section, null, d(u.CancelConfirmation))
  ));
}, lt = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: l = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: i, i18n: o, subscription: C, refetch: h } = Oe(), E = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    be,
    {
      title: o.Subscription,
      backAction: t ? { content: o.Back, url: t } : void 0,
      fullWidth: l === "full",
      narrowWidth: l === "narrow"
    },
    /* @__PURE__ */ e.createElement(b, { gap: "400" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: E,
        cancelSubscription: i,
        i18n: o,
        subscription: C,
        refetch: h
      }
    ), /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: E,
        cancelSubscription: i,
        i18n: o,
        subscription: C,
        refetch: h
      }
    )), /* @__PURE__ */ e.createElement(G.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      Se,
      {
        onShowPlans: E,
        cancelSubscription: i,
        i18n: o,
        subscription: C,
        refetch: h,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  tt as BundleCard,
  Ve as HighlightedPlanCard,
  at as HighlightedPlanCards,
  Je as HorizontalPlanCard,
  nt as HorizontalPlanCards,
  fe as PlanCardStack,
  ee as PlanCardType,
  Se as SubscriptionSummaryCard,
  lt as SubscriptionSummaryPage,
  rt as VerticalPlanCards
};
