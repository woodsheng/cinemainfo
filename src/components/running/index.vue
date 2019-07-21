<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading" />
        <Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
            <ul>
                 <li>
                    <div class="pic_show"><img src="/images/movie_1.jpg"></div>
                    <div class="info_list">
                        <h2>哪吒之魔童降世</h2>
                        <p>观众评 <span class="grade">9.2</span></p>
                        <p>主演: 吕艳婷,囧森瑟夫</p>
                        <p>今天55家影院放映607场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <li>
                    <div class="pic_show"><img src="/images/movie_2.jpg"></div>
                    <div class="info_list">
                        <h2>速度与激情：特别行动</h2>
                        <p>观众评 <span class="grade">9.1</span></p>
                        <p>主演: 道恩·强森饰,杰森·斯坦森</p>
                        <p>今天55家影院放映789场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <li>
                    <div class="pic_show"><img src="/images/movie_3.jpg"></div>
                    <div class="info_list">
                        <h2>好莱坞往事</h2>
                        <p>观众评 <span class="grade">9.0</span></p>
                        <p>主演: 莱昂纳多·迪卡普里奥</p>
                        <p>今天55家影院放映600场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <li>
                    <div class="pic_show"><img src="/images/movie_4.jpg"></div>
                    <div class="info_list">
                        <h2>上海堡垒</h2>
                        <p>观众评 <span class="grade">9.5</span></p>
                        <p>主演: 鹿晗,舒淇</p>
                        <p>今天55家影院放映567场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <li>
                    <div class="pic_show"><img src="/images/movie_5.jpg"></div>
                    <div class="info_list">
                        <h2>小Q</h2>
                        <p>观众评 <span class="grade">8.8</span></p>
                        <p>主演: 任达华,梁咏琪</p>
                        <p>今天55家影院放映540场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <li>
                    <div class="pic_show"><img src="/images/movie_6.jpg"></div>
                    <div class="info_list">
                        <h2>使徒行者2：谍影行动</h2>
                        <p>观众评 <span class="grade">8.9</span></p>
                        <p>主演: 张家辉,古天乐</p>
                        <p>今天55家影院放映599场</p>
                    </div>
                    <div class="btn_mall">
                        购票
                    </div>
                </li>
                <!--    <li class="pullDown">{{ pullDownMsg }}</li>
                    <li v-for="item in movieList" :key="item.id">
                        <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')"></div>
                        <div class="info_list">
                            <h2 @tap="handleToDetail(item.id)">{{ item.nm }} <img v-if="item.version" src="@/assets/maxs.png" alt=""></h2>
                            <p>观众评 <span class="grade">{{ item.sc }}</span></p>
                            <p>主演: {{ item.star }}</p>
                            <p>{{ item.showInfo }}</p>
                        </div>
                        <div class="btn_mall">
                            购票
                        </div>
                    </li> -->
                </ul>
            </Scroller>
        </div>
    </template>

    <script>
    import { value } from 'vue-function-api'
    export default {
        name: "Running",
        setup () {
            const movieList = value([])
            const pullDownMsg = value('')
            const isLoading = value(true)
            const prevCityId = value(-1)
            return {
                movieList,
                pullDownMsg,
                isLoading,
                prevCityId
            }
        }
    }
    </script>

    <style scoped>
        #content .movie_body{ flex:1; overflow:auto;}
        .movie_body ul{ margin:0 12px; overflow: hidden;}
        .movie_body ul li{ margin-top:12px; display: flex; align-items:center; border-bottom: 1px #e6e6e6 solid; padding-bottom: 10px;}
        .movie_body .pic_show{ width:64px; height: 90px;}
        .movie_body .pic_show img{ width:100%;}
        .movie_body .info_list { margin-left: 10px; flex:1; position: relative;}
        .movie_body .info_list h2{ font-size: 17px; line-height: 24px; width:150px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
        .movie_body .info_list p{ font-size: 13px; color:#666; line-height: 22px; width:200px; overflow: hidden; white-space: nowrap; text-overflow:ellipsis;}
        .movie_body .info_list .grade{ font-weight: 700; color: #faaf00; font-size: 15px;}
        .movie_body .info_list img{ width:50px; position: absolute; right:10px; top: 5px;}
        .movie_body .btn_mall , .movie_body .btn_pre{ width:47px; height:27px; line-height: 28px; text-align: center; background-color: #f03d37; color: #fff; border-radius: 4px; font-size: 12px; cursor: pointer;}
        .movie_body .btn_pre{ background-color: #3c9fe6;}
        .movie_body .pullDown{ margin:0; padding:0; border:none;}
    </style>
