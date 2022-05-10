<template>
<body>
<h1>Kuidas kandideerida?</h1>
<ul>
  <li>
    <div>
    <h3>TÜ tingimused:</h3>
    <a href="https://ut.ee/et/erasmus">https://ut.ee/et/erasmus</a>
    </div>
    <div>
    <h3>Seiklejate vennaskond:</h3>
    <p>*Pakkumiste lehel on kandideerimisvormid.</p>
    <a href="http://www.seiklejad.org/noorele">http://www.seiklejad.org/noorele</a>
    </div>
    <div>
    <h3>Erasmus+ praktika</h3>
    <p>Loo kasutaja ja kandideeri!</p>
    <a href="https://erasmusintern.org/traineeships">https://erasmusintern.org/traineeships</a>
    </div>
  </li>
  <li>
    <img class="europe" alt="reisiblogi" src="../assets/europe.png">
  </li>
</ul>

</body>
</template>

<script>

</script>

<style scoped>
body {
  font-family: "OpenSans";
  margin: 40px;
}

h1 {
  color: white;
  font-size: 30px;
  margin-bottom: 10px;
  margin-left: 20px;
  text-shadow: 3px 3px 5px black;
}

p, a {
  color: white;
  margin: 20px;
}

a:hover {
  color:aqua;
  text-decoration: none;
}

li {
  margin-right: 270px;
}

h3 {
  color: white;
  font-size: 20px;
  margin: 20px;
}

@media screen and (min-width: 200px) {
  ul {
  list-style: none;
}

.europe {
  margin-top: 40px;
  width: 300px;
  height: auto;
}

div {
  border: 5px solid #E0E0E0;
  background-color: #606060;
  border-radius: 5px;
  margin-top: 20px;
  width: 350px;
  height: 150px;
}

}

@media screen and (min-width: 600px) {
  ul {
  list-style: none;
}

.europe {
  width: 400px;
  height: auto;
}

div {
  border: 5px solid #E0E0E0;
  background-color: #606060;
  margin-top: 20px;
  width: 100%;
  height: 150px;
}
}

@media screen and (min-width: 900px) {
  ul {
  display: flex;
  list-style: none;
}

.europe {
  width: 550px;
  height: auto;
  margin-top: 80px;
}

div {
  border: 5px solid #E0E0E0;
  background-color: #606060;
  margin-top: 20px;
  width: 160%;
  height: 160px;
}
}

</style>