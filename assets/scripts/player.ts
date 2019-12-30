const { ccclass, property } = cc._decorator;

@ccclass
export default class Player extends cc.Component {


    private anim: cc.Animation = null;
    private firstArrive: boolean = true;
    onLoad() {
        this.anim = this.node.getComponent(cc.Animation);
    }

    start() {
        let self = this;
        this.scheduleOnce(() => {
            console.log("播放默认动画！");
            self.anim.play();
        }, 2);
    }

    arrivePoint() {
        if (this.firstArrive) {
            this.firstArrive = false;
            return;
        }

        let self = this;
        console.log("暂停播放");
        this.anim.pause();
        this.scheduleOnce(() => {
            console.log("继续播放");
            self.anim.resume();
        }, 2);
    }

    // update (dt) {}

    onDestroy() {
        // this.node.stopAllActions();
    }
}
