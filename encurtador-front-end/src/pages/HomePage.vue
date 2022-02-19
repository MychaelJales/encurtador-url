<template>
  <p>Bem vindo, {{user}}!</p>
  <button v-on:click="onClickLogin">Login</button>
  <button v-on:click="onClickRegister">Register</button>
</template>

<script>
import router from '@/routes/router';
import { loggedApi } from '../services/api'

export default {
  name: 'HomePage',
  components: {
  },
  data(){
    return {
      user: '',
      userLogged: false,
    }
  },
  methods:{
    onClickLogin: function() {
        router.push('/login');
    },
    onClickRegister: function() {
        router.push('/register');
    },
  },
  created() {
    const Token = localStorage.getItem('Token');
    loggedApi(JSON.parse(Token)).then((res) => {
      if (res.data) {
        this.user = res.data;
        this.userLogged = true;
      } else {
        this.user = res;
        this.userLogged = false;
      }
    });
  },
  mounted() {

  }
}
</script>

<style>

</style>