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
     * 测试代理
     */
    var TestProxy = (function (_super) {
        __extends(TestProxy, _super);
        function TestProxy() {
            return _super.call(this, 0 /* test */) || this;
        }
        return TestProxy;
    }(game.ProxyBase));
    game.TestProxy = TestProxy;
    __reflect(TestProxy.prototype, "game.TestProxy");
})(game || (game = {}));
