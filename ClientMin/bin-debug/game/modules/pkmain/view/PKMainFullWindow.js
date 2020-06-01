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
     *
     * 好友对战游戏主场景
     */
    var PKMainFullWindow = (function (_super) {
        __extends(PKMainFullWindow, _super);
        function PKMainFullWindow() {
            var _this = _super.call(this, "gameSkin.PKMainSkin") || this;
            _this._grptimerbarW = 0;
            _this._GamerInfo = game.$singlon(game.GamerInfoCFG);
            _this._listData = new eui.ArrayCollection();
            _this.btn_tool_addtime.on(egret.TouchEvent.TOUCH_TAP, _this.onAddTimeClick, _this);
            _this.btn_tool_other.on(egret.TouchEvent.TOUCH_TAP, _this.onDeleteTimeClick, _this);
            return _this;
        }
        PKMainFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.gamer_list.dataProvider = this._listData;
            this.gamer_list.itemRenderer = game.GamerInfo;
        };
        PKMainFullWindow.prototype.init = function () {
            // this._grptimerbarW = this.grp_timebar.width;
            // this.timerbarstar();			
        };
        PKMainFullWindow.prototype.update = function (data) {
            this._listData.source = data;
            this._listData.refresh();
        };
        PKMainFullWindow.prototype.onMenuClick = function () {
            console.log('clickmenu');
            this.dispatch(4 /* clickMenu */, true);
        };
        PKMainFullWindow.prototype.onRefreshClick = function () {
            console.log('clickre');
            this.dispatch(3 /* clickRefresh */, true);
        };
        PKMainFullWindow.prototype.onKeyClick = function () {
            console.log('clickkey');
            this.dispatch(8 /* clickKey */, true);
        };
        //时间进度条开始
        PKMainFullWindow.prototype.timerbarstar = function () {
            // this.grp_timebar.width = this._grptimerbarW;
            // let timer: egret.Timer = new egret.Timer(1000, 0);
            // timer.addEventListener(egret.TimerEvent.TIMER, this.timerRun, this);
            // //开始计时
            // timer.start();
        };
        PKMainFullWindow.prototype.timerRun = function (e) {
            // if (this.grp_timebar.width < 5) {
            // 	//停止
            // 	let timer = e.target as egret.Timer
            // 	timer.stop();
            // 	console.log("时间结束")
            // 	//对战结束
            // 	this.dispatch(PKMainEvent.endpkgame,true);
            // }
            // this.grp_timebar.width -= 5;
        };
        PKMainFullWindow.prototype.onAddTimeClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(13 /* clickAddTimeTool */, true);
        };
        PKMainFullWindow.prototype.onDeleteTimeClick = function () {
            game.$facade.addModule(game.ModuleID.tool);
        };
        //显示玩家头像
        PKMainFullWindow.prototype.showGamerInfo = function () {
            var _thiss = this;
            this.gamerSituation_label.text = '';
            var data = game.$userData.pkRoomVO.gamerList;
            this.update(data);
            this.updateToolNum();
            this.showPercent();
        };
        PKMainFullWindow.prototype.updateToolNum = function () {
            this.addTime_Num.text = game.$userData.playerVO.toolMap[0].count.toString();
            this.reduceTime_Num.text = game.$userData.playerVO.toolMap[1].count.toString();
        };
        PKMainFullWindow.prototype.showPercent = function () {
            var data = game.$userData.pkRoomVO.gamerList;
            var data_percent = [];
            for (var item in data) {
                var a = {
                    'sNick': data[item].sNick,
                    'sID': data[item].sID,
                    'sHeadImg': data[item].sHeadImg,
                    'nRankLevel': data[item].nRankLevel,
                    'percent': 0,
                    'animation': false
                };
                data_percent.push(a);
            }
            this.update(data_percent);
        };
        PKMainFullWindow.prototype.updateGamerPercent = function (sID, flage, action) {
            var data = this._listData;
            var data_percent = [];
            for (var _i = 0, _a = this._listData.source; _i < _a.length; _i++) {
                var item = _a[_i];
                if (action === 'percent') {
                    if (item.sID === sID) {
                        if (flage) {
                            item.percent = item.percent + 1 >= game.$userData.pkRoomVO.playProtMoodNum ? game.$userData.pkRoomVO.playProtMoodNum : item.percent + 1;
                        }
                        else {
                            item.percent = item.percent - 1 <= 0 ? 0 : item.percent - 1;
                        }
                        item.animation = false;
                    }
                }
                if (action === 'animation') {
                    if (item.sID === sID) {
                        item.animation = true;
                    }
                }
                var a = item;
                data_percent.push(a);
            }
            this.update(data_percent);
        };
        PKMainFullWindow.prototype.timePrompt = function () {
            var tw = egret.Tween.get(this.timebar, { loop: false });
            tw.to({ scaleX: 2, scaleY: 2 }, 300).call(function () { game.SoundManager.getInstance().PlaySound(game.SoundManager.mClockAudioUrl); }).wait(400)
                .to({ scaleX: 1, scaleY: 1 }, 100).wait(200);
        };
        PKMainFullWindow.prototype.showToolEffect = function () {
            this.animationGroup.visible = true;
            this.animationGroup.scaleY = 1.9;
            this.animationGroup.scaleX = 1.4;
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mBlastingAudioUrl);
            game.EffectManager.play('blast', this.animationGroup, 0, 0, 1, 60, this.clearToolEffect, this);
        };
        PKMainFullWindow.prototype.clearToolEffect = function () {
            this.animationGroup.visible = false;
        };
        return PKMainFullWindow;
    }(game.MainFullWindow));
    game.PKMainFullWindow = PKMainFullWindow;
    __reflect(PKMainFullWindow.prototype, "game.PKMainFullWindow", ["game.IModuleView"]);
})(game || (game = {}));
