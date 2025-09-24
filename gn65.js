const body = {};
const obj = JSON.parse((typeof $response !== "undefined" && $response.body) || null);
const gn6 = "com.goodnotes.gn6_one_time_unlock_3499";
const gt5 = "com.goodnotes.one_time_unlock";
const modData6 = {
        "grace_period_expires_date" : null,
        "plan_key" : "gn6_otp",
        "purchase_date" : "2023-08-31T03:19:04Z",
        "expires_date" : null
 };
const modData5 = {
        "grace_period_expires_date" : null,
        "purchase_date" : "2022-09-09T01:10:20Z",
        "expires_date" : null
 };

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.non_subscriptions[gt5] = [
        {
          "store_transaction_id" : "320001235125468",
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "689fed593c3e1eb356c2c414",
          "price" : {
            "amount" : 68,
            "currency" : "CNY"
          },
          "country" : "CN",
          "app_type" : "ios",
          "display_name" : "com.goodnotes.one_time_unlock",
          "original_purchase_date" : "2022-09-09T01:10:20Z",
          "purchase_date" : "2022-09-09T01:10:20Z",
          "store" : "app_store"
        }
      ];
  obj.subscriber.non_subscriptions[gn6] = [
        {
          "store_transaction_id" : "450001235123456",
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "688fek593c3e1eb357c2c111",
          "price" : {
            "amount" : 149,
            "currency" : "CNY"
          },
          "country" : "CN",
          "app_type" : "ios",
          "display_name" : "com.goodnotes.gn6_one_time_unlock_3499",
          "original_purchase_date" : "2023-08-31T03:19:04Z",
          "purchase_date" : "2023-08-31T03:19:04Z",
          "store" : "app_store"
        }
      ];
  obj.subscriber.entitlements["apple_access"] = modData6;
  obj.subscriber.entitlements["apple_access"].product_identifier = gn6;
  obj.subscriber.entitlements["crossplatform_access"] = modData6;
  obj.subscriber.entitlements["crossplatform_access"].product_identifier = gn6;
  obj.subscriber.entitlements["gn5"] = modData5;
  obj.subscriber.entitlements["gn5"].product_identifier = gt5;
  body.body = JSON.stringify(obj);
}

$done(body);
