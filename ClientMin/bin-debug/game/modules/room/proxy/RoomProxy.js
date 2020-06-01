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
// TypeScript file
var game;
(function (game) {
    var RoomProxy = (function (_super) {
        __extends(RoomProxy, _super);
        function RoomProxy() {
            var _this = _super.call(this, 6 /* room */) || this;
            _this._GamerInfo = game.$singlon(game.GamerInfoCFG);
            return _this;
        }
        //创建邀请房间
        RoomProxy.prototype.reqCreateRoom = function () {
            this._sender.send_CreateRoom();
        };
        RoomProxy.prototype.createroomresponse = function (e) {
            var data = e.data;
            if (true)
                console.log('创建房间 响应' + data.createRoomResponse.sRoomID);
            //做玩家初始化
            var gamer = new game.GamerVO();
            gamer.sID = game.$userData.account.userid.toString();
            gamer.sHeadImg = game.$userData.account.avatarUrl;
            gamer.sNick = game.$userData.account.nickname;
            gamer.nRankLevel = 0;
            var room = game.$userData.pkRoomVO = new game.RoomVO();
            room.id = data.createRoomResponse.sRoomID;
            room.bossID = game.$userData.account.userid.toString();
            room.gamerList = [];
            room.updateOneGamer(gamer);
            game.$facade.dispatch(25 /* createroom */);
        };
        RoomProxy.prototype.reqJoinRoom = function (roomId) {
            this._sender.send_JoinRoom(roomId);
        };
        RoomProxy.prototype.joinroomresponse = function (e) {
            if (true)
                console.log('加入房间 响应');
            var data = e.data;
            var message = data.joinRoomResponse.joinRoom;
            var room = game.$userData.pkRoomVO = new game.RoomVO();
            room.update(message);
            game.$facade.dispatch(21 /* updateRoom */);
        };
        //加入房间 通知
        RoomProxy.prototype.joinroomnotify = function (e) {
            var data = e.data;
            ;
            var joinGamer = data.joinRoomNotify.joinGamer;
            if (true)
                console.log('加入房间 通知');
            if (joinGamer.sNick === '' || joinGamer.sNick === undefined) {
                var Gamer = this._GamerInfo.getGamerInfo();
                joinGamer.sHeadImg = Gamer.sHeadImg;
                joinGamer.sNick = Gamer.sNick;
                joinGamer.nRankLevel = Gamer.nRankLevel;
            }
            //做玩家初始化
            var room = game.$userData.pkRoomVO;
            room.updateOneGamer(joinGamer);
            game.$facade.dispatch(21 /* updateRoom */);
            if (game.$userData.pkRoomVO.gamerList.length === 4)
                game.$facade.addModule(game.ModuleID.msg, undefined, '房间人数已达上限,请开始游戏');
        };
        RoomProxy.prototype.reqLeaveRoom = function () {
            if (true)
                console.log('离开房间');
            this._sender.send_LeaveRoom(game.$userData.pkRoomVO.id);
        };
        RoomProxy.prototype.leaveroomresponse = function (e) {
            game.$facade.removeModule(game.ModuleID.room);
            game.$facade.addModule(game.ModuleID.menu);
        };
        RoomProxy.prototype.leaveroomnotify = function (e) {
            var data = e.data;
            var sID = data.leaveRoomNotify.sID;
            if (sID === game.$userData.pkRoomVO.bossID) {
                game.$facade.removeModule(game.ModuleID.room);
                game.$facade.addModule(game.ModuleID.menu);
            }
            else {
                game.$userData.pkRoomVO.removeGamer(sID);
                game.$facade.dispatch(22 /* updateGamer */);
            }
        };
        RoomProxy.prototype.reqStarGame = function () {
            var roomID = game.$userData.pkRoomVO.id;
            this._sender.send_StarPkGame(roomID);
        };
        //开始游戏  通知
        RoomProxy.prototype.startgamenotify = function (e) {
            var data = e.data;
            var roomId = data.startGameNotify.sRoomID;
            var nGID = data.startGameNotify.nGID;
            game.$userData.pkRoomVO.playProtPKId = nGID;
            if (true)
                console.log('开始游戏 通知' + roomId);
            game.$facade.dispatch(18 /* pkGameStart */);
        };
        RoomProxy.prototype.startgameresponse = function (e) {
            var data = e.data;
            if (true) {
                console.log('开始对战游戏 响应');
            }
            // $facade.dispatch(NotifyConst.pkGameStart);
        };
        //自动匹配
        RoomProxy.prototype.reqMatchGame = function () {
            var roomId = game.$userData.pkRoomVO.id;
            this._sender.send_MatchGame(game.$userData.pkRoomVO.id);
        };
        RoomProxy.prototype.matchgameresponse = function (e) {
            var data = e.data;
            if (true)
                console.log('自动匹配 响应');
            game.$facade.dispatch(21 /* updateRoom */);
        };
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.createroomresponse)
        ], RoomProxy.prototype, "createroomresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.joinroomresponse)
        ], RoomProxy.prototype, "joinroomresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.joinroomnotify)
        ], RoomProxy.prototype, "joinroomnotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.leaveroomresponse)
        ], RoomProxy.prototype, "leaveroomresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.leaveroomnotify)
        ], RoomProxy.prototype, "leaveroomnotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.startgamenotify)
        ], RoomProxy.prototype, "startgamenotify", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.startgameresponse)
        ], RoomProxy.prototype, "startgameresponse", null);
        __decorate([
            game.InterestMessage(gameMsg.EnumMsg.matchgameresponse)
        ], RoomProxy.prototype, "matchgameresponse", null);
        return RoomProxy;
    }(game.ProxyBase));
    game.RoomProxy = RoomProxy;
    __reflect(RoomProxy.prototype, "game.RoomProxy");
})(game || (game = {}));
