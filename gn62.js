const chxm1023 = {};
const chxm1024 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const namea = "apple_access";
const nameb = "crossplatform_access";
const jsid = "com.goodnotes.gn6_one_time_unlock_3999";


if (typeof $response == "undefined") {
    delete $request.headers["x-revenuecat-etag"];
    delete $request.headers["X-RevenueCat-ETag"];
    chxm1023.headers = $request.headers;
} else if (chxm1024 && chxm1024.subscriber) {
    data = {
        "purchase_date": "2023-08-10T09:09:09Z"
    };
    chxm1024.subscriber.subscriptions[(jsid)] = {
        "is_sandbox":false,
        "original_purchase_date": "2023-08-10T09:09:09Z",
        "purchase_date": "2023-08-10T09:09:09Z",
        "store": "app_store",
        "ownership_type": "PURCHASED"
    };
    chxm1024.subscriber.entitlements[(namea)] = JSON.parse(JSON.stringify(data));
    chxm1024.subscriber.entitlements[(nameb)] = JSON.parse(JSON.stringify(data));
    chxm1024.subscriber.entitlements[(namea)].product_identifier = (jsid);
    chxm1024.subscriber.entitlements[(nameb)].product_identifier = (jsid);
    chxm1023.body = JSON.stringify(chxm1024);
}

$done(chxm1023);
