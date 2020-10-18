<template lang="html">
  <div>
      <ul>
          <list-item v-for="(competition, index) in competitions" :competition="competition" :key="index"></list-item>
      </ul>
  </div>
</template>

<script>
import ListItem from './ListItem.vue'

export default {
  name: 'comp-list',
  props: ['competitions'],
  components: {
    'list-item': ListItem
  }
}
</script>

<style>
</style>