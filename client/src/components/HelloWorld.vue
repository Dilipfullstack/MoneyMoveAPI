<template>
 <div class="py-2">
  <v-container>
    <v-row>
      <v-col cols="12">
        <div class="image">
          <img src="logo.png" alt="" srcset="">
          <h2>Mint Money - Your personal expense tracker</h2>
          <h3>This is a Project to demonstrate web development skills! </h3>
        </div>
      </v-col>
    </v-row>
  </v-container>
 </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.image{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top:5rem ;
}
</style>
