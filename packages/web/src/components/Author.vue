<template>
    <div class="author-wrapper">
        <span class="author">{{$t('about.author')}}</span>
        <span class="projectName">{{$t('about.projectName')}}</span>
        <span class="curator">{{$t('about.curator')}}</span>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component({})
    export default class Author extends Vue {
    }
</script>
<style lang="scss" scoped>
    .author-wrapper {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        .author {
            height: 27px;
            font-size: 28px;
            font-weight: bold;
            text-decoration: underline;
            color: rgba(0, 0, 0, 1);
            margin-bottom: 17px;
        }

        .projectName {
            height: 33px;
            font-size: 35px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
            font-style: italic;
            margin-bottom: 17px;
        }

        .curator {
            height: 18px;
            font-size: 24px;
            font-weight: bold;
            color: rgba(0, 0, 0, 1);
        }
    }
</style>
