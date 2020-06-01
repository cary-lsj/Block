var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    /**
     * 可注入类
     * @author wizardc
     */
    var InjectableObject = (function (_super) {
        __extends(InjectableObject, _super);
        function InjectableObject(defaultMap) {
            if (defaultMap === void 0) { defaultMap = true; }
            var _this = _super.call(this) || this;
            _this._facade = game.Facade.instance;
            if (defaultMap) {
                _this.map();
            }
            return _this;
        }
        InjectableObject.prototype.map = function () {
            var al = game.$facade.addListener.bind(game.$facade);
            var interestNotifyList = this.__interestNotifyList;
            for (var notifyName in interestNotifyList) {
                var callbackList = interestNotifyList[notifyName];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    al(notifyName, callback, this);
                }
            }
        };
        InjectableObject.prototype.unmap = function () {
            var rl = game.$facade.removeListener.bind(game.$facade);
            var interestNotifyList = this.__interestNotifyList;
            for (var notifyName in interestNotifyList) {
                var callbackList = interestNotifyList[notifyName];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    rl(notifyName, callback, this);
                }
            }
        };
        return InjectableObject;
    }(game.Notifier));
    game.InjectableObject = InjectableObject;
    __reflect(InjectableObject.prototype, "game.InjectableObject");
})(game || (game = {}));
