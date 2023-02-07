<template>
    <div>
      <v-toolbar density="compact" color="#81C784">

      <v-toolbar-title @click="home" >Money-Handler</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :to="{name:'Login'}" v-if=" !isUserLoggedIn ">Login</v-btn>

      <v-btn v-if=" isUserLoggedIn " @click="logout">Logout</v-btn>

      <h3 class="text-decoration-underline font-weight-light" v-if=" isUserLoggedIn ">{{ user }}</h3>

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
  methods: {
    logout () {
      this.$router.push({ name: 'home' })
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    home () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
