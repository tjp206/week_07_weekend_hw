<template>
  <div id="app">
    <img style="background-image: ">
    <h1>The Score Clan &#9917;</h1>
    <h2>Latest Scores From Around The &#127758;</h2>
    <section>
      <label for="comp-selected"><b>Select a game: </b></label>
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
  //     return this.selectedCompetition.competition.includes() 
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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #080763;
  background-image: url('~@/assets/CL-rain.jpg');
}

a {
  color: rgb(116, 5, 5);
  text-decoration: none;
}

.highlights {
  height: 100%;
  width: 100%;
  margin: 10px;
}
</style>
