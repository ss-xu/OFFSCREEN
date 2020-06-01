<template>
    <div class="about">
        <CommonLayout>
            <div class="author-detail">
                <IframeAutoHeight src="about.html"/>
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
    import { PreviewType, CommonPreviewItem } from '@/utils';
    import { nanoid } from 'nanoid'
    import IframeAutoHeight from '@/components/iframeAutoHeight.vue';

    @Component({
        components: {
            CommonLayout,
            Preview,
            IframeAutoHeight,
        }
    })
    export default class About extends Vue {
        private previewList: CommonPreviewItem[] = [
            {
                title: 'Non guardarmi Non ti sento',
                modalName: nanoid(),
                previewUrl: '1aTYmLThh4yBLUC-qGtddWxumhJ2pWeBv',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1aTYmLThh4yBLUC-qGtddWxumhJ2pWeBv'],
                    }
                }
            },
            {
                title: '2 halves happy rabbit (dal libro We go to the gallery di Miriam Elia)',
                modalName: nanoid(),
                previewUrl: '1KI9bZCphaJWWaV0w1Aq_ozvq5MLBmCOP',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1KI9bZCphaJWWaV0w1Aq_ozvq5MLBmCOP'],
                    }
                }
            },
            {
                title: 'Entro Pecci',
                modalName: nanoid(),
                previewUrl: '1IGNHvYl8eW3zIe7r-7u1qx6cYhcI70Ou',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1IGNHvYl8eW3zIe7r-7u1qx6cYhcI70Ou']
                    }
                }
            },
            {
                title: 'In una pagina della mostra',
                modalName: nanoid(),
                previewUrl: '1PmR13brkCy-hyN82Wy5AnSAvssIZeRhY',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1PmR13brkCy-hyN82Wy5AnSAvssIZeRhY']
                    }
                }
            },
            {
                title: 'Istituire una collezione permanente',
                modalName: nanoid(),
                previewUrl: '1lx48sqrsrQIBQNxdps7ezoKGzLDvp6ND',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1BHTycyNnC3mmAGyIuFx4lHzxcNglIOJ-', '1lx48sqrsrQIBQNxdps7ezoKGzLDvp6ND']
                    }
                }
            },
            {
                title: 'I cinesi non muoinono mai (Libro di Raffaele Oriani e Riccardo Staglianò)',
                modalName: nanoid(),
                previewUrl: '1DggXyzdPGV0DGSF6wKKHd-1WLsq7Bb_G',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/1vljOFMgiaXOcIKyuadf4RrG6g25DY3mq/preview',
                    }
                }
            },
            {
                title: 'Here the art',
                modalName: nanoid(),
                previewUrl: '18nEbZ-m5LRIJbq9vjyqaRCwXWR6zYOeC',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['18nEbZ-m5LRIJbq9vjyqaRCwXWR6zYOeC']
                    }
                }
            },
            {
                title: 'Here to work',
                modalName: nanoid(),
                previewUrl: '1XhCpfXVlkygsJTScYnOp56I4tVEXjhs0',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1XhCpfXVlkygsJTScYnOp56I4tVEXjhs0']
                    }
                }
            },
            {
                title: 'Ma è importamte tornare alle nostre origini',
                modalName: nanoid(),
                previewUrl: '10u5AHeBKCh5OigUVjmXNEClJVrSiYswS',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['10u5AHeBKCh5OigUVjmXNEClJVrSiYswS']
                    }
                }
            },
            {
                title: 'Provenienza artisti/Country of origin',
                modalName: nanoid(),
                previewUrl: '1DzwgrM09kcdM1q6Gdj76HADbROPLzqdh',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1DzwgrM09kcdM1q6Gdj76HADbROPLzqdh']
                    }
                }
            },
            {
                title: 'First offscreen',
                modalName: nanoid(),
                previewUrl: '1oZGPRQQJTMtavoduP8HIuuUC4BOCMfC3',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/14y4Ru-xUzGM6KeX8eTa614P0GJNSaTr4/preview',
                    }
                }
            },
            {
                title: 'Last subtitle',
                modalName: nanoid(),
                previewUrl: '1fzj6_jZDg7XHnbK98dfz3CabnzTPPQ8C',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/11pH9gzWXPwHQfmN89BP0OU6tPXsjiurH/preview',
                    }
                }
            },
            {
                title: 'Una lettera del 14 gen 2020',
                modalName: nanoid(),
                previewUrl: '1Piz9xzagh9hkE1Qs3QSlh3K4qfMs5egR',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1Piz9xzagh9hkE1Qs3QSlh3K4qfMs5egR']
                    }
                }
            },
            {
                title: 'Un sogno del 7 set 2019',
                modalName: nanoid(),
                previewUrl: '1DTnZy6O7f1Uow_HBds65XF7F4rPw1t3x',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1DTnZy6O7f1Uow_HBds65XF7F4rPw1t3x']
                    }
                }
            },
            {
                title: 'Macrolotto nel Museo del Tessuto di Prato 23 ago 2019',
                modalName: nanoid(),
                previewUrl: '1JC8S9AgdzoJxtfH1lE37wHIJakAMk-c5',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1JC8S9AgdzoJxtfH1lE37wHIJakAMk-c5']
                    }
                }
            },
            {
                title: 'Progetto dell\'arte a Macrolotto nel 2015',
                modalName: nanoid(),
                previewUrl: '14AXZf5W4CAbPRt9xCFzi14xiIpcZkmCQ',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['14AXZf5W4CAbPRt9xCFzi14xiIpcZkmCQ']
                    }
                }
            },
            {
                title: 'Il luogo dove l’arte È vicina alla gente',
                modalName: nanoid(),
                previewUrl: '1ncvD0iSjFTuL8kLgkBU0G2RavKUr_VLy',
                previewConfig: {
                    type: PreviewType.iframe,
                    config: {
                        url: '//drive.google.com/file/d/1JKXBOWfyEnQ_GExSNTlXAosnbSP1aROM/preview',
                    }
                }
            },
            {
                title: 'Two color & some numbers',
                modalName: nanoid(),
                previewUrl: '1qLGS9hGnPpeKvzrkGoWPFR02Q_KxRtfN',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1flK_Wdwm5IVEHF46zYGZXaB_xtBrco-G', '1fN6gTgXWnzrFiok-Lqr3F065asZ5aHEx']
                    }
                }
            },
            {
                title: 'A question & some Bookmarks',
                modalName: nanoid(),
                previewUrl: '1xsOpZune57kmfRQKofQRBbNCMjHJrSIq',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1xsOpZune57kmfRQKofQRBbNCMjHJrSIq']
                    }
                }
            },
            {
                title: 'Io & Pecci',
                modalName: nanoid(),
                previewUrl: '1S_d7wDI9qT8QU-9_CEU3X4GOoPVJ-Cdr',
                previewConfig: {
                    type: PreviewType.image,
                    config: {
                        urls: ['1S_d7wDI9qT8QU-9_CEU3X4GOoPVJ-Cdr']
                    }
                }
            },
        ];
    }
</script>
<style lang="scss" scoped>
</style>
