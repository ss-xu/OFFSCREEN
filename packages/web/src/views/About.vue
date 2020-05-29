<template>
    <div class="about">
        <CommonLayout>
            <div class="author-detail">
                <p class="content">{{$t('about.content')}}</p>
                <p class="contact">Contatto con Tianyi: xty311@gmail.com</p>
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
    import { Component, Vue } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';
    import Preview from '@/components/Preview.vue';
    import { PreviewType, CommonPreviewItem } from '@/utils';
    import { GoogleDriveImageShortLinkPrefix } from '@/common/utils';
    import { nanoid } from 'nanoid'

    @Component({
        components: {
            CommonLayout,
            Preview,
        }
    })
    export default class About extends Vue {
        private previewList: CommonPreviewItem[] = [
            {
                title: 'Testo di Fuori Campo, 2019',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1hT7vlQIYoPBZB5HqGnt-KSzSWmVd4HRB`,
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: 'https://drive.google.com/file/d/14y4Ru-xUzGM6KeX8eTa614P0GJNSaTr4/preview',
                    }
                }
            },
            {
                title: 'Libro, i cinesi non muoiono mai',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1DggXyzdPGV0DGSF6wKKHd-1WLsq7Bb_G`,
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: 'https://drive.google.com/file/d/1vljOFMgiaXOcIKyuadf4RrG6g25DY3mq/preview',
                    }
                }
            },
            {
                title: 'Data del Centro Pecci e degli immigrati cinesi a Prato, 2019\n',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1KHGzMgeTLl4ZbEPAuuSpIzSi2WIuTWQF`,
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [`${GoogleDriveImageShortLinkPrefix}1flK_Wdwm5IVEHF46zYGZXaB_xtBrco-G`, `${GoogleDriveImageShortLinkPrefix}1fN6gTgXWnzrFiok-Lqr3F065asZ5aHEx`]
                    }
                }
            },
            {
                title: 'Cession diritti utilizzo per foto e video, 2019',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1S_d7wDI9qT8QU-9_CEU3X4GOoPVJ-Cdr`,
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [`${GoogleDriveImageShortLinkPrefix}1S_d7wDI9qT8QU-9_CEU3X4GOoPVJ-Cdr`]
                    }
                }
            },
            {
                title: 'Biglitti, 2019',
                modalName: nanoid(),
                previewUrl: `${GoogleDriveImageShortLinkPrefix}1UCGrOapUDcga6W5q7EcRrpA0Hb4UlfoJ`,
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: [`${GoogleDriveImageShortLinkPrefix}1UCGrOapUDcga6W5q7EcRrpA0Hb4UlfoJ`]
                    }
                }
            },
        ];
    }
</script>
<style lang="scss" scoped>
</style>
