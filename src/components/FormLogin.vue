<template>
  <div class="hello">
    <input v-model="user" type="text" name="user" />
    <input v-model="password" type="password" name="password" />
    <button v-on:click="onClickLogin">Login</button>
  </div>
</template>

<script>
import loginApi from '../services/api';
export default {
  name: 'FormLogin',
  data(){
    return {
      user: '',
      password: '',
    }
  },
  methods:{
    onClickLogin: function() {
      const { user, password } = this;
      loginApi({ user, password });
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
