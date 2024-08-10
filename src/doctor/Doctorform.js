import React, { useState,useEffect } from 'react';
import styles from './Doctors.module.css';

const DoctorForm = ({ addDoctor,updateDoctor, currentDoctor }) => {
  const [name, setName] = useState('');
  const [speciality, setSpeciality] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if (currentDoctor) {
      setName(currentDoctor.doctor_name);
      setSpeciality(currentDoctor.speciality);
      setContact(currentDoctor.d_contact);
    } else {
      setName('');
      setSpeciality('');
      setContact('');
    }
  }, [currentDoctor]);




  const handleSubmit = (e) => {
    e.preventDefault();
     
    const doctor= { name, speciality, contact };

    if (currentDoctor) {
      updateDoctor({ ...doctor, _id: currentDoctor._id });
    } else {
      addDoctor(doctor);
    }
  };

  return (
    <form onSubmit={handleSubmit}  className={styles.form}>
      <h2>{currentDoctor ? 'Update Doctor' : 'Add New Doctor'}</h2>
      <div>
        
        <input type="text" placeholder='Name' className={styles.input} value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        
        <input type="text"  placeholder='Speciality'  className={styles.input} value={speciality} onChange={(e) => setSpeciality(e.target.value)} />
      </div>
      <div>
   
        <input type="text"  placeholder='Contact'  className={styles.input} value={contact} onChange={(e) => setContact(e.target.value)} />
      </div>
      <button className={styles.button} type="submit">{currentDoctor ? 'Update' : 'Add '}</button>
    </form>
  );
};

export default DoctorForm;