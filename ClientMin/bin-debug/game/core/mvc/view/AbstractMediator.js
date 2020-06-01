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
     * 中介基类
     * @author wizardc
     */
    var AbstractMediator = (function (_super) {
        __extends(AbstractMediator, _super);
        function AbstractMediator() {
            var _this = _super.call(this) || this;
            _this._facade = game.Facade.instance;
            return _this;
        }
        Object.defineProperty(AbstractMediator.prototype, "view", {
            get: function () {
                return this._view;
            },
            set: function (value) {
                this._view = value;
            },
            enumerable: true,
            configurable: true
        });
        AbstractMediator.prototype.onRegister = function () {
            var al = this.addListener.bind(this);
            var interestNotifyList = this.__interestNotifyList;
            for (var notifyName in interestNotifyList) {
                var callbackList = interestNotifyList[notifyName];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    al(notifyName, callback, this);
                }
            }
            var ael = this._view.addEventListener.bind(this._view);
            var interestEventList = this.__interestEventList;
            for (var type in interestEventList) {
                var callbackList = interestEventList[type];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    ael(type, callback, this);
                }
            }
        };
        AbstractMediator.prototype.onRemove = function () {
            var rl = this.removeListener.bind(this);
            var interestNotifyList = this.__interestNotifyList;
            for (var notifyName in interestNotifyList) {
                var callbackList = interestNotifyList[notifyName];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    rl(notifyName, callback, this);
                }
            }
            var rel = this._view.removeEventListener.bind(this._view);
            var interestEventList = this.__interestEventList;
            for (var type in interestEventList) {
                var callbackList = interestEventList[type];
                for (var k in callbackList) {
                    var callback = callbackList[k];
                    rel(type, callback, this);
                }
            }
        };
        return AbstractMediator;
    }(game.Observer));
    game.AbstractMediator = AbstractMediator;
    __reflect(AbstractMediator.prototype, "game.AbstractMediator", ["game.IMediator"]);
    function InterestNotify(notifyName) {
        var n = String(notifyName);
        return function (target, propertyKey, descriptor) {
            if (!target.__interestNotifyList) {
                target.__interestNotifyList = {};
            }
            var map = target.__interestNotifyList;
            if (!map[n]) {
                map[n] = [];
            }
            var list = map[n];
            var func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }
    game.InterestNotify = InterestNotify;
    function InterestEvent(type) {
        return function (target, propertyKey, descriptor) {
            if (!target.__interestEventList) {
                target.__interestEventList = {};
            }
            var map = target.__interestEventList;
            if (!map[type]) {
                map[type] = [];
            }
            var list = map[type];
            var func = descriptor.value;
            if (list.indexOf(func) == -1) {
                list.push(func);
            }
        };
    }
    game.InterestEvent = InterestEvent;
})(game || (game = {}));
