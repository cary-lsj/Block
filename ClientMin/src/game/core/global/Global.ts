namespace game {
    /** 舞台 */
    export var $stage: egret.Stage;
    /** MVC 快速访问 */
    export var $facade: Facade;
    /** 时钟 */
    export var $clock: Clock;
    /** 用户数据 */
    export var $userData: UserData;
    /** 取单例 */
    export var $singlon: <T>(clazz: { new(): T, __instance?: T }) => T;
    /** 获取 HTML 格式文本 */
    export var $parseHtml: (htmltext: string) => egret.ITextElement[];
    /** 报错列表 */
    export var errorList: string[] = [];

    /**
     * 全局类
     * @author cary
     */
    export namespace Global {
        export function init(stage: egret.Stage): void {

            $stage = stage;
            $facade = Facade.instance;
            $clock = Clock.instance;
            $userData = UserData.instance;
            $singlon = getSinglon;
            GlobalInfo.init();
            deployPool(egret.Bitmap, 100);
            deployPool(eui.Image, 100);

            stage.on(egret.Event.RESIZE, () => {
                $facade.dispatch(NotifyConst.stageResize);
            }, this);

            stage.on(egret.Event.ENTER_FRAME, () => {
                GameTime.tick();
            }, this);

            // 报错捕捉
            let $update = egret.ticker.update;
            egret.ticker.update = () => {
                try {
                    $update.call(egret.ticker);
                } catch (error) {
                    let msgStr = JSON.stringify({ name: error.name, msg: error.message, stack: error.stack });
                    if (errorList.indexOf(msgStr) == -1) {
                        errorList.push(msgStr);
                        if (DEBUG) {
                            // window.alert(msgStr);
                        }
                        if (RELEASE) {
                            // TODO : 上报
                        }
                        throw error;
                    }
                }
            };
            window.onerror = (msg, url, lineNo, columnNo, error) => {
                let msgStr = JSON.stringify({ msg, url, lineNo, columnNo, error });
                if (errorList.indexOf(msgStr) == -1) {
                    errorList.push(msgStr);
                    if (DEBUG) {
                        // window.alert(msgStr);
                    }
                    if (RELEASE) {
                        // TODO : 上报
                    }
                }
            };
            window.addEventListener("unhandledrejection", event => {
                let msgStr = "Uncaught (in promise) Error: " + (<any>event).reason;
                if (errorList.indexOf(msgStr) == -1) {
                    errorList.push(msgStr);
                    if (DEBUG) {
                        // window.alert(msgStr);
                    }
                    if (RELEASE) {
                        // TODO : 上报
                    }
                }
            });

            // 屏蔽声音解码报错的弹出提示
            let alert = window.alert;
            if (alert) {
                window.alert = (str: string) => {
                    if (str && /sound decode error:/.test(str)) {
                        if (DEBUG) {
                            // window.alert(str);
                        }
                        if (RELEASE) {
                            // TODO : 上报
                        }
                    } else {
                        alert(str);
                    }
                };
            }
        }
    }
}
