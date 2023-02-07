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
                            <v-form ref="form">
                                <v-container>
                                    <v-row>
                                        <v-col cols="12" md="12">
                                            <v-text-field v-model="userData.email"
                                            :rules="emailRules"
                                            label="E-mail"
                                            required
                                            ></v-text-field>
                                        </v-col>
                                        <v-col cols="12" md="12">
                                            <v-text-field v-model="userData.password"
                                             :counter="10"
                                             :rules="passwordRules"
                                             label="password"
                                             type="password"
                                             required
                                             ></v-text-field>
                                        </v-col>
                                        <v-col cols="4" offset="4">
                                            <v-btn  @click="login">
                                            Submit
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-form>

                            <v-divider></v-divider>

                            <v-container class="text-center">
                              <v-row>
                                <v-col cols="12">
                                    <v-btn class="bg-success w-100" @click="googleLogin" >
                                        <i class="fa-brands fa-google "></i>
                                    </v-btn>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn class="bg-indigo w-100" >
                                        <i class="fa-brands fa-facebook"></i>
                                    </v-btn>
                                </v-col>
                                <v-col cols="12">
                                    <v-btn class="bg-black w-100" >
                                        <i class="fa-brands fa-github"></i>
                                    </v-btn>
                                </v-col>
                              </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <pre>{{ token }}</pre>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import AuthService from '../services/AuthService'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data: function () {
    return {
      userData: {
        email: '',
        password: ''
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be at least 8 characters'
      ]
    }
  },
  methods: {
    async login () {
      if (this.$refs.form.validate()) {
        try {
          await AuthService.login(this.userData).then((response) => {
            if (response.data) {
              this.$store.dispatch('setToken', response.data.token)
              this.$store.dispatch('setUser', response.data.user.email)
              this.$router.push({ name: 'UserInfo' })
            }
          })

          // If the response is successful then only user is fetched

          // @TODO LIST : Token passed through this is showing null in backend
        } catch (error) {
          console.log(error.response.data.message)
        }
      }
    },
    // @TODO LIST :-  solve 302 status code error so it can redirect
    async googleLogin () {
      const response = await AuthService.loginWithGoogle()
      console.log(response)
    }
  },
  computed: {
    // eslint-disable-next-line no-undef
    ...mapState([
      'token'
    ])
  }
}
</script>
