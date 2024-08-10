import React from 'react';
import styles from './Doctors.module.css';

const DoctorCard = ({ doctor, deleteDoctor ,editDoctor}) => {
  return (
    <div className={styles.box}>
     
      <h3>{doctor.doctor_name}</h3>
      <span><div>Speciality:{doctor.speciality}</div>
      <div>Contact: {doctor.d_contact}</div></span>

      <div className={styles.b_align}>
      <button  className={styles.dbutton1} onClick={() => deleteDoctor(doctor._id)}>Delete</button>
      <button  className={styles.dbutton2} onClick={() => editDoctor(doctor)}>Edit</button>

      </div> 
    </div>
  );
};
export default DoctorCard;
