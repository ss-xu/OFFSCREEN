<template>
    <span class="footer-go-back" @click="handleGoBack">< Back</span>
</template>

<script>
    import { ROUTER_HOME } from '@/router';

    export default {
        name: 'FootGoBack',
        methods: {
            handleGoBack() {
                this.$router.push({
                    name: ROUTER_HOME
                });
            }
        }
    }
</script>

<style scoped>
    .footer-go-back {
        cursor: pointer;
        position: fixed;
        right: 40px;
        bottom: 72px;
        height: 16px;
        font-size: 20px;
        font-family: Heiti SC, sans-serif;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        z-index: 9999;
    }
</style>
