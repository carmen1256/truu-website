<template>
  <div class="kogemus">
    <h1>Jaga oma kogemust</h1>
    <Form />
  </div>
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
h1 {
  color: white;
  font-size: 40px;
  margin-bottom: 20px;
}

.kogemus {
  text-align: center;
}

</style>