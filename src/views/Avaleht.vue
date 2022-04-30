<template>
<div class="img">
    <!--Avalehel pilt ja tekst pildil, teksti sees on link 'SIIT'-->
    <img class="valencia" alt="valencia" src="../assets/valencia.jpg">
    <div class="tekst"><h1>REISI, ÕPI, TÖÖTA!</h1>
    Tahad minna välismaale õppima,<br> töötama või praktikale, 
      <br>kuid ei tea, millest alustada?<br>
      Loe teiste kogemusi <a href="../Praktika">SIIT!</a>
    </div>
</div>

<h2>Pildid</h2>

<div class="pildid">
  <div class="pilt">
  <img class="pilt" alt="pilt" src="../assets/c1.jpg">
  </div>
  <div class="pilt">
  <img class="pilt" alt="pilt" src="../assets/c2.jpg">
  </div>
  <div class="pilt">
  <img class="pilt" alt="pilt" src="../assets/c3.jpg">
  </div>
</div>

</template>

<!--Päise importimine-->
<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Avaleht',
  components: {
    Header
  }
}

</script>

<!--Pildi ja teksti kujundus erineva ekraani suuruse korral-->
<style scoped>
.valencia {
  width: 100%;
  height: 600px;
  object-fit: cover;
  opacity: 30%;
}
.img {
  background-color: black;
  position: relative;
  text-align: center;
}

.tekst a {
  color: white;
}

.tekst a:hover {
  color: #66fcf1;
}

h1 {
  font-size: 60px;
  color: #66fcf1;
}

h2 {
  font-size: 40px;
  color: white;
  margin-left: 20px;
}

.pilt {
  width: 400px;
  height: auto;
  padding-left: 5px;
  padding-right: 8px;
}

.pilt:hover {
  filter: saturate(1.15)
  brightness(1.1)
}


@media screen and (min-width: 400px) {
  h1 {
  font-size: 40px;
  color: #66fcf1;
}

.tekst {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 30px;
}

}

@media screen and (min-width: 600px) {

  
}

@media screen and (min-width: 900px) {
  .tekst {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
}

.pildid {
  display: flex;
}
}

</style>