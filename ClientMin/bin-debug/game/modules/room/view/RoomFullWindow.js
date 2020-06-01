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
// TypeScript file
var game;
(function (game) {
    var RoomFullWindow = (function (_super) {
        __extends(RoomFullWindow, _super);
        function RoomFullWindow() {
            var _this = _super.call(this, "gameSkin.RoomSkin") || this;
            _this.clickNum = 0;
            _this._listData = new eui.ArrayCollection();
            return _this;
        }
        RoomFullWindow.prototype.createComponent = function () {
            return undefined;
        };
        RoomFullWindow.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.gamer_list.dataProvider = this._listData;
            this.gamer_list.itemRenderer = game.GamerInfo;
            this.btn_menu.on(egret.TouchEvent.TOUCH_TAP, this.GoMenuClick, this);
            this.btn_rank.on(egret.TouchEvent.TOUCH_TAP, this.GoRankClick, this);
            this.btn_return.on(egret.TouchEvent.TOUCH_TAP, this.onBackClick, this);
            this.btn_invite.on(egret.TouchEvent.TOUCH_TAP, this.onInviteClick, this);
            //创建房间 
            this.btn_create.on(egret.TouchEvent.TOUCH_TAP, this.onCreateClick, this);
            this.btn_match.on(egret.TouchEvent.TOUCH_TAP, this.onMatchingClick, this);
            this.btn_join.on(egret.TouchEvent.TOUCH_TAP, this.onJionRoomClick, this);
            this.btn_strGame.on(egret.TouchEvent.TOUCH_TAP, this.onStarGameClick, this);
        };
        RoomFullWindow.prototype._initView = function () {
            this.group_create_room.visible = true;
            this.group_create.visible = true;
            this.group_invite.visible = false;
            this.group_wait.visible = false;
            this.text_roomID.text = '';
            this.show_roomID.text = '';
            this.updateTool();
        };
        RoomFullWindow.prototype.onInviteClick = function () {
            if (this.clickNum === 0) {
                this.show_roomID.text = game.$userData.pkRoomVO.id;
                this.clickNum = 1;
            }
            else {
                this.group_create_room.visible = false;
                this.group_wait.visible = true;
                this.clickNum = 0;
            }
        };
        RoomFullWindow.prototype.onBackClick = function () {
            this.dispatch(2 /* clickBack */, true);
        };
        RoomFullWindow.prototype.onStartClick = function () {
            this.dispatch(1 /* clickStart */, true);
        };
        RoomFullWindow.prototype.onCreateClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(4 /* clickCreateRoom */, true);
        };
        RoomFullWindow.prototype.onMatchingClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            this.dispatch(5 /* clickMatching */, true);
        };
        RoomFullWindow.prototype.onJionRoomClick = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mClickAudioUrl);
            if (this.text_roomID.visible) {
                this.dispatch(6 /* clickJionRoom */, true);
                this.text_roomID.visible = false;
            }
            else {
                this.text_roomID.visible = true;
            }
        };
        RoomFullWindow.prototype.GoMenuClick = function () {
            game.$facade.removeModule(game.ModuleID.room);
            game.$facade.addModule(game.ModuleID.menu);
        };
        RoomFullWindow.prototype.GoRankClick = function () {
            // $facade.removeModule(ModuleID.room);
            game.$facade.addModule(game.ModuleID.rank);
        };
        RoomFullWindow.prototype.onStarGameClick = function () {
            if (this.btn_strGame.currentState === 'disabled') {
                game.$facade.addModule(game.ModuleID.msg, undefined, '等待好友加入......');
                return;
            }
            this.dispatch(7 /* clickStarGame */, true);
        };
        RoomFullWindow.prototype.updateGamer = function (data) {
            if (data.length <= 2) {
                this.sc_gamer.y = this.sc_gamer.y <= 215 ? this.sc_gamer.y * 3 / 2 : this.sc_gamer.y;
            }
            else {
                this.sc_gamer.y = this.sc_gamer.y >= 215 ? this.sc_gamer.y / 2 : this.sc_gamer.y;
            }
            this._listData.source = data;
            this._listData.refresh();
        };
        RoomFullWindow.prototype.showWait = function () {
            if (game.$userData.account.userid.toString() === game.$userData.pkRoomVO.bossID) {
                this.btn_return.visible = true;
                this.btn_strGame.visible = true;
                if (game.$userData.pkRoomVO.gamerList.length === 1) {
                    this.btn_strGame.currentState = "disabled";
                }
                else {
                    this.btn_strGame.currentState = "up";
                }
            }
            this.group_wait.visible = true;
            this.group_create_room.visible = false;
        };
        RoomFullWindow.prototype.updateTool = function () {
            this.addTime_Num.text = game.$userData.playerVO.toolMap[0].count.toString();
            this.reduceTime_Num.text = game.$userData.playerVO.toolMap[1].count.toString();
        };
        return RoomFullWindow;
    }(game.FullWindowBase));
    game.RoomFullWindow = RoomFullWindow;
    __reflect(RoomFullWindow.prototype, "game.RoomFullWindow");
})(game || (game = {}));
