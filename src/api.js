import fetch from 'isomorphic-fetch'

export function fetchImages(page = 1, limit = 10) {
	return fetch(`http://gank.avosapps.com/api/data/%E7%A6%8F%E5%88%A9/${limit}/${page}`)
		.then(data => data.json())
}
