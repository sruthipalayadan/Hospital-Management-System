const  express=require('express');
const dotenv=require('dotenv');
const mongoose=require('mongoose');
dotenv.config({path:'./config/config.env'});
var cors=require('cors');




const DB_CONNECT_STRING=process.env.DB_URL;
const PORT=process.env.PORT||9000;

const app=express();
app.use(express.json());
app.use(cors());


mongoose.connect(DB_CONNECT_STRING);
const database=mongoose.connection;
database.on('error',(error)=>{
    console.log("error connecting db",error);
});
database.once('connected',()=>{
    console.log("db connected sucessfully");
});

const doctorRouter=require("./routes/doctor");
app.use('/api/v1/doctors',doctorRouter);

const patientRouter=require("./routes/patient");
app.use('/api/v1/patients',patientRouter);

const appoinmentRouter=require("./routes/appoinment");
app.use('/api/v1/appoinments',appoinmentRouter);


app.listen(PORT,()=>{
    console.log(`Listening on  ${PORT}`);
})

