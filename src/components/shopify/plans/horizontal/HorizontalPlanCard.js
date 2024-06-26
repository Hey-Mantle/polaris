import React from "react";
import { CheckIcon, PlusIcon } from "@shopify/polaris-icons";
import { Badge, Box, BlockStack, Button, Card, InlineStack, Icon, Text } from "@shopify/polaris";
import { Labels, intervalLabel, money } from "@heymantle/react";

/**
 * @typedef {import('@heymantle/client').Plan} Plan
 * @typedef {import('@heymantle/client').Discount} Discount
 */

/**
 * Title section component for HoritzontalPlanCard.
 * @param {Object} props
 * @param {Plan} props.plan - The Mantle Plan object.
 * @param {boolean} [props.isRecommendedPlan] - Whether the plan is recommended.
 * @returns {JSX.Element}
 */
export const PlanTitleSection = ({ plan, t, translatePlanName, isRecommendedPlan = false }) => (
  <BlockStack>
    <InlineStack align="space-between" gap="100">
      <Text variant="bodyLg">{translatePlanName ? t(plan.name) : plan.name}</Text>
      {isRecommendedPlan && <Badge tone="success">{t(Labels.MostPopular)}</Badge>}
    </InlineStack>
    {plan.description && <Text tone="subdued">{t(plan.description)}</Text>}
  </BlockStack>
);

/**
 * Pricing section component for HoritzontalPlanCard.
 * @param {Object} props
 * @param {Plan} props.plan - The Mantle Plan object.
 * @param {Discount} props.discount - The Mantle Discount object.
 * @param {boolean} [props.useShortFormPlanIntervals] - Whether to use short form plan intervals.
 * @returns {JSX.Element}
 */
export const PlanPricingSection = ({ plan, discount, t, useShortFormPlanIntervals = true }) => (
  <BlockStack gap="100">
    {!!discount && (
      <InlineStack blockAlign="center" gap="200">
        <Text variant="headingXl">{money(discount.discountedAmount, plan.currency)}</Text>
        <Text
          variant="headingXl"
          tone="subdued"
          fontWeight="medium"
          textDecorationLine="line-through"
        >
          {plan.amount}
        </Text>
        <Text variant="bodyLg" tone="subdued">
          {t(Labels.Per)} {t(intervalLabel({ interval: plan.interval, useShortFormPlanIntervals }))}
        </Text>
      </InlineStack>
    )}
    {!discount && (
      <InlineStack blockAlign="center" gap="200">
        <Text alignment="center" variant="headingXl">
          {money(plan.amount, plan.currency)}
        </Text>
        <Text alignment="center" variant="bodyLg" tone="subdued">
          {t(Labels.Per)} {t(intervalLabel({ interval: plan.interval, useShortFormPlanIntervals }))}
        </Text>
      </InlineStack>
    )}
    {plan.usageCharges && plan.usageCharges.length > 0 && (
      <BlockStack>
        {plan.usageCharges.map((usageCharge, index) => {
          return (
            <InlineStack key={`plan-usageCharge-${index}`} align="start" gap="100">
              <Box>
                <Icon source={PlusIcon} tone="positive" />
              </Box>
              <Text variant="bodyLg">{t(usageCharge.terms)}</Text>
            </InlineStack>
          );
        })}
      </BlockStack>
    )}
  </BlockStack>
);

/**
 * Features section component for HoritzontalPlanCard.
 * @param {Object} props
 * @param {Plan} props.plan - The Mantle Plan object.
 * @param {boolean} [props.trialDaysAsFeature] - Whether to show the trial days as a feature.
 * @returns {JSX.Element}
 */
export const PlanFeaturesSection = ({ plan, t, trialDaysAsFeature = false }) => (
  <BlockStack gap="100">
    {trialDaysAsFeature && plan.trialDays && plan.trialDays > 0 ? (
      <InlineStack align="start" gap="100">
        <Box>
          <Icon source={CheckIcon} tone="positive" />
        </Box>
        <Text tone="subdued">
          {t(Labels.FreeTrialLength).replace("{{ trialDays }}", plan.trialDays)}
        </Text>
      </InlineStack>
    ) : null}
    {plan.featuresOrder.map((feature, index) => {
      const planFeature = plan.features[feature];
      const showFeature = planFeature.type !== "boolean" || planFeature.value === true;

      if (showFeature) {
        return (
          <InlineStack key={`plan-feature-${index}`} align="start" gap="100">
            <Box>
              <Icon source={CheckIcon} tone="positive" />
            </Box>
            {planFeature.type === "boolean" ? (
              <Text tone="subdued">{t(planFeature.name)}</Text>
            ) : (
              <Text tone="subdued">
                {planFeature.value} {t(planFeature.name)}
              </Text>
            )}
          </InlineStack>
        );
      }
    })}
  </BlockStack>
);

/**
 * Horizontal plan card component.
 *
 * @param {object} props
 * @param {Plan} props.plan - The Mantle Plan object.
 * @param {Discount} props.discount - The Mantle Discount object.
 * @param {string} [props.buttonLabel] - The label for the button.
 * @param {({ plan: Plan, discount: Discount }) => Promise<void>} [props.onSelectPlan] - The callback for selecting a plan. Return true if successful, false if not.
 * @param {boolean} [props.useShortFormPlanIntervals] - Whether to use short form plan intervals.
 * @param {boolean} [props.trialDaysAsFeature] - Whether to show the trial days as a feature.
 * @param {boolean} [props.isActivePlan] - Whether the plan is the active plan.
 * @param {boolean} [props.isRecommendedPlan] - Whether the plan is recommended, shows a badge.
 * @returns {JSX.Element}
 */
export const HorizontalPlanCard = ({
  plan,
  discount,
  buttonLabel,
  onSelectPlan,
  useShortFormPlanIntervals = true,
  trialDaysAsFeature = false,
  isRecommendedPlan = false,
  isActivePlan = false,
  t: _t,
  translatePlanName = true,
}) => {
  const [isSelectingPlan, setIsSelectingPlan] = React.useState(false);

  const t = _t ? _t : (key) => key;

  const handleSelectPlan = async ({ plan, discount }) => {
    if (onSelectPlan) {
      setIsSelectingPlan(true);

      const result = await onSelectPlan({ plan, discount });

      if (true !== result) {
        setIsSelectingPlan(false);
      }
    } else {
      console.log("No onSelectPlan callback provided");
    }
  };

  return (
    <Card>
      <BlockStack gap="400">
        <PlanTitleSection plan={plan} isRecommendedPlan={isRecommendedPlan} t={t} translatePlanName={translatePlanName} />
        <PlanPricingSection
          plan={plan}
          discount={discount}
          useShortFormPlanIntervals={useShortFormPlanIntervals}
          t={t}
        />
        <Button
          size="large"
          variant={isRecommendedPlan ? "primary" : "secondary"}
          onClick={async () => {
            await handleSelectPlan({ plan, discount });
          }}
          disabled={isActivePlan}
          loading={isSelectingPlan}
        >
          {t(isActivePlan ? Labels.CurrentPlan : buttonLabel || Labels.SelectPlan)}
        </Button>
        <PlanFeaturesSection plan={plan} trialDaysAsFeature={trialDaysAsFeature} t={t} />
      </BlockStack>
    </Card>
  );
};
