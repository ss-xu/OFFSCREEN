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
                            '19eBMlQqbkvIxiJcyHn-nU8XUgGKkDndd',
                            '1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX',
                            '1BcY7NMlzj4lRrZcdAiIZ0uOwHrGQ9LWR',
                            '1qUoTktpMouByZSk1UiJMM_3M0aqAzvOb',
                            '1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX',
                            '13rumr6sJ0SkG8m6uKj1EjJTQ8wcj1AZo',
                        ]
                    }
                }
            },
            {
                title: 'Prima letterea, 2019',
                modalName: nanoid(),
                previewUrl: '13ATjXTNIczAiOHoeicZRwmvUSpI2NZ6E',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [
                            '13ATjXTNIczAiOHoeicZRwmvUSpI2NZ6E',
                        ]
                    }
                }
            }
        ];
    }
</script>
<style lang="scss" scoped>
</style>
