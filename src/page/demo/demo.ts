/*
* Created by lize on 2020/6/9
*/

import {Component, Vue} from "vue-property-decorator";

import CarIDInput from "../../components/caridinput/CarIDInput.vue";
import CarIdKeyboard from "../../components/keyboard/CarIdKeyboard.vue";
import TopDialog from "@/components/base/topdialog/TopDialog.vue";
import CarsPicker from "@/components/carspicker/CarsPicker.vue";
import SinglePicker from "@/components/singlepicker/SinglePicker.vue";
import Tab from "@/components/tab/Tab.vue";
import ReceiveCoupon from "@/components/receivecoupon/ReceiveCoupon.vue";

@Component({
    components: {
        'carid-input': CarIDInput,
        'carid-keyboard': CarIdKeyboard,
        'top-dailog': TopDialog,
        'cars-picker': CarsPicker,
        'single-picker': SinglePicker,
        'tab': Tab,
        'receive-coupon':ReceiveCoupon
    }
})
export default class Demo extends Vue {

    public carGroup: Array<any> = [];
    public singPickerData: Array<string> = [
        "辽A15457",
        "辽A15451",
        "辽A15452",
        "辽A15453",
        "辽A15454",
        "辽A15455",
        "辽A15457",
        "辽A15458",
    ];

    created() {
        setTimeout(() => {
            this.carGroup = [
                {
                    carGroupName: "我的爱车", carInfos: [
                        {carID: "辽A15457"},
                        {carID: "辽A4F57"},
                        {carID: "辽A1A457"},
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
            ]
        }, 300);
    }

    public tabArray: Array<string> = [];

    public mounted() {




        setTimeout(() => {
            this.tabArray = [
                "全部1",
                "嘉实多2",
                "出光3",
                "壳牌4",
                "美孚5",
                "嘉实多6",
                "出光7",
                "壳8",
                "嘉实多9",
                "出10",
                "壳牌11",
                "嘉实多12",
                "出光13",
                "壳牌14",
                "嘉实多15",
                "出光16",
                "壳牌17",
            ];
            this.$nextTick(() => {
                (this.$refs.tab as any).initScroll();
            })
        }, 500);
    }

    public onCarIDSelected(pos: number) {
        (this.$refs.caridKeyBoard as any).showKeyboard();
        (this.$refs.caridKeyBoard as any).switchKeyboard(pos);
    }

    public onKeyClickEvent(val: string) {
        (this.$refs.caridInput as any).setCarIDItemValue(val);
        (this.$refs.caridKeyBoard as any).switchKeyboard((this.$refs.caridInput as any).getCurPos());
    }

    public onDelClickEvent() {
        (this.$refs.caridInput as any).delCarIdValue();
    }


    public onTitleClick() {
        (this.$refs.topDialog as any).showMenu();
    }

    public onChoosCarClick() {
        this.$nextTick(() => {
            (this.$refs.carsPicker as any).showPicker();
        })

    }

    public onSinglePickerClick() {
        this.$nextTick(() => {
            (this.$refs.singlePicker as any).showPicker();
        })

    }

    public onSingleSelected(dataPos: number) {
        console.log('carGroupPos' + dataPos);
    }

    public onCarSelected(carGroupPos: number, carPos: number) {
        console.log('carGroupPos' + carGroupPos);
        console.log('carPos' + carPos);

    }

    public onTabSelected(tabIndex: number) {

        console.log('tabIndex' + tabIndex);

    }

    public onBtnClick(){
        (this.$refs.receiveCoupon as any).show();
    }

}