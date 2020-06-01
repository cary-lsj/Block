///<reference path="../../mvc/facade/Facade.ts"/>
var Facade = game.Facade;
(function () {
    var p;
    p = Facade.prototype;
    Object.defineProperties(p, {
        addModule: {
            value: function (moduleID, moduleVO) {
                var moduleData = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    moduleData[_i - 2] = arguments[_i];
                }
                (_a = game.ModuleManager).addModule.apply(_a, [moduleID, moduleVO].concat(moduleData));
                var _a;
            },
            enumerable: false
        },
        removeModule: {
            value: function (moduleID) {
                game.ModuleManager.removeModule(moduleID);
            },
            enumerable: false
        }
    });
})();
