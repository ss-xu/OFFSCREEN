<template>
    <div class="curator">
        <CommonLayout>
            <div class="curator-detail">
                <iframeAutoHeight :src="descIframeUrl"/>
            </div>
            <ul class="work-list">
                <li v-for="(previewItem, index) in previewList" :key="index">
                    <Preview v-bind="previewItem.previewConfig" :modal-name="previewItem.modalName">
                        <img class="work-item-preview"
                             v-gd-img="previewItem.previewUrl"
                             :alt="previewItem.title"
                             @click="$modal.show(previewItem.modalName)"
                        />
                        <span class="work-item-title">{{previewItem.title}}</span>
                    </Preview>
                </li>
            </ul>
        </CommonLayout>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';
    import Preview from '@/components/Preview.vue';
    import iframeAutoHeight from '@/components/iframeAutoHeight.vue';
    import { CommonPreviewItem } from '@/utils';
    import { CuratorConfig } from '@/config/curator';

    @Component({
        components: {
            CommonLayout,
            Preview,
            iframeAutoHeight
        }
    })
    export default class Curator extends Vue {

        private get descIframeUrl(): string {
            return `word2html/${CuratorConfig.resumeIframeUrl}`;
        }

        private get previewList(): CommonPreviewItem[] {
            return CuratorConfig.worksList;
        }
    }
</script>
<style lang="scss" scoped>
</style>
