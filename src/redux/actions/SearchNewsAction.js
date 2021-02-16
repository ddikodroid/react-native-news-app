import { searchNewsTypes } from './SearchNewsTypes'

export const categoryAction = payload => {
  return { type: searchNewsTypes.SEARCH_NEWS_REQUEST, payload }
}
