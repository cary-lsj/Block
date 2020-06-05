namespace game {
    /**
     * 排行榜排名
     */
    export class RankItem extends eui.ItemRenderer {
        public txt_rank: eui.BitmapLabel;
        public txt_starNum: eui.BitmapLabel;
        public img_head: eui.Image;
        public lab_name: eui.Label;
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }

        public dataChanged(): void {
            let that = this;
            let data = that.data;
            that.txt_rank.text = data.rank;
            that.img_head.source = data.avatarUrl;
            that.lab_name.text = data.nickname;
            that.txt_starNum.text = data.star;
        }
    }
}