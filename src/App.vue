<template>
    <Marquee/>
    <Header/>
    <div class="app-container">
        <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in" appear>
                <component :is="Component" />
            </transition>
        </router-view>
    </div>
    <Footer/>
</template>
<script>
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default {
    components: {Header, Footer, Marquee}
}
</script>

<style lang="scss">
.app-container {
    padding: 0 24px 26px;
}
</style>