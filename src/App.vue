<style lang="scss">
.app-page {
  width: 100%;
  height: 100%;
}
</style>
<template>
  <div id="app">
      <section class="hero is-fullheight is-default is-bold">
        <header-section />
        <div class="hero-body">
          <keep-alive :exclude="['PreviewView', 'ResultView']">
            <router-view />
          </keep-alive>
        </div>
        <footer-section />
      </section>
  </div>
</template>
<script>
import headerSection from '@/components/sections/header.vue'
import footerSection from '@/components/sections/footer.vue'
export default {
  components: {
    headerSection,
    footerSection
  }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans');

// Bulma framework
@import 'scss/bulma.scss'
</style>
