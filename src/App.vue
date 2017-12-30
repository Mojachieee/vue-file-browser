<template>
  <div id="app">
    <v-app>
      <title-bar></title-bar>
      <router-view/>
    </v-app>
  </div>
</template>

<script>
  import TitleBar from './components/TitleBar'
  export default {
    name: 'app',
    components: {
      TitleBar
    }
  }
</script>

<style>

</style>
