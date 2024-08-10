import React, { useState, useEffect } from 'react';
import AppoinmentForm from './AppoinmentForm';
import AppoinmentList from './AppoinmentList';
import styles from './Appoinments.module.css';




function Appoinments() {
    const [appoinments, setAppoinments] = useState([]);
    const [currentAppoinment, setCurrentAppoinment] = useState(null);

    useEffect(() => {
      // Fetch appoinments from the API using Fetch API
      const fetchAppoinments = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/v1/appoinments');
          const data = await response.json();
          console.log('data:',data);
          setAppoinments (data);
        } catch (error) {
          console.error('Error fetching appoinments:', error);
        }
      };
    
      fetchAppoinments (); 
        
    }, []);
  
    const addAppoinment = (appoinment) => {
        const {patientname,doctorname,date}=appoinment;
        const newAppoinment={
            patient_name:patientname,
            doctor_name:doctorname,
            date:date
        }
      fetch('http://localhost:5000/api/v1/appoinments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAppoinment)
      })
      .then(response => {
        console.log("resApo:",response);
         return response.json();
         
            })
      .then(data => setAppoinments([...appoinments, data]))
      .catch(error => console.error('Error adding appoinments:', error));
      
    };
  
    const deleteAppoinment = (id) => {
      fetch(`http://localhost:5000/api/v1/appoinments/${id}`, {
        method: 'DELETE',
      })
      .then(() => setAppoinments(appoinments.filter(appoinment => appoinment._id !== id)))
      .catch(error => console.error('Error deleting appoinment:', error));
    };

    const updateAppoinment = (updatedAppoinment) => {
       console.log("UPappoi:",updatedAppoinment);
       const _id=updatedAppoinment._id;
       const patient_name=updatedAppoinment.patientname;
       const doctor_name=updatedAppoinment.doctorname;
       const date=updatedAppoinment.date;
  
      fetch(`http://localhost:5000/api/v1/appoinments/${_id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({patient_name, doctor_name,date}),
      })
        .then((response) =>{ 
          return response.json()
        })
        .then((data) => {
          console.log("appoinmentdata:",data);
          setAppoinments(appoinments.map((appoinment) => (appoinment._id === _id ? data : appoinment)));
          setCurrentAppoinment(null);
        })
        .catch((error) => console.error('Error updating appoinments:', error));
    };


    const handleEdit = (appoinment) => {
      setCurrentAppoinment(appoinment);
    };

  

    return ( 

        <div className={styles.container}>
        
        
          <div className={styles.col}>
            <AppoinmentForm addAppoinment={addAppoinment} updateAppoinment={updateAppoinment} currentAppoinment={currentAppoinment}/>
          </div>
          <div className={styles.col1}>
            <AppoinmentList appoinments={appoinments} deleteAppoinment={deleteAppoinment} editAppoinment={handleEdit} />
          
        </div>
      </div>




    );
}

export default Appoinments;