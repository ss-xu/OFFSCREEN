<template>
    <div class="common-layout">
        <CommonHeader/>
        <FootGoBack/>
        <div class="common-container">
            <slot/>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CommonHeader from '@/components/CommonHeader.vue';
    import FootGoBack from './FootGoBack.vue';


    @Component({
        components: {
            CommonHeader,
            FootGoBack,
        }
    })
    export default class CommonLayout extends Vue {

    }
</script>
<style lang="scss" scoped>

</style>
