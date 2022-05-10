<template>
<body>
<div class="img">
    <!--Avalehel pilt ja tekst pildil, teksti sees on link 'SIIT'-->
    <img class="valencia" alt="reisiblogi" src="../assets/valencia.jpg">
    <div class="tekst"><h1>REISI, ÕPI, TÖÖTA!</h1>
    Tahad minna välismaale õppima,<br> töötama või praktikale, 
      <br>kuid ei tea, millest alustada?<br>
      Loe teiste kogemusi <a href="../Praktika">SIIT!</a>
    </div>
</div>


<div class="pildid">
  <div class="pilt">
  <img class="pilt" alt="reisiblogi" src="../assets/c1.jpg">
  </div>
  <div class="pilt">
  <img class="pilt" alt="reisiblogi" src="../assets/c2.jpg">
  </div>
  <div class="pilt">
  <img class="pilt" alt="reisiblogi" src="../assets/c3.jpg">
  </div>
</div>
<hr>
<Form />
</body>
</template>

<!--Päise importimine-->
<script>
import Header from '@/components/Header.vue'
import Form from '@/components/Form.vue'

export default {
  name: 'Avaleht',
  components: {
    Header, Form
  }
}

</script>

<!--Pildi ja teksti kujundus erineva ekraani suuruse korral-->
<style scoped>
body {
  font-family: "OpenSans";
}

.valencia {
  opacity: 0.3;
  width: 100%;
  height: 600px;
  object-fit: cover;
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

.pilt {
  width: 400px;
  height: auto;
  padding: 5px;
  display: inline-block;
  padding-bottom: 5px;
  padding-top: 20px;
}

.pilt:hover {
  filter: saturate(1.15) brightness(1.1);
}

hr {
  margin-top: 30px;
}


@media screen and (min-width: 200px) {
  h1 {
  font-size: 30px;
  color: #66fcf1;
}

.tekst {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
}

.pilt {
  width: 350px;
  height: auto;
  padding: 5px;
  display: inline-block;
  padding-bottom: 5px;
  padding-top: 20px;
}

}

@media screen and (min-width: 600px) {
.pilt {
  width: 400px;
  height: auto;
  padding: 5px;
  display: inline-block;
  padding-bottom: 5px;
  padding-top: 20px;
}

.tekst {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
}
  
}

@media screen and (min-width: 900px) {
.tekst {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 35px;
}

.pildid {
  display: flex;
  justify-content: space-evenly;
}

 h1 {
  font-size: 50px;
  color: #66fcf1;
}

}

</style>