/*
* Created by lize on 2020/6/8
*/

import {Component, Vue} from "vue-property-decorator";
import BottomDialog from "../../components/base/bottomdialog/BottomDialog.vue";
import CarIDKey from "@/components/keyboard/carid-key";

@Component({
    components: {
        "bottom-dialog": BottomDialog,
    }
})
export default class CarIDKeyBroad extends Vue {

    public provincesRow: Array<any> = CarIDKey.provincesRow;
    public suffixRow: Array<any> = CarIDKey.suffixRow;
    public charNumberRow: Array<any> = CarIDKey.charNumberRow;
    public curentKeyboard: number = 0;

    public showKeyboard() {
        (this.$refs.bottomDialog as any).showMenu()
    }

    public onProvincesKeyTouchStart(column: any) {
        column.tipShowing = true;

    }

    public onProvincesKeyTouchMove(column: any) {

    }

    public onProvincesKeyTouchEnd(column: any) {
        column.tipShowing = false;
        if (column.keyValue) {
            this.onKeyClickEvent(column.keyValue);
        } else {
            this.onDelClickEvent();
        }
    }

    public onCarIDTouchStart(column: any) {
        column.tipShowing = true;
    }

    public onCarIDKeyTouchMove(column: any) {

    }

    public onCarIDKeyTouchEnd(column: any) {
        column.tipShowing = false;

        if (column.keyValue) {
            this.onKeyClickEvent(column.keyValue);
        } else {
            this.onDelClickEvent();
        }
    }

    public switchKeyboard(carIDPostion: number) {
        if (carIDPostion <= 0) {
            this.curentKeyboard = 0;
        } else {
            this.curentKeyboard = 1;
        }
    }

    public onHidenClick(){
        (this.$refs.bottomDialog as any).hideDialog()
    }

    public isNumKey(value: string) {
        if (value == '' || value.match(/[0-9]/)) {
            return true;
        }
        return false;
    }

    public onKeyClickEvent(keyValue: string) {
        this.$emit('onKeyClickEvent', keyValue)
    }

    public onDelClickEvent() {
        this.$emit('onDelClickEvent')
    }
}