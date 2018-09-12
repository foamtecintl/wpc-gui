<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col md="7">
        <b-card>
          <div slot="header">
            <strong>Update</strong> you profile
          </div>
          <b-form @submit.prevent="updateProfile">
            <b-form-group
              label="Username"
              label-for="username"
              :label-cols="3">
              <b-form-input id="username" type="text" :disabled="true" v-model="userUpdate.username"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Employee ID"
              label-for="empId"
              :label-cols="3">
              <b-form-input id="empId" type="text" :disabled="true" v-model="userUpdate.employeeId" autocomplete="name" placeholder="You ID"></b-form-input>
            </b-form-group>
            <b-form-group
              label="First Name"
              label-for="firstName"
              :label-cols="3">
              <b-form-input id="firstName" type="text" v-model="userUpdate.firstName" :state="validateFirstName" autocomplete="name" placeholder="You first name"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Last Name"
              label-for="lastName"
              :label-cols="3">
              <b-form-input id="lastName" type="text" v-model="userUpdate.lastName" :state="validateLastName" autocomplete="name" placeholder="You last name"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Email"
              label-for="email">
              <b-form-input id="email" type="text" v-model="userUpdate.email" :state="validateEmail" autocomplete="name" placeholder="You email"></b-form-input>
            </b-form-group>
            <b-form-group
              label="Password"
              label-for="password">
              <b-form-input type="password" id="password" class="form-control"
              v-model="userUpdate.password"
              :state="validatePassword"
              placeholder="Password"
              autocomplete="new-password" />
              <b-form-invalid-feedback>
                {{ statePasswordText }}
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group
              label="Confirm Password"
              label-for="confirmPassword">
              <b-form-input type="password" id="confirmPassword" class="form-control"
              v-model="userUpdate.confirmPassword"
              :state="validateConfirmPassword"
              placeholder="Password"
              autocomplete="new-password" />
            </b-form-group>
            <b-form-group
              label="Department"
              label-for="basicSelect"
              :label-cols="3">
              <b-form-select id="basicSelect"
                size="lg"
                :plain="true"
                v-model="userUpdate.department"
                :state="validateDepartment"
                :options="['Please select','Engineer', 'QA', 'Production', 'Sale', 'Other']"
                value="Please select">
              </b-form-select>
            </b-form-group>
            <b-form-group
              label="Telephone"
              label-for="telephone"
              :label-cols="3">
              <b-form-input id="telephone" type="text" v-model="userUpdate.telephone" :state="validateTelephone" autocomplete="name" placeholder="0123456789"></b-form-input>
            </b-form-group>
            <div slot="footer">
              <b-button type="submit" size="sm" variant="primary" :disabled="validateSubmit"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
      <b-col md="5">
        <div class="col-sm-12 col-md-12 main-section text-center">
          <div class="row">
            <div class="col-lg-12 col-sm-12 col-12 profile-header"></div>
          </div>
          <div class="row user-detail">
            <div class="col-lg-12 col-sm-12 col-12">
              <img src="~@/assets/user.png" alt="Profile" class="rounded-circle img-thumbnail">
              <h5>ID: {{ userUpdate.employeeId }}</h5>
              <h5>{{ userUpdate.firstName }} {{ userUpdate.lastName }}</h5>
              <h5>[username: {{ userUpdate.username }}]</h5>
              <p>{{ userUpdate.department }} Department</p>
              <p>Email: {{ userUpdate.email }}</p>
              <p>Tel: {{ userUpdate.telephone }}</p>
              <hr>
              <span>Foamtec international factory</span>
              <hr>
            </div>
          </div>
          <div class="row user-social-detail">
            <div class="col-lg-12 col-sm-12 col-12">
              <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a>
              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </b-col>
    </b-row>
    <BlockUI v-if="showBlockUI">
      <h3>Update success</h3>
      <i class="fa fa-check fa-3x fa-fw"></i><br><br>
      <b-button variant="primary" @click="goToHome">Go to home</b-button>
    </BlockUI>
    <BlockUI v-if="showWait">
      <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
    </BlockUI>
  </div>
