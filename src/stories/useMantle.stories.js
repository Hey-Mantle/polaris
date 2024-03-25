import { MantleProvider } from "@heymantle/react";
import { AuthenticatedPage } from "./AuthenticatedPage";

export default {
  title: "General/useMantle",
  component: AuthenticatedPage,
  decorators: [
    (Story, context) => (
      <MantleProvider
        appId={context.args.appId}
        customerApiToken={context.args.customerApiToken}
      >
        <Story />
      </MantleProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  args: {
    appId: "",
    customerApiToken: "",
  },
};

export const Authenticated = {
  args: {},
};
