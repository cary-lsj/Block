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
    /**
     * 场景
     */
    var SceneView = (function (_super) {
        __extends(SceneView, _super);
        function SceneView() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SceneView.prototype.childrenCreated = function () {
            _super.prototype.childrenCreated.call(this);
            this.percentHeight = 100;
            this.percentWidth = 100;
        };
        Object.defineProperty(SceneView.prototype, "layer", {
            get: function () {
                return 2 /* bottomLayer */;
            },
            enumerable: true,
            configurable: true
        });
        return SceneView;
    }(eui.Component));
    game.SceneView = SceneView;
    __reflect(SceneView.prototype, "game.SceneView", ["game.IModuleView"]);
})(game || (game = {}));
