<template>
	<input v-model="nimi" placeholder="Nimi" /><br><br>
    <input v-model="riik" placeholder="Riik" /><br><br>
    <select v-model="selected">
    <option disabled value="-"></option>
        <option>Praktika</option>
        <option>Õppimine</option>
        <option>Muu</option>
    </select><br><br>
    <textarea v-model="kogemus" placeholder="Kirjuta oma kogemusest"></textarea>
</template>

<script>
export default {
    name: "Form"
  }

</script>

<style scoped>
    textarea {
        width: 500px;
        height: 250px;
    }

    select {
        width: 170px;
    }
</style>