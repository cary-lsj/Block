//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {
    // private stageWidth:number;
    // private $stageHeight:number;
 

    public constructor() {
        super();
         this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.createView,this);
        
    }

    // private textField: egret.TextField;
       
    // private createView(): void {
    //     this.textField = new egret.TextField();
    //     this.addChild(this.textField);
    //     this.textField.y = 300;
    //     this.textField.width = 480;
    //     this.textField.height = 100;
    //     this.textField.textAlign = "center";
    // }

    //  public onProgress(current: number, total: number): void {
    //     this.textField.text = `Loading...${current}/${total}`;
    // }

     

      private textField: egret.TextField;
    //位图文件
    private Bg:egret.Bitmap;//背景
    // private BGimage:egret.Bitmap;//小背景图片
    // private loadingImage:egret.Bitmap;//loading图标
    private async createView() : Promise<void>  {
        this.width = 640;
        this.height = 1136;
 
        //加载大背景
        this.Bg = new egret.Bitmap();
        this.Bg.texture = RES.getRes('load_gif');
        this.Bg.width = this.width;
        this.Bg.height = this.height;
        this.addChild(this.Bg);
        
        //加载的背景图片
        // this.BGimage = new egret.Bitmap()
        // this.BGimage.texture = RES.getRes('toast-bg_png')
        // this.BGimage.anchorOffsetX = this.BGimage.width / 2
        // this.BGimage.anchorOffsetY = this.BGimage.height / 2
        // this.BGimage.x = this.width / 2
        // this.BGimage.y = this.height / 2
        // this.addChild(this.BGimage)
 
        // loading图标
        // this.loadingImage = new egret.Bitmap()
        // this.loadingImage.texture = RES.getRes('loading2_png')
        // //设置锚点
        // this.loadingImage.anchorOffsetX = this.loadingImage.width / 2
        // this.loadingImage.anchorOffsetY = this.loadingImage.height / 2
        // this.loadingImage.x = this.width / 2
        // this.loadingImage.y = this.height / 2
        // this.addChild(this.loadingImage)
 
         //文本
        this.textField = new egret.TextField();
        this.addChild(this.textField);
        this.textField.width = 480;
        this.textField.height = 20
        this.textField.y = this.height / 2 - this.textField.height / 2;
        this.textField.size = 14
        this.textField.textAlign = "center";
        // this.addEventListener(egret.Event.ENTER_FRAME,this.onFrame,this);
    }
   
    // private onFrame() {
    //     if(this.loadingImage) {
    //         this.loadingImage.rotation += 5;
    //     }
    // }
    
 
     public onProgress(current: number, total: number): void {
         if(this.textField) {
             this.textField.text = `Loading...${current}/${total}`;
         }
       
     }
}










