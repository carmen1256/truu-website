<template>
    <nav>
      <hr>
      <router-link to="/">Avaleht</router-link>
      <router-link to="/Praktika">Praktika</router-link>
      <router-link to="/Oppimine">Õppimine</router-link>
      <router-link to="/Tootamine">Töötamine</router-link>
      <router-link to="/Voimalused">Veel võimalusi</router-link>
      <button>
      Jaga kogemust
      </button>
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

nav a {
    font-family: Arial, Helvetica, sans-serif;
    float: center;
    padding: 50px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
}

nav a:hover, .router-link-active {
    font-weight: bold;
    color: #ef9723
}

nav button {
  color: white;
  background-color: #ef9723;
  border: 2px solid black;
  border-radius: 5px;
  padding: 10px 14px;
  text-transform: uppercase;
  font-weight: bold;
}

nav button:hover {
  background-color: white;
  color: black;
  cursor: pointer;
}

</style>