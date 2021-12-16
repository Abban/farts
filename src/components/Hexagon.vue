<template>
    <div class="hexagon" v-bind:style="{ backgroundColor: background }">
        <svg width="16" height="16" viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path d="M13.928,4l0,8l-6.928,4l-6.928,-4l0,-8l6.928,-4l6.928,4Zm-11.856,1.155l0,5.69l4.928,2.846l4.928,-2.846l0,-5.69l-4.928,-2.846l-4.928,2.846Z" v-bind:style="{ fill: border }"></path>
        </svg>
    </div>
</template>

<script>
    export default {
        name : "Hexagon",
        props: ['background', 'border']
    }
</script>

<style lang="scss">
    svg {
        display: block;
    }

    .hexagon {
        height: 16px;
        width: 16px;
    }
</style>