<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view/>
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
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-color: #FAFFFD;
  }
  .primary {
    background-color: #A71D31;
  }
</style>
