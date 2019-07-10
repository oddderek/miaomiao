<template>
    <div id="main">
        <mmHeader :title="titleName"/>
        <div id="content">
            <login />
            <!-- <br>
            <inputCp inputType="text" textName="姓名" placeholder="必填" @inputChanged="inputChangedMer($event)"></inputCp> -->
        </div>
        <mmFooter />
    </div>
</template>

<script>
import mmHeader from '@/components/Header'
import mmFooter from '@/components/TabBar'
import login from '@/components/Login'
import inputCp from '@/components/Input'

export default {
  name: 'mine',
  components: {
    mmHeader,
    mmFooter,
    login,
    inputCp
  },
  data() {
      return {
          titleName: "我的喵喵",
          mercode: ""
      }
  },
  methods: {
    inputChangedMer: function (e) {
        this.mercode = e.target.value
        console.log(this.mercode)
    },
  }
}
</script>

