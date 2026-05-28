
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { cakeReducer } from './cake/cakereducer'
import logger from 'redux-logger'
import { iceCreameReducer } from './iceCreame/iceCreameReducer'
import {composeWithDevTools} from '@redux-devtools/extension'


let rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame : iceCreameReducer
})


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
console.log(store)

