/*
* Created by lize on 2020/6/15
*/


import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class ReceiveCoupon extends Vue {
    public isShow: boolean = false;

    public onCloseClick() {
        this.hide();
    }

    private show() {
        if (!this.isShow) {
            this.isShow = true;
        }
    }

    public hide() {
        if (this.isShow) {
            this.isShow = false;
        }
    }

}