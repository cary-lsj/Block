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
     * 关卡界面
     */
    var PortFullWindow = (function (_super) {
        __extends(PortFullWindow, _super);
        function PortFullWindow() {
            var _this = _super.call(this, "gameSkin.PortSkin") || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        PortFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        PortFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.list_port.dataProvider = this._listData;
            this.list_port.itemRenderer = game.PortBtnItem;
            this.btn_back.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
            this.btn_exit.on(egret.TouchEvent.TOUCH_TAP, this.onExitClick, this);
        };
        PortFullWindow.prototype.onBackClick = function (e) {
            this.dispatch(2 /* clickBack */, true);
        };
        PortFullWindow.prototype.onExitClick = function (e) {
            this.dispatch(4 /* clickExit */, true);
        };
        PortFullWindow.prototype.update = function (data) {
            this._listData.source = data;
            this._listData.refresh();
        };
        return PortFullWindow;
    }(game.FullWindowBase));
    game.PortFullWindow = PortFullWindow;
    __reflect(PortFullWindow.prototype, "game.PortFullWindow");
})(game || (game = {}));
