<template>
  <v-app class="hidden">
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
<style scoped>
.hidden{
  height: 100vh;
  background: rgb(11,101,179);
background: linear-gradient(0deg, rgba(11,101,179,1) 0%, rgba(79,255,176,1) 100%);
  overflow: hidden;
}
</style>
