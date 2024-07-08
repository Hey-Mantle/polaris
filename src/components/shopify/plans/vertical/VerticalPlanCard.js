import React from "react";
import { CheckIcon, PlusIcon } from "@shopify/polaris-icons";
import {
  Badge,
  Box,
  BlockStack,
  Button,
  Card,
  Grid,
  InlineStack,
  Icon,
  Text,
} from "@shopify/polaris";
import { intervalLabel, Labels, money } from "@heymantle/react";

export const VerticalPlanCard = ({
  plan,
  discount,
  buttonLabel,
  onSelectPlan,
  useShortFormPlanIntervals = true,
  trialDaysAsFeature = false,
  isRecommendedPlan = false,
  isActivePlan = false,
  t = _t,
  translatePlanName = true,
  showRecommendedPlanBadge = true,
  planNameTextVariant = "bodyLg",
  planDescriptionTextVariant = "bodyMd",
  priceTextVariant = "headingXl",
}) => {

  const [isSelectingPlan, setIsSelectingPlan] = React.useState(false);

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

  const titleComponent = ({ plan }) => {
    return (
      <BlockStack>
        <Text variant={planNameTextVariant}>{translatePlanName ? t(plan.name) : plan.name}</Text>
        {plan.description && <Text variant={planDescriptionTextVariant} tone="subdued">{t(plan.description)}</Text>}
      </BlockStack>
    );
  };

  const featuresComponent = ({ plan }) => {
    return (
      <BlockStack gap="200">
        <Text fontWeight="medium">{t(Labels.Features)}</Text>
        <BlockStack gap="100">
          {trialDaysAsFeature && plan.trialDays && plan.trialDays > 0 ? (
            <InlineStack align="start" gap="100">
              <Box>
                <Icon source={CheckIcon} tone="positive" />
              </Box>
              <Text tone="subdued">
                {t(Labels.FreeTrialLength.replace("{{ trialDays }}", plan.trialDays))}
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
                    <Text tone="subdued">{planFeature.name}</Text>
                  ) : (
                    <Text tone="subdued">
                      {planFeature.value} {planFeature.name}
                    </Text>
                  )}
                </InlineStack>
              );
            }
          })}
        </BlockStack>
      </BlockStack>
    );
  };

  const pricingComponent = ({ plan, discount }) => {
    return (
      <BlockStack gap="100">
        {discount ? (
          <InlineStack blockAlign="center" gap="200">
            <Text variant={priceTextVariant}>{money(discount.presentmentDiscountedAmount, plan.presentmentCurrencyCode)}</Text>
            <Text
              variant={priceTextVariant}
              tone="subdued"
              fontWeight="medium"
              textDecorationLine="line-through"
            >
              {plan.amount}
            </Text>
            <Text variant="bodyLg" tone="subdued">
              {Labels.Per} {intervalLabel({ interval: plan.interval, useShortFormPlanIntervals })}
            </Text>
          </InlineStack>
        ) : (
          <InlineStack blockAlign="center" gap="200">
            <Text alignment="center" variant={priceTextVariant}>
              {money(plan.presentmentAmount, plan.presentmentCurrencyCode)}
            </Text>
            <Text alignment="center" variant="bodyLg" tone="subdued">
              {Labels.Per} {intervalLabel({ interval: plan.interval, useShortFormPlanIntervals })}
            </Text>
          </InlineStack>
        )}
        {plan.usageCharges.length > 0 && (
          <BlockStack>
            {plan.usageCharges.map((usageCharge, index) => {
              return (
                <InlineStack key={`plan-usageCharge-${index}`} align="start" gap="100">
                  <Box>
                    <Icon source={PlusIcon} tone="positive" />
                  </Box>
                  <Text variant="bodyLg">{usageCharge.terms}</Text>
                </InlineStack>
              );
            })}
          </BlockStack>
        )}
      </BlockStack>
    );
  };

  const ctaComponent = ({ plan, discount }) => {
    return (
      <InlineStack blockAlign="center" gap="400">
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
        {isRecommendedPlan && showRecommendedPlanBadge && <Badge tone="success">{t(Labels.MostPopular)}</Badge>}
      </InlineStack>
    );
  };

  return (
    <Card>
      <Grid>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
          <BlockStack gap="300">
            {titleComponent({ plan })}
            {pricingComponent({ plan, discount })}
            <Box>{ctaComponent({ plan, discount })}</Box>
          </BlockStack>
        </Grid.Cell>
        <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 6 }}>
          {featuresComponent({ plan })}
        </Grid.Cell>
      </Grid>
    </Card>
  );
}