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
import { money, PlanInterval, Labels } from "@heymantle/react";
import localizedFormat from "dayjs/plugin/localizedFormat";

dayjs.extend(localizedFormat);

/**
 * Subscription summary component
 * @param {Object} props
 * @param {string} props.orientation - The orientation to display content blocks. "horizontal" or "vertical".
 * @param {Function} props.onShowPlans - Callback function to show plans.
 * @param {Function} props.onCancelPlan - Optional callback function to cancel plan.
 * @param {Function} props.onPlanCancelled - Optional callback function when plan is cancelled.
 * @param {Function} props.cancelSubscription - Optional async function to cancel subscription.
 * @param {Object} props.subscription - The subscription object.
 * @param {Object} props.i18n - The internationalization object.
 * @param {Function} props.refetch - Optional async function to refetch subscription data.
 * @returns {JSX.Element}
 */
export const SubscriptionSummaryCard = ({
  orientation = "horizontal",
  onShowPlans,
  onCancelPlan,
  onPlanCancelled = () => { },
  cancelSubscription = async () => { },
  i18n: _i18n,
  subscription,
  refetch = async () => { },
  t: _t,
  translatePlanName = true,
  hideSelectPlanButton = false,
}) => {
  const [showCancelPlanModal, setShowCancelPlanModal] = useState(false);
  const [cancelling, setCancelling] = useState(false);

  const t = _t ? _t : (key) => key;
  const i18n = {
    ...Labels,
    ...(_i18n || {}),
  };

  if (!subscription) {
    return (
      <Card>
        <BlockStack gap="200">
          <Text variant="headingMd">{t(i18n.Subscription)}</Text>
          <Text>{t(i18n.NotSubscribed)}</Text>
          <InlineStack align="end">
            <ButtonGroup>
              {!hideSelectPlanButton && (
                <Button
                  variant="primary"
                onClick={onShowPlans}
                accessibilityLabel={t(i18n.ChangePlan)}
              >
                  {t(i18n.SelectPlan)}
                </Button>
              )}
            </ButtonGroup>
          </InlineStack>
        </BlockStack>
      </Card>
    )
  }

  const { plan } = subscription;
  const planAmount = money(subscription.presentmentTotal, plan.presentmentCurrencyCode);
  const planInterval = t(plan.interval === PlanInterval.Annual ? i18n.Year : i18n.Month);
  const Tag = orientation === "horizontal" ? InlineGrid : BlockStack;
  const discount = subscription?.appliedDiscount?.discount;
  const discountAmount = discount ? discount.percentage ? `${discount.percentage}%` : money(discount.presentmentAmount, plan.presentmentCurrencyCode) : null;
  const discountIsExpired = discount && subscription.appliedDiscount.discountEndsAt && dayjs().isAfter(dayjs(subscription.appliedDiscount.discountEndsAt));
  const columns = plan.usageCharges.length > 0 ? { xs: 1, md: 3 } : { xs: 1, md: 2 };

  return (
    <Card>
      <BlockStack gap="200">
        <Text variant="headingMd">{t(i18n.Subscription)}</Text>
        <BlockStack gap="400">
          <Tag columns={columns} gap="300">
            <BlockStack>
              <Text>{t(i18n.CurrentPlan)}</Text>
              <Text tone="subdued">{translatePlanName ? t(plan.name) : plan.name}</Text>
              {subscription.cancelOn && (
                <Text tone="subdued">{t('Canceled, active until {{ date }}').replace('{{ date }}', dayjs(subscription.cancelOn).format('LL'))}</Text>
              )}
            </BlockStack>
            <BlockStack>
              <Text>{t(i18n.Price)}</Text>
              <BlockStack>
                <Text tone="subdued">{t(i18n.AmountPerInterval).replace('{{ amount }}', planAmount).replace('{{ interval }}', planInterval)}</Text>
                {discount && !discountIsExpired && (
                  <Text tone="success">{t(i18n.DiscountAmount).replace('{{ amount }}', discountAmount)}</Text>
                )}
                {discount && discountIsExpired && (
                  <Text tone="subdued" textDecorationLine="line-through">{t(i18n.DiscountAmountExpired).replace('{{ amount }}', discountAmount)}</Text>
                )}
              </BlockStack>
            </BlockStack>
            {plan.usageCharges.length > 0 && (
              <BlockStack>
                <Text>{t(i18n.UsageCharges || "Usage charges")}</Text>
                {plan.usageCharges.map((charge, index) => {
                  return (
                    <Text key={`usage-charge-${index}`} tone="subdued">{t(charge.terms)}</Text>
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
                accessibilityLabel={t(i18n.CancelPlan)}
                tone="critical"
                disabled={!!subscription.cancelOn}
              >
                {t(i18n.CancelPlan)}
              </Button>
              {!hideSelectPlanButton && (
                <Button
                  variant="primary"
                onClick={onShowPlans}
                accessibilityLabel={t(i18n.ChangePlan)}
              >
                  {t(i18n.ChangePlan)}
                </Button>
              )}
            </ButtonGroup>
          </InlineStack>
        </BlockStack>
      </BlockStack>
      {showCancelPlanModal && (
        <Modal
          open
          onClose={() => setShowCancelPlanModal(false)}
          title={t(i18n.CancelPlan)}
          primaryAction={{
            content: t(i18n.CancelPlan),
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
              content: t(i18n.Back),
              disabled: cancelling,
              onAction: () => setShowCancelPlanModal(false)
            },
          ]}
        >
          <Modal.Section>
            {t(i18n.CancelConfirmation)}
          </Modal.Section>
        </Modal>
      )}
    </Card>
  );
};
