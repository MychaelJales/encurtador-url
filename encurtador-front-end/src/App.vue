<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3px;
  background-color: ghostwhite;
  min-height: 98vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  display:flex;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  justify-content: center;
}

.rTable {
  text-align: center;
  width: 96vw;
}
.rTable thead {
  background: black;
  font-weight: bold;
  color:#fff;
}

.rTable tbody tr:nth-child(2n) {
  background: #ccc;
}

.rTable th , .rTable td {
  padding: 7px 0;
}

td {
  max-width: 200px;
  overflow: hidden;
}

@media (max-width: 700px) {
  .content{width: 98vw;}

  .rTable thead th{display:flex; flex-direction: column;}
  .rTable tbody td{
    display: flex;
    flex-direction: column;
/*     align-items: center;
    justify-content: center;
    text-align: center; */
    max-width: 90vw;
  }
}
</style>
