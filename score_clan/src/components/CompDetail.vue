<template lang="html">
  <div v-if="competition">
      <h3>Home: {{ competition.side1.name }} vs Away: {{ competition.side2.name }}</h3>
      <h3>Competition: </h3>
      <p><b>{{ competition.competition.name }}</b></p>
      <h3>Match Date & Time: </h3>
      <p><b>{{ competition.date }}</b></p>
      <h3>Check for live stream:</h3>
      <!-- <a class="url" :src="competition.url"></a> -->
      <p><b>{{ competition.url }}</b></p>
      <!-- <p><img class="thumb" :src="competition.thumbnail"/></p> -->
      <h3>Highlights:</h3>
        <!-- {{competition.videos.map(item =>
         JSON.parse(item.embed))}} -->
      <!-- <iframe :src="competition.videos"></iframe> -->
      <div class="highlights" v-html="competition.videos"></div>  <!-- this one works -->
      <!-- {{ competition.videos }} -->
      <!-- <p><b>{{ competition.videos.embed }}</b></p> -->
       
  </div>  
</template>

<script>
export default {
    name: 'comp-detail',
    props: ['competition']
}
</script>

<style>
</style>