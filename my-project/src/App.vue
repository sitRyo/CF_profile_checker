<template>
  <div id="app">
    <Header/>
    <div id="body-wrapper">
      <Checker/>
    </div>
  </div>
</template>

<script>
import Checker from './components/Checker'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Checker, Header
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  #body-wrapper {
    box-shadow: 0px 0px 10px 5px #888888;
    margin-right: auto;
    margin-left: auto;
    max-width: 1200px;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
