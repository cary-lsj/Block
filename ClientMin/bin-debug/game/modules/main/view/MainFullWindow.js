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
     * 游戏主界面
     */
    var MainFullWindow = (function (_super) {
        __extends(MainFullWindow, _super);
        function MainFullWindow(test) {
            if (test === void 0) { test = "gameSkin.MainSkin"; }
            return _super.call(this, test) || this;
        }
        MainFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        MainFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.btn_menu.on(egret.TouchEvent.TOUCH_TAP, this.onMenuClick, this);
            this.btn_refresh.on(egret.TouchEvent.TOUCH_TAP, this.onRefreshClick, this);
            this.btn_key.on(egret.TouchEvent.TOUCH_TAP, this.onKeyClick, this);
            this.btn_key.group.addChild(this.keynum);
        };
        MainFullWindow.prototype.onMenuClick = function () {
            this.dispatch(4 /* clickMenu */, true);
        };
        MainFullWindow.prototype.onRefreshClick = function () {
            this.dispatch(3 /* clickRefresh */, true);
        };
        MainFullWindow.prototype.onKeyClick = function () {
            this.dispatch(8 /* clickKey */, true);
        };
        MainFullWindow.prototype.updateData = function (data) {
            var mapdata = this.map.data = data.GameMapVO.mapData;
            //map居中
            this.map.x = (this.width - this.map.width) / 2;
            this.map.y = this.height / 56 * 23 - (this.map.height / 2);
            this.map_rect.visible = false;
            this.refreshList(data.moodListVO);
        };
        //渲染木块
        MainFullWindow.prototype.refreshList = function (data) {
            //打乱木块顺序 保证渲染出来是随机的
            data.sort(function (a, b) { return Math.random() > .5 ? -1 : 1; });
            var starmoodx = this.getGenWidth(data);
            //遍历 保证所有的木块都能被渲染
            for (var i = 0; i < data.length; i++) {
                var vo = data[i];
                this.setcoloer(vo, i);
                //创建一个 木块对象
                var mood = this.refresh_mapmood(vo);
                // if (this._moodX > 540) {
                //     mood.x = starmoodx;
                //     starmoodx += (vo.colGrids + 1) * MapUtil.mapGridWidth * 0.7;
                //     mood.y = mood.y - 10 - vo.rowGrids * MapUtil.mapGridWidth * 0.7;
                // } else {
                //     mood.y = 750;
                //     mood.x = this._moodX;
                //     this._moodX += (vo.colGrids + 1) * MapUtil.mapGridWidth * 0.7;
                // }
                //设置木块位置信息
                mood.y = 750;
                mood.x = this._moodX;
                this._moodX += (vo.colGrids + 1) * game.MapUtil.mapGridWidth * 0.5;
                //木块初始化
                mood.initmapMood(mood.x, mood.y);
                //把木块添加到舞台上
                this.grp_mood.addChild(mood);
            }
        };
        MainFullWindow.prototype.setcoloer = function (vo, i) {
            if (i >= 0 && i < 6) {
                vo.type = i + 1;
            }
            else if (i < 12) {
                vo.type = i - 5;
            }
            else {
                console.log("颜色设置出错！");
            }
        };
        MainFullWindow.prototype.getGenWidth = function (data) {
            var scol = 0;
            for (var i = 0; i < data.length; i++) {
                var vo = data[i];
                scol += vo.colGrids + 1;
                if (scol > 25) {
                    scol -= vo.colGrids + 1;
                    //跳出循环
                    break;
                }
            }
            var swidth = (scol - 1) * game.MapUtil.mapGridWidth * 0.5;
            this._moodX = (this.width - swidth) / 2;
            return this._moodX;
        };
        MainFullWindow.prototype.refresh_mapmood = function (vo) {
            var mood = new game.MapMoodItem();
            mood.data = vo;
            this.dispatch(9 /* initPos */, true, vo);
            return mood;
        };
        MainFullWindow.prototype.refresh_keymood = function (vo) {
            var mood = new game.KeyMoodItem();
            mood.data = vo;
            return mood;
        };
        MainFullWindow.prototype.gameover = function () {
            this.map.removeChildren();
            this.grp_mood.removeChildren();
        };
        return MainFullWindow;
    }(game.FullWindowBase));
    game.MainFullWindow = MainFullWindow;
    __reflect(MainFullWindow.prototype, "game.MainFullWindow");
})(game || (game = {}));
