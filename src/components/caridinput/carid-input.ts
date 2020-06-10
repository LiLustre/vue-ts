/*
* Created by lize on 2020/6/9
*/

import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class CarIDInput extends Vue {
    public carIDArray: Array<string> = new Array<string>(8);
    private curPos: number = 0;

    public onInputClick(index: number) {
        this.curPos = index;
        console.log('onInputClick ' + index)
        this.$emit('onCarIdItemSelected', index);

    }

    public getCurPos(): number {
        return this.curPos;
    }

    public setCarIDItemValue(value: string, pos?: number): void {
        if (pos) {
            if (pos < 0 || pos > this.carIDArray.length - 1) {
                return;
            } else {
                this.curPos = pos;
            }
        }
        this.carIDArray[this.curPos] = value;
        if (this.curPos >= 0 && this.curPos < this.carIDArray.length - 1) {
            this.curPos++;
        }
        this.$forceUpdate();
        this.$emit('onCarIdItemSelected', this.curPos);
    }

    public delCarIdValue() {
        this.carIDArray[this.curPos] = '';
        if (this.curPos > 0 && this.curPos <= this.carIDArray.length - 1) {
            this.curPos--;
        }
        this.$forceUpdate();
        this.$emit('onCarIdItemSelected', this.curPos);
    }

}