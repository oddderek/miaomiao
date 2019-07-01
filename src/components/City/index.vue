<template>
    <div class="city-body">
        <div class="city-list">
            <div class="city-hot">
                <h2>热门城市</h2>
                <ul>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                    <li>北京</li>
                </ul>
            </div>
            <div class="city-sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>安庆</li>
                        <li>鞍山</li>
                        <li>安阳</li>
                        <li>阿拉善</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city-index">
            <ul>
                <li v-for="letter in letters" :key="letter">
                    {{letter}}
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
            letters: ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","W","X","Y","Z"]
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
