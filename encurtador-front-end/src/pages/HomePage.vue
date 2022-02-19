<template>
  <p>{{userLogged}}</p>
</template>

<script>
import { loggedApi } from '../services/api'

export default {
  name: 'HomePage',
  components: {
  },
  data(){
    return {
      userLogged: '',
    }
  },
  created() {
    const Token = localStorage.getItem('Token');
    loggedApi(JSON.parse(Token)).then((res) => {
      if (res.data) {
        this.userLogged = res.data;
      } else {
        this.userLogged = res;
      }
    });
  },
  mounted() {

  }
}
</script>

<style>

</style>