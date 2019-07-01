<template>
  <div id="main">
    <mmHeader :title="titleName"/>
    <div id="content">
      <div class="movie-menu">
        <router-link tag="div" to="/movie/city" class="city-name">
          <span>深圳</span>
        </router-link>
        <div class="hot-switch">
          <router-link tag="div" to="/movie/nowPlaying" class="hot-item">正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot-item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search-entry">搜索</router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <mmFooter />
  </div>
</template>

<script>
import mmHeader from '@/components/Header'
import mmFooter from '@/components/TabBar'

export default {
  name: 'movie',
  components: {
    mmHeader,
    mmFooter,
  },
  data: function() {
    return {
      titleName: "喵喵电影"
    }
  }
}
</script>

<style scoped>
#content .movie-menu {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    z-index: 10;
}
#content .movie-body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
}
.movie-menu .city-name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
}
.movie-menu .city-name.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
.movie-menu .hot-switch {
    display: flex;
    height: 100%;
    line-height: 45px;
}
.movie-menu .hot-item {
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
}
.movie-menu .hot-item.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
.movie-menu .search-entry{
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
}
.movie-menu .search-entry.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
}
</style>

