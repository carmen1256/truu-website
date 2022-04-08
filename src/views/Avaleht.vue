<template>
<div class="img">
    <img class="valencia" alt="valencia" src="../assets/valencia.jpg">
    <div class="tekst"><h1>MINGI PEALKIRI</h1>
    Tahad minna välismaale õppima,<br> töötama või praktikale, 
      <br>kuid ei tea, millest alustada?<br>
      Loe teiste kogemusi <a href="../Praktika">SIIT!</a>
    </div>
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
  opacity: 30%;
}
.img {
  background-color: black;
  position: relative;
  text-align: center;
}
.tekst {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
}

.tekst a {
  color: white;
}

.tekst a:hover {
  color: #66fcf1;
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

h1 {
  font-size: 60px;
  color: #66fcf1;
}

</style>