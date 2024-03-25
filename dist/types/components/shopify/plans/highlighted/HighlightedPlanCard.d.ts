export function PlanTitleSection({ plan }: {
    plan: Plan;
}): JSX.Element;
export function PlanPricingSection({ plan, discount, useShortFormPlanIntervals }: {
    plan: Plan;
    discount: Discount;
    useShortFormPlanIntervals?: boolean;
}): JSX.Element;
export function PlanFeaturesSection({ plan, trialDaysAsFeature }: {
    plan: Plan;
    trialDaysAsFeature?: boolean;
}): JSX.Element;
export function HighlightedPlanCard({ plan, discount, buttonLabel, onSelectPlan, useShortFormPlanIntervals, trialDaysAsFeature, expanded, isActivePlan, isRecommendedPlan, isCustomPlan, showRecommendedPlanBadge, }: {
    plan: Plan;
    discount: Discount;
    buttonLabel?: string;
    onSelectPlan?: ({ plan: Plan, discount: Discount }: {
        plan: any;
        discount: any;
    }) => void;
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