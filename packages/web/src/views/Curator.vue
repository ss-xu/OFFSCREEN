<template>
    <div class="curator">
        <CommonLayout>
            <div class="curator-detail">
                <iframeAutoHeight src="./curator.html" />
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
    import { nanoid } from 'nanoid';
    import { PreviewType, CommonPreviewItem } from '@/utils';

    @Component({
        components: {
            CommonLayout,
            Preview,
            iframeAutoHeight
        }
    })
    export default class Curator extends Vue {
        private previewList: CommonPreviewItem[] = [
            {
                title: 'Quaderno del progetto',
                modalName: nanoid(),
                previewUrl: '1N3T_VNxm83cilUaW6lq-oDeCvo5NeSCS',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [
                            "19eBMlQqbkvIxiJcyHn-nU8XUgGKkDndd",
                            "1pws189c16ApbBTpVeFZ5981jwherzs5E",
                            "1BcY7NMlzj4lRrZcdAiIZ0uOwHrGQ9LWR",
                            "1qUoTktpMouByZSk1UiJMM_3M0aqAzvOb",
                            "1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX",
                            "13rumr6sJ0SkG8m6uKj1EjJTQ8wcj1AZo"
                        ]
                    }
                }
            },
            {
                title: 'Prima email',
                modalName: nanoid(),
                previewUrl: '1jBSO-6eUxxjFPoM6arIghqi9dpjT_4_6',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1jBSO-6eUxxjFPoM6arIghqi9dpjT_4_6']
                    }
                }
            },
            {
                title: 'Flash da 1° visione',
                modalName: nanoid(),
                previewUrl: '1QPg5E5XWysjcshuvoAKQ-4IUxDMxHrl5',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/1cOT42FU8y8V42dML-OxEY5QukEymxT5p/preview',
                    }
                }
            },
            {
                title: 'Q&A definitivo',
                modalName: nanoid(),
                previewUrl: '1UzT-GQKPfVWeYJkNhEV7R-j7qSiLU-No',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/1LA5mEcffbzh3gPLsZx8f6p_KTJW0dHkU/preview',
                    }
                }
            },
        ];
    }
</script>
<style lang="scss" scoped>
</style>
