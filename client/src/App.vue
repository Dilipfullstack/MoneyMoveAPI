<template>
  <v-app>
    <v-main>
      <NavBar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    NavBar
  },
  data: () => ({
    //
  })
}
</script>
