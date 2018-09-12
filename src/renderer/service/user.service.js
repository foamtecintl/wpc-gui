import axios from 'axios'
import { API_URL } from './config'

const UserService = {
  findUserByUsername (user) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      username: user.username
    }
    return axios.post(API_URL + '/api/finduserbyusername', JSON.stringify(data), {headers})
  },
  userRegister (userRegister) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      employeeId: userRegister.employeeId,
      username: userRegister.username,
      email: userRegister.email,
      password: userRegister.password
    }
    return axios.post(API_URL + '/api/register', JSON.stringify(data), {headers})
  },
  userValidateUsername (userRegister) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      username: userRegister.username
    }
    return axios.post(API_URL + '/api/validateusername', JSON.stringify(data), {headers})
  },
  userValidateEmployeeId (userUpdate) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      employeeId: userUpdate.employeeId
    }
    return axios.post(API_URL + '/api/validateemployeeid', JSON.stringify(data), {headers})
  },
  userUpdateProfile (userUpdate) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      username: userUpdate.username,
      employeeId: userUpdate.employeeId,
      firstName: userUpdate.firstName,
      lastName: userUpdate.lastName,
      email: userUpdate.email,
      password: userUpdate.password,
      department: userUpdate.department,
      telephone: userUpdate.telephone
    }
    return axios.post(API_URL + '/api/updateprofile', JSON.stringify(data), {headers})
  },
  login (userLogin) {
    let headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
    }
    let data = {
      username: userLogin.username,
      password: userLogin.password
    }
    return axios.post(API_URL + '/api/login', JSON.stringify(data), {headers})
  }
}

export default UserService
