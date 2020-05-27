namespace game {
    /**
     * 排行榜排名
     */
    export class RankItem extends eui.ItemRenderer {
        public txt_rank: eui.Label;
        public txt_starNum: eui.Label;
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let that = this;
            let data = that.data;
            that.txt_rank.text = data.nRank + 1;
            that.txt_starNum.text = data.starNum;
        }
    }
}