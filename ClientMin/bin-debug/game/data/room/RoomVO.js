var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /** 对战房间数据 */
    var RoomVO = (function () {
        function RoomVO() {
        }
        RoomVO.prototype.update = function (room) {
            var that = this;
            that.id = room.sRoomID;
            that.gamerList = [];
            that.bossID = room.sBossID;
            that.updateGamerList(room.gamers);
        };
        RoomVO.prototype.updateGamerList = function (data) {
            for (var i = 0; i < data.length; i++) {
                var gamer = data[i];
                this.updateOneGamer(gamer);
            }
        };
        RoomVO.prototype.updateOneGamer = function (gamer) {
            var vo = new game.GamerVO();
            vo.update(gamer);
            this.gamerList.push(vo);
        };
        RoomVO.prototype.updataRoomID = function (data) {
            this.id = data;
        };
        RoomVO.prototype.updataTimeTick = function (data) {
            this.timeTick = data;
            game.$facade.dispatch(20 /* updatePKTime */);
        };
        RoomVO.prototype.updataPortPKId = function (data) {
            this.playProtPKId = data;
        };
        RoomVO.prototype.getGamer = function (id) {
            for (var i = 0; i < this.gamerList.length; i++) {
                if (this.gamerList[i].sID === id) {
                    return this.gamerList[i];
                }
            }
        };
        RoomVO.prototype.removeGamer = function (id) {
            for (var i = 0; i < this.gamerList.length; i++) {
                if (this.gamerList[i].sID === id) {
                    this.gamerList.remove(this.gamerList[i]);
                }
            }
        };
        return RoomVO;
    }());
    game.RoomVO = RoomVO;
    __reflect(RoomVO.prototype, "game.RoomVO");
})(game || (game = {}));
