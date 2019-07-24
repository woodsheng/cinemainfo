<template>
    <div class="city_body">
         <div class="city_list" >
             <Loading v-if="isLoading"></Loading>
             <Scroller v-else  ref="city_List">
                 <div>
                     <div class="city_hot">
                         <h2>热门城市</h2>
                         <ul class="clearfix">
                             <li v-for="item in hotList" :key="item.id" @tap="handleToCity(item.name,item.id,item.areaid)">{{ item.name}}</li>
                         </ul>
                     </div>
                     <div class="city_sort" ref="city_sort">
                         <div v-for="item in cityList" :key="item.index">
                             <h2>{{ item.index }}</h2>
                             <ul>
                                 <li v-for="city in item.list" :key="city.id" @tap="handleToCity(city.name,city.id,city.areaid)">{{ city.name }}</li>
                             </ul>
                         </div>
                     </div>
                 </div>

             </Scroller>
        </div>
        <div class="city_index">
            <ul>
                <li :key="item.index" @touchstart="handleToIndex(index)" v-for="(item,index) in cityList">{{ item.index }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
function formatCityList(cities) {
    let cityList = [];
    let hotList = [];

    //热门城市
    for(let i=0;i<cities.length;i++){
        if  (cities[i].hot === "1") {
            hotList.push(cities[i]);
        }
    }

    //检查索引的字母是否存在了
    function toCom(firstLetter) {
        for(let i=0;i<cityList.length;i++){
            if( cityList[i].index ===  firstLetter){
                return false;
            }
        }
        return true;
    }

    //加入到城市列表信息中去
    for(let i=0;i<cities.length;i++){
        let firstLetter = cities[i].pinyin.substring(0,1);
        if(toCom(firstLetter)){  //新添加index
            cityList.push({ index : firstLetter , list : [ { name: cities[i].name, id : cities[i].id, areaid : cities[i].areaid } ] });
        }
        else{   //累加到已有index中
            for(let j=0;j<cityList.length;j++){
                if( cityList[j].index === firstLetter ){
                    cityList[j].list.push( { name : cities[i].name , id : cities[i].id, areaid : cities[i].areaid } );
                }
            }
        }
    }
    //城市列表中排序
    cityList.sort((n1,n2)=>{
        if( n1.index > n2.index ){
            return 1;
        }
        else if(n1.index < n2.index){
            return -1;
        }
        else{
            return 0;
        }
    });
    return {
        cityList,
        hotList
    };
}

export default {
    name: "City",
    data() {
       return {
           cityList:[],
           hotList:[],
           isLoading : true,
        }
    },
    mounted: function () {
        const cityList = window.localStorage.getItem('cityList');
        const hotList = window.localStorage.getItem('hotList');
        if(cityList && hotList){
            this.cityList = JSON.parse(cityList);
            this.hotList = JSON.parse(hotList);

            this.isLoading = false;
        }
        else {
            this.axios.get('/json/city.json').then((res) => {
                this.isLoading = false
                let cities = res.data
                //[ { index : 'A' , list : [{ name : '阿城' , id : '123000' ,areaid : '1'}] } ]
                let {cityList, hotList} = formatCityList(cities);
                this.cityList = cityList;
                this.hotList = hotList;

                window.localStorage.setItem('cityList' , JSON.stringify(cityList));
                window.localStorage.setItem('hotList' , JSON.stringify(hotList));
            })
        }
    },
    methods : {
      handleToIndex (index)  {
        let h2 = this.$refs.city_sort.getElementsByTagName('h2')
       // this.$refs.city_sort.parentNode.scrollTop = h2[index].offsetTop
          this.$refs.city_List.toScrollTop(-h2[index].offsetTop);
      },
        handleToCity(name,id,areaid){
            this.$store.commit('city/CITY_INFO',{ name , id, areaid });
             window.localStorage.setItem('nowName',name);
             window.localStorage.setItem('nowId',id);
            window.localStorage.setItem('nowAreaId',areaid);
            this.$router.push('/movie/running');
        }
    }
}
</script>

<style scoped>
    #content .city_body{ margin-top: 45px; display: flex; width:100%; position: absolute; top: 0; bottom: 0;}
    .city_body .city_list{ flex:1; overflow: auto; background: #FFF5F0;}
    .city_body .city_list::-webkit-scrollbar{
        background-color:transparent;
        width:0;
    }
    .city_body .city_hot{ margin-top: 20px;}
    .city_body .city_hot h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_hot ul li{ float: left; background: #fff; width: 29%; height: 33px; margin-top: 15px; margin-left: 3%; padding: 0 4px; border: 1px solid #e6e6e6; border-radius: 3px; line-height: 33px; text-align: center; box-sizing: border-box;}
    .city_body .city_sort div{ margin-top: 20px;}
    .city_body .city_sort h2{ padding-left: 15px; line-height: 30px; font-size: 14px; background:#F0F0F0; font-weight: normal;}
    .city_body .city_sort ul{ padding-left: 10px; margin-top: 10px;}
    .city_body .city_sort ul li{ line-height: 30px; line-height: 30px;}
    .city_body .city_index{ width:20px; display: flex; flex-direction:column; justify-content:center; text-align: center; border-left:1px #e6e6e6 solid;}
</style>
