// components/DragonsList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveDragon, cancelReservation } from '../features/counter/dragonSlice';

const DragonsList = () => {
 const dragons = useSelector(state => state.dragons.entities);
 const dispatch = useDispatch();

 const handleReserve = (id) => {
    dispatch(reserveDragon(id));
 };

 const handleCancel = (id) => {
    dispatch(cancelReservation(id));
 };

 return (
    <div>
      {dragons.map(dragon => (
        <div key={dragon.id}>
          <h2>{dragon.name}</h2>
          <button onClick={() => handleReserve(dragon.id)}>Reserve</button>
          <button onClick={() => handleCancel(dragon.id)}>Cancel</button>
        </div>
      ))}
    </div>
 );
};

export default DragonsList;