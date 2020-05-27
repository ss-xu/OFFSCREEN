<template>
    <div class="project">
        <CommonLayout/>
    </div>
</template>
<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import CommonLayout from '@/components/CommonLayout.vue';

    @Component({
        components: {
            CommonLayout,
        }
    })
    export default class Project extends Vue {

    }
</script>
<style lang="scss" scoped>

</style>
