import dayjs from 'dayjs';
import React, { useState } from "react";
import {
  Banner,
  BlockStack,
  Button,
  Divider,
  InlineStack,
  Text,
  Thumbnail,
} from "@shopify/polaris";
import { money, PlanInterval } from "@heymantle/react";

export const BundleCard = ({
  orientation = "horizontal",
  onShowPlans,
  onCancelPlan,
  onPlanCancelled = () => { },
  cancelSubscription = async () => { },
  i18n,
  subscription,
  refetch = async () => { },
  apps = [],
}) => {

  return (
    <Banner title="Bundle and save!" tone="success">
      <BlockStack gap="400">
        <Text>Save money on your subscription when you install these great apps.</Text>
        <BlockStack gap="300">
          {apps.map((app, index) => {
            return (
              <BlockStack gap="300">
                <InlineStack gap="200" align="space-between" blockAlign="center">
                  <InlineStack gap="300">
                    <Thumbnail
                      source={app.iconUrl}
                      alt={app.name}
                      size="small"
                    />
                    <BlockStack>
                      <Text variant="headingSm">{app.name}</Text>
                      <Text>{app.description}</Text>
                    </BlockStack>
                  </InlineStack>
                  <InlineStack gap="400">
                    <Text tone="subdued">20% off</Text>
                    <BlockStack>
                      <Button>{i18n.Install}</Button>
                    </BlockStack>
                  </InlineStack>
                </InlineStack>
                {index < apps.length - 1 && (
                  <Divider />
                )}
              </BlockStack>
            )
          })}
        </BlockStack>
      </BlockStack>
    </Banner>
  );
};
