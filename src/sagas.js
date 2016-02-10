import fetch from 'isomorphic-fetch'
import {put, call} from 'redux-saga'

export function* fetchImages() {
	yield put('fetching images')
	const data = yield call(fetch, 'http://gank.avosapps.com/api/data/福利/10/1')
	yield put({type: 'fetched images', payload: data.results})
}
