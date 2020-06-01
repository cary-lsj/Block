// TypeScript file
namespace game {
    export class RoomProxy extends ProxyBase {
        private _GamerInfo = $singlon(GamerInfoCFG)

        public constructor() {
            super(ProxyID.room);
        }

        //创建邀请房间
        public reqCreateRoom() {
            this._sender.send_CreateRoom();
        }

        @InterestMessage(gameMsg.EnumMsg.createroomresponse)
        private createroomresponse(e?: egret.Event) {
            let data = e.data as gameMsg.Response;
            if (DEBUG)
                console.log('创建房间 响应' + data.createRoomResponse.sRoomID);
            //做玩家初始化
            let gamer = new GamerVO();
            gamer.sID = $userData.account.userid.toString();
            gamer.sHeadImg = $userData.account.avatarUrl;
            gamer.sNick = $userData.account.nickname;
            gamer.nRankLevel = 0;

            let room = $userData.pkRoomVO = new RoomVO();
            room.id = data.createRoomResponse.sRoomID;
            room.bossID = $userData.account.userid.toString();
            room.gamerList = [];
            room.updateOneGamer(gamer);
            $facade.dispatch(NotifyConst.createroom);
        }

        public reqJoinRoom(roomId: string) {
            this._sender.send_JoinRoom(roomId);
        }

        @InterestMessage(gameMsg.EnumMsg.joinroomresponse)
        private joinroomresponse(e?: egret.Event) {
            if (DEBUG)
                console.log('加入房间 响应');
            let data = e.data as gameMsg.Response;
            let message = data.joinRoomResponse.joinRoom;
            let room = $userData.pkRoomVO = new RoomVO();
            room.update(message);
            $facade.dispatch(NotifyConst.updateRoom);
        }

        //加入房间 通知
        @InterestMessage(gameMsg.EnumMsg.joinroomnotify)
        private joinroomnotify(e?: egret.Event) {
            let data = e.data as gameMsg.Notify;;
            let joinGamer = data.joinRoomNotify.joinGamer;
            if (DEBUG)
                console.log('加入房间 通知');
            if (joinGamer.sNick === '' || joinGamer.sNick === undefined) {
                let Gamer = this._GamerInfo.getGamerInfo();
                joinGamer.sHeadImg = Gamer.sHeadImg;
                joinGamer.sNick = Gamer.sNick;
                joinGamer.nRankLevel = Gamer.nRankLevel;
            }
            //做玩家初始化
            let room = $userData.pkRoomVO;
            room.updateOneGamer(joinGamer);
            $facade.dispatch(NotifyConst.updateRoom);
            if ($userData.pkRoomVO.gamerList.length === 4)
                $facade.addModule(ModuleID.msg, undefined, '房间人数已达上限,请开始游戏');
        }

        public reqLeaveRoom() {
            if (DEBUG)
                console.log('离开房间');
            this._sender.send_LeaveRoom($userData.pkRoomVO.id);
        }

        @InterestMessage(gameMsg.EnumMsg.leaveroomresponse)
        private leaveroomresponse(e?: egret.Event) {
            $facade.removeModule(ModuleID.room);
            $facade.addModule(ModuleID.menu);
        }

        @InterestMessage(gameMsg.EnumMsg.leaveroomnotify)
        private leaveroomnotify(e?: egret.Event) {
            let data = e.data;
            let sID = data.leaveRoomNotify.sID;
            if (sID === $userData.pkRoomVO.bossID) {
                $facade.removeModule(ModuleID.room);
                $facade.addModule(ModuleID.menu);
            } else {
                $userData.pkRoomVO.removeGamer(sID);
                $facade.dispatch(NotifyConst.updateGamer);
            }

        }

        public reqStarGame() {
            let roomID = $userData.pkRoomVO.id;
            this._sender.send_StarPkGame(roomID);
        }
        //开始游戏  通知
        @InterestMessage(gameMsg.EnumMsg.startgamenotify)
        private startgamenotify(e?: egret.Event) {
            let data = e.data;
            let roomId = data.startGameNotify.sRoomID;
            let nGID = data.startGameNotify.nGID;
            $userData.pkRoomVO.playProtPKId = nGID;
            if (DEBUG)
                console.log('开始游戏 通知' + roomId);
            $facade.dispatch(NotifyConst.pkGameStart);
        }

        @InterestMessage(gameMsg.EnumMsg.startgameresponse)
        public startgameresponse(e?: egret.Event) {
            let data = e.data;
            if (DEBUG) {
                console.log('开始对战游戏 响应');
            }
            // $facade.dispatch(NotifyConst.pkGameStart);
        }

        //自动匹配
        public reqMatchGame() {
            let roomId = $userData.pkRoomVO.id;
            this._sender.send_MatchGame($userData.pkRoomVO.id);
        }

        @InterestMessage(gameMsg.EnumMsg.matchgameresponse)
        public matchgameresponse(e?: egret.Event): void {
            let data = e.data;
            if (DEBUG)
                console.log('自动匹配 响应');
            $facade.dispatch(NotifyConst.updateRoom);
        }

    }
}