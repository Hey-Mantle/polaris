import e, { createContext as ce, useState as W } from "react";
import { Box as y, BlockStack as u, Button as H, InlineStack as v, Badge as U, Text as l, Icon as T, Grid as z, Page as Z, ButtonGroup as J, Layout as K, Banner as q, Divider as Q, Card as G } from "@shopify/polaris";
ce();
const ie = (t = "USD") => new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: t,
  notation: "standard"
}), Y = (t, n = "USD", c = !0) => {
  let i = ie(n).format(t);
  return c && (i = i.replace(/\.00$/, "")), i;
}, s = {
  Annual: "ANNUAL",
  Every30Days: "EVERY_30_DAYS"
}, V = {
  Public: "public",
  CustomerTag: "customerTag",
  ShopifyPlan: "shopifyPlan",
  Customer: "customer",
  Hidden: "hidden"
}, r = {
  Back: "Back",
  CurrentPlan: "Current plan",
  CustomPlans: "Custom plans",
  CustomPlansDescription: "Plans tailored to your specific needs",
  FreeTrialLength: "{{ trialDays }}-day free trial",
  Features: "Features",
  Month: "month",
  MonthShort: "mo",
  Monthly: "Monthly",
  Year: "year",
  YearShort: "yr",
  Yearly: "Yearly",
  MostPopular: "Most popular",
  Per: "/",
  Plans: "Plans",
  SelectPlan: "Select plan",
  SubscribeSuccessTitle: "Subscription successful",
  SubscribeSuccessBody: "Thanks for subscribing to our app!"
}, oe = (t = s.Every30Days) => {
  switch (t) {
    case s.Annual:
      return "year";
    case s.Every30Days:
    default:
      return "month";
  }
}, se = (t = s.Every30Days) => {
  switch (t) {
    case s.Annual:
      return "yr";
    case s.Every30Days:
    default:
      return "mo";
  }
}, X = ({
  interval: t = s.Every30Days,
  useShortFormPlanIntervals: n = !0
}) => n ? se(t) : oe(t), re = ({ plan: t, customFieldKey: n = "recommended" }) => {
  var c;
  return !!((c = t.customFields) != null && c[n]);
}, le = ({ plan: t, customFieldKey: n = "buttonLabel" }) => {
  var c;
  return ((c = t.customFields) == null ? void 0 : c[n]) || r.SelectPlan;
}, ue = ({ plan: t }) => {
  var n;
  return ((n = t.discounts) == null ? void 0 : n.length) > 0 ? t.discounts.reduce(
    (c, i) => c.discountedAmount < i.discountedAmount ? c : i
  ) : void 0;
}, me = (t = 4) => t % 4 === 0 ? { xs: 6, sm: 6, md: 2, lg: 3, xl: 3 } : t % 3 === 0 ? { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 } : t % 2 === 0 ? { xs: 6, sm: 6, md: 3, lg: 6, xl: 6 } : t === 1 ? { xs: 6, sm: 6, md: 6, lg: 12, xl: 12 } : { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }, de = (t = 4) => t % 4 === 0 ? 4 : t % 3 === 0 ? 3 : t % 2 === 0 ? 2 : t === 1 ? 1 : 4;
var R = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    fillRule: "evenodd",
    d: "M15.78 5.97a.75.75 0 0 1 0 1.06l-6.5 6.5a.75.75 0 0 1-1.06 0l-3.25-3.25a.75.75 0 1 1 1.06-1.06l2.72 2.72 5.97-5.97a.75.75 0 0 1 1.06 0Z"
  }));
};
R.displayName = "CheckIcon";
var j = function(n) {
  return /* @__PURE__ */ e.createElement("svg", Object.assign({
    viewBox: "0 0 20 20"
  }, n), /* @__PURE__ */ e.createElement("path", {
    d: "M10.75 6.75a.75.75 0 0 0-1.5 0v2.5h-2.5a.75.75 0 0 0 0 1.5h2.5v2.5a.75.75 0 0 0 1.5 0v-2.5h2.5a.75.75 0 0 0 0-1.5h-2.5v-2.5Z"
  }));
};
j.displayName = "PlusIcon";
const ge = ({ plan: t }) => /* @__PURE__ */ e.createElement(u, { gap: "100" }, /* @__PURE__ */ e.createElement(l, { variant: "headingMd", alignment: "center" }, t.name), t.description && /* @__PURE__ */ e.createElement(l, { variant: "bodyLg", tone: "subdued", alignment: "center" }, t.description)), Ee = ({ plan: t, discount: n, useShortFormPlanIntervals: c = !0 }) => /* @__PURE__ */ e.createElement(u, { gap: "100" }, !!n && /* @__PURE__ */ e.createElement(v, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { variant: "heading3xl" }, Y(discountedAmount, t.currency, !0)), /* @__PURE__ */ e.createElement(
  l,
  {
    variant: "heading3xl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  Y(t.amount, t.currency, !0)
), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: t.interval, useShortFormPlanIntervals: c }))), !n && /* @__PURE__ */ e.createElement(v, { align: "center", blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "heading3xl" }, Y(t.amount, t.currency, !0)), /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: t.interval, useShortFormPlanIntervals: c }))), t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(u, null, t.usageCharges.map((i, o) => /* @__PURE__ */ e.createElement(v, { key: `plan-usageCharge-${o}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: j, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg" }, i.terms))))), ye = ({ plan: t, trialDaysAsFeature: n = !1 }) => /* @__PURE__ */ e.createElement(u, { gap: "300" }, n && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(v, { align: "center", blockAlign: "center", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, r.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((c, i) => {
  const o = t.features[c];
  if (o.type !== "boolean" || o.value === !0)
    return /* @__PURE__ */ e.createElement(v, { key: `plan-feature-${i}`, align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), o.type === "boolean" ? /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, o.name) : /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, o.value, " ", o.name));
})), ve = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: i,
  useShortFormPlanIntervals: o = !0,
  trialDaysAsFeature: g = !1,
  expanded: b = !1,
  isActivePlan: P = !1,
  isRecommendedPlan: p = !1,
  isCustomPlan: k = !1,
  showRecommendedPlanBadge: w = !0
}) => /* @__PURE__ */ e.createElement(y, { position: "relative", minHeight: "100%" }, /* @__PURE__ */ e.createElement(y, { paddingBlock: b || p ? void 0 : "800", minHeight: "100%" }, /* @__PURE__ */ e.createElement(
  y,
  {
    background: p || k ? "bg-surface" : "bg-surface-secondary",
    borderStyle: "solid",
    borderColor: "border",
    borderWidth: "025",
    paddingBlock: b || p ? "1600" : "800",
    paddingInline: "400",
    borderRadius: "200",
    minHeight: "calc(100% - calc(var(--p-space-800) * 2))"
  },
  /* @__PURE__ */ e.createElement(u, { gap: "800" }, /* @__PURE__ */ e.createElement(u, { gap: "400" }, /* @__PURE__ */ e.createElement(ge, { plan: t }), /* @__PURE__ */ e.createElement(
    Ee,
    {
      plan: t,
      discount: n,
      useShortFormPlanIntervals: o
    }
  )), /* @__PURE__ */ e.createElement(
    H,
    {
      size: "large",
      variant: p ? "primary" : "secondary",
      onClick: () => {
        i ? i({ plan: t, discount: n }) : console.log("No onSelectPlan callback provided");
      },
      disabled: P
    },
    c || r.SelectPlan
  ), /* @__PURE__ */ e.createElement(ye, { plan: t, trialDaysAsFeature: g }), p && w && /* @__PURE__ */ e.createElement(v, { align: "center", gap: "100" }, /* @__PURE__ */ e.createElement(U, { tone: "success" }, r.MostPopular)))
))), $ = {
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
}, _ = ({
  plans: t,
  customer: n,
  onSelectPlan: c,
  planInterval: i,
  cardType: o = $.Horizontal,
  trialDaysAsFeature: g = !0,
  useShortFormPlanIntervals: b = !0,
  keyForRecommended: P = "recommended",
  keyForCustomButtonLabel: p = "buttonLabel",
  showRecommendedPlanBadge: k = !0,
  applyDiscount: w = !0
}) => {
  var S;
  const F = (S = n == null ? void 0 : n.subscription) != null && S.active ? n.subscription : void 0, E = F == null ? void 0 : F.plan, I = i ? t.filter((m) => m.interval === i) : t, A = o === $.Vertical ? 1 : de(I.length), f = me(A);
  return /* @__PURE__ */ e.createElement(z, { columns: A }, I.map((m) => {
    const M = w ? ue({ plan: m }) : void 0;
    return /* @__PURE__ */ e.createElement(z.Cell, { columnSpan: f, key: m.id }, o === $.Highlighted && /* @__PURE__ */ e.createElement(
      ve,
      {
        key: `HighlightedPlanCard-${m.id}`,
        plan: m,
        discount: M,
        onSelectPlan: c,
        isActivePlan: (E == null ? void 0 : E.id) === m.id,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: b,
        isCustomPlan: m.availability !== V.Public,
        isRecommendedPlan: re({ plan: m, customFieldKey: P }),
        buttonLabel: le({ plan: m, customFieldKey: p }),
        showRecommendedPlanBadge: k
      }
    ), o === $.Horizontal && /* @__PURE__ */ e.createElement(
      fe,
      {
        key: `HorizontalPlanCard-${m.id}`,
        plan: m,
        discount: M,
        onSelectPlan: c,
        isActivePlan: (E == null ? void 0 : E.id) === m.id,
        trialDaysAsFeature: g,
        useShortFormPlanIntervals: b,
        isRecommendedPlan: re({ plan: m, customFieldKey: P }),
        buttonLabel: le({ plan: m, customFieldKey: p }),
        showRecommendedPlanBadge: k
      }
    ));
  }));
}, Pe = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: i = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: o = !0,
  // boolean
  customFieldCta: g,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: P = !0,
  // boolean
  showTrialDaysAsFeature: p = !0,
  // boolean
  useShortFormPlanIntervals: k,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: F = !0
  // boolean: show custom plans
}) => {
  const E = t == null ? void 0 : t.subscription, I = new URLSearchParams(window.location.search), A = n.some((d) => d.interval === s.Annual) && n.some((d) => d.interval === s.Every30Days), f = n.find((d) => d.id === (E == null ? void 0 : E.plan.id)), [S, m] = W(
    f ? f.interval : A ? s.Annual : s.Every30Days
  ), M = n.filter((d) => d.availability === V.Public), h = F ? n.filter((d) => d.availability !== V.Public) : [], [x, O] = W(
    I.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Z,
    {
      title: r.Plans,
      backAction: i ? { content: r.Back, url: i } : void 0,
      secondaryActions: P && A ? /* @__PURE__ */ e.createElement(J, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Every30Days,
          onClick: () => m(s.Every30Days)
        },
        r.Monthly
      ), /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Annual,
          onClick: () => m(s.Annual)
        },
        r.Yearly
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, null, /* @__PURE__ */ e.createElement(u, { gap: "1000" }, x && /* @__PURE__ */ e.createElement(
      q,
      {
        tone: "success",
        title: r.SubscribeSuccessTitle,
        onDismiss: () => {
          O(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      r.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      _,
      {
        plans: M,
        onSelectPlan: c,
        planInterval: S,
        cardType: $.Horizontal,
        keyForRecommended: b,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: p,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: o
      }
    ), (h == null ? void 0 : h.length) > 0 && /* @__PURE__ */ e.createElement(Q, { borderColor: "border" }), (h == null ? void 0 : h.length) > 0 && /* @__PURE__ */ e.createElement(u, { gap: "300" }, /* @__PURE__ */ e.createElement(y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(l, { variant: "headingMd" }, r.CustomPlans)), /* @__PURE__ */ e.createElement(
      _,
      {
        plans: h,
        onSelectPlan: c,
        planInterval: S,
        cardType: $.Horizontal,
        keyForRecommended: b,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: p,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: o
      }
    )))))
  );
}, he = ({ plan: t, isRecommendedPlan: n = !1 }) => /* @__PURE__ */ e.createElement(u, null, /* @__PURE__ */ e.createElement(v, { align: "space-between", gap: "100" }, /* @__PURE__ */ e.createElement(l, { variant: "bodyLg" }, t.name), n && /* @__PURE__ */ e.createElement(U, { tone: "success" }, r.MostPopular)), t.description && /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, t.description)), be = ({ plan: t, discount: n, useShortFormPlanIntervals: c = !0 }) => /* @__PURE__ */ e.createElement(u, { gap: "100" }, !!n && /* @__PURE__ */ e.createElement(v, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { variant: "headingXl" }, Y(n.discountedAmount, t.currency)), /* @__PURE__ */ e.createElement(
  l,
  {
    variant: "headingXl",
    tone: "subdued",
    fontWeight: "medium",
    textDecorationLine: "line-through"
  },
  t.amount
), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: t.interval, useShortFormPlanIntervals: c }))), !n && /* @__PURE__ */ e.createElement(v, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "headingXl" }, Y(t.amount, t.currency)), /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: t.interval, useShortFormPlanIntervals: c }))), t.usageCharges && t.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(u, null, t.usageCharges.map((i, o) => /* @__PURE__ */ e.createElement(v, { key: `plan-usageCharge-${o}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: j, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg" }, i.terms))))), pe = ({ plan: t, trialDaysAsFeature: n = !1 }) => /* @__PURE__ */ e.createElement(u, { gap: "100" }, n && t.trialDays && t.trialDays > 0 ? /* @__PURE__ */ e.createElement(v, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, r.FreeTrialLength.replace("{{ trialDays }}", t.trialDays))) : null, t.featuresOrder.map((c, i) => {
  const o = t.features[c];
  if (o.type !== "boolean" || o.value === !0)
    return /* @__PURE__ */ e.createElement(v, { key: `plan-feature-${i}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), o.type === "boolean" ? /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, o.name) : /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, o.value, " ", o.name));
})), fe = ({
  plan: t,
  discount: n,
  buttonLabel: c,
  onSelectPlan: i,
  useShortFormPlanIntervals: o = !0,
  trialDaysAsFeature: g = !1,
  isRecommendedPlan: b = !1,
  isActivePlan: P = !1
}) => /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(u, { gap: "400" }, /* @__PURE__ */ e.createElement(he, { plan: t, isRecommendedPlan: b }), /* @__PURE__ */ e.createElement(
  be,
  {
    plan: t,
    discount: n,
    useShortFormPlanIntervals: o
  }
), /* @__PURE__ */ e.createElement(
  H,
  {
    size: "large",
    variant: b ? "primary" : "secondary",
    onClick: () => {
      i ? i({ plan: t, discount: n }) : console.log("No onSelectPlan callback provided");
    },
    disabled: P
  },
  P ? r.CurrentPlan : c || r.SelectPlan
), /* @__PURE__ */ e.createElement(pe, { plan: t, trialDaysAsFeature: g }))), ke = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: i = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: o = !0,
  // boolean
  customFieldCta: g = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: P = !0,
  // boolean
  showTrialDaysAsFeature: p = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: F = !0
  // boolean: show custom plans
}) => {
  const E = t == null ? void 0 : t.subscription, I = new URLSearchParams(window.location.search), A = n.some((d) => d.interval === s.Annual) && n.some((d) => d.interval === s.Every30Days), f = n.find((d) => d.id === (E == null ? void 0 : E.plan.id)), [S, m] = W(
    f ? f.interval : A ? s.Annual : s.Every30Days
  ), M = n.filter((d) => d.availability === V.Public), h = F ? n.filter((d) => d.availability !== V.Public) : [], [x, O] = W(
    I.get("subscribed") === "true"
  );
  return /* @__PURE__ */ e.createElement(
    Z,
    {
      title: r.Plans,
      backAction: i && i !== "" ? { content: r.Back, url: i } : void 0,
      secondaryActions: P && A ? /* @__PURE__ */ e.createElement(J, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Every30Days,
          onClick: () => m(s.Every30Days)
        },
        r.Monthly
      ), /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Annual,
          onClick: () => m(s.Annual)
        },
        r.Yearly
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(y, { paddingBlockEnd: "800" }, /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, null, /* @__PURE__ */ e.createElement(u, { gap: "1000" }, x && /* @__PURE__ */ e.createElement(
      q,
      {
        tone: "success",
        title: r.SubscribeSuccessTitle,
        onDismiss: () => {
          O(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      r.SubscribeSuccessBody
    ), /* @__PURE__ */ e.createElement(
      _,
      {
        plans: M,
        onSelectPlan: c,
        planInterval: S,
        cardType: $.Highlighted,
        keyForRecommended: b,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: p,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: o
      }
    ), (h == null ? void 0 : h.length) > 0 && /* @__PURE__ */ e.createElement(Q, { borderColor: "border" }), (h == null ? void 0 : h.length) > 0 && /* @__PURE__ */ e.createElement(u, { gap: "300" }, /* @__PURE__ */ e.createElement(y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(l, { variant: "headingMd" }, r.CustomPlans)), /* @__PURE__ */ e.createElement(
      _,
      {
        plans: h,
        onSelectPlan: c,
        planInterval: S,
        cardType: $.Highlighted,
        keyForRecommended: b,
        keyForCustomButtonLabel: g,
        trialDaysAsFeature: p,
        useShortFormPlanIntervals: k,
        showRecommendedPlanBadge: o
      }
    ))))))
  );
}, we = ({
  customer: t,
  plans: n,
  onSubscribe: c,
  backUrl: i = "",
  // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge: o = !0,
  // boolean
  customFieldCta: g = null,
  // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended: b = "Recommended",
  // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle: P = !1,
  // boolean
  showTrialDaysAsFeature: p = !0,
  // boolean
  useShortFormPlanIntervals: k = !0,
  // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth: w = "default",
  // string: "full", "narrow", or "default"
  showCustomPlans: F = !0
  // boolean: show custom plans
}) => {
  const E = t == null ? void 0 : t.subscription, I = new URLSearchParams(window.location.search), A = n.some((a) => a.interval === s.Annual) && n.some((a) => a.interval === s.Every30Days), f = n.find((a) => a.id === (E == null ? void 0 : E.plan.id)), [S, m] = W(
    f ? f.interval : A ? s.Annual : s.Every30Days
  ), M = n.filter(
    (a) => a.availability !== "customerTag" && a.availability !== "customer"
  ), h = P && A ? M.filter((a) => a.interval === S) : M, x = F ? n.filter(
    (a) => a.availability === "customerTag" || a.availability === "customer"
  ) : [], [O, d] = W(
    I.get("subscribed") === "true"
  ), ee = ({ plan: a, discount: D }) => /* @__PURE__ */ e.createElement(u, null, /* @__PURE__ */ e.createElement(l, { variant: "bodyLg" }, a.name), a.description && /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, a.description)), te = ({ plan: a, discount: D }) => /* @__PURE__ */ e.createElement(u, { gap: "200" }, /* @__PURE__ */ e.createElement(l, { fontWeight: "medium" }, r.Features), /* @__PURE__ */ e.createElement(u, { gap: "100" }, p && a.trialDays !== 0 && /* @__PURE__ */ e.createElement(v, { align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, r.FreeTrialLength.replace("{{ trialDays }}", a.trialDays))), a.featuresOrder.map((C, L) => {
    const B = a.features[C];
    if (B.type !== "boolean" || B.value === !0)
      return /* @__PURE__ */ e.createElement(v, { key: `plan-feature-${L}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: R, tone: "positive" })), B.type === "boolean" ? /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, B.name) : /* @__PURE__ */ e.createElement(l, { tone: "subdued" }, B.value, " ", B.name));
  }))), ne = ({ plan: a, discount: D }) => /* @__PURE__ */ e.createElement(u, { gap: "100" }, D ? /* @__PURE__ */ e.createElement(v, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { variant: "headingXl" }, Y(D.discountedAmount, a.currency)), /* @__PURE__ */ e.createElement(
    l,
    {
      variant: "headingXl",
      tone: "subdued",
      fontWeight: "medium",
      textDecorationLine: "line-through"
    },
    a.amount
  ), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: a.interval, useShortFormPlanIntervals: k }))) : /* @__PURE__ */ e.createElement(v, { blockAlign: "center", gap: "200" }, /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "headingXl" }, Y(a.amount, a.currency)), /* @__PURE__ */ e.createElement(l, { alignment: "center", variant: "bodyLg", tone: "subdued" }, r.Per, " ", X({ interval: a.interval, useShortFormPlanIntervals: k }))), a.usageCharges.length > 0 && /* @__PURE__ */ e.createElement(u, null, a.usageCharges.map((C, L) => /* @__PURE__ */ e.createElement(v, { key: `plan-usageCharge-${L}`, align: "start", gap: "100" }, /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(T, { source: j, tone: "positive" })), /* @__PURE__ */ e.createElement(l, { variant: "bodyLg" }, C.terms))))), ae = ({ plan: a, discount: D }) => {
    const C = g && a.customFields[g], L = a.customFields && a.customFields[b];
    return /* @__PURE__ */ e.createElement(v, { blockAlign: "center", gap: "400" }, /* @__PURE__ */ e.createElement(
      H,
      {
        size: "large",
        variant: L ? "primary" : "secondary",
        onClick: () => c({ planId: a.id, discountId: D == null ? void 0 : D.id }),
        disabled: (f == null ? void 0 : f.id) === a.id
      },
      (f == null ? void 0 : f.id) === a.id ? r.CurrentPlan : C ? a.customFields[g] : r.SelectPlan
    ), L && o && /* @__PURE__ */ e.createElement(y, null, /* @__PURE__ */ e.createElement(U, { tone: "success" }, r.MostPopular)));
  };
  return /* @__PURE__ */ e.createElement(
    Z,
    {
      title: r.Plans,
      backAction: i !== "" ? { content: r.Back, url: i } : void 0,
      secondaryActions: P && A ? /* @__PURE__ */ e.createElement(J, { variant: "segmented" }, /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Every30Days,
          onClick: () => m(s.Every30Days)
        },
        r.Monthly
      ), /* @__PURE__ */ e.createElement(
        H,
        {
          pressed: S === s.Annual,
          onClick: () => m(s.Annual)
        },
        r.Year
      )) : void 0,
      fullWidth: w === "full",
      narrowWidth: w === "narrow"
    },
    /* @__PURE__ */ e.createElement(K, null, /* @__PURE__ */ e.createElement(K.Section, null, /* @__PURE__ */ e.createElement(u, { gap: "400" }, O && /* @__PURE__ */ e.createElement(
      q,
      {
        tone: "success",
        title: r.SubscribeSuccessTitle,
        onDismiss: () => {
          d(!1), window.history.replaceState({}, document.title, window.location.pathname);
        }
      },
      r.SubscribeSuccessBody
    ), h.map((a, D) => {
      var L;
      const C = ((L = a.discounts) == null ? void 0 : L.length) > 0 ? a.discounts.reduce(
        (B, N) => B.discountedAmount < N.discountedAmount ? B : N
      ) : null;
      return /* @__PURE__ */ e.createElement(G, { key: `plan-${D}` }, /* @__PURE__ */ e.createElement(z, null, /* @__PURE__ */ e.createElement(z.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, /* @__PURE__ */ e.createElement(u, { gap: "400" }, /* @__PURE__ */ e.createElement(u, { gap: "200" }, ee({ plan: a, discount: C }), ne({ plan: a, discount: C })), /* @__PURE__ */ e.createElement(y, null, ae({ plan: a, discount: C })))), /* @__PURE__ */ e.createElement(z.Cell, { columnSpan: { xs: 6, sm: 6, md: 3, lg: 6, xl: 12 } }, te({ plan: a, discount: C }))));
    }), (x == null ? void 0 : x.length) > 0 && /* @__PURE__ */ e.createElement(Q, { borderColor: "border" }), (x == null ? void 0 : x.length) > 0 && /* @__PURE__ */ e.createElement(u, { gap: "300" }, /* @__PURE__ */ e.createElement(y, { paddingInline: { xs: 400, sm: 0 } }, /* @__PURE__ */ e.createElement(l, { variant: "headingMd" }, r.CustomPlans)), /* @__PURE__ */ e.createElement(z, null, x.map((a, D) => {
      var L;
      const C = ((L = a.discounts) == null ? void 0 : L.length) > 0 ? a.discounts.reduce(
        (B, N) => B.discountedAmount < N.discountedAmount ? B : N
      ) : null;
      return /* @__PURE__ */ e.createElement(z.Cell, { key: `custom-plan-${D}`, columnSpan: columnSpan() }, /* @__PURE__ */ e.createElement(G, null, /* @__PURE__ */ e.createElement(u, { gap: "400" }, ee({ plan: a, discount: C }), ne({ plan: a, discount: C }), ae({ plan: a, discount: C }), te({ plan: a, discount: C }))));
    }))))))
  );
};
export {
  ke as HighlightedPlanCards,
  fe as HorizontalPlanCard,
  Pe as HorizontalPlanCards,
  _ as PlanCardStack,
  $ as PlanCardType,
  pe as PlanFeaturesSection,
  be as PlanPricingSection,
  he as PlanTitleSection,
  we as VerticalPlanCards
};
