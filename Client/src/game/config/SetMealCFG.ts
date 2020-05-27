namespace game{
    export class SetMealCFG{
        private _MealMap:{[id:number]:ISetMealCFG}
        private _DiamondMap:{[id:number]:IDiamondCFG}
        private _length:number
        public constructor(){
            this._MealMap = {
                "0":{"toolId":0,"num":5,"gold":2500,"money":0,"rmb":0},
                "1":{"toolId":0,"num":10,"gold":5000,"money":0,"rmb":0},
                "2":{"toolId":0,"num":20,"gold":10000,"money":0,"rmb":0},
                "3":{"toolId":1,"num":5,"gold":0,"money":10,"rmb":0},
                "4":{"toolId":1,"num":10,"gold":0,"money":20,"rmb":0},
            },
            this._DiamondMap = {
                "0":{"num":5,"rmb":1},
                "1":{"num":10,"rmb":2},
                "2":{"num":50,"rmb":5},
                "3":{"num":100,"rmb":8},
            }
        }
        public getSetMealCFG(id:number):ISetMealCFG{
            return this._MealMap[id];
        }
        public getAllSetMealCFG():{[id:number]:ISetMealCFG}{
            return this._MealMap;
        }
        public getSetMealLength():number{
            return 5;
        }
        public getDiamondCFG(id:number):IDiamondCFG{
            return this._DiamondMap[id];
        }
        public getAllDiamondCFG():{[id:number]:IDiamondCFG}{
            return this._DiamondMap;
        }
        public getDiamondLength():number{
            return 4;
        }
    }
    export interface ISetMealCFG{
        readonly toolId:number
        readonly num:number
        readonly gold:number
        readonly money: number
        readonly rmb: number
    }
    export interface IDiamondCFG{
        readonly num:number
        readonly rmb: number
    }
}