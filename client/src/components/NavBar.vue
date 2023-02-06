<template>
    <div>
      <v-toolbar density="compact">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Money-Handler</v-toolbar-title>

      <v-spacer></v-spacer>

      <router-link :to="{name:'Login'}">Login</router-link>

    </v-toolbar>
    </div>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
