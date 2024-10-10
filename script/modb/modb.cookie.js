/*
 * @Name: modb.cookie.js
 * @Author: John Wong <john-wong@outlook.com>
 * @Date: 2024-05-30 08:43:50
 * @LastEditors: John Wong <john-wong@outlook.com>
 * @LastEditTime: 2024-06-20 08:56:55
 * @Desc: 获取墨天轮 Cookie
 * @Version: v0.1
 */
const cookieName = "墨天轮";
const authorizationKey = "qx_modb_authorization";
const cookieKey = "qx_modb_cookie";

// const cookieVal = JSON.stringify($request.headers)
const requestHeaders = $request.headers;
const authorizationVal = requestHeaders["Authorization"];
const cookieVal = requestHeaders["Cookie"];

if (authorizationVal && cookieVal) {
  $prefs.setValueForKey(authorizationVal, authorizationKey);
  $prefs.setValueForKey(cookieVal, cookieKey);
  $notify(`${cookieName}`, "获取Cookie: 成功", "");
  console.log(
    `[${cookieName}] 获取Cookie: 成功, cookie: ${cookieVal}, autorization: ${authorizationVal}`
  );
} else {
  $notify(`${cookieName}`, "获取Cookie: 失败", "说明: 未知");
  console.log(
    `[${cookieName}] 获取Cookie: 失败, cookie: ${cookieVal}, autorization: ${authorizationVal}`
  );
}

$done()
