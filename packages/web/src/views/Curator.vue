<template>
    <div class="curator">
        <CommonLayout/>
        <div class="curator-detail">
            <p class="content">{{$t('curator.content')}}</p>
            <p class="contact">Contatto con Tianyi: angiedesideri@gmail.com</p>
        </div>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';

    @Component({
        components: {
            CommonLayout,
        }
    })
    export default class Curator extends Vue {

    }
</script>
<style lang="scss" scoped>
    .curator-detail {
        margin: 0 auto;
        width: 77%;
        padding-top: 47px;

        p {
            margin: 0;
        }

        .content {
            font-size: 14px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            line-height: 18px;
            margin-bottom: 12px;
        }

        .contact {
            height: 15px;
            font-size: 14px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
        }
    }
</style>
