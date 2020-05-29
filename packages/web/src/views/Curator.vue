<template>
    <div class="curator">
        <CommonLayout>
            <div class="curator-detail">
                <i18n path="curator.cv.content" tag="p" class="content">
                    <a place="place_1" target="_blank" href="//www.dapa.biz/">{{ $t('curator.cv.place_1') }}</a>
                    <a place="place_2" target="_blank" href="//www.uraganoelettrico.it/">{{ $t('curator.cv.place_2') }}</a>
                    <a place="place_3" target="_blank" href="//www.themanwhosmiledtoomuch.org/"><i>{{
                        $t('curator.cv.place_3') }}</i></a>
                </i18n>
                <p class="contact">Contatto con Arianna: ariannadesideriad@gmail.com</p>
            </div>
            <ul class="work-list">
                <li v-for="(previewItem, index) in previewList" :key="index">
                    <Preview v-bind="previewItem.previewConfig" :modal-name="previewItem.modalName">
                        <img class="work-item-preview" :src="previewItem.previewUrl"
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
    import { nanoid } from 'nanoid';
    import { GoogleDriveImageShortLinkPrefix } from '@/common/utils';
    import { PreviewType, CommonPreviewItem } from '@/utils';

    @Component({
        components: {
            CommonLayout,
            Preview
        }
    })
    export default class Curator extends Vue {
        private previewList: CommonPreviewItem[] = [
            {
                title: 'Quaderno del progetto',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1N3T_VNxm83cilUaW6lq-oDeCvo5NeSCS`,
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [
                            `${GoogleDriveImageShortLinkPrefix}19eBMlQqbkvIxiJcyHn-nU8XUgGKkDndd`,
                            `${GoogleDriveImageShortLinkPrefix}1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX`,
                            `${GoogleDriveImageShortLinkPrefix}1BcY7NMlzj4lRrZcdAiIZ0uOwHrGQ9LWR`,
                            `${GoogleDriveImageShortLinkPrefix}1qUoTktpMouByZSk1UiJMM_3M0aqAzvOb`,
                            `${GoogleDriveImageShortLinkPrefix}1rSgtz4ZSRSNEffTvR6VeC6tQnV7g3JuX`,
                            `${GoogleDriveImageShortLinkPrefix}13rumr6sJ0SkG8m6uKj1EjJTQ8wcj1AZo`,
                        ]
                    }
                }
            },
            {
                title: 'Prima letterea, 2019',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}13ATjXTNIczAiOHoeicZRwmvUSpI2NZ6E`,
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [
                            `${GoogleDriveImageShortLinkPrefix}13ATjXTNIczAiOHoeicZRwmvUSpI2NZ6E`,
                        ]
                    }
                }
            }
        ];
    }
</script>
<style lang="scss" scoped>
</style>
