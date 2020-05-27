<template>
    <div class="preview">
        <slot/>
        <Modal
                :name="modalName"
                width="77%"
                :adaptive="true"
                :clickToClose="false"
                class="preview-modal"
                @opened="handleModalOpened"
        >
            <div class="modal-container">
                <div class="content"></div>
                <span class="close" @click="handleModalClose">
                <img src="@/assets/preview-close@2x.webp" alt="close"/>
            </span>
            </div>
        </Modal>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})
    export default class Preview extends Vue {

        private get modalName() {
            return 'modal';
        }

        private handleModalOpened(event: any) {
            console.log(event);
        }

        private handleModalClose() {
            this.$modal.hide(this.modalName);
        }

        private mounted() {
            // this.$modal.show(this.modalName);
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

        .content {
            flex: 1;
            background: red;
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
