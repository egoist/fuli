import Vue from 'vue'
import Revue from 'revue'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(promise, thunk))
export default new Revue(Vue, store)
