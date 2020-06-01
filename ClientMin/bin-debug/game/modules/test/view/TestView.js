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
     * 测试界面
     */
    var TestView = (function (_super) {
        __extends(TestView, _super);
        function TestView() {
            var _this = _super.call(this) || this;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        Object.defineProperty(TestView.prototype, "layer", {
            get: function () {
                return 4 /* fullWindowLayer */;
            },
            enumerable: true,
            configurable: true
        });
        TestView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_click.on(egret.TouchEvent.TOUCH_TAP, this.onCLick, this);
            this.list_item.dataProvider = this._listData;
            this.list_item.itemRenderer = game.TestItem;
            this.item.data = { "name": 200 };
            this.itemcom.data = { "name": 500 };
        };
        TestView.prototype.onCLick = function (egret) {
            this.dispatch(0 /* click */);
        };
        TestView.prototype.setTxt = function (txt) {
            this.txt_label.text = txt;
        };
        TestView.prototype.refreshList = function (data) {
            this._listData.source = data;
            this._listData.refresh();
        };
        return TestView;
    }(eui.Component));
    game.TestView = TestView;
    __reflect(TestView.prototype, "game.TestView", ["game.IModuleView"]);
})(game || (game = {}));
