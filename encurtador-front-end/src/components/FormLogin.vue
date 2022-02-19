<template>
  <div class="hello">
    <input v-model="user" type="text" name="user" />
    <input v-model="password" type="password" name="password" />
    <button v-on:click="onClickLogin">Login</button>
    <p>{{mensageLogin}}</p>
  </div>
</template>

<script>
import { loginApi } from '../services/api';
import { saveToken } from '../helpers/actionsLocalStorage'
import router from '@/routes/router';
export default {
  name: 'FormLogin',
  data(){
    return {
      user: '',
      password: '',
      mensageLogin: '',
    }
  },
  methods:{
    onClickLogin: async function() {
      const { user, password } = this;
      const login = await loginApi({ user, password });
      if (login.status === 200) {
        saveToken(login.data);
        router.push('/');
      } else {
        this.mensageLogin = login;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
