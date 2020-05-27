///<reference path="../../mvc/facade/Facade.ts"/>

import Facade = game.Facade;

//
// 模块扩展
// @author wizardc
//

declare module game {
    interface Facade {
        /**
         * 打开指定模块
         */
        addModule(moduleID: ModuleID, moduleVO?: ModuleVO, ...moduleData): void;

        /**
         * 关闭指定模块
         */
        removeModule(moduleID: ModuleID): void;
    }
}

(function() {
    let p;

    p = Facade.prototype;
    Object.defineProperties(p, {
        addModule: {
            value: function (moduleID: game.ModuleID, moduleVO?: game.ModuleVO, ...moduleData) {
                game.ModuleManager.addModule(moduleID, moduleVO, ...moduleData);
            },
            enumerable: false
        },
        removeModule: {
            value: function (moduleID: game.ModuleID) {
                game.ModuleManager.removeModule(moduleID);
            },
            enumerable: false
        }
    });

})();
