<template>
    <div id="main">
        <mmHeader :title="titleName"/>
        <mmFooter />
    </div>
</template>

<script>
import mmHeader from '@/components/Header'
import mmFooter from '@/components/TabBar'

export default {
  name: 'mine',
  components: {
    mmHeader,
    mmFooter,
  },
  data() {
      return {
          titleName: "我的喵喵"
      }
  }
}
</script>