</template>

<script>
import UserService from '@/service/user.service'

export default {
  name: 'UpdateProfile',
  data () {
    return {
      userUpdate: {
        username: localStorage.getItem('username'),
        employeeId: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        department: 'Please select',
        telephone: ''
      },
      stateFirstName: null,
      stateLastName: null,
      stateEmail: null,
      statePassword: null,
      statePasswordText: 'Enter at least 7 letters',
      stateConfirmPassword: null,
      stateDepartment: null,
      stateTelephone: null,
      showBlockUI: false,
      showWait: false
    }
  },
  mounted () {
    this.showWait = true
    UserService.findUserByUsername(this.userUpdate)
      .then(res => {
        this.userUpdate.employeeId = res.data.user.employeeId
        this.userUpdate.firstName = res.data.user.firstName
        this.userUpdate.lastName = res.data.user.lastName
        this.userUpdate.email = res.data.user.email
        this.userUpdate.department = res.data.user.department
        this.userUpdate.telephone = res.data.user.phoneNO
        this.showWait = false
      })
      .catch(err => {
        alert(err.response.data.message)
        this.showWait = false
      })
  },
  methods: {
    updateProfile () {
      this.showWait = true
      UserService.userUpdateProfile(this.userUpdate)
        .then(res => {
          this.showWait = false
          this.showBlockUI = true
        })
        .catch(err => {
          alert(err.response.data.message)
          this.showWait = false
        })
    },
    goToHome () {
      localStorage.setItem('status', 'APPROVE')
      this.$router.push('/')
    },
    checkFirstName () {
      if (this.userUpdate.firstName === '') {
        this.stateFirstName = false
      } else {
        this.stateFirstName = true
      }
    },
    checkLastName () {
      if (this.userUpdate.lastName === '') {
        this.stateLastName = false
      } else {
        this.stateLastName = true
      }
    },
    checkEmail () {
      if (this.userUpdate.email.indexOf('@') > 0) {
        this.stateEmail = true
      } else {
        this.stateEmail = false
      }
    },
    checkPassword () {
      if (this.userUpdate.password.length < 7) {
        this.statePassword = false
      } else {
        this.statePassword = true
      }
    },
    checkConfirmPassword () {
      if (this.userUpdate.confirmPassword.length < 7) {
        this.stateConfirmPassword = false
      } else {
        if (this.userUpdate.password === this.userUpdate.confirmPassword) {
          this.stateConfirmPassword = true
        } else {
          this.stateConfirmPassword = false
        }
      }
    },
    checkDepartment () {
      if (this.userUpdate.department === 'Please select') {
        this.stateDepartment = false
      } else {
        this.stateDepartment = true
      }
    },
    checkTelephone () {
      if (this.userUpdate.telephone === '') {
        this.stateTelephone = false
      } else {
        this.stateTelephone = true
      }
    }
  },
  computed: {
    validateFirstName () {
      this.checkFirstName()
      return this.stateFirstName
    },
    validateLastName () {
      this.checkLastName()
      return this.stateLastName
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
    validateDepartment () {
      this.checkDepartment()
      return this.stateDepartment
    },
    validateTelephone () {
      this.checkTelephone()
      return this.stateTelephone
    },
    validateSubmit () {
      let submitDisabled = this.stateFirstName && this.stateLastName && this.stateEmail && this.statePassword && this.stateConfirmPassword && this.stateDepartment && this.stateTelephone
      return !submitDisabled
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-section{
  border: 1px solid #138496;
  background-color: #fff;
}
.profile-header{
  background-color: #17a2b8;
  height: 80px;
}
.user-detail{
  margin: -50px 0px 30px 0px;
}
.user-detail img{
  height: 100px;
  width: 100px;
}
.user-detail h5{
  margin: 15px 0px 5px 0px;
}
.user-social-detail{
  padding: 15px 0px;
  background-color: #17a2b8;
}
.user-social-detail a i{
  color:#fff;
  font-size: 23px;
  padding: 0px 5px;
}
</style>
