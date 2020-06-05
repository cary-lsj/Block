namespace game {
    /**
     * 游戏模块
     * @author cary
     */
    export class GameMediator extends MediatorBase<GameView> {
        public onRegister(): void {
            super.onRegister();

            ModuleManager.init(this._view);
            FullWindowManager.init(this._view.fullWindowLayer);
            DialogManager.init(this._view.dialogLayer);
            Notice.init(this._view.messageLayer);

        }
    }
}
