<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="4" offset="4">
            <v-card>
              <v-card-title>
                SignIn
              </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-row>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="newUser.email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="newUser.password"
                        :rules="passwordRules"
                        :counter="10"
                        label="Password"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="12" md="12">
                      <v-text-field
                        v-model="confirmPassword"
                        :counter="10"
                        :type="show ? 'text': 'password'"
                        :append-icon="show ? 'mdi-eye': 'mdi-eye-off'"
                        @click:append="show=!show"
                        label="Confirm Password"
                        required
                      ></v-text-field>
                    </v-col>

                    <v-col cols="4" md="4" offset="4">
                      <v-btn color="blue" @click="SigIn">
                        SignIn
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
import AuthService from '../services/AuthService'
export default {
  name: 'SigIn',
  data () {
    return {
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      passwordRules: [
        v => !!v || 'Password is required',
        v => v.length <= 10 || 'Password must be at least 8 characters'
      ],
      show: false,
      newUser: {
        email: '',
        password: ''
      },
      confirmPassword: '',
      message: ''
    }
  },
  methods: {
    async SigIn () {
      // eslint-disable-next-line no-empty
      if (this.newUser.password.length === this.confirmPassword.length && this.newUser.password.startsWith(this.confirmPassword)) {
        await AuthService.register(this.newUser).then((response) => {
          // eslint-disable-next-line no-empty
          if (response.status === 200) {
            this.newUser = {
              email: '',
              password: ''
            }
            this.$router.push({ name: 'Login' })
          }
        })
      }
    }
  }
}
</script>
