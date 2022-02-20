<template>
  <header>
    <h4 v-if="userLogged">Bem vindo, {{user}}!</h4>
    <h4 v-else>{{notLogged}}</h4>
    <span v-if="!userLogged">
      <button v-on:click="onClickLogin">Login</button>
      <button v-on:click="onClickRegister">Register</button>
    </span>
    <span v-else>
      <button v-on:click="onClickSignOut">Sign out</button>
    </span>
    <button v-on:click="onClickMyUrls">My URLs</button>
  </header>
</template>

<script>
import router from '@/routes/router';
import { deleteToken } from '@/helpers/actionsLocalStorage';

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
    onClickSignOut: function() {
      deleteToken();
      router.go();
    },
    onClickMyUrls: function() {
        router.push('/myurls');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>