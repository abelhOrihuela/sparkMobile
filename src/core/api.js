import React, { Component } from 'react'
import {AsyncStorage} from 'react-native'

import axios from 'axios'
const host = 'https://9c0b3333.ngrok.io/api'

async function get (url, body) {
  let token = await getToken()

  const instance = axios.create({
    baseURL: host,
    timeout: 10000,
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })

  return instance.get(`${host}${url}`, body)
}

function post (url, body) {
  const instance = axios.create({
    baseURL: host,
    timeout: 10000
  })
  return instance.post(`${host}${url}`, body)
}

function getToken () {
  return AsyncStorage.getItem('jwt')
}

const api = {
  get: get,
  post: post
}

export default api
