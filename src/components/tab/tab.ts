/*
* Created by lize on 2020/6/11
*/

import {Component, Vue} from "vue-property-decorator";
import BScroll from '@better-scroll/core';

@Component({})
export default class Tab extends Vue {
    public selectTabPos: number = 0;
    public tabArray: Array<String> = [
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
    ]

    private tab!: BScroll;

    mounted() {

        this.$nextTick(() => {
            this.tab = new BScroll((this.$refs.tabContent as HTMLElement), {
                scrollX: true,
                probeType: 3,
                click: true,
            });
        })

    }

    public onTabItemClick(index: number, event: Event) {
        this.selectTabPos = index;
        this.tab.scrollToElement(event.currentTarget);
    }

}