const mongoose=require('mongoose');

const doctorSchema=new mongoose.Schema({
    doctor_name:{
        require:true,
        type:String
    },
    speciality:{
        type:String,
        require:true
    },

    d_contact:{
        require:true,
        type:Number
    }
})
module.exports=mongoose.model('Doctor',doctorSchema) ;