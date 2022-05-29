<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>

import FullWidth from  '@/layouts/Full-width.vue'
import Default from   '@/layouts/Default'


export default {
  name: 'App',
  components: {
    FullWidth,
    Default
  },
  data() {
    return {

    }
  },
  computed: {
      layout() {
        return (this.$route.meta.layout || 'Default')
      },
  }
}

</script>

<style lang="sass">
@import ./assets/style/app_style.sass
  
</style>
