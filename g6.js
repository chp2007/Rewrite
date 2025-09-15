var objc = JSON.parse($response.body);

objc = {
  "request_date_ms" : 1756017636103,
  "request_date" : "2023-08-24T06:40:36Z",
  "subscriber" : {
    "original_app_user_id" : "5c4a217e-1c48-4e02-8ddf-a6e24487b498",
    "original_purchase_date" : null,
    "current_subscriptions" : {

    },
    "non_subscriptions" : {

    },
    "other_purchases" : {

    },
    "entitlements" : {
      "apple_access" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-10T13:05:14Z",
        "product_identifier" : "com.goodnotes.gn6_one_time_unlock_3999",
        "expires_date" :  null
      },
      "gn5" : {
        "grace_period_expires_date" : null,
        "purchase_date" : "2021-11-03T14:03:07Z",
        "product_identifier" : "com.goodnotes.one_time_unlock",
        "expires_date" : null
      }
    },
    "first_seen" : "2023-08-15T01:16:55Z",
    "last_seen" : "2023-08-24T06:08:11Z",
    "subscriptions" : {
      "com.goodnotes.gn6_one_time_unlock_3999" : {
        "original_purchase_date" : "2023-08-10T13:05:14Z",
        "expires_date" : null,
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "618718133387db80b14430cfec20b636",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-08-10T13:05:14Z",
        "quotas" : {

        },
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      },
      "com.goodnotes.one_time_unlock" : {
        "original_purchase_date" : "2021-11-03T14:03:07Z",
        "expires_date" : null,
        "is_sandbox" : false,
        "refunded_at" : null,
        "store_transaction_id" : "2f38f0aec59ec84d88d9d9e92c3edd80",
        "unsubscribe_detected_at" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2021-11-03T14:03:07Z",
        "quotas" : {

        },
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "store" : "app_store",
        "auto_resume_date" : null
      }
    },
    "original_application_version" : null,
    "quotas" : {
      "ai" : {
        "quota" : 10,
        "period" : "P1M"
      }
    },
    "ui_config_mapping" : {

    },
    "management_url" : "https:\/\/apps.apple.com\/account\/subscriptions"
  }
}

$done({body : JSON.stringify(objc)});
