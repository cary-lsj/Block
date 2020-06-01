var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var game;
(function (game) {
    /**
     * 关卡列表数据
     * @author wizardc
     */
    var PortListVO = (function () {
        function PortListVO() {
        }
        PortListVO.prototype.updateList = function (data) {
            for (var i = 0; i < data.length; i++) {
                var port = data[i];
                var vo = new game.PortVO();
                var mapvo = vo.mapVO = new game.MapVO();
                var moodListVO = vo.moodListVO = [];
                mapvo.init(port);
                vo.starNum = 0;
                vo.id = i + 1;
                if (i == 0) {
                    vo.state = 1 /* unlocked */;
                }
                else {
                    vo.state = 0 /* lock */;
                }
                try {
                    vo.update(port["map"]);
                }
                catch (e) {
                    console.log(e);
                    console.log("第" + vo.id + "关卡数据错误");
                }
                this.portList.push(vo);
            }
        };
        // public updatePorts(data: any[], totalGate: number): void {
        //     for (let i = 0; i < totalGate; i++) {
        //         let vo = new PortVO();
        //         if (data[i]) {
        //             vo.starNum = data[i]["starNum"];
        //             vo.id = data[i]["id"] + 1;
        //             vo.state = PortType.unlocked;
        //         } else {
        //             vo.starNum = 0;
        //             vo.id = i + 1;
        //             vo.state = PortType.lock;
        //         }
        //         this.portList.push(vo);
        //     }
        // }
        PortListVO.prototype.updatePorts = function (data, totalGate) {
            for (var i = 0; i < data.length; i++) {
                if (data[i] && this.portList[i]) {
                    this.portList[i].starNum = data[i]["gatestar"];
                    this.portList[i].state = 1 /* unlocked */;
                }
            }
        };
        PortListVO.prototype.updatePort = function (id, nStarNum) {
            if (id < this.portList.length) {
                this.portList[id - 1].starNum = nStarNum;
                this.portList[id].state = 1 /* unlocked */;
            }
            else if (id == this.portList.length) {
                this.portList[id - 1].starNum = nStarNum;
            }
        };
        //更改星星总数
        PortListVO.prototype.updateStarNum = function (stars) {
            this.starNum = this.typeTransfrom(stars);
            game.$facade.dispatch(17 /* updateStar */);
        };
        //更改提示总数
        PortListVO.prototype.updateKeyNum = function (keys) {
            this.keyNum = this.typeTransfrom(keys);
            game.$facade.dispatch(16 /* updateKey */);
        };
        PortListVO.prototype.typeTransfrom = function (num) {
            var strl = "" + num;
            if (strl.length === 1) {
                strl = "00" + strl;
            }
            else if (strl.length === 2) {
                strl = "0" + strl;
            }
            return strl;
        };
        PortListVO.prototype.getPort = function (id) {
            return this.portList[id - 1];
        };
        PortListVO.prototype.setPort = function (port) {
            if (port === void 0) { port = 0; }
            game.setItem("port", port);
            var list = this.portList;
            for (var i = 0; i < list.length - 1; i++) {
                if (i < port) {
                    list[i].starNum = 3;
                    list[i + 1].state = 1 /* unlocked */;
                }
            }
        };
        return PortListVO;
    }());
    game.PortListVO = PortListVO;
    __reflect(PortListVO.prototype, "game.PortListVO");
})(game || (game = {}));
