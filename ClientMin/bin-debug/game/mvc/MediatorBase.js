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
     * 中介基类, 抽一层出来处理非 MVC 功能的逻辑
     * @author wizardc
     */
    var MediatorBase = (function (_super) {
        __extends(MediatorBase, _super);
        function MediatorBase() {
            var _this = _super.call(this) || this;
            _this._panelState = game.PanelStateManager.instance;
            return _this;
        }
        MediatorBase.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
        };
        // protected includeIn(...args: MapType[]): void {
        //     this._panelState.includeIn(this._view, ...args);
        // }
        // protected includeOut(...args: MapType[]): void {
        //     this._panelState.includeOut(this._view, ...args);
        // }
        MediatorBase.prototype.onRemove = function () {
            _super.prototype.onRemove.call(this);
            this._panelState.targetRemoved(this._view);
        };
        return MediatorBase;
    }(game.AbstractMediator));
    game.MediatorBase = MediatorBase;
    __reflect(MediatorBase.prototype, "game.MediatorBase");
})(game || (game = {}));
