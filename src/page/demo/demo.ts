/*
* Created by lize on 2020/6/9
*/

import {Component, Vue} from "vue-property-decorator";

import CarIDInput from "../../components/caridinput/CarIDInput.vue";
import CarIdKeyboard from "../../components/keyboard/CarIdKeyboard.vue";
import TopDialog from "@/components/base/topdialog/TopDialog.vue";
import CarsPicker from "@/components/carspicker/CarsPicker.vue";

@Component({
    components: {
        'carid-input': CarIDInput,
        'carid-keyboard': CarIdKeyboard,
        'top-dailog': TopDialog,
        'cars-picker': CarsPicker
    }
})
export default class Demo extends Vue {
    public carGroup: Array<any> = [];

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

    public onCarSelected(carGroupPos: number, carPos: number) {
        console.log('carGroupPos' + carGroupPos);
        console.log('carPos' + carPos);

    }
}