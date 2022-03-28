<template>
<div class="img">
    <img class="valencia" alt="valencia" src="../assets/valencia.jpg">
    <div class="tekst">Tahad minna välismaale õppima,<br> töötama või praktikale, 
      <br>kuid ei tea, millest alustada?<br>
      Loe teiste kogemusi <a href="#">SIIT!</a>
    </div>
</div>
<hr>
  <div class="pilditekst">
    <h1>Pildid</h1>
  </div>
<hr>

<div class="madrid">
    <img class="pildid" alt="c1" src="../assets/c1.jpg">
    <img class="pildid" alt="c2" src="../assets/c2.jpg">
</div>

</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Avaleht',
  components: {
    Header
  }
}
</script>

<style scoped>
.valencia {
  width: 100%;
  height: 600px;
  object-fit: cover;
  opacity: 40%;
}
.img {
  background-color: black;
  position: relative;
  text-align: center;
}
.tekst {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffebd4;
  font-size: 40px;
}

.tekst a {
  color: #ffebd4;
}

.tekst a:hover {
  color: #ef9273;
}

.pilditekst h1 {
  font-size: 40px;
  text-align: center;
  margin-left: 30px;
  margin-top: 0px;
}

.pildid {
  width: 500px;
  padding: 30px;
}

</style>