import axios from 'axios'
import { CUSTOM_BASE_URL, BASE_URL } from './shared/consts'

// For common config
axios.defaults.headers.post['Content-Type'] = 'application/json'

const mainAxios = axios.create({
  baseURL: BASE_URL
})

const customAxios = axios.create({
  baseURL: CUSTOM_BASE_URL
})

export { mainAxios, customAxios }
