import { put, takeLatest } from 'redux-saga/effects'
import categoryNewsApi from '../../apis/CategoryNewsApi'
import { categoryNewsTypes } from '../actions/CategoryNewsTypes'

function * categoryNewsWatcher () {
  yield takeLatest(categoryNewsTypes.CATEGORY_NEWS_REQUEST, categoryWorker)
}

function * categoryWorker (action) {
  try {
    const response = yield categoryNewsApi(action.payload)
    const news = response.data.articles
    yield put({ type: categoryNewsTypes.CATEGORY_NEWS_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: categoryNewsTypes.CATEGORY_NEWS_FAILED })
  }
}

export default categoryNewsWatcher
