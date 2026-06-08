import { applyMiddleware, combineReducers, createStore } from 'redux'
import { postsReducer } from './postsReducer'
import {thunk} from 'redux-thunk'

// https://jsonplaceholder.typicode.com/posts

let rootReducer = combineReducers({
  postsReducer
})


export let store = createStore(rootReducer, applyMiddleware(thunk))
