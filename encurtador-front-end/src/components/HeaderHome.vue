<template>
  <header class="nav-bar">
    <h4 v-if="userLogged">Bem vindo, {{user}}!</h4>
    <h4 v-else>{{notLogged}}</h4>
    <b-button v-on:click="onClickMyUrls">My URLs</b-button>
    <b-button v-on:click="onClickRanking">Ranking of Most Visited URLs</b-button>
    <span v-if="!userLogged">
      <b-button v-on:click="onClickLogin">Login</b-button>
      <b-button v-on:click="onClickRegister">Register</b-button>
    </span>
    <span v-else>
      <b-button v-on:click="onClickSignOut">Sign out</b-button>
    </span>
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
    onClickRanking: function() {
      router.push('/rankingurl')
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  width: 98vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 10px;
  background-color: #6c747c;
}
h4 {
  color: aliceblue;
}
</style>