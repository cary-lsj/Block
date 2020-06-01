namespace game {
    /**
     * 全屏窗口基类
     * @author wizardc
     */
    export abstract class FullWindowBase<T extends eui.Component> extends eui.Component implements IModuleView {
        public content: eui.Group;

        protected _component: T;

        public constructor(skinName: string) {
            super();
            this.horizontalCenter = 0;
            this.skinName = skinName;
        }

        public get layer(): ModuleLayer {
            return ModuleLayer.fullWindowLayer;
        }

        protected createChildren(): void {
            super.createChildren();
            this.percentHeight = 100;

            this._component = this.createComponent();
            if (this.content && this._component) {
                this.content.addChild(this._component);
            }
        }

        protected abstract createComponent(): T;
    }
}
