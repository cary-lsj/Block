namespace game {
    /**
     * 面板状态管理器
     * @author wizardc
     */
    export class PanelStateManager {
        private static _instance: PanelStateManager;

        public static get instance(): PanelStateManager {
            return PanelStateManager._instance || (PanelStateManager._instance = new PanelStateManager());
        }

        private _targetMap: Dictionary<egret.DisplayObject, Recyclable<PanelState>>;
        private _state: number;

        private constructor() {
            this._targetMap = new Dictionary<egret.DisplayObject, Recyclable<PanelState>>();
        }

        public set state(value: number) {
            if (this._state == value) {
                return;
            }
            this._state = value;
            this._targetMap.forEach((value, key) => {
                this.checkVisible(key, value);
            });
        }
        public get state(): number {
            return this._state;
        }

        public includeIn(target: egret.DisplayObject, ...args: number[]): void {
            let state = recyclable(PanelState);
            state.isIncludIn = true;
            state.list = args;
            this._targetMap.add(target, state);
            this.checkVisible(target, state);
        }

        public includeOut(target: egret.DisplayObject, ...args: number[]): void {
            let state = recyclable(PanelState);
            state.isIncludIn = false;
            state.list = args;
            this._targetMap.add(target, state);
            this.checkVisible(target, state);
        }

        private checkVisible(target: egret.DisplayObject, state: PanelState): void {
            if (isNaN(this._state)) {
                target.visible = true;
                return;
            }
            target.visible = state.getVisible(this._state);
        }

        public targetRemoved(target: egret.DisplayObject): void {
            let state = this._targetMap.get(target);
            if (state) {
                this._targetMap.remove(target);
                state.recycle();
                target.visible = true;
            }
        }
    }

    class PanelState implements ICacheable {
        public isIncludIn: boolean;
        public list: number[];

        public getVisible(state: number): boolean {
            let hasState = this.list.indexOf(state) != -1;
            if (this.isIncludIn) {
                return hasState;
            }
            return !hasState;
        }

        public onRecycle(): void {
            this.isIncludIn = undefined;
            this.list = undefined;
        }
    }
}
