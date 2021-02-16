import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const headlineNewsApi = (category) => {
  return axios
    .get(`${BASE_URL}/top-headlines?country=id&apiKey=${Config.API_KEY}`)
}
