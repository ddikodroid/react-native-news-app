import { createStore, combineReducers, applyMiddleware } from 'redux'
import CategoryNewsReducer from '../reducers/CategoryNewsReducer'
import HeadlineNewsReducer from '../reducers/HeadlineNewsReducer'
import SearchNewsReducer from '../reducers/SearchNewsReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  categoryNews: CategoryNewsReducer,
  headlineNews: HeadlineNewsReducer,
  searchNews: SearchNewsReducer
})

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store
