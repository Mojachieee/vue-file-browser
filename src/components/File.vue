<template>
  <div>
    <v-list-tile avatar>
        <v-list-tile-avatar>
            <v-icon> {{ file.icon }} </v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
            <v-list-tile-title> {{ file.name }} </v-list-tile-title>
            <v-list-tile-sub-title> {{ file.timestamp }} </v-list-tile-sub-title>
        </v-list-tile-content>
    </v-list-tile>
  </div>
</template>

<script>
export default {
  props: ['file']
}
</script>

<style>

</style>
