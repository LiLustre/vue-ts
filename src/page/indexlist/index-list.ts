/*
* Created by lize on 2020/6/4
*/

import {Component, Vue} from "vue-property-decorator";
import Data from "@/page/indexlist/data";
import CarBrand from "@/components/CarBrand";
import CarBrandGroup from "@/components/CarBrandGroup";
import CarBrandList from "../../components/carbrandlist/CarBrandList.vue"
import RightSideMenu from "../../components/menu/RightSideMenu.vue";
import CarIdKeyboard  from "../../components/keyboard/CarIdKeyboard.vue";

@Component({
    components: {
        'car-brand-list': CarBrandList,
        'side-menu': RightSideMenu,
        'carid-keyboard': CarIdKeyboard,
    }
})
export default class IndexList extends Vue {
    private carBrandStr: string = Data.dataStr;
    private hotCarBrandStr: string = Data.hotCarStr;
    public carBrandGroupArr: CarBrandGroup[] = [];
    public hotCarBrand: CarBrand[] = [];
    public curCarBrand: CarBrand | null = null;

    created() {
        this.getData();
    }

    private getData() {
        setTimeout(() => {
            let carBrandList: CarBrand[] = JSON.parse(this.carBrandStr);
            this.hotCarBrand = JSON.parse(this.hotCarBrandStr);
            this.buildCarBrandGroupList(carBrandList);
            this.$nextTick(() => {
                (this.$refs.carBrandList as any).updateScroll()
            })

        }, 600);

    }

    private buildCarBrandGroupList(carBrandList: CarBrand[]) {
        let map: Map<string, CarBrand[]> = new Map<string, CarBrand[]>();
        for (let carBrand of carBrandList) {

            if (map.has(carBrand.car_brand_initial)) {
                let carBrandArr: CarBrand[] | undefined = map.get(carBrand.car_brand_initial) ? map.get(carBrand.car_brand_initial) : [];
                carBrandArr?.push(carBrand);
            } else {
                let carBrandArr: CarBrand[] = [];
                carBrandArr.push(carBrand);
                map.set(carBrand.car_brand_initial, carBrandArr);
            }
        }
        let ret: CarBrandGroup[] = []
        map.forEach((value, key) => {
            let val = map.get(key);
            let carBrandGroup: CarBrandGroup = new CarBrandGroup();
            carBrandGroup.title = key;
            carBrandGroup.items = value;
            if (key.match(/[a-zA-Z]/)) {
                ret.push(carBrandGroup);
            }
        });
        ret.sort((a, b) => {
            // @ts-ignore
            return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        });
        this.carBrandGroupArr = ret;
    }

    mounted() {

    }

    public onCarBrandClickHandler(carBrand: CarBrand) {
        this.curCarBrand = carBrand;
        console.log('onCarBrandClickHandler:' + carBrand.car_brand_id);
        (this.$refs.menu as any).showMenu();
    }

    public onRootClick(){
        //console.log('111111111111111111111111111')
    }

}