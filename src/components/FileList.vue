<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list two-line subheader>
          <div v-for="file, i in files">
            <file  v-bind:file="file"/>
            <v-divider v-if="i + 1 < files.length"/>
          </div>
        </v-list>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import File from './File'
export default {
  name: 'FileList',
  components: {
    File
  },
  data () {
    return {
      files: [{
        name: 'asd',
        icon: 'folder',
        timestamp: 'August 13, 2017'
      }, {
        name: 'file',
        icon: 'assignment',
        timestamp: 'May 20, 2017'
      }, {
        name: 'another file',
        icon: 'assignment',
        timestamp: 'Jan 25, 2017'
      }]
    }
  }
}
</script>
<style>
</style>
