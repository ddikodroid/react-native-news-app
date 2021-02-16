import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const searchNewsApi = (keyword) => {
  return axios
    .get(`${BASE_URL}/everything?q=${keyword}&apiKey=${Config.NEWS_API}`)
}
