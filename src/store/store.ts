import { configureStore } from '@reduxjs/toolkit'
import salonInfoSlice from './salonInfoSlice'
import userInfoSlice from './userInfoSlice'
import toastSlice from './toastSlice'

export const store = configureStore({
  reducer: {
    salonInfo: salonInfoSlice,
    userInfo: userInfoSlice,
    toast: toastSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch