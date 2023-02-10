<template>
    <div >
      <v-container fluid>
        <v-row>

          <v-col cols="3" md="3" xs="12" sm="3"  >
              <v-card height="60vh">
                <v-card-text>

                  <v-list-item two-line>
                  <v-list-item-content>
                    <v-list-item-title class="text-h6">
                      {{email}}
                    </v-list-item-title>
                    <v-list-item-subtitle>Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                </v-card-text>
              </v-card>
          </v-col>

          <v-col cols="9" md="9" xs="12" sm="9" >
            <v-row >
              <v-col cols="12">
                <v-card height="70vh">
                <v-card-title>
                </v-card-title>
              </v-card>
              </v-col>
              <v-col cols="12" >
                <v-card height="15vh">
                <v-card-title>
                  <v-row v-for="reminder in reminders" :key="reminder.id">
                    <v-col cols="4" md="4">
                     {{ reminder.reminder_type }}
                    </v-col>
                    <v-col cols="4" md="4">
                      {{reminder.reminder_amount}}
                    </v-col>
                    <v-col cols="4" md="4">
                      {{reminder.reminder_date}}
                    </v-col>
                  </v-row>
                </v-card-title>
              </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>
<script>
import helper from '../helper'
import AuthService from '../services/AuthService'
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  data: function () {
    return {
      email: '',
      transactions: '',
      reminders: ''
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  async mounted () {
    this.email = this.user
    const response = await AuthService.getUsers_transaction_reminder(this.email)
    // eslint-disable-next-line no-unused-expressions
    this.transactions = response.data.user.transactions
    console.log(this.transactions)
    this.reminders = response.data.user.reminders

    const formatedDate = helper.formatMyDate(response.data.user.reminders[0].reminder_date)
    console.log(helper.daysLeft(formatedDate))
  }
}
</script>
