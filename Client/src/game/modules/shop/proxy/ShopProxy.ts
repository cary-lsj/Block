namespace game {
    /**
     * 商店代理
     */
    export class ShopProxy extends ProxyBase {

        public constructor() {
            super(ProxyID.shop);
        }
        public reqToolBuy(goods){
            this._senderHttp.send_BuyTool(goods);
        }
        @InterestMessage(gameMsg.EnumMsg.buyresponse)
        public buyresponse(e?:egret.Event){
            $facade.addModule(ModuleID.msg,undefined,'购买成功');
            $facade.dispatch(NotifyConst.buyToolSuccess);
            let data = e.data.response;
            $userData.playerVO.nMoney = data.newAssets.nMoney;
            $userData.playerVO.nGold = data.newAssets.nGold;
            $userData.playerVO.updateTool(data.newAssets.sAssets);
        }
    }
}
