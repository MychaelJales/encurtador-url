<template>
  <div class="container">
    <FormLoginRegister type="Login" />
  </div>
</template>

<script>
import FormLoginRegister from '../components/FormLoginRegister.vue'

export default {
  name: 'LoginPage',
  components: {
    FormLoginRegister
  }
}
</script>

<style scoped>
.container {
  width: 300px;
}

</style>