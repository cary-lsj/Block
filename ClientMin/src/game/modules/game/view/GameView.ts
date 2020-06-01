namespace game {
    import Container = egret.DisplayObjectContainer;
    import Group = eui.Group;

    /**
     * 游戏容器
     * @author wizardc
     */
    export class GameView extends eui.UILayer implements IModuleContainer {
        /** 场景层 */
        public sceneLayer: Container;

        /** 天气层 */
        public weatherLayer: Group;

        /** 底部层 */
        public bottomLayer: Group;

        /** 底部 UI 层 */
        public bottomUILayer: Group;

        /** 全屏窗口层 */
        public fullWindowLayer: Group;

        /** 主界面 UI 层 */
        public mainUILayer: Group;

        /** 对话窗口层 */
        public dialogLayer: Group;

        /** 弹出层 */
        public popLayer: Group;

        /** 警报框层 */
        public alertLayer: Group;

        /** 引导层 */
        public guideLayer: Group;

        /** 消息层 */
        public messageLayer: Group;

        /** 最顶层 */
        public topLayer: Group;

        public childrenCreated(): void {
            super.childrenCreated();

            this.sceneLayer = new Container();
            this.sceneLayer.touchEnabled = false;
            this.sceneLayer.touchChildren = true;
            this.addChild(this.sceneLayer);

            this.weatherLayer = new Group();
            this.weatherLayer.percentWidth = this.weatherLayer.percentHeight = 100;
            this.weatherLayer.touchEnabled = this.weatherLayer.touchChildren = false;
            this.weatherLayer.touchThrough = true;
            this.addChild(this.weatherLayer);

            this.bottomLayer = new Group();
            this.bottomLayer.percentWidth = this.bottomLayer.percentHeight = 100;
            this.bottomLayer.touchThrough = true;
            this.addChild(this.bottomLayer);

            this.bottomUILayer = new Group();
            this.bottomUILayer.percentWidth = this.bottomUILayer.percentHeight = 100;
            this.bottomUILayer.touchThrough = true;
            this.addChild(this.bottomUILayer);

            this.fullWindowLayer = new Group();
            this.fullWindowLayer.percentWidth = this.fullWindowLayer.percentHeight = 100;
            this.fullWindowLayer.touchThrough = true;
            this.addChild(this.fullWindowLayer);

            this.mainUILayer = new Group();
            this.mainUILayer.percentWidth = this.mainUILayer.percentHeight = 100;
            this.mainUILayer.touchThrough = true;
            this.addChild(this.mainUILayer);

            this.dialogLayer = new Group();
            this.dialogLayer.percentWidth = this.dialogLayer.percentHeight = 100;
            this.dialogLayer.touchThrough = true;
            this.addChild(this.dialogLayer);

            this.popLayer = new Group();
            this.popLayer.percentWidth = this.popLayer.percentHeight = 100;
            this.popLayer.touchThrough = true;
            this.addChild(this.popLayer);

            this.alertLayer = new Group();
            this.alertLayer.percentWidth = this.alertLayer.percentHeight = 100;
            this.alertLayer.touchThrough = true;
            this.addChild(this.alertLayer);

            this.guideLayer = new Group();
            this.guideLayer.percentWidth = this.guideLayer.percentHeight = 100;
            this.guideLayer.touchThrough = true;
            this.addChild(this.guideLayer);

            this.messageLayer = new Group();
            this.messageLayer.percentWidth = this.messageLayer.percentHeight = 100;
            this.messageLayer.touchEnabled = this.messageLayer.touchChildren = false;
            this.messageLayer.touchThrough = true;
            this.addChild(this.messageLayer);

            this.topLayer = new Group();
            this.topLayer.percentWidth = this.topLayer.percentHeight = 100;
            this.topLayer.touchThrough = true;
            this.addChild(this.topLayer);
        }
    }
}
