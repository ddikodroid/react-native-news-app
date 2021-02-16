import searchTypes from '../actions/SearchTypes'

const initialState = {
  isLoading: false,
  data: [],
  isError: false
}

const SearchReducers = (state = initialState, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case searchTypes.SEARCH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case searchTypes.SEARCH_FAILED: {
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

export default SearchReducers
