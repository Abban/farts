<template>
    <Marquee/>
    <div id="nav">
        <router-link to="/">Home</router-link>
        |
        <router-link to="/about">About</router-link>
    </div>
    <router-view/>
</template>

<style lang="scss">

</style>
<script>
import Marquee from "@/components/Marquee";
export default {
    components: {Marquee}
}
</script>