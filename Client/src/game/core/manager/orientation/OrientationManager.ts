namespace game {
    /**
     * 屏幕旋转管理器
     * @author wizardc
     */
    export class OrientationManager {
        private static _orientation: string = egret.OrientationMode.PORTRAIT;

        private static _designWidth: number = 640;
        private static _designHeight: number = 1136;

        public static set orientation(value: string) {
            if (this._orientation == value) {
                return;
            }
            if (value != egret.OrientationMode.PORTRAIT && value != egret.OrientationMode.LANDSCAPE && value != egret.OrientationMode.LANDSCAPE_FLIPPED) {
                return;
            }
            this._orientation = value;
            $stage.orientation = this._orientation;
            if (this._orientation == egret.OrientationMode.PORTRAIT) {
                $stage.setContentSize(this._designWidth, this._designHeight);
            } else {
                $stage.setContentSize(this._designHeight, this._designWidth);
            }
            $facade.dispatch(NotifyConst.orientationChanged);
        }
        public static get orientation(): string {
            return this._orientation;
        }
    }
}
