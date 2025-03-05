export function PlanTitleSection({ plan, t, translatePlanName, planNameTextVariant, planDescriptionTextVariant }: {
    plan: Plan;
    translatePlanName?: boolean;
    planNameTextVariant?: string;
    planDescriptionTextVariant?: string;
    toggleYearlySubtitle?: boolean;
}): JSX.Element;
export function PlanPricingSection({ plan, discount, t, priceTextVariant, useShortFormPlanIntervals, toggleYearlySubtitle }: {
    plan: Plan;
    discount: Discount;
    priceTextVariant?: string;
    useShortFormPlanIntervals?: boolean;
}): JSX.Element;
export function PlanFeaturesSection({ plan, t, trialDaysAsFeature }: {
    plan: Plan;
    trialDaysAsFeature?: boolean;
}): JSX.Element;
export function HighlightedPlanCard({ plan, discount, buttonLabel, onSelectPlan, useShortFormPlanIntervals, trialDaysAsFeature, expanded, isActivePlan, isRecommendedPlan, isCustomPlan, showRecommendedPlanBadge, t: _t, translatePlanName, planNameTextVariant, planDescriptionTextVariant, priceTextVariant, toggleYearlySubtitle, }: {
    plan: Plan;
    discount: Discount;
    buttonLabel?: string;
    onSelectPlan?: ({ plan: Plan, discount: Discount }: {
        plan: any;
        discount: any;
    }) => Promise<void>;
    useShortFormPlanIntervals?: boolean;
    trialDaysAsFeature?: boolean;
    expanded?: boolean;
    isRecommendedPlan?: boolean;
    isActivePlan?: boolean;
    isCustomPlan?: boolean;
    showRecommendedPlanBadge?: boolean;
}): JSX.Element;
export type Plan = import('@heymantle/client').Plan;
export type Discount = import('@heymantle/client').Discount;
//# sourceMappingURL=HighlightedPlanCard.d.ts.map