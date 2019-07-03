<template>
    <div id="main">
        <mmHeader :title="titleName"/>
        <div id="content">
          <div class="cinema-menu">
            <div>全城<div class="trangle"></div></div>
            <div>品牌<div class="trangle"></div></div>
            <div>特色<div class="trangle"></div></div>
          </div>
          <cinemaList />
        </div>
        <mmFooter />
    </div>
</template>

<script>
import mmHeader from '@/components/Header'
import mmFooter from '@/components/TabBar'
import cinemaList from '@/components/CinemaList'

export default {
    name: 'cinema',
    components: {
        mmHeader,
        mmFooter,
        cinemaList
    },
    data() {
      return {
        titleName: "喵喵影院"
      }
    }
}
</script>

<style scoped>
#content .cinema-menu {
  width: 100%;  
  height: 45px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #e6e6e6;
  align-items: center;
}

#content .trangle {
    width: 0;
    height: 0;
    display: inline-block;
    border: 6px solid;
    border-color: #333 transparent transparent;
    margin-bottom: -4px;
    margin-left: 4px;
}
</style>

