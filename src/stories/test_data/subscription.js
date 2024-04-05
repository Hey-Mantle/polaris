import { Plans } from './plans';

export const Subscriptions = [
  {
    "id": "123456",
    "plan": Plans[0],
    "lineItems": [
      {
        "type": "subscription",
        "amount": 9,
        "currencyCode": "USD",
        "plan": Plans[0]
      }
    ],
    "active": true,
    "billingCycleAnchor": "2024-05-08 00:00:00",
    "currentPeriodStart": "2024-05-08 00:00:00",
    "currentPeriodEnd": "2024-06-07 00:00:00",
    "trialStartsAt": "2024-04-04 00:00:00",
    "trialExpiresAt": "2024-04-08 00:00:00",
    "activatedAt": "2024-04-04 19:11:27",
    "canceledAt": null,
    "frozenAt": null,
    "features": {},
    "featuresOrder": [],
    "usageCharges": [],
    "createdAt": "2024-04-04 19:11:22",
    "confirmationUrl": "",
    "shopifySubscription": {
      "id": "gid://shopify/AppSubscription/123456"
    },
    "appliedDiscount": null,
    "subtotal": 9,
    "total": 9,
    "returnUrl": "/plans"
  }
]