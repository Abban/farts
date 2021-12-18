<template>
    <div class="columns is-centered">
        <component :is="postComponent" :post="post" :style="{'--index': index}"/>
    </div>
</template>

<script lang="ts">
import {PostOrPage} from '@tryghost/content-api';
import {computed, defineComponent, PropType} from "vue";
import formatDate from "@/mixins/formatDate";
import Blog from "@/components/PostExcerpts/Blog.vue";
import MicroBlog from "@/components/PostExcerpts/MicroBlog.vue";

export default defineComponent({
    name: "PostExcerpt",
    mixins: [formatDate],
    props: {
        index: Number as any,
        post: {
            type: Object as PropType<PostOrPage>,
            required: true
        }
    },
    setup(props) {
        const postComponent = computed((): any => {
            switch (props.post.primary_tag?.name) {
                case 'blog':
                    return Blog;
                case 'Micro Blog':
                    return MicroBlog;
                default:
                    return Blog;
            }
        });
        return {
            postComponent
        }
    }
});
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.post-excerpt {
    text-align: center;
    margin-bottom: 60px;
    max-width: 720px;
    transform: translateX(60px);
    opacity: 0;
    animation: showPosts 1s ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: calc(0.1s * var(--index));

    &-title {
        a {
            color: $black;

            &:hover, &:focus {
                color: $link;
            }
        }
    }

    &-content {
        font-size: 18px;
        text-align: justify;
    }
}

.fade-leave-active {
    .post-excerpt {
        animation: hidePosts 1s ease-in-out;
    }
}

@keyframes showPosts {
    0% {
        transform: translateX(60px);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}
@keyframes hidePosts {
    0% {
        transform: translateX(0);
        opacity: 1;
    }
    100% {
        transform: translateX(-60px);
        opacity: 0;
    }
}
</style>