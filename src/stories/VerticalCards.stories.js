import { VerticalPlanCards } from "..";
import { Plans } from "./test_data/plans";
import { Customer } from "./test_data/customer";

export default {
  title: "Plans/VerticalPlanCards",
  component: VerticalPlanCards,
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
    showPlanIntervalToggle: false,
    showTrialDaysAsFeature: true,
    useShortFormPlanIntervals: true,
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

export const SinglePlan = {
  args: {
    plans: Plans.filter(
      (plan) =>
        plan.interval !== "ANNUAL" &&
        plan.name !== "Ultra" &&
        plan.name !== "Advanced" &&
        plan.name !== "Pro",
    ),
  },
};

export const TwoPlans = {
  args: {
    plans: Plans.filter(
      (plan) =>
        plan.interval !== "ANNUAL" &&
        plan.name !== "Ultra" &&
        plan.name !== "Advanced",
    ),
  },
};

export const ThreePlans = {
  args: {
    plans: Plans.filter(
      (plan) => plan.interval !== "ANNUAL" && plan.name !== "Ultra",
    ),
  },
};
