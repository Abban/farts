<template>
    <div class="home">
        <logo/>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {getPosts} from "@/resources/Post";
import Logo from "@/components/Logo.vue";

export default defineComponent({
    name: 'Home',
    components: {Logo},
    setup() {
        getPosts().then(posts => {
            console.log(posts);
        });
    }
});
</script>