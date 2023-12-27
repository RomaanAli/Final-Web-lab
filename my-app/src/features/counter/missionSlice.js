import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 missions: [
    { id: '1', name: 'Thalcom', description: 'Description 1', joined: false },
    { id: '2', name: 'Tuistar', description: 'Description 2', joined: false },
    { id: '3', name: 'Danger', description: 'Description 3', joined: false },
 ],
};

const missionSlice = createSlice({
 name: 'mission',
 initialState,
 reducers: {
    joinMission: (state, action) => {
      const mission = state.missions.find(mission => mission.id === action.payload);
      if (mission) {
        mission.joined = true;
      }
    },
    leaveMission: (state, action) => {
      const mission = state.missions.find(mission => mission.id === action.payload);
      if (mission) {
        mission.joined = false;
      }
    },
 },
});

export const { joinMission, leaveMission } = missionSlice.actions;
export default missionSlice.reducer;