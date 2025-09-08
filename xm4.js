var chxm1023 = JSON.parse($response.body);
const vip = /https:\/\/www\.xmind\.cn\/_res\/devices/;

if (vip.test($request.url)) {
    chxm1023 = {
      "license" : {
        "status" : "sub",
        "expireTime" : 4092599349000
      },
      "_code" : 200,
      "raw_data" : "ZsZbGQIBXYN5o9XXh+6qGV9meueJYv6lQzAaqWP1xl7DL8xnP1sBEJia+ws9rW/nax4qVczmG9fy6BOzzR8lX/W8ZhvQVAvwOvIOkvjkbsNK9MP0YrrvEvvSMcJfPxmTa70LzXcSlWturHweqryIK6tJ5VKeqigTj3EN/LJJO5E="};
}

$done({body : JSON.stringify(chxm1023)});
