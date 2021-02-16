import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const searchNewsApi = (category) => {
  return axios
    .get(`${BASE_URL}/everything?q=&apiKey=${Config.API_KEY}`)
}
