<template>
    <Preview v-bind="config">
        <img v-gd-img="url" @click="$modal.show(modalName)"/>
    </Preview>
</template>
<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';
    import { PreviewImageConfig, PreviewType } from '@/utils';
    import Preview from './Preview.vue';
    import { nanoid } from 'nanoid';

    @Component({
        components: { Preview }
    })
    export default class PreviewImg extends Vue {
        private modalName: string = nanoid();

        @Prop({
            required: true,
        })
        private url!: string;

        private get config() {
            return {
                type: PreviewType.image,
                modalName: this.modalName,
                config: {
                    urls: [this.url]
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
</style>
