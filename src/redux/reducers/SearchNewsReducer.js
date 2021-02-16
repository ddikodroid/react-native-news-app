import searchNewsTypes from '../actions/SearchNewsTypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

const SearchNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case searchNewsTypes.SEARCH_NEWS_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case searchNewsTypes.SEARCH_NEWS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case searchNewsTypes.SEARCH_NEWS_FAILED: {
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }
    default:
      return {
        ...state
      }
  }
}

export default SearchNewsReducer
