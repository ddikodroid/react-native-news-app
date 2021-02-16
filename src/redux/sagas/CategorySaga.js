import { put, takeLatest } from 'redux-saga/effects'
import { categoryNewsApi } from '../../apis/CategoryNewsApi'
import CategoryTypes from '../actions/CategoryTypes'

function * categoryWatcher () {
  yield takeLatest(CategoryTypes.CATEGORY_REQUEST, categoryWorker)
}

function * categoryWorker (action) {
  try {
    const response = yield categoryNewsApi(action.payload)
    const news = response.data.articles
    yield put({ type: CategoryTypes.CATEGORY_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: CategoryTypes.CATEGORY_FAILED })
  }
}

export default categoryWatcher
