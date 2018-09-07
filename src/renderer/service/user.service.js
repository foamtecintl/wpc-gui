import axios from 'axios'
import { API_URL } from './config'

const headers = {
  'Content-Type': 'application/json'
}

const UserService = {
  userRegister (userRegister) {
    let data = {
      username: userRegister.username,
      email: userRegister.email,
      password: userRegister.password
    }
    return axios.post(API_URL + '/api/register', JSON.stringify(data), {headers})
  },
  userValidateUsername (userRegister) {
    let data = {
      username: userRegister.username
    }
    return axios.post(API_URL + '/api/validateusername', JSON.stringify(data), {headers})
  },
  login (userLogin) {
    let data = {
      username: userLogin.username,
      password: userLogin.password
    }
    return axios.post(API_URL + '/api/login', JSON.stringify(data), {headers})
  }
}

export default UserService
