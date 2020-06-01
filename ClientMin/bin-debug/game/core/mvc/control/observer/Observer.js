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
     * 一个简单的观察者
     * @author wizardc
     */
    var Observer = (function (_super) {
        __extends(Observer, _super);
        function Observer() {
            return _super.call(this) || this;
        }
        Observer.prototype.addListener = function (notifyName, callback, thisObj) {
            game.Provider.instance.addListener(notifyName, callback, thisObj);
        };
        Observer.prototype.removeListener = function (notifyName, callback, thisObj) {
            game.Provider.instance.removeListener(notifyName, callback, thisObj);
        };
        return Observer;
    }(game.Notifier));
    game.Observer = Observer;
    __reflect(Observer.prototype, "game.Observer", ["game.IObserver"]);
})(game || (game = {}));
