# 鉴于DivineEngine大佬删库，本人在模块中需要使用该重写，故进行了Copy，在此表示感谢。如需删除，请联系我

let body = $request.body;

body = body.replace(/&sim_code=\d+/,"&sim_code=51503");
body = body.replace(/&locale=zh_CN/,"&locale=zh_PH");
body = body.replace(/&s_locale=zh-Hans_[A-Z]{2}/,"&s_locale=zh-Hans_PH");

console.log(body)

$done({body});