import { configureStore } from '@reduxjs/toolkit'
import HomePageCoins from './HomePageSlicer/HomePageSlice'


export const store = configureStore({
  reducer: {
    homecoins: HomePageCoins,
  },
})