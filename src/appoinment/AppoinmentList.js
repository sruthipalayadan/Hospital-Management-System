import React from 'react';
import AppoinmentCard from './AppoinmentCard';

const AppoinmentList = ({ appoinments, deleteAppoinment,editAppoinment }) => {
  return (
    <div>
      <h2>Appoinments ({appoinments.length})</h2>
      {appoinments.map(appoinment => (
        <AppoinmentCard key={appoinment._id} appoinment={appoinment} deleteAppoinment={deleteAppoinment} editAppoinment={editAppoinment} />
      ))}
    </div>
  );
};

export default AppoinmentList;