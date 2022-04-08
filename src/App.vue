<template>
  <Header />
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

#app {
  background-color: #ffebd4;
  text-align: center;
}

#nav {
  padding: 30px;
}
</style>
