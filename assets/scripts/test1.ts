const { ccclass, property } = cc._decorator;

@ccclass
export default class Test1 extends cc.Component {


    // onLoad () {}

    start() {

    }

    private LoadA() {
        cc.director.loadScene("A");
    }

    // update (dt) {}


}
