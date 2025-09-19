const body = {};
const obj = JSON.parse((typeof $response !== "undefined" && $response.body) || null);
const gn6 = "com.goodnotes.gn6_one_time_unlock_3999";
const gt5 = "com.goodnotes.one_time_unlock";
const modData6 = {
        "grace_period_expires_date" : null,
        "plan_key" : "premium",
        "purchase_date" : "2025-07-02T23:29:17Z",
        "expires_date" : null
 };
const modData5 = {
        "grace_period_expires_date" : null,
        "purchase_date" : "2023-07-30T09:45:04Z",
        "expires_date" : null
 };

if (typeof $response === "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  obj.subscriber.non_subscriptions[gn6] = [
        {
          "store_transaction_id" : "347952567903567",
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "6389e7cfd4cd63467y0e65c8",
          "price" : {
            "amount" : 149,
            "currency" : "CNY"
          },
          "country" : "CN",
          "app_type" : "ios",
          "display_name" : "com.goodnotes.gn6_one_time_unlock_3999",
          "original_purchase_date" : "2025-07-02T23:29:17Z",
          "purchase_date" : "2025-07-02T23:29:17Z",
          "store" : "app_store"
        }
      ];
  obj.subscriber.non_subscriptions[gt5] = [
        {
          "store_transaction_id" : "360001532673101",
          "is_sandbox" : false,
          "ownership_type" : "PURCHASED",
          "id" : "68a1c3dbbaf8707c0415ec9b",
          "price" : {
            "amount" : 68,
            "currency" : "CNY"
          },
          "country" : "CN",
          "app_type" : "ios",
          "display_name" : "com.goodnotes.one_time_unlock",
          "original_purchase_date" : "2023-07-30T09:45:04Z",
          "purchase_date" : "2023-07-30T09:45:04Z",
          "store" : "app_store"
        }
      ];
  obj.subscriber.entitlements["apple_access"] = modData6;
  obj.subscriber.entitlements["apple_access"].product_identifier = gn6;
  obj.subscriber.entitlements["gn5"] = modData5;
  obj.subscriber.entitlements["gn5"].product_identifier = gt5;
  obj.subscriber.entitlements["crossplatform_access"] = modData6;
  obj.subscriber.entitlements["crossplatform_access"].product_identifier = gn6;
  body.body = JSON.stringify(obj);
}

$done(body);
