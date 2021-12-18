<template>
    <nav class="ab-pagination buttons is-centered" role="navigation" aria-label="pagination">
        <router-link :to="{name: 'Home', params: { page: pagination.prev }}"
                     class="ab-pagination-link button"
                     :class="{'is-disabled':pagination.prev === null}">
            Previous
        </router-link>
        <router-link :to="{name: 'Home', params: { page: pagination.next }}"
                     class="ab-pagination-link button"
                     :class="{'is-disabled':pagination.next === null}">
            Next
        </router-link>
    </nav>
</template>

<script lang="ts">
import {PropType} from "vue";
import {Pagination} from "@tryghost/content-api";

export default {
    name: "Pagination",
    props: {
        pagination: Object as PropType<Pagination>
    }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.ab-pagination {
    &-link {
        width: 160px;
        padding: 10px;
        border: 0;
        background: $black;
        color: $white;
        font-weight: 800;

        &:hover, &:focus {
            background: $link;
            color: $white;
        }

        &.is-disabled {
            opacity: 0.3;

            &:hover, &:focus {
                background: $black;
            }
        }
    }
}
</style>