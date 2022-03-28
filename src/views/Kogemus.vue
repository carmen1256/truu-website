<template>
  <div class="kogemus">
    <h1>Jaga oma kogemust</h1>
  </div>
  <Form />
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'Kogemus',
  components: {
      Form
  }
  
}
</script>

<style scoped>
.oppimine h1 {
  font-size: 40px;
  text-align: left;
  margin-left: 30px;
  margin-top: 0px;
}
</style>