<template>
  <div id="app">
    <Header/>
    <Checker/>
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
</style>
