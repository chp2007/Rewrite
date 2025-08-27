var objc = JSON.parse($response.body);

objc = {
  "request_date_ms" : 1756017636103,
  "request_date" : "2025-08-24T06:40:36Z",
  "subscriber" : {
    "original_app_user_id" : "5c4a217e-1c48-4e02-8ddf-a6e24487b498",
    "original_purchase_date" : null,
    "current_subscriptions" : {

    },
    "non_subscriptions" : {
      "com.goodnotes.gn6_one_time_unlock_3999" : [
        {
        "store_transaction_id" : "410001633781147",
        "is_sandbox" : false,
        "ownership_type" : "PURCHASED",
        "id" : "68a1c3dbbaf8707c0415ec9b",
        "country" : "CN",
        "app_type" : "ios",
        "display_name" : "com.goodnotes.gn6_one_time_unlock_3999",
        "original_purchase_date" : "2023-08-10T13:05:14Z",
        "purchase_date" : "2023-08-10T13:05:14Z",
        "store" : "app_store"
        }
      ]
    },
    "other_purchases" : {

    },
    "entitlements" : {
      "apple_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-10T13:05:14Z",
        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3999",
        "expires_date" : "2023-08-10T13:05:14Z",
      },
      "crossplatform_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-10T13:05:14Z",
        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3999",
        "expires_date" : null
      }
    },
    "first_seen" : "2023-08-15T01:16:55Z",
    "last_seen" : "2025-08-24T06:08:11Z",
    "subscriptions" : {

    },
    "ui_config_mapping" : {

    },
    "management_url" : "https:\/\/apps.apple.com\/account\/subscriptions"
  }
}

$done({body : JSON.stringify(objc)});
