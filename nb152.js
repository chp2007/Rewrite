var nb1502=JSON.parse($response.body);
nb1502={
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
    }
  }
};
$done({body:JSON.stringify(nb1502)});
