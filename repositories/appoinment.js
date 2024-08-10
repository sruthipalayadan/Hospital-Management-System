const Appoinment=require('../models/appoinment');


async function getAllAppoinment()
{
    const appoinments= await Appoinment.find();
    console.log(appoinments);
    return appoinments;
};
async function getAppoinmentById(id)
{
    const appoinment=await Appoinment.findById(id);
    console.log(appoinment);
    return appoinment;
};

async function createAppoinment(newAppoinment)
{
    const saveData= await newAppoinment.save(); 
    return saveData; 
};

async function updateAppoinment(id,data)
{
    const result=await Appoinment.findByIdAndUpdate(id,data);
    return result;
};
async function deleteAppoinment(id)
{
    const result=await Appoinment.findByIdAndDelete(id);
    return   result;
};
module.exports={
    getAllAppoinment,
    getAppoinmentById,
    createAppoinment,
    deleteAppoinment,
    updateAppoinment
}


