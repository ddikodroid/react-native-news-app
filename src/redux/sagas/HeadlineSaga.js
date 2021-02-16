import HeadlineTypes from '../actions/HeadlineTypes'
import { put, takeLatest } from 'redux-saga/effects'
import { headlineNewsApi } from '../../apis/HeadlineNewsApi'

function * headlineWatcher () {
  yield takeLatest(HeadlineTypes.HEADLINE_REQUEST, headlineWorker)
}

function * headlineWorker () {
  try {
    const response = yield headlineNewsApi()
    const news = response.data.articles
    yield put({ type: HeadlineTypes.HEADLINE_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: HeadlineTypes.HEADLINE_FAILED })
  }
}

export default headlineWatcher
