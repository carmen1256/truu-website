<template>
    <nav>
      <hr>
      <router-link to="/">Avaleht</router-link>
      <router-link to="/Praktika">Praktika</router-link>
      <router-link to="/Oppimine">Õppimine</router-link>
      <router-link to="/Voimalused">Veel võimalusi</router-link>
      <router-link to="/Kogemus">Jaga oma kogemust</router-link>
      <hr>
    </nav>
</template>

<script>
export default {
    name: 'Header', 
}
</script>

<style scoped>

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


</style>