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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var game;
(function (game) {
    /**
     * 游戏断线
     * @author wizardc
     */
    var ConnectBreakCommand = (function (_super) {
        __extends(ConnectBreakCommand, _super);
        function ConnectBreakCommand() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ConnectBreakCommand.prototype.execute = function (notifyName) {
            switch (notifyName) {
                case 8 /* connectBreak */:
                    // Alert.show($lang(Lang.common_connectBreak_title), $lang(Lang.common_connectBreak_content), true, false, $lang(Lang.common_connectBreak_btn), this.onReconnect, this);
                    break;
                case 9 /* connectKick */:
                    // Alert.show($lang(Lang.common_connectKick_title), $lang(Lang.common_connectKick_content), true, false, $lang(Lang.common_connectKick_btn), this.onReconnect, this);
                    break;
            }
        };
        ConnectBreakCommand.prototype.onReconnect = function () {
            // this.model.connectServer(ExternalParams.websocketIP, ExternalParams.websocketPort);
        };
        __decorate([
            game.InjectProxy(1 /* login */)
        ], ConnectBreakCommand.prototype, "model", void 0);
        return ConnectBreakCommand;
    }(game.Command));
    game.ConnectBreakCommand = ConnectBreakCommand;
    __reflect(ConnectBreakCommand.prototype, "game.ConnectBreakCommand");
})(game || (game = {}));
