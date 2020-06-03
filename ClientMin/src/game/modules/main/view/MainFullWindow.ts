namespace game {
    /**
     * 游戏主界面
     */
    export class MainFullWindow extends FullWindowBase<any> implements IModuleView {

        public map: game.MapMainItem;
        public grp_mood: eui.Group;
        public btn_menu: game.ScaleButton;
        public img_starbg: eui.Image;
        public starnum: eui.BitmapLabel;
        public map_rect: eui.Rect;
        public btn_key: game.ScaleButton;
        public keynum: eui.BitmapLabel;
        public btn_refresh: game.ScaleButton;
        public btn_setup: game.SetView;
        private _moodX: number;
        public constructor(test = "gameSkin.MainSkin") {
            super(test);
        }
        protected createComponent(): any {
            return undefined;

        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.btn_menu.on(egret.TouchEvent.TOUCH_TAP, this.onMenuClick, this);
            this.btn_refresh.on(egret.TouchEvent.TOUCH_TAP, this.onRefreshClick, this);
            this.btn_key.on(egret.TouchEvent.TOUCH_TAP, this.onKeyClick, this);
            this.btn_key.group.addChild(this.keynum);

        }

        protected onMenuClick(): void {
            this.dispatch(MainEvent.clickMenu, true)
        }
        protected onRefreshClick(): void {
            this.dispatch(MainEvent.clickRefresh, true)
        }
        protected onKeyClick(): void {
            this.dispatch(MainEvent.clickKey, true)
        }
        public updateData(data: GamePortVO) {
            this.map.data = data.GameMapVO.mapData;

            //map居中
            this.map.x = (640 - this.map.width) / 2;
            this.map.y = 1136 / 56 * 23 - (this.map.height / 2);
            this.map_rect.visible = false;

            this.refreshList(data.moodListVO);
        }
        //渲染木块
        public refreshList(data: MapVO[]): void {
            //打乱木块顺序 保证渲染出来是随机的
            let i = data.length;
            // 注释不规范代码
            // data.sort((a, b) => { return Math.random() > .5 ? -1 : 1; });
            while (i) {
                let j = Math.floor(Math.random() * i--);
                [data[i], data[j]] = [data[j], data[i]];
            }

            this.getGenWidth(data);
            //遍历 保证所有的木块都能被渲染
            for (let i = 0; i < data.length; i++) {

                let vo = data[i];
                this.setcoloer(vo, i);
                //创建一个 木块对象
                let mood: MapMoodItem = this.refresh_mapmood(vo);

                //设置木块位置信息
                mood.y = 750;
                mood.x = this._moodX;
                this._moodX += (vo.colGrids + 1) * MapUtil.mapGridWidth * 0.5;
                //木块初始化
                mood.initmapMood(mood.x, mood.y);
                //把木块添加到舞台上
                this.grp_mood.addChild(mood);
            }
        }
        public setcoloer(vo: MapVO, i: number) {
            if (i >= 0 && i < 6) {
                vo.type = i + 1;
            } else if (i < 12) {
                vo.type = i - 5;
            } else {
                console.log("颜色设置出错！")
            }
        }
        public getGenWidth(data: MapVO[]): number {
            var scol: number = 0;
            for (let i = 0; i < data.length; i++) {
                let vo = data[i];
                scol += vo.colGrids + 1;
                if (scol > 25) {
                    scol -= vo.colGrids + 1;
                    //跳出循环
                    break;
                }
            }
            let swidth: number = (scol - 1) * MapUtil.mapGridWidth * 0.5;
            this._moodX = (this.width - swidth) / 2;
            return this._moodX;
        }
        public refresh_mapmood(vo: MapVO): MapMoodItem {
            let mood = new MapMoodItem();
            mood.data = vo;
            this.dispatch(MainEvent.initPos, true, vo);
            return mood;
        }
        public refresh_keymood(vo: MapVO): KeyMoodItem {
            let mood = new KeyMoodItem();
            mood.data = vo;
            return mood;
        }
        public gameover() {
            this.map.removeChildren();
            this.grp_mood.removeChildren();
        }
    }
}