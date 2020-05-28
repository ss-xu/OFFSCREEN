<template>
    <iframe :src="url" frameborder="0" width="100%" height="100%"/>
</template>

<script>
    export default {
        name: 'PreviewIframe',
        props: {
            url: {
                type: String,
                default: '',
                required: true,
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
