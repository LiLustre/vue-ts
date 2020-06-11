/*
* Created by lize on 2020/6/8
*/


import {Component, Prop, Vue} from "vue-property-decorator";

@Component({})
export default class BottomDialog extends Vue {
    public isShow: boolean = false;
    public menuIsShow: boolean = false;
    /*
    * 是否有蒙板颜色
    */
    @Prop({type: Boolean, default: true})
    public hasMaskColor!: boolean;
    /*
    * 是否自动隐藏
    * */
    @Prop({type: Boolean, default: true})
    public autoHiden!: boolean;

    public showMenu() {
        if (!this.isShow) {
            this.isShow = true;
            this.$emit('onBottomDialogShow');
        }
    }

    public onMaskClick(event: Event) {
        if (this.autoHiden) {
            //阻止元素发生默认的行为。
            event.preventDefault();
            // 方法阻止事件冒泡到父元素，阻止任何父事件处理程序被执行
            event.stopPropagation();
            this.hideDialog();
        }
    }

    private hideDialog() {
        if (this.isShow) {
            this.isShow = false;
            this.$emit('onBottomDialogHiden');
        }
    }

    public onContentClick() {

    }
}