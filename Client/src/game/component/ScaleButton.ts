namespace game {
    /**
     * 可缩放按钮
     * @author wizardc
     */
    export class ScaleButton extends eui.Button {
        public group: eui.Group;

        private _bg: eui.Image;
        private _scaleValue: number = 1.05;
        private _useImageSize: boolean = false;

        public set scaleValue(value: number) {
            this._scaleValue = value;
        }
        public get scaleValue(): number {
            return this._scaleValue;
        }

        public set useImageSize(value: boolean) {
            this._useImageSize = value;
        }
        public get useImageSize(): boolean {
            return this._useImageSize;
        }

        protected childrenCreated(): void {
            super.childrenCreated();

            if (this.numChildren > 0) {
                let bg = this.getChildAt(0);
                if (bg instanceof eui.Image) {
                    this._bg = bg;
                }
            }
            if (this._bg) {
                this._bg = this.getChildAt(0) as eui.Image;
                this._bg.includeInLayout = false;
                if (this._useImageSize) {
                    this.updateSize();
                    this._bg.on(egret.Event.COMPLETE, this.updateSize, this);
                }
            }
            if (this.group) {
                this.group.includeInLayout = false;
            }
        }

        private updateSize(event?: egret.Event): void {
            if (this._bg.texture) {
                this.width = this._bg.texture.textureWidth;
                this.height = this._bg.texture.textureHeight;
            }
        }

        protected onTouchBegin(event: egret.TouchEvent): void {
            super.onTouchBegin(event);
            this.$stage.on(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = this._scaleValue;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = this._scaleValue;
            }
        }

        protected onTouchCancle(event: egret.TouchEvent): void {
            super.onTouchCancle(event);
            event.$currentTarget.off(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = 1;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = 1;
            }
        }

        private onStageTouchEnd2(event: egret.Event): void {
            event.$currentTarget.off(egret.TouchEvent.TOUCH_END, this.onStageTouchEnd2, this);
            if (this._bg) {
                this._bg.scaleX = this._bg.scaleY = 1;
            }
            if (this.group) {
                this.group.scaleX = this.group.scaleY = 1;
            }
        }

        protected updateDisplayList(unscaledWidth: number, unscaledHeight: number): void {
            super.updateDisplayList(unscaledWidth, unscaledHeight);

            let bg = this._bg;
            let group = this.group;
            if (bg) {
                bg.width = unscaledWidth;
                bg.height = unscaledHeight;
                bg.x = bg.anchorOffsetX = unscaledWidth >> 1;
                bg.y = bg.anchorOffsetY = unscaledHeight >> 1;
            }
            if (group) {
                group.width = unscaledWidth;
                group.height = unscaledHeight;
                group.x = group.anchorOffsetX = unscaledWidth >> 1;
                group.y = group.anchorOffsetY = unscaledHeight >> 1;
            }
        }

    }

    eui.registerProperty(ScaleButton, "scaleValue", "number");
    eui.registerProperty(ScaleButton, "useImageSize", "boolean");
    window["ScaleButton"] = ScaleButton;
}

