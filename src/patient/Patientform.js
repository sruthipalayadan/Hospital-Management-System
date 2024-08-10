import React, { useState,useEffect } from 'react';
import styles from './Patientform.module.css';

const PatientForm = ({ addPatient ,updatePatient, currentPatient }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');


  useEffect(() => {
    if (currentPatient) {
      setName(currentPatient.patient_name);
      setAge(currentPatient.age);
      setGender(currentPatient.gender);
    } else {
      setName('');
      setAge('');
      setGender('');
    }
  }, [currentPatient]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const patient = { name, age, gender };

    if (currentPatient) {
      updatePatient({ ...patient, _id: currentPatient._id });
    } else {
      addPatient(patient);
    }
  };


  return (
    <form onSubmit={handleSubmit}  className={styles.form}>
      <h2> {currentPatient ? 'Update Patient' : 'Add Patient'}</h2>
      <div>
        
        <input type="text" placeholder='Name' className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        
        <input type="text"  placeholder='Age'  className={styles.input} value={age} onChange={(e) => setAge(e.target.value)} />
      </div>
      <div>
   
        <input type="text"  placeholder='Gender'  className={styles.input} value={gender} onChange={(e) => setGender(e.target.value)} />
      </div>
      <button className={styles.button} type="submit">
      {currentPatient ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default PatientForm;