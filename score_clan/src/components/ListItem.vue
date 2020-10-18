<template lang="html">
  <li v-on:click="handleClick">{{ competition.title }}</li>
</template>

<script>
import { eventBus } from '../main.js'

export default {
    name: 'list-item',
    props: ['competition'],
    methods: {
        handleClick() {
            eventBus.$emit('comp-selected', this.competition)
        },
    }
}
</script>

<style>
</style>