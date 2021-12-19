<template>
    <div class="post container" v-if="post">
        <div class="columns is-centered">
            <div class="post-content content micro-blog">
                <h1 class="post-title">
                    {{ post.title }}
                </h1>
                <Meta :date="post.created_at" :reading-time="post.reading_time"/>
                <tags :tags="post.tags"/>
                <div class="post-body" v-html="post.html"></div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {PostOrPage} from '@tryghost/content-api';
import {getPost} from '@/resources/Post.ts';
import {useRoute} from 'vue-router';
import Meta from '@/components/snippets/Meta.vue';
import Tags from '@/components/snippets/Tags.vue';
import highlight from '@/plugins/highlightjs';

export default defineComponent({
    name: 'Post',
    components: {Meta, Tags},
    setup() {
        const route = useRoute();
        const post = ref<PostOrPage>();
        getPost(route.params.slug.toString()).then(response => {
            post.value = response;
        });
        onMounted(() => {
            highlight();
        });
        return {
            post
        };
    }
});
</script>

<style lang="scss">
.post {
    text-align: center;

    &-content {
        margin-bottom: 60px;
        max-width: 720px;
    }

    &-title {
        text-transform: uppercase;
        font-weight: 800;

        opacity: 0;
        transform: translateY(60px);
        animation: showPost 1s ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 100ms;
    }

    .post-meta {
        opacity: 0;
        transform: translateY(60px);
        animation: showPost 1s ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 200ms;
    }

    .post-tags {
        opacity: 0;
        transform: translateY(60px);
        animation: showPost 1s ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 300ms;
    }

    &-body {
        font-size: 20px;
        text-align: left;

        opacity: 0;
        transform: translateY(60px);
        animation: showPost 1s ease-in-out;
        animation-fill-mode: forwards;
        animation-delay: 400ms;
    }
}

.fade-leave-active {
    .post-content {
        animation: hidePost 1s ease-in-out;
    }
}

@keyframes showPost {
    0% {
        transform: translateY(60px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes hidePost {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(60px);
    }
}
</style>