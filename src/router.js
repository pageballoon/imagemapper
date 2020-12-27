import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Image from './views/Image.vue'
import Mapper from './views/Mapper.vue'
import Preview from './views/Preview.vue'
import Result from './views/Result.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      label: '',
      icon: 'home',
      component: Home
    },
    {
      path: '/image',
      name: 'Image',
      label: 'Image',
      icon: 'dice-one',
      component: Image
    },
    {
      path: '/mapper',
      name: 'Mapper',
      label: 'Mapper',
      icon: 'dice-two',
      component: Mapper
    },
    {
      path: '/preview',
      name: 'Preview',
      label: 'Preview',
      icon: 'dice-three',
      component: Preview
    },
    {
      path: '/result',
      name: 'Result',
      label: '',
      icon: 'file-download',
      component: Result
    }
  ]
})
