<template>
  <div class="animated fadeIn">
    Dashboard
  </div>
</template>

<script>
export default {
  name: 'UpdateProfile',
  data () {
    return {
      userStatus: localStorage.getItem('status')
    }
  },
  mounted () {
    if (this.userStatus === 'REGISTER') {
      this.$router.push('/updateprofile')
    }
  }
}
</script>
