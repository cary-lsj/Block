namespace game {
	/**
	 * 公告视图
	 * 
	 */
    export class NoticeView extends eui.Component implements ICacheable, IDispose {
        public sc_marqueen: eui.Scroller;
        public bg_notice: eui.Image;
        public txt_notice: eui.Label;

        public _duration: number;
        private _notice: string;

        public constructor() {
            super();
            this.horizontalCenter = 0;
            this.top = 230;
        }

        protected childrenCreated(): void {
            super.childrenCreated();

            this.bg_notice.visible = false;
        }

        public init(content: string): void {
            this._notice = content;
            this.invalidateProperties();
        }

        protected commitProperties(): void {
            super.commitProperties();
            this.txt_notice.textFlow = $parseHtml(this._notice);
            Notice.ExcuteMsg(this._notice,this);
        }

        public dispose() {
            this._notice = undefined;
            this.bg_notice.visible = false;
        }

        public onRecycle(): void {
            this.dispose();
        }

    }
}
