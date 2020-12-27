<style lang="scss">

</style>
<template>
  <div class="container has-text-centered">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 ' + state.image.width + ' ' + state.image.height">
      <image :width="state.image.width" :height="state.image.height" :xlink:href="state.image.url"></image>
      <a :xlink:href="selection.url" v-for="selection in state.selections" :key="selection.url">
        <rect :x="selection.x" :y="selection.y" fill="#fff" opacity="0" :width="selection.width" :height="selection.height" />
      </a>
    </svg>
    <router-link to="/result" class="button">
      <i class="fa fa-check">
      </i>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'PreviewView',
  data () {
    return {
      state: this.$root.$data.state
    }
  }
}
</script>
