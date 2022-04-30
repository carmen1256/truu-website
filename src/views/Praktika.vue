<template>
  <div class="praktika">
    <h1>Praktika blogi</h1>
  </div>
  <ul>
    <li>
    <a href="https://uttraineeshipblog.com/kai-in-copenhagen-denmark/">
    <img class="blogi1" alt="blogi1" src= "../assets/toulouse.jpg">
    <Blogi name="Rasmus in Toulouse, France" alltekst="I spent 3 months in 2 different hospitals 
    as a physical therapy intern. During the first internship I worked mostly with outpatients. 
    There the patients had mainly different..."  /></a>
    </li>
    <li>
    <a href="https://uttraineeshipblog.com/liis-in-barcelona-spain-2/">
    <img class="blogi1" alt="blogi1" src= "../assets/barca.jpg">
    <Blogi name="Liis in Barcelona, Spain" alltekst="I was a Vendor Management intern, 
    so I was in contact with freelance translators who wanted to provide services to our company: 
    testing, training, database updating..." /></a>
    </li>
    <li>
    <a href="https://uttraineeshipblog.com/rasmus-in-toulouse-france/">
    <img class="blogi1" alt="blogi1" src= "../assets/copen.jpg">
    <Blogi name="Kai in Copenhagen, Denmark" alltekst="I was part of the Statistics 
    and Data Analysis group at my organisation and the analysis I did was part of a continuous 
    monitoring of social inequality in..." /></a>
    </li>
</ul>
<ul>
  <li>
    <a href="https://uttraineeshipblog.com/maryam-in-pisa-italy/">
    <img class="blogi1" alt="blogi1" src= "../assets/pisa.jpg">
    <Blogi name="Maryam in Pisa, Italy" alltekst="Master Faculty of Social 
    Sciences University of Pisa Pisa, Italy Summer I applied for a traineeship through 
    the Erasmus + program on UT website. I spent 3 months..." /></a>
    </li>
    <li>
    <a href="https://uttraineeshipblog.com/georgeta-in-plovdiv-bulgaria/">
    <img class="blogi1" alt="blogi1" src= "../assets/bulgaria.jpg">
    <Blogi name="Georgeta in Plovdiv, Bulgaria" alltekst="Bachelor Faculty of Social 
    Sciences, Business Administration UniveStartup Grind Plovdiv, Startup Community 
    Plovdiv, Bulgaria Autumn I directly..." /></a>
    </li>
    <li>
    <a href="https://uttraineeshipblog.com/ayaz-in-riga-latvia/">
    <img class="blogi1" alt="blogi1" src= "../assets/riga.jpg">
    <Blogi name="Ayaz in Riga, Latvia" alltekst="Master Faculty of Social Sciences. 
    Programme of Innovation and Technology Management USummarizeBot, AI Riga, Latvia 
    Summer..." /></a>
    </li>
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
  height: 220px;
  object-fit: fill;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color:#66fcf1;
}

@media screen and (min-width: 900px) {
  ul {
    display: flex;
  }
}

</style>