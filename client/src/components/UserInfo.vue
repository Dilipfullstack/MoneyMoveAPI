<template>
    <div>

    </div>
</template>
<script>
import AuthService from '../services/AuthService'
import { mapState } from 'vuex'

export default {
  name: 'UserInfo',
  data: function () {
    return {
      email: ''
    }
  },
  computed: {
    ...mapState([
      'user'
    ])
  },
  async mounted () {
    this.email = this.user
    console.log(this.log)
    const response = await AuthService.getUsers_transaction_reminder(this.email)
    console.log(response.data.user)
  }
}
</script>
