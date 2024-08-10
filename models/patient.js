const mongoose=require('mongoose');

const patientSchema=new mongoose.Schema({
    patient_name:{
        require:true,
        type:String
    },
    age:{
        type:Number,
        require:true
    },
    gender:{
        require:true,
        type:String
    },

    p_contact:{
        require:true,
        type:Number
    }
})
module.exports=mongoose.model('Patient',patientSchema) ;