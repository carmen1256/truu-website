<template>
  <div class="praktika">
    <h1>Praktika blogi</h1>
  </div>
  <ul>
    <li><img class="blogi1" alt="blogi1" src= "../assets/toulouse.jpg">
    <Blogi name="Rasmus in Toulouse, France" alltekst="I spent 3 months in 2 different hospitals 
    as a physical therapy intern. During the first internship I worked mostly with outpatients. 
    There the patients had mainly different..."  /></li>
    <li><img class="blogi1" alt="blogi1" src= "../assets/barca.jpg">
    <Blogi name="Liis in Barcelona, Spain" alltekst="I was a Vendor Management intern, 
    so I was in contact with freelance translators who wanted to provide services to our company: 
    testing, training, database updating..." /></li>
    <li><img class="blogi1" alt="blogi1" src= "../assets/copen.jpg">
    <Blogi name="Kai in Copenhagen, Denmark" alltekst="I was part of the Statistics 
    and Data Analysis group at my organisation and the analysis I did was part of a continuous 
    monitoring of social inequality in..." /></li>
</ul>
<ul>
  <li><img class="blogi1" alt="blogi1" src= "../assets/pisa.jpg">
    <Blogi name="Maryam in Pisa, Italy" alltekst="Master Faculty of Social 
    Sciences University of Pisa Pisa, Italy Summer I applied for a traineeship through 
    the Erasmus + program on UT website. I spent 3 months..." /></li>
    <li><img class="blogi1" alt="blogi1" src= "../assets/copen.jpg">
    <Blogi name="Kai in Copenhagen, Denmark" alltekst="I was part of the Statistics 
    and Data Analysis group at my organisation and the analysis I did was part of a continuous 
    monitoring of social inequality in..." /></li>
    <li><img class="blogi1" alt="blogi1" src= "../assets/copen.jpg">
    <Blogi name="Kai in Copenhagen, Denmark" alltekst="I was part of the Statistics 
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
  margin-left: 60px;
  margin-top: 30px;
  color: white;
}

ul {
  list-style-type: none;
}

li {
  margin: 20px;
}

img {
  width: 350px;
  height: auto;
}

@media screen and (min-width: 400px) {
  ul {
    display: column;
  }
}

@media screen and (min-width: 800px) {
  ul {
    display: flex;
  }
}


</style>