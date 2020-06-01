var game;
(function (game) {
    /**
     * 模块 ID
     * @author wizardc
     */
    var ModuleID;
    (function (ModuleID) {
        /** 测试 */
        ModuleID[ModuleID["test"] = 0] = "test";
        /**  场景 */
        ModuleID[ModuleID["scene"] = 1] = "scene";
        /**  游戏主场景 */
        ModuleID[ModuleID["main"] = 2] = "main";
        /** 菜单 */
        ModuleID[ModuleID["menu"] = 3] = "menu";
        /** 关卡 */
        ModuleID[ModuleID["port"] = 4] = "port";
        /** 排行榜 */
        ModuleID[ModuleID["rank"] = 5] = "rank";
        /** 胜利 */
        ModuleID[ModuleID["win"] = 6] = "win";
        /** 皮一下 */
        ModuleID[ModuleID["humor"] = 7] = "humor";
        /** 广告 */
        ModuleID[ModuleID["ad"] = 8] = "ad";
        /** 对战房间 */
        ModuleID[ModuleID["room"] = 9] = "room";
        /**对战游戏主场景 */
        ModuleID[ModuleID["pkmain"] = 10] = "pkmain";
        /**对战胜利 */
        ModuleID[ModuleID["pkwin"] = 11] = "pkwin";
        /**对战失败 */
        ModuleID[ModuleID["pklose"] = 12] = "pklose";
        /**商店 */
        ModuleID[ModuleID["shop"] = 13] = "shop";
        /** 登录 */
        ModuleID[ModuleID["login"] = 14] = "login";
        /** 工具 */
        ModuleID[ModuleID["tool"] = 15] = "tool";
        /**消息提示弹窗*/
        ModuleID[ModuleID["msg"] = 16] = "msg";
    })(ModuleID = game.ModuleID || (game.ModuleID = {}));
})(game || (game = {}));
