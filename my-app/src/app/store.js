import { configureStore } from '@reduxjs/toolkit'
import dragonReducer from './dragonSlice';
import missionReducer from './missionSlice';
import { userReducer } from './userSlice';

export const store = configureStore({
  reducer: {

    dragons: dragonReducer,
    mission: missionReducer,
    user: userReducer,

  },
})