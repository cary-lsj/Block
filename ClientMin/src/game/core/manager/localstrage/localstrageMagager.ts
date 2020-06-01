/**
 * 缓存管理器
 */
namespace game{
    //存储数据 name:数据名称 data:数据值
    export function setItem(name:string,data: any): void {
        ilsm.init(name,data);
    }
    //获取数据 name:数据名称
    export function getItem(name: string): any {
        return ilsm.getLocalstrageInfo(name);
    }

    class Ilsm {
        public constructor() {}
        public getLocalstrageInfo(name: string): any {
            return localStorage.getItem(name);
        }

        public init(name:string,data: any): void {
            localStorage.setItem(name,data);
        }

    }

    const ilsm = new Ilsm();
}
