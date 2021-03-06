import Vue from 'vue'
import Router from 'vue-router'
// import TitleBar from '@/components/TitleBar'
import FileList from '@/components/FileList'
import FileEditor from '@/components/FileEditor'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FileList',
      component: FileList,
      props: {
        path: ''
      }
    }, {
      path: '/:path',
      name: 'FileListPath',
      component: FileList,
      props: true
    }, {
      path: '/editor/:name',
      name: 'Editor',
      component: FileEditor,
      props: true
    }
  ]
})
