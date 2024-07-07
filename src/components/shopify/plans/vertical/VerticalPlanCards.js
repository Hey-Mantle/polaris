import React, { useState } from "react";
import {
  Banner,
  Box,
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  Divider,
  Grid,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import {
  customButtonLabel,
  highestDiscount,
  isRecommendedPlan,
  Labels,
  PlanAvailability,
  PlanInterval
} from "@heymantle/react";
import { VerticalPlanCard } from "./VerticalPlanCard";

export const VerticalPlanCards = ({
  plans,
  customer,
  onSubscribe,
  backUrl = "", // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  keyForRecommended = "recommended",
  keyForCustomButtonLabel = "buttonLabel",
  showPlanIntervalToggle = false, // boolean
  trialDaysAsFeature = true, // boolean
  useShortFormPlanIntervals = true, // boolean: e.g. show "$ / mo" instead of "$ / month"
  pageWidth = "default", // string: "full", "narrow", or "default"
  showCustomPlans = true, // boolean: show custom plans
  showRecommendedPlanBadge = true, // boolean
  applyDiscount = true,
  t: _t,
  translatePlanName = true,
  currency,
}) => {
  const urlParams = new URLSearchParams(window.location.search);
  const hasMonthlyAndYearlyPlans =
    plans.some((plan) => plan.interval === PlanInterval.Annual) &&
    plans.some((plan) => plan.interval === PlanInterval.Every30Days);
  const activeSubscription = customer?.subscription?.active ? customer.subscription : undefined;
  const currentPlan = activeSubscription?.plan;
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

  const t = _t ? _t : (key) => key;

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
              const discount = applyDiscount ? highestDiscount({ plan }) : undefined;
              const isActivePlan = currentPlan?.id === plan.id && !activeSubscription?.cancelOn;

              return (
                <VerticalPlanCard
                  key={`plan-${index}`}
                  plan={plan}
                  discount={discount}
                  onSelectPlan={onSubscribe}
                  isActivePlan={isActivePlan}
                  trialDaysAsFeature={trialDaysAsFeature}
                  useShortFormPlanIntervals={useShortFormPlanIntervals}
                  isCustomPlan={plan.availability !== PlanAvailability.Public}
                  isRecommendedPlan={isRecommendedPlan({ plan, customFieldKey: keyForRecommended })}
                  buttonLabel={customButtonLabel({ plan, customFieldKey: keyForCustomButtonLabel })}
                  showRecommendedPlanBadge={showRecommendedPlanBadge}
                  t={t}
                  translatePlanName={translatePlanName}
                  currency={currency || plan.currency}
                />
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
