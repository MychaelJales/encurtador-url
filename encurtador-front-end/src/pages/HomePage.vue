<template>
  <div class="container-home">
    <HeaderHome :user="user" :notLogged="notLogged" :userLogged="userLogged" />
    <MainHome :user="user" />
    <FooterHome />
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome';
import FooterHome from '@/components/FooterHome'
import MainHome from '@/components/MainHome';
import router from '@/routes/router';
import { loggedApi } from '../services/api';
import { saveUser } from '@/helpers/actionsLocalStorage';

export default {
  name: 'HomePage',
  components: {
    HeaderHome,
    MainHome,
    FooterHome,
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
        saveUser(res.data);
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
.container-home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

}
</style>