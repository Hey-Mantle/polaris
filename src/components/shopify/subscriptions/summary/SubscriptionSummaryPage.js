import React from "react";
import { SubscriptionSummaryCard } from "./SubscriptionSummaryCard";
import { BlockStack, Layout, Page } from "@shopify/polaris";
import { Labels } from "@heymantle/react";

export const SubscriptionSummaryPage = ({
  backUrl = "", // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth = "narrow", // string: "full", "narrow", or "default"
}) => {

  const onShowPlans = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  }

  return (
    <Page
      title={Labels.Subscription}
      backAction={!!backUrl ? { content: Labels.Back, url: backUrl } : undefined}
      fullWidth={pageWidth === "full"}
      narrowWidth={pageWidth === "narrow"}
    >
      <BlockStack gap="400">
        <SubscriptionSummaryCard
          onShowPlans={onShowPlans}
        />
        <Layout>
          <Layout.Section>
            <SubscriptionSummaryCard
              onShowPlans={onShowPlans}
            />
          </Layout.Section>
          <Layout.Section  variant="oneThird">
            <SubscriptionSummaryCard
              onShowPlans={onShowPlans}
              orientation="vertical"
            />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
