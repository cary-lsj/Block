namespace game {
    /** 对战房间数据 */
    export class RoomVO {
        /** 房间ID */
        public id: string;
        /**房主 */
        public bossID: string;
        /** 玩家数据 */
        public gamerList: GamerVO[];
        /** 当前对战关卡ID */
        public playProtPKId: number;
        /** 当前对战关卡中木块总个数 */
        public playProtMoodNum:number;
        /** 当前剩余时间 */
        public timeTick: number;
        /** 对手ID(道具使用对象) */
        public opponentID: string;
        /** 当前道具ID */
        public toolID:number;

        public room: gameMsg.Room;

        public update(room: gameMsg.IRoom) {
            let that = this;
            that.id = room.sRoomID;
            that.gamerList = [];
            that.bossID = room.sBossID;
            that.updateGamerList(room.gamers);
        }

        public updateGamerList(data: gameMsg.IGamer[]): void {
            for (let i = 0; i < data.length; i++) {
                let gamer = data[i];
                this.updateOneGamer(gamer);
            }
        }
        public updateOneGamer(gamer: gameMsg.IGamer) {
            let vo = new GamerVO();
            vo.update(gamer);
            this.gamerList.push(vo);
        }

        public updataRoomID(data: string): void {
            this.id = data;
        }

        public updataTimeTick(data: number): void {
            this.timeTick = data;
            $facade.dispatch(NotifyConst.updatePKTime);
        }

        public updataPortPKId(data: number): void {
            this.playProtPKId = data;
        }
        public getGamer(id:string):GamerVO{
            for(let i = 0;i < this.gamerList.length;i++){
                if(this.gamerList[i].sID === id){
                    return this.gamerList[i];
                }
            }
        }
        public removeGamer(id:string):void{
            for(let i = 0;i < this.gamerList.length;i++){
                if(this.gamerList[i].sID === id){
                    this.gamerList.remove(this.gamerList[i]);
                }
            }
        }
    }
}