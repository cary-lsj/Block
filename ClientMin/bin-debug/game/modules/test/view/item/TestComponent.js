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
    var TestComponent = (function (_super) {
        __extends(TestComponent, _super);
        function TestComponent() {
            var _this = _super.call(this) || this;
            _this._invalidateDataFlag = false;
            return _this;
        }
        Object.defineProperty(TestComponent.prototype, "data", {
            get: function () {
                return this._data;
            },
            set: function (value) {
                this._data = value;
                this._invalidateDataFlag = true;
                this.invalidateProperties();
            },
            enumerable: true,
            configurable: true
        });
        TestComponent.prototype.commitProperties = function () {
            _super.prototype.commitProperties.call(this);
            if (this._invalidateDataFlag) {
                this._invalidateDataFlag = false;
                this.txt_name.text = "第" + this.data["name"] + "关";
            }
        };
        TestComponent.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
        };
        TestComponent.prototype.dataChanged = function () {
            var data = this.data;
            this.txt_name.text = "第" + data["name"] + "关";
        };
        return TestComponent;
    }(eui.Component));
    game.TestComponent = TestComponent;
    __reflect(TestComponent.prototype, "game.TestComponent");
})(game || (game = {}));
