const body = {};
const obj = JSON.parse((typeof $response !== "undefined" && $response.body) || null);
const gn6 = "com.goodnotes.gn6_one_time_unlock_3799";
const modData6 = {
        "grace_period_expires_date" : null,
        "plan_key" : "premium",
        "purchase_date" : "2023-08-12T18:39:27Z",
        "expires_date" : null
 };

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.non_subscriptions[gn6] = [
        {
          "store_transaction_id" : "793452567123886",
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "688adw593c5e1eb797c2c456",
          "price" : {
            "amount" : 149,
            "currency" : "CNY"
          },
          "country" : "CN",
          "app_type" : "ios",
          "display_name" : "com.goodnotes.gn6_one_time_unlock_3799",
          "original_purchase_date" : "2023-08-12T18:39:27Z",
          "purchase_date" : "2023-08-12T18:39:27Z",
          "store" : "app_store"
        }
      ];
  obj.subscriber.entitlements["apple_access"] = modData6;
  obj.subscriber.entitlements["apple_access"].product_identifier = gn6;
  obj.subscriber.entitlements["crossplatform_access"] = modData6;
  obj.subscriber.entitlements["crossplatform_access"].product_identifier = gn6;
  body.body = JSON.stringify(obj);
}

$done(body);
