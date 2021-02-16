import { all } from 'redux-saga/effects'
import categoryNewsWatcher from './CategoryNewsSaga'
import headlineNewsWatcher from './HeadlineNewsSaga'
import searchNewsWatcher from './SearchNewsSaga'

function * rootSaga () {
  yield all([
    headlineNewsWatcher(),
    searchNewsWatcher(),
    categoryNewsWatcher()
  ])
}

export default rootSaga
