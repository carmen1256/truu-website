<template>
  <div class="praktika">
    <h1>Praktika</h1>
  </div>
  <ul>
    <li><Blogi name="Siin on esimene postitus" alltekst="mingitekst 111" /></li>
    <li><Blogi name="Siin on teine postitus" alltekst="mingitekst 222" /></li>
    <li><Blogi name="Siin on kolmas postitus" alltekst="mingitekst 333" /></li>
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

li {
    list-style-type: none;
    display: inline-block;
    margin-left: 30px;
}
</style>