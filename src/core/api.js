import axios from 'axios'
const host = 'https://e96509c7.ngrok.io/api'
function get (url, body) {
  return axios.get(`${host}${url}`, body)
}

function post (url, body) {
  return axios.post(`${host}${url}`, body)
}

const api = {
  get: get,
  post: post
}

export default api
