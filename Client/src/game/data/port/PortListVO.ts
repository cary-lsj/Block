namespace game {
    /**
     * 关卡列表数据
     * @author wizardc
     */
    export class PortListVO {
        public portList: PortVO[];
        public starNum: string;//玩家获得星星总数
        public keyNum: string;//玩家提示总数

        public updateList(data: any[]): void {
            for (let i = 0; i < data.length; i++) {
                let port = data[i];
                let vo = new PortVO();
                let mapvo = vo.mapVO = new MapVO();
                let moodListVO = vo.moodListVO = [];
                mapvo.init(port);
                vo.starNum = 0;
                vo.id = i + 1;
                if (i == 0) {
                    vo.state = PortType.unlocked;
                } else {
                    vo.state = PortType.lock;
                }
                try {
                    vo.update(port["map"]);
                } catch (e) {
                    console.log(e);
                    console.log("第" + vo.id + "关卡数据错误");
                }

                this.portList.push(vo);
            }
        }

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

         public updatePorts(data: any[], totalGate: number): void {
            for (let i = 0; i < data.length; i++) {
                if (data[i] && this.portList[i]) {
                    this.portList[i].starNum = data[i]["gatestar"];
                    this.portList[i].state = PortType.unlocked;
                }
            }
        }

        public updatePort(id: number, nStarNum: number): void {
            if(id < this.portList.length){
            this.portList[id - 1].starNum = nStarNum;
            this.portList[id].state = PortType.unlocked;
            }else if(id == this.portList.length){
                this.portList[id - 1].starNum = nStarNum;
            }
        }

        //更改星星总数
        public updateStarNum(stars:number){
           this.starNum = this.typeTransfrom(stars);
           $facade.dispatch(NotifyConst.updateStar);
        }

        //更改提示总数
        public updateKeyNum(keys:number){
            this.keyNum = this.typeTransfrom(keys);
            $facade.dispatch(NotifyConst.updateKey);
        }

        public typeTransfrom(num:Number){
             let strl: string = `${num}`;
            if(strl.length ===1)
            {
                strl = `00${strl}`;
            }else if(strl.length ===2){
                strl = `0${strl}`;
            }
            return strl;
        }

        public getPort(id: number) {
            return this.portList[id - 1];
        }

    }
}
