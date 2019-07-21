<template>
    <div id="main">
        <Header title="观影助手"></Header>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="brand_swtich">
                    品牌 <i class="iconfont icon-lower-triangle"></i>
                </div>
                <div class="feature_switch">
                    特色 <i class="iconfont icon-lower-triangle"></i>
                </div>
            </div>
        <Cinemalists/>
        <Footer></Footer>
    </div>
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import Cinemalists from '@/components/cinemalists'
export default {
    name: "Cinema",
    components: {
        Header, Footer, Cinemalists
        //注意组件的名称首字符大写，上面使用的时候也是
    }
}
</script>

<style scoped>
    #content .cinema_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-around; align-items:center; background:white;}
</style>
