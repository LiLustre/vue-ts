/*
* Created by lize on 2020/6/11
*/

import {Component, Prop, Vue} from "vue-property-decorator";
import BScroll from '@better-scroll/core';

@Component({})
export default class Tab extends Vue {
    public selectTabPos: number = 0;
    @Prop({type: Array, default: ()=>[]})
    public tabArray!: Array<string> ;
    private TAB_SELECTED_EVENT:string ="tabSelected";
    private tab!: BScroll;

    mounted() {

    }

    public initScroll() {
        this.$nextTick(() => {
            if (!this.tab) {
                if (this.$refs.tabContent) {
                    this.tab = new BScroll((this.$refs.tabContent as HTMLElement), {
                        scrollX: true,
                        probeType: 3,
                        click: true,
                    });
                }
            } else {
                this.tab.refresh();
            }
        })
    }

    public onTabItemClick(index: number, event: Event) {
        this.selectTabPos = index;
        if (event.currentTarget && this.$refs.tabContent) {
            let diffLeftx = (event.currentTarget as HTMLElement).getBoundingClientRect().left - (this.$refs.tabContent as HTMLElement).getBoundingClientRect().left;
            let diffRightx = (this.$refs.tabContent as HTMLElement).getBoundingClientRect().right - (event.currentTarget as HTMLElement).getBoundingClientRect().right;
            if (diffLeftx < 0 || diffRightx < 0) {
                if (diffLeftx < 0) {
                    this.tab.scrollBy(-diffLeftx, 0, 300);
                } else if (diffRightx < 0) {
                    this.tab.scrollBy(diffRightx, 0, 300);
                }
            }
        }
        this.$emit('tabSelected',index);

    }

}