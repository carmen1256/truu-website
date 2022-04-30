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
  nav a{
    display: block;
    padding: 5px 10px;
  }
}

nav a {
    font-family: Arial, Helvetica, sans-serif;
    float: center;
    padding: 70px;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
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
  }
}


</style>