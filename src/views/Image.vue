<style lang="scss">
.image-preview {
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  min-width: 300px;
  min-height: 300px;
  margin-bottom: 25px;
  margin-top: 25px;
}

.image-remove {
  margin-left: 10px;
}

.image-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #eff0eb;
  padding: 10px;
}
</style>
<template>
  <div class="container has-text-centered">
    <div class="image-file-selector file has-name is-centered">
      <label class="file-label">
        <input v-on:change="uploadImage" class="file-input" type="file" name="resume">
        <span class="file-cta">
          <span class="file-icon">
            <i class="fas fa-upload"></i>
          </span>
          <span class="file-label">
            Choose a file…
          </span>
        </span>
        <span class="file-name">
          {{ file.name }}
        </span>
      </label>
      <span class="image-remove button" v-show="image" v-on:click="removeImage">
        <i class="fa fa-trash"></i>
      </span>
    </div>
    <div class="image-preview" v-bind:style="{ backgroundImage: 'url(' + imageUrl + ')' }">
      <div v-show="overlay" class="image-overlay">
        <i class="fa fa-image"></i>
        {{ overlay }}
      </div>
    </div>

    <div v-show="invalidFile" style="color:red;">
      Not a valid file type. Please uplaod an image.
    </div>
    <div v-show="image">
      <router-link to="/mapper" class="button">
        <i class="fa fa-check">
        </i>
      </router-link>
    </div>
  </div>
</template>
<script>
// todo: support drag and drop using some vue component
export default {
  name: 'ImageView',
  beforeRouteLeave (to, from, next) {
    // broadcast to state
    if (this.image) {
      this.$root.$data.state.image.url = this.imageUrl
      this.$root.$data.state.image.width = this.image.width
      this.$root.$data.state.image.height = this.image.height
    }
    next()
  },
  data () {
    return {
      invalidFile: false,
      imageUrl: '',
      file: {
        name: 'No file selected'
      },
      image: null
    }
  },
  methods: {
    uploadImage (e) {
      var files = e.target.files || e.dataTransfer.files
      if (!files.length) { return }

      const file = files[0]

      if (!file) {
        return
      }

      // check if upload is an image
      if (!/\.(jpe?g|png)$/i.test(file.name)) {
        this.invalidFile = true
        return
      }

      this.invalidFile = false

      this.createImage(file)
    },
    createImage (file) {
      const reader = new FileReader()
      const vm = this

      reader.onload = (e) => {
        var img = new Image()

        img.src = reader.result

        img.onload = function () {
          vm.image = img
        }

        vm.imageUrl = e.target.result
      }
      reader.readAsDataURL(file)
      this.file = file
    },
    removeImage: function (e) {
      this.image = this.$root.$data.state.defaultImage
      this.imageUrl = ''
      this.file = { name: 'No file selected' }
    }
  },
  computed: {
    overlay: function () {
      if (this.image) {
        return this.image.width + ' x ' + this.image.height
      }

      return ' '
    }
  }
}
</script>
