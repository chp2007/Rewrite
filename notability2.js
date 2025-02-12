var chp2007=JSON.parse($response.body);

chp2007={
  "data" : {
    "processAppleReceipt" : {
      "error" : 0,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "320502739651200",
        "tier" : "premium",
        "refundedDate" : null,
        "refundedReason" : null,
        "isInBillingRetryPeriod" : false,
        "expirationDate" : "2099-11-11T05:13:02.000Z",
        "gracePeriodExpiresAt" : null,
        "overDeviceLimit" : false,
        "expirationIntent" : null,
        "__typename" : "AppStoreSubscription",
        "user" : null,
        "status" : "active",
        "originalPurchaseDate" : "2021-11-03T05:13:06.000Z"
      },
      "__typename" : "SubscriptionResult"
    }
  }
};

$done({body:JSON.stringify(chp2007)});