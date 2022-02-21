<template>
  <main>
    <h2 class="logo">Encurter URL</h2>
    <b-form-group
      id="input-group-1"
      label-for="input-1"
      description="Enter URL"
    >
      <b-form-input v-model="origUrl" type="text" name="origUrl" />
    </b-form-group>
    <b-button v-on:click="onClickGenerate">Generate URL</b-button>
    <b-button v-if="shortUrl" variant="link" :href="shortUrl" target="_blank" >{{shortUrl}}</b-button>
    <p v-else>{{invalidUrl}}</p>
  </main>
</template>

<script>
import { generateApi } from '@/services/api'

export default {
  name: 'MainHome',
  data(){
    return {
      origUrl: '',
      shortUrl: '',
      invalidUrl: '',
    }
  },
  props: {
    user: String,
  },
  methods:{
    onClickGenerate: function() {
      const { origUrl, user } = this;
      generateApi({ origUrl, user })
      .then((res) => {
        if (res.status === 200) {
          this.shortUrl = res.data;
        } else {
          this.invalidUrl = res;
        }
      })
      .catch((error) => {console.log(error)});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
  border: 1px solid black;
  border-radius: 15px;
  padding: 50px;
  margin: 50px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>