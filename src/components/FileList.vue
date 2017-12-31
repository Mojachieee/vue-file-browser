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
            <file v-on:navigate="navigateFile" v-on:remove="removeFile"  v-bind:file="file"/>
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
    this.getFiles()
  },
  data () {
    return {
      folders: [],
      files: []
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
    navigateFile (file) {
      this.$router.push({
        name: 'Editor',
        params: {
          name: file.name,
          path: this.path + '/' + file.name
        }
      })
    },
    getFiles () {
      axios.get('' + this.path).then((resp) => {
        let folders = []
        let files = []
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
    '$route.params.path' () {
      this.getFiles()
    }
  }
}
</script>
<style>
</style>
