namespace game {
    /**
     * 全局配置
     * @author cary
     */
    export class GlobalConfig {
        private static _useFilter: boolean = true;

        public static set useFilter(value: boolean) {
            this._useFilter = value;
        }
        public static get useFilter(): boolean {
            if (egret.Capabilities.renderMode == "canvas") {
                return false;
            }
            return this._useFilter;
        }
    }
}
