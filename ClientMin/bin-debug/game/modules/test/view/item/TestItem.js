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
     * 测试 item
     */
    var TestItem = (function (_super) {
        __extends(TestItem, _super);
        function TestItem() {
            return _super.call(this) || this;
        }
        TestItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        TestItem.prototype.dataChanged = function () {
            var data = this.data;
            this.txt_name.text = "第" + data["name"] + "关";
        };
        return TestItem;
    }(eui.ItemRenderer));
    game.TestItem = TestItem;
    __reflect(TestItem.prototype, "game.TestItem");
})(game || (game = {}));
