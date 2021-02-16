import { put, takeLatest } from 'redux-saga/effects'
import { searchNewsApi } from '../../apis/SearchNewsApi'
import searchTypes from '../actions/SearchTypes'

function * searchWatcher () {
  yield takeLatest(searchTypes.SEARCH_REQUEST, searchWorker)
}

function * searchWorker (action) {
  try {
    const response = yield searchNewsApi(action.payload)
    const news = response.data.articles
    yield put({ type: searchTypes.SEARCH_SUCCESS, payload: news })
  } catch (error) {
    yield put({ type: searchTypes.SEARCH_FAILED })
  }
}

export default searchWatcher
