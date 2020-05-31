<template>
    <iframe :src="src" width="100%" frameborder="0" @load="handleLoad" ref="iframe"/>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from 'vue-property-decorator';

    @Component({})
    export default class iframeAutoHeight extends Vue {
        @Prop({
            required: true
        })
        private src!: string;


        private handleLoad(event: Event) {
            const frame = event.currentTarget as HTMLIFrameElement;
            if (frame && frame.contentWindow) {
                this.setHeight(frame);
                const styleEle = document.createElement('style');
                styleEle.setAttribute('type', 'text/css');
                styleEle.innerHTML = 'html,body{margin: 0 !important;padding: 0 !important;max-width: 100% !important;}';
                frame.contentWindow.document.head.append(styleEle);
                const aDoms = frame.contentWindow.document.getElementsByTagName('a');
                if (aDoms && aDoms.length) {
                    Array.from(aDoms).forEach((i) => {
                        if (i.getAttribute('href')) {
                            i.setAttribute('target', '_blank');
                        }
                    });
                }
            }
        }

        private setHeight(frame: HTMLIFrameElement) {
            frame.style.height = 'auto';
            this.$nextTick(() => {
                if (frame && frame.contentWindow) {
                    frame.style.height = frame.contentWindow.document.documentElement.scrollHeight + 'px';
                }
            });
        }

        private handleResize(event: Event) {
            this.setHeight(this.$refs.iframe as HTMLIFrameElement);
        }

        private mounted() {
            window.removeEventListener('resize', this.handleResize);
            window.addEventListener('resize', this.handleResize);
        }

        private beforeDestroy() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>

<style scoped>

</style>
