<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" name="username" v-model="username" @keyup.enter="getUser">
    <button @click="getUser">Search</button>

    <div v-if="userData !== null" class="profile">
      <img v-bind:src="userData.avatar_url" width="200" height="200"> <br>
      <label>Username : {{ userData.login }}</label> <br>
      <label>Profile name : {{ userData.name }}</label> <br>
      <label>Profile bio : {{ userData.bio }}</label>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      username: ''
    }
  },
  computed: {
    ...mapGetters({
      userData: 'user'
    })
  },
  methods: {
    getUser () {
      this.$store.dispatch('getUser', {
        username: this.username,
        success: () => {
          console.log('Berhasil')
        },
        fail: () => {
          console.log('TIDAKK')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
