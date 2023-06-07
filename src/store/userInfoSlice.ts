import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface UserInfoState {
    name:string,
    tel:string,
}

const initialState = { value : {
    name: "",
    tel: "",
}
}

export const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state , action: PayloadAction<UserInfoState>) => {
      state.value = action.payload
    },
    removeUserInfo : (state)=>{
      state.value = initialState.value
    }
  },
})

export const { setUserInfo , removeUserInfo } = userInfoSlice.actions

export const getUserInfo = (state: RootState) => state.userInfo

export default userInfoSlice.reducer