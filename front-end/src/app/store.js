import { configureStore } from '@reduxjs/toolkit'
import HomePageCoins from './HomePageSlicer/HomePageSlice'
import UserSlice from './UserSlicer/UserSlicer'
import categoriesSlice from './CategoriesSlice/CategoriesSlice'


export const store = configureStore({
  reducer: {
    homecoins: HomePageCoins,
    userslice: UserSlice,
    categoryslice: categoriesSlice
  },
})