import React, { useState } from "react";
import { CheckIcon, PlusIcon } from "@shopify/polaris-icons";
import {
  Badge,
  Banner,
  Box,
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  InlineStack,
  Icon,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { Labels, PlanInterval, intervalLabel, money } from "@heymantle/react";

export const VerticalPlanCards = ({
  customer,
  plans,
  onSubscribe,
  backUrl = "", // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge = true, // boolean
  customFieldCta = null, // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended = "Recommended", // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle = false, // boolean
  showTrialDaysAsFeature = true, // boolean
  useShortFormPlanIntervals = true, // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth = "default", // string: "full", "narrow", or "default"
  showCustomPlans = true, // boolean: show custom plans
}) => {
  const subscription = customer?.subscription;
  const urlParams = new URLSearchParams(window.location.search);
  const hasMonthlyAndYearlyPlans =
    plans.some((plan) => plan.interval === PlanInterval.Annual) &&
    plans.some((plan) => plan.interval === PlanInterval.Every30Days);
  const currentPlan = plans.find((plan) => plan.id === subscription?.plan.id);
  const [planInterval, setPlanInterval] = useState(
    currentPlan
      ? currentPlan.interval
      : hasMonthlyAndYearlyPlans
      ? PlanInterval.Annual
      : PlanInterval.Every30Days
  );
  const availablePlans = plans.filter(
    (plan) => plan.availability !== "customerTag" && plan.availability !== "customer"
  );
  const plansToShow =
    showPlanIntervalToggle && hasMonthlyAndYearlyPlans
      ? availablePlans.filter((plan) => plan.interval === planInterval)
      : availablePlans;
  const customPlans = showCustomPlans
    ? plans.filter(
        (plan) => plan.availability === "customerTag" || plan.availability === "customer"
      )
    : [];
  const [showSuccessBanner, setShowSuccessBanner] = useState(
    urlParams.get("subscribed") === "true"
  );

  const titleComponent = ({ plan, discount }) => {
    return (
      <BlockStack>
        <Text variant="bodyLg">{plan.name}</Text>
        {plan.description && <Text tone="subdued">{plan.description}</Text>}
      </BlockStack>
    );
  };

  const featuresComponent = ({ plan, discount }) => {
    return (
      <BlockStack gap="200">
        <Text fontWeight="medium">{Labels.Features}</Text>
        <BlockStack gap="100">
          {showTrialDaysAsFeature && plan.trialDays !== 0 && (
            <InlineStack align="start" gap="100">
              <Box>
                <Icon source={CheckIcon} tone="positive" />
              </Box>
              <Text tone="subdued">
                {Labels.FreeTrialLength.replace("{{ trialDays }}", plan.trialDays)}
              </Text>
            </InlineStack>
          )}
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
              {Labels.Per} {intervalLabel({ interval: plan.interval, useShortFormPlanIntervals })}
            </Text>
          </InlineStack>
        ) : (
          <InlineStack blockAlign="center" gap="200">
            <Text alignment="center" variant="headingXl">
              {money(plan.amount, plan.currency)}
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
    const showCustomCta = customFieldCta && plan.customFields[customFieldCta];
    const planIsRecommended = plan.customFields && plan.customFields[customFieldPlanRecommended];
    return (
      <InlineStack blockAlign="center" gap="400">
        <Button
          size="large"
          variant={planIsRecommended ? "primary" : "secondary"}
          onClick={() => onSubscribe({ planId: plan.id, discountId: discount?.id })}
          disabled={currentPlan?.id === plan.id}
        >
          {currentPlan?.id === plan.id
            ? Labels.CurrentPlan
            : showCustomCta
            ? plan.customFields[customFieldCta]
            : Labels.SelectPlan}
        </Button>
        {planIsRecommended && showRecommendedBadge && (
          <Box>
            <Badge tone="success">{Labels.MostPopular}</Badge>
          </Box>
        )}
      </InlineStack>
    );
  };

  return (
    <Page
      title={Labels.Plans}
      backAction={backUrl !== "" ? { content: Labels.Back, url: backUrl } : undefined}
      secondaryActions={
        showPlanIntervalToggle && hasMonthlyAndYearlyPlans ? (
          <ButtonGroup variant="segmented">
            <Button
              pressed={planInterval === PlanInterval.Every30Days}
              onClick={() => setPlanInterval(PlanInterval.Every30Days)}
            >
              {Labels.Monthly}
            </Button>
            <Button
              pressed={planInterval === PlanInterval.Annual}
              onClick={() => setPlanInterval(PlanInterval.Annual)}
            >
              {Labels.Year}
            </Button>
          </ButtonGroup>
        ) : undefined
      }
      fullWidth={pageWidth === "full"}
      narrowWidth={pageWidth === "narrow"}
    >
      <Layout>
        <Layout.Section>
          <BlockStack gap="400">
            {showSuccessBanner && (
              <Banner
                tone="success"
                title={Labels.SubscribeSuccessTitle}
                onDismiss={() => {
                  setShowSuccessBanner(false);
                  window.history.replaceState({}, document.title, window.location.pathname);
                }}
              >
                {Labels.SubscribeSuccessBody}
              </Banner>
            )}
            {plansToShow.map((plan, index) => {
              const discount =
                plan.discounts?.length > 0
                  ? plan.discounts.reduce((prev, current) =>
                      prev.discountedAmount < current.discountedAmount ? prev : current
                    )
                  : null;
              // { xs: 6, sm: 6, md: 2, lg: 4, xl: 4 }
              return (
                <Card key={`plan-${index}`}>
                  <Grid>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 12 }}>
                      <BlockStack gap="400">
                        <BlockStack gap="200">
                          {titleComponent({ plan, discount })}
                          {pricingComponent({ plan, discount })}
                        </BlockStack>
                        <Box>{ctaComponent({ plan, discount })}</Box>
                      </BlockStack>
                    </Grid.Cell>
                    <Grid.Cell columnSpan={{ xs: 6, sm: 6, md: 3, lg: 6, xl: 12 }}>
                      {featuresComponent({ plan, discount })}
                    </Grid.Cell>
                  </Grid>
                </Card>
              );
            })}
            {customPlans?.length > 0 && <Divider borderColor="border" />}
            {customPlans?.length > 0 && (
              <BlockStack gap="300">
                <Box paddingInline={{ xs: 400, sm: 0 }}>
                  <Text variant="headingMd">{Labels.CustomPlans}</Text>
                </Box>
                <Grid>
                  {customPlans.map((plan, index) => {
                    const discount =
                      plan.discounts?.length > 0
                        ? plan.discounts.reduce((prev, current) =>
                            prev.discountedAmount < current.discountedAmount ? prev : current
                          )
                        : null;
                    return (
                      <Grid.Cell key={`custom-plan-${index}`} columnSpan={columnSpan()}>
                        <Card>
                          <BlockStack gap="400">
                            {titleComponent({ plan, discount })}
                            {pricingComponent({ plan, discount })}
                            {ctaComponent({ plan, discount })}
                            {featuresComponent({ plan, discount })}
                          </BlockStack>
                        </Card>
                      </Grid.Cell>
                    );
                  })}
                </Grid>
              </BlockStack>
            )}
          </BlockStack>
        </Layout.Section>
      </Layout>
    </Page>
  );
};
