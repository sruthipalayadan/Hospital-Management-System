import React, { useState,useEffect } from 'react';
import styles from './Appoinments.module.css';

const AppoinmentForm = ({ addAppoinment,updateAppoinment, currentAppoinment }) => {
  const [patientname, setPatientName] = useState('');
  const [doctorname, setDoctorName] = useState('');
  const [date, setDate] = useState('');



  useEffect(() => {
    if (currentAppoinment) {
      setPatientName(currentAppoinment.patient_name);
      setDoctorName(currentAppoinment.doctor_name);
      setDate(currentAppoinment.date);
    } else {
      setPatientName('');
      setDoctorName('');
      setDate('');
    }
  }, [currentAppoinment]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appoinment= { patientname, doctorname, date };

    if (currentAppoinment) {
      updateAppoinment({ ...appoinment, _id: currentAppoinment._id });
    } else {
      addAppoinment(appoinment);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className={styles.form}>
      <h2>{currentAppoinment ? 'Update Appoinment' : 'Add New Appoinment'}</h2>
      <div>
        
        <input type="text" placeholder='PatientName' className={styles.input} value={patientname} onChange={(e) => setPatientName(e.target.value)} />
      </div>
      <div>
        
        <input type="text"  placeholder='DoctorName'  className={styles.input} value={doctorname} onChange={(e) => setDoctorName(e.target.value)} />
      </div>
      <div>
   
        <input type="date"  placeholder='AppoinmentDate'  className={styles.input} value={date}  onChange={(e) => setDate(e.target.value)} />
      </div>
      <button className={styles.button} type="submit">{currentAppoinment ? 'Update ' : 'Add '}</button>
    </form>
  );
};

export default AppoinmentForm;