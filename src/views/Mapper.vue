<style lang="scss">
.mapper-canvas {
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  margin: auto;
}

</style>
<template>
  <div class="container has-text-centered">
    <div class="level">
      <div class="level-left toolbar">
        <div class="button" v-on:click="addSelection">
          <i class="far fa-2x fa-plus-square"></i>
        </div>
      </div>
      <div id="mapper-canvas" class="level-right mapper-canvas" v-bind:style="{
        backgroundImage: 'url(' + $root.$data.state.image.url + ')',
        width: $root.$data.state.image.width + 'px',
        height: $root.$data.state.image.height  + 'px'
      }" ref="canvas">
      </div>
    </div>
    <router-link to="/preview" class="button">
      <i class="fa fa-check">
      </i>
    </router-link>
  </div>
</template>
<script>
import Vue from 'vue'
import selection from '@/components/selection.vue'
export default {
  name: 'MapperView',
  beforeRouteLeave (to, from, next) {
    // broadcast to state
    this.$root.$data.state.selections = this.selections
    next()
  },
  data () {
    return {
      selections: []
    }
  },
  methods: {
    addSelection: function () {
      var Selection = Vue.extend(selection)
      var instance = new Selection({
        // pass unique id, that equals the equals the
        // index in the selections array
        propsData: { uid: this.selections.length }
      })
      // create a div that will be targeted during mount
      var div = document.createElement('div')
      div.id = 'selection-mount-target'
      // append it to canvas
      document.getElementById('mapper-canvas').appendChild(div)
      // mount component, replaces the div we just created
      instance.$mount('#selection-mount-target')
      // add to selection list
      this.selections.push(instance)
      // add event listener that removes the selection
      // when the event is emited by the selection component
      instance.$on('remove', () => {
        const uid = instance.uid
        // destroy the instance
        instance.$destroy()
        // remove element from list
        this.selections.splice(uid, 1)
        // remove the html dom elemnt
        document.getElementById('selection-' + uid).remove()
      })
    }
  }
}
</script>
