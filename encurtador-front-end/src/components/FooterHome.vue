<template>
  <footer>
    <h5>
      Desenvolvido por Mychael Jales
      <a href="https://github.com/MychaelJales" target="_blank">
        <img src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" alt="Ícone do GitHub">
      </a>
      <a href="https://www.linkedin.com/in/mychael-jales-duarte-938a31174/" target="_blank">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="Ícone do LinkedIn">
      </a>
    </h5>
  </footer>
</template>

<script>

export default {
  name: 'FooterHome',
  data(){
    return {
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  height: 40px;
  margin: 10px;
  background-color: whitesmoke;
  border-radius: 5px;
  padding: 5px;
}
footer {
  background-color: grey;
  width: 98vw;
}
h5 {
  color: aliceblue;
  font-size: 15px;
}
</style>