<template>
  <div class="praktika">
    <h1>Praktika</h1>
  </div>
  <ul>
    <li><Blogi name="Rasmus in Toulouse, France" alltekst="I spent 3 months in 2 different hospitals 
    as a physical therapy intern. During the first internship I worked mostly with outpatients. 
    There the patients had mainly different..." /></li>
    <li><Blogi name="Liis in Barcelona, Spain" alltekst="I was a Vendor Management intern, 
    so I was in contact with freelance translators who wanted to provide services to our company: 
    testing, training, database updating..." /></li>
    <li><Blogi name="Kai in Copenhagen, Denmark" alltekst="I was part of the Statistics 
    and Data Analysis group at my organisation and the analysis I did was part of a continuous 
    monitoring of social inequality in..." /></li>
</ul>
</template>

<script>
import Blogi from '@/components/Blogi.vue'

export default {
  name: 'Praktika',
  components: {
      Blogi
  }
  
}
</script>

<style scoped>
.praktika h1 {
  font-size: 40px;
  text-align: left;
  margin-left: 30px;
  margin-top: 0px;
}

ul {
  list-style-type: none;
  display: flex;
}

</style>