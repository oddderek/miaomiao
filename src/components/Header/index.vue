<template>
    <div id='header'>
        <h1>{{title}}</h1>
    </div>
</template>

<script>
export default {
    name: 'mm-header',
    props: {
        title: {
            type: String,
            default: "喵喵电影"
        }
    },
    data() {
        return {
            test: "demo",
        }
    }

}
</script>

<style scoped>
#header {
    width: 100%;
    height: 50px;
    color: #fff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
}

#header h1 {
    font-size: 18px;
    line-height: 50px;
    text-align: center;
    font-weight: 400;
}
</style>

