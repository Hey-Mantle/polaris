export function PlanTitleSection({ plan, t, translatePlanName, isRecommendedPlan, planNameTextVariant, planDescriptionTextVariant, showRecommendedPlanBadge }: {
    plan: Plan;
    isRecommendedPlan?: boolean;
    translatePlanName?: boolean;
    planNameTextVariant?: string;
    planDescriptionTextVariant?: string;
    showRecommendedPlanBadge?: boolean;
}): JSX.Element;
export function PlanPricingSection({ plan, discount, t, useShortFormPlanIntervals, priceTextVariant }: {
    plan: Plan;
    discount: Discount;
    useShortFormPlanIntervals?: boolean;
    priceTextVariant?: string;
}): JSX.Element;
export function PlanFeaturesSection({ plan, t, trialDaysAsFeature }: {
    plan: Plan;
    trialDaysAsFeature?: boolean;
}): JSX.Element;
export function HorizontalPlanCard({ plan, discount, buttonLabel, onSelectPlan, useShortFormPlanIntervals, trialDaysAsFeature, isRecommendedPlan, isActivePlan, t: _t, translatePlanName, showRecommendedPlanBadge, planNameTextVariant, planDescriptionTextVariant, priceTextVariant, }: {
    plan: Plan;
    discount: Discount;
    buttonLabel?: string;
    onSelectPlan?: ({ plan: Plan, discount: Discount }: {
        plan: any;
        discount: any;
    }) => Promise<void>;
    useShortFormPlanIntervals?: boolean;
    trialDaysAsFeature?: boolean;
    isActivePlan?: boolean;
    isRecommendedPlan?: boolean;
}): JSX.Element;
export type Plan = import('@heymantle/client').Plan;
export type Discount = import('@heymantle/client').Discount;
//# sourceMappingURL=HorizontalPlanCard.d.ts.map