<template>
  <main>
    <div class="name-field_wrapper">
      <span class="name-field_codeforces-id">CodeforcesId:</span>
      <input v-model="name" placeholder="name">
      <button @click="getUserData">submit!</button>
    </div>
    <div class="user-information-field_wrapper">
      <UserInformation
        :name="name"
        :country="userInformation.country"
        :rate="userInformation.rating"
        :maxRate="userInformation.maxRating"
      />
    </div>
    <div>
      <canvas id="ChartLine"></canvas>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import UserInformation from './showUserInformation'

export default {
  name: 'Checker',
  data () {
    return {
      // codeforces API
      fixedUrl: 'https://codeforces.com/api/',
      loaded: {
        user: false,
        graph: false
      },
      /* 個人情報系 */
      name: '',

      /* APIから受け取った情報を入れる */
      ratingChangeLog: [],
      userInformation: {
        country: 'nil',
        rating: 'nil',
        maxRating: 'nil'
      }
    }
  },
  methods: {

    // userデータを取得する
    getUserData: function () {
      const infoUrl = 'user.info?handles='
      const ratedUrl = 'user.rating?handle='

      const requestUrl = this.fixedUrl + infoUrl + this.name
      // APIを叩く
      axios
        .get(requestUrl)
        .then(response => {
          if (response.data.status !== 'OK') {
            this.errorHandler()
          } else {
            // データを入れる
            this.userInformation.country = response.data.result[0].country
            this.userInformation.rating = response.data.result[0].rating
            this.userInformation.maxRating = response.data.result[0].maxRating
            this.loaded.user = true
          }
        })
        .catch(function (error) {
          this.errorHandler()
          console.log(error)
        })

      const requestUrl2 = this.fixedUrl + ratedUrl + this.name
      axios
        .get(requestUrl2)
        .then(response => {
          this.ratingChangeLog = response.data.result
          this.loaded.graph = true
          this.generateGraph()
          // console.log(this.ratingChangeLog)
        })
        .catch(function (error) {
          console.log(error)
        })
    },

    // chartJSを使用してグラフを作る
    generateGraph: function () {
      let label = []
      let dateArr = []
      let d = []

      this.ratingChangeLog.forEach((el) => {
        // console.log(el.ratingUpdateTimeSeconds)
        let date = new Date(el.ratingUpdateTimeSeconds)
        label.push(el.contestName)
        dateArr.push(date.getFullYear() + ' ' + date.getMonth() + ' ' + date.getDay())
        d.push(el.newRating)
      })

      // ChartJS部分
      var ctx = document.getElementById('ChartLine').getContext('2d')
      // eslint-disable-next-line
      var chartLine = new Chart(ctx, {
        type: 'line',
        data: {
          labels: label,
          datasets: [{
            label: this.name,
            borderColor: 'rgb(255,0,0)',
            data: d,
            lineTension: 0,
            fill: false
          }]
        },
        options: {
          responsive: true,
          scales: {
            xAxes: [{
              time: {
                unit: 'week'
              }
            }]
          }
        }
      })
    },

    errorHandler: function () {
      alert('Codeforces api error')
    }
  },
  components: { UserInformation }
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }

  .name-field_wrapper {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .name-field_codeforces-id {
    font-weight: bolder;

  }
</style>
