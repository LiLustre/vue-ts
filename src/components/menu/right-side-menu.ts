import {Component, Vue} from "vue-property-decorator";

@Component({})
export default class RightSideMenu extends Vue {


    public isShow: boolean = false;
    public menuIsShow: boolean = false;

    public showMenu() {
        if (!this.isShow) {
            this.isShow = true
            this.$nextTick(() => {
                this.menuIsShow = this.isShow;
            })
        }

    }

    public onBackGroudClick() {
        if (this.menuIsShow&&this.isShow) {
            this.menuIsShow = false;
            this.$nextTick(() => {
                setTimeout(() => {
                    this.isShow = false;
                }, 300)

            })
        }


    }

}