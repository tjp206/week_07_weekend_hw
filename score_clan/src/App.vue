<template>
  <div id="app">
    <img style="background-image: ">
    <h1>ScoreClan Results</h1>
    <section>
      <label for="comp-selected">Select a game: </label>
      <select id="comp-selected" v-model="selectedCompetition">
        <option disabled value="">Choose a game</option>
        <option v-for="(competition, index) in competitions" :value="competition" :key='index'>{{ competition.title }}</option>
      </select>
      <!-- <comp-list :competitions="competitions"></comp-list> -->

      <comp-detail :competition="selectedCompetition"></comp-detail>

    </section>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import CompList from './components/CompList.vue'
import CompDetail from './components/CompDetail.vue'


export default {
  name: 'App',
  data(){
    return {
      competitions: [],
      selectedCompetition: null,
    };
  },
  mounted(){
    fetch("https://www.scorebat.com/video-api/v1/")
    .then(res => res.json())
    .then(competitions => this.competitions = competitions)
    
    eventBus.$on("comp-selected", (competition) => {
      this.selectedCompetition = competition
    })
  },
  components: {
    'comp-detail': CompDetail,
    'comp-list': CompList
  },
  computed: {
  // filterComps: function(){
  //   return this.competitions.filter((competition) => {
  //     return this.selectedCompetition.data.includes() 
  //   })
  // }
}
}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #080763;
  margin-top: 60px;
  /* background-color: rgb(44, 93, 230); */
  background-image: url('~@/assets/CL-rain.jpg');
}

.highlights {
  height: 100%;
  width: 100%;
}
</style>
