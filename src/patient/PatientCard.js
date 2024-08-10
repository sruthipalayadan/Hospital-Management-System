import React from 'react';
import styles from './Patientform.module.css';

const PatientCard = ({ patient, deletePatient,editPatient }) => {
  return (
    <div className={styles.box}>
     
      <h3>{patient.patient_name}</h3>
      <span><div>Age:{patient.age}</div>
      <div>Gender: {patient.gender}</div></span>
      <div className={styles.b_align}>
      <button  className={styles.dbutton1} onClick={() => deletePatient(patient._id)}>Delete</button>
      <button  className={styles.dbutton2} onClick={() => editPatient(patient)}>Edit</button>
      </div>
    </div>
  );
};
export default PatientCard;
