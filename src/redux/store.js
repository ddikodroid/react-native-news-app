import { createStore, combineReducers, applyMiddleware } from 'redux'
import categoryNewsReducer from './reducers/CategoryNewsReducer'
import headlineNewsReducer from './reducers/HeadlineNewsReducer'
import searchNewsReducer from './reducers/SearchNewsReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/RootSaga'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  categoryNews: categoryNewsReducer,
  headlineNews: headlineNewsReducer,
  searchNews: searchNewsReducer
})

const configureStore = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default configureStore
