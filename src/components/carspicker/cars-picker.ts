/*
* Created by lize on 2020/6/10
*/

import {Component, Vue} from "vue-property-decorator";
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
    public carGroup: Array<any> = [
        {
            carGroupName: "我的爱车", carInfos: [
                {carID: "辽A15457"},
                {carID: "辽A4F57"},
                {carID: "辽A1A457"},
                {carID: "辽A15C57"},
                {carID: "辽A12557"},
                {carID: "辽A15457"},
                {carID: "辽A15457"},
                {carID: "辽A15457"},
            ]
        },
        {
            carGroupName: "别人爱车", carInfos: [
                {carID: "吉A15457"},
                {carID: "吉A4F57"},
                {carID: "吉A1A457"},
                {carID: "吉A15C57"},
                {carID: "吉A12557"},
                {carID: "吉A15457"},
                {carID: "吉A15457"},
                {carID: "吉A15457"},
            ]
        }
    ];
    public curCarGroup: any = {};
    public pickerData: Array<any> = [];
    public selectedIndex: Array<number> = [0, 0];
    private wheels: BScroll[] = [];

    created() {
        this._loadPickerData(this.selectedIndex, undefined);

    }

    mounted() {
        this.createWheel();
    }

    _loadPickerData(newSelectedIndex: Array<number>, oldSelectedIndex?: Array<number>) {

        if (!oldSelectedIndex) {
            this.curCarGroup = this.carGroup[newSelectedIndex[0]];
        } else {
            if (newSelectedIndex[0] !== oldSelectedIndex[0]) {
                this.curCarGroup = this.carGroup[newSelectedIndex[0]];
                this.$nextTick(() => {
                     this.wheels[1].refresh()
                })
            }
        }

    }

    public createWheel() {
        if (this.$refs.wheelWrapper) {
            let wheelWrapper: HTMLElement = this.$refs.wheelWrapper as HTMLElement;
            for (let i = 0; i < wheelWrapper.children.length; i++) {
                if (!this.wheels[i]) {
                    let wheel = new BScroll(wheelWrapper.children[i] as HTMLElement, {
                        wheel: {
                            selectedIndex: 0,
                            wheelWrapperClass: 'wheel-scroll',
                            wheelItemClass: 'wheel-item'
                        },
                        click:true,
                        probeType: 3
                    })
                    console.log('initScroll')
                    this.wheels[i] = wheel;
                    this.wheels[i].on('scrollEnd', this.onScrollEnd)
                } else {
                    this.wheels[i].refresh();
                }

            }
        }
    }

    public onScrollEnd() {
        //const currentSelectedIndex = wheels.map(wheel => wheel.getSelectedIndex())
        //this._loadPickerData(currentSelectedIndex, prevSelectedIndex)
        //prevSelectedIndex = currentSelectedIndex
        //this.$emit(EVENT_CHANGE, i, this.wheels[i].getSelectedIndex())
    }

    public showPicker() {
        (this.$refs.bottomDialog as any).showMenu();
    }

}