<template>
  <header>
    <img src="../assets/codeforces_logo.png">
    <div class="header-title">Codeforces Status Viewer</div>
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
  img {
    width: 40px;
    height: 40px;
    float: left;
    display: inline-block;
  }
  .header-title {
    float: left;
    padding-left: 10px;
    padding-top: 7px;
    font-size: 25px;
  }
</style>
