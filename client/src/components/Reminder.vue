<template>
    <div>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card class="mx-auto" width="400">
                    <v-card-title>
                      <h3>Add Reminder</h3>
                    </v-card-title>
                    <v-card-text>
                      <v-form>
                        <v-container>
                          <v-row>
                              <v-col cols="12" md="12">
                                  <v-text-field
                                  v-model="reminder.reminder_type"
                                  label="reminder_type"
                                  ></v-text-field>
                              </v-col>

                              <v-col cols="12" md="12">
                                  <v-text-field
                                  v-model="reminder.reminder_date"
                                  label="reminder_date"
                                    ></v-text-field>
                              </v-col>
                              <v-col cols="12" md="12">
                                  <v-text-field
                                  v-model="reminder.reminder_amount"
                                  label="reminder_amount"
                                    ></v-text-field>
                              </v-col>

                              <v-col cols="6" offset="4" class="mt-2">
                                  <v-btn color="blue" @click="add_reminder">
                                  Add Reminder
                                  </v-btn>
                               </v-col>
                          </v-row>
                        </v-container>
                      </v-form>
                    </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
    </div>
</template>
<script>
import AuthService from '@/services/AuthService'
import { mapState } from 'vuex'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Reminder',
  data () {
    return {
      reminder: {
        reminder_type: '',
        reminder_date: '',
        reminder_amount: '',
        user_id: ''
      }
    }
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  methods: {
    async add_reminder () {
      this.reminder.user_id = this.userId
      await AuthService.addreminder(this.reminder).then((response) => {
        // eslint-disable-next-line no-empty
        if (response.status === 200) {
          this.reminder = {
            reminder_date: '',
            reminder_type: '',
            reminder_amount: ''
          }
        }
        this.$router.push({ name: 'UserInfo' })
      })
    }
  }

}
</script>
