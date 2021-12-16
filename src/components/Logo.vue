<template>
    <div class="logo">
        <div class="logo-text logo-text-pre">Brain</div>
        <img class="logo-image" src="/images/logo-dark.svg" alt="Brain Farts Logo">
        <div class="logo-text logo-text-post">Farts</div>
    </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
@import "~bulma/sass/utilities/all";

.logo {
    display: flex;
    justify-content: center;
    line-height: 60px;

    @include from($desktop) {
        line-height: 80px;
    }

    &-text {
        font-size: 30px;
        font-weight: 800;
        text-transform: uppercase;
        width: 100px;
        &-pre {
            text-align: right;
        }
    }

    &-image {
        width: 60px;
        height: 60px;

        @include from($desktop) {
            width: 80px;
            height: 80px;
        }
    }
}

</style>