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
    var PortBtnItem = (function (_super) {
        __extends(PortBtnItem, _super);
        function PortBtnItem() {
            var _this = _super.call(this) || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        PortBtnItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_start.on(egret.TouchEvent.TOUCH_TAP, this.onStartClick, this);
            this.list_star.dataProvider = this._listData;
            this.list_star.itemRenderer = game.StarsItem;
        };
        PortBtnItem.prototype.onStartClick = function (e) {
            this.dispatch(1 /* clickStart */, true, this.data.id);
        };
        PortBtnItem.prototype.dataChanged = function () {
            var data = this.data;
            var stanum = data.state;
            this.bml_num.text = "" + data.id;
            this.bml_num2.text = "" + data.id;
            this.updateState(data.state);
            this.updateStartNum(data.starNum);
        };
        PortBtnItem.prototype.updateState = function (state) {
            switch (state) {
                case 0 /* lock */:
                    this.currentState = "lock";
                    break;
                case 1 /* unlocked */:
                    this.currentState = "unlocked";
                    break;
            }
        };
        PortBtnItem.prototype.updateStartNum = function (num) {
            var list = [];
            for (var i = 1; i <= 3; i++) {
                if (i <= num) {
                    list.push(0 /* owen */);
                }
                else {
                    list.push(1 /* unowen */);
                }
            }
            this.updateStar(list);
        };
        PortBtnItem.prototype.updateStar = function (data) {
            this._listData.source = data;
            this._listData.refresh();
        };
        return PortBtnItem;
    }(eui.ItemRenderer));
    game.PortBtnItem = PortBtnItem;
    __reflect(PortBtnItem.prototype, "game.PortBtnItem");
})(game || (game = {}));
