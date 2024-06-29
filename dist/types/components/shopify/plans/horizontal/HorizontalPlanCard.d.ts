export function PlanTitleSection({ plan, t, translatePlanName, isRecommendedPlan }: {
    plan: Plan;
    isRecommendedPlan?: boolean;
}): JSX.Element;
export function PlanPricingSection({ plan, discount, t, useShortFormPlanIntervals }: {
    plan: Plan;
    discount: Discount;
    useShortFormPlanIntervals?: boolean;
}): JSX.Element;
export function PlanFeaturesSection({ plan, t, trialDaysAsFeature }: {
    plan: Plan;
    trialDaysAsFeature?: boolean;
}): JSX.Element;
export function HorizontalPlanCard({ plan, discount, buttonLabel, onSelectPlan, useShortFormPlanIntervals, trialDaysAsFeature, isRecommendedPlan, isActivePlan, t: _t, translatePlanName, }: {
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