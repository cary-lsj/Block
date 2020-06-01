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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 游戏主场景中介
     */
    var MainMediator = (function (_super) {
        __extends(MainMediator, _super);
        function MainMediator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        MainMediator.prototype.onRegister = function () {
            this.useKey = 0;
            _super.prototype.onRegister.call(this);
            this.gameStart();
        };
        MainMediator.prototype.gameNext = function (e) {
            this.useKey = 0;
            var id = game.$userData.gamePortVO.playProId;
            var port = game.$userData.portList.getPort(id + 1);
            var gamePortVO = game.$userData.gamePortVO;
            gamePortVO.update(port);
            gamePortVO.playProId = id + 1;
            this._view.gameover();
            this.gameStart();
        };
        MainMediator.prototype.gameStart = function () {
            var mapData = game.$userData.gamePortVO;
            this._view.updateData(mapData);
            //启用开始协议
            this.model.gamebegin();
            this._view.starnum.text = game.$userData.portList.starNum;
        };
        MainMediator.prototype.updateKey = function () {
            this._view.keynum.text = game.$userData.portList.keyNum;
        };
        MainMediator.prototype.updateStar = function () {
            this._view.starnum.text = game.$userData.portList.starNum;
        };
        //修改游戏场景地图数据，并检测是否完成
        MainMediator.prototype.addMood = function (e) {
            var data = e.data;
            game.$userData.gamePortVO.GameMapVO.addMood(data);
            if (this.chechFillMap()) {
                game.SoundManager.getInstance().PlaySound(game.SoundManager.mWinAudioUrl);
                // SoundManager.getInstance().playWin();
                //启动结束协议
                this.model.gameend();
                this._view.map_rect.visible = true;
            }
        };
        //初始化木块坐标
        MainMediator.prototype.initPos = function (e) {
            var data = e.data;
            data.initPos();
        };
        MainMediator.prototype.removeMood = function (e) {
            var data = e.data;
            game.$userData.gamePortVO.GameMapVO.removeMood(data);
        };
        //检测游戏是否完成
        MainMediator.prototype.chechFillMap = function () {
            var map = game.$userData.gamePortVO.GameMapVO.map;
            var data = map.data;
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var i = data_1[_i];
                for (var _a = 0, i_1 = i; _a < i_1.length; _a++) {
                    var j = i_1[_a];
                    if (j == 3 /* null */) {
                        return false;
                    }
                }
            }
            return true;
        };
        //按下木块
        MainMediator.prototype.beginMood = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            var _mapmood = e.target;
            _mapmood.index = this._view.grp_mood.getChildIndex(_mapmood);
            //置于99层，因为达不到99层，所以置于最顶层
            this._view.grp_mood.setChildIndex(_mapmood, 99);
            var result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y <= game.$userData.gamePortVO.GameMapVO.map.rowGrids && result.x <= game.$userData.gamePortVO.GameMapVO.map.colGrids && result.y >= 0 && result.x >= 0) {
                _mapmood.removemood();
                return;
            }
        };
        //松开木块
        MainMediator.prototype.endMood = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mDropAudioUrl);
            var _mapmood = e.target;
            var vo = _mapmood.data;
            var result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y > game.$userData.gamePortVO.GameMapVO.map.rowGrids || result.x > game.$userData.gamePortVO.GameMapVO.map.colGrids || result.y < 0 || result.x < 0) {
                _mapmood.restart();
                return;
            }
            else {
                //格子起点为（1,1），所以需要加一
                vo.col = result.x + 1;
                vo.row = result.y + 1;
            }
            if (this.chechPlace(vo)) {
                //规整
                var posisint = { x: vo.col, y: vo.row };
                game.MapUtil.getPixel(posisint, _mapmood);
                _mapmood.x += this._view.map.x;
                _mapmood.y += this._view.map.y;
                _mapmood.modifymapdata(vo);
                _mapmood.rechindex();
                return;
            }
            else {
                _mapmood.restart();
                return;
            }
        };
        //恢复木块层级
        MainMediator.prototype.rechildindex = function (e) {
            var _mapmood = e.target;
            this._view.grp_mood.setChildIndex(_mapmood, _mapmood.index);
            _mapmood.index = null;
        };
        //将坐标转换成格子
        MainMediator.prototype.getlattice = function (x, y) {
            var _subx = x - this._view.map.x;
            var _suby = y - this._view.map.y;
            var point = new egret.Point(_subx, _suby);
            var result = game.MapUtil.getGrid(point);
            return result;
        };
        //将格子转换成全局坐标
        MainMediator.prototype.getOVPixel = function (col, row) {
            var point = new egret.Point(col, row);
            var result = game.MapUtil.getPixel(point);
            result.x += this._view.map.x;
            result.y += this._view.map.y;
            return result;
        };
        //检测是否能放下
        MainMediator.prototype.chechPlace = function (vo) {
            var map = vo.data;
            var gameMap = game.$userData.gamePortVO.GameMapVO.map.data;
            for (var i = 0; i < map.length; i++) {
                var n = i + vo.row - 1;
                var rowLine = map[i];
                for (var j = 0; j < rowLine.length; j++) {
                    var m = j + vo.col - 1;
                    var data = rowLine[j];
                    //gameMap[n][m]超出矩阵情况
                    if (n >= game.$userData.gamePortVO.GameMapVO.map.rowGrids || m >= game.$userData.gamePortVO.GameMapVO.map.colGrids) {
                        return false;
                    }
                    if (data == 1 /* full */ && gameMap[n][m] != 3 /* null */) {
                        return false;
                    }
                }
            }
            return true;
        };
        MainMediator.prototype.removeKeymood = function () {
            var numMood = this._view.grp_mood.numChildren;
            var numMapMood = game.$userData.gamePortVO.curPort.moodListVO.length;
            for (var i = 0; i < numMood - numMapMood; i++) {
                this._view.grp_mood.removeChildAt(numMapMood - 1);
            }
        };
        /** 监听 关卡 */
        MainMediator.prototype.clickMenu = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this._view.grp_mood.removeChildren();
            this._view.map.removeChildren();
            game.$facade.addModule(game.ModuleID.menu);
        };
        /** 监听 关闭到Google按钮 */
        MainMediator.prototype.clickRefresh = function (e) {
            // SoundManager.getInstance().playClick();
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.gameAgain();
        };
        /**监听 钥匙 */
        MainMediator.prototype.clickKey = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // this._view.btn_key.touchEnabled=false;
            var keynum = parseInt(game.$userData.portList.keyNum);
            if (keynum < 1) {
                console.log("提示机会不足！");
                return;
            }
            var port = game.$userData.gamePortVO.curPort;
            var mapmoodData = port.moodListVO;
            var key = 0; //记录值，点击一次只提示一个
            for (var i = this.useKey; i < mapmoodData.length; i++) {
                var map_mood = this._view.grp_mood.getChildAt(i);
                var result_px = this.getOVPixel(mapmoodData[i].col, mapmoodData[i].row);
                if (map_mood.data.col != mapmoodData[i].col || map_mood.data.row != mapmoodData[i].row) {
                    if (map_mood.data.col < port.mapVO.colGrids && map_mood.data.row < port.mapVO.rowGrids && map_mood.data.col > 0 && map_mood.data.row > 0) {
                        map_mood.removemood();
                        map_mood.restart();
                    }
                    if (key == 0) {
                        key = 1;
                        var mood = this._view.refresh_keymood(mapmoodData[i]);
                        mood.x = result_px.x;
                        mood.y = result_px.y;
                        this._view.grp_mood.addChild(mood);
                        this.useKey = i + 1;
                    }
                }
                if (i == mapmoodData.length - 1 && key == 0) {
                    console.log("已过关！");
                    return;
                }
            }
            keynum -= 1;
            game.$userData.portList.updateKeyNum(keynum);
            this.model.userprompt();
        };
        MainMediator.prototype.gameAgain = function () {
            //清除木块和地图
            this._view.gameover();
            //刷线本关卡地图数据
            var port = game.$userData.portList.getPort(game.$userData.gamePortVO.playProId);
            this.useKey = 0;
            var mapData = game.$userData.gamePortVO;
            game.$userData.gamePortVO.GameMapVO.update(mapData.curPort.mapVO);
            // this._view.updateData(mapData);
            this.gameStart();
        };
        __decorate([
            game.InjectProxy(5 /* main */)
        ], MainMediator.prototype, "model", void 0);
        __decorate([
            game.InterestNotify(15 /* gameNext */)
        ], MainMediator.prototype, "gameNext", null);
        __decorate([
            game.InterestNotify(12 /* gameStart */)
        ], MainMediator.prototype, "gameStart", null);
        __decorate([
            game.InterestNotify(16 /* updateKey */)
        ], MainMediator.prototype, "updateKey", null);
        __decorate([
            game.InterestNotify(17 /* updateStar */)
        ], MainMediator.prototype, "updateStar", null);
        __decorate([
            game.InterestEvent(1 /* addMood */)
        ], MainMediator.prototype, "addMood", null);
        __decorate([
            game.InterestEvent(9 /* initPos */)
        ], MainMediator.prototype, "initPos", null);
        __decorate([
            game.InterestEvent(2 /* removeMood */)
        ], MainMediator.prototype, "removeMood", null);
        __decorate([
            game.InterestEvent(6 /* beginMood */)
        ], MainMediator.prototype, "beginMood", null);
        __decorate([
            game.InterestEvent(7 /* endMood */)
        ], MainMediator.prototype, "endMood", null);
        __decorate([
            game.InterestEvent(11 /* rechildindex */)
        ], MainMediator.prototype, "rechildindex", null);
        __decorate([
            game.InterestEvent(10 /* removeKeymood */)
        ], MainMediator.prototype, "removeKeymood", null);
        __decorate([
            game.InterestEvent(4 /* clickMenu */)
        ], MainMediator.prototype, "clickMenu", null);
        __decorate([
            game.InterestEvent(3 /* clickRefresh */)
        ], MainMediator.prototype, "clickRefresh", null);
        __decorate([
            game.InterestEvent(8 /* clickKey */)
        ], MainMediator.prototype, "clickKey", null);
        __decorate([
            game.InterestNotify(14 /* gameAgain */)
        ], MainMediator.prototype, "gameAgain", null);
        return MainMediator;
    }(game.MediatorBase));
    game.MainMediator = MainMediator;
    __reflect(MainMediator.prototype, "game.MainMediator");
})(game || (game = {}));
