import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const categoriesSlice = createSlice({
  name: 'categoriesslice',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.value = [...action.payload];
    }
  },
})

export const { setCategory } = categoriesSlice.actions

export default categoriesSlice.reducer

