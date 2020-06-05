namespace game {
    /**
     * 对话框基类
     * @author cary
     */
    export abstract class DialogBase<T extends eui.Component> extends eui.Component implements IDialog {
        public content: eui.Group;

        protected _component: T;

        protected _modal: boolean = true;
        protected _tapMaskClose: boolean = true;
        protected _hiding: boolean = false;

        public constructor(skinName: string, position?: Position) {
            super();
            if (position) {
                (<Object>position).shallowCloneTo(this);
            } else {
                this.horizontalCenter = 0;
                this.verticalCenter = -40;
            }
            this.skinName = skinName;
        }

        public get layer(): ModuleLayer {
            return ModuleLayer.dialogLayer;
        }

        public get modal(): boolean {
            return this._modal;
        }

        public get tapMaskClose(): boolean {
            return this._tapMaskClose;
        }

        public set hiding(value: boolean) {
            this._hiding = value;
        }
        public get hiding(): boolean {
            return this._hiding;
        }

        public get component(): T {
            return this._component;
        }

        protected createChildren(): void {
            super.createChildren();

            this._component = this.createComponent();
            if (this.content && this._component) {
                this.content.addChild(this._component);
            }
        }

        protected abstract createComponent(): T;
    }
}
