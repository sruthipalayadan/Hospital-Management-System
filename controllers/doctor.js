const doctorRepositories=require('../repositories/doctor');
const Doctor=require('../models/doctor');

const getAllDoctor= async(req,res,next)=>{

    try{
        const doctors= await doctorRepositories.getAllDoctor();
        res.status(200).json(doctors);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    };
    


};
const getDoctorById=async(req,res,next)=>{
    const id=req.params.id;
    try{
    const doctor= await doctorRepositories.getDoctorById(id);
    res.status(200).json(doctor);
    }
    catch(error)
    {
        res.status(404).json({message:error.message}); 
    };

};
const createDoctor=async(req,res,next)=>{
    const {doctor_name,speciality,d_contact}=req.body;
    const newDoctor=new Doctor({
        doctor_name:doctor_name,
        speciality:speciality,
        d_contact:d_contact

    });
    try{
        const doctor=await doctorRepositories.createDoctor(newDoctor);
        res.status(200).json(doctor);
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }

};
const updateDoctor=async(req,res,next)=>
{
    const data=req.body;
    const id=req.params.id;
    try{
        const result=await doctorRepositories.updateDoctor(id,data);
        const doctor= await doctorRepositories.getDoctorById(id);
        res.status(200).json(doctor);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
const deleteDoctor=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const result=await doctorRepositories.deleteDoctor(id);
        res.status(200).json({message:"sucessfully removed this doctor details"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};



module.exports={getAllDoctor,getDoctorById,createDoctor,updateDoctor,deleteDoctor};