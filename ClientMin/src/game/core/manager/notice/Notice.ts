/**
 * 公告管理器
 */
namespace game.Notice {

    export function init(container: egret.DisplayObjectContainer): void {
        impl.init(container);
    }

    export function show(msg: string): void {
        impl.show(msg);
    }

    export function ExcuteMsg(msg: string, view: NoticeView): void {
        impl.ExcuteMsg(msg, view);
    }

    class Impl {
        private _container: egret.DisplayObjectContainer;
        public _noticeList: string[];
        private _duration: number;
        private _running: boolean;
        private _view: Recyclable<NoticeView>;

        public constructor() {
            this._noticeList = [];
        }

        public init(container: egret.DisplayObjectContainer): void {
            this._container = container;
        }

        public show(msgs: string): void {
            if (this._running) {
                this._noticeList.push(msgs);
            } else {
                this._running = true;
                if (!this._view) {
                    let view = this._view = recyclable(NoticeView);
                    this._container.addChild(view);
                }
                this._view.init(msgs);
            }
        }

        public ExcuteMsg(msg: string, view: NoticeView) {
            let label = view.txt_notice;
            view.bg_notice.visible = true;

            let offsetX = view.sc_marqueen.width + label.width + 110;
            view._duration = offsetX * 7;
            label.x = view.sc_marqueen.x + view.sc_marqueen.width;
            egret.Tween.get(label).to({ x: label.x - offsetX }, view._duration).wait(1000).call(() => {
                label.x += offsetX;
                this._running = false;
                label.textFlow = $parseHtml("");
                if (this._noticeList.length > 0) {
                    let temp: string = this._noticeList.shift();
                    this.show(temp);
                } else {
                    egret.Tween.removeTweens(label);
                    this.closeNotice(<any>view);
                }
            }, view);
        }

        private closeNotice(view: Recyclable<NoticeView>): void {
            this._running = false;
            this._view = undefined;
            view.removeSelf();
            view.onRecycle();
            view.recycle();
        }
    }

    const impl = new Impl();
}
