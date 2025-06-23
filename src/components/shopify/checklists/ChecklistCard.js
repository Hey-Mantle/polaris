import React, { useState } from "react";
import {
  BlockStack,
  Button,
  Card,
  Checkbox,
  InlineStack,
  Text,
  Icon,
  Collapsible,
} from "@shopify/polaris";
import { CheckCircleIcon, ChevronDownIcon, ChevronUpIcon } from "@shopify/polaris-icons";

/**
 * Checklist component for displaying a list of actionable items
 * @param {Object} props
 * @param {string} props.title - The title of the checklist
 * @param {Array} props.steps - Array of checklist steps with { id, text, completed }
 * @param {boolean} props.showProgress - Whether to show progress indicator
 * @param {boolean} props.hideCompleted - Whether to hide completed steps
 * @param {boolean} props.allowExpandCompleted - Whether to allow expanding hidden completed steps
 * @param {Object} props.i18n - The internationalization object
 * @returns {JSX.Element}
 */
export const ChecklistCard = ({
  title = "Checklist",
  steps = [],
  showProgress = true,
  hideCompleted = false,
  allowExpandCompleted = true,
  i18n = {},
}) => {
  const [showCompletedSteps, setShowCompletedSteps] = useState(false);

  const completedCount = steps.filter(step => step.completed).length;
  const totalCount = steps.length;
  const progressPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
  const isComplete = completedCount === totalCount && totalCount > 0;

  // Filter steps based on hideCompleted prop and expansion state
  const incompleteSteps = steps.filter(step => !step.completed);
  const completedSteps = steps.filter(step => step.completed);
  const displayedSteps = hideCompleted ? incompleteSteps : steps;

  const handleToggleCompleted = () => {
    setShowCompletedSteps(!showCompletedSteps);
  };

  return (
    <Card>
      <BlockStack gap="400">
        <BlockStack gap="200">
          <InlineStack align="space-between" blockAlign="center">
            <Text variant="headingMd">{title}</Text>
            {isComplete && (
              <InlineStack gap="100" blockAlign="center">
                <Icon source={CheckCircleIcon} tone="success" />
                <Text tone="success">Complete!</Text>
              </InlineStack>
            )}
          </InlineStack>

          {showProgress && totalCount > 0 && (
            <BlockStack gap="100">
              <InlineStack align="space-between">
                <Text variant="bodyMd" tone="subdued">
                  Progress: {completedCount} of {totalCount} completed
                </Text>
                <Text variant="bodyMd" tone="subdued">
                  {progressPercentage}%
                </Text>
              </InlineStack>
              <div
                style={{
                  width: "100%",
                  height: "8px",
                  backgroundColor: "#f0f0f0",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progressPercentage}%`,
                    height: "100%",
                    backgroundColor: isComplete ? "#00a047" : "#006fbb",
                    transition: "width 0.3s ease",
                  }}
                />
              </div>
            </BlockStack>
          )}
        </BlockStack>

        <BlockStack gap="300">
          {displayedSteps.map((step) => (
            <InlineStack key={step.id} align="space-between" blockAlign="start">
              <InlineStack gap="300" blockAlign="start">
                <Checkbox
                  id={`checklist-step-${step.id}`}
                  checked={step.completed}
                  onChange={() => handleToggle(step.id)}
                />
                <BlockStack gap="100">
                  <Text
                    variant="bodyMd"
                    tone={step.completed ? "subdued" : "base"}
                    textDecorationLine={step.completed ? "line-through" : "none"}
                  >
                    {step.name}
                  </Text>
                  {step.description && (
                    <Text variant="bodySm" tone="subdued">
                      {step.description}
                    </Text>
                  )}
                </BlockStack>
              </InlineStack>
            </InlineStack>
          ))}
        </BlockStack>

        {/* Expandable completed section */}
        {hideCompleted && allowExpandCompleted && completedSteps.length > 0 && (
          <BlockStack gap="200">
            <Button
              variant="plain"
              onClick={handleToggleCompleted}
              icon={showCompletedSteps ? ChevronUpIcon : ChevronDownIcon}
              disclosure={showCompletedSteps ? "up" : "down"}
            >
              {showCompletedSteps ? "Hide" : "Show"} {completedCount} completed {completedCount === 1 ? "item" : "items"}
            </Button>

            <Collapsible
              open={showCompletedSteps}
              id="completed-steps"
              transition={{duration: '200ms', timingFunction: 'ease-in-out'}}
            >
              <BlockStack gap="300">
                {completedSteps.map((step) => (
                  <InlineStack key={step.id} align="space-between" blockAlign="start">
                    <InlineStack gap="300" blockAlign="start">
                      <Checkbox
                        id={`checklist-step-${step.id}`}
                        checked={step.completed}
                        onChange={() => handleToggle(step.id)}
                      />
                      <BlockStack gap="100">
                        <Text
                          variant="bodyMd"
                          tone="subdued"
                          textDecorationLine="line-through"
                        >
                          {step.name}
                        </Text>
                        {step.description && (
                          <Text variant="bodySm" tone="subdued">
                            {step.description}
                          </Text>
                        )}
                      </BlockStack>
                    </InlineStack>
                  </InlineStack>
                ))}
              </BlockStack>
            </Collapsible>
          </BlockStack>
        )}

        {displayedSteps.length === 0 && hideCompleted && totalCount > 0 && !allowExpandCompleted && (
          <Text tone="subdued" alignment="center">
            All items completed! Great job!
          </Text>
        )}

        {totalCount === 0 && (
          <Text tone="subdued" alignment="center">
            No items in this checklist yet.
          </Text>
        )}
      </BlockStack>
    </Card>
  );
};
