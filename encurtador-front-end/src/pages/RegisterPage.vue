<template>
<div class="container">
  <FormLoginRegister type="Register" />
</div>
</template>

<script>
import FormLoginRegister from '../components/FormLoginRegister.vue'

export default {
  name: 'RegisterPage',
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