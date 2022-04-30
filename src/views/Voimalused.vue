<template>
  <div class="voimalused">
    <h1>Kasulikud lingid</h1>
  </div>
<div class="lingid">
<ul>
    <h2>Projektid</h2>
    <li><a href="http://www.seiklejad.org/noorele">Seiklejate vennaskond</a></li>
    <li><a href="https://www.facebook.com/YouthSenateTallinn/">Youth Senate Tallinn</a></li>
    <div class="p">
    <p>- Erasmus+ projektid kestavad 7-10 päeva</p>
    <p>- Projektidel on erinevad teemad</p>
    <p>- Projektidel osalevad erinevate riikide tiimid (5-10 inimest igas tiimis)</p>
    <p>- Võimalus olla oma riigi grupijuht</p>
    </div>
</ul>

<ul>
    <h2>Töötamine</h2>
    <li><a href="https://www.workaway.info/">Workaway</a></li>
    <div class="p">
    <p>- Workaway kaudu on võimalik leida "host", kelle juures elada ja töötada</p>
    </div>
</ul>

<ul>
    <h2>Lennupiletid</h2>
    <li><a href="https://www.skyscanner.net/">Skyscanner</a></li>
    <li><a href="https://www.momondo.ee/">Momondo</a></li>
    <li><a href="https://www.kiwi.com/">Kiwi</a></li>
    <div class="p">
    <p>- Odavate piletite leidmiseks pane kuupäevad ja otsi asukohta "Everywhere"</p>
    <p>- Odavate piletete leidmiseks vali ajavahemikuks terve kuu või mitu kuud</p>
    </div>
</ul>
</div>
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
.voimalused h1 {
  font-size: 40px;
  text-align: left;
  margin-left: 60px;
  margin-top: 30px;
  color: white;
}

h2 {
  font-size: 25px;
  color: white;
  text-decoration: underline;
  margin-top: 40px;
  margin-bottom: 20px;
  margin-left: 20px;
}

.p {
  color: white;
  margin: 5px;
  margin-left: 30px;
  margin-top: 20px;
}


li {
  color: white;
  margin: 20px;
  font-size: 20px;
  margin-left: 10px;
  list-style: none;
  display: inline;
}

a {
  color: white;
  margin: 20px;
  text-decoration: none;
  text-transform: uppercase;
}

a:hover {
  color: #66fcf1;
}

.sv {
  width: 150px;
  height: auto;
}

@media screen and (min-width: 400px) {
li {
  display: inline-block;
}

}
</style>