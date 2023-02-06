import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name:'userSlice',
  initialState:{
    myUser: null
  },

  reducers:{
    setMyUser:(state, {payload}) => {
      state.myUser = payload
    }
  }

})

export const {setMyUser} = userSlice.actions

export default userSlice.reducer