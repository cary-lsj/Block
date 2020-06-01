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
     * 胜利中介
     */
    var PKWinMediator = (function (_super) {
        __extends(PKWinMediator, _super);
        function PKWinMediator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.balanceInfo = {};
            return _this;
        }
        PKWinMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view._initView();
        };
        PKWinMediator.prototype.setModuleData = function (balanceInfo) {
            console.log(balanceInfo);
            if (balanceInfo.type === 1) {
                this.showPersonInfo(balanceInfo);
            }
            else {
                this.showBalanceInfo(balanceInfo);
            }
            // this.showBalanceInfo(balanceInfo);
        };
        PKWinMediator.prototype.showPersonInfo = function (Info) {
            console.log(Info);
            this._view.analysisInfo(Info);
        };
        PKWinMediator.prototype.showBalanceInfo = function (balance) {
            var dataArr = [];
            var userGold = 0;
            for (var i = 0; i < balance.length; i++) {
                var GamerInfo_1 = game.$userData.pkRoomVO.getGamer(balance[i]['sGamerID']);
                if (GamerInfo_1 === undefined)
                    return;
                var dataTemp = {
                    "sHeadImg": GamerInfo_1.sHeadImg,
                    "sNick": GamerInfo_1.sNick,
                    "time": balance[i].nTime,
                    "gold": balance[i].nGold,
                    "nRank": balance[i].nRank,
                    "nLevel": balance[i].nLevel,
                    "sID": balance[i].sGamerID,
                };
                dataArr.push(dataTemp);
                if (GamerInfo_1.sID === game.$userData.account.userid.toString())
                    userGold = balance[i].nGold;
            }
            //更新本地财产
            var nGold = game.$userData.playerVO.nGold === undefined ? 0 : game.$userData.playerVO.nGold;
            game.$userData.playerVO.nGold = nGold + userGold;
            game.$facade.dispatch(29 /* updateUserProperty */);
            console.log(dataArr);
            var data = this.orderby(dataArr, function (i) { return i.nRank; });
            var dataa = [
                {
                    "sHeadImg": '',
                    "sNick": "小A",
                    "time": 20,
                    "glod": 10,
                    "nRank": 1
                },
                {
                    "sHeadImg": '',
                    "sNick": "小B",
                    "time": 20,
                    "glod": 10,
                    "nRank": 1
                },
                {
                    "sHeadImg": '',
                    "sNick": "小C",
                    "time": 20,
                    "glod": 10,
                    "nRank": 1
                }
            ];
            this._view.analysisBalanceData(data);
        };
        /** 再来一局 */
        PKWinMediator.prototype.clickNext = function (e) {
            //进入等待页面等待房主开始游戏，
            game.$facade.removeModule(game.ModuleID.pkwin);
            game.$facade.addModule(game.ModuleID.room, undefined, 'wait');
        };
        /** 离开 */
        PKWinMediator.prototype.clickExit = function (e) {
            this.model.reqLeaveRoom();
            // $facade.removeModule(ModuleID.pkwin);
            // $facade.addModule(ModuleID.menu);
        };
        PKWinMediator.prototype.clickSeeRank = function (e) {
            this.showBalanceInfo(this.model.balanceInfo);
            this._view.group_pklevel.visible = true;
            this._view.group_pkNRank.visible = false;
            this._view.btn_lookRank.visible = false;
            //  SoundManager.getInstance().PlaySound(SoundManager.mBGAudioUrl);
            game.SoundManager.getInstance().stopPKMusic();
            game.SoundManager.getInstance().playBgMusic();
            //  SoundManager.getInstance().playBgMusic();
        };
        //开始游戏通知
        PKWinMediator.prototype.pkGameStart = function () {
            game.$facade.removeModule(game.ModuleID.pkwin);
            game.$facade.addModule(game.ModuleID.pkmain);
        };
        //结束游戏通知
        PKWinMediator.prototype.pkGameEnd = function () {
            this._view.group_countDown.visible = false;
            this._view.btn_lookRank.visible = true;
            // this.showBalanceInfo(this.model.balanceInfo);
        };
        PKWinMediator.prototype.orderby = function (arr, selector) {
            if (arr.length <= 1) {
                return arr;
            }
            var pivotIndex = Math.floor(arr.length / 2);
            var pivot = arr.splice(pivotIndex, 1)[0];
            var left = [];
            var right = [];
            for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
                var i = arr_1[_i];
                if (selector(i) < selector(pivot)) {
                    left.push(i);
                }
                else {
                    right.push(i);
                }
            }
            return this.orderby(left, selector).concat([pivot], this.orderby(right, selector));
        };
        /** 修改倒计时 */
        PKWinMediator.prototype.updatePKTime = function () {
            var _this = this;
            var time = game.$userData.pkRoomVO.timeTick;
            var timeStr = time.toString();
            if (timeStr === '1') {
                setTimeout(function () {
                    _this._view.countDown_txt.text = '有人使用加时道具，还需等待';
                    _this._view.countDown_num.text = '';
                }, 2000);
            }
            this._view.countDown_num.text = timeStr;
        };
        __decorate([
            game.InjectProxy(8 /* pkwin */)
        ], PKWinMediator.prototype, "model", void 0);
        __decorate([
            game.InterestEvent(1 /* clickMore */)
        ], PKWinMediator.prototype, "clickNext", null);
        __decorate([
            game.InterestEvent(0 /* clickLeave */)
        ], PKWinMediator.prototype, "clickExit", null);
        __decorate([
            game.InterestEvent(2 /* clickSeeRank */)
        ], PKWinMediator.prototype, "clickSeeRank", null);
        __decorate([
            game.InterestNotify(18 /* pkGameStart */)
        ], PKWinMediator.prototype, "pkGameStart", null);
        __decorate([
            game.InterestNotify(19 /* pkGameEnd */)
        ], PKWinMediator.prototype, "pkGameEnd", null);
        __decorate([
            game.InterestNotify(20 /* updatePKTime */)
        ], PKWinMediator.prototype, "updatePKTime", null);
        return PKWinMediator;
    }(game.MediatorBase));
    game.PKWinMediator = PKWinMediator;
    __reflect(PKWinMediator.prototype, "game.PKWinMediator");
})(game || (game = {}));
