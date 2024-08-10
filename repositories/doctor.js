const Doctor=require('../models/doctor');


async function getAllDoctor()
{
    const doctors= await Doctor.find();
    console.log(doctors);
    return doctors;
};
async function getDoctorById(id)
{
    const doctor=await Doctor.findById(id);
    console.log(doctor);
    return doctor;
};

async function createDoctor(newDoctor)
{
    const saveData= await newDoctor.save(); 
    return saveData; 
};

async function updateDoctor(id,data)
{
    const result=await Doctor.findByIdAndUpdate(id,data);
    return result;
};
async function deleteDoctor(id)
{
    const result=await Doctor.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllDoctor,
    getDoctorById,
    createDoctor,
    deleteDoctor,
    updateDoctor
}


