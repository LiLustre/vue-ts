/*
* Created by lize on 2020/6/10
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
export default class CarsPicker extends Vue {

    @Prop({type: Array, default: () => []})
    public carGroup!: Array<any>;
    private EVENT_SELECT: string = 'select';
    private EVENT_CANCEL: string = 'cancel';
    private EVENT_CHANGE: string = 'change';
    public curCarGroup: any = {};
    public selectedIndex: Array<number> = [0, 0];
    private wheels!: BScroll[];
    private prevSelectedIndex!: Array<number>;

    created() {


    }

    mounted() {

    }

    private loadPickerData(newSelectedIndex: Array<number>, oldSelectedIndex?: Array<number>) {
        if (!oldSelectedIndex) {
            this.curCarGroup = this.carGroup[newSelectedIndex[0]];
        } else {
            if (newSelectedIndex[0] !== oldSelectedIndex[0]) {
                this.curCarGroup = this.carGroup[newSelectedIndex[0]];
                this.$nextTick(() => {
                    this.wheels[1].refresh()
                    this.wheels[1].wheelTo(0);
                })
            }
        }

    }

    public createWheel() {
        if (this.$refs.wheelWrapper) {
            let wheelWrapper: HTMLElement = this.$refs.wheelWrapper as HTMLElement;
            for (let i: number = 0; i < wheelWrapper.children.length; i++) {
                if (this.wheels[i]) {
                    this.wheels[i].refresh();
                } else {
                    let wheel = new BScroll(wheelWrapper.children[i] as HTMLElement, {
                        wheel: {
                            selectedIndex: this.selectedIndex[i],
                            rotate:0,
                            wheelWrapperClass: 'wheel-scroll',
                            wheelItemClass: 'wheel-item'
                        },
                        click: true,
                        probeType: 3
                    })
                    this.prevSelectedIndex = this.selectedIndex;
                    this.wheels[i] = wheel;
                    this.wheels[i].on('scrollEnd', () => {
                        this.onWheelScrollEnd(i);
                    });
                }

            }
        }
    }

    private onWheelScrollEnd(i: number) {
        let currentSelectedIndex = this.wheels.map(wheel => wheel.getSelectedIndex());
        this.loadPickerData(currentSelectedIndex, this.prevSelectedIndex);
        this.prevSelectedIndex = currentSelectedIndex;
        this.$emit(this.EVENT_CHANGE, i, this.wheels[i].getSelectedIndex());
    }

    public showPicker() {
        (this.$refs.bottomDialog as any).showMenu();
        this.loadPickerData(this.selectedIndex, this.prevSelectedIndex);
        this.resetWheel();
    }

    public onBottomDialogHiden() {
        this.hide();
        this.$emit(this.EVENT_CANCEL);
    }

    private resetWheel() {
        if (!this.wheels) {
            this.$nextTick(() => {
                this.wheels = []
                this.createWheel();
            })
        } else {
            for (let i = 0; i < this.wheels.length; i++) {
                this.wheels[i].enable()
                this.wheels[i].wheelTo(this.selectedIndex[i])
            }
        }
    }

    public onConfirmClick() {
        if (this.wheelisMoving()) {
            return
        }
        this.hide();
        let currentSelectedIndex = this.selectedIndex = this.wheels.map(wheel => {
            return wheel.getSelectedIndex()
        });
        this.$emit(this.EVENT_SELECT, currentSelectedIndex[0],currentSelectedIndex[1]);
    }

    public onCancelClick() {
        this.hide();
        this.$emit(this.EVENT_CANCEL);
    }


    private hide() {
        (this.$refs.bottomDialog as any).hideDialog();
        for (let i = 0; i < this.wheels.length; i++) {
            this.wheels[i].disable()
        }
    }

    private wheelisMoving() {
        return this.wheels.some((wheel) => {
            return wheel.scroller.content.children && wheel.scroller.content.children.length > 0 && wheel.pending
        })
    }
}