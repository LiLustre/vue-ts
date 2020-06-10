/*
* Created by lize on 2020/6/4
*/

import {Component, Prop, Vue, Watch} from "vue-property-decorator";
import CarBrandGroup from "@/components/CarBrandGroup";
import BScroll, {TranslaterPoint} from "@better-scroll/core";
import CarBrand from "@/components/CarBrand";
import Menu from "@/components/menu/menu.vue";

@Component({})
export default class CarBrandList extends Vue {

    @Prop({type: Array, default: () => []})
    carBrandGroups!: Array<CarBrandGroup>
    @Prop({type: Array, default: () => []})
    hotCarBrands!: CarBrand[];
    private isInitingSlide: boolean = false;
    public bScroll!: BScroll;
    public scrollY: number = -1
    public currentIndex: number = 0;
    public listHeight: number[] = [];
    public diff: number = -1
    private fixedTop: number = 0;
    private TITLE_HEIGHT: number = 40
    private ANCHOR_HEIGHT: number = 0
    public touchStartAnchorIndex: number = 0;
    public curAnchorIndex: number = 0;
    public lastTouchY: number = 0;
    public newTouchY: number = 0;
    public isShowCenterTitle: boolean = false;
    private headerHight: number = 0;


    mounted() {
        this.updateScroll();
    }

    public updateScroll() {
        this.$nextTick(() => {
            this.init();
        })
    }

    public init() {
        if (this.$refs.wraper) {
            if (this.isInitingSlide) {
                return;
            }
            this.isInitingSlide = true;
            if (!this.bScroll) {
                this.initScroll();
            } else {
                this.bScroll.destroy()
                //清除slide 子元素
                this.initScroll();
            }
        }
    }

    private initScroll() {
        this.bScroll = new BScroll((this.$refs.wraper as any), {
            scrollX: false,
            scrollY: true,
            click: true,
            probeType: 3,
        });
        this.bScroll.on('scroll', this.onScroll);
        this.TITLE_HEIGHT = this.$refs.groupTitle ? (this.$refs.groupTitle as Array<HTMLElement>)[0].clientHeight : 0;
        this.ANCHOR_HEIGHT = this.$refs.shortcutItem ? (this.$refs.shortcutItem as Array<HTMLElement>)[0].clientHeight : 0;
        if (this.$refs.hotCarBrand) {
            this.headerHight = (this.$refs.hotCarBrand as HTMLElement).clientHeight;
        }
        this.calculateHeight();
        this.isInitingSlide = false;
    }

    private onScroll(pos: TranslaterPoint) {
        this.scrollY = pos.y;
    }

    public getFixedTitle() {
        if (this.scrollY > -this.headerHight) {
            return ''
        }
        return this.carBrandGroups[this.currentIndex] ? this.carBrandGroups[this.currentIndex].title : ''
    }

    private calculateHeight() {
        this.listHeight = []
        let list: Element[] = (this.$refs.listGroup as Array<Element>)
        if (list) {
            let height = this.headerHight;
            this.listHeight.push(height)
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                height += item.clientHeight
                this.listHeight.push(height)
            }
        }

    }

    public onShortcutTouchStart(event: TouchEvent) {
        this.isShowCenterTitle = true;
        this.touchStartAnchorIndex = 0;
        this.lastTouchY = 0;
        if (event.target) {
            let anchorIndex = (event.target as HTMLElement).getAttribute('data-index');
            this.touchStartAnchorIndex = anchorIndex ? parseInt(anchorIndex) : 0;
            this.lastTouchY = event.touches[0].pageY
        }
        this.scrollTo(this.touchStartAnchorIndex);
    }

    public onShortcutTouchMove(event: TouchEvent) {
        this.isShowCenterTitle = true;
        let firstTouch = event.touches[0]
        this.newTouchY = firstTouch.pageY
        let delta = (this.newTouchY - this.lastTouchY) / this.ANCHOR_HEIGHT | 0
        let anchorIndex = this.touchStartAnchorIndex + delta
        this.scrollTo(anchorIndex)
    }

    public onShortcutTouchEnd(event: TouchEvent) {
        this.isShowCenterTitle = false;
    }

    public getCenterTitle() {
        if (this.curAnchorIndex >= 0 && this.curAnchorIndex < this.carBrandGroups.length) {
            return this.carBrandGroups[this.curAnchorIndex].title;
        }

        return ''
    }

    private scrollTo(index: number) {

        if (!index && index !== 0) {
            return
        }
        if (index < 0) {
            index = 0
        } else if (index > this.listHeight.length - 2) {
            index = this.listHeight.length - 2
        }

        this.curAnchorIndex = index;
        if (this.bScroll) {
            this.bScroll.scrollToElement((this.$refs.listGroup as Array<HTMLElement>)[index], 0)
            this.scrollY = this.bScroll.y;
        }
    }

    @Watch("scrollY")
    onScrollYChange() {
        let listHeight = this.listHeight
        // 当滚动到顶部，newY>0
        if (this.scrollY > 0) {
            this.currentIndex = 0
            return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
            let height1 = listHeight[i]
            let height2 = listHeight[i + 1]
            if (-this.scrollY >= height1 && -this.scrollY < height2) {
                this.currentIndex = i
                this.diff = height2 + this.scrollY
                return
            }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
    }

    @Watch("diff")
    onDiffChange() {
        let fixedTop: number = (this.diff > 0 && this.diff < this.TITLE_HEIGHT) ? this.diff - this.TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
            return
        }
        this.fixedTop = fixedTop;
        (this.$refs.fixed as HTMLElement).style.transform = `translate3d(0,${fixedTop}px,0)`
    }

    public onCarBrandClick(carBrand:CarBrand) {
        this.$emit('onCarBrandClick',carBrand);
    }
}