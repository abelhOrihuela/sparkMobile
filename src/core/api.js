import {AsyncStorage} from 'react-native'

import axios from 'axios'
// import qs from 'querystring'

// const host = 'https://b34fa2ab.ngrok.io/api'
const host = 'https://api.staging.ac.commonsense.io/api'

async function get (url, body) {
  let token = await getToken()

  const instance = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })



  return instance.get(`${host}${url}`)
}

async function post (url, body) {
  let token = await getToken()
  let instance
  if (token) {
    instance = axios.create({
      baseURL: host,
      timeout: 10000,
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
  } else {
    instance = axios.create({
      baseURL: host,
      timeout: 10000
    })
  }
  return instance.post(`${host}${url}`, body)
}

async function put (url, body) {
  let token = await getToken()

  const instance = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return instance.put(`${host}${url}`, body)
}

function getToken () {
  return AsyncStorage.getItem('jwt')
}

const api = {
  get: get,
  post: post,
  put: put
}

export default api
