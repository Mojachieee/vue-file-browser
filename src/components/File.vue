<template>
  <div>
    <v-list-tile avatar>
        <v-list-tile-avatar>
            <v-icon> {{ file.icon }} </v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-on:dblclick="startEditing" v-show="!isEditing"> {{ file.name }} </v-list-tile-title>
          <v-list-tile-title v-show="isEditing">
            <input type="text"  v-model="file.name"
              v-on:blur="stopEditing" @keyup.enter="stopEditing">
          </v-list-tile-title>
          <v-list-tile-sub-title> {{ file.timestamp }} </v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ['file'],
  data () {
    return {
      isEditing: false
    }
  },
  methods: {
    startEditing () {
      this.isEditing = true
    },
    stopEditing () {
      this.isEditing = false
      this.$emit('update')
    }
  }
}
</script>

<style>

</style>
