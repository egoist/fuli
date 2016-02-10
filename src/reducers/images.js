import {handleActions} from 'redux-actions'

const initialState = {
	page: 1,
	fetching: false,
	images: []
}

export default handleActions({
	'fetching images'(state, action) {
		return {
			...state,
			fetching: true
		}
	},
	'fetched images'(state, action) {
		return {
			fetching: false,
			page: state.page + 1,
			images: [
				...state.images,
				...action.payload.results
			]
		}
	}
}, initialState)
