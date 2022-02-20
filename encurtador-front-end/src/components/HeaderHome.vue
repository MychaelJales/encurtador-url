<template>
  <header>
    <h4 v-if="userLogged">Bem vindo, {{user}}!</h4>
    <h4 v-else>{{notLogged}}</h4>
    <span v-if="!userLogged">
      <button v-on:click="onClickLogin">Login</button>
      <button v-on:click="onClickRegister">Register</button>
    </span>
  </header>
</template>

<script>
import router from '@/routes/router';

export default {
  name: 'HeaderHome',
  data(){
    return {
    }
  },
  props: {
    user: String,
    userLogged: Boolean,
    notLogged: String,

  },
  methods:{
    onClickLogin: function() {
        router.push('/login');
    },
    onClickRegister: function() {
        router.push('/register');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>