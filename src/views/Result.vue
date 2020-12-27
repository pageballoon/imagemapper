<style lang="scss">
#result-code {
  display:none;
}
.results-bttn{
  display: block;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
}
.instructions-text{
  text-align: center;
  margin-top: 1%;
  margin-bottom: 1%;
}

</style>
<template>
  <div class="container">
    <h1 style="text-align: center;">Here's your responsive image map!</h1>
    <!-- todo: make description of how this works and how to use it, also remind people to replace the /path/to/image -->
    <div  v-on:click="instructions = !instructions" class="button results-bttn"><p v-if="!instructions">Show Instructions</p><p v-if="instructions">Close</p></div>
    <p v-if="instructions" class="instructions-text">Copy the code below into your file. <br/> Replace "/path/to/image" with the correct path. </p>
    <!-- <p>   <p> -->
    <div id="result-code">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" :viewBox="'0 0 ' + state.image.width + ' ' + state.image.height">
        <image :width="state.image.width" :height="state.image.height" xlink:href="/path/to/image">
        </image>
        <a :xlink:href="selection.url" v-for="selection in state.selections" :key="selection.url">
          <rect :x="selection.x" :y="selection.y" fill="#fff" opacity="0" :width="selection.width" :height="selection.height" />
        </a>
      </svg>
    </div>
    <codemirror :value="code" :options="cmOptions"></codemirror>
  </div>
</template>
<script>
import beautify from 'js-beautify'
import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/ambiance.css'
export default {
  name: 'ResultView',
  data () {
    return {
      instructions: false,
      state: this.$root.$data.state,
      code: '',
      cmOptions: {
        tabSize: 4,
        mode: 'text/html',
        theme: 'ambiance',
        lineNumbers: true,
        line: true
      }
    }
  },
  mounted () {
    this.code = beautify.html(
      document.getElementById('result-code').innerHTML
      , { indent_size: 2 })
  },
  components: {
    codemirror
  }
}
</script>
