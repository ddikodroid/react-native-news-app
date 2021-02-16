import { categoryNewsTypes } from '../actions/CategoryNewsTypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

const categoryNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryNewsTypes.CATEGORY_NEWS_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case categoryNewsTypes.CATEGORY_NEWS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case categoryNewsTypes.CATEGORY_NEWS_FAILED: {
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

export default categoryNewsReducer
