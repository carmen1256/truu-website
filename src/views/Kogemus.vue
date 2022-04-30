<template>

<h1>Kuidas kandideerida?</h1>
<ul>
  <li>
    <h2>Erasmus+</h2>
    <h3>TÜ tingimused:</h3>
    <a href="https://ut.ee/et/erasmus">https://ut.ee/et/erasmus</a>
    <h3>Seiklejate vennaskond:</h3>
    <p>*Pakkumiste lehel on kandideerimisvormid.</p>
    <a href="http://www.seiklejad.org/noorele">http://www.seiklejad.org/noorele</a>
    <h3>Praktika</h3>
    <p>Loo kasutaja ja kandideeri!</p>
    <a href="https://erasmusintern.org/traineeships">https://erasmusintern.org/traineeships</a>
  </li>
  <li>
    <img class="europe" alt="europe" src="../assets/europe.png">
  </li>
</ul>

</template>

<script>

</script>

<style scoped>
h1 {
  color: white;
  font-size: 40px;
  margin-bottom: 10px;
  margin-left: 20px;
}

h2 {
  color: white;
  font-size: 30px;
}

p, a {
  color: white;
}

a:hover {
  color:aqua;
  text-decoration: none;
}

li {
  margin-right: 300px;
}

h3 {
  color: white;
  font-size: 20px;
}

@media screen and (min-width: 400px) {
  ul {
  list-style: none;
}

.europe {
  margin-top: 40px;
  width: 400px;
  height: auto;
}

}

@media screen and (min-width: 600px) {
  ul {
  list-style: none;
}

.europe {
  width: 500px;
  height: auto;
}
}

@media screen and (min-width: 900px) {
  ul {
  display: flex;
  list-style: none;
}
.europe {
  width: 600px;
  height: auto;
  margin-top: 0px;
}
}

</style>