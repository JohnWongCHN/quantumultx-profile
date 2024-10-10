/*
 * @Name: modb_checkin_task
 * @Author: John Wong <john-wong@outlook.com>
 * @Date: 2024-05-30 08:42:46
 * @LastEditors: John Wong <john-wong@outlook.com>
 * @LastEditTime: 2024-06-20 09:09:56
 * @Desc: 墨天轮签到脚本，需要配合重写以获取 cookie
 * @Version: v0.1
 */

const url = 'https://www.modb.pro/api/user/checkIn';
const method = 'POST';
const authorizationKey = 'qx_modb_authorization';
const authorizationVal = $prefs.valueForKey(authorizationKey);
const cookieKey = 'qx_modb_cookie';
const cookieVal = $prefs.valueForKey(cookieKey);

const headers = {
  Authorization: authorizationVal,
  DNT: 1,
  Cookie: cookieVal,
  "User-Agent": "Apifox/1.0.0 (https: //apifox.com)",
  "Content-Type": "application/json;charset=UTF-8",
};

const myRequest = {
  url: url,
  method: method,
  headers: headers,
  body: "",
  redirect: 'follow'
};

setTimeout(function () {
  console.log("任务超时⏰：10s");
  $notify("墨天轮签到", "任务超时⏰", "10s");
  $done();
}, 10000);

$task.fetch(myRequest).then(
  (response) => {
    // response.statusCode, response.headers, response.body
    if (response.statusCode === 200 ) {
      body = JSON.parse(response.body);
      console.log(`签到成功🎉：${body.operateMessage}`);
      $notify("墨天轮签到", "签到成功🎉", body.operateMessage);
      $done();
    } else {
      body = JSON.parse(response.body);
      console.log(`签到失败😥：${body.operateMessage}`);
      $notify("墨天轮签到", "签到失败😥", body.operateMessage);
      $done();
    }
  },
  (reason) => {
    // reason.error
    $notify("墨天轮签到", "签到失败😥", reason.error); // Error!
    $done();
  },
  (error) => {
    console.log("error", error);
  },
);
