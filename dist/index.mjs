import e, { createContext as Me, useContext as ke, useState as Q } from "react";
import { Box as Y, BlockStack as v, Button as K, InlineStack as H, Badge as be, Text as u, Icon as X, Grid as ae, Page as ye, ButtonGroup as de, Layout as Z, Banner as pe, Divider as Se, Card as me, Modal as $e, InlineGrid as Ae } from "@shopify/polaris";
const b = {
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
}), G = (t, c = "USD", m = !0) => {
  let d = Be(c).format(t);
  return m && (d = d.replace(/\.00$/, "")), d;
}, Te = (t = b.Every30Days) => {
  switch (t) {
    case b.Annual:
      return "year";
    case b.Every30Days:
    default:
      return "month";
  }
}, Fe = (t = b.Every30Days) => {
  switch (t) {
    case b.Annual:
      return "yr";
    case b.Every30Days:
    default:
      return "mo";
  }
}, ie = ({
  interval: t = b.Every30Days,
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
const Ie = ({ plan: t }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd", alignment: "center" }, t.name), t.description && /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued", alignment: "center" }, t.description)), Ye = ({ plan: t, discount: c, useShortFormPlanIntervals: m = !0 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, !!c && /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "heading3xl" }, G(c.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  G(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), !c && /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "heading3xl" }, G(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, t.usageCharges.map((d, g) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${g}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d.terms))))), Ne = ({ plan: t, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(v, { gap: "300" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((m, d) => {
  const g = t.features[m];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${d}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.value, " ", g.name));
})), We = ({
  plan: t,
  discount: c,
  buttonLabel: m,
  onSelectPlan: d,
  useShortFormPlanIntervals: g = !0,
  trialDaysAsFeature: o = !1,
  expanded: f = !1,
  isActivePlan: k = !1,
  isRecommendedPlan: w = !1,
  isCustomPlan: $ = !1,
  showRecommendedPlanBadge: x = !0
}) => {
  const [P, p] = e.useState(!1);
  return /* @__PURE__ */ e.createElement(Y, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(Y, { paddingBlock: f || w ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    Y,
    {
      background: w || $ ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: f || w ? "1600" : "800",
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
        variant: w ? "primary" : "secondary",
        onClick: async () => {
          d ? (p(!0), await d({ plan: t, discount: c }), p(!1)) : console.log("No onSelectPlan callback provided");
        },
        disabled: k,
        loading: P
      },
      m || y.SelectPlan
    ), /* @__PURE__ */ e.createElement(Ne, { plan: t, trialDaysAsFeature: o }), w && x && /* @__PURE__ */ e.createElement(H, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)))
  )));
}, q = {
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
  cardType: g = q.Horizontal,
  trialDaysAsFeature: o = !0,
  useShortFormPlanIntervals: f = !0,
  keyForRecommended: k = "recommended",
  keyForCustomButtonLabel: w = "buttonLabel",
  showRecommendedPlanBadge: $ = !0,
  applyDiscount: x = !0
}) => {
  var D;
  const P = (D = c == null ? void 0 : c.subscription) != null && D.active ? c.subscription : void 0, p = P == null ? void 0 : P.plan, O = d ? t.filter((C) => C.interval === d) : t, L = g === q.Vertical ? 1 : _e(O.length), B = Oe(L);
  return /* @__PURE__ */ e.createElement(ae, { columns: L }, O.map((C) => {
    const j = x ? He({ plan: C }) : void 0;
    return /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: B, key: C.id }, g === q.Highlighted && /* @__PURE__ */ e.createElement(
      We,
      {
        key: `HighlightedPlanCard-${C.id}`,
        plan: C,
        discount: j,
        onSelectPlan: m,
        isActivePlan: (p == null ? void 0 : p.id) === C.id,
        trialDaysAsFeature: o,
        useShortFormPlanIntervals: f,
        isCustomPlan: C.availability !== ge.Public,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: k }),
        buttonLabel: we({ plan: C, customFieldKey: w }),
        showRecommendedPlanBadge: $
      }
    ), g === q.Horizontal && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HorizontalPlanCard-${C.id}`,
        plan: C,
        discount: j,
        onSelectPlan: m,
        isActivePlan: (p == null ? void 0 : p.id) === C.id,
        trialDaysAsFeature: o,
        useShortFormPlanIntervals: f,
        isRecommendedPlan: Ce({ plan: C, customFieldKey: k }),
        buttonLabel: we({ plan: C, customFieldKey: w }),
        showRecommendedPlanBadge: $
      }
    ));
  }));
}, Je = ({
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
  showTrialDaysAsFeature: w = !0,
  // boolean
  useShortFormPlanIntervals: $,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0
  // boolean: show custom plans
}) => {
  const p = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = c.some((S) => S.interval === b.Annual) && c.some((S) => S.interval === b.Every30Days), B = c.find((S) => S.id === (p == null ? void 0 : p.plan.id)), [D, C] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = c.filter((S) => S.availability === ge.Public), A = P ? c.filter((S) => S.availability !== ge.Public) : [], [W, R] = Q(
    O.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Every30Days,
          onClick: () => C(b.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Annual,
          onClick: () => C(b.Annual)
        },
        y.Yearly
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
    },
    /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(v, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
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
        cardType: q.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: w,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: A,
        onSelectPlan: m,
        planInterval: D,
        cardType: q.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: w,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    )))))
  );
}, ze = ({ plan: t, isRecommendedPlan: c = !1 }) => /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(H, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, t.name), c && /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)), t.description && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, t.description)), je = ({ plan: t, discount: c, useShortFormPlanIntervals: m = !0 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, !!c && /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingXl" }, G(c.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  u,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), !c && /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "headingXl" }, G(t.amount, t.currency)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: t.interval, useShortFormPlanIntervals: m }))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, t.usageCharges.map((d, g) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${g}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, d.terms))))), Ue = ({ plan: t, trialDaysAsFeature: c = !1 }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, c && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(H, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((m, d) => {
  const g = t.features[m];
  if (g.type !== "boolean" || g.value === !0)
    return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${d}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), g.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, g.value, " ", g.name));
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
  const [w, $] = e.useState(!1);
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(ze, { plan: t, isRecommendedPlan: f }), /* @__PURE__ */ e.createElement(
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
        d ? ($(!0), d({ plan: t, discount: c }), $(!1)) : console.log("No onSelectPlan callback provided");
      },
      disabled: k,
      loading: w
    },
    k ? y.CurrentPlan : m || y.SelectPlan
  ), /* @__PURE__ */ e.createElement(Ue, { plan: t, trialDaysAsFeature: o })));
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
  showPlanIntervalToggle: k = !0,
  // boolean
  showTrialDaysAsFeature: w = !0,
  // boolean
  useShortFormPlanIntervals: $ = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0
  // boolean: show custom plans
}) => {
  const p = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = c.some((S) => S.interval === b.Annual) && c.some((S) => S.interval === b.Every30Days), B = c.find((S) => S.id === (p == null ? void 0 : p.plan.id)), [D, C] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = c.filter((S) => S.availability === ge.Public), A = P ? c.filter((S) => S.availability !== ge.Public) : [], [W, R] = Q(
    O.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d && d !== "" ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Every30Days,
          onClick: () => C(b.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Annual,
          onClick: () => C(b.Annual)
        },
        y.Yearly
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
    },
    /* @__PURE__ */ e.createElement(Y, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(v, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
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
        cardType: q.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: w,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: A,
        onSelectPlan: m,
        planInterval: D,
        cardType: q.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: o,
        trialDaysAsFeature: w,
        useShortFormPlanIntervals: $,
        showRecommendedPlanBadge: g
      }
    ))))))
  );
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
  showPlanIntervalToggle: k = !1,
  // boolean
  showTrialDaysAsFeature: w = !0,
  // boolean
  useShortFormPlanIntervals: $ = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: P = !0
  // boolean: show custom plans
}) => {
  const p = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = c.some((n) => n.interval === b.Annual) && c.some((n) => n.interval === b.Every30Days), B = c.find((n) => n.id === (p == null ? void 0 : p.plan.id)), [D, C] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = c.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), A = k && L ? j.filter((n) => n.interval === D) : j, W = P ? c.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [R, S] = Q(
    O.get("subscribed") === "true"
  ), se = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, n.description)), le = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { fontWeight: "medium" }, y.Features), /* @__PURE__ */ e.createElement(v, { gap: "100" }, w && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(H, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, y.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((_, i) => {
    const r = n.features[_];
    if (r.type !== "boolean" || r.value === !0)
      return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${i}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: re, tone: "positive" })), r.type === "boolean" ? /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, r.name) : /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, r.value, " ", r.name));
  }))), ee = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(v, { gap: "100" }, N ? /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingXl" }, G(N.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    u,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: n.interval, useShortFormPlanIntervals: $ }))) : /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "headingXl" }, G(n.amount, n.currency)), /* @__PURE__ */ e.createElement(u, { alignment: "center", variant: "bodyLg", tone: "subdued" }, y.Per, " ", ie({ interval: n.interval, useShortFormPlanIntervals: $ }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, n.usageCharges.map((_, i) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${i}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(u, { variant: "bodyLg" }, _.terms))))), T = ({ plan: n, discount: N }) => {
    const _ = o && n.customFields[o], i = n.customFields && n.customFields[f];
    return /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: i ? "primary" : "secondary",
        onClick: () => m({ planId: n.id, discountId: N == null ? void 0 : N.id }),
        disabled: (B == null ? void 0 : B.id) === n.id
      },
      (B == null ? void 0 : B.id) === n.id ? y.CurrentPlan : _ ? n.customFields[o] : y.SelectPlan
    ), i && g && /* @__PURE__ */ e.createElement(Y, null, /* @__PURE__ */ e.createElement(be, { tone: "success" }, y.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: y.Plans,
      backAction: d !== "" ? { content: y.Back, url: d } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Every30Days,
          onClick: () => C(b.Every30Days)
        },
        y.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: D === b.Annual,
          onClick: () => C(b.Annual)
        },
        y.Year
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
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
    ), A.map((n, N) => {
      var i;
      const _ = ((i = n.discounts) == null ? void 0 : i.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${N}` }, /* @__PURE__ */ e.createElement(ae, null, /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(v, { gap: "200" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ })), /* @__PURE__ */ e.createElement(Y, null, T({ plan: n, discount: _ })))), /* @__PURE__ */ e.createElement(ae.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, le({ plan: n, discount: _ }))));
    }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(v, { gap: "300" }, /* @__PURE__ */ e.createElement(Y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, y.CustomPlans)), /* @__PURE__ */ e.createElement(ae, null, W.map((n, N) => {
      var i;
      const _ = ((i = n.discounts) == null ? void 0 : i.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(ae.Cell, { key: `custom-plan-${N}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "400" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ }), T({ plan: n, discount: _ }), le({ plan: n, discount: _ }))));
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
    var m = 1e3, d = 6e4, g = 36e5, o = "millisecond", f = "second", k = "minute", w = "hour", $ = "day", x = "week", P = "month", p = "quarter", O = "year", L = "date", B = "Invalid Date", D = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, C = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(i) {
      var r = ["th", "st", "nd", "rd"], a = i % 100;
      return "[" + i + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, A = function(i, r, a) {
      var s = String(i);
      return !s || s.length >= r ? i : "" + Array(r + 1 - s.length).join(a) + i;
    }, W = { s: A, z: function(i) {
      var r = -i.utcOffset(), a = Math.abs(r), s = Math.floor(a / 60), l = a % 60;
      return (r <= 0 ? "+" : "-") + A(s, 2, "0") + ":" + A(l, 2, "0");
    }, m: function i(r, a) {
      if (r.date() < a.date())
        return -i(a, r);
      var s = 12 * (a.year() - r.year()) + (a.month() - r.month()), l = r.clone().add(s, P), h = a - l < 0, E = r.clone().add(s + (h ? -1 : 1), P);
      return +(-(s + (a - l) / (h ? l - E : E - l)) || 0);
    }, a: function(i) {
      return i < 0 ? Math.ceil(i) || 0 : Math.floor(i);
    }, p: function(i) {
      return { M: P, y: O, w: x, d: $, D: L, h: w, m: k, s: f, ms: o, Q: p }[i] || String(i || "").toLowerCase().replace(/s$/, "");
    }, u: function(i) {
      return i === void 0;
    } }, R = "en", S = {};
    S[R] = j;
    var se = "$isDayjsObject", le = function(i) {
      return i instanceof N || !(!i || !i[se]);
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
    }, T = function(i, r) {
      if (le(i))
        return i.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = i, a.args = arguments, new N(a);
    }, n = W;
    n.l = ee, n.i = le, n.w = function(i, r) {
      return T(i, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var N = function() {
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
              var M = E[2] - 1 || 0, F = (E[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(E[1], M, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, F)) : new Date(E[1], M, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, F);
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
        return this.$d.toString() !== B;
      }, r.isSame = function(a, s) {
        var l = T(a);
        return this.startOf(s) <= l && l <= this.endOf(s);
      }, r.isAfter = function(a, s) {
        return T(a) < this.startOf(s);
      }, r.isBefore = function(a, s) {
        return this.endOf(s) < T(a);
      }, r.$g = function(a, s, l) {
        return n.u(a) ? this[s] : this.set(l, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, s) {
        var l = this, h = !!n.u(s) || s, E = n.p(a), M = function(ne, U) {
          var J = n.w(l.$u ? Date.UTC(l.$y, U, ne) : new Date(l.$y, U, ne), l);
          return h ? J : J.endOf($);
        }, F = function(ne, U) {
          return n.w(l.toDate()[ne].apply(l.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), l);
        }, I = this.$W, z = this.$M, V = this.$D, ce = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case O:
            return h ? M(1, 0) : M(31, 11);
          case P:
            return h ? M(1, z) : M(0, z + 1);
          case x:
            var te = this.$locale().weekStart || 0, oe = (I < te ? I + 7 : I) - te;
            return M(h ? V - oe : V + (6 - oe), z);
          case $:
          case L:
            return F(ce + "Hours", 0);
          case w:
            return F(ce + "Minutes", 1);
          case k:
            return F(ce + "Seconds", 2);
          case f:
            return F(ce + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, s) {
        var l, h = n.p(a), E = "set" + (this.$u ? "UTC" : ""), M = (l = {}, l[$] = E + "Date", l[L] = E + "Date", l[P] = E + "Month", l[O] = E + "FullYear", l[w] = E + "Hours", l[k] = E + "Minutes", l[f] = E + "Seconds", l[o] = E + "Milliseconds", l)[h], F = h === $ ? this.$D + (s - this.$W) : s;
        if (h === P || h === O) {
          var I = this.clone().set(L, 1);
          I.$d[M](F), I.init(), this.$d = I.set(L, Math.min(this.$D, I.daysInMonth())).$d;
        } else
          M && this.$d[M](F);
        return this.init(), this;
      }, r.set = function(a, s) {
        return this.clone().$set(a, s);
      }, r.get = function(a) {
        return this[n.p(a)]();
      }, r.add = function(a, s) {
        var l, h = this;
        a = Number(a);
        var E = n.p(s), M = function(z) {
          var V = T(h);
          return n.w(V.date(V.date() + Math.round(z * a)), h);
        };
        if (E === P)
          return this.set(P, this.$M + a);
        if (E === O)
          return this.set(O, this.$y + a);
        if (E === $)
          return M(1);
        if (E === x)
          return M(7);
        var F = (l = {}, l[k] = d, l[w] = g, l[f] = m, l)[E] || 1, I = this.$d.getTime() + a * F;
        return n.w(I, this);
      }, r.subtract = function(a, s) {
        return this.add(-1 * a, s);
      }, r.format = function(a) {
        var s = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || B;
        var h = a || "YYYY-MM-DDTHH:mm:ssZ", E = n.z(this), M = this.$H, F = this.$m, I = this.$M, z = l.weekdays, V = l.months, ce = l.meridiem, te = function(U, J, ue, he) {
          return U && (U[J] || U(s, h)) || ue[J].slice(0, he);
        }, oe = function(U) {
          return n.s(M % 12 || 12, U, "0");
        }, ne = ce || function(U, J, ue) {
          var he = U < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return h.replace(C, function(U, J) {
          return J || function(ue) {
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
                return te(l.weekdaysMin, s.$W, z, 2);
              case "ddd":
                return te(l.weekdaysShort, s.$W, z, 3);
              case "dddd":
                return z[s.$W];
              case "H":
                return String(M);
              case "HH":
                return n.s(M, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return ne(M, F, !0);
              case "A":
                return ne(M, F, !1);
              case "m":
                return String(F);
              case "mm":
                return n.s(F, 2, "0");
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
        var h, E = this, M = n.p(s), F = T(a), I = (F.utcOffset() - this.utcOffset()) * d, z = this - F, V = function() {
          return n.m(E, F);
        };
        switch (M) {
          case O:
            h = V() / 12;
            break;
          case P:
            h = V();
            break;
          case p:
            h = V() / 3;
            break;
          case x:
            h = (z - I) / 6048e5;
            break;
          case $:
            h = (z - I) / 864e5;
            break;
          case w:
            h = z / g;
            break;
          case k:
            h = z / d;
            break;
          case f:
            h = z / m;
            break;
          default:
            h = z;
        }
        return l ? h : n.a(h);
      }, r.daysInMonth = function() {
        return this.endOf(P).$D;
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
    }(), _ = N.prototype;
    return T.prototype = _, [["$ms", o], ["$s", f], ["$m", k], ["$H", w], ["$W", $], ["$M", P], ["$y", O], ["$D", L]].forEach(function(i) {
      _[i[1]] = function(r) {
        return this.$g(r, i[0], i[1]);
      };
    }), T.extend = function(i, r) {
      return i.$i || (i(r, N, T), i.$i = !0), T;
    }, T.locale = ee, T.isDayjs = le, T.unix = function(i) {
      return T(1e3 * i);
    }, T.en = S[R], T.Ls = S, T.p = {}, T;
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
  var W;
  const [w, $] = Q(!1), [x, P] = Q(!1);
  if (!f)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, o.Subscription), /* @__PURE__ */ e.createElement(u, null, o.NotSubscribed), /* @__PURE__ */ e.createElement(H, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      K,
      {
        variant: "primary",
        onClick: c,
        accessibilityLabel: o.ChangePlan
      },
      o.SelectPlan
    )))));
  const { plan: p } = f, O = G(f.total, p.currency), L = p.interval === b.Annual ? o.Year : o.Month, B = t === "horizontal" ? Ae : v, D = (W = f == null ? void 0 : f.appliedDiscount) == null ? void 0 : W.discount, C = D ? D.percentage ? `${D.percentage}%` : G(D.amount, p.currency) : null, j = D && f.appliedDiscount.discountEndsAt && De().isAfter(De(f.appliedDiscount.discountEndsAt)), A = D ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(v, { gap: "200" }, /* @__PURE__ */ e.createElement(u, { variant: "headingMd" }, o.Subscription), /* @__PURE__ */ e.createElement(v, { gap: "400" }, /* @__PURE__ */ e.createElement(B, { columns: A, gap: "300" }, /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.CurrentPlan), /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, p.name)), /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.Price), /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, { tone: "subdued" }, o.AmountPerInterval.replace("{{ amount }}", O).replace("{{ interval }}", L)), D && !j && /* @__PURE__ */ e.createElement(u, { tone: "success" }, o.DiscountAmount.replace("{{ amount }}", C)), D && j && /* @__PURE__ */ e.createElement(u, { tone: "subdued", textDecorationLine: "line-through" }, o.DiscountAmountExpired.replace("{{ amount }}", C)))), p.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(v, null, /* @__PURE__ */ e.createElement(u, null, o.UsageCharges || "Usage charges"), p.usageCharges.map((R, S) => /* @__PURE__ */ e.createElement(u, { key: `usage-charge-${S}`, tone: "subdued" }, R.terms)))), /* @__PURE__ */ e.createElement(H, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
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
  ))))), w && /* @__PURE__ */ e.createElement(
    $e,
    {
      open: !0,
      onClose: () => $(!1),
      title: o.CancelPlan,
      primaryAction: {
        content: o.CancelPlan,
        destructive: !0,
        loading: x,
        disabled: x,
        onAction: async () => {
          P(!0), await g(), await k(), P(!1), $(!1), d();
        }
      },
      secondaryActions: [
        {
          content: o.Back,
          disabled: x,
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
  qe as HighlightedPlanCards,
  Re as HorizontalPlanCard,
  Je as HorizontalPlanCards,
  Ee as PlanCardStack,
  q as PlanCardType,
  Ue as PlanFeaturesSection,
  je as PlanPricingSection,
  ze as PlanTitleSection,
  ve as SubscriptionSummaryCard,
  et as SubscriptionSummaryPage,
  Qe as VerticalPlanCards
};
