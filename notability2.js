var nb1012=JSON.parse($response.body);
nb1012={
  "data" : {
    "associateAppStoreTransactions" : {
      "__typename" : "SubscriptionOverview",
      "tier" : "premium",
      "current" : {
        "source" : "AppStoreConsumer",
        "expirationDate" : 4100342400000,
        "details" : {
          "originalTransactionId" : "330001932792320",
          "__typename" : "AppStoreSubscription",
          "overDeviceLimit" : false,
          "productId" : "com.gingerlabs.Notability.premium_subscription_variant",
          "appStoreStatus" : "canceled"
        },
        "renewalDate" : null,
        "tier" : "premium",
        "gracePeriodEndDate" : null,
        "__typename" : "Subscription"
      },
      "quotas" : {
        "__typename" : "SubscriptionFeatureQuotaView",
        "learnSummaries" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
        },
        "learnQuestions" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
        },
        "liveTranscription" : {
          "isUsageExceeded" : false,
          "usagePercentage" : 0,
          "__typename" : "SubscriptionFeatureQuota"
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
$done({body:JSON.stringify(nb1012)});
