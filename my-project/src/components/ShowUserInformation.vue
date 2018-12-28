<template>
  <div>
    <div class="user-color-information">
      <template v-if="offset < 9">
        <p class="rate-color" :style="{ color: titleColor }">{{title}}</p>
        <div class="user-name">
          <h2 :style="{ color: titleColor }">{{name}}</h2>
        </div>
      </template>
      <template v-else>
        <p class="rate-color" :style="{ color: titleColor }">{{title}}</p>
        <h2 class="user-name">
          <span style="color: black">{{nameFirstLetter}}</span>
          <span style="color: red">{{nameRest}}</span>
        </h2>
      </template>
    </div>
    <ul class="user-information">
      <li>country: {{country}}</li>
      <li>rate: {{rate}}</li>
      <ll>maxRate: {{maxRate}}</ll>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'showUserInformation',
  props: ['name', 'country', 'rate', 'maxRate'],
  data () {
    return {
      title: 'Newbie',
      titleColor: '',
      offset: 0,
      titleCandidate: ['Newbie', 'Pupil', 'Specialist', 'Expert', 'Candidate Master', 'International Master', 'Grandmaster', 'International GradMaster', 'Legendary Grandmaster'],
      colorStyle: ['gray', 'green', '#03A89E', 'blue', '#a0a', '#0a', '#FF8C00', 'red', 'red', 'red'],
      nameFirstLetter: '',
      nameRest: ''
    }
  },
  watch: {
    rate: function () {
      const rate = Number(this.rate)
      let index
      const len = this.name.length

      if (rate < 1200) index = 0
      else if (rate >= 1200 && rate < 1400) index = 1
      else if (rate >= 1400 && rate < 1600) index = 2
      else if (rate >= 1600 && rate < 1900) index = 3
      else if (rate >= 1900 && rate < 2200) index = 4
      else if (rate >= 2200 && rate < 2300) index = 5
      else if (rate >= 2300 && rate < 2399) index = 6
      else if (rate >= 2400 && rate < 2600) index = 7
      else if (rate >= 2600 && rate < 2900) index = 8
      else index = 9

      this.offset = index
      this.titleColor = this.colorStyle[index]
      this.title = this.titleCandidate[index]

      console.log(this.index)

      this.nameFirstLetter = this.name.substr(0, 1)
      this.nameRest = this.name.substr(1, len - 1)
    }
  }
}
</script>

<style scoped>
  
</style>
