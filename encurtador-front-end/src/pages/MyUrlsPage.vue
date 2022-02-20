<template>
  <main>
    <h3>My URLs</h3>
    <div v-if="user">
      <table>
        <tr>
          <th>ID</th>
          <th>URL Original</th>
          <th>Short URL</th>
          <th>Number Cliks</th>
          <th>Date</th>
          <th>Delete</th>
        </tr>
        <tr v-for="url in urls" :key="url.urlId">
          <td>{{ url.urlId }}</td>
          <td>{{ url.origUrl }}</td>
          <td>{{ url.shortUrl }}</td>
          <td>{{ url.clicks }}</td>
          <td>{{ url.date }}</td>
          <td>
            <button v-on:click="onClickDeleteUrl(url.urlId)">Delete URL</button>
          </td>
        </tr>
      </table>
    </div>
    <p v-else>User not Logged</p>
    <button v-on:click="onClickgoHome" >Back to Home</button>
  </main>
</template>

<script>
import { delMyUrlApi, getMyUrlsApi } from '@/services/api';
import router from '@/routes/router';

export default {
  name: 'MyUrlsPage',
  components: {
    
  },
  data() {
    return{
      user: '',
      urls: [],
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getMyUrls();
  },
  methods: {
    getMyUrls: function() {
      getMyUrlsApi(this.user)
      .then((res) => { this.urls = res.data });
    },
    onClickgoHome: function() {
      router.push('/');
    },
    onClickDeleteUrl: async function(e) {
      console.log(e);
      await delMyUrlApi(e);
      this.getMyUrls();
    },
  },
}
</script>

<style>

</style>