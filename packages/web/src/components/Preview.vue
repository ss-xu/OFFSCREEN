<template>
    <div class="preview">
        <slot/>
        <Modal
                :name="modalName"
                width="77%"
                height="79%"
                :adaptive="true"
                :clickToClose="true"
                class="preview-modal"
                @opened="handleModalOpened"
        >
            <div class="modal-container">
                <div class="content">
                    <component :is="PreviewComponentMap[type]" v-bind="config"/>
                </div>
                <span class="close" @click="handleModalClose">
                <img src="@/assets/preview-close@2x.webp" alt="close"/>
            </span>
            </div>
        </Modal>
    </div>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { PreviewIframeConfig, PreviewImageConfig, PreviewType } from '@/utils';
    import PreviewImages from '@/components/PreviewImages.vue';
    import PreviewIframe from '@/components/PreviewIframe.vue';

    @Component({})
    export default class Preview extends Vue {

        @Prop({
            required: true,
        })
        private type!: PreviewType;

        @Prop({
            required: true,
        })
        private config!: PreviewIframeConfig | PreviewImageConfig;

        @Prop({
            required: true
        })
        private modalName!: string;

        private get PreviewComponentMap() {
            return {
                [PreviewType.iframe]: PreviewIframe,
                [PreviewType.image]: PreviewImages,
            }
        }

        private handleModalOpened(event: any) {
            console.log(event);
        }

        private handleModalClose() {
            this.$modal.hide(this.modalName);
        }
    }
</script>
<style lang="scss" scoped>
    .preview {
    }

    .preview-modal {
        ::v-deep.vm--overlay {
            background: none;
        }

        ::v-deep.vm--modal {
            background: none;
            box-shadow: none;
            margin-left: 25px;
        }
    }

    .modal-container {
        display: flex;
        height: 100%;

        .content {
            flex: 1;
            overflow: auto;
        }

        .close {
            display: inline-block;
            width: 46px;
            height: 46px;
            margin-left: 4px;
            cursor: pointer;

            img {
                width: 100%;
                max-width: 100%;
            }
        }
    }

</style>
