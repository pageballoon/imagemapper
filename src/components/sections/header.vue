<style lang="scss">
a.router-link-exact-active {
  border-bottom-color: #FA7C91 !important;
  color: #FA7C91 !important;
}
.navbar-item img {
    max-height: 3rem !important;
}
</style>
<template>
  <div class="hero-head">
      <nav class="navbar">
          <div class="container">
              <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                      <img src="@/assets/logo.png" alt="Logo">
                  </a>
                  <span @click="isMenuOpen = !isMenuOpen " :class="['navbar-burger', 'burger', isMenuOpen ? 'is-active' : '']" data-target="navbarMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
              </div>
              <div id="navbarMenu" :class="{'is-active': isMenuOpen }" class="navbar-menu">
                  <div class="navbar-end">
                      <div class="tabs is-right">
                          <ul>
                            <li v-for="route in this.$router.options.routes" :key="route.path">
                              <router-link :to="route.path">
                                <span style="vertical-align: middle;" v-if="route.icon" :class="['fa', 'fa-' + route.icon]"></span>
                                <span>&nbsp;{{ route.label }}</span>
                              </router-link>
                            </li>
                            <li>
                              <a href="https://github.com/pageballoon/imagemapper" target="_blank">
                                <span style="vertical-align: middle;" :class="['fa', 'fa-cog']"></span>
                                <span>&nbsp;GitHub</span>
                              </a>
                            </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isMenuOpen: false
    }
  }
}
</script>
