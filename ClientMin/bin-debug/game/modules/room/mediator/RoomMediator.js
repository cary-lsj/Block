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
    var RoomMediator = (function (_super) {
        __extends(RoomMediator, _super);
        function RoomMediator() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._GamerInfo = game.$singlon(game.GamerInfoCFG);
            return _this;
        }
        RoomMediator.prototype.onRegister = function () {
            _super.prototype.onRegister.call(this);
            this._view._initView();
            // this.updateGamerInfo();
        };
        RoomMediator.prototype.setModuleData = function (state) {
            console.log(state);
            if (state === 'wait') {
                this.updateGamerInfo();
                this._view.group_wait.visible = true;
                this._view.group_create_room.visible = false;
            }
        };
        RoomMediator.prototype.onBackClick = function (e) {
            this._model.reqLeaveRoom();
        };
        RoomMediator.prototype.clickStart = function (e) {
            this._model.reqStarGame();
        };
        RoomMediator.prototype.clickInvite = function (e) {
            this._view.show_roomID.text = game.$userData.pkRoomVO.id;
        };
        RoomMediator.prototype.clickCreateRoom = function (e) {
            this.createRoom();
        };
        //创建房间
        RoomMediator.prototype.createRoom = function () {
            if (true)
                console.log('createRoom');
            this._view.btn_return.visible = true;
            this._model.reqCreateRoom();
        };
        RoomMediator.prototype.clickMatching = function (e) {
            this.MatchingRoom();
        };
        //匹配
        RoomMediator.prototype.MatchingRoom = function () {
            if (true)
                console.log('matchingRoom');
            this._model.reqMatchGame();
        };
        RoomMediator.prototype.updateRoom = function () {
            if (true)
                console.log('展示等待页面');
            this._view.showWait();
            this.updateGamerInfo();
        };
        RoomMediator.prototype.createroom = function () {
            if (true)
                console.log('展示邀请页面');
            if (game.$userData.account.userid.toString() === game.$userData.pkRoomVO.bossID) {
                this._view.btn_return.visible = true;
                this._view.btn_strGame.visible = true;
            }
            this._view.group_invite.visible = true;
            this._view.group_create.visible = false;
            this.updateGamerInfo();
        };
        RoomMediator.prototype.updateGamerInfo = function () {
            var dataInfo = [];
            dataInfo = game.$userData.pkRoomVO.gamerList;
            this._view.updateGamer(dataInfo);
            if (game.$userData.pkRoomVO.gamerList.length === 1) {
                this._view.btn_strGame.currentState = 'disabled';
            }
        };
        //开始游戏通知
        RoomMediator.prototype.pkGameStart = function () {
            var id = game.$userData.pkRoomVO.playProtPKId;
            var port = game.$userData.portList.getPort(id);
            var gamePortVO = game.$userData.gamePortVO = new game.GamePortVO();
            gamePortVO.update(port);
            gamePortVO.playProId = id;
            game.$userData.pkRoomVO.playProtMoodNum = gamePortVO.curPort.moodListVO.length;
            game.$facade.removeModule(game.ModuleID.room);
            game.$facade.addModule(game.ModuleID.pkmain);
        };
        RoomMediator.prototype.clickJionRoom = function (e) {
            var RoomID = this._view.text_roomID.text;
            this._model.reqJoinRoom(RoomID);
        };
        RoomMediator.prototype.clickStarGame = function (e) {
            this._model.reqStarGame();
            game.SoundManager.getInstance().playPKMusic();
            //  SoundManager.getInstance().PlaySound(SoundManager.mClockAudioUrl);
            game.SoundManager.getInstance().stopBgMusic();
        };
        RoomMediator.prototype.updateGamer = function () {
            this.updateGamerInfo();
        };
        RoomMediator.prototype.toolUpdate = function () {
            this._view.updateTool();
        };
        __decorate([
            game.InjectProxy(6 /* room */)
        ], RoomMediator.prototype, "_model", void 0);
        __decorate([
            game.InterestEvent(2 /* clickBack */)
        ], RoomMediator.prototype, "onBackClick", null);
        __decorate([
            game.InterestEvent(1 /* clickStart */)
        ], RoomMediator.prototype, "clickStart", null);
        __decorate([
            game.InterestEvent(3 /* clickInvite */)
        ], RoomMediator.prototype, "clickInvite", null);
        __decorate([
            game.InterestEvent(4 /* clickCreateRoom */)
        ], RoomMediator.prototype, "clickCreateRoom", null);
        __decorate([
            game.InterestEvent(5 /* clickMatching */)
        ], RoomMediator.prototype, "clickMatching", null);
        __decorate([
            game.InterestNotify(21 /* updateRoom */)
        ], RoomMediator.prototype, "updateRoom", null);
        __decorate([
            game.InterestNotify(25 /* createroom */)
        ], RoomMediator.prototype, "createroom", null);
        __decorate([
            game.InterestNotify(18 /* pkGameStart */)
        ], RoomMediator.prototype, "pkGameStart", null);
        __decorate([
            game.InterestEvent(6 /* clickJionRoom */)
        ], RoomMediator.prototype, "clickJionRoom", null);
        __decorate([
            game.InterestEvent(7 /* clickStarGame */)
        ], RoomMediator.prototype, "clickStarGame", null);
        __decorate([
            game.InterestNotify(22 /* updateGamer */)
        ], RoomMediator.prototype, "updateGamer", null);
        __decorate([
            game.InterestNotify(27 /* toolUpdate */)
        ], RoomMediator.prototype, "toolUpdate", null);
        return RoomMediator;
    }(game.MediatorBase));
    game.RoomMediator = RoomMediator;
    __reflect(RoomMediator.prototype, "game.RoomMediator");
})(game || (game = {}));
