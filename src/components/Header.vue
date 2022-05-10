<template>
    <nav>
      <hr>
      <router-link to="/">Avaleht</router-link>
      <router-link to="/Praktika">Praktika</router-link>
      <router-link to="/Oppimine">Õppimine</router-link>
      <router-link to="/Voimalused">Veel võimalusi</router-link>
      <router-link to="/Kogemus">Kandideerimine</router-link>
      <hr>
    </nav>
    <router-view/>
</template>

<script>
export default {
    name: 'Header', 
}
</script>

<style scoped>

@media screen and (min-width: 400px) {
  router-link {
    height:20px;
  }
}

nav a {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 5px 10px;
    height: 20px;
    text-shadow: 2px 2px 5px black;
    letter-spacing: 2px;
}

nav a:hover, .router-link-active {
    font-weight: bold;
    color: #66fcf1;
    text-decoration: underline;
    text-decoration-thickness: 1px;
    text-underline-offset: 0.3em;
}


hr {
  border: 1px black;
}

@media screen and (min-width: 900px) {
  nav a {
    display: inline;
    padding-right: 30px;
  }
}


</style>