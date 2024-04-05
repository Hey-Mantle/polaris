import e, { createContext as Me, useContext as ke, useState as Q } from "react";
import { Box as I, BlockStack as f, Button as K, InlineStack as H, Badge as be, Text as o, Icon as X, Grid as re, Page as ye, ButtonGroup as de, Layout as Z, Banner as pe, Divider as Se, Card as me, Modal as $e, InlineGrid as Ae } from "@shopify/polaris";
const b = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, ge = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, m = {
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
}), G = (t, i = "USD", u = !0) => {
  let g = Be(i).format(t);
  return u && (g = g.replace(/\.00$/, "")), g;
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
}, ce = ({
  interval: t = b.Every30Days,
  useShortFormPlanIntervals: i = !0
}) => i ? Fe(t) : Te(t), Ce = ({ plan: t, customFieldKey: i = "recommended" }) => {
  var u;
  return !!((u = t.customFields) != null && u[i]);
}, we = ({ plan: t, customFieldKey: i = "buttonLabel" }) => {
  var u;
  return ((u = t.customFields) == null ? void 0 : u[i]) || m.SelectPlan;
}, He = ({ plan: t }) => {
  var i;
  return ((i = t.discounts) == null ? void 0 : i.length) > 0 ? t.discounts.reduce(
    (u, g) => u.discountedAmount < g.discountedAmount ? u : g
  ) : void 0;
}, Oe = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, _e = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4;
var ae = function(i) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, i), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
ae.displayName = "CheckIcon";
var fe = function(i) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, i), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
fe.displayName = "PlusIcon";
const Ye = ({ plan: t }) => /* @__PURE__ */ e.createElement(f, { gap: "100" }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd", alignment: "center" }, t.name), t.description && /* @__PURE__ */ e.createElement(o, { variant: "bodyLg", tone: "subdued", alignment: "center" }, t.description)), Ie = ({ plan: t, discount: i, useShortFormPlanIntervals: u = !0 }) => /* @__PURE__ */ e.createElement(f, { gap: "100" }, !!i && /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { variant: "heading3xl" }, G(i.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  o,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  G(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: t.interval, useShortFormPlanIntervals: u }))), !i && /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "heading3xl" }, G(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: t.interval, useShortFormPlanIntervals: u }))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(f, null, t.usageCharges.map((g, y) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${y}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg" }, g.terms))))), Ne = ({ plan: t, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement(f, { gap: "300" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(H, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, m.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((u, g) => {
  const y = t.features[u];
  if (y.type !== "boolean" || y.value === !0)
    return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${g}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), y.type === "boolean" ? /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, y.name) : /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, y.value, " ", y.name));
})), We = ({
  plan: t,
  discount: i,
  buttonLabel: u,
  onSelectPlan: g,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: d = !1,
  expanded: v = !1,
  isActivePlan: k = !1,
  isRecommendedPlan: P = !1,
  isCustomPlan: C = !1,
  showRecommendedPlanBadge: x = !0
}) => /* @__PURE__ */ e.createElement(I, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(I, { paddingBlock: v || P ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
  I,
  {
    background: P || C ? "bg-surface" : "bg-surface-secondary",
    borderStyle: "solid",
    borderColor: "border",
    borderWidth: "025",
    paddingBlock: v || P ? "1600" : "800",
    paddingInline: "400",
    borderRadius: "200",
    minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
  },
  /* @__PURE__ */ e.createElement(f, { gap: "800" }, /* @__PURE__ */ e.createElement(f, { gap: "400" }, /* @__PURE__ */ e.createElement(Ye, { plan: t }), /* @__PURE__ */ e.createElement(
    Ie,
    {
      plan: t,
      discount: i,
      useShortFormPlanIntervals: y
    }
  )), /* @__PURE__ */ e.createElement(
    K,
    {
      size: "large",
      variant: P ? "primary" : "secondary",
      onClick: () => {
        g ? g({ plan: t, discount: i }) : console.log("No onSelectPlan callback provided");
      },
      disabled: k
    },
    u || m.SelectPlan
  ), /* @__PURE__ */ e.createElement(Ne, { plan: t, trialDaysAsFeature: d }), P && x && /* @__PURE__ */ e.createElement(H, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(be, { tone: "success" }, m.MostPopular)))
))), q = {
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
  customer: i,
  onSelectPlan: u,
  planInterval: g,
  cardType: y = q.Horizontal,
  trialDaysAsFeature: d = !0,
  useShortFormPlanIntervals: v = !0,
  keyForRecommended: k = "recommended",
  keyForCustomButtonLabel: P = "buttonLabel",
  showRecommendedPlanBadge: C = !0,
  applyDiscount: x = !0
}) => {
  var w;
  const M = (w = i == null ? void 0 : i.subscription) != null && w.active ? i.subscription : void 0, $ = M == null ? void 0 : M.plan, O = g ? t.filter((S) => S.interval === g) : t, L = y === q.Vertical ? 1 : _e(O.length), B = Oe(L);
  return /* @__PURE__ */ e.createElement(re, { columns: L }, O.map((S) => {
    const j = x ? He({ plan: S }) : void 0;
    return /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: B, key: S.id }, y === q.Highlighted && /* @__PURE__ */ e.createElement(
      We,
      {
        key: `HighlightedPlanCard-${S.id}`,
        plan: S,
        discount: j,
        onSelectPlan: u,
        isActivePlan: ($ == null ? void 0 : $.id) === S.id,
        trialDaysAsFeature: d,
        useShortFormPlanIntervals: v,
        isCustomPlan: S.availability !== ge.Public,
        isRecommendedPlan: Ce({ plan: S, customFieldKey: k }),
        buttonLabel: we({ plan: S, customFieldKey: P }),
        showRecommendedPlanBadge: C
      }
    ), y === q.Horizontal && /* @__PURE__ */ e.createElement(
      Re,
      {
        key: `HorizontalPlanCard-${S.id}`,
        plan: S,
        discount: j,
        onSelectPlan: u,
        isActivePlan: ($ == null ? void 0 : $.id) === S.id,
        trialDaysAsFeature: d,
        useShortFormPlanIntervals: v,
        isRecommendedPlan: Ce({ plan: S, customFieldKey: k }),
        buttonLabel: we({ plan: S, customFieldKey: P }),
        showRecommendedPlanBadge: C
      }
    ));
  }));
}, Je = ({
  customer: t,
  plans: i,
  onSubscribe: u,
  backUrl: g = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: d,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: v = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !0,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: C,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: M = !0
  // boolean: show custom plans
}) => {
  const $ = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = i.some((p) => p.interval === b.Annual) && i.some((p) => p.interval === b.Every30Days), B = i.find((p) => p.id === ($ == null ? void 0 : $.plan.id)), [w, S] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = i.filter((p) => p.availability === ge.Public), A = M ? i.filter((p) => p.availability !== ge.Public) : [], [W, R] = Q(
    O.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: m.Plans,
      backAction: g ? { content: m.Back, url: g } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Every30Days,
          onClick: () => S(b.Every30Days)
        },
        m.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Annual,
          onClick: () => S(b.Annual)
        },
        m.Yearly
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
    },
    /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(f, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: m.SubscribeSuccessTitle,
        onDismiss: () => {
          R(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      m.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: j,
        onSelectPlan: u,
        planInterval: w,
        cardType: q.Horizontal,
        keyForRecommended: v,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: C,
        showRecommendedPlanBadge: y
      }
    ), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(f, { gap: "300" }, /* @__PURE__ */ e.createElement(I, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd" }, m.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: A,
        onSelectPlan: u,
        planInterval: w,
        cardType: q.Horizontal,
        keyForRecommended: v,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: C,
        showRecommendedPlanBadge: y
      }
    )))))
  );
}, ze = ({ plan: t, isRecommendedPlan: i = !1 }) => /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(H, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(o, { variant: "bodyLg" }, t.name), i && /* @__PURE__ */ e.createElement(be, { tone: "success" }, m.MostPopular)), t.description && /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, t.description)), je = ({ plan: t, discount: i, useShortFormPlanIntervals: u = !0 }) => /* @__PURE__ */ e.createElement(f, { gap: "100" }, !!i && /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { variant: "headingXl" }, G(i.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  o,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: t.interval, useShortFormPlanIntervals: u }))), !i && /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "headingXl" }, G(t.amount, t.currency)), /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: t.interval, useShortFormPlanIntervals: u }))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(f, null, t.usageCharges.map((g, y) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${y}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg" }, g.terms))))), Ue = ({ plan: t, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement(f, { gap: "100" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(H, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, m.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((u, g) => {
  const y = t.features[u];
  if (y.type !== "boolean" || y.value === !0)
    return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${g}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), y.type === "boolean" ? /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, y.name) : /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, y.value, " ", y.name));
})), Re = ({
  plan: t,
  discount: i,
  buttonLabel: u,
  onSelectPlan: g,
  useShortFormPlanIntervals: y = !0,
  trialDaysAsFeature: d = !1,
  isRecommendedPlan: v = !1,
  isActivePlan: k = !1
}) => /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(f, { gap: "400" }, /* @__PURE__ */ e.createElement(ze, { plan: t, isRecommendedPlan: v }), /* @__PURE__ */ e.createElement(
  je,
  {
    plan: t,
    discount: i,
    useShortFormPlanIntervals: y
  }
), /* @__PURE__ */ e.createElement(
  K,
  {
    size: "large",
    variant: v ? "primary" : "secondary",
    onClick: () => {
      g ? g({ plan: t, discount: i }) : console.log("No onSelectPlan callback provided");
    },
    disabled: k
  },
  k ? m.CurrentPlan : u || m.SelectPlan
), /* @__PURE__ */ e.createElement(Ue, { plan: t, trialDaysAsFeature: d }))), qe = ({
  customer: t,
  plans: i,
  onSubscribe: u,
  backUrl: g = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: d = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: v = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !0,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: C = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: M = !0
  // boolean: show custom plans
}) => {
  const $ = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = i.some((p) => p.interval === b.Annual) && i.some((p) => p.interval === b.Every30Days), B = i.find((p) => p.id === ($ == null ? void 0 : $.plan.id)), [w, S] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = i.filter((p) => p.availability === ge.Public), A = M ? i.filter((p) => p.availability !== ge.Public) : [], [W, R] = Q(
    O.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: m.Plans,
      backAction: g && g !== "" ? { content: m.Back, url: g } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Every30Days,
          onClick: () => S(b.Every30Days)
        },
        m.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Annual,
          onClick: () => S(b.Annual)
        },
        m.Yearly
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
    },
    /* @__PURE__ */ e.createElement(I, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(f, { gap: "1000" }, W && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: m.SubscribeSuccessTitle,
        onDismiss: () => {
          R(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      m.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: j,
        onSelectPlan: u,
        planInterval: w,
        cardType: q.Highlighted,
        keyForRecommended: v,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: C,
        showRecommendedPlanBadge: y
      }
    ), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (A == null ? void 0 : A.length) > 0 && /* @__PURE__ */ e.createElement(f, { gap: "300" }, /* @__PURE__ */ e.createElement(I, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd" }, m.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: A,
        onSelectPlan: u,
        planInterval: w,
        cardType: q.Highlighted,
        keyForRecommended: v,
        keyForCustomButtonLabel: d,
        trialDaysAsFeature: P,
        useShortFormPlanIntervals: C,
        showRecommendedPlanBadge: y
      }
    ))))))
  );
}, Qe = ({
  customer: t,
  plans: i,
  onSubscribe: u,
  backUrl: g = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: y = !0,
  // boolean
  customFieldCta: d = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: v = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: k = !1,
  // boolean
  showTrialDaysAsFeature: P = !0,
  // boolean
  useShortFormPlanIntervals: C = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: x = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: M = !0
  // boolean: show custom plans
}) => {
  const $ = t == null ? void 0 : t.subscription, O = new URLSearchParams(window.location.search), L = i.some((n) => n.interval === b.Annual) && i.some((n) => n.interval === b.Every30Days), B = i.find((n) => n.id === ($ == null ? void 0 : $.plan.id)), [w, S] = Q(
    B ? B.interval : L ? b.Annual : b.Every30Days
  ), j = i.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), A = k && L ? j.filter((n) => n.interval === w) : j, W = M ? i.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [R, p] = Q(
    O.get("subscribed") === "true"
  ), se = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(o, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, n.description)), le = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(f, { gap: "200" }, /* @__PURE__ */ e.createElement(o, { fontWeight: "medium" }, m.Features), /* @__PURE__ */ e.createElement(f, { gap: "100" }, P && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(H, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, m.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((_, c) => {
    const a = n.features[_];
    if (a.type !== "boolean" || a.value === !0)
      return /* @__PURE__ */ e.createElement(H, { key: `plan-feature-${c}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: ae, tone: "positive" })), a.type === "boolean" ? /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, a.name) : /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, a.value, " ", a.name));
  }))), ee = ({ plan: n, discount: N }) => /* @__PURE__ */ e.createElement(f, { gap: "100" }, N ? /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { variant: "headingXl" }, G(N.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    o,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: n.interval, useShortFormPlanIntervals: C }))) : /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "headingXl" }, G(n.amount, n.currency)), /* @__PURE__ */ e.createElement(o, { alignment: "center", variant: "bodyLg", tone: "subdued" }, m.Per, " ", ce({ interval: n.interval, useShortFormPlanIntervals: C }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(f, null, n.usageCharges.map((_, c) => /* @__PURE__ */ e.createElement(H, { key: `plan-usageCharge-${c}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(X, { source: fe, tone: "positive" })), /* @__PURE__ */ e.createElement(o, { variant: "bodyLg" }, _.terms))))), T = ({ plan: n, discount: N }) => {
    const _ = d && n.customFields[d], c = n.customFields && n.customFields[v];
    return /* @__PURE__ */ e.createElement(H, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      K,
      {
        size: "large",
        variant: c ? "primary" : "secondary",
        onClick: () => u({ planId: n.id, discountId: N == null ? void 0 : N.id }),
        disabled: (B == null ? void 0 : B.id) === n.id
      },
      (B == null ? void 0 : B.id) === n.id ? m.CurrentPlan : _ ? n.customFields[d] : m.SelectPlan
    ), c && y && /* @__PURE__ */ e.createElement(I, null, /* @__PURE__ */ e.createElement(be, { tone: "success" }, m.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: m.Plans,
      backAction: g !== "" ? { content: m.Back, url: g } : void 0,
      secondaryActions: k && L ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Every30Days,
          onClick: () => S(b.Every30Days)
        },
        m.Monthly
      ), /* @__PURE__ */ e.createElement(
        K,
        {
          pressed: w === b.Annual,
          onClick: () => S(b.Annual)
        },
        m.Year
      )) : void 0,
      fullWidth: x === "full",
      narrowWidth: x === "narrow"
    },
    /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(f, { gap: "400" }, R && /* @__PURE__ */ e.createElement(
      pe,
      {
        tone: "success",
        title: m.SubscribeSuccessTitle,
        onDismiss: () => {
          p(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      m.SubscribeSuccessBody
    ), A.map((n, N) => {
      var c;
      const _ = ((c = n.discounts) == null ? void 0 : c.length) > 0 ? n.discounts.reduce(
        (a, r) => a.discountedAmount < r.discountedAmount ? a : r
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${N}` }, /* @__PURE__ */ e.createElement(re, null, /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(f, { gap: "400" }, /* @__PURE__ */ e.createElement(f, { gap: "200" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ })), /* @__PURE__ */ e.createElement(I, null, T({ plan: n, discount: _ })))), /* @__PURE__ */ e.createElement(re.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, le({ plan: n, discount: _ }))));
    }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(Se, { borderColor: "border" }), (W == null ? void 0 : W.length) > 0 && /* @__PURE__ */ e.createElement(f, { gap: "300" }, /* @__PURE__ */ e.createElement(I, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd" }, m.CustomPlans)), /* @__PURE__ */ e.createElement(re, null, W.map((n, N) => {
      var c;
      const _ = ((c = n.discounts) == null ? void 0 : c.length) > 0 ? n.discounts.reduce(
        (a, r) => a.discountedAmount < r.discountedAmount ? a : r
      ) : null;
      return /* @__PURE__ */ e.createElement(re.Cell, { key: `custom-plan-${N}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(f, { gap: "400" }, se({ plan: n, discount: _ }), ee({ plan: n, discount: _ }), T({ plan: n, discount: _ }), le({ plan: n, discount: _ }))));
    }))))))
  );
};
var Ve = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ke(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Pe = { exports: {} };
(function(t, i) {
  (function(u, g) {
    t.exports = g();
  })(Ve, function() {
    var u = 1e3, g = 6e4, y = 36e5, d = "millisecond", v = "second", k = "minute", P = "hour", C = "day", x = "week", M = "month", $ = "quarter", O = "year", L = "date", B = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, S = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(c) {
      var a = ["th", "st", "nd", "rd"], r = c % 100;
      return "[" + c + (a[(r - 20) % 10] || a[r] || a[0]) + "]";
    } }, A = function(c, a, r) {
      var s = String(c);
      return !s || s.length >= a ? c : "" + Array(a + 1 - s.length).join(r) + c;
    }, W = { s: A, z: function(c) {
      var a = -c.utcOffset(), r = Math.abs(a), s = Math.floor(r / 60), l = r % 60;
      return (a <= 0 ? "+" : "-") + A(s, 2, "0") + ":" + A(l, 2, "0");
    }, m: function c(a, r) {
      if (a.date() < r.date())
        return -c(r, a);
      var s = 12 * (r.year() - a.year()) + (r.month() - a.month()), l = a.clone().add(s, M), h = r - l < 0, E = a.clone().add(s + (h ? -1 : 1), M);
      return +(-(s + (r - l) / (h ? l - E : E - l)) || 0);
    }, a: function(c) {
      return c < 0 ? Math.ceil(c) || 0 : Math.floor(c);
    }, p: function(c) {
      return { M, y: O, w: x, d: C, D: L, h: P, m: k, s: v, ms: d, Q: $ }[c] || String(c || "").toLowerCase().replace(/s$/, "");
    }, u: function(c) {
      return c === void 0;
    } }, R = "en", p = {};
    p[R] = j;
    var se = "$isDayjsObject", le = function(c) {
      return c instanceof N || !(!c || !c[se]);
    }, ee = function c(a, r, s) {
      var l;
      if (!a)
        return R;
      if (typeof a == "string") {
        var h = a.toLowerCase();
        p[h] && (l = h), r && (p[h] = r, l = h);
        var E = a.split("-");
        if (!l && E.length > 1)
          return c(E[0]);
      } else {
        var D = a.name;
        p[D] = a, l = D;
      }
      return !s && l && (R = l), l || !s && R;
    }, T = function(c, a) {
      if (le(c))
        return c.clone();
      var r = typeof a == "object" ? a : {};
      return r.date = c, r.args = arguments, new N(r);
    }, n = W;
    n.l = ee, n.i = le, n.w = function(c, a) {
      return T(c, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
    };
    var N = function() {
      function c(r) {
        this.$L = ee(r.locale, null, !0), this.parse(r), this.$x = this.$x || r.x || {}, this[se] = !0;
      }
      var a = c.prototype;
      return a.parse = function(r) {
        this.$d = function(s) {
          var l = s.date, h = s.utc;
          if (l === null)
            return /* @__PURE__ */ new Date(NaN);
          if (n.u(l))
            return /* @__PURE__ */ new Date();
          if (l instanceof Date)
            return new Date(l);
          if (typeof l == "string" && !/Z$/i.test(l)) {
            var E = l.match(w);
            if (E) {
              var D = E[2] - 1 || 0, F = (E[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(E[1], D, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, F)) : new Date(E[1], D, E[3] || 1, E[4] || 0, E[5] || 0, E[6] || 0, F);
            }
          }
          return new Date(l);
        }(r), this.init();
      }, a.init = function() {
        var r = this.$d;
        this.$y = r.getFullYear(), this.$M = r.getMonth(), this.$D = r.getDate(), this.$W = r.getDay(), this.$H = r.getHours(), this.$m = r.getMinutes(), this.$s = r.getSeconds(), this.$ms = r.getMilliseconds();
      }, a.$utils = function() {
        return n;
      }, a.isValid = function() {
        return this.$d.toString() !== B;
      }, a.isSame = function(r, s) {
        var l = T(r);
        return this.startOf(s) <= l && l <= this.endOf(s);
      }, a.isAfter = function(r, s) {
        return T(r) < this.startOf(s);
      }, a.isBefore = function(r, s) {
        return this.endOf(s) < T(r);
      }, a.$g = function(r, s, l) {
        return n.u(r) ? this[s] : this.set(l, r);
      }, a.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a.valueOf = function() {
        return this.$d.getTime();
      }, a.startOf = function(r, s) {
        var l = this, h = !!n.u(s) || s, E = n.p(r), D = function(ne, U) {
          var J = n.w(l.$u ? Date.UTC(l.$y, U, ne) : new Date(l.$y, U, ne), l);
          return h ? J : J.endOf(C);
        }, F = function(ne, U) {
          return n.w(l.toDate()[ne].apply(l.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), l);
        }, Y = this.$W, z = this.$M, V = this.$D, ie = "set" + (this.$u ? "UTC" : "");
        switch (E) {
          case O:
            return h ? D(1, 0) : D(31, 11);
          case M:
            return h ? D(1, z) : D(0, z + 1);
          case x:
            var te = this.$locale().weekStart || 0, oe = (Y < te ? Y + 7 : Y) - te;
            return D(h ? V - oe : V + (6 - oe), z);
          case C:
          case L:
            return F(ie + "Hours", 0);
          case P:
            return F(ie + "Minutes", 1);
          case k:
            return F(ie + "Seconds", 2);
          case v:
            return F(ie + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a.endOf = function(r) {
        return this.startOf(r, !1);
      }, a.$set = function(r, s) {
        var l, h = n.p(r), E = "set" + (this.$u ? "UTC" : ""), D = (l = {}, l[C] = E + "Date", l[L] = E + "Date", l[M] = E + "Month", l[O] = E + "FullYear", l[P] = E + "Hours", l[k] = E + "Minutes", l[v] = E + "Seconds", l[d] = E + "Milliseconds", l)[h], F = h === C ? this.$D + (s - this.$W) : s;
        if (h === M || h === O) {
          var Y = this.clone().set(L, 1);
          Y.$d[D](F), Y.init(), this.$d = Y.set(L, Math.min(this.$D, Y.daysInMonth())).$d;
        } else
          D && this.$d[D](F);
        return this.init(), this;
      }, a.set = function(r, s) {
        return this.clone().$set(r, s);
      }, a.get = function(r) {
        return this[n.p(r)]();
      }, a.add = function(r, s) {
        var l, h = this;
        r = Number(r);
        var E = n.p(s), D = function(z) {
          var V = T(h);
          return n.w(V.date(V.date() + Math.round(z * r)), h);
        };
        if (E === M)
          return this.set(M, this.$M + r);
        if (E === O)
          return this.set(O, this.$y + r);
        if (E === C)
          return D(1);
        if (E === x)
          return D(7);
        var F = (l = {}, l[k] = g, l[P] = y, l[v] = u, l)[E] || 1, Y = this.$d.getTime() + r * F;
        return n.w(Y, this);
      }, a.subtract = function(r, s) {
        return this.add(-1 * r, s);
      }, a.format = function(r) {
        var s = this, l = this.$locale();
        if (!this.isValid())
          return l.invalidDate || B;
        var h = r || "YYYY-MM-DDTHH:mm:ssZ", E = n.z(this), D = this.$H, F = this.$m, Y = this.$M, z = l.weekdays, V = l.months, ie = l.meridiem, te = function(U, J, ue, he) {
          return U && (U[J] || U(s, h)) || ue[J].slice(0, he);
        }, oe = function(U) {
          return n.s(D % 12 || 12, U, "0");
        }, ne = ie || function(U, J, ue) {
          var he = U < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return h.replace(S, function(U, J) {
          return J || function(ue) {
            switch (ue) {
              case "YY":
                return String(s.$y).slice(-2);
              case "YYYY":
                return n.s(s.$y, 4, "0");
              case "M":
                return Y + 1;
              case "MM":
                return n.s(Y + 1, 2, "0");
              case "MMM":
                return te(l.monthsShort, Y, V, 3);
              case "MMMM":
                return te(V, Y);
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
                return String(D);
              case "HH":
                return n.s(D, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return ne(D, F, !0);
              case "A":
                return ne(D, F, !1);
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
      }, a.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a.diff = function(r, s, l) {
        var h, E = this, D = n.p(s), F = T(r), Y = (F.utcOffset() - this.utcOffset()) * g, z = this - F, V = function() {
          return n.m(E, F);
        };
        switch (D) {
          case O:
            h = V() / 12;
            break;
          case M:
            h = V();
            break;
          case $:
            h = V() / 3;
            break;
          case x:
            h = (z - Y) / 6048e5;
            break;
          case C:
            h = (z - Y) / 864e5;
            break;
          case P:
            h = z / y;
            break;
          case k:
            h = z / g;
            break;
          case v:
            h = z / u;
            break;
          default:
            h = z;
        }
        return l ? h : n.a(h);
      }, a.daysInMonth = function() {
        return this.endOf(M).$D;
      }, a.$locale = function() {
        return p[this.$L];
      }, a.locale = function(r, s) {
        if (!r)
          return this.$L;
        var l = this.clone(), h = ee(r, s, !0);
        return h && (l.$L = h), l;
      }, a.clone = function() {
        return n.w(this.$d, this);
      }, a.toDate = function() {
        return new Date(this.valueOf());
      }, a.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a.toISOString = function() {
        return this.$d.toISOString();
      }, a.toString = function() {
        return this.$d.toUTCString();
      }, c;
    }(), _ = N.prototype;
    return T.prototype = _, [["$ms", d], ["$s", v], ["$m", k], ["$H", P], ["$W", C], ["$M", M], ["$y", O], ["$D", L]].forEach(function(c) {
      _[c[1]] = function(a) {
        return this.$g(a, c[0], c[1]);
      };
    }), T.extend = function(c, a) {
      return c.$i || (c(a, N, T), c.$i = !0), T;
    }, T.locale = ee, T.isDayjs = le, T.unix = function(c) {
      return T(1e3 * c);
    }, T.en = p[R], T.Ls = p, T.p = {}, T;
  });
})(Pe);
var Xe = Pe.exports;
const De = /* @__PURE__ */ Ke(Xe), ve = ({
  orientation: t = "horizontal",
  onShowPlans: i,
  onCancelPlan: u,
  onPlanCancelled: g = () => {
  }
}) => {
  var W;
  const { cancelSubscription: y, i18n: d, subscription: v, refetch: k } = Le(), [P, C] = Q(!1), [x, M] = Q(!1);
  if (!v)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(f, { gap: "200" }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd" }, d.Subscription), /* @__PURE__ */ e.createElement(o, null, d.NotSubscribed), /* @__PURE__ */ e.createElement(H, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      K,
      {
        variant: "primary",
        onClick: i,
        accessibilityLabel: d.ChangePlan
      },
      d.SelectPlan
    )))));
  const { plan: $ } = v, O = G(v.total, $.currency), L = $.interval === b.Annual ? d.Year : d.Month, B = t === "horizontal" ? Ae : f, w = (W = v == null ? void 0 : v.appliedDiscount) == null ? void 0 : W.discount, S = w ? w.percentage ? `${w.percentage}%` : G(w.amount, $.currency) : null, j = w && v.appliedDiscount.discountEndsAt && De().isAfter(De(v.appliedDiscount.discountEndsAt)), A = w ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement(f, { gap: "200" }, /* @__PURE__ */ e.createElement(o, { variant: "headingMd" }, d.Subscription), /* @__PURE__ */ e.createElement(f, { gap: "400" }, /* @__PURE__ */ e.createElement(B, { columns: A, gap: "300" }, /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(o, null, d.CurrentPlan), /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, $.name)), /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(o, null, d.Price), /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(o, { tone: "subdued" }, d.AmountPerInterval.replace("{{ amount }}", O).replace("{{ interval }}", L)), w && !j && /* @__PURE__ */ e.createElement(o, { tone: "success" }, d.DiscountAmount.replace("{{ amount }}", S)), w && j && /* @__PURE__ */ e.createElement(o, { tone: "subdued", textDecorationLine: "line-through" }, d.DiscountAmountExpired.replace("{{ amount }}", S)))), $.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(f, null, /* @__PURE__ */ e.createElement(o, null, d.UsageCharges || "Usage charges"), $.usageCharges.map((R, p) => /* @__PURE__ */ e.createElement(o, { key: `usage-charge-${p}`, tone: "subdued" }, R.terms)))), /* @__PURE__ */ e.createElement(H, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
    K,
    {
      onClick: () => {
        u ? u() : C(!0);
      },
      accessibilityLabel: d.CancelPlan,
      tone: "critical"
    },
    d.CancelPlan
  ), /* @__PURE__ */ e.createElement(
    K,
    {
      variant: "primary",
      onClick: i,
      accessibilityLabel: d.ChangePlan
    },
    d.ChangePlan
  ))))), P && /* @__PURE__ */ e.createElement(
    $e,
    {
      open: !0,
      onClose: () => C(!1),
      title: d.CancelPlan,
      primaryAction: {
        content: d.CancelPlan,
        destructive: !0,
        loading: x,
        disabled: x,
        onAction: async () => {
          M(!0), await y(), await k(), M(!1), C(!1), g();
        }
      },
      secondaryActions: [
        {
          content: d.Back,
          disabled: x,
          onAction: () => C(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement($e.Section, null, d.CancelConfirmation)
  ));
}, et = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: i = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const u = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: m.Subscription,
      backAction: t ? { content: m.Back, url: t } : void 0,
      fullWidth: i === "full",
      narrowWidth: i === "narrow"
    },
    /* @__PURE__ */ e.createElement(f, { gap: "400" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: u
      }
    ), /* @__PURE__ */ e.createElement(Z, null, /* @__PURE__ */ e.createElement(Z.Section, null, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: u
      }
    )), /* @__PURE__ */ e.createElement(Z.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      ve,
      {
        onShowPlans: u,
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
  et as SubscriptionSummaryPage,
  Qe as VerticalPlanCards
};
