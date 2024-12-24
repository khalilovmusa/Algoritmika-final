import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const HomePageSlice = createSlice({
  name: 'homecoins',
  initialState,
  reducers: {
    setHomeCoins: (state, action) => {
      state.value = [...action.payload]
    }
  },
})

export const { setHomeCoins } = HomePageSlice.actions

export default HomePageSlice.reducer

