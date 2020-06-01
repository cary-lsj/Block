namespace game {
    /**
     * 胜利代理
     */
    export class WinProxy extends ProxyBase {

        public keyNum:string

        public constructor() {
            super(ProxyID.win);
        }

        public senSeeAd(){
            this._senderHttp.send_See_Ad(1)
        }

        @InterestMessage(gameMsg.EnumMsg.seeadresponse)
        private seeadresponse(e?: egret.Event) {
            let data = e.data;
            // console.log(data)
            $userData.portList.updateKeyNum(data.response.nPrompt)
            $facade.addModule(ModuleID.ad)
        }


    }
}