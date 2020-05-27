namespace game {
    /**
     * 商店中介
     */
    export class ShopMediator extends MediatorBase<ShopView>{
        @InjectProxy(ProxyID.shop)
        public model:ShopProxy;

        public onRegister():void{
            super.onRegister();
            this._view.getListData();
        }
        @InterestEvent(ShopEvent.click)
        private click(e:egret.Event):void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
        }
        @InterestEvent(ShopEvent.clickBack)
        private clickBack(e:egret.Event):void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            $facade.addModule(ModuleID.menu);
        }
        @InterestEvent(ShopEvent.clickToolBuy)
        private clickToolBuy(e:egret.Event):void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if(this._view.isToolCheckedFlage){
                let index = this._view._toolBuyIndex;
                let data = this._view._SetMealCFG.getSetMealCFG(index);
                let dataObj = {
                    "nID":data.toolId,
                    "nCount":data.num
                }
                let dataArr = [];
                dataArr.push(dataObj);
                this.model.reqToolBuy(dataArr);
            }else{
                $facade.addModule(ModuleID.msg,undefined,'请选择要购买的套餐');
            }
            // $facade.addModule(ModuleID.shoppop);
        }
        @InterestEvent(ShopEvent.clickDiamondBuy)
        private clickDiamondBuy(e:egret.Event):void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            if(this._view.isDiamondCheckedFlage){
                let index = this._view._diamondBuyIndex;
                let data = this._view._SetMealCFG.getDiamondCFG(index);
            }else{
                $facade.addModule(ModuleID.msg,undefined,'请选择要购买的个数');
            }
        }
        @InterestNotify(NotifyConst.buyToolSuccess)
        private buyToolSuccess(){
            this._view.getListData();
            this._view.total_money.text = '0';
        }
        
    }
}