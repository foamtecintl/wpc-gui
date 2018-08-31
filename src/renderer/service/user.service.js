import axios from 'axios'
import { API_URL } from './config'

const UserService = {
  userRegister (userRegister) {
    let headers = {
      'Content-Type': 'application/json'
    }
    let data = {
      username: userRegister.username,
      email: userRegister.email,
      password: userRegister.password
    }
    return axios.post(API_URL + '/api/register', JSON.stringify(data), {headers})
  },
  userValidateUsername (userRegister) {
    let headers = {
      'Content-Type': 'application/json'
    }
    let data = {
      username: userRegister.username
    }
    return axios.post(API_URL + '/api/validateusername', JSON.stringify(data), {headers})
  }
}

export default UserService
