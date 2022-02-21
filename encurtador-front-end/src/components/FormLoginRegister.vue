<template>
  <b-form class="form-container">
    <h2 class="logo">Encurter URL</h2>
    <h4>{{type}}</h4>
    <b-form-group
      id="input-group-1"
      label-for="input-1"
      description="Enter you user name"
    >
      <b-form-input
        v-model="user"
        type="text"
        name="user"
        id="input-1"
      />
    </b-form-group>
    <b-form-group
      id="input-group-2"
      label-for="input-1"
      description="Enter you password"
    >
      <b-form-input
        v-model="password"
        type="password"
        name="password"
        id="input-2"
        />
    </b-form-group>
    <b-button variant="primary" v-on:click="onClickBtn">{{type}}</b-button>
    <p v-if="type === 'Login'">
      Not registered?
      <b-button variant="link" href="/register" >sign up</b-button>
    </p>
    <p>{{mensageLogin}}</p>
  </b-form>
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
.form-container {
  display: flex;
  flex-direction: column;
  align-items: initial;
  justify-content: initial;
  border: 1px solid gray;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 25px;
}

.logo {
  margin-bottom: 20px;
}

h4 {
  margin-bottom: 20px;
}

</style>
