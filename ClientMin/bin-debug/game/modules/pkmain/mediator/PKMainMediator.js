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
    var PKMainMediator = (function (_super) {
        __extends(PKMainMediator, _super);
        function PKMainMediator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._GamerInfo = game.$singlon(game.GamerInfoCFG);
            return _this;
        }
        PKMainMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this.gameStart();
            // this._view.initMood();
            this._view.showGamerInfo();
        };
        PKMainMediator.prototype.clickMenu = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            // this._view.grp_mood.removeChildren();
            // this._view.map.removeChildren();
            // $facade.addModule(ModuleID.menu);
        };
        PKMainMediator.prototype.gameStart = function () {
            this._view.gameover();
            var mapData = game.$userData.gamePortVO;
            this._view.updateData(mapData);
            //启用开始协议
        };
        //修改游戏场景地图数据，并检测是否完成
        PKMainMediator.prototype.addMood = function (e) {
            //实时
            this.changeMoodPosition(true);
            var data = e.data;
            game.$userData.gamePortVO.GameMapVO.addMood(data);
            if (this.chechFillMap()) {
                game.SoundManager.getInstance().PlaySound(game.SoundManager.mWinAudioUrl);
                this.endpkgame();
            }
        };
        //游戏结束
        PKMainMediator.prototype.endpkgame = function () {
            //启动结束协议
            this.model.reqEndGame();
            //$facade.addModule(ModuleID.pkwin);
        };
        //初始化木块坐标
        PKMainMediator.prototype.initPos = function (e) {
            var data = e.data;
            data.initPos();
        };
        PKMainMediator.prototype.removeMood = function (e) {
            //实时
            this.changeMoodPosition(false);
            var data = e.data;
            game.$userData.gamePortVO.GameMapVO.removeMood(data);
        };
        //检测游戏是否完成
        PKMainMediator.prototype.chechFillMap = function () {
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
        PKMainMediator.prototype.beginMood = function (e) {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            var _mapmood = e.target;
            _mapmood.index = this._view.grp_mood.getChildIndex(_mapmood);
            //置于99层，因为达不到99层，所以置于最顶层
            this._view.grp_mood.setChildIndex(_mapmood, 97);
            var result = this.getlattice(_mapmood.x, _mapmood.y);
            if (result.y <= game.$userData.gamePortVO.GameMapVO.map.rowGrids && result.x <= game.$userData.gamePortVO.GameMapVO.map.colGrids && result.y >= 0 && result.x >= 0) {
                _mapmood.removemood();
                return;
            }
        };
        //松开木块
        PKMainMediator.prototype.endMood = function (e) {
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
        PKMainMediator.prototype.rechildindex = function (e) {
            var _mapmood = e.target;
            this._view.grp_mood.setChildIndex(_mapmood, _mapmood.index);
            _mapmood.index = null;
        };
        //将坐标转换成格子
        PKMainMediator.prototype.getlattice = function (x, y) {
            var _subx = x - this._view.map.x;
            var _suby = y - this._view.map.y;
            var point = new egret.Point(_subx, _suby);
            var result = game.MapUtil.getGrid(point);
            return result;
        };
        //将格子转换成全局坐标
        PKMainMediator.prototype.getOVPixel = function (col, row) {
            var point = new egret.Point(col, row);
            var result = game.MapUtil.getPixel(point);
            result.x += this._view.map.x;
            result.y += this._view.map.y;
            return result;
        };
        //检测是否能放下
        PKMainMediator.prototype.chechPlace = function (vo) {
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
        PKMainMediator.prototype.clickRefresh = function () {
            //                                                                                                                                                                                                                                   清除木块和地图
            // this._view.gameover();
            // //刷线本关卡地图数据
            // let port = $userData.portPKList.getPort($userData.gamePortVO.playProId);
            // // this.useKey = 0;
            // let mapData = $userData.gamePortVO;
            // $userData.gamePortVO.GameMapVO.update(mapData.curPort.mapVO);
            // this._view.updateData(mapData);
            // console.log("点击刷新");
            var playPortId = this._GamerInfo.RandomNumBoth(0, 50);
            var port = game.$userData.portPKList.getPort(playPortId);
            var gamePortVO = game.$userData.gamePortVO = new game.GamePortVO();
            gamePortVO.update(port);
            var mapData = game.$userData.gamePortVO;
            this._view.updateData(mapData);
        };
        /**监听 钥匙 */
        PKMainMediator.prototype.clickKey = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            console.log("点击提示");
        };
        /** 修改倒计时 */
        PKMainMediator.prototype.updatePKTime = function () {
            var time = game.$userData.pkRoomVO.timeTick;
            var timeStr = time.toString();
            this._view.timebar.text = timeStr;
            if (time <= 10) {
                this._view.timePrompt();
            }
        };
        /** 使用减时道具 */
        PKMainMediator.prototype.useMinusTimeTool = function () {
            //   SoundManager.getInstance().PlaySound(SoundManager.mShorterAudioUrl);
            if (this._view.reduceTime_Num.text === '0') {
                game.$facade.addModule(game.ModuleID.msg, undefined, '道具不足');
                return;
            }
            var opponentID = game.$userData.pkRoomVO.opponentID;
            this.model.reqUseTool(1);
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mShorterAudioUrl);
        };
        PKMainMediator.prototype.updateGameSituation = function () {
            var msg = this.model.Msg;
            this._view.gamerSituation_label.text = msg;
            var sID = this.model.sDID;
            this._view.updateGamerPercent(sID, false, 'animation');
        };
        PKMainMediator.prototype.clickAddTimeTool = function () {
            // this._view.showToolEffect();
            // let gamers = $userData.pkRoomVO.gamerList;
            // this._view.updateGamerPercent(gamers[1].sID,false,'animation');
            // SoundManager.getInstance().PlaySound(SoundManager.mLongerAudioUrl);
            if (this._view.addTime_Num.text === '0') {
                game.$facade.addModule(game.ModuleID.msg, undefined, '道具不足');
                return;
            }
            game.$userData.pkRoomVO.opponentID = game.$userData.account.userid.toString();
            this.model.reqUseTool(0);
            game.$userData.pkRoomVO.toolID = 0;
        };
        PKMainMediator.prototype.toolUpdate = function () {
            this._view.updateToolNum();
        };
        PKMainMediator.prototype.changeMoodPosition = function (flage) {
            if (flage) {
                console.log('添加木块');
                // let sID = $userData.pkRoomVO.gamerList[1].sID;
                // this._view.updateGamerPercent(sID,true);
                this.model.reqPlayBlockAdd();
            }
            else {
                console.log('减少木块');
                this.model.reqPlayBlockDelete();
            }
        };
        PKMainMediator.prototype.moveMoodPosition = function () {
            var sID = this.model.sID;
            var flage = this.model.playBlockIsAdd;
            this._view.updateGamerPercent(sID, flage, 'percent');
        };
        __decorate([
            game.InjectProxy(7 /* pkmain */)
        ], PKMainMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(4 /* clickMenu */)
        ], PKMainMediator.prototype, "clickMenu", null);
        __decorate([
            game.InterestEvent(1 /* addMood */)
        ], PKMainMediator.prototype, "addMood", null);
        __decorate([
            game.InterestEvent(12 /* endpkgame */)
        ], PKMainMediator.prototype, "endpkgame", null);
        __decorate([
            game.InterestEvent(9 /* initPos */)
        ], PKMainMediator.prototype, "initPos", null);
        __decorate([
            game.InterestEvent(2 /* removeMood */)
        ], PKMainMediator.prototype, "removeMood", null);
        __decorate([
            game.InterestEvent(6 /* beginMood */)
        ], PKMainMediator.prototype, "beginMood", null);
        __decorate([
            game.InterestEvent(7 /* endMood */)
        ], PKMainMediator.prototype, "endMood", null);
        __decorate([
            game.InterestEvent(11 /* rechildindex */)
        ], PKMainMediator.prototype, "rechildindex", null);
        __decorate([
            game.InterestEvent(3 /* clickRefresh */)
        ], PKMainMediator.prototype, "clickRefresh", null);
        __decorate([
            game.InterestEvent(8 /* clickKey */)
        ], PKMainMediator.prototype, "clickKey", null);
        __decorate([
            game.InterestNotify(20 /* updatePKTime */)
        ], PKMainMediator.prototype, "updatePKTime", null);
        __decorate([
            game.InterestNotify(23 /* useMinusTimeTool */)
        ], PKMainMediator.prototype, "useMinusTimeTool", null);
        __decorate([
            game.InterestNotify(24 /* updateGameSituation */)
        ], PKMainMediator.prototype, "updateGameSituation", null);
        __decorate([
            game.InterestEvent(13 /* clickAddTimeTool */)
        ], PKMainMediator.prototype, "clickAddTimeTool", null);
        __decorate([
            game.InterestNotify(27 /* toolUpdate */)
        ], PKMainMediator.prototype, "toolUpdate", null);
        __decorate([
            game.InterestNotify(30 /* moveMoodPosition */)
        ], PKMainMediator.prototype, "moveMoodPosition", null);
        return PKMainMediator;
    }(game.MediatorBase));
    game.PKMainMediator = PKMainMediator;
    __reflect(PKMainMediator.prototype, "game.PKMainMediator");
})(game || (game = {}));
