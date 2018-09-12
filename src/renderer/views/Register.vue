<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6" sm="8">
          <b-card no-body class="mx-4">
            <b-card-body class="p-4">
              <b-form @submit.prevent="register">
                <h1>Register</h1>
                <p class="text-muted">Create your account</p>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>ID</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control"
                    v-model="dataRegister.employeeId"
                    :state="validateEmpId"
                    placeholder="Employee ID" />
                    <b-form-invalid-feedback>
                      {{ stateEmpIdText }}
                    </b-form-invalid-feedback>
                </b-input-group>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-user"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control"
                    v-model="dataRegister.username"
                    :state="validateUsername"
                    placeholder="Username" />
                    <b-form-invalid-feedback>
                      {{ stateUsernameText }}
                    </b-form-invalid-feedback>
                </b-input-group>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text>@</b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="text" class="form-control"
                  :state="validateEmail"
                  v-model="dataRegister.email"
                  placeholder="Email" />
                </b-input-group>
                <b-input-group class="mb-3">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control"
                  v-model="dataRegister.password"
                  :state="validatePassword"
                  placeholder="Password" />
                  <b-form-invalid-feedback>
                    {{ statePasswordText }}
                  </b-form-invalid-feedback>
                </b-input-group>
                <b-input-group class="mb-4">
                  <b-input-group-prepend>
                    <b-input-group-text><i class="icon-lock"></i></b-input-group-text>
                  </b-input-group-prepend>
                  <b-form-input type="password" class="form-control"
                  :state="validateConfirmPassword"
                  v-model="dataRegister.confirmPassword"
                  placeholder="Repeat password" />
                </b-input-group>

                <b-button variant="success" type="submit" :disabled="validateSubmit" block>Create Account</b-button>
              </b-form>
            </b-card-body>
            <b-card-footer class="p-4">
              <b-button variant="link" class="px-0" @click="redirectToLogin">Go to login page</b-button>
            </b-card-footer>
          </b-card>
        </b-col>
      </b-row>
    </div>
    <BlockUI v-if="showBlockUI">
      <h3>Register success</h3>
      <i class="fa fa-check fa-3x fa-fw"></i><br><br>
      <b-button variant="primary" @click="goToLogin">Go to login</b-button>
    </BlockUI>
    <BlockUI v-if="showWait">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </BlockUI>
  </div>
</template>

<script>
import UserService from '@/service/user.service'

export default {
  name: 'Register',
  data () {
    return {
      dataRegister: {
        employeeId: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      stateEmpId: null,
      stateEmpIdText: 'Enter at least 4 letters',
      stateUsername: null,
      stateUsernameText: '',
      stateEmail: null,
      statePassword: null,
      statePasswordText: 'Enter at least 7 letters',
      stateConfirmPassword: null,
      showBlockUI: false,
      showWait: false
    }
  },
  methods: {
    redirectToLogin () {
      this.$router.push('/pages/login')
    },
    register () {
      this.showWait = true
      UserService.userRegister(this.dataRegister)
        .then(res => {
          this.showWait = false
          this.showBlockUI = true
        })
        .catch(err => {
          this.showWait = false
          alert(err)
        })
    },
    goToLogin () {
      this.$router.push('/pages/login')
    },
    checkEmployeeID () {
      UserService.userValidateEmployeeId(this.dataRegister)
        .then(res => {
          if (this.dataRegister.employeeId === '') {
            this.stateEmpId = null
          } else {
            if (this.dataRegister.employeeId.length < 4) {
              this.stateEmpIdText = 'Enter at least 4 letters'
              this.stateEmpId = false
            } else {
              this.stateEmpId = true
            }
          }
        })
        .catch(err => {
          this.stateEmpIdText = err.response.data.message
          this.stateEmpId = false
        })
    },
    checkUsername () {
      UserService.userValidateUsername(this.dataRegister)
        .then(res => {
          if (this.dataRegister.username === '') {
            this.stateUsername = null
          } else {
            if (this.dataRegister.username.length < 6) {
              this.stateUsernameText = 'Enter at least 6 letters'
              this.stateUsername = false
            } else {
              this.stateUsername = true
            }
          }
        })
        .catch(err => {
          this.stateUsernameText = err.response.data.message
          this.stateUsername = false
        })
    },
    checkEmail () {
      if (this.dataRegister.email.indexOf('@') > 0) {
        this.stateEmail = true
      } else {
        if (this.dataRegister.email === '') {
          this.stateEmail = null
        } else {
          this.stateEmail = false
        }
      }
    },
    checkPassword () {
      if (this.dataRegister.password.length < 7) {
        if (this.dataRegister.password === '') {
          this.statePassword = null
        } else {
          this.statePassword = false
        }
      } else {
        this.statePassword = true
      }
    },
    checkConfirmPassword () {
      if (this.dataRegister.confirmPassword.length < 7) {
        if (this.dataRegister.confirmPassword === '') {
          this.stateConfirmPassword = null
        } else {
          this.stateConfirmPassword = false
        }
      } else {
        if (this.dataRegister.password === this.dataRegister.confirmPassword) {
          this.stateConfirmPassword = true
        } else {
          this.stateConfirmPassword = false
        }
      }
    }
  },
  computed: {
    validateEmpId () {
      this.checkEmployeeID()
      return this.stateEmpId
    },
    validateUsername () {
      this.checkUsername()
      return this.stateUsername
    },
    validateEmail () {
      this.checkEmail()
      return this.stateEmail
    },
    validatePassword () {
      this.checkPassword()
      return this.statePassword
    },
    validateConfirmPassword () {
      this.checkConfirmPassword()
      return this.stateConfirmPassword
    },
    validateSubmit () {
      let submitDisabled = this.stateEmpId && this.stateUsername && this.stateEmail && this.statePassword && this.stateConfirmPassword
      return !submitDisabled
    }
  }
}
</script>
