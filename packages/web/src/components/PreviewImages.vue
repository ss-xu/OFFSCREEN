<template>
    <ul class="preview-image-list">
        <li v-for="(url, index) in urls" :key="index">
            <img v-if="url" v-gd-img="url"/>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'PreviewImages',
        props: {
            urls: {
                type: Array,
                default: [],
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .preview-image-list {
        img {
            width: 100%;
            max-width: 100%;
        }
    }
</style>
