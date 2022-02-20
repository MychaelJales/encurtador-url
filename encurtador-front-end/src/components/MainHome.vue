<template>
  <main>
    <input v-model="origUrl" type="text" name="origUrl" />
    <button v-on:click="onClickGenerate">Generate URL</button>
    <a v-if="shortUrl" :href="shortUrl" target="_blank" >{{shortUrl}}</a>
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

</style>