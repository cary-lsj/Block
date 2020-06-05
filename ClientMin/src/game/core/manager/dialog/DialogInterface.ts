namespace game {
    /**
     * 对话框接口
     * @author cary
     */
    export interface IDialog extends egret.DisplayObject, IModuleView {
        readonly modal: boolean;
        readonly tapMaskClose: boolean;
        readonly hiding: boolean;
    }
}
