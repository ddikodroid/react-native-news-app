import { put, takeLatest } from 'redux-saga/effects'
import headlineNewsApi from '../../apis/CategoryNewsApi'
import headlineNewsTypes from '../actions'

function * headlineNewsWatcher () {
  yield takeLatest(headlineNewsTypes.CATEGORY_NEWS_REQUEST, headlineNewsWorker)
}

function * headlineNewsWorker (action) {
  try {
    const response = yield headlineNewsApi(action.payload)
    const news = response.data.articles
    yield put({ type: headlineNewsTypes.CATEGORY_NEWS_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: headlineNewsTypes.CATEGORY_NEWS_FAILED })
  }
}

export default headlineNewsWatcher
