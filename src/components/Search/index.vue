<template>
    <div class="search-body">
        <div class="search-input">
            <div class="search-input-warpper">
                <i class="iconfont icon-dianying"></i>
                <input type="text">
            </div>
        </div>
        <div class="search-result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li>
                    <div class="img">
                        <img src="/img/logo.png">
                    </div>
                    <div class="info">
                        <p>
                            <span>复仇者联盟4：终局之战</span><span>9.2</span>
                        </p>
                        <p>Avengers: Endgame</p>
                        <p>动作,冒险,奇幻</p>
                        <p>2019-04-24</p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="/img/logo.png">
                    </div>
                    <div class="info">
                        <p>
                            <span>复仇者联盟4：终局之战</span><span>9.2</span>
                        </p>
                        <p>Avengers: Endgame</p>
                        <p>动作,冒险,奇幻</p>
                        <p>2019-04-24</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#content .search-body {
    flex: 1;
    overflow: auto;
}
.search-body .search-input {
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
}
.search-body .search-input .search-input-warpper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    line-height: 20px;
}
.search-body .search-input .search-input-warpper input {
    border: none;
    font-size: 13px;
    color: #333;
    padding: 4px 0;
    outline: none;
    margin-left: 5px;
    width: 100%;
}
.search-body .search-input .search-input-warpper i {
    font-size: 16px;
    padding: 4px 0;
}
.search-body .search-result h3{
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
}
.search-body .search-result li {
    border-bottom: 1px dashed #c9c9c9;
    padding: 10px 15px;
    box-sizing: border-box;
    display: flex;
}
.search-body .search-result .img {
    width: 60px;
    height: 90px;
}
.search-body .search-result img {
    width: 100%;
    height: 100%;
}
.search-body .search-result .info {
    flex: 1;
    margin-left: 15px;
}
.search-body .search-result .info p {
    height: 22px;
    display: flex;
    line-height: 22px;
    font-size: 12px;
}
.search-result .info p:first-of-type span:first-of-type {
    font-size: 18px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.search-body .search-result .info p:first-of-type span:nth-of-type(2) {
    font-size: 16px;
    color: #fc7103;
}
</style>
