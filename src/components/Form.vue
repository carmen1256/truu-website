<template>
<body>
  <div>
    <h3>Jaga oma kogemust</h3>
    <label for="title">Pealkiri:</label><br>
    <input type="text" id="title" name="title" v-model="title"><br>
    <label for="ptext">Postituse tekst:</label><br>
    <textarea type="text" id="ptext" name="ptext" v-model="ptext"></textarea><br><br>
    <button type="submit" id="submit" v-on:click="click_post();click_get();reset_input()">SISESTA</button>
    <ul>
      <li v-for="postitus in postitused" v-bind:key="postitus"> 
          <h2>{{postitus.posttitle}}</h2> {{postitus.posttext}}</li>
    </ul>
  </div>
</body>
</template>


<script>

export default {
  created () {
    this.click_get()
  },
  data() {
    return {
      title: '',
      ptext: '',
      postitused: []
    }
  },
  methods: {
    click_post() {
      fetch('https://truu-website-default-rtdb.europe-west1.firebasedatabase.app/form.json', {
        method: 'POST',
        body: JSON.stringify({
          posttitle: this.title,
          posttext: this.ptext
        })
      });
    },
    click_get() {
      fetch('https://truu-website-default-rtdb.europe-west1.firebasedatabase.app/form.json').then((response) => {
        if (response.ok){
          return response.json();
        }
      })
          .then((data) => {
            const results = [];
            for (const id in data) {
              results.push({
                id: id,
                posttitle: data[id]['posttitle'],
                posttext: data[id]['posttext']
              });

            }
            this.postitused = results;
          });
    },
    reset_input() {
        this.title = '';
        this.ptext = '';
    }
  }
};

</script>

<style scoped>
body {
  font-family: "OpenSans";
}

div {
  color: white;
  padding: 10px 10px;
  margin-left: 30px;
}

h3 {
    font-size: 30px;
    text-shadow: 2px 2px 5px black;
}

input {
    margin-bottom: 30px;
    font-family: "OpenSans";
}

#title {
    width: 50%;
    height: 20px;
}

#ptext {
    width: 50%;
    height: 200px;
}

li {
    list-style: none;
    margin-bottom: 70px;
    border: 5px solid #E0E0E0;
    background-color: #606060;
    border-radius: 5px;
}

ul {
  display: block;
}

#submit {
    margin-right: 30px;
    width: 100px;
    height: 40px;
    margin-bottom: 40px;
    box-shadow: 2px 2px 5px black;
}

button:hover {
    background-color: #66fcf1;
    cursor: pointer;
    border: 1px solid grey;
    border-radius: 2px;
}

textarea {
  font-family: "OpenSans";
}

@media screen and (min-width: 200px) {
#title {
    width: 80%;
    height: 20px;
}

#ptext {
    width: 80%;
    height: 200px;
}
#submit {
    margin-right: 30px;
    width: 70px;
    height: 30px;
    margin-bottom: 40px;
}
}

@media screen and (min-width: 600px) {
#title {
    width: 80%;
    height: 20px;
}

#ptext {
    width: 80%;
    height: 200px;
}
}

@media screen and (min-width: 900px) {
#title {
    width: 50%;
    height: 20px;
}

#ptext {
    width: 50%;
    height: 200px;
}
}
</style>