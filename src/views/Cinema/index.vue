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
    name: 'cinema',
    components: {
        mmHeader,
        mmFooter,
    },
    data() {
      return {
        titleName: "喵喵影院"
      }
    }
}
</script>


