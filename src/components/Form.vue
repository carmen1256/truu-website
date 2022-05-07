<!-- <input type="text" id="fname" name="fname" v-model="fname"><br> -->
<!-- <input type="submit" value="INSERT" v-on:click="click_post"> -->

<template>
  <div>
    <h3>Jaga oma kogemust</h3>
    <label for="fname">Pealkiri:</label><br>
    <input type="text" id="fname" name="fname" v-model="fname"><br>
    <label for="lname">Postituse tekst:</label><br>
    <input type="text" id="lname" name="lname" v-model="lname"><br><br>
    <input type="submit" value="SISESTA" v-on:click="click_post">
    <input type="submit" value="UUENDA" v-on:click="click_get">
    <ul>
      <li v-for="user in users" v-bind:key="user"> {{user.firstname}} {{user.lastname}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fname: '',
      lname: '',
      users: []
    }
  },
  methods: {
    click_post() {
      fetch('https://truu-website-default-rtdb.europe-west1.firebasedatabase.app/', {
        method: 'POST',
        body: JSON.stringify({
          firstname: this.fname,
          lastname: this.lname
        })
      });
    },
    click_get() {
      fetch('https://truu-website-default-rtdb.europe-west1.firebasedatabase.app/').then((response) => {
        if (response.ok){
          return response.json();
        }
      })
          .then((data) => {
            const results = [];
            for (const id in data) {
              results.push({
                id: id,
                firstname: data[id]['firstname'],
                lastname: data[id]['lastname']
              });

            }
            this.users = results;
          });
    }
  }
};
</script>

<style scoped>
div {
  color: white;
  padding: 10px 10px;
  margin-left: 30px;
}

h3 {
    font-size: 30px;
}

input {
    margin-bottom: 30px;
}

#fname {
    width: 50%;
    height: 20px;
}

#lname {
    width: 50%;
    height: 200px;
}
</style>