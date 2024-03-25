import React, { useState } from "react";
import {
  Banner,
  Box,
  BlockStack,
  Button,
  ButtonGroup,
  Divider,
  Layout,
  Page,
  Text,
} from "@shopify/polaris";
import { Labels, PlanAvailability, PlanInterval } from "@heymantle/react";
import { PlanCardStack, PlanCardType } from "../PlanCardStack";

export const HighlightedPlanCards = ({
  customer,
  plans,
  onSubscribe,
  backUrl = "", // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  showRecommendedBadge = true, // boolean
  customFieldCta = null, // string: value of the custom plan field to use as the CTA. e.g. "cta"
  customFieldPlanRecommended = "Recommended", // string: value of the custom plan field to use as the recommended badge
  showPlanIntervalToggle = true, // boolean
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
  const publicPlans = plans.filter((plan) => plan.availability === PlanAvailability.Public);
  const customPlans = showCustomPlans
    ? plans.filter((plan) => plan.availability !== PlanAvailability.Public)
    : [];

  const [showSuccessBanner, setShowSuccessBanner] = useState(
    urlParams.get("subscribed") === "true"
  );

  return (
    <Page
      title={Labels.Plans}
      backAction={backUrl && backUrl !== "" ? { content: Labels.Back, url: backUrl } : undefined}
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
              {Labels.Yearly}
            </Button>
          </ButtonGroup>
        ) : undefined
      }
      fullWidth={pageWidth === "full"}
      narrowWidth={pageWidth === "narrow"}
    >
      <Box paddingBlockEnd="800">
        <Layout>
          <Layout.Section>
            <BlockStack gap="1000">
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
              <PlanCardStack
                plans={publicPlans}
                onSelectPlan={onSubscribe}
                planInterval={planInterval}
                cardType={PlanCardType.Highlighted}
                keyForRecommended={customFieldPlanRecommended}
                keyForCustomButtonLabel={customFieldCta}
                trialDaysAsFeature={showTrialDaysAsFeature}
                useShortFormPlanIntervals={useShortFormPlanIntervals}
                showRecommendedPlanBadge={showRecommendedBadge}
              />
              {customPlans?.length > 0 && <Divider borderColor="border" />}
              {customPlans?.length > 0 && (
                <BlockStack gap="300">
                  <Box paddingInline={{ xs: 400, sm: 0 }}>
                    <Text variant="headingMd">{Labels.CustomPlans}</Text>
                  </Box>
                  <PlanCardStack
                    plans={customPlans}
                    onSelectPlan={onSubscribe}
                    planInterval={planInterval}
                    cardType={PlanCardType.Highlighted}
                    keyForRecommended={customFieldPlanRecommended}
                    keyForCustomButtonLabel={customFieldCta}
                    trialDaysAsFeature={showTrialDaysAsFeature}
                    useShortFormPlanIntervals={useShortFormPlanIntervals}
                    showRecommendedPlanBadge={showRecommendedBadge}
                  />
                </BlockStack>
              )}
            </BlockStack>
          </Layout.Section>
        </Layout>
      </Box>
    </Page>
  );
};
