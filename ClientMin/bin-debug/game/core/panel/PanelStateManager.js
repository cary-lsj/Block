var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 面板状态管理器
     * @author wizardc
     */
    var PanelStateManager = (function () {
        function PanelStateManager() {
            this._targetMap = new game.Dictionary();
        }
        Object.defineProperty(PanelStateManager, "instance", {
            get: function () {
                return PanelStateManager._instance || (PanelStateManager._instance = new PanelStateManager());
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PanelStateManager.prototype, "state", {
            get: function () {
                return this._state;
            },
            set: function (value) {
                var _this = this;
                if (this._state == value) {
                    return;
                }
                this._state = value;
                this._targetMap.forEach(function (value, key) {
                    _this.checkVisible(key, value);
                });
            },
            enumerable: true,
            configurable: true
        });
        PanelStateManager.prototype.includeIn = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var state = game.recyclable(PanelState);
            state.isIncludIn = true;
            state.list = args;
            this._targetMap.add(target, state);
            this.checkVisible(target, state);
        };
        PanelStateManager.prototype.includeOut = function (target) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var state = game.recyclable(PanelState);
            state.isIncludIn = false;
            state.list = args;
            this._targetMap.add(target, state);
            this.checkVisible(target, state);
        };
        PanelStateManager.prototype.checkVisible = function (target, state) {
            if (isNaN(this._state)) {
                target.visible = true;
                return;
            }
            target.visible = state.getVisible(this._state);
        };
        PanelStateManager.prototype.targetRemoved = function (target) {
            var state = this._targetMap.get(target);
            if (state) {
                this._targetMap.remove(target);
                state.recycle();
                target.visible = true;
            }
        };
        return PanelStateManager;
    }());
    game.PanelStateManager = PanelStateManager;
    __reflect(PanelStateManager.prototype, "game.PanelStateManager");
    var PanelState = (function () {
        function PanelState() {
        }
        PanelState.prototype.getVisible = function (state) {
            var hasState = this.list.indexOf(state) != -1;
            if (this.isIncludIn) {
                return hasState;
            }
            return !hasState;
        };
        PanelState.prototype.onRecycle = function () {
            this.isIncludIn = undefined;
            this.list = undefined;
        };
        return PanelState;
    }());
    __reflect(PanelState.prototype, "PanelState", ["game.ICacheable"]);
})(game || (game = {}));
