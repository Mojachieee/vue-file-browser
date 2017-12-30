<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list two-line subheader>
          <div v-for="file, i in folders">
            <file v-on:navigate="navigateFolder"  v-bind:file="file"/>
            <v-divider v-if="i + 1 < folders.length"/>
          </div>
          <v-divider/>
          <div v-for="file, i in files">
            <file v-on:remove="removeFile"  v-bind:file="file"/>
            <v-divider v-if="i + 1 < files.length"/>
          </div>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import File from './File'
let axios = require('axios')
export default {
  name: 'FileList',
  props: ['path'],
  components: {
    File
  },
  mounted () {
    console.log("mounted")
    this.getFiles(this.$route.params.path)
  },
  data () {
    return {
      folders: [{
        name: 'folder',
        icon: 'folder',
        folder: true,
        id: 1
      }, {
        name: 'Another folder',
        icon: 'folder',
        folder: true,
        id: 2
      }],
      files: [{
        name: 'file',
        icon: 'assignment',
        timestamp: 'May 20, 2017',
        id: 3
      }, {
        name: 'another file',
        icon: 'assignment',
        timestamp: 'Jan 25, 2017',
        id: 4
      }]
    }
  },
  methods: {
    removeFile (file) {
      const fileIndex = this.files.indexOf(file)
      this.files.splice(fileIndex, 1)
    },
    navigateFolder (folder) {
      this.$router.push({
        name: 'FileListPath',
        params: {
          path: this.path + '/' + folder.name
        }
      })
    },
    getFiles (path) {
      axios.get('' + this.path).then((resp) => {
        let folders = []
        let files = []
        console.log(resp)
        for (let i = 0; i < Object.keys(resp.data).length; i++) {
          let file = resp.data[i]
          if (file.type === 'folder') {
            folders.push({
              name: file.name,
              id: file.id,
              icon: 'folder',
              folder: true
            })
          } else if (file.type === 'file') {
            files.push({
              name: file.name,
              id: file.id,
              icon: 'assignment',
              timestamp: file.lastmodified
            })
          }
        }
        this.folders = folders
        this.files = files
      })
    }
  },
  watch: {
    '$route.params.path' (newPath) {
      this.getFiles(newPath)
    }
  }
}
</script>
<style>
</style>
