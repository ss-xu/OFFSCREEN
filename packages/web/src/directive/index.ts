import Vue from 'vue';
import { DirectiveBinding } from 'vue/types/options';
import { GoogleDriveImageShortLinkPrefix } from '@/common/utils';

Vue.directive('gd-img', {
    bind(el: HTMLElement, binding: DirectiveBinding) {
        if (binding.value) {
            (el as HTMLImageElement).src = `${GoogleDriveImageShortLinkPrefix}${binding.value}`;
        }
    }
});
