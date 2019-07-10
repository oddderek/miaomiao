<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
    name: 'scroller',
    mounted() {
        var betterScroll = new BetterScroll(this.$refs.wrapper, {
            tap: true,
            probeType: 1
        });
    }
}
</script>

<style scoped>
.wrapper {
    height: 100%;
}
</style>
