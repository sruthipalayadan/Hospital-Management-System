import React from 'react';
import styles from './Appoinments.module.css';

const AppoinmentCard = ({ appoinment, deleteAppoinment ,editAppoinment}) => {

    const formattedDate = new Date(appoinment.date).toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });


  return (
    <div className={styles.box}>
     
      <h4>Patient's Name:{appoinment.patient_name}</h4>
      <span><div>Doctor's Name:{appoinment.doctor_name}</div>
      <div>Appoinment Date: {formattedDate}</div></span>
      <div className={styles.b_align}>
      <button  className={styles.dbutton1} onClick={() => deleteAppoinment(appoinment._id)}>Delete</button>
      <button  className={styles.dbutton2} onClick={() => editAppoinment(appoinment)}>Edit</button>
      </div>
    </div>
  );
};
export default AppoinmentCard;
