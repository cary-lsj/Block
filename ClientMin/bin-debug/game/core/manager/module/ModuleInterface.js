var game;
(function (game) {
    /**
     * 注入需要释放的 UI 资源组名称, 只能在实现 IModuleView 接口的类上使用
     */
    function ReleaseRes(policy) {
        var resNames = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            resNames[_i - 1] = arguments[_i];
        }
        return function (constructor) {
            constructor.__resPolicy = policy;
            if (resNames && resNames.length > 0) {
                var list = constructor.__releaseResList;
                if (!list) {
                    constructor.__releaseResList = list = [];
                }
                for (var _i = 0, resNames_1 = resNames; _i < resNames_1.length; _i++) {
                    var resName = resNames_1[_i];
                    if (list.indexOf(resName) == -1) {
                        list.push(resName);
                    }
                }
            }
        };
    }
    game.ReleaseRes = ReleaseRes;
})(game || (game = {}));
