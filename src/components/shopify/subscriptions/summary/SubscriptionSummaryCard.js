import dayjs from 'dayjs';
import React, { useState } from "react";
import {
  BlockStack,
  Button,
  ButtonGroup,
  Card,
  InlineGrid,
  InlineStack,
  Modal,
  Text,
} from "@shopify/polaris";
import { money, PlanInterval, useMantle } from "@heymantle/react";

/**
 * Subscription summary component
 * @param {Object} props
 * @param {string} props.orientation - The orientation to display content blocks. "horizontal" or "vertical".
 * @param {Function} props.onShowPlans - Callback function to show plans.
 * @param {Function} props.onCancelPlan - Optional callback function to cancel plan.
 * @param {Function} props.onPlanCancelled - Optional callback function when plan is cancelled.
 * @returns {JSX.Element}
 */
export const SubscriptionSummaryCard = ({
  orientation = "horizontal",
  onShowPlans,
  onCancelPlan,
  onPlanCancelled = () => { },
}) => {
  const { cancelSubscription, i18n, subscription, refetch } = useMantle();
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  if (!subscription) {
    return (
      <Card>
        <BlockStack gap="200">
          <Text variant="headingMd">{i18n.Subscription}</Text>
          <Text>{i18n.NotSubscribed}</Text>
          <InlineStack align="end">
            <ButtonGroup>
              <Button
                variant="primary"
                onClick={onShowPlans}
                accessibilityLabel={i18n.ChangePlan}
              >
                {i18n.SelectPlan}
              </Button>
            </ButtonGroup>
          </InlineStack>
        </BlockStack>
      </Card>
    )
  }

  const { plan } = subscription;
  const planAmount = money(subscription.total, plan.currency);
  const planInterval = plan.interval === PlanInterval.Annual ? i18n.Year : i18n.Month;
  const Tag = orientation === "horizontal" ? InlineGrid : BlockStack;
  const discount = subscription?.appliedDiscount?.discount;
  const discountAmount = discount ? discount.percentage ? `${discount.percentage}%` : money(discount.amount, plan.currency) : null;
  const discountIsExpired = discount && subscription.appliedDiscount.discountEndsAt && dayjs().isAfter(dayjs(subscription.appliedDiscount.discountEndsAt));
  const columns = discount ? { xs: 1, md: 3 } : { xs: 1, md: 2 };

  return (
    <Card>
      <BlockStack gap="200">
        <Text variant="headingMd">{i18n.Subscription}</Text>
        <BlockStack gap="400">
          <Tag columns={columns} gap="300">
            <BlockStack>
              <Text>{i18n.CurrentPlan}</Text>
              <Text tone="subdued">{plan.name}</Text>
            </BlockStack>
            <BlockStack>
              <Text>{i18n.Price}</Text>
              <BlockStack>
                <Text tone="subdued">{i18n.AmountPerInterval.replace('{{ amount }}', planAmount).replace('{{ interval }}', planInterval)}</Text>
                {discount && !discountIsExpired && (
                  <Text tone="success">{i18n.DiscountAmount.replace('{{ amount }}', discountAmount)}</Text>
                )}
                {discount && discountIsExpired && (
                  <Text tone="subdued" textDecorationLine="line-through">{i18n.DiscountAmountExpired.replace('{{ amount }}', discountAmount)}</Text>
                )}
              </BlockStack>
            </BlockStack>
            {plan.usageCharges.length > 0 && (
              <BlockStack>
                <Text>{i18n.UsageCharges || "Usage charges"}</Text>
                {plan.usageCharges.map((charge, index) => {
                  return (
                    <Text key={`usage-charge-${index}`} tone="subdued">{charge.terms}</Text>
                  )
                })}
              </BlockStack>
            )}
          </Tag>
          <InlineStack align="end">
            <ButtonGroup>
              <Button
                onClick={() => {
                  if (onCancelPlan) {
                    onCancelPlan();
                  } else {
                    setShowCancelPlanModal(true);
                  }
                }}
                accessibilityLabel={i18n.CancelPlan}
                tone="critical"
              >
                {i18n.CancelPlan}
              </Button>
              <Button
                variant="primary"
                onClick={onShowPlans}
                accessibilityLabel={i18n.ChangePlan}
              >
                {i18n.ChangePlan}
              </Button>
            </ButtonGroup>
          </InlineStack>
        </BlockStack>
      </BlockStack>
      {showCancelPlanModal && (
        <Modal
          open
          onClose={() => setShowCancelPlanModal(false)}
          title={i18n.CancelPlan}
          primaryAction={{
            content: i18n.CancelPlan,
            destructive: true,
            loading: cancelling,
            disabled: cancelling,
            onAction: async () => {
              setCancelling(true);
              await cancelSubscription();
              await refetch();
              setCancelling(false);
              setShowCancelPlanModal(false);
              onPlanCancelled();
            },
          }}
          secondaryActions={[
            {
              content: i18n.Back,
              disabled: cancelling,
              onAction: () => setShowCancelPlanModal(false)
            },
          ]}
        >
          <Modal.Section>
            {i18n.CancelConfirmation}
          </Modal.Section>
        </Modal>
      )}
    </Card>
  );
};
