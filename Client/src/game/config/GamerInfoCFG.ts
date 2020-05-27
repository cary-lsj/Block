namespace game{
    export class GamerInfoCFG {
        private _GamerInfoMap:{[id:number]:gameMsg.IGamer}
        public constructor(){
            this._GamerInfoMap = {
                "0":{"sID":"1","sHeadImg":"1","sNick":"一壶酒化流年","nRankLevel":1},
                "1":{"sID":"2","sHeadImg":"1","sNick":"简单粗暴我就是王道","nRankLevel":1},
                "2":{"sID":"3","sHeadImg":"1","sNick":"江山与你","nRankLevel":1},
                "3":{"sID":"4","sHeadImg":"1","sNick":"丑的惊动了上帝","nRankLevel":1},
                "4":{"sID":"5","sHeadImg":"1","sNick":"何弃疗","nRankLevel":1},
                "5":{"sID":"5","sHeadImg":"1","sNick":"き冷月葬花あ","nRankLevel":1},
                "6":{"sID":"6","sHeadImg":"1","sNick":"烟笼彼海至予雨巷","nRankLevel":1},
                "7":{"sID":"7","sHeadImg":"1","sNick":"画扇悲风殇月夜","nRankLevel":1},
                "8":{"sID":"8","sHeadImg":"1","sNick":"遍地·梧桐花","nRankLevel":1},
                "9":{"sID":"9","sHeadImg":"1","sNick":"躲目","nRankLevel":1},
                "10":{"sID":"1","sHeadImg":"2","sNick":"青衣沽酒醉风尘","nRankLevel":1},
                "11":{"sID":"2","sHeadImg":"2","sNick":"白日依山尽","nRankLevel":1},
                "12":{"sID":"3","sHeadImg":"2","sNick":"笑忘身是客","nRankLevel":1},
                "13":{"sID":"4","sHeadImg":"2","sNick":"平生相见即眉开","nRankLevel":1},
                "14":{"sID":"5","sHeadImg":"2","sNick":"恬淡成诗","nRankLevel":1},
                "15":{"sID":"6","sHeadImg":"2","sNick":"青山独归远","nRankLevel":1},
                "16":{"sID":"7","sHeadImg":"2","sNick":"来往不逢人","nRankLevel":1},
                "17":{"sID":"8","sHeadImg":"2","sNick":"风劲角弓鸣","nRankLevel":1},
                "18":{"sID":"9","sHeadImg":"2","sNick":"我亦好歌亦好酒","nRankLevel":1},
                "19":{"sID":"11","sHeadImg":"1","sNick":"落日桥头细感风","nRankLevel":1},
                "20":{"sID":"12","sHeadImg":"1","sNick":"稳握江山权","nRankLevel":1},
                "21":{"sID":"13","sHeadImg":"1","sNick":"提笔废江山","nRankLevel":1},
                "22":{"sID":"14","sHeadImg":"1","sNick":"挥剑战天地","nRankLevel":1},
                "23":{"sID":"15","sHeadImg":"1","sNick":"王位之上","nRankLevel":1},
                "24":{"sID":"16","sHeadImg":"1","sNick":"王与冠","nRankLevel":1},
                "25":{"sID":"17","sHeadImg":"1","sNick":"弑神自封","nRankLevel":1},
                "26":{"sID":"18","sHeadImg":"1","sNick":"本宫不死丶你终究是妃","nRankLevel":1},
                "27":{"sID":"19","sHeadImg":"1","sNick":"理想三旬","nRankLevel":1},
                "28":{"sID":"11","sHeadImg":"2","sNick":"笑望人非","nRankLevel":1},
                "29":{"sID":"12","sHeadImg":"2","sNick":"半步沧桑","nRankLevel":1},
                "30":{"sID":"13","sHeadImg":"2","sNick":"再见ろ、天真","nRankLevel":1},
                "31":{"sID":"14","sHeadImg":"2","sNick":"欲握玫瑰必承其痛","nRankLevel":1},
                "32":{"sID":"15","sHeadImg":"2","sNick":"深知你是梦遥不可及","nRankLevel":1},
                "33":{"sID":"16","sHeadImg":"2","sNick":"靠天靠地不如靠自己","nRankLevel":1},
                "34":{"sID":"17","sHeadImg":"2","sNick":"中国移不动€","nRankLevel":1},
                "35":{"sID":"18","sHeadImg":"2","sNick":"蓉嬷嬷当年一枝花","nRankLevel":1},
                "36":{"sID":"19","sHeadImg":"2","sNick":"一身懵逼正气","nRankLevel":1},
                "37":{"sID":"20","sHeadImg":"1","sNick":"夏至春掩","nRankLevel":1},
                "38":{"sID":"21","sHeadImg":"1","sNick":"白衣未央","nRankLevel":1},
                "39":{"sID":"22","sHeadImg":"1","sNick":"蓝色树叶熊","nRankLevel":1},
                "40":{"sID":"23","sHeadImg":"1","sNick":"我一路向北、无怨无悔","nRankLevel":1},
                "41":{"sID":"24","sHeadImg":"1","sNick":"含笑半步颠","nRankLevel":1},
                "42":{"sID":"20","sHeadImg":"2","sNick":"少年ㄨ痴狂梦","nRankLevel":1},
                "43":{"sID":"21","sHeadImg":"2","sNick":"简单的等待","nRankLevel":1},
                "44":{"sID":"22","sHeadImg":"2","sNick":"君踏桃花归","nRankLevel":1},
                "45":{"sID":"23","sHeadImg":"2","sNick":"白衣卿相","nRankLevel":1},
                "46":{"sID":"24","sHeadImg":"2","sNick":"红衣枯骨女","nRankLevel":1},
                "47":{"sID":"25","sHeadImg":"2","sNick":"孑然一身。","nRankLevel":1},
            }
        }
        public getGamerInfo(){
            let id = this.RandomNumBoth(0,47);
            return this._GamerInfoMap[id];
        }
        public RandomNumBoth(Min:number,Max:number):number{
            let Range = Max - Min;
            let Rand = Math.random();
            let num = Min + Math.round(Rand * Range); //四舍五入
            return num;
        }
    }
}