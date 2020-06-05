/**
 * 配置管理器
 * @author cary
 */
namespace game.ConfigManager {
    export function init(data: any): void {
        impl.init(data);
    }
    export function getMoodInfo(name: string): any {
        return impl.getMoodInfo(name);
    }

    class Impl {
        private _mapData: { [k: string]: {} };
        private _moodData: { [k: string]: {} };

        public constructor() {
            this._moodData = {};
            this._mapData = {};
        }
        public getMoodInfo(name: string): any {
            return this._moodData[name];
        }

        public init(data: any): void {
            this._moodData = data["mood"];
        }

    }

    const impl = new Impl();
}
