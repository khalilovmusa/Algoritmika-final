import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const UserSlice = createSlice({
  name: 'userslicer',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    }
  },
})

export const { setUser } = UserSlice.actions

export default UserSlice.reducer

