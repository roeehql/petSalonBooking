import { configureStore } from '@reduxjs/toolkit'
import salonInfoSlice from './salonInfoSlice'

export const store = configureStore({
  reducer: {
    salonInfo: salonInfoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch