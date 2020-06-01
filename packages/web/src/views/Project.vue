<template>
    <div class="project">
        <CommonLayout>
            <ul class="detail-list">
                <li class="detail-item" v-for="(detailItem, index) in detailList" :key="index">
                    <div class="detail-item-left">
                        <PreviewImg v-for="(imaUrl, imgIndex) in detailItem.imgUrls" :key="imgIndex" :url="imaUrl"/>
                    </div>
                    <div class="detail-item-right">
                        <IframeAutoHeight :src="detailItem.iframeUrl"/>
                    </div>
                </li>
            </ul>
        </CommonLayout>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';
    import PreviewImg from '@/components/PreviewImg.vue';
    import IframeAutoHeight from '@/components/iframeAutoHeight.vue';

    interface DetailItem {
        imgUrls: string[];
        iframeUrl: string;
    }

    @Component({
        components: {
            IframeAutoHeight,
            CommonLayout,
            PreviewImg,
        }
    })
    export default class Project extends Vue {
        private detailList: DetailItem[] = [
            {
                imgUrls: ['1mWX-DIBgHeUGXFtmQEHwJKK67mvDt1GA', '1PTshF1tLI3xFY41WsOu1S3bzNh_KLGWI'],
                iframeUrl: 'project_1.html'
            },
            {
                imgUrls: ['1DdxpO4qrKQ_Lr-ewtHUBUx_HA7KGdGpm', '11oa8P5aUlsWvyxyDS0MZ1-2p3z_q67Bj', '1H1EYE2VbyifKBl6g4JrAIV2OPpRzPjs9'],
                iframeUrl: 'project_2.html'
            }
        ];
    }
</script>
<style lang="scss" scoped>
    .detail-list {
        margin-top: 90px;
    }

    .detail-item {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
    }

    .detail-item-left {
        display: inline-block;
        width: 340px;
        margin-right: 94px;

        ::v-deep.preview {
            margin-bottom: 45px;

            & > img {
                cursor: pointer;
                width: 100%;
                max-width: 100%;
            }
        }
    }

    .detail-item-right {
        width: 100%;
    }
</style>
