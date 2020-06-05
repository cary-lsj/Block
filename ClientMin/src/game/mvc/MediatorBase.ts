namespace game {
    /**
     * 中介基类, 抽一层出来处理非 MVC 功能的逻辑
     * @author cary
     */
    export abstract class MediatorBase<T extends egret.DisplayObject> extends AbstractMediator<T> {
        protected _panelState: PanelStateManager;

        public constructor() {
            super();

            this._panelState = PanelStateManager.instance;
        }

        public onRegister(): void {
            super.onRegister();

        }

        // protected includeIn(...args: MapType[]): void {
        //     this._panelState.includeIn(this._view, ...args);
        // }

        // protected includeOut(...args: MapType[]): void {
        //     this._panelState.includeOut(this._view, ...args);
        // }

        public onRemove(): void {
            super.onRemove();

            this._panelState.targetRemoved(this._view);
        }
    }
}
