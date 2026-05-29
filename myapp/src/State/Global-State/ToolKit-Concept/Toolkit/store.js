
import { configureStore } from '@reduxjs/toolkit'

import cakeReducer from './cakeSlice'
import iceCreameReducer from './iceCreameSlice'


export let store = configureStore({
  reducer: {
    cake: cakeReducer,
    iceCreame : iceCreameReducer
  }
})


