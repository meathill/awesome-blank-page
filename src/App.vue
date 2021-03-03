<template lang="pug">
.app-background.fixed.w-full.h-full.bg-cover.z-0(
  :style="'background-image: url(' + bg + ')'",
)

#nav.bg-blue-600.px-5.text-white.space-x-2.leading-4x.bg-opacity-50.flex.relative.z-10
  router-link.block.px-3(
    class="hover:bg-blue-600",
    active-class="bg-blue-500",
    :to="{name: 'home'}",
  ) Home
  router-link.block.px-3(
    class="hover:bg-blue-600",
    active-class="bg-blue-500",
    :to="{name: 'config'}",
  ) Config
  router-link.block.px-3(
    class="hover:bg-blue-600",
    active-class="bg-blue-500",
    :to="{name: 'about'}",
  ) About

router-view.relative.z-10
</template>

<script>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';

/* global isDev */

export default {
  setup() {
    const bg = ref('');
    onBeforeMount(async() => {
      let result;
      try {
        const pathname = '/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US';
        const prefix = isDev ? '/wallpaper' : 'https://www.bing.com';
        result = await axios.get(prefix + pathname);
      } catch (e) {
        console.log('get background failed');
        return;
      }
      const { data } = result;
      const { images } = data;
      const [image] = images;
      bg.value = 'https://www.bing.com' + image.url;
    });

    return {
      bg,
    };
  },
};
</script>
