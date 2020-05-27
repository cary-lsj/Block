namespace game {
    /**
     * 动画信息
     * @author wizardc
     */
    export interface IAnimationInfo {
        readonly file: string;
        readonly acts: string;
        readonly res: string;
        readonly type: string;
        readonly len: number;
        readonly dir: number;
        readonly speed: number;
        readonly subs: {x: number, y: number, ofx: number, ofy: number, width: number, height: number}[];
    }
}
