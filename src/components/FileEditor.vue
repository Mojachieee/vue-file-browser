<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-container fluid>
        <v-layout row>
          <h1> Editing {{ name }} </h1>
          <v-spacer/>
          <v-btn secondary @click="navigate"> Back </v-btn>
        </v-layout>
        <v-text-field
          textarea
          v-model="content"
        />
        <v-btn block secondary 
          :loading="loading"
          @click="save">
          Save Changes
        </v-btn>
      </v-container>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ['name'],
  data () {
    return {
      loader: null,
      content: 'asdas',
      loading: false
    }
  },
  methods: {
    save () {
      this.loader = 'loading'
    },
    navigate () {
      this.$router.go(-1)
    }
  },
  watch: {
    loader () {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => (this[l] = false), 3000)

      this.loader = null
    }
  }
}
</script>

<style>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
