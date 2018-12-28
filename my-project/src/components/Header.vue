<template>
  <header>
    <h1>Codeforces Status Viewer</h1>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  header {
    width: 100%;
    height: 45px;
    text-align: left;
    border-bottom: solid 2px #b2b2b2;
    margin-bottom: 20px;
  }
  h1 {
    display: inline;
    background-image: url("../assets/codeforces_logo.png");
    background-size: 40px 40px;
    background-repeat: no-repeat;
    padding: 0px 0px 0px 50px;
    margin-top: 5px;
  }
</style>
