export const Plans = [
  {
      "id": "1",
      "name": "Basic",
      "description": "For new businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "EVERY_30_DAYS",
      "availability": "public",
      "createdAt": "2024-02-10 16:02:07",
      "updatedAt": "2024-02-21 12:32:02",
      "features": {
          "orders_per_month": {
              "id": "1",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 100,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [
          {
              "id": "1",
              "amount": 0.05,
              "type": "unit",
              "terms": "5 cents per order",
              "cappedAmount": 1000,
              "eventName": "orders",
              "limitEventName": null,
              "limitMin": null,
              "limitMax": null
          }
      ],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 9,
      "subtotal": 9,
      "amount": 9,
      "eligible": true
  },
  {
      "id": "2",
      "name": "Pro",
      "description": "For growing businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "EVERY_30_DAYS",
      "availability": "public",
      "createdAt": "2024-02-10 16:24:56",
      "updatedAt": "2024-02-21 12:32:03",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 1000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [
          {
              "id": "1",
              "amount": 0.03,
              "type": "unit",
              "terms": "3 cents per order",
              "cappedAmount": 1000,
              "eventName": "orders",
              "limitEventName": null,
              "limitMin": null,
              "limitMax": null
          }
      ],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": true,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 49,
      "subtotal": 49,
      "amount": 49,
      "eligible": true
  },
  {
      "id": "3",
      "name": "Basic",
      "description": "For new businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "ANNUAL",
      "availability": "public",
      "createdAt": "2024-02-12 21:01:46",
      "updatedAt": "2024-02-21 13:38:19",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 100,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 99,
      "subtotal": 99,
      "amount": 99,
      "eligible": true
  },
  {
      "id": "4",
      "name": "Advanced",
      "description": "For established businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "EVERY_30_DAYS",
      "availability": "public",
      "createdAt": "2024-02-10 16:25:09",
      "updatedAt": "2024-02-21 12:32:02",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 10000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [
          {
              "id": "1",
              "amount": 0.01,
              "type": "unit",
              "terms": "1 cent per order",
              "cappedAmount": 1000,
              "eventName": "orders",
              "limitEventName": null,
              "limitMin": null,
              "limitMax": null
          }
      ],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Request demo"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 99,
      "subtotal": 99,
      "amount": 99,
      "eligible": true
  },
  {
    "id": "5",
    "name": "Ultra",
    "description": "For enterprise businesses",
    "currencyCode": "USD",
    "public": true,
    "trialDays": 30,
    "interval": "EVERY_30_DAYS",
    "availability": "public",
    "createdAt": "2024-02-10 16:25:09",
    "updatedAt": "2024-02-21 12:32:02",
    "features": {
        "orders_per_month": {
            "id": "0",
            "name": "orders per month",
            "type": "limit",
            "description": "",
            "value": 20000,
            "displayOrder": 0
        },
        "feature_1": {
            "id": "1",
            "name": "Feature 1",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 1
        },
        "feature_2": {
            "id": "2",
            "name": "Feature 2",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 2
        },
        "feature_3": {
            "id": "3",
            "name": "Feature 3",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 3
        },
        "feature_4": {
            "id": "4",
            "name": "Feature 4",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 4
        },
        "feature_5": {
            "id": "5",
            "name": "Feature 5",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 5
        },
        "feature_6": {
            "id": "6",
            "name": "Feature 6",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 6
        }
    },
    "featuresOrder": [
        "orders_per_month",
        "feature_1",
        "feature_2",
        "feature_3",
        "feature_4",
        "feature_5",
        "feature_6"
    ],
    "usageCharges": [
        {
            "id": "1",
            "amount": 0.01,
            "type": "unit",
            "terms": "1 cent per order",
            "cappedAmount": 1000,
            "eventName": "orders",
            "limitEventName": null,
            "limitMin": null,
            "limitMax": null
        }
    ],
    "usageChargeCappedAmount": null,
    "customFields": {
        "Recommended": false,
        "buttonLabel": "Request demo"
    },
    "discounts": [],
    "autoAppliedDiscount": null,
    "total": 129,
    "subtotal": 129,
    "amount": 129,
    "eligible": true
  },
  {
      "id": "6",
      "name": "Pro",
      "description": "For growing businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "ANNUAL",
      "availability": "public",
      "createdAt": "2024-02-12 21:13:26",
      "updatedAt": "2024-02-21 13:38:45",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 1000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": true,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 499,
      "subtotal": 499,
      "amount": 499,
      "eligible": true
  },
  {
      "id": "7",
      "name": "Advanced",
      "description": "For established businesses",
      "currencyCode": "USD",
      "public": true,
      "trialDays": 30,
      "interval": "ANNUAL",
      "availability": "public",
      "createdAt": "2024-02-12 21:14:17",
      "updatedAt": "2024-02-21 13:38:24",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 10000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 999,
      "subtotal": 999,
      "amount": 999,
      "eligible": true
  },
  {
    "id": "8",
    "name": "Ultra",
    "description": "For enterprise businesses",
    "currencyCode": "USD",
    "public": true,
    "trialDays": 30,
    "interval": "ANNUAL",
    "availability": "public",
    "createdAt": "2024-02-12 21:14:17",
    "updatedAt": "2024-02-21 13:38:24",
    "features": {
        "orders_per_month": {
            "id": "0",
            "name": "orders per month",
            "type": "limit",
            "description": "",
            "value": 20000,
            "displayOrder": 0
        },
        "feature_1": {
            "id": "1",
            "name": "Feature 1",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 1
        },
        "feature_2": {
            "id": "2",
            "name": "Feature 2",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 2
        },
        "feature_3": {
            "id": "3",
            "name": "Feature 3",
            "type": "boolean",
            "description": "",
            "value": true,
            "displayOrder": 3
        },
        "feature_4": {
            "id": "4",
            "name": "Feature 4",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 4
        },
        "feature_5": {
            "id": "5",
            "name": "Feature 5",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 5
        },
        "feature_6": {
            "id": "6",
            "name": "Feature 6",
            "type": "boolean",
            "description": "",
            "value": false,
            "displayOrder": 6
        }
    },
    "featuresOrder": [
        "orders_per_month",
        "feature_1",
        "feature_2",
        "feature_3",
        "feature_4",
        "feature_5",
        "feature_6"
    ],
    "usageCharges": [],
    "usageChargeCappedAmount": null,
    "customFields": {
        "Recommended": false,
        "buttonLabel": "Select plan"
    },
    "discounts": [],
    "autoAppliedDiscount": null,
    "total": 1290,
    "subtotal": 1290,
    "amount": 1290,
    "eligible": true
},
  {
      "id": "9",
      "name": "VIP customers",
      "description": null,
      "currencyCode": "USD",
      "public": false,
      "trialDays": 0,
      "interval": "ANNUAL",
      "availability": "customerTag",
      "createdAt": "2024-02-14 15:29:50",
      "updatedAt": "2024-02-21 13:38:49",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 20000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": false,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 1299,
      "subtotal": 1299,
      "amount": 1299,
      "eligible": true
  },
  {
      "id": "10",
      "name": "Custom",
      "description": null,
      "currencyCode": "USD",
      "public": false,
      "trialDays": 0,
      "interval": "ANNUAL",
      "availability": "customer",
      "createdAt": "2024-02-14 14:21:09",
      "updatedAt": "2024-02-21 13:38:10",
      "features": {
          "orders_per_month": {
              "id": "0",
              "name": "orders per month",
              "type": "limit",
              "description": "",
              "value": 50000,
              "displayOrder": 0
          },
          "feature_1": {
              "id": "1",
              "name": "Feature 1",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 1
          },
          "feature_2": {
              "id": "2",
              "name": "Feature 2",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 2
          },
          "feature_3": {
              "id": "3",
              "name": "Feature 3",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 3
          },
          "feature_4": {
              "id": "4",
              "name": "Feature 4",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 4
          },
          "feature_5": {
              "id": "5",
              "name": "Feature 5",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 5
          },
          "feature_6": {
              "id": "6",
              "name": "Feature 6",
              "type": "boolean",
              "description": "",
              "value": true,
              "displayOrder": 6
          }
      },
      "featuresOrder": [
          "orders_per_month",
          "feature_1",
          "feature_2",
          "feature_3",
          "feature_4",
          "feature_5",
          "feature_6"
      ],
      "usageCharges": [],
      "usageChargeCappedAmount": null,
      "customFields": {
          "Recommended": false,
          "buttonLabel": "Select plan"
      },
      "discounts": [],
      "autoAppliedDiscount": null,
      "total": 1999,
      "subtotal": 1999,
      "amount": 1999,
      "eligible": true
  }
];