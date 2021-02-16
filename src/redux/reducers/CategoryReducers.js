import { CategoryTypes } from '../actions/CategoryTypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

const CategoryReducers = (state = initialState, action) => {
  switch (action.type) {
    case CategoryTypes.CATEGORY_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case CategoryTypes.CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case CategoryTypes.CATEGORY_FAILED: {
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

export default CategoryReducers
