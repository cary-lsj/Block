namespace game {
    /**
     * 游戏代理
     */
    export class MainProxy extends ProxyBase {
        private _timeoutID: number;

        public constructor() {
            super(ProxyID.main);
        }

        public gamebegin() {
            LogUtil.startGame($userData.gamePortVO.playProId);
            this._senderHttp.send_Play_Begin($userData.gamePortVO.playProId);
        }

        // @InterestMessage(gameMsg.EnumMsg.playbeginresponse)
        private playbeginresponse(e?: egret.Event) {
            let data = e.data;
            $userData.portList.updateKeyNum(data.response.nPrompt);
        }

        public gameend(): void {
            LogUtil.endGame($userData.gamePortVO.playProId);
            this._senderHttp.send_Play_End($userData.gamePortVO.playProId);
            this.playendresponse();
        }

        // @InterestMessage(gameMsg.EnumMsg.playendresponse)
        private playendresponse(e?: egret.Event) {
            // let data = e.data;
            let data = {
                response: {
                    nTotalStar: +$userData.portList.starNum + 3,
                    nTopStar: 3
                }
            }

            $userData.portList.updateStarNum(data.response.nTotalStar);
            let id = $userData.gamePortVO.playProId;
            $userData.portList.updatePort(id, data.response.nTopStar);
            // $facade.dispatch(NotifyConst.updatePortSart, true);
            $facade.addModule(ModuleID.win);

            $userData.portList.setPort(id);

        }

        public userprompt() {
            // this._senderHttp.send_Use_Prompt();
        }

        @InterestMessage(gameMsg.EnumMsg.usepromptresponse)
        private usepromptresponse(e?: egret.Event) {
            let data = e.data;
        }
    }
}