import e, { createContext as Me, useContext as ke, useState as te } from "react";
import { Box as W, BlockStack as p, Button as K, InlineStack as O, Badge as be, Text as g, Icon as J, Grid as le, Page as ye, ButtonGroup as de, Layout as G, Banner as pe, Divider as Se, Card as me, Modal as $e, InlineGrid as Ae } from "@shopify/polaris";
const C = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ge = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, f = {
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
}, xe = Me(), Le = () => {
  const t = ke(xe);
  if (t === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return t;
}, Be = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), Q = (t, l = "USD", s = !0) => {
  let d = Be(l).format(t);
  return s && (d = d.replace(/\.00$/, "")), d;
}, Te = (t = C.Every30Days) => {
  switch (t) {
    case C.Annual:
      return "year";
    case C.Every30Days:
    default:
      return "month";
  }
}, Fe = (t = C.Every30Days) => {
  switch (t) {
    case C.Annual:
      return "yr";
    case C.Every30Days:
    default:
      return "mo";
  }
}, se = ({
  interval: t = C.Every30Days,
  useShortFormPlanIntervals: l = !0
}) => l ? Fe(t) : Te(t), Ce = ({ plan: t, customFieldKey: l = "recommended" }) => {
  var s;
  return !!((s = t.customFields) != null && s[l]);
}, we = ({ plan: t, customFieldKey: l = "buttonLabel" }) => {
  var s;
  return ((s = t.customFields) == null ? void 0 : s[l]) || f.SelectPlan;
}, He = ({ plan: t }) => {
  var l;
  return ((l = t.discounts) == null ? void 0 : l.length) > 0 ? t.discounts.reduce(
    (s, d) => s.discountedAmount < d.discountedAmount ? s : d
  ) : void 0;
}, Oe = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, Ie = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4;
var ie = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
ie.displayName = "CheckIcon";
var fe = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
fe.displayName = "PlusIcon";
const Ye = ({ plan: t, t: l, translatePlanName: s }) => /* @__PURE__ */ e.createElement(p, { gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd", alignment: "center" }, s ? l(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued", alignment: "center" }, l(t.description))), _e = ({ plan: t, discount: l, t: s, useShortFormPlanIntervals: d = !0 }) => /* @__PURE__ */ e.createElement(p, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "heading3xl" }, Q(l.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Q(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, s(f.Per), " ", s(se({ interval: t.interval, useShortFormPlanIntervals: d })))), !l && /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "heading3xl" }, Q(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, s(f.Per), " ", s(se({ interval: t.interval, useShortFormPlanIntervals: d })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(p, null, t.usageCharges.map((S, h) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${h}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, s(S.terms)))))), We = ({ plan: t, t: l, trialDaysAsFeature: s = !1 }) => /* @__PURE__ */ e.createElement(p, { gap: "300" }, s && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(f.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((d, S) => {
  const h = t.features[d];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${S}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), ze = ({
  plan: t,
  discount: l,
  buttonLabel: s,
  onSelectPlan: d,
  useShortFormPlanIntervals: S = !0,
  trialDaysAsFeature: h = !1,
  expanded: b = !1,
  isActivePlan: B = !1,
  isRecommendedPlan: D = !1,
  isCustomPlan: A = !1,
  showRecommendedPlanBadge: F = !0,
  t: w,
  translatePlanName: M = !0
}) => {
  const [L, o] = e.useState(!1), m = w || ((I) => I), P = async ({ plan: I, discount: U }) => {
    d ? (o(!0), await d({ plan: I, discount: U }) !== !0 && o(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(W, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(W, { paddingBlock: b || D ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    W,
    {
      background: D || A ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: b || D ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(p, { gap: "800" }, /* @__PURE__ */ e.createElement(p, { gap: "400" }, /* @__PURE__ */ e.createElement(Ye, { plan: t, t: m, translatePlanName: M }), /* @__PURE__ */ e.createElement(
      _e,
      {
        plan: t,
        discount: l,
        useShortFormPlanIntervals: S,
        t: m
      }
    )), /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: D ? "primary" : "secondary",
        onClick: async () => {
          await P({ plan: t, discount: l });
        },
        disabled: B,
        loading: L
      },
      m(s || f.SelectPlan)
    ), /* @__PURE__ */ e.createElement(We, { plan: t, t: m, trialDaysAsFeature: h }), D && F && /* @__PURE__ */ e.createElement(O, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(be, { tone: "success" }, m(f.MostPopular))))
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
  customer: l,
  onSelectPlan: s,
  planInterval: d,
  cardType: S = ee.Horizontal,
  trialDaysAsFeature: h = !0,
  useShortFormPlanIntervals: b = !0,
  keyForRecommended: B = "recommended",
  keyForCustomButtonLabel: D = "buttonLabel",
  showRecommendedPlanBadge: A = !0,
  applyDiscount: F = !0,
  t: w,
  translatePlanName: M = !0
}) => {
  var k;
  const L = (k = l == null ? void 0 : l.subscription) != null && k.active ? l.subscription : void 0, o = L == null ? void 0 : L.plan, m = d ? t.filter((v) => v.interval === d) : t, P = S === ee.Vertical ? 1 : Ie(m.length), I = Oe(P), U = w || ((v) => v);
  return /* @__PURE__ */ e.createElement(le, { columns: P }, m.map((v) => {
    const z = F ? He({ plan: v }) : void 0;
    return /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: I, key: v.id }, S === ee.Highlighted && /* @__PURE__ */ e.createElement(
      ze,
      {
        key: `HighlightedPlanCard-${v.id}`,
        plan: v,
        discount: z,
        onSelectPlan: s,
        isActivePlan: (o == null ? void 0 : o.id) === v.id,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: b,
        isCustomPlan: v.availability !== ge.Public,
        isRecommendedPlan: Ce({ plan: v, customFieldKey: B }),
        buttonLabel: we({ plan: v, customFieldKey: D }),
        showRecommendedPlanBadge: A,
        t: U,
        translatePlanName: M
      }
    ), S === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HorizontalPlanCard-${v.id}`,
        plan: v,
        discount: z,
        onSelectPlan: s,
        isActivePlan: (o == null ? void 0 : o.id) === v.id,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: b,
        isRecommendedPlan: Ce({ plan: v, customFieldKey: B }),
        buttonLabel: we({ plan: v, customFieldKey: D }),
        showRecommendedPlanBadge: A,
        t: U,
        translatePlanName: M
      }
    ));
  }));
}, Ge = ({
  customer: t,
  plans: l,
  onSubscribe: s,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: B = !0,
  // boolean
  showTrialDaysAsFeature: D = !0,
  // boolean
  useShortFormPlanIntervals: A,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: F = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const M = t == null ? void 0 : t.subscription, L = new URLSearchParams(window.location.search), o = l.some(($) => $.interval === C.Annual) && l.some(($) => $.interval === C.Every30Days), m = l.find(($) => $.id === (M == null ? void 0 : M.plan.id)), [P, I] = te(
    m ? m.interval : o ? C.Annual : C.Every30Days
  ), U = l.filter(($) => $.availability === ge.Public), k = w ? l.filter(($) => $.availability !== ge.Public) : [], [v, z] = te(
    L.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: f.Plans,
      backAction: d ? { content: f.Back, url: d } : void 0,
      secondaryActions: B && o ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Every30Days,
          onClick: () => I(C.Every30Days)
        },
        f.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Annual,
          onClick: () => I(C.Annual)
        },
        f.Yearly
      )) : void 0,
      fullWidth: F === "full",
      narrowWidth: F === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(p, { gap: "1000" }, v && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: f.SubscribeSuccessTitle,
        onDismiss: () => {
          z(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      f.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: U,
        onSelectPlan: s,
        planInterval: P,
        cardType: ee.Horizontal,
        keyForRecommended: b,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: D,
        useShortFormPlanIntervals: A,
        showRecommendedPlanBadge: S
      }
    ), (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ e.createElement(p, { gap: "300" }, /* @__PURE__ */ e.createElement(W, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, f.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: k,
        onSelectPlan: s,
        planInterval: P,
        cardType: ee.Horizontal,
        keyForRecommended: b,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: D,
        useShortFormPlanIntervals: A,
        showRecommendedPlanBadge: S
      }
    )))))
  );
}, Ne = ({ plan: t, t: l, translatePlanName: s, isRecommendedPlan: d = !1 }) => /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(O, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, s ? l(t.name) : t.name), d && /* @__PURE__ */ e.createElement(be, { tone: "success" }, l(f.MostPopular))), t.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(t.description))), je = ({ plan: t, discount: l, t: s, useShortFormPlanIntervals: d = !0 }) => /* @__PURE__ */ e.createElement(p, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(l.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, s(f.Per), " ", s(se({ interval: t.interval, useShortFormPlanIntervals: d })))), !l && /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(t.amount, t.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, s(f.Per), " ", s(se({ interval: t.interval, useShortFormPlanIntervals: d })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(p, null, t.usageCharges.map((S, h) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${h}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, s(S.terms)))))), Ue = ({ plan: t, t: l, trialDaysAsFeature: s = !1 }) => /* @__PURE__ */ e.createElement(p, { gap: "100" }, s && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(O, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(f.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((d, S) => {
  const h = t.features[d];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${S}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), Re = ({
  plan: t,
  discount: l,
  buttonLabel: s,
  onSelectPlan: d,
  useShortFormPlanIntervals: S = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: b = !1,
  isActivePlan: B = !1,
  t: D,
  translatePlanName: A = !0
}) => {
  const [F, w] = e.useState(!1), M = D || ((o) => o), L = async ({ plan: o, discount: m }) => {
    d ? (w(!0), await d({ plan: o, discount: m }) !== !0 && w(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(p, { gap: "400" }, /* @__PURE__ */ e.createElement(Ne, { plan: t, isRecommendedPlan: b, t: M, translatePlanName: A }), /* @__PURE__ */ e.createElement(
    je,
    {
      plan: t,
      discount: l,
      useShortFormPlanIntervals: S,
      t: M
    }
  ), /* @__PURE__ */ e.createElement(
    K,
    {
      size: "large",
      variant: b ? "primary" : "secondary",
      onClick: async () => {
        await L({ plan: t, discount: l });
      },
      disabled: B,
      loading: F
    },
    M(B ? f.CurrentPlan : s || f.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Ue, { plan: t, trialDaysAsFeature: h, t: M })));
}, Qe = ({
  customer: t,
  plans: l,
  onSubscribe: s,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: B = !0,
  // boolean
  showTrialDaysAsFeature: D = !0,
  // boolean
  useShortFormPlanIntervals: A = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: F = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const M = t == null ? void 0 : t.subscription, L = new URLSearchParams(window.location.search), o = l.some(($) => $.interval === C.Annual) && l.some(($) => $.interval === C.Every30Days), m = l.find(($) => $.id === (M == null ? void 0 : M.plan.id)), [P, I] = te(
    m ? m.interval : o ? C.Annual : C.Every30Days
  ), U = l.filter(($) => $.availability === ge.Public), k = w ? l.filter(($) => $.availability !== ge.Public) : [], [v, z] = te(
    L.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: f.Plans,
      backAction: d && d !== "" ? { content: f.Back, url: d } : void 0,
      secondaryActions: B && o ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Every30Days,
          onClick: () => I(C.Every30Days)
        },
        f.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Annual,
          onClick: () => I(C.Annual)
        },
        f.Yearly
      )) : void 0,
      fullWidth: F === "full",
      narrowWidth: F === "narrow"
    },
    /* @__PURE__ */ e.createElement(W, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(p, { gap: "1000" }, v && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: f.SubscribeSuccessTitle,
        onDismiss: () => {
          z(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      f.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: U,
        onSelectPlan: s,
        planInterval: P,
        cardType: ee.Highlighted,
        keyForRecommended: b,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: D,
        useShortFormPlanIntervals: A,
        showRecommendedPlanBadge: S
      }
    ), (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (k == null ? void 0 : k.length) > 0 && /* @__PURE__ */ e.createElement(p, { gap: "300" }, /* @__PURE__ */ e.createElement(W, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, f.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: k,
        onSelectPlan: s,
        planInterval: P,
        cardType: ee.Highlighted,
        keyForRecommended: b,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: D,
        useShortFormPlanIntervals: A,
        showRecommendedPlanBadge: S
      }
    ))))))
  );
}, qe = ({
  customer: t,
  plans: l,
  onSubscribe: s,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: B = !1,
  // boolean
  showTrialDaysAsFeature: D = !0,
  // boolean
  useShortFormPlanIntervals: A = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: F = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const M = t == null ? void 0 : t.subscription, L = new URLSearchParams(window.location.search), o = l.some((n) => n.interval === C.Annual) && l.some((n) => n.interval === C.Every30Days), m = l.find((n) => n.id === (M == null ? void 0 : M.plan.id)), [P, I] = te(
    m ? m.interval : o ? C.Annual : C.Every30Days
  ), U = l.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), k = B && o ? U.filter((n) => n.interval === P) : U, v = w ? l.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [z, $] = te(
    L.get("subscribed") === "true"
  ), ne = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, n.description)), Z = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(p, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { fontWeight: "medium" }, f.Features), /* @__PURE__ */ e.createElement(p, { gap: "100" }, D && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(O, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, f.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((Y, c) => {
    const r = n.features[Y];
    if (r.type !== "boolean" || r.value === !0)
      return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${c}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: ie, tone: "positive" })), r.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.name) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.value, " ", r.name));
  }))), X = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(p, { gap: "100" }, N ? /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(N.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    g,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, f.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: A }))) : /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(n.amount, n.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, f.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: A }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(p, null, n.usageCharges.map((Y, c) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${c}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(J, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, Y.terms))))), T = ({ plan: n, discount: N }) => {
    const Y = h && n.customFields[h], c = n.customFields && n.customFields[b];
    return /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: c ? "primary" : "secondary",
        onClick: () => s({ planId: n.id, discountId: N == null ? void 0 : N.id }),
        disabled: (m == null ? void 0 : m.id) === n.id
      },
      (m == null ? void 0 : m.id) === n.id ? f.CurrentPlan : Y ? n.customFields[h] : f.SelectPlan
    ), c && S && /* @__PURE__ */ e.createElement(W, null, /* @__PURE__ */ e.createElement(be, { tone: "success" }, f.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: f.Plans,
      backAction: d !== "" ? { content: f.Back, url: d } : void 0,
      secondaryActions: B && o ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Every30Days,
          onClick: () => I(C.Every30Days)
        },
        f.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: P === C.Annual,
          onClick: () => I(C.Annual)
        },
        f.Year
      )) : void 0,
      fullWidth: F === "full",
      narrowWidth: F === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(p, { gap: "400" }, z && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: f.SubscribeSuccessTitle,
        onDismiss: () => {
          $(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      f.SubscribeSuccessBody
    ), k.map((n, N) => {
      var c;
      const Y = ((c = n.discounts) == null ? void 0 : c.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${N}` }, /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(p, { gap: "400" }, /* @__PURE__ */ e.createElement(p, { gap: "200" }, ne({ plan: n, discount: Y }), X({ plan: n, discount: Y })), /* @__PURE__ */ e.createElement(W, null, T({ plan: n, discount: Y })))), /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, Z({ plan: n, discount: Y }))));
    }), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (v == null ? void 0 : v.length) > 0 && /* @__PURE__ */ e.createElement(p, { gap: "300" }, /* @__PURE__ */ e.createElement(W, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, f.CustomPlans)), /* @__PURE__ */ e.createElement(le, null, v.map((n, N) => {
      var c;
      const Y = ((c = n.discounts) == null ? void 0 : c.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(le.Cell, { key: `custom-plan-${N}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(p, { gap: "400" }, ne({ plan: n, discount: Y }), X({ plan: n, discount: Y }), T({ plan: n, discount: Y }), Z({ plan: n, discount: Y }))));
    }))))))
  );
};
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pe = { exports: {} };
(function(t, l) {
  (function(s, d) {
    t.exports = d();
  })(Ve, function() {
    var s = 1e3, d = 6e4, S = 36e5, h = "millisecond", b = "second", B = "minute", D = "hour", A = "day", F = "week", w = "month", M = "quarter", L = "year", o = "date", m = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, I = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, U = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(c) {
      var r = ["th", "st", "nd", "rd"], a = c % 100;
      return "[" + c + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, k = function(c, r, a) {
      var u = String(c);
      return !u || u.length >= r ? c : "" + Array(r + 1 - u.length).join(a) + c;
    }, v = { s: k, z: function(c) {
      var r = -c.utcOffset(), a = Math.abs(r), u = Math.floor(a / 60), i = a % 60;
      return (r <= 0 ? "+" : "-") + k(u, 2, "0") + ":" + k(i, 2, "0");
    }, m: function c(r, a) {
      if (r.date() < a.date())
        return -c(a, r);
      var u = 12 * (a.year() - r.year()) + (a.month() - r.month()), i = r.clone().add(u, w), E = a - i < 0, y = r.clone().add(u + (E ? -1 : 1), w);
      return +(-(u + (a - i) / (E ? i - y : y - i)) || 0);
    }, a: function(c) {
      return c < 0 ? Math.ceil(c) || 0 : Math.floor(c);
    }, p: function(c) {
      return { M: w, y: L, w: F, d: A, D: o, h: D, m: B, s: b, ms: h, Q: M }[c] || String(c || "").toLowerCase().replace(/s$/, "");
    }, u: function(c) {
      return c === void 0;
    } }, z = "en", $ = {};
    $[z] = U;
    var ne = "$isDayjsObject", Z = function(c) {
      return c instanceof N || !(!c || !c[ne]);
    }, X = function c(r, a, u) {
      var i;
      if (!r)
        return z;
      if (typeof r == "string") {
        var E = r.toLowerCase();
        $[E] && (i = E), a && ($[E] = a, i = E);
        var y = r.split("-");
        if (!i && y.length > 1)
          return c(y[0]);
      } else {
        var x = r.name;
        $[x] = r, i = x;
      }
      return !u && i && (z = i), i || !u && z;
    }, T = function(c, r) {
      if (Z(c))
        return c.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = c, a.args = arguments, new N(a);
    }, n = v;
    n.l = X, n.i = Z, n.w = function(c, r) {
      return T(c, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var N = function() {
      function c(a) {
        this.$L = X(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[ne] = !0;
      }
      var r = c.prototype;
      return r.parse = function(a) {
        this.$d = function(u) {
          var i = u.date, E = u.utc;
          if (i === null)
            return /* @__PURE__ */ new Date(NaN);
          if (n.u(i))
            return /* @__PURE__ */ new Date();
          if (i instanceof Date)
            return new Date(i);
          if (typeof i == "string" && !/Z$/i.test(i)) {
            var y = i.match(P);
            if (y) {
              var x = y[2] - 1 || 0, H = (y[7] || "0").substring(0, 3);
              return E ? new Date(Date.UTC(y[1], x, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, H)) : new Date(y[1], x, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, H);
            }
          }
          return new Date(i);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return n;
      }, r.isValid = function() {
        return this.$d.toString() !== m;
      }, r.isSame = function(a, u) {
        var i = T(a);
        return this.startOf(u) <= i && i <= this.endOf(u);
      }, r.isAfter = function(a, u) {
        return T(a) < this.startOf(u);
      }, r.isBefore = function(a, u) {
        return this.endOf(u) < T(a);
      }, r.$g = function(a, u, i) {
        return n.u(a) ? this[u] : this.set(i, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, u) {
        var i = this, E = !!n.u(u) || u, y = n.p(a), x = function(re, R) {
          var q = n.w(i.$u ? Date.UTC(i.$y, R, re) : new Date(i.$y, R, re), i);
          return E ? q : q.endOf(A);
        }, H = function(re, R) {
          return n.w(i.toDate()[re].apply(i.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), i);
        }, _ = this.$W, j = this.$M, V = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (y) {
          case L:
            return E ? x(1, 0) : x(31, 11);
          case w:
            return E ? x(1, j) : x(0, j + 1);
          case F:
            var ae = this.$locale().weekStart || 0, oe = (_ < ae ? _ + 7 : _) - ae;
            return x(E ? V - oe : V + (6 - oe), j);
          case A:
          case o:
            return H(ce + "Hours", 0);
          case D:
            return H(ce + "Minutes", 1);
          case B:
            return H(ce + "Seconds", 2);
          case b:
            return H(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, u) {
        var i, E = n.p(a), y = "set" + (this.$u ? "UTC" : ""), x = (i = {}, i[A] = y + "Date", i[o] = y + "Date", i[w] = y + "Month", i[L] = y + "FullYear", i[D] = y + "Hours", i[B] = y + "Minutes", i[b] = y + "Seconds", i[h] = y + "Milliseconds", i)[E], H = E === A ? this.$D + (u - this.$W) : u;
        if (E === w || E === L) {
          var _ = this.clone().set(o, 1);
          _.$d[x](H), _.init(), this.$d = _.set(o, Math.min(this.$D, _.daysInMonth())).$d;
        } else
          x && this.$d[x](H);
        return this.init(), this;
      }, r.set = function(a, u) {
        return this.clone().$set(a, u);
      }, r.get = function(a) {
        return this[n.p(a)]();
      }, r.add = function(a, u) {
        var i, E = this;
        a = Number(a);
        var y = n.p(u), x = function(j) {
          var V = T(E);
          return n.w(V.date(V.date() + Math.round(j * a)), E);
        };
        if (y === w)
          return this.set(w, this.$M + a);
        if (y === L)
          return this.set(L, this.$y + a);
        if (y === A)
          return x(1);
        if (y === F)
          return x(7);
        var H = (i = {}, i[B] = d, i[D] = S, i[b] = s, i)[y] || 1, _ = this.$d.getTime() + a * H;
        return n.w(_, this);
      }, r.subtract = function(a, u) {
        return this.add(-1 * a, u);
      }, r.format = function(a) {
        var u = this, i = this.$locale();
        if (!this.isValid())
          return i.invalidDate || m;
        var E = a || "YYYY-MM-DDTHH:mm:ssZ", y = n.z(this), x = this.$H, H = this.$m, _ = this.$M, j = i.weekdays, V = i.months, ce = i.meridiem, ae = function(R, q, ue, he) {
          return R && (R[q] || R(u, E)) || ue[q].slice(0, he);
        }, oe = function(R) {
          return n.s(x % 12 || 12, R, "0");
        }, re = ce || function(R, q, ue) {
          var he = R < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return E.replace(I, function(R, q) {
          return q || function(ue) {
            switch (ue) {
              case "YY":
                return String(u.$y).slice(-2);
              case "YYYY":
                return n.s(u.$y, 4, "0");
              case "M":
                return _ + 1;
              case "MM":
                return n.s(_ + 1, 2, "0");
              case "MMM":
                return ae(i.monthsShort, _, V, 3);
              case "MMMM":
                return ae(V, _);
              case "D":
                return u.$D;
              case "DD":
                return n.s(u.$D, 2, "0");
              case "d":
                return String(u.$W);
              case "dd":
                return ae(i.weekdaysMin, u.$W, j, 2);
              case "ddd":
                return ae(i.weekdaysShort, u.$W, j, 3);
              case "dddd":
                return j[u.$W];
              case "H":
                return String(x);
              case "HH":
                return n.s(x, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return re(x, H, !0);
              case "A":
                return re(x, H, !1);
              case "m":
                return String(H);
              case "mm":
                return n.s(H, 2, "0");
              case "s":
                return String(u.$s);
              case "ss":
                return n.s(u.$s, 2, "0");
              case "SSS":
                return n.s(u.$ms, 3, "0");
              case "Z":
                return y;
            }
            return null;
          }(R) || y.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, u, i) {
        var E, y = this, x = n.p(u), H = T(a), _ = (H.utcOffset() - this.utcOffset()) * d, j = this - H, V = function() {
          return n.m(y, H);
        };
        switch (x) {
          case L:
            E = V() / 12;
            break;
          case w:
            E = V();
            break;
          case M:
            E = V() / 3;
            break;
          case F:
            E = (j - _) / 6048e5;
            break;
          case A:
            E = (j - _) / 864e5;
            break;
          case D:
            E = j / S;
            break;
          case B:
            E = j / d;
            break;
          case b:
            E = j / s;
            break;
          default:
            E = j;
        }
        return i ? E : n.a(E);
      }, r.daysInMonth = function() {
        return this.endOf(w).$D;
      }, r.$locale = function() {
        return $[this.$L];
      }, r.locale = function(a, u) {
        if (!a)
          return this.$L;
        var i = this.clone(), E = X(a, u, !0);
        return E && (i.$L = E), i;
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
      }, c;
    }(), Y = N.prototype;
    return T.prototype = Y, [["$ms", h], ["$s", b], ["$m", B], ["$H", D], ["$W", A], ["$M", w], ["$y", L], ["$D", o]].forEach(function(c) {
      Y[c[1]] = function(r) {
        return this.$g(r, c[0], c[1]);
      };
    }), T.extend = function(c, r) {
      return c.$i || (c(r, N, T), c.$i = !0), T;
    }, T.locale = X, T.isDayjs = Z, T.unix = function(c) {
      return T(1e3 * c);
    }, T.en = $[z], T.Ls = $, T.p = {}, T;
  });
})(Pe);
var Xe = Pe.exports;
const De = /* @__PURE__ */ Ke(Xe), ve = ({
  orientation: t = "horizontal",
  onShowPlans: l,
  onCancelPlan: s,
  onPlanCancelled: d = () => {
  },
  cancelSubscription: S = async () => {
  },
  i18n: h,
  subscription: b,
  refetch: B = async () => {
  },
  t: D,
  translatePlanName: A = !0
}) => {
  var Z;
  const [F, w] = te(!1), [M, L] = te(!1), o = D || ((X) => X), m = {
    ...f,
    ...m || {}
  };
  if (!b)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(p, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, o(m.Subscription)), /* @__PURE__ */ e.createElement(g, null, o(m.NotSubscribed)), /* @__PURE__ */ e.createElement(O, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      K,
      {
        variant: "primary",
        onClick: l,
        accessibilityLabel: o(m.ChangePlan)
      },
      o(m.SelectPlan)
    )))));
  const { plan: P } = b, I = Q(b.total, P.currency), U = o(P.interval === C.Annual ? m.Year : m.Month), k = t === "horizontal" ? Ae : p, v = (Z = b == null ? void 0 : b.appliedDiscount) == null ? void 0 : Z.discount, z = v ? v.percentage ? `${v.percentage}%` : Q(v.amount, P.currency) : null, $ = v && b.appliedDiscount.discountEndsAt && De().isAfter(De(b.appliedDiscount.discountEndsAt)), ne = v ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(p, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, o(m.Subscription)), /* @__PURE__ */ e.createElement(p, { gap: "400" }, /* @__PURE__ */ e.createElement(k, { columns: ne, gap: "300" }, /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(g, null, o(m.CurrentPlan)), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, A ? o(P.name) : P.name)), /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(g, null, o(m.Price)), /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, o(m.AmountPerInterval).replace("{{ amount }}", I).replace("{{ interval }}", U)), v && !$ && /* @__PURE__ */ e.createElement(g, { tone: "success" }, o(m.DiscountAmount).replace("{{ amount }}", z)), v && $ && /* @__PURE__ */ e.createElement(g, { tone: "subdued", textDecorationLine: "line-through" }, o(m.DiscountAmountExpired).replace("{{ amount }}", z)))), P.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(p, null, /* @__PURE__ */ e.createElement(g, null, o(m.UsageCharges || "Usage charges")), P.usageCharges.map((X, T) => /* @__PURE__ */ e.createElement(g, { key: `usage-charge-${T}`, tone: "subdued" }, o(X.terms))))), /* @__PURE__ */ e.createElement(O, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
    K,
    {
      onClick: () => {
        s ? s() : w(!0);
      },
      accessibilityLabel: o(m.CancelPlan),
      tone: "critical"
    },
    o(m.CancelPlan)
  ), /* @__PURE__ */ e.createElement(
    K,
    {
      variant: "primary",
      onClick: l,
      accessibilityLabel: o(m.ChangePlan)
    },
    o(m.ChangePlan)
  ))))), F && /* @__PURE__ */ e.createElement(
    $e,
    {
      open: !0,
      onClose: () => w(!1),
      title: o(m.CancelPlan),
      primaryAction: {
        content: o(m.CancelPlan),
        destructive: !0,
        loading: M,
        disabled: M,
        onAction: async () => {
          L(!0), await S(), await B(), L(!1), w(!1), d();
        }
      },
      secondaryActions: [
        {
          content: o(m.Back),
          disabled: M,
          onAction: () => w(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement($e.Section, null, o(m.CancelConfirmation))
  ));
}, et = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: l = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: s, i18n: d, subscription: S, refetch: h } = Le(), b = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: d.Subscription,
      backAction: t ? { content: d.Back, url: t } : void 0,
      fullWidth: l === "full",
      narrowWidth: l === "narrow"
    },
    /* @__PURE__ */ e.createElement(p, { gap: "400" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: b,
        cancelSubscription: s,
        i18n: d,
        subscription: S,
        refetch: h
      }
    ), /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: b,
        cancelSubscription: s,
        i18n: d,
        subscription: S,
        refetch: h
      }
    )), /* @__PURE__ */ e.createElement(G.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: b,
        cancelSubscription: s,
        i18n: d,
        subscription: S,
        refetch: h,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  Qe as HighlightedPlanCards,
  Re as HorizontalPlanCard,
  Ge as HorizontalPlanCards,
  Ee as PlanCardStack,
  ee as PlanCardType,
  Ue as PlanFeaturesSection,
  je as PlanPricingSection,
  Ne as PlanTitleSection,
  ve as SubscriptionSummaryCard,
  et as SubscriptionSummaryPage,
  qe as VerticalPlanCards
};
