import Vue from 'vue'
import Router from 'vue-router'
// import TitleBar from '@/components/TitleBar'
import FileList from '@/components/FileList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FileList',
      component: FileList
    }
  ]
})
