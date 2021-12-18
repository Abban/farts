<template>
    <div class="post-excerpt content column micro-blog">
        <h2 class="post-excerpt-title">
            {{ post.title }}
        </h2>
        <Meta :date="post.created_at"/>
        <p class="post-excerpt-content" v-html="post.html"></p>
        <tags :tags="post.tags"/>
    </div>
</template>

<script lang="ts">
import {PropType} from "vue/dist/vue";
import {PostOrPage} from "@tryghost/content-api";
import Tags from "@/components/snippets/Tags.vue";
import Meta from "@/components/snippets/Meta.vue";

export default {
    name: "MicroBlog",
    components: {Meta, Tags},
    props: {
        post: Object as PropType<PostOrPage>
    }
}
</script>

<style lang="scss">
.post-excerpt.micro-blog {
    max-width: 520px;
    font-size: 0.8em;

    .post-excerpt-content {
        font-size: 16px;
    }
}
</style>