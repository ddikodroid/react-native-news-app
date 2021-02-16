import { all } from 'redux-saga/effects'
import categoryWatcher from './CategorySaga'
import headlineWatcher from './HeadlineSaga'
import searchWatcher from './SearchSaga'

function * rootSaga () {
  yield all([
    headlineWatcher(),
    searchWatcher(),
    categoryWatcher()
  ])
}

export default rootSaga
