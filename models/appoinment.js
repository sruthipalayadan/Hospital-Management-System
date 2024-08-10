const mongoose=require('mongoose');


const appoinmentSchema=new mongoose.Schema({
    patient_name:{
        require:true,
        type:String
    },
    doctor_name:{
        require:true,
        type:String
    },
    date:{
        require:true,
        type:Date
    }
})
module.exports=mongoose.model('Appoinment',appoinmentSchema) ;