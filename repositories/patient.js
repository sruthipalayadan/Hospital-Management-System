const Patient=require('../models/patient');


async function getAllPatient()
{
    const patients= await Patient.find();
    console.log(patients);
    return patients;
};
async function getPatientById(id)
{
    const patient=await Patient.findById(id);
    console.log(patient);
    return patient;
};

async function createPatient(newPatient)
{
    const saveData= await newPatient.save(); 
    return saveData; 
};

async function updatePatient(id,data)
{
    const result=await Patient.findByIdAndUpdate(id,data);
    return result;
};
async function deletePatient(id)
{
    const result=await Patient.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllPatient,
    getPatientById,
    createPatient,
    deletePatient,
    updatePatient
}


