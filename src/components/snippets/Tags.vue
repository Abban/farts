<template>
    <div class="post-tags tags">
        <span class="tag is-light" v-for="(tag, index) in tags" :key="index">{{ tag.name }}</span>
    </div>
</template>

<script lang="ts">
import {PropType} from "vue/dist/vue";
import {Tag} from "@tryghost/content-api";

export default {
    name: "Tags",
    props: {
        tags: Object as PropType<Tag[]>
    }
}
</script>