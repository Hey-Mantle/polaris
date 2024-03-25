import { BlockStack, Page, Spinner, Text } from "@shopify/polaris";
import { useMantle } from "@heymantle/react";
import { HorizontalPlanCards } from "..";

export const AuthenticatedPage = () => {
  const { plans, error, loading, mantleClient, customer } = useMantle();

  return (
    <Page title="Authenticated Page" fullWidth>
      <BlockStack align="center" inlineAlign="center">
        {loading && <Spinner />}
        {!loading && (error || plans?.length == 0) && (
          <Text tone="critical">appId and customerApiToken are required</Text>
        )}
        {!loading && !error && (
          <HorizontalPlanCards plans={plans} />
        )}
      </BlockStack>
    </Page>
  );
};
