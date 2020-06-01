var game;
(function (game) {
    /** 报错列表 */
    game.errorList = [];
    /**
     * 全局类
     * @author wizardc
     */
    var Global;
    (function (Global) {
        function init(stage) {
            game.$stage = stage;
            game.$facade = game.Facade.instance;
            game.$clock = game.Clock.instance;
            game.$userData = game.UserData.instance;
            game.$singlon = game.getSinglon;
            game.GlobalInfo.init();
            game.deployPool(egret.Bitmap, 100);
            game.deployPool(eui.Image, 100);
            stage.on(egret.Event.RESIZE, function () {
                game.$facade.dispatch(0 /* stageResize */);
            }, this);
            stage.on(egret.Event.ENTER_FRAME, function () {
                game.GameTime.tick();
            }, this);
            // 报错捕捉
            var $update = egret.ticker.update;
            egret.ticker.update = function () {
                try {
                    $update.call(egret.ticker);
                }
                catch (error) {
                    var msgStr = JSON.stringify({ name: error.name, msg: error.message, stack: error.stack });
                    if (game.errorList.indexOf(msgStr) == -1) {
                        game.errorList.push(msgStr);
                        if (true) {
                            // window.alert(msgStr);
                        }
                        if (false) {
                            // TODO : 上报
                        }
                        throw error;
                    }
                }
            };
            window.onerror = function (msg, url, lineNo, columnNo, error) {
                var msgStr = JSON.stringify({ msg: msg, url: url, lineNo: lineNo, columnNo: columnNo, error: error });
                if (game.errorList.indexOf(msgStr) == -1) {
                    game.errorList.push(msgStr);
                    if (true) {
                        // window.alert(msgStr);
                    }
                    if (false) {
                        // TODO : 上报
                    }
                }
            };
            window.addEventListener("unhandledrejection", function (event) {
                var msgStr = "Uncaught (in promise) Error: " + event.reason;
                if (game.errorList.indexOf(msgStr) == -1) {
                    game.errorList.push(msgStr);
                    if (true) {
                        // window.alert(msgStr);
                    }
                    if (false) {
                        // TODO : 上报
                    }
                }
            });
            // 屏蔽声音解码报错的弹出提示
            var alert = window.alert;
            if (alert) {
                window.alert = function (str) {
                    if (str && /sound decode error:/.test(str)) {
                        if (true) {
                            // window.alert(str);
                        }
                        if (false) {
                            // TODO : 上报
                        }
                    }
                    else {
                        alert(str);
                    }
                };
            }
        }
        Global.init = init;
    })(Global = game.Global || (game.Global = {}));
})(game || (game = {}));
