<template>
    <div class="movie-body" ref="movie_body">
        <Scroller>
            <ul>
                <span>{{pullDownMsg}}</span>
                <li v-for="movie in movieList" :key="movie.id">
                    <div class="pic-show" @tap="handleToDetail()"><img :src="movie.img | setWH('128.180')"></div>
                    <div class="info-list">
                        <h2 @tap="handleToDetail(movie.id)">{{movie.nm}}</h2>
                        <p>观众评 <span class="grade">{{movie.sc}}</span></p>
                        <p>主演：{{movie.star}}</p>
                        <p>{{movie.showInfo}}</p>
                    </div>
                    <div class="btn-mall">
                        购票
                    </div>
                </li>
            </ul>
        </Scroller>
    </div>
</template>

<script>
// import BetterScroll from 'better-scroll'

export default {
    name: "nowPlaying",
    data() {
        return {
            movieList: [],
            pullDownMsg: ""
        }
    },
    methods: {
        handleToDetail(id) {
            console.log(id)
        }
    },
    mounted() {
        this.$axios({
            methods: "get",
            url: "/api/movieOnInfoList?cityId=10"
        }).then((res) => {
            if(res.data.msg === "ok") {
                this.movieList = res.data.data.movieList;
                // this.$nextTick(() => {
                //     var betterScroll = new BetterScroll(this.$refs.movie_body, {
                //         tap: true,
                //         probeType: 1
                //     });
                //     betterScroll.on('scroll', (pos) => {
                //         if( pos.y > 30) {
                //         console.log("scroll");
                //             this.pullDownMsg = "loading...";
                //         }
                //     })
                //     betterScroll.on('touchEnd', (pos) => {
                //         if( pos.y > 30) {
                //         console.log("touchEnd");
                //             this.$axios({
                //                 methods: "get",
                //                 url: "/api/movieOnInfoList?cityId=11"
                //             }).then((res) => {
                //                 if(res.data.msg === "ok") {
                //                     this.pullDownMsg = "success!";
                //                     setTimeout(() => {
                //                         this.movieList = res.data.data.movieList;
                //                         this.pullDownMsg = "";
                //                     }, 1000);
                //                 }
                //             })
                //         }
                //     })
                // })
            }
        })
    },
}
</script>

<style scoped>
#content .movie-body {
    flex: 1;
    overflow: auto;
}
.movie-body ul {
    margin: 0 12px;
    overflow: hidden;
}
.movie-body ul li {
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 10px;
}
.movie-body .pic-show {
    width: 64px;
    height: 90px;
}
.movie-body .pic-show img {
    width: 100%;
    height: 100%;
}
.movie-body .info-list {
    margin-left: 10px;
    flex: 1;
    position: relative;
}
.movie-body .info-list h2 {
    font-size: 17px;
    line-height: 24px;
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-body .info-list p {
    font-size: 13px;
    color: #666;
    line-height: 22px;
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.movie-body .info-list .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.movie-body .btn-mall {
    background-color: #f03d37;
    height: 27px;
    text-align: center;
    width: 47px;
    line-height: 28px;
    color: #fff;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
}
</style>
