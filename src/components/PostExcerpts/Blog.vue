<template>
    <div class="post-excerpt content column blog">
        <h2 class="post-excerpt-title">
            <router-link :to="{ name: 'Post', params: { slug: post.slug } }">{{ post.title }}</router-link>
        </h2>
        <Meta :date="post.created_at" :reading-time="post.reading_time"/>
        <p class="post-excerpt-content">
            {{ post.custom_excerpt }}
        </p>
        <tags :tags="post.tags"/>
    </div>
</template>

<script lang="ts">
import {PropType} from "vue/dist/vue";
import {PostOrPage} from "@tryghost/content-api";
import Tags from "@/components/snippets/Tags.vue";
import Meta from "@/components/snippets/Meta.vue";

export default {
    name: "Blog",
    components: {Meta, Tags},
    props: {
        post: Object as PropType<PostOrPage>
    }
}
</script>

<style scoped>

</style>