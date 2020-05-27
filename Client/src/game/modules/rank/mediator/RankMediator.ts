namespace game {
    /**
     * 排行榜中介
     */
    export class RankMediator extends MediatorBase<RankDialog>{
        /** 使用排行榜代理 */
        @InjectProxy(ProxyID.rank)
        public model: RankProxy;

        public onRegister(): void {
            super.onRegister()
            this.sendRankReq()
        }

        /** 关闭 */
        @InterestEvent(MenuEvent.click)
        private click(e: egret.Event): void {
            SoundManager.getInstance().PlaySound(SoundManager.mClickAudioUrl);
            // SoundManager.getInstance().playClick();
            this._view.goOne.play(0);
            setTimeout(function () {
                $facade.removeModule(ModuleID.rank);
            }, 250);

        }

        private sendRankReq(): void {
            this.model.reqRank()
        }

        /** 监听 排行榜数据改变 */
        @InterestNotify(NotifyConst.rankUpdate)
        private rankUpdate(): void {
            let data = this.model.getDataArr();
            //展示排行榜
            this._view.visible = true;
            this._view.comOne.play(0)
            this._view.refreshList(data);
        }
    }
}