<template>
    <div class="movie-body">
        <ul>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评 <span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评<span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评<span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评<span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评<span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
            <li>
                <div class="pic-show"><img src="/img/logo.png"></div>
                <div class="info-list">
                    <h2>无名之辈</h2>
                    <p>观众评<span class="grade">9.2</span></p>
                    <p>主演：渣渣辉，骨舔乐</p>
                    <p>今天55家放映607场</p>
                </div>
                <div class="btn-mall">
                    预售
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "comingSoon",
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
    background-color: #3c9fe6;
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
