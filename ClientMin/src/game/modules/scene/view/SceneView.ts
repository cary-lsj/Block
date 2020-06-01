namespace game {
    /**
     * 场景
     */
    export class SceneView extends eui.Component implements IModuleView {

        protected childrenCreated(): void {
            super.childrenCreated();
            this.percentHeight = 100;
            this.percentWidth = 100;
        }

        public get layer(): ModuleLayer {
            return ModuleLayer.bottomLayer;
        }

    }
}