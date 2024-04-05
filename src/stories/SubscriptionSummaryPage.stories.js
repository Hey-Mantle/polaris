import { AppProvider } from "@shopify/polaris";
import { MantleProvider } from "@heymantle/react";
import { SubscriptionSummaryPage } from "..";

export default {
  title: "Subscription/SummaryPage",
  component: SubscriptionSummaryPage,
  tags: ["autodocs"],
  argTypes: {
    pageWidth: {
      options: ["default", "narrow", "full"],
      control: { type: "radio" },
    },
  },
  decorators: [
    (Story, context) => (
      <AppProvider i18n={{}}>
        <MantleProvider
          appId={context.args.appId}
          customerApiToken={context.args.customerApiToken}
        >
          <Story />
        </MantleProvider>
      </AppProvider>
    ),
  ],
  args: {
    pageWidth: "default",
    backUrl: "",
    appId: "",
    customerApiToken: "",
  },
};

export const Default = {
  args: {},
};
