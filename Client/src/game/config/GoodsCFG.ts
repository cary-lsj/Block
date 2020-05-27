// TypeScript file
namespace game {
    export class GoodsCFG {
        private _goodMap: { [id: number]: IGoodsCFG };
        private _goodList: IGoodsCFG[];
        public constructor() {
            let list = this._goodList = [
                { "id": 0, "desc": "加时卡", "type": 0, "gold": 500, "money": 0, "rmb": 0, "extra": 5 },
                { "id": 1, "desc": "减时卡", "type": 0, "gold": 0, "money": 2, "rmb": 0, "extra": -5 },
            ]
            this._goodMap = {};
            for (let good of list) {
                this._goodMap[good.id] = good
            }
        }
        public getGoodCFG(id: number): IGoodsCFG {
            return this._goodMap[id];
        }
        public getGoodList(): IGoodsCFG[] {
            return this._goodList;
        }
    }
    export interface IGoodsCFG {
        readonly id: number
        readonly desc: string
        readonly type: number
        readonly gold: number
        readonly money: number
        readonly rmb: number
        readonly extra: number
    }
}
