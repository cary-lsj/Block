namespace game {

    export class PKRankItem extends eui.ItemRenderer {
        public gamerInfo:game.GamerInfo;
        public txt_nRank:eui.Label;
        public txt_time:eui.Label;
        public txt_gold:eui.Label;
        public txt_nLevel:eui.Label;


        public bml_num2:eui.BitmapLabel;

        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
        }
        public dataChanged(): void {
            let data = this.data;
            this.gamerInfo.data = data;
            this.txt_gold.text = data.gold;
            this.txt_nRank.text = data.nRank;
            this.txt_time.text = data.time;
            this.txt_nLevel.text = data.nLevel;
        }

    }



}