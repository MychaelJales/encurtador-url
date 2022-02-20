<template>
  <div>
    <input v-model="user" type="text" name="user" />
    <input v-model="password" type="password" name="password" />
    <button v-on:click="onClickBtn">{{type}}</button>
    <p>{{mensageLogin}}</p>
  </div>
</template>

<script>
import { loginApi, registerApi } from '../services/api';
import { saveToken } from '../helpers/actionsLocalStorage'
import router from '@/routes/router';
export default {
  name: 'FormLoginRegister',
  data(){
    return {
      user: '',
      password: '',
      mensageLogin: '',
    }
  },
  props: {
    type: String,
  },
  methods:{
    onCliclLogin: async function() {
      const { user, password } = this;
      const login = await loginApi({ user, password });
      if (login.status === 200) {
        saveToken(login.data);
        router.push('/');
      } else {
        this.mensageLogin = login;
      }
    },
    onCliclRegister: async function() {
      const { user, password } = this;
      const register = await registerApi({ user, password });
      if (register.status === 200) {
        saveToken(register.data);
        router.push('/');
      } else {
        this.mensageLogin = register;
      }
    },
    onClickBtn: async function() {
      if (this.type === 'Login') {
        this.onCliclLogin();
      }
      if (this.type === 'Register') {
        this.onCliclRegister();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
