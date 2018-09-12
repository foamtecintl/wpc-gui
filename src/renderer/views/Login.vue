<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <b-form @submit.prevent="login">
                  <h1>Login</h1>
                  <p class="text-muted">Sign In to your account</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="text" class="form-control" v-model="userLogin.username" placeholder="Username" autocomplete="username email" />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <b-form-input type="password" class="form-control" v-model="userLogin.password" placeholder="Password" autocomplete="current-password" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="6">
                      <b-button variant="primary" type="submit" class="px-4" :disabled="validateForm">Login</b-button>
                    </b-col>
                    <b-col cols="6" class="text-right">
                      <b-button variant="link" class="px-0">Forgot password?</b-button>
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
            <b-card no-body class="text-white bg-default py-5 d-md-down-none" style="width:44%">
              <b-card-body class="text-center">
                <div class="col-12">
                  <img src="~@/assets/foamtec-login.png" class="responsive" alt="logo-login" width="200">
                  <b-button variant="primary" class="active mt-3" @click="redirectToRegister">Register Now!</b-button>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
    <BlockUI v-if="showWait">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </BlockUI>
  </div>
</template>

<script>
import UserService from '@/service/user.service'

export default {
  name: 'Login',
  data () {
    return {
      userLogin: {
        username: '',
        password: ''
      },
      showWait: false
    }
  },
  methods: {
    login () {
      this.showWait = true
      UserService.login(this.userLogin)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('username', res.data.username)
          localStorage.setItem('role', res.data.role)
          localStorage.setItem('status', res.data.status)
          this.showWait = false
          this.$router.push('/')
        })
        .catch(err => {
          alert(err.response.data.message)
          this.showWait = false
        })
    },
    redirectToRegister () {
      this.$router.push('/pages/register')
    }
  },
  computed: {
    validateForm () {
      return this.userLogin.username === '' || this.userLogin.password === ''
    }
  }
}
</script>
