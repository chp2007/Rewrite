const body = {};
const obj = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "pixelmator_photo_pro_access";
const pt = "pixelmator_photo_lifetime_v1_pro_offer";

  
if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  body.headers = $request.headers;
} else if (obj && obj.subscriber) {
  data = {
 "expires_date": "2099-09-09T09:09:09Z",
 "purchase_date": "2022-09-09T09:09:09Z"
 };
  obj.subscriber.subscriptions[(pt)] = {
 "original_purchase_date": "2022-09-09T09:09:09Z",
 "period_type" : "1",
 "purchase_date": "2022-09-09T09:09:09Z",
 "expires_date": "2099-09-09T09:09:09Z",
 "store" : "app_store",
 "ownership_type": "PURCHASED"
 };
  obj.subscriber.entitlements[(name)] = JSON.parse(JSON.stringify(data));
  obj.subscriber.entitlements[(name)].product_identifier = (pt);
  body.body = JSON.stringify(obj);
}

$done(body);
