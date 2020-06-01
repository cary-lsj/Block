namespace game {
    /**
     * 小方块 地图 item
     */
    export class MapMoodItem extends MoodBase {
        protected _OffsetX: number;
        protected _OffsetY: number;
        private startX: number;
        private startY: number;
        private _isDown: boolean = false;

        public type:string;
        public index: number;
        
        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.on(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBeginHadler, this);
            this.on(egret.TouchEvent.TOUCH_END, this.onTouchEndHadler, this);
            this.on(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this.onTouchEndHadler, this);
            this.on(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHadler, this);
        }
        //木块初始化
        public initmapMood(x:number,y:number){
            this.startX=x;
            this.startY=y;
            this.scaleX = 0.6;
            this.scaleY = 0.6;
        }
        public dataChanged(): void {
            super.dataChanged();
        }
        protected onTouchTapHadler(e: egret.TouchEvent) {
            this.dispatch(MainEvent.endMood, true);
        }

        protected onTouchBeginHadler(e: egret.TouchEvent) {
            this._isDown = true;
            let point = new egret.Point(e.stageX, e.stageY);
            this.dispatch(MainEvent.beginMood, true, point);
            //计算手指和按钮的距离
            this._OffsetX = e.stageX - this.x;
            this._OffsetY = e.stageY - this.y;
            $stage.on(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveHadler, this);
            this.on(egret.TouchEvent.TOUCH_TAP, this.onTouchTap, this);

            egret.Tween.get(this).to({ scaleX: 1, scaleY: 1 }, 50, egret.Ease.sineIn);
        }

        protected onTouchMoveHadler(e: egret.TouchEvent) {
            this.x = e.stageX - this._OffsetX;
            this.y = e.stageY - this._OffsetY;
            this.dispatch(MainEvent.removeKeymood, true);
            this.off(egret.TouchEvent.TOUCH_TAP, this.onTouchTapHadler, this);
        }
        protected onTouchEndHadler(e: egret.TouchEvent) {
            if (this._isDown) {
                this._isDown = false;
                //手指离开屏幕，移除手指移动的监听
                $stage.off(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoveHadler, this);
                this.dispatch(MainEvent.endMood, true);
            }
        }
        public onTouchTap() {
            // console.log("点击次数过多！");
        }
        //移除场景地图中的方块地图数据
        public removemood(): void {
            let vo = this.data as MapVO;
            this.dispatch(MainEvent.removeMood, true, vo);
        }
        //木块返回原位
        public restart(): void {
            egret.Tween.get(this).to({ x: this.startX, y: this.startY, scaleX: 0.6, scaleY: 0.6 }, 500, egret.Ease.backInOut).call(this.rechindex,this);
            let vo = this.data as MapVO;
            this.dispatch(MainEvent.initPos,true,vo);
         
        }
        public rechindex():void{
            if(this.index==null)
            {
                return;
            }
            this.dispatch(MainEvent.rechildindex,true);
        }
        //修改场景地图数据，检查是否完成对局
        public modifymapdata(vo: MapVO): void {
            this.dispatch(MainEvent.addMood, true, vo);
        }
    }
}