import { combineReducers } from 'redux'
import HeadlineReducers from './HeadlineReducers'
import SearchReducers from './SearchReducers'
import CategoryReducers from './CategoryReducers'

export default combineReducers({
  headline: HeadlineReducers,
  search: SearchReducers,
  category: CategoryReducers
})
