<template>
  <main>
    <h3>My URLs</h3>
    <div class="content" v-if="user">
      <table class="rTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>URL Original</th>
            <th>Short URL</th>
            <th>Number Cliks</th>
            <th>Date</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="url in urls" :key="url.urlId">
            <td>{{ url.urlId }}</td>
            <td>
              <b-button variant="link" :href="url.origUrl" target="_blank" >{{url.origUrl}}</b-button>
            </td>
            <td>
              <b-button variant="link" :href="url.shortUrl" target="_blank" >{{url.shortUrl}}</b-button>
            </td>
            <td>{{ url.clicks }}</td>
            <td>{{ url.date }}</td>
            <td>
              <b-button variant="danger" v-on:click="onClickDeleteUrl(url.urlId)">Delete URL</b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else>User not Logged</p>
    <b-button v-on:click="onClickgoHome" >Back to Home</b-button>
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