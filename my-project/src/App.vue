<template>
  <div id="app">
    <Header/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    HelloWorld, Header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
</style>
