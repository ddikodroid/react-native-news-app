import searchTypes from './SearchTypes'

export const searchAction = (payload) => {
  return { type: searchTypes.SEARCH_REQUEST, payload }
}
