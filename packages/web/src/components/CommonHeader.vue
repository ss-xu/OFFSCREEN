<template>
    <div class="common-header">
        <Author class="common-author"/>
        <div class="line"/>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import Author from '@/components/Author.vue';

    @Component({
        components: {
            Author,
        }
    })
    export default class CommonHeader extends Vue {

    }
</script>
<style lang="scss" scoped>
    .common-header {
        .common-author {
            width: 90%;
            padding-top: 5%;
            margin-bottom: 50px;
        }

        .line {
            width: 100%;
            height: 1px;
            background: url("../assets/split-lint@2x.webp") repeat-x center center;
        }
    }
</style>
