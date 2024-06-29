import React from "react";
import {
  PlanAvailability,
  customButtonLabel,
  highestDiscount,
  isRecommendedPlan,
  columnCount,
  columnSpan,
} from "@heymantle/react";
import { HighlightedPlanCard } from "./highlighted/HighlightedPlanCard";
import { HorizontalPlanCard } from "./horizontal";
import { Grid } from "@shopify/polaris";

/**
 * @typedef {import('@heymantle/client').Plan} Plan
 * @typedef {import('@heymantle/client').Customer} Customer
 */

/**
 * The different types of plan cards available to display
 * @readonly
 * @enum {string}
 */
export const PlanCardType = {
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
  Vertical: "vertical",
};

/**
 * Displays a stack of pre-designed plan cards, filterable by interval and stacked based on their display type.
 * @param {Object} props
 * @param {Array<Plan>} props.plans - An array of plans to display
 * @param {Customer} props.customer - The current Mantle customer object
 * @param {({ plan: Plan, discount: Discount }) => void} [props.onSelectPlan] - The callback for selecting a plan.
 * @param {"EVERY_30_DAYS"|"ANNUAL"} [props.planInterval] - The interval to filter the plans by, defaults to all plans
 * @param {PlanCardType} [props.cardType=PlanCardType.Horizontal] - The type of plan card to display
 * @param {boolean} [props.trialDaysAsFeature=true] - Whether to show the trial days as a feature in the feature list
 * @param {boolean} [props.useShortFormPlanIntervals=true] - Whether to use short form plan intervals, ie. "mo" instead of "month"
 * @param {string} [props.keyForRecommended="recommended"] - The Plan custom field key to check for the recommended status
 * @param {string} [props.keyForCustomButtonLabel="buttonLabel"] - The Plan custom field key to check for the custom button label
 * @param {boolean} [props.showRecommendedPlanBadge=true] - Whether to show the recommended plan badge
 * @param {boolean} [props.applyDiscount=true] - Whether to apply a valid discount to the plan card
 * @returns {JSX.Element} The plan card stack component
 */
export const PlanCardStack = ({
  plans,
  customer,
  onSelectPlan,
  planInterval,
  cardType = PlanCardType.Horizontal,
  trialDaysAsFeature = true,
  useShortFormPlanIntervals = true,
  keyForRecommended = "recommended",
  keyForCustomButtonLabel = "buttonLabel",
  showRecommendedPlanBadge = true,
  applyDiscount = true,
  t: _t,
  translatePlanName = true,
}) => {
  const activeSubscription = customer?.subscription?.active ? customer.subscription : undefined;
  const currentPlan = activeSubscription?.plan;

  const plansToShow = !!planInterval
    ? plans.filter((plan) => plan.interval === planInterval)
    : plans;

  const _columnCount = cardType === PlanCardType.Vertical ? 1 : columnCount(plansToShow.length);
  const _columnSpan = columnSpan(_columnCount);

  const t = _t ? _t : (key) => key;

  return (
    <Grid columns={_columnCount}>
      {plansToShow.map((plan) => {
        const discount = applyDiscount ? highestDiscount({ plan }) : undefined;

        return (
          <Grid.Cell columnSpan={_columnSpan} key={plan.id}>
            {cardType === PlanCardType.Highlighted && (
              <HighlightedPlanCard
                key={`HighlightedPlanCard-${plan.id}`}
                plan={plan}
                discount={discount}
                onSelectPlan={onSelectPlan}
                isActivePlan={currentPlan?.id === plan.id}
                trialDaysAsFeature={trialDaysAsFeature}
                useShortFormPlanIntervals={useShortFormPlanIntervals}
                isCustomPlan={plan.availability !== PlanAvailability.Public}
                isRecommendedPlan={isRecommendedPlan({ plan, customFieldKey: keyForRecommended })}
                buttonLabel={customButtonLabel({ plan, customFieldKey: keyForCustomButtonLabel })}
                showRecommendedPlanBadge={showRecommendedPlanBadge}
                t={t}
                translatePlanName={translatePlanName}
              />
            )}
            {cardType === PlanCardType.Horizontal && (
              <HorizontalPlanCard
                key={`HorizontalPlanCard-${plan.id}`}
                plan={plan}
                discount={discount}
                onSelectPlan={onSelectPlan}
                isActivePlan={currentPlan?.id === plan.id}
                trialDaysAsFeature={trialDaysAsFeature}
                useShortFormPlanIntervals={useShortFormPlanIntervals}
                isRecommendedPlan={isRecommendedPlan({ plan, customFieldKey: keyForRecommended })}
                buttonLabel={customButtonLabel({ plan, customFieldKey: keyForCustomButtonLabel })}
                showRecommendedPlanBadge={showRecommendedPlanBadge}
                t={t}
                translatePlanName={translatePlanName}
              />
            )}
          </Grid.Cell>
        );
      })}
    </Grid>
  );
};
