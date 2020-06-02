<template>
    <div class="about">
        <CommonLayout>
            <div class="author-detail">
                <IframeAutoHeight :src="descIframeUrl"/>
            </div>
            <ul class="work-list">
                <li v-for="(previewItem, index) in previewList" :key="index">
                    <Preview v-bind="previewItem.previewConfig" :modal-name="previewItem.modalName">
                        <img class="work-item-preview" v-gd-img="previewItem.previewUrl"
                             :alt="previewItem.title"
                             @click="$modal.show(previewItem.modalName)"
                        />
                    </Preview>
                    <span class="work-item-title">{{previewItem.title}}</span>
                </li>
            </ul>
        </CommonLayout>
    </div>
</template>
<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';
    import Preview from '@/components/Preview.vue';
    import { CommonPreviewItem } from '@/utils';
    import IframeAutoHeight from '@/components/iframeAutoHeight.vue';
    import { AboutConfig } from '@/config/about';

    @Component({
        components: {
            CommonLayout,
            Preview,
            IframeAutoHeight,
        }
    })
    export default class About extends Vue {
        private get descIframeUrl(): string {
            return `word2html/${AboutConfig.resumeIframeUrl}`;
        }

        private get previewList(): CommonPreviewItem[] {
            return AboutConfig.worksList;

        }
    }
</script>
<style lang="scss" scoped>
</style>
