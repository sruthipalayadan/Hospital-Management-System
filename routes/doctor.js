const express=require('express');
const router=express.Router();
const doctorController=require('../controllers/doctor');


router.get('/',doctorController.getAllDoctor);
router.get('/:id',doctorController.getDoctorById);
router.post('/',doctorController.createDoctor);
router.put('/:id',doctorController.updateDoctor);
router.delete('/:id',doctorController.deleteDoctor);


module.exports=router;