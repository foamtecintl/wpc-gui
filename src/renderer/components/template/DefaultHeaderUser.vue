<template>
  <AppHeaderDropdown right no-caret>
    <template slot="header">
      <i class="icon-user icons font-2xl mt-4 img-avatar"></i> {{ username }}
    </template>\
    <template slot="dropdown">
      <b-dropdown-header
        tag="div"
        class="text-center">
        <strong>Settings</strong>
      </b-dropdown-header>
      <b-dropdown-item @click="redirectToProfile"><i class="fa fa-user" /> Profile</b-dropdown-item>
      <b-dropdown-divider />
      <b-dropdown-item @click="logout"><i class="fa fa-lock" /> Logout</b-dropdown-item>
    </template>
  </AppHeaderDropdown>
</template>

<script>
import { HeaderDropdown as AppHeaderDropdown } from '@coreui/vue'
export default {
  name: 'DefaultHeaderUser',
  components: {
    AppHeaderDropdown
  },
  data () {
    return {
      username: localStorage.getItem('username')
    }
  },
  methods: {
    redirectToProfile () {
      this.$router.push('/updateprofile')
    },
    logout () {
      localStorage.clear()
      this.$router.push('/pages/login')
    }
  }
}
</script>
