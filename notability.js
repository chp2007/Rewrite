/*************************************

项目名称：Notability解锁plus
使用声明：先开启规则，notability软件，如果解锁无效果，点击恢复计划

**************************************

[rewrite_local]
^https?:\/\/notability\.com\/(global|subscriptions) url script-response-body https://raw.githubusercontent.com/chp2007/Rewrite/main/notability.js

[mitm]
hostname=notability.com

*************************************/

var chp2007=JSON.parse($response.body);

chp2007={
  "data" : {
    "processAppleReceipt" : {
      "error" : 0,
      "subscription" : {
        "productId" : "com.gingerlabs.Notability.premium_subscription",
        "originalTransactionId" : "120002639651217",
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
        "originalPurchaseDate" : "2022-09-09T05:13:06.000Z"
      },
      "__typename" : "SubscriptionResult"
    }
  }
};

$done({body:JSON.stringify(chp2007)});
