import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  filteredValue: []
}

export const HomePageSlice = createSlice({
  name: 'homecoins',
  initialState,
  reducers: {
    setHomeCoins: (state, action) => {
      state.value = [...action.payload]
    },
    setFilteredCoins: (state, action) => {
      if (typeof action.payload === 'string') {
          state.filteredValue = state.value.filter(coin => 
              coin.name.toLowerCase().includes(action.payload.toLowerCase())
          );
      } else {
          state.filteredValue = action.payload;
      }
  }
  },
})

export const { setHomeCoins, setFilteredCoins } = HomePageSlice.actions

export default HomePageSlice.reducer
