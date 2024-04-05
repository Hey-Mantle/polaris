import { AppProvider } from "@shopify/polaris";
import { MantleProvider } from "@heymantle/react";
import { SubscriptionSummaryPage } from "..";
import { Plans } from "./test_data/plans";
import { Customer } from "./test_data/customer";

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
    appId: "9e23b028-ef38-4693-8ca0-66782d93a3e4",
    customerApiToken: "01d1c071-9a13-438f-aaae-b5bd8b883bbc",
  },
};

export const Default = {
  args: {},
};
