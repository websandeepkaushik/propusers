import { configureStore } from '@reduxjs/toolkit'
import property from './reducerSlice/property'

const store =  configureStore({
  reducer: {
      property,
  },
})

export default store;