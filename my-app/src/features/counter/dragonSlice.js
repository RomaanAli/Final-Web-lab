// features/dragons/dragonsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
 const response = await axios.get('https://api.spacexdata.com/v4/dragons');
 return response.data;
});

const dragonsSlice = createSlice({
 name: 'dragons',
 initialState: {
    entities: [],
    status: 'idle',
    error: null,
 },
 
 const dragonsReducer = (state = [], action) => {
    switch (action.type) {
       case 'BOOK_DRAGON':
         return state.map((dragon) =>
           dragon.id === action.payload.dragonId
             ? { ...dragon, reserved: action.payload.reserved }
             : dragon
         );
       default:
         return state;
    }
   };
 reducers: {
    reserveDragon: (state, action) => {
      const index = state.entities.findIndex(dragon => dragon.id === action.payload);
      state.entities[index].reserved = true;
    },
    cancelReservation: (state, action) => {
      const index = state.entities.findIndex(dragon => dragon.id === action.payload);
      state.entities[index].reserved = false;
    },
 },

 


 extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.entities = action.payload;
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
 },
});

export const { reserveDragon, cancelReservation } = dragonsSlice.actions;

export default dragonsSlice.reducer;