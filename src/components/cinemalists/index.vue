<template>
    <div class="cinema_body">

        <Loading v-if="isLoading"></Loading>
        <Scroller v-else >
            <ul>
                <li v-for="item in clists" :key="item.id">
                        <div>
                            <span>{{ item.name }}</span>
                            <span class="q"><span class="price">{{ item.price }}</span> 元起</span>
                        </div>
                        <div class="address">
                            <span>{{ item.address }}</span>
                            <span>{{ item.distance}}</span>
                        </div>
                        <div class="card">
                            <div
                                    v-for="(num,key) in item.tag"
                                    v-if="num==='1'"
                                    :key="key"
                                    :class=" key | classCard "
                            >{{ key | formatCard }}</div>
                        </div>
                </li>
                <!-- <li v-for="item in cinemaList" :key="item.id">
                   <div>
                       <span>{{ item.nm }}</span>
                       <span class="q">
             <span class="price">{{ item.sellPrice }}</span> 元起
           </span>
                   </div>
                   <div class="address">
                       <span>{{ item.addr }}</span>
                       <span>{{ item.distance }}</span>
                   </div>
                   <div class="card">
                       <div
                               v-for="(num,key) in item.tag"
                               v-if="num===1"
                               :key="key"
                               :class=" key | classCard "
                       >{{ key | formatCard }}</div>
                   </div>
               </li>-->
           </ul>
        </Scroller>
   </div>
</template>

<script>
export default {
   name: "Cinemalists",
    data(){
       return{
           clists:[],
           isLoading: true
       }
    },
    mounted :function(){
        this.axios.get('/json/cinemas.json').then((res) => {
            this.isLoading =false
            this.clists = res.data
            console.log(this.clists)

        })

    },
    filters: {
        //过滤器
        formatCard(key) {
            const card = [
                { key: "gq", value: "可改签" },
                { key: "td", value: "可退票" },
                { key: "dz", value: "折扣卡" },
                { key: "xc", value: "送小吃" }
            ];
            for (let i = 0; i < card.length; i++) {
                if (card[i].key === key)  {
                    return card[i].value;
                }
            }
            return "";
        },
        classCard(key) {
            const card = [
                { key: "gq", value: "bl" },
                { key: "td", value: "bl" },
                { key: "dz", value: "or" },
                { key: "xc", value: "or" }
            ];
            for (let i = 0; i < card.length; i++) {
                if (card[i].key === key) {
                    return card[i].value;
                }
            }
            return "";
        }
    }

}
</script>

<style scoped>
    #content .cinema_body {
        flex: 1;
        overflow: auto;
    }
    .cinema_body ul {
        padding: 20px;
    }
    .cinema_body li {
        border-bottom: 1px solid #e6e6e6;
        margin-bottom: 20px;
    }
    .cinema_body div {
        margin-bottom: 10px;
    }
    .cinema_body .q {
        font-size: 11px;
        color: #f03d37;
    }
    .cinema_body .price {
        font-size: 18px;
    }
    .cinema_body .address {
        font-size: 13px;
        color: #666;
    }
    .cinema_body .address span:nth-of-type(2) {
        float: right;
    }
    .cinema_body .card {
        display: flex;
    }
    .cinema_body .card div {
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        color: #f90;
        border: 1px solid #f90;
        font-size: 13px;
        margin-right: 5px;
    }
    .cinema_body .card div.or {
        color: #f90;
        border: 1px solid #f90;
    }
    .cinema_body .card div.bl {
        color: #589daf;
        border: 1px solid #589daf;
    }
</style>
