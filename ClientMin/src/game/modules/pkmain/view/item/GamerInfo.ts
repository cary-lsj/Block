namespace game {

    export class GamerInfo extends eui.ItemRenderer {

        public headImg_bg:eui.Rect;
        public headImg:eui.Image;
        public gamer_name:eui.Label;
        public animationGroup:eui.Group;


        private _Mc:egret.MovieClip;

        private shape:egret.Shape = new egret.Shape();
        private angle = 0;
        private percentLabel:eui.Label = new eui.Label();

        public constructor() {
            super();
        }
        protected childrenCreated(): void {
            super.childrenCreated();
            this.drawMask(this.headImg_bg,this.headImg);
            this.addChild(this.shape);
            this.percentLabel.width = 90;
            this.percentLabel.height = 90;
            this.percentLabel.textColor = 0x00ffffff;
            this.percentLabel.size = 25;
            this.percentLabel.textAlign = 'center';
            this.percentLabel.verticalAlign = 'middle';
            this.addChild(this.percentLabel);
            this.animationGroup.x = 0;
            this.animationGroup.y = 0;
            this.animationGroup.scaleX = 0.6;
            this.animationGroup.scaleY = 0.6;
        }
        public dataChanged(): void {
            let data = this.data;
            if(data.percent !== undefined){
                let percent = (parseInt(data.percent)/$userData.pkRoomVO.playProtMoodNum*100).toFixed(0);
                let angle = data.percent/$userData.pkRoomVO.playProtMoodNum*360;
                this.changeGraphics(angle);
                console.log('dataChanged');
                percent = percent === '100' ? '已完成' : percent + '%';
                this.percentLabel.text = percent;
            }
            if(data.animation){
                this.showAnimation();
            }
            this.gamer_name.text = data.sNick;
            if(data.sHeadImg.length >= 2){
                this.headImg.source = data.sHeadImg;
            }else{
                let str = 'resource/assets/ai'+ `/img_head_t_${data.sHeadImg}_v_${data.sID}.png`;
                //let str = 'http://39.106.31.205/resource/assets/ai'+ `/img_head_t_${data.sHeadImg}_v_${data.sID}.png`;
                //let str = 'https://www.lichiyang.club/block/resource/assets/ai'+ `/img_head_t_${data.sHeadImg}_v_${data.sID}.png`; 
                this.getHeadImg(str,data.sID);
            }
            
                 
        }
        public drawMask(headImg_bg:eui.Rect,headImg_0:eui.Image){
            let circle_one:egret.Shape = new egret.Shape();
            circle_one.graphics.beginFill(0x0000ff);
            circle_one.graphics.drawCircle(45,45,45);
            circle_one.graphics.endFill();
            this.addChild(circle_one);
            headImg_bg.mask = circle_one;
            let circle_img_one:egret.Shape = new egret.Shape();
            circle_img_one.graphics.beginFill(0x0000ff);
            circle_img_one.graphics.drawCircle(45,44,40);
            circle_img_one.graphics.endFill();
            this.addChild(circle_img_one);
            headImg_0.mask = circle_img_one;
        }
        private changeGraphics(angle:number) {
            this.shape.graphics.clear();

            this.shape.graphics.beginFill(0xff0000,0.3);

            this.shape.graphics.moveTo(45, 45);
            this.shape.graphics.lineTo(90, 45);
            this.shape.graphics.drawArc(45, 45, 45, 0, angle * Math.PI / 180, false);
            this.shape.graphics.lineTo(45, 45);

            this.shape.graphics.endFill();
        }
        private getHeadImg(sHeadImg:string,sID:string){
            let self = this;
            let imgLoader = new egret.ImageLoader();
            imgLoader.crossOrigin = "anonymous";// 跨域请求
            imgLoader.load(sHeadImg);// 去除链接中的转义字符‘\’        
            imgLoader.once(egret.Event.COMPLETE, function (evt: egret.Event) {
                if (evt.currentTarget.data) {
                    self.headImg.source = sHeadImg;
                    let GamerInfo = $userData.pkRoomVO.getGamer(sID);
                    GamerInfo.sHeadImg = sHeadImg;
                    $userData.pkRoomVO.getGamer(sID).update(GamerInfo);
                }
            }, this);
            imgLoader.once(egret.IOErrorEvent.IO_ERROR, function (evt: egret.Event) {
                let url = "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erb9KD8YAjeDxh2z5yMaVxxtHEaPkkKTfRrDCU1UWbE0RrfE64aHiclZAtB2OkoFWSYBiaymbNpc5aQ/132";    
                self.headImg.source = url;   
            }, this);
        }
        private showAnimation(){
            SoundManager.getInstance().PlaySound(SoundManager.mSmogAudioUrl);
            game.EffectManager.play('smog',this.animationGroup,0,0,1,60,);
        }

    }



}