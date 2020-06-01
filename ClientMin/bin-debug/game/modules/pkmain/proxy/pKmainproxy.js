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
     * 游戏代理
     */
    var PkMainproxy = (function (_super) {
        __extends(PkMainproxy, _super);
        function PkMainproxy() {
            var _this = _super.call(this, 7 /* pkmain */) || this;
            _this.roomId = game.getItem('roomId');
            _this.Msg = '';
            return _this;
        }
        PkMainproxy.prototype.pkgamebegin = function () {
            //待修改
            // this._sender.send_JoinRoom("$userData.account.accountID");
        };
        //待修改
        // @InterestMessage(gameMsg.EnumMsg.playbeginresponse)
        // private playbeginresponse(e?: egret.Event) {
        //     let data = e.data;
        //     $userData.portList.updateKeyNum(data.response.nPrompt);
        // }
        // //待修改
        // @InterestMessage(gameMsg.EnumMsg.playendresponse)
        // private playendresponse(e?: egret.Event) {
        //     let data = e.data;
        //     $userData.portList.updateStarNum(data.response.nTotalStar);
        //     let id = $userData.gamePortVO.playProId;
        //     $userData.portList.updatePort(id, data.response.nTopStar);
        //     // $facade.dispatch(NotifyConst.updatePortSart, true);
        //     $facade.addModule(ModuleID.win);
        // }
        PkMainproxy.prototype.userprompt = function () {
            this._senderHttp.send_Use_Prompt();
        };
        PkMainproxy.prototype.usepromptresponse = function (e) {
            var data = e.data;
        };
        PkMainproxy.prototype.reqEndGame = function () {
            var roomId = game.getItem('roomId');
            console.log(roomId);
            this._sender.send_EndGame(game.$userData.pkRoomVO.id);
        };
        PkMainproxy.prototype.endgameresponse = function (e) {
            var data = e.data;
            console.log('游戏结束 响应');
            var balanceInfo = {
                type: 1,
                Info: data.endGameResponse.nRank
            };
            game.$facade.removeModule(game.ModuleID.pkmain);
            game.$facade.addModule(game.ModuleID.pkwin, undefined, balanceInfo);
        };
        // //游戏结束 通知
        // @InterestMessage(gameMsg.EnumMsg.endgamenotify)
        // private endgamenotify(e?:egret.Event){
        //     let data = e.data.endGameNotify;
        //     let balanceInfo = {};
        //     let Info = [];
        //     balanceInfo = {
        //         type:2,//列表
        //         Info:data.rankEndGameDatas
        //     }
        //     console.log('游戏结束 通知');
        //     console.log(data);
        //     $facade.dispatch(NotifyConst.pkGameEnd);
        //     $facade.removeModule(ModuleID.pkmain);
        //     $facade.addModule(ModuleID.pkwin,undefined,balanceInfo);
        // }
        //游戏超时 通知
        PkMainproxy.prototype.overtimenotify = function (e) {
            var data = e.data;
            console.log('游戏超时 通知');
            var balanceInfo = {
                type: 1,
                Info: data.overTimeNotify.nRank
            };
            game.$facade.removeModule(game.ModuleID.pkmain);
            game.$facade.addModule(game.ModuleID.pkwin, undefined, balanceInfo);
        };
        //游戏时钟
        PkMainproxy.prototype.gametimeticknotify = function (e) {
            var data = e.data;
            var Timer = data.gameTimeTickNotify.nLeft;
            game.$userData.pkRoomVO.updataTimeTick(Timer);
            console.log('时钟启动' + Timer);
        };
        PkMainproxy.prototype.reqUseTool = function (id) {
            this._sender.send_UseTool(id);
        };
        PkMainproxy.prototype.usetoolnotify = function (e) {
            var data = e.data;
            var sID = data.useToolNotify.sID;
            var goodID = data.useToolNotify.goodID;
            var sDID = data.useToolNotify.sDID;
            var GamerList = game.$userData.pkRoomVO.gamerList;
            var sID_name = '';
            var sDID_name = '';
            var goods = game.$singlon(game.GoodsCFG);
            var good = goods.getGoodCFG(goodID);
            var goodName = good.desc;
            var length = GamerList.length;
            for (var i = 0; i < length; i++) {
                if (GamerList[i].sID === sID)
                    sID_name = GamerList[i].sNick + sID;
                if (GamerList[i].sID === sDID)
                    sDID_name = GamerList[i].sNick + sDID;
            }
            if (sDID === sID)
                this.Msg = sDID_name + '使用了' + goodName + '道具';
            else {
                if (game.$userData.account.userid === sID)
                    sID_name = '我';
                if (game.$userData.account.userid === sDID)
                    sDID_name = '我';
                console.log(sID_name + '对' + sDID_name + '使用了' + goodName + '道具');
                this.Msg = sID_name + '对' + sDID_name + '使用了' + goodName + '道具';
            }
            this.sDID = sDID;
            game.$facade.dispatch(24 /* updateGameSituation */);
        };
        PkMainproxy.prototype.usetoolresponse = function (e) {
            var data = e.data;
            this.Msg = '使用道具成功';
            var toolNum = game.$userData.playerVO.toolMap[game.$userData.pkRoomVO.toolID].count - 1;
            toolNum = toolNum >= 0 ? toolNum : 0;
            var tool = new game.ToolVO();
            tool.id = game.$userData.pkRoomVO.toolID;
            tool.count = toolNum;
            game.$userData.playerVO.updateOneTool(tool);
            this.sDID = game.$userData.pkRoomVO.opponentID;
            game.$facade.dispatch(24 /* updateGameSituation */);
        };
        PkMainproxy.prototype.reqPlayBlockAdd = function () {
            var portID = game.$userData.pkRoomVO.playProtPKId;
            this._sender.send_AddBlock(portID);
        };
        PkMainproxy.prototype.playblockaddresponse = function (e) {
            if (true) {
                console.log('add发送成功');
            }
            this.sID = game.$userData.playerVO.sID;
            this.playBlockIsAdd = true;
            game.$facade.dispatch(30 /* moveMoodPosition */);
        };
        PkMainproxy.prototype.reqPlayBlockDelete = function () {
            var portID = game.$userData.pkRoomVO.playProtPKId;
            this._sender.send_DeleteBlock(portID);
        };
        PkMainproxy.prototype.playblockdeleteresponse = function (e) {
            if (true) {
                console.log('delete发送成功');
            }
            this.sID = game.$userData.playerVO.sID;
            this.playBlockIsAdd = false;
            game.$facade.dispatch(30 /* moveMoodPosition */);
        };
        PkMainproxy.prototype.playblockdeletenotify = function (e) {
            var data = e.data;
            var sRoomID = data.playBlockNotify.sRoomID;
            this.sID = data.playBlockNotify.sID;
            this.playBlockIsAdd = data.playBlockNotify.isAdd;
            game.$facade.dispatch(30 /* moveMoodPosition */);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.usepromptresponse)
        ], PkMainproxy.prototype, "usepromptresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.endgameresponse)
        ], PkMainproxy.prototype, "endgameresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.overtimenotify)
        ], PkMainproxy.prototype, "overtimenotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.gametimeticknotify)
        ], PkMainproxy.prototype, "gametimeticknotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.usetoolnotify)
        ], PkMainproxy.prototype, "usetoolnotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.usetoolresponse)
        ], PkMainproxy.prototype, "usetoolresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.playblockaddresponse)
        ], PkMainproxy.prototype, "playblockaddresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.playblockdeleteresponse)
        ], PkMainproxy.prototype, "playblockdeleteresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.playblocknotify)
        ], PkMainproxy.prototype, "playblockdeletenotify", null);
        return PkMainproxy;
    }(game.ProxyBase));
    game.PkMainproxy = PkMainproxy;
    __reflect(PkMainproxy.prototype, "game.PkMainproxy");
})(game || (game = {}));
