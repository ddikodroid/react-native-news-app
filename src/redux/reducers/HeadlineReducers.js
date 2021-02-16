import HeadlineTypes from '../actions/HeadlineTypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

const HeadlineReducers = (state = initialState, action) => {
  switch (action.type) {
    case HeadlineTypes.HEADLINE_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case HeadlineTypes.HEADLINE_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case HeadlineTypes.HEADLINE_FAILED: {
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

export default HeadlineReducers
