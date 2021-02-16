import { put, takeLatest } from 'redux-saga/effects'
import searchNewsApi from '../../apis/CategoryNewsApi'
import { searchNewsTypes } from '../actions/SearchNewsTypes'

function * searchNewsWatcher () {
  yield takeLatest(searchNewsTypes.CATEGORY_NEWS_REQUEST, searchNewsWorker)
}

function * searchNewsWorker (action) {
  try {
    const response = yield searchNewsApi(action.payload)
    const news = response.data.articles
    yield put({ type: searchNewsTypes.CATEGORY_NEWS_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: searchNewsTypes.CATEGORY_NEWS_FAILED })
  }
}

export default searchNewsWatcher
