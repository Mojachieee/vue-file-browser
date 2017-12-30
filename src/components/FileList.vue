<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <v-list two-line subheader>
          <file v-for="file in files" v-bind:file="file"/>
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
      }]
    }
  }
}
</script>
<style>
</style>
