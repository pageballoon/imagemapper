<template>
  <div class="hero-body">
    <div class="container has-text-centered">
        <div class="columns is-vcentered">
            <div class="column is-5">
                <figure class="image is-4by3">
                    <img src="@/assets/homeImg.jpg" alt="Description">
                </figure>
            </div>
            <div class="column is-6 is-offset-1">
                <h1 class="title is-2">
                    ImageMapper
                </h1>
                <h2 class="subtitle is-4">
                    Create responsive image maps with ease
                </h2>
                <br>
                <p class="has-text-centered">
                    <router-link to="/image" class="button is-medium is-info is-outlined">
                      Get started
                    </router-link>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  data () {
    return {

    }
  }
}
</script>
