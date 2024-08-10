const patientRepositories=require('../repositories/patient');
const Patient=require('../models/patient');

const getAllPatient= async(req,res,next)=>{

    try{
        const patients= await patientRepositories.getAllPatient();
        res.status(200).json(patients);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    };
    


};
const getPatientById=async(req,res,next)=>{
    const id=req.params.id;
    try{
    const patient= await patientRepositories.getPatientById(id);
    res.status(200).json(patient);
    }
    catch(error)
    {
        res.status(404).json({message:error.message}); 
    };

};
const createPatient=async(req,res,next)=>{
    const {patient_name,age,gender,p_contact}=req.body;
    const newPatient=new Patient({
        patient_name:patient_name,
        age:age,
        gender:gender,
        p_contact:p_contact

    });
    try{
        const patient=await patientRepositories.createPatient(newPatient);
        res.status(200).json(patient);
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }

};
const updatePatient=async(req,res,next)=>
{
    const data=req.body;
    const id=req.params.id;
    try{
        const result=await patientRepositories.updatePatient(id,data);
        const patient= await patientRepositories.getPatientById(id);
        res.status(200).json(patient);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
const deletePatient=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const result=await patientRepositories.deletePatient(id);
        res.status(200).json({message:"sucessfully removed this patient"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};



module.exports={getAllPatient,getPatientById,createPatient,updatePatient,deletePatient};