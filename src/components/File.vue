<template>
  <div>
    <v-list-tile avatar ripple @click="navigate">
        <v-list-tile-avatar>
            <v-icon> {{ file.icon }} </v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title v-show="!isEditing"> {{ file.name }} </v-list-tile-title>
            <v-text-field
              v-bind:ref="file.id"
              @click.stop v-show="isEditing"
              prepend-icon="mode_edit"
              v-model="file.name"
              v-on:blur="stopEditing" @keyup.enter="stopEditing"/>
          <v-list-tile-sub-title> {{ file.timestamp }} </v-list-tile-sub-title>
        </v-list-tile-content>
         <v-list-tile-action @click.stop>
           <v-menu offset-y>
              <v-btn icon ripple slot="activator">
                <v-icon color="grey lighten-1">more_vert</v-icon>
              </v-btn>
                <v-list>
                  <v-list-tile @click="startEditing(file)">
                    <v-list-tile-title> Rename </v-list-tile-title>
                  </v-list-tile>
                  <v-list-tile @click="remove(file)">
                    <v-list-tile-title> Delete </v-list-tile-title>
                  </v-list-tile>
                </v-list>
           </v-menu>
        </v-list-tile-action>
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
    startEditing (file) {
      this.isEditing = true
      let el = this.$refs[file.id]
      this.$nextTick(() => {
        el.focus()
      })
    },
    stopEditing () {
      this.isEditing = false
      this.$emit('update')
    },
    navigate () {
      if (this.file.folder) {
        this.$emit('navigate', this.file)
      } else {
        this.$router.push({
          name: 'Editor',
          params: {
            name: this.file.name
          }
        })
      }
    },
    remove (file) {
      this.$emit('remove', file)
    }
  }
}
</script>

<style>

</style>
