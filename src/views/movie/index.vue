<template>
    <div id="main">
        <Header title="观影助手"></Header>
        <div id="content">
            <div class="movie_menu">
                <router-link tag="div" to="/movie/city" class="city_name">
                    <span>{{ $store.state.city.name }}</span><i class="iconfont icon-lower-triangle"></i>
                </router-link>
                <div class="hot_swtich">
                    <router-link tag="div" to="/movie/running" class="hot_item">正在热映</router-link>
                    <router-link tag="div" to="/movie/upcoming" class="hot_item">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_entry">
                    <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
            <keep-alive>
                <router-view />
            </keep-alive>
        </div>
        <Footer></Footer>
        <router-view name="detail" />
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
import { messageBox} from '@/components/jscoms'

export default {
    name: "Movie",
    components: {
        Header, Footer
    } ,
    mounted(){
        setTimeout(() => {
            this.axios.get('/json/currentcity.json').then((res)=>{
                const name = res.data.result.data.city;
                const id = res.data.result.data.cityid;
                const areaid = res.data.result.data.areaid
                console.log('out:'+ name)
                console.log(id)
                console.log(areaid)
                if( this.$store.state.city.id === id ){return;}
                messageBox({
                    title : '本地城市定位',
                    content : name,
                    cancel : '取消',
                    ok : '切换到本地',
                    handleOk(){
                        console.log('before:'+ name)
                        console.log(id)
                        console.log(areaid)
                        window.localStorage.setItem('nowName',name);
                        window.localStorage.setItem('nowId',id);
                        window.localStorage.setItem('nowAreaId',areaid);
                        window.location.reload();
                        console.log('after:'+ name)
                        console.log(id)
                        console.log(areaid)
                    }
                });
            })

        },3000)

        /*messageBox({
            title : '定位',
            content : 'sheng',
            cancel : '取消',
            ok : '切换定位',
            handleCancel(){
                console.log(1)
            },
            handleOk(){
                console.log(2)
            }
        });*/

        /*setTimeout(()=>{
            this.axios.get('/json/currentcity.json').then((res)=>{


                    const name = res.result.data.city;
                    const id = res.result.data.cityid;
                    const areaid = res.result.data.areaid
                    if( this.$store.state.city.id === id ){return;}
                    messageBox({
                        title : '定位',
                        content : name,
                        cancel : '取消',
                        ok : '切换定位',
                        handleOk(){
                            window.localStorage.setItem('nowName',name);
                            window.localStorage.setItem('nowId',id);
                            window.localStorage.setItem('nowAreaId',areaid);
                            window.location.reload();
                        }
                    });

            });
        },3000);*/

    }

}
</script>

<style scoped>
    #content .movie_menu{ width: 100%; height: 45px; border-bottom:1px solid #e6e6e6; display: flex; justify-content:space-between; align-items:center; background:white; z-index:10;}
    .movie_menu .city_name{ margin-left: 20px; height:100%; line-height: 45px;}
    .movie_menu .city_name.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .city_name.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_swtich{ display: flex; height:100%; line-height: 45px;}
    .movie_menu .hot_item{ font-size: 15px; color:#666; width:80px; text-align:center; margin:0 12px; font-weight:700;}
    .movie_menu .hot_item.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .hot_item.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry{ margin-right:20px; height:100%; line-height: 45px;}
    .movie_menu .search_entry.active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry.router-link-active{ color: #ef4238; border-bottom: 2px #ef4238 solid;}
    .movie_menu .search_entry i{  font-size:24px; color:red;}
</style>
