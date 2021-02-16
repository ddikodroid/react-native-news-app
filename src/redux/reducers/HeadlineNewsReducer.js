import headlineNewsTypes from '../actions/HeadlineNewsTypes'

const initialState = {
  isLoading: false,
  isError: false,
  data: []
}

const HeadlineNewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case headlineNewsTypes.HEADLINE_NEWS_REQUEST: {
      return {
        ...state,
        isLoading: true
      }
    }
    case headlineNewsTypes.HEADLINE_NEWS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
    }
    case headlineNewsTypes.HEADLINE_NEWS_FAILED: {
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

export default HeadlineNewsReducer
