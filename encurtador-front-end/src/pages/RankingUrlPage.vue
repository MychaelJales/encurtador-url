<template>
  <main>
    <h3>Ranking of Most Visited URLs</h3>
    <div class="content">
      <table class="rTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ranking</th>
            <th>URL Original</th>
            <th>Short URL</th>
            <th>Number Access</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(url, index) in urls" :key="url.urlId">
            <td>{{ url.urlId }}</td>
            <td>{{index + 1 }}°</td>
            <td>
              <b-button variant="link" :href="url.origUrl" target="_blank" >{{url.origUrl}}</b-button>
            </td>
            <td>
              <b-button variant="link" :href="url.shortUrl" target="_blank" >{{url.shortUrl}}</b-button>
            </td>
            <td>{{ url.clicks }}</td>
            <td>{{ url.date }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <b-button v-on:click="onClickgoHome" >Back to Home</b-button>
  </main>
</template>

<script>
import { getAllUrlsApi } from '@/services/api';
import router from '@/routes/router';

export default {
  name: 'RankingUrlPage',
  components: {
    
  },
  data() {
    return{
      urls: [],
    }
  },
  created() {
    getAllUrlsApi()
    .then((res) => {
      const { data } = res;
    const sortedUrls = data.sort((a, b) => {
      return b.clicks - a.clicks;
    });
      this.urls = sortedUrls.slice(0, 100)
    })
  },
  methods: {
    onClickgoHome: function() {
      router.push('/');
    },
  },
}
</script>

<style scoped>


</style>