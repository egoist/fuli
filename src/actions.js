import {createAction} from 'redux-actions'
import * as api from './api'

export const fetchingImages = createAction('fetchingImages')
export const fetchedImages = createAction('fetched images', api.fetchImages)

export function fetchImages(page) {
	return (dispatch, getState) => {
		dispatch(fetchingImages)
		dispatch(fetchedImages(page))
	}
}
