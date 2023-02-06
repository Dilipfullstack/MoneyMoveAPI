<template>
    <div>
        <v-container>
            <v-row>
                <v-col cols="12" md="12">
                    <v-card class="mx-auto" width="400">
                        <v-card-title>
                            Login
                        </v-card-title>
                        <v-card-text>
                            <v-form>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-text-field v-model="userData.email" label="E-mail"></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12">
                                            <v-text-field v-model="userData.password" label="password"></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>

                            <v-divider></v-divider>

<!-- @TODO LIST :-- v-row  and need 2 columns so we can display four buttons -->
                            <v-container class="text-center">
                                <v-btn class="bg-success " >
                                <i class="fa-brands fa-google "></i>
                            </v-btn>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data: function () {
    return {
      userData: {
        email: '',
        password: ''

      }
    }
  }
}
</script>
