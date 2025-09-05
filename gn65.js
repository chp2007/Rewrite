const body = {};
const obj = JSON.parse((typeof $response !== "undefined" && $response.body) || null);
const gn6 = "com.goodnotes.gn6_one_time_unlock_3799";
const modData = {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-08-16T03:19:04Z",
        "expires_date" : "9999-09-09T03:19:04Z"
 };

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.subscriptions[gn6] = {
        "store_transaction_id" : "a3de8d234000769886gh58456cdad770",
        "expires_date" : "9999-09-09T03:19:04Z",
        "is_sandbox" : false,
        "unsubscribe_detected_at" : null,
        "refunded_at" : null,
        "auto_resume_date" : null,
        "grace_period_expires_date" : null,
        "period_type" : "normal",
        "purchase_date" : "2023-08-16T03:19:04Z",
        "quotas" : {

        },
        "billing_issues_detected_at" : null,
        "ownership_type" : "PURCHASED",
        "app_type" : "ios",
        "store" : "app_store",
        "original_purchase_date" : "2023-08-16T03:19:05Z"
  };
  obj.subscriber.entitlements["apple_access"] = modData;
  obj.subscriber.entitlements["apple_access"].product_identifier = gn6;
  obj.subscriber.entitlements["crossplatform_access"] = modData;
  obj.subscriber.entitlements["crossplatform_access"].product_identifier = gn6;
  body.body = JSON.stringify(obj);
}

$done(body);
