<style lang="scss">
  .removeButton {
    position: absolute;
    top: 5px;
    right: 5px;
  }
  .editButton {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .urlField {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translate(-50%, -50%);

    a {
      background-color: rgba(255, 255, 255, 0.9);
      padding: 5px;
    }
  }
</style>
<template>
    <VueDragResize  :id="'selection-' + uid"
                    :parentLimitation="true"
                    v-bind:isActive="true"
                    :w="100"
                    :h="100"
                    v-on:resizing="resize"
                    v-on:dragging="resize"
                    style="background-color:rgba(255,255,255,0.8);">
        <div class="removeButton" @click="remove">
          <i class="fa fa-trash"></i>
        </div>
        <div class="editButton" @click="edit">
          <i class="fa fa-edit"></i>
        </div>
        <div class="urlField">
          <a :href="this.url" target="_blank">
            {{ this.url }}
          </a>
        </div>
    </VueDragResize>
</template>
<script>
import VueDragResize from 'vue-drag-resize'
export default {
  data () {
    return {
      width: 100,
      height: 100,
      x: 0,
      y: 0,
      url: '#'
    }
  },
  props: ['uid'],
  methods: {
    resize (newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.y = newRect.top
      this.x = newRect.left
    },
    remove () {
      if (confirm('Are you sure?') === true) {
        this.$emit('remove')
      }
    },
    edit () {
      // todo: add support for
      // - target, fill, opacity
      // - circles

      var url = prompt('Please enter an URL', this.url)
      if (url != null) {
        this.url = url
      }
    }
  },
  components: {
    VueDragResize
  }
}
</script>
