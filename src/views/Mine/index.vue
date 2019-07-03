<template>
    <div id="main">
        <mmHeader :title="titleName"/>
        <div id="content">
            <login />
        </div>
        <mmFooter />
    </div>
</template>

<script>
import mmHeader from '@/components/Header'
import mmFooter from '@/components/TabBar'
import login from '@/components/Login'

export default {
  name: 'mine',
  components: {
    mmHeader,
    mmFooter,
    login,
  },
  data() {
      return {
          titleName: "我的喵喵"
      }
  }
}
</script>

