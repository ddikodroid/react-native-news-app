import axios from 'axios'
import { BASE_URL } from './api'
import { Config } from 'react-native-config'

export const categoryNewsApi = (category) => {
  return axios
    .get(`${BASE_URL}/top-headlines?country=id&category=${category}&apiKey=${Config.NEWS_API}`)
}
