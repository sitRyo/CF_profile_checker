<template>
  <div>
    <div class="user-color-information">
      <template v-if="offset < 9">
        <div class="rate-color" :style="{ color: titleColor }">{{title}}</div>
        <div class="user-name">
          <div :style="{ color: titleColor }">{{name}}</div>
        </div>
      </template>
      <template v-else>
        <div class="rate-color" :style="{ color: titleColor }">{{title}}</div>
        <div class="user-name" style="color: black;">{{nameFirstLetter}}<span style="color: red;">{{nameRest}}</span></div>
      </template>
    </div>
    <ul class="user-information">
      <li>country: {{country}}</li>
      <li>rate: {{rate}} (maxRate: {{maxRate}})</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'showUserInformation',
  props: ['name', 'country', 'rate', 'maxRate'],
  data () {
    return {
      title: '',
      titleColor: '',
      offset: 0,
      titleCandidate: ['Newbie', 'Pupil', 'Specialist', 'Expert', 'Candidate Master', 'Master', 'International Master', 'Grandmaster', 'International GradMaster', 'Legendary Grandmaster'],
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

      // レート区分を決定
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

      this.nameFirstLetter = this.name.substr(0, 1)
      this.nameRest = this.name.substr(1, len - 1)
    }
  }
}
</script>

<style scoped>
  .rate-color {
    font-size: 15px;
    font-weight: 500;
  }

  .user-name {
    font-size: 25px;
    font-weight: 700;
  }

  .user-color-information {
    border-bottom: solid 1px #b8b8b8;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
</style>
