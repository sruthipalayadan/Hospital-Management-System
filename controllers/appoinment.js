const appoinmentRepositories=require('../repositories/appoinment');
const Appoinment=require('../models/appoinment');

const getAllAppoinment= async(req,res,next)=>{

    try{
        const appoinments= await appoinmentRepositories.getAllAppoinment();
        res.status(200).json(appoinments);

    }
    catch(error)
    {
        res.status(404).json({message:error.message});
    };
    


};
const getAppoinmentById=async(req,res,next)=>{
    const id=req.params.id;
    try{
    const appoinment= await appoinmentRepositories.getAppoinmentById(id);
    res.status(200).json(appoinment);
    }
    catch(error)
    {
        res.status(404).json({message:error.message}); 
    };

};
const createAppoinment=async(req,res,next)=>{
    const {doctor_name,patient_name,date}=req.body;
    const newAppoinment=new Appoinment({
        doctor_name:doctor_name,
        patient_name:patient_name,
        date:date

    });
    try{
        const appoinment=await appoinmentRepositories.createAppoinment(newAppoinment);
        res.status(200).json(appoinment);
    }
    catch(error)
    {
        res.status(400).json({message:error.message});
    }

};
const updateAppoinment=async(req,res,next)=>
{
    const data=req.body;
    const id=req.params.id;
    try{
        const result=await appoinmentRepositories.updateAppoinment(id,data);
        const appoinment= await appoinmentRepositories.getAppoinmentById(id);
        res.status(200).json(appoinment);
    }
    catch(error)
    {
        res.status(500).json({message:error.message});
    }
};
const deleteAppoinment=async(req,res,next)=>{
    const id=req.params.id;
    try{
        const result=await appoinmentRepositories.deleteAppoinment(id);
        res.status(200).json({message:"sucessfully removed this appoinment"});
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};



module.exports={getAllAppoinment,getAppoinmentById,createAppoinment,updateAppoinment,deleteAppoinment};