import { configureStore } from '@reduxjs/toolkit'
import salonInfoSlice from './salonInfoSlice'
import userInfoSlice from './userInfoSlice'

export const store = configureStore({
  reducer: {
    salonInfo: salonInfoSlice,
    userInfo: userInfoSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch