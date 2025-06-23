import { AppProvider } from "@shopify/polaris";
import { MantleProvider } from "@heymantle/react";
import { ChecklistCard } from "..";
import {
  sampleChecklistItems,
  onboardingChecklist,
  completedChecklist,
  emptyChecklist
} from "./test_data/checklists";

export default {
  title: "Checklists/ChecklistCard",
  component: ChecklistCard,
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: { type: "text" },
      description: "The title of the checklist",
    },
    showProgress: {
      control: { type: "boolean" },
      description: "Whether to show progress indicator",
    },
    steps: {
      control: { type: "object" },
      description: "Array of checklist steps",
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
    title: "Setup Checklist",
    showProgress: true,
    steps: sampleChecklistItems,
    appId: "",
    customerApiToken: "",
  },
};

export const Default = {
  args: {
    steps: sampleChecklistItems,
  },
};

export const OnboardingFlow = {
  args: {
    title: "Get Started",
    steps: onboardingChecklist,
  },
};

export const CompletedChecklist = {
  args: {
    title: "All Done!",
    steps: completedChecklist,
  },
};

export const EmptyChecklist = {
  args: {
    title: "Nothing to do",
    steps: emptyChecklist,
  },
};

export const WithoutProgress = {
  args: {
    title: "Simple Checklist",
    steps: sampleChecklistItems,
    showProgress: false,
  },
};

export const Interactive = {
  args: {
    title: "Interactive Checklist",
    steps: sampleChecklistItems,
  },
};
