import React, { useState, useEffect } from 'react';
import PatientForm from './Patientform';
import PatientList from './PatientList';
import styles from './Patientform.module.css';




function Patients() {
    const [patients, setPatients] = useState([]);
    const [currentPatient, setCurrentPatient] = useState(null);

    useEffect(() => {
      // Fetch patients from the API using Fetch API
      const fetchPatients = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/v1/patients');
          const data = await response.json();
          console.log('data:',data);
          setPatients(data);
        } catch (error) {
          console.error('Error fetching patients:', error);
        }
      };
    
      fetchPatients(); 
        
    }, []);
  
    const addPatient = (patient) => {
        const {name,age,gender}=patient;
        const newPatient={
            patient_name:name,
            age:age,
            gender:gender
        }
      fetch('http://localhost:5000/api/v1/patients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPatient)
      })
      .then(response => response.json())
      .then(data => setPatients([...patients, data]))
      .catch(error => console.error('Error adding patient:', error));
    };
  
    const deletePatient = (id) => {
      fetch(`http://localhost:5000/api/v1/patients/${id}`, {
        method: 'DELETE',
      })
      .then(() => setPatients(patients.filter(patient => patient._id !== id)))
      .catch(error => console.error('Error deleting patient:', error));
    };


    const updatePatient = (updatedPatient) => {
      const { _id, patient_name, age, gender } = updatedPatient;
  
      fetch(`http://localhost:5000/api/v1/patients/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_name, age, gender }),
      })
        .then((response) => response.json())
        .then((data) => {
          setPatients(patients.map((patient) => (patient._id === _id ? data : patient)));
          setCurrentPatient(null);
        })
        .catch((error) => console.error('Error updating patient:', error));
    };



  

    const handleEdit = (patient) => {
      setCurrentPatient(patient);
    };


    return ( 

        <div className={styles.container}>
        
        
          <div className={styles.col}>
            <PatientForm addPatient={addPatient} updatePatient={updatePatient} currentPatient={currentPatient} />
          </div>
          <div className={styles.col1}>
            <PatientList patients={patients} deletePatient={deletePatient} editPatient={handleEdit} />
          
        </div>
      </div>




    );
}

export default Patients;