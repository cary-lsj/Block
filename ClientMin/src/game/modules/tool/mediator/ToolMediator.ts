namespace game {
    /**
     * 设置中介
     */
    export class ToolMediator extends MediatorBase<ToolView>{

        public onRegister(): void {
            super.onRegister();
            this._view.showGamerInfo();
        }
    }
}