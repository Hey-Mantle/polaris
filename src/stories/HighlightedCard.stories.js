import { HighlightedPlanCards } from "..";
import { Plans } from "./test_data/plans";
import { Customer } from "./test_data/customer";

export default {
  title: "Plans/HighlightedPlanCards",
  component: HighlightedPlanCards,
  tags: ["autodocs"],
  argTypes: {
    pageWidth: {
      options: ["default", "narrow", "full"],
      control: { type: "radio" },
    },
    toggleYearlySubtitle: {
      control: { type: "boolean" },
    },
  },

  args: {
    pageWidth: "default",
    showRecommendedBadge: true,
    showPlanIntervalToggle: true,
    showTrialDaysAsFeature: true,
    useShortFormPlanIntervals: true,
    addSpacingToNonRecommendedPlans: false,
    customFieldCta: null,
    customFieldPlanRecommended: "Recommended",
    showCustomPlans: false,
    backUrl: "",
    onSubscribe: () => {},
    customer: Customer,
    plans: Plans,
    toggleYearlySubtitle: false,
  },
};

export const FourColumns = {
  args: {},
};

export const ThreeColumns = {
  args: {
    plans: Plans.filter((plan) => plan.name !== "Ultra"),
  },
};

export const TwoColumns = {
  args: {
    plans: Plans.filter(
      (plan) => plan.name !== "Ultra" && plan.name !== "Advanced",
    ),
  },
};

export const OneColumn = {
  args: {
    plans: Plans.filter(
      (plan) =>
        plan.name !== "Ultra" &&
        plan.name !== "Advanced" &&
        plan.name !== "Pro",
    ),
  },
};
