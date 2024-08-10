import React, { useState, useEffect } from 'react';
import DoctorForm from './Doctorform';
import DoctorList from './DoctorList';
import styles from './Doctors.module.css';




function Doctors() {
    const [doctors, setDoctors] = useState([]);
    const [currentDoctor, setCurrentDoctor] = useState(null);

    useEffect(() => {
      // Fetch doctors from the API using Fetch API
      const fetchDoctors = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/v1/doctors');
          const data = await response.json();
          console.log('data:',data);
          console.log('res:',response);
          setDoctors(data);
        } catch (error) {
          console.error('Error fetching doctors:', error);
        }
      };
    
      fetchDoctors(); 
        
    }, []);
  
    const addDoctor = (doctor) => {
      console.log("doctoradd",doctor);
        const {name,speciality,contact}=doctor;
        const newDoctor={
            doctor_name:name,
            speciality:speciality,
            d_contact:contact
        }
      fetch('http://localhost:5000/api/v1/doctors', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDoctor)
      })
      .then(response => response.json())
      .then(data => setDoctors([...doctors, data]))
      .catch(error => console.error('Error adding doctor:', error));
    };
  
    const deleteDoctor = (id) => {
      fetch(`http://localhost:5000/api/v1/doctors/${id}`, {
        method: 'DELETE',
      })
      .then(() => setDoctors(doctors.filter(doctor => doctor._id !== id)))
      .catch(error => console.error('Error deleting doctor:', error));
    };

    const updateDoctor = (updatedDoctor) => {
      //const { _id, name, speciality, contact } = updatedDoctor;
       const _id=updatedDoctor._id;
       const doctor_name=updatedDoctor.name;
       const speciality=updatedDoctor.speciality;
       const d_contact=updatedDoctor.contact;

      console.log('updoc:',updatedDoctor);
  
      fetch(`http://localhost:5000/api/v1/doctors/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ doctor_name, speciality, d_contact}),
      })
        .then((response) =>{ 
          console.log("upres:",response);
          return response.json()
        })
        .then((data) => {
          setDoctors(doctors.map((doctor) => (doctor._id === _id ? data : doctor)));
          setCurrentDoctor(null);
        })
        .catch((error) => console.error('Error updating doctor:', error));
    };



  

    const handleEdit = (doctor) => {
      setCurrentDoctor(doctor);
    };


  

    return ( 

        <div className={styles.container}>
        
        
          <div className={styles.col}>
            <DoctorForm addDoctor={addDoctor} updateDoctor={updateDoctor} currentDoctor={currentDoctor} />
          </div>
          <div className={styles.col1}>
            <DoctorList doctors={doctors} deleteDoctor={deleteDoctor} editDoctor={handleEdit}/>
          
        </div>
      </div>




    );
}

export default Doctors;