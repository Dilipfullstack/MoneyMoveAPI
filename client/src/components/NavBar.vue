<!-- eslint-disable vue/no-deprecated-slot-attribute -->
<template>
    <div>
      <v-toolbar density="compact" color="#81C784">

      <v-toolbar-title @click="home" class="Title" >Money-Handler</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name:'Login'}" v-if=" !isUserLoggedIn ">Login</v-btn>

      <v-btn v-if=" isUserLoggedIn " @click="transaction">Transaction</v-btn>

      <v-btn v-if=" isUserLoggedIn " @click="reminder">Reminder</v-btn>

      <h3 class="text-decoration-underline font-weight-light userEmail" v-if=" isUserLoggedIn " @click="MainPage">{{ user }}</h3>

      <v-btn v-if=" isUserLoggedIn "  @click="logout">Logout</v-btn>

    </v-toolbar>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      this.$router.push({ name: 'home' })
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    home () {
      this.$router.push({ name: 'home' })
    },
    transaction () {
      this.$router.push({ name: 'Transaction' })
    },
    reminder () {
      this.$router.push({ name: 'Reminder' })
    },
    MainPage () {
      this.$router.push({ name: 'UserInfo' })
    }
  }
}
</script>
<style scoped>
.Title:hover {
cursor: pointer;
}
.userEmail:hover {
  cursor: pointer;
}
</style>
