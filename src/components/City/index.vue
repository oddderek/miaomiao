<template>
    <div class="city-body">
        <div class="city-list">
            <div class="city-hot">
                <h2>热门城市</h2>
                <ul>
                    <li v-for="item in hotList" :key="item.id">{{item.nm}}</li>
                </ul>
            </div>
            <div class="city-sort" ref="city_sort">
                <div v-for="item in cityList" :key="item.index">
                    <h2>{{item.index}}</h2>
                    <ul>
                        <li v-for="city in item.list" :key="city.id">
                            {{city.name}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city-index">
            <ul>
                <li v-for="(item, index) in cityList" :key="item.index" @touchstart="handleToIndex(index)">
                    {{item.index}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "city",
    data() {
        return {
            cityList: [],
            hotList: []
        }
    },
    created() {
        this.$axios({
            methods: 'get',
            url: '/api/cityList'
        }).then((res) => {
            if(res.data.msg === "ok"){
                var cities = res.data.data.cities;
                var { cityList, hotList } = this.formatCityList(cities);        
                //[{index: 'A', list: [{name: '安庆', id: '1'}, ...]}, ...]
                this.cityList = cityList;
                this.hotList = hotList;
            }
        })
    },
    methods: {
        formatCityList(cities) {
            var cityList = [],
                hotList = [];
            for(var i = 0; i < cities.length; i ++) {
                if(cities[i].isHot === 1) {
                    hotList.push(cities[i]);
                }

                var firstLetter = cities[i].py.substring(0, 1).toUpperCase();
                if(letterExist(firstLetter)) {
                    cityList.push({
                        index: firstLetter,
                        list: [{
                            name: cities[i].nm,
                            id: cities[i].id
                        }]
                    })
                } else {
                    for(var j = 0; j < cityList.length; j ++) {
                        if( cityList[j].index === firstLetter ){
                            cityList[j].list.push({
                                name: cities[i].nm,
                                id: cities[i].id
                            })
                        }
                    }
                }
            }
            cityList.sort((a,b) => {
                if(a.index > b.index) {
                    return 1;
                } else if(a.index < b.index) {
                    return -1;
                } else {
                    return 0;
                }
            })

            return {
                cityList,
                hotList
            }

            function letterExist(firstLetter) {
                for(var i = 0; i < cityList.length; i ++) {
                    if(cityList[i].index === firstLetter) {
                        return false;
                    }
                }
                return true;
            }
        },
        handleToIndex(index) {
            var h2s = this.$refs.city_sort.getElementsByTagName("h2")
            this.$refs.city_sort.parentNode.scrollTop = h2s[index].offsetTop;
        }
    }
}
</script>

<style scoped>
#content .city-body {
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}
.city-body .city-list {
    flex: 1;
    overflow: auto;
    background: #fff5f0;
}
.city-body .city-list::-webkit-scrollbar {
    background-color: transparent;
    width: 0;
}
.city-body .city-hot,
.city-body .city-sort div {
    margin-top: 20px;
}
.city-body .city-hot h2,
.city-body .city-sort h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: 400;
}
.city-body .city-hot ul {
    display: flex;
    flex-wrap: wrap;
}
.city-body .city-hot ul li {
    width: 29%;
    height: 33px;
    background: #fff;
    text-align: center;
    margin-top: 15px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    margin-left: 3%;
    line-height: 33px;
    box-sizing: border-box;
}
.city-body .city-sort ul {
    margin-top: 10px;
    padding-left: 10px;
}
.city-body .city-sort ul li {
    line-height: 30px;
}
.city-body .city-index {
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #e6e6e6;
}
</style>
