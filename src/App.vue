<template>
  <Header />
  <Footer />
</template>

<!--Päis ja jalus on igal vahelehel-->
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'Avaleht',
  components: {
    Header, Footer
  }
}
</script>

<style scoped>

#app {
  background-color: #ffebd4;
  text-align: center;
}

#nav {
  padding: 30px;
}

@font-face {
  font-family: "OpenSans";
  src: local("OpenSans"),
   url(./fonts/OpenSans.ttf) format("truetype");
}

</style>
