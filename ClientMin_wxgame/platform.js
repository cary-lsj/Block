/**
 * 请在白鹭引擎的Main.ts中调用 platform.login() 方法调用至此处。
 */

class WxgamePlatform {

    login() {
        return new Promise((resolve, reject) => {
            wx.login({
                success: function (res) {
                    var code = '';
                    code = res.code;
                    wx.request({
                        url: js_gameConfig.serverUrl,
                        method: "POST",
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        data: {
                            code: code
                        },
                        success: function (res) {
                            if (res.statusCode == 200) {
                                var data = res.data
                                resolve(data.openid);
                            }
                        },
                        fail: function (res) {
                            resolve("login error");
                        }
                    })
                }
            })
        })
    }


    getUserInfo() {
        return new Promise((resolve, reject) => {
            wx.getUserInfo({
                withCredentials: true,
                success: function (res) {
                    resolve(res.userInfo);
                },
                fail: function (res) {
                    resolve();
                }
            })
        })
    }
    share() {
        return new Promise((resolve, reject) => {
            wx.shareAppMessage({
                title: '来和我一起探索海洋砖块',
                imageUrlId: "WUxTzsl2Rl+yMPc/eNcnDg==",
                imageUrl: "https://mmocgame.qpic.cn/wechatgame/V5B1LvusacibqDG8eHVylJJMjl3fswGN3qxGnCe908oiaxtib7OprD1iaatG6Km7vF2N/0"
            })
        })
    }

    showRank() {
        platform.openDataContext.createDisplayObject(0, 550, 600);
        platform.openDataContext.postMessage({ command: "loadRes" });
        platform.openDataContext.postMessage({ command: "open" });
    }

    setKVData(data) {
        return new Promise((resolve, reject) => {
            var datalist = [];
            for (let key in data) {
                datalist.push({ key: key, value: data[key] + "" });
            }
            wx.setUserCloudStorage({
                KVDataList: datalist,
                success: (res) => {
                    resolve(res);
                },
                fail: (err) => {
                    reject(err);
                }
            });
        });
    }
}

class WxgameOpenDataContext {

    createDisplayObject(type, width, height) {
        const bitmapdata = new egret.BitmapData(sharedCanvas);
        bitmapdata.$deleteSource = false;
        const texture = new egret.Texture();
        texture._setBitmapData(bitmapdata);
        const bitmap = new egret.Bitmap(texture);
        bitmap.width = width;
        bitmap.height = height;

        if (egret.Capabilities.renderMode == "webgl") {
            const renderContext = egret.wxgame.WebGLRenderContext.getInstance();
            const context = renderContext.context;
            ////需要用到最新的微信版本
            ////调用其接口WebGLRenderingContext.wxBindCanvasTexture(number texture, Canvas canvas)
            ////如果没有该接口，会进行如下处理，保证画面渲染正确，但会占用内存。
            if (!context.wxBindCanvasTexture) {
                egret.startTick((timeStarmp) => {
                    egret.WebGLUtils.deleteWebGLTexture(bitmapdata.webGLTexture);
                    bitmapdata.webGLTexture = null;
                    return false;
                }, this);
            }
        }
        return bitmap;
    }


    postMessage(data) {
        const openDataContext = wx.getOpenDataContext();
        openDataContext.postMessage(data);
    }
}

WxgamePlatform.prototype.name = 'wxgame';
WxgamePlatform.prototype.openDataContext = new WxgameOpenDataContext();

window.platform = new WxgamePlatform();