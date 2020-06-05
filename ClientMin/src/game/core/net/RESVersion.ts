/**
 * 资源版本控制管理器
 * @author cary
 */
namespace game.RESVersion {
    export function init(data: any): void {
        impl.init(data);
    }

    export function getRealUrl(url: string): string {
        return impl.getRealUrl(url);
    }

    class Impl {
        private _map: { [url: string]: string };

        public init(data: any): void {
            this._map = data;
        }

        public getRealUrl(url: string): string {
            if (this._map[url]) {
                return this._map[url];
            }
            return url;
        }
    }

    const impl = new Impl();
}
