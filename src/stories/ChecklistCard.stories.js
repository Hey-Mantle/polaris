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
    hideCompleted: {
      control: { type: "boolean" },
      description: "Whether to hide completed steps",
    },
    allowExpandCompleted: {
      control: { type: "boolean" },
      description: "Whether to allow expanding hidden completed steps. Use with hideCompleted.",
    },
    showDescription: {
      control: { type: "boolean" },
      description: "Whether to show descriptions inline",
    },
    enableDescriptionModal: {
      control: { type: "boolean" },
      description: "Whether to enable clicking on step names to show description in modal",
    },
    steps: {
      control: { type: "object" },
      description: "Array of checklist steps",
    },
  },
  args: {
    title: "Setup Checklist",
    showProgress: true,
    hideCompleted: false,
    allowExpandCompleted: true,
    showDescription: true,
    enableDescriptionModal: false,
    steps: sampleChecklistItems,
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

export const HideCompleted = {
  args: {
    title: "Hide Completed Steps",
    steps: sampleChecklistItems,
    hideCompleted: true,
  },
};

export const ExpandableCompleted = {
  args: {
    title: "Expandable Completed Steps",
    steps: sampleChecklistItems,
    hideCompleted: true,
    allowExpandCompleted: true,
  },
};

export const HideCompletedNoExpand = {
  args: {
    title: "Hide Completed (No Expand)",
    steps: sampleChecklistItems,
    hideCompleted: true,
    allowExpandCompleted: false,
  },
};

export const WithDescriptionModal = {
  args: {
    title: "Click Names for Details",
    steps: sampleChecklistItems,
    enableDescriptionModal: true,
  },
};

export const ModalWithHideCompleted = {
  args: {
    title: "Modal + Hide Completed",
    steps: sampleChecklistItems,
    hideCompleted: true,
    enableDescriptionModal: true,
  },
};

export const WithoutDescriptions = {
  args: {
    title: "Clean List (No Descriptions)",
    steps: sampleChecklistItems,
    showDescription: false,
  },
};

export const ModalOnlyDescriptions = {
  args: {
    title: "Modal-Only Descriptions",
    steps: sampleChecklistItems,
    showDescription: false,
    enableDescriptionModal: true,
  },
};
