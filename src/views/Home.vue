<template>
    <div class="home container">
        <div class="post-excerpts" v-if="posts">
            <post-excerpt v-for="(post, index) in posts" :key="index" :index="index" :post="post"/>
        </div>
        <Pagination v-if="posts && metaPagination.pages > 1" :pagination="metaPagination"/>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import {getPosts} from "@/resources/Post";
import PostExcerpt from "@/components/PostExcerpt.vue";
import Pagination from "@/components/Pagination.vue";
import {PostsOrPages, Pagination as MetaPagination} from "@tryghost/content-api";
import {useRoute} from "vue-router";
import highlight from '@/plugins/highlightjs';

export default defineComponent({
    name: 'Home',
    components: {Pagination, PostExcerpt},
    setup() {
        const route = useRoute();
        const metaPagination = ref<MetaPagination>();
        const posts = ref<PostsOrPages>();

        const getPage = (): number => {
            const page = route.params.page;
            if (!page || page === '') return 1;
            return parseInt(route.params.page.toString());
        }

        const loadPage = (isPagination: boolean = false) => {
            posts.value = undefined;
            getPosts(10, getPage()).then(response => {
                posts.value = response;
                metaPagination.value = response.meta.pagination;
                if (isPagination) window.scrollTo(0, 0);
            });
        }

        watch(() => route.params.page, () => loadPage(true));
        loadPage();

		onMounted(() => {
			highlight();
		});

        return {
            posts,
            metaPagination
        }
    }
});
</script>