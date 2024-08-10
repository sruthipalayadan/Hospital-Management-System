import React from 'react';
import DoctorCard from './DoctorCard';

const DoctorList = ({ doctors, deleteDoctor ,editDoctor}) => {
  return (
    <div>
      <h2>Doctors ({doctors.length})</h2>
      {doctors.map(doctor => (
        <DoctorCard key={doctor._id} doctor={doctor} deleteDoctor={deleteDoctor} editDoctor={editDoctor} />
      ))}
    </div>
  );
};

export default DoctorList;