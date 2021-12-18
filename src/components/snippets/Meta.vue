<template>
    <p class="post-meta">
        <span>{{ formatDate(date) }}</span>
        <span v-if="readingTime"> &bull; {{ readingTime }} {{ readingTime === 1 ? 'minute' : 'minutes' }} long</span>
    </p>
</template>

<script lang="ts">
import formatDate from "@/mixins/formatDate.ts";

export default {
    name: "Meta",
    mixins: [formatDate],
    props: {
        date: String,
        readingTime: Number
    }
}
</script>

<style lang="scss">
@import '../../assets/scss/_variables.scss';

.post-meta {
    color: $dark-grey;
    font-style: italic;
}
</style>