<template>
    <div class="marquee">
        <div class="marquee-content">
            <span v-for="(n, index) in 80" :key="index">Abban's gone and done a blog</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Marquee"
}
</script>

<style lang="scss">
    @import '../assets/scss/variables';
    .marquee {
        background: $black;
        color: $white;
        font-family: $family-ocra;
        font-size: 12px;
        padding: 3px 0 5px;
        text-transform: uppercase;
        overflow: hidden;

        &-content {
            white-space: nowrap;
            animation-name: animation;
            animation-duration: 50s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            span {
                padding-right: 200px;
            }
        }
    }

    @keyframes animation {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-100%);
        }
    }
</style>