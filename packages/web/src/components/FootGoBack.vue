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
        right: 5%;
        bottom: 5%;
        font-size: 20px;
        font-weight: bold;
        color: rgba(0, 0, 0, 1);
        z-index: 9999;
    }
</style>
