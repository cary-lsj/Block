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
     * 关卡代理
     */
    var PortProxy = (function (_super) {
        __extends(PortProxy, _super);
        function PortProxy() {
            return _super.call(this, 2 /* port */) || this;
        }
        return PortProxy;
    }(game.ProxyBase));
    game.PortProxy = PortProxy;
    __reflect(PortProxy.prototype, "game.PortProxy");
})(game || (game = {}));
