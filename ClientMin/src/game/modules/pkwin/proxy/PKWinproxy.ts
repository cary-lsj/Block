namespace game{
    export class PKWinproxy extends ProxyBase{
        public constructor() {
            super(ProxyID.pkwin);
        }
        public balanceInfo = [];
        public reqStarGame(){
            let roomID = $userData.pkRoomVO.id;
            this._sender.send_StarPkGame(roomID);
        }

        @InterestMessage(gameMsg.EnumMsg.endgamenotify)
        public endgamenotify(e?:egret.Event){
            let data = e.data.endGameNotify;
            this.balanceInfo = data.rankEndGameDatas;
            $facade.dispatch(NotifyConst.pkGameEnd);
        }
        public reqLeaveRoom() {
            console.log('离开房间');
            this._sender.send_LeaveRoom($userData.pkRoomVO.id);
        }
    }
}