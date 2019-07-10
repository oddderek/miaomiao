<template>
  <div class="inputItem">
    <div class="leftText">{{textName}}</div>
    <div class="rightText">
    
      <input :type="inputType" class="inputstyle" :placeholder="placeholder" @input="inputChanged($event)" ref="inputRef">
      <!-- <input type="text" placeholder="测试" ref="testRef"> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "InputItem",
  props: ["textName", "placeholder","inputType"],
  data() {
    return {};
  },
  mounted() {},

  methods: {
  //监听输入框事件
    inputChanged: function($event) {
      this.$emit("inputChanged", $event); //将值放在自定义的事件函数中作为参数
    //   this.$refs.testRef.setAttribute('readonly', true)
    }
  },
  computed: {}
};
</script>


<style scoped>
input:focus {
  outline: none;
  border: 1px solid #fff;
}
.inputItem {
  width: 100%;
  height: 60px;
  font-size: 18px;
  text-indent: 10px;
  letter-spacing: 10px;
  display: flex;
  display: -webkit-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-bottom: 1px solid #eceef1;
}
.leftText {
  width: 15%;
  padding-left: 1%;
  color: #757575;
  overflow: hidden;
  word-break:keep-all;
  white-space:nowrap;  
}
.rightText {
  width: 84%;
}
.inputstyle {
  width: auto;
  min-width: 50%;
  border: none;
  outline: none;
  text-indent: 3px;
  letter-spacing: 3px;
  color: #757575;
  /* border-bottom: 1px solid #6a7c9f; */
}
</style>
