<template>
    <div class="header">
        <logo/>
    </div>
</template>

<script>
import Logo from "@/components/Logo";
export default {
    name: "Header",
    components: {Logo}

}
</script>

<style lang="scss">
.header {
    margin: 60px 0;
}
</style>