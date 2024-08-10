import React from 'react';
import PatientCard from './PatientCard';

const PatientList = ({ patients, deletePatient,editPatient }) => {
  return (
    <div>
      <h2>Patients ({patients.length})</h2>
      {patients.map(patient => (
        <PatientCard key={patient._id} patient={patient} deletePatient={deletePatient} editPatient={editPatient} />
      ))}
    </div>
  );
};

export default PatientList;