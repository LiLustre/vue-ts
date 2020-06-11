/*
* Created by lize on 2020/6/11
*/

import {Component, Prop, Vue} from "vue-property-decorator";
import BottomDialog from "@/components/base/bottomdialog/BottomDialog.vue";
import CarIDKey from "@/components/keyboard/carid-key";
import BScroll from '@better-scroll/core';
import Wheel from '@better-scroll/wheel';

BScroll.use(Wheel);

@Component({
    components: {
        'bottom-dialog': BottomDialog,
    }
})
export default class SinglePicker extends Vue {
    /*
    * picker数据
    * */
    @Prop({type: Array, default: () => []})
    public pickerData!: Array<string>;
    @Prop({type: String, default: ''})
    /*
    * 窗口标题
    * */
    public dialogTitle!: string;
    /*
    * picker标题
    * */
    @Prop({type: String, default: ''})
    public pickerTitle!: string;
    /*
    * 事件
    *
    * */
    private EVENT_SELECT: string = 'select';
    private EVENT_CANCEL: string = 'cancel';
    private EVENT_CHANGE: string = 'change';

    public selectedIndex: number = 0;
    private wheel!: BScroll;
    private prevSelectedIndex!: number;

    created() {
    }

    mounted() {

    }

    private createWheel() {
        if (this.$refs.wheelWrapper) {
            let wheelWrapper: HTMLElement = this.$refs.wheelWrapper as HTMLElement;
            if (this.wheel) {
                this.wheel.refresh();
            } else {
                let wheel = new BScroll(wheelWrapper.children[0] as HTMLElement, {
                    wheel: {
                        selectedIndex: this.selectedIndex,
                        rotate: 0,
                        wheelWrapperClass: 'wheel-scroll',
                        wheelItemClass: 'wheel-item'
                    },
                    click: true,
                    probeType: 3,
                })
                this.prevSelectedIndex = this.selectedIndex;
                this.wheel = wheel;
                this.wheel.on('scrollEnd', this.onWheelScrollEnd);
            }

        }
    }


    private onWheelScrollEnd() {
        let currentSelectedIndex = this.wheel.getSelectedIndex();
        this.prevSelectedIndex = currentSelectedIndex;
        this.$emit(this.EVENT_CHANGE, currentSelectedIndex);
    }

    public showPicker() {
        (this.$refs.bottomDialog as any).showMenu();
        this.resetWheel();
    }

    public onBottomDialogHiden() {
        this.hide();
        this.$emit(this.EVENT_CANCEL);
    }

    private resetWheel() {
        if (!this.wheel) {
            this.$nextTick(() => {
                this.createWheel();
            })
        } else {
            this.wheel.enable()
            this.wheel.wheelTo(this.selectedIndex)
        }
    }

    public onConfirmClick() {
        if (this.wheelisMoving()) {
            return
        }
        this.hide();
        let currentSelectedIndex = this.selectedIndex = this.wheel.getSelectedIndex();
        this.$emit(this.EVENT_SELECT, currentSelectedIndex);
    }

    public onCancelClick() {
        this.hide();
        this.$emit(this.EVENT_CANCEL);
    }


    private hide() {
        (this.$refs.bottomDialog as any).hideDialog();
        this.wheel.disable();
    }

    private wheelisMoving() {
        return this.wheel.scroller.content.children && this.wheel.scroller.content.children.length > 0 && this.wheel.pending
    }
}