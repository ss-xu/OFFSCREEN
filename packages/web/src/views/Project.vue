<template>
    <div class="project">
        <CommonLayout>
            <ul class="detail-list">
                <li class="detail-item" v-for="(detailItem, index) in detailList" :key="index">
                    <div class="detail-item-left">
                        <PreviewImg v-for="(imaUrl, imgIndex) in detailItem.imgUrls" :key="imgIndex" :url="imaUrl"/>
                    </div>
                    <div class="detail-item-right">
                        <IframeAutoHeight :src="getWork2HtmlUrl(detailItem.iframeUrl)"/>
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
    import { DetailItem, ProjectConfig } from '@/config/project';

    @Component({
        components: {
            IframeAutoHeight,
            CommonLayout,
            PreviewImg,
        }
    })
    export default class Project extends Vue {
        private get detailList(): DetailItem[] {
            return ProjectConfig;
        }

        private getWork2HtmlUrl(url: string) {
            return `word2html/${url}`;
        }
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
