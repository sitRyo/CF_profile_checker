<template>
  <ul class="user-information">
    <li>country: {{country}}</li>
    <li>rate: {{rate}}</li>
    <ll>maxRate: {{maxRate}}</ll>
  </ul>
</template>

<script>
export default {
  name: 'showUserInformation',
  props: ['country', 'rate', 'maxRate']
}
</script>

<style scoped>

</style>
