<template>
  <div>
    <HeaderHome :user="user" :notLogged="notLogged" :userLogged="userLogged" />
    <MainHome />
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome'
import MainHome from '@/components/MainHome'
import router from '@/routes/router';
import { loggedApi } from '../services/api'

export default {
  name: 'HomePage',
  components: {
    HeaderHome,
    MainHome,
  },
  data(){
    return {
      user: '',
      notLogged: '',
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
        this.notLogged = res;
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