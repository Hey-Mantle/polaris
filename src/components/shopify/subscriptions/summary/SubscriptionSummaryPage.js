import React from "react";
import { SubscriptionSummaryCard } from "./SubscriptionSummaryCard";
import { BlockStack, Layout, Page } from "@shopify/polaris";
import { useMantle } from "@heymantle/react";

export const SubscriptionSummaryPage = ({
  backUrl = "", // string: URL to use as "back" breadcrumb URL. leave as empty string or null to hide the back button
  pageWidth = "narrow", // string: "full", "narrow", or "default"
}) => {

  const { cancelSubscription, i18n, subscription, refetch } = useMantle();

  const onShowPlans = () => {
    console.log("Show plans. Navigate to the plans page, open a modal, etc.");
  }
  

  return (
    <Page
      title={i18n.Subscription}
      backAction={!!backUrl ? { content: i18n.Back, url: backUrl } : undefined}
      fullWidth={pageWidth === "full"}
      narrowWidth={pageWidth === "narrow"}
    >
      <BlockStack gap="400">
        <SubscriptionSummaryCard
          onShowPlans={onShowPlans}
          cancelSubscription={cancelSubscription}
          i18n={i18n}
          subscription={subscription}
          refetch={refetch}
        />
        <Layout>
          <Layout.Section>
            <SubscriptionSummaryCard
              onShowPlans={onShowPlans}
              cancelSubscription={cancelSubscription}
              i18n={i18n}
              subscription={subscription}
              refetch={refetch}
            />
          </Layout.Section>
          <Layout.Section  variant="oneThird">
            <SubscriptionSummaryCard
              onShowPlans={onShowPlans}
              cancelSubscription={cancelSubscription}
              i18n={i18n}
              subscription={subscription}
              refetch={refetch}
              orientation="vertical"
            />
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
};
