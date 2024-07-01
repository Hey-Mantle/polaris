import e, { createContext as Le, useContext as xe, useState as te } from "react";
import { Box as z, BlockStack as $, Button as Z, InlineStack as B, Badge as pe, Text as g, Icon as J, Grid as le, Page as ye, ButtonGroup as de, Layout as G, Banner as Se, Divider as $e, Card as me, Modal as Ce, InlineGrid as Ye } from "@shopify/polaris";
const M = {
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
}, Te = Le(), Fe = () => {
  const t = xe(Te);
  if (t === void 0)
    throw new Error("useMantle must be used within a MantleProvider");
  return t;
}, Oe = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), Q = (t, l = "USD", i = !0) => {
  let u = Oe(l).format(t);
  return i && (u = u.replace(/\.00$/, "")), u;
}, Be = (t = M.Every30Days) => {
  switch (t) {
    case M.Annual:
      return "year";
    case M.Every30Days:
    default:
      return "month";
  }
}, He = (t = M.Every30Days) => {
  switch (t) {
    case M.Annual:
      return "yr";
    case M.Every30Days:
    default:
      return "mo";
  }
}, se = ({
  interval: t = M.Every30Days,
  useShortFormPlanIntervals: l = !0
}) => l ? He(t) : Be(t), De = ({ plan: t, customFieldKey: l = "recommended" }) => {
  var i;
  return !!((i = t.customFields) != null && i[l]);
}, Me = ({ plan: t, customFieldKey: l = "buttonLabel" }) => {
  var i;
  return ((i = t.customFields) == null ? void 0 : i[l]) || v.SelectPlan;
}, Ie = ({ plan: t }) => {
  var l;
  return ((l = t.discounts) == null ? void 0 : l.length) > 0 ? t.discounts.reduce(
    (i, u) => i.discountedAmount < u.discountedAmount ? i : u
  ) : void 0;
}, _e = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, ze = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4;
var ce = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
ce.displayName = "CheckIcon";
var ve = function(l) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, l), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
ve.displayName = "PlusIcon";
const We = ({ plan: t, t: l, translatePlanName: i }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd", alignment: "center" }, i ? l(t.name) : t.name), t.description && /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued", alignment: "center" }, l(t.description))), Ne = ({ plan: t, discount: l, t: i, useShortFormPlanIntervals: u = !0 }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(B, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "heading3xl" }, Q(l.discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Q(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: u })))), !l && /* @__PURE__ */ e.createElement(B, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "heading3xl" }, Q(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: u })))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, t.usageCharges.map((S, h) => /* @__PURE__ */ e.createElement(B, { key: `plan-usageCharge-${h}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ve, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i(S.terms)))))), je = ({ plan: t, t: l, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement($, { gap: "300" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(B, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(v.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((u, S) => {
  const h = t.features[u];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(B, { key: `plan-feature-${S}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), Ue = ({
  plan: t,
  discount: l,
  buttonLabel: i,
  onSelectPlan: u,
  useShortFormPlanIntervals: S = !0,
  trialDaysAsFeature: h = !1,
  expanded: f = !1,
  isActivePlan: Y = !1,
  isRecommendedPlan: C = !1,
  isCustomPlan: k = !1,
  showRecommendedPlanBadge: T = !0,
  t: D,
  translatePlanName: w = !0
}) => {
  const [A, d] = e.useState(!1), o = D || ((H) => H), P = async ({ plan: H, discount: W }) => {
    u ? (d(!0), await u({ plan: H, discount: W }) !== !0 && d(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(z, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(z, { paddingBlock: f || C ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
    z,
    {
      background: C || k ? "bg-surface" : "bg-surface-secondary",
      borderStyle: "solid",
      borderColor: "border",
      borderWidth: "025",
      paddingBlock: f || C ? "1600" : "800",
      paddingInline: "400",
      borderRadius: "200",
      minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
    },
    /* @__PURE__ */ e.createElement($, { gap: "800" }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(We, { plan: t, t: o, translatePlanName: w }), /* @__PURE__ */ e.createElement(
      Ne,
      {
        plan: t,
        discount: l,
        useShortFormPlanIntervals: S,
        t: o
      }
    )), /* @__PURE__ */ e.createElement(
      Z,
      {
        size: "large",
        variant: C ? "primary" : "secondary",
        onClick: async () => {
          await P({ plan: t, discount: l });
        },
        disabled: Y,
        loading: A
      },
      o(i || v.SelectPlan)
    ), /* @__PURE__ */ e.createElement(je, { plan: t, t: o, trialDaysAsFeature: h }), C && T && /* @__PURE__ */ e.createElement(B, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(pe, { tone: "success" }, o(v.MostPopular))))
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
  onSelectPlan: i,
  planInterval: u,
  cardType: S = ee.Horizontal,
  trialDaysAsFeature: h = !0,
  useShortFormPlanIntervals: f = !0,
  keyForRecommended: Y = "recommended",
  keyForCustomButtonLabel: C = "buttonLabel",
  showRecommendedPlanBadge: k = !0,
  applyDiscount: T = !0,
  t: D,
  translatePlanName: w = !0
}) => {
  var L;
  const A = (L = l == null ? void 0 : l.subscription) != null && L.active ? l.subscription : void 0, d = A == null ? void 0 : A.plan, o = u ? t.filter((b) => b.interval === u) : t, P = S === ee.Vertical ? 1 : ze(o.length), H = _e(P), W = D || ((b) => b);
  return /* @__PURE__ */ e.createElement(le, { columns: P }, o.map((b) => {
    const N = T ? Ie({ plan: b }) : void 0, p = (d == null ? void 0 : d.id) === b.id && !(A != null && A.cancelOn);
    return /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: H, key: b.id }, S === ee.Highlighted && /* @__PURE__ */ e.createElement(
      Ue,
      {
        key: `HighlightedPlanCard-${b.id}`,
        plan: b,
        discount: N,
        onSelectPlan: i,
        isActivePlan: p,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: f,
        isCustomPlan: b.availability !== ge.Public,
        isRecommendedPlan: De({ plan: b, customFieldKey: Y }),
        buttonLabel: Me({ plan: b, customFieldKey: C }),
        showRecommendedPlanBadge: k,
        t: W,
        translatePlanName: w
      }
    ), S === ee.Horizontal && /* @__PURE__ */ e.createElement(
      Ke,
      {
        key: `HorizontalPlanCard-${b.id}`,
        plan: b,
        discount: N,
        onSelectPlan: i,
        isActivePlan: p,
        trialDaysAsFeature: h,
        useShortFormPlanIntervals: f,
        isRecommendedPlan: De({ plan: b, customFieldKey: Y }),
        buttonLabel: Me({ plan: b, customFieldKey: C }),
        showRecommendedPlanBadge: k,
        t: W,
        translatePlanName: w
      }
    ));
  }));
}, et = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: u = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: Y = !0,
  // boolean
  showTrialDaysAsFeature: C = !0,
  // boolean
  useShortFormPlanIntervals: k,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const w = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some((p) => p.interval === M.Annual) && l.some((p) => p.interval === M.Every30Days), o = l.find((p) => p.id === (w == null ? void 0 : w.plan.id)), [P, H] = te(
    o ? o.interval : d ? M.Annual : M.Every30Days
  ), W = l.filter((p) => p.availability === ge.Public), L = D ? l.filter((p) => p.availability !== ge.Public) : [], [b, N] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: v.Plans,
      backAction: u ? { content: v.Back, url: u } : void 0,
      secondaryActions: Y && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Every30Days,
          onClick: () => H(M.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Annual,
          onClick: () => H(M.Annual)
        },
        v.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, b && /* @__PURE__ */ e.createElement(
      Se,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          N(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: W,
        onSelectPlan: i,
        planInterval: P,
        cardType: ee.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: C,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: S
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement($e, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: L,
        onSelectPlan: i,
        planInterval: P,
        cardType: ee.Horizontal,
        keyForRecommended: f,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: C,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: S
      }
    )))))
  );
}, Re = ({ plan: t, t: l, translatePlanName: i, isRecommendedPlan: u = !1 }) => /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(B, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i ? l(t.name) : t.name), u && /* @__PURE__ */ e.createElement(pe, { tone: "success" }, l(v.MostPopular))), t.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(t.description))), Ve = ({ plan: t, discount: l, t: i, useShortFormPlanIntervals: u = !0 }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, !!l && /* @__PURE__ */ e.createElement(B, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(l.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  g,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: u })))), !l && /* @__PURE__ */ e.createElement(B, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(t.amount, t.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, i(v.Per), " ", i(se({ interval: t.interval, useShortFormPlanIntervals: u })))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, t.usageCharges.map((S, h) => /* @__PURE__ */ e.createElement(B, { key: `plan-usageCharge-${h}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ve, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, i(S.terms)))))), Ze = ({ plan: t, t: l, trialDaysAsFeature: i = !1 }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, i && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(B, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(v.FreeTrialLength).replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((u, S) => {
  const h = t.features[u];
  if (h.type !== "boolean" || h.value === !0)
    return /* @__PURE__ */ e.createElement(B, { key: `plan-feature-${S}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), h.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, l(h.name)) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, h.value, " ", l(h.name)));
})), Ke = ({
  plan: t,
  discount: l,
  buttonLabel: i,
  onSelectPlan: u,
  useShortFormPlanIntervals: S = !0,
  trialDaysAsFeature: h = !1,
  isRecommendedPlan: f = !1,
  isActivePlan: Y = !1,
  t: C,
  translatePlanName: k = !0
}) => {
  const [T, D] = e.useState(!1), w = C || ((d) => d), A = async ({ plan: d, discount: o }) => {
    u ? (D(!0), await u({ plan: d, discount: o }) !== !0 && D(!1)) : console.log("No onSelectPlan callback provided");
  };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(Re, { plan: t, isRecommendedPlan: f, t: w, translatePlanName: k }), /* @__PURE__ */ e.createElement(
    Ve,
    {
      plan: t,
      discount: l,
      useShortFormPlanIntervals: S,
      t: w
    }
  ), /* @__PURE__ */ e.createElement(
    Z,
    {
      size: "large",
      variant: f ? "primary" : "secondary",
      onClick: async () => {
        await A({ plan: t, discount: l });
      },
      disabled: Y,
      loading: T
    },
    w(Y ? v.CurrentPlan : i || v.SelectPlan)
  ), /* @__PURE__ */ e.createElement(Ze, { plan: t, trialDaysAsFeature: h, t: w })));
}, tt = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: u = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: Y = !0,
  // boolean
  showTrialDaysAsFeature: C = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const w = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some((p) => p.interval === M.Annual) && l.some((p) => p.interval === M.Every30Days), o = l.find((p) => p.id === (w == null ? void 0 : w.plan.id)), [P, H] = te(
    o ? o.interval : d ? M.Annual : M.Every30Days
  ), W = l.filter((p) => p.availability === ge.Public), L = D ? l.filter((p) => p.availability !== ge.Public) : [], [b, N] = te(
    A.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: v.Plans,
      backAction: u && u !== "" ? { content: v.Back, url: u } : void 0,
      secondaryActions: Y && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Every30Days,
          onClick: () => H(M.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Annual,
          onClick: () => H(M.Annual)
        },
        v.Yearly
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(z, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement($, { gap: "1000" }, b && /* @__PURE__ */ e.createElement(
      Se,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          N(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: W,
        onSelectPlan: i,
        planInterval: P,
        cardType: ee.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: C,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: S
      }
    ), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement($e, { borderColor: "border" }), (L == null ? void 0 : L.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(
      Ee,
      {
        plans: L,
        onSelectPlan: i,
        planInterval: P,
        cardType: ee.Highlighted,
        keyForRecommended: f,
        keyForCustomButtonLabel: h,
        trialDaysAsFeature: C,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: S
      }
    ))))))
  );
}, nt = ({
  customer: t,
  plans: l,
  onSubscribe: i,
  backUrl: u = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: S = !0,
  // boolean
  customFieldCta: h = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: f = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: Y = !1,
  // boolean
  showTrialDaysAsFeature: C = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: T = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: D = !0
  // boolean: show custom plans
}) => {
  const w = t == null ? void 0 : t.subscription, A = new URLSearchParams(window.location.search), d = l.some((n) => n.interval === M.Annual) && l.some((n) => n.interval === M.Every30Days), o = l.find((n) => n.id === (w == null ? void 0 : w.plan.id)), [P, H] = te(
    o ? o.interval : d ? M.Annual : M.Every30Days
  ), W = l.filter(
    (n) => n.availability !== "customerTag" && n.availability !== "customer"
  ), L = Y && d ? W.filter((n) => n.interval === P) : W, b = D ? l.filter(
    (n) => n.availability === "customerTag" || n.availability === "customer"
  ) : [], [N, p] = te(
    A.get("subscribed") === "true"
  ), ne = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, n.name), n.description && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, n.description)), X = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { fontWeight: "medium" }, v.Features), /* @__PURE__ */ e.createElement($, { gap: "100" }, C && n.trialDays !== 0 && /* @__PURE__ */ e.createElement(B, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, v.FreeTrialLength.replace("{{ trialDays }}", n.trialDays))), n.featuresOrder.map((I, s) => {
    const r = n.features[I];
    if (r.type !== "boolean" || r.value === !0)
      return /* @__PURE__ */ e.createElement(B, { key: `plan-feature-${s}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ce, tone: "positive" })), r.type === "boolean" ? /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.name) : /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, r.value, " ", r.name));
  }))), K = ({ plan: n, discount: j }) => /* @__PURE__ */ e.createElement($, { gap: "100" }, j ? /* @__PURE__ */ e.createElement(B, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingXl" }, Q(j.discountedAmount, n.currency)), /* @__PURE__ */ e.createElement(
    g,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    n.amount
  ), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg", tone: "subdued" }, v.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: k }))) : /* @__PURE__ */ e.createElement(B, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "headingXl" }, Q(n.amount, n.currency)), /* @__PURE__ */ e.createElement(g, { alignment: "center", variant: "bodyLg", tone: "subdued" }, v.Per, " ", se({ interval: n.interval, useShortFormPlanIntervals: k }))), n.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, n.usageCharges.map((I, s) => /* @__PURE__ */ e.createElement(B, { key: `plan-usageCharge-${s}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(J, { source: ve, tone: "positive" })), /* @__PURE__ */ e.createElement(g, { variant: "bodyLg" }, I.terms))))), F = ({ plan: n, discount: j }) => {
    const I = h && n.customFields[h], s = n.customFields && n.customFields[f];
    return /* @__PURE__ */ e.createElement(B, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      Z,
      {
        size: "large",
        variant: s ? "primary" : "secondary",
        onClick: () => i({ planId: n.id, discountId: j == null ? void 0 : j.id }),
        disabled: (o == null ? void 0 : o.id) === n.id
      },
      (o == null ? void 0 : o.id) === n.id ? v.CurrentPlan : I ? n.customFields[h] : v.SelectPlan
    ), s && S && /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(pe, { tone: "success" }, v.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: v.Plans,
      backAction: u !== "" ? { content: v.Back, url: u } : void 0,
      secondaryActions: Y && d ? /* @__PURE__ */ e.createElement(de, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Every30Days,
          onClick: () => H(M.Every30Days)
        },
        v.Monthly
      ), /* @__PURE__ */ e.createElement(
        Z,
        {
          pressed: P === M.Annual,
          onClick: () => H(M.Annual)
        },
        v.Year
      )) : void 0,
      fullWidth: T === "full",
      narrowWidth: T === "narrow"
    },
    /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, N && /* @__PURE__ */ e.createElement(
      Se,
      {
        tone: "success",
        title: v.SubscribeSuccessTitle,
        onDismiss: () => {
          p(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      v.SubscribeSuccessBody
    ), L.map((n, j) => {
      var s;
      const I = ((s = n.discounts) == null ? void 0 : s.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(me, { key: `plan-${j}` }, /* @__PURE__ */ e.createElement(le, null, /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement($, { gap: "200" }, ne({ plan: n, discount: I }), K({ plan: n, discount: I })), /* @__PURE__ */ e.createElement(z, null, F({ plan: n, discount: I })))), /* @__PURE__ */ e.createElement(le.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, X({ plan: n, discount: I }))));
    }), (b == null ? void 0 : b.length) > 0 && /* @__PURE__ */ e.createElement($e, { borderColor: "border" }), (b == null ? void 0 : b.length) > 0 && /* @__PURE__ */ e.createElement($, { gap: "300" }, /* @__PURE__ */ e.createElement(z, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, v.CustomPlans)), /* @__PURE__ */ e.createElement(le, null, b.map((n, j) => {
      var s;
      const I = ((s = n.discounts) == null ? void 0 : s.length) > 0 ? n.discounts.reduce(
        (r, a) => r.discountedAmount < a.discountedAmount ? r : a
      ) : null;
      return /* @__PURE__ */ e.createElement(le.Cell, { key: `custom-plan-${j}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement($, { gap: "400" }, ne({ plan: n, discount: I }), K({ plan: n, discount: I }), F({ plan: n, discount: I }), X({ plan: n, discount: I }))));
    }))))))
  );
};
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pe(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ke = { exports: {} };
(function(t, l) {
  (function(i, u) {
    t.exports = u();
  })(we, function() {
    var i = 1e3, u = 6e4, S = 36e5, h = "millisecond", f = "second", Y = "minute", C = "hour", k = "day", T = "week", D = "month", w = "quarter", A = "year", d = "date", o = "Invalid Date", P = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, H = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, W = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(s) {
      var r = ["th", "st", "nd", "rd"], a = s % 100;
      return "[" + s + (r[(a - 20) % 10] || r[a] || r[0]) + "]";
    } }, L = function(s, r, a) {
      var m = String(s);
      return !m || m.length >= r ? s : "" + Array(r + 1 - m.length).join(a) + s;
    }, b = { s: L, z: function(s) {
      var r = -s.utcOffset(), a = Math.abs(r), m = Math.floor(a / 60), c = a % 60;
      return (r <= 0 ? "+" : "-") + L(m, 2, "0") + ":" + L(c, 2, "0");
    }, m: function s(r, a) {
      if (r.date() < a.date())
        return -s(a, r);
      var m = 12 * (a.year() - r.year()) + (a.month() - r.month()), c = r.clone().add(m, D), E = a - c < 0, y = r.clone().add(m + (E ? -1 : 1), D);
      return +(-(m + (a - c) / (E ? c - y : y - c)) || 0);
    }, a: function(s) {
      return s < 0 ? Math.ceil(s) || 0 : Math.floor(s);
    }, p: function(s) {
      return { M: D, y: A, w: T, d: k, D: d, h: C, m: Y, s: f, ms: h, Q: w }[s] || String(s || "").toLowerCase().replace(/s$/, "");
    }, u: function(s) {
      return s === void 0;
    } }, N = "en", p = {};
    p[N] = W;
    var ne = "$isDayjsObject", X = function(s) {
      return s instanceof j || !(!s || !s[ne]);
    }, K = function s(r, a, m) {
      var c;
      if (!r)
        return N;
      if (typeof r == "string") {
        var E = r.toLowerCase();
        p[E] && (c = E), a && (p[E] = a, c = E);
        var y = r.split("-");
        if (!c && y.length > 1)
          return s(y[0]);
      } else {
        var x = r.name;
        p[x] = r, c = x;
      }
      return !m && c && (N = c), c || !m && N;
    }, F = function(s, r) {
      if (X(s))
        return s.clone();
      var a = typeof r == "object" ? r : {};
      return a.date = s, a.args = arguments, new j(a);
    }, n = b;
    n.l = K, n.i = X, n.w = function(s, r) {
      return F(s, { locale: r.$L, utc: r.$u, x: r.$x, $offset: r.$offset });
    };
    var j = function() {
      function s(a) {
        this.$L = K(a.locale, null, !0), this.parse(a), this.$x = this.$x || a.x || {}, this[ne] = !0;
      }
      var r = s.prototype;
      return r.parse = function(a) {
        this.$d = function(m) {
          var c = m.date, E = m.utc;
          if (c === null)
            return /* @__PURE__ */ new Date(NaN);
          if (n.u(c))
            return /* @__PURE__ */ new Date();
          if (c instanceof Date)
            return new Date(c);
          if (typeof c == "string" && !/Z$/i.test(c)) {
            var y = c.match(P);
            if (y) {
              var x = y[2] - 1 || 0, O = (y[7] || "0").substring(0, 3);
              return E ? new Date(Date.UTC(y[1], x, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, O)) : new Date(y[1], x, y[3] || 1, y[4] || 0, y[5] || 0, y[6] || 0, O);
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
        return this.$d.toString() !== o;
      }, r.isSame = function(a, m) {
        var c = F(a);
        return this.startOf(m) <= c && c <= this.endOf(m);
      }, r.isAfter = function(a, m) {
        return F(a) < this.startOf(m);
      }, r.isBefore = function(a, m) {
        return this.endOf(m) < F(a);
      }, r.$g = function(a, m, c) {
        return n.u(a) ? this[m] : this.set(c, a);
      }, r.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, r.valueOf = function() {
        return this.$d.getTime();
      }, r.startOf = function(a, m) {
        var c = this, E = !!n.u(m) || m, y = n.p(a), x = function(re, R) {
          var q = n.w(c.$u ? Date.UTC(c.$y, R, re) : new Date(c.$y, R, re), c);
          return E ? q : q.endOf(k);
        }, O = function(re, R) {
          return n.w(c.toDate()[re].apply(c.toDate("s"), (E ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(R)), c);
        }, _ = this.$W, U = this.$M, V = this.$D, ie = "set" + (this.$u ? "UTC" : "");
        switch (y) {
          case A:
            return E ? x(1, 0) : x(31, 11);
          case D:
            return E ? x(1, U) : x(0, U + 1);
          case T:
            var ae = this.$locale().weekStart || 0, oe = (_ < ae ? _ + 7 : _) - ae;
            return x(E ? V - oe : V + (6 - oe), U);
          case k:
          case d:
            return O(ie + "Hours", 0);
          case C:
            return O(ie + "Minutes", 1);
          case Y:
            return O(ie + "Seconds", 2);
          case f:
            return O(ie + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, r.endOf = function(a) {
        return this.startOf(a, !1);
      }, r.$set = function(a, m) {
        var c, E = n.p(a), y = "set" + (this.$u ? "UTC" : ""), x = (c = {}, c[k] = y + "Date", c[d] = y + "Date", c[D] = y + "Month", c[A] = y + "FullYear", c[C] = y + "Hours", c[Y] = y + "Minutes", c[f] = y + "Seconds", c[h] = y + "Milliseconds", c)[E], O = E === k ? this.$D + (m - this.$W) : m;
        if (E === D || E === A) {
          var _ = this.clone().set(d, 1);
          _.$d[x](O), _.init(), this.$d = _.set(d, Math.min(this.$D, _.daysInMonth())).$d;
        } else
          x && this.$d[x](O);
        return this.init(), this;
      }, r.set = function(a, m) {
        return this.clone().$set(a, m);
      }, r.get = function(a) {
        return this[n.p(a)]();
      }, r.add = function(a, m) {
        var c, E = this;
        a = Number(a);
        var y = n.p(m), x = function(U) {
          var V = F(E);
          return n.w(V.date(V.date() + Math.round(U * a)), E);
        };
        if (y === D)
          return this.set(D, this.$M + a);
        if (y === A)
          return this.set(A, this.$y + a);
        if (y === k)
          return x(1);
        if (y === T)
          return x(7);
        var O = (c = {}, c[Y] = u, c[C] = S, c[f] = i, c)[y] || 1, _ = this.$d.getTime() + a * O;
        return n.w(_, this);
      }, r.subtract = function(a, m) {
        return this.add(-1 * a, m);
      }, r.format = function(a) {
        var m = this, c = this.$locale();
        if (!this.isValid())
          return c.invalidDate || o;
        var E = a || "YYYY-MM-DDTHH:mm:ssZ", y = n.z(this), x = this.$H, O = this.$m, _ = this.$M, U = c.weekdays, V = c.months, ie = c.meridiem, ae = function(R, q, ue, he) {
          return R && (R[q] || R(m, E)) || ue[q].slice(0, he);
        }, oe = function(R) {
          return n.s(x % 12 || 12, R, "0");
        }, re = ie || function(R, q, ue) {
          var he = R < 12 ? "AM" : "PM";
          return ue ? he.toLowerCase() : he;
        };
        return E.replace(H, function(R, q) {
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
                return ae(c.monthsShort, _, V, 3);
              case "MMMM":
                return ae(V, _);
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
                return String(x);
              case "HH":
                return n.s(x, 2, "0");
              case "h":
                return oe(1);
              case "hh":
                return oe(2);
              case "a":
                return re(x, O, !0);
              case "A":
                return re(x, O, !1);
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
        var E, y = this, x = n.p(m), O = F(a), _ = (O.utcOffset() - this.utcOffset()) * u, U = this - O, V = function() {
          return n.m(y, O);
        };
        switch (x) {
          case A:
            E = V() / 12;
            break;
          case D:
            E = V();
            break;
          case w:
            E = V() / 3;
            break;
          case T:
            E = (U - _) / 6048e5;
            break;
          case k:
            E = (U - _) / 864e5;
            break;
          case C:
            E = U / S;
            break;
          case Y:
            E = U / u;
            break;
          case f:
            E = U / i;
            break;
          default:
            E = U;
        }
        return c ? E : n.a(E);
      }, r.daysInMonth = function() {
        return this.endOf(D).$D;
      }, r.$locale = function() {
        return p[this.$L];
      }, r.locale = function(a, m) {
        if (!a)
          return this.$L;
        var c = this.clone(), E = K(a, m, !0);
        return E && (c.$L = E), c;
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
    return F.prototype = I, [["$ms", h], ["$s", f], ["$m", Y], ["$H", C], ["$W", k], ["$M", D], ["$y", A], ["$D", d]].forEach(function(s) {
      I[s[1]] = function(r) {
        return this.$g(r, s[0], s[1]);
      };
    }), F.extend = function(s, r) {
      return s.$i || (s(r, j, F), s.$i = !0), F;
    }, F.locale = K, F.isDayjs = X, F.unix = function(s) {
      return F(1e3 * s);
    }, F.en = p[N], F.Ls = p, F.p = {}, F;
  });
})(ke);
var Xe = ke.exports;
const fe = /* @__PURE__ */ Pe(Xe);
var Ae = { exports: {} };
(function(t, l) {
  (function(i, u) {
    t.exports = u();
  })(we, function() {
    var i = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" };
    return function(u, S, h) {
      var f = S.prototype, Y = f.format;
      h.en.formats = i, f.format = function(C) {
        C === void 0 && (C = "YYYY-MM-DDTHH:mm:ssZ");
        var k = this.$locale().formats, T = function(D, w) {
          return D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(A, d, o) {
            var P = o && o.toUpperCase();
            return d || w[o] || i[o] || w[P].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(H, W, L) {
              return W || L.slice(1);
            });
          });
        }(C, k === void 0 ? {} : k);
        return Y.call(this, T);
      };
    };
  });
})(Ae);
var Je = Ae.exports;
const Ge = /* @__PURE__ */ Pe(Je);
fe.extend(Ge);
const be = ({
  orientation: t = "horizontal",
  onShowPlans: l,
  onCancelPlan: i,
  onPlanCancelled: u = () => {
  },
  cancelSubscription: S = async () => {
  },
  i18n: h,
  subscription: f,
  refetch: Y = async () => {
  },
  t: C,
  translatePlanName: k = !0
}) => {
  var X;
  const [T, D] = te(!1), [w, A] = te(!1), d = C || ((K) => K), o = {
    ...v,
    ...h || {}
  };
  if (!f)
    return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, d(o.Subscription)), /* @__PURE__ */ e.createElement(g, null, d(o.NotSubscribed)), /* @__PURE__ */ e.createElement(B, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
      Z,
      {
        variant: "primary",
        onClick: l,
        accessibilityLabel: d(o.ChangePlan)
      },
      d(o.SelectPlan)
    )))));
  const { plan: P } = f, H = Q(f.total, P.currency), W = d(P.interval === M.Annual ? o.Year : o.Month), L = t === "horizontal" ? Ye : $, b = (X = f == null ? void 0 : f.appliedDiscount) == null ? void 0 : X.discount, N = b ? b.percentage ? `${b.percentage}%` : Q(b.amount, P.currency) : null, p = b && f.appliedDiscount.discountEndsAt && fe().isAfter(fe(f.appliedDiscount.discountEndsAt)), ne = b ? { xs: 1, md: 3 } : { xs: 1, md: 2 };
  return /* @__PURE__ */ e.createElement(me, null, /* @__PURE__ */ e.createElement($, { gap: "200" }, /* @__PURE__ */ e.createElement(g, { variant: "headingMd" }, d(o.Subscription)), /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(L, { columns: ne, gap: "300" }, /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(g, null, d(o.CurrentPlan)), /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, k ? d(P.name) : P.name), f.cancelOn && /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, d("Canceled, active until {{ date }}").replace("{{ date }}", fe(f.cancelOn).format("LL")))), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(g, null, d(o.Price)), /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(g, { tone: "subdued" }, d(o.AmountPerInterval).replace("{{ amount }}", H).replace("{{ interval }}", W)), b && !p && /* @__PURE__ */ e.createElement(g, { tone: "success" }, d(o.DiscountAmount).replace("{{ amount }}", N)), b && p && /* @__PURE__ */ e.createElement(g, { tone: "subdued", textDecorationLine: "line-through" }, d(o.DiscountAmountExpired).replace("{{ amount }}", N)))), P.usageCharges.length > 0 && /* @__PURE__ */ e.createElement($, null, /* @__PURE__ */ e.createElement(g, null, d(o.UsageCharges || "Usage charges")), P.usageCharges.map((K, F) => /* @__PURE__ */ e.createElement(g, { key: `usage-charge-${F}`, tone: "subdued" }, d(K.terms))))), /* @__PURE__ */ e.createElement(B, { align: "end" }, /* @__PURE__ */ e.createElement(de, null, /* @__PURE__ */ e.createElement(
    Z,
    {
      onClick: () => {
        i ? i() : D(!0);
      },
      accessibilityLabel: d(o.CancelPlan),
      tone: "critical",
      disabled: !!f.cancelOn
    },
    d(o.CancelPlan)
  ), /* @__PURE__ */ e.createElement(
    Z,
    {
      variant: "primary",
      onClick: l,
      accessibilityLabel: d(o.ChangePlan)
    },
    d(o.ChangePlan)
  ))))), T && /* @__PURE__ */ e.createElement(
    Ce,
    {
      open: !0,
      onClose: () => D(!1),
      title: d(o.CancelPlan),
      primaryAction: {
        content: d(o.CancelPlan),
        destructive: !0,
        loading: w,
        disabled: w,
        onAction: async () => {
          A(!0), await S(), await Y(), A(!1), D(!1), u();
        }
      },
      secondaryActions: [
        {
          content: d(o.Back),
          disabled: w,
          onAction: () => D(!1)
        }
      ]
    },
    /* @__PURE__ */ e.createElement(Ce.Section, null, d(o.CancelConfirmation))
  ));
}, at = ({
  backUrl: t = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth: l = "narrow"
  // string: "full", "narrow", or "default"
}) => {
  const { cancelSubscription: i, i18n: u, subscription: S, refetch: h } = Fe(), f = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  };
  return /* @__PURE__ */ e.createElement(
    ye,
    {
      title: u.Subscription,
      backAction: t ? { content: u.Back, url: t } : void 0,
      fullWidth: l === "full",
      narrowWidth: l === "narrow"
    },
    /* @__PURE__ */ e.createElement($, { gap: "400" }, /* @__PURE__ */ e.createElement(
      be,
      {
        onShowPlans: f,
        cancelSubscription: i,
        i18n: u,
        subscription: S,
        refetch: h
      }
    ), /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(G.Section, null, /* @__PURE__ */ e.createElement(
      be,
      {
        onShowPlans: f,
        cancelSubscription: i,
        i18n: u,
        subscription: S,
        refetch: h
      }
    )), /* @__PURE__ */ e.createElement(G.Section, { variant: "oneThird" }, /* @__PURE__ */ e.createElement(
      be,
      {
        onShowPlans: f,
        cancelSubscription: i,
        i18n: u,
        subscription: S,
        refetch: h,
        orientation: "vertical"
      }
    ))))
  );
};
export {
  tt as HighlightedPlanCards,
  Ke as HorizontalPlanCard,
  et as HorizontalPlanCards,
  Ee as PlanCardStack,
  ee as PlanCardType,
  Ze as PlanFeaturesSection,
  Ve as PlanPricingSection,
  Re as PlanTitleSection,
  be as SubscriptionSummaryCard,
  at as SubscriptionSummaryPage,
  nt as VerticalPlanCards
};
