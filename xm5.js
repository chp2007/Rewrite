
var chxm1023 = JSON.parse($response.body);
const vip = /https:\/\/www\.xmind\.cn\/_res\/devices/;
const active = /https:\/\/www\.xmind\.cn\/_api\/appstore\/active/;
const profile = /https:\/\/www\.xmind\.cn\/_res\/profile\/.+/;

if (vip.test($request.url)) {
    chxm1023 = {
      "license" : {
        "status" : "sub",
        "expireTime" : 4092599349000
      },
      "_code" : 200,
  "raw_data" : "GfxYgAqnrQ\/ggD9UwqnZyAj6FKnopXzM8s5m3eZLOsmVr4FwCzv41qTmgi\/u72cv+jpaAoljaEPti1twzOS7X7KUPY1KNJ2xalbS7SXbvFHSvs21QXjaUtIOkeJWAl4\/vHl4IvMeHTBVqD8mFCXOmvnBPLRMAJEPgHEJYF1InvQ="
};
}

if (active.test($request.url)) {
    chxm1023 = {
        "status" : "sub",
        "expireTime" : 4092599349000,
        "bindXmind" : 1,
        "_code" : 200};
}

if (profile.test($request.url)) {
    chxm1023 = {
  "sub" : {
    "bundle" : {
      "status" : "sub",
      "autorenewable" : 1,
      "bind_version" : "bundle",
      "expireTime" : 4092599349000,
      "autorenew_month" : 12
    }
  },
      "_code" : 200};
}

$done({body : JSON.stringify(chxm1023)});
