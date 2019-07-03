<template>
    <div class="cinema-body">
        <ul>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
            <li>
                <div>
                    <span>CFR美影国际影城（新紫茂店）</span>
                    <span class="discount">
                        <span class="price">3.1</span>
                        元起
                    </span>
                </div>
                <div class="address">
                    <span>浦东新区巨峰路1058弄2号新紫茂广场晨达美食城3楼（近金高路）</span>
                    <span>1067.7km</span>
                </div>
                <div class="card">
                    <div class="bl">改签</div>
                    <div class="bl">退</div>
                    <div class="or">折扣卡</div>
                    <div class="or">小吃</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "cinemaList"
}
</script>

<style scoped>
#content .cinema-body {
    flex: 1;
    overflow: auto;
}

.cinema-body div {
    margin-bottom: 10px;
}

.cinema-body ul {
    padding: 20px;
}

.cinema-body ul li {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
}

.cinema-body ul li .discount {
    font-size: 11px;
    color: #f03d37;
}

.cinema-body ul li .price {
    font-size: 18px;
}

.cinema-body ul li .address {
    font-size: 13px;
    color: #666;
}

.cinema-body ul li .address span:nth-of-type(2) {
    float: right;
}

.cinema-body ul li .card {
    display: flex;
}

.cinema-body ul li .card > div.bl {
    color: #589daf;
    border: 1px solid #589daf;
}
.cinema-body ul li .card > div.or {
    color: #f90;
    border: 1px solid #f90;
}

.cinema-body ul li .card > div {
    padding: 0 3px;
    height: 15px;
    line-height: 15px;
    border-radius: 2px;
    font-size: 13px;
    margin-right: 5px;
}
</style>
