import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 name: '',
 email: '',
 myReekets: [],
 myMissions: [],
};

const userSlice = createSlice({
 name: 'user',
 initialState,
 reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    setMyReekets: (state, action) => {
      state.myReekets = action.payload;
    },
    setMyMissions: (state, action) => {
      state.myMissions = action.payload;
    },
 },
});

export const { setUser, setMyReekets, setMyMissions } = userSlice.actions;

export default userSlice.reducer;