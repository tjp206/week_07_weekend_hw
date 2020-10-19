<template lang="html">
  <div v-if="competition">
      <h3>Home: <a v-bind:href="competition.side1.url">{{ competition.side1.name }}</a> vs Away: <a v-bind:href="competition.side2.url">{{ competition.side2.name }}</a></h3>

      <h3>Competition Information: </h3>
      <p><b><a v-bind:href="competition.competition.url">{{ competition.competition.name }}</a></b></p>

      <h3>Match Information: </h3>
      <p><b>Date: {{ competition.date.substring(8, 10) }}/{{ competition.date.substring(5, 7) }}/{{ competition.date.substring(0, 4) }}</b></p>
      <p><b>Time: {{ competition.date.substring(11, 19) }}</b></p>
     


      <h3>Check For Live Stream:</h3>
      <p><b><a v-bind:href="competition.url">{{ competition.url }}</a></b></p>

      <h3>Match Highlights:</h3>
      <div v-for="video in competition.videos" class="highlights" v-html="video.embed"></div>
      
       
  </div>  
</template>

<script>
export default {
    name: 'comp-detail',
    props: ['competition'],
}
    

</script>

<style>
</style>