/**
 * The different types of plan cards available to display
 */
export type PlanCardType = string;
export namespace PlanCardType {
    let Highlighted: string;
    let Horizontal: string;
    let Vertical: string;
}
export function PlanCardStack({ plans, customer, onSelectPlan, planInterval, cardType, trialDaysAsFeature, useShortFormPlanIntervals, keyForRecommended, keyForCustomButtonLabel, showRecommendedPlanBadge, applyDiscount, }: {
    plans: Array<Plan>;
    customer: Customer;
    onSelectPlan?: ({ plan: Plan, discount: Discount }: {
        plan: any;
        discount: any;
    }) => void;
    planInterval?: "EVERY_30_DAYS" | "ANNUAL";
    cardType?: PlanCardType;
    trialDaysAsFeature?: boolean;
    useShortFormPlanIntervals?: boolean;
    keyForRecommended?: string;
    keyForCustomButtonLabel?: string;
    showRecommendedPlanBadge?: boolean;
    applyDiscount?: boolean;
}): JSX.Element;
export type Plan = import('@heymantle/client').Plan;
export type Customer = import('@heymantle/client').Customer;
//# sourceMappingURL=PlanCardStack.d.ts.map