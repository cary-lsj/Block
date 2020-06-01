var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var game;
(function (game) {
    var GamerInfo = (function (_super) {
        __extends(GamerInfo, _super);
        function GamerInfo() {
            var _this = _super.call(this) || this;
            _this.shape = new egret.Shape();
            _this.angle = 0;
            _this.percentLabel = new eui.Label();
            return _this;
        }
        GamerInfo.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.drawMask(this.headImg_bg, this.headImg);
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
        };
        GamerInfo.prototype.dataChanged = function () {
            var data = this.data;
            if (data.percent !== undefined) {
                var percent = (parseInt(data.percent) / game.$userData.pkRoomVO.playProtMoodNum * 100).toFixed(0);
                var angle = data.percent / game.$userData.pkRoomVO.playProtMoodNum * 360;
                this.changeGraphics(angle);
                console.log('dataChanged');
                percent = percent === '100' ? '已完成' : percent + '%';
                this.percentLabel.text = percent;
            }
            if (data.animation) {
                this.showAnimation();
            }
            this.gamer_name.text = data.sNick;
            if (data.sHeadImg.length >= 2) {
                this.headImg.source = data.sHeadImg;
            }
            else {
                var str = 'resource/assets/ai' + ("/img_head_t_" + data.sHeadImg + "_v_" + data.sID + ".png");
                //let str = 'http://39.106.31.205/resource/assets/ai'+ `/img_head_t_${data.sHeadImg}_v_${data.sID}.png`;
                //let str = 'https://www.lichiyang.club/block/resource/assets/ai'+ `/img_head_t_${data.sHeadImg}_v_${data.sID}.png`; 
                this.getHeadImg(str, data.sID);
            }
        };
        GamerInfo.prototype.drawMask = function (headImg_bg, headImg_0) {
            var circle_one = new egret.Shape();
            circle_one.graphics.beginFill(0x0000ff);
            circle_one.graphics.drawCircle(45, 45, 45);
            circle_one.graphics.endFill();
            this.addChild(circle_one);
            headImg_bg.mask = circle_one;
            var circle_img_one = new egret.Shape();
            circle_img_one.graphics.beginFill(0x0000ff);
            circle_img_one.graphics.drawCircle(45, 44, 40);
            circle_img_one.graphics.endFill();
            this.addChild(circle_img_one);
            headImg_0.mask = circle_img_one;
        };
        GamerInfo.prototype.changeGraphics = function (angle) {
            this.shape.graphics.clear();
            this.shape.graphics.beginFill(0xff0000, 0.3);
            this.shape.graphics.moveTo(45, 45);
            this.shape.graphics.lineTo(90, 45);
            this.shape.graphics.drawArc(45, 45, 45, 0, angle * Math.PI / 180, false);
            this.shape.graphics.lineTo(45, 45);
            this.shape.graphics.endFill();
        };
        GamerInfo.prototype.getHeadImg = function (sHeadImg, sID) {
            var self = this;
            var imgLoader = new egret.ImageLoader();
            imgLoader.crossOrigin = "anonymous"; // 跨域请求
            imgLoader.load(sHeadImg); // 去除链接中的转义字符‘\’        
            imgLoader.once(egret.Event.COMPLETE, function (evt) {
                if (evt.currentTarget.data) {
                    self.headImg.source = sHeadImg;
                    var GamerInfo_1 = game.$userData.pkRoomVO.getGamer(sID);
                    GamerInfo_1.sHeadImg = sHeadImg;
                    game.$userData.pkRoomVO.getGamer(sID).update(GamerInfo_1);
                }
            }, this);
            imgLoader.once(egret.IOErrorEvent.IO_ERROR, function (evt) {
                var url = "http://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83erb9KD8YAjeDxh2z5yMaVxxtHEaPkkKTfRrDCU1UWbE0RrfE64aHiclZAtB2OkoFWSYBiaymbNpc5aQ/132";
                self.headImg.source = url;
            }, this);
        };
        GamerInfo.prototype.showAnimation = function () {
            game.SoundManager.getInstance().PlaySound(game.SoundManager.mSmogAudioUrl);
            game.EffectManager.play('smog', this.animationGroup, 0, 0, 1, 60);
        };
        return GamerInfo;
    }(eui.ItemRenderer));
    game.GamerInfo = GamerInfo;
    __reflect(GamerInfo.prototype, "game.GamerInfo");
})(game || (game = {}));
