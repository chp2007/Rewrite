var nb1502=JSON.parse($response.body);
nb1502={
  "data" : {
    "associateAppStoreTransactions" : {
      "__typename" : "SubscriptionOverview",
      "tier" : "premium",
      "current" : {
        "source" : "AppStoreConsumer",
        "expirationDate" : 4087641600000,
        "details" : {
          "originalTransactionId" : "120005639111229",
          "__typename" : "AppStoreSubscription",
          "overDeviceLimit" : false,
          "productId" : "com.gingerlabs.Notability.premium_subscription",
          "appStoreStatus" : "active"
        },
        "renewalDate" : null,
        "tier" : "premium",
        "gracePeriodEndDate" : null,
        "__typename" : "Subscription"
      },
      "quotas" : {
        "__typename" : "SubscriptionFeatureQuotaView",
        "learnSummaries" : {
          "quotaWindowType" : null,
          "__typename" : "SubscriptionFeatureQuota",
          "usagePercentage" : 100,
          "isUsageExceeded" : true
        },
        "learnQuestions" : {
          "quotaWindowType" : null,
          "__typename" : "SubscriptionFeatureQuota",
          "usagePercentage" : 100,
          "isUsageExceeded" : true
        },
        "liveTranscription" : {
          "quotaWindowType" : null,
          "__typename" : "SubscriptionFeatureQuota",
          "usagePercentage" : 100,
          "isUsageExceeded" : true
        }
      },
      "prior" : null
    },
    "processAppleReceipt" : {
      "__typename" : "SubscriptionResult",
      "isClassic" : false,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "120002639651229",
        "tier" : "premium",
        "refundedDate" : null,
        "refundedReason" : null,
        "isInBillingRetryPeriod" : false,
        "expirationDate" : "2099-12-31T05:13:02.000Z",
        "gracePeriodExpiresAt" : null,
        "overDeviceLimit" : false,
        "expirationIntent" : null,
        "__typename" : "AppStoreSubscription",
        "user" : null,
        "status" : "active",
        "originalPurchaseDate" : "2021-11-09T05:13:06.000Z"
      },
      "error" : 0
    }
  }
};
$done({body:JSON.stringify(nb1502)});
