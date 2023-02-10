<template>
    <div>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-card class="mx-auto" width="400">
                    <v-card-title>
                      <h3>Add Transaction</h3>
                    </v-card-title>
                    <v-card-text>
                      <v-form>
                        <v-container>
                          <v-row>
                              <v-col cols="12" md="12">
                                  <v-text-field
                                  v-model="transaction.transaction_amount"
                                  label="Amount"
                                  ></v-text-field>
                              </v-col>

                              <v-col cols="12" md="12">
                                  <v-text-field
                                  v-model="transaction.type"
                                  label="Type"
                                    ></v-text-field>
                              </v-col>

                              <v-col cols="6" offset="4" class="mt-2">
                                  <v-btn color="blue" @click="add_transaction" >
                                  Add Transaction
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
  name: 'Transaction',
  data () {
    return {
      transaction: {
        transaction_amount: '',
        type: '',
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
    // eslint-disable-next-line vue/no-dupe-keys
    async add_transaction () {
      this.transaction.user_id = this.userId
      await AuthService.addTransaction(this.transaction).then((response) => {
        // eslint-disable-next-line no-empty
        if (response.status === 200) {
          console.log(response.data)
          this.transaction = {
            transaction_amount: '',
            type: ''
          }
          this.$router.push({ name: 'UserInfo' })
        }
      })
    }
  }

}
</script>
