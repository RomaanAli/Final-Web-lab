import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function MissionsPage() {
 const dispatch = useDispatch();
 const missions = useSelector(state => state.mission.missions);

 const handleJoinMission = (id) => {
    dispatch(joinMission(id));
 };

 const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
 };

 return (
    <div>
      <h2>Missions</h2>
      <ul>
        {missions.map(mission => (
          <li key={mission.id}>
            {mission.name} - {mission.description}
            <button onClick={() => mission.joined ? handleLeaveMission(mission.id) : handleJoinMission(mission.id)}>
              {mission.joined ? 'Leave Mission' : 'Join Mission'}
            </button>
          </li>
        ))}
      </ul>
    </div>
 );
}

export default MissionsPage;