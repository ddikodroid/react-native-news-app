import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers/rootReducers'
import rootSaga from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const globalStore = createStore(rootReducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default globalStore
