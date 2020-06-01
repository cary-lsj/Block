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
     * 小方块 地图 item
     */
    var MapMoodItem = (function (_super) {
        __extends(MapMoodItem, _super);
        function MapMoodItem() {
            var _this = _super.call(this) || this;
            _this._isDown = false;
            return _this;
        }
        MapMoodItem.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.on(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginHadler, this);
            this.on(egret.TouchEvent.TOUCH_END, this.onTouchEndHadler, this);
            this.on(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEndHadler, this);
            this.on(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHadler, this);
        };
        //木块初始化
        MapMoodItem.prototype.initmapMood = function (x, y) {
            this.startX = x;
            this.startY = y;
            this.scaleX = 0.6;
            this.scaleY = 0.6;
        };
        MapMoodItem.prototype.dataChanged = function () {
            _super.prototype.dataChanged.call(this);
        };
        MapMoodItem.prototype.onTouchTapHadler = function (e) {
            this.dispatch(7 /* endMood */, true);
        };
        MapMoodItem.prototype.onTouchBeginHadler = function (e) {
            this._isDown = true;
            var point = new egret.Point(e.stageX, e.stageY);
            this.dispatch(6 /* beginMood */, true, point);
            //计算手指和按钮的距离
            this._OffsetX = e.stageX - this.x;
            this._OffsetY = e.stageY - this.y;
            game.$stage.on(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveHadler, this);
            this.on(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);
            egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 50, egret.Ease.sineIn);
        };
        MapMoodItem.prototype.onTouchMoveHadler = function (e) {
            this.x = e.stageX - this._OffsetX;
            this.y = e.stageY - this._OffsetY;
            this.dispatch(10 /* removeKeymood */, true);
            this.off(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHadler, this);
        };
        MapMoodItem.prototype.onTouchEndHadler = function (e) {
            if (this._isDown) {
                this._isDown = false;
                //手指离开屏幕，移除手指移动的监听
                game.$stage.off(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveHadler, this);
                this.dispatch(7 /* endMood */, true);
            }
        };
        MapMoodItem.prototype.onTouchTap = function () {
            // console.log("点击次数过多！");
        };
        //移除场景地图中的方块地图数据
        MapMoodItem.prototype.removemood = function () {
            var vo = this.data;
            this.dispatch(2 /* removeMood */, true, vo);
        };
        //木块返回原位
        MapMoodItem.prototype.restart = function () {
            egret.Tween.get(this).to({ x: this.startX, y: this.startY, scaleX: 0.6, scaleY: 0.6 }, 500, egret.Ease.backInOut).call(this.rechindex, this);
            var vo = this.data;
            this.dispatch(9 /* initPos */, true, vo);
        };
        MapMoodItem.prototype.rechindex = function () {
            if (this.index == null) {
                return;
            }
            this.dispatch(11 /* rechildindex */, true);
        };
        //修改场景地图数据，检查是否完成对局
        MapMoodItem.prototype.modifymapdata = function (vo) {
            this.dispatch(1 /* addMood */, true, vo);
        };
        return MapMoodItem;
    }(game.MoodBase));
    game.MapMoodItem = MapMoodItem;
    __reflect(MapMoodItem.prototype, "game.MapMoodItem");
})(game || (game = {}));
