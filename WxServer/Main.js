const http = require("http");
const https = require("https");
const url = require("url");
const queryString = require("querystring");
const fs = require('fs');
const path = require('path');

const port = 8080;
https.createServer(
    {
        key: fs.readFileSync("www.cxagile.cn.key"),
        cert: fs.readFileSync("www.cxagile.cn.crt")
    },
    (clienReq, clienRes) => {

        clienRes.setHeader("Access-Control-Allow-Origin", "*");
        let methods = clienReq.method;
        if (methods == "GET") {
            let params = url.parse(clienReq.url, true, true);
            clienRes.end("get")
        } else if (methods == "POST") {
            let clientDatas = "";
            clienReq.on("data", (chunk) => {
                clientDatas += chunk;
            })

            clienReq.on("end", () => {
                let postData = queryString.parse(clientDatas.toString());
                let appid = "wxbd314c0883b0c4ed";
                let secret = "ce6b4c9d14a50d3d11f7ae5262e73757";
                let code = postData.code.replace(/"/g, "");
                let url = "https://api.weixin.qq.com/sns/jscode2session?appid=" + appid + "&secret=" + secret + "&js_code=" + code + "&grant_type=authorization_code";
                https.get(url, (wxRes) => {
                    if (!wxRes.statusCode === 200) {
                        console.log("服务器连接失败");
                    }
                    // 用响应做些事情。
                    // chunk是16进制BUFFER数据，需要转成字符打印
                    var wxDatas = "";
                    wxRes.on("data", (chunk) => {
                        wxDatas += chunk;
                        console.log("微信服务器服务器返回：" + wxDatas);
                    });

                    //监听请求结束
                    wxRes.on("end", () => {
                        try {
                            let wxData = JSON.parse(wxDatas.toString());
                            clienRes.setHeader("content-type", "text/html;charset=UTF-8")
                            clienRes.end(wxDatas);
                        } catch (e) {
                            console.log(e);
                        }
                    });
                });
            })
        }

    }).listen(port, () => {
        console.log("开始监听端口：" + port);
    })

