import e, { createContext as Me, useContext as ke, useState as q } from "react";
import { Box as Y, BlockStack as v, Button as K, InlineStack as O, Badge as be, Text as u, Icon as X, Grid as ae, Page as ye, ButtonGroup as de, Layout as Z, Banner as pe, Divider as Se, Card as me, Modal as $e, InlineGrid as Ae } from "@shopify/polaris";
const p = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ge = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, y = {
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
}), J = (t, c = "USD", m = !0) => {
  let d = Be(c).format(t);
  return m && (d = d.replace(/\.00$/, "")), d;
}, Te = (t = p.Every30Days) => {
  switch (t) {
    case p.Annual:
      return "year";
    case p.Every30Days:
    default:
      return "month";
  }
}, Fe = (t = p.Every30Days) => {
  switch (t) {
    case p.Annual:
      return "yr";
    case p.Every30Days:
    default:
      return "mo";
  }
}, ie = ({
  interval: t = p.Every30Days,
  useShortFormPlanIntervals: c = !0
}) => c ? Fe(t) : Te(t), Ce = ({ plan: t, customFieldKey: c = "recommended" }) => {
  var m;
  return !!((m = t.customFields) != null && m[c]);
}, we = ({ plan: t, customFieldKey: c = "buttonLabel" }) => {
  var m;
  return ((m = t.customFields) == null ? void 0 : m[c]) || y.SelectPlan;
}, He = ({ plan: t }) => {
  var c;
  return ((c = t.discounts) == null ? void 0 : c.length) > 0 ? t.discounts.reduce(
    (m, d) => m.discountedAmount < d.discountedAmount ? m : d
  ) : void 0;
}, Oe = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, _e = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4;
var re = function(c) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, c), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
re.displayName = "CheckIcon";
var fe = function(c) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, c), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
fe.displayName = "PlusIcon";
const Ie = ({ plan: t }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd", alignment: "center" }, t.name), t.description && /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued", alignment: "center" }, t.description)), Ye = ({ plan: t, discount: c, useShortFormPlanIntervals: m = !0 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, !!c && /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "heading3xl" }, J(c.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  J(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), !c && /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "heading3xl" }, J(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, t.usageCharges.map((d, g) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${g}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d.terms))))), We = ({ plan: t, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(v, { gap: "300" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(O, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((m, d) => {
  const g = t.features[m];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${d}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.value, " ", g.name));
})), ze = ({
  plan: t,
  discount: c,
  buttonLabel: m,
  onSelectPlan: d,
  useShortFormPlanIntervals: g = !0,
  trialDaysAsFeature: o = !1,
  expanded: f = !1,
  isActivePlan: k = !1,
  isRecommendedPlan: P = !1,
  isCustomPlan: $ = !1,
  showRecommendedPlanBadge: A = !0
}) => {
  const [w, b] = e.useState(!1), T = async ({ plan: x, discount: L }) => {
    d ? (b(!0), await d({ plan: x, discount: L }) !== !0 && b(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(Y, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(Y, { paddingBlock: f || P ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    Y,
    {
      background: P || $ ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: f || P ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement(v, { gap: "800" }, /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(Ie, { plan: t }), /* @__PURE__ */ e.createElement(
      Ye,
      {
        plan: t,
        discount: c,
        useShortFormPlanIntervals: g
      }
    )), /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: P ? "primary" : "secondary",
        onClick: async () => {
          await T({ plan: t, discount: c });
        },
        disabled: k,
        loading: w
      },
      m || y.SelectPlan
    ), /* @__PURE__ */ e.createElement(We, { plan: t, trialDaysAsFeature: o }), P && A && /* @__PURE__ */ e.createElement(O, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)))
  )));
}, Q = {
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
  customer: c,
  onSelectPlan: m,
  planInterval: d,
  cardType: g = Q.Horizontal,
  trialDaysAsFeature: o = !0,
  useShortFormPlanIntervals: f = !0,
  keyForRecommended: k = "recommended",
  keyForCustomButtonLabel: P = "buttonLabel",
  showRecommendedPlanBadge: $ = !0,
  applyDiscount: A = !0
}) => {
  var D;
  const w = (D = c == null ? void 0 : c.subscription) != null && D.active ? c.subscription : void 0, b = w == null ? void 0 : w.plan, T = d ? t.filter((C) => C.interval === d) : t, x = g === Q.Vertical ? 1 : _e(T.length), L = Oe(x);
  return /* @__PURE__ */ e.createElement(ae, { columns: x }, T.map((C) => {
    const j = A ? He({ plan: C }) : void 0;
    return /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: L, key: C.id }, g === Q.Highlighted && /* @__PURE__ */ e.createElement(
      ze,
      {
        key: `HighlightedPlanCard-${C.id}`,
        plan: C,
        discount: j,
        onSelectPlan: m,
        isActivePlan: (b == null ? void 0 : b.id) === C.id,
        trialDaysAsFeature: o,
        useShortFormPlanIntervals: f,
        isCustomPlan: C.availability !== ge.Public,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: k }),
        buttonLabel: we({ plan: C, customFieldKey: P }),
        showRecommendedPlanBadge: $
      }
    ), g === Q.Horizontal && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HorizontalPlanCard-${C.id}`,
        plan: C,
        discount: j,
        onSelectPlan: m,
        isActivePlan: (b == null ? void 0 : b.id) === C.id,
        trialDaysAsFeature: o,
        useShortFormPlanIntervals: f,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: k }),
        buttonLabel: we({ plan: C, customFieldKey: P }),
        showRecommendedPlanBadge: $
      }
    ));
  }));
}, Ge = ({
  customer: t,
  plans: c,
  onSubscribe: m,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: g = !0,
  // boolean
  customFieldCta: o,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !0,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: $,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const b = t == null ? void 0 : t.subscription, T = new URLSearchParams(window.location.search), x = c.some((S) => S.interval === p.Annual) && c.some((S) => S.interval === p.Every30Days), L = c.find((S) => S.id === (b == null ? void 0 : b.plan.id)), [D, C] = q(
    L ? L.interval : x ? p.Annual : p.Every30Days
  ), j = c.filter((S) => S.availability === ge.Public), B = w ? c.filter((S) => S.availability !== ge.Public) : [], [z, R] = q(
    T.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && x ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Every30Days,
          onClick: () => C(p.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Annual,
          onClick: () => C(p.Annual)
        },
        y.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(v, { gap: "1000" }, z && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: y.SubscribeSuccessTitle,
        onDismiss: () => {
          R(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      y.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: j,
        onSelectPlan: m,
        planInterval: D,
        cardType: Q.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: B,
        onSelectPlan: m,
        planInterval: D,
        cardType: Q.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    )))))
  );
}, Ne = ({ plan: t, isRecommendedPlan: c = !1 }) => /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(O, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, t.name), c && /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)), t.description && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, t.description)), je = ({ plan: t, discount: c, useShortFormPlanIntervals: m = !0 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, !!c && /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingXl" }, J(c.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), !c && /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "headingXl" }, J(t.amount, t.currency)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, t.usageCharges.map((d, g) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${g}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d.terms))))), Ue = ({ plan: t, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(O, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((m, d) => {
  const g = t.features[m];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${d}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.value, " ", g.name));
})), Re = ({
  plan: t,
  discount: c,
  buttonLabel: m,
  onSelectPlan: d,
  useShortFormPlanIntervals: g = !0,
  trialDaysAsFeature: o = !1,
  isRecommendedPlan: f = !1,
  isActivePlan: k = !1
}) => {
  const [P, $] = e.useState(!1), A = async ({ plan: w, discount: b }) => {
    d ? ($(!0), await d({ plan: w, discount: b }) !== !0 && $(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(Ne, { plan: t, isRecommendedPlan: f }), /* @__PURE__ */ e.createElement(
    je,
    {
      plan: t,
      discount: c,
      useShortFormPlanIntervals: g
    }
  ), /* @__PURE__ */ e.createElement(
    K,
    {
      size: "large",
      variant: f ? "primary" : "secondary",
      onClick: async () => {
        await A({ plan: t, discount: c });
      },
      disabled: k,
      loading: P
    },
    k ? y.CurrentPlan : m || y.SelectPlan
  ), /* @__PURE__ */ e.createElement(Ue, { plan: t, trialDaysAsFeature: o })));
}, Qe = ({
  customer: t,
  plans: c,
  onSubscribe: m,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: g = !0,
  // boolean
  customFieldCta: o = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !0,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: $ = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const b = t == null ? void 0 : t.subscription, T = new URLSearchParams(window.location.search), x = c.some((S) => S.interval === p.Annual) && c.some((S) => S.interval === p.Every30Days), L = c.find((S) => S.id === (b == null ? void 0 : b.plan.id)), [D, C] = q(
    L ? L.interval : x ? p.Annual : p.Every30Days
  ), j = c.filter((S) => S.availability === ge.Public), B = w ? c.filter((S) => S.availability !== ge.Public) : [], [z, R] = q(
    T.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d && d !== "" ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && x ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Every30Days,
          onClick: () => C(p.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Annual,
          onClick: () => C(p.Annual)
        },
        y.Yearly
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(Y, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(v, { gap: "1000" }, z && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: y.SubscribeSuccessTitle,
        onDismiss: () => {
          R(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      y.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: j,
        onSelectPlan: m,
        planInterval: D,
        cardType: Q.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (B == null ? void 0 : B.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: B,
        onSelectPlan: m,
        planInterval: D,
        cardType: Q.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ))))))
  );
}, qe = ({
  customer: t,
  plans: c,
  onSubscribe: m,
  backUrl: d = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: g = !0,
  // boolean
  customFieldCta: o = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !1,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: $ = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: A = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: w = !0
  // boolean: show custom plans
}) => {
  const b = t == null ? void 0 : t.subscription, T = new URLSearchParams(window.location.search), x = c.some((n) => n.interval === p.Annual) && c.some((n) => n.interval === p.Every30Days), L = c.find((n) => n.id === (b == null ? void 0 : b.plan.id)), [D, C] = q(
    L ? L.interval : x ? p.Annual : p.Every30Days
  ), j = c.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), B = k && x ? j.filter((n) => n.interval === D) : j, z = w ? c.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [R, S] = q(
    T.get("subscribed") === "true"
  ), se = ({ plan: n, discount: W }) => /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, n.description)), le = ({ plan: n, discount: W }) => /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { fontWeight: "medium" }, y.Features), /* @__PURE__ */ e.createElement(v, { gap: "100" }, P && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(O, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((_, i) => {
    const r = n.features[_];
    if (r.type !== "boolean" || r.value === !0)
      return /* @__PURE__ */ e.createElement(O, { key: `plan-feature-${i}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), r.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, r.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, r.value, " ", r.name));
  }))), ee = ({ plan: n, discount: W }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, W ? /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingXl" }, J(W.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    u,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: n.interval, useShortFormPlanIntervals: $ }))) : /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "headingXl" }, J(n.amount, n.currency)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: n.interval, useShortFormPlanIntervals: $ }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, n.usageCharges.map((_, i) => /* @__PURE__ */ e.createElement(O, { key: `plan-usageCharge-${i}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, _.terms))))), F = ({ plan: n, discount: W }) => {
    const _ = o && n.customFields[o], i = n.customFields && n.customFields[f];
    return /* @__PURE__ */ e.createElement(O, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: i ? "primary" : "secondary",
        onClick: () => m({ planId: n.id, discountId: W == null ? void 0 : W.id }),
        disabled: (L == null ? void 0 : L.id) === n.id
      },
      (L == null ? void 0 : L.id) === n.id ? y.CurrentPlan : _ ? n.customFields[o] : y.SelectPlan
    ), i && g && /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d !== "" ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && x ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Every30Days,
          onClick: () => C(p.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === p.Annual,
          onClick: () => C(p.Annual)
        },
        y.Year
      )) : void 0,
      fullWidth: A === "full",
      narrowWidth: A === "narrow"
    },
    /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(v, { gap: "400" }, R && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: y.SubscribeSuccessTitle,
        onDismiss: () => {
          S(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      y.SubscribeSuccessBody
    ), B.map((n, W) => {
      var i;
      const _ = ((i = n.discounts) == null ? void 0 : i.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${W}` }, /* @__PURE__ */ e.createElement(ae, null, /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(v, { gap: "200" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ })), /* @__PURE__ */ e.createElement(Y, null, F({ plan: n, discount: _ })))), /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, le({ plan: n, discount: _ }))));
    }), (z == null ? void 0 : z.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (z == null ? void 0 : z.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(ae, null, z.map((n, W) => {
      var i;
      const _ = ((i = n.discounts) == null ? void 0 : i.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(ae.Cell, { key: `custom-plan-${W}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "400" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ }), F({ plan: n, discount: _ }), le({ plan: n, discount: _ }))));
    }))))))
  );
};
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pe = { exports: {} };
(function(t, c) {
  (function(m, d) {
    t.exports = d();
  })(Ve, function() {
    var m = 1e3, d = 6e4, g = 36e5, o = "millisecond", f = "second", k = "minute", P = "hour", $ = "day", A = "week", w = "month", b = "quarter", T = "year", x = "date", L = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(i) {
      var r = ["th", "st", "nd", "rd"], a = i % 100;
      return "[" + i + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, B = function(i, r, a) {
      var s = String(i);
      return !s || s.length >= r ? i : "" + Array(r + 1 - s.length).join(a) + i;
    }, z = { s: B, z: function(i) {
      var r = -i.utcOffset(), a = Math.abs(r), s = Math.floor(a / 60), l = a % 60;
      return (r <= 0 ? "+" : "-") + B(s, 2, "0") + ":" + B(l, 2, "0");
    }, m: function i(r, a) {
      if (r.date() < a.date())
        return -i(a, r);
      var s = 12 * (a.year() - r.year()) + (a.month() - r.month()), l = r.clone().add(s, w), h = a - l < 0, E = r.clone().add(s + (h ? -1 : 1), w);
      return +(-(s + (a - l) / (h ? l - E : E - l)) || 0);
    }, a: function(i) {
      return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
    }, p: function(i) {
      return { M: w, y: T, w: A, d: $, D: x, h: P, m: k, s: f, ms: o, Q: b }[i] || String(i || "").toLowerCase().replace(/s$/, "");
    }, u: function(i) {
      return i === void 0;
    } }, R = "en", S = {};
    S[R] = j;
    var se = "$isDayjsObject", le = function(i) {
      return i instanceof W || !(!i || !i[se]);
    }, ee = function i(r, a, s) {
      var l;
      if (!r)
        return R;
      if (typeof r == "string") {
        var h = r.toLowerCase();
        S[h] && (l = h), a && (S[h] = a, l = h);
        var E = r.split("-");
        if (!l && E.length > 1)
          return i(E[0]);
      } else {
        var M = r.name;
        S[M] = r, l = M;
      }
      return !s && l && (R = l), l || !s && R;
    }, F = function(i, r) {
      if (le(i))
        return i.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = i, a.args = arguments, new W(a);
    }, n = z;
    n.l = ee, n.i = le, n.w = function(i, r) {
      return F(i, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var W = function() {
      function i(a) {
        this.$L = ee(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[se] = !0;
      }
      var r = i.prototype;
      return r.parse = function(a) {
        this.$d = function(s) {
          var l = s.date, h = s.utc;
          if (l === null)
            return /* @__PURE__ */ new Date(NaN);
          if (n.u(l))
            return /* @__PURE__ */ new Date();
          if (l instanceof Date)
            return new Date(l);
          if (typeof l == "string" && !/Z$/i.test(l)) {
            var E = l.match(D);
            if (E) {
              var M = E[2] - 1 || 0, H = (E[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(E[1], M, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, H)) : new Date(E[1], M, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, H);
            }
          }
          return new Date(l);
        }(a), this.init();
      }, r.init = function() {
        var a = this.$d;
        this.$y = a.getFullYear(), this.$M = a.getMonth(), this.$D = a.getDate(), this.$W = a.getDay(), this.$H = a.getHours(), this.$m = a.getMinutes(), this.$s = a.getSeconds(), this.$ms = a.getMilliseconds();
      }, r.$utils = function() {
        return n;
      }, r.isValid = function() {
        return this.$d.toString() !== L;
      }, r.isSame = function(a, s) {
        var l = F(a);
        return this.startOf(s) <= l && l <= this.endOf(s);
      }, r.isAfter = function(a, s) {
        return F(a) < this.startOf(s);
      }, r.isBefore = function(a, s) {
        return this.endOf(s) < F(a);
      }, r.$g = function(a, s, l) {
        return n.u(a) ? this[s] : this.set(l, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, s) {
        var l = this, h = !!n.u(s) || s, E = n.p(a), M = function(ne, U) {
          var G = n.w(l.$u ? Date.UTC(l.$y, U, ne) : new Date(l.$y, U, ne), l);
          return h ? G : G.endOf($);
        }, H = function(ne, U) {
          return n.w(l.toDate()[ne].apply(l.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), l);
        }, I = this.$W, N = this.$M, V = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case T:
            return h ? M(1, 0) : M(31, 11);
          case w:
            return h ? M(1, N) : M(0, N + 1);
          case A:
            var te = this.$locale().weekStart || 0, oe = (I < te ? I + 7 : I) - te;
            return M(h ? V - oe : V + (6 - oe), N);
          case $:
          case x:
            return H(ce + "Hours", 0);
          case P:
            return H(ce + "Minutes", 1);
          case k:
            return H(ce + "Seconds", 2);
          case f:
            return H(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, s) {
        var l, h = n.p(a), E = "set" + (this.$u ? "UTC" : ""), M = (l = {}, l[$] = E + "Date", l[x] = E + "Date", l[w] = E + "Month", l[T] = E + "FullYear", l[P] = E + "Hours", l[k] = E + "Minutes", l[f] = E + "Seconds", l[o] = E + "Milliseconds", l)[h], H = h === $ ? this.$D + (s - this.$W) : s;
        if (h === w || h === T) {
          var I = this.clone().set(x, 1);
          I.$d[M](H), I.init(), this.$d = I.set(x, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          M && this.$d[M](H);
        return this.init(), this;
      }, r.set = function(a, s) {
        return this.clone().$set(a, s);
      }, r.get = function(a) {
        return this[n.p(a)]();
      }, r.add = function(a, s) {
        var l, h = this;
        a = Number(a);
        var E = n.p(s), M = function(N) {
          var V = F(h);
          return n.w(V.date(V.date() + Math.round(N * a)), h);
        };
        if (E === w)
          return this.set(w, this.$M + a);
        if (E === T)
          return this.set(T, this.$y + a);
        if (E === $)
          return M(1);
        if (E === A)
          return M(7);
        var H = (l = {}, l[k] = d, l[P] = g, l[f] = m, l)[E] || 1, I = this.$d.getTime() + a * H;
        return n.w(I, this);
      }, r.subtract = function(a, s) {
        return this.add(-1 * a, s);
      }, r.format = function(a) {
        var s = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || L;
        var h = a || "YYYY-MM-DDTHH:mm:ssZ", E = n.z(this), M = this.$H, H = this.$m, I = this.$M, N = l.weekdays, V = l.months, ce = l.meridiem, te = function(U, G, ue, he) {
          return U && (U[G] || U(s, h)) || ue[G].slice(0, he);
        }, oe = function(U) {
          return n.s(M % 12 || 12, U, "0");
        }, ne = ce || function(U, G, ue) {
          var he = U < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return h.replace(C, function(U, G) {
          return G || function(ue) {
            switch (ue) {
              case "YY":
                return String(s.$y).slice(-2);
              case "YYYY":
                return n.s(s.$y, 4, "0");
              case "M":
                return I + 1;
              case "MM":
                return n.s(I + 1, 2, "0");
              case "MMM":
                return te(l.monthsShort, I, V, 3);
              case "MMMM":
                return te(V, I);
              case "D":
                return s.$D;
              case "DD":
                return n.s(s.$D, 2, "0");
              case "d":
                return String(s.$W);
              case "dd":
                return te(l.weekdaysMin, s.$W, N, 2);
              case "ddd":
                return te(l.weekdaysShort, s.$W, N, 3);
              case "dddd":
                return N[s.$W];
              case "H":
                return String(M);
              case "HH":
                return n.s(M, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return ne(M, H, !0);
              case "A":
                return ne(M, H, !1);
              case "m":
                return String(H);
              case "mm":
                return n.s(H, 2, "0");
              case "s":
                return String(s.$s);
              case "ss":
                return n.s(s.$s, 2, "0");
              case "SSS":
                return n.s(s.$ms, 3, "0");
              case "Z":
                return E;
            }
            return null;
          }(U) || E.replace(":", "");
        });
      }, r.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, r.diff = function(a, s, l) {
        var h, E = this, M = n.p(s), H = F(a), I = (H.utcOffset() - this.utcOffset()) * d, N = this - H, V = function() {
          return n.m(E, H);
        };
        switch (M) {
          case T:
            h = V() / 12;
            break;
          case w:
            h = V();
            break;
          case b:
            h = V() / 3;
            break;
          case A:
            h = (N - I) / 6048e5;
            break;
          case $:
            h = (N - I) / 864e5;
            break;
          case P:
            h = N / g;
            break;
          case k:
            h = N / d;
            break;
          case f:
            h = N / m;
            break;
          default:
            h = N;
        }
        return l ? h : n.a(h);
      }, r.daysInMonth = function() {
        return this.endOf(w).$D;
      }, r.$locale = function() {
        return S[this.$L];
      }, r.locale = function(a, s) {
        if (!a)
          return this.$L;
        var l = this.clone(), h = ee(a, s, !0);
        return h && (l.$L = h), l;
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
      }, i;
    }(), _ = W.prototype;
    return F.prototype = _, [["$ms", o], ["$s", f], ["$m", k], ["$H", P], ["$W", $], ["$M", w], ["$y", T], ["$D", x]].forEach(function(i) {
      _[i[1]] = function(r) {
        return this.$g(r, i[0], i[1]);
      };
    }), F.extend = function(i, r) {
      return i.$i || (i(r, W, F), i.$i = !0), F;
    }, F.locale = ee, F.isDayjs = le, F.unix = function(i) {
      return F(1e3 * i);
    }, F.en = S[R], F.Ls = S, F.p = {}, F;
  });
})(Pe);
var Xe = Pe.exports;
const De = /* @__PURE__ */ Ke(Xe), ve = ({
  orientation: t = "horizontal",
  onShowPlans: c,
  onCancelPlan: m,
  onPlanCancelled: d = () => {
  },
  cancelSubscription: g = async () => {
  },
  i18n: o,
  subscription: f,
  refetch: k = async () => {
  }
}) => {
  var z;
  const [P, $] = q(!1), [A, w] = q(!1);
  if (!f)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, o.Subscription), /* @__PURE__ */ e.createElement(u, null, o.NotSubscribed), /* @__PURE__ */ e.createElement(O, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      K,
      {
        variant: "primary",
        onClick: c,
        accessibilityLabel: o.ChangePlan
      },
      o.SelectPlan
    )))));
  const { plan: b } = f, T = J(f.total, b.currency), x = b.interval === p.Annual ? o.Year : o.Month, L = t === "horizontal" ? Ae : v, D = (z = f == null ? void 0 : f.appliedDiscount) == null ? void 0 : z.discount, C = D ? D.percentage ? `${D.percentage}%` : J(D.amount, b.currency) : null, j = D && f.appliedDiscount.discountEndsAt && De().isAfter(De(f.appliedDiscount.discountEndsAt)), B = D ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, o.Subscription), /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(L, { columns: B, gap: "300" }, /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.CurrentPlan), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, b.name)), /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.Price), /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, o.AmountPerInterval.replace("{{ amount }}", T).replace("{{ interval }}", x)), D && !j && /* @__PURE__ */ e.createElement(u, { tone: "success" }, o.DiscountAmount.replace("{{ amount }}", C)), D && j && /* @__PURE__ */ e.createElement(u, { tone: "subdued", textDecorationLine: "line-through" }, o.DiscountAmountExpired.replace("{{ amount }}", C)))), b.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.UsageCharges || "Usage charges"), b.usageCharges.map((R, S) => /* @__PURE__ */ e.createElement(u, { key: `usage-charge-${S}`, tone: "subdued" }, R.terms)))), /* @__PURE__ */ e.createElement(O, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
    K,
    {
      onClick: () => {
        m ? m() : $(!0);
      },
      accessibilityLabel: o.CancelPlan,
      tone: "critical"
    },
    o.CancelPlan
  ), /* @__PURE__ */ e.createElement(
    K,
    {
      variant: "primary",
      onClick: c,
      accessibilityLabel: o.ChangePlan
    },
    o.ChangePlan
  ))))), P && /* @__PURE__ */ e.createElement(
    $e,
    {
      open: !0,
      onClose: () => $(!1),
      title: o.CancelPlan,
      primaryAction: {
        content: o.CancelPlan,
        destructive: !0,
        loading: A,
        disabled: A,
        onAction: async () => {
          w(!0), await g(), await k(), w(!1), $(!1), d();
        }
      },
      secondaryActions: [
        {
          content: o.Back,
          disabled: A,
          onAction: () => $(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement($e.Section, null, o.CancelConfirmation)
  ));
}, et = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: c = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: m, i18n: d, subscription: g, refetch: o } = Le(), f = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: d.Subscription,
      backAction: t ? { content: d.Back, url: t } : void 0,
      fullWidth: c === "full",
      narrowWidth: c === "narrow"
    },
    /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: f,
        cancelSubscription: m,
        i18n: d,
        subscription: g,
        refetch: o
      }
    ), /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: f,
        cancelSubscription: m,
        i18n: d,
        subscription: g,
        refetch: o
      }
    )), /* @__PURE__ */ e.createElement(Z.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: f,
        cancelSubscription: m,
        i18n: d,
        subscription: g,
        refetch: o,
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
  Q as PlanCardType,
  Ue as PlanFeaturesSection,
  je as PlanPricingSection,
  Ne as PlanTitleSection,
  ve as SubscriptionSummaryCard,
  et as SubscriptionSummaryPage,
  qe as VerticalPlanCards
};
