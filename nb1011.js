var nb1011=JSON.parse($response.body);

nb1011={
  "data" : {
    "processAppleReceipt" : {
      "__typename" : "SubscriptionResult",
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "120302739651720",
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

$done({body:JSON.stringify(nb1011)});
